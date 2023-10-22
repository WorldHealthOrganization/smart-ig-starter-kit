
Logical models represent the data structures in the Digital Dictionary. This is a computable representation that is independent of any physical limitation like which FHIR Release or profile version is used. 
The use of FHIR loogical models allows metadata to be structured, computable, and interoperable, for the purposes of governance and checking.

Creating a FHIR logical model entails capturing the elements in the Data Dictionary, with their description, terminology and cardinality constraints.

Logical models relate to other models in 3 aspects:
* Logical models can extend or constrain "parent" models - for example a Patient extending a Person
* Logical models can "contain" other models as a data type - for example patient and practitioner containing "name" ddata structure
* Logical models can refer to other models - for example a request referencing a product


Each Logical Model is defined by the following data:
<figure>
  {% include model_logicalmodel.svg %}
</figure>


### **Inputs:** 

* DAK data elements Spreadsheet

### **Outputs:**

* Logical Models in `input/models` or `fsh/models`

### **Activities:**

This is the overview of the activities and related artifacts used:
<img src="./l3_process_logicalmodel.png" style="width:50%"/>
<br clear="all"/>


#### Looking up existing models

Some of the data entries are commons. 

If an existing model is found, it is possible to
* reuse the model as is;
* create a specialization of the model - this includes adding elements, removing elements, changing elements;

<div class="todo">
TO DO: describe what can be done with logical model specializations.
</div>

Inheritance is preferred for consistency, but the advantage should be checked against the dependency added - if the model that is being authored is expected to increasingly differ from the "parent" model, it may be best to consider a specialization or a new model.


#### Mapping DAK to a logical model
The Data models in the L3 are associated with a data structure for exchange or for a given process. For example "capture vaccination data". L2 authors are expected to follow that rule: **one tab is assumed to be one data structure, i.e. a logical data model**.

This is the "atomic" unit of exchange or use in the L3. Some factors may influence the split of a logical model into several functional blocks, besides the specialization, reference and usage described above. For example:
- Complex models may be split. For example a full "Lab Report" may consist of "Lab Report" + "Specimen" models.
- Common sets of data elements may be captured in a separate reusable logical model.

The logical model name has the name of the tab.
Logical model should conform to the [SGLogical](http://build.fhir.org/ig/WorldHealthOrganization/smart-base/StructureDefinition-SGLogicalModel.html) model profile.

Creating the logical model from a DAK consists in creating the data structure, linking the elements to the common concept identifiers or, if that is not possible, to the internal unique concept identifiers (e.g. `DE1`, etc.). Additionally, assigning valuesets (creating them when needed), and capturing any constraints that are persent in the L2.

To start creating the logical model, an intake validation is useful, although it can be done simultaneouslty done with the editing of the logical model:
1.  Verify that each data element needed exists in the common Glossary
    1.  If not, create and provisionally use a draft concept, and
        request that concept to be added to the common glossary.
    2.  If it exists but the existing definition is too strict, request
        a change and decide whether to provisionally use the concept,
        or provisionally create a new one and request it to be added
        to the common glossary.
2. The data labels should be unique within the same data model.

For each line in the tab, there shall be one data element in the logical model (represented here by `differential.element[*]`):

* Data Element ID is the WHO unique identifier for a concept and therefore is added into `element[*].code[WHOCommon]`.  
* Every element SHALL have a WHO identifier e.g. TB.A.DE.1. 

* For answer values, the Data Element ID may be reusable in different questions and possibly in different models.
The hierarchical naming will depend on several factors and is best addressed by the terminology expert or team. For example:
    -   DE.1 Do you have measles?
    -   Yes → C.1 Yes
    -   No → C.2 No
    -   Unknow → C.3 Unknown  
   
*   Data Element Label is captured in 2 places:
    -   Element short description (`differential.element[*].short`): same as element label
    -   Element id = same as label but no spaces and camelCase - e.g. "measlesVaccine"
> this makes the logical model tree easier to read, with meaningful names in the tree, while the mapping to the "internal" element ids like `DE1.3` are persisted as a mapping.

-   Description and Definition: `differential.element[*].definition`

-   Multiple Choice Type (if applicable): This means the element may have several possible values (as in a multiple-choice question). This corresponds to a `*` in cardinality.

-   Data Type is captured in `differential.element[*].type` 
  
<span class="todo">    - TO DO:  Logical data types should be defined </span>


-   Input Options: is captured in the bindings


-   Input Option Groupings: this is a grouper for the rows that have a common group.

-   Quantity Sub-type (integer, decimal, duration)

-   Calculation

-   Validation Condition is captured in
    -   `differential.element[*].comment`
    -   `Optionally, as Invariants / constraints`

-   Required is captured in cardinality

-   Explain Conditionality
<div class="todo">
TO DO: define the links and how to store these links in a repository.
</div>
-   Annotations
    -   Example:
    -   "Measles Vaccine" → short= "measlesVaccine"
    -   `code[WHO]` = `IMMZ.Z1.DE9`

For bindings, check whether the value set already exists in an upstream package.

-   If not, create a new value set.
    -   New value sets are registered and follow the valueset governance process that is adjacent to authoring of L3 content.


#### Binding elements to value sets
When adding valuesets, the binding strength should be considered: 
* If the valueset is expected to be used or adapted in downstream adaptations, the binding should be more permissive (i.e. either example or preferred).
See [valuesets](l3_valuesets.html) for procedures on obtaining or creating valuesets.



#### Mapping to other semantic references
Semantic mapping is done with ConceptMaps, establishing the relationship between the DAK elements and reference terminologies, central dictionary, or other DAKS.



### **Criteria / Definition of Done:**

* One logical model per json file / One profile per fsh file, as per naming convention
  * The constraints or invariants applicable to a logical model may be contained in the same FSH file.
  * elements that are repeatable across different models (e.g. Patient Demographics) shall be in a separate FSH file.
* All data elements in the DAK shall be in one logical model
* All data elements defined in DAK as calculated elements shall be present in a logical model
* All elements in the DAK have one and only one WHO SMART Code. 
  *  The WHO code for all elements should be approved; exceptions should be resolved before final publication
* Each data element in the logical model is mapped to the existing semantic references - see [semantic references](#).
  * The L3 author is responsible for the documentation and approval of the models, its bindings, invariants and mappings


### **Change tracking**



### **Tooling:**

| Tool | Usage | Doc |
| --- | ---| ---| 
| Sushi | Create LMs with fsh syntax | [HL7 Spec](https://build.fhir.org/ig/HL7/fhir-shorthand/reference.html)<br/>[Sushi Documentation](https://fshschool.org) |
{:.table-bordered.full-width}  
   



### **Informative examples**
[SMART Guidelines - Immunizations (Measles): Logical Models](https://worldhealthorganization.github.io/smart-immunizations-measles/artifacts.html#structures-logical-models)


### **Known issues and dependencies:**


