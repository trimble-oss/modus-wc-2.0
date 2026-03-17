import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTreeView } from './modus-wc-tree-view';
import {
  ModusWcTreeItem,
  ITreeItemElement,
} from '../modus-wc-tree-item/modus-wc-tree-item';

describe('modus-wc-tree-view', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view></modus-wc-tree-view>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view custom-class="test-class"></modus-wc-tree-view>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders as a sublist when isSubList is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view is-sub-list="true"></modus-wc-tree-view>`,
    });

    expect(page.root).toMatchSnapshot();

    const host = page.root as HTMLElement;
    expect(host.classList.contains('modus-wc-tree-submenu')).toBe(true);

    const ul = host.querySelector('ul');
    expect(ul?.classList.contains('modus-wc-tree-dropdown')).toBe(true);
    expect(ul?.getAttribute('role')).toBe('group');
  });

  it('renders as a tree when isSubList is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view></modus-wc-tree-view>`,
    });

    const ul = page.root?.querySelector('ul');
    expect(ul?.classList.contains('modus-wc-menu')).toBe(true);
    expect(ul?.classList.contains('modus-wc-tree-view')).toBe(true);
    expect(ul?.getAttribute('role')).toBe('tree');
  });

  it('applies custom class to sublist', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view is-sub-list="true" custom-class="custom-sublist"></modus-wc-tree-view>`,
    });

    const ul = page.root?.querySelector('ul');
    expect(ul?.classList.contains('modus-wc-tree-dropdown')).toBe(true);
    expect(ul?.classList.contains('custom-sublist')).toBe(true);
  });

  it('applies custom class to main tree view', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view custom-class="custom-tree"></modus-wc-tree-view>`,
    });

    const ul = page.root?.querySelector('ul');
    expect(ul?.classList.contains('modus-wc-menu')).toBe(true);
    expect(ul?.classList.contains('modus-wc-tree-view')).toBe(true);
    expect(ul?.classList.contains('custom-tree')).toBe(true);
  });

  it('handles itemSelect event when target is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view></modus-wc-tree-view>`,
    });

    const treeView = page.rootInstance;

    // Simulate event with no target
    const event = new CustomEvent('itemSelect', {
      detail: { value: 'item1' },
      bubbles: true,
    });
    Object.defineProperty(event, 'target', {
      value: null,
      enumerable: true,
    });

    // Should not throw
    expect(() => treeView.handleItemSelect(event)).not.toThrow();
  });

  it('handles itemSelect event when target has no content element', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `
        <modus-wc-tree-view>
          <div class="modus-wc-tree-item">No content here</div>
        </modus-wc-tree-view>
      `,
    });

    const treeView = page.rootInstance;
    const item = page.root?.querySelector('.modus-wc-tree-item') as HTMLElement;

    const event = new CustomEvent('itemSelect', {
      detail: { value: 'item1' },
      bubbles: true,
    });
    Object.defineProperty(event, 'target', {
      value: item,
      enumerable: true,
    });

    // Should not throw even when content element is missing
    expect(() => treeView.handleItemSelect(event)).not.toThrow();
  });

  it('does not handle itemSelect when isSubList is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `
        <modus-wc-tree-view is-sub-list="true">
          <modus-wc-tree-item>
            <li>
              <div class="modus-wc-tree-content">Item 1</div>
            </li>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const treeView = page.rootInstance;
    const treeItem = page.root?.querySelector(
      'modus-wc-tree-item'
    ) as HTMLElement;

    const event = new CustomEvent('itemSelect', {
      detail: { value: 'item1' },
      bubbles: true,
    });
    Object.defineProperty(event, 'target', {
      value: treeItem,
      enumerable: true,
    });

    treeView.handleItemSelect(event);
    await page.waitForChanges();

    // When isSubList is true, the event should be ignored and item should not be selected
    const treeItemElement = treeItem as ITreeItemElement;
    expect(treeItemElement.selected).toBeFalsy();
  });

  it('inherits ARIA attributes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view aria-label="Test Tree" aria-expanded="true"></modus-wc-tree-view>`,
    });

    const ul = page.root?.querySelector('ul');
    expect(ul?.getAttribute('aria-label')).toBe('Test Tree');
    expect(ul?.getAttribute('aria-expanded')).toBe('true');
  });

  it('getClasses returns correct classes for main tree view', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view></modus-wc-tree-view>`,
    });

    const treeView = page.rootInstance;
    const classes = treeView['getClasses']();

    expect(classes).toContain('modus-wc-menu');
    expect(classes).toContain('modus-wc-tree-view');
  });

  it('getClasses returns correct classes for sublist', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view is-sub-list="true"></modus-wc-tree-view>`,
    });

    const treeView = page.rootInstance;
    const classes = treeView['getClasses']();

    expect(classes).toContain('modus-wc-tree-dropdown');
    expect(classes).not.toContain('modus-wc-menu');
  });

  it('getClasses includes custom class for main tree view', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view custom-class="my-custom-class"></modus-wc-tree-view>`,
    });

    const treeView = page.rootInstance;
    const classes = treeView['getClasses']();

    expect(classes).toContain('modus-wc-menu');
    expect(classes).toContain('modus-wc-tree-view');
    expect(classes).toContain('my-custom-class');
  });

  it('getClasses includes custom class for sublist', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view is-sub-list="true" custom-class="my-custom-sublist"></modus-wc-tree-view>`,
    });

    const treeView = page.rootInstance;
    const classes = treeView['getClasses']();

    expect(classes).toContain('modus-wc-tree-dropdown');
    expect(classes).toContain('my-custom-sublist');
  });

  it('getClasses includes no-line class when showConnectorLine is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view is-sub-list="true" show-connector-line="false"></modus-wc-tree-view>`,
    });

    const treeView = page.rootInstance;
    const classes = treeView['getClasses']();

    expect(classes).toContain('modus-wc-tree-dropdown');
    expect(classes).toContain('modus-wc-tree-dropdown-no-line');
  });

  it('handles itemSelect event and removes class from previously selected li', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `
        <modus-wc-tree-view>
          <modus-wc-tree-item>
            <li>
              <div class="modus-wc-tree-content">Item 1</div>
            </li>
          </modus-wc-tree-item>
          <modus-wc-tree-item>
            <li>
              <div class="modus-wc-tree-content">Item 2</div>
            </li>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const treeView = page.rootInstance;
    const treeItems = page.root?.querySelectorAll('modus-wc-tree-item');
    const firstTreeItem = treeItems?.[0] as HTMLElement;
    const secondTreeItem = treeItems?.[1] as HTMLElement;
    const firstLi = firstTreeItem.querySelector('li');

    // Select first item
    const event1 = new CustomEvent('itemSelect', {
      detail: { value: 'item1' },
      bubbles: true,
    });
    Object.defineProperty(event1, 'target', {
      value: firstTreeItem,
      enumerable: true,
    });

    treeView.handleItemSelect(event1);
    await page.waitForChanges();

    // Select second item
    const event2 = new CustomEvent('itemSelect', {
      detail: { value: 'item2' },
      bubbles: true,
    });
    Object.defineProperty(event2, 'target', {
      value: secondTreeItem,
      enumerable: true,
    });

    treeView.handleItemSelect(event2);
    await page.waitForChanges();

    expect(firstLi?.classList.contains('modus-wc-tree-item-li-active')).toBe(
      false
    );
  });

  it('handles itemSelect event when content element has no parent li', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `
        <modus-wc-tree-view>
          <div class="modus-wc-tree-item">
            <div class="modus-wc-tree-content">Item without li</div>
          </div>
        </modus-wc-tree-view>
      `,
    });

    const treeView = page.rootInstance;
    const item = page.root?.querySelector('.modus-wc-tree-item') as HTMLElement;

    const event = new CustomEvent('itemSelect', {
      detail: { value: 'item1' },
      bubbles: true,
    });
    Object.defineProperty(event, 'target', {
      value: item,
      enumerable: true,
    });

    // Should not throw when parent is not an li element
    expect(() => treeView.handleItemSelect(event)).not.toThrow();
  });

  describe('handleItemSelect with multiSelect', () => {
    const createItemSelectEvent = (
      target: HTMLElement,
      additive: boolean,
      range: boolean
    ) => {
      const event = new CustomEvent('itemSelect', {
        detail: { value: target.getAttribute('value'), additive, range },
        bubbles: true,
      });

      Object.defineProperty(event, 'target', {
        value: target,
        enumerable: true,
      });

      return event as CustomEvent<{
        value: string;
        additive: boolean;
        range: boolean;
      }>;
    };

    it('initializes anchor and selects a single item on first range selection', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view multi-select="true">
            <modus-wc-tree-item label="Item A" value="a"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item B" value="b"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item C" value="c"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeView = page.rootInstance;
      const allItems = Array.from(
        page.root?.querySelectorAll('modus-wc-tree-item') || []
      ) as ITreeItemElement[];

      allItems[0].selected = true;

      treeView.handleItemSelect(
        createItemSelectEvent(
          allItems[2] as unknown as HTMLElement,
          false,
          true
        )
      );

      expect(allItems[0].selected).toBe(false);
      expect(allItems[1].selected).toBe(false);
      expect(allItems[2].selected).toBe(true);
      expect(treeView['anchorValue']).toBe('c');
    });

    it('selects a range when anchor exists and is found', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view multi-select="true">
            <modus-wc-tree-item label="Item A" value="a"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item B" value="b"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item C" value="c"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeView = page.rootInstance;
      const allItems = Array.from(
        page.root?.querySelectorAll('modus-wc-tree-item') || []
      ) as ITreeItemElement[];

      treeView['anchorValue'] = 'a';

      treeView.handleItemSelect(
        createItemSelectEvent(
          allItems[2] as unknown as HTMLElement,
          false,
          true
        )
      );

      expect(allItems[0].selected).toBe(true);
      expect(allItems[1].selected).toBe(true);
      expect(allItems[2].selected).toBe(true);
    });

    it('falls back to single selection when anchor is missing on range selection', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view multi-select="true">
            <modus-wc-tree-item label="Item A" value="a"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item B" value="b"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item C" value="c"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeView = page.rootInstance;
      const allItems = Array.from(
        page.root?.querySelectorAll('modus-wc-tree-item') || []
      ) as ITreeItemElement[];

      allItems[0].selected = true;
      treeView['anchorValue'] = 'missing-anchor';

      treeView.handleItemSelect(
        createItemSelectEvent(
          allItems[1] as unknown as HTMLElement,
          false,
          true
        )
      );

      expect(allItems[0].selected).toBe(false);
      expect(allItems[1].selected).toBe(true);
      expect(allItems[2].selected).toBe(false);
      expect(treeView['anchorValue']).toBe('b');
    });

    it('toggles target selection when additive is true and range is false', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view multi-select="true">
            <modus-wc-tree-item label="Item A" value="a"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item B" value="b"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeView = page.rootInstance;
      const allItems = Array.from(
        page.root?.querySelectorAll('modus-wc-tree-item') || []
      ) as ITreeItemElement[];

      treeView.handleItemSelect(
        createItemSelectEvent(
          allItems[1] as unknown as HTMLElement,
          true,
          false
        )
      );
      expect(allItems[1].selected).toBe(true);
      expect(treeView['anchorValue']).toBe('b');

      treeView.handleItemSelect(
        createItemSelectEvent(
          allItems[1] as unknown as HTMLElement,
          true,
          false
        )
      );
      expect(allItems[1].selected).toBe(false);
      expect(treeView['anchorValue']).toBe('b');
    });

    it('selects a single item when additive and range are false', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view multi-select="true">
            <modus-wc-tree-item label="Item A" value="a"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item B" value="b"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item C" value="c"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeView = page.rootInstance;
      const allItems = Array.from(
        page.root?.querySelectorAll('modus-wc-tree-item') || []
      ) as ITreeItemElement[];

      allItems[0].selected = true;
      allItems[1].selected = true;

      treeView.handleItemSelect(
        createItemSelectEvent(
          allItems[2] as unknown as HTMLElement,
          false,
          false
        )
      );

      expect(allItems[0].selected).toBe(false);
      expect(allItems[1].selected).toBe(false);
      expect(allItems[2].selected).toBe(true);
      expect(treeView['anchorValue']).toBe('c');
    });

    it('returns early when target item is not found in all items', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view multi-select="true">
            <modus-wc-tree-item label="Item A" value="a"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item B" value="b"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeView = page.rootInstance;
      const allItems = Array.from(
        page.root?.querySelectorAll('modus-wc-tree-item') || []
      ) as ITreeItemElement[];
      const emitSpy = jest.spyOn(treeView.itemSelectionChange, 'emit');

      const targetItem = allItems[0] as unknown as HTMLElement;
      const event = new CustomEvent('itemSelect', {
        detail: {
          value: allItems[0].value,
          additive: false,
          range: false,
        },
        bubbles: true,
      });
      Object.defineProperty(event, 'target', {
        value: targetItem,
        enumerable: true,
      });

      jest
        .spyOn(
          treeView as unknown as { getAllTreeItems: () => ITreeItemElement[] },
          'getAllTreeItems'
        )
        .mockReturnValue([]);

      treeView.handleItemSelect(event);

      expect(treeView['anchorValue']).toBeNull();
      expect(emitSpy).not.toHaveBeenCalled();
    });
  });

  describe('selectRange', () => {
    it('should select items in range (forward order)', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view>
            <modus-wc-tree-item label="Item 1"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 2"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 3"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 4"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeView = page.rootInstance;
      const allItems = Array.from(
        page.root?.querySelectorAll('modus-wc-tree-item') || []
      ) as ITreeItemElement[];

      treeView['selectRange'](allItems, 1, 3, false);

      expect(allItems[0].selected).toBe(false);
      expect(allItems[1].selected).toBe(true);
      expect(allItems[2].selected).toBe(true);
      expect(allItems[3].selected).toBe(true);
    });

    it('should select items in range (reverse order)', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view>
            <modus-wc-tree-item label="Item 1"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 2"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 3"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 4"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeView = page.rootInstance;
      const allItems = Array.from(
        page.root?.querySelectorAll('modus-wc-tree-item') || []
      ) as ITreeItemElement[];

      treeView['selectRange'](allItems, 3, 1, false);

      expect(allItems[0].selected).toBe(false);
      expect(allItems[1].selected).toBe(true);
      expect(allItems[2].selected).toBe(true);
      expect(allItems[3].selected).toBe(true);
    });

    it('should select single item when anchor and target are same', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view>
            <modus-wc-tree-item label="Item 1"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 2"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 3"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeView = page.rootInstance;
      const allItems = Array.from(
        page.root?.querySelectorAll('modus-wc-tree-item') || []
      ) as ITreeItemElement[];

      treeView['selectRange'](allItems, 1, 1, false);

      expect(allItems[0].selected).toBe(false);
      expect(allItems[1].selected).toBe(true);
      expect(allItems[2].selected).toBe(false);
    });

    it('should clear previous selections when additive is false', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view>
            <modus-wc-tree-item label="Item 1"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 2"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 3"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 4"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeView = page.rootInstance;
      const allItems = Array.from(
        page.root?.querySelectorAll('modus-wc-tree-item') || []
      ) as ITreeItemElement[];

      // Pre-select some items
      allItems[0].selected = true;
      allItems[3].selected = true;

      treeView['selectRange'](allItems, 1, 2, false);

      expect(allItems[0].selected).toBe(false);
      expect(allItems[1].selected).toBe(true);
      expect(allItems[2].selected).toBe(true);
      expect(allItems[3].selected).toBe(false);
    });

    it('should skip disabled items in range', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeView, ModusWcTreeItem],
        html: `
          <modus-wc-tree-view>
            <modus-wc-tree-item label="Item 1"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 2" disabled="true"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 3"></modus-wc-tree-item>
            <modus-wc-tree-item label="Item 4" disabled="true"></modus-wc-tree-item>
          </modus-wc-tree-view>
        `,
      });

      const treeView = page.rootInstance;
      const allItems = Array.from(
        page.root?.querySelectorAll('modus-wc-tree-item') || []
      ) as ITreeItemElement[];

      treeView['selectRange'](allItems, 0, 3, false);

      expect(allItems[0].selected).toBe(true);
      expect(allItems[1].selected).toBe(false);
      expect(allItems[2].selected).toBe(true);
      expect(allItems[3].selected).toBe(false);
    });
  });
});
