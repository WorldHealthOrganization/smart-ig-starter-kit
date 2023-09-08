After [publication](), any changes to the L3 resources should be tracked. 
Tracking changes should include:

* Repository issues (GitHub issues)
* Computable change history (Provenance) associated with the resources
* Differencing between different versions of a publication
* Release Notes

### Github Issues
* Every change should be traceable to a GitHub issue. This allows tracking the change and any approvals/discussions, as well as assisting in creating release notes.

* State of each issue: GitHub issues should not be considered "done" when the change is agreed, but only when the change is effectively implemented and tested and the respective criteria is met.


### Change history
Saved as a FHIR [Provenance](http://hl7.org/fhir/provenance.html) resource, indicating the author, the reason for change, and the changed artifact. This shows up in the published pages as a "History" tab.
The necessary metadata is:

* Object of change
* Author
* Reason
* Date and time of change
* Type of change

This data is represented in a FHIR Provenance resource:

* `target` is a Reference the resource that was changed
* `recorded` is a mandatory element and shall be filled in.
* `occurredDateTime` is the Date and time of change
* `reason.text` is the reason for the change
* `activity` is the Type of change (creation, updates) and SHOULD use values in the codesystem [`http://terminology.hl7.org/CodeSystem/v3-DataOperation`](http://terminology.hl7.org/CodeSystem/v3-DataOperation).

* `agent.type` is the role of participant in the change (author, reviewer) and SHALL be bound to the ValueSet `http://terminology.hl7.org/CodeSystem/provenance-participant-type`
* `agent.who` is the name of participant in the change

<p class="todo">TO DO: SGHistoryProvenance Profile?</p>
<p class="todo">TO DO: Tooling: Ask for pages to be tracked as well.</p>

### Version Difference
For some artifacts, the FHIR ImplementationGuide tooling may highlight the differences in the content of the artifacts between two versions. This can be used to track and demonstrate the detailed artifact changes.


### Release Notes
<p class="todo">TO DO