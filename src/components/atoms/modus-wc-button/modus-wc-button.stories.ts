import { Meta, StoryObj } from '@storybook/web-components';
import { setModusWCMode, ModusWCMode } from '../../../utils/theme';

interface ButtonArgs {
  label: string;
  ariaLabel: string;
  customClass: string;
  disabled: boolean;
  fullWidth: boolean;
  pressed: boolean;
  size: 'small' | 'medium' | 'large';
  type: 'button' | 'submit' | 'reset';
  variant: 'filled' | 'outlined' | 'text';
  color: 'primary' | 'secondary' | 'tertiary';
  mode: ModusWCMode;
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/Atoms/Button',
  component: 'modus-wc-button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    ariaLabel: { control: 'text' },
    customClass: { control: 'text' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    pressed: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'text'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    mode: {
      control: { type: 'select' },
      options: ['default', 'dark', 'high-contrast'],
    },
  },
};

export default meta;

type Story = StoryObj<ButtonArgs>;

const Template: Story = {
  render: (args) => {
    setModusWCMode(args.mode);

    return `
      <modus-wc-button 
          label="${args.label}"
          aria-label="${args.ariaLabel}"
          custom-class="${args.customClass}"
          size="${args.size}"
          type="${args.type}"
          variant="${args.variant}"
          color="${args.color}"
          ${args.disabled ? 'disabled' : ''}
          ${args.fullWidth ? 'full-width' : ''}
          ${args.pressed ? 'pressed' : ''}
        ></modus-wc-button>
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    ariaLabel: 'Click me button',
    color: 'primary',
    customClass: '',
    disabled: false,
    fullWidth: false,
    label: 'Click me',
    mode: 'default',
    pressed: false,
    size: 'medium',
    type: 'button',
    variant: 'filled',
  },
};
