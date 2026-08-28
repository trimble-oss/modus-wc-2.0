import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ImageArgs {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'square' | 'rounded';
  fit?: 'cover' | 'contain' | 'scale-down' | 'none';
  'custom-class'?: string;
}

const SAMPLE_IMAGE =
  'https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg';

const meta: Meta<ImageArgs> = {
  title: 'Components/Image',
  component: 'modus-wc-image',
  args: {
    src: SAMPLE_IMAGE,
    alt: 'A scenic mountain landscape',
    fit: 'cover',
    shape: 'square',
    size: 'md',
  },
  argTypes: {
    fit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'scale-down', 'none'],
    },
    shape: {
      control: { type: 'select' },
      options: ['square', 'rounded'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['imageLoad', 'imageError'],
    },
  },
};

export default meta;

type Story = StoryObj<ImageArgs>;

const Template: Story = {
  render: (args) => html`
    <modus-wc-image
      src=${args.src}
      alt=${ifDefined(args.alt)}
      size=${ifDefined(args.size)}
      shape=${ifDefined(args.shape)}
      fit=${ifDefined(args.fit)}
      custom-class=${ifDefined(args['custom-class'])}
    ></modus-wc-image>
  `,
};

export const Default: Story = { ...Template };

export const Rounded: Story = {
  ...Template,
  args: { shape: 'rounded' },
};

export const DecorativeImage: Story = {
  ...Template,
  args: { alt: '' },
  parameters: {
    docs: {
      description: {
        story:
          'When `alt` is empty the image is treated as decorative: `role="presentation"` and `aria-hidden="true"` are applied so screen readers skip it.',
      },
    },
  },
};

export const ErrorFallback: Story = {
  ...Template,
  args: {
    src: 'https://example.com/this-image-does-not-exist.png',
    alt: 'A missing image',
  },
  parameters: {
    docs: {
      description: {
        story:
          'When the image URL fails to load the broken image icon is hidden and an accessible SVG placeholder is rendered.',
      },
    },
  },
};
