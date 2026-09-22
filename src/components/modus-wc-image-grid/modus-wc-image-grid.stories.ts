import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IImageGridImage } from './modus-wc-image-grid';
import { ImageGridShape } from './modus-wc-image-grid.tailwind';

const SAMPLE_IMAGES: IImageGridImage[] = [
  {
    src: 'https://news.trimble.com/file.php/178313/%5BCFS%5D+Viewing+3D+models+on+site+in+augmented+reality.jpg?thumbnail=modal',
    alt: 'Viewing 3D models on site in augmented reality',
  },
  {
    src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4fdlIWCc7WJCGm2DH3KErp%2Fcf92ca036ce00501c67ee4c897c9e802%2Findustry-solutions-utilities-r2-electric-1280x704.jpg%3Ff%3Dright&w=828&q=80',
    alt: 'Utilities industry solutions with R2 electric equipment',
  },
  {
    src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F2l678flQCv7FTIPRREpHpo%2Fed5eba100e1f4f2519963101e47e06de%2Findustry-solutions-geospatial-r12i-tsc7-1280x704.jpg%3Ff%3Dcenter&w=828&q=80',
    alt: 'Geospatial industry solutions with R12i and TSC7',
  },
  {
    src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4vmvFNmvbLZ7WYzAy9TVEU%2F048f8db7b63f61032ab28236f0d59589%2Findustries-government-geo-631x354-050125.jpg%3Ff%3Dcenter&w=828&q=80',
    alt: 'Government geospatial industry solutions',
  },
];

const resolveImages = (images?: IImageGridImage[]) =>
  Array.isArray(images) && images.length > 0 ? images : [];

interface ImageGridArgs {
  images: IImageGridImage[];
  'aria-label'?: string;
  'image-shape'?: ImageGridShape;
  'images-per-view'?: number;
  'custom-class'?: string;
}

const defaultSourceCode = `
<modus-wc-image-grid
  aria-label="Product image gallery"
  image-shape="rectangle"
  images-per-view="4"
  id="image-grid"
></modus-wc-image-grid>

<script>
  const images = [
    {
      src: 'https://news.trimble.com/file.php/178313/%5BCFS%5D+Viewing+3D+models+on+site+in+augmented+reality.jpg?thumbnail=modal',
      alt: 'Viewing 3D models on site in augmented reality',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4fdlIWCc7WJCGm2DH3KErp%2Fcf92ca036ce00501c67ee4c897c9e802%2Findustry-solutions-utilities-r2-electric-1280x704.jpg%3Ff%3Dright&w=828&q=80',
      alt: 'Utilities industry solutions with R2 electric equipment',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F2l678flQCv7FTIPRREpHpo%2Fed5eba100e1f4f2519963101e47e06de%2Findustry-solutions-geospatial-r12i-tsc7-1280x704.jpg%3Ff%3Dcenter&w=828&q=80',
      alt: 'Geospatial industry solutions with R12i and TSC7',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4vmvFNmvbLZ7WYzAy9TVEU%2F048f8db7b63f61032ab28236f0d59589%2Findustries-government-geo-631x354-050125.jpg%3Ff%3Dcenter&w=828&q=80',
      alt: 'Government geospatial industry solutions',
    },
  ];
  const imageGrid = document.getElementById('image-grid');
  imageGrid.images = images;

  imageGrid.addEventListener('imageLoad', (event) => {
    const image = event.target;
    if (image.tagName === 'MODUS-WC-IMAGE') {
      console.log('Image loaded', image.src);
    }
  });

  imageGrid.addEventListener('imageError', (event) => {
    const image = event.target;
    if (image.tagName === 'MODUS-WC-IMAGE') {
      console.log('Image failed to load', image.src);
    }
  });
</script>
`;

