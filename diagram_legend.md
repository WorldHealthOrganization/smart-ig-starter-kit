# ArchiMate Diagrams Legend - SMART Guidelines Starter Kit v2.1.0

* [**Table of Contents**](toc.md)
* [**L3 Authoring Overview**](authoring_overview.md)
* **ArchiMate Diagrams Legend**

## ArchiMate Diagrams Legend

This specification utilizes a subset of ArchiMate notation to visually represent and structure the authoring processes. This distinguishes between the functional description (application layer) and the physical artifacts (technology layer).

This specification uses:

1. ArchiMate's layering concept, distinguishing between application and technology layers.
1. ArchiMate relations, namely aggregation, composition, and the labeled "related to" relationship.
1. Representation of starting artifacts as technology artifacts (e.g., files or data objects).
1. Display of processes within the application layer, illustrating how functional processes transform L2 inputs into L3 outputs.

### ArchiMate Notation Overview

#### Layers

* **Application Layer**: Offers a functional description, typically illustrating processes, functions, and services. This is represented by blue elements.
* **Technology Layer**: Represents actual artifacts, like files, resource instances, or other data objects. This is represented by green elements.

#### Relations

The relations are represented by arrows

* **Aggregation**: Illustrates that an object groups several other objects.
* **Composition**: Indicates that an object is composed of one or more other objects, implying a stronger, "whole-part" relationship compared to aggregation.
* **Access (Read/Write)**: Indicates that a process has an artifact as input, or as output.
* **Related To**: A generic relationship with a label specifying the nature of the connection.
* **Flows to**: A relationship where an activity (process) is followed by another activity

#### Example Diagram

The diagram below represents the process for creating an indicator:

* The input artifact is an L2 definition of an indicator (in a spreadsheet)
* The main process is to create an L3 Measure artifact
* To define the Measure, there's a subprocess where the L3 author adds population and stratifiers, by consulting the cqf-measures-guidance.
* The next step (as part of the Create Measure process) is then to create CQL definitions
* Following that, the L3 author encodes CQL into libraries.
* The output of this is the L3 library that is referenced by the Measure resource

![](./l3_process_indicator.png) 

### Artifact Authoring Processes

The diagrams capture the essence of transforming an L2 input into the corresponding L3 artifacts through processes. These processes can use different tooling or technologies; however the criteria for output and for process are defined.

### Data Object Details with PlantUML

To describe the content L3 authors are supposed to produce, the key content of the output artifacts is modeled with PlantUML diagrams. This diagram summarizes the data that is part of an object definition. For example, the diagram below shows that for a ValueSet, the L3 author is required to have a status, a name, an identifier and a URL.

