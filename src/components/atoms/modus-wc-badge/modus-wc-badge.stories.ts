import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

interface BadgeArgs {
  'aria-label': string;
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger';
  content: string;
  'custom-class': string;
  size: 'small' | 'medium' | 'large';
  type: 'filled' | 'text' | 'counter';
}

const meta: Meta<BadgeArgs> = {
  title: 'Components/Atoms/Badge',
  component: 'modus-wc-badge',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'danger',
      ],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'inline-radio' },
      options: ['filled', 'text', 'counter'],
    },
  },
};

export default meta;

type Story = StoryObj<BadgeArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-badge
        aria-label="${args['aria-label']}"
        color="${args.color}"
        content="${args.content}"
        ?custom-class="${args['custom-class']}"
        size="${args.size}"
        type="${args.type}"
      ></modus-wc-badge>
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    'aria-label': 'Example badge',
    color: 'primary',
    content: 'Badge',
    size: 'medium',
    type: 'filled',
  },
};
