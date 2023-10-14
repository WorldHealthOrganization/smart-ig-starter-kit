Scheduling logic represents the schedule of actions that are expected to be followed on a predefined schedule - for example a vaccination schedule. This doesn't necessarily mean that the actions will be executed; the schedule is currently only expected to be communicated to the patient or professionals, as informations. The professionals, based on the schedule, can always evaluate the needed actions. In practice, the schedule and the decision tables, combined with the runtime assessment and conditions, will determine a set of activities being planned or executed for or about the patients.


### **Inputs:** 

* Scheduling Table as per [template](https://worldhealthorg.sharepoint.com/:x:/r/sites/DigitalAcceleratorKits/_layouts/15/Doc.aspx?sourcedoc=%7B17A8AAB1-8120-48DD-92E7-7811AB74E5D5%7D&file=Web%20Annex%20B.%20Decision%20support%20logic_template%20V3.xlsx&action=default&mobileredirect=true). 

### **Outputs:**

* PlanDefinitions as part of the IG
* ActivityDefinitions as part of the IG or common repository
* Codes for the concepts used 
* Example CarePlan for the scenario selected

### **Activities:**

<img src="./l3_process_logic.png" style="width:50%"/>
<br clear="all"/>


1. For each scheduling table in L2, create a PlanDefinition
  - a. The PlanDefinition shall conform to the SGScdedulingTable profile
  - b. PlanDefinition ID should be the same as the decision table
  - c. Title: The human-readable short description of the decision table
  - d. Description: The long description of the decision table
2. The output of the decision table should be one of the approved logical data objects that are part of the "artifacts catalog". 
  - a. If an L3 author needs a new data object, the necessary logical model and profile should also be created or reused.
3. For each Action in the decision table output:
  - a. there should be a code of "standard" actions in the common or local repository
  - b. Each of those actions shall use a standard profile. Those standard profiles are also part of the activity outcome repository and respective governance.
  - For any calculated value (`condition` or `dynamicValue`), capture the expressions in a CQL library and refer to that library in the `library``
4. CQL Writing
  - a. Ensure that every input for the CQL there's a concept in the common dictionary
  - b. See CQL authoring
  

### **Output Criteria / Definition of Done:**

* Every Decision Table SHALL have a Requirements document pointing at it (for testability and inheritability)
* Every parameter in the decision table should be in the data dictionary
* An example instance of the outcome of the PlanDefinition (CarePlan) shall be authored as reference/test.
* The PlanDefinition should be testable with the standard tools and should produce the same results as the  test CarePlan that is authored in the L3.



### **Change tracking**
* PlanDefinitions, Libraries and ActivityDefinitions are subject to the general change tracking requirements for all normative resources.

### **Tooling:**

| Tool | Usage | Doc |
| --- | ---| --- |
|  |  | |
{:.table-bordered.full-width}  
   

### **Informative examples**

### **Known issues and dependencies:**






