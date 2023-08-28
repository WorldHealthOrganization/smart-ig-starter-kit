
## Repositories

* SMART Guidelines L3 content SHALL be authored as a FHIR Implementation Guide. This ImplementationGuide SHOULD be a public repository on GitHub. 
  * When starting L3, if an IG is not present, it SHALL be created at that moment.

* The repository SHOULD be based on the WHO repository template: https://github.com/WorldHealthOrganization/smart-ig-empty.

* The default branch SHOULD be "main".

> For WHO repositories: WHO will create the repository.  
> For adaptations: Following HL7 recommendation, ideally the local HL7 affiliate will publish national specifications.  
> If the affiliate is not available or declines, other organisations can step in.

* The name of the repository should match the code of the IG (see #)


To publish: 
GH Pages
Enable pages from the gh-pages branch, root folder.
Confirm that the repo allows github actions to have read and write access
The standard build script and github action SHOULD be retained. If there are changes needed, they SHOULD be reported back to the community.
FHIR Build


The default branch is expected to build with the empty default content. Until a release is published, it SHOULD always clearly indicate it is not a published release  - or in the README or in the IG itself, an indication that the work may be followed in another location (pointing to the branch)

## Implementation Guide configuration

* Canonical url should be in the form `<smart_base_url>/<ig_code>`

* Package id should be in the form: `who.fhir.<ig_code>` Or `who.fhir.smart.<ig_code>` Or `who.smart.fhir.<ig_code>`



`<smart_base_url>` - all SMART Guidelines IGs will be published in one technical publication web space. `base_url`

`<ig_code>` - the ig code is the part of the package name that identifies the smart IG itself - for example `anc` for antenatal care


National adaptations: 
Affiliates can apply their ig package name convention to the smart guidelines IG. As a result, package IDs would be like `hl7.fhir.country.smart.<ig_code>` or `hl7.fhir.country.<ig_code>`.

