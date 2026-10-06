# Upgrading to DaisyUI 5 and Tailwind CSS 4

Plan and spike brief for moving Modus Web Components 2.0 from Tailwind CSS 3 + DaisyUI 4 to Tailwind CSS 4 + DaisyUI 5.

DaisyUI 5 requires Tailwind 4. DaisyUI 4 is a Tailwind 3 plugin. Upgrade both together, or do not upgrade.

This investigates production on `main` (v1.19.0) and plans the work from that tree. The spike below is the first implementation. It has to prove the gates in §6 before any migration PR is treated as a pass.

---

## 1. Current state

| Area                | Today                                                                                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tailwind            | `3.4.17` (range `^3.4.14`)                                                                                                                                                                      |
| DaisyUI             | `4.12.24` (range `^4.12.13`), JS plugin in `tailwind.config.ts`                                                                                                                                 |
| Prefix              | `modus-wc-` → `modus-wc-btn`, `modus-wc-flex`                                                                                                                                                   |
| Themes              | Six JS objects: (modern \| classic \| connect) × light / dark                                                                                                                                   |
| Pipelines           | Wireit CLI (`tailwindcss -i … -o output.css`) and `stencil-tailwind-plugin` 1.8.0                                                                                                               |
| Public CSS          | `output.css` → `dist/modus-wc-styles.css`, and injected into shadow roots by `ensureDaisyUIInShadow` (`src/providers/theme/inject-daisyui.ts`) via `adoptedStyleSheets`                         |
| Class mapping       | 45 `*.tailwind.ts` files + `tailwind-themeable.ts` safelist                                                                                                                                     |
| Theme tokens        | Daisy v4 channels: `oklch(var(--p))`, `--fallback-*`                                                                                                                                            |
| Published variables | `modus-wc-variables.css` is exported from `package.json` and copied to `dist`. Each theme publishes 33 DaisyUI custom properties: 20 color channels (`--p`, `--b1`, …) and 13 component tokens (`--rounded-btn`, `--btn-focus-scale`, `--animation-btn`, …) |
| Tests               | 100% coverage, 60 snapshot files                                                                                                                                                                |
| Theme switching     | `theme.store.ts` resolves mode (explicit config, then `localStorage`, then `prefers-color-scheme`). `theme-provider.tsx` sets `data-theme="${theme}-${mode}"` (for example `modus-modern-dark`) |

---

## 2. Go / no-go (lock these before more implementation)

Three decisions stop the project. They are not implementation options.

### 2.1 Browser floor — go or no-go

