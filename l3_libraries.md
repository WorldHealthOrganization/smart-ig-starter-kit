# Libraries - SMART Guidelines Starter Kit v2.1.0

* [**Table of Contents**](toc.md)
* [**L3 Authoring Overview**](authoring_overview.md)
* [**Authoring Conventions**](authoring_conventions.md)
* **Libraries**

## Libraries

Libraries are FHIR Artifacts containing the definitions of data querying and processing that are used in the indicators and scheduling / decision logic.

Each CQL library SHALL have a corresponding Library resource in the SMART Guideline. See the [CQL](l3_cql.md) topic for a description of authoring the CQL libraries.

### Inputs

* L3 Indicators, PlanDefinitions
* Library resources in dependencies

### Outputs

* Library resources - populated with the necessary metadata and content

#### Metadata

##### Shareable

* Library resources SHALL conform to [CRMIShareableLibrary](https://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-shareablelibrary.html)

| | |
| :--- | :--- |
| id | SHALL be populated with |
| url | SHALL be populated with /Library/ |
| version | SHALL be populated with |
| versionAlgorithm | SHALL be populated with |
| versionPolicy | SHALL be populated with`strict` |
| name | SHALL be populated with |
| title | SHALL be populated with |
| status | SHALL be populated with (`draft`for non-released content,`active`for released content) |
| experimental | SHALL be populated with |
| publisher | SHALL be populated with |
| description | SHALL be populated with |
| knowledgeRepresentationLevel | SHALL be populated with |

##### ** Publishable **

* Published `active` status Library resources SHALL conform to [CRMIPublishableLibrary](https://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-publishablelibrary.html)

| | |
| :--- | :--- |
| identifier | ???? |
| date | SHALL be populated with |
| contact | SHALL be populated with |
| useContext | SHALL be populated with & ???? Decision Support Logic? Scheduling Logic? Indicator Logic? Data Element Logic? Concepts? Common? Settings? Configuration? |
| jurisdication | SHALL be populated with |
| purpose | SHALL be populated with |
| copyright | SHALL be populated with |
| copyrightLabel | SHALL be populated with |
| approvalDate | SHALL be populated with |
| lastReviewDate | SHALL be populated with |
| effectivePeriod | SHALL be populated with |
| topic | SHALL be populated with and optionally additional topics specific to the library |
| author | SHALL be populated with |
| editor | SHOULD be populated with |
| reviewer | SHOULD be populated with |
| endorser | SHOULD be populated with |
| relatedArtifact | SHALL be populated with`citation`references to L2 content |

##### Computable and Executable

* Computable Libraries SHALL conform to [CQLLibrary](https://build.fhir.org/ig/HL7/cqf-recommendations/StructureDefinition-cql-library.html) (base64-encoded text/cql content)
* Executable Libraries SHALL conform to [ELMJSONLibrary](https://build.fhir.org/ig/HL7/cqf-recommendations/StructureDefinition-elm-json-library.html) (base64-encoded application/elm+json content)

### Activities

* The L3 Author creates Library resources for each CQL Library
* Library Types:

| | |
| :--- | :--- |
| Common | CQL utility and helper declarations |
| Concepts | CQL terminology declarations for concepts in the SMART Guidelines IG |
| Elements | CQL expressions representing SMART Guidelines data elements, from the general patient perspective |
| EncounterElements | CQL expressions representing data elements from the perspective of an encounter (i.e. parameterized with an EncounterId) |
| IndicatorElements | CQL expressions representing data elements from the perspective of an indicator (i.e. parameterized with a Measurement Period) |
| Logic | CQL expressions containing artifact logic, either specific to a particular artifact or shared by multiple artifacts |

### Output Criteria / Definition of Done

* Each CQL Library in the IG SHALL have a Library resource
* Each Library SHALL indicate the type of library according to the above (with a useContext slice)
* Each Library resource SHALL conform to [CRMIShareableLibrary](https://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-shareablelibrary.html)
* Each active published Library SHALL conform to [CRMIPublishableLibrary](https://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-publishablelibrary.html)
* Each Library resource representing a CQL Library SHALL conform to [CQLLibrary](https://build.fhir.org/ig/HL7/cqf-recommendations/StructureDefinition-cql-library.html)
* Each Library resource representing a CQL Library SHALL conform to [CQLModule](https://build.fhir.org/ig/HL7/cqf-recommendations/StructureDefinition-cql-module.html)

### Change tracking

As with all FHIR Conformance resources, change management is critical. Do not set the version element of Libraries defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.md) topic for more information on change management.

In addition to the change tracking provided generally for all resources:

* Each CQL Expression SHALL provide a reference back to the source of the expression ** Concepts: The reference is implicit in the code ** Elements: A tag referring to the L2 Element by ID ** Decisions: A tag referring to the L2 Decision Table (at the library level) ** Scheduling: A tag referring to the L2 Scheduling Table (at the library level) ** Indicators: A tag referring to the L2 Indicator (at the library level)

### Tooling

| | | |
| :--- | :--- | :--- |
| Publisher | As part of the publication process (use path-binary) |   |
| CQF Tooling | Run _refresh… |   |

### Informative examples

### Known issues and dependencies

