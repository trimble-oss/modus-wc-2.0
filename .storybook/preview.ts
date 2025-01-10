import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';
import { defineCustomElements } from '../loader';
import customElements from '../src/custom-elements.json';
import a11yConfig from './a11yConfig';

defineCustomElements();
setCustomElementsManifest(customElements);

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    a11y: a11yConfig,
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
    layout: 'centered',
    options: {
      storySort: (a, b) => {
        // Get the full title paths
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();

        // Make Documentation section appear first
        if (
          aTitle.startsWith('documentation') &&
          !bTitle.startsWith('documentation')
        ) {
          return -1;
        }
        if (
          !aTitle.startsWith('documentation') &&
          bTitle.startsWith('documentation')
        ) {
          return 1;
        }

        // Special case for Forms section to ensure proper alphabetical ordering
        if (aTitle.includes('forms/') && bTitle.includes('forms/')) {
          return aTitle.localeCompare(bTitle);
        }

        // Default alphabetical sorting for everything else
        return aTitle.localeCompare(bTitle);
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        'modus-classic-light': 'modus-classic-light',
        'modus-classic-dark': 'modus-classic-dark',
        'modus-modern-light': 'modus-modern-light',
        'modus-modern-dark': 'modus-modern-dark',
      },
      defaultTheme: 'modus-modern-light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
