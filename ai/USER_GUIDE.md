# User guide

How to load this package into a tool, and what a tool has to do to claim it runs it.

The package is plain markdown and JSON in a git repository. **Nothing needs to be installed or
built to read it.** The build tooling exists only to keep generated files current.

---

## Get the package

```bash
git clone https://github.com/WorldHealthOrganization/smart-ig-starter-kit.git
```

Only the `ai/` directory is needed. If you want it alone:

```bash
git clone --filter=blob:none --sparse https://github.com/WorldHealthOrganization/smart-ig-starter-kit.git
cd smart-ig-starter-kit && git sparse-checkout set ai
```

Pin to a tag rather than tracking `main` if you need reproducibility — the package versions with
the Implementation Guide.

---

## Load path 1 — any agent, no tooling

The general case, and the one the package is designed around.

1. Read **`ai/registry/registry.json`**. It is the index: every skill, role, capability,
   requirement and expert, with paths. One file, no directory walking.
2. Read **`ai/METHODOLOGY.md`** once per session. It is the rule set every skill inherits.
3. Read the **expert** you are acting as, from `ai/experts/<expert>/EXPERT.md`.
4. Read the **skill** you need — `SKILL.md` plus its `input.schema.json` and `output.schema.json`.

Do not preload every skill. `registry.json` carries each skill's `description` and
`routingPatterns` so you can select without reading bodies.

`ai/AGENTS.md` is the short form of this, written for the agent rather than about it.

---

## Load path 2 — Claude Code and Agent Skills

The `SKILL.md` frontmatter is already skill-shaped. Point a project at the tree:

```bash
ln -s ../smart-ig-starter-kit/ai/skills .claude/skills/smart-guidelines
```

Or copy it, if symlinks are awkward on your platform:

```bash
cp -r smart-ig-starter-kit/ai/skills/. .claude/skills/
```

Skills carry fields beyond the base Agent Skills contract — `roles`, `requiredCapabilities`,
`satisfies`, `determinism`. Harnesses that do not understand them ignore them; the prose body still
works standalone. To enforce them, use load path 3 or implement the checks yourself against
`ai/schemas/common/skill-frontmatter.schema.json`.

---

## Load path 3 — folio-assistant and MCP

This is the path that supplies an actual runtime for the operations in
[`spine/INTERFACE.md`](spine/INTERFACE.md).

Register the repository as a reference package pinned by ref, then use the MCP server's
`skill_list` and `skill_fetch` to serve skills from it. The registry maps onto folio's own
concepts directly:

| This package | folio-assistant |
|---|---|
| `registry/roles/*.json` | `.claude/skills/actors/*.json` — `ActorDefinition` |
| `registry/capabilities/*.json` | `.claude/skills/capabilities/*.json` — `CapabilityDefinition` |
| `registry/requirements/*.json` | `.claude/skills/requirements/*.json` — FHIR R5 `Requirements` shape |
| `skills/**/SKILL.md` frontmatter | `.claude/skills/local/<skill>.json` — `SkillDefinition` |
| `skills/**/{input,output}.schema.json` | `schemas/skills/<skill>/{input,output}.schema.json` |
| `schemas/common/audit-entry.schema.json` | `schemas/block-qa-schema/schema/block-qa.schema.json` |

The role definitions carry `meta.smartBaseAnalog` pointing at `SGAuthoring.Persona.*`, so the two
registries line up without a translation table.

---

## Load path 4 — a person

Read [`ai/README.md`](README.md), then the procedures as published in the Implementation Guide.
They are the same words: the IG page renders the skill body through a Liquid include, so there is
no second copy to fall out of date.

---

## Working with the package

### Regenerating

Only needed if you edit a `SKILL.md` body or add to the registry.

```bash
node ai/spine/build-registry.mjs
node ai/spine/build-includes.mjs
node ai/spine/validate-package.mjs
```

Generated files (`registry/registry.json`, `input/includes/sop_*.md`) are **committed**, because
the Implementation Guide's CI delegates the whole build to `smart-base` and runs no local step.
`validate-package.mjs` fails if any generated file is stale; run it before committing.

Never hand-edit `input/includes/sop_*.md`. Edit the `SKILL.md` and regenerate.

### Reading a validation report

Conforms to `schemas/common/validation-report.schema.json`. Three tiers, and the third is not a
failure when it says `requires-human` — that is the correct terminal state for fidelity. A report
claiming `pass` at T3 is malformed, not reassuring.

### Reading and writing an audit sidecar

`<artifact>.qa.json`, conforming to `schemas/common/audit-entry.schema.json`. Entries are
append-only; the live verdict for a criterion is the most recent entry whose `field_hash` matches
the current sources. If no entry matches, the criterion is stale and needs re-auditing — that is
the design working, not a fault.

Supply only the verdict. The writer stamps hashes, timestamp and commit.

### Filing a flag

Conforms to `schemas/common/flag.schema.json`. Set `owner` honestly — a question routed to yourself
because routing it correctly is inconvenient defeats the mechanism. `evidence` is required unless
you actually fixed the thing.

---

## Conformance

A tool may claim it **reads** this package if it loads skills and honours `determinism`, `roles`
and `requiredCapabilities`.

A tool may claim it **runs** this package if, in addition, it:

1. Implements all five operations in [`spine/INTERFACE.md`](spine/INTERFACE.md) with the declared
   I/O contracts, such that a human invoking them directly gets identical output.
2. Enforces the five gates in `registry/requirements/content-lifecycle.json` — in particular, that
   no file write lands without an explicit apply step.
3. Emits `validation-report.json` conforming to the common schema, with T3 never auto-passed.
4. Writes `.qa.json` sidecars with correct `reviewer.kind` and hash pinning.
5. Surfaces agent-run operations in the same job history as manually run ones, tagged, with the
   same outputs.

Point 5 is the one most easily skipped and least easily recovered. If agent-run work is invisible
or lives in a separate view, a reviewer has to re-check everything, and the package has bought
nothing.
