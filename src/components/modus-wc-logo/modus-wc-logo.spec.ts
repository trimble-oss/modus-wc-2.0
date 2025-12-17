import { newSpecPage } from '@stencil/core/testing';
import { ModusWcLogo } from './modus-wc-logo';

describe('modus-wc-logo', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with scalable type', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble" type="scalable" size="md"></modus-wc-logo>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with fixed type', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="modus_2_0" type="fixed"></modus-wc-logo>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render viewpoint logo', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="viewpoint_field_view" type="scalable" size="lg"></modus-wc-logo>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom alt text', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble" alt="Trimble Logo"></modus-wc-logo>',
    });
    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('alt')).toBe('Trimble Logo');
  });

  it('should apply custom class', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble" custom-class="my-custom-class"></modus-wc-logo>',
    });
    const logoDiv = page.root?.querySelector('.modus-wc-logo');
    expect(logoDiv?.classList.contains('my-custom-class')).toBe(true);
  });

  it('should apply correct size class for scalable type', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble" type="scalable" size="lg"></modus-wc-logo>',
    });
    const logoDiv = page.root?.querySelector('.modus-wc-logo');
    expect(logoDiv?.classList.contains('modus-wc-h-24')).toBe(true);
  });

  it('should handle invalid logo name gracefully', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="invalid_logo"></modus-wc-logo>',
    });
    expect(consoleSpy).toHaveBeenCalled();
    expect(page.root?.querySelector('.logo-placeholder')).toBeTruthy();
    consoleSpy.mockRestore();
  });
});
