Examples are essential for L3 authors to validate the specification before it is implementable.
Each SMART Implementation Guide shall contain sufficient data to validate itself, which includes examples that contain the data that is intended to assert and assess the functioning of the specification in the available tooling.

### **Inputs:** 

* Conformance / Definitional artifacts: 
* Example Scenarios

### **Outputs:**

* Example instances of resources - Patient, Observation, ... that can be used on the available tools to validate the specification.

### **Activities:**

* For each of the definitional artifacts, the author shall create an example instance, matching the story and data of its predecessors - for example an Immunization or Observation that contain the data that is in the logical model example, which matches the story line selected.

### **Output Criteria / Definition of Done:**

* Examples should be in the main package, or may be in a dedicated package when the number of examples is significant.
* Each of the definitional artifacts shall have at least one example
* Examples should be conformant to their specification - i.e. no QA errors
* Terminology used in the examples, even with example bindings, shall be defined as L3 valuesets and codesystems.


### **Change tracking**
* All the validating examples should follow the same rules as for normative materials - i.e. track changes for each relevant change
* Other examples are normally not normative material

### **Tooling:**

| Tool | Usage | Doc |
| --- | ---| ---| 
| Sushi | Examples can be authored in FSH syntax | [HL7 Spec](https://build.fhir.org/ig/HL7/fhir-shorthand/reference.html)<br/>[Sushi Documentation](https://fshschool.org) |
| CQF tooling | CQF tooling can generate example instances |  |
{:.table-bordered.full-width}  


### **Informative examples**
[SMART Guidelines - Immunizations (Measles): Example Immunization event](https://worldhealthorganization.github.io/smart-immunizations-measles/Immunization-Immunization1.html)
[SMART Guidelines - Immunizations (Measles): Example QuestionnaireResponse](https://worldhealthorganization.github.io/smart-immunizations-measles/QuestionnaireResponse-Example.IMMZ.C.QuestionnaireResponse.1.html)


### **Known issues and dependencies:**

* Test and Data generation, and packaging of such data, might take considerable effort. This will be handled when tools and processes are in place.
 
