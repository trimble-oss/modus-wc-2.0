import { newSpecPage } from '@stencil/core/testing';
import { ModusWcContentTree } from './modus-wc-content-tree';
import { ModusWcTreeItemElement } from './modus-wc-tree-item/modus-wc-tree-item';

describe('modus-wc-content-tree', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree
                    custom-class="test-class"
                    expand-all="true"
                    multi-select="true"
                    selected-values='["item1", "item2"]'>
                    </modus-wc-content-tree>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should filter nodes based on search input', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree include-search="true">
                <modus-wc-tree-item value="item1">Item 1</modus-wc-tree-item>
                <modus-wc-tree-item value="item2">Item 2</modus-wc-tree-item>
                <modus-wc-tree-item value="item3">Item 3</modus-wc-tree-item>
              </modus-wc-content-tree>`,
    });

    const searchInput = page.root!.querySelector('input[type="search"]');
    expect(searchInput as HTMLInputElement).toBeDefined();
    if (searchInput) {
      (searchInput as HTMLInputElement).value = 'Item 2';
      searchInput.dispatchEvent(new Event('input'));
      await page.waitForChanges();
      const visibleItems = page.root!.querySelectorAll(
        'modus-wc-tree-item:not([hidden])'
      );
      expect(visibleItems.length).toBe(1);
      expect(visibleItems[0].getAttribute('value')).toBe('item2');
    }
  });

  it('clears filter on Escape key', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
      <modus-wc-content-tree>
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
    )[0] as ModusWcTreeItemElement;
    const child = root.querySelectorAll(
      'modus-wc-tree-item'
    )[1] as ModusWcTreeItemElement;

    // Mock expandSubTree on parent
    parent.expandSubTree = jest.fn().mockResolvedValue(undefined);

    const tree = page.rootInstance;

    // Trigger filter that matches child
    tree.filterNodes('child');
    await page.waitForChanges();

    // Child should be visible
    expect(child.style.display).toBe('');

    // Parent should be forced visible
    expect(parent.style.display).toBe('');

    // Parent expansion should be triggered
    expect(parent.expandSubTree).toHaveBeenCalled();
  });

  it('updateSlotContent returns early if slotEl is not set', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const tree = page.rootInstance;

    tree.slotEl = undefined;

    // Should not throw
    tree.updateSlotContent();

    expect(tree.hasSlotContent).toBe(false);
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
    ) as ModusWcTreeItemElement;

    item.hasSubtree = true;
    item.expandSubTree = jest.fn().mockResolvedValue(undefined);

    await tree.toggleExpandCollapse();

    expect(item.expandSubTree).toHaveBeenCalled();
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

  it('removes event listener on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });

    const tree = page.rootInstance;
    const mockRemoveEventListener = jest.fn();

    // Set up slotEl with mock removeEventListener
    tree.slotEl = {
      removeEventListener: mockRemoveEventListener,
    } as unknown as HTMLSlotElement;

    // Call disconnectedCallback
    tree.disconnectedCallback();

    // Verify removeEventListener was called with correct arguments
    expect(mockRemoveEventListener).toHaveBeenCalledWith(
      'slotchange',
      tree.updateSlotContent
    );
  });

  it('disconnectedCallback handles missing slotEl gracefully', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });

    const tree = page.rootInstance;
    tree.slotEl = undefined;

    // Should not throw when slotEl is undefined
    expect(() => tree.disconnectedCallback()).not.toThrow();
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

  it('clears both event listener and timer on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });

    const tree = page.rootInstance;
    const mockRemoveEventListener = jest.fn();
    const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');

    // Set up both slotEl and debounceTimer
    tree.slotEl = {
      removeEventListener: mockRemoveEventListener,
    } as unknown as HTMLSlotElement;
    tree['debounceTimer'] = 456 as unknown as number;

    // Call disconnectedCallback
    tree.disconnectedCallback();

    // Verify both cleanup operations were performed
    expect(mockRemoveEventListener).toHaveBeenCalledWith(
      'slotchange',
      tree.updateSlotContent
    );
    expect(clearTimeoutSpy).toHaveBeenCalledWith(456);

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
      html: '<modus-wc-content-tree search-placeholder="Find items..."></modus-wc-content-tree>',
    });

    const searchInput = page.root?.querySelector('modus-wc-text-input');
    expect(searchInput?.getAttribute('placeholder')).toBe('Find items...');
  });

  it('shows empty state when hasSlotContent is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });

    const tree = page.rootInstance;
    tree.hasSlotContent = false;
    await page.waitForChanges();

    const emptyState = page.root?.querySelector('.modus-wc-content-tree-empty');
    expect(emptyState).toBeDefined();

    const emptyIcon = emptyState?.querySelector('modus-wc-icon');
    expect(emptyIcon?.getAttribute('name')).toBe('folder_open');

    const emptyText = emptyState?.querySelector('modus-wc-typography');
    expect(emptyText?.getAttribute('label')).toBe('Empty Content Tree');
  });

  it('hides empty state when hasSlotContent is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <modus-wc-tree-item label="Item"></modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    const tree = page.rootInstance;
    tree.hasSlotContent = true;
    await page.waitForChanges();

    const emptyState = page.root?.querySelector('.modus-wc-content-tree-empty');
    expect(emptyState).toBeNull();
  });

  it('renders expand/collapse button with "Expand all" aria-label when collapsed', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
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
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
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

  it('componentWillLoad sets hasSlotContent based on child nodes', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <modus-wc-tree-item label="Item"></modus-wc-tree-item>
        </modus-wc-content-tree>
      `,
    });

    expect(page.rootInstance.hasSlotContent).toBe(true);
  });

  it('componentWillLoad filters out STYLE nodes', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
        <modus-wc-content-tree>
          <style>.test{}</style>
        </modus-wc-content-tree>
      `,
    });

    expect(page.rootInstance.hasSlotContent).toBe(false);
  });

  it('componentDidLoad handles missing slotEl gracefully', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });

    const tree = page.rootInstance;
    tree.slotEl = undefined;

    // Should not throw when slotEl is undefined due to optional chaining
    expect(() => tree.componentDidLoad()).not.toThrow();
  });

  it('componentDidLoad adds addEventListener when slotEl exists', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree><div>Content</div></modus-wc-content-tree>',
    });

    const tree = page.rootInstance;

    // Create a mock slot element with addEventListener spy
    const addEventListenerSpy = jest.fn();
    const mockSlot = {
      addEventListener: addEventListenerSpy,
      assignedNodes: jest
        .fn()
        .mockReturnValue([{ nodeType: Node.ELEMENT_NODE, tagName: 'DIV' }]),
    } as unknown as HTMLSlotElement;

    // Mock querySelector to return our mock slot
    jest.spyOn(tree.el, 'querySelector').mockReturnValue(mockSlot);

    // Call componentDidLoad
    tree.componentDidLoad();

    // Verify addEventListener was called
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'slotchange',
      tree.updateSlotContent
    );
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
    ) as ModusWcTreeItemElement;

    // Mock expandSubTree to reject with error
    parent.expandSubTree = jest
      .fn()
      .mockRejectedValue(new Error('Expand failed'));

    // Should not throw despite the error
    await expect(tree.filterNodes('Child')).resolves.not.toThrow();

    expect(parent.expandSubTree).toHaveBeenCalled();
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
    ) as NodeListOf<ModusWcTreeItemElement>;

    // First parent fails
    parents[0].expandSubTree = jest.fn().mockRejectedValue(new Error('Failed'));

    // Second parent succeeds
    parents[1].expandSubTree = jest.fn().mockResolvedValue(undefined);

    await tree.filterNodes('Match');

    // Both should be called despite first one failing
    expect(parents[0].expandSubTree).toHaveBeenCalled();
    expect(parents[1].expandSubTree).toHaveBeenCalled();
  });

  it('updateSlotContent invalidates cached items', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });

    const tree = page.rootInstance;
    tree['cachedItems'] = [] as any;

    const mockSlot = {
      assignedNodes: jest.fn().mockReturnValue([]),
    } as unknown as HTMLSlotElement;

    tree.slotEl = mockSlot;
    tree.updateSlotContent();

    expect(tree['cachedItems']).toBeUndefined();
  });

  it('updateSlotContent filters out STYLE nodes from assigned nodes', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });

    const tree = page.rootInstance;
    const styleNode = { nodeType: Node.ELEMENT_NODE, tagName: 'STYLE' };
    const elementNode = { nodeType: Node.ELEMENT_NODE, tagName: 'DIV' };

    const mockSlot = {
      assignedNodes: jest.fn().mockReturnValue([styleNode, elementNode]),
    } as unknown as HTMLSlotElement;

    tree.slotEl = mockSlot;
    tree.updateSlotContent();

    expect(tree.hasSlotContent).toBe(true);
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
    ) as ModusWcTreeItemElement;
    item.collapseSubTree = jest.fn().mockResolvedValue(undefined);

    await tree.toggleExpandCollapse();

    expect(item.collapseSubTree).toHaveBeenCalled();
    expect(tree.areAllExpanded).toBe(false);
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
    ) as ModusWcTreeItemElement;
    parent.expandSubTree = jest.fn().mockResolvedValue(undefined);

    await tree.filterNodes('Child');

    expect((parent as HTMLElement).style.display).toBe('');
    expect(parent.expandSubTree).toHaveBeenCalled();
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

    const instance = page.rootInstance as any;

    const filterSpy = jest
      .spyOn(instance, 'filterNodes')
      .mockResolvedValue(undefined);

    instance.handleInputChange({
      target: { value: 'hello' },
    } as any);

    // Wait slightly longer than debounce (150ms)
    await new Promise((r) => setTimeout(r, 180));

    expect(filterSpy).toHaveBeenCalledWith('hello');
  });

  it('covers clearTimeout branch', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const instance = page.rootInstance as any;

    jest.spyOn(instance, 'filterNodes').mockResolvedValue(undefined);

    const clearSpy = jest.spyOn(window, 'clearTimeout');

    // Force branch
    instance.debounceTimer = 999;

    instance.handleInputChange({
      target: { value: 'x' },
    } as any);

    expect(clearSpy).toHaveBeenCalledWith(999);
  });
});
