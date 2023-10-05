Indicators are a machine-readable expressions that define the indicator and its input variables, population, and stratifiers. Indicators are expressed using FHIR Measure resource.

### **Inputs:** 
* L2 indicator definition
* Data dictionary
* CQL dependencies

### **Outputs:**
* Measure FHIR artifact
* Example MeasureReport corresponding to the test / example data included

### **Activities:**
Measures are defined using CQL. The activities to define such Measures are:
* Each indicator in the DAK corresponds to a Measure resource
* Create the Measure resource instance and populate metadata (author, title, description, etc.)
* Create the device "cqf-tooling" as the value for the extension http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-softwaresystem

* group.id must be the same as the name of the measure
* add the Library that is containing the definitions.

create scoring
From scoring, see what populations are permitted
https://build.fhir.org/ig/HL7/cqf-measures/measure-conformance.html#conformance-requirement-3-8
* How to figure out?



* If known, add the scoring, type, and improvementNotation

* data requirements:
  * add codes that are used directly in the measure
  Add the libraries that contain the functions 
  http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition


* From the Indicator definition, create the group(s), population(s) and stratifier(s)
  * Add description, and the CQL expression that will be available from a CQL library


Stratifiers: combined or not?
We must create a set of stratifiers which is the permutations that you care about.

Can we use measurereport to capture multiple values and computationally firgure out what are the figures behind
Could we have a way toadd parameters to subject.reference containing the values of each other stratifier for that person?



TO DO: Must be a profile of computable-measure-cqfm ?
TO DO: Effective data requirements as a library?
TO DO: Data requirement in effective-data-requirements - is it a search parameter?


### **Output Criteria / Definition of Done:**
* Indicators shall conform to the [SGMeasure](https://worldhealthorganization.github.io/smart-base/StructureDefinition-SGMeasure.html) profile.

* All the input variables shall be in the measure's `terms`.
* All terms shall part of the Data Dictionary

* At least one example MeasureReport should be provided
  * The example MeasureReport should indicate in which conditions
* There should be a package with all that is needed to evaluate the Measure and the `$evaluate-measure` operation, with example data included or available.

### **Change tracking**


### **Tooling:**

| Tool | Usage | Doc |
| --- | ---| --- |
| CQF Ruler | A FHIR server to upload the artifacts and test the `$evaluate-measure` | [Testing Measures](l3_measures_testing.html) |
{:.table-bordered.full-width}  
   

### **Informative examples**

### **Known issues and dependencies:**


