
Profiles are the FHIR representation of the data objects. They include constraints and extensions.
Profiles and extensions should be reusable as much as possible, and L3 authors should should aim for reusing reusable profiles/extensions and for creating profiles/extensions that can be reused by others. 


Profiles include Element constraints or extensions, and may include constraints:
<figure>
  {% include model_profile.svg %}
</figure>


### **Inputs:** 
The inputs for creating a profile, extensions and constraints are:
* Data models (DAK)
* Activity to Profile mapping/catalog
* Common Profiles (from commons clinical encounter)
* Common extensions from dependencies


### **Outputs:**
* Profiles in `input/profiles` or `input/fsh/profiles`
* In Shorthand, constraints should be in the same folder as the profile
* Extension definitions in `input/extensions` or `input/fsh/extensions`
* Example instances in `input/examples` or `input/fsh/examples`


### **Activities:**

<img src="./l3_process_profile.png" style="width:50%"/>
<br clear="all"/>


#### Identify profile needs
The FHIR profiles are determined by the need for information objects from the definitions:
* elements, 
* decision tables, 
* scheduling logic
* processes, 
* indicators

The L3 author consults the logical models and the business processes to see which profiles are necessary.

#### Identify reusable profiles
The L3 Author shall search the [common profiles](#) repository to search for profiles that 
may exist which either 
* cover the exchange requirements for the scope
* may be profiled - if they are in a similar or broader area that can be constrained in a derived profile

This search is in related sources - within the the SMART Guidelines ecosystem - or even outside, such as IHE or HL7 or national guidance. In these cases, 
the L3 author shall apply the necessary validation as the profiles may not meet the expectations or may change without warning.

The recommended priority for the search for existing profiles and extensions:
  * other SMART IGs
  * HL7 international balloted reference implementation guides
  * IHE profiles
  * HL7 national balloted reference implementation guides
  * other references
* search in previous or upcoming releases of FHIR 



### **Output Criteria / Definition of Done:**

* One profile per json file / One profile per fsh file, as per naming convention
  * The constraints or invariants applicable to a profile may be contained in the same FSH file.
* All profiles shall be valid profiles
* All data elements that need to be exchanged or used in a decision, workflow, or indicator are covered by one or more profiles.
* Every profile shall have one example instance

 
### **Change tracking**
* Profiles are essential traceability artifacts, and all changes to a profile shall be tracked in change history
* Breaking changes to a prior published release should follow a dedicated review process

### **Tooling**

| Tool | Usage | Doc |
| --- | ---| ---| 
| Sushi | Profiles can be authored in FSH syntax | [HL7 Spec](https://build.fhir.org/ig/HL7/fhir-shorthand/reference.html)<br/>[Sushi Documentation](https://fshschool.org) |
{:.table-bordered.full-width}  


### **Informative examples**
[SMART Guidelines - Immunizations (Measles): Profiles](https://worldhealthorganization.github.io/smart-immunizations-measles/artifacts.html#structures-resource-profiles)
[SMART Guidelines - Immunizations (Measles): Extensions](https://worldhealthorganization.github.io/smart-immunizations-measles/artifacts.html#structures-extension-definitions)


### **Known issues and dependencies**



