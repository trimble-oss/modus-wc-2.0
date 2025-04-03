import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';
import { modusClassic } from './src/styles/themes/modus-classic';
import { modusModern } from './src/styles/themes/modus-modern';

export default {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/styles/tailwind-themeable.ts',
    './src/styles/themes/*.ts',
  ],
  daisyui: {
    base: true,
    darkTheme: 'modus-modern-dark',
    logs: false,
    styled: true,
    themeRoot: ':root',
    utils: true,
    themes: [
      { 'modus-classic-light': modusClassic.light },
      { 'modus-classic-dark': modusClassic.dark },
      { 'modus-modern-light': modusModern.light },
      { 'modus-modern-dark': modusModern.dark },
    ],
  },
  plugins: [typography, daisyui],
  prefix: 'modus-wc-',
  theme: {
    screens: { sm: '480px', md: '768px', lg: '976px', xl: '1440px' },
    colors: { 'trimble-blue': '#0063a3' },
    fontFamily: { sans: ['Open Sans', 'sans-serif'] },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
    },
    extend: {
      spacing: { '128': '32rem', '144': '36rem' },
      borderRadius: { card: '1rem' },
    },
  },
} satisfies Config;
