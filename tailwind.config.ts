import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';
import { modusClassic } from './src/styles/themes/modus-classic';
import { prism } from './src/styles/themes/prism';

export default {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/styles/tailwind-themeable.ts',
    './src/styles/themes/*.ts',
  ],
  daisyui: {
    base: true,
    darkTheme: 'modus-classic-dark',
    logs: false,
    styled: true,
    themeRoot: ':root',
    utils: true,
    themes: [
      { 'modus-classic-light': modusClassic.light },
      { 'modus-classic-dark': modusClassic.dark },
      { 'prism-light': prism.light },
      { 'prism-dark': prism.dark },
    ],
  },
  plugins: [typography, daisyui],
  prefix: 'modus-wc-',
  theme: {
    extend: {},
  },
} satisfies Config;
