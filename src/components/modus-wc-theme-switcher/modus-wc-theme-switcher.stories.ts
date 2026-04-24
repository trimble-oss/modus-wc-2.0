import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { IThemeConfig } from '../../providers/theme/theme.types';

interface ThemeSwitcherArgs {
  'custom-class'?: string;
  'initial-theme'?: Partial<IThemeConfig>;
}

const meta: Meta<ThemeSwitcherArgs> = {
  title: 'Components/ThemeSwitcher',
  component: 'modus-wc-theme-switcher',
  args: {
    'custom-class': undefined,
    'initial-theme': undefined,
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['themeChange'],
    },
  },
};

export default meta;

type Story = StoryObj<ThemeSwitcherArgs>;
// When no data-theme is set on the root element, default to the design system's base theme "modus-modern-light"
const getCurrentTheme = () => {
  const dataTheme =
    document.documentElement.getAttribute('data-theme') || 'modus-modern-light';
  const mode = dataTheme.endsWith('-dark') ? 'dark' : 'light';
  const theme = dataTheme.replace(`-${mode}`, '');
  return { theme, mode };
};

const Template: Story = {
  // prettier-ignore
  render: (args) => {
    const currentTheme = getCurrentTheme();
    return html`
      <modus-wc-theme-provider .initialTheme=${currentTheme}>
        <modus-wc-theme-switcher
          aria-label="Theme toggle"
          custom-class=${ifDefined(args['custom-class'])}
        ></modus-wc-theme-switcher>
      </modus-wc-theme-provider>
    `;
  },
};

export const Default: Story = { ...Template };

// New story for testing theme configurations
const ThemeTestTemplate: Story = {
  render: () => {
    const currentTheme = getCurrentTheme();

    return html`
      <modus-wc-theme-provider .initialTheme=${currentTheme}>
        <div style="padding: 40px">
          <h2 style="text-align: center; color: var(--mwc-color-on-surface);">
            Theme Configuration Test
          </h2>
          <p
            style="text-align: center; color: var(--mwc-color-on-surface-secondary); margin-bottom: 30px;"
          >
            This story matches the global Storybook theme
          </p>

          <div
            style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 30px;"
          >
            <modus-wc-button color="primary">Primary Button</modus-wc-button>
            <modus-wc-button color="secondary"
              >Secondary Button</modus-wc-button
            >
            <modus-wc-button color="tertiary">Tertiary Button</modus-wc-button>
            <modus-wc-button color="danger">Danger Button</modus-wc-button>
          </div>

          <div
            style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; align-items: center;"
          >
            <modus-wc-badge color="primary">Badge</modus-wc-badge>
            <modus-wc-badge color="secondary">Badge 2</modus-wc-badge>
            <modus-wc-chip label="Chip 1"></modus-wc-chip>
            <modus-wc-chip label="Chip 2" active></modus-wc-chip>
            <modus-wc-switch label="Switch"></modus-wc-switch>
          </div>
        </div>
      </modus-wc-theme-provider>
    `;
  },
};

export const ThemeTest: Story = {
  ...ThemeTestTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'This example syncs with the active Storybook theme. Toggle between light and dark modes using the theme switcher on the default story to see the components adapt accordingly.',
      },
    },
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('theme-switcher-shadow-host')) {
      const ThemeSwitcherShadowHost = createShadowHostClass<ThemeSwitcherArgs>({
        componentTag: 'modus-wc-theme-switcher',
        propsMapper: (v: ThemeSwitcherArgs, el: HTMLElement) => {
          const themeSwitcherEl = el as unknown as {
            customClass: string;
          };
          themeSwitcherEl.customClass = v['custom-class'] || '';
        },
      });
      customElements.define(
        'theme-switcher-shadow-host',
        ThemeSwitcherShadowHost
      );
    }

    return html`
      <modus-wc-theme-provider .initialTheme=${getCurrentTheme()}>
        <theme-switcher-shadow-host
          .props=${{ ...args }}
        ></theme-switcher-shadow-host>
      </modus-wc-theme-provider>
    `;
  },
};
