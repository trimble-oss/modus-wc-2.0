# Tailwind 4 and DaisyUI 5 — build sequence

Step-by-step execution guide for the migration in [Modus - Upgrading to DaisyUI 5 and TailwindCSS 4 .md](./Modus%20-%20Upgrading%20to%20DaisyUI%205%20and%20TailwindCSS%204%20.md). **Phase 0 (ADR and go/no-go) is assumed complete** before you run any prompt below.

Run phases **in order** on one major branch (`trimble-oss/modus-wc-2.0`). Do not publish to npm until Phase 5. Rollback: upgrade plan §12.

| Phase | Focus              | Typical PR |
| ----- | ------------------ | ---------- |
| 1     | Spike + §6 gates   | Draft      |
| 2     | Tokens + variables | Stacked    |
| 3     | Full catalog       | Stacked    |
| 4     | Tooling + consumers| Stacked    |
| 5     | Docs + release     | Ready      |

---

## Phase 1 — Spike (toolchain + five components)

**Goal:** Prove Tailwind 4, DaisyUI 5, dual pipelines, six generated themes, `moduswc:` prefix, and every **§6 gate** in the upgrade plan. Scope is §7 only (button, text input, card, tabs, menu).

**Prerequisites:** ADR accepted; bundle ceilings locked (115% of v3 baseline); prefix `moduswc`; `@stencil/core` ≤ 4.38.

### Prompt (copy into agent or ticket)

```text
You are implementing Phase 1 (spike) of the Modus WC 2.0 Tailwind 4 + DaisyUI 5 migration on trimble-oss/modus-wc-2.0.

Read first:
- docs/Modus - Upgrading to DaisyUI 5 and TailwindCSS 4 .md (§2 go/no-go, §4 constraints, §6 gates, §7 spike scope, §12 rollback)
- AGENTS.md (Wireit, generated files, Stencil ceiling)

Constraints:
- prefix(moduswc) only; no Daisy prefix stacked on top
- Dual class: moduswc:* utilities + stable SCSS hooks (modus-wc-btn, modus-wc-btn-filled, etc.)
- Six themes generated from src/styles/themes/*.ts into @plugin "daisyui/theme" blocks; data-theme names unchanged; no --prefersdark
- TypeScript ≥ 5.8.2; tailwindcss **4.1+** + @tailwindcss/cli + @tailwindcss/postcss; daisyui 5; stencil-tailwind-plugin 2; @stencil/core ≤ 4.38 (do not bump Stencil)
- CSS entry: @import "tailwindcss" source(none) plus explicit @source; @plugin "daisyui"
- Wireit: invoke the tailwindcss bin (from @tailwindcss/cli), not a shell call to @tailwindcss/cli
- Stencil: injectTailwindConfiguration with readFileSync of a core CSS file (no relative @import from component dirs). CLI entry may import global.css, variables.css, fonts.css separately
- Migrate only: modus-wc-button, modus-wc-text-input, modus-wc-card, modus-wc-tabs, modus-wc-menu (and modus-wc-menu-item if needed for menu states)
- Do not migrate the rest of the catalog; do not refresh all 60 snapshots unless required for the five components
- Do not commit PR screenshot binaries

Work:
1. Reconfirm v3 bundle baseline per upgrade plan §6 (rebuild output.css from main’s tailwind.css if needed) and record sizes for the PR
2. Bump devDependencies and wire package.json scripts / wireit for v4 CSS graph
3. Add a script that emits six daisyui/theme blocks from modus-modern.ts, modus-classic.ts, connect.ts
4. Implement spike components with Daisy 5 class remaps (§4.4): card-border, card-sm, tabs-border/lift/box, input-ghost, menu-disabled/active/focus
5. Run shadow @property check: control with shadow/ring/transform inside a real shadow root; repeat in integrations/react, angular, vue test apps
6. Post uncompressed + gzipped sizes for output.css and adopted sheet (output + global + modus-icons)
7. Draft PR on trimble-oss/modus-wc-2.0 with size table, gate checklist, screenshots in PR comments, link to §12 rollback

Stop and report failure (do not expand scope) if any §6 kill condition triggers: @property with no :host fix, bundle over ceiling with all six themes, or toolchain requires Stencil ≥ 4.39.
```

### Verification / QA checklist

**Baseline and toolchain**

