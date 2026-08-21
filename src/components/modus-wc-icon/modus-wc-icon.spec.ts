import { newSpecPage } from '@stencil/core/testing';
import { MODUS_ICON_NAMES, MODUS_ICONS_CSS_VERSION } from './icon-data';
import { ModusWcIcon } from './modus-wc-icon';
import { getModusIconClassName, resolveIconSlug } from './resolve-icon';

describe('resolveIconSlug', () => {
  it('should resolve an aliased 1.0 name', () => {
    expect(resolveIconSlug('add')).toBe('plus');
  });

  it('should resolve a hyphenated legacy alias', () => {
    expect(resolveIconSlug('add-bold')).toBe('plus');
  });

  it('should resolve an identity alias', () => {
    expect(resolveIconSlug('warning')).toBe('warning');
  });

  it('should keep divergent aliases instead of the same-named 2.0 slug', () => {
    expect(resolveIconSlug('pencil')).toBe('pencil-simple');
    expect(resolveIconSlug('share')).toBe('share-network');
  });

  it('should resolve native 2.0 slugs', () => {
    expect(resolveIconSlug('ship')).toBe('ship');
    expect(resolveIconSlug('api')).toBe('api');
    expect(resolveIconSlug('circle-truck')).toBe('circle-truck');
  });

  it('should not map unmapped 1.0 names', () => {
    expect(resolveIconSlug('address')).toBeUndefined();
    expect(resolveIconSlug('satellite')).toBeUndefined();
  });

  it('should return undefined for empty or unknown names', () => {
    expect(resolveIconSlug('')).toBeUndefined();
    expect(resolveIconSlug(undefined)).toBeUndefined();
    expect(resolveIconSlug('not-a-real-icon')).toBeUndefined();
  });
});

describe('getModusIconClassName', () => {
  it('should use the fill class for the solid variant', () => {
    expect(getModusIconClassName('plus')).toBe('modus-icon-plus');
    expect(getModusIconClassName('plus', 'outlined')).toBe('modus-icon-plus');
    expect(getModusIconClassName('plus', 'solid')).toBe('modus-icon-plus-fill');
  });
});

describe('modus-wc-icon', () => {
  it('should export the 2.0 icon name catalog', () => {
    expect(MODUS_ICONS_CSS_VERSION).toBe('0.10.0');
    expect(MODUS_ICON_NAMES).toContain('ship');
    expect(MODUS_ICON_NAMES).toContain('plus');
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

  it('should render a 2.0 mask class for an aliased name', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="add" aria-label="Add icon"></modus-wc-icon>',
    });
    const icon = page.root?.querySelector('i');
    expect(icon?.className.startsWith('modus-icon-plus ')).toBe(true);
    expect(icon?.textContent).toBe('');
    expect(page.root).toMatchSnapshot();
  });

  it('should render a fill class for a solid 2.0 icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="ship" variant="solid"></modus-wc-icon>',
    });
    const icon = page.root?.querySelector('i');
    expect(icon?.classList.contains('modus-icon-ship-fill')).toBe(true);
    expect(icon?.textContent).toBe('');
  });

  it('should keep the 1.0 ligature fallback for unmapped names', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="address" variant="outlined"></modus-wc-icon>',
    });
    const icon = page.root?.querySelector('i');
    expect(icon?.classList.contains('modus-icons-outlined')).toBe(true);
    expect(icon?.textContent).toBe('address');
    expect(page.root).toMatchSnapshot();
  });

  it('should re-resolve the slug when name changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon name="address"></modus-wc-icon>',
    });
    const component = page.rootInstance as ModusWcIcon;
    component.name = 'add';
    await page.waitForChanges();
    const icon = page.root?.querySelector('i');
    expect(icon?.classList.contains('modus-icon-plus')).toBe(true);
    expect(icon?.textContent).toBe('');
  });
});
