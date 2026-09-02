---
id: l2/author-business-processes
name: Author L2 business processes
description: Produce the BPMN business process diagrams for a DAK, with stable activity identifiers and lanes that name declared personas.
expert: l2-dak-expert
determinism: judgment
roles: [l2-dak-expert, business-analyst, author]
requiredCapabilities:
  - { id: bpmn-tooling, degradation: warn }
satisfies:
  - req:l2-business-processes-dod
lifecycleStages: [author]
routingPatterns:
  - "(author|create|draft).*(business process|bpmn)"
  - "dak.*business process"
inputSchema: ./input.schema.json
outputSchema: ./output.schema.json
sop: input/pagecontent/l2_dak_authoring.md
status: specified
tooling:
  - Camunda Modeler
---

### Purpose

Produce the business process component of a Digital Adaptation Kit: an overview diagram of the key
business processes for the health area, and a specific diagram for each process.

The underlying procedure — scoping, RASCI, the iterative development cycle and subject matter
expert validation — is in
[Authoring a L2 DAK](../../../../input/pagecontent/l2_dak_authoring.md), sections 2.1.4 and 2.1.5.
This skill covers what the output has to look like for L3 to be derivable from it.

### Inputs

* The L1 guideline narrative and recommendations for the health area
* Domain expertise and real-life observations from selected contexts and countries
* The generic personas declared for this DAK

### Outputs

* An overview diagram of key business processes
* One BPMN 2.0 XML file per business process, in `input/business-processes/bpmn`

### Activities

Identify the key business processes from the L1 narrative, domain expertise and field observation,
and draw the overview. Then draw each process in detail.

Diagrams follow the [BPMN standard](https://www.bpmn.org/). Commit the BPMN source, not only an
exported image: the source is what carries the structure L3 depends on, and an image carries none
of it.

[Camunda Modeler](https://camunda.com/download/modeler/) is recommended in
[L2 DAK Templates](../../../../input/pagecontent/l2_templates.md) specifically because the files it
produces retain the structure and metadata needed for drafting related L3 content. Other tools
listed there are acceptable; a tool that flattens the diagram on export is not.

### What downstream components rely on

Three properties of these diagrams are load-bearing, and none of them is visible in a rendered
picture.

**Stable activity identifiers.** The data dictionary, decision support logic, scheduling logic and
indicator components all reference activities by identifier. Renaming or renumbering an activity
silently breaks references in four other spreadsheets, and nothing in the DAK will tell you.

**Lanes that name declared personas.** A lane is how an activity acquires a participant in L3.
BPMN carries no persona identifier, only a label, so the label has to match a persona the DAK
actually declares. A lane titled for a job role that appears nowhere in the persona list cannot be
resolved downstream except by guessing.

**Activities, not just flow.** Gateways and events have no agreed L3 representation. Meaning that
lives only in a gateway condition does not survive the transformation, so anything that matters
should also exist as an activity, a data element, or a decision table.

### Output criteria / definition of done

See [`req:l2-business-processes-dod`](../../../registry/requirements/l2-business-processes-dod.json).
In summary:

* Diagrams SHALL follow the BPMN standard and SHALL be committed as BPMN 2.0 XML
* An overview diagram of key business processes SHALL exist alongside the per-process diagrams
* Each activity SHALL carry a stable identifier and a human-readable name
* Each lane SHALL correspond to a persona declared in the DAK
* Every activity referenced by another DAK component SHALL exist in some diagram
* Processes SHALL be validated by clinical subject matter experts before L2 is declared ready

### Known issues and dependencies

* Persona declaration and process authoring iterate against each other. Neither can be finished
  first, so both stay draft until the lane check passes in both directions.
* There is no machine-readable link between a BPMN activity identifier and the spreadsheet rows
  that reference it. The check is by string equality, which means whitespace and case differences
  read as broken references.
