Scenarios are uniquely identified "example stories" that describe how the system is expected to behave in a relatively concrete scenario. 


Each Scenario is defined by the following data:
<figure style = "width:15em">
  {% include model_scenario.svg %}
</figure>


### **Inputs** 

* L2 scenarios in narrative form


### **Outputs**

* ExampleScenarios in `input/scenarios`
* One FSH file per ExampleScenario in `input/fsh/scenarios`


### **Activities**

<img src="./l3_process_scenario.png" style="width:50%"/>
<br clear="all"/>
> Summary: From each L2 Use Case, the L3 author creates an ExampleScenario. Ideally  some example data (resources) are also added.
* Check input scenarios - the L2 should contain identifiable, well-defined and well-delimited scenario descriptions. these should be rather concrete - i.e. not high abstractions, but concrete to a specific context.
* Develop ExampleScenario resources 


### **Output Criteria / Definition of Done**
* Each User Scenario in the L2 should be covered by one or more ExampleScenarios
  * At least the "normal" flow shall be covered by an example scenario
* ExampleScenarios should reference the example instances from the other resources (see [profiles](l3_profiles.html), [decision tables](l3_decisiontables.html), [forms](l3_forms.html), [indicators](l3_indicators.html))
* ExampleScenarios should be validated by the publisher (i.e. no QA issues)
* ExampleScenarios should be reviewed by the L2 author


### **Change tracking**

As with all FHIR Conformance resources, change management is critical. Do not set the version element of ExampleScenarios defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.html) topic for more information on change management.

### **Tooling**

| Tool | Usage | Doc |
| --- | ---| --- |
| Sushi | New ExampleScenarios can be created in FSH syntax | [HL7 Spec](https://build.fhir.org/ig/HL7/fhir-shorthand/reference.html)<br/>[Sushi Documentation](https://fshschool.org) |
{:.table-bordered.full-width}  
   



### **Informative examples**


### **Known issues and dependencies**

