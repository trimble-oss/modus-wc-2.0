import { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  TypographyHierarchy,
  TypographySize,
  TypographyWeight,
} from './modus-wc-typography';

// Slot content was lost due to rendering issues when changing the "variant" attribute.
// Because of this, each variant is rendered as a unique story below.

const content = 'The quick brown fox jumps over the lazy dog';

interface TypographyArgs {
  'custom-class'?: string;
  hierarchy: TypographyHierarchy;
  size?: TypographySize;
  weight?: TypographyWeight;
}

const meta: Meta<TypographyArgs> = {
  title: 'Components/Typography',
  component: 'modus-wc-typography',
  args: {
    hierarchy: 'p',
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

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-typography
  custom-class=${ifDefined(args['custom-class'])}
  hierarchy=${args.hierarchy}
  size=${ifDefined(args.size)}
  weight=${ifDefined(args.weight)}>
</modus-wc-typography>
   `;
  },
};

export const Default: Story = { ...Template };

export const Heading1: Story = { ...Template, args: { hierarchy: 'h1' } };

export const Heading2: Story = { ...Template, args: { hierarchy: 'h2' } };

export const Heading3: Story = { ...Template, args: { hierarchy: 'h3' } };

export const Heading4: Story = { ...Template, args: { hierarchy: 'h4' } };

export const Heading5: Story = { ...Template, args: { hierarchy: 'h5' } };

export const Heading6: Story = { ...Template, args: { hierarchy: 'h6' } };

export const Paragraph: Story = { ...Template, args: { hierarchy: 'p' } };
