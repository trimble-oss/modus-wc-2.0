import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
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
