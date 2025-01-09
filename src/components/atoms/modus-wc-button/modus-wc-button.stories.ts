import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

interface ButtonArgs {
  'aria-label': string;
  color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  'custom-class'?: string;
  disabled: boolean;
  'full-width': boolean;
  label: string;
  pressed: boolean;
  shape: 'circle' | 'rectangle' | 'square';
  size: DaisySize;
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
    shape: 'rectangle',
    size: 'md',
    type: 'button',
    variant: 'filled',
  },
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
    shape: {
      control: { type: 'inline-radio' },
      options: ['circle', 'rectangle', 'square'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
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
        shape="${args.shape}"
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

// prettier-ignore
export const ButtonShapes: Story = {
  render: (args) => {
    return html`
<modus-wc-button
  aria-label="${args['aria-label']}"
  label="Rectangle"
></modus-wc-button>
<modus-wc-button
  aria-label="${args['aria-label']}"
  label="Circle"
  shape="circle"
></modus-wc-button>
<modus-wc-button
  aria-label="${args['aria-label']}"
  label="Square"
  shape="square"
></modus-wc-button>
    `;
  },
};

// prettier-ignore
export const IconOnlyButton: Story = {
  render: (args) => {
    return html`
<modus-wc-button aria-label="${args['aria-label']}">
  <modus-wc-icon name="notifications"></modus-wc-icon>
</modus-wc-button>
    `;
  },
};

// prettier-ignore
export const IconLeftButton: Story = {
  render: (args) => {
    return html`
<modus-wc-button aria-label="${args['aria-label']}" label="Download">
  <modus-wc-icon slot="left" name="download"></modus-wc-icon>
</modus-wc-button>
    `;
  },
};

// prettier-ignore
export const IconRightButton: Story = {
  render: (args) => {
    return html`
<modus-wc-button aria-label="${args['aria-label']}" label="Details">
  <modus-wc-icon slot="right" name="launch"></modus-wc-icon>
</modus-wc-button>
    `;
  },
};

// prettier-ignore
export const IconLeftAndRightButton: Story = {
  render: (args) => {
    return html`
<modus-wc-button aria-label="${args['aria-label']}" label="Checkout">
  <modus-wc-icon slot="left" name="shopping_cart"></modus-wc-icon>
  <modus-wc-icon slot="right" name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `;
  },
};
