# How we triage the smart-* repositories

A small team maintains every non-fork `smart-*` repository in the WorldHealthOrganization org. This page says who looks at what, and how fast. The aim is that nothing waits until someone raises it in a meeting.

- **Dashboard:** [worldhealthorganization.github.io/smart-ig-starter-kit/dashboard](https://worldhealthorganization.github.io/smart-ig-starter-kit/dashboard/). It is refreshed daily and shows build status, open issues and PRs for every repository.
- **Alerts:** a `build-broken` issue opens in this repository when a default-branch build starts failing. It tags the maintainers.
- **Weekly digest:** a `weekly-digest` issue in this repository every Monday, assigned to that week's triage lead.
- **Process diagrams:** the BPMN files are the authority for this page.
  - [issue-triage.bpmn](https://github.com/WorldHealthOrganization/smart-base/blob/main/.github/repo-health/processes/issue-triage.bpmn) for triage
  - [repo-health-watch.bpmn](https://github.com/WorldHealthOrganization/smart-base/blob/main/.github/repo-health/processes/repo-health-watch.bpmn) for the daily check
  - If the diagram and this page disagree, change the diagram first.

## Roles

| Role | Who | What they do |
| --- | --- | --- |
| Triage lead | One maintainer per week, rotating ([config](.github/repo-health/config.yml)) | Works through the weekly digest, triages every new item, and owns build alerts that week |
| Maintainer | Everyone in `maintainers` in the config | Fixes what is assigned to them; reviews PRs the lead hands them |
| Publication manager | Whoever is releasing | Decides whether to hold a release or fix forward when a release build fails |

To swap a week, edit `rota` in the config, or just say so in the digest issue.

## Response targets

| Item | Target |
| --- | --- |
| Default-branch build failing (P0) | Acknowledged the same working day, fixed within 2 working days |
| New issue | Triaged within 7 days: closed with a reason, or labelled with a type and a priority |
| New PR | First review within 7 days |
| Anything older than 90 days | Closed, or taken over, at the monthly sweep |

## Priority labels

Use the same labels in every repository.

| Label | Meaning | What happens |
| --- | --- | --- |
| `P0` | Default-branch build or published IG broken, or a release blocker | Fix now. Build alerts carry this label |
| `P1` | Blocks a country or partner implementation, or an upcoming release | Assign this week |
| `P2` | Normal content fix or feedback | Backlog, picked up in order |
| `P3` | Nice to have | Backlog; may be closed at the monthly sweep |

Status labels are `needs-triage`, `needs-info`, `ready` and `blocked`. An item counts as triaged on the dashboard once it carries a `P0`–`P3` label.

## The triage recipe (under 2 minutes per item)

For each item in the digest, in order:

- [ ] Is it a duplicate or out of scope? Close it with a one-line reason.
- [ ] Is there enough information? If not, label it `needs-info` and ask one specific question. It comes back to you when the reporter replies.
- [ ] Set the type (bug, feedback, enhancement, question) and the priority (`P0`–`P3`).
- [ ] If it is `P0` or `P1`, assign it now. If it is `P2` or `P3`, label it `ready`; it goes to the backlog.
- [ ] If it is a PR, review it or name the maintainer who will, within 7 days.
- [ ] Tick it in the digest.

## Build alerts

The daily check runs at 05:41 UTC. It reads the CI build, the FHIR IG build on build.fhir.org, the release build and the GitHub Pages deploy for every repository. It acts only when something changes:

- **A build goes from passing to failing:** it opens one issue here, titled `🔴 <repo>: <build> failing on <branch>`. The issue is labelled `build-broken` and `P0`, assigned to the maintainers, and tags them. Release failures also get `publication-manager`.
- **It is still failing the next day:** the issue body is updated quietly (edits do not notify). If the failure changes, one comment is added (comments do notify).
- **It passes again:** the bot comments and closes the issue.
- **The check could not read a build:** it changes nothing for that build, and the workflow run turns red. Unknown is never treated as passing.

If you close an alert yourself while the build is still failing, the bot takes that as a decision. It will not reopen the alert until the build has passed again.

Anyone can run the check straight away from the Actions tab: **SMART repo health → Run workflow**.

## What the verdicts mean

| Verdict | Meaning |
| --- | --- |
| Passing | The latest settled run succeeded |
| Failing | The latest settled run failed, recently |
| Stale | The last result is old: a failure that has not re-run for 7+ days, a cancelled Pages deploy, or an IG build older than the latest commit |
| Superseded | The last run failed, but the workflow file has changed since. Not known to be fixed |
| Unknown | It could not be checked. Never counted as passing |
| n/a | The repository has no such build |

## Meetings

- **Weekly, 30 minutes:** go through the digest from top to bottom, agree owners for `P0` and `P1`, and hand over to the next lead.
- **Monthly, 30 minutes:** sweep items older than 90 days, and review the archive candidates the digest lists.

## What the automation never does

It never closes, labels or deletes anything in the tracked repositories, and it never archives a repository. The digest lists repositories with no push for 24 months as **archive candidates**, with their age and size. Archiving one is a decision for the maintainers.
