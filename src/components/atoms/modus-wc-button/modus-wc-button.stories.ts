import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../../types';

interface ButtonArgs {
  'aria-label': string;
  color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  'custom-class'?: string;
  disabled: boolean;
  'full-width': boolean;
  'icon-left'?: string;
  'icon-only'?: string;
  'icon-right'?: string;
  label: string;
  pressed: boolean;
  size: ModusSize;
  type: 'button' | 'submit' | 'reset';
  variant: 'borderless' | 'filled' | 'outlined';
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/Button',
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
      options: ['borderless', 'filled', 'outlined'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['buttonClick'],
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
        custom-class="${ifDefined(args['custom-class'])}"
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
};

export const IconOnlyButton: Story = {
  render: (args) => {
    return html`
      <modus-wc-button
        aria-label="${args['aria-label']}"
        color="${args.color}"
        icon-only="alert"
        size="md"
        type="${args.type}"
        variant="${args.variant}"
      ></modus-wc-button>
    `;
  },
};
