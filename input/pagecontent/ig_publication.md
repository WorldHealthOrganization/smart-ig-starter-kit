### **ImplementationGuide publication**

The publication process is used to publish SMART guidelines IGs:

* Publication readiness (see the [QA Check](qa_check.html) documentation)
* Change log
* Review process
* Publication

#### Change log

Each SMART guideline IG SHALL have a "changes" page that documents the changes made to each version of the IG. The page should be structured with sections for each publication version, in reverse chronological order for example:

```
### Second Release (v2.0.0)

`release summary here`

#### Known Issues
* issue list
* issue list
* ...

#### Non-compatible Changes
* issue list
* issue list
* ...

#### Compatible, Subtantive Changes
* issue list
* issue list
* ...

#### Non-substantive Changes
* issue list
* issue list
* ...

### First Release (v1.0.0)

...

### Maintenance Update (v0.2.0)

...

### Preview Release (v0.1.0)

...
```

The description for each release SHALL have:

* A short release description providing an overall summary of changes
* A Known Issues list, if any
* An issues list, organized by the impact of the change:
    * Non-compatible Changes
    * Compatible, substantive Changes
    * Non-substantive Changes

> NOTE: The initial release does not require an issues list, though it may be provided if issues were tracked as part of development of the initial content.

See the [versioning](versioning.html) topic for a description of how these changes impact the version number of a release.

#### Review Process

Prior to final release, a review process should be used to gather feedback about publication readiness. A draft publication should be prepared and circulated among stakeholders for feedback. For this draft publication:

* The `status` of the IG (and all conformance artifacts in the IG) should be `draft`
* The `version` of the IG should include a label indicating the draft status: `0.1.0-draft`
* The `releaseLabel` of the IG should be `draft`


#### Publication

Once the review process is complete and any resulting issues addressed and applied to the implementation guide, the release publication should be prepared. The release publication takes the current status of the specification, and saves it as a named release that is available for referencing.
SMART Guidelines, when released, are published in `https://smart.who.int/<code>`, where `<code>` is the implementation guide code.   

The release publication steps are:

1. Review the changes since the last release, and define if these are breaking changes or not, and update the version accordingly in the `sushi-config.yaml` or implementation guide `.json` file.  
1.1. If this is the first release, review the entire content and version policy to decide if this is a first official release, or a preview, and define the version number accordingly.

2. Optionally, create a new branch, e.g. `release-candidate` for iterating changes.  

3. Create a publication-request.json   

4. Update the ImplementationGuide (and all conformance artifacts in the IG):
    * The `status` of the IG (and all conformance artifacts in the IG) should be `active`;
    * The `version` of the IG should be in the format `0.1.0` and should not include a label;
    * The `releaseLabel` of the IG should be `release`
    * The date of the ImplementationGuide should be set to the current date

5. Run the normal build process and check if all is ok

6. Run the release publication process using the ImplementationGuide publisher in release publication mode (see [HL7 page](https://confluence.hl7.org/pages/viewpage.action?pageId=81027536) for some details on the tooling)

7. If all is ok and the pages are created correctly, create a release and tag with the latest changes

8. Make a PR of the built specification (all releases) to smart.who.int.

9. If a branch was created in step 2, optionally merge it with any updates that have been done meanwhile.

10. In the main branch, update the ImplementationGuide resource
    * The `status` of the IG should be set back to `draft`;
    * The `version` should be updated - this way it's immediately assured that any new changes are for a new version.