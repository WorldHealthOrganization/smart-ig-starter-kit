---
id: l3/author-processes
name: Author business processes as PlanDefinitions
description: Turn each L2 BPMN business process into a FHIR PlanDefinition, with one action per process node and participants identified by persona.
expert: l3-ig-expert
determinism: judgment
roles: [l3-ig-expert, fhir-modeller, author]
requiredCapabilities:
  - { id: sushi-compiler, degradation: fail }
  - { id: ig-publisher, degradation: warn }
  - { id: bpmn-tooling, degradation: warn }
satisfies:
  - req:l3-processes-dod
lifecycleStages: [author]
routingPatterns:
  - "business process.*(plandefinition|l3|fhir)"
  - "bpmn.*(plandefinition|convert|transform)"
inputSchema: ./input.schema.json
outputSchema: ./output.schema.json
sop: input/pagecontent/l3_processes.md
status: specified
tooling:
  - Camunda Modeler
  - SUSHI
  - HL7 IG Publisher
---

### Procedure

The procedure is [Business Processes](../../../../input/pagecontent/l3_processes.md), and that page
is the single source of truth for it. Read it first. Its *Output Criteria / Definition of Done*
section is authoritative; this file does not restate it.

What follows is what the contract needs and the SOP does not say.

### Where the BPMN is silent

A lane naming a persona the DAK does not declare, an activity with no identifier, a gateway whose
branches carry no condition — record the question rather than resolving it by inference. A decision
made silently here is indistinguishable, later, from something the L2 actually said.

Write a flag conforming to [`flag.schema.json`](../../../schemas/common/flag.schema.json), owned by
`l2-authors`, with the element id and a verbatim quote as evidence. It leaves the pipeline; it does
not block it.

### Traceability

Emit one link per BPMN node and per resolved lane, conforming to
[`traceability-link.schema.json`](../../../schemas/common/traceability-link.schema.json). Mark each
`derived`, `inferred` or `decided`.

The third category is the one that matters. Almost every difference between a generated model and a
hand-authored one turns out to be a decision the source does not contain, and marking those is what
makes the differences reviewable rather than mysterious. Lane-to-persona matching is `inferred` at
best: BPMN carries no persona identifier, only a label.

### Two defects the SOP does not warn about

**A dotted identifier is not a resource id.** DAK activity identifiers are dotted by construction.
SUSHI accepts a dotted id; the IG Publisher reads the dot as a path separator and rejects it. The
derivation between them is a cross-guideline convention owned by
[Concept Governance](../../../../input/pagecontent/gov_concepts.md), not decided per process.

**A clean SUSHI compile is not evidence.** Identifier and mapping defects pass SUSHI every time and
appear only in the publisher. Do not report a compile as a validated artifact.

### Contract

Input and output are constrained by [`input.schema.json`](./input.schema.json) and
[`output.schema.json`](./output.schema.json). The definition of done is
[`req:l3-processes-dod`](../../../registry/requirements/l3-processes-dod.json), which carries the
SOP's SHALL statements verbatim plus a round-trip check the SOP does not require: every BPMN
activity node corresponds to exactly one action and back, no orphans either way.

This skill is `judgment`, so its output is a proposal — diffs and reasoning — never a silent write.
