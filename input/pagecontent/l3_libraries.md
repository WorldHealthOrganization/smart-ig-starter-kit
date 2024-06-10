Libraries are FHIR Artifacts containing the definitions of data querying and processing that are used in the indicators and scheduling / decision logic.

Each CQL library SHALL have a corresponding Library resource in the SMART Guideline. See the [CQL](l3_cql.html) topic for a description of authoring the CQL libraries.

### **Inputs:** 

* L3 Indicators, PlanDefinitions
* Library resources in dependencies

### **Outputs:**

* Library resources - populated with the necessary metadata and content

#### **Metadata**

##### **Shareable**

* Library resources SHALL conform to [CRMIShareableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablelibrary.html)

| Element | Guidance |
| ---- | ---- |
| id | SHALL be populated with {{Library Name}}
| url | SHALL be populated with {{canonical base}}/Library/{{Library Name}} |
| version | SHALL be populated with {{ig version}} |
| versionAlgorithm | SHALL be populated with {{ig version algorithm}} |
| versionPolicy | SHALL be populated with `strict` |
| name | SHALL be populated with {{Library Name }} |
| title | SHALL be populated with {{Library Title }} |
| status | SHALL be populated with {{ig status}} (`draft` for non-released content, `active` for released content) |
| experimental | SHALL be populated with {{ig experimental}} |
| publisher | SHALL be populated with {{ig publisher}} |
| description | SHALL be populated with {{Library Description}} |
| knowledgeRepresentationLevel | SHALL be populated with {{narrative & (computable | executable)}} |

##### ** Publishable **

* Published `active` status Library resources SHALL conform to [CRMIPublishableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-publishablelibrary.html)

| Element | Guidance |
| ---- | ---- |
| identifier | ???? |
| date | SHALL be populated with {{ig publish date}} |
| contact | SHALL be populated with {{ig contact}} |
| useContext | SHALL be populated with {{ig useContext}} & ???? Decision Support Logic? Scheduling Logic? Indicator Logic? Data Element Logic? Concepts? Common? Settings? Configuration? |
| jurisdication | SHALL be populated with {{ig jurisdiction}} |
| purpose | SHALL be populated with {{Library Purpose}} |
| copyright | SHALL be populated with {{ig copyright}} |
| copyrightLabel | SHALL be populated with {{ig copyrightLabel}} |
| approvalDate | SHALL be populated with {{ig approvalDate}} |
| lastReviewDate | SHALL be populated with {{ig review date}} |
| effectivePeriod | SHALL be populated with {{ig effectivePeriod}} |
| topic | SHALL be populated with {{ig topic}} and optionally additional topics specific to the library |
| author | SHALL be populated with {{ig author}} |
| editor | SHOULD be populated with {{ig editor}} |
| reviewer | SHOULD be populated with {{ig reviewer}} |
| endorser | SHOULD be populated with {{ig endorser}} |
| relatedArtifact | SHALL be populated with `citation` references to L2 content |


##### **Computable** and **Executable**

* Computable Libraries SHALL conform to [CQLLibrary]({{site.data.fhir.ver.cql}}/StructureDefinition-cql-library.html) (base64-encoded text/cql content)
* Executable Libraries SHALL conform to [ELMJSONLibrary]({{site.data.fhir.ver.cql}}/StructureDefinition-elm-json-library.html) (base64-encoded application/elm+json content)

### **Activities:**

* The L3 Author creates Library resources for each CQL Library
* Library Types: 

| Library Type | Description |
| ---- | ---- |
| Common | CQL utility and helper declarations |
| Concepts | CQL terminology declarations for concepts in the SMART Guidelines IG |
| Elements | CQL expressions representing SMART Guidelines data elements, from the general patient perspective |
| EncounterElements | CQL expressions representing data elements from the perspective of an encounter (i.e. parameterized with an EncounterId) |
| IndicatorElements | CQL expressions representing data elements from the perspective of an indicator (i.e. parameterized with a Measurement Period) |
| Logic | CQL expressions containing artifact logic, either specific to a particular artifact or shared by multiple artifacts |

### **Output Criteria / Definition of Done:**

* Each CQL Library in the IG SHALL have a Library resource
* Each Library SHALL indicate the type of library according to the above (with a useContext slice) 
* Each Library resource SHALL conform to [CRMIShareableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablelibrary.html)
* Each active published Library SHALL conform to [CRMIPublishableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-publishablelibrary.html)
* Each Library resource representing a CQL Library SHALL conform to [CQLLibrary]({{site.data.fhir.ver.cql}}/StructureDefinition-cql-library.html)
* Each Library resource representing a CQL Library SHALL conform to [CQLModule]({{site.data.fhir.ver.cql}}/StructureDefinition-cql-module.html)

### **Change tracking**

As with all FHIR Conformance resources, change management is critical. Do not set the version element of Libraries defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.html) topic for more information on change management.

In addition to the change tracking provided generally for all resources:

* Each CQL Expression SHALL provide a reference back to the source of the expression
** Concepts: The reference is implicit in the code
** Elements: A tag referring to the L2 Element by ID
** Decisions: A tag referring to the L2 Decision Table (at the library level)
** Scheduling: A tag referring to the L2 Scheduling Table (at the library level)
** Indicators: A tag referring to the L2 Indicator (at the library level)

### **Tooling:**


| Tool | Usage | Doc |
| --- | ---| ---| 
| Publisher | As part of the publication process (use path-binary) |  |
| CQF Tooling | Run _refresh... | |
{:.table-bordered.full-width}  


### **Informative examples**


### **Known issues and dependencies:**

 
