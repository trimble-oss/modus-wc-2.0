import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  TypographyHierarchy,
  TypographySize,
  TypographyWeight,
} from './modus-wc-typography';

const content = 'The quick brown fox jumps over the lazy dog';

interface TypographyArgs {
  'custom-class'?: string;
  hierarchy: TypographyHierarchy;
  label: string;
  size?: TypographySize;
  weight?: TypographyWeight;
}

const meta: Meta<TypographyArgs> = {
  title: 'Components/Typography',
  component: 'modus-wc-typography',
  args: {
    hierarchy: 'p',
    label: content,
    size: 'md',
    weight: 'normal',
  },
  argTypes: {
    hierarchy: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
    },
    size: {
      control: { type: 'select' },
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'semibold', 'bold'],
    },
  },
};

export default meta;

type Story = StoryObj<TypographyArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-typography
  custom-class=${ifDefined(args['custom-class'])}
  hierarchy=${args.hierarchy}
  label=${args.label}
  size=${ifDefined(args.size)}
  weight=${ifDefined(args.weight)}
  ></modus-wc-typography>
   `;
  },
};

export const Default: Story = { ...Template };

export const Heading1: Story = {
  ...Template,
  args: { hierarchy: 'h1', label: content },
};

export const Heading2: Story = {
  ...Template,
  args: { hierarchy: 'h2', label: content },
};

export const Heading3: Story = {
  ...Template,
  args: { hierarchy: 'h3', label: content },
};

export const Heading4: Story = {
  ...Template,
  args: { hierarchy: 'h4', label: content },
};

export const Heading5: Story = {
  ...Template,
  args: { hierarchy: 'h5', label: content },
};

export const Heading6: Story = {
  ...Template,
  args: { hierarchy: 'h6', label: content },
};

export const Paragraph: Story = {
  ...Template,
  args: { hierarchy: 'p', label: content },
};

export const WithLabel: Story = {
  ...Template,
  args: {
    hierarchy: 'p',
    label: 'This text is set via the label prop',
  },
};
