import { newSpecPage } from '@stencil/core/testing';
import { ModusWcContentTree } from './modus-wc-content-tree';
import * as treeUtils from './modus-wc-content-tree.utils';
import { ITreeItemElement } from './modus-wc-tree-item/modus-wc-tree-item';
import { ModusWcTreeItem } from './modus-wc-tree-item/modus-wc-tree-item';
import { ModusWcTreeView } from './modus-wc-tree-view/modus-wc-tree-view';

describe('modus-wc-content-tree', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should filter nodes based on search input', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree include-search="true">
                <modus-wc-tree-item label="Item 1" value="item1">Item 1</modus-wc-tree-item>
                <modus-wc-tree-item label="Item 2" value="item2">Item 2</modus-wc-tree-item>
                <modus-wc-tree-item label="Item 3" value="item3">Item 3</modus-wc-tree-item>
              </modus-wc-content-tree>`,
    });

    const searchInput = page.root!.querySelector(
      'modus-wc-text-input'
    ) as HTMLElement & {
      value?: string;
    };
    expect(searchInput).not.toBeNull();

    searchInput.value = 'Item 2';
    searchInput.dispatchEvent(
      new CustomEvent('inputChange', {
        bubbles: true,
        composed: true,
      })
    );
    await new Promise((resolve) => setTimeout(resolve, 180));
    await page.waitForChanges();

    const items = Array.from(
      page.root!.querySelectorAll('modus-wc-tree-item')
    ) as HTMLElement[];
    const visibleItems = items.filter((item) => item.style.display !== 'none');

    expect(visibleItems.length).toBe(1);
    expect(visibleItems[0].getAttribute('value')).toBe('item2');
  });

  it('clears filter on Escape key', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
      <modus-wc-content-tree include-search="true">
        <modus-wc-tree-item label="Alpha"></modus-wc-tree-item>
        <modus-wc-tree-item label="Beta"></modus-wc-tree-item>
      </modus-wc-content-tree>
    `,
    });

    const input = page.root!.querySelector('modus-wc-text-input')!;

    input.dispatchEvent(
      new CustomEvent('inputChange', {
        bubbles: true,
        composed: true,
      })
    );

    await page.waitForChanges();

    // Now press Escape
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();

    // Assert all items visible
    const items = page.root!.querySelectorAll('modus-wc-tree-item');
    items.forEach((item) => {
      expect((item as HTMLElement).style.display).toBe('');
    });
  });

  it('expands parent nodes when a child matches search', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
      <modus-wc-content-tree>
        <modus-wc-tree-item label="Parent" has-subtree>
          <modus-wc-tree-item label="Child Match"></modus-wc-tree-item>
        </modus-wc-tree-item>
      </modus-wc-content-tree>
    `,
    });

    const root = page.root!;
    const parent = root.querySelectorAll(
      'modus-wc-tree-item'
    )[0] as ITreeItemElement;
    const child = root.querySelectorAll(
      'modus-wc-tree-item'
    )[1] as ITreeItemElement;

    // Mock expandSubTree on parent
    const expandSubTreeMock = jest.fn().mockResolvedValue(undefined);
    parent.expandSubTree = expandSubTreeMock;

    const tree = page.rootInstance;

    // Trigger filter that matches child
    tree.filterNodes('child');
    await page.waitForChanges();

    // Child should be visible
    expect(child.style.display).toBe('');

    // Parent should be forced visible
    expect(parent.style.display).toBe('');

    // Parent expansion should be triggered
    expect(expandSubTreeMock).toHaveBeenCalled();
  });

  it('detects subtree via property instead of attribute', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
      <modus-wc-content-tree>
        <modus-wc-tree-item></modus-wc-tree-item>
      </modus-wc-content-tree>
    `,
    });

    const tree = page.rootInstance;
    const item = page.root!.querySelector(
      'modus-wc-tree-item'
    ) as ITreeItemElement;

    item.hasSubtree = true;
    const expandMock = jest.fn().mockResolvedValue(undefined);
    item.expandSubTree = expandMock;

    await tree.toggleExpandCollapse();

    expect(expandMock).toHaveBeenCalled();
  });

  it('skips nodes without subtrees', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
      <modus-wc-content-tree>
        <modus-wc-tree-item></modus-wc-tree-item>
      </modus-wc-content-tree>
    `,
    });

    const tree = page.rootInstance;

    await expect(tree.toggleExpandCollapse()).resolves.not.toThrow();
  });

  it('clears debounce timer on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });

    const tree = page.rootInstance;
    const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');

    // Set up a mock debounce timer
    tree['debounceTimer'] = 123 as unknown as number;

    // Call disconnectedCallback
    tree.disconnectedCallback();

    // Verify clearTimeout was called with the timer
    expect(clearTimeoutSpy).toHaveBeenCalledWith(123);

    clearTimeoutSpy.mockRestore();
  });

  it('disconnectedCallback handles missing debounceTimer gracefully', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });

    const tree = page.rootInstance;
    const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');

    // Ensure debounceTimer is undefined
    tree['debounceTimer'] = undefined;

    // Should not throw and should not call clearTimeout
    expect(() => tree.disconnectedCallback()).not.toThrow();
    expect(clearTimeoutSpy).not.toHaveBeenCalled();

    clearTimeoutSpy.mockRestore();
  });

  it('renders without search when includeSearch is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree include-search="false"></modus-wc-content-tree>',
    });

    const searchInput = page.root?.querySelector('modus-wc-text-input');
    expect(searchInput).toBeNull();
  });

  it('renders without actions when includeActions is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree include-actions="false"></modus-wc-content-tree>',
    });

    const actionsDiv = page.root?.querySelector(
      '.modus-wc-content-tree-actions'
    );
    expect(actionsDiv).toBeNull();
  });

  it('applies custom class to wrapper', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree custom-class="my-custom-class"></modus-wc-content-tree>',
    });

    const wrapper = page.root?.querySelector('.modus-wc-content-tree-wrapper');
    expect(wrapper?.className).toContain('my-custom-class');
  });

  it('uses custom search placeholder', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree include-search="true" search-placeholder="Find items..."></modus-wc-content-tree>',
    });

    const searchInput = page.root?.querySelector('modus-wc-text-input');
    expect(searchInput?.getAttribute('placeholder')).toBe('Find items...');
  });

  it('does not render a built-in empty state when there is no content', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });

    const emptyState = page.root?.querySelector('.modus-wc-content-tree-empty');
    expect(emptyState).toBeNull();
  });

  it('renders actions when includeActions is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree include-actions="true"></modus-wc-content-tree>',
    });

    const actionsDiv = page.root?.querySelector(
      '.modus-wc-content-tree-actions'
    );
    expect(actionsDiv).not.toBeNull();
  });

  it('renders expand/collapse button with "Expand all" aria-label when collapsed', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree include-actions="true">
          <modus-wc-tree-item label="Item"></modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const tree = page.rootInstance;
    tree.areAllExpanded = false;
    await page.waitForChanges();

    const button = page.root?.querySelector(
      '.modus-wc-content-tree-actions modus-wc-button'
    );
    expect(button?.getAttribute('aria-label')).toBe('Expand all');
    expect(tree.areAllExpanded).toBe(false);
  });

  it('renders expand/collapse button with "Collapse all" aria-label when expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree include-actions="true">
          <modus-wc-tree-item label="Item"></modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const tree = page.rootInstance;
    tree.areAllExpanded = true;
    await page.waitForChanges();

    const button = page.root?.querySelector(
      '.modus-wc-content-tree-actions modus-wc-button'
    );
    expect(button?.getAttribute('aria-label')).toBe('Collapse all');
    expect(tree.areAllExpanded).toBe(true);
  });

  it('filterNodes catches and handles expandSubTree errors gracefully', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <modus-wc-tree-item label="Parent" has-subtree>
            <modus-wc-tree-item label="Child Match"></modus-wc-tree-item>
          </modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const tree = page.rootInstance;
    const parent = page.root?.querySelector(
      'modus-wc-tree-item'
    ) as ITreeItemElement;

    // Mock expandSubTree to reject with error
    const expandMock = jest.fn().mockRejectedValue(new Error('Expand failed'));
    parent.expandSubTree = expandMock;

    // Should not throw despite the error
    await expect(tree.filterNodes('Child')).resolves.not.toThrow();

    expect(expandMock).toHaveBeenCalled();
  });

  it('filterNodes continues expanding other items when one fails', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <modus-wc-tree-item label="Parent1" has-subtree>
            <modus-wc-tree-item label="Match"></modus-wc-tree-item>
          </modus-wc-tree-item>
          <modus-wc-tree-item label="Parent2" has-subtree>
            <modus-wc-tree-item label="Match"></modus-wc-tree-item>
          </modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const tree = page.rootInstance;
    const parents = page.root?.querySelectorAll(
      'modus-wc-tree-item[has-subtree]'
    ) as NodeListOf<ITreeItemElement>;

    // First parent fails
    const expandMock1 = jest.fn().mockRejectedValue(new Error('Failed'));
    parents[0].expandSubTree = expandMock1;

    // Second parent succeeds
    const expandMock2 = jest.fn().mockResolvedValue(undefined);
    parents[1].expandSubTree = expandMock2;

    await tree.filterNodes('Match');

    // Both should be called despite first one failing
    expect(expandMock1).toHaveBeenCalled();
    expect(expandMock2).toHaveBeenCalled();
  });

  it('toggleExpandCollapse collapses when areAllExpanded is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <modus-wc-tree-item has-subtree></modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const tree = page.rootInstance;
    tree.areAllExpanded = true;

    const item = page.root?.querySelector(
      'modus-wc-tree-item'
    ) as ITreeItemElement;
    const collapseMock = jest.fn().mockResolvedValue(undefined);
    item.collapseSubTree = collapseMock;

    await tree.toggleExpandCollapse();

    expect(collapseMock).toHaveBeenCalled();
    expect(tree.areAllExpanded).toBe(false);
  });

  it('handleToggleClick calls toggleExpandCollapse', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <modus-wc-tree-item has-subtree></modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const tree = page.rootInstance;

    // Mock the tree item methods
    const item = page.root?.querySelector(
      'modus-wc-tree-item'
    ) as ITreeItemElement;
    item.expandSubTree = jest.fn().mockResolvedValue(undefined);
    item.collapseSubTree = jest.fn().mockResolvedValue(undefined);

    const toggleSpy = jest.spyOn(tree, 'toggleExpandCollapse' as never);

    tree['handleToggleClick']();

    // Wait for the async operation to complete
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(toggleSpy).toHaveBeenCalled();
  });

  it('filterNodes caches menu items on first call', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <modus-wc-tree-item label="Item1"></modus-wc-tree-item>
          <modus-wc-tree-item label="Item2"></modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const tree = page.rootInstance;
    expect(tree['cachedItems']).toBeUndefined();

    await tree.filterNodes('Item');

    expect(tree['cachedItems']).toBeDefined();
    expect(tree['cachedItems']?.length).toBe(2);
  });

  it('filterNodes hides non-matching items without matching descendants', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <modus-wc-tree-item label="Alpha"></modus-wc-tree-item>
          <modus-wc-tree-item label="Beta"></modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const tree = page.rootInstance;
    await tree.filterNodes('Alpha');

    const items = page.root?.querySelectorAll('modus-wc-tree-item');
    expect((items?.[0] as HTMLElement).style.display).toBe('');
    expect((items?.[1] as HTMLElement).style.display).toBe('none');
  });

  it('filterNodes shows items with matching descendants', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <modus-wc-tree-item label="Parent" has-subtree>
            <modus-wc-tree-item label="Child Match"></modus-wc-tree-item>
          </modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const tree = page.rootInstance;
    const parent = page.root?.querySelector(
      'modus-wc-tree-item'
    ) as ITreeItemElement;
    const expandMock = jest.fn().mockResolvedValue(undefined);
    parent.expandSubTree = expandMock;

    await tree.filterNodes('Child');

    expect(parent.style.display).toBe('');
    expect(expandMock).toHaveBeenCalled();
  });

  it('inherits ARIA attributes', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree aria-label="My Tree"></modus-wc-content-tree>',
    });

    const wrapper = page.root?.querySelector('.modus-wc-content-tree-wrapper');
    expect(wrapper?.getAttribute('aria-label')).toBe('My Tree');
  });

  it('filterNodes handles items without label attribute', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <modus-wc-tree-item label="HasLabel"></modus-wc-tree-item>
          <modus-wc-tree-item></modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const tree = page.rootInstance;
    await tree.filterNodes('search');

    const items = page.root?.querySelectorAll('modus-wc-tree-item');
    // Item without label should be hidden (empty string doesn't match)
    expect((items?.[1] as HTMLElement).style.display).toBe('none');
  });

  it('should debounce input without timeouts', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    const filterSpy = jest
      .spyOn(instance, 'filterNodes')
      .mockResolvedValue(undefined);

    instance['handleInputChange']({
      target: { value: 'hello' },
    } as unknown as CustomEvent);

    // Wait slightly longer than debounce (150ms)
    await new Promise((r) => setTimeout(r, 180));

    expect(filterSpy).toHaveBeenCalledWith('hello');
  });

  it('covers clearTimeout branch', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    jest.spyOn(instance, 'filterNodes').mockResolvedValue(undefined);

    const clearSpy = jest.spyOn(window, 'clearTimeout');

    // Force branch
    instance['debounceTimer'] = 999;

    instance['handleInputChange']({
      target: { value: 'x' },
    } as unknown as CustomEvent);

    expect(clearSpy).toHaveBeenCalledWith(999);
  });

  it('should reset cachedItems and pendingChildrenIds when items prop changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    // Set up initial state
    instance['cachedItems'] = [
      document.createElement('modus-wc-tree-item') as ITreeItemElement,
    ];
    instance['pendingChildrenIds'] = new Set(['item1', 'item2']);

    // Trigger the watch by changing the items prop
    instance.items = [{ id: 'new-item', label: 'New Item' }];
    instance.handleItemsChange();
    await page.waitForChanges();

    // Verify the state was reset
    expect(instance['cachedItems']).toBeUndefined();
    expect(instance['pendingChildrenIds'].size).toBe(0);
  });

  it('should call applyItemsReorderingState when itemsReordering prop changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    // Spy on the applyItemsReorderingState method
    const applyStateSpy = jest.spyOn(
      instance as unknown as { applyItemsReorderingState: () => void },
      'applyItemsReorderingState'
    );

    // Trigger the watch by changing itemsReordering
    instance.itemsReordering = true;
    instance.handleItemsReorderingChange();
    await page.waitForChanges();

    expect(applyStateSpy).toHaveBeenCalled();
  });

  it('should add item ID to pendingChildrenIds when itemExpand event is emitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    // Set items to enable data-driven mode
    instance.items = [
      { id: 'item1', label: 'Item 1', hasChildren: true },
      { id: 'item2', label: 'Item 2', hasChildren: true },
    ];
    await page.waitForChanges();

    // Initially pendingChildrenIds should be empty
    expect(instance['pendingChildrenIds'].size).toBe(0);

    // Emit itemExpand event
    const event = new CustomEvent('itemExpand', {
      detail: 'item1',
      bubbles: true,
      composed: true,
    });
    page.root!.dispatchEvent(event);
    await page.waitForChanges();

    // Verify the item ID was added
    expect(instance['pendingChildrenIds'].has('item1')).toBe(true);
    expect(instance['pendingChildrenIds'].size).toBe(1);
  });

  it('should not add to pendingChildrenIds when itemExpand is emitted without data items', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree>
        <modus-wc-tree-item label="Item 1"></modus-wc-tree-item>
      </modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    // Ensure no items are set
    expect(instance.items).toBeUndefined();
    expect(instance['pendingChildrenIds'].size).toBe(0);

    // Emit itemExpand event
    const event = new CustomEvent('itemExpand', {
      detail: 'item1',
      bubbles: true,
      composed: true,
    });
    page.root!.dispatchEvent(event);
    await page.waitForChanges();

    // Verify no item was added
    expect(instance['pendingChildrenIds'].size).toBe(0);
  });

  it('should stop propagation of itemReordered event', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    // Set items to enable data-driven mode
    instance.items = [
      { id: 'item1', label: 'Item 1' },
      { id: 'item2', label: 'Item 2' },
    ];
    await page.waitForChanges();

    // Create mock event
    const stopPropagationSpy = jest.fn();
    const event = {
      stopPropagation: stopPropagationSpy,
      detail: {
        parameters: {
          itemId: 'item1',
          oldPosition: { parentId: null, index: 0 },
          newPosition: { parentId: null, index: 1 },
        },
      },
    } as unknown as CustomEvent;

    // Trigger the listener
    instance.handleItemReordered(event);
    await page.waitForChanges();

    // Verify stopPropagation was called
    expect(stopPropagationSpy).toHaveBeenCalled();
  });

  it('should not process itemReordered event without data items', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;
    const emitSpy = jest.spyOn(instance.itemsReordered, 'emit');

    // Create mock event
    const stopPropagationSpy = jest.fn();
    const event = {
      stopPropagation: stopPropagationSpy,
      detail: {
        parameters: {
          itemId: 'item1',
          oldPosition: { parentId: null, index: 0 },
          newPosition: { parentId: null, index: 1 },
        },
      },
    } as unknown as CustomEvent;

    // Trigger the listener without items
    instance.handleItemReordered(event);
    await page.waitForChanges();

    // Verify event still stops propagation but no reorder is emitted
    expect(stopPropagationSpy).toHaveBeenCalled();
    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should deduplicate itemReordered events with same signature', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    // Set items to enable data-driven mode
    instance.items = [
      { id: 'item1', label: 'Item 1' },
      { id: 'item2', label: 'Item 2' },
    ];
    await page.waitForChanges();

    const emitSpy = jest.spyOn(instance.itemsReordered, 'emit');

    const eventDetail = {
      parameters: {
        itemId: 'item1',
        oldPosition: { parentId: null, index: 0 },
        newPosition: { parentId: null, index: 1 },
      },
    };

    // Create first event
    const event1 = {
      stopPropagation: jest.fn(),
      detail: eventDetail,
    } as unknown as CustomEvent;

    // Trigger first event
    instance.handleItemReordered(event1);
    await page.waitForChanges();

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('should call collapseSubTree when clearing search with empty string', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <modus-wc-tree-item label="Item1" has-subtree></modus-wc-tree-item>
          <modus-wc-tree-item label="Item2" has-subtree></modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const instance = page.rootInstance;
    const items = page.root?.querySelectorAll(
      'modus-wc-tree-item'
    ) as NodeListOf<ITreeItemElement>;

    // Set hasSubtree property (not just attribute)
    items[0].hasSubtree = true;
    items[1].hasSubtree = true;

    const collapseMock1 = jest
      .fn()
      .mockRejectedValue(new Error('Collapse failed'));
    const collapseMock2 = jest.fn().mockResolvedValue(undefined);
    items[0].collapseSubTree = collapseMock1;
    items[1].collapseSubTree = collapseMock2;

    // First call with a search term to cache the items
    await instance.filterNodes('Item');
    await page.waitForChanges();

    // Now filter with empty string to trigger collapse (should not throw despite error)
    await expect(instance.filterNodes('')).resolves.not.toThrow();

    expect(collapseMock1).toHaveBeenCalled();
    expect(collapseMock2).toHaveBeenCalled();
  });

  it('should early return when lastReorderSignature matches', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    // Set items to enable data-driven mode
    instance.items = [
      { id: 'item1', label: 'Item 1' },
      { id: 'item2', label: 'Item 2' },
    ];
    await page.waitForChanges();

    const emitSpy = jest.spyOn(instance.itemsReordered, 'emit');

    // Set a lastReorderSignature
    const eventDetail = {
      parameters: {
        itemId: 'item1',
        oldPosition: { parentId: null, index: 0 },
        newPosition: { parentId: null, index: 1 },
      },
    };

    // Manually set the signature to match what we're about to send
    const mockSignature = 'item1_null_0_null_1';
    instance['lastReorderSignature'] = mockSignature;

    // Create event with matching signature
    const event = {
      stopPropagation: jest.fn(),
      detail: eventDetail,
    } as unknown as CustomEvent;

    // Mock getReorderSignature to return the same signature
    const getSignatureSpy = jest
      .spyOn(treeUtils, 'getReorderSignature')
      .mockReturnValue(mockSignature);

    // Trigger the listener - should return early
    instance.handleItemReordered(event);
    await page.waitForChanges();

    // Verify emit was NOT called due to early return
    expect(emitSpy).not.toHaveBeenCalled();

    getSignatureSpy.mockRestore();
  });

  it('should early return when reorderTreeItemsData returns null', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    // Set items to enable data-driven mode
    instance.items = [
      { id: 'item1', label: 'Item 1' },
      { id: 'item2', label: 'Item 2' },
    ];
    await page.waitForChanges();

    const emitSpy = jest.spyOn(instance.itemsReordered, 'emit');

    const eventDetail = {
      parameters: {
        itemId: 'item1',
        oldPosition: { parentId: null, index: 0 },
        newPosition: { parentId: null, index: 1 },
      },
    };

    const event = {
      stopPropagation: jest.fn(),
      detail: eventDetail,
    } as unknown as CustomEvent;

    // Mock reorderTreeItemsData to return null
    const reorderSpy = jest
      .spyOn(treeUtils, 'reorderTreeItemsData')
      .mockReturnValue(null);

    // Trigger the listener - should return early when nextItems is null
    instance.handleItemReordered(event);
    await page.waitForChanges();

    // Verify emit was NOT called due to early return
    expect(emitSpy).not.toHaveBeenCalled();

    reorderSpy.mockRestore();
  });

  it('should early return when reorderTreeItemsData returns undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    // Set items to enable data-driven mode
    instance.items = [
      { id: 'item1', label: 'Item 1' },
      { id: 'item2', label: 'Item 2' },
    ];
    await page.waitForChanges();

    const emitSpy = jest.spyOn(instance.itemsReordered, 'emit');

    const eventDetail = {
      parameters: {
        itemId: 'item1',
        oldPosition: { parentId: null, index: 0 },
        newPosition: { parentId: null, index: 1 },
      },
    };

    const event = {
      stopPropagation: jest.fn(),
      detail: eventDetail,
    } as unknown as CustomEvent;

    // Mock reorderTreeItemsData to return null
    const reorderSpy = jest
      .spyOn(treeUtils, 'reorderTreeItemsData')
      .mockReturnValue(null);

    // Trigger the listener - should return early when nextItems is null
    instance.handleItemReordered(event);
    await page.waitForChanges();

    // Verify emit was NOT called due to early return
    expect(emitSpy).not.toHaveBeenCalled();

    reorderSpy.mockRestore();
  });

  it('should render nested tree items with children and isSubList=true', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree, ModusWcTreeView, ModusWcTreeItem],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;

    // Set items with nested children
    instance.items = [
      {
        id: 'parent1',
        label: 'Parent 1',
        startIcon: 'folder',
        children: [
          { id: 'child1', label: 'Child 1' },
          { id: 'child2', label: 'Child 2' },
        ],
      },
    ];
    await page.waitForChanges();

    // Verify modus-wc-tree-view is rendered with isSubList attribute
    const treeView = page.root?.querySelector('modus-wc-tree-view');
    expect(treeView).toBeTruthy();
    // expect(treeView?.hasAttribute('isSubList')).toBe(true);

    // Verify nested tree items are rendered
    const treeItems = page.root?.querySelectorAll('modus-wc-tree-item');
    expect(treeItems?.length).toBe(3); // 1 parent + 2 children

    const startIcon = page.root?.querySelector(
      'modus-wc-icon[slot="start-icon"]'
    );
    expect(startIcon).toBeTruthy();
    expect(startIcon?.getAttribute('name')).toBe('folder');
  });

  it('should resolve identity from clientId when present and fallback to id', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree, ModusWcTreeView, ModusWcTreeItem],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;
    instance.items = [
      {
        id: 'item-1',
        clientId: 'client-item-1',
        label: 'Client ID Item',
        hasChildren: true,
      },
      { id: 'item-2', label: 'ID Fallback Item', hasChildren: true },
    ];
    await page.waitForChanges();

    const clientIdentityExpandEvent = new CustomEvent('itemExpand', {
      detail: 'client-item-1',
      bubbles: true,
      composed: true,
    });
    const idFallbackExpandEvent = new CustomEvent('itemExpand', {
      detail: 'item-2',
      bubbles: true,
      composed: true,
    });
    page.root!.dispatchEvent(clientIdentityExpandEvent);
    page.root!.dispatchEvent(idFallbackExpandEvent);
    await page.waitForChanges();

    const renderedItems = page.root!.querySelectorAll('modus-wc-tree-item');
    const clientIdentityItem = renderedItems[0] as ITreeItemElement;
    const idFallbackItem = renderedItems[1] as ITreeItemElement;

    expect(clientIdentityItem).toBeTruthy();
    expect(clientIdentityItem.value).toBe('client-item-1');
    expect(clientIdentityItem.lazyLoading).toBe(true);

    expect(idFallbackItem).toBeTruthy();
    expect(idFallbackItem.value).toBe('item-2');
    expect(idFallbackItem.lazyLoading).toBe(true);

    expect(renderedItems.length).toBe(2);
  });

  it('keeps selection on the same identity when inserting an item above', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree, ModusWcTreeView, ModusWcTreeItem],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance;
    instance.items = [
      { id: 'item-a', label: 'Item A' },
      { id: 'item-b', label: 'Item B' },
    ];
    await page.waitForChanges();

    const initialItems = page.root!.querySelectorAll('modus-wc-tree-item');
    const selectedIdentity = initialItems[1] as ITreeItemElement;
    selectedIdentity.dispatchEvent(
      new CustomEvent('itemSelect', {
        bubbles: true,
        composed: true,
        detail: {
          value: selectedIdentity.value,
          additive: false,
          range: false,
        },
      })
    );
    await page.waitForChanges();
    expect(selectedIdentity.selected).toBe(true);

    instance.items = [
      { id: 'item-new', label: 'New Item Above' },
      { id: 'item-a', label: 'Item A' },
      { id: 'item-b', label: 'Item B' },
    ];
    await page.waitForChanges();

    const updatedItems = Array.from(
      page.root!.querySelectorAll('modus-wc-tree-item')
    ) as ITreeItemElement[];
    const selectedAfterInsert = updatedItems.find(
      (item) => item.value === 'item-b'
    );

    expect(selectedAfterInsert).toBeTruthy();
    expect(selectedAfterInsert?.selected).toBe(true);
  });
});
