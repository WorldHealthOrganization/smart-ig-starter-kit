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
        - i. Proportion - [CQFMProportionMeasure](https://build.fhir.org/ig/HL7/cqf-measures/StructureDefinition-proportion-measure-cqfm.html)
        - ii. Ratio - [CQFMRatioMeasure](https://build.fhir.org/ig/HL7/cqf-measures/StructureDefinition-ratio-measure-cqfm.html)
        - iii. Cohort - [CQFMCohortMeasure](https://build.fhir.org/ig/HL7/cqf-measures/StructureDefinition-cohort-measure-cqfm.html)
        - iv. ContinuousVariable - [CQFMContinuousVariableMeasure](https://build.fhir.org/ig/HL7/cqf-measures/StructureDefinition-cv-measure-cqfm.html)  
    - b. NOTE: Proportion measures with an estimated denominator are modeled as ratio measures to allow the metric to be collected and analyzed downstream as a proportion measure when the estimated denominator is known
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
    - b. create populations appropriate to the scoring type (https://build.fhir.org/ig/HL7/cqf-measures/measure-conformance.html#criteria-names)
    - c. each population references an expression in the indicator library

* Create or reuse a CQL library that contains the definitions and functions that are needed for the Measure
  * see [Library authoring](l3_libraries.html) and [CQL authoring](l3_cql.html)

* Add the canonical URL of the Library to the Measure

* Depending on the type/purpose of the indicator, define the value for the measure [`scoring`](http://hl7.org/fhir/R4/valueset-measure-scoring.html). In particular:
    * If the indicator has an estimated denominator, it should be modeled as a ratio of continuous-variables, since the intent from the implementation perspective is to collect the data needed for evaluation, and the actual evaluation of the measure score will be performed by downstream applications.
    * Otherwise the indicator is a proportion measure (i.e. has numerator and denominator inclusion and potentially exclusion criteria)
    
* Add the `type` and `improvementNotation`

#### Estimated Denominator Measures

This topic discusses modeling measures that involve estimated denominators, i.e. measures where the denominator value is provided by other means, rather than derived from data in the source system.

For this discussion, we'll consider a measles indicator from the WHO SMART Guideline for Measles Immunizations:

```
Library: IMMZ.IND.12 Logic
Immunization coverage for Measles and rubella containing vaccine, 1st dose 
The percentage in the target population who have received one dose of measles and rubella vaccine during reporting period

Numerator: Number of measles and rubella doses (1st dose) administered through routine services during reporting period
Numerator Computation: COUNT of immunization events WHERE "Vaccine type" = "Measles and rubella containing vaccines"  for the first dose in the primary series AND "Date and time of vaccination" is during the reporting period
Denominator: Number in target group
Denominator Computation: As defined by the Member States

References: WHO Immunization facility analysis guide;WHO Handbook on immunization data
```

This indicator definition allows implementing member states to define the denominator. In some cases, the denominator is pulled from source system data, but in some cases, the denominator is based on population estimates from the region, rather than source system data.

To support this approach, instead of modeling the measure as a simple proportion measure, we set the measure up as a ratio of continuous variables. This allows us to control how the counting is performed for both the numerator and denominator values.

Because it is a ratio measure, we can define different bases for the denominator and numerator, so while the numerator will be patient-based, the denominator will be location-based:

```cql
/*
 * As defined by Member State, but defaulted based on locations with encounters
 */
define "Denominator Initial Population":
  [Location] L
    with "Encounter During Measurement Period" E
     such that E.location.references(L)

define "Denominator":
  "Denominator Initial Population"
```

By default, this sets up the denominator as the set of locations that had patient encounters.

```cql
define function "Denominator Observation"(location Location):
  Count(
    "Encounter During Measurement Period" E
      where E.location.references(location)
      return E.subject
  )
```

And we can simply provide a default observation function that counts the number of patients with encounters at each location.

For the numerator, this is modeled in the same way that a typical patient-based proportion measure would be:

```cql
define "Numerator Initial Population":
  exists ("Encounter During Measurement Period")

/*
 * Numerator: Number of measles and rubella doses (1st dose) administered through routine services during reporting period
 * Numerator Computation: COUNT of immunization events WHERE "Vaccine type" = "Measles and rubella containing vaccines"  for the first dose in the primary series AND "Date and time of vaccination" is during the reporting period
 */
define "Numerator":
  exists (
  	Elements."MCV Doses Administered to Patient During Measurement Period" I
	    where I.protocolApplied.only().doseNumber = 1
  )

define function "Numerator Observation"():
  if "Numerator" then 1 else 0
```

And then the numerator observation is just a 1 if the patient is in the numerator, and a 0 otherwise.

By setting up the measure in this way, we can allow implementing systems to define their own denominator observation, substituting counts of patients from the source system data with estimated counts for the location.

Note that in this case, we effectively have two continuous-variable measures, one for the denominator, and one for the numerator, and we need to indicate in the criteria which is which, using the criteriaReference extension:

```
  * population[denominator]
    * id = "IMMZ.IND.12.DEN"
    * extension[http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-criteriaReference].valueString = "denominator-initialPopulation"
    * description = "Locations in target group, as defined by Member State, but defaulted based on locations with encounters"
    * code = $measure-population#denominator "Denominator"
    * criteria.language = #text/cql-identifier
    * criteria.expression = "Denominator"
```

In addition, as with any continuous-variable criteria, we need to define the aggregation method for each measure observation using the aggregateMethod extension:

```
  * population[denominator-observation]
    * id = "IMMZ.IND.12.NUMOBS"
    * extension[http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-criteriaReference].valueString = "denominator-initialPopulation"
    * extension[http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-aggregateMethod].valueCode = #sum
    * description = "Number in target group, as defined by Member State, but defaulted to number of patients with encounters at each location"
    * code = $measure-population#measure-observation "Measure Observation"
    * criteria.language = #text/cql-identifier
    * criteria.expression = "Denominator Observation"
```

#### Define Population Criteria

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

> NOTE: Determining effective data requirements is a detailed process and should be done through the use of tooling such as the CQF Tooling to process Measure and Library resources

* Add a contained Library to the resource and refer to it using the expression [EffectiveDataRequirements](https://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-effectiveDataRequirements.html).

* If known, add the data requirements:
  * add codes that are used directly in the measure
  Add the libraries that contain the functions




### **Output Criteria / Definition of Done**

* All the input variables shall be in the measure's `terms`.
* All terms shall part of the Data Dictionary

* At least one example MeasureReport should be provided
  * The example MeasureReport should indicate in which conditions
* There should be a Bundle (Transaction) with all that is needed to evaluate the Measure and the `$evaluate-measure` operation, with example data included or available.
* Measures SHALL conform to [CRMIShareableMeasure](https://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-shareablemeasure.html)
* Active, published Measures SHOULD conform to [CQFMPublishableMeasure](https://build.fhir.org/ig/HL7/cqf-measures/StructureDefinition-publishablemeasure-cqfm.html)
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
[SMART Guidelines - Immunizations (Measles): Indicator 05](https://worldhealthorganization.github.io/smart-example-immz/Measure-IMMZIND05.html)
[SMART Guidelines - Immunizations (Measles): Indicator 08](https://worldhealthorganization.github.io/smart-example-immz/Measure-IMMZIND40.html)

### **Known issues and dependencies**
There are a few open questions on standards that are still pending to be addressed:

* Stratifiers: combined or not?
* Can we use measurereport to capture multiple values and computationally figure out what are the figures behind each aggregate?
  * Could we have a way to add parameters to subject.reference containing the values of each other stratifier for that person?

* Must Measure be a profile of computable-measure-cqfm ?
* Effective data requirements as a library?
* Data requirement in effective-data-requirements - is it a search parameter?
