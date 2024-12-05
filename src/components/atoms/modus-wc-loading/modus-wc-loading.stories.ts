import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Size } from '../../types';
import { LoadingColor, LoadingVariant } from './modus-wc-loading';

interface LoadingArgs {
  'aria-label': string;
  color: LoadingColor;
  'custom-class': string;
  size: Size;
  variant: LoadingVariant;
}

const meta: Meta<LoadingArgs> = {
  title: 'Components/Loading',
  component: 'modus-wc-loading',
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

type Story = StoryObj<LoadingArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-loading
        aria-label="${ifDefined(args['aria-label'])}"
        color="${args.color}"
        custom-class="${args['custom-class']}"
        size="${args.size}"
        variant="${args.variant}"
      ></modus-wc-loading>
    `;
  },
};
