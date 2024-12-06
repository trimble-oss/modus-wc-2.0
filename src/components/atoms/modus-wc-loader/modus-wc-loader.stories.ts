import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Size } from '../../types';
import { LoaderColor, LoaderVariant } from './modus-wc-loader';

interface LoaderArgs {
  'aria-label': string;
  color: LoaderColor;
  'custom-class': string;
  size: Size;
  variant: LoaderVariant;
}

const meta: Meta<LoaderArgs> = {
  title: 'Components/Loader',
  component: 'modus-wc-loader',
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
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['ball', 'bars', 'dots', 'infinity', 'ring', 'spinner'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<LoaderArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-loader
        aria-label="${ifDefined(args['aria-label'])}"
        color="${args.color}"
        custom-class="${args['custom-class']}"
        size="${args.size}"
        variant="${args.variant}"
      ></modus-wc-loader>
    `;
  },
};
