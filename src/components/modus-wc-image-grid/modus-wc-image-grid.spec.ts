import { newSpecPage } from '@stencil/core/testing';
import { IImageGridImage, ModusWcImageGrid } from './modus-wc-image-grid';
import { ModusWcImage } from '../modus-wc-image/modus-wc-image';

const SAMPLE_IMAGES = [
  { src: 'https://example.com/1.jpg', alt: 'Image 1' },
  { src: 'https://example.com/2.jpg', alt: 'Image 2' },
  { src: 'https://example.com/3.jpg', alt: 'Image 3' },
  { src: 'https://example.com/4.jpg', alt: 'Image 4' },
];

describe('modus-wc-image-grid', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid></modus-wc-image-grid>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render four images by default', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.images = SAMPLE_IMAGES;
    await page.waitForChanges();

    const images = page.root?.querySelectorAll('modus-wc-image');
    expect(images?.length).toBe(4);
    expect(page.root).toMatchSnapshot();
  });

  it('should limit visible images based on imagesPerView', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid images-per-view="2"></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.images = SAMPLE_IMAGES;
    await page.waitForChanges();

    const images = page.root?.querySelectorAll('modus-wc-image');
    expect(images?.length).toBe(2);
  });

  it('should apply rectangle layout classes', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid image-shape="rectangle" images-per-view="4"></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.images = SAMPLE_IMAGES;
    await page.waitForChanges();

    expect(
      page.root?.classList.contains('modus-wc-image-grid--rectangle')
    ).toBe(true);
    expect(page.root?.classList.contains('modus-wc-image-grid--count-4')).toBe(
      true
    );
  });

  it('should apply square layout classes', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid image-shape="square" images-per-view="3"></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.images = SAMPLE_IMAGES;
    await page.waitForChanges();

    expect(page.root?.classList.contains('modus-wc-image-grid--square')).toBe(
      true
    );
    expect(page.root?.classList.contains('modus-wc-image-grid--count-3')).toBe(
      true
    );
  });

  it('should apply custom class to the grid container', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid custom-class="my-grid"></modus-wc-image-grid>',
    });
    const container = page.root?.querySelector(
      '.modus-wc-image-grid-container'
    );
    expect(container?.classList.contains('my-grid')).toBe(true);
  });

  it('should render modus-wc-image cells with rounded shape and grid cell class', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid images-per-view="1"></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.images = [SAMPLE_IMAGES[0]];
    await page.waitForChanges();

    const container = page.root?.querySelector('.modus-wc-image-container');
    expect(container?.classList.contains('modus-wc-image--rounded')).toBe(true);
    expect(container?.classList.contains('modus-wc-image--default')).toBe(true);
    expect(container?.classList.contains('modus-wc-image-grid-cell')).toBe(
      true
    );
  });

  it('should derive count class from visible images not imagesPerView', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid images-per-view="4"></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.images = [SAMPLE_IMAGES[0]];
    await page.waitForChanges();

    expect(page.root?.classList.contains('modus-wc-image-grid--count-1')).toBe(
      true
    );
    expect(page.root?.classList.contains('modus-wc-image-grid--count-4')).toBe(
      false
    );
  });

  it('should apply default layout classes when props are unset via assignment', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.imageShape = undefined;
    component.imagesPerView = undefined;
    component.images = SAMPLE_IMAGES;
    await page.waitForChanges();

    expect(
      page.root?.classList.contains('modus-wc-image-grid--rectangle')
    ).toBe(true);
    expect(page.root?.classList.contains('modus-wc-image-grid--count-4')).toBe(
      true
    );
  });

  it('should render duplicate image sources without key collision', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid images-per-view="4"></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.images = [
      { src: 'https://example.com/same.jpg', alt: 'A' },
      { src: 'https://example.com/same.jpg', alt: 'B' },
      { src: 'https://example.com/same.jpg', alt: 'C' },
      { src: 'https://example.com/same.jpg', alt: 'D' },
    ];
    await page.waitForChanges();

    const images = page.root?.querySelectorAll('modus-wc-image');
    expect(images?.length).toBe(4);
  });

  it('should clamp imagesPerView below 1 to a single column', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid images-per-view="0"></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.images = SAMPLE_IMAGES;
    await page.waitForChanges();

    const images = page.root?.querySelectorAll('modus-wc-image');
    expect(images?.length).toBe(1);
    expect(page.root?.classList.contains('modus-wc-image-grid--count-1')).toBe(
      true
    );
  });

  it('should handle undefined images array', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.images = undefined as unknown as IImageGridImage[];
    await page.waitForChanges();

    const images = page.root?.querySelectorAll('modus-wc-image');
    expect(images?.length).toBe(0);
    expect(page.root?.classList.contains('modus-wc-image-grid--count-1')).toBe(
      true
    );
  });

  it('should clamp imagesPerView above 4 to four images', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid images-per-view="10"></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.images = [
      ...SAMPLE_IMAGES,
      { src: 'https://example.com/5.jpg', alt: 'Image 5' },
    ];
    await page.waitForChanges();

    const images = page.root?.querySelectorAll('modus-wc-image');
    expect(images?.length).toBe(4);
  });

  it('should pass per-image modus-wc-image properties to grid cells', async () => {
    const page = await newSpecPage({
      components: [ModusWcImageGrid, ModusWcImage],
      html: '<modus-wc-image-grid images-per-view="1"></modus-wc-image-grid>',
    });
    const component = page.rootInstance as ModusWcImageGrid;
    component.images = [
      {
        src: 'https://example.com/custom.jpg',
        alt: 'Custom image',
        shape: 'square',
        fit: 'contain',
        cropPosition: 'top left',
        customClass: 'my-cell',
      },
    ];
    await page.waitForChanges();

    const imageElement = page.root?.querySelector('modus-wc-image');
    expect(imageElement?.getAttribute('crop-position')).toBe('top left');

    const container = page.root?.querySelector('.modus-wc-image-container');
    expect(container?.classList.contains('modus-wc-image--square')).toBe(true);
    expect(container?.classList.contains('modus-wc-image--contain')).toBe(true);
    expect(container?.classList.contains('modus-wc-image-grid-cell')).toBe(
      true
    );
    expect(container?.classList.contains('my-cell')).toBe(true);
  });
});
