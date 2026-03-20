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

  it('emits itemLabelChange when inline label edit is completed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Updated Label" value="item-1" inline-label-edit></modus-wc-tree-item>`,
    });

    const itemLabelChangeSpy = jest.fn();
    page.root?.addEventListener('itemLabelChange', itemLabelChangeSpy);

    const treeItem = page.rootInstance;
    const blurEvent = {
      stopPropagation: jest.fn(),
    } as unknown as CustomEvent<FocusEvent>;
    treeItem['handleInlineLabelBlur'](blurEvent);
    await page.waitForChanges();

    expect(treeItem.inlineLabelEdit).toBe(false);
    expect(itemLabelChangeSpy).toHaveBeenCalledTimes(1);
    expect(itemLabelChangeSpy.mock.calls[0][0].detail).toBe('Updated Label');
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
    expect(treeItem.checked).toBeFalsy();

    const checkbox = page.root?.querySelector('modus-wc-checkbox');
    checkbox?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(treeItem.checked).toBe(true);
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

    expect(treeItem.checked).toBe(true);
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

    expect(treeItem.checked).toBe(true);
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

    expect(parent.checked).toBe(true);
    expect(children[0].checked).toBe(true);
    expect(children[1].checked).toBe(true);
  });

  it('sets indeterminate state when some children are selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" checkbox has-subtree>
          <div class="modus-wc-tree-dropdown">
            <modus-wc-tree-item label="Child1" value="child1" checkbox checked></modus-wc-tree-item>
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
    expect(parent.checked).toBe(false);
  });

  it('sets selected state when all children are selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" checkbox has-subtree>
          <div class="modus-wc-tree-dropdown">
            <modus-wc-tree-item label="Child1" value="child1" checkbox checked></modus-wc-tree-item>
            <modus-wc-tree-item label="Child2" value="child2" checkbox checked></modus-wc-tree-item>
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
    expect(parent.checked).toBe(true);
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

    // First child with checkbox should be checked
    expect(children[0]?.checked).toBe(true);
    // Second child without checkbox should remain unchanged (not checked)
    expect(children[1]?.checked).toBeFalsy();
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

    expect(treeItem.checked).toBe(true);
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

  it('emits selectionsChange with selected values inside standalone tree view', async () => {
    const treeView = document.createElement('modus-wc-tree-view');

    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item 1" value="item1" checkbox></modus-wc-tree-item>`,
    });

    treeView.appendChild(page.root as HTMLElement);
    document.body.appendChild(treeView);

    const eventSpy = jest.fn();
    page.root?.addEventListener('selectionsChange', eventSpy);

    const treeItem = page.rootInstance;
    treeItem['handleCheckboxClick']();
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(eventSpy.mock.calls[0][0].detail.selectedValues).toEqual(['item1']);

    document.body.removeChild(treeView);
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

  it('handleCheckboxClick sets newValue to true when checked is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.checked = false;
    treeItem.isIndeterminate = false;

    treeItem['handleCheckboxClick']();
    await page.waitForChanges();

    expect(treeItem.checked).toBe(true);
    expect(treeItem.isIndeterminate).toBe(false);
  });

  it('handleCheckboxClick sets newValue to false when checked is true and not indeterminate', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox checked></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.isIndeterminate = false;

    treeItem['handleCheckboxClick']();
    await page.waitForChanges();

    expect(treeItem.checked).toBe(false);
    expect(treeItem.isIndeterminate).toBe(false);
  });

  it('handleCheckboxClick sets newValue to true when isIndeterminate is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.checked = false;
    treeItem.isIndeterminate = true;

    treeItem['handleCheckboxClick']();
    await page.waitForChanges();

    expect(treeItem.checked).toBe(true);
    expect(treeItem.isIndeterminate).toBe(false);
  });

  it('handleCheckboxClick sets newValue to true when checked is true but isIndeterminate is also true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox checked></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.isIndeterminate = true;

    treeItem['handleCheckboxClick']();
    await page.waitForChanges();

    // When indeterminate is true, newValue should be true (OR condition)
    expect(treeItem.checked).toBe(true);
    expect(treeItem.isIndeterminate).toBe(false);
  });

  it('handleCheckboxClick resets isIndeterminate to false after click', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item" checkbox></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    treeItem.checked = false;
    treeItem.isIndeterminate = true;

    expect(treeItem.isIndeterminate).toBe(true);

    treeItem['handleCheckboxClick']();
    await page.waitForChanges();

    expect(treeItem.isIndeterminate).toBe(false);
  });

  it('getRootTreeView returns the closest tree-view when no parent tree-views exist', async () => {
    const treeView = document.createElement('modus-wc-tree-view');

    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item"></modus-wc-tree-item>`,
    });

    treeView.appendChild(page.root as HTMLElement);
    document.body.appendChild(treeView);

    const treeItem = page.rootInstance;
    const result = treeItem['getRootTreeView']();

    expect(result).toBe(treeView);

    document.body.removeChild(treeView);
  });

  it('getRootTreeView traverses up to find root tree-view in nested structure', async () => {
    const rootTreeView = document.createElement('modus-wc-tree-view');
    const parentItem = document.createElement('modus-wc-tree-item');
    const nestedTreeView = document.createElement('modus-wc-tree-view');

    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Child" value="child"></modus-wc-tree-item>`,
    });

    // Structure: rootTreeView > parentItem > nestedTreeView > childItem
    nestedTreeView.appendChild(page.root as HTMLElement);
    parentItem.appendChild(nestedTreeView);
    rootTreeView.appendChild(parentItem);
    document.body.appendChild(rootTreeView);

    const treeItem = page.rootInstance;
    const result = treeItem['getRootTreeView']();

    expect(result).toBe(rootTreeView);

    document.body.removeChild(rootTreeView);
  });

  it('getRootTreeView traverses multiple levels to find root tree-view', async () => {
    const rootTreeView = document.createElement('modus-wc-tree-view');
    const level1Item = document.createElement('modus-wc-tree-item');
    const level2TreeView = document.createElement('modus-wc-tree-view');
    const level2Item = document.createElement('modus-wc-tree-item');
    const level3TreeView = document.createElement('modus-wc-tree-view');

    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Deep Child" value="deep"></modus-wc-tree-item>`,
    });

    // Structure: rootTreeView > level1Item > level2TreeView > level2Item > level3TreeView > deepChild
    level3TreeView.appendChild(page.root as HTMLElement);
    level2Item.appendChild(level3TreeView);
    level2TreeView.appendChild(level2Item);
    level1Item.appendChild(level2TreeView);
    rootTreeView.appendChild(level1Item);
    document.body.appendChild(rootTreeView);

    const treeItem = page.rootInstance;
    const result = treeItem['getRootTreeView']();

    expect(result).toBe(rootTreeView);

    document.body.removeChild(rootTreeView);
  });

  it('getRootTreeView returns null when not inside any tree-view', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Item" value="item"></modus-wc-tree-item>`,
    });

    const treeItem = page.rootInstance;
    const result = treeItem['getRootTreeView']();

    expect(result).toBeNull();
  });

  describe('getSiblingTreeItems', () => {
    it('returns empty array when parent has no children', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeItem],
        html: `<modus-wc-tree-item label="Item" value="v"></modus-wc-tree-item>`,
      });
      const inst = page.rootInstance;
      const parent = document.createElement('div');

      const result = inst['getSiblingTreeItems'](parent);

      expect(result).toEqual([]);
    });

    it('returns only modus-wc-tree-item children, filtering out other tags', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeItem],
        html: `<modus-wc-tree-item label="Item" value="v"></modus-wc-tree-item>`,
      });
      const inst = page.rootInstance;
      const parent = document.createElement('div');

      const treeItem1 = document.createElement('modus-wc-tree-item');
      const treeItem2 = document.createElement('modus-wc-tree-item');
      const div = document.createElement('div');
      const span = document.createElement('span');

      parent.appendChild(treeItem1);
      parent.appendChild(div);
      parent.appendChild(treeItem2);
      parent.appendChild(span);

      const result = inst['getSiblingTreeItems'](parent);

      expect(result).toHaveLength(2);
      expect(result[0]).toBe(treeItem1);
      expect(result[1]).toBe(treeItem2);
    });

    it('returns all children when all are modus-wc-tree-item', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeItem],
        html: `<modus-wc-tree-item label="Item" value="v"></modus-wc-tree-item>`,
      });
      const inst = page.rootInstance;
      const parent = document.createElement('div');

      const items = ['a', 'b', 'c'].map((v) => {
        const el = document.createElement('modus-wc-tree-item');
        el.setAttribute('value', v);
        parent.appendChild(el);
        return el;
      });

      const result = inst['getSiblingTreeItems'](parent);

      expect(result).toHaveLength(3);
      expect(result).toEqual(items);
    });
  });

  describe('drag handlers', () => {
    // Access static drag state via class reference
    type DragState = {
      draggedItem: ModusWcTreeItem | null;
      hasEmittedReorderForCurrentDrag: boolean;
    };
    const dragState = ModusWcTreeItem as unknown as DragState;

    function makeDragEvent(overrides: {
      clientY?: number;
      dataTransfer?: DataTransfer | null;
    }): DragEvent {
      return {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        stopImmediatePropagation: jest.fn(),
        clientY: overrides.clientY ?? 0,
        dataTransfer:
          overrides.dataTransfer !== undefined
            ? overrides.dataTransfer
            : ({
                effectAllowed: '',
                dropEffect: '',
                setData: jest.fn(),
              } as unknown as DataTransfer),
      } as unknown as DragEvent;
    }

    function createMockHostEl(value: string): HTMLElement {
      const el = document.createElement('modus-wc-tree-item');
      el.setAttribute('value', value);
      const li = document.createElement('li');
      el.appendChild(li);
      return el;
    }

    beforeEach(() => {
      dragState.draggedItem = null;
      dragState.hasEmittedReorderForCurrentDrag = false;
    });

    describe('resolveItemId', () => {
      it('resolveItemId: returns null for null element', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="v"></modus-wc-tree-item>`,
        });
        const inst = page.rootInstance;
        expect(inst['resolveItemId'](null)).toBeNull();
      });

      it('resolveItemId: returns value property when set', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="my-val"></modus-wc-tree-item>`,
        });
        const inst = page.rootInstance;
        const el = document.createElement('modus-wc-tree-item');
        (el as unknown as { value: string }).value = 'my-val';
        expect(inst['resolveItemId'](el)).toBe('my-val');
      });

      it('resolveItemId: falls back to getAttribute when value property is falsy', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="attr-val"></modus-wc-tree-item>`,
        });
        const inst = page.rootInstance;
        const el = document.createElement('modus-wc-tree-item');
        el.setAttribute('value', 'attr-val');
        expect(inst['resolveItemId'](el)).toBe('attr-val');
      });
    });

    describe('handleDragStart', () => {
      it('handleDragStart: returns early when itemsReordering is false', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="v"></modus-wc-tree-item>`,
        });
        const inst: ModusWcTreeItem = page.rootInstance;
        // itemsReordering defaults to false

        const event = makeDragEvent({});
        inst['handleDragStart'](event);

        expect(dragState.draggedItem).toBeNull();
        expect(event.stopPropagation).not.toHaveBeenCalled();
      });

      it('handleDragStart: returns early when disabled', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="v" items-reordering disabled></modus-wc-tree-item>`,
        });
        const inst: ModusWcTreeItem = page.rootInstance;

        const event = makeDragEvent({});
        inst['handleDragStart'](event);

        expect(dragState.draggedItem).toBeNull();
        expect(event.stopPropagation).not.toHaveBeenCalled();
      });

      it('handleDragStart: sets static drag state and calls stopPropagation', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="v" items-reordering></modus-wc-tree-item>`,
        });
        const inst: ModusWcTreeItem = page.rootInstance;
        dragState.hasEmittedReorderForCurrentDrag = true;

        const event = makeDragEvent({});
        inst['handleDragStart'](event);

        expect(dragState.draggedItem).toBe(inst);
        expect(dragState.hasEmittedReorderForCurrentDrag).toBe(false);
        expect(event.stopPropagation).toHaveBeenCalled();
      });

      it('handleDragStart: sets dataTransfer properties when available', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="MyLabel" value="my-value" items-reordering></modus-wc-tree-item>`,
        });
        const inst: ModusWcTreeItem = page.rootInstance;

        const setData = jest.fn();
        const dataTransfer = {
          effectAllowed: '',
          setData,
        } as unknown as DataTransfer;
        const event = makeDragEvent({ dataTransfer });
        inst['handleDragStart'](event);

        expect(dataTransfer.effectAllowed).toBe('move');
        expect(setData).toHaveBeenCalledWith('text/plain', 'my-value');
      });

      it('handleDragStart: handles null dataTransfer gracefully', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="v" items-reordering></modus-wc-tree-item>`,
        });
        const inst: ModusWcTreeItem = page.rootInstance;

        const event = makeDragEvent({ dataTransfer: null });
        expect(() => inst['handleDragStart'](event)).not.toThrow();
        expect(dragState.draggedItem).toBe(inst);
      });
    });

    describe('handleDragLeave', () => {
      it('handleDragLeave: clears the drop indicator', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="v"></modus-wc-tree-item>`,
        });
        const inst: ModusWcTreeItem = page.rootInstance;
        const li = page.root!.querySelector('li')!;
        li.classList.add('modus-wc-tree-drop-top');

        inst['handleDragLeave']();

        expect(li.classList.contains('modus-wc-tree-drop-top')).toBe(false);
      });
    });

    describe('handleDragEnd', () => {
      it('handleDragEnd: resets static drag state and clears indicator', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="v"></modus-wc-tree-item>`,
        });
        const inst: ModusWcTreeItem = page.rootInstance;
        const li = page.root!.querySelector('li')!;
        dragState.draggedItem = inst;
        dragState.hasEmittedReorderForCurrentDrag = true;
        li.classList.add('modus-wc-tree-drop-bottom');

        inst['handleDragEnd']();

        expect(dragState.draggedItem).toBeNull();
        expect(dragState.hasEmittedReorderForCurrentDrag).toBe(false);
        expect(li.classList.contains('modus-wc-tree-drop-bottom')).toBe(false);
      });
    });

    describe('handleDrop', () => {
      it('handleDrop: returns early when itemsReordering is false', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="v"></modus-wc-tree-item>`,
        });
        const inst: ModusWcTreeItem = page.rootInstance;
        // itemsReordering defaults to false

        const event = makeDragEvent({});
        inst['handleDrop'](event);

        expect(event.preventDefault).not.toHaveBeenCalled();
      });

      it('handleDrop: returns early when disabled', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="v" items-reordering disabled></modus-wc-tree-item>`,
        });
        const inst: ModusWcTreeItem = page.rootInstance;

        const event = makeDragEvent({});
        inst['handleDrop'](event);

        expect(event.preventDefault).not.toHaveBeenCalled();
      });

      it('handleDrop: clears indicator when draggedItem is null', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="v" items-reordering></modus-wc-tree-item>`,
        });
        const inst: ModusWcTreeItem = page.rootInstance;
        dragState.draggedItem = null;

        const li = page.root!.querySelector('li')!;
        li.classList.add('modus-wc-tree-drop-top');

        const event = makeDragEvent({});
        inst['handleDrop'](event);

        expect(event.preventDefault).not.toHaveBeenCalled();
        expect(li.classList.contains('modus-wc-tree-drop-top')).toBe(false);
      });

      it('handleDrop: clears indicator when draggedItem is the same instance', async () => {
        const page = await newSpecPage({
          components: [ModusWcTreeItem],
          html: `<modus-wc-tree-item label="Item" value="v" items-reordering></modus-wc-tree-item>`,
        });
        const inst: ModusWcTreeItem = page.rootInstance;
        dragState.draggedItem = inst;

        const li = page.root!.querySelector('li')!;
        li.classList.add('modus-wc-tree-drop-bottom');

        const event = makeDragEvent({});
        inst['handleDrop'](event);

        expect(event.preventDefault).not.toHaveBeenCalled();
        expect(li.classList.contains('modus-wc-tree-drop-bottom')).toBe(false);
      });

      it('handleDrop: clears indicator when hasEmittedReorderForCurrentDrag is true', async () => {
        const container = document.createElement('div');
        const sourceEl = createMockHostEl('src');
        const middleEl = createMockHostEl('mid');
        const targetEl = createMockHostEl('tgt');
        container.appendChild(sourceEl);
        container.appendChild(middleEl);
        container.appendChild(targetEl);

        const [sourcePage, targetPage] = await Promise.all([
          newSpecPage({
            components: [ModusWcTreeItem],
            html: `<modus-wc-tree-item label="Source" value="src" items-reordering></modus-wc-tree-item>`,
          }),
          newSpecPage({
            components: [ModusWcTreeItem],
            html: `<modus-wc-tree-item label="Target" value="tgt" items-reordering></modus-wc-tree-item>`,
          }),
        ]);

        const sourceInst: ModusWcTreeItem = sourcePage.rootInstance;
        const targetInst: ModusWcTreeItem = targetPage.rootInstance;

        Object.defineProperty(sourceInst, 'el', {
          value: sourceEl,
          writable: true,
        });
        Object.defineProperty(targetInst, 'el', {
          value: targetEl,
          writable: true,
        });

        dragState.draggedItem = sourceInst;
        dragState.hasEmittedReorderForCurrentDrag = true;
        targetInst['setDropIndicator']('bottom');

        const spy = jest.fn();
        targetEl.addEventListener('itemReordered', spy);

        targetInst['handleDrop'](makeDragEvent({}));

        expect(spy).not.toHaveBeenCalled();
        const targetLi = targetEl.querySelector('li')!;
        expect(targetLi.classList.contains('modus-wc-tree-drop-bottom')).toBe(
          false
        );
      });
    });
  });

  describe('lazy loading', () => {
    it('should show loader when lazyLoading is true and item is expanded', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeItem],
        html: `
          <modus-wc-tree-item label="Parent" value="parent" has-subtree lazy-loading>
            <div class="modus-wc-tree-dropdown">Child content</div>
          </modus-wc-tree-item>
        `,
      });

      const treeItem = page.rootInstance;
      const event = new MouseEvent('click', { bubbles: true });
      treeItem['handleToggleClick'](event);
      await page.waitForChanges();

      const loader = page.root?.querySelector('modus-wc-loader');
      expect(loader).toBeTruthy();
    });

    it('should not show loader when lazyLoading is false', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeItem],
        html: `
          <modus-wc-tree-item label="Parent" value="parent" has-subtree>
            <div class="modus-wc-tree-dropdown">Child content</div>
          </modus-wc-tree-item>
        `,
      });

      const treeItem = page.rootInstance;
      const event = new MouseEvent('click', { bubbles: true });
      treeItem['handleToggleClick'](event);
      await page.waitForChanges();

      const loader = page.root?.querySelector('modus-wc-loader');
      expect(loader).toBeNull();
    });

    it('should not show loader when item is collapsed even if lazyLoading is true', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeItem],
        html: `
          <modus-wc-tree-item label="Parent" value="parent" has-subtree lazy-loading>
            <div class="modus-wc-tree-dropdown">Child content</div>
          </modus-wc-tree-item>
        `,
      });

      const loader = page.root?.querySelector('modus-wc-loader');
      expect(loader).toBeNull();
    });

    it('should emit itemExpand event when expanding', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeItem],
        html: `
          <modus-wc-tree-item label="Parent" value="parent" has-subtree>
            <div class="modus-wc-tree-dropdown">Child content</div>
          </modus-wc-tree-item>
        `,
      });

      const itemExpandSpy = jest.fn();
      page.root?.addEventListener('itemExpand', itemExpandSpy);

      const treeItem = page.rootInstance;
      const event = new MouseEvent('click', { bubbles: true });
      treeItem['handleToggleClick'](event);
      await page.waitForChanges();

      expect(itemExpandSpy).toHaveBeenCalled();
    });

    it('should not emit itemExpand when collapsing', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeItem],
        html: `
          <modus-wc-tree-item label="Parent" value="parent" has-subtree>
            <div class="modus-wc-tree-dropdown">Child content</div>
          </modus-wc-tree-item>
        `,
      });

      const treeItem = page.rootInstance;
      const event = new MouseEvent('click', { bubbles: true });

      // expand first
      treeItem['handleToggleClick'](event);
      await page.waitForChanges();

      const itemExpandSpy = jest.fn();
      page.root?.addEventListener('itemExpand', itemExpandSpy);

      // collapse
      treeItem['handleToggleClick'](event);
      await page.waitForChanges();

      expect(itemExpandSpy).not.toHaveBeenCalled();
    });

    it('should hide loader and reveal content after lazyLoading completes', async () => {
      const page = await newSpecPage({
        components: [ModusWcTreeItem],
        html: `
          <modus-wc-tree-item label="Parent" value="parent" has-subtree lazy-loading>
            <div class="modus-wc-tree-dropdown">Child content</div>
          </modus-wc-tree-item>
        `,
      });

      const treeItem = page.rootInstance;
      const event = new MouseEvent('click', { bubbles: true });
      treeItem['handleToggleClick'](event);
      await page.waitForChanges();

      expect(page.root?.querySelector('modus-wc-loader')).toBeTruthy();

      treeItem.lazyLoading = false;
      await page.waitForChanges();

      expect(page.root?.querySelector('modus-wc-loader')).toBeNull();
    });
  });
});
