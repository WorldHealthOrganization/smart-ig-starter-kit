
CQL - [Clinical Query Language](https://cql.hl7.org/) is a way to computably express queries and logic for the inputs and outputs of decision support - [decision logic](l3_decisiontables.html) and [scheduling logic](l3_scheduling_logic.htlm) - as well as [indicators](l3_indicators.html). 

For background and introduction to CQL, refer to the [Getting Started](https://github.com/cqframework/CQL-Formatting-and-Usage-Wiki/wiki/Getting-Started) page of the CQFramework wiki.

CQL expressions are defined in CQL libraries; Common CQL libraries are available, containing commonly usable expressions for accessing data represented as FHIR resources.

Upon authoring, CQL libraries are encoded (base64) and included in FHIR Library resources.  

The L3 author must ensure that there are CQL expressions in each Measure or Decision/Scheduling artifact, including their dependencies. CQL Library dependencies are common definitions intended to be reused among multiple artifacts, and potentially multiple SMART Guidelines.


### **Inputs:** 

* L2 Data Dictionary
* L2 Decision Tables
* L2 Scheduling Tables
* L2 Indicators
* L2 Configuration
* Common CQL Libraries

### **Outputs:**

* CQL Libraries containing CQL declarations including terminology, parameters, functions, and expressions

### **Activities:**

The L3 author creates CQL libraries for:
  * Concepts library with terminology declarations defined by the SMART Guideline
  * Common library containing common expressions used by multiple artifacts within the SMART Guideline
  * Config library with declarations to enable configuration options to be referenced within CQL logic
  * Elements library containing CQL expressions corresponding to the elements defined in the data dictionary
  * Decision table libraries, one for each Decision table containing the recommendation logic referenced by the PlanDefinition
  * Indicator libraries, one for each Indicator definition containing the population criteria logic referenced by the Measure
  * Scheduling libraries, one for each Scheduling Table containing the scheduling logic referenced by the PlanDefinition

In general, follow the conventions and conformance requirements established in the [Using CQL With FHIR](https://build.fhir.org/ig/HL7/cql-ig/using-cql.html) implementation guide. In addition, the [Patterns](https://build.fhir.org/ig/HL7/cql-ig/patterns.html) page provides best-practices for writing CQL with FHIR resources.

#### Concepts Library

To enable the CQL to refer to concepts defined in the SMART Guideline, create a `Concepts` library that includes CQL declarations for each CodeSystem and ValueSet defined in the SMART Guideline. For example:

```cql
library IMMZConcepts

codesystem "IMMZ.C": 'http://smart.who.int/smart-immunizations-measles/CodeSystem/IMMZ.C'
codesystem "IMMZ.D1": 'http://smart.who.int/smart-immunizations-measles/CodeSystem/IMMZ.D1'
codesystem "IMMZ.D4": 'http://smart.who.int/smart-immunizations-measles/CodeSystem/IMMZ.D4'

//WHO ATC IPS Valueset
valueset "WHO ATC": 'http://hl7.org/fhir/uv/ips/ValueSet/whoatc-uv-ips'

// General use ValueSets 
valueset "Negative Result": 'http://smart.who.int/smart-immunizations-measles/ValueSet/Negativetestresult-values'
valueset "Positive Result": 'http://smart.who.int/smart-immunizations-measles/ValueSet/PositiveTestResult-values'
...
```

This library is then referenced by the other libraries whenever terminology needs to be referenced in CQL. This approach centralizes the management of CQL references to terminology throughout the SMART Guideline.

#### Common Library

To provide a space for re-usable CQL declarations within the SMART Guideline, create a `Common` library. For example:

```cql
library IMMZCommon

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1'
include FHIRCommon called FC
include WHOCommon called WCom
include WHOConcepts called Wcon
include IMMZConcepts called IMMZc
...
```

This library is then referenced by the other libraries whenever common logic needs to be shared between the logic libraries for each artifact.

> NOTE: Common libraries are an organizing capability of CQL, and multiple common libraries MAY be created to facilitate sharing as appropriate for organizing the logic defined in the SMART Guideline. For example, logic may be organized around particular topic areas so that logic needed for recommendations related to a particular topic can be shared, without requiring that logic to be shared everywhere. Depending on the size of complexity of a SMART Guideline, multiple common libraries can be used to organized and share the logic. In addition, libraries may be refactored as needed when sharing patterns are recognized as the content develops.

#### Config Library

To allow for configuration options to be referenced within CQL logic, define a `Config` library. For example:

```cql
library IMMZConfig

define "High incidence of TB and/or high leprosy burden": true
define "Polio-endemic country with high risk of spread": true
...
```

> NOTE: This approach supports configuration as part of the definition of the logic. To support more dynamic configuration, consider the CodeSystem supplement approach used in the [Opioid MME IG](https://fhir.org/guides/cdc/opioid-mme-r4/conversion-factors.html). This approach allows configuration options to be defined within a CodeSystem resource, and then referenced from the CQL (and anywhere else that needs them), rather than establishing configuration values in the CQL directly.

#### Elements Library

To allow CQL logic to reference data elements defined in the SMART Guideline, create an `Elements` library with an expression for each data element defined in the data dictionary. For example:

```cql
library IMMZElements

define "..."
...
```

TODO: Where are the L2 artifacts in the SMART Immunizations Measles IG?

#### Artifact Logic

Each decision support rule, scheduling rule, or measure (indicator), should have its own logic library containing all and only the expressions that are referenced from the FHIR PlanDefinition or Measure resource. This approach allows the logic for each artifact to be organized alongside the artifact. Note that if logic needs to be reorganized so that it can be reused among multiple artifacts, create a Common library to support the common definitions.

CQL Libraries are named after the decision/scheduling/measure: 
* e.g., IMMZ.D2.DT.Measles -> IMMZD2DTMeaslesInputs.cql

##### Input Column Expressions

Create expressions for all input columns with tags:

| Input | CQL code |
|---|---|
|Client's age is less than 9 months<br>Today's date - "Date of birth" < 9 'month'|```/*```<br>```@input: Client's age is less than 9 months```<br>```@pseudocode: Today's date - "Date of birth" < 9 'month'```<br>```*/```<br>```define "Client's age is less than 9 months":```<br>```  //Code goes here```|  
{:.table-bordered.full-width}  

> NOTE: Expressions in the logic library that are not referenced directly by the artifact MAY be marked with the `private` access modifier to make clear that only the expressions referenced by the artifact are intended to be used from the library. The private expressions are only used within the library.

Create one output CQL file for each Table (e.g., Countries with ongoing transmission in which the risk of measles mortality remains high -> IMMZD2DTMeaslesHighTx.cql)  

##### Output Column Expressions

Create expressions for each output and guidance with tags:

| | |
| --- | --- |
| **Client is due for MCV1**<br>`"Immunization recommendation status" = 'Due'` | `/*`<br>`@output: Client is due for MCV1`<br>`@pseudocode: "Immunization recommendation status" = 'Due'`<br>`*/`<br>`define "Client is due for MCV1":`<br>`  //  input expressions that use this output:`<br>`  "No measles primary series doses were administered";`<br>` "Client's age is more than or equal to 9 months" ;`<br>` "No live vaccine was administered in the last four weeks"` |
| Client is less than 9 months. <br>Check for any vaccines due, and inform the caregiver of when to come back for MCV1 administration. | `/*`<br>`@output: Client is due for MCV1 Guidance<br>@guidance: Client is less than 9 months.`<br>`Check for any vaccines due, and inform the caregiver of when to come back for MCV1 administration.`<br>`*/`<br>`define: "Client is due for MCV1 Guidance":`<br>`  'Client is less than 9 months.`<br>`Check for any vaccines due, and inform the caregiver of when to come back for MCV1 administration.'`|
{:.table-bordered.full-width}  

<br>
Sometimes the same expression may appear in multiple outputs that have different inputs. For example: 
*Client is not due for MCV1* can be from 
  * *client is under 9 months* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or 
  * *client has a live vaccine administered in the last 4 weeks*.  

In this case, the author can for example: 
  * append for example the Case # to each expression (e.g., Case 1, Case 2) 
  * include an overall output that checks all the Cases.
  * Have 1 Guidance expression that checks each case and returns the appropriate guidance. 

##### Guidance Expressions

Include a single expression called Guidance to return the main Guidance to be sent using the PlanDefintion. This is to avoid proliferation of actions in the PlanDefinition.  Tag this as a dynamicValue.  

|||
|----|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |`/*`<br>`@dynamicValue: Guidance<br>*/`<br>`define "Guidance":`<br>`  case`<br>`    when "Output 1" then "Output 1 Guidance"`<br>`    when "Output 2" then "Output 2 Guidance"`<br>`    else null`<br>`  end`|
{:.table-bordered.full-width}  

Include any other dynamic values that are needed for the PlanDefinition in the output CQL.

Tag any other expressions needed as `private`.

// TODO: Provide documentation of the CommunicationRequest approach that provides a level of indirection between the health worker and the decision support guidance

Create or reuse ActivityDefinitions depending on what FHIR resources need to be created from the Decision Tables. This will include a CommunicationRequest to alert the Health Worker to the Guidance that will be output.

Create PlanDefintions for each Decision Table that references the output CQL libraries.  
Create actions as needed to reference the ActivityDefinitions that are created, including the CommunicationRequest for Guidance.
Include any dynamicValues here to maintain reusability of the ActivityDefinitions.
Create at least enough Test resources for each row in the Decision Tables.  
To enable end-to-end testing and better understanding, The test resources should follow the test scenario that is used for the other resources (Questionnaires, etc.)

Append Case # to each (e.g., Case 1, Case 2).  Include an overall output that checks all the Cases.  Have 1 Guidance expression that checks each case and returns the appropriate guidance.

Include a single expression called Guidance to return the main Guidance to be sent using the PlanDefintion.  This is to avoid proliferation of actions in the PlanDefinition.  Tag this as a dynamicValue.


#### Coding practices:

It is important to keep the ActivityDefinitions simple and reusable. For example by avoiding dynamicValues in ActivityDefinitions. Since each output CQL is associated with a PlanDefintion, all dynamicValues may go into the PlanDefinition resources. This avoids the many ActivityDefinitions having have an associated Library.

Code should be tagged: 
* `private` for any expressions needed to use for whatever else (like the list of Immunizations) 
* `@dynamicValue:` for anything used as a dynamic value in the PlanDefinition.
* to identify the L2 input, Add a comment tag (`@input:`) for the bolded part, and `@pseudocode:` for the code.  Also do `@output:` for bolded with `@pseudocode:` for the rest. Use `@guidance:` to include the text to display for the "alert" (CommunicationRequest). Authors should use the same `@output:` expression and appended "Guidance" for the guidance expression in cql.

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
| [CQF tooling](https://github.com/cqframework/cqf-tooling)  | Parse and process CQL files into Libraries. | |
| [VisualStudio plugin](https://marketplace.visualstudio.com/items?itemName=cqframework.cql)  | Validate CQL expressions. | |
| [CQF Ruler](https://github.com/cqframework/cqf-ruler)| A FHIR server with CQL functionality included| |
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