- [ ] v3 baseline re-measured if `src/styles/tailwind.css` changed since commit noted in §6; ceilings unchanged without ADR
- [ ] `npm ci` succeeds on Node ≥ 20
- [ ] `npx tailwindcss -i <v4-entry> -o src/styles/output.css --minify` succeeds
- [ ] `npm run build:ci` (or full `npm run build` if required) succeeds
- [ ] `@stencil/core` in package.json is ≤ 4.38.x
- [ ] No `prefix(modus-wc)` or doubled `moduswc:modus-wc-*` in built CSS

**Bundle (§6)**

- [ ] `output.css` uncompressed ≤ **185,789** bytes and gzipped ≤ **25,753** bytes (all six themes)
- [ ] Adopted default path (`output.css` + `global.css` + `modus-icons.css`) ≤ **194,573** / **27,307** bytes gzipped
- [ ] `dist/modus-wc-styles.css` still matches `output.css` after Stencil copy step

**Themes**

- [ ] All six `data-theme` values switch correctly via `theme-provider` / `theme.store.ts`
- [ ] Theme CSS is generated from TS only (no second hand-maintained theme copy)
- [ ] No `--prefersdark` in generated theme CSS

**Spike components (Storybook + unit where updated)**

- [ ] Button: filled / outline / borderless; disabled and pressed; six themes
- [ ] Text input: default bordered and `bordered={false}` → ghost
- [ ] Card: `padding="compact"` density acceptable vs `card-sm`; bordered prop
- [ ] Tabs: bordered / lifted / boxed tab styles; `tab-active` chrome reviewed
- [ ] Menu: disabled / active / focus item classes

**Shadow DOM / frameworks (§6)**

- [ ] Shadow, ring, or transform utility visible inside a component shadow root (or documented `:host` fix merged)
- [ ] React test app: spike components themed; no blank elevation/focus
- [ ] Angular test app: same
- [ ] Vue test app: same

**Visual / process**

- [ ] Design or QA sign-off on §7 stories (or ≤ 2% pixel delta with allowlist)
- [ ] PR is **draft** until all boxes above pass
- [ ] PR description includes §12 rollback pointer and size table
- [ ] `npm run lint` and `npm test` pass for touched specs (no mass snapshot refresh)

**Exit:** All §6 gates pass. Otherwise stop migration (see upgrade plan kill list).

---

## Phase 2 — Tokens and variables

**Goal:** Make generated themes the single source of truth; port global and component tokens from Daisy v4 channels to v5 full colors; publish breaking `modus-wc-variables.css`; remove Chrome &lt;111 fallback layer.

**Prerequisites:** Phase 1 merged or stacked on the major branch with §6 gates green.

### Prompt (copy into agent or ticket)

```text
You are implementing Phase 2 (tokens and variables) of the Modus WC 2.0 Tailwind 4 + DaisyUI 5 migration.

Read: docs/Modus - Upgrading to DaisyUI 5 and TailwindCSS 4 .md §4.1, §4.5, Phase 2 in §8, and docs/custom-themes.md (current v4 content).

Constraints:
- Generated @plugin "daisyui/theme" blocks remain the only theme source (wire into the v4 CSS entry used in Phase 1)
- Lock --size-field and --size-selector in every theme so Daisy 5 default shrink does not change Modus density
- Reimplement removed *-focus / --btn-focus-scale / Connect press-scale in Modus SCSS where products still need it
- Remove the three v4 @supports not blocks in src/styles/tailwind.css (~569 lines). Replace Modus-owned fallbacks per upgrade plan §2.1 (Tailwind 4.1 utilities + --modus-wc-color-* hex backstops from theme TS), not a hand-maintained --fallback-p table
- Port button rules outside fallbacks: channel assignments ~765–805 and disabled/pressed/opacity ~846–end of tailwind.css from oklch(var(--p)) to --color-* and color-mix()
- Update global.css @supports (color: oklch()) aliases and every SCSS file listed in §4.1 (colors and --rounded-* → --radius-*)
- Update scripts/generate-variables-css.js to emit v5 variable names AND full-color values (--color-primary, --radius-field, etc.). Document that oklch(var(--p) / alpha) consumers must move to color-mix()
- Rewrite docs/custom-themes.md for v5 CSS-first themes

Do not migrate remaining *.tailwind.ts catalog files in this phase (that is Phase 3). Re-run bundle §6 ceilings after token work; report if over budget.

Deliverable: PR slice with token migration, variables break documented in PR body, lint/test green for touched files.
```

