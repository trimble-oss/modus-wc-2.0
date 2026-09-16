import { newSpecPage } from '@stencil/core/testing';
import { ModusWcImageGrid } from './modus-wc-image-grid';
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
      html: '<modus-wc-image-grid images-per-view="2 images"></modus-wc-image-grid>',
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
      html: '<modus-wc-image-grid image-shape="rectangle" images-per-view="4 images"></modus-wc-image-grid>',
    });
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
      html: '<modus-wc-image-grid image-shape="square" images-per-view="3 images"></modus-wc-image-grid>',
    });
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
      html: '<modus-wc-image-grid images-per-view="1 image"></modus-wc-image-grid>',
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
});
