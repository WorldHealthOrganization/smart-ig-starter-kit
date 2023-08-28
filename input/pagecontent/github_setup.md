### **GitHub repository**

**Actor**: ImplementationGuide repository Admin

When starting L3, if an IG is not present, it should be created now.

* For WHO repositories: WHO will create it upon request.
* For adaptations: See ??

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
