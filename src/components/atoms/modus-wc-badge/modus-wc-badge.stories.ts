import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../../types';

interface BadgeArgs {
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger';
  content: string;
  'custom-class'?: string;
  size: ModusSize;
  variant: 'counter' | 'filled' | 'text';
}

const meta: Meta<BadgeArgs> = {
  title: 'Components/Badge',
  component: 'modus-wc-badge',
  args: {
    color: 'primary',
    content: 'Badge',
    size: 'md',
    variant: 'filled',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'high-contrast',
        'success',
        'warning',
        'danger',
      ],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['counter', 'filled', 'text'],
    },
  },
};

export default meta;

type Story = StoryObj<BadgeArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-badge
        color="${args.color}"
        content="${args.content}"
        custom-class="${ifDefined(args['custom-class'])}"
        size="${args.size}"
        variant="${args.variant}"
      ></modus-wc-badge>
    `;
  },
};

export const Default: Story = {
  ...Template,
};

// prettier-ignore
export const Text: Story = {
  render: () => {
    return html`
    <modus-wc-badge aria-label="Example badge" color="primary" content="Badge" size="md" variant="text"></modus-wc-badge>
    `;
  },
};
