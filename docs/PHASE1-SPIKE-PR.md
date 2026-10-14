# Phase 1 spike: Tailwind 4 + DaisyUI 5 (draft PR)

## Summary

- Validates **Tailwind CSS 4.3** + **DaisyUI 5.7** with `prefix(moduswc)`, dual-class spike components, and **six generated themes** from `src/styles/themes/*.ts`.
- Dual Wireit CLI + `stencil-tailwind-plugin` v2 pipelines; Stencil **4.35.3** (≤ 4.38 ceiling).
- **Not shippable as 2.0** — unmigrated catalog still emits `modus-wc-*` utilities without matching CSS until Phase 3.

## Breaking changes (evaluation)

| Area | v3 / 1.x | Spike / 2.x target |
|------|----------|-------------------|
| Utility prefix | `modus-wc-flex` | `moduswc:flex` |
| Daisy classes | `modus-wc-card-bordered`, `tabs-bordered`, … | `moduswc:card-border`, `tabs-border`, `input-ghost`, `menu-*` |
| Theme tokens in CSS | `--p`, `oklch(var(--p))` | `--color-primary` (full colors) |
| SCSS hooks | `modus-wc-btn`, `modus-wc-btn-filled`, … | **Unchanged** (dual-class) |
| Browser floor | §4.0 degraded bands | Full: Chrome 111+, Safari 16.4+, Firefox 128+ |

## Bundle sizes (§6)

See `.cache/css-bundle-sizes.txt` (regenerate: `npm run measure:css-bundle:v3`).

| Artifact | v3 locked (d02eeeed7) | v3 rebuilt (today) | v4 spike (6 themes) | §6 ceiling |
|----------|----------------------|--------------------|---------------------|------------|
| `output.css` raw | 161,556 | 168,605 | **97,587** | 185,789 |
| `output.css` gzip | 22,394 | 24,931 | **12,991** | 25,753 |
| Adopted raw | 169,194 | 175,560 | **104,542** | 194,573 |
| Adopted gzip | 23,745 | 26,282 | **14,313** | 27,307 |

**Result:** bundle gate **PASS** (six themes, five Daisy families in `@source`).

## §6 gate checklist

| Gate | Status |
|------|--------|
| Bundle (six themes) | PASS |
| Shadow `@property` / adopted sheet | PASS (`npm run check:shadow-property`) |
| Toolchain (Tailwind 4 CLI + Stencil ≤ 4.38) | PASS |
| Themes from TS generator, no `--prefersdark` | PASS |
| Spike components dual-class + §4.4 remaps | PASS |
| `npm test` | PASS (47 parent snapshots updated for nested `modus-wc-button` only) |
| `npm run build:ci` | PASS |
| Framework apps (React / Angular / Vue) | **React** `test-react-v19` `npm run build` PASS; **Vue** `test-app` `npm run build` PASS; **Angular** `test-ng20` needs local `@angular/cli` (`ng`) — run after `npm ci` in `integrations/angular/ng20` |
| Visual / design sign-off | Pending (Storybook screenshots in PR **comments**, not committed) |

## Rollback

See [Modus - Upgrading to DaisyUI 5 and TailwindCSS 4 .md](./Modus%20-%20Upgrading%20to%20DaisyUI%205%20and%20TailwindCSS%204%20.md) **§12**: revert merge or pin **1.19.0**; do not hand-edit generated `output.css`.

## Commands

```bash
npm run generate:daisyui-themes   # wireit
npm run measure:css-bundle:v3
npm run check:shadow-property
npm test
npm run build:ci
```
