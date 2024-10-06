import { Meta, StoryObj } from '@storybook/html';

interface ButtonArgs {
  label: string;
  ariaLabel: string;
  customClass: string;
  disabled: boolean;
  fullWidth: boolean;
  pressed: boolean;
  size: 'small' | 'medium' | 'large';
  type: 'button' | 'submit' | 'reset';
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/ModusWcButton',
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
  },
};

export default meta;

type Story = StoryObj<ButtonArgs>;

const Template: Story = {
  render: (args) => {
    return `
      <modus-wc-button 
        label="${args.label}"
        aria-label="${args.ariaLabel}"
        custom-class="${args.customClass}"
        size="${args.size}"
        type="${args.type}"
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
    label: 'Click me',
    ariaLabel: 'Click me button',
    customClass: '',
    disabled: false,
    fullWidth: false,
    pressed: false,
    size: 'medium',
    type: 'button',
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    ...Default.args,
    disabled: true,
    label: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  ...Template,
  args: {
    ...Default.args,
    fullWidth: true,
    label: 'Full Width Button',
  },
};

export const ToggleButton: Story = {
  ...Template,
  args: {
    ...Default.args,
    pressed: true,
    label: 'Toggle Button (Pressed)',
  },
};

export const SubmitButton: Story = {
  ...Template,
  args: {
    ...Default.args,
    type: 'submit',
    label: 'Submit Form',
  },
};
