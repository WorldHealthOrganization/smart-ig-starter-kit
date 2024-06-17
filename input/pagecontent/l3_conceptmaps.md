ConceptMap resources are created to provide a mapping from the codes of one system to another. Each SMART Guideline should have a ConceptMap that maps the concepts defined in the guideline to each target code system.

### **Inputs** 

* L2 Data Dictionary (Concept IDs and Terminology Mappings)
* L3 CodeSystem(s)

### **Outputs**

* A ConceptMap for each target code system identified in the terminology mappings
* Any additional ConceptMaps required to communicate mappings between codes required for operationalizing SMART Guideline content

### **Activities**

### **Criteria / Definition of Done:**

* A ConceptMap exists for each target code system identifier in the data dictionary terminology mappings
* ConceptMaps SHALL conform to [CRMIShareableConceptMap]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareableconceptmap.html)
* Active, published ConceptMaps SHALL conform to [CRMIPublishableConceptMap]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-publishableconceptmap.html)

### **Change tracking**

As with all FHIR Conformance resources, change management is critical. Do not set the version element of ConceptMaps defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.html) topic for more information on change management.

### **Tooling**

### **Informative examples**
[SMART Guidelines - Immunizations (Measles): Concept Maps](https://worldhealthorganization.github.io/smart-example-immz/artifacts.html#terminology-concept-maps)

### **Known issues and dependencies**

