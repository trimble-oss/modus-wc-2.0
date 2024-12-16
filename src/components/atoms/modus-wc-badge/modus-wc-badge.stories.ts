import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ModusSize } from '../../types';

interface BadgeArgs {
  'a11y-label': string;
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger';
  content: string;
  'custom-class': string;
  size: ModusSize;
  variant: 'counter' | 'filled' | 'text';
}

const meta: Meta<BadgeArgs> = {
  title: 'Components/Badge',
  component: 'modus-wc-badge',
  args: {
    'a11y-label': 'Example badge',
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
        a11y-label="${args['a11y-label']}"
        color="${args.color}"
        content="${args.content}"
        ?custom-class="${args['custom-class']}"
        size="${args.size}"
        variant="${args.variant}"
      ></modus-wc-badge>
    `;
  },
};

export const Default: Story = {
  ...Template,
};
