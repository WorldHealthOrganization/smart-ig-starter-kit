L3 authors have the responsibility to ensure that the data models use standard concepts.
There are several reference information models and definitions, each with their purpose, their localization possibilities. Picking a standard model is therefore not guarantee of full-proof semantic interoperability.  

For an L3 author, the requirement is to ensure that **every data element mentioned in the logical model is mapped to a WHO Commons concept in the WHO Common dictionary**.

This introduces the WHO SMART Commons dictionary as the pivotal semantic reference. In turn, the WHO SMART Commons dictionary relates to any other semantic reference

* The WHO SMART Commons dictionary is a central, managed repository of concepts, their definitions and mappings.
* Concepts are referenced by their identifier. Concepts can relate to different identifiers
  * For example the concept in Immunization `IMMZ.C#DE2` (Client name) SHALL map to
    * (a concept in the WHO Commons dictionary)
    * `371484003` in SNOMED CT
    * `PatientAttributes.Name`in IPS
  
Where possible, reference models should be used; different implementations may need to follow different models - this approach supports further semantic interoperability.
See section "Semantic Compatibility Assessment" for more details.

### Concepts and dictionary governance
The introduction of concept management (by means of common data dictionaries) enables a more complete approach to semantic interoperability.

Each concept in the Commons dictionary has therefore its definition and mappings:
<figure>
  {% include concept-dictionary.svg %}
  <figcaption>Concepts and Dictionary - metadata</figcaption>
</figure>


The mapping is maintained centrally.

* New concepts can be created:
* Authors should consult the core dictionary to see if a concept is defined. If a concept exists and is approved, it can be used in the topic dictionary without further approval.
* Approval is done by a dedicated entity, onboarding concepts into the common dictionary, verifying overlaps, duplicates...
* Concepts can be defined from scratch but normally are onboarded from existing reference dictionaries, e.g. ICD-11 or IPS
  * The onboarding process is the same - at the end, all concepts have one key identifier and are thus part of the common dictionary


A possible governance process is displayed in the diagram below:
<img src="./concept_governance.png" style="width:50%"/>
<br clear="all"/>

### Impact for authors

* To ensure the SMART Guideline is semantically interoperable, it should not be released if its data models use concepts that are not approved - this will be reported as a QA issue.
* It is still possible for authors to proceed with draft concepts, to enable them to continue their work.
* Adaptation requires mappings - See section "Semantic Compatibility Assessment" for more details.


### Impact for implementers
* Using the standard mappings, implementers can define **standard** mapping / conversion data pipelines
