While creating a WHO DAK, the focus is to transcribe health and data recommendations published and available in WHO guidelines and other normative products into the DAK components.

### DAK components

The DAK consists of 9 interlinked components: (1) health interventions and recommendations; (2) generic personas; (3) user scenarios; (4) generic business processes and workflows; (5) core data elements; (6) decision-support logic; (7) scheduling logic; (8) indicators and performance metrics; and (9) high-level functional and non-functional requirements. The table below provides an overview of each of the contributing components of the DAK.

 **Component** | **Description** | **Purpose** | **Outputs/artifacts**|
--|--|--|--|
|1. Health interventions and recommendations | Overview of the health interventions and health-specific recommendations included within this digital adaptation kit (DAK). DAKs are meant to be a repackaging and integration of L1 guidelines and guidance documents, such as WHO guidelines and other normative products and associated publications, in a particular health domain. The list of health interventions should be drawn from [the universal health coverage menu of interventions](https://www.who.int/universal-health-coverage/compendium/interventions-by-programme-area)[^1]: compiled by WHO. | **Setting the stage** to understand how the DAK would be applied to person-centred point-of-service systems (PCPOSS) in the context of specific health programmes and interventions.| **List of related health interventions** based on WHO’s universal health coverage essential interventions; and <br>**List of related recommendations** based on guidelines and guidance documents.</br>|
2. Generic personas|Depiction of the end users and related stakeholders who would be interacting with the digital system or involved in the care pathway.|**Contextualization** to understand the wants, needs and constraints of the end users.|**Description, competencies and essential interventions** performed by targeted personas.|
3. User scenarios|Narratives that describe how the different personas may interact with the digital system and with each other. <br>The user scenarios are only illustrative and are intended to give an idea of a typical workflow.</br>|**Contextualization** to understand how the system would be used, and how it would fit into existing workflows.|Example **narrative** of how the targeted personas may interact with the system and with each other during a workflow.|
4. Generic business processes and workflows|A business process is a set of related activities or tasks performed together to achieve the objectives of the health programme area, such as registration, counselling, referrals. <br>Workflows are a visual representation of the progression of activities (tasks, decision points, interactions) that are performed within the business process.</br>|**Contextualization and system design** to understand how the digital system would fit into existing workflows and how best to design the system for that purpose.|Overview **matrix** presenting the **key processes** in the specific health area;  and <br>**Workflows** for identified business processes with annotations.</br>|
5. Core data elements|Data elements are required throughout the different points of the workflow. <br> These data elements are mapped to standards-based classifications and terminologies to ensure the data dictionary is compatible with other digital systems.</br>|**System design and interoperability** to know which data elements need to be logged and how they map to other standard terminologies (e.g. ICD and LOINC) for interoperability with other standards-based systems.|List of data elements.<br>**Data dictionary** with detailed data specifications in spreadsheet format.</br>|
6. Decision-support logic|Decision-support logic and algorithms to support appropriate service delivery in accordance with clinical, public health and data use guidelines.|**System design and adherence to recommended clinical practice** to know what underlying logic needs to be coded into the system.|List of decisions that need to be made throughout the encounter.<br>**Decision-support tables** in a spreadsheet format with inputs, outputs and triggers for each decision-support logic.</br>|
7. Scheduling logic|Scheduling logic to support appropriate reminders for follow-up visits and services in accordance with clinical, public health and data use guidelines.|**System design and adherence to recommended clinical practice** to know what service schedules need to be coded into the system so that appropriate reminders are generated.|List of scheduling logic tables.<br>**Scheduling logic** for services in spreadsheet format.</br>|
8. Indicators and performance metrics|Core set of indicators that need to be aggregated for decision-making, performance metrics, and subnational and national reporting.<br>These indicators and metrics are based on data that can feasibly be captured from a routine digital system, rather than survey-based tools.</br>|**System design and adherence to recommended health monitoring practices** to know what calculations and secondary data use are needed for the system, based on the principle of “[collect once, use many](https://pubmed.ncbi.nlm.nih.gov/22195060/)”[^2]:.|**Indicators table** with numerator and denominator of data elements for calculation, along with appropriate disaggregation.|
9. High-level functional and non-functional requirements|A high-level list of core functions and capabilities that the system must have to meet the end users’ needs and achieve tasks within the business process.|**System design** to know what the system should be able to do.|**Tables of functional and non-functional requirements** with the intended end user of each requirement, and why that user needs that functionality in the system.|

Some of the dependencies between the components are:

- the first component, health interventions and recommendations, should be first drafted to establish scope;
- personas identified in component 2 “Generic personas” are the same personas that should be represented in the user scenarios and business processes, therefore component 2 should be drafted before developing user scenarios (component 3) and generic business processes and workflows (component 4);
- the actions performed by the generic personas (component 2) in the user scenarios (component 3) define the activities and their sequence, presented in the generic business processes and workflows (component 4), thus the user scenarios (component 3) should align with what is depicted in the workflows (component 4);
-  The generic business processes and workflows (component 4) indicate when core data elements are collected (component 5), when decision-support logic (component 6) is needed, and when scheduling logic (component 7) is used, thus the core data elements, the decision-support logic tables and the scheduling logic tables are linked to activities from the business processes. Therefore, it is important to clearly define the workflow first. On the other hand, when designing the data dictionary and/or the decision-support tables, this can lead to modifications in the business processes. Although it is recommended that the workflows should be developed first, it is important to plan for iterations after the other components have also been developed.
- indicators’ calculations are defined using data elements from the data dictionary. At the same time, when listing the indicators, the author can identify missing data elements. The indicators and performance metrics (component 8) and the core data elements/data dictionary (component 5) should be developed in conjunction with one another.
- functionalities and system capabilities depicted in the user scenarios (component 3) should be captured in the list of high-level functional and non-functional requirements (component 9).

The diagram below presents the DAK components and the main relationships between them: 

<img src="./L2_DAK_components_relationships.png" style="width:60%; align:center"/>
<br clear="all"/>

### DAK development process
The picture below presents the high-level DAK development process as used by WHO.

<img src="./L2_DAK_development_process.png" style="width:60%; align:center"/>
<br clear="all"/>

This represents generic process guidance, and DAK developers should further tailor the below-described process and steps to their specific context and needs.

### 1. Plan
Comprehensive planning is essential for the successful development of a DAK.
Key activities in the planning phase:

1.  **Scoping**
-   define the scope
	-   the DAK development team (see step “Define clear roles and responsibilities” below) should start defining the DAK scope by looking for answers to the following questions:
		-   what is your purpose in developing a DAK?
		-   who is the target audience?
		-   do similar publications exist?
		-   what gaps it will address?
-   establish the development process and the governance process to be used for developing the DAK components
	-   agile development methods are recommended because of their iterative and incremental nature, efficient feedback loops, focus on the client and reduced process waste (see section “Development process” from the sub-chapter “DAK development” for more information);
	-   determine ownership and key stakeholders (see step “Define clear roles and responsibilities with stakeholders” below for more information).
-   determine the tools to be used for project tracking, communication, and DAK components design [for example the tool to design business processes based on the Business Process Model and Notation ([BPMN](https://www.bpmn.org/)[^3]:) standard];
- assess the necessary resources to develop the DAK, including securing an adequate budget for each step of the process.

2. **Define clear roles and responsibilities**
-   form the DAK development team: the DAK development team is a cohesive unit of professionals that have all the skills necessary to create a DAK. It should be small (< 10 people) and nimble but big enough to complete significant work in an iteration. It can consist of programme managers, technical officer(s), clinician(s) and digital health informaticians (e.g. business analyst(s), quality assurance specialists). The team should be empowered by the organisation to self-organize (decide what when and how the work on the DAK is performed) and manage the DAK-related work (collaboration with the stakeholders, DAK content development and validation, publication and anything else that is required). The DAK development team assumes accountability for the final product: the digital adaptation kit.
-   engage key stakeholders and stewards of the guidelines:
	-   to ensure an accurate and comprehensive interpretation of the guidelines and other normative products. It is important to ensure that the authors of the source documents and/or the subject matter experts (SMEs) of a specific health area are actively engaged, if not leading, in the collaborative development of the DAKs;
	-   developing a DAK should be seen as a health programme/department-wide effort. Therefore, spreading the word, having informative presentations about SMART guidelines and DAK within the department, and involving key persons from relevant health areas could be of great help in the long term;
	-   collaboration with other health programmes should be considered as well, because there might be overlapping components, such as indicators or data items. For example: TB and HIV indicators and data items.
-   define the RASCI matrix.

3.  **Define the timeline of activities**
-   start drafting a list of work items (the **DAK backlog**). The initial DAK backlog can be composed of a few big-size work items (e.g. Review source documents), estimated as needing weeks or months in terms of effort, decomposed into smaller items that can be accomplished in a matter of days (e.g. Review guideline X, Review handbook Y, etc.). These items should provide awareness and visibility on the work to be performed in the upcoming 1-2 months but also help the team with the project roadmap drafting. During the lifetime of the project, the backlog should be maintained/refined (e.g. items are added/removed, prioritized, estimated) and considered the central source of work undertaken by the DAK development team;
-   **plan the iterations**: This step implies establishing the length of an iteration of work (commonly known as “sprint”). The iterations should have a fixed length (1 month or less), to ensure consistency. Each iteration needs its own planning. The planning of an iteration represents a meeting where the DAK development team gathers with the aim of answering to the question “What can be done for this iteration?”. The team uses as inputs:
	- the projected capacity of the team (e.g. number of working days);
	- the results of the latest iteration;
	- the past performance of the team;
	- the backlog with work items (the DAK backlog).

	The output of the iteration planning meeting is:
	- the list of work items for the next iteration (ideally detailed and estimated) pulled out from the DAK backlog (the backlog with all the work items identified and prioritized);
	- the iteration goal: the objective that creates coherence and focus, encouraging the team to work together during the iteration rather than on separate initiatives (e.g. “At the end of the iteration key business processes are identified and the overview diagram of key business processes is drafted”).

	Consider having a **retrospective** meeting at the end of each iteration. The retrospective meeting is an opportunity to openly discuss how the iteration went with regards to people, interactions, processes and tools. The DAK development team assesses what went well during the iteration, what problems have been encountered and how those problems were solved (or not). The goal of the event is to identify ways to increase the quality of the work and the effectiveness of the team. There are many fun and engaging retrospective formats, tailored to the goal of the session, for example, “team bonding” formats, “future plans” formats or formats that focus on checking team happiness.
-   draft the **project roadmap** with estimates for each phase and key milestone dates (see example below);
<img src="./L2_tb_dak_example_roadmap.PNG" style="width:60%; align:center"/>
<br clear="all"/>
-   **plan consultations** with the technical SMEs:
	-   define a meeting cadence for the consultations with the technical SMEs (Subject Matter Experts). The cadence of meetings can be influenced by the development process utilized, for example, if an agile methodology is used, with development performed in iterations, the cadence of meetings might be dictated by the iterations cadence;
	-   define a format for consultations that work with the SMEs:
		-   workshops (in-person or online);
		-   in-person country visits;
		-   any other.

4. **Gather source documents**
-   it is important to understand what needs to be incorporated into the DAK, this could include documents such as normative products (WHO guidelines and other associated publications), policy documents, paper registers, tally sheets, reporting tools, etc., to understand the full level of effort required for development, impacting timelines and resourcing.

### 2. Develop

### Development process
The frequency at which the normative content gets updated is increasing, based on the fast pace in which scientific evidence emerges. This is also influenced by an increased adoption of digital technologies. Therefore, a traditional and rigid project management methodology, like “waterfall”, wouldn’t be very effective in such a dynamic context.

The Agile methodology, as the name suggests, has flexibility and agility at its heart. It works best in a living organizational structure that can adapt according to the organisation’s strategy and its clients’ needs. Under the “Agile” umbrella we find multiple methods and frameworks but the most widely used is “[Scrum](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf)”[^4]:: a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.

Because of the complex set of dependencies between the DAK components, it is advised to develop the DAK using an iterative and incremental process, for instance a Scrum-based approach, that helps the authors adapt and improve the content and the process along the way. The work can be performed in time-boxed iterations (e.g. 1 week, 2 weeks or 1 month), called “sprints” in Scrum, representing cycles of (1) _Fill in DAK components, (2) Validate with SMEs,_ (3) _Incorporate feedback_ (described below)  accompanied by  iteration planning and retrospective activities.

<img src="./L2_Develop phase.PNG" style="width:60%; align:center"/>
<br clear="all"/>

#### 2.1 Fill in DAK components

Filling in the components should start with reviewing the L1, the narrative layer of the SMART guidelines, represented by the documentation already identified in the “Project planning phase”, step “Gather source documents”. The documents reviewed in an iteration could represent a subset of the entire documentation identified, aligned with the iteration goal (“sprint goal” in Scrum) or the full set of documents.

Once the documentation is reviewed, build the DAK by filling in the DAK template for each component, available at [this location](l2_templates.html). This will ensure a standardised documentation method for presenting the software requirements, which will allow for facilitated adaptation and comparison across geographies and health domains. Please review and follow the instructions from the templates that explain how to fill in the documents.

It is worth mentioning that is not mandatory to fill in content for all DAK components.  Components can be skipped if not relevant to the health area. In that case, it should be clearly stated in the text of the DAK that there is no content developed for the respective component, accompanied by a short text presentation of the reasons for skipping those components.

The first steps should be identifying the health interventions and recommendations (component 1), generic personas (component 2), user scenarios (component 3) and key business processes (component 4) specific to the health area. This content will be the baseline for developing the rest of the components as it helps clarify further the scope, identify the actors and define the client’s journey on receiving health care services pathway.

Dedicate enough time to assimilate the knowledge gathered so far and conceptualize the big picture.

The next step is to develop the workflow annotations (component 4), core set of data elements (component 5), decision-support logic (component 6), scheduling logic (component 7), indicators and performance metrics (component 8) and high-level functional and non-functional requirements (component 9) for each business process identified in the previous step.

 The approach outlined above is represented in the diagram below:

<img src="./L2_develop_DAK_components.png" style="width:60%; align:center"/>
<br clear="all"/>

Below you can find guidance for each step:
- 2.1.1 **Identify health interventions and recommendations** (component 1):  compile a list of health interventions and recommendations, based on narrative guidelines and guidance, that you wish to ‘translate’ into the DAK. This list should be based on existing WHO guidelines and other normative products, the [UHC list of essential interventions](https://www.who.int/universal-health-coverage/compendium/interventions-by-programme-area)[^1]: and [the list of digital health interventions](https://iris.who.int/handle/10665/373581)[^5]:;

- 2.1.2 **Identify generic personas** (component 2): create generic personas based on task-shifting guidelines and/or ground-truthing interviews with real end users in selected contexts and countries;
	
	Personas may be identified/detailed in the following ways:
	- through L1 normative guidance which refers to specific personas;
	- through consultations with SMEs which help identify personas participating in certain workflows;
	- through in-person interviews at facilities.

	The personas providing care, described in the DAK, might be practising activities in public, private or both types of health facilities/clinics.

- 2.1.3 **Identify user scenarios** (component 3): create high-level narratives based on a compilation of the actual context the majority number of end users would be operating in;

	- illustrate user scenarios in the DAK that describe typical interactions that one would expect to happen in the specific health programme area (e.g., screening, diagnosis, treatment, reporting, etc.); 
	- in some cases, it could be helpful to include scenarios which are intricate in terms of normative guidance, so that the reader better understands how the system will be used in those settings.

- 2.1.4 **Identify key business processes** - based on content in the narrative documents (SMART guidelines L1), domain expertise, and real-life observations in selected contexts and countries create the diagram reflecting the overview of key business processes for the health area. The diagram should follow the [BPMN standard](https://www.bpmn.org/)[^3]:;

- 2.1.5 **For each business process:**

	- 2.1.5.1 **Draft generic business process workflow**: create a diagram that depicts every key business process. Important aspects to consider:
		- the business processes should not contain activities that are too specific and that don’t hold across various settings;
		- the generic business process workflows should capture 80% of the scenario leaving out 20% for adaptations. The level of detail should be tied to the necessity of detail in the L1 recommendations. If the level of detail included in the workflow becomes applicable in one context but not relevant in another – then probably simplification of the workflow and generalizing the workflow is needed;
		-   you might illustrate and describe the “Counselling” and “Obtain informed consent” activities:
			-   as part of specific workflow(s);
			-   as independent workflows;
			-   consider that those actions occur throughout the entire healthcare process and there is no exact place in the workflows where they should be described.

			Reflect on this and choose what best fits your DAK.

		- getting consensus on workflows can get challenging and some tips here might help:
			- For global DAKs, the workflow should be high-level enough to stay valid across country contexts and allow for contextualization. Do not include low-level details where the processes might not necessarily stay true across countries or country contexts;
			- However, for country-level DAKs, these should be specific to the context;
			- if the guidelines are not recently updated and the technical team has ideas that are forward-looking for the system, go for the future state of the systems along with sign-off on the same with technical teams.

		- the specific diagram for each business process should follow the [BPMN standard](https://www.bpmn.org/)[^3]:.

	- 2.1.5.2 **Define the core data elements** - based on data elements needed for service delivery and indicator reporting, which are described in the WHO guidelines and other normative products; domain expertise; and real data needs in selected contexts and countries;
		- only data that need to be stored for reporting, auditing, decision-support logic, aggregation and exchange should be captured in the data dictionary. Any data element that is needed for secondary calculation that does not have an explicit need to store, report, audit, use in decision-support or scheduling logic, aggregate or exchange should not be captured in the data dictionary (e.g. data elements that are needed for the user interface [UI] of the reference application to be more user-friendly should not be captured).

	- 2.1.5.3 **Develop the decision-support logic** - based on logic embedded and described in WHO guidelines and other normative products;
		- the decision-support logic tables should follow the normative contents of the [DMN standard](https://www.omg.org/spec/DMN/1.4/Beta1/PDF);
		- avoid having decision-support tables that rely on 10+ inputs. Such tables are difficult to read, maintain and implement therefore try to split them into separate decision-support tables.

	- 2.1.5.4 **Develop the scheduling logic (if any)** - based on the scheduling logic embedded and described in the WHO guidelines and other normative products;
		- the scheduling logic should follow the normative contents of the [DMN standard](https://www.omg.org/spec/DMN/1.4/Beta1/PDF)[^6]:.

	- 2.1.5.5 **List the indicators**  **and performance metrics** – capture the reporting requirements based on WHO guidelines and other normative products;
		- the focus should be on the indicators that can be derived from the data collected and available at the primary health care level. This is in line with the principle "collect once, use many times” and highlights the importance of reducing the reporting burden for the health workers, allowing them to focus instead on providing care. For higher-level reporting needs, such as national and global aggregated indicators, the authors should refer to the [WHO indicators](https://data.who.int/indicators)[^7]:.

	- 2.1.5.6 **Define the high-level functional and non-functional requirements** – capture the system requirements based on WHO guidelines and other normative products and actual needs from real people in selected contexts and countries.
		- functional and non-functional requirements identification should start with what is required from the L1 recommendations in terms of the health and data content, decision-support logic and scheduling logic;
		- however, it is recommended to also work with implementers to understand best practice requirements in terms of user-friendliness and cybersecurity.

- 2.1.6 **Streamline the content** – review the DAK to check if there is room for improvement of components, or if there is an easier way to represent certain concepts:
	- review the generic personas:
		- do the generic personas identified connect with the personas identified in other components of the DAK, for example, in the generic business processes and workflows, in high-level functional requirements?
		- is the same persona named differently in different components (e.g. "Health Worker" and "Health Care Worker")?
	- review the user scenarios:
		- do the narratives of the user scenarios align with the sequence of activities depicted in the business processes and workflows’ annotations?
		- are all the data elements, decision-support logic, scheduling logic and high-level functional and non-functional requirements identified in the user scenarios captured in the corresponding template?
	- review the generic business processes and workflows:
		- check if some activities are repeating. Could we group those activities and create a sub-process or a new business process referenced from the main flow?
	- review the data dictionary:
		- are there duplicate data elements?
		- check if all the data elements of type "Boolean" are necessary. Could we group "Booleans" as "List" data elements?
	- review the decision-support logic tables and the scheduling logic tables to see if the rules could be refactored or condensed;
	- review the indicators and performance metrics: are all the data elements necessary for calculation of indicators captured and described in the data dictionary?
	- review the high-level functional and non-functional requirements: are all the functional requirements linked to the correct persona and business process activity?

#### 2.1 Validate DAK content with SMEs
As soon as a DAK component is drafted, it should be first reviewed and validated by the health area technical officer(s) that coordinate(s) the work on the DAK. They should be part of the DAK development team and not seen as external stakeholders that only perform high-level reviews.

Some items to review at this stage:

-   do the DAK components accurately reflect the L1 recommendations?
-   are there any gaps or key changes to make?
-   if some concepts could be approached in multiple ways – define the alternatives and review the pros and cons.
-   are the components defined as software neutral and do not assume any specific software or device?

The DAK components should be developed to the extent possible before meeting the larger group of SMEs for consultations. This ensures more efficient use of SMEs’ time during the consultations and helps draft a detailed, specific list of questions to review during the sessions. 

As with many documents, the DAKs will need to go through a series of high-level reviews and be curated iteratively to ensure the buy-in of all key stakeholders and accuracy in the development of each DAK component. Once the DAK is drafted, consult the SMEs and key stakeholders for a review of the clinical content for each component of the DAK. The purpose is to gather feedback, clarify doubts and refine the DAK content.

Prepare upfront the meetings with SMEs:
- create an agenda for the consultation meeting;
- create a list of questions to discuss with the SMEs;
- create visual aids to go through the meeting.

During the consultations, keep the focus strictly on the clinical recommendations from the L1 guidance and consider the primary health care level as the main context for the use cases.

At this time ground-truthing exercises should be conducted as well with the technical SMEs from the health programme area. Oftentimes it is hard to create useful documents at the global or national level due to the nature of being far from the actual work happening on the ground. Consultations with in-the-country partners are encouraged, which will help validate DAK components, such as the generic personas (component 2), user scenarios (component 3), generic business processes and workflows (component 4), and high-level functional and non-functional requirements (component 9).

#### 2.3 Incorporate feedback

Take time and reflect on the input received from the SMEs: analyse the feedback, identify patterns and areas of improvement. Incorporate the feedback received from the SMEs, share the updated content with them and request confirmation for the accurate reflection of their suggestions. Establishing efficient, ongoing feedback loops increases the SMEs engagement, ensures their buy-in and provides the validation mechanism that the DAKs need.

Start a new cycle of (1) _Fill in DAK components, (2) Validate with SMEs,_ (3) _Incorporate feedback_.

**References**

[^1]: [The universal health coverage menu of interventions](https://www.who.int/universal-health-coverage/compendium/interventions-by-programme-area).
[^2]: [Barton C, Kallem C, Van Dyke P, Mon D, Richesson R. Demonstrating “collect once, use many” – assimilating public health secondary data use requirements into an existing Domain Analysis Model. AMIA Annu Symp Proc. 2011;2011:98–107.] (https://pubmed.ncbi.nlm.nih.gov/22195060/).
[^3]: [Business process model and notation standard](https://www.bpmn.org/).
[^4]: [The SCRUM Guide](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf).
[^5]: [Classification of digital interventions, services and applications in health: a shared language to describe the uses of digital technology for health, 2nd ed.](https://iris.who.int/handle/10665/373581).
[^6]: [Decision model and notation standard](https://www.omg.org/spec/DMN/1.4/Beta1/PDF).
[^7]: [WHO Datadot](https://data.who.int/indicators).