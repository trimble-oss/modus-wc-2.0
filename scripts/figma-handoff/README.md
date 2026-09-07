# Example fixture layout — not real MCP output.

This folder documents the expected v2 structure. Agents capture live data via
`figma-stage-to-drive` skill; do not commit large staging bundles to git.

```
staging/issue-{N}-{component}/
  manifest.json
  code-connect.json
  variants/
    md-default/
      design-context.md
      variable-defs.json
      screenshot.png
      meta.json
    md-focused/
      ...
```

See `.cursor/skills/figma-stage-to-drive/SKILL.md`.
