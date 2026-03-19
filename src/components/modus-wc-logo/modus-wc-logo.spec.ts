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

  it('should render with emblem prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble" emblem></modus-wc-logo>',
    });
    expect(page.root).toMatchSnapshot();
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.classList.contains('logo-emblem')).toBe(true);
  });

  it('should render full logo without emblem prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="siteworks"></modus-wc-logo>',
    });
    expect(page.root).toMatchSnapshot();
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.classList.contains('logo-full')).toBe(true);
  });

  it('should render viewpoint logo', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="viewpoint_field_view"></modus-wc-logo>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom alt text', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble" alt="Trimble Logo"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.getAttribute('aria-label')).toBe('Trimble Logo');
  });

  it('should apply custom class', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble" custom-class="my-custom-class"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.classList.contains('my-custom-class')).toBe(true);
  });

  it('should render emblem when emblem prop is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="connect" emblem></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.classList.contains('logo-emblem')).toBe(true);
  });

  it('should handle invalid logo name gracefully', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="invalid_logo_name"></modus-wc-logo>',
    });
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Logo "invalid_logo_name" not found'),
      expect.any(String)
    );
    consoleSpy.mockRestore();
  });

  it('should apply correct aria-label', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="viewpoint_analytics"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.getAttribute('aria-label')).toBe('viewpoint analytics');
  });

  it('should render svg content from embedded data', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.querySelector('svg')).not.toBeNull();
  });

  it('should render empty when logo has no svg data', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="invalid_logo_name"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.querySelector('svg')).toBeNull();
    consoleSpy.mockRestore();
  });
});
