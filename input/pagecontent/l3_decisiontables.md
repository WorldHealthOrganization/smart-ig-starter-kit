#### **Inputs:** 

* Decision Table as per [template](https://worldhealthorg.sharepoint.com/:x:/r/sites/DigitalAcceleratorKits/_layouts/15/Doc.aspx?sourcedoc=%7B17A8AAB1-8120-48DD-92E7-7811AB74E5D5%7D&file=Web%20Annex%20B.%20Decision%20support%20logic_template%20V3.xlsx&action=default&mobileredirect=true). 

#### **Outputs:**

* PlanDefinitions as part of the IG
* ActivityDefinitions as part of the IG or common repository
* Codes for the concepts used 


#### **Activities:**

1. Create a PlanDefinition for each Decision Table
  - a. The PlanDefinition shall conform to the SMARTDecisionTable profile
  - b. PlanDefinition ID should be the same as the decision table
  - c. Title:
  - d. Description:
2. 
3. The output of the decision table should be one of the approved logical data objects that are part of the "actions catalog". 
  - a. If an L3 author needs a new 
  - b. c
4. For each Action in the decision table output:
  - a. there should be a code of "standard" actions in the common or local repository*
  - b. Each of those actions shall use a standard profile. Those standard profiles are also part of the activity outcome repository and respective governance.
5. CQL Writing
  - a. Ensure that every input for the CQL there’s a concept in the common dictionary
  - b. See CQL criteria…
  - c. Other elements



L3 artifact type catalog - getting tasks/immunizationrecom - cpg profiles
Guidance column - communication request
Actiona colum - machine action
	Re: TB dak  what happens when the action is just make clinical judgement
Outputs are nothing but go to the next step in the workflow or just present a smaller form with few options (TB testing type at facility)
Decision tree auto generation


#### **Output Criteria / Definition of Done:**

* Every Decision Table SHALL have a Requirements document pointing at it (for testability and inheritability)

#### **Issues:**

* sometexthere