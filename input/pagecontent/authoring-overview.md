For narrative, all files are in input/pagecontent



For artifacts, the canonical folder structure is

* `input/actors`
* `input/scenarios`
* `input/testing`
* `input/examples`
* `input/process`
* `input/plandefinitions`
* `input/process`
* `input/activitydefinition`
* `input/models`
* `input/valuesets`
* `input/codesystems`
* `input/questionnaires`
* `input/profiles`
* `input/maps`
* `input/cql`
* `input/libraries`
* `input/measures`
* `input/requirements`


## L2 artifacts
L3 authors should find and use the L2 artifacts.  
L2 artifacts can be represented as narrative or other representations such as FHIR resources. For reference, these are the locations for such artifacts and narrative:

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


## L3 Artifacts


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
            <td><a href="l3-personas.html">Actors</a></td>
        </tr>
        <tr>
            <td rowspan="4">User Scenarios</td>
            <td>ExampleScenario</td>
            <td>input/scenarios</td>
            <td><a href="l3-scenarios.html">Scenarios</a></td>
        </tr>
        <tr>
            <td>TestPlan</td>
            <td>input/testing</td>
            <td><a href="l3-testplans.html">TestPlans</a></td>
        </tr>
        <tr>
            <td>TestScript??</td>
            <td>input/testing</td>
            <td><a href="l3-testscripts.html">TestScripts</a></td>
        </tr>
        <tr>
            <td>Example instances</td>
            <td>input/testing<br/>input/examples</td>
            <td><a href="l3-examples.html">Examples</a></td>
        </tr>
        <tr>
            <td rowspan="2">Processes</td>
            <td>FHIR PlanDefinition</td>
            <td>input/plandefinitions</td>
            <td><a href="l3-plandefinitions.html">Plan Definitions</a></td>
        </tr>
        <tr>
            <td>FHIR ActivityDefinition</td>
            <td>input/process<br/>input/activitydefinitions</td>
            <td><a href="l3-processes.html">Activity definitions</a></td>
        </tr>
        <tr>
            <td rowspan="10">Data Elements</td>
            <td>Spreadsheet</td>
            <td>n/a</td>
            <td><a href="l3-.html">n/a</a></td>
        </tr>
        <tr>
            <td>Logical Data Model</td>
            <td>input/models</td>
            <td><a href="l3-logicalmodels.html">Logical Models</a></td>
        </tr>
        <tr>
            <td>FHIR Questionnaire</td>
            <td>input/questionnaires</td>
            <td><a href="l3-codesystems.html">Questionnaires</a></td>
        </tr>
        <tr>
            <td>FHIR StructureMaps</td>
            <td>input/maps</td>
            <td><a href="l3-structuremaps.html">Structure Maps</a></td>
        </tr>
        <tr>
            <td>FHIR ValueSet</td>
            <td>input/valuesets</td>
            <td><a href="l3-valuesets.html">ValueSets</a></td>
        </tr>
        <tr>
            <td>FHIR CodeSystem</td>
            <td>input/codesystems</td>
            <td><a href="l3-codesystems.html">CodeSystems</a></td>
        </tr>
        <tr>
            <td>FHIR Profile</td>
            <td>input/profiles</td>
            <td><a href="l3-profiles.html">Profiles</a></td>
        </tr>
        <tr>
            <td>ConceptMap</td>
            <td>input/maps</td>
            <td><a href="l3-conceptmaps.html">Concept Maps</a></td>
        </tr>
        <tr>
            <td>CQL Concepts</td>
            <td>input/cql</td>
            <td rowspan="2"><a href="l3-cql.html">CQL</a></td>
        </tr>
        <tr>
            <td>CQL Data Elements</td>
            <td>input/cql</td>
        </tr>
        <tr>
            <td rowspan="3">Decision Tables</td>
            <td>FHIR PlanDefinition</td>
            <td>input/plandefinitions</td>
            <td><a href="l3-plandefinitions.html">Plan Definitions</a></td>
        </tr>
        <tr>
            <td>FHIR Library</td>
            <td>input/libraries</td>
            <td><a href="l3-conceptmaps.html">Concept Maps</a></td>
        </tr>
        <tr>
            <td>CQL</td>
            <td>input/cql</td>
            <td><a href="l3-cql.html">CQL</a></td>
        </tr>
        <tr>
            <td rowspan="1">Scheduling Logic</td>
            <td>FHIR PlanDefinition</td>
            <td>input/plandefinitions</td>
            <td rowspan="1"><a href="l3-plandefinitions.html">Plan Definitions</a></td>
        </tr>
        <tr>
            <td rowspan="2">Indicators and Measures</td>
            <td>FHIR Measure</td>
            <td>input/measures</td>
            <td rowspan="1"><a href="l3-measures.html">Measures</a></td>
        </tr>
        <tr>
            <td>CQL IndicatorLogic</td>
            <td>input/cql</td>
            <td><a href="l3-cql.html">CQL</a></td>
        </tr>
        <tr>
            <td>Functional Requirements</td>
            <td>FHIR Requirements</td>
            <td>input/requirements</td>
            <td><a href="l3-requirements.html">Requirements</a></td>
        </tr>
        <tr>
            <td>Non-functional Requirements</td>
            <td>FHIR Requirements</td>
            <td>input/requirements</td>
            <td><a href="l3-requirements.html">Requirements</a></td>
        </tr>
    </tbody>
</table>


