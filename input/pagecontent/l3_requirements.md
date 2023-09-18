Requirements - functional or non-functional - are captured as L3 artifacts for the purposes of:
* Reusability across SMART Guidelines
* Adaptability to jurisdiction-specific guidelines
* Traceability - for example to Testing

The L3 author is expected to capture the requirements in a [Requirements](https://worldhealthorganization.github.io/smart-base/StructureDefinition-SGRequirements.html) resource.

The requirements capture the following data:
<figure>
  {% include model_logicalmodel.svg %}
</figure>


### **Inputs:** 

* Personas, Processes and Requirements from L2
* Personas and Processes from L3

### **Outputs:**

* Requirements resources for all functional and non-functional requirements
<li class="todo">TO DO: Minimal testing expectations for all requirements?</p>

### **Activities:**
The L3 author takes the L2 requirements and expresses those as FHIR Requirements.

### **Output Criteria / Definition of Done:**
* Each requirement shall be associated with a Persona.
* Each Functional requirement shall have a link to a business [Process] that it is associated with
  * Each Functional requirement should have an Activity ID

* Each requirement shall have a unique id, a title, and a Scrum-like description:
  * *"As a "* ... [Persona]
  * *"I want"* ... [Functionality/activity]
  * *"So that"* ... [Functional goal]


### **Change tracking**
* Requirements are essential traceable artifacts. Every time a requirement changes, the change history shall be appended.

### **Tooling:**

| Tool | Usage | Doc |
| --- | ---| ---| 
| Sushi | Requirements can be authored in FSH syntax | [HL7 Spec](https://build.fhir.org/ig/HL7/fhir-shorthand/reference.html)<br/>[Sushi Documentation](https://fshschool.org) |
{:.table-bordered.full-width}  


### **Informative examples**

### **Known issues and dependencies:**


