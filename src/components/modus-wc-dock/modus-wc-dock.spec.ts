import { newSpecPage } from '@stencil/core/testing';
import { IDockItem, ModusWcDock } from './modus-wc-dock';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';

describe('modus-wc-dock', () => {
  const items: IDockItem[] = [
    { label: 'Home', icon: 'home' },
    { label: 'Inbox', icon: 'email' },
    { label: 'Settings', icon: 'settings' },
  ];

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" custom-class="test-class" position="left" size="lg" show-labels="false"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;
    component.activeItemIndex = 1;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should apply a default aria-label to the nav when one is not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const nav = page.root?.querySelector('nav.modus-wc-dock');
    expect(nav?.getAttribute('aria-label')).toBe('Dock');
  });

  it('should arrange items horizontally for bottom and top positions', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const nav = page.root?.querySelector('nav.modus-wc-dock');
    expect(nav?.classList.contains('modus-wc-dock-bottom')).toBe(true);
    expect(nav?.classList.contains('modus-wc-dock-left')).toBe(false);
  });

  it('should arrange items vertically for left and right positions', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="right"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const nav = page.root?.querySelector('nav.modus-wc-dock');
    expect(nav?.classList.contains('modus-wc-dock-right')).toBe(true);
    expect(nav?.classList.contains('modus-wc-dock-bottom')).toBe(false);
  });

  it('should hide text labels when showLabels is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" show-labels="false"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    expect(
      page.root?.querySelectorAll('.modus-wc-dock-item-label').length
    ).toBe(0);
    expect(navHasIconsOnlyClass(page.root)).toBe(true);
  });

  it('should expose aria-label on items when labels are hidden', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" show-labels="false"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    expect(buttons?.[0]?.getAttribute('aria-label')).toBe('Home');
    expect(buttons?.[1]?.getAttribute('aria-label')).toBe('Inbox');
    expect(buttons?.[2]?.getAttribute('aria-label')).toBe('Settings');
  });

  it('should render a horizontal active indicator for bottom position', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;
    component.activeItemIndex = 2;

    await page.waitForChanges();

    const activeItem = page.root?.querySelector('.modus-wc-dock-item-active');
    expect(activeItem?.classList.contains('modus-wc-dock-item-active')).toBe(
      true
    );
    expect(
      page.root
        ?.querySelector('nav.modus-wc-dock-bottom')
        ?.contains(activeItem!)
    ).toBe(true);
  });

  it('should render a vertical active indicator for left position', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="left"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;
    component.activeItemIndex = 1;

    await page.waitForChanges();

    const nav = page.root?.querySelector('nav.modus-wc-dock-left');
    const activeItem = page.root?.querySelector('.modus-wc-dock-item-active');

    expect(nav?.contains(activeItem!)).toBe(true);
  });

  it('should emit itemSelect and update activeItemIndex when an item is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    const eventSpy = jest.fn();
    page.root?.addEventListener('itemSelect', eventSpy);

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    (buttons?.[1] as HTMLButtonElement)?.click();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(
      (
        eventSpy.mock.calls[0][0] as CustomEvent<{
          index: number;
          item: IDockItem;
        }>
      ).detail
    ).toEqual({ index: 1, item: items[1] });
    expect(component.activeItemIndex).toBe(1);
    expect(buttons?.[0]?.getAttribute('aria-current')).toBeNull();
    expect(buttons?.[1]?.getAttribute('aria-current')).toBe('page');
  });

  it('should log an error when items is undefined', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = undefined as unknown as IDockItem[];
    consoleSpy.mockClear();
    component['validateItems']();

    expect(consoleSpy).toHaveBeenCalledWith(
      'ModusWcDock: dock items data is required.'
    );
    consoleSpy.mockRestore();
  });

  it('should log an error when items is cleared after initial load', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;
    await page.waitForChanges();

    consoleSpy.mockClear();
    component.items = [];
    await page.waitForChanges();

    expect(consoleSpy).toHaveBeenCalledWith(
      'ModusWcDock: dock items data is required.'
    );
    consoleSpy.mockRestore();
  });

  it('should not emit itemSelect when a disabled item is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation"></modus-wc-dock>',
    });

    const disabledItems: IDockItem[] = [
      { label: 'Home', icon: 'home' },
      { label: 'Inbox', icon: 'email', disabled: true },
      { label: 'Settings', icon: 'settings' },
    ];

    const component = page.rootInstance as ModusWcDock;
    component.items = disabledItems;

    const eventSpy = jest.fn();
    page.root?.addEventListener('itemSelect', eventSpy);

    await page.waitForChanges();

    component['handleItemClick'](1, disabledItems[1]);

    expect(eventSpy).not.toHaveBeenCalled();
    expect(component.activeItemIndex).toBe(0);
  });
});

function navHasIconsOnlyClass(root: HTMLElement | null | undefined): boolean {
  return !!root?.querySelector('nav.modus-wc-dock-icons-only');
}
