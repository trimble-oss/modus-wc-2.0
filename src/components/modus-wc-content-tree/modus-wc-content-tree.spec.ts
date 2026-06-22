import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { ModusWcContentTree } from './modus-wc-content-tree';
import { findNode } from './tree-state-manager';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcCheckbox } from '../modus-wc-checkbox/modus-wc-checkbox';
import { ModusWcDropdownMenu } from '../modus-wc-dropdown-menu/modus-wc-dropdown-menu';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { ModusWcMenu } from '../modus-wc-menu/modus-wc-menu';
import { ModusWcMenuItem } from '../modus-wc-menu-item/modus-wc-menu-item';
import { ModusWcModal } from '../modus-wc-modal/modus-wc-modal';
import { ModusWcTextInput } from '../modus-wc-text-input/modus-wc-text-input';
import { ModusWcTreeItem } from '../modus-wc-tree-item/modus-wc-tree-item';
import { ModusWcTreeMenu } from '../modus-wc-tree-menu/modus-wc-tree-menu';
import { ModusWCTypography } from '../modus-wc-typography/modus-wc-typography';
import { ITreeNode } from '../types';

interface ContentTreeHarness {
  el: HTMLElement;
  nodes: ITreeNode[];
  expandedNodeIds?: string[];
  selectedNodeId?: string;
  checkedNodeIds?: string[];
  filter?: string;
  editingNodeId?: string;
  selectionMode?: 'single' | 'multiple';
  bordered?: boolean;
  customClass?: string;
  size?: 'sm' | 'md' | 'lg';
  handleExpandToggle: (e: CustomEvent, node: ITreeNode) => void;
  handleCheckboxChange: (e: CustomEvent, node: ITreeNode) => void;
  onMenuAction: (
    e: CustomEvent<{ value: string }>,
    action: 'edit' | 'duplicate' | 'above' | 'below' | 'child' | 'delete',
    node: ITreeNode
  ) => void;
  closeDropdownFromEvent: (e: CustomEvent) => void;
  openDeleteConfirm: (id: string) => void;
  confirmDelete: () => void;
  getCheckStateById: (id: string) => 'checked' | 'unchecked' | 'indeterminate';
  getNodes: () => ITreeNode[];
  getRenderNodes: () => ITreeNode[];
  isExpanded: (id: string) => boolean;
  isFiltering: () => boolean;
  getActiveRootId: () => string | undefined;
  coerceArray: <T>(value: T[] | string | undefined) => T[];
  handleEditInput: (e: CustomEvent) => void;
  commitEdit: (node: ITreeNode) => void;
  cancelEdit: (node: ITreeNode) => void;
  onEditingNodeIdChange: (newId?: string) => void;
  handleInputKeyDown: (e: KeyboardEvent) => void;
  componentWillLoad: () => void;
  componentDidRender: () => void;
  disconnectedCallback: () => void;
  detachInputKeyDown: () => void;
  editFocusPending: boolean;
  getActionButtonSize: () => 'xs' | 'sm' | 'md' | 'lg';
  getActionIconSize: () => 'xs' | 'sm' | 'md' | 'lg';
  getNodeIconSize: () => 'xs' | 'sm' | 'md' | 'lg';
}

