import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Size } from '../../types';
import { SpinnerColor, SpinnerVariant } from './modus-wc-spinner';

interface SpinnerArgs {
  'aria-label': string;
  color: SpinnerColor;
  'custom-class': string;
  size: Size;
  variant: SpinnerVariant;
}

const meta: Meta<SpinnerArgs> = {
  title: 'Components/Spinner',
  component: 'modus-wc-spinner',
  args: {
    'aria-label': 'Loading spinner',
    color: 'primary',
    'custom-class': '',
    size: 'md',
    variant: 'spinner',
  },
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<SpinnerArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-spinner
        aria-label="${ifDefined(args['aria-label'])}"
        color="${args.color}"
        custom-class="${args['custom-class']}"
        size="${args.size}"
        variant="${args.variant}"
      ></modus-wc-spinner>
    `;
  },
};
