Indicators are a machine-readable expressions that define the indicator and its input variables, population, and stratifiers. Indicators are expressed using FHIR Measure resource.

### **Inputs:** 
* L2 indicator definition
* Data dictionary
* CQL dependencies

### **Outputs:**
* Measure FHIR artifact
* Example MeasureReport corresponding to the test / example data included

### **Activities:**
Measures are FHIR resources and can refer to CQL libraries. 
<img src="./l3_process_indicator.png" style="width:50%"/>
<br clear="all"/>
> Summary: For each indicator in the L2, the L3 author creates a Measure resource. This includes adding populations and stratifiers (consulting the CQF-Measures guidance). The create the CQL definitions needed for the calculations, which will be encoded into the Library resources.

Creating an indicator from the L2 means:

* For each indicator in the DAK, a Measure resource instance needs to be created
  * `id` is the code of the indicator but with no dashes or underscores
  * Currently only one group is supported per Measure. The measure's `group.id` must be the same as the name of the measure.
* Populate metadata (author, title, description, etc.) from the L2:
  * `title` is the Indicator name
  * `description` is the description in L2
  * `Name` should be the Indicator name but without spaces, dashes or underscores e.g. `ImmunizationCoverageForBCG`


* Create or reuse a CQL library that contains the definitions and functions that are needed for the Measure
  * see [Library authoring](l3_libraries.html) and [CQL authoring](l3_cql.html)

* Add the canonical URL of the Library to the Measure

* Create the resource device "cqf-tooling" and point to it as the value for the extension `http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-softwaresystem`

* Depending on the type/purpose of the indicator, define the value for the measure [`scoring`](http://hl7.org/fhir/R4/valueset-measure-scoring.html). 
* Add the `type` and `improvementNotation`

* From the scoring, see what populations are permitted - according to the [CQF Guidance](https://build.fhir.org/ig/HL7/cqf-measures/measure-conformance.html#conformance-requirement-3-8)

* For each population, define the code and id, the description, and the cql expression that evaluates the population. For example,
```
* group
  * id = "IMMZIND08"
  * population[0]
    * id = "measure-population"
    * code = $measure-population#measure-population
    * description = "Number of administrations of vaccinations containing a Measles component during reporting period"
    * criteria
      * language = #text/cql
      * expression = "measure-population"
```

* For each stratifier, define the id and the cql expression that evaluates the population. For example,
  * L3 Authors must create a set of stratifiers which is the permutations that are considered important. The stratifiers produce aggregate values and it may be impossible to disaggregate inside a stratifier.
```
  * stratifier[+]
    * id = "age-group-stratifier"
    * criteria
      * language = #text/cql
      * expression = "Age Group Stratifier"
```

* Add a contained Library to the resource and refer to it using the expression [EffectiveDataRequirements](http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-effectiveDataRequirements).

* If known, add the data requirements:
  * add codes that are used directly in the measure
  Add the libraries that contain the functions 
  http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition




### **Output Criteria / Definition of Done:**
* Indicators shall conform to the [SGMeasure](https://worldhealthorganization.github.io/smart-base/StructureDefinition-SGMeasure.html) profile.

* All the input variables shall be in the measure's `terms`.
* All terms shall part of the Data Dictionary

* At least one example MeasureReport should be provided
  * The example MeasureReport should indicate in which conditions
* There should be a Bundle (Transaction) with all that is needed to evaluate the Measure and the `$evaluate-measure` operation, with example data included or available.



### **Change tracking**
All FHIR artifacts and CQL libraries are subject to change tracking.


### **Tooling:**

| Tool | Usage | Doc |
| --- | ---| --- |
| Sushi | Create FHIR resources in FSH syntax | [HL7 Spec](https://build.fhir.org/ig/HL7/fhir-shorthand/reference.html)<br/>[Sushi Documentation](https://fshschool.org) |
| CQF Ruler | A FHIR server to upload the artifacts and test the `$evaluate-measure` |  |
{:.table-bordered.full-width}  
   

### **Informative examples**
[SMART Guidelines - Immunizations (Measles): Indicator 05](https://worldhealthorganization.github.io/smart-immunizations-measles/Measure-IMMZIND05.html)
[SMART Guidelines - Immunizations (Measles): Indicator 08](https://worldhealthorganization.github.io/smart-immunizations-measles/Measure-IMMZIND40.html)

### **Known issues and dependencies:**

* Stratifiers: combined or not?
* Can we use measurereport to capture multiple values and computationally figure out what are the figures behind each aggregate?
  * Could we have a way to add parameters to subject.reference containing the values of each other stratifier for that person?

* What is the cqfm-logicDefinition? 
* Must Measure be a profile of computable-measure-cqfm ?
* Effective data requirements as a library?
* Data requirement in effective-data-requirements - is it a search parameter?
