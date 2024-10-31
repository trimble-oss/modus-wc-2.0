import { defineCustomElements } from '../dist/esm/loader';
import '../src/styles/tailwind.css';

defineCustomElements();

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme || 'modus-classic';
    document.documentElement.setAttribute('data-theme', theme);
    return Story();
  },
];

export const globalTypes = {
  theme: {
    name: 'Theme Switcher',
    description: 'Select a theme',
    defaultValue: 'modus-classic',
    toolbar: {
      icon: 'circlehollow',
      items: [
        {
          value: 'modus-classic',
          icon: 'circlehollow',
          title: 'Modus Classic',
        },
        { value: 'modus-dark', icon: 'circle', title: 'Modus Dark' },
        // Add more themes as needed
      ],
    },
  },
};
