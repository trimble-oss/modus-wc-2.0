import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTreeItem } from './modus-wc-tree-item';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';
import { ModusWcSideNavigation } from '../modus-wc-side-navigation/modus-wc-side-navigation';
import { ModusWcTreeView } from '../modus-wc-tree-view/modus-wc-tree-view';

describe('modus-wc-tree-item', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Test label" value="Test value"></modus-wc-tree-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem, ModusWcIcon],
      html: `<modus-wc-tree-item
              bordered="true"
              custom-class="test-class"
              disabled="true"
              label="Test label"
              selected="true"
              size="lg"
              sub-label="Test sub-label"
              value="Test value"
            ></modus-wc-tree-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with a start slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem, ModusWcIcon],
      html: `<modus-wc-tree-item label="Test label" value="Test value">
              <modus-wc-icon slot="start" name="check"></modus-wc-icon>
            </modus-wc-tree-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with an end slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem, ModusWcButton],
      html: `<modus-wc-tree-item label="Test label" value="Test value">
              <modus-wc-button slot="end" variant="borderless" size="sm">Action</modus-wc-button>
            </modus-wc-tree-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should add the focused class when the focused prop is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Test label" value="Test value"></modus-wc-tree-item>',
    });

    const treeItem = page.root as HTMLElement;
    const liElement = treeItem.querySelector('li') as HTMLLIElement;

    expect(
      liElement.classList.contains('modus-wc-menu-item-focused')
    ).toBeFalsy();

    (treeItem as unknown as { focused: boolean }).focused = true;
    await page.waitForChanges();

    expect(
      liElement.classList.contains('modus-wc-menu-item-focused')
    ).toBeTruthy();
  });

  it('should emit itemSelect event when clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item value="test-value"></modus-wc-tree-item>',
    });
    const interactive = page.root?.querySelector(
      '.modus-wc-menu-item-interactive'
    );
    const li = page.root?.querySelector('li') as HTMLLIElement;
    const blurSpy = jest.spyOn(li, 'blur');
    const clickSpy = jest.fn();
    page.root?.addEventListener('itemSelect', clickSpy);

    (interactive as HTMLElement)?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(clickSpy.mock.calls[0][0].detail).toEqual({
      value: 'test-value',
      selected: true,
    });
    expect(blurSpy).toHaveBeenCalled();
  });

  it('should not throw when li is absent during interactive click', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item value="test-value"></modus-wc-tree-item>',
    });

    const hostEl = page.rootInstance.el;
    const originalQuerySelector = hostEl.querySelector.bind(hostEl);
    jest
      .spyOn(hostEl, 'querySelector')
      .mockImplementation((...args: unknown[]) => {
        const selector = args[0] as string;
        if (selector === 'li') return null;
        return originalQuerySelector(selector);
      });

    const interactive = page.root?.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;

    expect(() => interactive.click()).not.toThrow();
  });

  it('should not emit itemSelect when end slot action is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem, ModusWcButton],
      html: `<modus-wc-tree-item label="Test label" value="test-value">
              <modus-wc-button slot="end" variant="borderless" size="sm">Action</modus-wc-button>
            </modus-wc-tree-item>`,
    });

    const clickSpy = jest.fn();
    page.root?.addEventListener('itemSelect', clickSpy);

    const endButton = page.root?.querySelector('[slot="end"]');
    (endButton as HTMLElement)?.click();
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
    expect(page.rootInstance.selected).toBeFalsy();
  });

  it('should not emit itemSelect when start slot button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem, ModusWcButton],
      html: `<modus-wc-tree-item label="Test label" value="test-value">
              <modus-wc-button slot="start" variant="borderless" size="sm">Start</modus-wc-button>
            </modus-wc-tree-item>`,
    });

    const clickSpy = jest.fn();
    page.root?.addEventListener('itemSelect', clickSpy);

    const startButton = page.root?.querySelector('[slot="start"]');
    (startButton as HTMLElement)?.click();
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });

  it('should emit itemSelect when non-interactive start slot content is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem, ModusWcIcon],
      html: `<modus-wc-tree-item label="Test label" value="test-value">
              <modus-wc-icon slot="start" name="check"></modus-wc-icon>
            </modus-wc-tree-item>`,
    });

    const clickSpy = jest.fn();
    page.root?.addEventListener('itemSelect', clickSpy);

    const startIcon = page.root?.querySelector('[slot="start"]');
    (startIcon as HTMLElement)?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(clickSpy.mock.calls[0][0].detail).toEqual({
      value: 'test-value',
      selected: true,
    });
  });

  it('should emit itemSelect event when Enter is pressed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item value="test-value"></modus-wc-tree-item>',
    });

    const li = page.root?.querySelector('li');
    const emitSpy = jest.spyOn(page.rootInstance.itemSelect, 'emit');

    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true,
    });

    li?.dispatchEvent(enterEvent);
    await page.waitForChanges();

    expect(emitSpy).toHaveBeenCalledWith({
      value: 'test-value',
      selected: true,
    });
  });

  it('should not emit itemSelect when disabled and Enter is pressed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item value="test-value" disabled="true"></modus-wc-tree-item>',
    });

    const li = page.root?.querySelector('li');
    const emitSpy = jest.spyOn(page.rootInstance.itemSelect, 'emit');

    li?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should render with checkbox', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Test label" value="Test value" checkbox="true"></modus-wc-tree-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should toggle selected prop when checkbox item is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Test label" value="Test value" checkbox="true"></modus-wc-tree-item>',
    });

    const liElement = page.root?.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;

    liElement.click();
    await page.waitForChanges();

    expect(page.rootInstance.selected).toBe(true);

    liElement.click();
    await page.waitForChanges();

    expect(page.rootInstance.selected).toBe(false);
  });

  it('should toggle submenu when hasSubmenu is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view>
          <modus-wc-tree-item label="Parent" value="parent" has-submenu="true">
            <modus-wc-tree-view is-sub-menu="true">
              <modus-wc-tree-item label="Child" value="child"></modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const parentItem = page.doc.querySelector(
      'modus-wc-tree-item[has-submenu]'
    ) as HTMLElement;
    const liElement = parentItem.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const submenu = parentItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      false
    );

    liElement.click();
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      true
    );
  });

  it('should emit itemSelect and not expand submenu when blockExpand is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view>
          <modus-wc-tree-item label="Parent" value="parent" has-submenu="true" block-expand="true">
            <modus-wc-tree-view is-sub-menu="true">
              <modus-wc-tree-item label="Child" value="child"></modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const parentItem = page.doc.querySelector(
      'modus-wc-tree-item[has-submenu]'
    ) as HTMLElement;
    const liElement = parentItem.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const submenu = parentItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    const selectSpy = jest.fn();
    parentItem.addEventListener('itemSelect', selectSpy);

    liElement.click();
    await page.waitForChanges();

    // blockExpand should prevent the inline submenu from opening
    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      false
    );

    // itemSelect should still be emitted with the item's value
    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy.mock.calls[0][0].detail).toEqual({ value: 'parent' });
  });

  it('should collapse submenu via collapseSubmenu method', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view>
          <modus-wc-tree-item label="Parent" value="parent" has-submenu="true">
            <modus-wc-tree-view is-sub-menu="true">
              <modus-wc-tree-item label="Child" value="child"></modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const parentItem = page.doc.querySelector(
      'modus-wc-tree-item[has-submenu]'
    ) as HTMLElement & { collapseSubmenu: () => Promise<void> };
    const liElement = parentItem.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const submenu = parentItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    liElement.click();
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      true
    );

    await parentItem.collapseSubmenu();
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      false
    );
  });

  it('should collapse submenu when toggled closed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view>
          <modus-wc-tree-item label="Parent" value="parent" has-submenu="true">
            <modus-wc-tree-view is-sub-menu="true">
              <modus-wc-tree-item label="Child" value="child"></modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const parentItem = page.doc.querySelector(
      'modus-wc-tree-item[has-submenu]'
    ) as HTMLElement;
    const liElement = parentItem.querySelector('li') as HTMLLIElement;
    const interactive = parentItem.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const submenu = parentItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    interactive.click();
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      true
    );
    expect(liElement.classList.contains('modus-wc-menu-item-expanded')).toBe(
      true
    );

    interactive.click();
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      false
    );
    expect(liElement.classList.contains('modus-wc-menu-item-expanded')).toBe(
      false
    );
    expect(liElement.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      false
    );
  });

  it('should emit itemSelect without expanding submenu when side nav is collapsed', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation, ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-side-navigation expanded="false">
          <modus-wc-tree-view>
            <modus-wc-tree-item label="Parent" value="parent" has-submenu="true">
              <modus-wc-tree-view is-sub-menu="true">
                <modus-wc-tree-item label="Child" value="child"></modus-wc-tree-item>
              </modus-wc-tree-view>
            </modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-side-navigation>
      `,
    });

    const parentItem = page.doc.querySelector(
      'modus-wc-tree-item[has-submenu]'
    ) as HTMLElement;
    const interactive = parentItem.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const submenu = parentItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    const selectSpy = jest.fn();
    parentItem.addEventListener('itemSelect', selectSpy);

    interactive.click();
    await page.waitForChanges();

    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy.mock.calls[0][0].detail).toEqual({ value: 'parent' });
    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      false
    );
  });

  it('should not emit itemSelect when interactive start slot action is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem, ModusWcButton],
      html: `<modus-wc-tree-item label="Test label" value="test-value">
              <modus-wc-button slot="start" variant="borderless" size="sm">Start</modus-wc-button>
            </modus-wc-tree-item>`,
    });

    const clickSpy = jest.fn();
    page.root?.addEventListener('itemSelect', clickSpy);

    const interactive = page.root?.querySelector('li') as HTMLElement;
    const startButton = page.root?.querySelector(
      '[slot="start"]'
    ) as HTMLElement;
    const innerSpan = document.createElement('span');
    jest.spyOn(innerSpan, 'matches').mockReturnValue(false);
    jest.spyOn(innerSpan, 'closest').mockReturnValue(startButton);
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      composed: true,
    });
    Object.defineProperty(clickEvent, 'composedPath', {
      value: () => [
        innerSpan,
        document.createTextNode(''),
        startButton,
        interactive,
        page.root,
      ],
    });

    interactive.dispatchEvent(clickEvent);
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });

  describe('MutationObserver and handleSelectionModeChange', () => {
    let originalMutationObserver: typeof MutationObserver;

    beforeEach(() => {
      originalMutationObserver = globalThis.MutationObserver;
    });

    afterEach(() => {
      globalThis.MutationObserver = originalMutationObserver;
    });

    it('should set up MutationObserver on parent tree-view in componentDidLoad', async () => {
      const observeSpy = jest.fn();
      globalThis.MutationObserver = jest.fn(() => ({
        observe: observeSpy,
        disconnect: jest.fn(),
        takeRecords: jest.fn(),
      })) as unknown as typeof MutationObserver;

      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `<modus-wc-tree-view selection-mode="single">
          <modus-wc-tree-item label="Item" value="1"></modus-wc-tree-item>
        </modus-wc-tree-view>`,
      });

      const parentTreeView = page.doc.querySelector('modus-wc-tree-view');
      expect(globalThis.MutationObserver).toHaveBeenCalled();
      expect(observeSpy).toHaveBeenCalledWith(parentTreeView, {
        attributes: true,
      });
    });

    it('should reset selected when selection-mode attribute changes', async () => {
      let mutationCallback: MutationCallback;
      globalThis.MutationObserver = jest.fn((cb: MutationCallback) => {
        mutationCallback = cb;
        return {
          observe: jest.fn(),
          disconnect: jest.fn(),
          takeRecords: jest.fn(),
        };
      }) as unknown as typeof MutationObserver;

      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `<modus-wc-tree-view selection-mode="single">
          <modus-wc-tree-item label="Item" value="1"></modus-wc-tree-item>
        </modus-wc-tree-view>`,
      });

      const treeItem = page.doc.querySelector(
        'modus-wc-tree-item'
      ) as HTMLElement & {
        selected?: boolean;
      };
      treeItem.selected = true;
      await page.waitForChanges();
      expect(treeItem.selected).toBe(true);

      mutationCallback!(
        [{ attributeName: 'selection-mode' } as MutationRecord],
        {} as MutationObserver
      );
      await page.waitForChanges();

      expect(treeItem.selected).toBe(false);
    });

    it('should disconnect MutationObserver when removed from the DOM', async () => {
      const disconnectSpy = jest.fn();
      globalThis.MutationObserver = jest.fn(() => ({
        observe: jest.fn(),
        disconnect: disconnectSpy,
        takeRecords: jest.fn(),
      })) as unknown as typeof MutationObserver;

      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `<modus-wc-tree-view>
          <modus-wc-tree-item label="Item" value="1"></modus-wc-tree-item>
        </modus-wc-tree-view>`,
      });

      page.doc.querySelector('modus-wc-tree-item')?.remove();
      await page.waitForChanges();

      expect(disconnectSpy).toHaveBeenCalled();
    });

    it('should not set up MutationObserver when tree-item is standalone', async () => {
      const observeSpy = jest.fn();
      globalThis.MutationObserver = jest.fn(() => ({
        observe: observeSpy,
        disconnect: jest.fn(),
        takeRecords: jest.fn(),
      })) as unknown as typeof MutationObserver;

      await newSpecPage({
        components: [ModusWcTreeItem],
        html: '<modus-wc-tree-item label="Standalone" value="standalone"></modus-wc-tree-item>',
      });

      expect(observeSpy).not.toHaveBeenCalled();
    });

    it('should handle disconnectedCallback when no MutationObserver was created', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeItem],
        html: '<modus-wc-tree-item label="Standalone" value="standalone"></modus-wc-tree-item>',
      });

      expect(() => page.root?.remove()).not.toThrow();
    });
  });

  it('should emit itemSelect event when Space is pressed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item value="test-value"></modus-wc-tree-item>',
    });

    const li = page.root?.querySelector('li');
    const emitSpy = jest.spyOn(page.rootInstance.itemSelect, 'emit');

    li?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(emitSpy).toHaveBeenCalledWith({
      value: 'test-value',
      selected: true,
    });
  });

  it('should render with tooltip content', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item
        label="Test label"
        value="Test value"
        tooltip-content="Tooltip text"
        tooltip-position="top"
      ></modus-wc-tree-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should deselect root siblings from nested tree items in single-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view selection-mode="single">
          <modus-wc-tree-item label="Root Item" value="root"></modus-wc-tree-item>
          <modus-wc-tree-item label="Parent" value="parent" has-submenu="true">
            <modus-wc-tree-view is-sub-menu="true">
              <modus-wc-tree-item label="Nested" value="nested"></modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const treeItems = page.doc.querySelectorAll('modus-wc-tree-item');
    const rootItem = treeItems[0] as HTMLElement & { selected?: boolean };
    const nestedItem = treeItems[2] as HTMLElement & { selected?: boolean };

    (
      rootItem.querySelector('.modus-wc-menu-item-interactive') as HTMLElement
    )?.click();
    await page.waitForChanges();
    expect(rootItem.selected).toBe(true);

    (
      nestedItem.querySelector('.modus-wc-menu-item-interactive') as HTMLElement
    )?.click();
    await page.waitForChanges();

    expect(rootItem.selected).toBe(false);
    expect(nestedItem.selected).toBe(true);
  });

  it('should deselect siblings using root tree-view from deeply nested items', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view selection-mode="single">
          <modus-wc-tree-item label="Root Item" value="root"></modus-wc-tree-item>
          <modus-wc-tree-item label="Level 1" value="level-1" has-submenu="true">
            <modus-wc-tree-view is-sub-menu="true">
              <modus-wc-tree-item label="Level 2" value="level-2" has-submenu="true">
                <modus-wc-tree-view is-sub-menu="true">
                  <modus-wc-tree-item label="Deep" value="deep"></modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const treeItems = page.doc.querySelectorAll('modus-wc-tree-item');
    const rootItem = treeItems[0] as HTMLElement & { selected?: boolean };
    const deepItem = treeItems[3] as HTMLElement & { selected?: boolean };

    (
      rootItem.querySelector('.modus-wc-menu-item-interactive') as HTMLElement
    )?.click();
    await page.waitForChanges();
    expect(rootItem.selected).toBe(true);

    (
      deepItem.querySelector('.modus-wc-menu-item-interactive') as HTMLElement
    )?.click();
    await page.waitForChanges();

    expect(rootItem.selected).toBe(false);
    expect(deepItem.selected).toBe(true);
  });

  it('should resolve root tree-view when tree-view has no parent element', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view selection-mode="single">
          <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const treeView = page.root as HTMLElement;
    Object.defineProperty(treeView, 'parentElement', {
      get: () => null,
      configurable: true,
    });

    const treeItem = page.doc.querySelector(
      'modus-wc-tree-item'
    ) as HTMLElement & {
      selected?: boolean;
    };

    (
      treeItem.querySelector('.modus-wc-menu-item-interactive') as HTMLElement
    )?.click();
    await page.waitForChanges();

    expect(treeItem.selected).toBe(true);
  });

  it('should skip deselecting siblings when root tree-view cannot be resolved', async () => {
    const getRootTreeViewSpy = jest
      .spyOn(
        ModusWcTreeItem.prototype as unknown as {
          getRootTreeView: () => HTMLElement | null;
        },
        'getRootTreeView'
      )
      .mockReturnValue(null);

    try {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view selection-mode="single">
            <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeItem = page.doc.querySelector(
        'modus-wc-tree-item'
      ) as HTMLElement & {
        selected?: boolean;
      };

      (
        treeItem.querySelector('.modus-wc-menu-item-interactive') as HTMLElement
      )?.click();
      await page.waitForChanges();

      expect(treeItem.selected).toBe(true);
    } finally {
      getRootTreeViewSpy.mockRestore();
    }
  });
});
