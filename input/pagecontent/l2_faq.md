This section gathers the frequently asked questions and provides answers to them based on WHO's experience with developing DAKs.

### General

N/A

### Health interventions and recommendations

N/A

### User scenarios

-   Shall I always try to capture common workflows in the scenarios, for example, "registration" or "referral"?
	- it is not mandatory to include scenarios about common workflows in the DAK. If the L1 guidance for the health area being worked on in the DAK does not refer to such workflows, then it can be skipped. However, you should incorporate common workflows, such as registration or referral, in the clinical-based user scenarios.

### Personas

N/A

### Business processes and workflows

N/A

### Data dictionary

-   How to handle data elements collected in a form and reused in other activities/workflows?
	-   data collection forms are an important source of data elements. In the case when the same form is used multiple times, for example, to edit/validate the data in later workflow activities, key data must be collected only once. The DAKs adhere to the "collect once, use many times” principle, therefore data elements are only listed under the activity and business process they are first collected in. Only the new data elements that need to be collected in subsequent activities and/or business processes are listed. This approach assumes that health workers will have access to modify data elements present in prior business processes, eliminating the need to repeat data elements. In instances where data elements can be collected in different, disconnected business processes, making it difficult to determine the initial collection point, such data elements are included in the "[health domain abbreviation].Common" tab.

### Decision-support and logic

-   Can rows with the same input entry be merged?
	-   yes, rows with the same input entry can be merged as per the below criteria:

![image](https://github.com/user-attachments/assets/7fbf0a4a-f29d-4cea-b3f5-48d5e19a3a32)


-   Can rows with the same output entry be merged?
	-   no, DMN Standard does not allow for rows with the same output entries to be merged.
-   How to introduce decisions like “compelling reason” in the decision support table?
	-   this is an example of an ambiguous L1 definition that cannot be translated into clear system indications, like a rule for a decision-support table. In this kind of scenario, is good to clarify as much as possible with L1 authors to see if the recommendations can be mapped to exact decision-support rules or is better to keep that out of the logic as something that needs to be adapted and contextualized.
-   How to fill in the “System action” column? Is there a list of values for the “System action” output component?
	-   there is no specific list defined yet, but examples of system actions can be: recommend repeating a test, recommend additional investigations, display additional guidance content, recommend updating the client's care plan, etc.;
	-   system actions are recommendations that the system will make based on decision-support tables;
	-   a detailed example, inspired by the TB DAK, is described below:

The “Screening” workflow contains the decision-support logic table “TB.B7 Evaluate the screening results”.

![image](https://github.com/user-attachments/assets/30d12ac3-eeaf-45d6-9be5-cd381a760195)


One of the rules of the table has as output “TB screening result” = “Inconclusive”, therefore there is no exact path forward in the workflow if this rule matches. The L1 guidance recommends in this case exploring alternate diagnoses to rule out TB, before assessing the client for TB preventive treatment (TPT). In this case, the “System action” column could be used to give instructions to the system: “Recommend alternate diagnoses to rule out TB”. This allows the system to create an output and offers useful instructions for L3 implementers. The content in this column should align with the general message from the “Guidance for the health worker” column.

### Indicators

N/A

### Functional and non-functional requirements

-   Are interoperability requirements functional requirements or non-functional requirements?
