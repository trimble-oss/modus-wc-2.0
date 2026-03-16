/* eslint-disable import/order */
import { newSpecPage } from '@stencil/core/testing';
import { ModusWcLogo } from './modus-wc-logo';
import { svgCache } from './logo-svg-cache';
// Get the actual constants before mocking
const actualConstants =
  jest.requireActual<typeof import('./logo-constants')>('./logo-constants');

// Create a mutable object that extends the actual variants
const mockLogoVariants: Record<
  string,
  {
    displayName: string;
    path: string;
    emblemPath?: string;
    category: string;
  }
> = {};

const LOGO_VARIANTS_PROXY = new Proxy(
  {},
  {
    get(_, prop) {
      if (prop in mockLogoVariants) {
        return mockLogoVariants[prop as string];
      }
      return actualConstants.LOGO_VARIANTS[
        prop as keyof typeof actualConstants.LOGO_VARIANTS
      ];
    },
    has(_, prop) {
      return prop in mockLogoVariants || prop in actualConstants.LOGO_VARIANTS;
    },
    ownKeys() {
      return Array.from(
        new Set([
          ...Object.keys(mockLogoVariants),
          ...Object.keys(actualConstants.LOGO_VARIANTS),
        ])
      );
    },
    getOwnPropertyDescriptor(_, prop) {
      if (prop in mockLogoVariants || prop in actualConstants.LOGO_VARIANTS) {
        return { enumerable: true, configurable: true };
      }
      return undefined;
    },
  }
);

jest.mock('./logo-constants', () => {
  const actual =
    jest.requireActual<typeof import('./logo-constants')>('./logo-constants');
  return { ...actual, LOGO_VARIANTS: LOGO_VARIANTS_PROXY };
});

const MOCK_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>';

describe('modus-wc-logo', () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    Object.keys(mockLogoVariants).forEach(
      (key) => delete mockLogoVariants[key]
    );
    svgCache.clear();

    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      text: jest.fn().mockResolvedValue(MOCK_SVG),
    } as unknown as Response);
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    jest.restoreAllMocks();
  });

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

  it('should fetch logo from correct asset path for trimble', async () => {
    await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('logos/trimble/trimble.svg')
    );
  });

  it('should fetch emblem from correct asset path', async () => {
    await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble" emblem></modus-wc-logo>',
    });
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('logos/emblems/trimble-emblem.svg')
    );
  });

  it('should render svg content after fetch', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.querySelector('svg')).not.toBeNull();
  });

  it('should reload svg when name prop changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });
    svgCache.clear();
    const callsBefore = (globalThis.fetch as jest.Mock).mock.calls.length;
    page.rootInstance.name = 'connect';
    page.rootInstance.onLogoPropsChange();
    await new Promise((r) => setTimeout(r, 0));
    expect((globalThis.fetch as jest.Mock).mock.calls.length).toBeGreaterThan(
      callsBefore
    );
  });

  it('should set svgContent to empty string when fetch fails', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      text: jest.fn(),
    } as unknown as Response);

    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.querySelector('svg')).toBeNull();
  });

  it('should handle fetch rejection gracefully and evict cache', async () => {
    globalThis.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.querySelector('svg')).toBeNull();
    expect(svgCache.size).toBe(0);
  });

  it('should return empty string when fetch is undefined (SSR)', async () => {
    const origFetch = globalThis.fetch;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (globalThis as any).fetch;

    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.querySelector('svg')).toBeNull();

    globalThis.fetch = origFetch;
  });
});
