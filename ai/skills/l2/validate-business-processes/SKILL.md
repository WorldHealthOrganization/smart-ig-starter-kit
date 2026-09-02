---
id: l2/validate-business-processes
name: Validate L2 business processes
description: Check BPMN files parse, carry stable activity identifiers, name declared personas in every lane, and resolve every activity reference made by other DAK components.
expert: l2-dak-expert
determinism: deterministic
roles: [l2-dak-expert, business-analyst, reviewer, content-reviewer]
requiredCapabilities:
  - { id: bpmn-tooling, degradation: warn }
satisfies:
  - req:l2-business-processes-dod
  - req:content-lifecycle#l2-to-l3-transform
lifecycleStages: [validate, review]
routingPatterns:
  - "validate.*(bpmn|l2 business process)"
  - "(check|verify).*dak.*process"
inputSchema: ./input.schema.json
outputSchema: ./output.schema.json
sop: input/pagecontent/l2_dak_authoring.md
status: specified
---

### Purpose

Establish that the business process component of a DAK is fit to transform. This is the check that
stands behind the `l2-to-l3-transform` gate: a Content Reviewer confirms the transition, and this
skill gives them something to confirm against.

Deterministic. Same DAK, same report.

### Inputs

* BPMN files from `input/business-processes/bpmn`
* The declared generic personas
* The other DAK components that reference activity identifiers

### Outputs

* A validation report conforming to
  [`validation-report.schema.json`](../../../schemas/common/validation-report.schema.json)
* Flags for anything the DAK does not settle, owned by `l2-authors` or `dak-repository`

### Checks

**Well-formedness.** Each file parses as BPMN 2.0 XML and declares at least one process. A file
that does not parse fails here rather than three components downstream.

**Overview present.** Exactly one process is marked as the key-business-processes overview.

**Activity identifiers.** Every activity node carries a stable identifier and a human-readable
name. Report duplicates across files — two activities sharing an identifier resolve arbitrarily
downstream.

**Lane personas.** Every lane label matches a declared persona. Matching is by normalised label
because BPMN carries no persona identifier. Report three outcomes separately: resolved, unresolved,
and ambiguous where two personas share a display name. Unresolved and ambiguous both become flags
owned by `l2-authors`; neither is resolved by picking.

**Cross-component references, both directions.** Every activity identifier referenced by the data
dictionary, decision support logic, scheduling logic or indicators exists in some diagram; and
every activity in a diagram is either referenced or deliberately unreferenced. A dangling reference
fails and names the referencing row as evidence.

Report the counts on both sides even when everything passes. String-equality matching means a
trailing space or a case difference reads as a broken reference, and the counts are what make a
sudden drop visible.

### Output criteria / definition of done

* Every statement in
  [`req:l2-business-processes-dod`](../../../registry/requirements/l2-business-processes-dod.json)
  SHALL be covered
* Every failing check SHALL carry a location and a verbatim quote as evidence
* Unresolved and ambiguous lane personas SHALL be flagged, never resolved by inference
* Cross-component reference counts SHALL be reported in both directions, pass or fail

### Known issues and dependencies

* Subject matter expert validation is a human judgment and is not checkable here. This skill
  reports that it has not been recorded; it cannot report that it has not happened.
* Reference checking is by string equality. There is no machine-readable link between a BPMN
  activity identifier and a spreadsheet row, so near-misses read as failures and are worth
  inspecting before being treated as defects in the DAK.
