Each L3 layer of SMART Guidelines for a health programme area is represented in an individual Implementation Guide. The first step in starting a L3 FHIR IG is to create a FHIR IG in a GitHub repository. This page is a guide on how to setup a FHIR IG repository for L3.

### Repositories

A SMART Guidelines Implementation Guide makes use of existing tooling and content, to create a consistent ecosystem and allow L3 developers to focus on the authoring and validation.

The key repositories that play a role are identified in the diagram below:

<figure style = "width:90em; max-width:90%">
  {% include dependencies.svg %}
</figure>


### Repository Setup
The [SMART-Empty repository](https://github.com/WorldHealthOrganization/smart-ig-empty) is the repository that should be forked to create a new Implementation Guide.

To do so, click on "Use this Template" option in Github. **Ensure that the option to "Include all branches".** so that the `gh-pages` branch is also cloned. Otherwise you must create it manually. 

* For WHO repositories: WHO will create it upon request.
* For adaptations: the responsible organization will create it. They may use some of the WHO infrastructure.

* The name of the repository depends on the organization for WHO, should be smart-xxxx (where xxxx is the name of the IG)
* The repository SHOULD be based on the WHO repository template: https://github.com/WorldHealthOrganization/smart-ig-empty 
* The default branch SHOULD be "main"
  - To publish: 
  - GH Pages
    - Enable pages from the gh-pages branch, root folder.
    - Confirm that the repo allows github actions to have read and write access
    - The standard build script and github action SHOULD be retained. If there are changes needed, they SHOULD be reported back to the community.
  - FHIR Build
* The default branch is expected to build with the empty default content. Until a release is published, it SHOULD always clearly indicate it is not a published release  - or in the README or in the IG itself, an indication that the work may be followed in another location (pointing to the branch)
