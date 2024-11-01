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
        'modus-classic': 'modus-classic',
        'modus-dark': 'modus-dark',
      },
      defaultTheme: 'modus-classic',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
