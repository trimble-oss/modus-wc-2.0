import { newSpecPage } from '@stencil/core/testing';
import * as logoConstants from './logo-constants';
import { ILogoInfo } from './logo-constants';
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

  it('should render combined emblem and wordmark for product logos', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="sketchup"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.classList.contains('logo-combined')).toBe(true);
    expect(page.root?.querySelector('.logo-combined-emblem')).not.toBeNull();
    expect(page.root?.querySelector('.logo-combined-wordmark')).not.toBeNull();
  });

  it('should not render combined for trimble logo', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.classList.contains('logo-combined')).toBe(false);
    expect(page.root?.querySelector('.logo-combined-emblem')).toBeNull();
  });

  it('should not render combined for viewpoint logos', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="viewpoint_analytics"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.classList.contains('logo-combined')).toBe(false);
    expect(page.root?.querySelector('.logo-combined-emblem')).toBeNull();
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
    expect(logoSpan?.classList.contains('logo-combined')).toBe(false);
    expect(page.root?.querySelector('.logo-combined-emblem')).toBeNull();
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

  it('should warn when logo variant has no file path', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    (logoConstants.LOGO_VARIANTS as Record<string, ILogoInfo>)['test_no_path'] =
      {
        displayName: 'Test',
        path: '',
        emblemPath: '',
        category: 'trimble',
      };

    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="test_no_path"></modus-wc-logo>',
    });
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('No logo path found for "test_no_path"')
    );
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.querySelector('svg')).toBeNull();

    delete (logoConstants.LOGO_VARIANTS as Record<string, ILogoInfo>)[
      'test_no_path'
    ];
    consoleSpy.mockRestore();
  });

  it('should warn when logo variant has no emblem path and emblem is true', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    (logoConstants.LOGO_VARIANTS as Record<string, ILogoInfo>)[
      'test_no_emblem_path'
    ] = {
      displayName: 'Test Emblem',
      path: 'logos/trimble/trimble.svg',
      emblemPath: '',
      category: 'trimble',
    };

    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="test_no_emblem_path" emblem></modus-wc-logo>',
    });
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('No emblem path found for "test_no_emblem_path"')
    );
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.querySelector('svg')).toBeNull();

    delete (logoConstants.LOGO_VARIANTS as Record<string, ILogoInfo>)[
      'test_no_emblem_path'
    ];
    consoleSpy.mockRestore();
  });

  it('should warn when SVG data is missing for a valid path', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    (logoConstants.LOGO_VARIANTS as Record<string, ILogoInfo>)[
      'test_missing_svg'
    ] = {
      displayName: 'Test Missing',
      path: 'logos/trimble/nonexistent.svg',
      category: 'trimble',
    };

    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="test_missing_svg"></modus-wc-logo>',
    });
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        'SVG content not found for logo "test_missing_svg"'
      )
    );
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.querySelector('svg')).toBeNull();

    delete (logoConstants.LOGO_VARIANTS as Record<string, ILogoInfo>)[
      'test_missing_svg'
    ];
    consoleSpy.mockRestore();
  });

  it('should not render combined when switching to viewpoint', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="connect"></modus-wc-logo>',
    });
    expect(page.root?.querySelector('.logo-combined-emblem')).not.toBeNull();

    page.rootInstance.name = 'viewpoint_field_view';
    await page.waitForChanges();
    expect(page.root?.querySelector('.logo-combined-emblem')).toBeNull();
  });

  it('should not render combined when emblem prop is set to true', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="connect"></modus-wc-logo>',
    });
    expect(page.root?.querySelector('.logo-combined-emblem')).not.toBeNull();

    page.rootInstance.emblem = true;
    await page.waitForChanges();
    expect(page.root?.querySelector('.logo-combined-emblem')).toBeNull();
    expect(
      page.root
        ?.querySelector('.modus-wc-logo')
        ?.classList.contains('logo-emblem')
    ).toBe(true);
  });

  it('should not render combined when logo has no emblem path', async () => {
    (logoConstants.LOGO_VARIANTS as Record<string, ILogoInfo>)[
      'test_no_emblem'
    ] = {
      displayName: 'Test No Emblem',
      path: 'logos/trimble/trimble.svg',
      category: 'trimble',
    };

    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="test_no_emblem"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.classList.contains('logo-combined')).toBe(false);
    expect(page.root?.querySelector('.logo-combined-emblem')).toBeNull();

    delete (logoConstants.LOGO_VARIANTS as Record<string, ILogoInfo>)[
      'test_no_emblem'
    ];
  });

  it('should not render combined when emblem svg data is missing', async () => {
    (logoConstants.LOGO_VARIANTS as Record<string, ILogoInfo>)[
      'test_missing_emblem_svg'
    ] = {
      displayName: 'Test Missing Emblem SVG',
      path: 'logos/trimble/trimble.svg',
      emblemPath: 'logos/emblems/nonexistent-emblem.svg',
      category: 'trimble',
    };

    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="test_missing_emblem_svg"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.classList.contains('logo-combined')).toBe(false);
    expect(page.root?.querySelector('.logo-combined-emblem')).toBeNull();

    delete (logoConstants.LOGO_VARIANTS as Record<string, ILogoInfo>)[
      'test_missing_emblem_svg'
    ];
  });

  it('should not render combined when name is invalid', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="connect"></modus-wc-logo>',
    });
    expect(page.root?.querySelector('.logo-combined-emblem')).not.toBeNull();

    page.rootInstance.name = 'nonexistent';
    await page.waitForChanges();
    expect(page.root?.querySelector('.logo-combined-emblem')).toBeNull();
    consoleSpy.mockRestore();
  });
});
