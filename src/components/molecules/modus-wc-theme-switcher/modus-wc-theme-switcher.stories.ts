import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IThemeConfig } from '../../../providers/theme/theme.types';

interface ThemeSwitcherArgs {
  'a11y-label': string;
  'custom-class'?: string;
  'initial-theme'?: Partial<IThemeConfig>;
}

const meta: Meta<ThemeSwitcherArgs> = {
  title: 'Components/ThemeSwitcher',
  component: 'modus-wc-theme-switcher',
  args: {
    'a11y-label': 'Toggle theme',
    'custom-class': undefined,
    'initial-theme': undefined,
  },
  argTypes: {
    'a11y-label': {
      control: 'text',
      description: 'The a11y-label attribute for accessibility.',
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
    a11y-label=${args['a11y-label']}
    custom-class=${ifDefined(args['custom-class'])}
  ></modus-wc-theme-switcher>
</modus-wc-theme-provider>
  `,
};

export const Default: Story = { ...Template };
