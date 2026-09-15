---
name: modus-dev-automation
description: >-
  Dev automation policy for trimble-oss/modus-wc-2.0: dispatch, routing,
  no-subscribe, Me-only follow-ups, graph-aware QA routing, and visual self-check.
disable-model-invocation: true
---

# Modus Dev automation

Also follow `modus-qa-source` for design-source rules and `.cursor/rules/code-guidelines.mdc`.

## QA labels

GitHub MCP **cannot** add, remove, or create labels on `trimble-oss/modus-wc-2.0` (403). Do not run `gh label create`.

Workflow [`.github/workflows/automation-label-router.yml`](../../../.github/workflows/automation-label-router.yml) attaches labels when **you** (`ElishaSamPeterPrabhu`) or `cursor[bot]` post exact signal lines on the PR.

**Canonical surface: PR conversation comment** (GitHub MCP `add_issue_comment`). Review bodies are a fallback.

| Comment first line                                                                           | Label         |
| -------------------------------------------------------------------------------------------- | ------------- |
| `Routing: qa-full`                                                                           | `qa-full`     |
| `Routing: qa-skip`                                                                           | `qa-skip`     |
| `QA-rerun: add` or `Routing: qa-rerun`                                                       | `qa-rerun`    |
| `## QA FAILED`                                                                               | `qa-failed`   |
| `## QA PASSED WITH CONCERNS` / `## QA BLOCKED` / `## NEED CLARIFICATION` / `## NOT FEASIBLE` | `needs-human` |

Do **not** claim you attached the label. If missing after ~1 minute, ask the human once. Do not retry GitHub MCP.

## Routing block (post as PR conversation comment)

```
Routing: qa-skip | qa-full
QA-depth: none | visual-slice | functional | composition
QA-scope: <component tags>
QA-themes: modern-only | classic-only | both | n/a
QA-assert: <what must hold>
QA-source: <url> | none
QA-source-kind: figma-staged | blueprint | issue-screenshot | none
QA-source-path: public/modus-llm/components/<slug>/ | variants/<id>/ | none
QA-verify: 1) <state × size × theme> 2) …
QA-graph: none | tag → dependents
```

- New feature or variant: `QA-source` **must** be a URL, not `none`.
- `QA-verify`: numbered scenarios QA must execute. Include hover/disabled/pressed when those states exist.
- `QA-graph`: from [`docs/component-graph/component-graph.json`](../../../docs/component-graph/component-graph.json) `reverseImpact[<changed tag>]` (transitive runtime dependents on `main`; cap browser targets at 3). Empty → `none`.

After `/refine` or `qa-failed` repair: conversation-comment `QA-rerun: add` plus updated routing block. **Never** also post `Routing: qa-full` on `/refine` (that starts a second QA run).

## Dispatch rules

**Do not subscribe.** Do not `/subscribe`. Do not watch the PR after the turn ends.

If a GitHub-triggered wake is a PR comment/review and the author is not Me (`ElishaSamPeterPrabhu`): **STOP**.

If from Me but not `/approve` `/ask` `/clarify` `/refine`: **STOP**.

Do not patch for bot reviews (copilot, github-actions, etc.). Copilot suggestions are NOT a `/refine`.

Post Routing / QA-\* / `QA-rerun: add` as PR **conversation** comments only — not walkthrough-only reviews.

### `/approve` on an issue

Extract AC, technical notes, design links. Feasibility gate: `## NEED CLARIFICATION` or `## NOT FEASIBLE` on correct surface and STOP if blocked.

Branch `exp/<issue-number>-<short-slug>` from `main`. Commit per AC. Before Open PR: `npm run tailwind:build`, `npm run embed:css`, `npm run embed:component-css`, `npm test`, `npm run lint`.

PR body: repo template; Work Item `Closes #<n>`. Routing comment after Open PR. **STOP.** No subscribe.

### `/ask` / `/clarify`

Reply on same surface (PR if exists). No patch, no push, no QA-rerun. STOP.

### `/refine`

Patch same branch. Conversation comment: what changed + `QA-rerun: add` + updated QA-\* fields. Do not claim QA passed. Do not run Playwright as QA substitute. STOP.

### `qa-failed` label

Repair only latest `## QA FAILED`. Max 3 attempts. Push + `Fix applied:` + `QA-rerun: add`. STOP.

## Developer visual self-check

After visual/markup changes, when `reverseImpact` is non-empty:

1. Invoke **`graph-impact`** subagent to list changed tags, parents, and compose children.
2. Invoke **`storybook-smoke`** on the changed component stories (QA-verify scenarios if present; else default + changed variants) and **default story only** for compose children that can show through the change.
3. If a consumer (e.g. select → date) looks broken, patch same branch and re-check in the same turn.
4. Do not attach screenshots by default. After 3+ failed fix attempts or ambiguous intent: `## NEED CLARIFICATION` and STOP.

Hooks may remind you to run storybook-smoke after SCSS/Tailwind/component edits.

## Subagents (Composer 2.5 only)

Use custom subagents **`storybook-smoke`** and **`graph-impact`** only. Do **not** spawn built-in `explore` / `generalPurpose` Task subagents (Claude). Do not pass an inline `model` override to Task.

## PR evidence images

Capture walkthrough artifacts under `/opt/cursor/artifacts/`. Do **not** commit images to the repo. Use GitHub-hosted comment attachments for inline render, not `raw.githubusercontent.com` paths on the branch.

## PR Work Item

When opening a PR from `/approve`, Work Item must be `Closes #<issue-number>`.

## Reply surface

| Command           | Effect                                  |
| ----------------- | --------------------------------------- |
| `/approve`        | implement, open PR, STOP (no subscribe) |
| `/ask` `/clarify` | Q&A only                                |
| `/refine`         | patch + QA-rerun comment                |
| `qa-failed`       | repair latest QA failure                |

Do not create `.cursor/rules/architecture.mdc`.
