Scenarios are uniquely identified "example stories" that describe how the system is expected to behave in a relatively concrete scenario. 

### **Inputs:** 

* L2 scenarios in narrative form


### **Outputs:**

* ExampleScenarios in `input/resource/scenarios`


### **Activities:**

* Check input scenarios - the L2 should contain identifiable, well-defined and well-delimited scenario descriptions. these should be rather concrete - i.e. not high abstractions, but concrete to a specific context.
* Develop ExampleScenario resources 
  - TO DO: we should have SUSHI RuleSets for this resource
  - TO DO: This deserves some data generation feature.



### **Output Criteria / Definition of Done:**

* Each User Scenario in the L2 should be covered by one or more ExampleScenarios
  * At least the "normal" flow shall be covered by an example scenario
* ExampleScenarios should be validated by the publisher 
* ExampleScenarios should be reviewed by the L2 author



### **Tooling**
| Tool | Usage | Doc |
| --- | ---| ---| 
| Sushi | New ExampleScenarios can be created in FSH syntax | [HL7 Spec](https://build.fhir.org/ig/HL7/fhir-shorthand/reference.html)<br/>[Sushi Documentation](https://fshschool.org) |



### **Informative examples**


### **Known issues and dependencies**

