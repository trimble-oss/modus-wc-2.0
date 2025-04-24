import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { modusClassic } from './src/styles/themes/modus-classic';
import { modusModern } from './src/styles/themes/modus-modern';

export default {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/styles/tailwind-themeable.ts',
    './src/styles/themes/*.ts',
  ],
  plugins: [typography],
  prefix: 'modus-wc-',
  theme: {
    extend: {},
  },
} satisfies Config;
