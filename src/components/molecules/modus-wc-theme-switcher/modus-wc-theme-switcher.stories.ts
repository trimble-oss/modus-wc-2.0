import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';

interface ThemeSwitcherArgs {
  ariaLabel: string;
  controls?: string;
  customClass?: string;
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
  argTypes: {
    ariaLabel: { control: 'text' },
    controls: { control: 'text' },
    customClass: { control: 'text' },
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
      ></modus-wc-theme-switcher>
    </modus-wc-theme-provider>
  `,
  args: {
    ariaLabel: 'Toggle theme',
    controls: 'mode',
  },
};

export const Default: Story = { ...Template };
