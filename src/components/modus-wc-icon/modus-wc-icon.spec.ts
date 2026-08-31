import { newSpecPage } from '@stencil/core/testing';
import {
  MODUS_ICON_V1_NAMES,
  MODUS_ICON_V2_NAMES,
  MODUS_ICONS_CSS_VERSION,
} from './icon-data';
import { ModusWcIcon } from './modus-wc-icon';
import { convertPropsToClasses } from './modus-wc-icon.tailwind';
import {
  getIconGlyphClassName,
  getIconKey,
  getIconMaskStyle,
  getIconV1ClassName,
  getIconV2ClassName,
  resolveIcon,
} from './resolve-icon';

describe('resolveIcon', () => {
  it('should render a 1.0 ligature for a 1.0 name when version is 1.0', () => {
    expect(resolveIcon('add', '1.0')).toEqual({
      version: '1.0',
      ligature: 'add',
    });
    expect(resolveIcon('add-bold', '1.0')).toEqual({
      version: '1.0',
      ligature: 'add_bold',
    });
    expect(resolveIcon('pencil', '1.0')).toEqual({
      version: '1.0',
      ligature: 'pencil',
    });
  });

  it('should map a 1.0 name to a 2.0 slug when version is 2.0', () => {
    expect(resolveIcon('add', '2.0')).toEqual({
      version: '2.0',
      slug: 'plus',
    });
    expect(resolveIcon('add-bold', '2.0')).toEqual({
      version: '2.0',
      slug: 'plus',
    });
    expect(resolveIcon('warning', '2.0')).toEqual({
      version: '2.0',
      slug: 'warning',
    });
  });

  it('should keep divergent aliases instead of the same-named 2.0 slug', () => {
    expect(resolveIcon('pencil', '2.0')).toEqual({
      version: '2.0',
      slug: 'pencil-simple',
    });
    expect(resolveIcon('share', '2.0')).toEqual({
      version: '2.0',
      slug: 'share-network',
    });
  });

  it('should keep unmapped 1.0 names on the 1.0 ligature in both versions', () => {
    expect(resolveIcon('address', '1.0')).toEqual({
      version: '1.0',
      ligature: 'address',
    });
    expect(resolveIcon('address', '2.0')).toEqual({
      version: '1.0',
      ligature: 'address',
    });
  });

  it('should keep 2.0-only names on the 2.0 mask in both versions', () => {
    expect(resolveIcon('ship', '1.0')).toEqual({
      version: '2.0',
      slug: 'ship',
    });
    expect(resolveIcon('ship', '2.0')).toEqual({
      version: '2.0',
      slug: 'ship',
    });
    expect(resolveIcon('api', '1.0')).toEqual({
      version: '2.0',
      slug: 'api',
    });
    expect(resolveIcon('circle-truck', '2.0')).toEqual({
      version: '2.0',
      slug: 'circle-truck',
    });
  });

  it('should render satellite as 1.0 when requested and as 2.0 when requested', () => {
    expect(resolveIcon('satellite', '1.0')).toEqual({
      version: '1.0',
      ligature: 'satellite',
    });
    expect(resolveIcon('satellite', '2.0')).toEqual({
      version: '2.0',
      slug: 'satellite',
    });
  });

  it('should fall back to a 1.0 ligature for empty or unknown names', () => {
    expect(resolveIcon('')).toEqual({ version: '1.0', ligature: '' });
    expect(resolveIcon('', '1.0')).toEqual({ version: '1.0', ligature: '' });
    expect(resolveIcon(undefined, '2.0')).toEqual({
      version: '1.0',
      ligature: '',
    });
    expect(resolveIcon('not-a-real-icon', '2.0')).toEqual({
      version: '1.0',
      ligature: 'not-a-real-icon',
    });
  });
});

describe('getIconMaskStyle', () => {
  it('should return undefined for a 1.0 ligature', () => {
    expect(
      getIconMaskStyle({ version: '1.0', ligature: 'add' })
    ).toBeUndefined();
  });

  it('should set only the per-glyph mask image for a 2.0 slug', () => {
    expect(getIconMaskStyle({ version: '2.0', slug: 'plus' })).toEqual({
      maskImage: 'var(--modus-icon-plus)',
      webkitMaskImage: 'var(--modus-icon-plus)',
    });
  });

  it('should use the fill variable for a solid 2.0 icon', () => {
    expect(getIconMaskStyle({ version: '2.0', slug: 'plus' }, 'solid')).toEqual(
      {
        maskImage: 'var(--modus-icon-plus-fill)',
        webkitMaskImage: 'var(--modus-icon-plus-fill)',
      }
    );
  });
});

describe('getIconV1ClassName', () => {
  it('should map the 1.0 variant to a ligature font class', () => {
    expect(getIconV1ClassName()).toBe('modus-icons');
    expect(getIconV1ClassName('outlined')).toBe('modus-icons-outlined');
    expect(getIconV1ClassName('solid')).toBe('modus-icons-solid');
  });
});

describe('getIconV2ClassName', () => {
  it('should use the fill class for the solid variant', () => {
    expect(getIconV2ClassName('plus')).toBe('modus-icon-plus');
    expect(getIconV2ClassName('plus', 'outlined')).toBe('modus-icon-plus');
    expect(getIconV2ClassName('plus', 'solid')).toBe('modus-icon-plus-fill');
  });
});

