import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';
import { modusClassic } from './src/styles/themes/modus-classic';
import { modusDark } from './src/styles/themes/modus-dark';

export default {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/styles/tailwind-themeable.ts',
  ],
  daisyui: {
    base: true,
    darkTheme: 'modus-dark',
    logs: true,
    styled: true,
    themeRoot: ':root',
    utils: true,
    themes: [{ 'modus-classic': modusClassic }, { 'modus-dark': modusDark }],
  },
  plugins: [typography, daisyui],
  prefix: 'modus-wc-',
  theme: {
    extend: {},
  },
} satisfies Config;