### Verification / QA checklist

**Theme source**

- [ ] Six themes still generated from `src/styles/themes/*.ts` only
- [ ] `--size-field` and `--size-selector` set per theme (Connect / Classic / Modern density preserved)
- [ ] `data-theme` switching still correct for all six names

**tailwind.css / global.css**

- [ ] No `@supports not (color: oklch(0% 0 0))` blocks remain in `tailwind.css`
- [ ] Modern-browser button disabled, pressed, and opacity rules render correctly on Modern, Classic, and Connect (light + dark)
- [ ] No remaining `oklch(var(--p))` (or `--b1`, etc.) in ported rules unless explicitly justified
- [ ] `global.css` fallback story updated for v5 (no dead `--fallback-*` table for deleted layer)

**Component SCSS (§4.1)**

- [ ] Grep clean or intentionally migrated: `--p`, `--b1`, `--rounded-btn`, `--rounded-box`, `--fallback-*` in listed components + `modus-wc-input-label.scss`
- [ ] Radius tokens use `--radius-field`, `--radius-box`, `--radius-selector`, `--border` where applicable

**Public variables file**

- [ ] `npm run build` regenerates `src/styles/modus-wc-variables.css` with v5 names and full colors
- [ ] `package.json` export `./modus-wc-variables.css` still valid
- [ ] PR lists breaking renames and value-shape change (`oklch(var(--p))` → full color / `color-mix`)

**Docs**

- [ ] `docs/custom-themes.md` describes v5 `@plugin "daisyui/theme"` and points to theme generator script

**Bundle**

- [ ] `output.css` still under §6 ceilings after full six-theme build

**Tests**

- [ ] `npm run lint` passes
- [ ] `npm test` passes (update only specs broken by token/class changes in touched components)

**Exit:** Token layer is v5-native; variables file break is documented; bundle still within gate.

---

## Phase 3 — Remaining components

**Goal:** Migrate every `*.tailwind.ts`, `tailwind-themeable.ts`, and related SCSS/Daisy remaps so the full catalog emits `moduswc:` utilities. No npm publish until Phase 5.

**Prerequisites:** Phase 2 merged on the major branch.

### Prompt (copy into agent or ticket)

```text
You are implementing Phase 3 (remaining components) of the Modus WC 2.0 Tailwind 4 + DaisyUI 5 migration.

Read: docs/Modus - Upgrading to DaisyUI 5 and TailwindCSS 4 .md §4.4, §4.6, Phase 3 in §8; project .cursor/rules/code-guidelines.mdc for component structure.

Constraints:
- Every *.tailwind.ts and tailwind-themeable.ts uses moduswc: prefix and Daisy 5 class names (§4.4)
- Keep modus-wc-* SCSS hook classes until a deliberate selector rewrite; dual-class pattern from Phase 1
- bordered={false} → *-ghost for inputs/select/textarea where Daisy removed *-bordered
- Confirm join / join-item classes still match Daisy 5; Modus already uses join not btn-group
- Do not refresh Jest snapshots until visual sign-off (Phase 4)—but fix failing specs as you go per component
- Work in batches (forms, navigation, overlays, data display) with build + test after each batch

Explicit visual QA targets (names may survive; chrome may not): tab-active, toggle sizes, mask-*, join-item, badge xs–lg.

Highest risk: button disabled states, form bordered vs ghost, tabs, card compact vs card-sm, menu.

Deliverable: all components migrated; npm run build:ci and npm test pass; Storybook smoke on representative stories per batch; note any stories needing design allowlist for Phase 4 snapshots.
```

### Verification / QA checklist

**Catalog coverage**

- [ ] All 45 `*.tailwind.ts` files emit `moduswc:` (grep: no remaining `modus-wc-flex`-style utilities in tailwind.ts outputs)
- [ ] `tailwind-themeable.ts` updated for dynamic classes under v4 scan + safelist
- [ ] No component still depends on v3-only `tailwind.config.ts` for Daisy

**Daisy 5 remaps**

