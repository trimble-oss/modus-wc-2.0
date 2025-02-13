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
  'image-url'?: string;
  label: string;
  'show-check'?: boolean;
  'show-close'?: boolean;
  size: ModusSize;
  variant: 'filled' | 'outline';
}

const meta: Meta<ChipArgs> = {
  title: 'Components/Chip',
  component: 'modus-wc-chip',
  args: {
    'aria-label': 'Example chip',
    label: 'Chip',
    'image-url':
      'https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg',
    'show-close': true,
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
      handles: ['chipClick', 'closeClick'],
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
      image-url=${ifDefined(args['image-url'])}
      label=${args.label}
      show-check=${ifDefined(args['show-check'])}
      show-close=${ifDefined(args['show-close'])}
      size=${args.size}
      variant=${args.variant}
    />`;
  },
};

export const Default: Story = { ...Template };

// prettier-ignore
export const Composable: Story = {
  render: () => {
    return html`
<modus-wc-chip aria-label="Example chip">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip aria-label="Example chip" show-close="true">
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
