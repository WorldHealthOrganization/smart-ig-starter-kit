
## Repositories

* SMART Guidelines L3 content SHALL be authored as a FHIR Implementation Guide. This ImplementationGuide SHOULD be a public repository on GitHub. 
  * When starting L3, if an IG is not present, it SHALL be created at that moment.

* The repository SHOULD be based on the WHO repository template: https://github.com/WorldHealthOrganization/smart-ig-empty.

* The default branch SHOULD be "main".

> For WHO repositories: WHO will create the repository.  
> For adaptations: Following HL7 recommendation, ideally the local HL7 affiliate will publish national specifications.  
> If the affiliate is not available or declines, other organisations can step in.

* The name of the repository should match the code of the IG (see below).


## Publishing development builds : 
### GitHub Pages
When enabled, GitHub pages will contain the continuous build. This is triggered for every commit. 

To enable: 
* In the repository settings, enable pages from the gh-pages branch, root folder.
* Confirm that the repo allows github actions to have read and write access
* The standard build script and github action SHOULD be retained. If there are changes needed, they SHOULD be reported back to the community.

The result website is published on `https://WorldHealthOrganization.github.io/<repository-name>` (or generically, for non-WHO publications, `https://<OrganizationName>.github.io/<RepositoryName>` ).
Any branches are published on `https://<OrganizationName>.github.io/<RepositoryName>/branches/<branch-name>`.

### FHIR Build
The HL7 build page is also built. It uses the same tooling but slightly different infrastructure. It is required for the publications to be found by tooling and registries. 
The result website is published on `https://build.fhir.org/ig/WorldHealthOrganization/<repository-name>` (or generically, for non-WHO publications, `https://build.fhir.org/ig/<OrganizationName>/<RepositoryName>` ).
Any branches are published on `https://build.fhir.org/ig/<OrganizationName>/<RepositoryName>/branches/<branch-name>`.


The default branch is expected to build with the empty default content. Until a release is published, it SHOULD always clearly indicate it is not a published release  - or in the README or in the IG itself, an indication that the work may be followed in another location (pointing to the branch)

## Implementation Guide naming and configuration

All WHO SMART Guidelines IGs will be published in one technical publication web space, `https://smart.who.int`. For this, the following convention is required:

* Canonical url should be in the form `https://smart.who.int/<ig_code>`

* Package id should be in the form: `smart.who.int.<ig_code>`.

* `<ig_code>` is an identifier - it can contain dashes `-` and lowercase letters, numbers or hyphens. It must start with a lowercase character. The expression is `^[a-z][a-z0-9-]*$`. For example `anc` for antenatal care

National adaptations: 
Affiliates can apply their ig package name convention to the smart guidelines IG. As a result, package IDs would be like `hl7.fhir.country.smart.<ig_code>` or `hl7.fhir.country.<ig_code>`. This will impact the publication setup.

