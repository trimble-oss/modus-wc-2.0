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
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/Atoms/Button',
  component: 'modus-wc-button',
  argTypes: {
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
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
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
      ></modus-wc-button>
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    'aria-label': 'Click me button',
    color: 'primary',
    label: 'Click me',
    size: 'md',
    type: 'button',
    variant: 'filled',
  },
};
