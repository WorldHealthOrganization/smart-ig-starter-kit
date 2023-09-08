Scenarios are uniquely identified "example stories" that describe how the system is expected to behave in a relatively concrete scenario. 


Each Persona is defined by the following data:
<figure>
  {% include model_scenario.svg %}
</figure>


### **Inputs:** 

* L2 scenarios in narrative form


### **Outputs:**

* ExampleScenarios in `input/scenarios`
* One FSH file per ExampleScenario in `input/fsh/scenarios`


### **Activities:**

<img src="./process_process.png" style="width:50%"/>
<br clear="all"/>

* Check input scenarios - the L2 should contain identifiable, well-defined and well-delimited scenario descriptions. these should be rather concrete - i.e. not high abstractions, but concrete to a specific context.
* Develop ExampleScenario resources 
<div class="todo">
TO DO: we should have SUSHI RuleSets for this resource
</div>
<div class="todo">
TO DO: This deserves some data generation feature.
</div>


### **Output Criteria / Definition of Done:**
* No QA issues
* Each User Scenario in the L2 should be covered by one or more ExampleScenarios
  * At least the "normal" flow shall be covered by an example scenario
* ExampleScenarios should be validated by the publisher 
* ExampleScenarios should be reviewed by the L2 author


### **Change tracking**



### **Tooling**

| Tool | Usage | Doc |
| --- | ---| --- |
| Sushi | New ExampleScenarios can be created in FSH syntax | [HL7 Spec](https://build.fhir.org/ig/HL7/fhir-shorthand/reference.html)<br/>[Sushi Documentation](https://fshschool.org) |
{:.table-bordered}  
   



### **Informative examples**


### **Known issues and dependencies**

