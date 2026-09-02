The AI-ready package makes the procedures in this Implementation Guide executable. It lives in the [`ai/`](https://github.com/WorldHealthOrganization/smart-ig-starter-kit/tree/main/ai) directory of this repository, as plain markdown and JSON that a person can read and an agent can load.

It exists because the knowledge needed to author a SMART Guideline is spread across three things that do not connect to each other: the standard operating procedures on these pages, the ArchiMate model of authoring processes, and the DAK spreadsheet templates. An automated tool asked to author L3 content has no contract to satisfy, no way to demonstrate that it satisfied one, and no record of which parts it derived and which it decided.

### What the package adds

* **Skills** — the procedure for each artifact type, with machine-readable metadata saying who may run it, what tools it needs, and whether the step is reproducible or a judgment call.
* **Schemas** — what an authoring step takes in, and what it must produce.
* **Requirements** — the *Output Criteria / Definition of Done* statements from these pages, expressed as FHIR R5 [Requirements](https://hl7.org/fhir/R5/requirements.html), so the governance specification is itself a SMART Guidelines artifact.
* **Roles** — who may act, inherited from the SMART Guidelines authoring personas.
* **Controls** — how an action that is hard to undo is gated, how a question that belongs to someone else is routed to them, and how both are recorded.

### What it does not do

The package is a specification, not a runtime. It does not include an extract, compile or publish engine. A separate conforming tool implements those operations; the package declares what they must do and how their results are checked.

It also does not automate correctness. Mechanical checks verify **form** — that an artifact matches its schema, conforms to its profiles, and accounts for every row of its source. Whether an artifact faithfully represents the L2 content it came from is a **human** judgement, and the package is explicitly built so that it stays one. What the package changes is the cost of that judgement: instead of re-reading everything, a reviewer is given the specific rows that need attention, with the source and the output side by side.

### These pages remain the source of truth

The package does not rewrite or relocate any procedure. The standard operating procedures published here stay exactly where they are, and each skill in the package names the page it depends on. What a skill adds is the contract around that procedure: who may carry it out, what tooling it needs, whether the step is reproducible or a judgement call, and what its output must satisfy.

An automated tool reads both — this page for what to do, the skill for what "done" means and who is entitled to say so. There is one copy of every sentence, and nothing generated that could fall out of step with it.

### Where to start

| If you are | Read |
|---|---|
| Loading the package into a tool | [`ai/USER_GUIDE.md`](https://github.com/WorldHealthOrganization/smart-ig-starter-kit/blob/main/ai/USER_GUIDE.md) |
| An automated agent | [`ai/registry/registry.json`](https://github.com/WorldHealthOrganization/smart-ig-starter-kit/blob/main/ai/registry/registry.json), then [`ai/AGENTS.md`](https://github.com/WorldHealthOrganization/smart-ig-starter-kit/blob/main/ai/AGENTS.md) |
| Reviewing the approach | [`ai/METHODOLOGY.md`](https://github.com/WorldHealthOrganization/smart-ig-starter-kit/blob/main/ai/METHODOLOGY.md) and [`ai/architecture.md`](https://github.com/WorldHealthOrganization/smart-ig-starter-kit/blob/main/ai/architecture.md) |
| Implementing a runtime | [`ai/spine/INTERFACE.md`](https://github.com/WorldHealthOrganization/smart-ig-starter-kit/blob/main/ai/spine/INTERFACE.md) |

### Open decisions

The package surfaces several conventions that were always unsettled and were previously decided per model, differently, by whoever was authoring. These are recorded in [`ai/registry/requirements/commons-governance.json`](https://github.com/WorldHealthOrganization/smart-ig-starter-kit/blob/main/ai/registry/requirements/commons-governance.json) and need ratifying: how traceability from an L3 element to its source concept is carried, how a dotted DAK identifier becomes a resource identifier, and where editorial decisions live when the DAK does not contain them.
