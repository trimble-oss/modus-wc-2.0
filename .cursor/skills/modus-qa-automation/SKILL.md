---
name: modus-qa-automation
description: >-
  QA automation policy for trimble-oss/modus-wc-2.0: one verdict comment,
  gate vs verdict, graph-aware Storybook coverage, and exact QA headers.
disable-model-invocation: true
---

# Modus QA automation

Also follow `modus-qa-source` and `.cursor/rules/code-guidelines.mdc`. Do not implement product changes.

## Wake and scope

QA wakes on **label added** only (`qa-full`, `qa-rerun`, `qa-skip`). Independent QA — do not trust Dev npm checklists.

**ONE COMMENT:** one PR **conversation** comment per wake (`add_issue_comment`). Never a second `## QA PASSED/FAILED` on the same wake — **not** in walkthrough reviews, **not** in a follow-up review after the human nudges you. Tests pass + visual fail = one `## QA FAILED — visual` with dimensions table.

## Mindset

- npm/lint/test is a **gate**, never a **verdict**.
- `## QA PASSED` requires visual evidence when the diff touches `.scss`, `.tailwind.ts`, component `.tsx/.ts`, or stories.
- Never mark a scenario pass without a screenshot.
- Max **3 browser targets** unless human AC names more.
- A `/refine` screenshot of broken UI is failing evidence until that state is shown fixed.
- If Dev's `QA-graph` disagrees with `reverseImpact`, **trust the graph** and note the mismatch.

## Graph + Storybook coverage

Always invoke **`graph-impact`** then **`storybook-smoke`** when the gate is green and visual QA applies.

Read [`docs/component-graph/component-graph.json`](../../../docs/component-graph/component-graph.json) on the PR branch.

For each changed tag from the PR diff:

| Target                                                                                           | Stories                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Changed component**                                                                            | Stories covering changed props/sizes (`QA-verify` if present). If empty, **all remaining stories** for that tag (default + variants), not the whole library. |
| **Children it composes** (`edges` where `source` is changed tag, type `composes`/`slot`/`hosts`) | **Default story only**, and only if the change can show through the child (label, feedback, icon).                                                           |
| **Parents in `reverseImpact[tag]`**                                                              | **Default story only** (e.g. select → date, table).                                                                                                          |

Cap browser **parent** targets at 3 unless human AC names more. Never walk every component in Storybook.

`reverseImpact` dependents are **mandatory** target slots — reserve slots for them before extra sizes/themes.

## Step 0 — read slice

PR diff, labels, latest conversation comment with Routing / QA-depth / QA-source / QA-verify.

If Routing missing: infer from diff. `QA-graph` from `reverseImpact`.

**Source fetch (mandatory before visual verdict):** When `QA-source` is a URL, read it now via Drive MCP (`comparison-doc`, `figma-staged`) or GitHub MCP (`blueprint`). If the human's `/refine` linked a Google Doc, that doc overrides stale Dev `QA-source-kind: blueprint` mislabels.

## Gates (unless qa-skip + depth none + no visual files)

```
npm run tailwind:build
npm run embed:css
npm run embed:component-css
npm test
npm run lint
```

Gate fail → `## QA FAILED — functional`. Table: visual = not-evaluated. STOP.

## Coverage

Diff must include tests and/or stories for new props, sizes, or AC behavior.

## Visual

Required when gate green AND diff is visual OR QA-depth is visual-slice/composition OR QA-verify non-empty OR latest `/refine` has UI screenshots.

Walk QA-verify scenarios. For each: open Storybook, set theme from QA-themes, screenshot, compare to **QA-source** per `QA-source-kind`:

| Kind               | Compare against                                                  |
| ------------------ | ---------------------------------------------------------------- |
| `comparison-doc`   | Doc embedded images and token tables (Drive MCP)                 |
| `figma-staged`     | Staged `screenshot.png` + `variable-defs.json`                   |
| `blueprint`        | Blueprint markdown + Storybook                                   |
| `issue-screenshot` | Attached PNGs from the issue/PR                                  |
| `none`             | Storybook on **main** vs PR branch (existing component baseline) |

When `QA-source-kind: comparison-doc`, cite the doc's expected token/color per theme in the evidence table. Dark-theme header selects matching light-theme colors (e.g. white pills on dark) = **fail** unless the doc says otherwise.

## Report — four dimensions, then ONE overall header

Dimensions: gate | tests | visual | coverage. Values: pass | fail | not-evaluated | blocked.

Per-scenario table: scenario | state | result | evidence.

Overall headers (**exact first line**):

| Header                       | Meaning                                                          |
| ---------------------------- | ---------------------------------------------------------------- |
| `## QA PASSED`               | All dimensions pass; every scenario has evidence                 |
| `## QA PASSED WITH CONCERNS` | Ships-safe; named issues                                         |
| `## QA FAILED — visual`      | Gate green; Storybook scenario failed (screenshot pair required) |
| `## QA FAILED — functional`  | Gate/tests failed; visual = not-evaluated                        |
| `## QA BLOCKED`              | Cannot verify (env, missing source)                              |
| `## QA SKIPPED`              | Copy/docs only                                                   |

Never use GitHub MCP to add/create labels or run `gh label create`. Blueprint reads via GitHub MCP `get_file_contents` are allowed. Comment exact headers; the Action attaches labels.

## Subagents (Composer 2.5 only)

Use **`graph-impact`** then **`storybook-smoke`**. Do not spawn built-in Explore/generalPurpose Task subagents.

Hooks may follow up if you stop without a verdict header after visual work.
