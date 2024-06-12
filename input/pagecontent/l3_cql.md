
CQL - [Clinical Query Language](https://cql.hl7.org/) is a way to computably express queries and logic for the inputs and outputs of decision support - [decision logic](l3_decisiontables.html) and [scheduling logic](l3_schedulinglogic.html) - as well as [indicators](l3_indicators.html). 

For background and introduction to CQL, refer to the [Getting Started](https://github.com/cqframework/CQL-Formatting-and-Usage-Wiki/wiki/Getting-Started) page of the CQFramework wiki.

CQL expressions are defined in CQL libraries; Common CQL libraries are available, containing commonly usable expressions for accessing data represented as FHIR resources.

Upon authoring, CQL libraries are encoded (base64) and included in FHIR Library resources.  

The L3 author must ensure that there are CQL expressions in each Measure or Decision/Scheduling artifact, including their dependencies. CQL Library dependencies are common definitions intended to be reused among multiple artifacts, and potentially multiple SMART Guidelines.


### **Inputs** 

* L2 Data Dictionary
* L2 Decision Tables
* L2 Scheduling Tables
* L2 Indicators
* L2 Configuration
* Common CQL Libraries

### **Outputs**

* CQL Libraries containing CQL declarations including terminology, parameters, functions, and expressions

### **Activities**

The L3 author creates CQL libraries for:
  * Concepts library with terminology declarations defined by the SMART Guideline
  * Common library containing common expressions used by multiple artifacts within the SMART Guideline
  * Config library with declarations to enable configuration options to be referenced within CQL logic
  * Elements library containing CQL expressions corresponding to the elements defined in the data dictionary
  * EncounterElements library containing CQL expressions corresponding to the elements defined in the data dictionary and from the perspective of an encounter (i.e. with Today and Encounter parameters)
  * IndicatorElements library containing CQL expressions corresponding to the elements defined in the data dictionary and from the perspctive of an indicator (i.e. with a Measurement Period parameter)
  * Decision table libraries, one for each Decision table containing the recommendation logic referenced by the PlanDefinition
  * Indicator libraries, one for each Indicator definition containing the population criteria logic referenced by the Measure
  * Scheduling libraries, one for each Scheduling Table containing the scheduling logic referenced by the PlanDefinition

In general, follow the conventions and conformance requirements established in the [Using CQL With FHIR](https://build.fhir.org/ig/HL7/cql-ig/using-cql.html) implementation guide. In addition, the [Patterns](https://build.fhir.org/ig/HL7/cql-ig/patterns.html) page provides best-practices for writing CQL with FHIR resources.

#### Concepts Library

To enable the CQL to refer to concepts defined in the SMART Guideline, create a `Concepts` library that includes CQL declarations for each CodeSystem and ValueSet defined in the SMART Guideline. For example:

```cql
library IMMZConcepts

// Immunization Measles Concepts
codesystem "IMMZConcepts": 'http://smart.who.int/immunizations-measles/CodeSystem/IMMZConcepts'

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
...
```

This library is then referenced by the other libraries whenever common logic needs to be shared between the logic libraries for each artifact.

Common libraries typically contain shared function definitions used throughout the various Elements, Logic, and Indicator libraries. For example, a fluent function in the IMMZCommon library:

```cql
/**
 * @description Fetches a singleton protocol applied from an immunization
 * @comment The protocol list from the immunization
 */
define fluent function only(protocols List<FHIR.Immunization.ProtocolApplied>):
  singleton from protocols
```

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

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1'
include fhir.cqf.common.FHIRCommon called FC

include WHOConcepts
include WHOCommon called WC
include WHOElements called WE

include IMMZConcepts called Concepts
include IMMZCommon called IC

context Patient

/*
 * Measles elements
 */
define "MCV Dose":
  [Immunization: Concepts."MCV Vaccine"] MCV
    where MCV.status = 'completed'
      and MCV.isSubpotent is not true

define "MCV Primary Series Dose":
  "MCV Dose" MCV
    where exists (
      MCV.protocolApplied Protocol
        where Protocol.series = 'primary'
    )

define "MCV Supplementary Dose":
  "MCV Dose" MCV
    where exists (
      MCV.protocolApplied Protocol
        where Protocol.series = 'supplementary'
    )

define "MCV Dose 0 Dose":
  "MCV Dose" MCV
    where exists (
      MCV.protocolApplied Protocol
        where Protocol.series = 'dose 0'
    )
```

Note that these expressions are not tied to any particular timeframe, they are only tied to the `Patient` context and provide a basis for sharing the definition of data elements between decision support, scheduling logic, and indicator logic. These expressions are rarely, if ever, used on their own; instead, they are used by inclusion in the EncounterElements and IndicatorElements libraries, as shown in the following sections.

#### Encounter and Indicator Elements Libraries

The `EncounterElements` library defines data elements from the perspective of an encounter, and allows the data elements to be referenced from decision support logic as part of the evaluation of recommendations at the point of care (i.e. for an Encounter); while the `IndicatorElements` library defines the data elements from the perspective of an indicator, and allows the data elements to be referenced as part of the definition of an indicator (i.e. with a Measurement Period). For example:

```cql
library IMMZEncounterElements

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1'

include WHOConcepts
include WHOCommon called WC
include WHOEncounterElements called WE

include IMMZConcepts called Concepts
include IMMZCommon called Common
include IMMZElements called Elements

parameter Today Date default Today()
parameter EncounterId String

context Patient

/*
 * Measles elements
 */
define "MCV Dose":
  Elements."MCV Dose" MCV
    where MCV.occurrence.toInterval() on or before Today

define "MCV Primary Series Dose":
  Elements."MCV Primary Series Dose" MCV
    where MCV.occurrence.toInterval() on or before Today

define "MCV Supplementary Dose":
  Elements."MCV Supplementary Dose" MCV
    where MCV.occurrence.toInterval() on or before Today

define "MCV Dose 0 Dose":
  Elements."MCV Dose 0 Dose" MCV
    where MCV.occurrence.toInterval() on or before Today
```

Note the inclusion of the `IMMZElements` library called `Elements`; this allows the definitions in this library to extend the base element definitions from the encounter perspective. Consider the `MCV Primary Series Dose` element from the base `Elements` library:

```cql
define "MCV Primary Series Dose":
  "MCV Dose" MCV
    where exists (
      MCV.protocolApplied Protocol
        where Protocol.series = 'primary'
    )
```

An `MCV Primary Series Dose` is an `MCV Dose` (i.e. Measles Containing Vaccine Dose) where the protocol series has a value of `primary`. This definition is then contextualized in the `EncounterElements` library to identify only those primary series doses that occurred on or before today:

```cql
define "MCV Primary Series Dose":
  Elements."MCV Primary Series Dose" MCV
    where MCV.occurrence.toInterval() on or before Today
```

Similarly, the `MCV Doses Administered To Patient` expression in the indicator elements contextualizes the `MCV Dose` element to only those that occurred during the measurement period:

```cql
define "MCV Doses Administered to Patient During Measurement Period":
  Elements."MCV Dose" I
    where I.occurrence.toInterval() starts during "Measurement Period"
```

By organizing the data elements in this way, the definitions that are common to both decision support and indicators can be shared.

#### Artifact Logic

Each decision support rule, scheduling rule, or measure (indicator), should have its own logic library containing all and only the expressions that are referenced from the FHIR PlanDefinition or Measure resource. This approach allows the logic for each artifact to be organized alongside the artifact. Note that if logic needs to be reorganized so that it can be reused among multiple artifacts, create a common library to support the common definitions.

CQL Libraries are named after the decision/scheduling/measure. For example:

```cql
/*
@DecisionID: IMMZ.D2.DT.Measles.Ongoing transmission
@BusinessRule: Determine if the client is due for a measles vaccination according to the national immunization schedule
@Trigger: IMMZ.D2 Determine required vaccination(s) if any
@Description: Countries with ongoing transmission in which the risk of measles mortality remains high (countries that provide first dose of MCV at 9 months and second dose of MCV at 15 months)
*/
library IMMZD2DTMeaslesOTLogic

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1'

include WHOCommon called WC
include IMMZD2DTMeaslesLogic called Logic

parameter Today default Today()
```

Note the use of tags:

* @DecisionID
* @BusinessRule
* @Trigger
* @Description


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

As with all FHIR Conformance resources, change management is critical. Do not set the version element of libraries defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.html) topic for more information on change management.

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
* (links to issues, or zulip, or open questions)

Each CQL code must have its wrapper FHIR resource. 
For this, the corresponding Libraries must exist.

The IG Publisher is able to parse CQL libraries