- [ ] Forms: bordered default; ghost when `bordered={false}`
- [ ] Card: `card-border`, `card-sm` vs `padding="compact"` signed off
- [ ] Tabs: `tabs-border`, `tabs-lift`, `tabs-box`
- [ ] Menu items: `menu-disabled`, `menu-active`, `menu-focus`
- [ ] Join: classes verified against Daisy 5 docs or built CSS

**Themes and RTL**

- [ ] Spot-check each component family in all six themes (Storybook or test apps)
- [ ] RTL pass on navigation, form labels, and table/toolbar clusters (as applicable)

**Surviving-class visual QA (§4.4)**

- [ ] `tab-active`, toggle sizes, `mask-*`, `join-item`, badge sizes reviewed or allowlisted

**Build quality**

- [ ] `npm run build:ci` succeeds
- [ ] `npm run lint` succeeds
- [ ] `npm test` succeeds (snapshots may still be pre-refresh—track debt for Phase 4)
- [ ] `output.css` still ≤ §6 bundle ceilings

**Exit:** Full catalog compiles with v4 CSS; tests green; visual debt list ready for Phase 4 snapshot refresh.

---

## Phase 4 — Tooling and consumers

**Goal:** Wireit graph, Storybook, framework integrations, Blazor/MAUI smoke, and snapshot refresh **after** visual sign-off.

**Prerequisites:** Phase 3 complete; visual sign-off recorded (design or §6 pixel allowlist).

### Prompt (copy into agent or ticket)

```text
You are implementing Phase 4 (tooling and consumers) of the Modus WC 2.0 Tailwind 4 + DaisyUI 5 migration.

Read: docs/Modus - Upgrading to DaisyUI 5 and TailwindCSS 4 .md §4.2, §4.6, Phase 4 in §8; AGENTS.md (wireit, integrations).

Work:
1. Update wireit files/output dependencies for the v4 CSS graph (tailwind:build, tailwind:watch, stencil, start)
2. Confirm Storybook still loads dist/modus-wc-styles.css (or documented intentional change)
3. Smoke integrations/react, integrations/angular, integrations/vue test apps: styles, theme switch, moduswc classes in DOM, shadow roots themed; no unprefixed Tailwind preflight leaking into app in unintended ways
4. Smoke Blazor blazing-story and MAUI if feasible in CI locally: stylesheet loads
5. Re-test unlayered Daisy ul/li vs app utilities (list-none, flex rows) per modus-events-and-overrides guidance
6. After documented visual sign-off: npm run test:update-snapshot for affected components only; full npm test must pass at 100% coverage threshold
7. Confirm no duplicate injection of output.css in shadow roots

Do not bump @stencil/core past 4.38. Do not publish npm package in this phase.
```

### Verification / QA checklist

**Wireit / dev loop**

- [ ] `npm run tailwind:build` (or wireit equivalent) produces `output.css`
- [ ] `npm start` runs Stencil watch + Storybook without Wireit stale-output errors
- [ ] Clean clone: `npm ci` → `npm run build:ci` succeeds

**Storybook**

- [ ] Storybook loads Modus styles; six themes switch from toolbar or app shell
- [ ] Representative stories per component family render without missing utilities

**Framework test apps**

- [ ] React: `integrations/react/test-react-v19` (or current matrix) — shell + form + card smoke
- [ ] Angular: `integrations/angular/test-ng20` (or current) — same
- [ ] Vue: `integrations/vue/test-app` — same
- [ ] `customClass` with `moduswc:` utilities works when documented

**Optional integration smoke**

- [ ] Blazor story app loads `modus-wc-styles.css` without 404
- [ ] MAUI/Android build path still finds styles (if used in your pipeline)

**Cascade / shadow**

- [ ] Checklist rows using `ul`/`li` + Modus icons still layout correctly (no utility override regression)
- [ ] Shadow `@property` fix from Phase 1 still holds on migrated components

**Snapshots**

- [ ] Visual sign-off attached to PR or ticket **before** snapshot update
- [ ] `npm test` at 100% coverage threshold passes after snapshot refresh
- [ ] No snapshot-only PR without corresponding visual review

**Bundle**

- [ ] Final `output.css` and adopted-sheet sizes recorded; still ≤ §6 ceilings

**Exit:** CI-green repo; integrations smoke pass; snapshots match signed-off UI.

---

## Phase 5 — Docs and release

