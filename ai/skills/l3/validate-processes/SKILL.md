---
id: l3/validate-processes
name: Validate business process PlanDefinitions
description: Check generated PlanDefinitions against their definition of done and against the source BPMN, in both directions, and report which findings still need a human.
expert: l3-ig-expert
determinism: deterministic
roles: [l3-ig-expert, fhir-modeller, qc-reviewer, reviewer]
requiredCapabilities:
  - { id: sushi-compiler, degradation: fail }
  - { id: ig-publisher, degradation: warn }
satisfies:
  - req:l3-processes-dod
  - req:content-lifecycle#fidelity-not-auto-passed
lifecycleStages: [validate, test]
routingPatterns:
  - "validate.*(plandefinition|business process)"
  - "(round.?trip|orphan).*(bpmn|plandefinition)"
inputSchema: ./input.schema.json
outputSchema: ./output.schema.json
sop: input/pagecontent/l3_processes.md
status: specified
tooling:
  - SUSHI
  - HL7 IG Publisher
---

### Purpose

Verify that the PlanDefinitions produced by [`l3/author-processes`](../author-processes/SKILL.md)
satisfy [`req:l3-processes-dod`](../../../registry/requirements/l3-processes-dod.json), and that
nothing was lost or invented between the BPMN and the FHIR.

This skill is deterministic. Given the same BPMN and the same PlanDefinitions it produces the same
report, and anyone can re-derive that report by running it themselves.

### Inputs

* Generated PlanDefinitions
* The source BPMN files they were derived from
* The traceability links emitted by the authoring skill
* Declared persona ActorDefinitions, where available

### Outputs

* A validation report conforming to
  [`validation-report.schema.json`](../../../schemas/common/validation-report.schema.json)
* Flags for anything the source does not settle

### Tier 1 — shape

Each PlanDefinition validates against
[`output.schema.json`](../author-processes/output.schema.json). This catches the two defects that
are cheapest to fix and most expensive to discover late: an id containing a dot, and a `version`
element set by the author.

### Tier 2 — conformance

Every statement in `req:l3-processes-dod`, plus:

**Profile conformance.** CRMIShareablePlanDefinition on every process, CRMIPublishablePlanDefinition
on every active published one. Asserted through the IG Publisher against the profiles in
`smart-base`, not by inspection.

**The build.** A clean SUSHI compile is not evidence and must not be reported as one. Three defect
classes seen in practice pass SUSHI and appear only in the publisher: a dotted identifier used as
a resource id, `^mapping.map` without a matching identity, and a traceability style that does not
match what the checker expects. If the `ig-publisher` capability is unavailable, say the build was
not run — do not report tier 2 as passed.

**The round trip.** Every BPMN activity node corresponds to exactly one `action`, and every `action`
to exactly one node. Check both directions and report counts either way. An orphan fails, and the
failure names the orphaned node or action id as evidence.

Report the counts even on a pass. The failure this check exists for does not look like an error: a
misconfigured extract exits clean, with a plausible-looking resource and implausible numbers behind
it, and nothing to point at. Counts in the record are what make that visible on the next run.

### Tier 3 — fidelity

Not checkable here, and this skill does not attempt it. Set `tiers.fidelity.result` to
`requires-human` and populate `comparisons`: source node beside generated action, with each
correspondence marked `derived`, `inferred` or `decided`.

A report whose fidelity tier says `pass` without a named human ruling is malformed. `requires-human`
is the correct terminal state for an automated run, not a shortfall in it.

### Output criteria / definition of done

* The report SHALL cover every statement in `req:l3-processes-dod`
* Every failing check SHALL carry evidence: a location and a verbatim quote
* The round trip SHALL be reported in both directions with counts, pass or fail
* Tier 3 SHALL NOT be marked passed by this skill
* Where the IG Publisher was not run, tier 2 SHALL report `not-run` rather than `pass`

### Known issues and dependencies

* Gateways and events are out of scope, so the round-trip check counts activity nodes only. A
  process whose logic lives mostly in gateway conditions will round-trip cleanly while carrying
  very little of its meaning — which is exactly why tier 3 stays with a person.
* Lane-to-persona resolution is by label. Two personas sharing a display name resolve ambiguously
  and are flagged rather than picked.
* Profile conformance depends on `smart-base`, which is a separate repository on its own release
  cycle. A conformance failure may reflect a change there rather than in this guideline.
