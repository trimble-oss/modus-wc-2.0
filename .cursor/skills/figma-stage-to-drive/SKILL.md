---
name: figma-stage-to-drive
description: >-
  Stage Figma design data to Google Drive for cloud automations. Preferred:
  run run-staging-handoff.mjs (Figma REST API, no MCP payloads in chat). Fallback:
  official Figma MCP piped to disk. Packages modus-figma-staging-v2. NOT for
  implementing code — use figma-design-to-code for that.
disable-model-invocation: true
---

# Stage official Figma MCP → Google Drive

**IDE only.** Cloud automations **read Drive** — never call Figma MCP in cloud.

**Do not use `figma-design-to-code` for this workflow.** That skill is Figma → code. This skill is Figma → Drive catalog.

## Architecture

```
Preferred (agent runs ONE shell command — no capture data in chat):
  FIGMA_API_TOKEN=... node run-staging-handoff.mjs
    → capture-staging.mjs (Figma REST: variables + screenshots)
    → package-staged-handoff.mjs
    → validate-staged-handoff.mjs
  Agent reads stdout only → Drive MCP upload from disk paths

Fallback (MCP piped to disk — never summarize in chat):
  get_metadata → per symbol: get_variable_defs + get_screenshot (+ optional design-context)
  → write-staged-variant.mjs / store-capture.mjs
  → package + validate → Drive upload

Automations (every run)
  Drive MCP: manifest.json → only matching variants/{id}/variable-defs.json + screenshot
```

## Agent token rule

| Do | Don't |
|---|---|
| Run `run-staging-handoff.mjs` | Call `get_design_context` × N in chat |
| Read script **stdout** (progress lines) | Paste MCP JSON into messages |
| Upload from **file paths** on disk | Load all variant files into chat |

## Prerequisites

- `FIGMA_API_TOKEN` for script capture (Figma personal access token)
- Google Drive MCP connected (`plugin-google-drive-google-drive`) for upload
- Official Figma MCP (`user-figma_dev`) — **fallback only** for design-context

## Inputs (ask if missing)

| Input | Example |
|-------|---------|
| Issue number | `1234` |
| Component tag | `modus-wc-select` |
| Figma URL | page or variant-set URL with `node-id` |
| Variant set node | from metadata, e.g. `10806:13469` |
| Drive folder ID | `1rq3OiIfQR-BveyMSHQ45jouEd8xaChLT` |
| Capture tier | `sizes` (default), `standard`, or `full` |

## Capture tiers

| Tier | Variants (Select example) | When |
|------|---------------------------|------|
| `sizes` | 5 — default only per size | Quick sizing pass |
| `standard` | 25 — default + focused + disabled + active + readonly × 5 sizes | Interaction states |
| `full` | 40 — all states + valid/invalid/out-of-range | Complete QA source |

Default to **`sizes`** unless the user asks for more states.

## Step 0 — Script capture (preferred)

```bash
FIGMA_API_TOKEN=... node scripts/figma-handoff/run-staging-handoff.mjs \
  --staging-dir scripts/figma-handoff/staging/issue-{N}-{component} \
  --issue {N} --component {component} \
  --file-key {fileKey} \
  --variant-set-id {variantSetId} \
  --figma-url '{figma url}' \
  --drive-folder-id {driveFolderId} \
  --capture-tier sizes \
  [--variants md-default,sm-default]
```

Writes: `meta.json`, `variable-defs.json`, `screenshot.png` per variant. Skips `design-context.md`.

Use `--package-only` to re-run manifest/validate without re-fetching Figma.

## Step 1 — Resolve nodes (MCP fallback only)

1. Parse `fileKey` and `node-id` from the Figma URL.
2. Call **`get_metadata`** on the **variant set** frame (not the page root).
   - If URL points at a page, find the component set child named like `Select`, `Menu / Item`, etc.
3. From metadata XML, collect every `<symbol>` whose name matches `State=…, Validation=…, Size=…`.
4. Filter symbols with `shouldCaptureVariant(name, captureTier)` (see `scripts/figma-handoff/handoff-core.mjs`).

**Never capture the page node** — always capture individual **symbol** node IDs.

## Step 2 — Local staging folder

Create:

```
scripts/figma-handoff/staging/issue-{N}-{component}/
  variants/
    {variant-id}/
      design-context.md
      variable-defs.json
      screenshot.png
      meta.json
  code-connect.json          ← optional, root level
  manifest.json              ← generated in step 4
```

### Variant folder naming (`{variant-id}`)

Derive from Figma variant name:

| Figma name | Folder |
|------------|--------|
| `State=Default, Validation=Default, Size=MD` | `md-default` |
| `State=Focused, Validation=Default, Size=MD` | `md-focused` |
| `State=Disabled, Validation=Default, Size=SM` | `sm-disabled` |
| `State=Active, Validation=Default, Size=LG` | `lg-active` |
| `State=Read only, Validation=Default, Size=MD` | `md-readonly` |
| `State=Default, Validation=Invalid, Size=MD` | `md-invalid` |
| `State=Default, Validation=Valid, Size=MD` | `md-valid` |
| `State=Default, Validation=Out of range, Size=MD` | `md-out-of-range` |

Use `variantFolderIdFromFigmaName()` from `handoff-core.mjs` — do not invent names.

## Step 3 — MCP capture (per variant leaf)

For **each** symbol node `{nodeId}`:

### 3a. `get_design_context`

