import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IImageGridImage } from './modus-wc-image-grid';
import { ImageGridShape } from './modus-wc-image-grid.tailwind';

const SAMPLE_IMAGE =
  'https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg';

const SAMPLE_IMAGES: IImageGridImage[] = [
  { src: SAMPLE_IMAGE, alt: 'Zebra at a watering hole' },
  { src: SAMPLE_IMAGE, alt: 'Zebra at a watering hole' },
  { src: SAMPLE_IMAGE, alt: 'Zebra at a watering hole' },
  { src: SAMPLE_IMAGE, alt: 'Zebra at a watering hole' },
];

const resolveImages = (images?: IImageGridImage[]) =>
  Array.isArray(images) && images.length > 0 ? images : SAMPLE_IMAGES;

interface ImageGridArgs {
  images: IImageGridImage[];
  'image-shape'?: ImageGridShape;
  'images-per-view'?: number;
  'custom-class'?: string;
}

const defaultSourceCode = `
<modus-wc-image-grid
  image-shape="rectangle"
  images-per-view="4"
  id="image-grid"
></modus-wc-image-grid>

<script>
  const images = [
    { src: 'https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg', alt: 'Zebra at a watering hole' },
    { src: 'https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg', alt: 'Zebra at a watering hole' },
    { src: 'https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg', alt: 'Zebra at a watering hole' },
    { src: 'https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg', alt: 'Zebra at a watering hole' },
  ];
  const imageGrid = document.getElementById('image-grid');
  imageGrid.images = images;
</script>
`;

const meta: Meta<ImageGridArgs> = {
  title: 'Components/Image Grid',
  component: 'modus-wc-image-grid',
  args: {
    images: SAMPLE_IMAGES,
    'image-shape': 'rectangle',
    'images-per-view': 4,
  },
  argTypes: {
    images: {
      control: 'object',
      description: 'Images to display in the grid',
      table: {
        type: {
          detail: `
            Interface: IImageGridImage
            Properties:
            - src (string): The source URL of the image asset
            - alt (string, optional): Accessible text description for the image
          `,
        },
      },
    },
    'image-shape': {
      control: { type: 'select' },
      options: ['rectangle', 'square'],
      table: {
        category: 'attributes',
      },
    },
    'images-per-view': {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
      table: {
        category: 'attributes',
      },
    },
    'custom-class': {
      table: {
        category: 'attributes',
      },
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Responsive image grid that displays 1 to 4 images in rectangle or square layouts.
Each cell uses \`modus-wc-image\` for cropping, rounded corners, and error fallback.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<ImageGridArgs>;

const Template: Story = {
  parameters: {
    docs: {
      source: {
        code: defaultSourceCode,
      },
    },
  },
  render: (args) => html`
    <modus-wc-image-grid
      .images=${resolveImages(args.images)}
      image-shape=${ifDefined(args['image-shape'])}
      images-per-view=${ifDefined(args['images-per-view'])}
      custom-class=${ifDefined(args['custom-class'])}
    ></modus-wc-image-grid>
  `,
};

export const Default: Story = {
  ...Template,
  args: {
    images: SAMPLE_IMAGES,
    'image-shape': 'rectangle',
    'images-per-view': 4,
  },
  parameters: {
    docs: {
      source: {
        code: defaultSourceCode,
      },
      description: {
        story:
          'Default layout: four rectangle images in a 2×2 grid with 24px gap and 16px corner radius.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <section>
        <h3 style="margin: 0 0 16px;">4 images — rectangle</h3>
        <modus-wc-image-grid
          .images=${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">4 images — square</h3>
        <modus-wc-image-grid
          .images=${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
        <modus-wc-image-grid
          .images=${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="3"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">2 images — square</h3>
        <modus-wc-image-grid
          .images=${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="2"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
        <modus-wc-image-grid
          .images=${[SAMPLE_IMAGES[0]]}
          image-shape="rectangle"
          images-per-view="1"
        ></modus-wc-image-grid>
      </section>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'All layout variants from the Figma ImageGrid design.',
      },
    },
  },
};
