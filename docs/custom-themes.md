# Contributing New Themes

> [!IMPORTANT]
> Themes should only be added after designs have been approved by the following Trimble teams:
>
> - Modus design
> - Marketing (branding)

Themes are CSS-first DaisyUI 5 themes. The only in-repo theme source is the generated `@plugin "daisyui/theme"` file, `src/styles/generated/daisyui-themes.css`. It is produced from `src/styles/themes/*.ts` by `scripts/generate-daisyui-themes.mjs` and imported from `src/styles/tailwind-v4-core.css`. Do not hand-edit the generated file, and do not add a second theme copy in `tailwind.config`.

Read [DaisyUI 5 themes](https://daisyui.com/docs/themes/) before adding a theme. There is no `--prefersdark` flag. `theme.store.ts` still sets `data-theme` to a named theme such as `modus-modern-dark`.

## Token shape (breaking)

DaisyUI 5 tokens are full colors. DaisyUI 4 channel tokens are gone.

| DaisyUI 4                      | DaisyUI 5                                                                                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `--p: 48% 0.12 247`            | `--color-primary: #0063a3`                                                                                                        |
| `--rounded-btn`                | `--radius-field`                                                                                                                  |
| `--rounded-box`                | `--radius-box`                                                                                                                    |
| `--rounded-badge`              | `--radius-selector`                                                                                                               |
| `--border-btn`                 | `--border`                                                                                                                        |
| `--btn-focus-scale`, `*-focus` | Removed from Daisy. Press scale is in `modus-wc-button.scss`. Focus colors are published as `--color-primary-focus` (full color). |

`oklch(var(--p) / 0.2)` is invalid after this change. Use `color-mix()`:

```css
color-mix(in oklab, var(--color-primary) 20%, transparent);
```

Every generated theme locks density so DaisyUI 5's smaller defaults do not apply:

- `--size-field: 0.3rem` keeps `.btn-md` and default fields at 3rem (`0.3rem * 10`)
- `--size-selector: 0.25rem` keeps checkbox, radio, and toggle at 1.5rem (`0.25rem * 6`)

## Add a built-in theme

1. Add the name to `ThemeName` in `src/providers/theme/theme.types.ts`.

```typescript
export type ThemeName = 'modus-classic' | 'modus-modern' | 'my-theme';
```

2. Add `src/styles/themes/my-theme.ts`, following `modus-classic.ts`. Color values must be real colors (hex, `rgb()`, or similar). CSS variables are not supported inside the theme object. The generator maps historical keys onto DaisyUI 5 names (`--rounded-btn` becomes `--radius-field`, `primary` becomes `--color-primary`).

```typescript
import { common } from './common';

const commonOverrides = {
  ...common,
  '--rounded-badge': '0.75rem',
};

export const myNewTheme = {
  light: {
    ...commonOverrides,
    primary: '#0063a3',
    'primary-content': '#ffffff',
    'primary-focus': '#003054',
  },
  dark: {
    ...commonOverrides,
    primary: '#019aeb',
    'primary-content': '#000000',
    'primary-focus': '#004f83',
  },
};
```

3. Register the light and dark palettes in `scripts/generate-daisyui-themes.mjs`, then add the theme names to the `@plugin "daisyui"` list in `src/styles/tailwind-v4-core.css`.

4. Regenerate:

```bash
npm run generate:daisyui-themes
npm run tailwind:build
```

`modus-wc-variables.css` is regenerated from the built stylesheet. It publishes the same full-color `--color-*` and `--radius-*` tokens. It does not publish `--p` channels.

## External or community theme

An app can add a theme without rebuilding Modus. Load a stylesheet and set `data-theme` to that name. `ThemeName` has to allow the name. Use full colors and the same size locks:

```css
[data-theme='acme-light'] {
  color-scheme: light;
  --color-primary: #0063a3;
  --color-primary-content: #ffffff;
  --color-base-100: #ffffff;
  --color-base-200: #cbcdd6;
  --color-base-300: #b7b9c3;
  --color-base-content: #252a2e;
  --radius-field: 0.5rem;
  --radius-box: 1rem;
  --radius-selector: 0.25rem;
  --border: 1px;
  --size-field: 0.3rem;
  --size-selector: 0.25rem;
  --modus-wc-color-primary: #0063a3;
  --modus-wc-color-base-page: #ffffff;
}
```
