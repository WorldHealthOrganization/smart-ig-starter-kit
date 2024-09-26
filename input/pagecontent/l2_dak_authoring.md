While creating a WHO DAK, the focus is to transcribe health and data recommendations published and available in WHO guidelines and other normative products into the DAK components.

Therefore, the DAK should:

  ☑  include content that is explicitly mentioned in the WHO guidelines and other normative products (L1 of SMART Guidelines);
  
  ☑  include content that is needed for indicator reporting while adhering to the principle of “collect once, use many times”;
  
  ☑ be scoped for primary health care settings;

  ☑ focus on generic components applicable to 80% of the contexts across various countries. Remember, the DAK would still need to be adapted to the country context before it is used to build implementable digital solutions or applications.

The DAK should not:

-   add additional clinical content that’s not in the L1 guidance;
-   prescribe specific user interfaces unless specified in the L1 guidance;
-   include content that is country-specific and not applicable across multiple contexts;
-   be a comprehensive software solution. The DAK aims to provide generic business requirements and not to design specific software solutions;
-   review other tools in the market for ==exhaustiveness of solution==.

The authoring of a DAK should follow a structured process. The picture below presents the high-level DAK development process as used by WHO.
![DAK development process](https://github.com/user-attachments/assets/d6aca7b5-9cd1-4c91-87ef-92972603e31d)
This represents generic process guidance, and DAK developers should further tailor the described process and steps to their specific context and needs. 

### 1. Plan

Comprehensive planning is essential for the successful development of a DAK. The following template can be used for planning the below-mentioned activities:  [[DAK development plan](https://www.checkifwecanshare.com)]

:exclamation: **Note for WHO programme teams:** please contact the digital health and innovations (DHI) team at [smart@who.int](mailto:smart@who.int) if you are interested in developing a DAK, to receive appropriate guidance and WHO-specific artefacts (templates, procedures, etc.).

Key activities in this phase:

1.  Scoping
	-   define the scope
		-   DAK developers should start defining the DAK scope by looking for answers to the following questions:
			-   why is worthwhile developing a DAK?
			-   who is the target audience?
			-   do similar products exist?
			-   what gaps it will address?
			-   how will the DAK align with upcoming publications (if any)?
			-   …
	-   establish the development process to be used for developing the DAK components
		-   agile development methods are recommended because of their iterative and incremental nature, efficient feedback loops, focus on the client and reduced process waste;
		-   an approach, used by WHO in developing DAKs, is detailed [here](#scrum_framework).
	-   determine the tools to be used for project tracking, communication, and DAK components design [for example the tool to design business processes based on the Business Process Model and Notation (BPMN) standard];
	-   assess the necessary resources to develop the DAK, including securing an adequate budget for each step of DAK development.
	-   …
3.  Define clear roles and responsibilities with the stakeholders
	-   engage key stakeholders and stewards of the guidelines:
		-   to ensure an accurate and comprehensive interpretation of the WHO guidelines and other normative products. It is important to ensure that the authors of the source documents or the domain experts of a specific health area are actively engaged, if not leading, in the collaborative development of these DAKs;
		-   developing a DAK should be seen as a department-wide effort. Therefore, spreading the word, having informative presentations about SMART guidelines and DAK within the department, and involving key persons from relevant health areas could be of great help in the long term;
		-   collaboration with other departments should be considered as well, because there might be overlapping components, such as indicators or data items. For example: TB and HIV indicators and data items.
	-   define the RASCI matrix (the RASCI matrix from the [[DAK development plan](https://www.checkifwecanshare.com)] can be used as a starting point).

5.  Define the timeline of activities:
	-   draft the project roadmap with estimates for each phase and key milestone dates;
	-   Plan consultations with the technical SMEs:
		-   define a meeting cadence for the consultations with the technical SMEs (Subject Matter Experts). The cadence of meetings can be influenced by the development process utilized, for example, if an agile methodology is used, with development performed in sprints, the cadence of meetings might be dictated by the sprints cadence;
		-   define a format for consultations that work with the SMEs:
			-   workshops (in-person or online);
			-   in-person country visits;
			-   any other.

7.  Gather L1 source documents:
	-   it is important to understand how many normative products (guidelines and other associated publications) will need to be incorporated into the DAK in order to understand the full level of effort required for development, impacting timelines and resourcing;
	-   the WHO DAKs were not built based on a single guideline document but on a multitude of WHO guidelines and other normative products that have been published by WHO. For example, the ANC DAK was created not only based on the WHO ANC Guidelines but also on 8 other normative products issued by WHO.

### 2. Develop
#### DAK components
The DAK consists of 9 interlinked components: (1) health interventions and associated recommendations; (2) generic personas; (3) user scenarios; (4) generic business processes and workflows; (5) core data elements; (6) decision-support logic; (7) scheduling logic; (8) indicators and reporting requirements; and (9) high-level functional and non-functional requirements. Some of the dependencies between the components are:

- the health interventions and recommendations component should be first drafted in order to have a better understanding of the scope;
- the actors in the user scenarios and business processes represent the personas identified in component 2 “Generic personas”;
- the actions performed by the actors in the user scenarios define the activities and their sequence, presented in the workflows (component 4);
- the data elements and the decision-support tables are linked to activities from the business processes, therefore it is important to know at what step of the workflow data is captured or logic is executed. On the other hand, designing the data dictionary and/or the decision-support tables can lead to modifications in the business processes;
- indicators’ calculations are defined using data elements from the data dictionary. At the same time, when listing the indicators, the author identifies missing data items;
- functionalities and system capabilities depicted in the user scenarios should be captured in the list of functional and non-functional requirements (component 9).

The diagram below presents the DAK components and the main relationships between them:
<img width="457" alt="DAK components relationship" src="https://github.com/user-attachments/assets/1641b936-7851-4517-96b5-a3d0b294ac8d">

#### Development process
Because of the complex set of dependencies between the DAK components, it is advised to develop the DAK using an iterative and incremental process that helps the authors adapt and improve the content and the process along the way. Such a process is outlined below.
##### SCRUM framework 
![image](https://github.com/user-attachments/assets/1dcdea8c-a2ba-4a2e-a20d-c661d2da94fe)
**The Scrum Team** consists of one Scrum Master, one Product Owner, and Developers. Within a Scrum Team, there are no sub-teams or hierarchies. It is a cohesive unit of professionals focused on one objective at a time, the Product Goal.

_Developers_ are the people in the Scrum Team who are committed to creating any aspect of a usable increment each Sprint.

_The Scrum Master_ helps everyone understand Scrum theory and practice, both within the Scrum Team and the organization. The Scrum Master is accountable for the Scrum Team’s effectiveness. They do this by enabling the Scrum Team to improve its practices, within the Scrum framework. Scrum Masters are true leaders who serve the Scrum Team and the larger organization.

_The Product Owner (PO)_ is accountable for maximizing the value of the product resulting from the work of the Scrum Team. The Product Owner is also accountable for effective Product Backlog management.

![image](https://github.com/user-attachments/assets/3c377b14-107e-401a-bf4c-7877de99b595)

**The SCRUM Events**

1.  The Sprint
	-   fixed length events of one month or less to create consistency;
	-   a new Sprint starts immediately after the conclusion of the previous Sprint; 
	-   all the work necessary to achieve the Product Goal, including Sprint Planning, Daily Scrums, Sprint Review, and Sprint Retrospective, happens within Sprints.

3.  Sprint Planning (What can be done this Sprint? How will the chosen work get done?)
	-   Goal: plan and breakdown the work for the upcoming sprint;
	-   Input: projected capacity (working days), latest sprint results, Product Backlog, past performance;
	-   Output: Sprint Goal and the Sprint backlog with items decomposed into small tasks;
	-   Duration: maximum of eight hours for a one-month Sprint;
	-   Participants: SCRUM team. The Scrum Team may also invite other people to attend Sprint Planning to provide advice.

5.  Daily SCRUM
	-   Daily Scrums improve communications, eliminate other meetings, identify impediments, highlight and promote quick decision-making, and improve the team’s level of knowledge;
	-   Goal: to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the upcoming planned work;
	-   Input: Sprint backlog, Sprint Goal;
	-   Output: A plan for the following 24H;
	-   Duration: 15 min;
	-   Participants: SCRUM team.

4.  Refinement meeting
	- Goal: Clarify work to be done (Product Backlog Items);
	- Input: Product Backlog;
	- Output: Refined stories. Estimated stories;
	- Duration: TBD;
	- Participants: SCRUM team. Other people can be invited to provide advice, such as SMEs.

5.  Sprint Review
	- Goal: inspect the outcome of the Sprint and determine future adaptations;
	- Input: Previous Sprint Backlog, Next Sprint backlog;
	- Output: Happy stakeholders J;
	- Duration: TBD (maximum of four hours for a one-month Sprint);
	- Participants: All stakeholders can participate.

	:exclamation: Note: This is an informal meeting, not a status meeting. The goal of this meeting is to elicit feedback and foster collaboration.

6.  Retrospective meeting
	- Goal: plan ways to increase quality and effectiveness;
	- Input: Feedback provided by the SCRUM team members;
	- Output: Action items (Improvements);
	- Duration: TBD (maximum of three hours for a one-month Sprint);
	- Participants: SCRUM team.

**SCRUM artefacts**

1.  The Product Backlog
	- the central source of requirements and work to be performed;
	- the PO is responsible for the Product Backlog, including its content, availability, and ordering;
	- the Product Backlog lists all features, functions, requirements, enhancements, and fixes that constitute the changes to be made to the product (in our case the DAK);
	- anyone can add items in the Product Backlog but those would need to be discussed/clarified within the PO before the work is started on those items.

	Note: [The DAK development plan](www.checkifwecanshare.com) could be used as the DAK roadmap and as a source for the Product Backlog.

2.  The Sprint Backlog
	- the Sprint Backlog is a highly visible, real-time picture of the work that the SCRUM team plans to accomplish during the Sprint;
	- belongs solely to the SCRUM team.

3.  Increment

	- an Increment is a concrete steppingstone toward the Product Goal;
	- each Increment is additive to all prior Increments
The 4 big steps to develop a DAK are presented below:

#### _2.1 Review L1_

Review the L1 (the narrative layer of the SMART guidelines) documentation, such as the WHO guidelines and other normative products. Additionally, take the opportunity to identify and assess existing digital artefacts developed for the health area that integrate the L1 guidance, for example, mobile applications, knowledge-sharing platforms, and eLearning portals. Remember, the purpose of this exercise is to develop a big-picture view and not to review tools in the market for exhaustiveness of solution.

#### _2.2 Fill in DAK templates_

Build the digital adaptation kit according to the templates: to ensure a standardised documentation method for presenting the software requirements, which will allow for facilitated adaptation and comparison across geographies and health domains.

The Digital Adaptation Kit (DAK) consists of 6 documents, with Excel spreadsheets that cover 5 of the 9 key components of a DAK:

 **File** | **Format** | **Comments** |
--|--|--
The “main” DAK document _(is the template for the final PDF)_|Written in Word document, published in PDF|The template for the “main” DAK document. The narrative text can and should be changed as needed for each specific health domain. However, highlighted throughout the document are places where health domain specificity should be added. <br>The following components: Health interventions and recommendations, generic personas, user scenarios and other narrative components can be directly edited and drafted within the DAK document template.<br>The business process workflow diagrams would be generated in another tool such as. [Microsoft Visio](https://www.microsoft.com/en-us/microsoft-365/visio/flowchart-software), [Camunda Modeler](https://camunda.com/download/modeler/), [drawio.com](https://www.drawio.com/), etc. The selected tool should:<br> - be able to cover the needs in terms of BPMN notation (see the table “Business process symbols used in workflows” from the document);<br> - be able to export the diagrams in .bpmn format; <br> - not pose issues in terms of licencing. <br> The workflow diagrams should then be included in the main DAK document as an image file. <br> For the data dictionary, decision support logic, scheduling logic, indicators and performance metrics, and functional and non-functional requirement components, it is recommended that they are finalized in the Excel spreadsheet first before copying content over into the “main” DAK document.
Core data dictionary|Excel spreadsheet|Please refer to each Excel spreadsheet for detailed instructions.
Decision support logic|Excel spreadsheet|Please refer to each Excel spreadsheet for detailed instructions.
Scheduling logic|Excel spreadsheet|Please refer to each Excel spreadsheet for detailed instructions.
Indicators and performance metrics|Excel spreadsheet|Please refer to each Excel spreadsheet for detailed instructions.
Functional and non-functional requirements|Excel spreadsheet|Please refer to each Excel spreadsheet for detailed instructions.
