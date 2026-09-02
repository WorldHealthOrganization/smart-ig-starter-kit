---
id: l3/author-testing
name: Author test plans and test data
description: Turn L2 test criteria into test plans, test data and test reports.
expert: l3-ig-expert
determinism: judgment
roles: [l3-ig-expert, fhir-modeller, author]
lifecycleStages: [author]
inputSchema: ./input.schema.json
outputSchema: ./output.schema.json
sop: input/pagecontent/l3_testing.md
status: placeholder
---

### Procedure

The procedure is [Testing](../../../../input/pagecontent/l3_testing.md), and that page is the single source of truth for it.
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
