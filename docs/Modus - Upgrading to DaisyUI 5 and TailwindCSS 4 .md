# Proposal

# Upgrading DaisyUI 5 and Tailwind 4 Research

Research into upgrading to DaisyUI 5 and Tailwind 4; current state, relevant changes, constraints and how to proceed.

---

## 1\. Current State

* Tailwind: `3.4.17` version  
* DaisyUI: `4.12.13` version as a JS plugin in `tailwind.config.ts`.  
* Prefix: currently we use the prefix `‘modus-wc-’` like `modus-wc-btn`, `modus-wc-flex`  
* Themes: we use 6 themes as JS Objects: (modern | classic | connect) x light / dark  
* Pipelines: Two: Wireit CLI (`tailwindcss -i … -o output.css`) and `stencil-tailwind-plugin` 1.8.0  
* Public CSS: `output.css` → `dist/modus-wc-styles.css` \+ embedded into shadow via `ensureDaisyUIInShadow`  
* Class mapping: \~40 `*.tailwind.ts` files \+ `tailwind-themeable.ts` safelist  
* Theme tokens in CSS: Daisy v4 channels: `oklch(var(--p))`, `--fallback-p`, Chrome \<111 blocks  
* Tests: 100% coverage, 56 snapshot files

**Scope rule:** DaisyUI 5 requires Tailwind 4\. DaisyUI 4 is a Tailwind 3 plugin. Upgrade both together as one atomic change.

## 2\. Impact and how to proceed

***See Relevant changes tab to more context.***

**1\. Prefix is the make-or-break public API**  
v3: `modus-wc-flex, hover:modus-wc-bg-primary`  
v4: prefixes are variants: `modus-wc:flex, modus-wc:hover:bg-primary`  
DaisyUI 5 has a separate prefix. Combining both incorrectly yields `modus-wc:modus-wc-btn`.

| Strategy | Daisy classes (btn) | Utilities (flex) | Verdict |
| ----- | ----- | ----- | ----- |
| A. Tailwind `prefix(modus-wc)` only | `modus-wc:btn` | `modus-wc:flex` | Consistent namespace; breaks every class string |
| B. Daisy `prefix: "modus-wc-`" only | `modus-wc-btn` | `flex` (unprefixed) | Preserves Daisy names; pollutes consumer Tailwind |
| C. Both prefixes | `modus-wc:modus-wc-btn` | `modus-wc:flex` | Do not do this |
| D. Stay on v3/v4 | `modus-wc-btn` | `modus-wc-flex` | Only way to keep today’s strings |

Recommendation: Adopt strategy A (`modus-wc:` everywhere). Do not try to preserve hyphenated prefixes — Tailwind will not generate `modus-wc-flex` anymore.  
If a product cannot accept a class-name break, **do not upgrade**.

