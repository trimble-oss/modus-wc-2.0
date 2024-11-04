import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';
import { defineCustomElements } from '../loader';
import customElements from '../src/custom-elements.json';

defineCustomElements();
setCustomElementsManifest(customElements);

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    // To handle Tailwind dark mode if needed
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      controls: {
        sort: 'requiredFirst',
      },
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
