#!/usr/bin/env node
// Builds ai/registry/registry.json, the index an agent loads first.
//
// The index is generated and committed. It has to be committed because the IG's CI delegates the
// whole build to smart-base and runs no local step, so nothing regenerates on push. Run with
// --check to fail when the committed copy is stale.

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

// tools/ sits one level under ai/, the same as spine/ did before these scripts moved out of it.
export const AI_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const REPO_ROOT = join(AI_ROOT, "..");

/**
 * Parse the YAML frontmatter subset used by SKILL.md and EXPERT.md.
 *
 * Deliberately narrow: scalars, inline arrays, block lists of scalars, and block lists of inline
 * objects. Anything outside that throws rather than being silently mis-parsed — a frontmatter
 * field that quietly parses to the wrong thing is worse than one that fails loudly, because
 * `roles` and `determinism` gate behaviour.
 */
export function parseFrontmatter(text, source = "<string>") {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(text);
  if (!m) throw new Error(`${source}: no frontmatter block`);
  const [, raw, body] = m;

  const scalar = (v) => {
    v = v.trim();
    if (v === "") return "";
    if (v === "true") return true;
    if (v === "false") return false;
    if (/^-?\d+$/.test(v)) return Number(v);
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      return v.slice(1, -1);
    }
    return v;
  };
  const inlineObject = (v) => {
    const inner = v.trim().slice(1, -1);
    const out = {};
    for (const pair of inner.split(",")) {
      if (!pair.trim()) continue;
      const i = pair.indexOf(":");
      if (i === -1) throw new Error(`${source}: malformed inline object entry "${pair.trim()}"`);
      out[pair.slice(0, i).trim()] = scalar(pair.slice(i + 1));
    }
    return out;
  };
  const inlineArray = (v) => {
    const inner = v.trim().slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(",").map(scalar);
  };

  const data = {};
  const lines = raw.split(/\r?\n/);
  let key = null;
  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith("#")) continue;

    if (/^\s+-\s/.test(line)) {
      if (!key) throw new Error(`${source}: list item before any key`);
      const item = line.replace(/^\s+-\s/, "").trim();
      if (!Array.isArray(data[key])) data[key] = [];
      data[key].push(item.startsWith("{") ? inlineObject(item) : scalar(item));
      continue;
    }

    const km = /^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/.exec(line);
    if (!km) throw new Error(`${source}: cannot parse frontmatter line: ${line}`);
    key = km[1];
    const value = km[2].trim();
    if (value === "") data[key] = [];
    else if (value.startsWith("[")) data[key] = inlineArray(value);
    else data[key] = scalar(value);
  }
  return { data, body };
}

const readJson = (p) => JSON.parse(readFileSync(p, "utf8"));
const jsonFiles = (dir) =>
  existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".json")).sort() : [];
const rel = (p) => relative(REPO_ROOT, p).replace(/\\/g, "/");

/** Every SKILL.md under ai/skills, as { id, path, data }. */
export function collectSkills() {
  const root = join(AI_ROOT, "skills");
  const out = [];
  for (const level of readdirSync(root).sort()) {
    const levelDir = join(root, level);
    for (const slug of readdirSync(levelDir).sort()) {
      const file = join(levelDir, slug, "SKILL.md");
      if (!existsSync(file)) continue;
      const { data } = parseFrontmatter(readFileSync(file, "utf8"), rel(file));
      out.push({ id: `${level}/${slug}`, path: rel(file), dir: join(levelDir, slug), data });
    }
  }
  return out;
}

export function collectExperts() {
  const root = join(AI_ROOT, "experts");
  return readdirSync(root).sort().flatMap((slug) => {
    const file = join(root, slug, "EXPERT.md");
    if (!existsSync(file)) return [];
    const { data } = parseFrontmatter(readFileSync(file, "utf8"), rel(file));
    return [{ slug, path: rel(file), data }];
  });
}

export function buildRegistry() {
  const reg = join(AI_ROOT, "registry");
  const roles = jsonFiles(join(reg, "roles")).map((f) => readJson(join(reg, "roles", f)));
  const capabilities = jsonFiles(join(reg, "capabilities")).map((f) =>
    readJson(join(reg, "capabilities", f)));
  const requirements = jsonFiles(join(reg, "requirements")).map((f) =>
    readJson(join(reg, "requirements", f)));

  const skills = collectSkills();

  const experts = collectExperts().map(({ slug, path, data }) => ({
    id: data.id ?? slug,
    name: data.name ?? slug,
    path,
    role: data.role ?? slug,
    skills: skills.filter((s) => s.data.expert === (data.id ?? slug)).map((s) => s.id),
    gates: data.gates ?? [],
  }));

  let generatedFrom = "unknown";
  try {
    generatedFrom = execSync("git rev-parse HEAD", { cwd: REPO_ROOT }).toString().trim();
  } catch { /* not a git checkout, or git unavailable — informational field only */ }

  return {
    schemaVersion: "1.0",
    repository: "WorldHealthOrganization/smart-ig-starter-kit",
    generatedFrom,
    roles: roles.map(({ $schema, ...r }) => r),
    capabilities: capabilities.map(({ $schema, ...c }) => c),
    requirements: requirements.map(({ $schema, ...r }) => r),
    experts,
    skills: skills.map(({ id, path, data }) => ({
      id,
      name: data.name,
      description: data.description,
      path,
      expert: data.expert,
      determinism: data.determinism,
      roles: data.roles ?? [],
      lifecycleStages: data.lifecycleStages ?? [],
      satisfies: data.satisfies ?? [],
      routingPatterns: data.routingPatterns ?? [],
      inputSchema: data.inputSchema,
      outputSchema: data.outputSchema,
      sop: data.sop,
      ...(data.alsoRead ? { alsoRead: data.alsoRead } : {}),
      status: data.status,
    })),
  };
}

function main() {
  const check = process.argv.includes("--check");
  const target = join(AI_ROOT, "registry", "registry.json");
  const built = buildRegistry();

  // generatedFrom is informational and moves with every commit, so comparing it would make the
  // check fail on every push for no reason.
  const normalise = (o) => JSON.stringify({ ...o, generatedFrom: "" }, null, 2);
  const next = JSON.stringify(built, null, 2) + "\n";

  if (check) {
    if (!existsSync(target)) {
      console.error("registry.json is missing. Run: node ai/tools/build-registry.mjs");
      process.exit(1);
    }
    if (normalise(readJson(target)) !== normalise(built)) {
      console.error("registry.json is stale. Run: node ai/tools/build-registry.mjs");
      process.exit(1);
    }
    console.log(`registry.json current — ${built.skills.length} skills, ${built.roles.length} roles`);
    return;
  }

  writeFileSync(target, next, "utf8");
  console.log(
    `wrote ${rel(target)} — ${built.skills.length} skills, ${built.roles.length} roles, ` +
    `${built.capabilities.length} capabilities, ${built.requirements.length} requirements`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
