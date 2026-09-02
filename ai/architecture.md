# Architecture

Two diagrams. The first is the layer stack — what the package is. The second is one artifact
travelling through it end to end — what the package does.

Both are Mermaid, so they render on GitHub and read as text to an agent. Colour follows the
convention in [`diagram_legend.md`](../input/pagecontent/diagram_legend.md): application layer
versus technology layer, things that act versus things acted on, plus one ramp for the control
plane, which is neither.

---

## The stack

```mermaid
flowchart TB

 subgraph CTRL["Controls · cross-cutting"]
  direction LR
  GATE["<b>Gates</b><br/>hard to undo, confirm"]
  DELG["<b>Delegation</b><br/>route to the owner"]
  AUDT["<b>Audit</b><br/>hash-pinned verdicts"]
 end

 subgraph EXP["Experts · who acts"]
  direction LR
  E1["<b>L2 DAK expert</b><br/>author and validate"]
  E2["<b>L3 IG expert</b><br/>author and validate"]
  E3["<b>Commons steward</b><br/>govern and validate"]
 end

 subgraph SKL["Skills · one SKILL.md per artifact type"]
  direction LR
  SK2["<code>skills/l2</code><br/>9 DAK components"]
  SK3["<code>skills/l3</code><br/>FHIR artifact types"]
  SKC["<code>skills/commons</code><br/>govern and release"]
 end

 subgraph CON["Contracts · what goes in, what must come out"]
  direction LR
  CIN["<b>input.schema.json</b><br/>from DAK templates"]
  COUT["<b>output.schema.json</b><br/>from plantuml models"]
  CDOD["<b>requirements</b><br/>DoD as FHIR SHALLs"]
 end

 subgraph SPN["Spine · declared here, implemented by the runtime"]
  direction LR
  P1["extract"] --> P2["generate"] --> P3["sushi"] --> P4["publisher"] --> P5["check"]
 end

 subgraph SUB["Substrate · referenced, never forked"]
  direction LR
  U1[("<b>DAK repo</b><br/>bpmn, xlsx, dmn")]
  U2["<b>SOP pages</b><br/>51 procedures"]
  U3["<b>ArchiMate</b><br/>36 processes"]
  U4[("<b>smart-base</b><br/>FHIR profiles")]
  U5[("<b>WHO Commons</b><br/>concept glossary")]
 end

 EXP --> SKL --> CON --> SPN --> SUB
 CTRL -.governs.-> EXP
 CTRL -.governs.-> SPN

 classDef act  fill:#EEEDFE,stroke:#534AB7,stroke-width:1px,color:#26215C
 classDef art  fill:#E1F5EE,stroke:#0F6E56,stroke-width:1px,color:#04342C
 classDef ctl  fill:#FAECE7,stroke:#993C1D,stroke-width:1px,color:#4A1B0C
 class E1,E2,E3,SK2,SK3,SKC,P1,P2,P3,P4,P5 act
 class CIN,COUT,CDOD,U1,U2,U3,U4,U5 art
 class GATE,DELG,AUDT ctl
```

Read bottom-up and each layer exists to make the one above it possible.

| Layer | Question it answers | Note |
|---|---|---|
| **Controls** | What was decided, by whom, on what evidence? | Not a stage. A property of every action. |
| **Experts** | Who may do this, with what tools? | A bundle of skills plus a role. Scopes which skills load and which gates apply. |
| **Skills** | Who may author this, and under what contract? | One `SKILL.md` per artifact type, pointing at the SOP that holds the procedure. |
| **Contracts** | Did it produce the right shape? | The only thing a validator and an LLM both consume without interpretation. |
| **Spine** | Is this reproducible? | Declared, not shipped. See [`spine/INTERFACE.md`](spine/INTERFACE.md). |
| **Substrate** | What already exists? | Referenced, never forked. |

The substrate is the reason the package is small. The procedures, the formal model, the templates
and the conformance profiles all exist already; what was missing was anything binding them
together.

---

## One artifact end to end

The BPMN vertical — the shortest complete path that exercises every layer, and the reference
implementation for every other skill.

```mermaid
flowchart TD

 N1[("<b>L2 BPMN</b><br/>authored and validated")]
 N2{{"<b>L2 to L3 gate</b><br/>reviewer confirms"}}
 N3["<b>generate and compile</b><br/>FSH, sushi, publisher"]
 N4["<b>validate output</b><br/>shape and conformance"]
 N5{{"<b>fidelity ruling</b><br/>human, never auto-passed"}}
 N6[("<b>PlanDefinition</b><br/>plus .qa.json sidecar")]
 FLAG[/"<b>flag to owner</b><br/>L2 authors or WG"/]

 N1 --> N2 --> N3 --> N4 --> N5 --> N6
 N4 -.unresolved.-> FLAG

 classDef act  fill:#EEEDFE,stroke:#534AB7,stroke-width:1px,color:#26215C
 classDef art  fill:#E1F5EE,stroke:#0F6E56,stroke-width:1px,color:#04342C
 classDef ctl  fill:#FAECE7,stroke:#993C1D,stroke-width:1px,color:#4A1B0C
 class N3,N4 act
 class N1,N6 art
 class N2,N5,FLAG ctl
```

Two things are worth reading off this.

**Only two nodes stop the flow** — the gate and the fidelity ruling. Everything between them runs
freely. A gate on a cheap, reversible action is friction that teaches people to click through
gates, which costs more than it buys.

**The flag is the only sideways arrow.** A question the DAK does not settle leaves the pipeline
rather than blocking it. That is what makes the throughput claim survive contact with real DAKs:
review effort tracks the number of decisions, not the number of artifacts.

### The skills in this vertical

| Skill | Determinism | SOP source |
|---|---|---|
| [`l2/author-business-processes`](skills/l2/author-business-processes/SKILL.md) | judgment | `l2_dak_authoring.md` §2.1.4 |
| [`l2/validate-business-processes`](skills/l2/validate-business-processes/SKILL.md) | deterministic | `l2_dak_authoring.md` |
| [`l3/author-processes`](skills/l3/author-processes/SKILL.md) | judgment | `l3_processes.md` |
| [`l3/validate-processes`](skills/l3/validate-processes/SKILL.md) | deterministic | `l3_processes.md` DoD |

### What this vertical surfaces immediately

Running it against a published DAK makes three convention problems visible that hand-authoring
absorbs silently: a dotted DAK identifier used as a logical model id makes the dot a path separator
and the publisher rejects it; `^mapping.map` without a matching identity costs minutes in the
build; and a model using `^code` scores zero against a checker expecting `^mapping`, and vice
versa.

SUSHI reports clean on all three. They appear only in the IG Publisher, which is why
`validate-ig-build` is not optional and why the traceability convention is the first open decision
in the package.
