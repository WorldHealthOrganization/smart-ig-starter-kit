The authoring process consists on authoring the content as described in the other sections of this procedure.

The process of building (or compiling) the Implementation Guide helps authors preview the result and confirm that the specifications meet the criteria. The [github setup](github_setup.html) described in these SOPs contains an automatic online build of the Implementation Guide. This is triggered at every change (commit or pull request).

These changes constitute incremental builds, in "development" mode - they are fast and frequent iterations of content, possibly responding to change requests.

When doing changes, the author shall verify if the change requires a version change - considering if the changes are breaking or non-breaking, and may update the version number in the `sushi-config.yaml` or implementation guide `.json` or `.xml` file. 

### Release Publication
When the SMART Guideline Implementation Guide is considered ready for a new release, there should be a release publication. The release publication takes the current status of the specification, and saves it as a named release that is available for referencing.
SMART Guidelines, when released, are published in `https://smart.who.int/<code>`, where `<code>` is the implementation guide code.  

The release publication steps are:

1. Review the changes since the last release, and define if these are breaking changes or not, and update the version accordingly in the `sushi-config.yaml` or implementation guide `.json` file.  

2. Optionally, create a new branch, e.g. `release-candidate` for iterating changes.  
2.1. If this is the first release, review the entire content and version policy to decide if this is a first official release, or a preview, and define the version number accordingly.

3. Create a publication-request.json   

4. Set ImplementationGuide resource status to `active`

5. Set ImplementationGuide resource date to current date

6. Run the normal build process and check if all is ok

6. Run the release publication process using the ImplementationGuide publisher in release publication mode (see [HL7 page](https://confluence.hl7.org/pages/viewpage.action?pageId=81027536) for some details on the tooling)

8. If all is ok and the pages are created correctly, create a release and tag with the latest changes

9. Make a PR of the built specification (all releases) to smart.who.int.

9. Set ImplementatinoGuide status to `draft` again

10. If a branch was created in step 2, optionally merge it with any updates that have been done meanwhile.

6. In the main branch, set the version to next minor release - this way the next release is gruaranteed from then onwards.

