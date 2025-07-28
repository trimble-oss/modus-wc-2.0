import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IThemeConfig } from '../../providers/theme/theme.types';

interface ThemeSwitcherArgs {
  'custom-class'?: string;
  'initial-theme'?: Partial<IThemeConfig>;
}

interface ThemeTestArgs {
  theme: 'modus-modern' | 'modus-classic';
  mode: 'light' | 'dark';
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

const Template: Story = {
  // prettier-ignore
  render: (args) => html`
<modus-wc-theme-provider .initialTheme=${args['initial-theme']}>
  <modus-wc-theme-switcher
    aria-label="Theme toggle"
    custom-class=${ifDefined(args['custom-class'])}
  ></modus-wc-theme-switcher>
</modus-wc-theme-provider>
  `,
};

export const Default: Story = { ...Template };

// New story for testing theme configurations
type ThemeTestStory = StoryObj<ThemeTestArgs>;

const ThemeTestTemplate: ThemeTestStory = {
  args: {
    theme: 'modus-modern',
    mode: 'light',
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['modus-modern', 'modus-classic'],
      description: 'The theme to apply',
    },
    mode: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'The theme mode (light or dark)',
    },
  },
  render: (args) => html`
    <modus-wc-theme-provider
      .initialTheme=${{ theme: args.theme, mode: args.mode }}
    >
      <div
        style="padding: 40px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;"
      >
        <h2 style="text-align: center; color: var(--mwc-color-on-surface);">
          Theme Configuration Test
        </h2>
        <p
          style="text-align: center; color: var(--mwc-color-on-surface-secondary); margin-bottom: 30px;"
        >
          Testing ${args.mode} mode with ${args.theme} theme
        </p>

        <div
          style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 30px;"
        >
          <modus-wc-button color="primary">Primary Button</modus-wc-button>
          <modus-wc-button color="secondary">Secondary Button</modus-wc-button>
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
  `,
};

export const ThemeTest: ThemeTestStory = {
  ...ThemeTestTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'Test different theme and mode combinations. Use the controls to switch between themes and modes.',
      },
    },
  },
};
