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
> Summary: From the L2 Business Process, the L3 author creates a PlanDefinition to illustrate the business process. This may include capturing the business process as a BPMN diagram.  


### **Output Criteria / Definition of Done**
* The PlanDefinition should 

### **Change tracking**

As with all FHIR Conformance resources, change management is critical. Do not set the version element of PlanDefinitions defined in the SMART Guideline, the version element will be set by the publication process. See the [versioning](versioning.html) topic for more information on change management.

### **Tooling**
There are several tools to edit BPMN processes. For example [bpmn.io](https://bpmn.io/) is a reference open source implementation of the standard.

### **Informative examples**


### **Known issues and dependencies**


