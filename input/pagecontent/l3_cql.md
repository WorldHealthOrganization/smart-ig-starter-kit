
CQL - [Clinical Query Language](https://cql.hl7.org/) is a way to computably express queries and logic for the inputs and outputs of decision support - [decision logic](l3_decisiontables.html) and [scheduling logic](l3_scheduling_logic.htlm) - as well as [indicators](l3_indicators.html). 

For background and introduction to CQL, refer to the [Getting Started](https://github.com/cqframework/CQL-Formatting-and-Usage-Wiki/wiki/Getting-Started) page of the CQFramework wiki.

CQL expressions are defined in CQL libraries; Common CQL libraries are available, containing commonly usable expressions for accessing data represented as FHIR resources.

Upon authoring, CQL libraries are encoded (base64) and included in FHIR Library resources.  

The L3 author must ensure that there are CQL expressions in each Measure or Decision/Scheduling artifact, including their dependencies. CQL Library dependencies are common definitions intended to be reused among multiple artifacts, and potentially multiple SMART Guidelines.


### **Inputs:** 

* L2 Decision tables
* L2 Scheduling tables
* L2 Indicator tables
* Common CQL Libraries


### **Outputs:**

* CQL expressions in .cql files


### **Activities:**

1. The L3 author creates an input CQL Library for:
* each Decision Table
* each Scheduling Table
* each Indicator

CQL Libraries are named after the decision/scheduling/measure: 
* e.g., IMMZ.D2.DT.Measles -> IMMZD2DTMeaslesInputs.cql

1.2. Create expressions for all input columns with tags:

| Input | CQL code |
|---|---|
|Client's age is less than 9 months<br>Today's date - "Date of birth" < 9 'month'|```/*```<br>```@input: Client's age is less than 9 months```<br>```@pseudocode: Today's date - "Date of birth" < 9 'month'```<br>```*/```<br>```define "Client's age is less than 9 months":```<br>```  //Code goes here```|  
{:.table-bordered.full-width}  

1.3 Tag any other expressions needed as internal.

2. Create one output CQL file for each Table (e.g., Countries with ongoing transmission in which the risk of measles mortality remains high -> IMMZD2DTMeaslesHighTx.cql)  
2.1 Create expressions for each output and guidance with tags:

| | |
| --- | --- |
| **Client is due for MCV1**<br>`"Immunization recommendation status" = 'Due'` | `/*`<br>`@output: Client is due for MCV1`<br>`@pseudocode: "Immunization recommendation status" = 'Due'`<br>`*/`<br>`define "Client is due for MCV1":`<br>`  //  input expressions that use this output:`<br>`  "No measles primary series doses were administered";`<br>` "Client's age is more than or equal to 9 months" ;`<br>` "No live vaccine was administered in the last four weeks"` |
| Client is less than 9 months. <br>Check for any vaccines due, and inform the caregiver of when to come back for MCV1 administration. | `/*`<br>`@output: Client is due for MCV1 Guidance<br>@guidance: Client is less than 9 months.`<br>`Check for any vaccines due, and inform the caregiver of when to come back for MCV1 administration.`<br>`*/`<br>`define: "Client is due for MCV1 Guidance":`<br>`  'Client is less than 9 months.`<br>`Check for any vaccines due, and inform the caregiver of when to come back for MCV1 administration.'`|
{:.table-bordered.full-width}  

<br>
2.2. Sometimes the same expression may appear in multiple outputs that have different inputs. For example: 
*Client is not due for MCV1* can be from 
  * *client is under 9 months* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or 
  * *client has a live vaccine administered in the last 4 weeks*.  

In this case, the auhor can for example: 
  * append for example the Case # to each expression (e.g., Case 1, Case 2) 
  * include an overall output that checks all the Cases.
  * Have 1 Guidance expression that checks each case and returns the appropriate guidance. 



2.3. Include a single expression called Guidance to return the main Guidance to be sent using the PlanDefintion. This is to avoid proliferation of actions in the PlanDefinition.  Tag this as a dynamicValue.  


|||
|----|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |`/*`<br>`@dynamicValue: Guidance<br>*/`<br>`define "Guidance":`<br>`  case`<br>`    when "Output 1" then "Output 1 Guidance"`<br>`    when "Output 2" then "Output 2 Guidance"`<br>`    else null`<br>`  end`|
{:.table-bordered.full-width}  



2.4. Include any other dynamic values that are needed for the PlanDefinition in the output CQL.
2.5. Tag any other expressions needed as internal.

// TODO: A CommunicationRequest is only necessary if that is the actual guidance...
3. Create or reuse ActivityDefinitions depending on what FHIR resources need to be created from the Decision Tables. This will include a CommunicationRequest to alert the Health Worker to the Guidance that will be output.

4. Create PlanDefintions for each Decision Table that references the output CQL libraries.  
4.1. Create actions as needed to reference the ActivityDefinitions that are created, including the CommunicationRequest for Guidance.
4.2. Include any dynamicValues here to maintain reusability of the ActivityDefinitions.
5. Create at least enough Test resources for each row in the Decision Tables.  
5.1. To enable end-to-end testing and better understanding, The test resources should follow the test scenario that is used for the other resources (Questionnaires, etc.)



 Append Case # to each (e.g., Case 1, Case 2).  Include an overall output that checks all the Cases.  Have 1 Guidance expression that checks each case and returns the appropriate guidance.
Include a single expression called Guidance to return the main Guidance to be sent using the PlanDefintion.  This is to avoid proliferation of actions in the PlanDefinition.  Tag this as a dynamicValue.



#### Coding practices:
It is important to keep the ActivityDefinitions simple and reusable. For example by avoiding dynamicValues in ActivityDefinitions. Since each output CQL is associated with a PlanDefintion, all dynamicValues may go into the PlanDefinition resources. This avoids the many ActivityDefinitions having have an associated Library.


Code should be tagged: 
* `@internal` for any expressions needed to use for whatever else (like the list of Immunizations) 
* `@dynamicValue` for anything used as a dynamic value in the PlanDefinition.
* to identify the L2 input, Add a comment tag (`@input`) for the bolded part, and `@pseudocode` for the code.  Also do `@output` for bolded with `@pseudocode` for the rest. Use `@guidance` to include the text to display for the "alert" (CommunicationRequest). Authors should use the same `@output` expression and appended "Guidance" for the guidance expression in cql.


### Criteria:
Every input in the Decision and Scheduling tables shall have a CQL expression
Every input in the Decision and Scheduling tables should have a concept in a CodeSystem



### **Criteria / Definition of Done**
* CQL shall compile without errors 
* Test cases shall exist and shall pass
* Every input in the Decision and Scheduling tables shall have a CQL expression
* Every input in the Decision and Scheduling tables should have a concept in a CodeSystem



### **Change tracking**


### **Tooling**

| Tool | Usage | Documentation |
| --- | ---| ---| 
| [CQF tooling](https://github.com/cqframework/cqf-tooling)  | Parse and process CQL files into Libraries. | 
| [VisualStudio plugin](https://marketplace.visualstudio.com/items?itemName=cqframework.cql)  | Validate CQL expressions. | 
|[CQF Ruler](https://github.com/cqframework/cqf-ruler)| A FHIR server with CQL functionality included|
{:.table-bordered.full-width}  
   


### **Informative examples**

[SMART Guidelines - Immunizations (Measles): Example ActorDefinition(https://worldhealthorganization.github.io/smart-immunizations-measles/ActorDefinition-CommunityHealthWorker.html)
[SMART Guidelines - Immunizations (Measles): Rendered set of ActorDefinitions](https://worldhealthorganization.github.io/smart-immunizations-measles/personas.html)

### **Known issues and dependencies**
<div class="todo">
* TO DO: How to use R5 resourcesin an R4 IG ? Sushi issue on the way
</div>
* (links to issues, or zulip, or open questions)



Each CQL code must have its wrapper FHIR resource. 
For this, the corresponding Libraries must exist.

The IG Publisher is able to parse CQL libraries

<div class="todo">
* TO DO: Capture "critical data elements" in CQL
</div>


