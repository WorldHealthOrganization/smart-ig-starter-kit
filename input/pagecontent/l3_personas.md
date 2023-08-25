ActorDefinitions are the ways that the Personas are structured; A common repository of Personas allows reuse, exchange, change tracking, etc.  

The L3 author must ensure there is an ActorDefinition for each Persona mentioned
in the L2. If the Persona doesn't exist in the Personas Glossary yet,
this process can propose the creation of another different persona. This
creation of a new persona is a provisional measure; there SHALL be a
governance process for Personas. In that governance, there SHALL be a
requirement that all personas in the final publication of a
specification SHALL be approved.

### **Inputs:** 

* L2 Generic personas (Narrative)
* Personas Glossary (in ValueSet SGPersonas)
* Personas repository (in Common artifacts / central repository?)

### **Outputs:**

* L3 ActorDefinition compatible with the SGPersona profile
* Updated Personas ValueSet, if a new persona is defined. This should be submitted for validation
* Narrative page listing the Personas
  * TO DO: What to do with this? How is it published in L3? Table? Will add dependencies from tooling.

### **Activities:**

<img src="./process_personas.png" style="width:50%"/>
<br clear="all"/>

##### Reusing an existing Persona
If an ActorDefinition already exists in the Commons repository, and its
definitions is adequate to the case submitted, the author shall reuse an existing persona 
TO DO: how? See IG Publisher issue https://github.com/HL7/fhir-ig-publisher/issues/311
  -   Create a dummy / void profile

If an ActorDefinition already exists in the Commons repository, but its
definitions is not adequate to the case submitted,

-   If the existing persona is broader, no action.
-   If the existing persona is inadequate (e.g. too strict), it is best to suggest an updated definition.


If no ActorDefinition exists in the Commons repository, create a draft &
propose new persona:

`.identifier` - don't add an identifier. A final identifier will be
assigned in the persona approval / onboarding process.

`.status` = draft

`.name` - add a meaningful computer-readable name (no spaces, PascalCase)

`.title` - add a summary description

Personas will be associated with transactions. That tracking, and the licecycle of a persona, are managed elsewhere.


#### **Criteria / Definition of Done**
Personas SHALL use the SGPersona ActorDefinition profile
All the personas SHOULD be from the Personas glossary; any exceptions will have to be resolved before final publication

#### **Known issues and dependencies**
Can we use R5 in base / core and have an R4 IG depend on the R5 core?
(links to issues, or zulip, or open questions)
