# SMART Guidelines AI-Ready Package

An executable form of the WHO SMART Guidelines authoring procedures. Everything here is plain
markdown and JSON in a git repository — readable by a person, loadable by an agent, with no build
step required to read it.

**If you are an agent:** start at [`registry/registry.json`](registry/registry.json). It indexes every
skill, role, capability and gate in one file. Then read [`AGENTS.md`](AGENTS.md).

**If you are a person:** read [`USER_GUIDE.md`](USER_GUIDE.md) to load the package into a tool, or
read the procedures as published in the Implementation Guide — they are the same words.

---

## What this is

WHO SMART Guidelines authoring is documented across 51 SOP pages, an ArchiMate model of 36
authoring processes, and five DAK spreadsheet templates. Nothing binds them, so an agent asked to
author L3 has no contract to satisfy, no way to prove it satisfied one, and no record of which
parts it decided rather than derived.

This package supplies the missing bindings:

- **Skills** — a contract around each SOP: who may run it, what tooling it needs, and whether the
  step is reproducible or a judgment call. The procedure itself stays on the SOP page.
- **Schemas** — what goes in, what must come out.
- **Requirements** — the *Definition of Done* SHALL statements, as machine-readable gates.
- **Roles** — who may act, inherited from the WHO SMART Guidelines authoring personas.
- **Controls** — how a hard-to-undo action is gated, how a question that is not yours gets routed,
  and how both are recorded.

## What this is not

**This package is a specification, not a runtime.** It ships contracts, procedures, roles and
gates. It does not ship an extract / compile / publish engine.
[`spine/INTERFACE.md`](spine/INTERFACE.md) declares the five operations a conforming runtime must
provide; implementing them is the runtime's job. The only executable code in this package is in
[`tools/`](tools/), and it maintains the package itself — it never touches a guideline.

## Layout

| Path | Contents |
|---|---|
| [`registry/`](registry/) | Roles, capabilities, requirements, and the generated index |
| [`schemas/common/`](schemas/common/) | Shared schemas every skill references rather than restates |
| [`experts/`](experts/) | The three expert bundles — L2 DAK, L3 IG, Commons & Governance |
| [`skills/`](skills/) | One folder per artifact type: `SKILL.md` plus its two schemas |
| [`spine/`](spine/) | The runtime interface a conforming tool must implement. Specification only — no code |
| [`tools/`](tools/) | Package maintenance. Nothing here runs during a guideline transformation |
| [`METHODOLOGY.md`](METHODOLOGY.md) | The normative doctrine — determinism, validation tiers, gates, delegation, audit |
| [`architecture.md`](architecture.md) | The layer diagram and the worked BPMN vertical |

## The three experts

An expert is a bundle of skills plus a role. It decides which skills load and which gates apply.
Validation lives as skills *inside* each expert rather than as a separate reviewer.

| Expert | Owns |
|---|---|
| [L2 DAK Expert](experts/l2-dak-expert/EXPERT.md) | The nine DAK components — author and validate |
| [L3 IG Expert](experts/l3-ig-expert/EXPERT.md) | FHIR artifact production — author and validate |
| [Commons & Governance Steward](experts/commons-steward/EXPERT.md) | What crosses IG boundaries — concepts, identifiers, reuse, release |

## Source of truth

**The SOP pages stay canonical.** Procedure lives where it always has, in
[`input/pagecontent`](../input/pagecontent/), and the Implementation Guide publishes it unchanged.
Every skill names its page in frontmatter:

```yaml
sop: input/pagecontent/l3_processes.md
```

A skill does not restate the procedure. It carries the contract *around* it — who may run it,
what tooling it needs, whether the step is reproducible or a judgment call, what the output must
look like, and which requirement it is checked against. An agent reads both: the SOP for what to
do, the skill for what "done" means and who may say so.

This keeps one copy of every sentence. Nothing is generated from the SOPs and nothing can drift
out of sync with them.

## Status

Every skill points at a real SOP and is usable today. What varies is whether the *contract* has
been specified:

| `status` | Meaning |
|---|---|
| `specified` | Schemas constrain real structure, and a requirement file carries the definition of done |
| `placeholder` | Schemas permit anything and no requirement file exists yet — the procedure is complete, the contract is not |

Four skills are specified: the BPMN vertical, from L2 business processes through to FHIR
PlanDefinitions. It is the worked reference for specifying the rest. Twenty-six are placeholders.

Specifying one means writing the two schemas, adding a requirement file under
[`registry/requirements/`](registry/requirements/) carrying the SOP's SHALL statements, and
flipping `status`. The SOP page itself never moves.
