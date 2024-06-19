Code Systems are created when new codes need to be defined

In particular, each SMART guideline will have a guideline-level code system defined with codes for all the concepts defined in the guideline (i.e. all the concepts defined in the data dictionary).

In addition, sometimes existing code systems need to be completed, for example adding designations in different languages to codes, or adding relationships between vaccine codes.

<figure style = "width:25em">
  {% include model_codesystem.svg %}
</figure>

### **Inputs** 

* L2 DAK

### **Outputs**

* CodeSystem resources in `input/codesystems` or `input/fsh/codesystems`

### **Activities**

The creation of a CodeSystem is typically driven by the following needs:
* When a ValueSets requires codes that are not in yet available from a CodeSystem
* When a mapping (e.g. a ConceptMap) requires codes that are not yet available from a CodeSystem
* When a new property must be added to a concept in a codesystem, using a supplement CodeSystem

* Care should be taken before creating codesystems. As the SMART ImplementationGuides and FHIR ecosystems evolve, the necessary codes are available and shared. 
  * One exception is the internal codes for the data elements in the DAK (e.g. the unique concept `IMMZ.C.DE1`). These are created for every new element in a logical model.


This is the overview of the activities and related artifacts used:  

<img src="./l3_process_codeset.png" style="width:50%"/>
<br clear="all"/>

### **Output Criteria / Definition of Done**

* Appropriate CodeSystem resources are defined
* CodeSystem resources SHALL conform to [CRMIShareableCodeSystem](https://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-shareablecodesystem.html)
* Active, published CodeSystem resources SHALL conform to [CRMIPublishableCodeSystem](https://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-publishablecodesystem.html)
* no QA issues in the publisher

### **Change tracking**

As with all FHIR Conformance resources, change management is critical. Do not set the version element of CodeSystems defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.html) topic for more information on change management.

### **Tooling**

| Tool | Usage | Doc |
| --- | ---| ---| 
|  Sushi | |  |
|  OCL | |  |
|  tx.fhir.org | |  |
{:.table-bordered.full-width}  


### **Informative examples**
[SMART Guidelines - Immunizations (Measles): Code Systems](https://worldhealthorganization.github.io/smart-example-immz/artifacts.html#terminology-code-systems)

### **Known issues and dependencies**


