import { Meta, StoryObj } from '@storybook/web-components';
import { setModusWCMode, ModusWCMode } from '../../../utils/theme';

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
  mode: ModusWCMode;
}

const meta: Meta<BadgeArgs> = {
  title: 'Components/Atoms/Badge',
  argTypes: {
    ariaLabel: { control: 'text' },
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
    content: { control: 'text' },
    customClass: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['filled', 'text', 'counter'],
    },
    mode: {
      control: { type: 'select' },
      options: ['default', 'dark', 'high-contrast'],
    },
  },
};

export default meta;

type Story = StoryObj<BadgeArgs>;

const Template: Story = {
  render: (args) => {
    setModusWCMode(args.mode);

    return `
      <div>
        <h1>Badge</h1>
        <modus-wc-badge 
          aria-label="${args.ariaLabel}"
          color="${args.color}"
          content="${args.content}"
          custom-class="${args.customClass}"
          size="${args.size}"
          type="${args.type}"
        ></modus-wc-badge>
        <stencil-docs component-name="modus-wc-badge"></stencil-docs>
      </div>
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
    mode: 'default',
    size: 'medium',
    type: 'filled',
  },
};