describe('modus-wc-content-tree', () => {
  const contentTreeComponents = [
    ModusWcContentTree,
    ModusWcTreeMenu,
    ModusWcTreeItem,
    ModusWcCheckbox,
    ModusWcButton,
    ModusWcIcon,
    ModusWcTextInput,
    ModusWcInputLabel,
    ModusWcDropdownMenu,
    ModusWcMenu,
    ModusWcMenuItem,
    ModusWcModal,
    ModusWCTypography,
  ];

  const sampleNodes: ITreeNode[] = [
    {
      id: 'root-1',
      label: 'Project Files',
      icon: 'folder_closed',
      children: [
        { id: 'leaf-a', label: 'Overview', icon: 'info' },
        { id: 'leaf-disabled', label: 'Disabled Leaf', disabled: true },
        {
          id: 'parent-b',
          label: 'Resources',
          children: [
            { id: 'leaf-b1', label: 'Specifications' },
            { id: 'leaf-b2', label: 'Search Index' },
          ],
        },
      ],
    },
    { id: 'root-2', label: 'Settings' },
  ];

  const asHarness = (component: ModusWcContentTree) =>
    component as unknown as ContentTreeHarness;

  const createTreePage = async (
    options: {
      html?: string;
      nodes?: ITreeNode[];
      expandedNodeIds?: string[];
      selectedNodeId?: string;
      checkedNodeIds?: string[];
      filter?: string;
      editingNodeId?: string;
      selectionMode?: 'single' | 'multiple';
      bordered?: boolean;
      customClass?: string;
      size?: 'sm' | 'md' | 'lg';
    } = {}
  ): Promise<{ page: SpecPage; component: ContentTreeHarness }> => {
    const page = await newSpecPage({
      components: contentTreeComponents,
      html:
        options.html ??
        '<modus-wc-content-tree aria-label="Content tree"></modus-wc-content-tree>',
    });
    const component = asHarness(page.rootInstance as ModusWcContentTree);

    component.nodes = options.nodes ?? sampleNodes;
    if (options.expandedNodeIds) {
      component.expandedNodeIds = options.expandedNodeIds;
    }
    if (options.selectedNodeId) {
      component.selectedNodeId = options.selectedNodeId;
    }
    if (options.checkedNodeIds) {
      component.checkedNodeIds = options.checkedNodeIds;
    }
    if (options.filter !== undefined) {
      component.filter = options.filter;
    }
    if (options.editingNodeId) {
      component.editingNodeId = options.editingNodeId;
    }
    if (options.selectionMode) {
      component.selectionMode = options.selectionMode;
    }
    if (options.bordered !== undefined) {
      component.bordered = options.bordered;
    }
    if (options.customClass !== undefined) {
      component.customClass = options.customClass;
    }
    if (options.size) {
      component.size = options.size;
    }

    await page.waitForChanges();
    if (options.editingNodeId) {
      component.onEditingNodeIdChange(options.editingNodeId);
      await page.waitForChanges();
    }
    patchDeleteDialog(page);
    return { page, component };
  };

  const getNode = (id: string) => findNode(sampleNodes, id)!;

  const dispatchItemSelect = (page: SpecPage, value: string) => {
    page.root!.dispatchEvent(
      new CustomEvent('itemSelect', {
        detail: { value },
        bubbles: true,
      })
    );
  };

  const patchDeleteDialog = (page: SpecPage) => {
    const dialog = page.root!.querySelector('dialog');
    if (!dialog) return;

    Object.assign(dialog, {
      showModal: jest.fn(function (this: HTMLDialogElement) {
        this.setAttribute('open', '');
      }),
      close: jest.fn(function (this: HTMLDialogElement) {
        this.removeAttribute('open');
      }),
    });
  };

  const findTreeItem = (page: SpecPage, value: string) =>
    Array.from(page.root!.querySelectorAll('modus-wc-tree-item')).find(
      (item) => (item as unknown as { value: string }).value === value
    ) as HTMLElement | undefined;

  const mockRaf = (): (() => void) => {
    const origRaf = globalThis.requestAnimationFrame;
    globalThis.requestAnimationFrame = jest.fn((cb: FrameRequestCallback) => {
      cb(0);
      return 0;
    });
    return () => {
      globalThis.requestAnimationFrame = origRaf;
    };
  };

  const nodeContainsId = (node: ITreeNode, targetId: string): boolean =>
    node.id === targetId ||
    (node.children ?? []).some((child) => nodeContainsId(child, targetId));

  const hasNodeId = (nodes: ITreeNode[], id: string): boolean =>
    nodes.some((node) => nodeContainsId(node, id));

  beforeAll(() => {
    if (typeof globalThis.HTMLDialogElement === 'undefined') {
      class MockHTMLDialogElement extends HTMLElement {
        showModal(): void {
          this.setAttribute('open', '');
        }

        close(): void {
          this.removeAttribute('open');
        }
      }

      globalThis.HTMLDialogElement =
        MockHTMLDialogElement as unknown as typeof HTMLDialogElement;
    }

    jest
      .spyOn(HTMLDialogElement.prototype, 'showModal')
      .mockImplementation(function (this: HTMLDialogElement) {
        this.setAttribute('open', '');
      });
    jest
      .spyOn(HTMLDialogElement.prototype, 'close')
      .mockImplementation(function (this: HTMLDialogElement) {
        this.removeAttribute('open');
      });
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: contentTreeComponents,
      html: '<modus-wc-content-tree aria-label="Content tree"></modus-wc-content-tree>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should set a default aria-label when none is provided', async () => {
    const page = await newSpecPage({
      components: contentTreeComponents,
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });

    expect((page.root as HTMLElement).ariaLabel).toBe('Content tree');
  });

  it('should render with custom props and sample nodes', async () => {
    const { page } = await createTreePage({
      bordered: true,
      customClass: 'my-tree',
      size: 'lg',
      expandedNodeIds: ['root-1', 'parent-b'],
      selectedNodeId: 'leaf-b2',
    });

    expect(page.root?.className).toContain('my-tree');
    expect(
      page.root?.querySelector('.modus-wc-content-tree-family-active')
    ).not.toBeNull();
    expect(page.root).toMatchSnapshot();
  });

  it('should map tree size to action button, action icon, and node icon sizes', async () => {
    const { component } = await createTreePage({ size: 'sm' });

    expect(component.getActionButtonSize()).toBe('xs');
    expect(component.getActionIconSize()).toBe('xs');
    expect(component.getNodeIconSize()).toBe('xs');

    component.size = 'md';
    expect(component.getActionButtonSize()).toBe('sm');
    expect(component.getActionIconSize()).toBe('xs');
    expect(component.getNodeIconSize()).toBe('sm');

    component.size = 'lg';
    expect(component.getActionButtonSize()).toBe('md');
    expect(component.getActionIconSize()).toBe('sm');
    expect(component.getNodeIconSize()).toBe('md');
  });

  it('should ignore itemSelect when the event detail is missing', async () => {
    const { page } = await createTreePage();
    const nodeSelect = jest.fn();
    page.root?.addEventListener('nodeSelect', nodeSelect);

    page.root!.dispatchEvent(new CustomEvent('itemSelect', { bubbles: true }));

    expect(nodeSelect).not.toHaveBeenCalled();
  });

  it('should ignore itemSelect when the id is missing', async () => {
    const { page } = await createTreePage();
    const nodeSelect = jest.fn();
    page.root?.addEventListener('nodeSelect', nodeSelect);

    page.root!.dispatchEvent(
      new CustomEvent('itemSelect', { detail: {}, bubbles: true })
    );

    expect(nodeSelect).not.toHaveBeenCalled();
  });

  it('should ignore itemSelect for unknown or disabled nodes', async () => {
    const { page } = await createTreePage();
    const nodeSelect = jest.fn();
    page.root?.addEventListener('nodeSelect', nodeSelect);

    dispatchItemSelect(page, 'missing-id');
    dispatchItemSelect(page, 'leaf-disabled');

    expect(nodeSelect).not.toHaveBeenCalled();
  });

  it('should emit nodeSelect when a row is selected', async () => {
    const { page } = await createTreePage();
    const nodeSelect = jest.fn();
    page.root?.addEventListener('nodeSelect', nodeSelect);

    dispatchItemSelect(page, 'leaf-a');

    expect(nodeSelect).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'leaf-a' } })
    );
  });

  it('should emit nodeExpandChange when the chevron is toggled', async () => {
    const { page, component } = await createTreePage({ expandedNodeIds: [] });
    const nodeExpandChange = jest.fn();
    page.root?.addEventListener('nodeExpandChange', nodeExpandChange);

    component.handleExpandToggle(
      new CustomEvent('buttonClick'),
      getNode('root-1')
    );
    expect(nodeExpandChange).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'root-1', expanded: true },
      })
    );

    component.expandedNodeIds = ['root-1'];
    component.handleExpandToggle(
      new CustomEvent('buttonClick'),
      getNode('root-1')
    );
    expect(nodeExpandChange).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'root-1', expanded: false },
      })
    );
  });

  it('should treat parents as expanded while filtering regardless of expandedNodeIds', async () => {
    const { component } = await createTreePage({
      expandedNodeIds: [],
      filter: 'search',
    });

    expect(component.isFiltering()).toBe(true);
    expect(component.isExpanded('root-1')).toBe(true);
    expect(component.isExpanded('parent-b')).toBe(true);
    expect(hasNodeId(component.getRenderNodes(), 'leaf-b2')).toBe(true);
  });

  it('should reveal a matched parent full subtree including non-matching children', async () => {
    const { component } = await createTreePage({
      filter: 'resources',
    });

    const rendered = component.getRenderNodes();
    // 'parent-b' (Resources) matches the query, so its entire original subtree
    // is revealed -- including 'leaf-b1' (Specifications), which does not match.
    expect(hasNodeId(rendered, 'parent-b')).toBe(true);
    expect(hasNodeId(rendered, 'leaf-b1')).toBe(true);
    expect(hasNodeId(rendered, 'leaf-b2')).toBe(true);
  });

  it('should not emit nodeExpandChange when the chevron is toggled while filtering', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      filter: 'search',
    });
    const nodeExpandChange = jest.fn();
    page.root?.addEventListener('nodeExpandChange', nodeExpandChange);

    component.handleExpandToggle(
      new CustomEvent('buttonClick'),
      getNode('root-1')
    );
    await page.waitForChanges();

    // The controlled state must not be mutated while filtering.
    expect(nodeExpandChange).not.toHaveBeenCalled();
  });

  it('should transiently collapse and re-expand a node via the chevron while filtering', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      filter: 'search',
    });

    // Forced open by the active filter.
    expect(component.isExpanded('root-1')).toBe(true);

    // First click collapses it for the duration of the filter session.
    component.handleExpandToggle(
      new CustomEvent('buttonClick'),
      getNode('root-1')
    );
    await page.waitForChanges();
    expect(component.isExpanded('root-1')).toBe(false);

    // Second click re-expands it.
    component.handleExpandToggle(
      new CustomEvent('buttonClick'),
      getNode('root-1')
    );
    await page.waitForChanges();
    expect(component.isExpanded('root-1')).toBe(true);
  });

  it('should re-force parents open when the filter value changes after a transient collapse', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      filter: 'search',
    });

    component.handleExpandToggle(
      new CustomEvent('buttonClick'),
      getNode('root-1')
    );
    await page.waitForChanges();
    expect(component.isExpanded('root-1')).toBe(false);

    // Changing the filter discards the transient collapse and re-forces open.
    component.filter = 'search index';
    await page.waitForChanges();
    expect(component.isExpanded('root-1')).toBe(true);
  });

  it('should restore the controlled expanded state once the filter is cleared', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      filter: 'search',
    });
    const nodeExpandChange = jest.fn();
    page.root?.addEventListener('nodeExpandChange', nodeExpandChange);

    // Collapse transiently during the filter session.
    component.handleExpandToggle(
      new CustomEvent('buttonClick'),
      getNode('root-1')
    );
    await page.waitForChanges();

    // Clear the filter: persisted expandedNodeIds is untouched, so it stays open.
    component.filter = '';
    await page.waitForChanges();
    expect(component.isFiltering()).toBe(false);
    expect(component.isExpanded('root-1')).toBe(true);
    expect(nodeExpandChange).not.toHaveBeenCalled();
  });

  it('should emit nodeCheckChange for unchecked and checked checkbox clicks in multi-select mode', async () => {
    const { page, component } = await createTreePage({
      selectionMode: 'multiple',
      checkedNodeIds: ['leaf-b1'],
    });
    const nodeCheckChange = jest.fn();
    page.root?.addEventListener('nodeCheckChange', nodeCheckChange);

    component.handleCheckboxChange(
      new CustomEvent('inputChange'),
      getNode('parent-b')
    );
    expect(nodeCheckChange).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'parent-b', checked: true },
      })
    );

    component.handleCheckboxChange(
      new CustomEvent('inputChange'),
      getNode('leaf-b1')
    );
    expect(nodeCheckChange).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'leaf-b1', checked: false },
      })
    );
  });

  it('should derive checked, unchecked, and indeterminate parent checkbox states', async () => {
    const { component: partial } = await createTreePage({
      selectionMode: 'multiple',
      checkedNodeIds: ['leaf-b1'],
    });
    expect(partial.getCheckStateById('parent-b')).toBe('indeterminate');
    expect(partial.getCheckStateById('leaf-a')).toBe('unchecked');

    const { component: full } = await createTreePage({
      selectionMode: 'multiple',
      checkedNodeIds: ['leaf-b1', 'leaf-b2'],
    });
    expect(full.getCheckStateById('parent-b')).toBe('checked');
    expect(full.getCheckStateById('missing')).toBe('unchecked');
  });

  it('should emit transactional menu events and open the delete modal', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
    });
    const nodeEdit = jest.fn();
    const nodeDuplicate = jest.fn();
    const nodeAdd = jest.fn();
    const nodeDelete = jest.fn();
    page.root?.addEventListener('nodeEdit', nodeEdit);
    page.root?.addEventListener('nodeDuplicate', nodeDuplicate);
    page.root?.addEventListener('nodeAdd', nodeAdd);
    page.root?.addEventListener('nodeDelete', nodeDelete);

    const dropdown = page.root!.querySelector(
      'modus-wc-dropdown-menu'
    ) as HTMLElement & { menuVisible?: boolean };
    dropdown.menuVisible = true;
    const menuItem = dropdown.querySelector('modus-wc-menu-item');
    const menuEvent = new CustomEvent('itemSelect', {
      detail: { value: 'edit' },
    });
    Object.defineProperty(menuEvent, 'target', { value: menuItem ?? dropdown });

    const rootNode = getNode('root-1');
    component.onMenuAction(menuEvent, 'edit', rootNode);
    component.onMenuAction(menuEvent, 'duplicate', rootNode);
    component.onMenuAction(menuEvent, 'above', rootNode);
    component.onMenuAction(menuEvent, 'below', rootNode);
    component.onMenuAction(menuEvent, 'child', rootNode);

    expect(nodeEdit).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'root-1' } })
    );
    expect(nodeDuplicate).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'root-1' } })
    );
    expect(nodeAdd).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { referenceId: 'root-1', position: 'above' },
      })
    );
    expect(nodeAdd).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { referenceId: 'root-1', position: 'below' },
      })
    );
    expect(nodeAdd).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { referenceId: 'root-1', position: 'child' },
      })
    );
    expect(dropdown.menuVisible).toBe(false);

    component.onMenuAction(menuEvent, 'delete', rootNode);
    await page.waitForChanges();
    const dialog = page.root!.querySelector('dialog') as HTMLDialogElement & {
      showModal: jest.Mock;
    };
    expect(dialog.showModal).toHaveBeenCalled();

    component.confirmDelete();
    expect(nodeDelete).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'root-1' } })
    );
  });

  it('should close the delete modal without emitting when cancelled', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
    });
    const nodeDelete = jest.fn();
    page.root?.addEventListener('nodeDelete', nodeDelete);

    component.openDeleteConfirm('root-1');
    await page.waitForChanges();

    const noButton = Array.from(
      page.root!.querySelectorAll('modus-wc-button')
    ).find((button) => button.textContent?.trim() === 'No');
    noButton?.dispatchEvent(new CustomEvent('buttonClick', { bubbles: true }));
    await page.waitForChanges();

    expect(nodeDelete).not.toHaveBeenCalled();
  });

  it('should safely close delete confirmation when no dialog is found', async () => {
    const { component } = await createTreePage({
      expandedNodeIds: ['root-1'],
    });
    const querySpy = jest
      .spyOn(component.el, 'querySelector')
      .mockReturnValue(null);

    component.openDeleteConfirm('root-1');
    component.confirmDelete();

    querySpy.mockRestore();
  });

  it('should confirm delete without emitting when no pending id is set', async () => {
    const { page, component } = await createTreePage();
    const nodeDelete = jest.fn();
    page.root?.addEventListener('nodeDelete', nodeDelete);

    component.confirmDelete();

    expect(nodeDelete).not.toHaveBeenCalled();
  });

  it('should not render action menus for disabled or editing nodes', async () => {
    const { page: disabledPage } = await createTreePage({
      expandedNodeIds: ['root-1'],
      selectedNodeId: 'leaf-disabled',
    });
    expect(
      disabledPage.root!.querySelector(
        'modus-wc-tree-item[value="leaf-disabled"] modus-wc-dropdown-menu'
      )
    ).toBeNull();

    const { page: editingPage } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });
    expect(
      editingPage.root!.querySelector(
        'modus-wc-tree-item[value="leaf-a"] modus-wc-dropdown-menu'
      )
    ).toBeNull();
    expect(
      editingPage.root!.querySelector('.modus-wc-content-tree-edit-input')
    ).not.toBeNull();
  });

  it('should initialize, update, commit, and cancel inline edits', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });
    const nodeRename = jest.fn();
    const nodeEditCancel = jest.fn();
    page.root?.addEventListener('nodeRename', nodeRename);
    page.root?.addEventListener('nodeEditCancel', nodeEditCancel);

    const textInput = page.root!.querySelector(
      '.modus-wc-content-tree-edit-input'
    ) as HTMLElement;
    const input = page.root!.querySelector(
      '.modus-wc-content-tree-edit-input input'
    ) as HTMLInputElement;
    input.value = 'Updated Overview';
    textInput.dispatchEvent(
      new CustomEvent('inputChange', {
        detail: { target: input },
        bubbles: true,
      })
    );

    component.commitEdit(getNode('leaf-a'));
    expect(nodeRename).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'leaf-a', label: 'Updated Overview' },
      })
    );

    component.onEditingNodeIdChange('leaf-a');
    component.cancelEdit(getNode('leaf-a'));
    expect(nodeEditCancel).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'leaf-a' } })
    );

    component.onEditingNodeIdChange(undefined);
    component.onEditingNodeIdChange('missing-node');
    component.handleEditInput(new CustomEvent('inputChange'));
    component.onEditingNodeIdChange('leaf-a');
    textInput.dispatchEvent(new FocusEvent('blur'));
    expect(nodeRename).toHaveBeenCalledTimes(1);
  });

  it('should ignore duplicate commit and cancel resolutions in the same edit session', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });
    const nodeRename = jest.fn();
    const nodeEditCancel = jest.fn();
    page.root?.addEventListener('nodeRename', nodeRename);
    page.root?.addEventListener('nodeEditCancel', nodeEditCancel);

    const node = { id: 'leaf-a', label: 'Overview' };
    component.commitEdit(node);
    component.commitEdit(node);
    component.cancelEdit(node);

    expect(nodeRename).toHaveBeenCalledTimes(1);
    expect(nodeEditCancel).not.toHaveBeenCalled();
  });

  it('should coerce JSON string props into arrays', async () => {
    const { component } = await createTreePage();

    component.nodes = '[{"id":"1","label":"One"}]' as unknown as ITreeNode[];
    component.expandedNodeIds = '["1"]' as unknown as string[];
    component.checkedNodeIds = '["1"]' as unknown as string[];

    expect(component.getNodes()).toEqual([{ id: '1', label: 'One' }]);
    expect(component.coerceArray<string>(component.expandedNodeIds)).toEqual([
      '1',
    ]);
    expect(component.coerceArray<string>(component.checkedNodeIds)).toEqual([
      '1',
    ]);
  });

  it('should return empty arrays for invalid or non-array JSON string props', async () => {
    const { component } = await createTreePage();

    expect(component.coerceArray(component.nodes)).toEqual(sampleNodes);
    expect(component.coerceArray('not-json')).toEqual([]);
    expect(component.coerceArray('{bad')).toEqual([]);
    expect(component.coerceArray('{"not":"array"}')).toEqual([]);
    expect(component.coerceArray('   ')).toEqual([]);
    expect(component.coerceArray(undefined)).toEqual([]);
  });

  it('should leave dropdown visibility unchanged when menu actions originate outside a dropdown trigger', async () => {
    const { component } = await createTreePage({ expandedNodeIds: ['root-1'] });
    const nodeEdit = jest.fn();
    component.el.addEventListener('nodeEdit', nodeEdit);

    component.onMenuAction(
      new CustomEvent('itemSelect'),
      'edit',
      getNode('root-1')
    );

    expect(nodeEdit).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'root-1' } })
    );
  });

  it('should not mark a family line when the selected id is outside the tree', async () => {
    const { page, component } = await createTreePage({
      selectedNodeId: 'missing-selection',
    });

    expect(component.getActiveRootId()).toBeUndefined();
    expect(
      page.root?.querySelector('.modus-wc-content-tree-family-active')
    ).toBeNull();
  });

  it('should not mark a family line when nothing is selected', async () => {
    const { component } = await createTreePage();
    expect(component.getActiveRootId()).toBeUndefined();
  });

  it('should render leaf rows without icons and collapsed child menus when collapsed', async () => {
    const { page } = await createTreePage({ expandedNodeIds: [] });

    expect(
      page.root!.querySelector(
        'modus-wc-tree-item[value="root-2"] modus-wc-icon'
      )
    ).toBeNull();
    expect(
      page.root!.querySelector(
        'modus-wc-tree-item[value="root-1"] .modus-wc-content-tree-toggle-spacer'
      )
    ).toBeNull();
    expect(
      page.root!.querySelector(
        'modus-wc-tree-item[value="root-1"] modus-wc-tree-menu'
      )
    ).toBeNull();
  });

  it('should wire rendered child control events through the JSX handlers', async () => {
    const { page } = await createTreePage({
      selectionMode: 'multiple',
      expandedNodeIds: ['root-1', 'parent-b'],
      editingNodeId: 'leaf-a',
    });
    const nodeExpandChange = jest.fn();
    const nodeCheckChange = jest.fn();
    const nodeRename = jest.fn();
    const nodeEdit = jest.fn();
    page.root?.addEventListener('nodeExpandChange', nodeExpandChange);
    page.root?.addEventListener('nodeCheckChange', nodeCheckChange);
    page.root?.addEventListener('nodeRename', nodeRename);
    page.root?.addEventListener('nodeEdit', nodeEdit);

    const rootItem = findTreeItem(page, 'root-1');
    rootItem
      ?.querySelector('modus-wc-button')
      ?.dispatchEvent(
        new CustomEvent('buttonClick', { bubbles: true, composed: true })
      );
    expect(nodeExpandChange).toHaveBeenCalled();

    rootItem
      ?.querySelector('modus-wc-checkbox')
      ?.dispatchEvent(
        new CustomEvent('inputChange', { bubbles: true, composed: true })
      );
    expect(nodeCheckChange).toHaveBeenCalled();

    const textInput = page.root!.querySelector(
      '.modus-wc-content-tree-edit-input'
    ) as HTMLElement;
    textInput.dispatchEvent(
      new CustomEvent('inputBlur', { bubbles: true, composed: true })
    );
    expect(nodeRename).toHaveBeenCalled();

    findTreeItem(page, 'root-2')
      ?.querySelectorAll('modus-wc-menu-item')
      .forEach((item) => {
        item.dispatchEvent(
          new CustomEvent('itemSelect', {
            detail: { value: 'edit' },
            bubbles: true,
            composed: true,
          })
        );
      });
    expect(nodeEdit).toHaveBeenCalled();
  });

  it('should use the new-node aria label when inline editing an empty label', async () => {
    const nodes: ITreeNode[] = [
      { id: 'new-node', label: '', icon: 'folder_closed' },
    ];
    const { page } = await createTreePage({
      nodes,
      editingNodeId: 'new-node',
    });

    const editControl = page.root!.querySelector(
      '.modus-wc-content-tree-edit-input input'
    );

    expect(editControl?.getAttribute('aria-label')).toBe(
      'Edit name for new node'
    );
  });

  it('should use a fallback checkbox aria-label when the node label is empty in multi-select mode', async () => {
    const nodes: ITreeNode[] = [{ id: 'new-node', label: '', icon: 'info' }];
    const { page } = await createTreePage({
      nodes,
      selectionMode: 'multiple',
    });

    const checkbox = findTreeItem(page, 'new-node')?.querySelector(
      'modus-wc-checkbox input'
    );

    expect(checkbox?.getAttribute('aria-label')).toBe('Select node');
  });

  it('should render expanded child menus when a parent is open', async () => {
    const { page } = await createTreePage({ expandedNodeIds: ['root-1'] });

    expect(
      findTreeItem(page, 'root-1')?.querySelector('modus-wc-tree-menu')
    ).not.toBeNull();
  });

  it('should call stopPropagation when child events provide it', async () => {
    const { component } = await createTreePage({ expandedNodeIds: [] });
    const stopPropagation = jest.fn();
    const event = new CustomEvent('buttonClick') as CustomEvent & {
      stopPropagation: () => void;
    };
    event.stopPropagation = stopPropagation;

    component.handleExpandToggle(event, getNode('root-1'));
    component.handleCheckboxChange(event, getNode('leaf-a'));
    component.onMenuAction(event, 'edit', getNode('root-1'));

    expect(stopPropagation).toHaveBeenCalledTimes(3);
  });

  it('should tolerate events without stopPropagation helpers', async () => {
    const { component } = await createTreePage({ expandedNodeIds: [] });
    const bareEvent = {
      detail: { value: 'edit' },
    } as unknown as CustomEvent<{ value: string }>;

    component.handleExpandToggle(bareEvent, getNode('root-1'));
    component.handleCheckboxChange(bareEvent, getNode('leaf-a'));
    component.onMenuAction(bareEvent, 'edit', getNode('root-1'));
  });

  it('should focus, select, and bind keydown on the inline edit input after render', async () => {
    const restoreRaf = mockRaf();
    const { component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });

    const input = document.createElement('input');
    const focusMock = jest.fn();
    const selectMock = jest.fn();
    input.focus = focusMock as typeof input.focus;
    input.select = selectMock as typeof input.select;
    const addEventListenerSpy = jest.spyOn(input, 'addEventListener');
    jest.spyOn(component.el, 'querySelector').mockReturnValue(input);

    component.onEditingNodeIdChange('leaf-a');
    component.componentDidRender();

    expect(focusMock).toHaveBeenCalled();
    expect(selectMock).toHaveBeenCalled();
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'keydown',
      component.handleInputKeyDown
    );

    restoreRaf();
  });

  it('should skip edit focus when there is no pending edit session', async () => {
    const restoreRaf = mockRaf();
    const { component } = await createTreePage();
    (
      globalThis.requestAnimationFrame as jest.MockedFunction<
        typeof globalThis.requestAnimationFrame
      >
    ).mockClear();

    component.componentDidRender();

    expect(globalThis.requestAnimationFrame).not.toHaveBeenCalled();
    restoreRaf();
  });

  it('should tolerate missing edit input during focus setup', async () => {
    const restoreRaf = mockRaf();
    const { component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });

    component.onEditingNodeIdChange('leaf-a');
    jest.spyOn(component.el, 'querySelector').mockReturnValue(null);

    component.componentDidRender();

    restoreRaf();
  });

  it('should commit inline edits when Enter is pressed on the edit input', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });
    const nodeRename = jest.fn();
    page.root?.addEventListener('nodeRename', nodeRename);

    const input = page.root!.querySelector(
      '.modus-wc-content-tree-edit-input input'
    ) as HTMLInputElement;
    input.value = 'Renamed Overview';
    const enterKey = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(enterKey, 'target', { value: input });
    component.handleInputKeyDown(enterKey);

    expect(nodeRename).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'leaf-a', label: 'Renamed Overview' },
      })
    );
  });

  it('should cancel inline edits when Escape is pressed on the edit input', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });
    const nodeEditCancel = jest.fn();
    page.root?.addEventListener('nodeEditCancel', nodeEditCancel);

    component.handleInputKeyDown(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );

    expect(nodeEditCancel).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'leaf-a' } })
    );
  });

  it('should ignore unrelated keys and missing edit state in handleInputKeyDown', async () => {
    const { page, component } = await createTreePage();
    const nodeRename = jest.fn();
    const nodeEditCancel = jest.fn();
    page.root?.addEventListener('nodeRename', nodeRename);
    page.root?.addEventListener('nodeEditCancel', nodeEditCancel);

    component.handleInputKeyDown(new KeyboardEvent('keydown', { key: 'Tab' }));

    component.editingNodeId = 'leaf-a';
    component.handleInputKeyDown(new KeyboardEvent('keydown', { key: 'a' }));

    component.editingNodeId = undefined;
    component.handleInputKeyDown(
      new KeyboardEvent('keydown', { key: 'Enter' })
    );

    component.editingNodeId = 'missing-node';
    component.handleInputKeyDown(
      new KeyboardEvent('keydown', { key: 'Enter' })
    );

    expect(nodeRename).not.toHaveBeenCalled();
    expect(nodeEditCancel).not.toHaveBeenCalled();
  });

  it('should commit using the draft label when Enter target value is missing', async () => {
    const restoreRaf = mockRaf();
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });
    const nodeRename = jest.fn();
    page.root?.addEventListener('nodeRename', nodeRename);

    component.handleEditInput(
      new CustomEvent('inputChange', {
        detail: { target: { value: 'Draft label' } as HTMLInputElement },
      })
    );

    const enterKey = new KeyboardEvent('keydown', { key: 'Enter' });
    Object.defineProperty(enterKey, 'target', {
      value: { value: undefined },
    });
    component.handleInputKeyDown(enterKey);

    expect(nodeRename).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'leaf-a', label: 'Draft label' },
      })
    );
    restoreRaf();
  });

  it('should clear edit focus state when editingNodeId is cleared', async () => {
    const restoreRaf = mockRaf();
    const { component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });

    component.onEditingNodeIdChange(undefined);
    (
      globalThis.requestAnimationFrame as jest.MockedFunction<
        typeof globalThis.requestAnimationFrame
      >
    ).mockClear();
    component.componentDidRender();

    expect(globalThis.requestAnimationFrame).not.toHaveBeenCalled();
    restoreRaf();
  });

  it('should initialize the edit session on initial load when editingNodeId is preset', async () => {
    const restoreRaf = mockRaf();
    const { component } = await createTreePage({
      expandedNodeIds: ['root-1'],
    });

    // @Watch does not fire on initial load. Simulate a fresh mount where the
    // consumer set editingNodeId before load: assign the prop, clear the focus
    // flag the @Watch set, then re-run componentWillLoad.
    component.editingNodeId = 'leaf-a';
    component.editFocusPending = false;
    component.componentWillLoad();

    expect(component.editFocusPending).toBe(true);

    (
      globalThis.requestAnimationFrame as jest.MockedFunction<
        typeof globalThis.requestAnimationFrame
      >
    ).mockClear();
    component.componentDidRender();

    // The session armed by componentWillLoad schedules the input focus.
    expect(globalThis.requestAnimationFrame).toHaveBeenCalled();
    restoreRaf();
  });

  it('should detach inline edit keydown listener on disconnect', async () => {
    const restoreRaf = mockRaf();
    const { component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });

    const input = document.createElement('input');
    input.focus = jest.fn() as typeof input.focus;
    input.select = jest.fn() as typeof input.select;
    const removeEventListenerSpy = jest.spyOn(input, 'removeEventListener');
    jest.spyOn(component.el, 'querySelector').mockReturnValue(input);

    component.onEditingNodeIdChange('leaf-a');
    component.componentDidRender();
    component.disconnectedCallback();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function)
    );
    restoreRaf();
    removeEventListenerSpy.mockRestore();
  });

  it('should safely detach when no inline edit input is bound', async () => {
    const { component } = await createTreePage();

    component.detachInputKeyDown();
    component.disconnectedCallback();
  });
});
