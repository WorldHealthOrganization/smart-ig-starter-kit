
StructureMaps are a machine-readable specification for data transformation. They are used in converting data from one format to another. For  the SMART Guidelines, StructureMaps are used to convert data between QuestionnaireResponses and FHIR target profile instances. This is done in 2 steps:
1. Extract a Questionnaire Response into a Logical Model instance  
  This gets the data in a simple form that only depends on the data specification, and not on the profiles that are used
2. Extract the Logical Model instance into the FHIR resource instances

This process is done by 3 StructureMaps: 
* The StructureMap from QuestionnaireResponse to logical model instance;
* The StructureMap from logical model instance to Resource instance ;
* A grouping map that combines the two maps above to enable a single transform operation.


<figure>
  {% include extraction.svg %}
</figure>


StructureMaps can be authored using the [FHIR Mapping Language](https://hl7.org/fhir/R4/mapping-language.html) (see also [tutorial](https://hl7.org/fhir/R4/mapping-tutorial.html)).

  
### **Inputs:** 

* DAK Data Dictionary / L2 Logical Model
* FHIR Profiles
* Questionnaire
* FHIR Artifacts catalog


### **Outputs:**

* StructureMaps in `input/resources/maps`
* Test Bundle that includes maps and all the dependencies


### **Activities:**

If a form is used, the L3 author should provide the mappings for extraction.

* The StructureMap shall be saved as `input/resources/maps/<id>.fml` where id is the id of the map - not necessarily the name.
<figure>
  {% include model_structuremap.svg %}
</figure>

These can come in the form of:
- Observation extraction
- Definition-based extraction
- StructureMap extraction

#### Observation extraction

#### Definition-based extraction
If this approach is used, the mapping is done by filling in the `.definition` element with the resource that is the target of the extraction - Patient, Observation, Encounter, etc.


#### StructureMap extraction
The following structuremaps are expected: 

* For [Forms / Questionnaires](l3_forms.html)
  * the data extraction map from Questionnaire to Logical Model instances
  * the data extraction map from Logical Model instances to FHIR resources
  * the combined data extraction map that includes the 2 maps above and can process the extraction from Questionnaire to FHIR Resources

* StructureMaps may be difficult to implement and debug. It is important to compile the maps frequently while authoring, and check the output in the QA of the publisher.


Reusing StructureMaps:  
StructureMaps may be reused. For example, modular questionnaires (like Patient demographic modules) - which would use common transformations.



### **Output Criteria / Definition of Done:**

* Mappings should create valid StructureMaps - including the necessary metadata. 
  * the map should be correctly compiled and validated by the publisher - no QA errors
  * optional metadata should be added according to the spec 
    * group names shall not contain spaces
* StructureMaps for extraction must be tested to successfully transform the artifacts (for example, in a Questionnaire, the StructureMaps ust be tested to successfully obtain the intended resources from the QuestionnaireResponse).
* All mapped elements and groups should be tested
* All the dependencies of the StructureMap shall be in the IG or dependencies - SDC, base profiles, logical models, etc.

<div class="todo">
* TO DO: Can we have and use a SGStructureMap profile where e.g. title is present etc.?
</div>


### **Change tracking**
* StructureMaps are normative artifacts. All artifacts should have a change history.


### **Tooling:**

| Tool | Usage | Doc |
| --- | ---| ---| 
| Matchbox | |  |
| IG Publisher | Convert FML files to StructureMaps |  |
|  | |  |
{:.table-bordered.full-width}  

### **Informative examples**
[SMART Guidelines - Immunizations (Measles): StructureMaps](https://worldhealthorganization.github.io/smart-immunizations-measles/artifacts.html#terminology-structure-maps)

### **Known issues and dependencies:**
* Publisher doesn't support metadata, so the StructureMaps show without description in the artifacts table
* Matchbox doesn't validate the metadata if it's missing or if the StructureMap is not valid.


