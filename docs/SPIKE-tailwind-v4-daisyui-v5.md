# SPIKE: Tailwind CSS v4 + DaisyUI v5

**Branch:** `dependencies/upgrade-daisyui-and-tailwindcss`  
**Status:** Proof-of-concept — **not shippable**  
**Date:** 2026-09-14

## Goal

Validate that Modus WC 2.0 can move from Tailwind CSS 3.4 + DaisyUI 4.12 to Tailwind 4.3 + DaisyUI 5.7 using:

- `@tailwindcss/cli` (Wireit global CSS pipeline)
- `stencil-tailwind-plugin` v2 (per-component SCSS pipeline)
- CSS-first configuration (`@import`, `@plugin`, `@source`)
- One theme (`modus-modern-light`) and four components (`button`, `text-input`, `card`, `tabs`)

## Versions exercised

| Package | Spike version |
| --- | --- |
| `tailwindcss` | 4.3.3 |
| `@tailwindcss/cli` | 4.3.3 |
| `@tailwindcss/postcss` | 4.3.3 |
| `daisyui` | 5.7.37 |
| `stencil-tailwind-plugin` | 2.0.6 |
| `typescript` | 5.9.3 |
| `@stencil/core` | 4.35.3 (unchanged) |

## What was changed (spike scope)

### Tooling

- Wireit `tailwind:build` / `tailwind:watch` use `@tailwindcss/cli` with `src/styles/tailwind-v4.css`.
- `stencil.config.ts` drops `tailwindConf`; uses `injectTailwindConfiguration` reading `src/styles/tailwind-v4-core.css` (avoids broken relative `@import` resolution from each component directory).
- Legacy `tailwind.config.ts` moved to `docs/legacy/tailwind.config.v3.ts` (v3 JS config is incompatible with Tailwind 4 package types).

### CSS architecture

| File | Role |
| --- | --- |
| `src/styles/tailwind-v4.css` | Wireit entry: global imports + core |
| `src/styles/tailwind-v4-core.css` | Shared Tailwind 4 + DaisyUI 5 theme (no relative imports) |
| `src/styles/tailwind-v4-themeable.ts` | Safelist for spike utilities |
| `src/styles/tailwind.css` | **Unchanged** — v3 reference until full migration |

### Components (dual-class pattern)

Daisy/Tailwind utilities use the v4 **variant prefix** (`moduswc:btn-primary`). Modus SCSS hooks keep stable hyphenated classes (`modus-wc-btn`, `modus-wc-btn-filled`, `modus-wc-card-bordered`) so component SCSS does not need a full rewrite in the spike.

DaisyUI v5 renames applied in spike components:

| v4 (prefixed) | v5 spike class |
| --- | --- |
| `modus-wc-input-bordered` | default `input` / `moduswc:input-ghost` when borderless |
| `modus-wc-card-bordered` | `moduswc:card-border` + SCSS hook |
| `modus-wc-card-compact` | `moduswc:card-sm` + SCSS hook |
| `modus-wc-tabs-bordered` | `moduswc:tabs-border` |
| `modus-wc-tabs-lifted` | `moduswc:tabs-lift` |
| `modus-wc-tabs-boxed` | `moduswc:tabs-box` |

## Results

### ✅ Succeeded

1. **`@tailwindcss/cli` compiles** spike CSS with DaisyUI 5 plugin and custom `@plugin "daisyui/theme"` block for `modus-modern-light`.
2. **`stencil-tailwind-plugin` v2 compiles** all components; `npx stencil build --prod` completes (~22s).
3. **Daisy component CSS is emitted** under the Tailwind prefix (e.g. `moduswc:btn-primary`).
4. **Theme tokens** map cleanly from `modus-modern.ts` light palette to v5 `--color-*` variables.

### Spike CSS size

**66 KB is not a linear “4 components out of 40” slice.** Most of the file is fixed overhead and DaisyUI shipping whole component *families*, not one utility per Modus component.

#### Summary comparison

| Build | Approx. size (minified) | What it represents |
| --- | --- | --- |
| Spike `output.css` (Wireit entry) | **~66 KB** | `global.css` + `variables.css` + `fonts.css` + 1 theme + 4 Daisy families |
| Spike `tailwind-v4-core.css` only | **~45 KB** | 1 theme + 4 Daisy families (no global imports) |
| Full v3 `output.css` (estimated) | **~250–300 KB** | 6 themes + all components + `tailwind.css` overrides |

The full v3 figure is an **estimate** — `src/styles/output.css` is gitignored and not checked into the repo. It is included for directional comparison only.

#### Breakdown of spike `output.css` (~65 KB minified)

| Chunk | ~Size | What it is |
| --- | --- | --- |
| Global imports (`global.css`, `variables.css`, `fonts.css`) | **~20 KB** | OkLCH fallbacks, resets, `@font-face`, modal scrollbar rules, input background hacks — **same whether the spike has 1 or 40 components** |
| Tailwind `@layer base` | **~7 KB** | Preflight + heading overrides |
| Daisy + `@layer utilities` | **~38 KB** | Daisy component CSS under `moduswc:*` |

Building only `tailwind-v4-core.css` (no global `@import`s) yields **~45 KB**, so roughly **one third of the spike bundle is not attributable to the four migrated components**.

#### Daisy does not tree-shake per Modus component

