import jitiFactory from 'jiti';

const createJiti = jitiFactory;
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

const jiti = createJiti(import.meta.url);
const { connect } = jiti('../src/styles/themes/connect.ts');
const { modusClassic } = jiti('../src/styles/themes/modus-classic.ts');
const { modusModern } = jiti('../src/styles/themes/modus-modern.ts');

/** @type {import('tailwindcss').Config} */
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
};
