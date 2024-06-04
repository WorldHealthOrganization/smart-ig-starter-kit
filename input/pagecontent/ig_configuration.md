### **ImplementationGuide configuration**

The L3 Author needs to configure the Implementation Guide:

For WHO-authored Guidelines (i.e. not for adaptations), the configuration includes:

 After initializing the IG, it must be configured.   
   
For WHO-authored Guidelines (i.e. not for adaptations), the configuration includes:

* Id: `smart.who.int.<ig_code>`
* Canonical url: `http://smart.who.int/<ig_code>`
* Package id: `smart.who.int.<ig_code>`
* Name: Machine-friendly `<IgName>` (i.e. no spaces, pascal-cased)
* Title: User-friendly `Ig Name` (i.e. title-cased)
* Status: `draft` initially
* Version: `0.1.0` initially, see [Versioning](versioning.md) for more details on artifact versioning
* Jurisdiction: Should be 001 from http://unstats.un.org/unsd/methods/m49/m49.htm for World (see https://www.hl7.org/fhir/valueset-jurisdiction.html)
* Publisher: Set as appropriate for the publisher (i.e. steward) of the IG
* ImplementationGuide resources SHALL conform to [CRMIShareableImplementationGuide]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareableimplementationguide.html)
* Active, published ImplementationGuide resources SHALL conform to [CRMIPublishableImplementationGuide]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-publishableimplementationguide.html)
* ImplementationGuide resources SHALL conform to [CPGComputableImplementationGuide]({{site.data.fhir.ver.cpg}}/StructureDefinition-cpg-computableimplementationguide.html)


For National adaptations: 
- If the country or region has an an HL7 affiliate, the HL7 affiliate can include the smart guidelines in their publication process and use the defined conventions
  - Package id convention is defined locally, e.g. `hl7.fhir.country.smart.xxx`
- If there is no affiliate or the affiliate declines, other organizations 

* L3 authors should ensure that the content has some feedback mechanism.

