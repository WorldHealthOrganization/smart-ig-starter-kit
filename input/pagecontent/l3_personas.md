ActorDefinitions are the ways that the Personas are structured; A common repository of Personas allows reuse, exchange, change tracking, etc.  

Each Persona is defined by the following data:
<figure style = "width:15em">
  {% include model_persona.svg %}
</figure>

The L3 author must ensure there is an ActorDefinition for each Persona mentioned in the L2. If the Persona doesn't exist in the common Personas list yet,
this process can propose the creation of another different persona. This
creation of a new persona is a provisional measure; there SHALL be a
governance process for Personas. In that governance, there SHALL be a requirement that all personas in the final publication of a specification SHALL be approved.

### **Inputs** 

* L2 Generic personas (Narrative)
* Common Personas list (in Common artifacts / central repository?)

### **Outputs**

* L3 ActorDefinition (compatible with the SGPersona profile).
* Updated Personas ValueSet, if a new persona is defined. This should be submitted for validation using a process that is still to be defined.
* Narrative page listing the Personas

### **Activities**

<img src="./l3_process_persona.png" style="width:30%"/>
<br clear="all"/>
> Summary: The L3 author starts with the L2 persona and reuses an existing ActorDefinition from the Common Personas repository, if one exists. If not, the author creates an ActorDefinition, which will be added to the Common Personas repository.

#### Reusing an existing Persona
If an ActorDefinition already exists in the Commons repository, and its
definitions is adequate to the case submitted, the author shall reuse an existing persona.

If an ActorDefinition already exists in the Commons repository, but its
definitions is not adequate to the case submitted,

-   If the existing persona is broader, no action.
-   If the existing persona is inadequate (e.g. too strict), it is best to suggest an updated definition.

#### Creating a new Persona definition
If no ActorDefinition exists in the Commons repository, create a draft & propose a new persona.

`.identifier` - don't add an identifier. A final identifier will be assigned in the persona approval / onboarding process. 

`.status` = fixed value `draft`
`.name` - add a meaningful computer-readable name (no spaces, PascalCase)
`.title` - add a meaningful title we.g. `Healthcare Worker`
`.description` - add a summary description
`.type` - fixed value `person`
`.description` - add a summary description  


Personas will be associated with actions(processes). The tracking of that association is managed in another process. See [Common artifacts governance](#).


### **Criteria / Definition of Done**
* All Personas SHALL use the SGPersona ActorDefinition profile
* Each Persona source follow the guidelines for file content and names
* All the personas SHOULD be registered in (or proposed to) the Personas list; any exceptions will have to be resolved before final publication


### **Change tracking**

As with all FHIR Conformance resources, change management is critical. Do not set the version element of ActorDefinitions defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.html) topic for more information on change management.

### **Tooling**

| Tool | Usage | Doc |
| --- | ---| ---| 
| Sushi | New persona instances can be created in FSH syntax | [HL7 Spec](https://build.fhir.org/ig/HL7/fhir-shorthand/reference.html)<br/>[Sushi Documentation](https://fshschool.org) |
{:.table-bordered.full-width}  
   


### **Informative examples**

[SMART Guidelines - Immunizations (Measles): Example ActorDefinition(https://worldhealthorganization.github.io/smart-example-immz/ActorDefinition-CommunityHealthWorker.html)
[SMART Guidelines - Immunizations (Measles): Rendered set of ActorDefinitions](https://worldhealthorganization.github.io/smart-example-immz/personas.html)

### **Known issues and dependencies**
* Currently it is possible to use the ActorDefinition (an R5 resource) in FHIR R4 IGs but it not possible to create profiles in sushi for that resource



