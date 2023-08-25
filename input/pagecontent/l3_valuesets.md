
For the elements whose value is from a set of (coded) options, a FHIR ValueSet should exist. 
* The L3 should use same codes as defined for LM
TO DO: Preferred Terminology Server
TO DO: Do we add a codesystem also for the discrete values e.g. male, female, etc

TO DO: in FHIR, whatever is the semantic pivot, the ValueSets should have a preferred order of codesystems:
* preferred: FHIR internal valuesets if they exist
* otherwise ICD-11
* otherwise ICD-10
???
* NOT The DE.5.1 whatever codes
How to decide?

### **Inputs:** 


* DAK
* SMART IG ValueSet catalog
* Terminology services to lookup and validate the code


### **Outputs:**

* ValueSets in `input/valuesets` or `input/fsh/valusets` 
* Proposal for any common value sets
* If a valueset changes since the last release, see [tracking changes](tracking_changes.html).
* Valueset usage registry?



### **Activities:**

* For each element in the DAK that has a value set - i.e. the answer depends on the options


* ValueSet creation: 
* Add "Shareable", “publishable” extensions
* ValueSet reutilization:
  * ValueSets may be reused if the
  * While reusing of ValueSets is recommended, authors should be aware that a reuse also introduces a dependency
* ValueSet validation: The ValueSet should be valid against the SMARTValueSet profile

#### CodeSystem creation
When defining a ValueSet, there may be a perceived need to create a CodeSystem:
* The 
TO DO: When do we create a code system? When do we select codes from an existing code systems


### Review procedure


### **Output Criteria / Definition of Done:**

* 

### **Issues:**

* Is there a relationship before ANC.B5.DE50 and the valueset name? Would the valueset for the values for that element have a similar name?
* this will actually result in changes to profiles - e.g. needing a value when the existing binding is Required
