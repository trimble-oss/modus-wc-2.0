---
name: modus-qa-source
description: >-
  Shared QA-source resolution for Modus Dev/QA automations: Figma-staged Drive
  catalog, blueprint GitHub files, issue screenshots, and anti-scrape rules.
disable-model-invocation: true
---

# Modus QA source (Dev + QA)

Design sources are **Figma-staged Drive**, **Modus Blueprint** files, or issue attachments. Both agents use this table.

**Never** browser-scrape modus.trimble.com (login, scrolling, flaky DOM).
**Never** `git clone` or `npm install` [trimble-oss/modus-blueprint](https://github.com/trimble-oss/modus-blueprint).
Fetch **only** the mapped files with GitHub MCP `get_file_contents` (`owner=trimble-oss`, `repo=modus-blueprint`, `ref=main`).

| `QA-source` host                                  | Kind               | What to read                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `drive.google.com/drive/folders/`                 | `figma-staged`     | Drive MCP: `parentId=folderId` only. Read `manifest.json` first. Stop. Match AC/QA-verify/QA-source-path; if none: `md-default` only. Load only that variant's `variable-defs.json` + `design-context.md` (+ `screenshot.png` for QA). Optional `code-connect.json` if markup. Do not list/download the rest of the folder. |
| `figma.com` / `embed.figma.com` (no Drive folder) | blocked in cloud   | `/approve` → issue comment `## NEED CLARIFICATION` asking for staged Drive folder URL. QA → `## QA BLOCKED`. Do **not** use live Figma MCP in cloud automations.                                                                                                                                                            |
| `modus.trimble.com`                               | `blueprint`        | GitHub files in modus-blueprint (see map). Do not open the live site.                                                                                                                                                                                                                                                       |
| Issue image attachments                           | `issue-screenshot` | Those PNGs. `QA-source-path: none`.                                                                                                                                                                                                                                                                                         |
| `none`                                            | `none`             | Existing component: Storybook on **main** vs PR branch. New feature/variant with missing source → `## QA BLOCKED`.                                                                                                                                                                                                          |

### Blueprint URL map

Kebab-case the last path segment; try `select` then `Select` on 404.

| Live URL                     | Files in `trimble-oss/modus-blueprint`                                                                                             |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `/components/:name`          | `public/modus-llm/components/<slug>/` — `overview.md`, `styling.md`, `playground.md`, `use-cases.md`, `accessibility.md` as needed |
| `/patterns/:id`              | `public/modus-llm/patterns/<slug>/` and `patterns/<slug>/`                                                                         |
| Optional Figma for that name | `src/components/FigmaEmbedMapping.ts` then Figma MCP if a figma URL is listed (local only; not cloud automations)                  |

**Dev:** On `/approve` and `/refine`, classify issue/PR links, fetch blueprint files so the patch matches tokens/anatomy, and set `QA-source`, `QA-source-kind`, `QA-source-path`. Do not tell QA to open the website.

**QA:** Prefer Dev's `QA-source-path`. If missing, map the URL with the same table. Compare Storybook pixels to staged screenshot **or** expected states in markdown files. Screenshot Storybook, not the Blueprint site. Path 404 or GitHub 403 → `## QA BLOCKED`. Never scrape as fallback.

### Figma token mismatches

When staged Figma `variable-defs.json` specifies a value with no matching design token (e.g. line-height **28px** vs `--modus-wc-line-height-md` at 24px), **hardcode the Figma literal** in component SCSS with a brief comment citing the Figma style name. Prefer an existing CSS variable when it resolves to the same px value. Do not add new global tokens for one-off component values without design-system approval.
