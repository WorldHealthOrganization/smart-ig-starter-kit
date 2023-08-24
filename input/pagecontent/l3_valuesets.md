For the elements whose value may have multiple (coded) options, a FHIR ValueSet should exist. 
Use same codes as for LM
Preferred Terminology Server

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
* Add “Shareable”, “publishable” extensions
* ValueSet reutilization:
  * ValueSets may be reused if the
  * While reusing of ValueSets is recommended, authors should be aware that a reuse also introduces a dependency
* ValueSet validation: The ValueSet should 


#### **Output Criteria / Definition of Done:**

* sometexthere

#### **Issues:**

* Is there a relationship before ANC.B5.DE50 and the valueset name? Would the valueset for the values for that element have a similar name?