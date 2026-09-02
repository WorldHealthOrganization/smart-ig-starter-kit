# Checklist - SMART Guidelines Starter Kit v2.1.0

* [**Table of Contents**](toc.md)
* [**Validating IG**](validating_ig.md)
* **Checklist**

## Checklist

 The following sections provides a checklist to review to ensure that a SMART Guidelines Implementation Guide has the expected content and level of quality.This checklist is broken up according four layers of knowledge representation. 

### Checklist: L1 Content

Checklist for narrative content relating the guidance, guidelines, policies and recommendations underpinning this Implementation Guide. 

* Section in IG: Home Page.Summary
  * Required: Yes
  * Description: Linkage to the primary L1 and L2 content that underpins this Implementation Guide
  * Expected Artifacts: URL links on the home page to relevant guidance documents and a brief description of the relevance of the document to this Implementation Guide
  * Acceptance Criteria: Links exist on the home page
* Section in IG: Home Page.Providing Feedback
  * Required: Yes
  * Description: Instructions to describe how feedback can be shared for all knowledge layers in the Implementation Guide
  * Expected Artifacts: At the minimum, an email address exists to send feedback, and/or a feature to provide feedback can be provided per section shall exist
  * Acceptance Criteria: Section exists on the home page
* Section in IG: Home.Adapting Guidelines for Country use
  * Required: Yes
  * Description: Guidance to countries on adapting the Implementation Guide for making adaptations for country use
  * Expected Artifacts: adapting_guidelines.xml
  * Acceptance Criteria: Page exists under the home dropdown menu

### Checklist: L2 Content

 Checklist for semi-structure content relating to business requirements, definitions of key concepts, user personas, use cases, and data dictionaries underpinning the Implementation Guide. 

* Section in IG: Business Requirements.Concepts
  * Required: Yes
  * Description: A list of terms and key concepts introduced in the L2 or in the Implementation Guide
  * Expected Artifacts: concepts.xml
  * Acceptance Criteria: A page for key concepts under business requirement exists
* Section in IG: Business Requirements.Generic Personas
  * Required: Yes
  * Description: Depiction of end-users and related stakeholders as introduced in the L2
  * Expected Artifacts: Personas.xml
  * Acceptance Criteria: A page for Personas under business requirement exists
* Section in IG: Business Requirements.Use Cases
  * Required: Yes
  * Description: User scenarios depicting how different personas will interact in a typical workflow along with use cases listed as introduced in the L2
  * Expected Artifacts: usecases.xml
  * Acceptance Criteria: A page for User Scenarios and Use Cases under business requirement exists
* Section in IG: Business Requirements.Business Processes
  * Required: Yes
  * Description: Depiction of business processes as visual workflows as introduced in the L2
  * Expected Artifacts: business_process.xml
  * Acceptance Criteria: A page for depicting the visual business processes exists
* Section in IG: Business Requirements.Data Dictionary
  * Required: Yes
  * Description: Data dictionary with detailed data specifications as introduced in the L2
  * Expected Artifacts: dictionary.xml
  * Acceptance Criteria: A page for data dictionary under business requirements exists
* Section in IG: Business Requirements.Decision-support Logic
  * Required: Yes
  * Description: Decision-support logic and algorithms as introduced in the L2
  * Expected Artifacts: decision_support.xml
  * Acceptance Criteria: A page for decision-support logic under business requirements exists
* Section in IG: Business Requirements.Indicator and Performance Metrics
  * Required: If indicators are defined
  * Description: Core set of indicators and performance metrics as introduced in the L2
  * Expected Artifacts: indicators.xml
  * Acceptance Criteria: A page for the indicators table under business requirements exists
* Section in IG: Business Requirements.Functional Requirements
  * Required: Yes
  * Description: List of core functions and capabilities the system must have to meet the end-users’ needs and achieve tasks within the business process.
  * Expected Artifacts: functional.xml
  * Acceptance Criteria: A page for functional requirements under business requirements exists
