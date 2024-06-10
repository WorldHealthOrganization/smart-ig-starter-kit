For faster validation and higher quality and consistency, the SMART Guidelines rely on automatic checking of quality.   

Every author shall check the automatically produced QA page, to ensure there are no issues which could block further work - L4 implementation or other L3 adaptations.  
  
Every FHIR ImplementationGuide has one page for quality checks - the [qa.html](qa.html) page. Every page in the Guide has a link at the bottom for that page.  

This QA page gives a detailed analysis of dependencies, completeness, conformance with stated rules.  
This shows the results of verification of the content of the Guide against the FHIR rules, but also the constraints specific to the SMART Guidelines.  


<div class="info-box should">
  <span class="info-title">The QA checks are always evolving and apply to all SMART Guidelines</span>
   Each ImplementationGuide is checked against a set of rules for content completeness, naming conventions, correct FHIR structure and other checks that are deemed important. <br/>
   The rules applied are derived from the criteria stated in this SOP; as the SOP evolves, so will the rules, which mean that new criteria may be added and new errors or warnings may appear when publishing a previously existing ImplementationGuide.
</div>



For example,  
* artifacts SHALL have a title and a description (for easy cataloging)
* elements in a logical model MAY have mappings to LOINC, SNOMED, etc. but SHALL have a mapping to an internal code, which will allow semantic consistency checking and better data architecture.

These rules are consolidated as profiles which are reused in every ImplementationGuide.  

The profiles are in the [SMART-Base](https://build.fhir.org/ig/WorldHealthOrganization/smart-base) Guide, which is a dependency for all Guides. 
By using the publication platform and dependencies, these constraints are automatically applied. The result is a QA Validation that is in the QA page.


