import { newSpecPage } from '@stencil/core/testing';
import { ModusWcMenu } from './modus-wc-menu';
import { ModusWcMenuItem } from '../modus-wc-menu-item/modus-wc-menu-item';

describe('modus-wc-menu', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: '<modus-wc-menu aria-label="Default menu"></modus-wc-menu>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: `<modus-wc-menu
        aria-label="Test menu"
        bordered="true"
        custom-class="test-class"
        orientation="horizontal"
        size="lg"
      ></modus-wc-menu>`,
    });

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit menuFocusout', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `<modus-wc-menu>
        <modus-wc-menu-item label="label" value="value" />
      </modus-wc-menu>`,
    });

    await page.waitForChanges();

    const component = page.rootInstance;
    const emitSpy = jest.spyOn(component.menuFocusout, 'emit');

    const menu = page.root?.querySelector('ul');

    const focusoutEvent = new FocusEvent('focusout', {
      bubbles: true,
      relatedTarget: document.body,
    });

    menu?.dispatchEvent(focusoutEvent);
    await page.waitForChanges();

    expect(emitSpy).toHaveBeenCalledWith(focusoutEvent);
  });

  it('should add customClass to classList in submenu mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: `<modus-wc-menu
        is-sub-menu="true"
        custom-class="test-submenu-class"
        aria-label="Submenu test"
      ></modus-wc-menu>`,
    });

    await page.waitForChanges();

    const menu = page.root?.querySelector('ul');
    expect(menu).not.toBeNull();
    expect(menu?.className).toContain('modus-wc-menu-dropdown');
    expect(menu?.className).toContain('test-submenu-class');
    expect(page.root).toMatchSnapshot();
  });

  it('should move focus to next item on ArrowDown', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu aria-label="Test menu">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 3" value="3"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItems = page.doc.querySelectorAll('modus-wc-menu-item');
    const firstLi = menuItems[0].querySelector('li') as HTMLLIElement;
    const secondLi = menuItems[1].querySelector('li') as HTMLLIElement;

    // Focus the first item
    firstLi.focus();

    // Mock document.activeElement
    Object.defineProperty(document, 'activeElement', {
      value: firstLi,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(secondLi, 'focus');

    // Dispatch ArrowDown on the ul
    const ul = page.root?.querySelector('ul') as HTMLUListElement;
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true,
      cancelable: true,
    });

    ul.dispatchEvent(arrowDownEvent);
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should move focus to previous item on ArrowUp', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu aria-label="Test menu">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 3" value="3"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItems = page.doc.querySelectorAll('modus-wc-menu-item');
    const firstLi = menuItems[0].querySelector('li') as HTMLLIElement;
    const secondLi = menuItems[1].querySelector('li') as HTMLLIElement;

    // Focus the second item
    secondLi.focus();

    Object.defineProperty(document, 'activeElement', {
      value: secondLi,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstLi, 'focus');

    const ul = page.root?.querySelector('ul') as HTMLUListElement;
    const arrowUpEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      bubbles: true,
      cancelable: true,
    });

    ul.dispatchEvent(arrowUpEvent);
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should skip disabled items during arrow key navigation', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu aria-label="Test menu">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2" disabled="true"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 3" value="3"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItems = page.doc.querySelectorAll('modus-wc-menu-item');
    const firstLi = menuItems[0].querySelector('li') as HTMLLIElement;
    const thirdLi = menuItems[2].querySelector('li') as HTMLLIElement;

    firstLi.focus();

    Object.defineProperty(document, 'activeElement', {
      value: firstLi,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(thirdLi, 'focus');

    const ul = page.root?.querySelector('ul') as HTMLUListElement;
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true,
      cancelable: true,
    });

    ul.dispatchEvent(arrowDownEvent);
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should wrap focus from last to first item on ArrowDown', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu aria-label="Test menu">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItems = page.doc.querySelectorAll('modus-wc-menu-item');
    const firstLi = menuItems[0].querySelector('li') as HTMLLIElement;
    const secondLi = menuItems[1].querySelector('li') as HTMLLIElement;

    secondLi.focus();

    Object.defineProperty(document, 'activeElement', {
      value: secondLi,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstLi, 'focus');

    const ul = page.root?.querySelector('ul') as HTMLUListElement;
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true,
      cancelable: true,
    });

    ul.dispatchEvent(arrowDownEvent);
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should handle ArrowDown when no element is focused', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu aria-label="Test menu">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    Object.defineProperty(document, 'activeElement', {
      value: null,
      writable: true,
      configurable: true,
    });

    const ul = page.root?.querySelector('ul') as HTMLUListElement;
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true,
      cancelable: true,
    });

    ul.dispatchEvent(arrowDownEvent);
    await page.waitForChanges();
  });

  it('should ignore non-arrow key events', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu aria-label="Test menu">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const ul = page.root?.querySelector('ul') as HTMLUListElement;
    const secondLi = page.doc
      .querySelectorAll('modus-wc-menu-item')[1]
      .querySelector('li') as HTMLLIElement;
    const focusSpy = jest.spyOn(secondLi, 'focus');

    const tabEvent = new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
    });

    ul.dispatchEvent(tabEvent);
    await page.waitForChanges();

    expect(focusSpy).not.toHaveBeenCalled();
  });

  it('should not move focus when all items are disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu aria-label="Test menu">
          <modus-wc-menu-item label="Item 1" value="1" disabled="true"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2" disabled="true"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const ul = page.root?.querySelector('ul') as HTMLUListElement;
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true,
      cancelable: true,
    });

    ul.dispatchEvent(arrowDownEvent);
    await page.waitForChanges();

    // No error should be thrown; nothing to focus
  });

  it('should wrap focus from first to last item on ArrowUp', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu aria-label="Test menu">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 3" value="3"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItems = page.doc.querySelectorAll('modus-wc-menu-item');
    const firstLi = menuItems[0].querySelector('li') as HTMLLIElement;
    const thirdLi = menuItems[2].querySelector('li') as HTMLLIElement;

    firstLi.focus();

    Object.defineProperty(document, 'activeElement', {
      value: firstLi,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(thirdLi, 'focus');

    const ul = page.root?.querySelector('ul') as HTMLUListElement;
    const arrowUpEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      bubbles: true,
      cancelable: true,
    });

    ul.dispatchEvent(arrowUpEvent);
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should deselect siblings in single-select mode when an item is selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu selection-mode="single">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 3" value="3"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItems = page.doc.querySelectorAll('modus-wc-menu-item');
    const firstItem = menuItems[0] as HTMLElement & { selected?: boolean };
    const secondItem = menuItems[1] as HTMLElement & { selected?: boolean };

    firstItem.querySelector('button')?.click();
    await page.waitForChanges();

    expect(firstItem.selected).toBe(true);

    secondItem.querySelector('button')?.click();
    await page.waitForChanges();

    expect(firstItem.selected).toBe(false);
    expect(secondItem.selected).toBe(true);
  });

  it('should stop propagation when focusout occurs on submenu', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `<modus-wc-menu is-sub-menu="true">
        <modus-wc-menu-item label="Submenu Item" value="submenu-item" />
      </modus-wc-menu>`,
    });

    await page.waitForChanges();

    const component = page.rootInstance;
    const emitSpy = jest.spyOn(component.menuFocusout, 'emit');

    const menu = page.root?.querySelector('ul');

    // Create a mock stopPropagation function
    const stopPropagationSpy = jest.fn();

    // Simulate focusout event with focus moving outside the submenu
    const focusoutEvent = new FocusEvent('focusout', {
      relatedTarget: document.body,
      bubbles: true,
    });

    // Override stopPropagation for testing
    Object.defineProperty(focusoutEvent, 'stopPropagation', {
      value: stopPropagationSpy,
      writable: true,
    });

    menu?.dispatchEvent(focusoutEvent);
    await page.waitForChanges();

    // Verify event was emitted
    expect(emitSpy).toHaveBeenCalledWith(focusoutEvent);

    // Verify stopPropagation was called for submenu
    expect(stopPropagationSpy).toHaveBeenCalled();
  });
});
