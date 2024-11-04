import { Meta, StoryObj } from '@storybook/web-components';

interface BadgeArgs {
  ariaLabel: string;
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger';
  content: string;
  customClass: string;
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
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['filled', 'text', 'counter'],
    },
  },
};

export default meta;

type Story = StoryObj<BadgeArgs>;

const Template: Story = {
  render: (args) => {
    return `
      <modus-wc-badge 
        aria-label="${args.ariaLabel}"
        color="${args.color}"
        content="${args.content}"
        custom-class="${args.customClass}"
        size="${args.size}"
        type="${args.type}"
      ></modus-wc-badge>
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    ariaLabel: 'Example badge',
    color: 'primary',
    content: 'Badge',
    customClass: '',
    size: 'medium',
    type: 'filled',
  },
};
