This page describes basic conventions for all artifacts that are needed to be authored.

### Naming conventions

Resource IDs
* ValueSets should be prefixed or suffixed by VS (not enforced)
* Codesystems do not need to to be prefixed or suffixed. The tooling shall handle the resources per type and ID, so there's no conflict
* Resource IDs should start with capital letter and may contain hyphens (although not preferred). Resource IDs SHALL NOT contain underscores: 
  * **`Resourceid`** is valid
  * **`Resource-id`** is also valid, although not preferred
  * **`Resource_id`** is invalid



<div class="info-box must">
  <span class="info-title">Resource IDs can only use up to 64 letters,numbers, hyphens and periods.</span>
    Resource Ids must be combination of letters, numbers, hyphens, and periods. Ensure that the name is at least 1 character long but does not exceed 64 characters in length. The expression is <pre>[A-Za-z0-9\-\.]{1,64}</pre>
</div>

<div class="info-box must">
  <span class="info-title">Names must start with an uppercase character, and may contain letters and numbers</span>
    Names must start with an uppercase letter followed by up to 254 characters that can be a mix of letters, numbers, or underscores. The expression is <pre>^[A-Z]([A-Za-z0-9_]){1,254}$</pre>
    The use of underscores is to be avoided

</div>

### File Names

* Resource source files shall have extension .json or .xml
* StructureMaps authored in FHIR Mapping Language shall have extension `.fml` 
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
* `input/[fsh/]scenarios`
* `input/[fsh/]actors`
* `input/[fsh/]measures`
* `input/[fsh/]requirements`
* `input/[fsh/]processes`
* `input/[fsh/]plandefinitions`
* `input/[fsh/]activitydefinitions`
* `input/[fsh/]testing`
* `input/[fsh/]examples`
* `input/[fsh/]codesystems`
* `input/[fsh/]valuesets`
* `input/[fsh/]models`
* `input/[fsh/]questionnaires`
* `input/[fsh/]profiles`
* `input/[fsh/]maps`
* `input/[fsh/]cql`
* `input/[fsh/]libraries`

`[fsh]` is the path for FSH files: the folders structure is the same but inside the `fsh` folder, e.g. the JSON files could go into `input/actors` and the FSH File would go into `input/fsh/actors`.










