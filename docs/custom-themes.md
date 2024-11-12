# Contributing New Themes

> [!IMPORTANT]
> Themes should only be added after designs have been approved by the following Trimble teams:
>
> - Modus design
> - Marketing (branding)

We're using DaisyUI. Read their documentation on [custom theming](https://daisyui.com/docs/themes/#-4)
and [colors](https://daisyui.com/docs/colors/) before creating a new theme.

If you'd like to add a new theme to the library:

1. Add your theme to the `ThemeName` type in `src/providers/theme/theme.types.ts`

```typescript
export type ThemeName = 'modus-classic' | 'my-theme' | 'prism';
```

2. Create a new theme file in `src/styles/themes/`
3. Follow the existing theme structure from `modus-classic.ts`:

```typescript
import { common } from './common';

/* Overrides of common DaisyUI CSS variables */
const commonOverrides = {
  ...common,

  '--rounded-badge': '0.75rem',
};

export const myNewTheme = {
  light: {
    ...commonOverrides,

    // Colors - must be direct color values, CSS variables are not supported
    primary: '#0063a3',
    'primary-focus': '#003054',
    // ... other color values
  },
  dark: {
    // ... dark theme values
  },
};
```

4. Add your theme (with supported modes) to `tailwind.config.ts`:

```typescript
export default {
  // ... other config
  daisyui: {
    themes: [
      { 'modus-classic-light': modusClassic.light },
      { 'modus-classic-dark': modusClassic.dark },
      { 'my-theme-light': myNewTheme.light },
      { 'my-theme-dark': myNewTheme.dark },
    ],
  },
} satisfies Config;
```
