Business processes are structured into FHIR PlanDefinitions. This can be used to fully structure and define business business processes like what's done in BPM+, BPMN, etc. but most commonly the main goal is to keep inventory of the business processes as well as their the dependencies between processes, processes and actors, etc.

The L3 author must ensure there is a PlanDefinition for each Business Process mentioned
in the L2. 
If the Business Process isn't defined in the Personas Glossary yet,
this process can propose the creation of another different persona. This
creation of a new Business Process is a provisional measure; there SHALL be a
governance process for Business Processes. In that governance, there SHALL be a
requirement that all Business Process in the final publication of a
specification SHALL be approved.

### **Inputs:** 

* L2 Business Processes
* Business Process Repository

### **Outputs:**

* Proposed new Business Process definitions as PlanDefinitions (following the SMARTBusinessProces profile).
* Narrative page with business processes overview for the scope of the current guideline
* For readability, Business Process shall contain BPMN or BPM+ content or a separate diagram TO DO: Where is this content? 
TO DO: Add the rendering of BPMN diagrams to the IG Publisher template


### **Activities:**

### Checking for reusable Processes
* The author can check the existing process repository to see if there is a matching process. 
TO DO: Do we want to link processes to models?

### Creating new Processes
* Creating a new business process consists of creating a PlanDefinition resource following the profile BusinessProcess. The data needs are described in the model below:

<figure>
  {% include model_process.svg %}
</figure>


### **Output Criteria / Definition of Done:**

* 

### **Issues:**

* sometexthere