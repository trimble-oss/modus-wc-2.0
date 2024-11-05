import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { fn } from '@storybook/test';
import { IThemeConfig } from '../../../providers/theme/theme.types';

interface ThemeSwitcherArgs {
  ariaLabel: string;
  customClass?: string;
  initialTheme?: Partial<IThemeConfig>;
  themeChange?: (event: CustomEvent) => void;
}

const meta: Meta<ThemeSwitcherArgs> = {
  title: 'Components/Molecules/ThemeSwitcher',
  component: 'modus-wc-theme-switcher',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Theme switcher component that allows consumers to set the initial theme (Modus Classic, Prism, etc) and end-users to toggle modes (Light, Dark).',
      },
    },
  },
  args: {
    ariaLabel: 'Toggle theme',
    customClass: undefined,
    initialTheme: undefined,
    themeChange: fn(),
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'The aria-label attribute for accessibility.',
    },
    customClass: {
      control: 'text',
      description: 'Custom CSS class to apply to the theme switcher element.',
    },
    initialTheme: {
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
    <modus-wc-theme-provider .initialTheme=${args.initialTheme}>
      <modus-wc-theme-switcher
        aria-label=${args.ariaLabel}
        custom-class=${args.customClass}
        @themeChange=${args.themeChange}
      ></modus-wc-theme-switcher>
    </modus-wc-theme-provider>
  `,
};

export const Default: Story = { ...Template };
