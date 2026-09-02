---
id: commons/govern-concepts
name: Govern concepts against the WHO Commons glossary
description: Resolve every data element to a Commons concept, raise drafts where none exists, and block release while drafts remain.
expert: commons-steward
determinism: judgment
roles: [commons-steward, terminologist]
lifecycleStages: [author, validate]
inputSchema: ./input.schema.json
outputSchema: ./output.schema.json
sop: input/pagecontent/gov_concepts.md
status: placeholder
---

### Procedure

The procedure is [Concept Governance](../../../../input/pagecontent/gov_concepts.md), and that page is the single source of truth for it.
Read it first, and treat its *Output Criteria / Definition of Done* section as authoritative.

### Contract status: placeholder

The frontmatter above is real — roles, capabilities, determinism and gates all resolve and are
enforced. The contract is not:

* `input.schema.json` and `output.schema.json` permit anything, so validating against them is **not**
  evidence of a correct artifact.
* No requirement file carries this artifact type's definition of done, so there is nothing to check
  a result against mechanically.

Use this skill to find the right procedure and to know who may run it and under which gates. Do not
use it to claim an output was validated.

### Specifying this contract

[`l3/author-processes`](../../l3/author-processes/SKILL.md) is the worked reference. Specifying one
means writing the two schemas against the artifact's data model, adding a requirement file under
[`registry/requirements/`](../../../registry/requirements/) carrying the SOP's SHALL statements, then
setting `status: specified` and pointing `satisfies` at it. The SOP page itself does not move.
