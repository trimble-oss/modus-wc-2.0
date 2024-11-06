import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

interface ButtonArgs {
  'aria-label': string;
  color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  'custom-class': string;
  disabled: boolean;
  'full-width': boolean;
  label: string;
  pressed: boolean;
  size: 'sm' | 'md' | 'lg';
  type: 'button' | 'submit' | 'reset';
  variant: 'filled' | 'outlined' | 'text';
  buttonClick?: (event: CustomEvent) => void;
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/Atoms/Button',
  component: 'modus-wc-button',
  args: {
    'aria-label': 'Click me button',
    color: 'primary',
    disabled: false,
    'full-width': false,
    label: 'Click me',
    pressed: false,
    size: 'md',
    type: 'button',
    variant: 'filled',
  },
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'inline-radio' },
      options: ['button', 'submit', 'reset'],
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['filled', 'outlined', 'text'],
    },
    buttonClick: {
      action: 'buttonClick',
      table: {
        category: 'Events',
      },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-button
        aria-label="${args['aria-label']}"
        color="${args.color}"
        custom-class="${args['custom-class']}"
        ?disabled="${args.disabled}"
        ?full-width="${args['full-width']}"
        label="${args.label}"
        ?pressed="${args.pressed}"
        size="${args.size}"
        type="${args.type}"
        variant="${args.variant}"
        @buttonClick=${args.buttonClick}
      ></modus-wc-button>
    `;
  },
};

export const Default: Story = {
  ...Template,
};
