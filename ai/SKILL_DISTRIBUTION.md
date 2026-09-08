# Where a skill lives

Two repositories hold skills, and the line between them is not "authoring versus validation". It is
**what the procedure is answerable to**.

| | [`smart-ig-starter-kit`](https://github.com/WorldHealthOrganization/smart-ig-starter-kit) `ai/skills` | [`smart-skills`](https://github.com/WorldHealthOrganization/smart-skills) `skills` |
|---|---|---|
| A skill here is answerable to | **a WHO SOP page** | **an external normative specification** |
| Frontmatter names it in | `sop:` | `specification:` |
| Changing the procedure means | editing published WHO guidance, through its review process | tracking a new version of somebody else's spec |
| Knows what a DAK is | yes | no |
| Reusable outside SMART Guidelines | no | yes |

Everything follows from that one distinction, including the cases that look like exceptions.

---

## The criterion

**Ask what you would have to change to change the skill's answer.**

If the answer is *a WHO procedure* — the definition of done in `l2_dak_authoring.md`, the
identifier grammar in `authoring_conventions.md`, which lane labels count as a persona — the skill
belongs in the starter kit. Its `sop:` field names the page holding its procedure, and that page
stays the single source of truth.

If the answer is *a specification WHO does not own* — OMG BPMN 2.0, OMG DMN 1.3, the HL7 FHIR R4
validator, JSON Schema 2020-12 — the skill belongs in `smart-skills`. There is no SOP page to name,
and inventing one would put WHO's review process in front of a conformance rule WHO does not
control.

The starter kit's own package validator already enforces half of this without being asked:
`validate-package.mjs` fails any skill whose `sop:` path does not exist. **A skill with no honest
SOP page to name is the structural tell that it belongs in `smart-skills`.**

### Why not "authoring here, validation there"

Because it splits skills that share a procedure. [`l2/validate-business-processes`](skills/l2/validate-business-processes/SKILL.md)
checks that every BPMN lane label matches a declared generic persona and that every activity
identifier referenced by another DAK component resolves. Neither rule is in the BPMN specification.
Both are in `l2_dak_authoring.md`, the same page the authoring skill reads. Moving that skill out
would separate a definition of done from the procedure it is the definition of done *for*.

What genuinely moves is narrower: whether the file is well-formed BPMN 2.0 at all. That rule is
OMG's, it is identical for a DAK and for a supply-chain diagram, and it is the first check the
validation skill runs.

So the two skills do not split. **One check inside one of them delegates.**

---

## Placement

### Stays in the starter kit — 32 skills, unchanged

All nine `l2/author-*` skills, all nineteen `l3/author-*` skills, both `commons/govern-*` skills,
and both existing validators. Every one names a real SOP page today.

This is the memory's "SOP, BPMN and DMN authoring skills belong in the starter kit", and it needs no
migration: they are already here and already correct.

### Moves to `smart-skills` — five specification-bound skills

None of these exists in the starter kit today. Three are extracted from checks currently written
inline inside starter-kit skills; two are new and were already named as necessary elsewhere in this
package.

| `smart-skills` skill | Answerable to | Today it is |
|---|---|---|
| `bpmn/validate-spec` | OMG BPMN 2.0 | the *well-formedness* paragraph of `l2/validate-business-processes` |
| `dmn/validate-spec` | OMG DMN 1.3 | unwritten — `l2/author-decision-logic` is a placeholder |
| `fhir/validate-resource` | HL7 FHIR R4 + the profiles an IG declares | implicit in `l3/validate-processes` |
| `fhir/validate-ig-build` | HL7 IG Publisher `qa.json` | named as *not optional* in [`METHODOLOGY.md`](METHODOLOGY.md) and [`architecture.md`](architecture.md), and never written |
| `kg/validate-dak-graph` | an ontology supplied as data | new — tier 2 for the graph schema in `smart-kg` |

The last one is worth a sentence, because it looks WHO-specific and is not. It checks that a graph
document's node types are classes some ontology declares and that its edges are triples that
ontology licenses. The ontology is an input. Point it at a different ArchiMate model and it checks
that model instead — which is why inlining the licensed triples into a JSON Schema would have been
the wrong move. Its reference implementation ships in
[`smart-kg`](https://github.com/WorldHealthOrganization/smart-kg), where the ontology it reads
lives; this repository holds neither.

---

## Delegation

A starter-kit skill names an external check in `delegatesTo`:

```yaml
delegatesTo:
  - { provider: smart-skills, skill: bpmn/validate-spec, degradation: warn }
```

`provider` resolves against [`registry/providers/`](registry/providers/), which pins the
repository, the contract version and the skill ids that repository offers.
`validate-package.mjs` fails a reference to a provider or a skill id it does not list, so a
delegation cannot rot into a dead pointer — the failure mode this whole package exists to prevent.

`degradation` is the same vocabulary as `requiredCapabilities`, and means the same thing:

| | |
|---|---|
| `fail` | Stop. The delegating check cannot be performed without it and must not be approximated. |
| `warn` | Report that it was not run, and continue with the checks that do not depend on it. |
| `skip` | Omit the dependent step silently. Rarely right for a validator. |

**Delegation does not move the definition of done.** `l2/validate-business-processes` still
`satisfies: req:l2-business-processes-dod`, still owns the report, and still decides what a failure
means for a DAK. It borrows a conformance verdict; it does not hand over its contract. A validation
report that says "BPMN spec conformance: not run" is a complete report. One that silently omits the
row is not.

### Why not vendor the checks

Three reasons, in order of how much they cost.

**Version skew is the whole problem.** BPMN 2.0 and DMN 1.3 are versioned by OMG and FHIR by HL7,
on their schedules. A vendored copy of a conformance rule is correct until the day it is not, and
nothing announces the day. A pinned provider makes the version a declared fact.

**The starter kit is a template.** Every SMART Guidelines IG starts from it. A conformance checker
vendored here is copied into every downstream IG and updated in none of them.

**It contradicts the package's own doctrine.** [`architecture.md`](architecture.md) puts smart-base
in the substrate layer — *referenced, never forked* — for exactly this reason. `smart-skills` is
substrate on the same terms.

---

## What has not been decided

Two things, both `technical-wg`, both better raised than assumed.

**How a runtime resolves a provider.** `registry/providers/smart-skills.json` pins a repository, a
ref and a contract version. It does not say whether a runtime clones it, reads it from a published
package, or calls it over MCP. The starter kit declares what it needs; how a conforming runtime
supplies it is [`spine/INTERFACE.md`](spine/INTERFACE.md)'s kind of question, and that file does not
answer it yet either.

**Whether `smart-skills` gets its own registry index.** It ships `skills/index.json`, generated the
same way `registry.json` is. If a third provider ever appears, the two index formats should
converge rather than multiply.
