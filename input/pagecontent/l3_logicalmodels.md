
Logical models represent a data structure that can be used in a given
context. These are independent of any physical limitation like which
FHIR Release or profile version is used. 
The use of FHIR loogical models allows metadata to be structured, computable, and interoperable, 
for the purposes of governance and checking.

Creating a FHIR logical model entails capturing the elements in the Data
Dictionary, with their description, terminology and cardinality
constraints, in a computable form, for input validation and for
subsequent steps.

The Logical models represent the information shown below::

<figure>
  {% include model_logicalmodel.svg %}
</figure>


### **Inputs:** 

* DAK data elements Spreadsheet

### **Outputs:**

* Logical Models in `input/models` or `fsh/models`

### **Activities:**


#### Mapping DAK to a logical model

The Data models in the L3 are associated with a data structure for exchange or for a given process. For example "capture vaccination data". L2 authors are expected to follow that rule: one tab is assumed to be one single atomic structure.

This also becomes the "atomic" unit of exchange or use in the L3 - so normally one logical model should correspond to one tab. Some factors may influence the split of a logical model into several functional blocks:
- Very complex models may be split. For example a full "Lab Report" may consist of "Lab Report" + "Specimen" models.
- Common sets of data elements may be captured in a separate reusable logical model.

The logical model name has the name of the tab.

Upon starting to create the logical model, an intake validation is useful:
1.  Verify that each data element needed exists in the common Glossary
    1.  If not, create and provisionally use a draft concept, and
        request that concept to be added to the common glossary.
    2.  If it exists but the existing definition is too strict, request
        a change and decide whether to provisionally use the concept,
        or provisionally create a new one and request it to be added
        to the common glossary.
2. The data labels should be unique within the same data model


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
    -   Element id = same as label but no spaces and camelCase - e.g. "measlesVaccine"
    -   Element short description (`differential.element[*].short`) : same as element label

-   Description and Definition: `differential.element[*].definition`

-   Multiple Choice Type (if applicable): This means the question will have possibly several answers. This corresponds to a `*` in cardinality.

-   Data Type is captured in `differential.element[*].type`
    -   Logical data types should be defined

-   Input Options: is captured in the bindings

-   Input Option Groupings: this is a grouper for the rows that have a common group.

-   Quantity Sub-type (integer, decimal, duration)

-   Calculation

-   Validation Condition is captured in
    -   `differential.element[*].comment`
    -   `Optionally, as Invariants / constraints`

-   Required is captured in cardinality

-   Explain Conditionality

TO DO: define the links and how to store these links in a repository.

-   Annotations
    -   Example:
    -   "Measles Vaccine" → short= "measlesVaccine"
    -   `code[WHO]` = `IMMZ.Z1.DE9`

For bindings, check whether the value set already exists in an upstream package.

-   If not, create a new value set.
    -   New value sets are registered and follow the valueset governance process that is adjacent to authoring of L3 content.

#### Mapping to other semantic references
Semantic mapping is done with ConceptMaps, establishing the relationship between the DAK elements and reference terminologies, central dictionary, or other DAKS.



#### **Criteria / Definition of Done:**

-   All data elements in the DAK shall be in one logical model
-   All elements in the DAK have one and only one WHO Code. 
  -  The WHO code for all elements should be approved; exceptions should be resolved before final publication

### **Known issues and dependencies:**


  * Each L3 author is responsible for the documentation and approval of the mapping of each data element in the DAK to other terminologies.



### **Tooling:**

| Tool | Usage | Doc |
| --- | ---| ---| 
| Sushi | Create LMs with fsh syntax | [HL7 Spec](https://build.fhir.org/ig/HL7/fhir-shorthand/reference.html)<br/>[Sushi Documentation](https://fshschool.org) |

## TO DO: Not WHO CODES, but WHO SG Codes 

## TO DO: **Calculated data elements in the L2** SHALL be in the logical model
