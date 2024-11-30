**Standard Operating Procedure (SOP) for developing business requirements documentation in the format of WHO SMART guidelines digital adaptation kits (DAK)**

### Abbreviations

 **Abbreviation** | **Abbreviated term** 
--|--
ANC|antenatal care
BPMN|Business Process Model and Notation
DAK|digital adaptation kit
DHI|digital health and innovations
DMN|Decision Model Notation
HMIS|health management information systems
PCPOSS|person-centred point of service system
SMART |standards-based, machine-readable, adaptive, requirements-based and testable
SME|subject matter expert
SOP|standard operating procedure
TB|tuberculosis
TPT|tuberculosis preventive treatment
UHC|universal health coverage

### Objective of this SOP
The standard operating procedure (SOP) for developing business requirements documentation in the format of WHO SMART guidelines digital adaptation kits (DAK) is intended to guide the WHO SMART Guidelines community who are creating a DAK (e.g., consultants, business analysts, contracted vendors). Authoring a DAK can initially feel overwhelming due to the complexity and the number of components it requires, especially for the first-time authors. This SOP aims to simplify the process by establishing a standardized framework.  Countries and/or organisations intending to develop a DAK should first check if a WHO DAK exists for the health area of interest. If a WHO DAK exists, its content should be adapted to the local needs. In cases where a WHO DAK does not exist, this DAK SOP can be used as a standardized method and tool for countries to develop their own DAK based on local guidelines, policies and requirements.

### What is a DAK?
WHO SMART Guidelines Digital adaptation kits or “DAKs” are operational, software-neutral, standardized documentation that distil clinical, public health and data use guidance into a format that can be transparently incorporated into digital systems. Information detailed in the DAKs reflect generic workflow processes, data and decision-support algorithms, as derived from specific health interventions and WHO guidelines and other normative products as well as associated publications for specific health areas, including WHO normative guidance, WHO normative products, WHO guidance and their normative statements.

