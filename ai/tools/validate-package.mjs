#!/usr/bin/env node
// Structural integrity of the package. No FHIR, no DAK, no network.
//
// Checks that every cross-reference resolves, that the role graph is acyclic, that every SOP page
// is reachable from some skill, and that registry.json is current. A reference that does not
// resolve is worse than a missing one: an agent following it gets a confident dead end.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { buildRegistry, collectSkills, collectExperts, AI_ROOT, REPO_ROOT } from "./build-registry.mjs";

const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);
const warn = (m) => warnings.push(m);
const rel = (p) => relative(REPO_ROOT, p).replace(/\\/g, "/");

const reg = buildRegistry();
const roleIds = new Set(reg.roles.map((r) => r.id));
const capIds = new Set(reg.capabilities.map((c) => c.id));
const reqIds = new Set(reg.requirements.map((r) => r.id));
const stmtKeys = new Set(
  reg.requirements.flatMap((r) => r.statements.map((s) => `${r.id}#${s.key}`)));
const skills = collectSkills();
const skillIds = new Set(skills.map((s) => s.id));

// ---------------------------------------------------------------- roles

for (const r of reg.roles) {
  for (const p of r.inherits) if (!roleIds.has(p)) fail(`role ${r.id}: inherits unknown role "${p}"`);
  // capabilities are tools a runtime can probe for, so an unresolvable one is a dead reference.
  // permissions are authority a person carries and are deliberately free-form — no probe exists.
  for (const c of r.capabilities) if (!capIds.has(c)) {
    fail(`role ${r.id}: capability "${c}" is not in registry/capabilities. ` +
         `If it is authority rather than tooling, it belongs in permissions.`);
  }
}

// Cycle detection. An inherits cycle makes capability resolution non-terminating for any consumer
// that walks it, so this is an error rather than a warning.
{
  const state = new Map();
  const byId = new Map(reg.roles.map((r) => [r.id, r]));
  const walk = (id, trail) => {
    const s = state.get(id);
    if (s === "done") return;
    if (s === "open") { fail(`role inheritance cycle: ${[...trail, id].join(" -> ")}`); return; }
    state.set(id, "open");
    for (const p of byId.get(id)?.inherits ?? []) if (byId.has(p)) walk(p, [...trail, id]);
    state.set(id, "done");
  };
  for (const r of reg.roles) walk(r.id, []);
}

for (const c of reg.capabilities) {
  for (const d of c.requires ?? []) if (!capIds.has(d)) fail(`capability ${c.id}: requires unknown "${d}"`);
}

// ---------------------------------------------------------- requirements

for (const r of reg.requirements) {
  const keys = new Set(r.statements.map((s) => s.key));
  for (const d of r.derivedFrom ?? []) if (!reqIds.has(d)) fail(`${r.id}: derivedFrom unknown "${d}"`);
  for (const a of r.actors) if (!roleIds.has(a)) fail(`${r.id}: unknown actor "${a}"`);
  for (const s of r.statements) {
    for (const a of s.actors ?? []) if (!roleIds.has(a)) fail(`${r.id}#${s.key}: unknown actor "${a}"`);
    for (const d of s.dependsOn ?? []) if (!keys.has(d)) fail(`${r.id}#${s.key}: dependsOn unknown key "${d}"`);
    for (const sb of s.satisfiedBy ?? []) {
      if (sb.kind === "skill" && !skillIds.has(sb.ref)) fail(`${r.id}#${s.key}: satisfiedBy unknown skill "${sb.ref}"`);
      if (sb.kind === "capability" && !capIds.has(sb.ref)) fail(`${r.id}#${s.key}: satisfiedBy unknown capability "${sb.ref}"`);
      if (sb.kind === "requirement-statement" && !stmtKeys.has(sb.ref)) fail(`${r.id}#${s.key}: satisfiedBy unknown statement "${sb.ref}"`);
    }
  }
}

// --------------------------------------------------------------- experts

for (const e of collectExperts()) {
  const d = e.data;
  if (!roleIds.has(d.role)) fail(`expert ${d.id}: unknown role "${d.role}"`);
  for (const g of d.gates ?? []) {
    if (![...stmtKeys].some((k) => k.endsWith(`#${g}`))) {
      fail(`expert ${d.id}: gate "${g}" matches no requirement statement`);
    }
  }
  if (!skills.some((s) => s.data.expert === d.id)) warn(`expert ${d.id}: no skills reference it`);
}

// ---------------------------------------------------------------- skills

