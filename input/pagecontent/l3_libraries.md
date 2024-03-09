Libraries are FHIR Artifacts containing the definitions of data querying and processing that are used in the indicators and scheduling / decision logic.

### **Inputs:** 

* L3 Indicators, PlanDefinitions
* Library resources in dependencies

### **Outputs:**

* Library resources - populated with the necessary metadata and content

#### **Metadata**

##### **Shareable**

* Library resources SHALL conform to CRMIShareableLibrary

| Element | Guidance |
| ---- | ---- |
| id | SHALL be populated with {{Library Name}}
| url | SHALL be populated with {{canonical base}}/Library/{{Library Name}} |
| version | SHALL be populated with {{ig version}} |
| versionAlgorithm | SHALL be populated with {{ig version algorithm}} |
| versionPolicy | SHALL be populated with `strict` |
| name | SHALL be populated with {{Library Name }} |
| title | SHALL be populated with {{Library Title }} |
| status | SHALL be populated with {{ig status}} |
| experimental | SHALL be populated with {{ig experimental}} |
| publisher | SHALL be populated with {{ig publisher}} |
| description | SHALL be populated with {{Library Description}} |
| knowledgeRepresentationLevel | SHALL be populated with {{narrative & (computable | executable)}} |

##### ** Publishable **

* Published `active` Library resources SHALL conform to CRMIPublishableLibrary

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
| lastReviewDate | SHALL be populated with {{Library Review Date}} |
| effectivePeriod | SHALL be populated with {{ig effectivePeriod}} |
| topic | SHALL be populated with {{ig topic}} and optionally additional topics specific to the library |
| author | SHALL be populated with {{ig author}} |
| editor | SHOULD be populated with {{ig editor}} |
| reviewer | SHOULD be populated with {{ig reviewer}} |
| endorser | SHOULD be populated with {{ig endorser}} |
| relatedArtifact | SHALL be populated with references to L2 content |

##### **Computable** and **Executable**

* Computable Libraries SHALL conform to CQLLibrary (base64-encoded text/cql content)
* Executable Libraries SHALL conform to ELMLibrary (base64-encoded application/elm+json content)

> TODO: Should we have JSON always?

### **Activities:**

* The L3 Author creates Library resources for each CQL Library
* Library Types: 

| Library Type | Description |
| ---- | ---- |
| Common | CQL utility and helper declarations |
| Concepts | CQL terminology declarations for concepts in the SMART Guidelines IG |
| Elements | CQL expressions representing SMART Guidelines data elements |
| Decisions | CQL expressions corresponding to the inputs and outputs of SMART Guidelines decision tables |
| Scheduling | CQL expressions supporting scheduling logic |
| Indicators | CQL expressions corresponding to population criteria for indicators |

### **Output Criteria / Definition of Done:**

* Each CQL Library in the IG SHALL have a Library resource
* Each Library SHALL indicate the type of library according to the above (with a useContext slice) TODO: SGLibrary
* Each Library resource SHALL conform to CRMIShareableLibrary
* Each active published Library SHALL conform to CRMIPublishableLibrary
* Each Library resource SHALL conform to CQLLibrary
* Each Library resource SHALL conform to CQLModule

### **Change tracking**

In addition to the change tracking provided generally for all resources:

* Each CQL Expression SHALL provide a reference back to the source of the expression
** Concepts: The reference is implicit in the code
** Elements: A tag referring to the L2 Element by ID
** Decisions: A tag referring to the L2 Decision Table (could be library level?)
** Scheduling: A tag referring to the L2 Scheduling Table (could be library level?)
** Indicators: A tag referring to the L2 Indicator (could be library level?)

### **Tooling:**

> TODO: Need to determine the best way to integrate the library processing. In progress

| Tool | Usage | Doc |
| --- | ---| ---| 
| Publisher | As part of the publication process (use path-binary) |  |
| CQF Tooling | Run _refresh... | |
{:.table-bordered.full-width}  


### **Informative examples**


### **Known issues and dependencies:**

 
