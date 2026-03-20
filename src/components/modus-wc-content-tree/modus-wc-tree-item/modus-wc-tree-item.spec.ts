import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTreeItem } from './modus-wc-tree-item';

describe('modus-wc-tree-item', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1"></modus-wc-tree-item>',
    });

    expect(page.root).toBeTruthy();
    expect(page.root).toMatchSnapshot();
    expect(page.root?.querySelector('li')).toBeTruthy();
  });

  it('renders with checkbox', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1" checkbox="true"></modus-wc-tree-item>',
    });

    expect(page.root).toBeTruthy();
    expect(page.root).toMatchSnapshot();
    expect(page.root?.querySelector('modus-wc-checkbox')).toBeTruthy();
  });

  it('shows drag handle only when reordering is enabled', async () => {
    const disabledPage = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1"></modus-wc-tree-item>',
    });
    expect(
      disabledPage.root?.querySelector('modus-wc-icon[name="drag_indicator"]')
    ).toBeNull();

    const enabledPage = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-2" items-reordering="true"></modus-wc-tree-item>',
    });
    expect(
      enabledPage.root?.querySelector('modus-wc-icon[name="drag_indicator"]')
    ).not.toBeNull();
  });

  it('renders inline text input when inlineLabelEdit is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Editable Node" value="n1" inline-label-edit="true"></modus-wc-tree-item>',
    });

    expect(page.root?.querySelector('modus-wc-text-input')).toBeTruthy();
  });

  it('updates label on inline inputChange event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Old Label" value="n1" inline-label-edit="true"></modus-wc-tree-item>',
    });

    const input = page.root?.querySelector(
      'modus-wc-text-input'
    ) as HTMLElement & {
      value?: string;
    };
    input.value = 'Renamed';
    input.dispatchEvent(
      new CustomEvent('inputChange', { bubbles: true, composed: true })
    );
    await page.waitForChanges();

    expect(page.root?.label).toBe('Renamed');
  });

  it('emits itemLabelChange on inline inputBlur', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Editable Node" value="n1" inline-label-edit="true"></modus-wc-tree-item>',
    });

    const labelChangeSpy = jest.fn();
    page.root?.addEventListener('itemLabelChange', labelChangeSpy);

    const input = page.root?.querySelector(
      'modus-wc-text-input'
    ) as HTMLElement;
    input.dispatchEvent(
      new CustomEvent('inputBlur', {
        detail: new FocusEvent('blur'),
        bubbles: true,
        composed: true,
      })
    );
    await page.waitForChanges();

    expect(labelChangeSpy).toHaveBeenCalledTimes(1);
    expect(labelChangeSpy.mock.calls[0][0].detail).toBe('Editable Node');
  });

  it('expandSubTree emits itemExpand and reveals submenu', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" has-subtree="true">
          <div class="modus-wc-tree-dropdown">Child content</div>
        </modus-wc-tree-item>
      `,
    });

    const expandSpy = jest.fn();
    page.root?.addEventListener('itemExpand', expandSpy);

    await page.rootInstance.expandSubTree();
    await page.waitForChanges();

    const submenu = page.root?.querySelector('.modus-wc-tree-dropdown');
    expect(expandSpy).toHaveBeenCalledTimes(1);
    expect(expandSpy.mock.calls[0][0].detail).toBe('parent');
    expect(submenu?.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      true
    );
  });

  it('collapseSubTree hides submenu when expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `
        <modus-wc-tree-item label="Parent" value="parent" has-subtree="true">
          <div class="modus-wc-tree-dropdown modus-wc-tree-dropdown-show">Child content</div>
        </modus-wc-tree-item>
      `,
    });

    page.rootInstance.isExpanded = true;
    await page.rootInstance.collapseSubTree();
    await page.waitForChanges();

    const submenu = page.root?.querySelector('.modus-wc-tree-dropdown');
    expect(submenu?.classList.contains('modus-wc-tree-dropdown-show')).toBe(
      false
    );
  });

  it('emits itemSelect when Enter key is pressed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1"></modus-wc-tree-item>',
    });

    const selectSpy = jest.fn();
    page.root?.addEventListener('itemSelect', selectSpy);

    const treeLi = page.root?.querySelector('li') as HTMLElement;
    treeLi.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    await page.waitForChanges();

    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy.mock.calls[0][0].detail).toEqual({
      value: 'node-1',
      additive: false,
      range: false,
    });
  });

  it('componentDidLoad adds listener only when hasSubtree is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1"></modus-wc-tree-item>',
    });

    const addSpy = jest.spyOn(page.root as HTMLElement, 'addEventListener');
    page.rootInstance.hasSubtree = true;
    page.rootInstance.componentDidLoad();

    expect(addSpy).toHaveBeenCalledWith(
      'selectionsChange',
      (page.rootInstance as any).updateIndeterminateState
    );
  });

  it('disconnectedCallback removes selectionsChange listener', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1"></modus-wc-tree-item>',
    });

    const removeSpy = jest.spyOn(
      page.root as HTMLElement,
      'removeEventListener'
    );
    page.rootInstance.disconnectedCallback();

    expect(removeSpy).toHaveBeenCalledWith(
      'selectionsChange',
      (page.rootInstance as any).updateIndeterminateState
    );
  });

  it('syncDropdownShow retries with timeout when expanded and submenu missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1"></modus-wc-tree-item>',
    });

    const timeoutSpy = jest.spyOn(globalThis, 'setTimeout');
    page.rootInstance.isExpanded = true;
    (page.rootInstance as any).syncDropdownShow();

    expect(timeoutSpy).toHaveBeenCalled();
    timeoutSpy.mockRestore();
  });

  it('executes syncDropdownShow timeout callback', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;
    instance.isExpanded = true;

    const timeoutSpy = jest
      .spyOn(globalThis, 'setTimeout')
      .mockImplementation((callback: TimerHandler) => {
        instance.isExpanded = false;
        (callback as () => void)();
        return {} as ReturnType<typeof setTimeout>;
      });

    instance.syncDropdownShow();
    expect(timeoutSpy).toHaveBeenCalled();
    timeoutSpy.mockRestore();
  });

  it('handleToggleClick guards when subtree missing or lazy-loading expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1"></modus-wc-tree-item>',
    });
    const event = { stopPropagation: jest.fn() } as unknown as MouseEvent;

    const syncSpy = jest.spyOn(page.rootInstance as any, 'syncDropdownShow');

    page.rootInstance.hasSubtree = false;
    (page.rootInstance as any).handleToggleClick(event);
    expect(syncSpy).not.toHaveBeenCalled();

    page.rootInstance.hasSubtree = true;
    page.rootInstance.lazyLoading = true;
    page.rootInstance.isExpanded = true;
    (page.rootInstance as any).handleToggleClick(event);
    expect(syncSpy).not.toHaveBeenCalled();
  });

  it('handleToggleClick expands and emits when valid', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1" has-subtree="true"></modus-wc-tree-item>',
    });
    const event = { stopPropagation: jest.fn() } as unknown as MouseEvent;
    const emitSpy = jest.spyOn(page.rootInstance.itemExpand, 'emit');
    const syncSpy = jest.spyOn(page.rootInstance as any, 'syncDropdownShow');

    page.rootInstance.isExpanded = false;
    (page.rootInstance as any).handleToggleClick(event);

    expect(page.rootInstance.isExpanded).toBe(true);
    expect(emitSpy).toHaveBeenCalledWith('node-1');
    expect(syncSpy).toHaveBeenCalled();
  });

  it('inline interaction stops propagation', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1"></modus-wc-tree-item>',
    });
    const event = { stopPropagation: jest.fn() } as unknown as Event;
    (page.rootInstance as any).handleInlineLabelInteraction(event);
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('checkbox keydown ignores non-trigger keys and handles Space', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1"></modus-wc-tree-item>',
    });
    const clickSpy = jest.spyOn(
      page.rootInstance as any,
      'handleCheckboxClick'
    );

    const ignore = {
      key: 'Tab',
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as unknown as KeyboardEvent;
    (page.rootInstance as any).handleCheckboxKeyDown(ignore);
    expect(clickSpy).not.toHaveBeenCalled();

    const trigger = {
      key: ' ',
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as unknown as KeyboardEvent;
    (page.rootInstance as any).handleCheckboxKeyDown(trigger);
    expect(clickSpy).toHaveBeenCalled();
    expect(trigger.preventDefault).toHaveBeenCalled();
    expect(trigger.stopPropagation).toHaveBeenCalled();
  });

  it('updateIndeterminateState handles all guard branches and computes state', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Parent" value="p1"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;

    instance.updateIndeterminateState({
      target: page.root,
    } as unknown as Event);
    expect(instance.isIndeterminate).toBe(false);

    instance.hasSubtree = false;
    instance.checkbox = true;
    instance.updateIndeterminateState({
      target: document.createElement('div'),
    } as unknown as Event);
    expect(instance.isIndeterminate).toBe(false);

    instance.hasSubtree = true;
    instance.checkbox = false;
    instance.updateIndeterminateState({
      target: document.createElement('div'),
    } as unknown as Event);
    expect(instance.isIndeterminate).toBe(false);

    instance.checkbox = true;
    instance.updateIndeterminateState({
      target: document.createElement('div'),
    } as unknown as Event);
    expect(instance.isIndeterminate).toBe(false);

    const submenu = document.createElement('div');
    submenu.className = 'modus-wc-tree-dropdown';
    (page.root as HTMLElement).appendChild(submenu);

    instance.updateIndeterminateState({
      target: document.createElement('div'),
    } as unknown as Event);
    expect(instance.isIndeterminate).toBe(false);

    const c1 = document.createElement('modus-wc-tree-item') as any;
    c1.checkbox = true;
    c1.checked = true;
    const c2 = document.createElement('modus-wc-tree-item') as any;
    c2.checkbox = true;
    c2.checked = false;
    submenu.append(c1, c2);

    instance.updateIndeterminateState({
      target: document.createElement('div'),
    } as unknown as Event);
    expect(instance.checked).toBe(false);
    expect(instance.isIndeterminate).toBe(true);

    c2.checked = true;
    instance.updateIndeterminateState({
      target: document.createElement('div'),
    } as unknown as Event);
    expect(instance.checked).toBe(true);
    expect(instance.isIndeterminate).toBe(false);
  });

  it('updateChildrenSelection updates eligible descendants and checkbox attrs', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Parent" value="p1"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;

    instance.updateChildrenSelection(true);

    instance.hasSubtree = true;
    instance.updateChildrenSelection(true);

    const submenu = document.createElement('div');
    submenu.className = 'modus-wc-tree-dropdown';
    const child = document.createElement('modus-wc-tree-item') as any;
    child.checkbox = true;
    child.checked = false;
    child.isIndeterminate = true;
    const childCheckbox = document.createElement('modus-wc-checkbox');
    child.appendChild(childCheckbox);
    submenu.appendChild(child);
    (page.root as HTMLElement).appendChild(submenu);

    instance.updateChildrenSelection(true);
    expect(child.checked).toBe(true);
    expect(child.isIndeterminate).toBe(false);
    expect(childCheckbox.getAttribute('value')).toBe('true');
  });

  it('handleCheckboxClick emits selected values from root tree view', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Parent" value="p1" checkbox="true"></modus-wc-tree-item>',
    });

    const instance: any = page.rootInstance;
    const rootTree = document.createElement('div');
    const selectedItem = document.createElement('modus-wc-tree-item') as any;
    selectedItem.checkbox = true;
    selectedItem.checked = true;
    selectedItem.value = 's1';
    rootTree.appendChild(selectedItem);

    jest.spyOn(instance, 'getRootTreeView').mockReturnValue(rootTree);
    jest
      .spyOn(instance, 'updateChildrenSelection')
      .mockImplementation(() => undefined);
    const emitSpy = jest.spyOn(instance.selectionsChange, 'emit');

    instance.handleCheckboxClick();
    expect(emitSpy).toHaveBeenCalledWith({ selectedValues: ['s1'] });
  });

  it('handleCheckboxClick does not emit when root tree view not found', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="n1" checkbox="true"></modus-wc-tree-item>',
    });
    const emitSpy = jest.spyOn(page.rootInstance.selectionsChange, 'emit');
    (page.rootInstance as any).handleCheckboxClick();
    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('clearDropIndicator and setDropIndicator update classes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="n1"></modus-wc-tree-item>',
    });
    const li = page.root?.querySelector('li') as HTMLElement;

    (page.rootInstance as any).setDropIndicator('top');
    expect(li.classList.contains('modus-wc-tree-drop-top')).toBe(true);

    (page.rootInstance as any).setDropIndicator('bottom');
    expect(li.classList.contains('modus-wc-tree-drop-bottom')).toBe(true);

    (page.rootInstance as any).clearDropIndicator();
    expect(li.classList.contains('modus-wc-tree-drop-top')).toBe(false);
    expect(li.classList.contains('modus-wc-tree-drop-bottom')).toBe(false);
  });

  it('drag handlers cover guards and successful flow', async () => {
    const targetPage = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Target" value="tgt" items-reordering="true"></modus-wc-tree-item>',
    });
    const target: any = targetPage.rootInstance;
    const sourceHost = document.createElement('modus-wc-tree-item') as any;
    sourceHost.value = 'src';
    const parent = document.createElement('div');
    parent.append(sourceHost, targetPage.root as HTMLElement);
    document.body.appendChild(parent);

    // dragStart guard
    target.itemsReordering = false;
    target.handleDragStart({} as DragEvent);

    // dragStart success
    target.itemsReordering = true;
    const dataTransfer = {
      effectAllowed: '',
      dropEffect: '',
      setData: jest.fn(),
    } as unknown as DataTransfer;
    const startEvent = {
      stopPropagation: jest.fn(),
      dataTransfer,
    } as unknown as DragEvent;
    target.handleDragStart(startEvent);
    expect((ModusWcTreeItem as any).draggedItem).toBe(target);
    expect(startEvent.stopPropagation).toHaveBeenCalled();

    // dragOver guard: same dragged item
    const overGuard = { clientY: 1 } as DragEvent;
    target.handleDragOver(overGuard);

    // dragOver success
    (ModusWcTreeItem as any).draggedItem = {
      el: document.createElement('div'),
    };
    const li = targetPage.root?.querySelector('li') as any;
    li.getBoundingClientRect = () => ({ top: 0, height: 20 });
    const overEvent = {
      clientY: 1,
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer,
    } as unknown as DragEvent;
    target.handleDragOver(overEvent);
    expect(overEvent.preventDefault).toHaveBeenCalled();
    expect(overEvent.stopPropagation).toHaveBeenCalled();

    // dragLeave
    const clearSpy = jest.spyOn(target, 'clearDropIndicator');
    target.handleDragLeave();
    expect(clearSpy).toHaveBeenCalled();

    // drop: short-circuit when no dragged item
    (ModusWcTreeItem as any).draggedItem = null;
    target.handleDrop({} as DragEvent);

    // drop: full success path with mocked helpers
    (ModusWcTreeItem as any).draggedItem = { el: sourceHost };
    target.dropPosition = 'bottom';
    const emitSpy = jest.spyOn(target.itemReordered, 'emit');
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      stopImmediatePropagation: jest.fn(),
    } as unknown as DragEvent;
    jest
      .spyOn(target, 'getSiblingTreeItems')
      .mockReturnValueOnce([sourceHost, targetPage.root as any])
      .mockReturnValueOnce([targetPage.root as any, sourceHost]);
    jest.spyOn(target, 'resolveItemId').mockImplementation((el: unknown) => {
      const resolvedElement = el as Element | null;
      if (resolvedElement === sourceHost) return 'src';
      return null;
    });
    jest.spyOn(parent, 'insertBefore');
    target.handleDrop(event);
    expect(emitSpy).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
    expect(event.stopImmediatePropagation).toHaveBeenCalled();

    target.handleDragEnd();
    expect((ModusWcTreeItem as any).draggedItem).toBeNull();
    parent.remove();
  });

  it('covers resolve/getSibling/getRootTreeView and handleItemSelect', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="node-1"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;

    expect(instance.resolveItemId(null)).toBeNull();

    const other = document.createElement('modus-wc-tree-item') as any;
    other.value = 'child-value';
    expect(instance.resolveItemId(other)).toBe('child-value');

    const parent = document.createElement('div');
    parent.appendChild(other);
    parent.appendChild(document.createElement('div'));
    const siblings = instance.getSiblingTreeItems(parent);
    expect(siblings.length).toBe(1);

    const tv1 = document.createElement('modus-wc-tree-view');
    const wrapper = document.createElement('div');
    const tv2 = document.createElement('modus-wc-tree-view');
    tv1.appendChild(wrapper);
    wrapper.appendChild(tv2);
    tv2.appendChild(page.root as HTMLElement);
    document.body.appendChild(tv1);
    expect(instance.getRootTreeView()).toBe(tv1);
    tv1.remove();

    const emitSpy = jest.spyOn(instance.itemSelect, 'emit');
    const clickEvent = { stopPropagation: jest.fn() } as unknown as MouseEvent;
    instance.handleItemSelect(clickEvent);
    expect(clickEvent.stopPropagation).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalled();
  });

  it('covers render callback handlers for button and checkbox', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="n1" checkbox="true" has-subtree="true"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;
    const toggleSpy = jest.spyOn(instance, 'handleToggleClick');
    const checkboxKeySpy = jest.spyOn(instance, 'handleCheckboxKeyDown');
    const checkboxClickSpy = jest.spyOn(instance, 'handleCheckboxClick');

    const btn = page.root?.querySelector('modus-wc-button') as HTMLElement;
    btn.dispatchEvent(
      new CustomEvent('buttonClick', {
        detail: new MouseEvent('click'),
        bubbles: true,
        composed: true,
      })
    );

    const checkbox = page.root?.querySelector(
      'modus-wc-checkbox'
    ) as HTMLElement;
    checkbox.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    checkbox.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    );

    await page.waitForChanges();
    expect(toggleSpy).toHaveBeenCalled();
    expect(checkboxClickSpy).toHaveBeenCalled();
    expect(checkboxKeySpy).toHaveBeenCalled();
  });

  it('covers fallback id resolution, custom class, and keyboard space selection modifiers', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="" custom-class="my-class"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;

    const el = document.createElement('div');
    el.setAttribute('value', 'attr-id');
    expect(instance.resolveItemId(el)).toBe('attr-id');
    const elWithProp = document.createElement('modus-wc-tree-item') as any;
    elWithProp.value = 'prop-id';
    expect(instance.resolveItemId(elWithProp)).toBe('prop-id');

    expect(instance.getClasses()).toContain('my-class');

    const selectSpy = jest.spyOn(instance.itemSelect, 'emit');
    instance.handleKeyDown({
      key: ' ',
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      ctrlKey: true,
      shiftKey: true,
    } as unknown as KeyboardEvent);
    expect(selectSpy).toHaveBeenCalledWith({
      value: '',
      additive: true,
      range: true,
    });

    instance.handleEmittedSelect({
      metaKey: true,
      shiftKey: false,
    } as unknown as KeyboardEvent);
    instance.handleEmittedSelect(undefined);
  });

  it('covers no-li drop indicator paths and dragOver bottom positioning', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="n1" items-reordering="true"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;

    (page.root as HTMLElement).innerHTML = '';
    instance.clearDropIndicator();
    instance.setDropIndicator('top');

    // cover bottom branch in dragOver on a fresh page
    const page2 = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="n1" items-reordering="true"></modus-wc-tree-item>',
    });
    const instance2: any = page2.rootInstance;
    const li = page2.root?.querySelector('li') as any;
    li.getBoundingClientRect = () => ({ top: 0, height: 10 });
    (ModusWcTreeItem as any).draggedItem = {
      el: document.createElement('div'),
    };
    instance2.handleDragOver({
      clientY: 9,
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        dropEffect: '',
      },
    } as unknown as DragEvent);
    expect(instance2.dropPosition).toBe('bottom');
  });

  it('covers disabled drop guard and loader/aria render branches', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="n1" checkbox="true" disabled="true" has-subtree="true"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;
    instance.isIndeterminate = true;
    instance.lazyLoading = true;
    instance.isExpanded = true;
    await page.waitForChanges();

    const li = page.root?.querySelector('li');
    expect(li?.getAttribute('aria-selected')).toBeNull();
    expect(li?.getAttribute('aria-checked')).toBe('mixed');
    expect(page.root?.querySelector('.modus-wc-tree-loading')).toBeTruthy();

    (ModusWcTreeItem as any).draggedItem = {
      el: document.createElement('div'),
    };
    const clearSpy = jest.spyOn(instance, 'clearDropIndicator');
    instance.handleDrop({} as DragEvent);
    expect(clearSpy).not.toHaveBeenCalled();
  });

  it('covers selected and checked true aria branches', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="n1" selected="true"></modus-wc-tree-item>',
    });
    const li = page.root?.querySelector('li');
    expect(li?.getAttribute('aria-selected')).toBe('true');

    const page2 = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="n2" checkbox="true" checked="true"></modus-wc-tree-item>',
    });
    const li2 = page2.root?.querySelector('li');
    expect(li2?.getAttribute('aria-checked')).toBe('true');
  });

  it('covers dragOver disabled guard and no-li guard', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="n1" items-reordering="true" disabled="true"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;
    (ModusWcTreeItem as any).draggedItem = {
      el: document.createElement('div'),
    };
    instance.handleDragOver({ clientY: 1 } as DragEvent);

    const page2 = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="n1" items-reordering="true"></modus-wc-tree-item>',
    });
    const instance2: any = page2.rootInstance;
    (page2.root as HTMLElement).innerHTML = '';
    (ModusWcTreeItem as any).draggedItem = {
      el: document.createElement('div'),
    };
    instance2.handleDragOver({
      clientY: 1,
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as unknown as DragEvent);
  });

  it('covers checkbox non-xs size branch and non-checkbox descendant branch', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Node" value="n1" checkbox="true" size="sm" has-subtree="true"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;
    const checkbox = page.root?.querySelector('modus-wc-checkbox');
    expect(checkbox?.getAttribute('size')).toBe('sm');

    const submenu = document.createElement('div');
    submenu.className = 'modus-wc-tree-dropdown';
    const child = document.createElement('modus-wc-tree-item') as any;
    child.checkbox = false;
    submenu.appendChild(child);
    (page.root as HTMLElement).appendChild(submenu);
    instance.updateChildrenSelection(true);
    expect(child.checked).toBeUndefined();
  });

  it('covers dragStart dataTransfer label fallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Fallback Label" value="" items-reordering="true"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;
    const setData = jest.fn();
    instance.handleDragStart({
      stopPropagation: jest.fn(),
      dataTransfer: {
        effectAllowed: '',
        setData,
      },
    } as unknown as DragEvent);
    expect(setData).toHaveBeenCalledWith('text/plain', 'Fallback Label');
  });

  it('handleDrop returns when source or target parent is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Target" value="tgt" items-reordering="true"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;
    const clearSpy = jest.spyOn(instance, 'clearDropIndicator');
    (ModusWcTreeItem as any).draggedItem = {
      el: document.createElement('modus-wc-tree-item'),
    };

    instance.handleDrop({
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      stopImmediatePropagation: jest.fn(),
    } as unknown as DragEvent);

    expect(clearSpy).toHaveBeenCalled();
  });

  it('handleDrop returns when previous index is invalid or dragged value missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Target" value="tgt" items-reordering="true"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;
    const sourceHost = document.createElement('modus-wc-tree-item');
    const parent = document.createElement('div');
    parent.append(sourceHost, page.root as HTMLElement);
    document.body.appendChild(parent);
    const clearSpy = jest.spyOn(instance, 'clearDropIndicator');

    (ModusWcTreeItem as any).draggedItem = { el: sourceHost };
    jest.spyOn(instance, 'getSiblingTreeItems').mockReturnValueOnce([]);
    jest.spyOn(instance, 'resolveItemId').mockReturnValueOnce(null);
    instance.handleDrop({
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      stopImmediatePropagation: jest.fn(),
    } as unknown as DragEvent);
    expect(clearSpy).toHaveBeenCalled();
    parent.remove();
  });

  it('handleDrop covers top-position insert and early-return branches', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Target" value="tgt" items-reordering="true"></modus-wc-tree-item>',
    });
    const instance: any = page.rootInstance;
    const sourceHost = document.createElement('modus-wc-tree-item');
    const parent = document.createElement('div');
    parent.append(sourceHost, page.root as HTMLElement);
    document.body.appendChild(parent);
    const clearSpy = jest.spyOn(instance, 'clearDropIndicator');

    // currentIndex === -1 branch
    (ModusWcTreeItem as any).draggedItem = { el: sourceHost };
    instance.dropPosition = 'top';
    jest
      .spyOn(instance, 'getSiblingTreeItems')
      .mockReturnValueOnce([sourceHost, page.root as any])
      .mockReturnValueOnce([page.root as any]);
    jest
      .spyOn(instance, 'resolveItemId')
      .mockImplementation((el: unknown) =>
        (el as Element | null) === sourceHost ? 'src' : null
      );
    instance.handleDrop({
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      stopImmediatePropagation: jest.fn(),
    } as unknown as DragEvent);
    expect(clearSpy).toHaveBeenCalled();

    // previousIndex === currentIndex branch
    (ModusWcTreeItem as any).draggedItem = { el: sourceHost };
    instance.dropPosition = 'top';
    jest
      .spyOn(instance, 'getSiblingTreeItems')
      .mockReturnValueOnce([sourceHost, page.root as any])
      .mockReturnValueOnce([sourceHost, page.root as any]);
    jest
      .spyOn(instance, 'resolveItemId')
      .mockImplementation((el: unknown) =>
        (el as Element | null) === sourceHost ? 'src' : null
      );
    instance.handleDrop({
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      stopImmediatePropagation: jest.fn(),
    } as unknown as DragEvent);
    expect(clearSpy).toHaveBeenCalled();

    // hasEmittedReorderForCurrentDrag branch
    (ModusWcTreeItem as any).draggedItem = { el: sourceHost };
    (ModusWcTreeItem as any).hasEmittedReorderForCurrentDrag = true;
    instance.dropPosition = 'top';
    jest
      .spyOn(instance, 'getSiblingTreeItems')
      .mockReturnValueOnce([sourceHost, page.root as any])
      .mockReturnValueOnce([page.root as any, sourceHost]);
    jest
      .spyOn(instance, 'resolveItemId')
      .mockImplementation((el: unknown) =>
        (el as Element | null) === sourceHost ? 'src' : null
      );
    instance.handleDrop({
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      stopImmediatePropagation: jest.fn(),
    } as unknown as DragEvent);
    expect(clearSpy).toHaveBeenCalled();

    parent.remove();
    (ModusWcTreeItem as any).hasEmittedReorderForCurrentDrag = false;
  });
});
