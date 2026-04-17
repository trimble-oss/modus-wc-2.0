# Security Remediation Update — April 2026

## Summary

Started with **128 security alerts** (59 high, 57 moderate, 12 low).
Current: **82 vulnerabilities** (46 high, 32 moderate, 4 low).

---

## What Was Done

### 1. Angular 19 Security Bump (PR #1028 — merged to main)

Bumped all Angular 19 packages to patched versions to fix critical XSS/XSRF vulnerabilities:

| Package                         | Before    | After      |
| ------------------------------- | --------- | ---------- |
| `@angular/*` (all)              | `^19.0.0` | `^19.2.21` |
| `@angular-devkit/build-angular` | `^19.2.8` | `^19.2.24` |
| `@angular/cli`                  | `^19.0.0` | `^19.2.24` |
| `ng-packagr`                    | `^19.0.0` | `^19.2.2`  |

**Vulnerabilities fixed:**

- CVE-2026-32635 — XSS in i18n attribute bindings (CVSS 8.6)
- XSRF token leakage via protocol-relative URLs in Angular HTTP Client
- Stored XSS via SVG Animation, SVG URL and MathML attributes
- XSS via unsanitized SVG script attributes

**Impact:** Reduced high-severity alerts in `integrations/angular/ng19` from **19 → 6**.

The 6 remaining high alerts in ng19 are in build tools (`@angular-devkit/build-angular`, `@angular/cli`) and require upgrading to Angular 21+ to resolve — not fixable within the ng19 line.

### 2. Dependabot PR Cleanup (16 PRs merged, 15 closed)

Merged all pending Dependabot security/patch updates into main:

**Merged to main:** #503, #544, #661, #839, #864, #870, #872, #878, #882, #891, #892, #988, #989, #995, #1013, #1029

**Closed (superseded by Angular 19 bump):** #728, #911, #955, #956, #578

**Closed (targeted prod branch, not main):** #419, #726, #768, #823, #830

**Closed (already fixed by weekly audit-fix):** #974, #831, #1031

### 3. ng18 Build Fix (PR #1032 — merged to main)

PR #989 (Dependabot) incorrectly bumped `@angular-devkit/build-angular` to `^21.2.5` in the ng18 integration, causing a peer dependency conflict (`@angular/compiler-cli@^21.x` required, but ng18 has `^18.x`). Reverted to `^18.2.10` (last known-good version).

---

## What Remains Unfixable

### Why these alerts cannot be resolved

Angular 17 and Angular 18 are **end of life** and will never receive security patches:

| Version    | EOL Date          |
| ---------- | ----------------- |
| Angular 17 | May 15, 2025      |
| Angular 18 | November 21, 2025 |

Current unresolvable high-severity alert counts:

- `integrations/angular/ng17` — **~27 high**, 12 moderate
- `integrations/angular/ng18` — **~29 high**, 12 moderate

The specific vulnerabilities (XSS in i18n, XSRF leakage, SVG XSS, serialize-javascript RCE, node-tar path traversal) affect the Angular framework and its build toolchain at versions that will never be patched by the Angular team.

### Do these affect consumers?

**No.** These vulnerabilities exist only in `devDependencies` used during the build process. The published npm packages (`@trimble-oss/moduswebcomponents-angular@*-ng17` and `@*-ng18`) do not ship these vulnerable packages to consumers.

However, the GitHub Security tab will continue to show these alerts as long as ng17/ng18 lockfiles are present in the repo.

### Recommendation

Consumers using the ng17 or ng18 Angular wrapper should **migrate to ng19** (`@trimble-oss/moduswebcomponents-angular@*-ng19`), which is the only actively supported and security-patched version. The ng17 and ng18 packages are no longer receiving security updates.

---

## Still Pending

### Stylelint upgrade (PR #622 — open, Draft)

`stylelint-config-standard-scss` needs to be bumped from **14.0.0 → 16.0.0** alongside `stylelint` **16.19.1 → 16.26.1**.

When merged, the following **20 SCSS violations** will need to be fixed in a follow-up commit (all auto-fixable with `stylelint --fix`):

| Rule                                                                                        | Files affected                                         | Count |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----- |
| `color-function-alias-notation` — `rgba()` must use `rgb()`                                 | autocomplete, button, card, date, panel, utility-panel | 19    |
| `declaration-property-value-keyword-no-deprecated` — `word-break: break-word` is deprecated | tooltip                                                | 1     |

These are **lint-only** changes with zero functional or runtime impact.

### StencilJS update (PR #978 — open)

`@stencil/core` would jump from **4.31.0 → 4.43.3** (12 minor versions). Parked for separate review since Stencil version changes can affect build output and component compilation. Needs a dedicated build + test verification pass before merging.

### Audit reporting in weekly workflow

The `audit-fix.yml` workflow should be enhanced to report remaining high/critical vulnerabilities after each weekly run, giving ongoing visibility into what is fixed and what remains accepted risk.

### DIRTY/conflicted Dependabot PRs (all closed)

All 6 conflicted PRs that Dependabot could not rebase were closed. The changes they contained are either:

- Already fixed by the weekly `audit-fix` workflow (brace-expansion, webpack, yaml)
- Targeting the `prod` branch which is not the primary development branch

---

## Still Pending
