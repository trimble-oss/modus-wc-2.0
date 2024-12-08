import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TypographyWeight } from './modus-wc-typography';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

// Slot content was lost due to rendering issues when changing the "variant" attribute.
// Because of this, each variant is rendered as a unique story below.

interface TypographyArgs {
  'aria-label': string;
  content: string;
  'custom-class': string;
  size: DaisySize;
  weight: TypographyWeight;
}

const meta: Meta<TypographyArgs> = {
  title: 'Components/Typography',
  component: 'modus-wc-typography',
  args: {
    'aria-label': 'Example typography',
    content: 'The quick brown fox jumps over the lazy dog',
    size: 'md',
    weight: 'normal',
  },
  argTypes: {
    content: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    weight: {
      control: { type: 'radio' },
      options: ['light', 'normal', 'bold'],
    },
  },
};

export default meta;

type Story = StoryObj<TypographyArgs>;

export const Body: Story = {
  render: (args) => {
    return html`
      <modus-wc-typography
        aria-label="${args['aria-label']}"
        custom-class="${ifDefined(args['custom-class'])}"
        size="${args.size}"
        variant="body"
        weight="${args.weight}"
        >${args.content}</modus-wc-typography
      >
    `;
  },
};

export const Heading1: Story = {
  render: (args) => {
    return html`
      <modus-wc-typography
        aria-label="${args['aria-label']}"
        custom-class="${ifDefined(args['custom-class'])}"
        size="${args.size}"
        variant="h1"
        weight="${args.weight}"
        >${args.content}</modus-wc-typography
      >
    `;
  },
};

export const Heading2: Story = {
  render: (args) => {
    return html`
      <modus-wc-typography
        aria-label="${args['aria-label']}"
        custom-class="${ifDefined(args['custom-class'])}"
        variant="h2"
        >${args.content}</modus-wc-typography
      >
    `;
  },
};

export const Heading3: Story = {
  render: (args) => {
    return html`
      <modus-wc-typography
        aria-label="${args['aria-label']}"
        custom-class="${ifDefined(args['custom-class'])}"
        variant="h3"
        >${args.content}</modus-wc-typography
      >
    `;
  },
};

export const Heading4: Story = {
  render: (args) => {
    return html`
      <modus-wc-typography
        aria-label="${args['aria-label']}"
        custom-class="${ifDefined(args['custom-class'])}"
        variant="h4"
        >${args.content}</modus-wc-typography
      >
    `;
  },
};

export const Heading5: Story = {
  render: (args) => {
    return html`
      <modus-wc-typography
        aria-label="${args['aria-label']}"
        custom-class="${ifDefined(args['custom-class'])}"
        variant="h5"
        >${args.content}</modus-wc-typography
      >
    `;
  },
};

export const Heading6: Story = {
  render: (args) => {
    return html`
      <modus-wc-typography
        aria-label="${args['aria-label']}"
        custom-class="${ifDefined(args['custom-class'])}"
        variant="h6"
        >${args.content}</modus-wc-typography
      >
    `;
  },
};

export const Paragraph: Story = {
  render: (args) => {
    return html`
      <modus-wc-typography
        aria-label="${args['aria-label']}"
        custom-class="${ifDefined(args['custom-class'])}"
        size="${args.size}"
        variant="p"
        weight="${args.weight}"
        >${args.content}</modus-wc-typography
      >
    `;
  },
};
