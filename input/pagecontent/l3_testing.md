SMART Guidelines are designed for testability - allowing testing the SMART Guidelines implementations, as well as allowing testing of the specification itself.

For this, the SMART Guidelines specifications include **test criteria**, **test plans** and **test data**, and the SMART Guidelines tooling includes testing artifacts and reference implementations.  


## Testing overview

The key aspects of testing are:

1. Business requirements and **test criteria** are defined at L2;   
2. in L3 test authoring, **test plans** and **test data** are designed starting thom the test criteria;   
2.1. Some test data is created in the specification; Other test data (e.g. large volumes) is defined or generated outside of the L3 authoring;  
2.2. Test cases and test data are packaged and used in testing;   
3. Test reports are issued and used to validate the specifications or the implementations



### Test Criteria
Test Criteria are functional definitions of the expected behaviour of the system, defined at L2 and used to create test plans.


### Test Plans
Test Plans are machine-readable expectations, data and assertions for reproducible testing.
  * Both test data and test plans can be authored separately from a pool of test data or generated from some inputs.  


### Test Data

Test data can consist of the resources simple test data which can be used for testing the "normal" cases

* **Test data** - larger or more demanding (or incorrect) test data wich can be used to check the boundaries, perform negative testing, load testing, etc.  






1. **Testing specifications** - the L3 author can validate the specification with a reference tool set. The content authored in the L3 (Measures, Libraries, StructureMaps) is checked with the examples provided to check that the specification meets the criteria. This testing can be done after authoring, or continuously in a BDD (Business Driven Development) or TDD (Test-Driven development) approach.


2. **Testing implementations** - At any time during the implementation, L4 implementers can test if their implementation meets the criteria
In this case, the implementation is under test, and the specification is a testing fixture.
This testing can be also done after authoring, or continuously in a BDD or TDD approach.


3. **Testing events** - In any community testing events, like Connectathons, several systems can be tested.  






<div class="info-box may">
  <span class="info-title">Test Data and Test Case</span>
   Test Data (and test cases) may be available or may be generated (or parametrized) for test execution. 
</div>

The creation of test cases and test data will be detailed in further editions of the SMART Guidelines SOPs.












For this, the SMART Guidelines specifications include **Test Criteria**, **Test Plans** and **Test Data**, and the SMART Guidelines tooling includes testing artifacts and reference implementations.




<div class="info-box may">
  <span class="info-title">Test Data and Test Case</span>
   Test Data (and test cases) may be available or may be generated (or parametrized) for test execution. 
</div>

The creation of test cases and test data will be detailed in further editions of the SMART Guidelines SOPs.




