Indicators are a machine-readable expressions that define the indicator and its input variables, population, and stratifiers. Indicators are expressed using FHIR Measure resource.

### **Inputs** 
* L2 indicator definition
* Data dictionary
* CQL dependencies

### **Outputs**
* Measure FHIR artifact
* Example MeasureReport corresponding to the test / example data included

### **Activities**

Measures are FHIR resources and can refer to CQL libraries. 

<img src="./l3_process_indicator.png" style="width:50%"/>
<br clear="all"/>

> Summary: For each indicator in the L2, the L3 author creates a Measure resource. This includes adding populations and stratifiers (consulting the CQF-Measures guidance). The create the CQL definitions needed for the calculations, which will be encoded into the Library resources.

1. For each indicator in the L2, create a Measure
  - a. The Measure SHALL conform to the appropriate scoring profile based on the scoring type:
      - i. Proportion - [CQFMProportionMeasure]({{site.data.fhir.ver.cqfm}}/StructureDefinition-proportion-measure-cqfm.html)
      - ii. Ratio - [CQFMRatioMeasure]({{site.data.fhir.ver.cqfm}}/StructureDefinition-ratio-measure-cqfm.html)
      - iii. Cohort - [CQFMCohortMeasure]({{site.data.fhir.ver.cqfm}}/StructureDefinition-cohort-measure-cqfm.html)
      - iv. ContinuousVariable - [CQFMContinuousVariableMeasure]({{site.data.fhir.ver.cqfm}}/StructureDefinition-cv-measure-cqfm.html)
  - b. NOTE: Proportion measures with an estimated denominator are modeled as continuous variable measures to allow the metric to be collected and analyzed downstream as a proportion measure when the estimated denominator is known
  - c. The Measure ID should be derived from the indicator code, e.g. IMMZ.IND.08 -> IMMZIND08
  - d. Url: The URL SHALL be: [base canonical]/Measure/[id]
  - e. Version: Do not set the version element, it will be set by the publication process
  - f. Name: The Name SHALL be the same as the id
  - g. Title: The L2 Indicator ID e.g. IMMZ.IND.08 Immunization coverage for Measles containing vaccine (Estimated Denominator)
  - h. Description: The long description of the indicator (i.e. the indicator description)
2. Create an "indicator" logic library specific to the measure, e.g. IMMZIND08Logic
  - a. The logic library SHALL contain expressions for each population criteria appropriate to the scoring type of the measure
  - b. The logic library SHALL make use of an IndicatorElements library to reference data elements from the guideline
  - c. The logic library MAY make use of an IndicatorLogic library to share common logic between multiple indicators in the guideline
2. Create a `group` appropriate to the scoring type (only one group is supported)
  - a. group.id SHALL be the same as the name of the measure
  - b. create populations appropriate to the scoring type ({{site.data.fhir.ver.cqfm}}/measure-conformance.html#criteria-names)
  - c. each population references an expression in the indicator library


* Create or reuse a CQL library that contains the definitions and functions that are needed for the Measure
  * see [Library authoring](l3_libraries.html) and [CQL authoring](l3_cql.html)

* Add the canonical URL of the Library to the Measure

* Depending on the type/purpose of the indicator, define the value for the measure [`scoring`](http://hl7.org/fhir/R4/valueset-measure-scoring.html). 
* Add the `type` and `improvementNotation`

* From the scoring, see what populations are permitted - according to the [CQF Guidance]({{site.data.fhir.ver.cqfm}}/measure-conformance.html#conformance-requirement-3-8)

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

> NOTE: Determining effective data requirements is a detailed process and should be done through the use of tooling such as the CQF Tooling to process Measure and Library resources

* Add a contained Library to the resource and refer to it using the expression [EffectiveDataRequirements]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-effectiveDataRequirements.html).

* If known, add the data requirements:
  * add codes that are used directly in the measure
  Add the libraries that contain the functions using [Logic Definition]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-logicDefinition.html)




### **Output Criteria / Definition of Done**

* All the input variables shall be in the measure's `terms`.
* All terms shall part of the Data Dictionary

* At least one example MeasureReport should be provided
  * The example MeasureReport should indicate in which conditions
* There should be a Bundle (Transaction) with all that is needed to evaluate the Measure and the `$evaluate-measure` operation, with example data included or available.
* Measures SHALL conform to [CRMIShareableMeasure]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablemeasure.html)
* Active, published Measures SHALL conform to [CQFMPublishableMeasure]({{site.data.fhir.ver.cqfm}}/StructureDefinition-publishablemeasure-cqfm.html)
* Measures SHALL conform to the profile appropriate to their scoring type (as described above)


### **Change tracking**
As with all FHIR Conformance resources, change management is critical. Do not set the version element of Measures defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.html) topic for more information on change management.

### **Tooling**

| Tool | Usage | Doc |
| --- | ---| --- |
| Sushi | Create FHIR resources in FSH syntax | [HL7 Spec](https://hl7.org/fhir/uv/shorthand/reference.html)<br/>[Sushi Documentation](https://fshschool.org) |
| CQF Ruler | A FHIR server to upload the artifacts and test the `$evaluate-measure` |  |
{:.table-bordered.full-width}  
   

### **Informative examples**
[SMART Guidelines - Immunizations (Measles): Indicator 05](https://worldhealthorganization.github.io/smart-immunizations-measles/Measure-IMMZIND05.html)
[SMART Guidelines - Immunizations (Measles): Indicator 08](https://worldhealthorganization.github.io/smart-immunizations-measles/Measure-IMMZIND40.html)

### **Known issues and dependencies**

* Stratifiers: combined or not?
* Can we use measurereport to capture multiple values and computationally figure out what are the figures behind each aggregate?
  * Could we have a way to add parameters to subject.reference containing the values of each other stratifier for that person?

* What is the cqfm-logicDefinition? 
* Must Measure be a profile of computable-measure-cqfm ?
* Effective data requirements as a library?
* Data requirement in effective-data-requirements - is it a search parameter?
