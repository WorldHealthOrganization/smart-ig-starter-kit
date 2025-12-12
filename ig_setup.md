# Github Setup - SMART Guidelines Starter Kit v2.1.0

* [**Table of Contents**](toc.md)
* [**GitHub Repositories**](ig_repositories.md)
* **Github Setup**

## Github Setup

* SMART Guidelines L3 content SHALL be authored as a FHIR Implementation Guide. This ImplementationGuide SHOULD be a public repository on GitHub. 
* When starting L3, if an IG is not present, it SHALL be created at that moment.
 
* The [smart-ig-empty](https://github.com/WorldHealthOrganization/smart-ig-empty) is the repository that should be forked to create a new Implementation Guide. 
* To do so, click on "Use this Template" option in Github. **Ensure that the option to "Include all branches".** so that the `gh-pages` branch is also cloned. Otherwise you must create it manually.
* For WHO repositories: WHO will create it upon request. 
* The name of the repository depends on the organization for WHO, should be smart-(where ig_code is the accepted ig_code for the programme area, see below for more)
 
* For National adaptations, HL7 has the following recommendations: 
* If the country or region has an affiliate, it is recommended that the affiliate includes the smart guidelines in their process
* The recommended package id in this case is: `hl7.fhir.country.smart.xxx`
* If there is no affiliate or the affiliate declines, other organizations may fulfill this role
 
* The default branch SHOULD be "main".
 

### GHPages Build

GitHub pages contain the continuous build. This is triggered for every commit.

* To publish GH Pages 
* Enable pages from the gh-pages branch, root folder.
* Confirm that the repo allows github actions to have read and write access
* The standard [build script and github action](https://github.com/WorldHealthOrganization/smart-ig-empty/tree/main/.github/workflows) SHOULD be retained. If there are changes needed, they SHOULD be reported back to the community. 
* GHBuild: builds the pages in 
* `<org_name>.github.io/<repo_name> for default branch`
* `<org_name>.github.io/<repo_name>/branches/branch_name` for other branches
 
 
 

The default branch is expected to build with the empty default content. Until a release is published, it SHOULD always clearly indicate it is not a published release - or in the README or in the IG itself, an indication that the work may be followed in another location (pointing to the branch)

### FHIR Build

The HL7 build page is also built. It uses the same tooling but slightly different infrastructure. It is required for the publications to be found by tooling and registries. The result website is published on `https://build.fhir.org/ig/WorldHealthOrganization/<repository-name>` (or generically, for non-WHO publications, `https://build.fhir.org/ig/<OrganizationName>/<RepositoryName>` ). Any branches are published on `https://build.fhir.org/ig/<OrganizationName>/<RepositoryName>/branches/<branch-name>`.

### Implementation Guide naming and configuration

All WHO SMART Guidelines IGs will be published in one technical publication web space, `https://smart.who.int`. For this, the following convention is required:

* Canonical url should be in the form `https://smart.who.int/<ig_code>`
* Package id should be in the form: `smart.who.int.<ig_code>`.
* `<ig_code>` is an identifier - it can contain dashes `-` and lowercase letters, numbers or hyphens. It must start with a lowercase character. The expression is `^[a-z][a-z0-9-]*$`. For example `anc` for antenatal care

National adaptations: Affiliates can apply their ig package name convention to the smart guidelines IG. As a result, package IDs would be like `hl7.fhir.country.smart.<ig_code>` or `hl7.fhir.country.<ig_code>`. This will impact the publication setup.

