import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';
import { modusClassic } from './src/styles/themes/modus-classic';

export default {
  content: ["./src/components/**/*.{js,ts,jsx,tsx}'"],
  daisyui: {
    base: true,
    darkTheme: 'dark',
    logs: true,
    styled: true,
    themeRoot: ':root',
    utils: true,
    themes: [{ 'modus-classic': modusClassic }, 'dark'],
  },
  plugins: [typography, daisyui],
  prefix: 'modus-wc-',
  theme: {
    extend: {},
  },
} satisfies Config;