For example, among the documents reviewed for TB DAK we have “[_WHO consolidated guidelines on tuberculosis – Module 1: prevention (tuberculosis preventive treatment)_](https://iris.who.int/handle/10665/331170)_”[^1], “_[_WHO consolidated guidelines on tuberculosis – Module 2: screening (systematic screening for tuberculosis disease)_](https://iris.who.int/handle/10665/340255)_”_[^2] but also the corresponding operational handbooks _“_[_WHO operational handbook on tuberculosis – Module 1: prevention (tuberculosis preventive treatment)_](https://iris.who.int/handle/10665/331525)_”_[^3] and _“_[_WHO operational handbook on tuberculosis – Module 2: screening (systematic screening for tuberculosis disease)_](https://iris.who.int/handle/10665/340256)_”_[^4] as well as the associated publication _“_[_Framework for collaborative action on tuberculosis and comorbidities_](https://iris.who.int/handle/10665/361989)_”_[^5].

The outputs of the DAKs published by WHO are intentionally generic, as per WHO guidelines and other normative products as well as associated publications for specific health areas, and need to be contextualized to local policies and requirements.

DAKs are only one type of output and artefact within the SMART Guidelines framework. See here for additional details: [SMART Guidelines](https://smart.who.int/)[^6].

### Why is a DAK needed?
Evidence-based recommendations, such as those featured in WHO guidelines and other normative products, are often only available in a narrative format. Trying to adopt these recommendations in a digital system often results in:

-   a resource-intensive process to elaborate the normative statements into specifications needed for digital systems;
-   subjective interpretation by technology partners, which can lead to inaccuracies and inconsistencies;
-   inability to verify clinical content within these systems, potentially leading to adverse health outcomes and other unintended effects.

A DAK outlines the content contained in WHO guidelines and other normative products and publications into a business requirements document to:

-   provide a common language and understanding across various audiences, in particular between health programme managers and technology partners, enabling key stakeholders to have a joint understanding of the health content within the digital system, with a transparent mechanism to review the validity and accuracy of the health content;
-   support adherence to evidence-based recommendations with fidelity and facilitate consistent applications and implementation of those recommendations in point-of-service services and applications;
-   provide a starting point for the business requirements gathering process to accelerate the development of a [person-centred point of service system (PCPOSS)](https://iris.who.int/handle/10665/379452)[^7], reducing the time and resources needed;
-   provide a benchmark of minimum requirements in a software service or application for the specified scope, enabling stronger governance of digital health interventions in countries.

### Target audience for the DAK?

The primary target audience for a DAK includes:

-   Health programme managers, so they can:

	-   understand and outline what content should be in a digital person-centred point of service system (PCPOSS)
	-   create roadmaps and plan activities needed for the implementation of the clinical practices and policies for the health programme area;
	-   estimate costs based on what functions and features need to be in a digital health service and application;
	-   oversee and monitor the implementation of the clinical practices and policies for the health programme area via embedded decision support systems used at the point of service.

-   Digital health team (business analysts, software architects, software developers, quality assurance specialists, software vendors, etc.), so they can:

	-   understand health programme requirements;
	-   systematically document health programme requirements and processes in a standards-compliant way to support development of PCPOSS;
	-   estimate the level of effort for developing a PCPOSS;
	-   implement the requirements outlined in a DAK in machine-readable, computable format (i.e., L3: Machine readable guidelines).

 The DAK content therefore should keep these audiences in mind and ensure that all DAK components offer:

-   easily readable content for people with varying backgrounds and technical knowledge and skills;
-   clarity in outputs expected, including thoughts/annotations for times when there could be confusion or ambiguity;
- 	annotations for implementers that can help with the interpretation of guidance wherever applicable.

### Uses of the DAK
The DAK may be used across various scenarios, some of which are listed below.

**Scenario 1: Incorporating WHO guideline content into existing digital systems**

Countries that already have digital systems in place, such as electronic medical records (EMRs), decision-support tools and/or surveillance tools, may use the information in the DAK to cross-check whether the underlying content and data for specific health programme areas are aligned with WHO recommendations. Users of the DAK can identify and extract specific decision support algorithms that would need to be incorporated into their existing digital systems. By reviewing this systematic documentation, health programme managers and implementers can more readily identify differences in workflows, data inputs and decision-support logics to examine the rationale for deviations and understanding local adaptions of global guidelines.

**Scenario 2: Transitioning from paper to digital**

Some countries may currently have paper-based systems that they would like to digitize. The process of optimizing paper-based client-level systems into digital records with decision support may be overwhelming. Users in this scenario may review the DAK as a starting point for streamlining the necessary data elements and decision support that should be in the optimized client-level digital system. Users may also then refer to the paper-based tools to determine whether there are missing fields or content that should also be included within the digital system.

Additionally, users should also review the WHO [Digital transformation handbook for primary health care](https://iris.who.int/handle/10665/379452)[^7], which provides stepwise guidance on how to map data on paper-based forms into a digital system, including ways of accounting for data elements that are redundant or may not add value to the health system.

**Scenario 3: Linking aggregate health management information systems (HMIS) to PCPOSS used at point of care**

In some instances, countries may already have a digital system for aggregate reporting and HMIS but may not have yet implemented digital systems that function at the service-delivery level. The DAK can guide the development of a PCPOSS that includes an electronic medical (or health) record system, a community-based information system, decision-support system and personal health records that operates at the point of service, or point of care, and ensures that there are linkages between the data collected at the service-delivery levels (e.g. community or facility level) and at the aggregate levels.

As such, a component of the DAK provides aggregate indicators derived from individual-level data to provide the linkage between these different levels (e.g. service delivery at community or facility level and aggregate reporting at district and national level). Complementary guidance dedicated specifically to aggregate-level data, should also be consulted for supporting the use of routine data at the facility management and district levels.

**Scenario 4: Leveraging data standards to promote interoperability and integrated systems**

The DAK can include data elements mapped to different code systems, such as International Classification of Diseases 11th Revision (ICD-11) codes, International Classification of Diseases 10th Revision (ICD-10) codes, Logical Observation Identifiers Names and Codes  (LOINC), International Classification of Health Interventions (ICHI), International Classification of Functioning, Disability and Health (ICF), and Systematized Nomenclature of Medicine (SNOMED) codes, to support the design of interoperable systems. Therefore, the data dictionary can provide the necessary codes for different data elements, thus reducing the time for implementers to incorporate these global standards into the design of their digital systems. For guidance on developing the third layer of the SMART guidelines and its role in designing interoperable systems, please follow the [**L3 SOP**](authoring_overview.html).

**Scenario 5: Linking point-of-service systems used at the point of care by health workers to personal health records systems held by individuals**

A critical part of service delivery in any health domain relies on engaging with clients. [Digital interventions](https://iris.who.int/handle/10665/373581)[^8] aimed at clients themselves – such as on-demand information services, targeted client communication (e.g. transmitting health information and reminders), reporting of health-system feedback by clients on the quality of care, accessing their own medical records/home-based records, and self-monitoring of their health and diagnostic data – are all emerging approaches for complementing the services provided by health workers.

**Scenario 6: Updating paper registers**

Countries not yet ready to move to digital systems can use the DAK content to update existing paper registers and decision-support tools by simplifying them, reducing data collection and updating paper-based tools to align with the latest evidence-based guidelines and WHO recommendations. Thus, non-digital processes can also be supported by the DAK.

**Scenario 7: Establishing benchmark requirements to facilitate governance of digital health systems**

The DAK allows for countries to clearly outline software-agnostic baseline expectations and requirements for a digital service and application for a particular use case. The templated format allows for countries to establish their own standards for any digital service and application that is to be implemented in country. The DAK provides a shared language to allow for alignment across all the relevant stakeholders, regardless of which software system is used.

**References**

[^1]: [WHO consolidated guidelines on tuberculosis – Module 1: prevention (tuberculosis preventive treatment). Geneva: World Health Organization; 2020](https://iris.who.int/handle/10665/331170).
[^2]: [WHO consolidated guidelines on tuberculosis – Module 2: screening (systematic screening for tuberculosis disease). Geneva: World Health Organization; 2021](https://iris.who.int/handle/10665/340255).
[^3]: [WHO operational handbook on tuberculosis – Module 1: prevention (tuberculosis preventive treatment). Geneva: World Health Organization; 2020](https://iris.who.int/handle/10665/331525).
[^4]: [WHO operational handbook on tuberculosis – Module 2: screening (systematic screening for tuberculosis disease). Geneva: World Health Organization; 2021](https://iris.who.int/handle/10665/340256).
[^5]: [Framework for collaborative action on tuberculosis and comorbidities. Geneva: World Health Organization; 2022](https://iris.who.int/handle/10665/361989).
[^6]: [SMART Guidelines Publications](https://smart.who.int).
[^7]: [Digital transformation handbook for primary health care: optimizing person-centred point of service systems. Geneva: World Health Organization;2024]( https://iris.who.int/handle/10665/379452).
[^8]: [Classification of digital interventions, services and applications in health: a shared language to describe the uses of digital technology for health, 2nd ed.](https://iris.who.int/handle/10665/373581).

