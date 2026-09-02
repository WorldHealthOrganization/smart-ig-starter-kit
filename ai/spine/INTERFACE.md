# Runtime interface

**This package does not implement these operations.** It declares them. A runtime —
folio-assistant, a CI job, or a person at a shell — implements them, and this file is what
conformance is measured against.

The point of declaring rather than shipping is that the operations must be reproducible by
*anyone*. The console, an agent and a human shell call the same implementation and get the same
bytes. There is no separate mode producing different results from the manual path, which is what
makes any claim an agent makes about a DAK re-derivable by clicking the same button.

All five operations are **deterministic**. None of them decides anything.

---

## 1. `extract`

Read L2 source artifacts into a structured intermediate.

| | |
|---|---|
| **Input** | Paths to DAK artifacts: `.bpmn`, `.xlsx`, `.dmn` |
| **Output** | Structured records plus, for every record, a source reference precise enough to quote — a BPMN element id, or a sheet and row |
| **Must** | Report counts per artifact and per record type. Never drop a row silently. A row it cannot interpret is a flag, not an omission. |

The counts requirement is not bookkeeping. A misconfigured extract exits clean: in the proof of
concept a wrong option-row rule produced 108 rows, 0 options and 0 flags, silently promoting 47
option rows to top-level data elements and dropping five vaccine codings entirely. Nothing errored.
Counts in the output are what make that visible.

## 2. `generate`

Turn extracted records into authoring source.

| | |
|---|---|
| **Input** | Extract output, plus the identifier grammar from the registry |
| **Output** | FSH or FHIR JSON, plus traceability links conforming to [`traceability-link.schema.json`](../schemas/common/traceability-link.schema.json) |
| **Must** | Emit one link per source record. Mark each `derived`, `inferred` or `decided`. Never write to the working tree — emit diffs. |

The `decided` category is the one that matters. Almost every difference between a generated model
and a hand-authored one is a decision the source does not contain; recording which links are
decisions is what makes those differences reviewable rather than mysterious.

## 3. `compile`

Run SUSHI over the generated FSH.

| | |
|---|---|
| **Input** | FSH directory, `sushi-config.yaml` |
| **Output** | FHIR JSON resources, plus SUSHI's own error and warning counts |
| **Must** | Report the result verbatim. **Must not** report a clean compile as evidence of a correct artifact. |

Three defect classes pass SUSHI every time and appear only in the publisher: a dotted identifier
used as a resource id, `^mapping.map` without a matching identity, and a traceability style that
does not match the checker. A runtime that stops here has not validated anything.

## 4. `build`

Run the HL7 IG Publisher.

| | |
|---|---|
| **Input** | IG root |
| **Output** | Built IG, `qa.json`, `qa.html` |
| **Must** | Run behind a lock and only on explicit confirmation — the `publisher-run-confirmed` gate. Minutes and a 6 GB JVM is not a background convenience. |
| **Must** | Compare against a baseline `qa.json` and report the delta, not the absolute count. An IG with pre-existing warnings otherwise hides new ones. |

## 5. `check`

Run a validation skill and produce a report.

| | |
|---|---|
| **Input** | Artifacts, sources, traceability links, the relevant requirement file |
| **Output** | A report conforming to [`validation-report.schema.json`](../schemas/common/validation-report.schema.json), plus audit entries |
| **Must** | Cover every statement in the requirement file. Attach a location and a verbatim quote to every failure. Report round-trip counts in both directions, pass or fail. |
| **Must not** | Mark tier 3 fidelity as passed. Only a named human ruling may do that. |

---

## Obligations across all five

**Same bytes for every caller.** A human invoking the operation directly gets what the agent got.
If these diverge, nothing else in the package is worth anything.

**Nothing lands without an apply.** Every write is proposed as a diff under `write-is-a-diff`. What
a model proposed and what a person accepted stay separate records.

**Agent-run operations are visible.** They appear in the same job history as manually run ones,
tagged, with the same outputs — not in a separate view and not implicitly. This is the obligation
most easily skipped and least easily recovered: if agent-run work is invisible, a reviewer has to
re-check everything and the package has bought nothing.

**Capability degradation is honoured.** When a capability marked `fail` is absent, stop and say so.
Do not substitute an approximation, and do not report a step as passed that did not run.

---

## Claiming conformance

A runtime **runs** this package when it implements all five operations with these contracts,
enforces the five gates in
[`registry/requirements/content-lifecycle.json`](../registry/requirements/content-lifecycle.json),
emits conforming validation reports with tier 3 never auto-passed, writes `.qa.json` sidecars with
correct `reviewer.kind` and hash pinning, and surfaces agent-run operations in the shared job
history.

A runtime that only loads skills and honours `determinism`, `roles` and `requiredCapabilities`
**reads** this package. That is a useful thing to be, and it is a different claim.
