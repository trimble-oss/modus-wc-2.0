import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../../types';

interface ChipArgs {
  'aria-label': string;
  active?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'has-error'?: boolean;
  label: string;
  'show-remove'?: boolean;
  size: ModusSize;
  variant: 'filled' | 'outline';
}

const meta: Meta<ChipArgs> = {
  title: 'Components/Chip',
  component: 'modus-wc-chip',
  args: {
    'aria-label': 'Example chip',
    label: 'Chip',
    'show-remove': true,
    size: 'md',
    variant: 'filled',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['filled', 'outline'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['chipClick', 'chipRemove'],
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
      disabled=${ifDefined(args.disabled)}
      has-error=${ifDefined(args['has-error'])}
      label=${args.label}
      show-remove=${ifDefined(args['show-remove'])}
      size=${args.size}
      variant=${args.variant}
    />`;
  },
};

export const Default: Story = { ...Template };

// prettier-ignore
export const AvatarChip: Story = {
  render: () => {
    return html`
<modus-wc-chip aria-label="Example chip" label="Chip" show-remove="true">
  <modus-wc-avatar
    img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg"
    alt="sonic the hedgehog"
  ></modus-wc-avatar>
</modus-wc-chip>
    `;
  },
};

// prettier-ignore
export const CheckIconChip: Story = {
  render: () => {
    return html`
<modus-wc-chip aria-label="Example chip" label="Chip" show-remove="true">
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>
    `;
  },
};

// prettier-ignore
export const Composable: Story = {
  render: () => {
    return html`
<modus-wc-chip aria-label="Example chip">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip aria-label="Example chip" show-remove="true">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip aria-label="Example chip">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
</modus-wc-chip>
    `;
  },
};
