#### **Inputs:** 

* sometexthere



#### **Outputs:**

* Questionnaires
* Example QuestionnaireResponses for testing


* Questionnaires elements may link to the data elements

#### **Activities:**

* For extracting data, the Questionnaire should be an instance of SDC extractable questinnaire
  * For StructureMap extraction, the extension [Target Structure Map](http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-targetStructureMap) needs to be present. See [Authoring StructureMaps](l3_structuremaps.html) for authoring of structuremaps.


#### Modular Questionnaires


#### **Output Criteria / Definition of Done:**

* For using the $extract operation, Questionnaires shall have the extension pointing to the StructureMap, and the map should also be present (see [Authoring StructureMaps](l3_structuremaps.html).)


* Questionnaire Responses

#### **Issues:**

* sometexthere


#### **Tooling:**

| Tool | Usage | Doc |
| --- | ---| ---| 
| Matchbox | |  |
| LHC Form viewer | Convert FML files |  |
|  | |  |

Several SDC-related tools and implementations are available from the [HL7 Confluence](https://confluence.hl7.org/display/FHIRI/SDC+Implementations).
