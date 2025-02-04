import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisyColor, ModusSize } from '../../types';

interface ChipArgs {
  'aria-label': string;
  active?: boolean;
  color: DaisyColor;
  'custom-class'?: string;
  disabled?: boolean;
  'has-error'?: boolean;
  label: string;
  size: ModusSize;
  variant: 'filled' | 'outline';
}

const meta: Meta<ChipArgs> = {
  title: 'Components/Chip',
  component: 'modus-wc-chip',
  args: {
    'aria-label': 'Example chip',
    color: 'primary',
    label: 'Chip',
    size: 'md',
    variant: 'filled',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'accent',
        'neutral',
        'info',
        'success',
        'warning',
        'error',
      ],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['filled', 'outline'],
    },
  },
};

export default meta;

type Story = StoryObj<ChipArgs>;

const Template: Story = {
  render: (args) => {
    return html` <modus-wc-chip
      aria-label=${args['aria-label']}
      active=${ifDefined(args.active)}
      color=${args.color}
      disabled=${ifDefined(args.disabled)}
      has-error=${ifDefined(args['has-error'])}
      label=${args.label}
      size=${args.size}
      variant=${args.variant}
    />`;
  },
};

export const Default: Story = { ...Template };

export const WithAvatar: Story = {
  render: (args) => {
    return html`
      <modus-wc-chip
        label=${args.label}
        size=${args.size}
        variant=${args.variant}
      >
        <modus-wc-avatar
          img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg"
          slot="left"
          size="xs"
        ></modus-wc-avatar>
      </modus-wc-chip>
    `;
  },
};
