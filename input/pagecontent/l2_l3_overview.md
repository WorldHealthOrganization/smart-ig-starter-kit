

Authoring a L3 FHIR Implementation Guide involves taking the L2 input, using the recommended processes and tools, and creating, validating and publishing publishing L3 FHIR artifacts that correspond to the L2 specifications. 

The L3 FHIR Implementation Guides are intended to be machine readable, but also will include narrative content that are human readable and shall speak to the L2 specifications covered in the FHIR IG being authored. More details about authoring narrative are included in this [page](narrative.html).

### Going from L2 to L3
The first step in L3 production is an input verification of the L2 content. L3 authors create the necessary artifacts to cover the entire L2 specification and demonstrate a working SMART Guideline. This includes several types of artifacts and possibly narrative content.

#### Input for authoring L3: L2 DAK components

For WHO published L2 DAKs, each DAK will be represented as a GitHub repository along with a published PDF DAK word document. The GitHub repository shall contain the structured spreadsheets, bpmn files and more, that were authored during the publication process of the DAK.

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
            <td>Published DAK PDF</td>
        </tr>
        <tr>
            <td>Generic Personas</td>
            <td>Narrative</td>
            <td>Published DAK PDF</td>
        </tr>
        <tr>
            <td>User Scenarios</td>
            <td>Narrative</td>
            <td>Published DAK PDF</td>
        </tr>
        <tr>
            <td>Processes</td>
            <td>BPMN files</td>
            <td>L2 DAK repository: input/business-processes/bpmn</td>
        </tr>
        <tr>
            <td>Data Elements</td>
            <td>Spreadsheet</td>
            <td>L2 DAK repository: input/dictionary</td>
        </tr>
        <tr>
            <td rowspan = '2'>Decision Tables</td>
            <td>Spreadsheet</td>
            <td>L2 DAK repository: input/decision-logic</td>
        </tr>
        <tr>
            <td>DMN files</td>
            <td>L2 DAK repository: input/decision-logic/dmn</td>
        </tr>
        <tr>
            <td>Scheduling Logic</td>
            <td>Spreadsheet</td>
            <td>L2 DAK repository: input/scheduling-logic</td>
        </tr>
        <tr>
            <td>Indicators</td>
            <td>Spreadsheet</td>
            <td>L2 DAK repository: input/indicators</td>
        </tr>
        <tr>
            <td>Functional Requirements</td>
            <td>Spreadsheet</td>
            <td>L2 DAK repository: input/system-requirements</td>
        </tr>
        <tr>
            <td>Non-functional Requirements</td>
            <td>Spreadsheet</td>
            <td>L2 DAK repository: input/system-requirements</td>
        </tr>
    </tbody>
</table>

#### Authored L3 Artifacts: Table of authored L3 artifacts as they correspond to L2 DAK components

The table and diagram below show the content types that are to be created as part of the L3 authoring process.

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
            <td>TestScript</td>
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
            <td><a href="l3_forms.html">Questionnaires</a></td>
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

### Authoring L3 Artifacts: Where to begin?
While the exact authoring steps depend on the inputs, the key sequence could normally consist of the following steps: 

* [Logical Models](l3_logicalmodels.html)
* [Profiles](l3_profiles.html)
* [Forms](l3_forms.html)
* [Libraries](l3_libraries.html)
* [Decision Tables](l3_decisiontables.html)
* [Indicators](l3_indicators.html)
* [Scheduling Logic](l3_schedulinglogic.html)
* [Test Cases](l3_testing.html)
* [Personas](l3_personas.html)
* [Scenarios](l3_scenarios.html)
* [Processes](l3_processes.html)
* [Requirements](l3_requirements.html)
* [Examples](l3_examples.html)


