import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { LoaderColor, LoaderVariant } from './modus-wc-loader';
import { DaisySize } from '../../types';

interface LoaderArgs {
  'aria-label': string;
  color: LoaderColor;
  'custom-class'?: string;
  size: DaisySize;
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
      options: [
        'primary',
        'secondary',
        'accent',
        'neutral',
        'info',
        'success',
        'warning',
        'error',
      ],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['ball', 'bars', 'dots', 'infinity', 'ring', 'spinner'],
    },
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
        custom-class="${ifDefined(args['custom-class'])}"
        size="${args.size}"
        variant="${args.variant}"
      ></modus-wc-loader>
    `;
  },
};

export const Ball: Story = {
  render: (args) => {
    return html`
      <modus-wc-loader
        aria-label="Loading ball"
        color="${args.color}"
        custom-class="${ifDefined(args['custom-class'])}"
        size="md"
        variant="ball"
      ></modus-wc-loader>
    `;
  },
};

export const Bars: Story = {
  render: (args) => {
    return html`
      <modus-wc-loader
        aria-label="Loading bars"
        color="${args.color}"
        custom-class="${ifDefined(args['custom-class'])}"
        size="md"
        variant="bars"
      ></modus-wc-loader>
    `;
  },
};

export const Dots: Story = {
  render: (args) => {
    return html`
      <modus-wc-loader
        aria-label="Loading dots"
        color="${args.color}"
        custom-class="${ifDefined(args['custom-class'])}"
        size="md"
        variant="dots"
      ></modus-wc-loader>
    `;
  },
};

// eslint-disable-next-line no-shadow-restricted-names
export const Infinity: Story = {
  render: (args) => {
    return html`
      <modus-wc-loader
        aria-label="Loading infinity symbol"
        color="${args.color}"
        custom-class="${ifDefined(args['custom-class'])}"
        size="md"
        variant="infinity"
      ></modus-wc-loader>
    `;
  },
};

export const Ring: Story = {
  render: (args) => {
    return html`
      <modus-wc-loader
        aria-label="Loading ring"
        color="${args.color}"
        custom-class="${ifDefined(args['custom-class'])}"
        size="md"
        variant="ring"
      ></modus-wc-loader>
    `;
  },
};