**Goal:** Ship semver major with migration guide, changelog, rollback pin, and internal rule updates. Single npm publish after Phases 1–4.

**Prerequisites:** Phase 4 merged; all §6 gates still pass on release candidate commit.

### Prompt (copy into agent or ticket)

```text
You are implementing Phase 5 (docs and release) of the Modus WC 2.0 Tailwind 4 + DaisyUI 5 migration.

Read: docs/Modus - Upgrading to DaisyUI 5 and TailwindCSS 4 .md Phase 5, §12 rollback, §4.5 variables break; upgrade plan §10 what-not-to-do.

Deliver:
1. Migration guide (new doc under docs/ or release notes) covering:
   - Utility prefix: modus-wc-* → moduswc:* (including customClass)
   - Daisy class remaps table from §4.4
   - modus-wc-variables.css renames AND value shape (channels vs full colors; color-mix)
   - Browser support from upgrade plan §4.0: full at Chrome and Edge 111+, Safari 16.4+, Firefox 128+. Older edge matches Tailwind 3 (Chrome and Edge 99, Firefox 97, Safari 15.4), degraded. Below the @layer floor is unsupported.
   - Consumers who use Tailwind move to Tailwind 4. Do not document Tailwind 3 as a supported way to extend moduswc: classes. Apps that only load modus-wc-styles.css and do not run Tailwind are unaffected.
2. CHANGELOG major entry with breaking changes
3. Semver major bump in package.json; align framework package publish tags per repo release process
4. Record last 1.x pin for rollback (e.g. 1.19.0 + matching -react/-ng/-vue tags) in migration guide
5. Update Cursor/rules or CONTRIBUTING references that still say Daisy v4 channels or modus-wc- utilities
6. Ship the consumer migration script from the upgrade plan §7 (utilities and Daisy remaps; do not rewrite tag names or SCSS hooks). Dry-run by default. Include a fixture that fails if a global `modus-wc-` replace would have changed `modus-wc-button` or `modus-wc-btn`
7. Final CI: npm run lint, npm test, npm run build (or build:ci per release policy)

Publish only when migration guide and rollback pin are merged. Tag release per team process.
```

### Verification / QA checklist

**Migration guide content**

- [ ] Prefix / `customClass` migration with examples (`modus-wc-flex` → `moduswc:flex`)
- [ ] Migration script ships with the major: dry-run, Daisy remaps, fixture that leaves `modus-wc-button` and `modus-wc-btn` unchanged
- [ ] Daisy 5 class remap table (inputs, card, tabs, menu)
- [ ] `modus-wc-variables.css` breaking changes with before/after token examples
- [ ] Browser support floor stated explicitly
- [ ] Tailwind 4 is required for consumers who run Tailwind. Tailwind 3 is not listed as supported.
- [ ] Codemod warning: do not global-replace `modus-wc-` (hooks and tags)

**Rollback (§12)**

- [ ] Last 1.x version and framework dist-tags documented
- [ ] `release/1.x` branch policy noted for maintainers
- [ ] No recommendation to `npm unpublish` or dual-prefix CSS

**Release mechanics**

- [ ] `package.json` version is major bump (2.0.0 or team convention)
- [ ] CHANGELOG lists breaking changes
- [ ] `npm run lint`, `npm test`, `npm run build` / `build:ci` green on release commit
- [ ] Published tarball includes `modus-wc-styles.css`, `modus-wc-variables.css` with v5 content
- [ ] Framework wrappers published on same base semver per project README

**Post-publish smoke (whoever releases)**

- [ ] Fresh app installs `@trimble-oss/moduswebcomponents@<major>` and loads styles + theme
- [ ] One shadow-root host adopts stylesheet; elevation/focus OK
- [ ] Theme switch light/dark/system still works with `modus-theme-config`

**Exit:** Major on npm (and framework registries); migration guide linked from CHANGELOG/README.

---

## Quick reference — §6 bundle ceilings

| Metric | Ceiling |
| ------ | ------- |
| `output.css` uncompressed | 185,789 bytes |
| `output.css` gzipped | 25,753 bytes |
| Adopted default sheet uncompressed | 194,573 bytes |
| Adopted default sheet gzipped | 27,307 bytes |

Re-measure with the same commands as upgrade plan §6 after any phase that touches themes, `@source`, or global CSS.