```
fileKey: <from URL>
nodeId:  <symbol id, e.g. 12611:134636>
clientLanguages: typescript,scss
clientFrameworks: stencil
skillNames: figma-stage-to-drive
```

- Write the **full raw** MCP response to `variants/{id}/design-context.md`.
- **Forbidden:** summarizing, truncating, or rewriting as bullet points.
- Minimum size check: > 800 bytes for typical components.

### 3b. `get_variable_defs`

```
fileKey, nodeId: same symbol
```

Write `variants/{id}/variable-defs.json`:

```json
{
  "nodeId": "12611:134636",
  "fileKey": "y9H5ucQKBjzI8JLuVrGcb3",
  "source": "official Figma MCP get_variable_defs",
  "variant": "State=Default, Validation=Default, Size=MD",
  "variables": { ... paste MCP object verbatim ... }
}
```

**This file is the numeric source of truth** for Dev/QA token comparison (font sizes, line heights, colors, spacing).

### 3c. `get_screenshot`

```
fileKey, nodeId: same symbol
```

Save PNG bytes to `variants/{id}/screenshot.png` (base64-decode if MCP returns base64).

### 3d. `meta.json`

```json
{
  "nodeId": "12611:134636",
  "fileKey": "y9H5ucQKBjzI8JLuVrGcb3",
  "name": "State=Default, Validation=Default, Size=MD",
  "props": { "size": "md", "state": "default", "validation": "default" },
  "capturedAt": "2026-09-07T..."
}
```

### Once per variant set (optional)

`get_code_connect_map` on variant set → root `code-connect.json`.

## Step 4 — Package manifest

```bash
node scripts/figma-handoff/package-staged-handoff.mjs \
  --dir scripts/figma-handoff/staging/issue-{N}-{component} \
  --issue {N} \
  --component {component} \
  --figma-url '{figma url}' \
  --variant-set-id '{variant set node id}' \
  --drive-folder-id '{drive folder id}' \
  --capture-tier full
```

Prints a GitHub issue comment block — save it for step 6.

## Step 5 — Validate (must pass before upload)

```bash
node scripts/figma-handoff/validate-staged-handoff.mjs \
  --dir scripts/figma-handoff/staging/issue-{N}-{component} \
  --capture-tier full
```

Fix all **errors** before uploading. Warnings about missing variants mean incomplete capture — go back to step 3.

## Step 6 — Upload to Google Drive

Mirror the local tree under the Drive folder:

1. Create subfolder `issue-{N}-{component}/` (or reuse existing component folder).
2. Upload `manifest.json`, `code-connect.json` to folder root.
3. For each variant, create `variants/{id}/` and upload all four files.
4. For screenshots use `create_file` with `base64Content` + `contentMimeType: image/png`.
5. For JSON/MD use `textContent` + correct `contentMimeType`, `disableConversionToGoogleType: true`.

**Forbidden:** uploading summarized design-context, wrong-node screenshots, or a single root-level `variable-defs.json` (v1 anti-pattern).

## Step 7 — Post GitHub routing

On the issue (or PR), post the comment block from step 4. Dev/QA use:

```
QA-source: <figma url>
QA-source-kind: figma-staged
QA-source-path: variants/md-default/ | variants/{id}/
```

Automations: read **`manifest.json` first**, then only variants listed in `QA-verify` / task scope.

## Reading staged data (Dev / QA)

Priority for token values:

1. `variants/{id}/variable-defs.json` → `variables`
2. `variants/{id}/screenshot.png`
3. `variants/{id}/design-context.md` → structure only
4. Ignore Code Connect prop mappings when they disagree with component API (e.g. Figma XS → `size="sm"`)

Map Figma tokens to code:

| Figma variable | Code token |
|----------------|------------|
| `modeColor/modeContent/content` | `--modus-wc-color-base-content` |
| `modeColor/modeContent/content low contrast` | `--modus-wc-color-gray-6` |
| `Component Scale/MD` | `--modus-wc-size-md` |
| `borderRadius/input` | `--modus-wc-border-radius-input` |
| Font `lineHeight` in `_ModusUI/...` style strings | match on select/input SCSS |

## Common failures (avoid)

| Mistake | Fix |
|---------|-----|
| Used `figma-design-to-code` only | Also run this skill; need `get_variable_defs` per variant |
| Captured page URL node | Re-capture each **symbol** id from `get_metadata` |
| One `variable-defs.json` at root | Per-variant files under `variants/{id}/` |
| Summarized `design-context.md` | Paste full MCP output |
| Only `*-default` folders | Re-run with `--capture-tier full` |
| Skipped validate | Run `validate-staged-handoff.mjs` before Drive upload |

## Select reference (Modus 2.0 file)

| Item | Value |
|------|-------|
| fileKey | `y9H5ucQKBjzI8JLuVrGcb3` |
| variant set | `10806:13469` |
| md-default node | `12611:134636` |
| Full tier | 40 symbols (5 sizes × 8 state/validation combos) |

## Checklist

- [ ] `get_metadata` on variant set — symbol list recorded
- [ ] Every tier variant has design-context + variable-defs + screenshot + meta
- [ ] `variable-defs.json` matches live `get_variable_defs` for spot-check node
- [ ] `validate-staged-handoff.mjs` exits 0
- [ ] `manifest.json` format `modus-figma-staging-v2`
- [ ] Drive tree mirrors local `variants/` structure
- [ ] GitHub comment posted with `QA-source-kind: figma-staged`
