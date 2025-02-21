import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

interface ButtonArgs {
  color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  'custom-class'?: string;
  disabled: boolean;
  'full-width': boolean;
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
    color: 'primary',
    disabled: false,
    'full-width': false,
    pressed: false,
    shape: 'rectangle',
    size: 'md',
    type: 'button',
    variant: 'filled',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'rectangle', 'square'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    variant: {
      control: { type: 'select' },
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
    // prettier-ignore
    return html`
<modus-wc-button
  aria-label="Click me button"
  color="${args.color}"
  custom-class="${ifDefined(args['custom-class'])}"
  ?disabled="${args.disabled}"
  ?full-width="${args['full-width']}"
  ?pressed="${args.pressed}"
  shape="${args.shape}"
  size="${args.size}"
  type="${args.type}"
  variant="${args.variant}"
>
  Click me
</modus-wc-button>
    `;
  },
};

export const Default: Story = {
  ...Template,
};

export const ButtonShapes: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-button
  aria-label="Circle button"
  shape="circle"
>
  Circle
</modus-wc-button>
<modus-wc-button
  aria-label="Square button"
  shape="square"
>
  Square
</modus-wc-button>
    `;
  },
};

export const IconOnlyButton: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `;
  },
};

export const IconLeftButton: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-button aria-label="Download button">
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    `;
  },
};

export const IconRightButton: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-button aria-label="Details button">
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    `;
  },
};

export const IconLeftAndRightButton: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-button aria-label="Checkout button">
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `;
  },
};