describe('getIconGlyphClassName', () => {
  it('should pick the v1 or v2 class from the resolved icon', () => {
    expect(
      getIconGlyphClassName({ version: '1.0', ligature: 'add' }, 'outlined')
    ).toBe('modus-icons-outlined');
    expect(getIconGlyphClassName({ version: '2.0', slug: 'plus' })).toBe(
      'modus-icon-plus'
    );
  });
});

describe('getIconKey', () => {
  it('should include the resolved version, glyph, and variant', () => {
    expect(getIconKey({ version: '1.0', ligature: 'add_bold' })).toBe(
      '1.0-add_bold-outlined'
    );
    expect(getIconKey({ version: '2.0', slug: 'plus' }, 'solid')).toBe(
      '2.0-plus-solid'
    );
  });
});

describe('convertPropsToClasses', () => {
  it('should put the 2.0 glyph class first', () => {
    expect(
      convertPropsToClasses({
        resolved: { version: '2.0', slug: 'plus' },
        size: 'md',
      })
    ).toBe('modus-icon-plus modus-wc-icon modus-wc-icon--md');
  });

  it('should put the 1.0 font class first', () => {
    expect(
      convertPropsToClasses({
        resolved: { version: '1.0', ligature: 'add' },
        size: 'sm',
        variant: 'outlined',
      })
    ).toBe('modus-icons-outlined modus-wc-icon modus-wc-icon--sm');
  });

  it('should omit the size class when size is unset', () => {
    expect(
      convertPropsToClasses({
        resolved: { version: '1.0', ligature: 'add' },
      })
    ).toBe('modus-icons modus-wc-icon');
  });
});

describe('modus-wc-icon', () => {
  it('should export the 1.0 and 2.0 icon name catalogs', () => {
    expect(MODUS_ICONS_CSS_VERSION).toBe('0.10.0');
    expect(MODUS_ICON_V1_NAMES).toContain('add');
    expect(MODUS_ICON_V1_NAMES).toContain('address');
    expect(MODUS_ICON_V2_NAMES).toContain('ship');
    expect(MODUS_ICON_V2_NAMES).toContain('plus');
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon aria-label="Default icon"></modus-wc-icon>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon aria-label="Custom icon" custom-class="test-class" decorative="false" size="sm"></modus-wc-icon>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with size prop lg', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon aria-label="Custom icon" size="lg"></modus-wc-icon>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with outlined variant', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon aria-label="Outlined icon" variant="outlined"></modus-wc-icon>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with solid variant', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon aria-label="Solid icon" variant="solid"></modus-wc-icon>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render a 1.0 ligature for an aliased name by default', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="add" aria-label="Add icon"></modus-wc-icon>',
    });
    const icon = page.root?.querySelector('i');
    expect(icon?.classList.contains('modus-icons')).toBe(true);
    expect(icon?.textContent).toBe('add');
    expect(page.root).toMatchSnapshot();
  });

  it('should render a 2.0 mask class for an aliased name when version is 2.0', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="add" version="2.0" aria-label="Add icon"></modus-wc-icon>',
    });
    const icon = page.root?.querySelector('i');
    expect(icon?.className.startsWith('modus-icon-plus ')).toBe(true);
    expect(icon?.textContent).toBe('');
    expect(page.root).toMatchSnapshot();
  });

  it('should emit the snake ligature for a hyphenated 1.0 name', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="add-bold"></modus-wc-icon>',
    });
    const icon = page.root?.querySelector('i');
    expect(icon?.textContent).toBe('add_bold');
  });

  it('should render a fill class for a solid 2.0 icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="ship" version="2.0" variant="solid"></modus-wc-icon>',
    });
    const icon = page.root?.querySelector('i');
    expect(icon?.classList.contains('modus-icon-ship-fill')).toBe(true);
    expect(icon?.textContent).toBe('');
  });

  it('should keep the 1.0 ligature for unmapped names in both versions', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="address" version="2.0" variant="outlined"></modus-wc-icon>',
    });
    const icon = page.root?.querySelector('i');
    expect(icon?.classList.contains('modus-icons-outlined')).toBe(true);
    expect(icon?.textContent).toBe('address');
    expect(page.root).toMatchSnapshot();
  });

  it('should keep a 2.0-only name on the 2.0 mask when version is 1.0', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="ship"></modus-wc-icon>',
    });
    const icon = page.root?.querySelector('i');
    expect(icon?.classList.contains('modus-icon-ship')).toBe(true);
    expect(icon?.textContent).toBe('');
  });

  it('should re-render when version changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="add"></modus-wc-icon>',
    });
    const component = page.rootInstance as ModusWcIcon;
    expect(page.root?.querySelector('i')?.textContent).toBe('add');

    component.version = '2.0';
    await page.waitForChanges();
    const icon = page.root?.querySelector('i');
    expect(icon?.classList.contains('modus-icon-plus')).toBe(true);
    expect(icon?.textContent).toBe('');
  });

  it('should re-resolve when name changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="address" version="2.0"></modus-wc-icon>',
    });
    const component = page.rootInstance as ModusWcIcon;
    component.name = 'add';
    await page.waitForChanges();
    const icon = page.root?.querySelector('i');
    expect(icon?.classList.contains('modus-icon-plus')).toBe(true);
    expect(icon?.textContent).toBe('');
  });
});