* Section in IG: Business Requirements.Non-functional Requirements
  * Required: Yes
  * Description: List of capabilities the system must have as introduced in the L2
  * Expected Artifacts: nonfunctional.xml
  * Acceptance Criteria: A page for non-functional requirements under business requirements exists

### Checklist: L3 Content

 Checklist for structured content relating to data models, data exchange protocols with actors and transactions defined which are defined in the Implementation Guide. 

* Section in IG: Data Models and Exchange.System Actors
  * Required: Yes
  * Description: List and description of software or human entities that interact with the system derived from business requirements defined in L2.Actors and Transactions should be defined for a general systems architecture that applies over multiple country implementations and leverages OpenHIE architecture concepts.Systems managing clinical and patient information shall be expected to interact with a shared health record, laboratory information system or a longitudinal health record as appropriate and be expected to synchronize with data collected in a clincal encounter
  * Expected Artifacts: Actors
  * Acceptance Criteria: Actors defined are tied to and derived from L2, with a definition of who the actor is and what they do in the system at a minimum
* Section in IG: Data Models and Exchange.Sequence Diagram
  * Required: Yes
  * Description: A sequence diagram depicting the interactions between system actors in sequence derived from business process in L2
  * Expected Artifacts: sequence_diagram.xml
  * Acceptance Criteria: A sequence diagram exists that shows the system interactions
* Section in IG: Data Models and Exchange.Transactions
  * Required: Yes
  * Description: Defined list of system transactions at an atomic level for each actor along with narrative, capability statements, structure definition, questionnaires, document bundles and composition. It can also refer to transactions in other Implementation Guides
  * Expected Artifacts: Capability Statement, Structure Definitions, Questionnaires, Document Bundles and Composition
  * Acceptance Criteria: Artifacts exist and are defined for each actor in terms of their roles and responsibilities
* Section in IG: Indices.Artifacts Summary.Structures:Logical Models
  * Required: Yes
  * Description: Structure Definition resource describing data element definitions and their associated rules of usage derived from data dictionary in L2
  * Expected Artifacts: Structure Definition
  * Acceptance Criteria: A logical model for each core data set/data dictionary asset mentioned in the L2 exists