Tailwind CSS **4.0** targets Chrome 111+, Safari 16.4+, and Firefox 128+ and depends on modern CSS (`@property`, `color-mix()`, OKLCH). **Tailwind 4.1+** adds [framework-generated fallbacks](https://tailwindcss.com/docs/compatibility) so many utilities still render in older browsers (for example Safari 15): OKLCH colors, opacity modifiers, and several `@property`-driven features get inlined or alternate declarations. That is **not** parity with v3 on every utility; shadows and gradients can still differ.

**DaisyUI 5 does not ship that story.** Theme and component CSS stay on full OKLCH and `color-mix()`. Tailwind’s 4.1 fallbacks apply to **Tailwind-generated** rules in `output.css`, not automatically to every Daisy class.

**Modus already has a separate layer:** hex **`--modus-wc-color-*`** tokens in `variables.css` and per-theme semantic aliases (`--modus-wc-color-primary`, `base-100`, and the rest) in `modus-wc-variables.css`. Component SCSS in §4.1 can target those instead of Daisy channels. That is independent of Daisy and is the right anchor for **product-critical** fallbacks after upgrade.

#### Combined strategy (recommended if Support wants broader reach than 4.0’s strict floor)

| Layer | Role on v4 + Daisy 5 |
| ----- | -------------------- |
| **Tailwind ≥ 4.1** | Fallbacks for prefixed utilities (`moduswc:*`) in the compiled sheet |
| **Daisy 5 themes** | Modern path: `--color-*` full colors on `[data-theme]` |
| **Modus `--modus-wc-color-*`** | Hex backstop for Modus-owned rules (buttons, forms, §4.1 SCSS) inside `@supports not (color: oklch(0% 0 0))` and, where needed, `@supports not (background-color: color-mix(in srgb, red, blue))` |
| **Shadow DOM (§4.2)** | `:host` (or equivalent) for `@property` utilities; Tailwind 4.1 helps in light DOM but does not replace this inside adopted stylesheets |

Do **not** port the v3 **569-line** Daisy v4 channel matrix (`--fallback-p` tied to `--p`). Generate or map hex fallbacks **from the same theme TS** into `--modus-wc-color-*` / small `@supports not` blocks for surfaces Modus owns. Keep bundle impact in the §6 gate.

**Decision:** the upgrade does not reach any browser older than Tailwind 3 already does. The sheet applies at Chrome and Edge **99**, Firefox **97**, and Safari **15.4**. Full fidelity on Tailwind 4 starts at Chrome and Edge **111**, Safari **16.4**, and Firefox **128**. Anything below the `@layer` line is unsupported, including Chrome 66. The bands are in §4.0.

#### What production ships today (v3 + Daisy 4)

`tailwind.css` is 1,029 lines. Legacy fallbacks are **569 lines** in three `@supports not (color: oklch(0% 0 0))` blocks:

| Block                            | Lines   | What it is                                                                                          |
| -------------------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| Fallback color table             | 185–324 | `--fallback-p` and the rest, per theme, for browsers without `oklch()`                              |
| Button hover / active hex matrix | 357–748 | Modus Modern hover and pressed colors for those same browsers. Modern browsers never apply this block |
| Disabled button token remap      | 808–844 | `--_btn-*` from `--fallback-*`, again only inside `@supports not`                                   |

`global.css` lines 1–23 are a separate `@supports (color: oklch())` block. That one aliases `--fallback-*` to `--modus-wc-color-*` for browsers that **do** support OKLCH. It is not a Chrome &lt;111 fallback.

On upgrade, **remove** the 569-line v4 Daisy-channel fallback layer. **Replace** Modus-owned behavior with the combined strategy above—not a line-for-line rewrite of the old table.

That removal does not touch modern-browser button colors. The live rules are the rest of `tailwind.css` after the fallback table: color channels around lines 765–805 (`oklch(var(--p))`), then disabled, pressed, and opacity rules from line 846 through the end of the file (1029). Those rules read `--_btn-*`, which is filled from the channel tokens. Port that whole span to `--color-*` and `color-mix()`, and skip only the `@supports not` block at 808–844. Leaving the channel assignments in place after the upgrade paints nothing useful.

### 2.2 Class prefix — breaking public API

Tailwind v4 prefixes must be **lowercase ASCII letters only**. `prefix(modus-wc)` is invalid. Tailwind rejects it with: prefixes must be lowercase ASCII letters (a-z) only. Classes like `modus-wc:flex` are not possible. Uppercase (`modusWc`) is also rejected.

| Strategy                            | Daisy (`btn`)          | Utilities (`flex`)  | Verdict                                                                |
| ----------------------------------- | ---------------------- | ------------------- | ---------------------------------------------------------------------- |
| A. Tailwind `prefix(moduswc)` only  | `moduswc:btn`          | `moduswc:flex`      | Works. Breaks every hyphenated utility string                          |
| B. Daisy `prefix: "modus-wc-"` only | `modus-wc-btn`         | `flex` (unprefixed) | Keeps Daisy names. Unprefixed utilities collide with consumer Tailwind |
| C. Both prefixes                    | `moduswc:modus-wc-btn` | `moduswc:flex`      | Do not do this                                                         |
| D. Stay on Tailwind 3 + DaisyUI 4   | `modus-wc-btn`         | `modus-wc-flex`     | Only way to keep today's strings                                       |

**Recommendation:** strategy A, prefix `moduswc`. Ship as a **major version**. The tag names stay (`modus-wc-button`). The public class strings do not. `customClass`, app CSS, and selectors such as `.modus-wc-flex` and `.modus-wc-w-full` stop matching the published stylesheet. If a product cannot accept that break, do not upgrade.

The major must ship a **migration script**, not only a guide. A changelog table does not scale to every utility and Daisy remap in consumer CSS and markup. Do not ship a runtime shim that emits both prefixes: it spends the §6 bundle budget and still cannot satisfy both class syntaxes.

SCSS inside this repo keeps stable Modus hook classes (`modus-wc-btn`, `modus-wc-btn-filled`). Tailwind/Daisy classes are the `moduswc:*` utilities. Emit both from `*.tailwind.ts` where SCSS still selects the hook. Do not rename SCSS selectors to `moduswc\:btn` — the colon has to be escaped and the hooks are referenced from navbar, content-tree, button-group, and elsewhere.

The script rewrites utility strings (`modus-wc-flex` → `moduswc:flex`, plus the §4.4 Daisy remaps). It must not rewrite SCSS hooks (`modus-wc-btn`, `modus-wc-btn-filled`) or tag names (`modus-wc-button`). A global replace of `modus-wc-` is wrong. Scope, inputs, and what stays out of the spike gates are in §7.

### 2.3 `stencil-tailwind-plugin` v2

|              |                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| v1.x (today) | Tailwind 3 only                                                                                               |
| v2.x         | Tailwind 4. Needs `@tailwindcss/postcss` and TypeScript ≥ 5.8.2. Production is `^5.6.2`, so the spike bumps TypeScript |
| Config       | v2 drops `tailwindConf`. Config is CSS, injected with `injectTailwindConfiguration`                           |

**Stencil ceiling:** [stencil-tailwind-plugin#43](https://github.com/Poimen/stencil-tailwind-plugin/issues/43) — the plugin breaks on `@stencil/core` ≥ 4.39. Stay on ≤ 4.38.x until that issue is fixed. Production is 4.35.3, which is inside that range. Do not bump Stencil in the same change.

**Injection risk:** v2 injects one CSS config into every component compile. A relative `@import './global.css'` in that entry resolves from each component directory, not from `src/styles/`. Plan on a core CSS file with no relative imports, read with `readFileSync` and passed to `injectTailwindConfiguration`. The Wireit CLI entry can stay separate and import `global.css`, `variables.css`, and `fonts.css`. The spike has to show both pipelines emit the same utilities.

---

## 3. Framework changes that drive the work

### Tailwind CSS v4

| Area          | v3 (today)                            | v4 (target)                                                                                                                                   | Modus impact                                                                                                   |
| ------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Configuration | `tailwind.config.ts`                  | CSS-first: `@import "tailwindcss"`, `@theme`, `@plugin`                                                                                       | Retire the JS config as source of truth                                                                        |
| Entry         | `@tailwind base/components/utilities` | `@import "tailwindcss"`                                                                                                                       | Re-validate `@layer base` heading, form, and list overrides. v4 preflight and the default border color changed |
| CLI           | `tailwindcss` package                 | Bin is still `tailwindcss` (from `@tailwindcss/cli`). Do not invoke `@tailwindcss/cli` as a shell command — Wireit/`/bin/sh` will not find it | Update `tailwind:build` and `tailwind:watch`                                                                   |
| PostCSS       | `tailwindcss` plugin                  | `@tailwindcss/postcss`                                                                                                                        | New devDependency for the Stencil plugin                                                                       |
| Prefix        | `prefix: 'modus-wc-'`                 | `prefix(moduswc)` → `moduswc:flex`                                                                                                            | Breaking. See §2.2                                                                                             |
| Content       | `content: [...]` in JS                | `@source`. Default scan is the whole project                                                                                                  | Start from `@import "tailwindcss" source(none)` and an explicit `@source` list. Otherwise Storybook, docs, and `node_modules` inflate `output.css` past the §6 ceiling. Dynamic classes still need `tailwind-themeable.ts` |
| Theme tokens  | `theme.extend`                        | `@theme`                                                                                                                                      | Keep `--modus-wc-*` as the Modus token layer                                                                   |
| `@property`   | Not used for internal utilities       | Shadows, rings, transforms, and gradients declare defaults with `@property`                                                                   | **Blocker.** Browsers ignore `@property` inside shadow roots. See §4.2                                         |
| Upgrade tool  | Manual                                | `npx @tailwindcss/upgrade`                                                                                                                    | Throwaway branch only, after Daisy is removed from the JS config. Review every class rewrite                   |

### DaisyUI v5

| Area            | v4 (today)                                                          | v5 (target)                                                        | Modus impact                                                                                                                           |
| --------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Install         | `plugins: [daisyui]`                                                | `@plugin "daisyui"` in CSS                                         | Remove Daisy from `tailwind.config.ts`                                                                                                 |
| Themes          | JS objects in `modus-modern.ts`, `modus-classic.ts`, `connect.ts`   | `@plugin "daisyui/theme"` for Modern. Other themes are external CSS | Modern is the default compiled theme. Classic, Connect, and community themes load separately. See §4.5 |
| Color variables | `--p`, `--b1`, `oklch(var(--p))`                                    | `--color-primary`, `--color-base-100` (full colors)                | Breaks `tailwind.css`, `global.css` fallbacks, `modus-wc-input-label.scss`, and component SCSS listed in §4.1                          |
| Theme list keys | `darkTheme`, `themeRoot`, `styled`, `base`, `utils`                 | `themes`, `root`, `include` / `exclude`                            | Do **not** map `darkTheme` to `--prefersdark`. See §4.3                                                                                |
| Removed tokens  | `*-focus`, `--animation-btn`, `--btn-focus-scale`, auto `*-content` | Gone. Set `--color-*-content` explicitly                           | Focus and hover stay in Modus SCSS. Reimplement Connect `--btn-focus-scale: 1` in Modus CSS if that product still needs no press-scale |
| Radius          | `--rounded-btn`, `--rounded-badge`, `--rounded-box`, `--border-btn` | `--radius-field`, `--radius-selector`, `--radius-box`, `--border`  | `common.ts`, `modus-classic.ts`, `connect.ts`, and component SCSS in §4.1                                                              |
| Default sizes   | Current density                                                     | Smaller btn, input, select, checkbox, radio, toggle                | Lock `--size-field` and `--size-selector` in every theme                                                                               |
| Prefix          | Inherited Tailwind `modus-wc-`                                      | Daisy has its own `prefix`. Do not stack it on the Tailwind prefix | Tailwind-only prefix: `moduswc:btn`                                                                                                    |
| Class renames   | See §4.4                                                            | Daisy 5 names                                                      | `*.tailwind.ts` + SCSS selectors. Public props stay                                                                                    |

---

## 4. Constraints

### 4.0 Browsers below the `@layer` floor are unsupported

Utilities and Daisy component CSS are emitted inside `@layer`. A browser that does not understand `@layer` drops that whole sheet. The 569-line `@supports not (color: oklch())` block only swaps colors, and only after the sheet has applied. It does not restore layout, utilities, or Daisy classes. Tailwind 4.1's fallbacks rewrite colors, opacity, shadows, and gradients inside that sheet. They do not unwrap `@layer`, expand `:is()`, or rewrite logical properties. Doing that would be a second compiler, and it is out of scope.

`@layer` arrived in Chrome and Edge 99, Firefox 97, and Safari 15.4. That floor does not move in this upgrade. No bugfix commitment and no visual QA below it. Custom elements can still upgrade. Their Tailwind and Daisy styling will not.

Opera and Samsung Internet follow the Chrome version they embed, not their own version number. Chromium Edge uses Chrome's version numbers. Legacy EdgeHTML (Edge 18 and earlier) is below the floor.

| Browser | Tailwind 3, oldest that works | Tailwind 4, oldest that works | Tailwind 3, full | Tailwind 4, full |
| --- | --- | --- | --- | --- |
| Chrome, Edge | 99 | 99 | 111 | 111 |
| Firefox | 97 | 97 | 113 | 128 |
| Safari | 15.4 | 15.4 | 15.4 for color. Hover that uses `color-mix()` needs 16.2, because the hover hex matrix only runs when `oklch()` is missing, and Safari 15.4 already has `oklch()`. | 16.4 |

The Tailwind 4 "full" column is higher for Firefox and Safari because shadows, rings, and gradients use `@property` (Firefox 128, Safari 16.4). Chrome has had `@property` since 85, so Chrome's full line stays at `oklch()` / `color-mix()` (111).

#### Chrome and Edge

| Chrome, Edge | Support on Tailwind 4 | What the fallback covers |
| --- | --- | --- |
| **111+** | Full. Design target. | None required. `oklch()` and `color-mix()` run natively. |
| **99–110** | Degraded. This is the older edge. | `@layer` works, so utilities and Daisy classes apply. There is no `oklch()` or `color-mix()`. Today the hex `--fallback-*` block covers Daisy colors. On Tailwind 4, 4.1 inlines utility colors, shadows, and opacity when the color is static at build time. Daisy theme colors (`--color-primary` and the rest, switched with `data-theme`) stay OKLCH unless Modus hex tokens (`--modus-wc-color-*`) back them per theme. Shadows can differ. Pass means usable, not a pixel match. Spike this once on a real Chrome in this band. |
| **88–98** | Unsupported. | `:is()` exists from 88. `@layer` does not until 99, so the utility and Daisy sheet is discarded. |
| **66–87** | Unsupported. Chrome 66 is in this band. | Same `@layer` drop, plus missing `:is()`, logical properties, flex `gap` (84), and `@property` (85). `adoptedStyleSheets` is also missing below Chrome 73 (the `<style>` path in `inject-daisyui.ts` is the only injection that runs). The OKLCH hex table does not bring utilities back. |

#### Firefox

| Firefox | Support on Tailwind 4 | What the fallback covers |
| --- | --- | --- |
| **128+** | Full. Design target. | None required. `@property`, `oklch()`, and `color-mix()` all exist. |
| **113–127** | Degraded. This band is fine on Tailwind 3 and is not fine on Tailwind 4. | `oklch()` and `color-mix()` work, so theme colors do not need the hex table. `@property` does not, until 128. Tailwind 3 does not use `@property`. Tailwind 4 does, for shadows, rings, and gradients. 4.1 supplies utility fallbacks; those effects can still differ. Daisy-owned chrome is not covered by that fallback. |
| **97–112** | Degraded. Same color gap as Chrome 99–110. | `@layer` works. There is no `oklch()` until 113. Today's hex block covers Daisy colors. On Tailwind 4, use the same Modus hex tokens plus 4.1 for utilities. |
| **Below 97** | Unsupported. | No `@layer`. The utility and Daisy sheet is discarded. |

#### Safari

| Safari | Support on Tailwind 4 | What the fallback covers |
| --- | --- | --- |
| **16.4+** | Full. Design target. | None required. `@property` arrived in 16.4, `color-mix()` in 16.2, `oklch()` and `@layer` in 15.4. |
| **15.4–16.3** | Degraded. This band is closer to full on Tailwind 3. | `@layer` and `oklch()` both exist, so the current hex color block does not run, and Daisy theme colors parse. `color-mix()` is missing until 16.2, and `@property` is missing until 16.4. Tailwind 4.1 is aimed at this Safari: utility colors, opacity, shadows, and gradients get compile-time fallbacks and can still differ. |
| **Below 15.4** | Unsupported. | No `@layer` and no `oklch()`. Same drop as Chrome below 99. |

### 4.1 Old tokens are not only in `tailwind.css`

Color channel usage (`--p`, `--b1`, `oklch(var(--p))`, `--fallback-*`) also shows up in component SCSS, including stepper, card, checkbox, button, tabs, radio, and switch, plus `modus-wc-input-label.scss`.

Radius tokens (`--rounded-btn` and related) are in `common.ts`, `modus-classic.ts`, `connect.ts`, and component SCSS including button, card, chip, switch, slider, date, modal, panel, bottom-sheet, and profile-menu.

Phase 2 has to touch those files. Prefer **`var(--modus-wc-color-*)`** (and semantic theme aliases) for colors in SCSS; add narrow `@supports not` only where Daisy utilities do not reach. Deleting the `tailwind.css` fallback blocks is not the whole token migration.

### 4.2 Shadow DOM and `@property` (spike blocker)

`inject-daisyui.ts` installs `output.css` with `adoptedStyleSheets` on the shadow root (with a `<style>` fallback). Tailwind 4 registers internal variables for shadow, ring, transform, and gradient utilities with `@property`. Browsers ignore `@property` inside a shadow root, so those utilities can compute as unset unless the defaults are also set on `:host`.

This is a **pass/fail check** for the spike, not a note for later:

- Render a control that uses shadow, ring, or transform utilities inside a real shadow root.
- Confirm the same control in the React, Angular, and Vue test apps.
- If it fails, either redeclare the defaults on `:host` or stop using those utilities inside shadow CSS. Do not ship the upgrade with broken elevation or focus rings.

### 4.3 Dark theme is already owned by `theme.store.ts`

DaisyUI 5 can define as many named themes as we want. Six `@plugin "daisyui/theme"` blocks still work, and `data-theme` still selects one of them. That is the same contract as today: `modus-modern-light`, `modus-modern-dark`, and the classic and connect pairs.

`prefersdark: true` is a different feature. It marks **one** theme as the operating-system dark theme, and it applies only when the page has not set `data-theme`. It cannot say "this user is on Classic, so the dark palette is `modus-classic-dark`."

`theme.store.ts` resolves `mode` from explicit config, then stored `modus-theme-config`, then `matchMedia('(prefers-color-scheme: dark)')`. `watchSystemTheme()` updates mode only when `preferred-mode` is absent from `localStorage`. `theme-provider.tsx` writes the attribute the CSS actually uses:

```ts
root.setAttribute('data-theme', `${theme}-${mode}`);
```

#### Team discussion — store vs Daisy `prefersdark`

| Behavior | Theme store (today) | DaisyUI `prefersdark` only |
| -------- | ------------------- | -------------------------- |
| Modern, Classic, and Connect | The `theme` half of `data-theme`. Six themes stay | Collapses to one light theme and one dark theme |
| User picks light while the OS is dark | `data-theme="modus-modern-light"` stays | Only if something still sets `data-theme`, which is the store again |
| User picks "follow the OS" | `watchSystemTheme()` updates the attribute | Free, in CSS, with no JavaScript |
| Theme before JavaScript runs | Needs the FOUC script that sets `data-theme` | The media query applies as soon as the CSS loads, for that one dark theme |
| Stored preference | `modus-theme-config` survives the next visit | None. The next visit follows the OS |
| Shadow DOM | The ancestor `data-theme` is visible to adopted stylesheets | Same, if the theme CSS is in the adopted sheet. The media query still cannot express six themes |

The OS-following media query is the only thing DaisyUI does better: no flash while the store initializes, and no listener to keep in sync. It only works for a single light theme plus a single dark theme.

A hybrid (family on `data-theme="modus-modern"`, mode from a media query) is not what `prefersdark` does. That flag is one theme for the whole page. Per-family dark tokens would be our own `@media (prefers-color-scheme: dark)` blocks, and the store would still be required the moment a user overrides the OS.

**Recommendation for the discussion:** keep the store and the six named themes. Do not add `--prefersdark`. It would switch themes beside the store and can fight a user who picked light or dark explicitly. Reopen this only if the product drops Classic and Connect, or drops explicit light/dark in favor of "always follow the OS."

### 4.4 Class renames vs classes whose names survive

Renames already wired in `*.tailwind.ts` / SCSS. Public props stay (`bordered`, `padding="compact"`, `tabStyle`). Only the internal Daisy class changes.

| Current prefixed class                                            | DaisyUI 5                                                       |
| ----------------------------------------------------------------- | --------------------------------------------------------------- |
| `modus-wc-input-bordered`, `select-bordered`, `textarea-bordered` | Removed. Border is the default. Borderless uses `*-ghost`       |
| `modus-wc-card-bordered`                                          | `card-border`                                                   |
| `modus-wc-card-compact`                                           | `card-sm` (this is a size, not a padding alias — check density) |
| `modus-wc-tabs-bordered` / `lifted` / `boxed`                     | `tabs-border` / `tabs-lift` / `tabs-box`                        |
| Menu `disabled` / `active` / `focus`                              | `menu-disabled` / `menu-active` / `menu-focus`                  |

These names still exist in DaisyUI 5, but size or chrome changed. They are visual-QA items, not rename items:

- `modus-wc-tab-active`
- `modus-wc-toggle-*` sizes
- `modus-wc-mask-*`
- `modus-wc-join-item`
- Badge sizes (`modus-wc-badge-xs` through `lg`)

### 4.5 `modus-wc-variables.css` and where themes live

`package.json` exports `./modus-wc-variables.css`, and the Stencil build copies it to `dist`. Today the file publishes every built-in theme, including DaisyUI v4 channels (`--p`, `--b1`, `--rounded-btn`, and the rest). Consumers may read them.

The name change is a **breaking change**, next to the class prefix. The break is the **value shape**, not only the name. v4 `--p` is an OKLCH channel (`48.6221% 0.128075 247.07`). Consumers write `oklch(var(--p) / 0.2)`. v5 `--color-primary` is a full color (`#0063a3` or any CSS color). Renaming the custom property and leaving the `oklch(var(--…))` wrapper produces invalid CSS. The replacement for channel alpha is `color-mix()`. Do not silently rename tokens inside a file consumers already import.

That same value-shape change is what the community-themes work was blocked on. DaisyUI v4 compiled hex into channels at build time, so a consumer could not add a theme without forking the library and rebuilding. DaisyUI v5 takes a full color in CSS. An external stylesheet can define a theme with no oklch math and no Tailwind rebuild:

```css
[data-theme='acme-light']:root {
  --color-primary: #0063a3;
  --color-base-100: #ffffff;
  --modus-wc-color-primary: #0063a3;
  --modus-wc-color-base-page: #ffffff;
}
```

**Direction:** change CSS generation instead of porting all six themes into the default bundle.

- **Modern** (light and dark) is the default theme compiled into `modus-wc-styles.css` and `modus-wc-variables.css`.
- **Classic, Connect, and community themes** are external CSS. The app loads that file and the theme store still sets `data-theme`. `ThemeName` has to accept names outside the current closed union.
- The public contract is the curated `--modus-wc-*` semantic tokens plus the Daisy v5 `--color-*` names components actually read. Stop publishing the full Daisy channel dump for every theme. Primitives (`--modus-wc-color-trimble-blue` and the raw palette) stay internal.
- Connect moving out of the core build is the proof that an external theme works. Classic can follow the same path. The community-themes research currently keeps Classic in the box; this upgrade is the point to decide that, because v5 removes the reason to generate channels inside the library.

`generate-variables-css.js` then emits the Modern v5 tokens only, or stops copying Daisy channels entirely and documents the semantic set. The §6 gate that sizes `output.css` with all six themes is the old assumption. Re-measure against Modern in the library CSS, and treat extra themes as separate stylesheets that must not be required for the default bundle.

This does not replace §4.3. Six names can still exist. Only Modern is compiled in. The store still selects the active name. `prefersdark` still does not.

### 4.6 Everything else that moves

- 60 snapshots will change. Refresh them after visual sign-off, not before.
- React, Angular, Vue, Blazor, MAUI, and Storybook all load `modus-wc-styles.css`. The shadow-root check belongs in the React, Angular, and Vue test apps (real custom elements in CI). Blazor and MAUI are a Phase 4 smoke of that same stylesheet, not a second spike gate.
- Consumers who use Tailwind next to Modus move to Tailwind 4 with this major. Do not document Tailwind 3 as a supported consumer toolchain. `moduswc:` is a Tailwind 4 prefix, and a Tailwind 3 build will not emit it or honor `@apply moduswc:flex`. Precompiled `modus-wc-styles.css` means an app can render Modus without running Tailwind at all. It does not mean a Tailwind 3 app is a supported way to extend those classes.
- `@tailwindcss/typography` is only referenced from `tailwind.config.ts` (no `prose` usage found). Drop it unless a consumer story needs it. v4 would load it with `@plugin`.
- Unlayered Daisy `ul` / `li` rules can still beat consumer utilities. Re-test that cascade after the upgrade.
- `npx @tailwindcss/upgrade` is unsafe on this repo until Daisy is out of the JS config. Run it on a throwaway branch and diff by hand.

---

## 5. Recommended approach

- One major version. No half upgrade.
- Prefix: `prefix(moduswc)`, Daisy prefix empty.
- Dual class on components: `moduswc:*` for Daisy/Tailwind, `modus-wc-*` hooks for existing SCSS until those selectors are deliberately rewritten.
- Themes: Modern light and dark ship in the library CSS. Classic, Connect, and community themes are external stylesheets selected with `data-theme`. See §4.5.
- Browser: **Tailwind 4.1+**. Full support is Chrome and Edge 111+, Safari 16.4+, Firefox 128+. The older edge matches Tailwind 3: Chrome and Edge 99, Firefox 97, Safari 15.4, all degraded (§4.0). Below that `@layer` floor is unsupported. Remove v3’s 569-line Daisy-channel fallbacks; add Modus hex backstops for the bands that lack `oklch()` (Chrome and Edge 99–110, Firefox 97–112).
- Stencil: plugin 2.x, TypeScript ≥ 5.8.2, `@stencil/core` ≤ 4.38 until issue 43 is fixed.
- Bundle budget and rollback plan are part of the decision, not follow-up work. See §6 and §12.
- Phases are pull-request slices on the major branch. Publish once, in Phase 5, after every component emits `moduswc:` utilities. A release that migrates half the catalog leaves the other half unstyled.

---

## 6. Pass / fail for the spike

Write these down before implementation. Proposed numbers below are the gates to lock in Phase 0; change them in the ADR, not ad hoc during the spike.

### Measured v3 baseline

Recorded from `origin/main` at `d02eeeed7` (v1.19.0) after `tailwindcss -i src/styles/tailwind.css -o src/styles/output.css --minify`. Gzip is `gzip -9` equivalent (`zlib.gzipSync`).

| Artifact                   | Uncompressed             | Gzipped                |
| -------------------------- | ------------------------ | ---------------------- |
| `src/styles/output.css`    | 161,556 bytes (157.8 KB) | 22,394 bytes (21.9 KB) |
| `dist/modus-wc-styles.css` | 161,556 bytes (157.8 KB) | 22,394 bytes (21.9 KB) |

`dist/modus-wc-styles.css` is a straight copy of `output.css` in `stencil.config.ts`, so the two files match byte for byte.

`modus-wc-button` is `shadow: false`, so the button does not adopt a stylesheet of its own. A consumer shadow root that calls `ensureDaisyUIInShadow(root)` (the default path, not the container path) adopts one shared sheet: `output.css` + `global.css` + `modus-icons.css`.

| Adopted sheet (default path)                    | Uncompressed             | Gzipped                |
| ----------------------------------------------- | ------------------------ | ---------------------- |
| `output.css` + `global.css` + `modus-icons.css` | 169,194 bytes (165.2 KB) | 23,745 bytes (23.2 KB) |

The minified production file is 157.8 KB. Compare the v4 build to this table, not to a partial theme or a subset of Daisy families.

### Gates

| Gate             | Pass                                                                                                                                                                                                                    | Fail                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Bundle           | Uncompressed `output.css` ≤ **185,789 bytes** and gzipped ≤ **25,753 bytes** (115% of the v3 baseline), after all six themes are included                                                                               | Over either ceiling                                                                                                |
| Shadow injection | Default adopted sheet ≤ **194,573 bytes** uncompressed and ≤ **27,307 bytes** gzipped (115% of 169,194 / 23,745). `@property` utilities still paint inside a shadow root, or a `:host` fallback restores them           | Over either ceiling, the sheet is injected twice, or shadow / ring / transform utilities break with no `:host` fix |
| Frameworks       | Button, text input, card, tabs, and menu render with the correct theme in the **React, Angular, and Vue** test apps, including a shadow-root host                                                                       | Any of those apps loses theme, prefix, or elevation                                                                |
| Visual           | On the stories in §7, no unintended layout shift. Where a pixel tool exists, changed pixels ≤ **2%** per story after an allowlist of intentional Daisy 5 deltas. Without a pixel tool, design sign-off on that same set | Unreviewed color, size, or radius changes, especially disabled buttons and `card-sm` vs today's compact            |
| Themes           | All six themes come from one script over the TS theme files. `data-theme="modus-modern-dark"` (and the other five names) still switches via `theme-provider`                                                            | Hand-copied CSS, or `--prefersdark` fighting the store                                                             |
| Toolchain        | `tailwindcss` CLI and `stencil build` both succeed. Prefix is `moduswc`. No doubled prefix                                                                                                                              | Plugin cannot see JSX classes, Stencil ≥ 4.39 is required, or `npm start` / Wireit fails                           |
| Rollback         | The spike PR points at §12 (revert path, last 1.x pin, and that `output.css` is generated)                                                                                                                              | No rollback notes, or a plan that depends on `npm unpublish` or a dual-prefix stylesheet                           |

Kill the upgrade if the shadow-root `@property` check fails with no practical `:host` fix, if the bundle gate fails after a real six-theme build, or if Support rejects the browser floor.

---

## 7. Spike scope

Not a full catalog migration. One component from each high-risk group, all six themes generated, measured, and checked in real framework apps.

| Component  | What to prove                                                                                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Button     | Disabled, pressed, filled / outline / borderless. Do not try to keep Chrome &lt;111. Port the disabled-color rules that sit outside the `@supports not` blocks. Deleting the fallback layer does not change those rules; leaving them on v4 channel tokens will |
| Text input | `bordered` (Daisy default border) and borderless (`input-ghost`)                                                                                                           |
| Card       | Today's `padding="compact"` vs Daisy `card-sm` — density must stay a Modus decision                                                                                        |
| Tabs       | `bordered` / `lifted` / `boxed` remaps, plus `tab-active` chrome (name survives, style may not)                                                                            |
| Menu       | `menu-disabled` / `menu-active` / `menu-focus`                                                                                                                             |

Also screenshot, even if those components are not fully migrated yet: toggle sizes, `mask-*`, `join-item`, badge sizes.

Theme generation: a script reads `modus-modern.ts`, `modus-classic.ts`, and `connect.ts` and writes the six `@plugin "daisyui/theme"` blocks (`--color-*`, `--radius-*`, `--size-field`, `--size-selector`). Do not maintain a second hand-written copy.

### Future scope — consumer migration toolkit

Not a §6 gate. The spike proves the new class strings. The toolkit ships with the major (Phase 5), once the Daisy remap table is stable. A spike may prototype the parser on the five components above. It must not block the toolchain gates.

The toolkit is a script (CLI) plus the migration guide. It rewrites consumer source. It does not patch `modus-wc-styles.css` at runtime.

| Rewrite | Leave unchanged |
| ------- | --------------- |
| Utilities: `modus-wc-flex` → `moduswc:flex`, including `customClass` and `class` / `className` strings | Tag names: `modus-wc-button` |
| Daisy remaps from §4.4 (`modus-wc-card-bordered` → `moduswc:card-border`, and the rest) | SCSS hooks that are not utilities: `modus-wc-btn`, `modus-wc-btn-filled` |
| CSS selectors that target those utilities (`.modus-wc-w-full`, `[class~="modus-wc-flex"]`) | `--modus-wc-*` custom properties that are not Daisy channel renames (those are the variables-file guide, not this script) |

Inputs: `.css`, `.scss`, `.html`, `.tsx`, `.jsx`, `.vue`, `.ts` string literals that are clearly class lists. Report every hit it refuses (dynamic concatenation, a class that is both a hook and a utility) instead of guessing. Dry-run by default. A global replace of `modus-wc-` is a failed toolkit.

---

## 8. Phased plan

For copy-paste **agent prompts** and per-phase **verification checklists** (Phases 1–5), see [Modus - Tailwind 4 and DaisyUI 5 - Build sequence.md](./Modus%20-%20Tailwind%204%20and%20DaisyUI%205%20-%20Build%20sequence.md).

### Phase 0 — Decision (1–2 days)

1. Browser floor from §4.0: full support Chrome and Edge 111+ / Safari 16.4+ / Firefox 128+. Older edge Chrome and Edge 99, Firefox 97, Safari 15.4, degraded. Below the `@layer` floor, including Chrome 66, is unsupported.
2. Prefix `moduswc` and a major version, or stop.
3. Lock the §6 budgets (115% bundle, 2% pixels or design sign-off).
4. Confirm `customClass` Tailwind utilities are a supported public API that will break.
5. Write the ADR. Rollback is §12, not a sentence in the ADR.

Exit: ADR merged or explicitly accepted. No Phase 1 code without it.

### Phase 1 — Spike (1–2 weeks, draft PR)

1. Reconfirm the §6 v3 size baseline if `tailwind.css` on `main` has moved since `d02eeeed7`. Do not invent a new ceiling during the spike.
2. Keep TypeScript ≥ 5.8.2, Tailwind 4, `@tailwindcss/cli`, `@tailwindcss/postcss`, DaisyUI 5, `stencil-tailwind-plugin` 2, Stencil ≤ 4.38.
3. Generate all six themes from the TS files.
4. Wire the CLI with the `tailwindcss` bin, and the Stencil plugin with `injectTailwindConfiguration` (no relative `@import` in the injected CSS).
5. Migrate button, text input, card, tabs, and menu using the dual-class pattern.
6. Run the §6 gates, including React, Angular, and Vue, and the shadow `@property` check.
7. Publish the size table and screenshots on the PR. Do not commit image files into the repo.

Nothing in this phase is a pass until every §6 gate is met. A compile that succeeds with one theme, or without the framework apps, is not evidence for the migration.

### Phase 2 — Tokens and variables (1–2 weeks)

1. Land the generated themes as the only theme source.
2. Map removed `*-focus` / `--btn-focus-scale` behavior into Modus SCSS where products still need it.
3. Lock `--size-field` and `--size-selector`.
4. Remove the 569-line v4 `@supports not` layer. Port modern rules (channels ~765–805, disabled/pressed ~846–end) to `--color-*` / `color-mix()`. Add **generated or mapped** `--modus-wc-color-*` fallbacks for Modus-owned surfaces per §2.1. Update `global.css` and every SCSS file in §4.1 to use semantic Modus tokens with `@supports not` only where needed.
5. Change `generate-variables-css.js` per §4.5: Modern only in the published variables file, v5 full-color names (`--color-primary`, `--radius-field`). Document the break (`--p` channel → full color). `oklch(var(--p) / <alpha>)` does not survive a rename. Classic, Connect, and community themes are external CSS, not more rows in that file.
6. Rewrite `docs/custom-themes.md`.

### Phase 3 — Remaining components (2–4 weeks)

Component by component: remaining buttons and groups, forms, then the rest of the catalog.

1. Update `*.tailwind.ts` and `tailwind-themeable.ts` for `moduswc:` plus Daisy remaps. Keep SCSS hooks until selectors are updated.
2. `bordered={false}` → `*-ghost` where Daisy removed `*-bordered`.
3. Re-check `join`. DaisyUI 4 already replaced `btn-group` with `join`, and Modus uses `join`. Confirm DaisyUI 5 did not change the join classes Modus emits.
4. Visual pass: sizes, variants, disabled, pressed, six themes, RTL.
5. Explicit QA for classes whose names survived: `tab-active`, toggle sizes, `mask-*`, `join-item`, badge sizes.

Highest risk remains button disabled states, form bordered vs ghost, tabs, card compact vs `card-sm`, and menu.

### Phase 4 — Tooling and consumers (1 week)

1. Wireit `files` / `output` for the new CSS graph.
2. Storybook still consumes the Stencil CSS copy unless that pipeline is intentionally changed.
3. Framework test apps: styles load, no unprefixed preflight leak, shadow roots still theme.
4. Snapshot refresh only after visual sign-off.

### Phase 5 — Docs and release (1 week)

Migration guide must include:

1. Prefix: `modus-wc-flex` → `moduswc:flex` (and the same for every utility).
2. Daisy class remaps from §4.4.
3. `modus-wc-variables.css` token renames.
4. Browser floor.
5. Consumers who use Tailwind upgrade to Tailwind 4. Tailwind 3 is not a supported way to extend `moduswc:` classes. Apps that only consume `modus-wc-styles.css` and do not run Tailwind are unaffected.
6. The migration script from §7 (future scope), published with the major. Dry-run, remap table, and a fixture that proves hooks and tag names are left alone.

Also: changelog, semver major, Cursor rules that still mention Daisy v4 channels or hyphenated utilities.

---

## 9. Effort

| Work                                      | Calendar    | Notes                                  |
| ----------------------------------------- | ----------- | -------------------------------------- |
| Spike                                 | 1–2 weeks   | Can fail the §6 gates                  |
| Implementation                            | 4–6 weeks   | One engineer who knows this CSS stack  |
| Visual QA                                 | 2–3 weeks   | 50+ components × 6 themes; cannot skip |
| Docs / major                              | ~1 week     | Includes the variables-file break      |
| Total                                     | ~2–3 months | ~8–12 engineer-weeks                   |

The class string is the product. This is not a dependency bump.

---

## 10. What not to do

- Upgrade DaisyUI 5 on Tailwind 3.
- Upgrade Tailwind 4 and leave DaisyUI 4.
- Run `@tailwindcss/upgrade` on `main` without isolating Daisy and reviewing every rewrite.
- Stack a Daisy `modus-wc-` prefix on the Tailwind prefix.
- Use `prefix(modus-wc)` or `modusWc`. Tailwind rejects both.
- Map `darkTheme` to `--prefersdark` and ignore `theme.store.ts`.
- Bump Stencil to ≥ 4.39 in the same change.
- Refresh snapshots first and fix visuals later.
- Hand-maintain the v3 569-line `--fallback-p` / Daisy-channel table on v5. Use theme-driven `--modus-wc-color-*` backstops instead (§2.1).
- Pin Tailwind 4.0 when 4.1 fallbacks are required for the degraded bands in §4.0.
- Promise any browser below the `@layer` floor (Chrome and Edge below 99, Firefox below 97, Safari below 15.4), including Chrome 66. The utility sheet is dropped there, and we are not building a second compiler to unwrap it (§4.0).
- Upgrade without a rollback plan and a bundle-size budget.
- Publish a major that still emits `modus-wc-*` utilities from unmigrated components.
- Roll back with `npm unpublish`, or by shipping both prefixes in one stylesheet.
- Global-replace `modus-wc-` in consumer apps. That rewrites hooks and tag names along with utilities.
- Document Tailwind 3 as a supported consumer of the Tailwind 4 stylesheet.

---

## 11. Where to open pull requests

Open spike and migration PRs on `trimble-oss/modus-wc-2.0`. Screenshots, theme switches, and framework-app review need to stay on the repository that will ship the major.

Use **draft** until the §6 gates pass. Put screenshots in the PR conversation (GitHub-hosted images). Do not commit them under `.github/pr-assets` or similar.

---

## 12. Rollback

Rollback is a release decision. It is not a feature flag. The prefix and the token value shape live in the published CSS. One build cannot serve `modus-wc-flex` and `moduswc:flex` without paying for both, and that fails the §6 budget. Do not plan on `npm unpublish`.

### Before the major is published

| State | What to do |
| ----- | ---------- |
| Spike PR, not merged | Close it. `main` stays on Tailwind 3.4.17 and DaisyUI 4.12.24. |
| Merged to `main`, not tagged | Revert the merge commit (`git revert -m 1`). The revert restores the v3 lockfile (`tailwindcss@3.4.17`, `daisyui@4.12.24`, `stencil-tailwind-plugin@1.8.0`, TypeScript 5.6). Rebuild. Do not hand-edit `output.css` (gitignored) or `dist/`. |

`modus-wc-variables.css` is tracked and regenerated by the Stencil build. The revert has to restore the v4 channel tokens (`--p`, `--rounded-btn`). A v5 variables file left next to a v3 lockfile is a broken release candidate.

Cut the migration as one merge commit, or a short stack that merges as one, with no unrelated features. That is what makes the revert real.

`data-theme` names and `modus-theme-config` do not change in this plan, so a stored theme preference survives a revert. Component props (`bordered`, `padding`, `tabStyle`) also stay.

### After the major is published

Consumers roll back by pinning the last 1.x release and the matching framework package. Record that pin in the migration guide before publish. Today the pin is `1.19.0`, plus the React, Angular, and Vue packages built from that same version (`@trimble-oss/moduswebcomponents-react@1.19.0-react19`, and the Angular and Vue dist-tags for 1.19.0). A 2.x stylesheet with a 1.x component build, or the reverse, mixes class strings and tokens.

Keep a `release/1.x` branch at that tag for patches. Do not backport Tailwind 4 onto it.

| Failure | Response |
| ------- | -------- |
| A token, a density choice, or one component looks wrong, and the fix does not change the class string again | Fix forward on the major. |
| Shadow `@property` is still broken, the published CSS is over either §6 ceiling, or Support rejects the browser floor | Stop further 2.x feature work. Tell consumers to pin 1.x. The structural fix is a later release, not an unpublish. |
| A product rewrote `customClass` to `moduswc:*` and then pins 1.x | They revert those strings, and any `color-mix()` or full-color variables they wrote against v5. On 1.x, channel alpha is `oklch(var(--p) / <alpha>)`. |

There is no partial rollback. Tailwind 4 without DaisyUI 5 does not compile. DaisyUI 5 without Tailwind 4 does not compile. Reverting one component to `modus-wc-btn-primary` while the stylesheet is `moduswc:` leaves that component unstyled.

### How we notice

- Disabled buttons, card density (`card-sm` versus today's compact), or focus rings and elevation inside a shadow root.
- `modus-wc-styles.css` over either §6 ceiling.
- Reports from Chrome &lt;111, Safari &lt;16.4, or Firefox &lt;128.
- The React, Angular, or Vue test apps lose theme or prefix.

Forward-fix is the default through the first minor after the major. A structural failure (the kill list in §6) is a pin to 1.x, agreed by the engineer who owns the major and Support.

---

## References

- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4)
- [DaisyUI v5 upgrade](https://daisyui.com/docs/v5/?lang=en)
- [Tailwind CSS v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide)
- [stencil-tailwind-plugin issue 43](https://github.com/Poimen/stencil-tailwind-plugin/issues/43)
