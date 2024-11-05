import { Meta, StoryObj } from '@storybook/web-components';

interface BadgeArgs {
  ariaLabel: string;
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger';
  content: string;
  customClass: string;
  size: 'sm' | 'md' | 'lg';
  type: 'counter' | 'filled' | 'text';
}

const meta: Meta<BadgeArgs> = {
  title: 'Components/Atoms/Badge',
  component: 'modus-wc-badge',
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
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
    content: { control: 'text' },
    customClass: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'select' },
      options: ['counter', 'filled', 'text'],
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
    size: 'md',
    type: 'filled',
  },
};
