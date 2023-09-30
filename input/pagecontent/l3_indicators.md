Indicators are a machine-readable expressions that define the indicator and its input variables, population, and stratifiers. Indicators are expressed using FHIR Measure resource.

### **Inputs:** 
* L2 indicator definition
* Data dictionary

### **Outputs:**
* Measure
* Example MeasureReport corresponding to the test / example data included

### **Activities:**
Measures are defined using CQL. The activities to define such Measures are:
* Create the Measure resource instance and populate metadata (author, title, description, etc.)
* Create the group(s), population(s) and stratifier(s)
  * Add description, and the CQL expression that will be available from a CQL library

* sometexthere



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
| CQF Ruler | A FHIR server to upload the artifacts and test the `$evaluate-measure` | [Testing Measures](#) |
{:.table-bordered.full-width}  
   

### **Informative examples**

### **Known issues and dependencies:**


