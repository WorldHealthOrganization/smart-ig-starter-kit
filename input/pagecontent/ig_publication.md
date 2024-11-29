
The release publication process is used to publish SMART guidelines IGs:

* Publication readiness (see the [QA Check](qa_check.html) documentation)
* Change log
* Review process
* Publication

### Change log

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

#### Compatible, Substantive Changes
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

### Review Process

Prior to final release, a review process should be used to gather feedback about publication readiness. A draft publication should be prepared and circulated among stakeholders for feedback. For this draft publication:

* The `status` of the IG (and all conformance artifacts in the IG) should be `draft`
* The `version` of the IG should include a label indicating the draft status: `0.1.0-draft`
* The `releaseLabel` of the IG should be `draft`


### Release Publication

Once the review process is complete and any resulting issues addressed and applied to the implementation guide, the release publication should be prepared. The release publication takes the current status of the specification, and saves it as a named release that is available for referencing.
SMART Guidelines, when released, are published in `https://smart.who.int/<ig_code>`, where `<ig_code>` is the implementation guide code.   

<div class="info-box must">
  <span class="info-title">Workflow automation</span>
    The process for publication is a sensitive process - errors can have a large impact on tooling and downstream specifications. For this reason, some of the steps are automated. Increased automation is expected as the SMART Guidelines and this guidance evolve.
    Every WHO-published SMART Guideline is based on the [SMART Empty IG template](SMART Empty IG template), which includes a workflow for automation of a part of this procedure.
</div>

The release publication steps are:
<figure style = "width:20em">
  {% include publication.svg %}
</figure>


1. **Review the changes since the last release, and define if these are breaking changes or not, and update the version accordingly** in the `sushi-config.yaml` or implementation guide `.json` file.  
1.1. If this is the first release, review the entire content and version policy to decide if this is a first official release, or a preview, and define the version number accordingly.

2. **Optionally, create a new branch**, e.g. `release-candidate` for iterating final publication changes.  


3. **Update the ImplementationGuide (and all conformance artifacts in the IG)**:
    * The `status` of the IG (and all conformance artifacts in the IG) should be `active`;
    * The `version` of the IG should be in the format `0.1.0` and should not include a label;
    * The `releaseLabel` of the IG should be `release`
    * The date of the ImplementationGuide should be set to the current date

4. **Create the `publication-request.json` file** (see [documentation](https://confluence.hl7.org/display/FHIR/IG+Publication+Request+Documentation)). This file is critical and it is important to follow the instructions correctly, as incorrect changes may cause irreparable damage to previously published and normative specifications.
     <div class="info-box should">
      <span class="info-title">Content of publication-request.json</span>
    <p>The publication-request.json must be in a specific form:</p>
    <ul>
    <li>The package name,  and version must match that in the ImplementationGuide.</li>
    <li>The path must match the IG path defined by the canonical URL</li>
    <li>The ci-build must point at the repository's CI build</li>
    <li>The parameter "first" must only be true for the first publication of an IG. For all subsequent publications of that IG, "first" must be set to false.</li>
    </ul>
    <p>For example, for SMART-base, where &lt;ig_code&gt; is <code>base</code> and for a release 0.1.0, the publication-request should be:</p>  
    <pre><code class="language-json"> {
    "package-id" : "smart.who.int.base",
    "title" : "SMART Base", 
    "category" : "base",
    "introduction" : "SMART Base Implementation Guide",
    "version" : "0.1.0",
    "desc" : "0.1.0 release",
    "mode" : "milestone",    
    "path" : "http://smart.who.int/base/v0.1.0",
    "ci-build": "http://worldhealthorganization.github.io/smart-base",    
    "first": true,
    "status" : "draft",
    "sequence" : "Releases"
    } 
      </code> </pre>
     </div>

5. **Run the normal build process** and check if everything is ok

6. If all is ok and the pages are created correctly, **create a release and tag** with the latest changes. Tags should be in the form vX.Y.Z, where X.Y.Z is the version of the Implementation Guide. This means simply that the tag should prepend `v` to the IG version. 

    **All SMART Guidelines templates contain a [workflow](https://github.com/WorldHealthOrganization/smart-ig-empty/blob/main/.github/workflows/release.yml) for automation of the next step:** 

7. Upon creation of a release and tag, a [workflow](https://github.com/WorldHealthOrganization/smart-ig-empty/blob/main/.github/workflows/release.yml) automates the step of running the publication process. If the publication executed successfully (which can be seen in the Actions tab of the repository), the copy of the updated smart.who.int website should be available at `http://WorldHealthOrganization.github.io/<repo_name>/sitepreview`. Specifically, if the publication process was successful, the ImplementationGuide will be available at `http://WorldHealthOrganization.github.io/<repo_name>/sitepreview/<ig_code>` and `http://WorldHealthOrganization.github.io/<repo_name>/sitepreview/<ig_code>/<tag>`. For example [https://worldhealthorganization.github.io/smart-trust/sitepreview/trust/](https://worldhealthorganization.github.io/smart-trust/sitepreview/trust/).  
 For details about the process, see [HL7 overview page](https://confluence.hl7.org/pages/viewpage.action?pageId=81027536) and the [description of the publication process](https://confluence.hl7.org/pages/viewpage.action?pageId=104580055)

8. Request the EHO SMART Guidelines team (smart@who.int) to check and update the [http://smart.who.int](http://smart.who.int) website and create of a Pull Request of the feeds and package lists, for the FHIR tooling to recognize the newly published package.

9. If a branch was created in step 2, optionally merge it with any updates that have been done meanwhile.

10. In the main branch, update the ImplementationGuide resource for continuing work:
    * The `status` of the IG should be set back to `draft`;
    * The `version` should be updated - this way it's immediately assured that any new changes are for a new version.

