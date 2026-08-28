import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ImageArgs {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'square' | 'rounded';
  fit?: 'default' | 'contain' | 'scale-down' | 'none';
  'custom-class'?: string;
}

const SAMPLE_IMAGE =
  'https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg';

const meta: Meta<ImageArgs> = {
  title: 'Components/Image',
  component: 'modus-wc-image',
  args: {
    src: SAMPLE_IMAGE,
    alt: 'A zebra drinks from a pond',
    fit: 'default',
    shape: 'square',
    size: 'md',
  },
  argTypes: {
    fit: {
      control: { type: 'select' },
      options: ['default', 'contain', 'scale-down', 'none'],
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
    docs: {
      description: {
        component: `
A resilient atomic image component wrapping the native \`<img>\` tag with consistent sizing tokens,
aspect-ratio control, an accessible error fallback, and WCAG 2.2 compliance.`,
      },
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

export const Default: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          'Default rendering with `fit="default"` and `size="md"` (288×192 px). The image fills the fixed box completely — non-matching aspect ratios are **cropped** equally from the center edges with no distortion.',
      },
    },
  },
};

export const FitContain: Story = {
  ...Template,
  args: { fit: 'contain' },
  parameters: {
    docs: {
      description: {
        story:
          '`fit="contain"` — the image scales down to fit **entirely** inside the hard-locked box while preserving its original aspect ratio. Areas not covered by the image show the background (letterbox/pillarbox effect).',
      },
    },
  },
};

export const FitScaleDown: Story = {
  ...Template,
  args: { fit: 'scale-down' },
  parameters: {
    docs: {
      description: {
        story:
          '`fit="scale-down"` — the container uses `max-width / max-height` from the `size` token instead of hard-locked dimensions. If the image is larger than the target it is scaled down proportionally; if smaller it renders at its intrinsic size. The box shrinks to fit the image.',
      },
    },
  },
};

export const FitNone: Story = {
  ...Template,
  args: { fit: 'none' },
  parameters: {
    docs: {
      description: {
        story:
          '`fit="none"` — the image renders at its **intrinsic pixel size** with no scaling applied. The container is still hard-locked to the `size` token dimensions, so any part of the image that exceeds the box is clipped by `overflow: hidden`.',
      },
    },
  },
};

export const Rounded: Story = {
  ...Template,
  args: { shape: 'rounded' },
  parameters: {
    docs: {
      description: {
        story:
          'Applies a `16 px` border-radius to the image container via `shape="rounded"`. All size variants use the same radius value.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => html`
    <div
      style="display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-end;"
    >
      <div>
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600;">
          sm — 128×128 px
        </p>
        <modus-wc-image
          src=${SAMPLE_IMAGE}
          alt="Small"
          size="sm"
          fit="default"
        ></modus-wc-image>
      </div>
      <div>
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600;">
          md — 288×192 px (default)
        </p>
        <modus-wc-image
          src=${SAMPLE_IMAGE}
          alt="Medium"
          size="md"
          fit="default"
        ></modus-wc-image>
      </div>
      <div>
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600;">
          lg — 384×256 px
        </p>
        <modus-wc-image
          src=${SAMPLE_IMAGE}
          alt="Large"
          size="lg"
          fit="default"
        ></modus-wc-image>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
All available size tokens side by side (xl omitted for layout reasons — it is 1486×384 px).
For \`fit="scale-down"\` these values act as \`max-width / max-height\` constraints rather than fixed dimensions.

| \`size\` | Width | Height |
|---------|-------|--------|
| \`sm\` | 128 px | 128 px |
| \`md\` *(default)* | 288 px | 192 px |
| \`lg\` | 384 px | 256 px |
| \`xl\` | 1486 px | 384 px |
        `,
      },
    },
  },
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