for (const s of skills) {
  const d = s.data;
  const at = s.path;
  for (const f of ["id", "name", "description", "expert", "determinism", "roles", "sop", "status"]) {
    if (d[f] === undefined) fail(`${at}: missing required frontmatter field "${f}"`);
  }
  if (d.id !== s.id) fail(`${at}: frontmatter id "${d.id}" does not match its folder "${s.id}"`);
  if (!["deterministic", "judgment"].includes(d.determinism)) {
    fail(`${at}: determinism must be deterministic or judgment, got "${d.determinism}"`);
  }
  for (const r of d.roles ?? []) if (!roleIds.has(r)) fail(`${at}: unknown role "${r}"`);
  for (const c of d.requiredCapabilities ?? []) {
    if (!capIds.has(c.id)) fail(`${at}: unknown capability "${c.id}"`);
    if (!["fail", "warn", "skip", "fallback"].includes(c.degradation)) {
      fail(`${at}: capability ${c.id} has invalid degradation "${c.degradation}"`);
    }
    if (c.degradation === "fallback" && !capIds.has(c.fallbackId)) {
      fail(`${at}: capability ${c.id} declares fallback but fallbackId does not resolve`);
    }
  }
  for (const q of d.satisfies ?? []) {
    if (!reqIds.has(q) && !stmtKeys.has(q)) fail(`${at}: satisfies unresolvable "${q}"`);
  }
  for (const p of d.routingPatterns ?? []) {
    try { new RegExp(p); } catch { fail(`${at}: routingPattern is not a valid regex: ${p}`); }
  }
  for (const f of ["inputSchema", "outputSchema"]) {
    if (!d[f]) { fail(`${at}: missing ${f}`); continue; }
    const p = join(s.dir, d[f]);
    if (!existsSync(p)) { fail(`${at}: ${f} does not exist: ${d[f]}`); continue; }
    try { JSON.parse(readFileSync(p, "utf8")); }
    catch (e) { fail(`${rel(p)}: invalid JSON — ${e.message}`); }
  }
  // The SOP page is the single source of truth for procedure. A skill pointing at a page that does
  // not exist leaves an agent with a contract and no instructions.
  if (!d.sop) fail(`${at}: missing sop — every skill must name the SOP page holding its procedure`);
  else if (!existsSync(join(REPO_ROOT, d.sop))) fail(`${at}: sop path does not exist: ${d.sop}`);
  for (const a of d.alsoRead ?? []) {
    if (!existsSync(join(REPO_ROOT, a))) fail(`${at}: alsoRead path does not exist: ${a}`);
  }
  if (!["specified", "placeholder"].includes(d.status)) {
    fail(`${at}: status must be specified or placeholder, got "${d.status}"`);
  }
  if (d.status === "specified" && !(d.satisfies ?? []).length) {
    fail(`${at}: a specified contract must name the requirement it is checked against`);
  }
}

// ------------------------------------------------ SOP page coverage

{
  const pages = readdirSync(join(REPO_ROOT, "input", "pagecontent"))
    .filter((f) => /^l3_.*\.md$/.test(f));
  // A page may back several skills — authoring and validation share one procedure — but a page
  // with no skill is guidance no agent can reach.
  for (const page of pages) {
    const path = `input/pagecontent/${page}`;
    if (!skills.some((s) => s.data.sop === path)) fail(`SOP page ${page} has no skill`);
  }
}

// ------------------------------------------------------- generated files

{
  const target = join(AI_ROOT, "registry", "registry.json");
  if (!existsSync(target)) fail("registry.json is missing. Run: node ai/tools/build-registry.mjs");
  else {
    const norm = (o) => JSON.stringify({ ...o, generatedFrom: "" }, null, 2);
    if (norm(JSON.parse(readFileSync(target, "utf8"))) !== norm(reg)) {
      fail("registry.json is stale. Run: node ai/tools/build-registry.mjs");
    }
  }

}

// ------------------------------------------------------- common schemas

const commonIds = new Set();
for (const f of readdirSync(join(AI_ROOT, "schemas", "common"))) {
  if (!f.endsWith(".json")) continue;
  const p = join(AI_ROOT, "schemas", "common", f);
  try {
    const s = JSON.parse(readFileSync(p, "utf8"));
    if (s.$id) commonIds.add(s.$id);
    else fail(`${rel(p)}: common schema must declare $id so skill schemas can reference it`);
  } catch (e) { fail(`${rel(p)}: invalid JSON — ${e.message}`); }
}

// Every external $ref must be an absolute $id of a common schema. A relative ref looks correct and
// is not: a schema declaring an absolute $id resolves relative refs against that URL, not against
// the file path, so "../../../schemas/common/flag.schema.json" silently resolves to nothing.
{
  const refs = (node, out = []) => {
    if (node && typeof node === "object") {
      for (const [k, v] of Object.entries(node)) {
        if (k === "$ref" && typeof v === "string") out.push(v);
        else refs(v, out);
      }
    }
    return out;
  };
  for (const s of skills) {
    for (const f of ["inputSchema", "outputSchema"]) {
      const p = join(s.dir, s.data[f] ?? "");
      if (!s.data[f] || !existsSync(p)) continue;
      let doc;
      try { doc = JSON.parse(readFileSync(p, "utf8")); } catch { continue; }
      for (const r of refs(doc)) {
        if (r.startsWith("#")) continue;
        if (commonIds.has(r)) continue;
        fail(`${rel(p)}: $ref "${r}" resolves to nothing. ` +
             `Use the absolute $id of a schema in ai/schemas/common, not a relative path.`);
      }
    }
  }
}

// ---------------------------------------------------------------- report

const specified = skills.filter((s) => s.data.status === "specified").length;
console.log(
  `${skills.length} skills (${specified} specified, ${skills.length - specified} placeholder), ` +
  `${reg.roles.length} roles, ${reg.capabilities.length} capabilities, ` +
  `${reg.requirements.length} requirements, ${reg.experts.length} experts`);

for (const w of warnings) console.warn(`warning: ${w}`);
for (const e of errors) console.error(`error: ${e}`);

if (errors.length) {
  console.error(`\n${errors.length} error(s).`);
  process.exit(1);
}
console.log(warnings.length ? `\nok, with ${warnings.length} warning(s).` : "\nok.");
