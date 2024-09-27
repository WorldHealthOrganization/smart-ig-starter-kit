While creating a WHO DAK, the focus is to transcribe health and data recommendations published and available in WHO guidelines and other normative products into the DAK components.

Therefore, the DAK should:

- include content that is explicitly mentioned in the WHO guidelines and other normative products (L1 of SMART Guidelines);
- include content that is needed for indicator reporting while adhering to the principle of “collect once, use many times”;
- be scoped for primary health care settings;
- focus on generic components applicable to 80% of the contexts across various countries. Remember, the DAK would still need to be adapted to the country context before it is used to build implementable digital solutions or applications.

The DAK should not:

-   add additional clinical content that’s not in the L1 guidance;
-   prescribe specific user interfaces unless specified in the L1 guidance;
-   include content that is country-specific and not applicable across multiple contexts;
-   be a comprehensive software solution. The DAK aims to provide generic business requirements and not to design specific software solutions;
-   review other tools in the market for exhaustiveness of solution.

The authoring of a DAK should follow a structured process. The picture below presents the high-level DAK development process as used by WHO.

![DAK development process](https://github.com/user-attachments/assets/d6aca7b5-9cd1-4c91-87ef-92972603e31d)

This represents generic process guidance, and DAK developers should further tailor the described process and steps to their specific context and needs. 

### 1. Plan

Comprehensive planning is essential for the successful development of a DAK. The following template can be used for planning the below-mentioned activities:  [[DAK development plan](https://www.checkifwecanshare.com)]

**Note for WHO programme teams:** please contact the digital health and innovations (DHI) team at [smart@who.int](mailto:smart@who.int) if you are interested in developing a DAK, to receive appropriate guidance and WHO-specific artefacts (templates, procedures, etc.).

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

<img width="457" alt="DAK components relationship" src="https://github.com/user-attachments/assets/1641b936-7851-4517-96b5-a3d0b294ac8d"><br>

#### Development process
Because of the complex set of dependencies between the DAK components, it is advised to develop the DAK using an iterative and incremental process that helps the authors adapt and improve the content and the process along the way. Such a process is outlined below.

##### SCRUM framework[^1] <br>

![image](https://github.com/user-attachments/assets/1dcdea8c-a2ba-4a2e-a20d-c661d2da94fe)<br>

**The Scrum Team** consists of one Scrum Master, one Product Owner, and Developers. Within a Scrum Team, there are no sub-teams or hierarchies. It is a cohesive unit of professionals focused on one objective at a time, the Product Goal.

_Developers_ are the people in the Scrum Team who are committed to creating any aspect of a usable increment each Sprint.

_The Scrum Master_ helps everyone understand Scrum theory and practice, both within the Scrum Team and the organization. The Scrum Master is accountable for the Scrum Team’s effectiveness. They do this by enabling the Scrum Team to improve its practices, within the Scrum framework. Scrum Masters are true leaders who serve the Scrum Team and the larger organization.

_The Product Owner (PO)_ is accountable for maximizing the value of the product resulting from the work of the Scrum Team. The Product Owner is also accountable for effective Product Backlog management.<br>

![image](https://github.com/user-attachments/assets/3c377b14-107e-401a-bf4c-7877de99b595) <br>

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
	- Output: Happy stakeholders;
	- Duration: TBD (maximum of four hours for a one-month Sprint);
	- Participants: All stakeholders can participate.

	Note: This is an informal meeting, not a status meeting. The goal of this meeting is to elicit feedback and foster collaboration.

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
	- each Increment is additive to all prior Increments.

The 4 big steps to develop a DAK are presented below:

#### _2.1 Review L1_

Review the L1 (the narrative layer of the SMART guidelines) documentation, such as the WHO guidelines and other normative products. Additionally, take the opportunity to identify and assess existing digital artefacts developed for the health area that integrate the L1 guidance, for example, mobile applications, knowledge-sharing platforms, and eLearning portals. Remember, the purpose of this exercise is to develop a big-picture view and not to review tools in the market for exhaustiveness of solution.

#### _2.2 Fill in DAK templates_

Build the digital adaptation kit according to the templates: to ensure a standardised documentation method for presenting the software requirements, which will allow for facilitated adaptation and comparison across geographies and health domains.

Prefill DAK components by using the templates available at [this location.](https://linkToTheL2templatesPage) Please review and follow the instructions from the templates that explain how to fill in the documents.

For each component:

1.  **Health interventions and recommended interventions** - compile a list of health interventions and recommendations, based on narrative guidelines and guidance, that you wish to ‘translate’ into the DAK. This list should be based on existing WHO guidelines and other normative products  and the [UHC list of essential interventions](https://www.who.int/universal-health-coverage/compendium/interventions-by-programme-area);
2.  **Generic personas** - create generic personas based on task-shifting guidelines and/or ground-truthing interviews with real end users in selected contexts and countries;
3.  **User scenarios** - create high-level narratives based on a compilation of the actual context the majority number of end users would be operating in;
4.  **Generic business processes and workflows** - based on content in the narrative documents (SMART guidelines L1), domain expertise, and real-life observations in selected contexts and countries;
5.  **Core data elements** - based on data elements needed for service delivery and indicator reporting, which are described in the WHO guidelines and other normative products; domain expertise; and real data needs in selected contexts and countries;
6.  **Decision-support logic** - based on logic embedded and described in WHO guidelines and other normative products;
7.  **Scheduling logic -** based on scheduling logic embedded and described in WHO guidelines and other normative products;
8.  **Indicators and reporting requirements** - based on WHO guidelines and other normative products;
9.  **Core functional and non-functional requirements** - based on WHO guidelines and other normative products and actual needs from real people in selected contexts and countries.

It is worth mentioning that is not mandatory to fill in content for all DAK components.  Components can be skipped if not relevant to the health area. In that case, it should be clearly stated in the text of the DAK that there is no content developed for the respective component.

Follow the approach outlined below to streamline the process.<br>

![Develop DAK components](https://github.com/user-attachments/assets/cf454d57-ef02-4dc9-8fd5-65d19b6fe28c) <br>

The first steps should be identifying the health interventions and recommendations, personas, user scenarios and key business processes specific to the health area. This will be the baseline for developing the rest of the components as it helps clarify further the scope, identify the actors and define the client’s journey on receiving health care services pathway.

Some important aspects to consider while developing the above-mentioned components:
- **Personas**:
	-  Personas may be identified/detailed in the following ways:
		-   through L1 normative guidance which refers to specific personas;
		-   through consultations with SMEs which help identify personas participating in certain workflows;
		-   through in-person interviews at facilities;
	-   The personas providing care, described in the DAK, might be practising activities in private, public or both types of health clinics.
- **User scenarios**: 
	-   illustrate user scenarios in the DAK that describe typical interactions that one would expect to happen in the specific health programme area. Consider developing a user scenario for each clinical business process, for example, screening, diagnosis, treatment, etc.;
	-   in some cases, it could be helpful to include scenarios which are intricate in terms of normative guidance, so that the reader better understands how the system will be used in those settings.
- **Business processes:**
	- create the diagram reflecting the overview of key business processes for the health area;
	- the overview diagram and the specific diagrams for each business process should follow the [BPMN standard](https://www.bpmn.org/).

Dedicate enough time to assimilate the knowledge gathered so far and conceptualize the big picture. Create a sketch of all the ideas and review if all the dots connect or if there are gaps. Optionally, creating a [concept map](https://en.wikipedia.org/wiki/Concept_map) can help put ideas together.

The next step is to develop the user scenario(s), workflow description, core set of data elements, decision-support logic, scheduling logic, indicators and functional and non-functional requirements for each business process identified in the previous step. Important aspects to consider while developing these components:

- **Business processes and workflows:**
	-   the business process workflow should capture 80% of the scenario leaving out 20% for adaptations. The level of detail should be tied to the necessity of detail in WHO recommendations. If the level of detail included in the workflow becomes applicable in one context but not relevant in another – then probably simplification of the workflow and generalizing the workflow is needed;
	-   you might illustrate and describe the “Counselling” and “Obtain informed consent” activities:
		-   as part of only specific workflows;
		-   as independent workflows;
		-   consider that those actions occur throughout the entire healthcare process and there is no exact place in the workflows where they should be described.

		Reflect on this and choose what best fits your DAK.

	-   getting consensus on workflows can get challenging and some tips here might help:
		-   the workflow should be high-level enough to stay valid in a global (or country) context and allow for contextualization. Do not include low-level details where the processes might not necessarily stay true across countries or country contexts;
		-   if the guidelines are not recently updated and the technical team has ideas that are forward-looking for the system, go for the future state of the systems along with sign-off on the same with technical teams.

- **Core data elements**
	- only data that need to be stored for reporting, auditing, decision-support logic, aggregation and exchange should be captured in the data dictionary. Any data element that is needed for secondary calculation that does not have an explicit need to store, report, audit, use in decision-support logic, aggregate or exchange should not be captured in the data dictionary (e.g. data elements that are needed for the user interface [UI] of the reference application to be more user-friendly should not be captured).
- **Decision-support logic**
	- the decision support and logic table should strictly follow the normative contents of the [DMN standard](https://www.omg.org/spec/DMN/1.4/Beta1/PDF).

- **Indicators**
	- the focus should be on the indicators that can be derived from the data collected and available at the primary health care level. This is in line with the principle "collect once, use many times” and highlights the importance of reducing the reporting burden for the health workers, allowing them to focus instead on providing care. For higher-level reporting needs, such as national and global aggregated indicators, the authors should refer to the [World Health Data Hub metamodel](https://worldhealthorg.sharepoint.com/sites/WorldHealthDataHubPortal/SitePages/Wiki.aspx?source=https%3a//worldhealthorg.sharepoint.com/sites/WorldHealthDataHubPortal/SitePages/Forms/ByAuthor.aspx#key-contacts).

- **Core functional and non-functional requirements**
	-   functional and non-functional requirements should be restricted to what the requirements are coming from the L1 recommendations in terms of the health and data content and decision support logic;
	-   any other best practice requirements that are nice to have in terms of user-friendliness or cybersecurity can be shared as examples of requirements in a separate table which is not to be included in the compliance checks in the digital clearinghouse.

As soon as a DAK component is drafted, it should be first reviewed and validated by the health area technical officer(s) that coordinate(s) the work on the DAK. They should be considered part of the team that develops the DAK content and not seen as external stakeholders that only perform high-level reviews.

Some items to review at this stage:
-   do the business processes contain any specific activities that are too specific and may not hold across various countries?
-   are there any decision support tables that rely on 10+ inputs? Is it possible to split the decision-support table into separate decision-support tables?
-   are there any gaps or key changes to make?
-   if some concepts could be approached in multiple ways – define the alternatives and review the pros and cons.
-   are the components defined as software neutral and do not assume any specific software or device?
-   do the personas identified connect with the personas identified in other components of the DAK, for example, in the business processes, in functional requirements?
-   is the same persona named differently in different components (e.g. "Health Worker" and "Health Care Worker")?

The DAK components should be developed to the extent possible before meeting the larger group of SMEs for consultations. This ensures more efficient use of SMEs’ time during the consultations and helps draft a detailed, specific list of questions to review during the sessions.

#### _2.3 Validate DAK content with SMEs_

As with many documents, the digital adaptation kits will need to go through a series of reviews and be curated iteratively to ensure the buy-in of all key stakeholders and accuracy in the development of each DAK component. Once the DAK is drafted, consult the SMEs for a review of clinical content for each component of the DAK. The purpose is to gather feedback, clarify doubts and refine the DAK content. 

Prepare upfront the meetings with SMEs:
- create an agenda for the consultation meeting;
- create a list of questions to discuss with the SMEs;
- create visual aids to go through the meeting.

During the consultations, keep the focus strictly on the clinical recommendations from the L1 guidance and primary care settings for the use cases.
At this time ground-truthing exercises should be conducted as well with the technical SMEs from the health programme area. Oftentimes it is hard to create useful documents at the global or national level due to the nature of being far from the actual work happening on the ground. Consultations with “in the country”/”in the region” partners are encouraged which will help validate DAK components, such as personas, user scenarios, and workflows. It can be useful to conduct interviews and observations based on human-centred design methods in a series of multiple countries and contexts to understand the ‘80%’ commonality across all those settings. This will help inform you on what the ‘80%’ of your DAK should consist of. However, take utmost care to not include country-specific uses in the DAK directly without distilling it out or generalizing it.

#### _2.4 Incorporate feedback_

Incorporate feedback received from the technical teams and go through the review L1, drafting, and content validation steps again, for each identified business process.

Before starting a new iteration of the _Review L1-Fill in DAK templates-Validate DAK content with SMEs- Incorporate feedback_ process, review the DAK to check if there is room for improvement of components, or if there is an easier way to represent certain concepts:
-   review the decision support table to see if the rules could be refactored or condensed;
-   review the data dictionary. For example, check if all the data elements of type "Boolean" are necessary. Could we group "Booleans" as "List" data elements?
-   review the business processes. For example, check if some activities are repeating. Could we group those activities and create a sub-process or a new business process referenced from the main flow?

### 3. Publish DAK

Once the full DAK is drafted and ready for the publishing phase, do a self-review and fix any gaps, issues and misses. Checklist of items to review:
- the correct template versions were used;
- any required cells in the data dictionary/decision support/indicators or any other templates are not left blank;
- references are marked at each relevant point;
- data is deduplicated and no redundancies are present;
- all components have sufficient annotations and remarks that explain how the elements are to be interpreted/adapted/implemented;
- notations for process IDs, activity IDs, and labels’ names are followed correctly and consistently.

Follow your organisation's relevant verification and clearance processes and publish the DAK. Consider publishing the content under an open-source license so that other organizations or countries can reuse it.

**Note for WHO programme teams**: please check the internal, WHO-specific, publication procedure, `available here`, and contact the (DHI) team at smart@who.int to receive further guidance related to the WHO clearance and publication process.

[^1]: [Scrum Guides](https://scrumguides.org/).
