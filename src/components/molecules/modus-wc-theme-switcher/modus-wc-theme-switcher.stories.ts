import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { fn } from '@storybook/test';
import { IThemeConfig } from '../../../providers/theme/theme.types';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ThemeSwitcherArgs {
  'aria-label': string;
  'custom-class'?: string;
  'initial-theme'?: Partial<IThemeConfig>;
  themeChange?: (event: CustomEvent) => void;
}

const meta: Meta<ThemeSwitcherArgs> = {
  title: 'Components/Molecules/ThemeSwitcher',
  component: 'modus-wc-theme-switcher',
  parameters: {
    docs: {
      description: {
        component:
          'Theme switcher component that allows consumers to set the initial theme (Modus Classic, Prism, etc) and end-users to toggle modes (Light, Dark).',
      },
    },
    layout: 'centered',
  },
  args: {
    'aria-label': 'Toggle theme',
    'custom-class': undefined,
    'initial-theme': undefined,
    themeChange: fn(),
  },
  argTypes: {
    'aria-label': {
      control: 'text',
      description: 'The aria-label attribute for accessibility.',
    },
    'custom-class': {
      control: 'text',
      description: 'Custom CSS class to apply to the theme switcher element.',
    },
    'initial-theme': {
      control: 'object',
      description: 'Initial theme configuration (set on the theme provider).',
      table: {
        defaultValue: { summary: '{ theme: "modus-classic" }' },
      },
    },
    themeChange: {
      action: 'themeChange',
      description: 'An event that fires when the theme is changed.',
      table: {
        category: 'Events',
      },
    },
  },
};

export default meta;

type Story = StoryObj<ThemeSwitcherArgs>;

const Template: Story = {
  render: (args) => html`
    <modus-wc-theme-provider .initialTheme=${args['initial-theme']}>
      <modus-wc-theme-switcher
        aria-label=${args['aria-label']}
        custom-class=${ifDefined(args['custom-class'])}
        @themeChange=${args.themeChange}
      ></modus-wc-theme-switcher>
    </modus-wc-theme-provider>
  `,
};

export const Default: Story = { ...Template };
