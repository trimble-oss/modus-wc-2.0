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

  it('should move focus to the next item on ArrowRight for bottom position', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    const secondButton = buttons?.[1] as HTMLButtonElement;
    firstButton?.focus();

    Object.defineProperty(document, 'activeElement', {
      value: firstButton,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(secondButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      })
    );

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should move focus to the previous item on ArrowLeft for bottom position', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    const secondButton = buttons?.[1] as HTMLButtonElement;
    secondButton?.focus();

    Object.defineProperty(document, 'activeElement', {
      value: secondButton,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        bubbles: true,
      })
    );

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should move focus to the next item on ArrowDown for left position', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="left"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    const secondButton = buttons?.[1] as HTMLButtonElement;
    firstButton?.focus();

    Object.defineProperty(document, 'activeElement', {
      value: firstButton,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(secondButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
      })
    );

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should skip disabled items when navigating with arrow keys', async () => {
    const disabledItems: IDockItem[] = [
      { label: 'Home', icon: 'home' },
      { label: 'Inbox', icon: 'email', disabled: true },
      { label: 'Settings', icon: 'settings' },
    ];

    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = disabledItems;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    const thirdButton = buttons?.[2] as HTMLButtonElement;
    firstButton?.focus();

    Object.defineProperty(document, 'activeElement', {
      value: firstButton,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(thirdButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      })
    );

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should ignore vertical arrow keys when the dock is horizontal', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    firstButton?.focus();

    Object.defineProperty(document, 'activeElement', {
      value: firstButton,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true })
    );

    expect(focusSpy).not.toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should ignore horizontal arrow keys when the dock is vertical', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="left"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    firstButton?.focus();

    Object.defineProperty(document, 'activeElement', {
      value: firstButton,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true })
    );

    expect(focusSpy).not.toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should ignore keys that are not part of the dock navigation contract', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    firstButton?.focus();

    Object.defineProperty(document, 'activeElement', {
      value: firstButton,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'a', bubbles: true })
    );

    expect(focusSpy).not.toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should do nothing on arrow navigation when every item is disabled', async () => {
    const disabledItems: IDockItem[] = [
      { label: 'Home', icon: 'home', disabled: true },
      { label: 'Inbox', icon: 'email', disabled: true },
    ];

    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = disabledItems;

    await page.waitForChanges();

    const nav = page.root?.querySelector('nav.modus-wc-dock') as HTMLElement;
    Object.defineProperty(document, 'activeElement', {
      value: nav,
      writable: true,
      configurable: true,
    });

    expect(() =>
      page.root?.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
      )
    ).not.toThrow();
  });

  it('should focus the first focusable item when no dock button currently has focus', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    // The nav itself is inside the dock host, but is not any item's inner
    // <button>, so it exercises the "no match found" branch of
    // getFocusedItemIndex while still passing the top-level containment guard.
    const nav = page.root?.querySelector('nav.modus-wc-dock') as HTMLElement;

    Object.defineProperty(document, 'activeElement', {
      value: nav,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should focus the first focusable item when a disabled item currently has focus', async () => {
    const disabledItems: IDockItem[] = [
      { label: 'Home', icon: 'home' },
      { label: 'Inbox', icon: 'email', disabled: true },
      { label: 'Settings', icon: 'settings' },
    ];

    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = disabledItems;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    const disabledButton = buttons?.[1] as HTMLButtonElement;

    Object.defineProperty(document, 'activeElement', {
      value: disabledButton,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should wrap focus from the last item to the first on ArrowRight', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    const lastButton = buttons?.[items.length - 1] as HTMLButtonElement;
    lastButton?.focus();

    Object.defineProperty(document, 'activeElement', {
      value: lastButton,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should wrap focus from the first item to the last on ArrowLeft', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    const lastButton = buttons?.[items.length - 1] as HTMLButtonElement;
    firstButton?.focus();

    Object.defineProperty(document, 'activeElement', {
      value: firstButton,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(lastButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true })
    );

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should tolerate missing button references when resolving or moving focus', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    // Simulate refs that have not been attached yet (e.g. before the first
    // render), which leaves `buttonEls` empty.
    component['buttonEls'] = [];

    expect(component['getFocusedItemIndex']()).toBe(-1);
    expect(() => component['focusItemAt'](0)).not.toThrow();
    expect(() => component['syncItemAria']()).not.toThrow();
  });

  it('should move focus to the first item on Home and the last item on End', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    const secondButton = buttons?.[1] as HTMLButtonElement;
    const lastButton = buttons?.[2] as HTMLButtonElement;
    secondButton?.focus();

    Object.defineProperty(document, 'activeElement', {
      value: secondButton,
      writable: true,
      configurable: true,
    });

    const lastFocusSpy = jest.spyOn(lastButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'End', bubbles: true })
    );

    expect(lastFocusSpy).toHaveBeenCalled();
    lastFocusSpy.mockRestore();

    Object.defineProperty(document, 'activeElement', {
      value: lastButton,
      writable: true,
      configurable: true,
    });

    const firstFocusSpy = jest.spyOn(firstButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Home', bubbles: true })
    );

    expect(firstFocusSpy).toHaveBeenCalled();
    firstFocusSpy.mockRestore();
  });

  it('should emit itemSelect when an item is activated with Enter', async () => {
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
    (buttons?.[1] as HTMLButtonElement)?.focus();
    buttons?.[1]?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
      })
    );

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(component.activeItemIndex).toBe(1);
  });

  it('should resolve focus from the shadow root when the dock is inside a ShadowRoot', async () => {
    const page = await newSpecPage({
      components: [ModusWcDock, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-dock aria-label="Dock navigation" position="bottom"></modus-wc-dock>',
    });

    const component = page.rootInstance as ModusWcDock;
    component.items = items;

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    const secondButton = buttons?.[1] as HTMLButtonElement;

    const host = document.createElement('div');
    const shadowRoot = host.attachShadow({ mode: 'open' });

    Object.defineProperty(shadowRoot, 'activeElement', {
      configurable: true,
      get: () => firstButton,
    });
    jest.spyOn(component.el, 'getRootNode').mockReturnValue(shadowRoot);

    Object.defineProperty(document, 'activeElement', {
      value: host,
      writable: true,
      configurable: true,
    });

    expect(component['getRootActiveElement']()).toBe(firstButton);

    const focusSpy = jest.spyOn(secondButton, 'focus');

    page.root?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      })
    );

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });
});

function navHasIconsOnlyClass(root: HTMLElement | null | undefined): boolean {
  return !!root?.querySelector('nav.modus-wc-dock-icons-only');
}
