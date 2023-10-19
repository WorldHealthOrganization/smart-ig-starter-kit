L3 authors are expected to create the necessary artifacts to cover the entire L2 specification and demonstrate a working SMART Guideline. This includes several types of artifacts and possibly narrative content.


### Input: L2 artifacts

<table border="1">
    <thead>
        <tr>
            <th>Content Type</th>
            <th>L2 Representation</th>
            <th>L2 Location</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Health Interventions</td>
            <td>Narrative</td>
            <td>input/pagecontent</td>
        </tr>
        <tr>
            <td>Generic Personas</td>
            <td>Narrative</td>
            <td>input/pagecontent/personas.md</td>
        </tr>
        <tr>
            <td>User Scenarios</td>
            <td>Narrative</td>
            <td>input/pagecontent</td>
        </tr>
        <tr>
            <td>Processes</td>
            <td>Narrative</td>
            <td>input/pagecontent</td>
        </tr>
        <tr>
            <td rowspan="2">Data Elements</td>
            <td>Narrative</td>
            <td>input/pagecontent</td>
        </tr>
        <tr>
            <td>Spreadsheet</td>
            <td>TBD</td>
        </tr>
        <tr>
            <td rowspan="2">Decision Tables</td>
            <td>Narrative</td>
            <td>input/pagecontent</td>
        </tr>
        <tr>
            <td>Spreadsheet</td>
            <td>TBD</td>
        </tr>
        <tr>
            <td rowspan="2">Scheduling Logic</td>
            <td>Narrative</td>
            <td>input/pagecontent</td>
        </tr>
        <tr>
            <td>Spreadsheet</td>
            <td>N/A</td>
        </tr>
        <tr>
            <td>Indicators</td>
            <td>Narrative</td>
            <td>input/pagecontent</td>
        </tr>
        <tr>
            <td>Functional Requirements</td>
            <td>Narrative</td>
            <td>input/pagecontent</td>
        </tr>
        <tr>
            <td>Non-functional Requirements</td>
            <td>Narrative</td>
            <td>input/pagecontent</td>
        </tr>
    </tbody>
</table>


### Result: L3 Artifacts
The diagram and table below shows the content types that are to be created as part of the L3 authoring process.


<img src="./l3_artifacts.png" style="width:80%; align:center"/>
<br clear="all"/>


