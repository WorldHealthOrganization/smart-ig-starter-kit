This page describes basic conventions for all artifacts that are needed to be authored.

### Naming convention

Resource IDs
* Resource source files shall have extension .json or .xml
* StructureMaps authored in FHIR Mapping Language shall have extension `.fml` 
* ValueSets should be prefixed or suffixed by VS (not enforced)
* Codesystems do not need to to be prefixed or suffixed. The tooling shall handle the resources per type and ID, so there's no conflict
* Resource Ids should start with capital letter and may contain hyphens - NOT underscore: 
  * **`Resourceid`** is valid
  * **`Resource-id`** is also valid, although not preferred


<div class="info-box must">
  <span class="info-title">Resource IDs can only use up to 64 letters,numbers, hyphens and periods.</span>
    Resource Ids must be combination of letters, numbers, hyphens, and periods. Ensure that the name is at least 1 character long but does not exceed 64 characters in length. The expression is <pre>[A-Za-z0-9\-\.]{1,64}</pre>
</div>

<div class="info-box must">
  <span class="info-title">Names must start with an uppercase character, and may contain letters, numbers or underscores</span>
    Names must start with an uppercase letter followed by up to 254 characters that can be a mix of letters, numbers, or underscores. The expression is <pre>^[A-Z]([A-Za-z0-9_]){1,254}$</pre>
</div>

### File Names

* Resource file names must match the resource id. For profiles, this means the profile id.
* Tools are case sensitive - file names shall not have overlapping names differing only in case
* Sushi / FSH Aliases should be stored in `fsh/Aliases.fsh`
* See [versioning](versioning.html)

#### Native FHIR (JSON / XML) 
For json or xml content, the file name SHALL be in the form
* ResourceType-resourceid.xml/json (preferred)
* ResourceType/resourceid.xml/json
* resourceid.xml/json

#### FSH Content
For fsh content, the file name SHALL be in the form
* `ResourceType/resourceid.fsh`


### File Locations

The input folders for the resources are:
* `input/scenarios`
* `input/actors`
* `input/measures`
* `input/requirements`
* `input/processes`
* `input/plandefinitions`
* `input/activitydefinitions`
* `input/testing`
* `input/examples`
* `input/codesystems`
* `input/valuesets`
* `input/models`
* `input/questionnaires`
* `input/profiles`
* `input/maps`
* `input/cql`
* `input/libraries`

For FSH, the folders are the same but in the `fsh` folder, e.g. `input/fsh/scenarios`, `input/fsh/actors` etc.









