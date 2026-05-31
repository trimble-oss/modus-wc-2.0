import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTreeView } from './modus-wc-tree-view';
import { ModusWcTreeItem } from '../modus-wc-tree-item/modus-wc-tree-item';

describe('modus-wc-tree-view', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: '<modus-wc-tree-view aria-label="Default tree view"></modus-wc-tree-view>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view
        aria-label="Test tree view"
        bordered="true"
        custom-class="test-class"
        orientation="horizontal"
        size="lg"
      ></modus-wc-tree-view>`,
    });

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit menuFocusout', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `<modus-wc-tree-view>
        <modus-wc-tree-item label="label" value="value" />
      </modus-wc-tree-view>`,
    });

    await page.waitForChanges();

    const component = page.rootInstance;
    const emitSpy = jest.spyOn(component.menuFocusout, 'emit');

    const treeView = page.root?.querySelector('ul');

    const focusoutEvent = new FocusEvent('focusout', {
      bubbles: true,
      relatedTarget: document.body,
    });

    treeView?.dispatchEvent(focusoutEvent);
    await page.waitForChanges();

    expect(emitSpy).toHaveBeenCalledWith(focusoutEvent);
  });

  it('should add customClass to classList in submenu mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view
        is-sub-menu="true"
        custom-class="test-submenu-class"
        aria-label="Submenu test"
      ></modus-wc-tree-view>`,
    });

    await page.waitForChanges();

    const treeView = page.root?.querySelector('ul');
    expect(treeView).not.toBeNull();
    expect(treeView?.className).toContain('modus-wc-menu-dropdown');
    expect(treeView?.className).toContain('test-submenu-class');
    expect(page.root).toMatchSnapshot();
  });

  it('should move focus to next item on ArrowDown', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view aria-label="Test tree view">
          <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
          <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
          <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const treeItems = page.doc.querySelectorAll('modus-wc-tree-item');
    const firstInteractive = treeItems[0].querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const secondInteractive = treeItems[1].querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;

    firstInteractive.focus();

    Object.defineProperty(document, 'activeElement', {
      value: firstInteractive,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(secondInteractive, 'focus');

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
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view aria-label="Test tree view">
          <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
          <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
          <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const treeItems = page.doc.querySelectorAll('modus-wc-tree-item');
    const firstInteractive = treeItems[0].querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const secondInteractive = treeItems[1].querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;

    secondInteractive.focus();

    Object.defineProperty(document, 'activeElement', {
      value: secondInteractive,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstInteractive, 'focus');

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
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view selection-mode="single">
          <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
          <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
          <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const treeItems = page.doc.querySelectorAll('modus-wc-tree-item');
    const firstItem = treeItems[0] as HTMLElement & { selected?: boolean };
    const secondItem = treeItems[1] as HTMLElement & { selected?: boolean };

    (
      firstItem.querySelector('.modus-wc-menu-item-interactive') as HTMLElement
    )?.click();
    await page.waitForChanges();

    expect(firstItem.selected).toBe(true);

    (
      secondItem.querySelector('.modus-wc-menu-item-interactive') as HTMLElement
    )?.click();
    await page.waitForChanges();

    expect(firstItem.selected).toBe(false);
    expect(secondItem.selected).toBe(true);
  });

  it('should emit menuSelectionChange when an item is checked in multiple mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view selection-mode="multiple">
          <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
          <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const component = page.rootInstance;
    const emitSpy = jest.spyOn(component.menuSelectionChange, 'emit');

    const treeItems = page.doc.querySelectorAll('modus-wc-tree-item');
    (
      treeItems[0].querySelector(
        '.modus-wc-menu-item-interactive'
      ) as HTMLElement
    )?.click();
    await page.waitForChanges();

    expect(emitSpy).toHaveBeenCalledTimes(1);
    const { selectedItems } = emitSpy.mock.calls[0][0] as {
      selectedItems: HTMLElement[];
    };
    expect(selectedItems).toHaveLength(1);
    expect(selectedItems[0]).toBe(treeItems[0]);
  });

  it('should stop propagation when focusout occurs on submenu', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `<modus-wc-tree-view is-sub-menu="true">
        <modus-wc-tree-item label="Submenu Item" value="submenu-item" />
      </modus-wc-tree-view>`,
    });

    await page.waitForChanges();

    const component = page.rootInstance;
    const emitSpy = jest.spyOn(component.menuFocusout, 'emit');

    const treeView = page.root?.querySelector('ul');
    const stopPropagationSpy = jest.fn();

    const focusoutEvent = new FocusEvent('focusout', {
      relatedTarget: document.body,
      bubbles: true,
    });

    Object.defineProperty(focusoutEvent, 'stopPropagation', {
      value: stopPropagationSpy,
      writable: true,
    });

    treeView?.dispatchEvent(focusoutEvent);
    await page.waitForChanges();

    expect(emitSpy).toHaveBeenCalledWith(focusoutEvent);
    expect(stopPropagationSpy).toHaveBeenCalled();
  });

  it('should clear selected items when selection mode changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `<modus-wc-tree-view selection-mode="multiple">
        <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
      </modus-wc-tree-view>`,
    });

    const component = page.rootInstance as unknown as {
      selectedItems: HTMLElement[];
    };

    (
      page.doc
        .querySelector('modus-wc-tree-item')
        ?.querySelector('.modus-wc-menu-item-interactive') as HTMLElement
    )?.click();
    await page.waitForChanges();

    expect(component.selectedItems).toHaveLength(1);

    page.root!.selectionMode = 'single';
    await page.waitForChanges();

    expect(component.selectedItems).toHaveLength(0);
  });

  it('should remove item from selectedItems when deselected in multiple mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `<modus-wc-tree-view selection-mode="multiple">
        <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
      </modus-wc-tree-view>`,
    });

    const component = page.rootInstance;
    const emitSpy = jest.spyOn(component.menuSelectionChange, 'emit');
    const interactive = page.doc
      .querySelector('modus-wc-tree-item')
      ?.querySelector('.modus-wc-menu-item-interactive') as HTMLElement;

    interactive?.click();
    await page.waitForChanges();

    expect(emitSpy).toHaveBeenLastCalledWith(
      expect.objectContaining({
        selectedItems: expect.arrayContaining([
          page.doc.querySelector('modus-wc-tree-item'),
        ]),
      })
    );

    interactive?.click();
    await page.waitForChanges();

    expect(emitSpy).toHaveBeenLastCalledWith({ selectedItems: [] });
  });

  it('should wrap focus to first item on ArrowDown from last item', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view aria-label="Test tree view">
          <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
          <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const treeItems = page.doc.querySelectorAll('modus-wc-tree-item');
    const firstInteractive = treeItems[0].querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const lastInteractive = treeItems[1].querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;

    lastInteractive.focus();
    Object.defineProperty(document, 'activeElement', {
      value: lastInteractive,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstInteractive, 'focus');
    const ul = page.root?.querySelector('ul') as HTMLUListElement;

    ul.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should wrap focus to last item on ArrowUp from first item', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view aria-label="Test tree view">
          <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
          <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const treeItems = page.doc.querySelectorAll('modus-wc-tree-item');
    const firstInteractive = treeItems[0].querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const lastInteractive = treeItems[1].querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;

    firstInteractive.focus();
    Object.defineProperty(document, 'activeElement', {
      value: firstInteractive,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(lastInteractive, 'focus');
    const ul = page.root?.querySelector('ul') as HTMLUListElement;

    ul.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should focus first item on ArrowDown when no tree item is active', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view aria-label="Test tree view">
          <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
          <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const firstInteractive = page.doc
      .querySelector('modus-wc-tree-item')
      ?.querySelector('.modus-wc-menu-item-interactive') as HTMLElement;

    Object.defineProperty(document, 'activeElement', {
      value: null,
      writable: true,
      configurable: true,
    });

    const focusSpy = jest.spyOn(firstInteractive, 'focus');
    const ul = page.root?.querySelector('ul') as HTMLUListElement;

    ul.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should ignore non-arrow keys', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view aria-label="Test tree view">
          <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const ul = page.root?.querySelector('ul') as HTMLUListElement;
    const preventDefaultSpy = jest.spyOn(
      KeyboardEvent.prototype,
      'preventDefault'
    );

    ul.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(preventDefaultSpy).not.toHaveBeenCalled();
    preventDefaultSpy.mockRestore();
  });

  it('should return early when all tree items are disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view aria-label="Test tree view">
          <modus-wc-tree-item label="Item 1" value="1" disabled="true"></modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const ul = page.root?.querySelector('ul') as HTMLUListElement;
    const interactive = page.doc.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const focusSpy = jest.spyOn(interactive, 'focus');

    ul.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(focusSpy).not.toHaveBeenCalled();
  });

  it('should not focus when tree item has no interactive element', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view aria-label="Test tree view">
          <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const treeItem = page.doc.querySelector(
      'modus-wc-tree-item'
    ) as HTMLElement;
    jest.spyOn(treeItem, 'querySelector').mockReturnValue(null);

    const ul = page.root?.querySelector('ul') as HTMLUListElement;

    expect(() => {
      ul.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowDown',
          bubbles: true,
          cancelable: true,
        })
      );
    }).not.toThrow();
  });
});
