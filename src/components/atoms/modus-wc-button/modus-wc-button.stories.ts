import { Meta, StoryObj } from '@storybook/html';

interface ButtonArgs {
  label: string;
  ariaLabel: string;
  customClass: string;
  backgroundColor: string;
  textColor: string;
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/ModusWcButton',
  argTypes: {
    label: { control: 'text' },
    ariaLabel: { control: 'text' },
    customClass: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<ButtonArgs>;

const Template: Story = {
  render: (args) => {
    return `
      <style>
        .custom-themed-button {
          --modus-wc-button-bg-color: ${args.backgroundColor};
          --modus-wc-button-text-color: ${args.textColor};
        }
      </style>
      <modus-wc-button 
        label="${args.label}" 
        aria-label="${args.ariaLabel}" 
        custom-class="custom-themed-button ${args.customClass}"
      ></modus-wc-button>
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    label: 'Click me',
    ariaLabel: 'Click me button',
    backgroundColor: '#007bff',
    textColor: 'white',
    customClass: '',
  },
};
