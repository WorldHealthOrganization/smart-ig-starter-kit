
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

#### **Inputs:** 

* SMART IG ValueSet catalog
* Terminology services to lookup and validate the code


#### **Outputs:**

* ValueSets in 
* Updated list of value sets
* If a valueset changes since the last 
* Valueset usage registry?



#### **Activities:**

* ValueSet creation
* Add "Shareable", “publishable” extensions
* ValueSet reutilization:
  * ValueSets may be reused if the
  * While reusing of ValueSets is recommended, authors should be aware that a reuse also introduces a dependency
* ValueSet validation: The ValueSet should 

* CodeSystem creation
TO DO: When do we create a code system? When do we select codes from an existing code systems

#### **Output Criteria / Definition of Done:**

* sometexthere

#### **Issues:**

* Is there a relationship before ANC.B5.DE50 and the valueset name? Would the valueset for the values for that element have a similar name?
* this will actually result in changes to profiles - e.g. needing a value when the existing binding is Required