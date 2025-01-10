import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { IThemeConfig } from '../../../providers/theme/theme.types';

interface ThemeSwitcherArgs {
  'aria-label': string;
  'custom-class'?: string;
  'initial-theme'?: Partial<IThemeConfig>;
}

const meta: Meta<ThemeSwitcherArgs> = {
  title: 'Components/ThemeSwitcher',
  component: 'modus-wc-theme-switcher',
  args: {
    'aria-label': 'Toggle theme',
    'custom-class': undefined,
    'initial-theme': undefined,
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
        defaultValue: { summary: '{ theme: "modus-modern" }' },
      },
    },
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

// prettier-ignore
const Template: Story = {
  render: (args) => html`
<modus-wc-theme-provider .initialTheme=${args['initial-theme']}>
  <modus-wc-theme-switcher
    aria-label=${args['aria-label']}
    custom-class=${ifDefined(args['custom-class'])}
  ></modus-wc-theme-switcher>
</modus-wc-theme-provider>
  `,
};

export const Default: Story = { ...Template };