const allVariantsSourceCode = `
<div style="display: flex; flex-direction: column; gap: 48px;">
  <section>
    <h3 style="margin: 0 0 16px;">4 images — rectangle</h3>
    <modus-wc-image-grid
      aria-label="Four rectangle product images"
      image-shape="rectangle"
      images-per-view="4"
      id="image-grid-rectangle-four"
    ></modus-wc-image-grid>
  </section>
  <section>
    <h3 style="margin: 0 0 16px;">4 images — square</h3>
    <modus-wc-image-grid
      aria-label="Four square product images"
      image-shape="square"
      images-per-view="4"
      id="image-grid-square-four"
    ></modus-wc-image-grid>
  </section>
  <section>
    <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
    <modus-wc-image-grid
      aria-label="Three rectangle product images"
      image-shape="rectangle"
      images-per-view="3"
      id="image-grid-rectangle-three"
    ></modus-wc-image-grid>
  </section>
  <section>
    <h3 style="margin: 0 0 16px;">2 images — square</h3>
    <modus-wc-image-grid
      aria-label="Two square product images"
      image-shape="square"
      images-per-view="2"
      id="image-grid-square-two"
    ></modus-wc-image-grid>
  </section>
  <section>
    <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
    <modus-wc-image-grid
      aria-label="Single rectangle product image"
      image-shape="rectangle"
      images-per-view="1"
      id="image-grid-rectangle-one"
    ></modus-wc-image-grid>
  </section>
</div>

<script>
  const images = [
    {
      src: 'https://news.trimble.com/file.php/178313/%5BCFS%5D+Viewing+3D+models+on+site+in+augmented+reality.jpg?thumbnail=modal',
      alt: 'Viewing 3D models on site in augmented reality',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4fdlIWCc7WJCGm2DH3KErp%2Fcf92ca036ce00501c67ee4c897c9e802%2Findustry-solutions-utilities-r2-electric-1280x704.jpg%3Ff%3Dright&w=828&q=80',
      alt: 'Utilities industry solutions with R2 electric equipment',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F2l678flQCv7FTIPRREpHpo%2Fed5eba100e1f4f2519963101e47e06de%2Findustry-solutions-geospatial-r12i-tsc7-1280x704.jpg%3Ff%3Dcenter&w=828&q=80',
      alt: 'Geospatial industry solutions with R12i and TSC7',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4vmvFNmvbLZ7WYzAy9TVEU%2F048f8db7b63f61032ab28236f0d59589%2Findustries-government-geo-631x354-050125.jpg%3Ff%3Dcenter&w=828&q=80',
      alt: 'Government geospatial industry solutions',
    },
  ];

  document.getElementById('image-grid-rectangle-four').images = images;
  document.getElementById('image-grid-square-four').images = images;
  document.getElementById('image-grid-rectangle-three').images = images;
  document.getElementById('image-grid-square-two').images = images;
  document.getElementById('image-grid-rectangle-one').images = [images[0]];
</script>
`;

const meta: Meta<ImageGridArgs> = {
  title: 'Components/Image Grid',
  component: 'modus-wc-image-grid',
  args: {
    images: SAMPLE_IMAGES,
    'aria-label': 'Product image gallery',
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
            - shape ('square' | 'rounded', optional): Corner radius styling
            - fit ('default' | 'contain' | 'scale-down' | 'none', optional): Containment and cropping behavior
            - cropPosition (string, optional): Focal point when cropped (maps to object-position)
            - customClass (string, optional): Additional CSS class for the cell image container
          `,
        },
      },
    },
    'aria-label': {
      table: {
        category: 'attributes',
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
  decorators: [withActions],
  parameters: {
    layout: 'padded',
    actions: {
      handles: ['imageLoad', 'imageError'],
    },
    docs: {
      description: {
        component: `
Responsive image grid that displays 1 to 4 images in rectangle or square layouts.
Each cell uses \`modus-wc-image\` for cropping, rounded corners, and error fallback.

Per-image \`size\` is not part of \`IImageGridImage\`: grid layout CSS fills each cell and overrides \`modus-wc-image\` dimensional size tokens.`,
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
      aria-label=${ifDefined(args['aria-label'])}
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
    'aria-label': 'Product image gallery',
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
          aria-label="Four rectangle product images"
          .images=${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">4 images — square</h3>
        <modus-wc-image-grid
          aria-label="Four square product images"
          .images=${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
        <modus-wc-image-grid
          aria-label="Three rectangle product images"
          .images=${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="3"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">2 images — square</h3>
        <modus-wc-image-grid
          aria-label="Two square product images"
          .images=${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="2"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
        <modus-wc-image-grid
          aria-label="Single rectangle product image"
          .images=${[SAMPLE_IMAGES[0]]}
          image-shape="rectangle"
          images-per-view="1"
        ></modus-wc-image-grid>
      </section>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: allVariantsSourceCode,
      },
      description: {
        story: 'All layout variants from the Figma ImageGrid design.',
      },
    },
  },
};
