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

Once the review process is complete and any resulting issues addressed and applied to the implementation guide, the final publication should be prepared:

* The `status` of the IG (and all conformance artifacts in the IG) should be `active`
* The `version` of the IG should not include a label: `0.1.0`
* The `releaseLabel` of the IG should be `release`

