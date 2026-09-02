# Package maintenance

Two scripts that maintain this package's own files. **Nothing here runs during a guideline
transformation** — they do not touch a DAK, produce FHIR, or know what a PlanDefinition is.

They live here rather than in [`spine/`](../spine/) because the spine is the deterministic pipeline
for *building a guideline* — extract, generate, compile, build, check — and this is not that.
[`spine/INTERFACE.md`](../spine/INTERFACE.md) declares those five operations for a runtime to
implement; it ships no code, and neither of these scripts implements any of it.

## The scripts

Plain Node, no dependencies, no `package.json`, no install step. Node is already required by this
repository's toolchain because SUSHI runs on it.

| Script | What it does |
|---|---|
| `build-registry.mjs` | Walks the package and writes `registry/registry.json`, the index an agent loads first. `--check` fails if the committed copy is stale. |
| `validate-package.mjs` | Resolves every cross-reference in the package and fails if any dangles. |

```bash
node ai/tools/build-registry.mjs      # regenerate the index
node ai/tools/validate-package.mjs    # check everything resolves
```

Run the first after adding a skill or editing frontmatter; run the second before committing.

## Why they exist

Neither is needed to *read* the package — every file is markdown or JSON and works with no tooling
at all. They exist because two things break silently:

**A generated index goes stale.** `registry.json` is committed, because the Implementation Guide's
CI delegates its whole build to `smart-base` and runs no local step, so nothing regenerates it on
push. `--check` is what stops it drifting from the tree it describes.

**A reference points at nothing.** A skill naming a role, a requirement naming a skill, a schema
referencing a common definition — markdown does not complain when any of these breaks. An agent
following a dead reference gets a confident wrong answer rather than an error, which is the exact
failure mode the rest of the package exists to prevent.

Both run in CI on every push touching `ai/`, via
[`.github/workflows/ai-package.yml`](../../.github/workflows/ai-package.yml).
