import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LoaderColor, LoaderVariant } from './modus-wc-loader';
import { DaisySize } from '../types';

interface LoaderArgs {
  color: LoaderColor;
  'custom-class'?: string;
  size: DaisySize;
  variant: LoaderVariant;
}

const meta: Meta<LoaderArgs> = {
  title: 'Components/Loader',
  component: 'modus-wc-loader',
  args: {
    color: 'primary',
    'custom-class': '',
    size: 'md',
    variant: 'spinner',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
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
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
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
        aria-label="Loading spinner"
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

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - Component name change from \`modus-spinner\` to \`modus-wc-loader\`.
  - **Color value changes**: \`dark\` and \`tertiary\` values from 1.0 have been removed.
  1.0 value \`danger\` has been renamed to \`error\` in 2.0. Values \`accent\`, \`info\`, and \`neutral\` are new options in 2.0.
  - In 1.0 \`size\` used direct CSS size value strings (e.g., \`'12rem'\`). In 2.0 \`size\` is now defined by predefined values (\`xs\`, \`sm\`, \`md\`, \`lg\`), and CSS can be used for custom sizes.
  - Added new \`variant\` prop to specify the loader type in 2.0.

#### Prop Mapping

| 1.0 Prop | 2.0 Prop | Notes                                                                                                  |
|----------|----------|--------------------------------------------------------------------------------------------------------|
| color    | color    | \`dark\` and \`tertiary\` from version 1.0 have been removed, \`danger\` has been renamed to \`error\` |
| size     | size     | Now uses predefined sizes (\`xs\`, \`sm\`, \`md\`, \`lg\`), use CSS for custom sizes.                  |
        `,
      },
    },
    // To hide the actual story rendering and only show docs:
    controls: { disable: true },
    canvas: { disable: true },
  },
  // Simple render function or leave it empty
  render: () => html`<div></div>`,
};
