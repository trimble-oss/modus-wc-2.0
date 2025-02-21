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
  'custom-class'?: string;
  size: ModusSize;
  variant: 'counter' | 'filled' | 'text';
}

const meta: Meta<BadgeArgs> = {
  title: 'Components/Badge',
  component: 'modus-wc-badge',
  args: {
    color: 'primary',
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
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['counter', 'filled', 'text'],
    },
  },
};

export default meta;

type Story = StoryObj<BadgeArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-badge
  color="${args.color}"
  custom-class="${ifDefined(args['custom-class'])}"
  size="${args.size}"
  variant="${args.variant}"
>
  Badge
</modus-wc-badge>
    `;
  },
};

export const Default: Story = {
  ...Template,
};

export const WithIcon: Story = {
  render: () => {
    // prettier-ignore
    return html`
<style>
  i {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
    `;
  },
};
