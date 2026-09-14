import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';
import { modusClassic } from './src/styles/themes/modus-classic';
import { modusModern } from './src/styles/themes/modus-modern';
import { connect } from './src/styles/themes/connect';

export default {
  content: [
    './src/components/**/*.{ts,tsx,scss}',
    './src/styles/tailwind-themeable.ts',
    './src/styles/global.css',
    './src/styles/variables.css',
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
      { 'connect-light': connect.light },
      { 'connect-dark': connect.dark },
    ],
  },
  plugins: [typography, daisyui],
  prefix: 'modus-wc-',
  theme: {
    extend: {},
  },
} satisfies Config;
