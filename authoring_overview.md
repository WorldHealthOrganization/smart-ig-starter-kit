# L3 Authoring Overview - SMART Guidelines Starter Kit v2.1.0

* [**Table of Contents**](toc.md)
* **L3 Authoring Overview**

## L3 Authoring Overview

Authoring a L3 FHIR Implementation Guide involves taking the L2 input, using the recommended processes and tools, and creating, validating and publishing publishing L3 FHIR artifacts that correspond to the L2 specifications.

The L3 FHIR Implementation Guides are intended to be machine readable, but also will include narrative content that are human readable and shall speak to the L2 specifications covered in the FHIR IG being authored. More details about authoring narrative are included in this [page](narrative.md).

### Going from L2 to L3

The first step in L3 production is an input verification of the L2 content. L3 authors create the necessary artifacts to cover the entire L2 specification and demonstrate a working SMART Guideline. This includes several types of artifacts and possibly narrative content.

#### Input for authoring L3: L2 DAK components

For WHO published L2 DAKs, each DAK will be represented as a GitHub repository along with a published PDF DAK word document. The GitHub repository shall contain the structured spreadsheets, bpmn files and more, that were authored during the publication process of the DAK. Authoring presumes the L2 content is available and consistent. It is possible that the L2 content gets changed, notably due to input from L3 authoring. It is important to track the versions of L2 content, especially when adapting L2 or L3 to a local implementation, in order to track changes and assess impact of those changes.

| | | |
| :--- | :--- | :--- |
| Health Interventions | Narrative | Published DAK PDF |
| Generic Personas | Narrative | Published DAK PDF |
| User Scenarios | Narrative | Published DAK PDF |
| Processes | BPMN files | L2 DAK repository: input/business-processes/bpmn |
| Data Elements | Spreadsheet | L2 DAK repository: input/dictionary |
| Decision Tables | Spreadsheet | L2 DAK repository: input/decision-logic |
| DMN files | L2 DAK repository: input/decision-logic/dmn | |
| Scheduling Logic | Spreadsheet | L2 DAK repository: input/scheduling-logic |
| Indicators | Spreadsheet | L2 DAK repository: input/indicators |
| Functional Requirements | Spreadsheet | L2 DAK repository: input/system-requirements |
| Non-functional Requirements | Spreadsheet | L2 DAK repository: input/system-requirements |

#### Authored L3 artifacts: Table of authored L3 artifacts as they correspond to L2 DAK components

The table and diagram below show the content types that are to be created as part of the L3 authoring process.

| | | | |
| :--- | :--- | :--- | :--- |
| Health Interventions | n/a | n/a | n/a |
| Generic Personas | ActorDefinition | input/actors | [Actors](l3_personas.md) |
| User Scenarios | ExampleScenario | input/scenarios | [Scenarios](l3_scenarios.md) |
| TestPlan | input/testing | [Testing](l3_testing.md) | |
| TestScript | input/testing | [Testing](l3_testing.md) | |
| Example instances | input/testinginput/examples | [Examples](l3_examples.md) | |
| Processes | FHIR PlanDefinition | input/plandefinitions | [Plan Definitions](l3_processes.md) |
| FHIR ActivityDefinition | input/processesinput/activitydefinitions | [Activity definitions](l3_processes.md) | |
| Elements | Logical Data Model | input/models | [Logical Models](l3_logicalmodels.md) |
| FHIR Questionnaire | input/questionnaires | [Questionnaires](l3_forms.md) | |
| FHIR StructureMaps | input/maps | [Structure Maps](l3_structuremaps.md) | |
| FHIR ValueSet | input/valuesets | [ValueSets](l3_valuesets.md) | |
| FHIR CodeSystem | input/codesystems | [CodeSystems](l3_codesystems.md) | |
| FHIR Profile | input/profiles | [Profiles](l3_profiles.md) | |
| ConceptMap | input/conceptmaps | [Concept Maps](l3_conceptmaps.md) | |
| CQL Concepts | input/cql | [CQL](l3_cql.md) | |
| CQL Data Elements | input/cql | | |
| Decision Tables | FHIR PlanDefinition | input/plandefinitions | [Decision Tables](l3_decisiontables.md) |
| FHIR Library | input/libraries | [Concept Maps](l3_conceptmaps.md) | |
| CQL | input/cql | [CQL](l3_cql.md) | |
| Indicators and Measures | FHIR Measure | input/measures | [Indicators](l3_indicators.md) |
| CQL IndicatorLogic | input/cql | [CQL](l3_cql.md) | |
| Functional Requirements | FHIR Requirements | input/requirements | [Requirements](l3_requirements.md) |
| Non-functional Requirements | FHIR Requirements | input/requirements | [Requirements](l3_requirements.md) |

### Authoring L3 Artifacts: Where to begin?

While the exact authoring steps depend on the inputs, the key sequence could normally consist of the following steps:

* [Logical Models](l3_logicalmodels.md)
* [Profiles](l3_profiles.md)
* [Forms](l3_forms.md)
* [Libraries](l3_libraries.md)
* [Decision Tables](l3_decisiontables.md)
* [Indicators](l3_indicators.md)
* [Test Cases](l3_testing.md)
* [Personas](l3_personas.md)
* [Scenarios](l3_scenarios.md)
* [Processes](l3_processes.md)
* [Requirements](l3_requirements.md)
* [Examples](l3_examples.md)

