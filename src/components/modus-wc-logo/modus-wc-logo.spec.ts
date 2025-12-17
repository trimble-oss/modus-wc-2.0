/* eslint-disable import/order */
import { newSpecPage } from '@stencil/core/testing';

// Get the actual constants before mocking
const actualConstants =
  jest.requireActual<typeof import('./logo-constants')>('./logo-constants');

// Create a mutable object that extends the actual variants
const mockLogoVariants: Record<
  string,
  {
    displayName: string;
    path: string;
    pathDark?: string;
    emblemPath?: string;
    emblemPathDark?: string;
    category: string;
  }
> = {};

// Create a Proxy that merges actual and mock variants
const LOGO_VARIANTS_PROXY = new Proxy(
  {},
  {
    get(_, prop) {
      // First check mock variants, then fall back to actual
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
        return {
          enumerable: true,
          configurable: true,
        };
      }
      return undefined;
    },
  }
);

jest.mock('./logo-constants', () => {
  const actual =
    jest.requireActual<typeof import('./logo-constants')>('./logo-constants');
  return {
    ...actual,
    LOGO_VARIANTS: LOGO_VARIANTS_PROXY,
  };
});

import { ModusWcLogo } from './modus-wc-logo';

describe('modus-wc-logo', () => {
  beforeEach(() => {
    // Clear mock variants before each test
    Object.keys(mockLogoVariants).forEach(
      (key) => delete mockLogoVariants[key]
    );
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

  it('should use light theme by default', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });
    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('src')).toContain('trimble.svg');
    expect(img?.getAttribute('src')).not.toContain('-dark');
  });

  it('should render emblem when emblem prop is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="connect" emblem></modus-wc-logo>',
    });
    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('src')).toContain('connect-emblem.svg');
  });

  it('should handle invalid logo name gracefully', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="invalid_logo_name"></modus-wc-logo>',
    });
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Logo "invalid_logo_name" not found'),
      expect.any(String)
    );
    // Should return empty path, so img src will be empty
    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('src')).toBe('');
    consoleSpy.mockRestore();
  });

  it('should use correct logo path for trimble', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });
    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('src')).toBe('/assets/logos/trimble/trimble.svg');
  });

  it('should use correct emblem path', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble" emblem></modus-wc-logo>',
    });
    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('src')).toBe(
      '/assets/logos/emblems/trimble-emblem.svg'
    );
  });

  it('should apply correct aria-label', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="viewpoint_analytics"></modus-wc-logo>',
    });
    const logoSpan = page.root?.querySelector('.modus-wc-logo');
    expect(logoSpan?.getAttribute('aria-label')).toBe('viewpoint analytics');
  });

  it('should use dark logo path when pathDark is available', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });

    // Manually set dark mode state and trigger re-render
    const component = page.rootInstance as ModusWcLogo;
    (component as unknown as { isLight: boolean }).isLight = false;
    await page.waitForChanges();

    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('src')).toContain('-dark');
  });

  it('should use dark emblem when in dark mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble" emblem></modus-wc-logo>',
    });

    // Manually set dark mode state and trigger re-render
    const component = page.rootInstance as ModusWcLogo;
    (component as unknown as { isLight: boolean }).isLight = false;
    await page.waitForChanges();

    const img = page.root?.querySelector('img');
    expect(img?.getAttribute('src')).toContain('emblem-dark');
  });

  it('should create MutationObserver when available', async () => {
    let savedCallback: (() => void) | null = null;
    const mockObserve = jest.fn();
    const mockDisconnect = jest.fn();

    const MockedMutationObserver = jest.fn((callback) => {
      savedCallback = callback;
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        takeRecords: jest.fn(),
      };
    });

    globalThis.MutationObserver =
      MockedMutationObserver as unknown as typeof MutationObserver;

    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });

    // Verify MutationObserver was created
    expect(MockedMutationObserver).toHaveBeenCalled();
    expect(mockObserve).toHaveBeenCalledWith(
      document.documentElement,
      expect.objectContaining({
        attributes: true,
        attributeFilter: ['data-theme'],
      })
    );

    // Trigger the callback to cover line 44
    if (savedCallback) {
      document.documentElement.setAttribute('data-theme', 'modus-modern-dark');
      (savedCallback as () => void)();
      expect(page.rootInstance.isLight).toBe(false);
    }

    // Verify disconnection on cleanup
    const component = page.rootInstance as ModusWcLogo;
    if (component.disconnectedCallback) {
      component.disconnectedCallback();
    }
    expect(mockDisconnect).toHaveBeenCalled();

    // Cleanup
    document.documentElement.removeAttribute('data-theme');
    delete (globalThis as { MutationObserver?: typeof MutationObserver })
      .MutationObserver;
  });

  it('should warn when path is missing for light theme', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

    // Add a mock logo variant without paths
    mockLogoVariants.test_logo = {
      displayName: 'Test Logo',
      path: '',
      category: 'trimble',
    };

    await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="test_logo"></modus-wc-logo>',
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('No logo path found')
    );

    consoleSpy.mockRestore();
  });

  it('should warn when emblem path is missing', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

    // Add a mock logo variant without emblem path
    mockLogoVariants.test_logo = {
      displayName: 'Test Logo',
      path: 'test.svg',
      category: 'trimble',
    };

    await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="test_logo" emblem></modus-wc-logo>',
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('No emblem path found')
    );

    consoleSpy.mockRestore();
  });

  it('should use getAssetPath for emblem paths', async () => {
    // Add mock logo with emblem path
    mockLogoVariants.test_logo = {
      displayName: 'Test Logo',
      path: 'test.svg',
      emblemPath: 'test-emblem.svg',
      category: 'trimble',
    };

    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="test_logo" emblem></modus-wc-logo>',
    });

    const img = page.root?.querySelector('img');
    const src = img?.getAttribute('src');

    // Verify the src uses the asset path with emblem
    expect(src).toBeDefined();
    expect(src).toContain('test-emblem.svg');
  });

  it('should use getAssetPath for logo paths', async () => {
    const page = await newSpecPage({
      components: [ModusWcLogo],
      html: '<modus-wc-logo name="trimble"></modus-wc-logo>',
    });

    const img = page.root?.querySelector('img');
    const src = img?.getAttribute('src');

    // Verify the src uses the asset path format
    expect(src).toBeDefined();
    expect(src).toContain('logos/trimble/trimble.svg');
  });
});
