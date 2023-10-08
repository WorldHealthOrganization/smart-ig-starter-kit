Data used in the different stages of the business processes can be captured from the system, or directly from the user. When data is intended to be captured from the user, a form is created, which in L3 terms corresponds to a Questionnaire.

Since the purpose of the forms is to expose data in a user-friendly manner (and following the L2 DAK data structures), it is expected that several of these forms will result in the data being extracted to FHIR-native resources, like Patient, Observation, Condition, etc.
This means the L2 data structures are represented both as instances Questionnaires and as FHIR resource profiles, and these FHIR resources can be obtained natively or by extracting a QuestionnaireResponse:
<img src="./forms_resources.png" style="width:50%"/>
<br clear="all"/>


SMART Guidelines make use of the [FHIR Structured Data Capture specification](http://hl7.org/fhir/uv/sdc) to define the common aspects around Questionnaire resources:
* Design
* Reuse
* Data extraction

Forms are reuse other forms and make use of value sets. 
<figure>
  {% include model_form.svg %}
</figure>

This extraction uses [structure maps](l3_structuremaos.html) and is represented as follows:
<figure>
  {% include extraction.svg %}
</figure>




### **Inputs:** 

* Logical model
* ValueSets associated with logical model


### **Outputs:**

* Questionnaires
* Example QuestionnaireResponses for testing

* Questionnaires elements may link to the data elements in the
  * Note that this can conflict with the definition-based extraction described below

### **Activities:**

* For extracting data, the Questionnaire should be an instance of SDC extractable questinnaire
  * For StructureMap extraction, the extension [Target Structure Map](http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-targetStructureMap) needs to be present. See [Authoring StructureMaps](l3_structuremaps.html) for authoring of structuremaps.


#### Modular Questionnaires


### **Output Criteria / Definition of Done:**

* For using the $extract operation, Questionnaires shall have the extension pointing to the StructureMap, and the map should also be present (see [Authoring StructureMaps](l3_structuremaps.html).)


* Questionnaire Responses

### **Change tracking**


### **Tooling:**

| Tool | Usage | Doc |
| --- | ---| ---| 
| Matchbox | |  |
| LHC Form viewer | Convert FML files |  |
|  | |  |

Several SDC-related tools and implementations are available from the [HL7 Confluence](https://confluence.hl7.org/display/FHIRI/SDC+Implementations).

### **Informative examples**

### **Known issues and dependencies:**


