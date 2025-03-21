import { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { TypographyVariant, TypographyWeight } from './modus-wc-typography';
import { DaisySize } from '../types';

// Slot content was lost due to rendering issues when changing the "variant" attribute.
// Because of this, each variant is rendered as a unique story below.

const content = 'The quick brown fox jumps over the lazy dog';

interface TypographyArgs {
  'custom-class'?: string;
  size?: DaisySize;
  variant: TypographyVariant;
  weight?: TypographyWeight;
}

const meta: Meta<TypographyArgs> = {
  title: 'Components/Typography',
  component: 'modus-wc-typography',
  args: {
    size: 'md',
    variant: 'p',
    weight: 'normal',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'semibold', 'bold'],
    },
  },
  decorators: [
    (story) => {
      // Create a stable container that won't be recreated on re-renders
      const container = document.createElement('div');
      const template = document.createElement('template');
      template.innerHTML = content;

      const renderStory = () => {
        render(story(), container);

        // Ensure slot content is present after render
        const typography = container.querySelector('modus-wc-typography');
        if (typography && !typography.textContent) {
          typography.textContent = template.innerHTML;
        }
      };

      renderStory();
      return container;
    },
  ],
};

export default meta;

type Story = StoryObj<TypographyArgs>;

export const Default: Story = {
  render: (args) => html`
    <modus-wc-typography
      custom-class=${ifDefined(args['custom-class'])}
      size=${ifDefined(args.size)}
      variant=${args.variant}
      weight=${ifDefined(args.weight)}
    ></modus-wc-typography>
  `,
};

export const Body: Story = {
  args: {
    variant: 'body',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
  },
};

export const Heading5: Story = {
  args: {
    variant: 'h5',
  },
};

export const Heading6: Story = {
  args: {
    variant: 'h6',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
  },
};
