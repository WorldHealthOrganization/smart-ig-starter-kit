SMART Guidelines consist of common types of interventions and content. 
Therefore some profiles for FHIR artifacts share commonalities. 

### **Inputs:** 

* Common Profiles (from commons clinical encounter)
* Activity to Profile mapping/catalog


### **Outputs:**
* Profiles in `input/profiles` or `input/fsh/profiles`


### **Activities:**


#### Identify profile needs
The FHIR profiles are determined by the need for information objects from the definitions:
* elements, 
* decision tables, 
* scheduling logic
* processes, 
* indicators

The L3 author consults the logical models and the business processes to see which profiles are necessary.

#### Identify reusable profiles
The L3 Author shall search the [common profiles](commonprofiles.html) repository to search for profiles that 
may exist which either 
* cover the exchange requirements for the scope
* may be profiled - if they are in a similar or broader area that can be constrained in a derived profile


#### Identify reusable profiles


For reference / Search for wisdom

* search for existing profiles
  * other SMART IGs
  * HL7 international balloted reference implementation guides
  * IHE profiles
  * HL7 national balloted reference implementation guides
  * other references
* search in previous or upcoming releases of FHIR 


* Profiles 


### **Output Criteria / Definition of Done:**

* All profiles shall be valid profiles
* All data elements that need to be exchanged or used in a decision, workflow, or indicator are covered by one or more profiles.


### **Tooling**
| Tool | Usage | Doc |
| --- | ---| ---| 
|  | |  |


### **Informative examples**


### **Known issues and dependencies**


