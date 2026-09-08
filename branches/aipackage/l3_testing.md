# Testing - SMART Guidelines Starter Kit v2.1.0

* [**Table of Contents**](toc.md)
* [**L3 Authoring Overview**](authoring_overview.md)
* [**Authoring Conventions**](authoring_conventions.md)
* **Testing**

## Testing

SMART Guidelines are designed for testability - allowing testing the SMART Guidelines implementations, as well as allowing testing of the specification itself.

For this, the SMART Guidelines specifications include **test criteria**, **test plans** and **test data**, and the SMART Guidelines tooling includes testing artifacts and reference implementations.

## Testing overview

The key aspects of testing are:

1. Business requirements and**test criteria**are defined at L2;
1. in L3 test authoring,**test plans**and**test data**are designed starting thom the test criteria;
2.1. Some test data is created in the specification; Other test data (e.g. large volumes) is defined or generated outside of the L3 authoring;
2.2. Test cases and test data are packaged and used in testing;
1. Test reports are issued and used to validate the specifications or the implementations

### Test Criteria

Test Criteria are functional definitions of the expected behaviour of the system, defined at L2 and used to create test plans.

### Test Data

Test data can consist of example resources which can be used for testing the "normal" cases. Test data can also consist of larger or different sets of data which can be used to check the boundaries, perform negative testing, load testing, etc.

Test Data and Test CaseTest Data (and test cases) may be available or may be generated (or parametrized) for test execution.

The creation of test cases and test data will be detailed in further editions of the SMART Guidelines SOPs.

### Test Plans

Test Plans are machine-readable expectations, data and assertions for reproducible testing.

* Both test data and test plans can be authored separately from a pool of test data or generated from some inputs.

Testing can be used to **testing the specifications** - as the L3 author validates the specification with a reference tool set - **test implementations** - as L4 implementers can test if their current implementation meets the defined criteria - and in **Testing events** - like Connectathons, or other events where several systems can be tested.

Test Data and Test CaseTest Data (and test cases) may be available or may be generated (or parametrized) for test execution.

The creation of test cases and test data will be detailed in further editions of the SMART Guidelines SOPs, as well as the execution and reporting on the tests.

