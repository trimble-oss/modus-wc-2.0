import { newSpecPage } from '@stencil/core/testing';
import { ModusWcImage } from './modus-wc-image';

describe('modus-wc-image', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/image.jpg" alt="Test image"></modus-wc-image>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with no alt as a decorative image', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/image.jpg"></modus-wc-image>',
    });
    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('alt')).toBe('');
    expect(img?.hasAttribute('role')).toBe(false);
    expect(img?.hasAttribute('aria-hidden')).toBe(false);
    expect(page.root).toMatchSnapshot();
  });

  it('should render with empty alt as a decorative image', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/image.jpg" alt=""></modus-wc-image>',
    });
    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('alt')).toBe('');
    expect(img?.hasAttribute('role')).toBe(false);
    expect(img?.hasAttribute('aria-hidden')).toBe(false);
    expect(page.root).toMatchSnapshot();
  });

  it('should treat whitespace-only alt as decorative', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/image.jpg" alt=" "></modus-wc-image>',
    });
    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('alt')).toBe('');
    expect(img?.hasAttribute('role')).toBe(false);
    expect(img?.hasAttribute('aria-hidden')).toBe(false);
  });

  it('should use "Image unavailable" for fallback when alt is whitespace-only', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/bad.jpg" alt=" "></modus-wc-image>',
    });
    const instance = page.rootInstance as ModusWcImage;
    instance['hasError'] = true;
    await page.waitForChanges();
    const container = page.root?.querySelector('.modus-wc-image-container');
    expect(container?.getAttribute('aria-label')).toBe('Image unavailable');
  });

  it('should pass alt text to the img element when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/image.jpg" alt="A scenic mountain"></modus-wc-image>',
    });
    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('alt')).toBe('A scenic mountain');
    expect(img?.hasAttribute('aria-hidden')).toBe(false);
    expect(img?.hasAttribute('role')).toBe(false);
  });

  it('should apply the loading class before image load', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/image.jpg" alt="Test"></modus-wc-image>',
    });
    const container = page.root?.querySelector('.modus-wc-image-container');
    expect(container?.classList.contains('modus-wc-image--loading')).toBe(true);
  });

  it('should remove loading class after image loads', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/image.jpg" alt="Test"></modus-wc-image>',
    });
    const instance = page.rootInstance as ModusWcImage;
    instance['isLoaded'] = true;
    await page.waitForChanges();
    const container = page.root?.querySelector('.modus-wc-image-container');
    expect(container?.classList.contains('modus-wc-image--loading')).toBe(
      false
    );
  });

  it('should show fallback when image fails to load', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/bad.jpg" alt="Missing image"></modus-wc-image>',
    });
    const instance = page.rootInstance as ModusWcImage;
    instance['hasError'] = true;
    await page.waitForChanges();
    const fallback = page.root?.querySelector('.modus-wc-image-fallback');
    const img = page.root?.querySelector('img');
    expect(fallback).not.toBeNull();
    expect(img).toBeNull();
    expect(page.root).toMatchSnapshot();
  });

  it('should set role="img" and aria-label on the fallback container', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/bad.jpg" alt="Missing image"></modus-wc-image>',
    });
    const instance = page.rootInstance as ModusWcImage;
    instance['hasError'] = true;
    await page.waitForChanges();
    const container = page.root?.querySelector('.modus-wc-image-container');
    expect(container?.getAttribute('role')).toBe('img');
    expect(container?.getAttribute('aria-label')).toBe('Missing image');
  });

  it('should use "Image unavailable" as aria-label for fallback when no alt is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/bad.jpg"></modus-wc-image>',
    });
    const instance = page.rootInstance as ModusWcImage;
    instance['hasError'] = true;
    await page.waitForChanges();
    const container = page.root?.querySelector('.modus-wc-image-container');
    expect(container?.getAttribute('aria-label')).toBe('Image unavailable');
  });

  it.each([
    ['sm', 'modus-wc-image--sm'],
    ['md', 'modus-wc-image--md'],
    ['lg', 'modus-wc-image--lg'],
    ['xl', 'modus-wc-image--xl'],
  ])(
    'should apply size class modus-wc-image--%s',
    async (size: string, expectedClass: string) => {
      const page = await newSpecPage({
        components: [ModusWcImage],
        html: `<modus-wc-image src="https://example.com/image.jpg" alt="Test" size="${size}"></modus-wc-image>`,
      });
      const container = page.root?.querySelector('.modus-wc-image-container');
      expect(container?.classList.contains(expectedClass)).toBe(true);
      expect(page.root).toMatchSnapshot();
    }
  );

  it.each([
    ['square', 'modus-wc-image--square'],
    ['rounded', 'modus-wc-image--rounded'],
  ])(
    'should apply shape class for shape="%s"',
    async (shape: string, expectedClass: string) => {
      const page = await newSpecPage({
        components: [ModusWcImage],
        html: `<modus-wc-image src="https://example.com/image.jpg" alt="Test" shape="${shape}"></modus-wc-image>`,
      });
      const container = page.root?.querySelector('.modus-wc-image-container');
      expect(container?.classList.contains(expectedClass)).toBe(true);
      expect(page.root).toMatchSnapshot();
    }
  );

  it.each([
    ['default', 'modus-wc-image--default'],
    ['contain', 'modus-wc-image--contain'],
    ['scale-down', 'modus-wc-image--scale-down'],
    ['none', 'modus-wc-image--none'],
  ])(
    'should apply fit class for fit="%s"',
    async (fit: string, expectedClass: string) => {
      const page = await newSpecPage({
        components: [ModusWcImage],
        html: `<modus-wc-image src="https://example.com/image.jpg" alt="Test" fit="${fit}"></modus-wc-image>`,
      });
      const container = page.root?.querySelector('.modus-wc-image-container');
      expect(container?.classList.contains(expectedClass)).toBe(true);
      expect(page.root).toMatchSnapshot();
    }
  );

  it('should apply the custom class to the inner container', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/image.jpg" alt="Test" custom-class="my-custom-class"></modus-wc-image>',
    });
    const container = page.root?.querySelector('.modus-wc-image-container');
    expect(container?.classList.contains('my-custom-class')).toBe(true);
  });

  it('should inherit host aria attributes on the fallback container', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/bad.jpg" alt="Missing image" aria-label="Custom label"></modus-wc-image>',
    });
    const instance = page.rootInstance as ModusWcImage;
    instance['hasError'] = true;
    await page.waitForChanges();
    const container = page.root?.querySelector('.modus-wc-image-container');
    expect(page.root?.hasAttribute('aria-label')).toBe(false);
    expect(container?.getAttribute('aria-label')).toBe('Missing image');
  });

  it('should reset hasError and isLoaded when src changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/image.jpg" alt="Test"></modus-wc-image>',
    });
    const instance = page.rootInstance as ModusWcImage;
    instance['hasError'] = true;
    instance['isLoaded'] = true;
    await page.waitForChanges();
    instance.src = 'https://example.com/new-image.jpg';
    await page.waitForChanges();
    expect(instance['hasError']).toBe(false);
    expect(instance['isLoaded']).toBe(false);
  });

  it('should emit imageLoad event when image loads', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/image.jpg" alt="Test"></modus-wc-image>',
    });
    const imageLoadSpy = jest.fn();
    page.root?.addEventListener('imageLoad', imageLoadSpy);
    const img = page.root?.querySelector('img');
    img?.dispatchEvent(new Event('load'));
    expect(imageLoadSpy).toHaveBeenCalled();
  });

  it('should emit imageError event when image fails to load', async () => {
    const page = await newSpecPage({
      components: [ModusWcImage],
      html: '<modus-wc-image src="https://example.com/bad.jpg" alt="Test"></modus-wc-image>',
    });
    const imageErrorSpy = jest.fn();
    page.root?.addEventListener('imageError', imageErrorSpy);
    const img = page.root?.querySelector('img');
    img?.dispatchEvent(new Event('error'));
    expect(imageErrorSpy).toHaveBeenCalled();
  });
});