* Section in IG: Data Models and Exchange.Indicators and Measures
  * Required: If indicators are defined
  * Description: Thematic list of indicators defined in the IG that link to L1 and L2 guidance documents. The IG shall maintain the reference numbers as defined in the L1 and L2 for the indicators.
  * Expected Artifacts: Measures, Value Sets
  * Acceptance Criteria: Measure is defined according to the Data Sharing Specification (DSS) described in the[IHE White Paper for EXtracting Indicators from Person Level Data](https://www.ihe.net/uploadedFiles/Documents/QRPH/IHE_QRPH_White_Paper_CQL_Rev1-0_PC_2021-10-26.pdf). The Mobile Aggregate Data Exchange (mADX) profile is leveraged.
* Section in IG: Indices.Mappings
  * Required: Yes
  * Description: Relationship to IPS: The logical model defined in the IG shall be mapped to the IPS data set.
  * Expected Artifacts: Structure Maps
  * Acceptance Criteria: For each data set defined in the IG there shall be a related mapping which uses IPS as source and the data set as target in the structure map
* Section in IG: [QA Report](qa.md)
  * Required: Yes
  * Description: **Artifact Profiles**All artifacts defined in the IG shall conform to the Shareable, Publishable and Computable profile.
  * Expected Artifacts: StructureDefinition, ValueSet, CodeSystem, Library, ActivityDefinition, PlanDefinition, Measure, Questionnaire, GraphDefition, Metric, ImplementationGuide
  * Acceptance Criteria: QA report shows no errors for artifacts missing shareable, publishable or Computable profile conformance
* Section in IG: [QA Report](qa.md)
  * Required: Yes
  * Description: **Artifact Profiles**ValueSet and Library artifacts if defined shall conform to the Executable profile
  * Expected Artifacts: ValueSet, Library
  * Acceptance Criteria: QA report shows no errors for ValueSet and Library artifacts missing executable profile conformance
* Section in IG: Data Models and Exchange.Codings
  * Required: Yes
  * Description: ValueSets defined shall map to ICD-11 or one of the WHO Family of International Classifications (FIC), if the content exists. If not an openly available reference vocabulary such as LOINC shall be used
  * Expected Artifacts: ValueSet, ConceptMaps, CodeSystems
  * Acceptance Criteria: QA report shows no errors for ValueSet and Library artifacts missing executable profile conformance

### Checklist: L4 Content

 Checklist for executable content supporting guidance for adaptation to local contexts in the Implementation Guide. 

* Section in IG: Deployment.Testing
  * Required: Yes
  * Description: **Example Data**shall be represented via example resources for each of the UN Languages
  * Expected Artifacts: FSH files or FHIR Resources, and examples listed under the example tab of resources**QA Report**
  * Acceptance Criteria: For every non abstract profile there should be an example resource for each of the UN Languages
* Section in IG: Deployment.Testing
  * Required: No
  * Description: Test Definitions are written along with brief description of the scope of testing covered.
  * Expected Artifacts: Gherkin .feature files
  * Acceptance Criteria: Acceptance Criteria is written for each test definition.All PlanDefinitions and Measures should have defined Test Cases
* Section in IG: Deployment.Test Data
  * Required: **No**
  * Description: Test data represented as resources for the test definitions
  * Expected Artifacts: Synthea scripts of FSH files
  * Acceptance Criteria: All CQL libraries have associated test libraries
* Section in IG: Deployment.Reference Implementations
  * Required: No
  * Description: Links to list of reference implementations
  * Expected Artifacts: Links to software download, source code, install documentation, user manuals and such
  * Acceptance Criteria: 
* Section in IG: Downloads
  * Required: **?**
  * Description: All IG Content shall be available to download as zip or npm package
  * Expected Artifacts: Zip, npm package
  * Acceptance Criteria: Links to npm package are available

### Checklist: Global

 Checklist applicable for the Implementation Guide in general. 

* Section in IG: Home Page
  * Required: Yes
  * Description: **Status and maturity level**of the Implementation Guide is based on the CMM (Capability Maturity Model) framework and the intention is to give implementers a sense of how mature the Implementation Guide is.**TODO: define maturity levels such as 'draft', 'candidate recommendation/STU', 'published/recommendation/normative'.**
  * Expected Artifacts: Disclaimer notice indicating the maturity level of the implementation guide
  * Acceptance Criteria: Maturity level is indicated in the 'STU Note' block quote on the home page of the Implementation Guide.
* Section in IG: Home Page and Footer
  * Required: Yes
  * Description: **Versioning policy**of the Implementation Guide is based on[FHIR versioning](https://build.fhir.org/versions.html)and[Semantic versioning.](http://semver.org/)Each IG version s hall be identified by a string composed from 4 parts: major.minor.patch-label.
  * Expected Artifacts: STU Note and the footer display the versiono of the IG
  * Acceptance Criteria: Criteria#1: If any artifact under the IG undergoes a change, then the IG must undergo a version update that follows semantic versioning. Criteria#2: If the IG version is updated then all the artifacts under it inherit the version number and get updated as well.
* Section in IG: 
  * Required: Yes
  * Description: Shall follow all[HL7 FHIR Implementation Guide Publishing Requirements](https://confluence.hl7.org/display/FHIR/FHIR+Implementation+Guide+Publishing+Requirements)
  * Expected Artifacts: 
  * Acceptance Criteria: 
* Section in IG: Footer
  * Required: Yes
  * Description: The IG publisher reports many errors in the file qa.html. This shall be published so that any reviewer of the specification can check the status of the IG.
  * Expected Artifacts: [qa.html](qa.md)
  * Acceptance Criteria: QA Report has no errors or unsuppressed warnings. All suppressed warnings must have a reasonable explanation for suppression
* Section in IG: Home.Changes
  * Required: Yes
  * Description: A page that describes all version releases with a brief description of major changes
  * Expected Artifacts: changes.xml
  * Acceptance Criteria: A page for versioning and release notes exist

