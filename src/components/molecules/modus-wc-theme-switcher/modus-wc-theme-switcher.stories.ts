import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { fn } from '@storybook/test';

interface ThemeSwitcherArgs {
  ariaLabel: string;
  controls?: string;
  customClass?: string;
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
          'Theme switcher component that allows users to toggle between different themes (Modus Classic, Prism) and modes (Light, Dark).',
      },
    },
    layout: 'centered',
  },
  args: { themeChange: fn() },
  argTypes: {
    ariaLabel: { control: 'text' },
    controls: {
      control: { type: 'select' },
      options: ['theme', 'mode', 'both'],
    },
    customClass: { control: 'text' },
    themeChange: {
      action: 'themeChange',
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
    <modus-wc-theme-provider>
      <modus-wc-theme-switcher
        aria-label=${args.ariaLabel}
        controls=${args.controls}
        custom-class=${args.customClass}
        @themeChange=${args.themeChange}
      ></modus-wc-theme-switcher>
    </modus-wc-theme-provider>
  `,
  args: {
    ariaLabel: 'Toggle theme',
    controls: 'mode',
  },
};

export const Default: Story = { ...Template };
