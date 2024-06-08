SMART Guidelines are testable - they include the content for allowing the specification to be tested, and the systems implementing the specification to be also tested.
For this, the SMART Guidelines specifications include test content, and the SMART Guidelines tooling includes testing artifacts and reference working tool sets that support testing.


### Testing process overview


Testing SMART Guidelines can be done in 3 types of occasions:
1. Testing specifications - the L3 author can validate the specification with a known-working tool set. The content authored in the L3 (Measures, Libraries, StructureMaps) is checked with the examples provided to check that the extraction or library processing does produce the expected results.
In this case, the specification is under test, and the tool set is a testing fixture. This testing can be done after authoring, or continuously in a BDD (Business Driven Development) or TDD (Test-Driven development) approach.


2. Testing implementations - At any time during the implementation, preferably frequently during the implementation, L4 implementers can test if their implementation produces the expected results.
In this case, the implementation is under test, and the specification is a testing fixture.
This testing can be also done after authoring, or continuously in a BDD or TDD approach.

3. Testing events - There may be community testing events, like Connectathons, where several systems are tested in combination.
In this case, the implementations are under test, and the specification is a testing fixture, but is also subject to feedback.


To enable these different types of testing, the SMART Guidelines SHALL contain testing artifacts that assert the expected outcomes of a working system:
* The set of examples mentioned in each different artifact type (Questionnaire, Profile, Measure, etc.) shall represent a working end-to-end scenario - the resource profile instances shall correspond to the data that is extracted from a QuestionnaireResponse, and the MeasureReport instance shall contain values that are the result of those resources. This ensures that the specification is minimally testable out of the box.



### Test Authoring and test artifacts


Test authoring includes 2 types of activities

* **Test data creation** - test data such as FHIR resource instances, which provide the input data for the tests
* **Test case creation** - structured testing sequence and assertions - the concrete actions to test


### Types of testing

* Happy path scenario testing
This is the first testing expected to be present - all the possible outcomes of the decision table should be tested - which doesn't mean that all possible combinations have to be present, only the combination of inputs necessary to show each possible combination of the outcomes.

* Negative testing
This testing includes additional scenarios for testing invalid or unexpected conditions. This testing helps identify possible real-world scenarios that may happen and were not initially foreseen but which could cause harm if not accommodated.

* Performance testing
This testing would include larger volumes of data, to check how the system performs for example under load or in other real-world scenarios


### Test Data

Test Data can be provided in several ways:
1. **Example data** - as described before, each SMART Guideline shall contain example resource instances, which should be used to describe the information path. These resource instances can be used in testing.

2. **Generated data** - from the decision tables and other L2 artifacts, there may be a set of resources or groups of resources that would be expected to produce some outcome. For example a sufficient number of resources to significantly populate the MeasureReport. These resources would be in large number and would not be added directly to the specification. Instead, the test plans include specifications for that test data, allowing the actual test resources to be generated - via synthetic data generators () or by any other way to generate test data. 



### Test process overview

The diagram below shows how the test definition and execution processes integrate with the authoring: 
* As part of / as a consequence of the L2 authoring, the L2 author defines acceptance criteria. These are business statements about the expected behaviour of the system. For example, a criteria statement would be "If the patient age is less than nine months, they are not due for measles vaccination, and the recommendation output shall be not to vaccinate." Statements can also be negative e.g. "If age is not determined, no guidance should be produced". They are defined in a structured format for ease of authoring.
* These criteria are then published for validation (in an easy-to-read documentation format)
* The criteria are also used as input for test design - which test scripts are to be created to cover the criteria. As an output, FHIR test plan descriptions are created - in the form of `TestScript` resource instances. These `TestScript`s describe the actions and assertions, and make use of test data.
* Acceptance Criteria also allow the definition of test data.
* Some test data is created as FHIR resources into the specification; large volume test data is defined but is not created as part of the specification
* Test data is packaged - this may include any pre-existing common test data (e.g. a set of resources representing a reference population). 
* The test data package is used along with `TestPlan`s and/or `TestScript`s in a testing platform that can run the tests and check the assertions.


<img src="./test-process.png" style="width:80%; align:center"/>
<br clear="all"/>

