# On L4 Compliance

The current understanding is that in order for a digital health application/system to be considered **‘L4’**, it should be **L2 and L3 compliant**. L4 compliance is designed to ensure that digital health applications align with WHO guidelines while balancing innovation and practicality. By complying with L2 and L3, L4 applications and software are able to integrate more seamlessly with evolving WHO standards and guidelines.  

WHO adopts a **flexible compliance approach**, providing standards for L2 and L3 while enabling **self-attestation** without formal prequalification or certification for software systems to be **‘L4 compliant.’**  

## Advantages and Benefits of Complying with L3 for L4 Software

- **Efficiency and Adaptability:** L3-compliant L4 applications can dynamically leverage and reuse existing L3 packages (e.g., ANC, Immunization), reducing development time and effort when WHO updates L1 normative guidelines.  
- **Guideline Fidelity:** L3 compliance enhances adherence to WHO guidelines by enabling the use of pre-developed, quality-assured code.  
- **Interoperability:** L3 compliance supports seamless integration across digital health systems, improving interoperability.  

## Practical Realities and Legacy Systems

Many digital health systems are built on **legacy software** using traditional development approaches, where L2 serves as a **Product Requirement Document (PRD)** to guide system development, but such software may be unable to ingest L3 (e.g., FHIR-based implementations).  
While these systems may lack the flexibility and extensibility of L3-compliant applications, they remain **widely deployed and operational** in various settings.  

## WHO’s Compliance Approach

WHO provides **L2 and L3 Standard Operating Procedures (SOPs)** and requires the **L4 community to self-attest** their compliance with L2 and/or L3. However, WHO does not conduct **prequalification or certification** of software/digital health tools. L3 compliance can be assessed through **sandbox and test environments**, with **structured test plans** currently under development.  

---

## Annex 1: What is L1, L2, L3, and L4?

### What are SMART Guidelines?

**SMART Guidelines** — **Standards-based, Machine-readable, Adaptive, Requirements-based, and Testable** — are a comprehensive set of reusable digital health components. These include **interoperability standards, code libraries, algorithms, and technical and operational specifications**.  

### Five Levels of SMART Guidelines

#### **L1: Narrative Guidelines**

**Definition:** WHO guidelines are recommendations intended to inform decisions made by policymakers, program managers, healthcare providers, recipients, and other stakeholders. These include recommendations for **clinical interventions, public health activities, or government policies**.  

WHO's SMART Guidelines **L1 Narrative Guidelines layer** also includes other **normative publications, guidance documents, and products** beyond traditional guidelines.  

**Key Outputs:** Published narrative guidelines and recommendations.  

**How it is used by digital health tools:**  
L1 serves as the foundational reference for **public health practitioners and policymakers**, informing the design and implementation of digital health tools to ensure **evidence-based decision-making**.  

#### **L2: Operational Guidelines**

**Definition:** Human-readable, software-neutral documentation that systematically translates **clinical and public health guidelines** into **structured requirements** for digital health systems.  

**Key Output:** **Digital Adaptation Kit (DAK)** – a structured business requirements document containing **nine interlinked components** described in the L2 SOP.  

**How it is used by digital health tools:**  
L2 provides **structured implementation guidance** (Product Requirement Document) to software developers and system designers, enabling them to configure digital health applications leveraging WHO recommendations. It acts as a **software-agnostic bridge** between health policies and digital implementation/tools.  

#### **L3: Machine-Readable Recommendations**

**Definition:** A **structured, software-neutral representation** of L2 content, including **code, classifications, terminologies, and interoperability standards** in a **computable format**.  

**Key Outputs:** **FHIR Implementation Guide (FHIR IG)** – structured according to WHO’s SMART Guidelines machine-readable recommendations template.  

**How it is used by digital health tools:**  
L3 provides **computable logic and structured specifications** that digital health systems use to **automate processes**. It defines **system actors, transactions, computable data dictionaries, and indicators**, enabling **interoperability** and seamless guideline updates within software applications.  

#### **L4: Reference Software**

**Alternative Definition:** Software applications capable of **retrieving and executing algorithms** based on **interoperable digital components**, implementing **operational and functional requirements** outlined in **L2 (DAK) and/or L3 (Machine-readable recommendations)**.  

**Key Outputs:** Software modules for **clinical decision support, executable algorithms, and digital components**.  

**How it is used by digital health tools:**  
L4 enables **data collection, processing, and exchange** between different systems. It ensures **interoperability with other SMART Guidelines-compliant tools**, enhancing the ability to **integrate and scale** digital health solutions effectively.  
