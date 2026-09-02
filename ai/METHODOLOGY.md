# Methodology

The normative doctrine for the package. Every skill inherits these rules; a skill may narrow them
and may not contradict them.

The shape comes from a working proof of concept: *scripted where it is mechanical, gated where it
is not, recorded either way.*

---

## 1. Two kinds of step, marked before you run them

Every skill declares `determinism` in its frontmatter, and a conforming runtime surfaces it before
execution rather than after.

| Value | Meaning | Obligation |
|---|---|---|
| `deterministic` | Reproducible. Same inputs, same bytes. | Run freely. Re-derivable by anyone clicking the same button. |
| `judgment` | Something was decided. | Produce a diff and a reason. Never a silent write. |

An agent that can run everything makes it *harder*, not easier, to see which results are
reproducible and which were decided. The declaration exists so the pipeline says so up front,
rather than leaving a reviewer to infer it.

The deterministic operations are extract, generate, compile, build and check — the five in
[`spine/INTERFACE.md`](spine/INTERFACE.md). The judgment operations are flag resolution and any
authoring where the source is silent.

---

## 2. Validation has three tiers, and only two are mechanical

| Tier | Checks | Mechanism | Verifies |
|---|---|---|---|
| **T1 Shape** | Artifact matches `output.schema.json` | JSON Schema 2020-12 | Form |
| **T2 Conformance** | SOP *Definition of Done* SHALLs; CRMI / CPG / CQFM / SDC profile conformance; round-trip completeness | `registry/requirements/*.json` plus `smart-base` profiles via the IG Publisher | Form |
| **T3 Fidelity** | Does the L3 artifact faithfully represent the L2 source? | **Human, assisted** | Meaning |

**T3 is never auto-passable.** Every green check verifies form. None of them verifies that the
extract matches the DAK — that stays a human comparison. The package's job is to make T3 cheap by
listing exactly which rows need eyes, not to pretend T3 is automated.

A validation report that marks T3 `requires-human` is a complete report. One that marks it `pass`
is a broken report.

### The round-trip check

The strongest mechanical proxy for fidelity, and it belongs in T2: every L2 row became exactly one
L3 element, checked in both directions, with no orphans on either side.

This is what catches the failure mode the controls exist for. In the proof of concept, a wrong
option-row rule in the extract config produced 108 rows, 0 options, 0 flags — 47 option rows
silently promoted to top-level data elements, five vaccine codings dropped entirely, exit code 0,
nothing to review. Not a wrong answer. A confident one with nothing to point at.

Every skill that transforms L2 into L3 SHALL have a round-trip check, and it SHALL fail loudly
rather than exit clean.

### Where checks actually fire

SUSHI compiling clean is not evidence. Three defects found in the proof of concept — a dotted
identifier used as a logical model id, `^mapping.map` without a matching identity, and a
traceability style mismatch — passed SUSHI every time and appeared only in the IG Publisher.
`validate-ig-build` is therefore not optional.

---

## 3. Gates sit only where an action is hard to undo

Gates are FHIR R5 `Requirements`-shaped entries in `registry/requirements/`, with `key`,
`conformance`, `requirement`, `actors`, `dependsOn` and `satisfiedBy`. Using the same formalism WHO
already uses for L3 requirements means the governance spec is itself a SMART Guidelines artifact.

| Gate | Fires on | Resolved by |
|---|---|---|
| `write-is-a-diff` | Any file write | Proposed as a diff; nothing lands until Apply |
| `publisher-run-confirmed` | IG Publisher invocation | Explicit confirmation — minutes and a 6 GB JVM behind a lock |
| `regeneration-conflict` | A regeneration that would overwrite hand-edited FSH | Stops and asks |
| `l2-to-l3-transform` | L2 declared ready for transformation | Content Reviewer |
| `commons-concepts-resolved` | Release | Commons Steward — draft concepts block release |

Everything cheap and reversible runs freely. **A gate on a cheap action is friction that teaches
people to click through gates**, which costs more than it buys.

---

## 4. Delegation: name the question, route it, attach evidence

Not every decision belongs to the person at the console. Naming a question is what makes it
routable.

A flag conforms to [`schemas/common/flag.schema.json`](schemas/common/flag.schema.json):

| Field | Values |
|---|---|
| `status` | `accepted` · `fixed` · `skipped` · `deferred` · `escalated` |
| `owner` | `l2-authors` · `technical-wg` · `dak-repository` · `l3-author` · `commons-steward` |
| `reason` | Free text. Required. |
| `evidence` | Source location plus verbatim quote. Required unless `status` is `fixed`. |
| `issueRef` | Tracked issue, when escalated. |

Routing:

- **L2 authors** — the DAK does not settle it: an ambiguous unit, an option set referenced but
  absent.
- **Technical working group** — conventions that outlive one DAK: identifiers, naming, how
  traceability is carried.
- **DAK repository** — a defect in the published dictionary, drafted as an issue with the row and
  the evidence attached.

Flags are drafted for a person to file. Filing them on confirmation is the same gate, one step
further — it is not a different trust model.

---

## 5. Audit is a by-product, not a write-up

One `.qa.json` sidecar per artifact, conforming to
[`schemas/common/audit-entry.schema.json`](schemas/common/audit-entry.schema.json). Four properties
carry the weight:

1. **Append-only, not deduplicated.** Script, agent and human verdicts co-exist. The current
   verdict for a criterion is the most recent entry whose `field_hash` matches the present sources.
2. **Hash-pinned.** Every entry carries SHA-256 prefixes of its sources at audit time. Edit the
   source and every verdict derived from it goes stale on its own. `script_hash` does the same for
   a checker's own source: change the checker's logic and its past verdicts expire.
3. **Three reviewer kinds.** `script` is deterministic and reproducible; `agent` records model,
   session and skill; `human` is final authority. The record should never blur them.
4. **Evidence mandatory on failure.** `file:line` plus a verbatim quote.

Provenance stamping is transparent to the reviewer: supply the verdict, and the writer captures
hashes, timestamp and commit uniformly. A reviewer who has to remember to stamp provenance will
eventually not.

### What is recorded beyond verdicts

- **Which steps** the agent ran — tagged in the same job history as manually run ones, with the
  same outputs. There is no separate "AI mode" producing different results from the manual path.
- **Which model** — model id and token count per turn.
- **Which edits** — every change arrives as a diff. What a model proposed and what a person
  accepted are separate records.
- **Which decisions** — each flag carries a status, a reason and an owner, whoever drafted it.

Undisclosed AI use forces a reviewer to re-check everything. Visible AI use tells them exactly
where to look.

---

## 6. What the approach does not give

Stated here so no skill has to imply otherwise:

- **Fidelity for free.** The extract must still be checked against the source by a person.
- **A model matching a published IG.** Almost every difference between a generated model and a
  hand-authored one is a decision the source does not contain — cardinality choices, nesting,
  naming conventions. A pipeline can reach the source's content. It cannot reach decisions never
  written down, which argues for capturing them, not for hand-authoring.
