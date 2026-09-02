# Agent orientation

Harness-neutral. If you are running in Claude Code, an MCP client, or anything else that can read
files, this is what you need to know before acting.

## Load order

1. **`registry/registry.json`** — the index. Every skill, role, capability, requirement and expert,
   with paths. Load this first; it saves you walking the tree.
2. **`METHODOLOGY.md`** — the rules that apply to every skill. Read once per session.
3. **The expert** you are acting as — `experts/<expert>/EXPERT.md`. It tells you which skills are
   in scope and which gates apply to you.
4. **The skill** — `skills/<level>/<skill>/SKILL.md` plus its `input.schema.json` and
   `output.schema.json`.

Do not load every skill. Load the one you need.

## Before you act

**Check `determinism` in the skill frontmatter.**

- `deterministic` — the operation is reproducible. Run it. Re-running it produces the same bytes.
  You do not need to explain what you did beyond naming the operation.
- `judgment` — you are deciding something. Produce a diff and a reason, never a silent write.
  Say what you decided and what you decided it from.

Never present a judgment result as if it were derived. The distinction is the point of the package.

**Check `roles` in the skill frontmatter** against the role you are acting as. A skill you are not
authorised for is not a skill you may run "just this once".

**Check `requiredCapabilities`.** Each entry has a `degradation` policy — `fail`, `warn`, `skip`,
or `fallback`. Honour it. If a capability marked `fail` is absent, stop and say so; do not
substitute an approximation.

## While you act

**Gates.** Five actions cannot be completed alone. They are listed in
`registry/requirements/content-lifecycle.json`. In short: every file write arrives as a diff and
lands only on Apply; running the IG Publisher is confirmed explicitly; a regeneration that would
overwrite hand-edited FSH stops and asks; the L2-to-L3 transform needs a reviewer; and release
needs the Commons Steward. Everything cheap and reversible runs freely.

**Flags.** When you hit a question that is not yours to answer, do not guess and do not silently
skip. Write a flag conforming to `schemas/common/flag.schema.json` — `status`, `owner`, `reason`,
and `evidence` unless the status is `fixed`. Route it: to the L2 authors when the DAK does not
settle it, to the technical working group when it is a convention outliving one DAK, to the DAK
repository when it is a defect in the published dictionary.

**Evidence.** A failing check must point at something — `file:line` plus a verbatim quote. A
failure with nothing to point at is itself a defect. This is the failure mode the package exists
for: not a wrong answer, a confident one with nothing behind it.

## After you act

**Write the audit entry.** One `.qa.json` sidecar per artifact, conforming to
`schemas/common/audit-entry.schema.json`. Entries are append-only and hash-pinned to their sources,
so an edit upstream expires your verdict automatically. Supply the verdict — `result`, `severity`,
`evidence`; the writer captures hashes, timestamp and commit.

Identify yourself honestly in `reviewer`: `kind: agent`, your model id, your session, the skill you
ran under. Agent verdicts are not human verdicts and the record should not blur them.

**Never claim fidelity.** Schema and profile checks verify *form*. Whether the L3 artifact
faithfully represents the L2 source is a human ruling and is never auto-passed. Present the source
row beside the generated element, argue your reading, and let a person decide.

## Conventions

- **The procedure is in the SOP, not in the skill.** Every skill's frontmatter has a `sop:` field
  naming the page that holds it. Read that page. The skill body carries only what the contract
  needs and the SOP does not say.
- **`status: placeholder` means the contract is unspecified, not the procedure.** The schemas
  permit anything, so passing them proves nothing. The SOP is still complete and still correct.
- **Never edit an SOP page to suit a skill.** Those pages are published guidance with their own
  review process. If a procedure is wrong, raise a flag owned by `technical-wg`.
- Follow [`authoring_conventions.md`](../input/pagecontent/authoring_conventions.md) for resource
  ids, names and file locations. The package does not restate those rules; it points at them.
