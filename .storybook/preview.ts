import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { DocsContainer } from '@storybook/blocks';
import { themes } from '@storybook/theming';
import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';
import { createElement } from 'react';
import { defineCustomElements } from '../dist/loader';
import customElements from '../src/custom-elements.json';
import a11yConfig from './a11yConfig';
import '../src/styles/modus-icons.css';

defineCustomElements();
setCustomElementsManifest(customElements);

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    a11y: a11yConfig,
    // To handle Tailwind dark mode if needed
    backgrounds: { disable: true },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    docs: {
      // Sets the background color of the autodocs page to match the theme.
      // This needs to be updated if any additional dark themes are added.
      container: (props: any) => {
        const el = document.querySelector('html');
        const theme =
          props?.context.store.userGlobals.globals.theme ===
            'modus-classic-dark' ||
          props?.context.store.userGlobals.globals.theme === 'modus-modern-dark'
            ? themes.dark
            : themes.light;
        el!.dataset['theme'] = props?.context.store.userGlobals.globals.theme;
        const newProps = { ...props, theme };
        return createElement(DocsContainer, newProps);
      },
      controls: { sort: 'requiredFirst' },
    },
    layout: 'centered',
    options: {
      storySort: (a, b) => {
        // Get the full title paths
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();

        // Make "Documentation/Getting Started" appear first (what page we go to on load)
        if (aTitle === 'documentation/getting started') return -1;
        if (bTitle === 'documentation/getting started') return 1;

        // Then make Documentation section appear next
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
        'modus-modern-light': 'modus-modern-light',
        'modus-modern-dark': 'modus-modern-dark',
        'modus-classic-light': 'modus-classic-light',
        'modus-classic-dark': 'modus-classic-dark',
      },
      defaultTheme: 'modus-modern-light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