<table border="1">
    <thead>
        <tr>
            <th>Content Type</th>
            <th>L3 Representation</th>
            <th>L3 Location</th>
            <th>Procedure</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Health Interventions</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
        </tr>
        <tr>
            <td>Generic Personas</td>
            <td>ActorDefinition</td>
            <td>input/actors</td>
            <td><a href="l3_personas.html">Actors</a></td>
        </tr>
        <tr>
            <td rowspan="4">User Scenarios</td>
            <td>ExampleScenario</td>
            <td>input/scenarios</td>
            <td><a href="l3_scenarios.html">Scenarios</a></td>
        </tr>
        <tr>
            <td>TestPlan</td>
            <td>input/testing</td>
            <td><a href="l3_testing.html">Testing</a></td>
        </tr>
        <tr>
            <td>TestScript??</td>
            <td>input/testing</td>
            <td><a href="l3_testing.html">Testing</a></td>
        </tr>
        <tr>
            <td>Example instances</td>
            <td>input/testing<br/>input/examples</td>
            <td><a href="l3_examples.html">Examples</a></td>
        </tr>
        <tr>
            <td rowspan="2">Processes</td>
            <td>FHIR PlanDefinition</td>
            <td>input/plandefinitions</td>
            <td><a href="l3_processes.html">Plan Definitions</a></td>
        </tr>
        <tr>
            <td>FHIR ActivityDefinition</td>
            <td>input/processes<br/>input/activitydefinitions</td>
            <td><a href="l3_processes.html">Activity definitions</a></td>
        </tr>
        <tr>
            <td rowspan="9">Elements</td>
            <td>Logical Data Model</td>
            <td>input/models</td>
            <td><a href="l3_logicalmodels.html">Logical Models</a></td>
        </tr>
        <tr>
            <td>FHIR Questionnaire</td>
            <td>input/questionnaires</td>
            <td><a href="l3_codesystems.html">Questionnaires</a></td>
        </tr>
        <tr>
            <td>FHIR StructureMaps</td>
            <td>input/maps</td>
            <td><a href="l3_structuremaps.html">Structure Maps</a></td>
        </tr>
        <tr>
            <td>FHIR ValueSet</td>
            <td>input/valuesets</td>
            <td><a href="l3_valuesets.html">ValueSets</a></td>
        </tr>
        <tr>
            <td>FHIR CodeSystem</td>
            <td>input/codesystems</td>
            <td><a href="l3_codesystems.html">CodeSystems</a></td>
        </tr>
        <tr>
            <td>FHIR Profile</td>
            <td>input/profiles</td>
            <td><a href="l3_profiles.html">Profiles</a></td>
        </tr>
        <tr>
            <td>ConceptMap</td>
            <td>input/conceptmaps</td>
            <td><a href="l3_conceptmaps.html">Concept Maps</a></td>
        </tr>
        <tr>
            <td>CQL Concepts</td>
            <td>input/cql</td>
            <td rowspan="2"><a href="l3_cql.html">CQL</a></td>
        </tr>
        <tr>
            <td>CQL Data Elements</td>
            <td>input/cql</td>
        </tr>
        <tr>
            <td rowspan="3">Decision Tables</td>
            <td>FHIR PlanDefinition</td>
            <td>input/plandefinitions</td>
            <td><a href="l3_decisiontables.html">Decision Tables</a></td>
        </tr>
        <tr>
            <td>FHIR Library</td>
            <td>input/libraries</td>
            <td><a href="l3_conceptmaps.html">Concept Maps</a></td>
        </tr>
        <tr>
            <td>CQL</td>
            <td>input/cql</td>
            <td><a href="l3_cql.html">CQL</a></td>
        </tr>
        <tr>
            <td rowspan="1">Scheduling Logic</td>
            <td>FHIR PlanDefinition</td>
            <td>input/plandefinitions</td>
            <td rowspan="1"><a href="l3_schedulinglogic.html">Scheduling Logic</a></td>
        </tr>
        <tr>
            <td rowspan="2">Indicators and Measures</td>
            <td>FHIR Measure</td>
            <td>input/measures</td>
            <td rowspan="1"><a href="l3_indicators.html">Indicators</a></td>
        </tr>
        <tr>
            <td>CQL IndicatorLogic</td>
            <td>input/cql</td>
            <td><a href="l3_cql.html">CQL</a></td>
        </tr>
        <tr>
            <td>Functional Requirements</td>
            <td>FHIR Requirements</td>
            <td>input/requirements</td>
            <td><a href="l3_requirements.html">Requirements</a></td>
        </tr>
        <tr>
            <td>Non-functional Requirements</td>
            <td>FHIR Requirements</td>
            <td>input/requirements</td>
            <td><a href="l3_requirements.html">Requirements</a></td>
        </tr>
    </tbody>
</table>

### File locations

#### Narrative
For narrative, all files are in `input/pagecontent` and can be written in xhtml or markdown.
See the guidance on authoring [narrative](narrative.html).

#### Artifacts
The canonical folder structure for all artifacts is: 

#### Native FHIR (JSON / XML)
For json or xml content, the file name SHALL be in the form
* ResourceType-resourceid.xml/json (preferred)
* ResourceType/resourceid.xml/json
* resourceid.xml/json

#### FSH Content
For fsh content, the file name SHALL be in the form
* `ResourceType/resourceid.fsh`

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

<p class="todo"> TO DO: Decision Tables and Scheduling Logic? Should these represent the 16 types of objects?</p>

For FSH, the folders are the same but in the `fsh` folder, e.g. `input/fsh/scenarios`, `input/fsh/actors` etc.


## Naming convention

Resource IDs
* Resource source files shall have extension .json or .xml
* StructureMaps authored in FHIR Mapping Language shall have extension `.fml` 
* ValueSets should be prefixed or suffixed by VS (not enforced)
* Codesystems do not need to to be prefixed or suffixed. The tooling shall handle the resources per type and ID, so there's no conflict
* Resource Ids should start with capital letter and may contain hyphens - NOT underscore: 
  * **`Resourceid`** is valid
  * **`Resource-id`** is also valid, although not preferred


## File Names

* Resource file names must match the resource id. For profiles, this means the profile id.
* Tools are case sensitive - file names shall not have overlapping names differing only in case
* Sushi / FSH Aliases should be stored in `fsh/Aliases.fsh`


### Versioning
see also [versioning](versioning.html)


## Governance
<p class= "todo">TO DO: Adding artifacts, what goes into common-clinical, etc.</p>