**2\. \`stencil-tailwind-plugin\` is a hard gate**  
v1.x (current) → Tailwind 3 only  
v2.x → Tailwind 4; requires `@tailwindcss/postcss` ≥ 4.1.1, **TypeScript ≥ 5.8.2** (repo is `^5.6.2`)  
v2 drops `tailwindConf` (the JS config you pass today). Config moves into CSS (`injectTailwindConfiguration`).

**Blocker:** plugin [issue \#43](https://github.com/Poimen/stencil-tailwind-plugin/issues/43) — broken on `@stencil/core` ≥ 4.39.0. You are on `^4.35.3` today. Do not bump Stencil past 4.38.x in the same PR until the plugin is patched.

### **3\. Dual CSS pipeline must stay in lockstep**

1. CLI → `src/styles/output.css` → `embed-css.js` → `css-content.ts` (shadow injection) and `dist/modus-wc-styles.css`  
2. Stencil plugin → per-component class processing during `stencil build`

v4 CLI is a new package: `@tailwindcss/cli`. Wireit still lists `tailwind.config.js` while the file is `tailwind.config.ts` — fix that during the move.  
`npx @tailwindcss/upgrade` is unsafe to run blindly here: it rewrites prefixes and templates. Remove Daisy from the JS config first, then run it on a throwaway branch and diff by hand.

### **4\. Theme system is a rewrite, not a port**

Today, themes are JS objects consumed by Daisy’s plugin `(primary, primary-focus, --rounded-btn, --animation-btn`).

DaisyUI 5:

* Config lives in CSS: `@plugin "daisyui"` \+ `@plugin "daisyui/theme" { name: "modus-modern-light"; … }`  
* Color vars: `--p` → `--color-primary` (full colors, not OKLCH channels)  
* Radius: `--rounded-btn` / `--tab-radius` → `--radius-field; --rounded-badge` → `--radius-selector; --rounded-box → --radius-box`  
* Removed: `*-focus, --animation-btn, --btn-focus-scale,` auto `*-content` generation  
* `darkTheme` → `--prefersdark; themeRoot` → `root; styled / base / utils` → `include / exclude`

`docs/custom-themes.md` and the theme TS files become obsolete in their current form.

### **5\. Chrome \<111 fallbacks become a product decision**

`tailwind.css` has a large `@supports not (color: oklch())` layer (`--fallback-p`, hover hex matrices, `oklch(var(--p) / 1)` on disabled buttons). That matches Daisy 4 channel tokens.  
Daisy 5 stores complete colors in `--color-primary. oklch(var(--p) / 1)` stops working. Opacity uses `color-mix()`.  
Either:

* Drop Chrome \<111 (and document the new floor), delete \~600 lines of fallbacks, or  
* Rewrite fallbacks against `--color-*` / `--fallback-*` — high cost, easy to get wrong

Staff recommendation: raise the browser floor and delete the fallbacks. Keeping them is a second project.

### **6\. Daisy class remaps you actually use**

These are wired in `*.tailwind.ts` / SCSS today:

| Current (prefixed) | Daisy 5 |
| :---- | :---- |
| `modus-wc-input-bordered / select-bordered / textarea-bordered` | Removed — bordered is default; ghost \= borderless |
| `modus-wc-card-bordered` | `card-border` |
| `modus-wc-card-compact` | `card-sm` (collides with size) |
| `modus-wc-tabs-bordered / lifted / boxed` | `tabs-border / tabs-lift / tabs-box` |
| `menu disabled / active / focus` | `menu-disabled / menu-active / menu-focus` |

Public props (`bordered, padding="compact"`, `tabStyle="bordered"`) should stay. Only the internal Daisy class should change, plus SCSS selectors.  
Also: Daisy 5 shrinks default `btn / input / select / checkbox / radio / toggle`. Lock `--size-field` and `--size-selector` in every Modus theme or visual QA will fail across the catalog.

### **7\. Preflight, layers, and consumer cascade**

`src/styles/tailwind.css` replaces `@tailwind base/components/utilities` with `@import "tailwindcss"`. Your `@layer base` heading/form/list overrides must be re-validated — v4 preflight and default border color changed.  
Consumer pitfalls you already document (unlayered Daisy `ul/li` beating Tailwind utilities) may change with v4 layers. Re-test that after upgrading; it might get better or worse.  
`@tailwindcss/typography` is only in `tailwind.config.ts` (no `prose` usage found). Confirm you still need it; v4 loads it via `@plugin`.

### **8\. Downstream blast radius**

* 56 snapshots will churn  
* Shadow injection ships the full `output.css` into consumer shadow roots — watch bundle size (Daisy 5 is smaller; Tailwind 4 \+ prefix \+ six themes may not be)  
* React / Angular / Vue / Blazor / Storybook all consume `modus-wc-styles.css`  
* Agent rules and MCP examples use v3-style classes (`bg-(--modus-wc-color-base-page)` is already v4-ish in *app* docs, but this *library* still generates v3 prefixed utilities)  
* `customClass` on hosts is a consumer API: anyone passing `modus-wc-flex / modus-wc-w-full` breaks unless you major-version and publish a migration table

## 3\. Recommended approach

Ship as one major. Do not half-upgrade. Do not keep `tailwind.config.ts` as the source of truth.  
Prefix: Tailwind `prefix(modus-wc)` \+ Daisy `prefix` empty → `modus-wc:btn`, `modus-wc:flex`.  
Themes: CSS `@plugin "daisyui/theme"` per theme; TS files become optional generators or go away. Keep `data-theme="modus-modern-light"` (that contract can stay).  
Browser floor: drop Chrome \<111 oklch fallbacks unless Support explicitly requires them.  
Stencil: plugin 2.x \+ TypeScript ≥ 5.8.2; freeze Stencil \< 4.39 until the plugin issue is resolved.  
Classes: keep Modus props stable; remap internal Daisy classes; rewrite SCSS that targets old names.

## 4\. Phased plan

### **Phase 0 — Decision (1–2 days)**

Lock with design \+ product:

1. Major version vs “try to keep class strings” (if the latter: stop).  
2. Browser floor (`oklch` / `color-mix`).  
3. Whether `customClass` with Tailwind utilities is supported public API.

Exit: written ADR.

### **Phase 1 — Spike, throwaway branch (1–2 weeks)**

Do not merge. Prove the toolchain:

1. Bump TypeScript to ≥ 5.8.2.  
2. Install `tailwindcss@4`, `@tailwindcss/cli`, `@tailwindcss/postcss`, `daisyui@5`, `stencil-tailwind-plugin@2`.  
3. Replace `tailwind.css` directives with:

```css
@import "tailwindcss" prefix(modus-wc);
@plugin "@tailwindcss/typography"; /* only if still needed */
@plugin "daisyui" {
 themes: false;
 logs: false;
 root: ":root";
}
@plugin "daisyui/theme" {
 name: "modus-modern-light";
 default: true;
 color-scheme: light;
 --color-primary: #0063a3;
 /* …full token set */
}

```

4. Point Wireit at `@tailwindcss/cli`.  
5. Rewire `stencil.config.ts` (drop `tailwindConf`; use CSS-first inject).  
6. Compile one theme \+ button / input / card / tabs.  
7. Measure `output.css` size vs today; inject into a shadow root; check Storybook.

Kill criteria: plugin cannot process Stencil JSX, prefix doubles, or themes do not apply via `data-theme`.

### **Phase 2 — Theme \+ token migration (1–2 weeks)**

* Port all 6 themes; map `*-focus` into hover/active in Modus SCSS (Daisy will not do it).  
* Map radius / border / size tokens (`--size-field` to preserve control height).  
* Replace `oklch(var(--p)`) / `--fallback-p` / `--fallback-b1` in `tailwind.css`, `global.css, modus-wc-input-label.scss`, button disabled rules.  
* Update `generate-variables-css.js` if it assumes Daisy v4 names.  
* Rewrite `docs/custom-themes.md`.

### **Phase 3 — Class and component pass (2–4 weeks)**

Work component-by-component (buttons → forms → tabs/card → menu → rest):

* Update `*.tailwind.ts` and `tailwind-themeable.ts` for v4 prefix \+ Daisy remaps.  
* Fix SCSS selectors (`input-bordered`, `tabs-lifted`, `card-compact`, …).  
* Re-map `bordered={false}` → Daisy `*-ghost` where needed.  
* Re-check `join` / button-group (v4 `btn-group` is gone; you already use `join`).  
* Visual pass: all sizes, variants, disabled, pressed, 6 themes, RTL.

Highest risk: button (huge oklch/fallback/disabled matrix), form bordered, tabs, card compact vs sm.

### **Phase 4 — Tooling and consumers (1 week)**

* Wireit `files/output` for the new CSS graph.  
* Storybook (Vite 7 can use `@tailwindcss/vite` if Storybook stops depending on the Stencil CSS copy — today it uses `dist`).  
* Framework test apps: styles still load, no unprefixed Preflight leaking.  
* Snapshot refresh (`npm run test:update-snapshot`) after visuals are signed off, not before.

### **Phase 5 — Docs and release (1 week)**

* Migration guide: class prefix `modus-wc-flex` → `modus-wc:flex;` Daisy remaps; token names; browser floor.  
* Changelog / semver major.  
* Update Cursor rules that mention Daisy v4 channel tokens or hyphenated utilities in this library.  
* Call out: consumers on Tailwind 3 can still *use* Modus; they must not assume Modus utilities share their Tailwind major.

## 5\. Effort (honest)

| Work | Calendar | Notes |
| :---- | :---- | :---- |
| Spike | 1–2 weeks | Can fail; budget it |
| Implementation | 4–6 weeks | One engineer who knows this CSS stack |
| Visual QA | 2–3 weeks | 50+ components × 6 themes × light/dark; cannot skip |
| Docs / major release | \~1 week |  |
| Total | \~2–3 months | \~8–12 engineer-weeks |

This is larger than a typical dependency PR because the class string is the product.

## 6\. What not to do

* Upgrade DaisyUI 5 on Tailwind 3 (unsupported).  
* Upgrade Tailwind 4 and leave Daisy 4 (plugin API is gone).  
* Run `@tailwindcss/upgrade` on `main` without isolating Daisy and reviewing every class rewrite.  
* Mix Tailwind prefix and Daisy `modus-wc-` prefix.  
* Bump Stencil to ≥ 4.39 in the same change.  
* Refresh snapshots first and “fix visuals later.”  
* Keep Chrome \<111 fallbacks “just in case” without rewriting them — they will be wrong.

# Relevant changes on DaisyUI 5 and Tailwind 4

These are the framework deltas that most directly affect Modus — not an exhaustive changelog, but the items that will drive design decisions, file rewrites, and QA scope.

### **Tailwind CSS v4**

| Area | v3 (today) | v4 (target) | Modus impact |
| :---: | :---: | :---: | :---: |
| **Configuration** | tailwind.config.ts with content, plugins, theme.extend | CSS-first: @import "tailwindcss" \+ @theme \+ @plugin in src/styles/tailwind.css | Retire or demote tailwind.config.ts; themes and Daisy move into CSS |
| **Entry directives** | @tailwind base/components/utilities | Single @import "tailwindcss" | Rewrite tailwind.css and validate @layer base overrides (headings, forms, lists) |
| **CLI** | tailwindcss package includes CLI | CLI is @tailwindcss/cli | Update Wireit tailwind:build / tailwind:watch in package.json |
| **PostCSS** | tailwindcss as PostCSS plugin | @tailwindcss/postcss (required for Stencil plugin v2) | New devDependency; autoprefixer / postcss-import often removable |
| **Prefix** | prefix: 'modus-wc-' → modus-wc-flex | prefix(modus-wc) → modus-wc:flex (variant syntax) | **Breaking:** every utility string in TS/SCSS, tailwind-themeable.ts, and consumer customClass values |
| **Content detection** | Explicit content: \[...\] in config | Automatic source discovery (with @source if needed) | Re-verify safelist in tailwind-themeable.ts still emits dynamic classes |
| **Theme tokens** | theme.extend in JS | @theme { \--color-\*: … } registers design tokens | Align with existing \--modus-wc-\* variable strategy |
| **Preflight / defaults** | v3 reset behavior | Updated preflight; default border color behavior changed | Re-test form controls, tables, lists; cascade vs unlayered Modus overrides |
| **Upgrade tooling** | Manual | npx @tailwindcss/upgrade | Use only on a spike branch after removing Daisy from JS config; review every diff |

### **DaisyUI v5**

| Area | v4 (today) | v5 (target) | Modus impact |
| :---: | ----- | ----- | ----- |
| **Installation** | `plugins: [daisyui]` in JS config | `@plugin "daisyui"` in CSS | Remove Daisy from `tailwind.config.ts`; configure in `tailwind.css` |
| **Custom themes** | JS objects in `modus-modern.ts]`etc., registered in `daisyui.themes` | `@plugin "daisyui/theme" { name: "…"; --color-primary: … }` per theme | Rewrite theme authoring; update `custom-themes.md` |
| **Color variables** | Channel tokens: `--p`, `--b1`, `oklch(var(--p))` | Full colors: `--color-primary`, `--color-base-100` | Breaks `tailwind.css` button disabled rules, `global.css` fallbacks, `modus-wc-input-label.scss` |
| **Theme config keys** | `darkTheme`, `themeRoot`, `styled`, `base`, `utils` | `themes: … --prefersdark`, `root`, `include` / `exclude` | Map `darkTheme: 'modus-modern-dark'` → `modus-modern-dark --prefersdark` in theme list |
| **Removed theme tokens** | `primary-focus`, `--animation-btn`, `--btn-focus-scale`, auto `*-content` | Gone; explicit `--color-*-content` required | Move focus/hover semantics into Modus SCSS (already partially done for classic buttons) |
| **Radius / border tokens** | `--rounded-btn`, `--rounded-badge`, `--rounded-box`, `--border-btn` | `--radius-field`, `--radius-selector`, `--radius-box`, `--border` | Update `common.ts` and per-theme overrides |
| **Default component sizes** | Current density | Smaller defaults for btn/input/select/checkbox/radio/toggle | Lock `--size-field` / `--size-selector` in each Modus theme or accept visual drift |
| **Prefix** | Inherited from Tailwind `modus-wc-` on Daisy classes | Separate Daisy `prefix` option; must not stack with Tailwind prefix | Prefer Tailwind-only prefix: `modus-wc:btn` not `modus-wc:modus-wc-btn` |
| **Class renames (in use)** | See table below | Daisy 5 names | Update `*.tailwind.ts` \+ SCSS selectors |

### **Daisy class renames Modus already depends on** (from `*.tailwind.ts` and SCSS):

| Current prefixed class | DaisyUI 5 |
| ----- | ----- |
| `modus-wc-input-bordered`, `select-bordered`, `textarea-bordered` | Removed — border is default; use `*-ghost` for borderless |
| `modus-wc-card-bordered` | `card-border` |
| `modus-wc-card-compact` | `card-sm` |
| `modus-wc-tabs-bordered` / `lifted` / `boxed` | `tabs-border` / `tabs-lift` / `tabs-box` |
| Menu `disabled` / `active` / `focus` modifiers | `menu-disabled` / `menu-active` / `menu-focus` |

**Public props stay stable** (`bordered`, `padding="compact"`, `tabStyle`) — only internal Daisy class strings change.

**Cross-cutting changes (both frameworks)**  
![][image1]

* **Browser support:** Large `@supports not (color: oklch())` blocks in `tailwind.css` (\~750+ lines) assume Daisy v4 channel tokens. Daisy v5 full-color variables require rewriting or **dropping Chrome \<111** support.  
* **Shadow DOM:** `ensureDaisyUIInShadow (src/providers/theme/inject-daisyui.ts)` embeds full `output.css` — any prefix/token change ships to every consumer shadow root.  
* **Consumer apps:** Apps passing Tailwind utilities via `customClass` (e.g. `modus-wc-flex`) break when prefix becomes `modus-wc:flex` — treat as **semver major**.

### 

See more notes:  
[https://tailwindcss.com/blog/tailwindcss-v4](https://tailwindcss.com/blog/tailwindcss-v4)  
[https://daisyui.com/docs/v5/?lang=en](https://daisyui.com/docs/v5/?lang=en)

# Comments v1

**Comments for the doc**

1. **On section 5 ("Chrome \<111 fallbacks become a product decision"):** Tailwind 4 officially supports only Chrome 111+, Safari 16.4+ and Firefox 128+. Tailwind 4.1 degrades gracefully for its own utilities, but DaisyUI 5 colors (full OKLCH values plus `color-mix()`) and the Modus themes don't. Rewriting the fallbacks can't restore support, so this is a go or no-go decision, not a choice between two options.  
2. **On section 5, "delete \~600 lines of fallbacks":** The cross-cutting section says about 750+ lines. `tailwind.css` is 1,029 lines, with three `@supports not` blocks plus another block in `global.css`. Pick one number.  
3. **On section 3, "drop Chrome \<111 oklch fallbacks unless Support explicitly requires them":** If Support requires Chrome below 111, the answer is to not upgrade, not to keep the fallbacks.  
4. **On section 8 ("Shadow injection ships the full output.css"):** Tailwind 4 declares its internal variables (for shadows, rings, transforms, gradients) with `@property`, and browsers ignore `@property` inside shadow roots. Those utilities can break unless the defaults are put back on `:host`. We inject `output.css` into shadow roots through `adoptedStyleSheets` in `inject-daisyui.ts`, so this is a blocker to check in the spike.  
5. **On the Phase 2 bullet "Update generate-variables-css.js":** `modus-wc-variables.css` is published (exported from `package.json` and copied to `dist`) and contains 24 DaisyUI v4 variables (`--p`, `--b1`, `--rounded-btn` and so on). Consumers may rely on them. List it as a break in the migration guide.  
6. **On the class rename table in section 6:** `modus-wc-tab-active`, `modus-wc-toggle-*` sizes, `modus-wc-mask-*`, `modus-wc-join-item` and the badge sizes are all in use. Their names survive in DaisyUI 5, but their sizes and styles changed, so add them to visual QA.  
7. **On the section 4 list of old color variables:** They are also used in the SCSS for stepper, card, checkbox, button, tabs, radio and switch. Old radius variables such as `--rounded-btn` also appear in `modus-classic.ts`, `connect.ts` and about 12 component SCSS files.  
8. **On Theme config keys (the "darkTheme → \--prefersdark" line):** Check this against how `theme.store.ts` picks a theme using `prefers-color-scheme`.  
9. **On the DaisyUI v5 table:** Formatting problems: the cells start with literal `###`, some headers show escaped `**`, and one cell reads `modus-modern.ts\]etc.`  
10. **On Phase 1, "Compile one theme \+ button / input / card / tabs":** The numbered steps restart at 1 after the code block.  
11. **On section 6 ("What not to do"):** Add: "Don't upgrade without a rollback plan and a bundle-size budget."

**Taking the spike to the next level**

- **Write pass or fail criteria before starting.** Examples: `output.css` grows by no more than X%, pixel differences stay under Y% on the Storybook stories that matter, and the shadow DOM works in the React, Angular and Vue test apps.  
- **Test on one component from each high-risk group:** button (the disabled and old-Chrome states), text input (bordered and ghost), card (compact versus the new small size), tabs and menu.  
- **Generate the new themes from the existing TypeScript theme files.** Write a script that outputs the CSS `@plugin "daisyui/theme"` blocks, so the six themes can't drift apart.  
- **Measure file sizes:** `output.css` before and after, gzipped and uncompressed, plus the per-component bundle size once styles are injected.  
- **Can the pull requests be submitted directly to the primary repository** to simplify code review especially with UI changes.

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAssAAACfCAYAAAAPiJQTAAAm2klEQVR4Xu2d288VVZ7354/w3puJN16ZmDFvnBgnZjDRaDREYsR4RIwiwYHBU3OypVUURUU8tJx8BUVsNIoIRkUM0KANKuCBk4KCgsfW+05q+lvz/va79q+q9lPF81TV2nt/Lj5ZtVZVrapax0+tXQ/8yz/+8Y8EAAAAAACy/ItPAAAAAACA/wVZBgAAAAAoAFkGAAAAACgAWQYAAAAAKABZBgAAAAAoAFkGAAAAACigpyxPmjQJAAAAAGDg2LZtW8Z98+gpy6+99lry+++/AwAAAAAMFMgyAAAAAEAByDIAAAAAQAHIMgAAAABAAdHI8saNGzNpVfjtt98yaZ69e/dm0kbDmjVrMmkAAAAAMDjULsuXXHJJF35/eJxPK8vKlSuTCRMmjJjH8uXLM2lFHDhwYMT73rBhQyatCOXx+uuvZ9IBAAAAIF5ql2UhmbVtSeMdd9yRTJkypRO/8cYbO0KqcO7cuWmo1eKXXnopTZcMWx4TJ05Mw9WrV3ddZ8aMGV1xL7smyxZftWpVGs6aNStZsmRJlxSbLFt82bJlycGDB5OpU6d20idPntzJb8GCBWm4cOHCZM6cOcnRo0e7nknXQJYBAAAA+ovGZXnRokVpaCL56KOPdsV/+eWXZPPmzV2i+euvvya7d+/u5LFnz57k559/7pLZUGINi0u6lWeRLF977bXpPf7000+dc70sz5w5Mw23bt2a3Hvvvel2KMvr169Pt3WviusYybzkWaKNLAMAAAD0H43Lsq0QhzI8UmgrySESXH/spk2bksOHD3eOUbrk+y9/+Usqv16WtaKtcOnSpV3pwmT52LFj6fUVSsi1z4TfZNmfr3TblmQLxe16AAAAANAfNCLLzz//fGd7/vz5qTjqMwXF9UmG4iaXEtMwrhXbUGINpW3ZsiXdPnHiRBoPP9WwYySolr5ixYo0/Pzzz9N9f/7zn9P4/v3703j4GcehQ4c69/HCCy90Xcf+sM9k+cUXX0zT7Tl17h/+8Ieue9Fz2uozAAAAAPQHjcjyaJDoanXYp5chb0W6bvbt25cr9wAAAADQf0QvywAAAAAAbYEsAwAAAAAUgCwDAAAAABQwZrL8wQcfAAAAAAAMFGMiy/qvqn0aAAAAAEC/8/XXX2fS8kCWAQAAAGDoQJYBAAAAAApAlgEAAAAACkCWAQAAAAAKQJYBAAAAAApAlgEAAAAACkCWAQAAAAAKaEyWDx48CDXjy7wKPi8oxpddFXxe0By+Lqrg84J48HVVFk1+Pi/oxpdZWb7//vtMXtAuvo6q4PMaRPwzexqT5R9//BFq5IUXXsiUeRV8fpDPkSNHMmVXBf1PQD5PqJ/77rsvUxdV8PlBHKxcuTJTV2XR5Ofzg//PRx99lCmzskiWfX7QHlu3bs3UURW++uqrTJ6DxAMPPJB5Zg+yPCAgy82ALPcnyPJggizXB7I8OCDLvUGWhwhkuRmQ5f4EWR5MkOX6QJYHB2S5N8jyEIEsNwOy3J8gy4MJslwfyPLggCz3BlkeIpDlZkCW+xNkeTBBlusDWR4ckOXeIMtDBLLcDMhyf4IsDybIcn0gy4MDstwbZHmIQJabAVnuT5DlwQRZrg9keXBAlnvTV7L87bffZtLEaaedlu5T6PeFzJ07N5Pm8/FpVfaPBp/35MmTM8eE/PDDD5m0kWhClovqaMqUKWl4xhlnZPYZK1asyJSDZ8GCBZm0qugaxhtvvJHZH1L0PL2IVZY1GF5wwQWZ9KJnVF3t2rUrk56HyvK7775LTpw40Yn7Y8aKq666Knn99deTDz/8MNm+fXsnveg5ytKULPv7DsvNo3LcvXt3z35TpqzXrl3bFa8qKr2uX5W8ejrrrLNGHJ9PlSZluahcrY561dXevXtHHI96nV+GJ554Is3j9ttvT+Maa26++ebOfrXDiy66KHNeEU3Jcl6bKUuvsi/Kd8X/m4uWLl2aTJo0KbPf513Ee++9l5x77rmZdM9I+RhqIyMdq3K9/PLLM+kjEZMsF9VLEUXj51jSN7K8bNmytJHccMMNafyWW27pDK6WZo3onXfeSUMTNNuvhqvJ/29/+1uXNDz88MPJFVdckdsIde7FF1+c7NixI92vgfeuu+7q7Nc9PPvss+n2TTfdlOzbty+58sor07iu8fHHH6fbmzdvTvM6evRoGn/ttdeS8ePHJwcOHEjjylsN/LHHHkvjoSyPGzeucw1j4sSJaX5qJBLI888/v2t/HnXLsu5Hz7F69eo0rjJVPWlbz6tQk+7Jkyc7dWLh3XffnXz66adp2ep5tmzZkj73/v370/0a1K+77rpcWdZgZnUtVA8zZ85Mt319P/PMM512pHv75ptvUq655ppUcnVu0fPofmbNmpW5vqdpWQ7vS/esstDA99JLL6XPbZOSyl7l+fzzz6ftRW0n7FdWF3oR07bJsuLTpk3rCNexY8dSYX355ZfTuMr3nHPOSYXn7LPPTtOU56233tpVL9dff32nz77yyivJunXr0vtTH9Az2HHPPfdccuGFF3bi99xzT1c8nPzCPnv66aenfVXb7777btqfrH+VoSlZ9vcdlptEWrKi+lNc9WCybPWjMUL9SQOzyjfsS0899VQyY8aMTt5Tp05Nzw9lWeWpstLzfvbZZ8mll17auZ6hMVT3Yf3PZHnevHldY42vG7WLvBd9nbNo0aLk/fffT69t96x7U90/8sgj6fisdLWnCRMmdM7V+Kzxz86pWrdNyXJYrupbGq9sPLd7V71r/Dt8+HAa13OH+zUWqW9ImsNynj17dpqftRvNKxpfbaxQmagcrUx8vQj1Yxsn9FzKa8OGDZ22JzRW5M2DRdQpyxqL1Wa0HfZtzROaOyWOiqvs1F7Cdq+2e++996bbNgflPZeNfdp+8skn03lAdWdzkcly2MdUjho31QctXfWj669atSqNywMuu+yytB/lybIdb3OL3Zvl99Zbb3XmfB0rf7J9Khe1kRX/FHq1kbDvLly4MD3PP6v1SeWhl3N/P6JJWdY9hg6muUKhXuIOHTrUVd9Wv/fff38aV3nYeW+//Xa6X23YylKoj02fPj15/PHH07gf58I50N9bEX0jy3p4NQA9nEI1FhWQGnM4eSq0idenqyFrUFHhamXnvPPOS9PPPPPM9H9n8Q1M6HqbNm3q5KMKUfjiiy+moSpd+ahjKq5ra5DStgRZ4Z49e7pCNSqFEpHwHq2RKG6NW+lq3HavhjqjVbRERaGdW0Tdsmx1o8FEk6qeRxOd9tmkYZOujrM6tbgasupUE6Hiy5cvT0PLN++t+rbbbkvPU91q4pXUmSiqjfj69u3oiy++SEOJn+4tzD98HmtT9iLUiyZl2d+X7lcDtNqMtiW2YRn7MK88JLQatEyWLU+1rzfffDONWxvWCoAGOrUtidmf/vSnTt4SApsoNDGo/pYsWZKm66VHfVeDlupcZWaDpwax48ePd9qzJgfdpybI8P51TWFloXzCvho+exmakmV/377cJKhhHZksq19oRV1pKhuNOSrH8Fjbr7av0KQplGXVtSZyX/fhPYZ1rLj1W9WB6tziYd3o2jpHE324MmR5aJxVX1I92dilfDSRqf2qD+tY9Vc9q/qr0nW8vdRZflXqtilZ9uWqFx+rv/DeFc6ZM6dr/LOVQPU/1akkev369amwKV+TwzAfzQG+/iz0fUasWbMmc8+xyrLuYefOnWmb0djj+3bYNoviepmweBj666j8VNa6ltqu0mwuMlkO85CAKbQx1tI///zzrrhETmGeLCvd/MCOC+9RXqE6VD+/+uqr03YQHmP9Xvdt6T5/H//rX/+a8YiQJmVZCwR5c5PNOb6+NSZaOYbPoHJS/Wn8DH9t1zkaA1WnWnxRPK+f+HLqRd/IsrAHkyBoW0iO/IMrVGNSo1ZD1EqF0k2Ww/xUMRpUfP5Chay4rVTb/oceeihduVRcbz+G4hIBTRr2VqQ0NXo7VqHEQKHefv29a5LR6kAoy5a/zrN7V8e0bb1p6bhwFS+PumVZ2HNoclNH1ySge/WyrAlRA7nKXqspSg9lWQ3d8lOHsIHP/1Rr18uLq0P6+vahybLieS9MYVzbfn8eTcqyCO8rvD8NxuFxVvaqCx1nK1d2jn3KZPFQltX+VJ5qY5qkta10DVB2vPqiBpQwT7sHy0MsXry46xeCcFDU9ew4k2f9TKx9alOK+19ZDLUd66v2MjvSC2RIU7Ls8eVm45vFTZatrLXCqOcKjwlDTawPPvhgJy78ZxiSOoWqnzAvw15yjfAlV+3Gjvd1E7YLO9e3q1DObIU1lGXFTX6EJlW7tsKqdduULAsrV3vxFuFzhaHGP/1CqPHPystk2fLTWBi2dzvfxkPDl4mvFyFZspcUI1ZZVpuxdqa2YH3bVk1tLtWxFtovvv7+w+P0/Da/h/KkuUfbWn1U6GVZ11WfksBrv7+2CZxPl8xK8rTKaddVuvqJQrVNu2Z4nsly+CzhMWojd955Z1d6SNm0kKZkWYuG3rksDGXZe5eQz3lZVmjjp+Gf1Y9zfg4sQ1/KsoUq0DxZVrpthwNqniwrDFfl/DWFVsPC/aEsayJTReinHsXzZFkVbPehQU6rBtofypmFdl4oywpNOuwbUjVMdVxt6+ej8NgimpRlCyVGebKs1aSwjnRvRbKsycTna+VgKzIqDw1MNlmpHnTNvPoOQ5Nlq0/bp2/7wmP185xC+1mnF03Ksr+vsA3YgGxp1k7s50pfHrZtA0goy5q8NDCpTO2aqjebZBTXZCWRC/O0dmv1oglKqzdFsmz5KDQhsP26nurZf6+v+9LEq0FUfVWrEPrkI8yzDE3Lst23lZs+PdL9+hWQ8JtlxfWy4ldawzCUZX3aoBdMk2X/WYXVpV3X7s3nqeM1wfm6CutGfV3byif8adiuITFUGE52I8myhEB52/h6KnXbpCyH9WRhkSwLfU4RzlF5sqzxzz7XyMtHZeXLJKwXyyvc/8c//jHdjlWW7XMItRmNOda3w9VcrbgqtLiX5aIyC1Ga5lH9zD9//vx07FWal+XwfK1WyjvCtDxZVn9ReyhaWbZwRfC3Ogo11urakmXlq1+O/cJaWVnWMynUPWt+tHaSR1OyLPw8EYaac6y+w336FVmhFtrUNvRrscmy5Wdjqs7R/aheNf75cc7PgWXoK1kW9r2NBhW/bzT0qmj/Nn6q2ERVhE0cni+//DKTJsLBRvLp93uakGVhMlPmnqqgn+Z9mvB/IKVy8ULVC0mSQk2qJpjhtao+T5OyLHrdl33Xp0kxL92wfmXf93l8eYYSoZdH27YVgzx0jaI69OibwTBufSfvj4/CfhC2g159Oo+mZTm8717lNhp6jV22r2hcykvXRO7vNTxO7SLvmr69lf0DHv2NQd4KU5W6bVKWhT2/Xmr8vtHg+44vAz8O5NWf8L84jYa6ZFn45w3blX9WT9Gz52H3kdduR0PRfC4kg35MNcJn05ikxabwk50q2N9IlaFJWRa+DrXiHMatPvTcemEM9/n5QeWj8gzblC9f3yb8mDQSfSfLcOo0Jcv9hq3SCS8Cp0LTslwGW9nthQbwqgNyFQEeC6reXxWalmUYGfuuUfhPScrStCwPE3XK8iDT69vhEPsFVugbeL9/LGlalstS55hfBWR5iECWmyFGWYaRQZYHE2S5PpDlwSFWWY4FZHmIQJabAVnuT5DlwQRZrg9keXBAlnuDLA8RyHIzIMv9CbI8mCDL9YEsDw7Icm+Q5SECWW4GZLk/QZYHE2S5PpDlwQFZ7g2yPEQgy82ALPcnyPJggizXB7I8OCDLvUGWhwhkuRmQ5f4EWR5MkOX6QJYHB2S5N1HJMkBVRis4MLZQHwD1Qf+Kj08++SSTBvWj/zDGp7UNsgzRwuQRF9QHQH3Qv+IDWW4HZBmgAkwecUF9ANQH/Ss+kOV2QJYBKsDkERfUB0B90L/iA1luB2QZoAJMHnFBfQDUB/0rPpDldkCWASrA5BEX1AdAfdC/4gNZbgdkGaACTB5xQX0A1Af9Kz6Q5XZAlgEqwOQRF9QHQH3Qv+IDWW6HgZXlp59+GmDMGT9+fCYN2oP6AKgP+ld8zJ49O5MG9XP99ddn0tpmTGQZoA5YaYkL6gOgPuhf8cHKcjvEuLJcFmQZGofJIy6oD4D6oH/FB7LcDsgyQAWYPOKC+gCoD/pXfCDL7YAsA1SAySMuqA+A+qB/xQey3A7IMkAFmDzigvoAqA/6V3wgy+2ALANUgMkjLqgPgPqgf8UHstwOyDJABZg84oL6AKgP+ld8IMvtgCwDVIDJIy6oD4D6oH/FB7LcDsgyQAWYPOKC+gCoD/pXfCDL7YAsA1SAySMuqA+A+qB/xQey3A7IMkAFmDzigvoAqA/6V3wgy+2ALANUgMkjLqgPgPqgf8UHstwOyDJABZg84oL6AKgP+ld8IMvtgCwDVIDJIy6oD4D6oH/FB7LcDsgyQAWYPOKC+gCoD/pXfCDL7YAsA1SAySMuqA+A+qB/xQey3A7IMkAFmDzigvoAqA/6V3wgy+2ALANUgMkjLqgPgPqgf8UHstwOyDJABZg84oL6AKgP+ld8IMvtgCwDVIDJIy6oD4D6oH/FB7LcDsgyQAWYPOKC+gCoD/pXfCDL7YAsA1SAySMuqA+A+qB/xQey3A7IMjTOL7/8kg7C/Yp/HsjHl1td+OtCPHz99deZ+srDnwftQd3EC3XSHsgyNI5kWZOoT4fBgjoGtQH1d58O8YKMxcsTTzyRSYNmQJahcZDl4YA6BmS5/0CW4wVZbg9kGRoHWR4OqGNAlvsPZDlekOX2QJahcZDl4YA6BmS5/0CW4wVZbg9kGRoHWR4OqGNAlvsPZDlekOX2QJahcZDl4YA6BmS5/0CW4wVZbg9kGRoHWR4OqGNAlvsPZDlekOX2QJahcZDl4YA6BmS5/0CW4wVZbg9kGRoHWR4OqGNAlvsPZDlekOX2QJYjZPr06cns2bMHljvuuCOZNm1aJh0GC+oY1AbU3306xMu4ceMyaRAHl1xySSYNmuHyyy/PpLXNtm3bMv6Yx0DL8u+//z6wHDt2LPnss88y6TBYUMegNqD+7tMhXubMmZNJgzhYuHBhJg2a4amnnsqktQ2yjCzDAEAdA7LcfyDL8YIstweyHCHIMgwC1DEgy/0HshwvyHJ7IMsRgizDIEAdA7LcfyDL8YIstweyHCH9JssbN27MpPViJFmeNWtWJg36j151DMMBstx/IMvxgiy3B7IcIb1k2URTfxV74MCBNO3o0aNdx/z666+d7d9++61rX3is8vD5e3TMhAkTMun+GJ9m6J+OCuPr169Pdu3alaxatarrvJ9++ilzrjh+/HgmTSgPPYv4+9//ntkP7YMsA7LcfyDL8YIstweyHCG9ZFno3y010Xz44YeTuXPnduIKheRT4cSJE7v2zZs3Lz3nww8/TOP6Z50s3/A4hddee22yc+fOjCzbNfzxeeGSJUuSG2+8sXOuZDkUflW2wqlTp+aev2DBgmTTpk3pvSjt7bffTl8GlM+aNWuS+fPnd90bxAOyDMhy/4Esxwuy3B7IcoRUkeVXX301V1x37NjRWWEO9+Udayh+8uTJZPXq1Wl82bJl6cquZPnEiRNdxynUv6EqYfX5WTh58uR02/ITXpa3bNmSzJgxI/e+LO3w4cNpXKJs+8IVcgm1bUM8IMuALPcfyHK8IMvtgSxHSBVZLgqFVmNDwZS8Kly8eHHmWLFhw4ZkypQpnfjMmTNTdJzysXTF7R70KYi/toWSbX8dk2VJsj/eh5s3b05Duyel2z49g+7h+++/T9auXdvJH+IBWQZkuf9AluMFWW4PZDlCRpJlz88//5xJE/qEQmEoq7ZKa4TfN5fFS3aI/8b40KFDmWPy/sDvu+++yxwnvvnmm862rhuuKGs7XPGGuPB1DMMHstx/IMvxgiy3B7IcIVVluQh9KyzBPBUh7oW+g/ZpVciT5ZFYt25d8swzz2TSIV6q1jEMHshy/4Esxwuy3B7IcoSMlSzHyqnIMvQf1DEgy/0HshwvyHJ7IMsRgizDIEAdA7LcfyDL8YIstweyHCHIMgwC1DEgy/0HshwvyHJ7IMsRIlnWv/QwqBw5ciTZs2dPJh0GC+oY1AbU3306xIv+B1WfBnHw0EMPZdKgGexf4IqJoZfl+++/P5M2SKiS9T/7+XQYLKhjUBtQf/fpEC/33XdfJg3i4IknnsikQTMsXbo0k9Y2ZedYZLlPQZaHA+oYkOX+A1mOF2S5PZDlCEGWYRCgjgFZ7j+Q5XhBltsDWY4QZBkGAeoYkOX+A1mOF2S5PZDlCEGWYRCgjgFZ7j+Q5XhBltsDWY6QQZfls6fMSPHpMDhYHVPPww1toL+g38bL+f/9B+qmJazc7172fzP72gRZRpahz7E6PvbjT5l9MDzQ1/uL86bfQ31Fykf7D6Z1M/XJP2f2Qb2ce/tdUfYLZHnAZfnf/9nwzpk6M5MOg4MG9n+77b8z6TBc/J9pd/5TwO7OpEOcPL1+Y5RSAP8LCxDtMGH+Q1H2C2S5hCw//PDDfcukaf+VjLtyYia9n/D1UQWf16Ay7sqrMmmDyKeffpqp47IcPXo0k98gMf6GSWl/9+mDhq/Xsnz00UeZvNrmX//jPzNpbePLrQo+r34mxroZDb6uquDzqps2yt4/swdZLiHLzzzzTPLjjz9CC6xevTpTH1Xw+UF/M1pZ9vlBf/Hoo49m6rUskmWfX9scOXYsk9Y2vtyq8Oyzz2byg/bZunVrpq6qcPjw4Uyeg8QDDzyQeWYPsowsRw2yDCHI8nAzaLIcI77cqoAsxwmy3BtkuQTIctwgyxCCLA83yHL9+HKrArIcJ8hyb5DlEiDLcYMsQwiyPNwgy/Xjy60KyHKcIMu9QZZLgCzHDbIMIcjycIMs148vtyogy3GCLPcGWS4Bshw3yDKEIMvDzWhk+cMPP8zkB1l8uVUBWY6T0cryV199lclzkECWS4Asxw2yDCHI8nCDLNePL7cqIMtxgiz3BlkuQZuyfPXVV2fSVq1alYwfPz6TLk477bRMWh4nT55MG/fZZ5+d2Wds27Yt2b17dyY95OKLL86kedauXZtJG0uakOWFCxcmZ555ZnLWWWcl5513Xma/Ubb8f/jhh+TIkSOZ9DyK8pw4cWImrQyqV4WWr4VnnHFGsmvXrszxo8Hf+0jtKeRU7yUmWfbPXweqtzA+bdq0ZMGCBZnjRksTz6JrLFu2LFm6dGkyadKkzP4yNCnLut/LLrssDd977700TeOzP8544YUX0rCXMN52222ZNM8dd9yRSStDXh2qrBU+9dRTmX1F+HKrQq9n9/Sa60bi7bffTkPfP0SvPmJzWl5ZGVdccUUmzdPrfGPy5Mmly2Okufaaa65Jzj///FLXzSMmWZaXWH8qQ1FdjiXIcgnGWpaff/75tFGfOHEijW/evDkdcLWtjjNlypTOsdbw1RjUsbQ9bty45PTTT0/Pv+GGG9K0Tz75JBUwO16VduGFFybvv/9+Gv/ss8/SuDqEXUf7lI/lMWPGjOSiiy7qXFuN1eTGjnnsscc6+YfpCnXugw8+2Dlf96nzvSxLPMPr3HTTTV3ip/NmzZrVdU4v6pblxYsXJ/Pnz0/LV3ENwiaWs2fPTu9X96B9Vv5WLm+99VYnH5X/xo0bO5PpN998k7zyyivJG2+8kbYHf13lfd1113XyfO2115ILLrggOXDgQBpXuSm855570ry1ffPNN3fOv/XWW5MPPvigE585c2Ya2iBkYqJQ96tn2r59e3L55Zcnx48fT495+eWXk9tvvz3dtufVvaq9XXrppcm8efM6+asc/MCvvFWX119/fRoPZVntLbxf3y5Mlu2Yq666qtMHelGXLOvZp06dmj77okWLOs+udqFnMekQ+gfsVRa+PTz55JNpeOzYsbQcVb7+OnfeeWfXORYqP9W/Hffdd9+loepNZbxixYo0rhc6ewnWuWon1u+NomcR2laaxUd6FqFnCc8xyj6Lfe9obTGU5eeeey6ZO3du1/mSTvVJfz3RlCxbeXz//fdpeO6556ah+kFYRuFYr2dRqOe3dv3666938tyzZ09yyy23pNtWd5aX5a0xxGTZl6MkUP3X4uqjSrO42qnC6dOnp2OLtq3dPvLII53jRsKXWxX8GOHJm+tsXzjGqGzUVvWMtj98Lo2XCvNkOewjanthX7TyVv2qjrRfdWTlo/1he9ZLhpWrUN9SHeVJq45X25VTKG6yHNaxtXul6/lsnA+v6edaYddbv359V7rlp7Ft586dXftCmpRl3241VynUXHPo0KG0zu3lQM87YcKETpmpfO08zcXar7q0OVhoMVBt4fHHH0/j8h+1ExsHvYOVAVkuwVjLsu9EVvlaubS3YZtkdOzKlSu7VoAlWybXNpBYnj60N2B/TYvnrSyfc845neuY3NhEqPMkYDZA+ev58IsvvuiS5Y8//rizoqpn3LdvX+eZhQaxKg1Y1C3L9iz79+9P3nzzzXRb9/nuu+929tkA7Z/fBnaLS6zuuuuudFtlE74RX3nllZ1tTdqhQFh63jXs2kKSq3OV97fffpvKuO2zScNk3QYoy0f7NZCr/JWm/U8//XTnmPB5LfTtTy9+dr0wXWjwsvZkQiDU3ny7UPjSSy91zlcfUFsJ8y6iLlnOe3YNvhbXhKpnUTlu2LAh9xyb+Hyd6tmElb3SJD3qaxb3Y4O9iNl+TdgqY8mRBva86xs+3T+L2p62R/Msan9ln2X58uVdeZksa0w0gdU+TYIK1f/Ca4Y0IctaaNCE68tELzB5K8u238RV44K9yGqfxleTf5+nzQ8WVxsxWfblGAqvFl30Qm5x6z/hC6r6lclyOP6MhC+3KvSS5V5znT2/jTEWl6CoLP1z2cKOjXvWLtW2wz5i+HJXqHy1EKFtoTpSXfljJX6WrvzDfmzXDY+XtGrbZNnS7RjVhRYP/P3khSFqf3np6t956SFNyrK1W/8stgilNvDOO+907VOZ6fnCX3atLRXVpa6jtqB42BdGKos8kOUSjLUsqxOrsmw10YRGaZoM7DjJgr0VasDUfg2A4QDiG5RCNTaFejOzdA0w2vaNMxyYlKY3d0sLZVmSp8YmMZMo+3wstIYcNsZQlm1lJcR+OrLOFt5nGZqSZQ2A4cQtebRJWx0yPNZCL8uiSJbDFaFwQgnzVN34a2iS0LZWiRXXwG0/XfaSZVu5tXzCzzCUprhQO9Jgq+f19WsvVorrOBF+XhI+t4619hSu9uiYvHah9PB8lbXitsJfRF2ynPfsoQBqhdHu2fqxrysTTE2e4fOp3wlNWCob9TW1N/U1rZyo3MKxIcTyMFkvI8sjPYvtK/MsJsX+WVSnp/osJsuKW7uylSj1Aa2I+3ONJmRZLyp5sixCWVa6ytr2h7KsUOO3yigsPx+uW7cucw3Jcl45anFEx9kKWihJtvrpV1pjkmVRNNeFbUFjTFgeVo5hPl6WrV1q9dL3kfDzhbxQeejXT22Hv+BaqDFdK73hPWlb7d6uGwq07S+SZbXxopdUC/M+B9S+vEUFpYe/MOTRlCzr15OiMaWXLAvJbxVZNuQ/YV/wDlYGZLkEYy3LqiQbEBQ3obG3TVWqDbBqVJoEta3JQo0oXLGx/Px3qMpDK4NhY9TP9Qr185R+0la63pQ1iakjK2/9lJgny2HeCu0nxzBNoTVk5W9v5JJlvRGGq+WSOX0WoJ9cNJBoINq7d2/6jEoPn28k6pZllaPqV6vKWjWwn58ljyrn8KUkDPWMFtfPQNrW8WVk2fJQeYR5mhiH11KeqlsbDJVu+2yAthVPpalew89ctF+TrJdlm5Ds+XrJsr6z1Pf1lh7mbTIgabL2JCnVfUuAw2tau1Bc6TpeP8GrD6iNhD/dFdG0LGvAtYFY96zPXKwO7FiFqt8wrufy5SX0mU14nKVrW2Xg78OX8aZNmzLn++v4POxZ1IbsvtesWVP6WcLxLORUnkWhyfKOHTvSNN2fVpk17uhnb6VpvPDXE03Ist2rxEkvyhq7bXLX+Kx7tWPCfuFlWen6xSrvJdhCk2WtXKoclG4ry74c1Z90DfVx1Yl+wbF+b/lZ39M1JVYxyXKvuc6PMRYKlb1/Li/LIb6P2HfnYb4Wqs2pjvL2WWiybKvLhr9uuE/1arJsL4bheXnxMPSyrHQ9u5CQ6vOpgwcPpm1B5ah51t9PSFOyLHSvam92T4qrnBVqDJWXhM8bzrEqL/UvxcN+tGLFijSUT4Vjsi1MqC+EeRaNWUUgyyUYa1kWRQO9sM8QfEUWfZ7gjzMkDWHcOry+dwp/LldHUihx9XmMBgmiTzO+/PLLzrY+HbBvZEc6L4+6ZVlI4tRhbQAWJo9F9xv+u5P33XdfGurlx1ahyxCWiyiSOatbocHSvtUSug+/GuvbjH3/mkfZP0QM6zRE17Y25tN9my7KQ2gg8sfnUZcs98KXbx6+DIraTS/CcSNcVfTX9yuOY41/ll7jWRHhOb6de0baH9KULKutqB9pxdaLppWP2muvvlWVzz//PJMWlqOuF0pLOC6EfV7tRd/N+7zK4sutCr1k2Sjq573GB1HlucI+Und/Mfy4GxL2Kf0di365GOmcsaRJWRZ+/JPgh/HQg8JPKIR3G9Wf6t7+fkD4MTHsC6LqmIUsl6AOWS5Dmcp89dVXM2kjUeVfJOgHmpDlPNQxfYfvhX5C0pu+Tx9LNMB4kclj0NpASBuyDPHQlCz3E5IN+8PgscCXWxXKyPKgUmXc1UtWrz/IG2ualuWyVCmzOkGWS9CWLEM52pJliBNkebgZjSzzP/iVw5dbFYZZlmNmtLLM/+CHLCPLkYMsQwiyPNwgy/Xjy60KyHKcIMu9QZZLgCzHDbIMIcjycIMs148vtyogy3GCLPcGWS4Bshw3yDKEIMvDDbJcP77cqoAsxwmy3BtkuQTIctwgyxCCLA83yHL9+HKrArIcJ8hyb5DlEpSVZf0vZNA8o5Vlnx/0N6OVZZ8f9BejlWWfH2Tx5VYFybLPD9pntLLs8xs0kOUSlJFlAAAAABhOkGVkGQAAAAAKQJaRZQAAAAAoAFlGlgEAAACgAGQZWQYAAACAApBlZBkAAAAACkCWkWUAAAAAKABZRpYBAAAAoABk+Z+yvH37dgAAAACADEMvywAAAAAAowVZBgAAAAAoAFkGAAAAACgAWQYAAAAAKABZBgAAAAAoAFkGAAAAACgAWQYAAAAAKABZBgAAAAAoAFkGAAAAACgAWQYAAAAAKABZBgAAAAAoAFkGAAAAACjgfwC/XWIGiRWWXAAAAABJRU5ErkJggg==>