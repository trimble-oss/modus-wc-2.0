# Phosphor Icons Integration Plan

## Overview

This document describes the plan to replace the current Modus Icons webfont system with a pure CSS approach using Phosphor Icons via the [`phosphor-icons-css-vars`](https://www.npmjs.com/package/phosphor-icons-css-vars) package. The goal is to eliminate the webfont CDN dependency and deliver icons as CSS custom properties with SVG data URIs using CSS mask rendering.

## Background

### Current System (Webfont)

Icons are loaded via `@font-face` from a CDN in `src/styles/modus-icons.css`:

```css
@font-face {
  font-family: 'modus-icons';
  src: url('https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-outlined/fonts/modus-icons.woff2') format('woff2');
}
```

The `modus-wc-icon` component renders the icon name as ligature text inside an `<i>` tag:

```html
<i class="modus-wc-icon modus-icons modus-wc-icon--md">close</i>
```

The font converts the text "close" into the icon glyph via ligatures.

### Problems with Webfont Approach

- Requires a CDN network request before icons render (causes flash of missing icons)
- Fails in offline environments or restricted networks
- Cannot work self-contained inside shadow DOM without extra setup
- No control over the icon rendering without loading the full font file

### New System (CSS Mask)

Icons are delivered as SVG data URIs embedded in CSS custom properties. The icon renders as a CSS mask applied to a colored element:

```css
:root {
  --modus-outlined-icon-close: url("data:image/svg+xml;utf8,...");
  --modus-solid-icon-close: url("data:image/svg+xml;utf8,...");
}

.modus-outlined-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: currentColor;
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
}

.modus-outlined-icon-close {
  mask-image: var(--modus-outlined-icon-close);
}
```

Usage:

```html
<i class="modus-outlined-icon modus-outlined-icon-close"></i>
```

## Package

### `phosphor-icons-css-vars`

- **npm**: [`phosphor-icons-css-vars`](https://www.npmjs.com/package/phosphor-icons-css-vars)
- **GitHub**: [coliff/phosphor-icons-css-vars](https://github.com/coliff/phosphor-icons-css-vars)
- **Version**: v0.0.2 _(temporary — a proper versioned release with Modus naming will replace this)_
- **Author**: Christian Oliff
- **License**: MIT

The package currently ships 6 CSS files (one per weight variant) using Phosphor's native naming:

| File | Size (gzipped) | Variant |
|------|---------------|---------|
| `phosphor-icons-regular.css` | ~87KB | Regular (outline) |
| `phosphor-icons-fill.css` | ~165KB | Fill (solid) |
| `phosphor-icons-duotone.css` | ~109KB | Duotone |
| `phosphor-icons-thin.css` | ~90KB | Thin |
| `phosphor-icons-light.css` | ~90KB | Light |
| `phosphor-icons-bold.css` | ~90KB | Bold |

### What Variants We Need

Only two variants are used in the codebase (`modus-wc-icon` component accepts `'outlined' | 'solid'`):

- `phosphor-icons-regular.css` → maps to `outlined` variant
- `phosphor-icons-fill.css` → maps to `solid` variant

The other four (duotone, thin, light, bold) are not needed.

## Required Changes to the Package

The package currently uses Phosphor's native naming. It needs to be updated to use Modus naming conventions so integration is seamless.

### Naming Changes Required

| | Current (Phosphor) | Required (Modus) |
|---|---|---|
| CSS variable (outlined) | `--ph-icon-heart` | `--modus-outlined-icon-heart` |
| CSS variable (solid) | `--ph-icon-heart-fill` | `--modus-solid-icon-heart` |
| Base class (outlined) | `.ph` | `.modus-outlined-icon` |
| Base class (solid) | `.ph` | `.modus-solid-icon` |
| Icon class (outlined) | `.ph-heart` | `.modus-outlined-icon-heart` |
| Icon class (solid) | `.ph-heart-fill` | `.modus-solid-icon-heart` |
| Icon names | Phosphor names (`x`, `house`, `bell`) | Modus names (`close`, `home`, `notifications`) |

### Icon Name Mapping

The design team is defining the mapping between Phosphor icon names and Modus icon names in the [Modus 2.0 Icons Figma file](https://www.figma.com/design/pZSiZj9x8SCvDUoe5Wo8Ia/Modus-2.0-Icons--Phosphor-Icons-). Each Phosphor icon will be given a Modus-compatible name as its label. The package build script should consume this mapping to generate the final CSS with Modus names.

Of the 638 core Modus icons:
- **126** have exact name matches in Phosphor (no rename needed, e.g., `calendar`, `heart`, `bug`)
- **511** need renaming (e.g., Phosphor `x` → Modus `close`, Phosphor `house` → Modus `home`)
- **1** has no Phosphor equivalent: `trimble-logo` (kept as custom SVG)

The new package will also include ~874 additional Phosphor-only icons using their native Phosphor names, giving consumers access to 1512 total icons (up from 638).

## Integration into `modus-wc-2.0`

Once the package is updated with Modus naming, two files need to change.

### 1. `src/styles/modus-icons.css`

Replace the `@font-face` webfont declarations with the CSS from the updated package. The file will contain:

```css
/* CSS custom properties for all icon SVG data URIs */
:root {
  --modus-outlined-icon-close: url("data:image/svg+xml;utf8,...");
  --modus-outlined-icon-home: url("data:image/svg+xml;utf8,...");
  /* ...all outlined icons... */

  --modus-solid-icon-close: url("data:image/svg+xml;utf8,...");
  --modus-solid-icon-home: url("data:image/svg+xml;utf8,...");
  /* ...all solid icons... */
}

/* Base mask setup for outlined icons */
.modus-outlined-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: currentColor;
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
}

/* Base mask setup for solid icons */
.modus-solid-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: currentColor;
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
}

/* Per-icon classes (for plain HTML usage) */
.modus-outlined-icon-close { mask-image: var(--modus-outlined-icon-close); }
.modus-outlined-icon-home  { mask-image: var(--modus-outlined-icon-home); }
/* ...all 638 outlined icon classes... */

.modus-solid-icon-close { mask-image: var(--modus-solid-icon-close); }
.modus-solid-icon-home  { mask-image: var(--modus-solid-icon-home); }
/* ...all 638 solid icon classes... */
```

No other files that reference `modus-icons.css` need to change:
- `stencil.config.ts` — still copies `modus-icons.css` to dist (same filename, same path)
- `scripts/embed-css.js` — still reads `modus-icons.css` (same path)
- `.storybook/preview.ts` — still imports `modus-icons.css` (same import)
- Integration apps — still load the same CSS file

### 2. `src/components/modus-wc-icon/modus-wc-icon.tsx`

Two changes in the component:

**`getClasses()` — add the per-icon class:**

```tsx
// Before
if (this.variant === 'outlined') {
  classList.push('modus-icons-outlined');
} else if (this.variant === 'solid') {
  classList.push('modus-icons-solid');
} else {
  classList.push('modus-icons');
}

// After
if (this.variant === 'solid') {
  classList.push('modus-solid-icon');
  classList.push(`modus-solid-icon-${this.name}`);
} else {
  // 'outlined' is the default
  classList.push('modus-outlined-icon');
  classList.push(`modus-outlined-icon-${this.name}`);
}
```

**`render()` — remove ligature text content:**

```tsx
// Before
<i class={this.getClasses()} ...>
  {this.name}
</i>

// After
<i class={this.getClasses()} ...></i>
```

### What Does NOT Change

- `modus-wc-icon` public API — `name`, `variant`, `size`, `decorative`, `customClass` props stay identical
- All components using `<modus-wc-icon>` — no changes needed
- `modus-wc-icon.scss` — size classes (`modus-wc-icon--xs` through `--xl`) still work via `font-size` since the base class uses `width: 1em; height: 1em`
- Snapshot tests — will need updating due to changed rendered HTML, but no logic changes

## Scope

**Replacing:** Core Modus Icons (638 icons, `modus-outlined` and `modus-solid` sets)

**Not changing:** Sector-specific icon sets — these remain as-is:
- `connect` (340 icons)
- `field-systems` (87 icons)
- `transportation` (121 icons)

## Performance

| | Current (Webfont) | New (CSS Mask) |
|---|---|---|
| Network requests | 1–2 CDN requests for `.woff2` files | 0 extra requests (embedded in CSS) |
| Offline support | No | Yes |
| Shadow DOM support | Requires extra setup | Works natively (CSS vars pierce shadow) |
| Flash of missing icons | Yes (font loads async) | No (CSS is synchronous) |
| File size (outlined) | ~50KB `.woff2` + CSS | ~87KB CSS (gzipped), self-contained |
| Color theming | Via `color` CSS property | Via `color` CSS property (identical) |
| Sizing | Via `font-size` | Via `font-size` (identical, `1em` based) |

## Hosting

The updated CSS files will also be hosted on [modus-icons.trimble.com](https://modus-icons.trimble.com/) for consumers who want to use the icons without the `modus-wc-icon` component (plain HTML, other frameworks). The hosted files support both usage patterns:

```html
<!-- Plain HTML (class-based) -->
<i class="modus-outlined-icon modus-outlined-icon-close"></i>

<!-- Custom CSS (variable-based) -->
<style>
  .my-icon {
    mask-image: var(--modus-outlined-icon-close);
  }
</style>
```

## Blocked On

Implementation is blocked until:
1. The design team completes the Phosphor-to-Modus name mapping in Figma
2. The `phosphor-icons-css-vars` package is updated with Modus naming conventions
