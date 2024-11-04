import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/web-components';
import { defineCustomElements } from '../loader';

defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // To handle Tailwind dark mode if needed
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        'modus-classic-light': 'modus-classic-light',
        'modus-classic-dark': 'modus-classic-dark',
        'prism-light': 'prism-light',
        'prism-dark': 'prism-dark',
      },
      defaultTheme: 'modus-classic-light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
