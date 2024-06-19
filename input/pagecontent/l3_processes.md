Business processes are structured into FHIR PlanDefinitions. This can be used to fully structure and define business business processes like what's done in BPM+, BPMN, etc. but most commonly the main goal is to keep inventory of the business processes as well as their the dependencies between processes, processes and actors, etc.

The L3 author must ensure there is a PlanDefinition for each Business Process mentioned in the L2. 

The data required to be captured for each Business Process is:
<figure style = "width:15em">
  {% include model_process.svg %}
</figure>


### **Inputs** 

* L2 Business Processes
* Business Process Repository
* L2 DAK

### **Outputs**

* Proposed new Business Process definitions as PlanDefinitions.

### **Activities**
<img src="./l3_process_process.png" style="width:30%"/>
<br clear="all"/>
> Summary: From the L2 Business Process, the L3 author creates a PlanDefinition to illustrate the business process. 


### **Output Criteria / Definition of Done**
* Each Business Process SHALL have a corresponding PlanDefinition
* Each PlanDefinition representing a Business Process SHALL conform to the [CRMIShareablePlanDefinition](http://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-shareableplandefinition.html) profile
* Each active published PlanDefinition representing a Business Process SHALL conform to the [CRMIPublishablePlanDefinition](http://hl7.org/fhir/uv/crmi/StructureDefinition-crmi-publishableplandefinition.html) profile
* Each PlanDefinition representing a Business Process SHALL have:
  * name: A computable name for the process
  * title: A short, user-friendly description of the process
  * type: workflow-definition
  * description: A detailed description of the process
* For each "node" in the business process representing an activity to be performed, the PlanDefinition should have an `action` element:
  * title: A short, user-friendly description of the activity
  * description: A more detailed description of the activity
  * participant: Identify the expected participants in the activity, identified by the [Persona](l3_personas.html)
* Connect the nodes as appropriate to indicate process flow
  * relatedAction:
    * actionId: a reference to the related activity
    * relationship: the type of relationship (note that the `before-start` relationship should be favored, and that relationships should only be characterized in one direction)

For more information, see the [Mapping and Other Formalisms](https://hl7.org/fhir/uv/cpg/documentation-methodology.html#bpmn-and-fhir) topic in the Clinical Practice Guidelines implementation guide.

### **Change tracking**

As with all FHIR Conformance resources, change management is critical. Do not set the version element of PlanDefinitions defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.html) topic for more information on change management.

### **Tooling**


### **Informative examples**

* [CPG Common Pathway](https://hl7.org/fhir/uv/cpg/2024Jan/PlanDefinition-cpg-common-pathway.html)
* [CPG Common Registration Example](https://hl7.org/fhir/uv/cpg/2024Jan/PlanDefinition-cpg-common-registration.html)


### **Known issues and dependencies**


