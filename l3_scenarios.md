# User Scenarios - SMART Guidelines Starter Kit v2.1.0

* [**Table of Contents**](toc.md)
* [**L3 Authoring Overview**](authoring_overview.md)
* [**Authoring Conventions**](authoring_conventions.md)
* **User Scenarios**

## User Scenarios

Scenarios are uniquely identified "example stories" that describe how the system is expected to behave in a relatively concrete scenario.

Each Scenario is defined by the following data:

### Inputs

* L2 scenarios in narrative form

### Outputs

* ExampleScenarios in `input/scenarios`
* One FSH file per ExampleScenario in `input/fsh/scenarios`

### Activities

![](./l3_process_scenario.png) 

> Summary: From each L2 Use Case, the L3 author creates an ExampleScenario. Ideally some example data (resources) are also added.
* Check input scenarios - the L2 should contain identifiable, well-defined and well-delimited scenario descriptions. these should be rather concrete - i.e. not high abstractions, but concrete to a specific context.
* Develop ExampleScenario resources

### Output Criteria / Definition of Done

* Each User Scenario in the L2 should be covered by one or more ExampleScenarios 
* At least the "normal" flow shall be covered by an example scenario
 
* ExampleScenarios should reference the example instances from the other resources (see [profiles](l3_profiles.md), [decision tables](l3_decisiontables.md), [forms](l3_forms.md), [indicators](l3_indicators.md))
* ExampleScenarios should be validated by the publisher (i.e. no QA issues)
* ExampleScenarios should be reviewed by the L2 author

### Change tracking

As with all FHIR Conformance resources, change management is critical. Do not set the version element of ExampleScenarios defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.md) topic for more information on change management.

### Tooling

| | | |
| :--- | :--- | :--- |
| Sushi | New ExampleScenarios can be created in FSH syntax | [HL7 Spec](https://build.fhir.org/ig/HL7/fhir-shorthand/reference.html)[Sushi Documentation](https://fshschool.org) |

### Informative examples

### Known issues and dependencies

