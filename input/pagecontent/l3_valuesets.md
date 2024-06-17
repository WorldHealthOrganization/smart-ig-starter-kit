For the elements whose value is from a set of (coded) options, a FHIR ValueSet should exist. SMART Guidelines can use Common ValueSets or define new ones.
ValueSets are used in 
* Logical Models
* Profiles
* Questionnaires


* The L3 should use same codes as defined for LM

<figure style = "width:15em">
  {% include model_valueset.svg %}
</figure>

### **Inputs** 

* DAK
* SMART IG ValueSet catalog
* Terminology services to lookup and validate the codes


### **Outputs**

* ValueSets in `input/valuesets` or `input/fsh/valuesets` 
* Proposal for any common value sets
* If a valueset changes since the last release, this must be signaled using the common change tracking procedure - see [tracking changes](#).
* Valueset usage registry?



### **Activities**

This is the overview of the activities and related artifacts used:
<img src="./l3_process_codeset.png" style="width:50%"/>
<br clear="all"/>


* For each element in the DAK that has a value set - i.e. the answer depends on the options for the data element - for example sex, etc., the author shall have a value set. this can mean 
* Reusing a value set
* Creating a new value set
  * only for the purpose of the current SMART Guideline
  * as a candidate for common value set


* Functionally, the valueset in the L3 level must support the L2 expressed values. However, the actual codes are typically a L3 decision, unless the L2 imposes some codes. The L2 doesn't need to impose a code system, but may do so, for example as a result of an existing SMART Guideline.


The ValueSet should include codes from one of the preferred code systems which are: 
* ICD-11
* LOINC
* ICD-(others)
* Open and globally available code systems without licensing restrictions 
* Jurisdictionally endorsed or required codes 

* Note that FHIR has codes that may be required or extensible - in these cases the FHIR values should be preferred - however, concept maps SHALL be in place between these codes and the codes above. 

* The creation of a value set may require the creation of a new code system
  
* The creation of a value set may, in some cases, require changes to the profiles: If a FHIR resource has a binding that is too strict and the L2 model requires a broader value set, normally a new element or extension must be created.
  * For example, adding a gender "changed" to the Administrative Gender Value Set - that is not supported and would require mapping the element and its value set to a new extension in FHIR. 
  * Given the impact of this, any such deviations should be identified and discussed with the L2 author who can evaluate consistency, value, and the real need.


* ValueSet creation: 
* Add "Shareable", “publishable” extensions
* ValueSet reutilization:
  * ValueSets may be reused if the application needs are consistent.
  * While reusing of ValueSets is recommended, authors should be aware that a reuse also introduces a dependency
* ValueSet validation: The ValueSet should be valid against the SMARTValueSet profile

#### CodeSystem creation
When defining a ValueSet, there may be a perceived need to create a CodeSystem:


### Review procedure
ValueSets shall be reviewed for criteria



### **Output Criteria / Definition of Done**
* All the elements in the L3 that have coded values shall have a corresponding valueset
* All the values in the valueset shall be valid codes: 
  * Available in an available code set (for example no SNOMED unless SNOMED is supported)
  * Not deprecated

Terminology Services
* lookup
* mapping
* validate

* Each ValueSet resource SHALL conform to [CRMIShareableValueSet]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablevalueset.html)
* Each active published ValueSet SHALL conform to [CRMIPublishableValueSet]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-publishablevalueset.html)
* Each ValueSet SHALL conform to [CRMIComputableValueSet]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-computablevalueset.html)


### **Change tracking**

As with all FHIR Conformance resources, change management is critical. Do not set the version element of ValueSets defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.html) topic for more information on change management.

### **Tooling**

| Tool | Usage | Doc |
| --- | ---| ---| 
|  Sushi | |  |
|  OCL | |  |
|  tx.fhir.org | |  |
{:.table-bordered.full-width}  


### **Informative examples**

[SMART Guidelines - Immunizations (Measles): ValueSets](https://worldhealthorganization.github.io/smart-example-immz/artifacts.html#terminology-value-sets)

### **Known issues and dependencies**
* The ecosystem for terminologies depends on a terminology server. Presently there is not yet a working terminology server that is preferred for the SMART Guidelines.

* Is there a relationship before ANC.B5.DE50 and the valueset name? Would the valueset for the values for that element have a similar name?
* This will actually result in changes to profiles - e.g. needing a value when the existing binding is Required

