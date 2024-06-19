Versioning is critical to ensuring that consumers of the SMART guideline can understand when changes occur how those changes impact their implementations. For this reason, SMART guidelines SHALL follow semantic versioning as prescribed in the [Artifact Versioning]({{site.data.fhir.ver.crmi}}/artifact-lifecycle.html#artifact-versioning) topic of the Canonical Resource Management Infrastructure IG.

As the guideline moves through the authoring lifecycle, the version and status are updated to reflect the current state:

1. When the implementation guide is started, the guide is in `draft` state, and has an initial version targeting the first version and with a draft label, typically `1.0.0-draft`.
2. When the implementation guide is ready for publication, the guide is updated to `active` state, and the `-draft` label is removed from the version.
3. Once the publication is complete, the release is typically marked with a _release_ in Github.
4. Before any subsequent changes are applied, the guide is put back in `draft` state, and the version number is incremented, targeting the next version, typically `2.0.0-draft` (although this is dependent on the level of impact of the changes being targeted for the next release.
5. All subsequent changes to the implementation guide should be tracked through Github issues.

This process repeats for each release of the implementation guide.

Note that the FHIR publication tooling uses the `version` of the implementation guide overall to set the `version` element of all the canonical resources in the implementation guide (i.e. all the Library, CodeSystem, ValueSet, StructureDefinition, etc.,.). As such, the `version` element of individual resources in the implementation guide should not be set, allowing the publisher to set the versions appropriately.

### History
After [publication](ig_publication.html), any changes to the L3 resources should be tracked. 

Tracking changes should include:

* Repository issues (GitHub issues)
* Differencing between different versions of a publication
* Release Notes

#### Github Issues
* Every change should be traceable to a GitHub issue. This allows tracking the change and any approvals/discussions, as well as assisting in creating release notes.

* State of each issue: GitHub issues should not be considered "done" when the change is agreed, but only when the change is effectively implemented and tested and the respective criteria is met.


#### Change History and Release Notes

See the [publication](ig_publication.html) topic for a detailed discussion of how to create change history and release notes (including known issues).

#### Version Difference
For some artifacts, the FHIR ImplementationGuide tooling may highlight the differences in the content of the artifacts between two versions. This can be used to track and demonstrate the detailed artifact changes.
