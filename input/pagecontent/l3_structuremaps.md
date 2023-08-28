StructureMaps are used for transforming data

<figure>
  {% include extraction.svg %}
</figure>


### **Inputs:** 

* DAK Data Dictionary / L2 Logical Model
* FHIR Artifacts catalog



### **Outputs:**

* StructureMaps in `input/resources/maps`
* TO DO

### **Activities:**

If a form is used, the L3 author should provide the mappings for extraction.

These can come in the form of:
- Observation extraction
- Definition-based extraction
- StructureMap extraction

#### Observation extraction

#### Definition-based extraction
If this approach is used, the mapping is done by filling in the `.definition` element with the resource that is the target of the extraction - Patient, Observation, Encounter...


#### StructureMap extraction
The following structuremaps are expected: 

* For [Forms / Questionnaires](forms.html)
  * the data extraction map from Questionnaire to Logical Model instances

* For [Forms / Questionnaires](forms.html), the data extraction questionnaire to Logical Model instances


* Create Maps in FML language
The map [metadata](https://www.hl7.org/fhir/mapping-language.html#metadata) should be filled in: 
  * The StructureMap shall be saved as `input/resources/maps/<id>.fml` where id is the id of the map - not necessarily the name.
<figure>
  {% include model_structuremap.svg %}
</figure>

* Reusing StructureMaps
StructureMaps may be reused. A few situations where this is useful:
1. Modular questionnaires (like Patient demographic modules) - which would use common transformations
2. 



### **Output Criteria / Definition of Done:**

* Mappings should create valid StructureMaps
  * No QA errors on QA page
* All the dependencies of the StructureMap shall be in the IG dependencies - SDC, base profiles, logical models,...  
* Test Bundle that includes maps and all the dependencies
* TO DO: Can we have and use a SGStructureMap profile where e.g. title is present etc?

### **Issues:**

* Matchbox doesn't validate the metadata if it's missing or if the StructureMap is not validxthere


### **Tooling:**

| Tool | Usage | Doc |
| --- | ---| ---| 
| Matchbox | |  |
| IG Publisher | Convert FML files |  |
|  | |  |
