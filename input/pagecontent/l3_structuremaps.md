
StructureMaps are a machine-readable specification for data transformation. They are used in converting data from one format to another. For  the SMART Guidelines, StructureMaps are used to convert data between QuestionnaireResponses and FHIR target profile instances.

StructureMaps can be authored using the [FHIR Mapping Language](https://hl7.org/fhir/R4/mapping-language.html) (see also [tutorial](https://hl7.org/fhir/R4/mapping-tutorial.html)).


<figure>
  {% include extraction.svg %}
</figure>


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

* For [Forms / Questionnaires](forms.html)
  * the data extraction map from Questionnaire to Logical Model instances
  * the data extraction map from Logical Model instances to FHIR resources
  * the combined data extraction map that includes the 2 maps above and can process the extraction from Questionnaire to FHIR Resources


Reusing StructureMaps:  
StructureMaps may be reused. For example, modular questionnaires (like Patient demographic modules) - which would use common transformations.



### **Output Criteria / Definition of Done:**

* Mappings should create valid StructureMaps - including the necessary metadata. 
  * the map should be correctly parsed and validated by the publisher
  * optional metadata should be added according to the spec 
    * group names shall not contain spaces
* All the dependencies of the StructureMap shall be in the IG dependencies - SDC, base profiles, logical models, etc.

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


### **Known issues and dependencies:**
* Matchbox doesn't validate the metadata if it's missing or if the StructureMap is not valid.


