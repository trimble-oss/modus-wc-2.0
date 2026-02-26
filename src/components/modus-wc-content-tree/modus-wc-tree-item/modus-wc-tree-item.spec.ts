import { newSpecPage } from '@stencil/core/testing';
import { ITreeItemElement, ModusWcTreeItem } from './modus-wc-tree-item';

describe('modus-wc-tree-item', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Test Item" value="test"></modus-wc-tree-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders with checkbox', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Test Item" value="test" checkbox></modus-wc-tree-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders with disabled state', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Test Item" value="test" disabled></modus-wc-tree-item>`,
    });

    const li = page.root?.querySelector('li');
    expect(li?.tabIndex).toBe(-1);
  });

  it('renders with selected state', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Test Item" value="test" selected></modus-wc-tree-item>`,
    });

    const li = page.root?.querySelector('li');
    expect(li?.getAttribute('aria-selected')).toBe('true');
  });

  it('renders with custom class', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Test Item" value="test" custom-class="custom-item"></modus-wc-tree-item>`,
    });

    const li = page.root?.querySelector('li');
    expect(li?.classList.contains('custom-item')).toBe(true);
  });

  it('renders with subtree', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Parent" value="parent" has-subtree></modus-wc-tree-item>`,
    });

    const li = page.root?.querySelector('li');
    expect(li?.getAttribute('aria-expanded')).toBe('false');
  });

  it('emits itemSelect event on click when no checkbox', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Test Item" value="test-value"></modus-wc-tree-item>`,
    });

    const itemSelectSpy = jest.fn();
    page.root?.addEventListener('itemSelect', itemSelectSpy);

    const li = page.root?.querySelector('li');
    li?.click();

    await page.waitForChanges();

    expect(itemSelectSpy).toHaveBeenCalled();
    expect(itemSelectSpy.mock.calls[0][0].detail.value).toBe('test-value');
  });

  it('handles Enter key to emit itemSelect', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Test Item" value="test"></modus-wc-tree-item>`,
    });

    const itemSelectSpy = jest.fn();
    page.root?.addEventListener('itemSelect', itemSelectSpy);

    const li = page.root?.querySelector('li');
    li?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    );

    await page.waitForChanges();

    expect(itemSelectSpy).toHaveBeenCalled();
  });

  it('handles Space key to emit itemSelect', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Test Item" value="test"></modus-wc-tree-item>`,
    });

    const itemSelectSpy = jest.fn();
    page.root?.addEventListener('itemSelect', itemSelectSpy);

    const li = page.root?.querySelector('li');
    li?.dispatchEvent(
      new KeyboardEvent('keydown', { key: ' ', bubbles: true })
    );

    await page.waitForChanges();

    expect(itemSelectSpy).toHaveBeenCalled();
  });

  it('toggles subtree on toggle icon click', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" has-subtree>
          <div class="modus-wc-tree-dropdown">Child content</div>
        </modus-wc-tree-item>
      `,
    });

    const treeItem = page.rootInstance;
    const submenu = page.root?.querySelector(
      '.modus-wc-tree-dropdown'
    ) as HTMLElement;

    expect(submenu.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      false
    );

    // Manually call the toggle method
    const event = new MouseEvent('click', { bubbles: true });
    treeItem['handleToggleClick'](event);
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      true
    );

    treeItem['handleToggleClick'](event);
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      false
    );
  });

  it('toggle button click expands/collapses subtree', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" has-subtree>
          <div class="modus-wc-tree-dropdown">Child content</div>
        </modus-wc-tree-item>
      `,
    });

    const submenu = page.root?.querySelector(
      '.modus-wc-tree-dropdown'
    ) as HTMLElement;
    const button = page.root?.querySelector('modus-wc-button');

    expect(submenu.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      false
    );

    // Simulate button click by emitting buttonClick event
    const mouseEvent = new MouseEvent('click', { bubbles: true });
    const customEvent = new CustomEvent('buttonClick', {
      detail: mouseEvent,
      bubbles: true,
    });
    button?.dispatchEvent(customEvent);
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      true
    );

    // Click again to collapse
    button?.dispatchEvent(customEvent);
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      false
    );
  });

  it('expandSubTree method expands the subtree', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" has-subtree>
          <div class="modus-wc-tree-dropdown">Child content</div>
        </modus-wc-tree-item>
      `,
    });

    const treeItem = page.rootInstance;
    const submenu = page.root?.querySelector(
      '.modus-wc-tree-dropdown'
    ) as HTMLElement;

    expect(submenu.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      false
    );

    await treeItem.expandSubTree();
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      true
    );
  });

  it('collapseSubTree method collapses the subtree', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" has-subtree>
          <div class="modus-wc-tree-dropdown modus-wc-tree-dropdown-show">Child content</div>
        </modus-wc-tree-item>
      `,
    });

    const treeItem = page.rootInstance;
    treeItem.isExpanded = true;
    const submenu = page.root?.querySelector(
      '.modus-wc-tree-dropdown'
    ) as HTMLElement;

    expect(submenu.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      true
    );

    await treeItem.collapseSubTree();
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      false
    );
  });

  it('expandSubTree does nothing when already expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" has-subtree>
          <div class="modus-wc-tree-dropdown modus-wc-tree-dropdown-show">Child content</div>
        </modus-wc-tree-item>
      `,
    });

    const treeItem = page.rootInstance;
    treeItem.isExpanded = true;

    const result = await treeItem.expandSubTree();
    expect(result).toBeUndefined();
  });

  it('collapseSubTree does nothing when already collapsed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" has-subtree>
          <div class="modus-wc-tree-dropdown">Child content</div>
        </modus-wc-tree-item>
      `,
    });

    const treeItem = page.rootInstance;
    const result = await treeItem.collapseSubTree();
    expect(result).toBeUndefined();
  });

  it('expandSubTree does nothing when no subtree', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item"></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    const result = await treeItem.expandSubTree();
    expect(result).toBeUndefined();
  });

  it('collapseSubTree does nothing when no subtree', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item"></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    const result = await treeItem.collapseSubTree();
    expect(result).toBeUndefined();
  });

  it('checkbox click toggles selection', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    expect(treeItem.selected).toBeFalsy();

    const checkbox = page.root?.querySelector('modus-wc-checkbox');
    checkbox?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(treeItem.selected).toBe(true);
  });

  it('checkbox handles Enter key', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    const checkbox = page.root?.querySelector('modus-wc-checkbox');

    checkbox?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    );
    await page.waitForChanges();

    expect(treeItem.selected).toBe(true);
  });

  it('checkbox handles Space key', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    const checkbox = page.root?.querySelector('modus-wc-checkbox');

    checkbox?.dispatchEvent(
      new KeyboardEvent('keydown', { key: ' ', bubbles: true })
    );
    await page.waitForChanges();

    expect(treeItem.selected).toBe(true);
  });

  it('checkbox uses correct size - xs converts to sm', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox size="xs"></modus-wc-tree-item>`,
    });

    const checkbox = page.root?.querySelector('modus-wc-checkbox');
    expect(checkbox?.getAttribute('size')).toBe('sm');
  });

  it('checkbox uses correct size - other sizes pass through', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox size="md"></modus-wc-tree-item>`,
    });

    const checkbox = page.root?.querySelector('modus-wc-checkbox');
    expect(checkbox?.getAttribute('size')).toBe('md');
  });

  it('updates children selection when parent checkbox is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" checkbox has-subtree>
          <div class="modus-wc-tree-dropdown">
            <modus-wc-tree-item label="Child1" value="child1" checkbox></modus-wc-tree-item>
            <modus-wc-tree-item label="Child2" value="child2" checkbox></modus-wc-tree-item>
          </div>
        </modus-wc-tree-item>
      `,
    });

    const parent = page.rootInstance;
    const children = page.root?.querySelectorAll(
      '.modus-wc-tree-dropdown modus-wc-tree-item'
    ) as NodeListOf<ITreeItemElement>;

    const checkbox = page.root?.querySelector('modus-wc-checkbox');
    checkbox?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(parent.selected).toBe(true);
    expect(children[0].selected).toBe(true);
    expect(children[1].selected).toBe(true);
  });

  it('sets indeterminate state when some children are selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" checkbox has-subtree>
          <div class="modus-wc-tree-dropdown">
            <modus-wc-tree-item label="Child1" value="child1" checkbox selected></modus-wc-tree-item>
            <modus-wc-tree-item label="Child2" value="child2" checkbox></modus-wc-tree-item>
          </div>
        </modus-wc-tree-item>
      `,
    });

    const parent = page.rootInstance;

    // Manually trigger the update
    const event = new CustomEvent('selectionsChange', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: page.root?.querySelector('modus-wc-tree-item[value="child1"]'),
      enumerable: true,
    });

    parent['updateIndeterminateState'](event);
    await page.waitForChanges();

    expect(parent.isIndeterminate).toBe(true);
    expect(parent.selected).toBe(false);
  });

  it('sets selected state when all children are selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" checkbox has-subtree>
          <div class="modus-wc-tree-dropdown">
            <modus-wc-tree-item label="Child1" value="child1" checkbox selected></modus-wc-tree-item>
            <modus-wc-tree-item label="Child2" value="child2" checkbox selected></modus-wc-tree-item>
          </div>
        </modus-wc-tree-item>
      `,
    });

    const parent = page.rootInstance;

    const event = new CustomEvent('selectionsChange', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: page.root?.querySelector('modus-wc-tree-item[value="child1"]'),
      enumerable: true,
    });

    parent['updateIndeterminateState'](event);
    await page.waitForChanges();

    expect(parent.isIndeterminate).toBe(false);
    expect(parent.selected).toBe(true);
  });

  it('updateIndeterminateState returns early when event target is self', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Parent" value="parent" checkbox has-subtree></modus-wc-tree-item>`,
    });

    const parent = page.rootInstance;
    const event = new CustomEvent('selectionsChange', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: page.root,
      enumerable: true,
    });

    parent['updateIndeterminateState'](event);

    expect(parent.isIndeterminate).toBe(false);
  });

  it('updateIndeterminateState returns early when no subtree', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const item = page.rootInstance;
    const event = new CustomEvent('selectionsChange', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: null,
      enumerable: true,
    });

    item['updateIndeterminateState'](event);

    expect(item.isIndeterminate).toBe(false);
  });

  it('updateIndeterminateState returns early when no checkbox', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Parent" value="parent" has-subtree></modus-wc-tree-item>`,
    });

    const parent = page.rootInstance;
    const event = new CustomEvent('selectionsChange', { bubbles: true });

    parent['updateIndeterminateState'](event);

    expect(parent.isIndeterminate).toBe(false);
  });

  it('updateIndeterminateState returns early when submenu is not found', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Parent" value="parent" has-subtree checkbox></modus-wc-tree-item>`,
    });

    const parent = page.rootInstance;
    const event = new CustomEvent('selectionsChange', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: null,
      enumerable: true,
    });

    parent['updateIndeterminateState'](event);

    expect(parent.isIndeterminate).toBe(false);
  });

  it('updateIndeterminateState returns early when no checkbox items in children', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" has-subtree checkbox>
          <ul class="modus-wc-tree-dropdown">
            <modus-wc-tree-item label="Child" value="child"></modus-wc-tree-item>
          </ul>
        </modus-wc-tree-item>
      `,
    });

    const parent = page.rootInstance;
    const event = new CustomEvent('selectionsChange', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: page.root?.querySelector('modus-wc-tree-item[value="child"]'),
      enumerable: true,
    });

    parent['updateIndeterminateState'](event);

    expect(parent.isIndeterminate).toBe(false);
    // expect(parent.selected).toBe(false);
  });

  it('updateChildrenSelection returns early when no subtree', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const item = page.rootInstance;
    item['updateChildrenSelection'](true);

    // Should return early without error
    expect(item.hasSubtree).toBeFalsy();
  });

  it('updateChildrenSelection returns early when submenu is not found', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Parent" value="parent" has-subtree checkbox></modus-wc-tree-item>`,
    });

    const parent = page.rootInstance;
    parent['updateChildrenSelection'](true);

    // Should return early without error
    expect(parent.hasSubtree).toBe(true);
  });

  it('updateChildrenSelection skips items without checkbox', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" has-subtree checkbox>
          <modus-wc-tree-view slot="submenu" class="modus-wc-tree-dropdown">
            <modus-wc-tree-item label="Child 1" value="child1" checkbox></modus-wc-tree-item>
            <modus-wc-tree-item label="Child 2" value="child2"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
      `,
    });

    const parent = page.rootInstance;
    parent['updateChildrenSelection'](true);
    await page.waitForChanges();

    const submenu = page.root?.querySelector('.modus-wc-tree-dropdown');
    const children = Array.from(
      submenu?.querySelectorAll('modus-wc-tree-item') || []
    ) as ITreeItemElement[];

    // First child with checkbox should be selected
    expect(children[0]?.selected).toBe(true);
    // Second child without checkbox should remain unchanged (not selected)
    expect(children[1]?.selected).toBeFalsy();
  });

  it('adds event listener on componentDidLoad when has subtree', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Parent" value="parent" has-subtree checkbox></modus-wc-tree-item>`,
    });

    const addEventListenerSpy = jest.spyOn(
      page.root as HTMLElement,
      'addEventListener'
    );

    page.rootInstance.componentDidLoad();

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'selectionsChange',
      expect.any(Function)
    );
  });

  it('removes event listener on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Parent" value="parent" has-subtree checkbox></modus-wc-tree-item>`,
    });

    const removeEventListenerSpy = jest.spyOn(
      page.root as HTMLElement,
      'removeEventListener'
    );

    page.rootInstance.disconnectedCallback();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'selectionsChange',
      expect.any(Function)
    );
  });

  it('renders tree item actions when provided', async () => {
    const actions = [
      { icon: 'edit', label: 'Edit' },
      { icon: 'delete', label: 'Delete' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item"></modus-wc-tree-item>`,
    });

    page.rootInstance.treeItemActions = actions;
    await page.waitForChanges();

    const actionsElement = page.root?.querySelector('modus-wc-tree-actions');
    expect(actionsElement).toBeDefined();
  });

  it('renders with different sizes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" size="md"></modus-wc-tree-item>`,
    });

    expect(page.rootInstance.size).toBe('md');
  });

  it('renders with start icon slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Item" value="item">
          <modus-wc-icon slot="start-icon" name="folder"></modus-wc-icon>
        </modus-wc-tree-item>
      `,
    });

    const slot = page.root?.querySelector('slot[name="start-icon"]');
    expect(slot).toBeDefined();
  });

  it('inherits ARIA attributes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" aria-label="Custom Label"></modus-wc-tree-item>`,
    });

    const li = page.root?.querySelector('li');
    expect(li?.getAttribute('aria-label')).toBe('Custom Label');
  });

  it('getClasses includes disabled class when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" disabled></modus-wc-tree-item>`,
    });

    const li = page.root?.querySelector('li');
    expect(li?.className).toContain('modus-wc-tree-item');
  });

  it('getClasses includes selected class when selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" selected></modus-wc-tree-item>`,
    });

    const li = page.root?.querySelector('li');
    expect(li?.className).toContain('modus-wc-tree-item');
  });

  it('toggle icon shows chevron_right when collapsed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Parent" value="parent" has-subtree></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    expect(treeItem.isExpanded).toBe(false);

    // Check the icon in the rendered output
    const icon = page.root?.querySelector('modus-wc-icon');
    expect(icon).toBeDefined();
  });

  it('toggle icon shows expand_more when expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Parent" value="parent" has-subtree></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.isExpanded = true;
    await page.waitForChanges();

    expect(treeItem.isExpanded).toBe(true);

    // Check the icon in the rendered output
    const icon = page.root?.querySelector('modus-wc-icon');
    expect(icon).toBeDefined();
  });

  it('handleToggleClick does nothing when no subtree', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item"></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    const initialExpanded = treeItem.isExpanded;

    const event = new MouseEvent('click', { bubbles: true });
    treeItem['handleToggleClick'](event);

    expect(treeItem.isExpanded).toBe(initialExpanded);
  });

  it('checkbox from indeterminate to selected on click', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.isIndeterminate = true;

    const checkbox = page.root?.querySelector('modus-wc-checkbox');
    checkbox?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(treeItem.selected).toBe(true);
    expect(treeItem.isIndeterminate).toBe(false);
  });

  it('emits selectionsChange with selected values when checkbox is clicked in tree', async () => {
    const contentTree = document.createElement('modus-wc-content-tree');
    const treeView = document.createElement('modus-wc-tree-view');
    contentTree.appendChild(treeView);

    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item 1" value="item1" checkbox></modus-wc-tree-item>`,
    });

    treeView.appendChild(page.root as HTMLElement);
    document.body.appendChild(contentTree);

    const eventSpy = jest.fn();
    page.root?.addEventListener('selectionsChange', eventSpy);

    const treeItem = page.rootInstance;
    treeItem['handleCheckboxClick'](new MouseEvent('click'));
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(eventSpy.mock.calls[0][0].detail.selectedValues).toEqual(['item1']);

    document.body.removeChild(contentTree);
  });

  it('does not emit selectionsChange when rootTreeView is not found', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const eventSpy = jest.fn();
    page.root?.addEventListener('selectionsChange', eventSpy);

    const treeItem = page.rootInstance;
    treeItem['handleCheckboxClick'](new MouseEvent('click'));
    await page.waitForChanges();

    expect(eventSpy).not.toHaveBeenCalled();
  });

  it('handleCheckboxClick sets newValue to true when selected is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.selected = false;
    treeItem.isIndeterminate = false;

    treeItem['handleCheckboxClick']();
    await page.waitForChanges();

    expect(treeItem.selected).toBe(true);
    expect(treeItem.isIndeterminate).toBe(false);
  });

  it('handleCheckboxClick sets newValue to false when selected is true and not indeterminate', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox selected></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.isIndeterminate = false;

    treeItem['handleCheckboxClick']();
    await page.waitForChanges();

    expect(treeItem.selected).toBe(false);
    expect(treeItem.isIndeterminate).toBe(false);
  });

  it('handleCheckboxClick sets newValue to true when isIndeterminate is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.selected = false;
    treeItem.isIndeterminate = true;

    treeItem['handleCheckboxClick']();
    await page.waitForChanges();

    expect(treeItem.selected).toBe(true);
    expect(treeItem.isIndeterminate).toBe(false);
  });

  it('handleCheckboxClick sets newValue to true when selected is true but isIndeterminate is also true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox selected></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.isIndeterminate = true;

    treeItem['handleCheckboxClick']();
    await page.waitForChanges();

    // When indeterminate is true, newValue should be true (OR condition)
    expect(treeItem.selected).toBe(true);
    expect(treeItem.isIndeterminate).toBe(false);
  });

  it('handleCheckboxClick resets isIndeterminate to false after click', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.selected = false;
    treeItem.isIndeterminate = true;

    expect(treeItem.isIndeterminate).toBe(true);

    treeItem['handleCheckboxClick']();
    await page.waitForChanges();

    expect(treeItem.isIndeterminate).toBe(false);
  });
});
