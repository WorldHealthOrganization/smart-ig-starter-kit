When starting L3, if an IG is not present, it should be created.

### Repositories

A SMART Guidelines Implementation Guide makes use of existing tooling and content, to create a consistent ecosystem and allow L3 developers to focus on the authoring and validation.

The key repositories that play a role are identified in the diagram below:

<figure>
  {% include dependencies.svg %}
</figure>

### Repository Setup
The [SMART-Empty repository](https://github.com/WorldHealthOrganization/smart-ig-empty) is the repository that should be forked to create a new Implementation Guide. 
To do so, click on "Use this Template" option in Github.  
** Ensure that the option to "Include all branches".** so that the `gh-pages` branch is also cloned. Otherwise you must create it manually. 
* For WHO repositories: WHO will create it upon request.
* For adaptations: Entities that are producing the SMART Implementation Guide are advised to define some level of responsibility, or leaving it to the authors. 

  * For National adaptations, HL7 has the following recommendations:
    * If the country or region has an affiliate, it is recommended that the affiliate includes the smart guidelines in their process
    * The recommended package id in this case is: `hl7.fhir.country.smart.xxx`
    * If there is no affiliate or the affiliate declines, other organizations may fulfill this role



* The name of the repository depends on the organization 
  * for WHO, should be smart-xxxx (where xxxx is the name of the IG)


* The repository SHOULD be based on the WHO repository template: https://github.com/WorldHealthOrganization/smart-ig-empty 

* The default branch SHOULD be "main"
* To publish: 
  * GH Pages
    * Enable pages from the gh-pages branch, root folder.
    * Confirm that the repo allows github actions to have read and write access
    * The standard [build script and github action](https://github.com/WorldHealthOrganization/smart-ig-empty/tree/main/.github/workflows) SHOULD be retained. If there are changes needed, they SHOULD be reported back to the community.
      * GHBuild: builds the pages in 
        * `<org_name>.github.io/<repo_name> for default branch`
        * `<org_name>.github.io/<repo_name>/branches/branch_name` for other branches
      * FHIRBuild: triggers the HL7 hook which builds the pages in 
        * `build.fhir.org/ig/<org_name>/<repo_name>` for default branch
        * `build.fhir.org/ig/<org_name>/<repo_name>/branches/branch_name` for other branches

The default branch is expected to build with the empty default content. Until a release is published, it SHOULD always clearly indicate it is not a published release  - or in the README or in the IG itself, an indication that the work may be followed in another location (pointing to the branch)



The default branch is expected to build with the empty default content. Until a release is published, it SHOULD always clearly indicate it is not a published release  - or in the README or in the IG itself, an indication that the work may be followed in another location (pointing to the branch)


### ImplementationGuide Configuration

After initializing the IG, it must be configured:

* Canonical url: `http://worldhealthorganization.github.io/smart-ig-starter-kit`
* Package id: `who.fhir.????` Or `who.fhir.smart.???` `Or who.smart.fhir.?`

* L3 authors should ensure that the content has some feedback mechanism.

