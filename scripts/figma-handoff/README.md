# Figma staging handoff (modus-figma-staging-v2)

Staging captures Figma design data for cloud automations. **Agents should run scripts, not read capture payloads into chat.**

## Quick start (recommended — REST API, minimal tokens)

1. Create a [Figma personal access token](https://help.figma.com/hc/en-us/articles/8085574374927-Manage-personal-access-tokens).
2. Export it: `export FIGMA_API_TOKEN=figd_...`
3. Run:

```bash
node scripts/figma-handoff/run-staging-handoff.mjs \
  --staging-dir scripts/figma-handoff/staging/issue-0-modus-wc-select \
  --issue 0 --component modus-wc-select \
  --file-key y9H5ucQKBjzI8JLuVrGcb3 \
  --variant-set-id 10806:13469 \
  --figma-url 'https://www.figma.com/design/y9H5ucQKBjzI8JLuVrGcb3/Modus-2.0---Atomic-Design-System?node-id=308-39905' \
  --drive-folder-id 1rq3OiIfQR-BveyMSHQ45jouEd8xaChLT \
  --capture-tier sizes
```

The agent only sees progress lines like `✓ md-default (12 variables)`.

4. Upload `staging/.../` to Google Drive (Drive MCP or manual).
5. Post GitHub routing with `QA-source-kind: figma-staged`.

## Capture tiers (Select)

| Tier | Count | Contents |
|------|-------|----------|
| `sizes` | 5 | default × each size |
| `standard` | 25 | + focused/disabled/active/readonly |
| `full` | 40 | + valid/invalid/out-of-range |

Add `--variants md-default,md-invalid` to capture an explicit subset.

## What each path writes

| File | REST script | MCP fallback |
|------|-------------|--------------|
| `variable-defs.json` | ✅ bound variables + text metrics | ✅ `get_variable_defs` |
| `screenshot.png` | ✅ render API | ✅ `get_screenshot` + curl |
| `meta.json` | ✅ | ✅ |
| `design-context.md` | ❌ skipped | optional `get_design_context` |

Dev/QA compare tokens from **`variable-defs.json`** first.

## Scripts

| Script | Purpose |
|--------|---------|
| `run-staging-handoff.mjs` | **Agent entry point** — capture + package + validate |
| `capture-staging.mjs` | REST-only capture |
| `package-staged-handoff.mjs` | Build `manifest.json` |
| `validate-staged-handoff.mjs` | Pre-upload checks (`--capture-source rest` skips design-context) |
| `write-staged-variant.mjs` | MCP pipe helper (payload JSON → variant folder) |

See `.cursor/skills/figma-stage-to-drive/SKILL.md`.

## Git

`scripts/figma-handoff/staging/` and `.captures/` are gitignored — upload to Drive only.