Using `moduswc:btn` pulls the **entire btn family** (sizes, outline, disabled, etc.). Using `moduswc:tabs` pulls the full tabs subsystem. Approximate selector hits in the core-only bundle:

| Daisy family | Selector hits (core-only) |
| --- | --- |
| `tab` / `tabs` | ~246 |
| `input` | ~87 |
| `btn` | ~79 |
| `card` | ~24 |

The spike also pulls related Daisy dependencies (e.g. `label`, `select`, `filter`, `alert` stubs) even though those Modus components were not migrated.

#### Why 66 KB vs ~280 KB is not a simple ratio

The full v3 bundle is larger mainly because of work the spike **deliberately omits**:

1. **Six themes** (classic / modern / connect × light / dark) vs spike’s **one**
2. **`tailwind.css` overrides** (~1,030 lines): button hover/active per theme, Chrome &lt;111 oklch fallbacks, disabled rules, etc.
3. **Full `@source` / content scan** across ~40 components → many more Daisy families (table, menu, modal, navbar, …)
4. **`tailwind-themeable.ts` safelist** (~86 entries vs ~50 in spike)
5. **`@tailwindcss/typography`** plugin (not included in spike)

**Takeaway:** The spike proves the CSS pipeline compiles; it does **not** prove proportional bundle size. A full v4 migration will land **well above** 66 KB, but likely **not** 4×–6× the spike size, because global/base CSS is shared and themes do not scale linearly. Full migration must widen `@source`, port `tailwind.css` overrides, and re-measure after all themes and components are included.

### ❌ Expected failures (out of spike scope)

- **Unit tests / snapshots** for migrated components fail (class strings changed). Example: tests still assert `modus-wc-btn-success` instead of `moduswc:btn-success`.
- **All other components** still emit v3 hyphen utilities (`modus-wc-flex`) — they receive no matching CSS until migrated.
- **Six themes** not ported; only `modus-modern-light` in CSS.
- **`tailwind.css` overrides** (~1000 lines: Chrome &lt;111 oklch fallbacks, button hover/active, disabled states) not ported to v5 token names.
- **Storybook / visual QA** not run in spike.

## Critical findings (go/no-go inputs)

### 1. Tailwind v4 prefix cannot contain hyphens

```text
Error: The prefix "modus-wc" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.
```

**Implication:** Planned strategy “`modus-wc:flex`” is **not possible**. Spike uses `prefix(moduswc)` → `moduswc:flex`, `moduswc:btn-primary`.

**Consumer impact:** Any `customClass` or app code using `modus-wc-*` utilities breaks. This is a **semver-major** API change. Needs an ADR choosing:

- `moduswc:*` (letters-only prefix), or
- unprefixed utilities inside shadow DOM only (likely unacceptable for `customClass`), or
- a compatibility shim (high maintenance).

### 2. Dual build pipelines must stay aligned

| Pipeline | Entry | Purpose |
| --- | --- | --- |
| Wireit CLI | `tailwind-v4.css` | `output.css` → theme provider embed |
| Stencil plugin | `injectTailwindConfiguration` → `tailwind-v4-core.css` | Per-component SCSS `@apply` / scanned classes |

**Gotcha:** `@import './global.css'` inside the Stencil plugin entry resolves **relative to each component file**, not the CSS file path. Fix: inject core CSS via `readFileSync` (implemented) or `tailwindGlobal()` with care.

### 3. `stencil-tailwind-plugin` + Stencil version ceiling

Keep `@stencil/core` **≤ 4.38.x** until [stencil-tailwind-plugin#43](https://github.com/Poimen/stencil-tailwind-plugin/issues/43) is fixed (spike used 4.35.3 successfully).

### 4. Theme system rewrite

JS `daisyui.themes` in `tailwind.config.ts` → CSS `@plugin "daisyui/theme"` blocks. Spike proves the pattern for one theme; five themes + Connect overrides remain.

### 5. Drop or rewrite Chrome &lt;111 fallbacks

Large `tailwind.css` blocks assume v4 channel tokens (`--p`, `oklch(var(--p))`). DaisyUI v5 uses `--color-primary`. Recommend dropping legacy fallbacks unless product still supports Chrome &lt;111.

### 6. `*-focus`, `--animation-btn`, `--btn-focus-scale`

Not carried into v5 theme blocks. Modus SCSS already implements button hover/active; Connect `btn-focus-scale: 1` must be reimplemented in Modus CSS if still required.

## Recommendation

| Area | Recommendation |
| --- | --- |
| **Proceed?** | Yes, with a **major version** and dedicated migration project (~8–12 engineer-weeks). |
| **Prefix** | ADR required; spike proves `moduswc:` works technically but is a breaking public API change. |
| **Next steps** | Port remaining themes; migrate all `*.tailwind.ts` + `tailwind-themeable.ts`; port `tailwind.css` overrides; update snapshots; Storybook visual QA; consumer migration guide. |
| **Do not merge spike as-is** | Branch is intentionally partial. |

## Commands used in spike

```bash
npx @tailwindcss/cli -i src/styles/tailwind-v4.css -o src/styles/output.css --minify
npx stencil build --prod
```

## File map (quick reference)

```
src/styles/tailwind-v4.css          # Wireit CLI entry
src/styles/tailwind-v4-core.css     # Shared Tailwind 4 + Daisy 5 config
src/styles/tailwind-v4-themeable.ts # Spike safelist
docs/legacy/tailwind.config.v3.ts   # Archived v3 JS config
```
