Authoring L3 consists in creating, validating and publishing L3 FHIR artifacts that correspond to the L2 specifications.

<img src="./l3_authoring.png" style="width:80%; align:center"/>
<br clear="all"/>


This transformation is supported by a series of tools, reference content, and processes, which are described here.

Taking a simple example of [authoring an ActorDefinition from a Persona](l3_personas.html), which transforms the narrative Persona definition into an L3 FHIR ActorDefinition, each of these processes requires some input, has criteria for completeness, and dependencies, and results in the expected output.

Some of the criteria and constraints are checked by the tooling - for example the ImplementationGuide Publisher checks that all FHIR resources are technically valid. In addition, there are other directives and requirements from the SMART Guidelines that are also imposed on the artifacts generated.

