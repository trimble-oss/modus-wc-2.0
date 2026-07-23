/* eslint-disable @typescript-eslint/unbound-method */
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { ModusWcContentTree } from './modus-wc-content-tree';
import {
  collectLeafIds,
  findNode,
  getExpandableNodeIds,
  hasDisabledAncestor,
  isDescendant,
  isLazyUnloaded,
  moveNodeRelative,
  setNodeChecked,
  setNodeDisabled,
  updateNode,
} from './tree-state-manager';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcCheckbox } from '../modus-wc-checkbox/modus-wc-checkbox';
import { ModusWcDropdownMenu } from '../modus-wc-dropdown-menu/modus-wc-dropdown-menu';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { ModusWcLoader } from '../modus-wc-loader/modus-wc-loader';
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
  allowDragDrop?: boolean;
  draggingId?: string;
  pendingMove?: {
    id: string;
    targetId: string;
    position: 'before' | 'after' | 'inside';
  };
  dragOverId?: string;
  dropPosition?: 'before' | 'after' | 'inside';
  springLoadId?: string;
  loadingIds?: Set<string>;
  onNodesChange: () => void;
  handleDragStart: (e: DragEvent, node: ITreeNode) => void;
  handleDragEnter: (e: DragEvent) => void;
  handleDragOver: (e: DragEvent, node: ITreeNode) => void;
  handleDragLeave: (e: DragEvent, node: ITreeNode) => void;
  handleDrop: (e: DragEvent, node: ITreeNode) => void;
  handleDragEnd: () => void;
  copyComputedFontSize: (
    liveRow: HTMLElement,
    ghostRow: HTMLElement,
    selector: string
  ) => void;
  setRowDragImage: (event: DragEvent, node: ITreeNode) => void;
  buildDragGhost: (row: HTMLElement) => HTMLElement;
  clearDropState: () => void;
  clearSpringLoad: () => void;
  isInvalidDropTarget: (node: ITreeNode) => boolean;
  computeDropPosition: (
    e: DragEvent,
    node: ITreeNode
  ) => 'before' | 'after' | 'inside';
  scheduleSpringLoad: (
    node: ITreeNode,
    position: 'before' | 'after' | 'inside'
  ) => void;
  handleExpandToggle: (e: CustomEvent, node: ITreeNode) => void;
  handleCheckboxChange: (e: CustomEvent, node: ITreeNode) => void;
  handleVisibilityToggle: (e: CustomEvent, node: ITreeNode) => void;
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
  getControlButtonSize: () => 'xs' | 'sm' | 'md' | 'lg';
  getSearchInputSize: () => 'xs' | 'sm' | 'md' | 'lg';
  getActionIconSize: () => 'xs' | 'sm' | 'md' | 'lg';
  getCheckboxSize: () => 'sm' | 'md' | 'lg';
  getNodeIconSize: () => 'xs' | 'sm' | 'md' | 'lg';
  toolbar?: { expandCollapse?: boolean; delete?: boolean };
  pendingDeleteIds?: string[];
  hasToolbar: () => boolean;
  hasCheckedSelection: () => boolean;
  isAllExpanded: () => boolean;
  handleExpandAllToggle: () => void;
  handleToolbarDelete: () => void;
  getTopMostCheckedIds: () => string[];
  getDeleteMessage: () => string;
  searchable?: boolean;
  searchQuery: string;
  filterCollapsedIds: Set<string>;
  getActiveFilter: () => string;
  handleSearchInput: (e: CustomEvent) => void;
  handleSearchClear: () => void;
  setSearchQuery: (value: string) => void;
  renderNode: (
    node: ITreeNode,
    activeRootId?: string,
    index?: number,
    ancestorDisabled?: boolean
  ) => unknown;
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
    ModusWcLoader,
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
      icon: { name: 'folder_closed', variant: 'solid' },
      children: [
        {
          id: 'leaf-a',
          label: 'Overview',
          icon: { name: 'info', variant: 'solid' },
        },
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
      allowDragDrop?: boolean;
      toolbar?: { expandCollapse?: boolean; delete?: boolean };
      searchable?: boolean;
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
    if (options.allowDragDrop !== undefined) {
      component.allowDragDrop = options.allowDragDrop;
    }
    if (options.toolbar !== undefined) {
      component.toolbar = options.toolbar;
    }
    if (options.searchable !== undefined) {
      component.searchable = options.searchable;
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

  // A minimal DragEvent stand-in for the drag-and-drop handlers (mock-doc has no
  // real DragEvent). preventDefault/stopPropagation are spies so tests can assert
  // whether the drop was allowed.
  const makeDragEvent = (
    overrides: {
      dataTransfer?: unknown;
      currentTarget?: unknown;
      relatedTarget?: unknown;
      target?: unknown;
      clientX?: number;
      clientY?: number;
    } = {}
  ): DragEvent =>
    ({
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: undefined,
      currentTarget: undefined,
      relatedTarget: undefined,
      target: undefined,
      clientX: 0,
      clientY: 0,
      ...overrides,
    }) as unknown as DragEvent;

  // A fake currentTarget whose `querySelector('.modus-wc-menu-item-interactive')`
  // returns a row element with the given rect (or null when `rect` is null).
  const makeRowHost = (rect: { top: number; height: number } | null) => ({
    querySelector: () => (rect ? { getBoundingClientRect: () => rect } : null),
    contains: () => false,
  });

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

  it('should map tree size to control button, action icon, node icon, and checkbox sizes', async () => {
    const { component } = await createTreePage({ size: 'sm' });

    expect(component.getControlButtonSize()).toBe('xs');
    expect(component.getSearchInputSize()).toBe('sm');
    expect(component.getActionIconSize()).toBe('xs');
    expect(component.getNodeIconSize()).toBe('xs');
    expect(component.getCheckboxSize()).toBe('sm');

    component.size = 'md';
    expect(component.getControlButtonSize()).toBe('xs');
    expect(component.getSearchInputSize()).toBe('sm');
    expect(component.getActionIconSize()).toBe('sm');
    expect(component.getNodeIconSize()).toBe('sm');
    expect(component.getCheckboxSize()).toBe('sm');

    component.size = 'lg';
    expect(component.getControlButtonSize()).toBe('sm');
    expect(component.getSearchInputSize()).toBe('md');
    expect(component.getActionIconSize()).toBe('md');
    expect(component.getNodeIconSize()).toBe('md');
    expect(component.getCheckboxSize()).toBe('md');
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

  it('should emit nodeCheckChange and not nodeSelect when Space activates a row checkbox in multi-select mode', async () => {
    const { page } = await createTreePage({
      selectionMode: 'multiple',
      checkedNodeIds: [],
      expandedNodeIds: ['root-1'],
    });
    const nodeCheckChange = jest.fn();
    const nodeSelect = jest.fn();
    page.root?.addEventListener('nodeCheckChange', nodeCheckChange);
    page.root?.addEventListener('nodeSelect', nodeSelect);

    const checkbox = findTreeItem(page, 'leaf-a')?.querySelector(
      'modus-wc-checkbox'
    ) as HTMLElement;
    const checkboxInput = checkbox?.querySelector('input') as HTMLInputElement;

    checkboxInput.focus();
    checkboxInput.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();
    expect(nodeSelect).not.toHaveBeenCalled();

    // Native Space ends in modus-wc-checkbox inputChange; jsdom does not synthesize it.
    checkbox.dispatchEvent(
      new CustomEvent('inputChange', { bubbles: true, composed: true })
    );
    await page.waitForChanges();

    expect(nodeCheckChange).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'leaf-a', checked: true },
      })
    );
    expect(nodeSelect).not.toHaveBeenCalled();
  });

  it('should not emit nodeCheckChange for disabled row checkboxes', async () => {
    const { page } = await createTreePage({
      selectionMode: 'multiple',
      expandedNodeIds: ['root-1'],
    });
    const nodeCheckChange = jest.fn();
    page.root?.addEventListener('nodeCheckChange', nodeCheckChange);
    const checkboxInput = findTreeItem(page, 'leaf-disabled')?.querySelector(
      'modus-wc-checkbox input'
    ) as HTMLInputElement;

    checkboxInput.click();
    await page.waitForChanges();

    expect(nodeCheckChange).not.toHaveBeenCalled();
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
    (menuItem as HTMLElement & { selected?: boolean }).selected = true;
    component.onMenuAction(menuEvent, 'edit', rootNode);
    expect((menuItem as HTMLElement & { selected?: boolean }).selected).toBe(
      false
    );
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

    const cancelButton = Array.from(
      page.root!.querySelectorAll(
        '.modus-wc-content-tree-modal-footer modus-wc-button'
      )
    ).find((button) => button.textContent?.trim() === 'Cancel');
    cancelButton?.dispatchEvent(
      new CustomEvent('buttonClick', { bubbles: true })
    );
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

  describe('toolbar', () => {
    const getToolbar = (page: SpecPage) =>
      page.root!.querySelector('modus-wc-toolbar');

    // The toolbar buttons are icon-only; modus-wc-button forwards `aria-label`
    // onto its inner <button>, so match on the inner element's accessible name.
    const getToolbarButton = (page: SpecPage, label: string) =>
      Array.from(
        page.root!.querySelectorAll(
          '.modus-wc-content-tree-toolbar-end modus-wc-button'
        )
      ).find((b) =>
        b.querySelector('button')?.getAttribute('aria-label')?.includes(label)
      ) as (HTMLElement & { disabled?: boolean; color?: string }) | undefined;

    const getToolbarIconName = (
      button: (HTMLElement & { disabled?: boolean }) | undefined
    ) =>
      (
        button?.querySelector('modus-wc-icon') as
          | (HTMLElement & { name?: string })
          | null
      )?.name;

    it('should not render a toolbar by default', async () => {
      const { page } = await createTreePage();
      expect(getToolbar(page)).toBeNull();
    });

    it('should not render a toolbar when both controls are disabled', async () => {
      const { page } = await createTreePage({
        toolbar: { expandCollapse: false, delete: false },
      });
      expect(getToolbar(page)).toBeNull();
    });

    it('should render both controls when configured', async () => {
      const { page } = await createTreePage({
        selectionMode: 'multiple',
        toolbar: { expandCollapse: true, delete: true },
      });
      expect(getToolbar(page)).not.toBeNull();
      expect(getToolbarButton(page, 'Expand all')).toBeDefined();
      expect(getToolbarButton(page, 'Delete')).toBeDefined();
    });

    it('should render only the expand/collapse control when delete is off', async () => {
      const { page } = await createTreePage({
        toolbar: { expandCollapse: true },
      });
      expect(getToolbarButton(page, 'Expand all')).toBeDefined();
      expect(getToolbarButton(page, 'Delete')).toBeUndefined();
    });

    it('should omit delete when expand/collapse is on and delete is explicitly false', async () => {
      const { page } = await createTreePage({
        toolbar: { expandCollapse: true, delete: false },
      });
      expect(getToolbar(page)).not.toBeNull();
      expect(getToolbarButton(page, 'Expand all')).toBeDefined();
      expect(getToolbarButton(page, 'Delete')).toBeUndefined();
    });

    it('should render delete alongside search when both controls are enabled', async () => {
      const { page } = await createTreePage({
        searchable: true,
        selectionMode: 'multiple',
        checkedNodeIds: ['leaf-a'],
        toolbar: { delete: true, expandCollapse: true },
      });

      expect(
        page.root!.querySelector('.modus-wc-content-tree-search')
      ).not.toBeNull();
      expect(getToolbarButton(page, 'Delete')?.disabled).toBe(false);
      expect(getToolbarButton(page, 'Expand all')).toBeDefined();
    });

    it('should render only the delete control when expand/collapse is off', async () => {
      const { page } = await createTreePage({
        selectionMode: 'multiple',
        toolbar: { delete: true },
      });
      expect(getToolbarButton(page, 'Expand all')).toBeUndefined();
      expect(getToolbarButton(page, 'Delete')).toBeDefined();
    });

    it('should disable delete when no nodes are checked in multi-select', async () => {
      const { page } = await createTreePage({
        selectionMode: 'multiple',
        toolbar: { delete: true },
      });
      expect(getToolbarButton(page, 'Delete')?.disabled).toBe(true);
    });

    it('should enable delete when nodes are checked in multi-select', async () => {
      const { page } = await createTreePage({
        selectionMode: 'multiple',
        checkedNodeIds: ['leaf-a'],
        toolbar: { delete: true },
      });
      expect(getToolbarButton(page, 'Delete')?.disabled).toBe(false);
    });

    it('should keep delete disabled outside multi-select even with checked ids', async () => {
      const { page } = await createTreePage({
        selectionMode: 'single',
        checkedNodeIds: ['leaf-a'],
        toolbar: { delete: true },
      });
      expect(getToolbarButton(page, 'Delete')?.disabled).toBe(true);
    });

    it('should show the expand-all icon when not everything is open', async () => {
      const { page } = await createTreePage({
        toolbar: { expandCollapse: true },
      });
      expect(getToolbarIconName(getToolbarButton(page, 'Expand all'))).toBe(
        'unfold_more'
      );
    });

    it('should show the collapse-all icon when everything is open', async () => {
      const { page } = await createTreePage({
        expandedNodeIds: getExpandableNodeIds(sampleNodes),
        toolbar: { expandCollapse: true },
      });
      expect(getToolbarIconName(getToolbarButton(page, 'Collapse all'))).toBe(
        'unfold_less'
      );
    });

    it('should emit expandAllChange with expanded true when not all are open', async () => {
      const { page, component } = await createTreePage({
        toolbar: { expandCollapse: true },
      });
      const expandAllChange = jest.fn();
      page.root?.addEventListener('expandAllChange', expandAllChange);

      component.handleExpandAllToggle();

      expect(expandAllChange).toHaveBeenCalledWith(
        expect.objectContaining({ detail: { expanded: true } })
      );
    });

    it('should emit expandAllChange with expanded false when all are open', async () => {
      const { page, component } = await createTreePage({
        expandedNodeIds: getExpandableNodeIds(sampleNodes),
        toolbar: { expandCollapse: true },
      });
      const expandAllChange = jest.fn();
      page.root?.addEventListener('expandAllChange', expandAllChange);

      component.handleExpandAllToggle();

      expect(expandAllChange).toHaveBeenCalledWith(
        expect.objectContaining({ detail: { expanded: false } })
      );
    });

    it('should emit expandAllChange when the toggle button is clicked', async () => {
      const { page } = await createTreePage({
        toolbar: { expandCollapse: true },
      });
      const expandAllChange = jest.fn();
      page.root?.addEventListener('expandAllChange', expandAllChange);

      getToolbarButton(page, 'Expand all')?.dispatchEvent(
        new CustomEvent('buttonClick', { bubbles: true })
      );

      expect(expandAllChange).toHaveBeenCalledWith(
        expect.objectContaining({ detail: { expanded: true } })
      );
    });

    it('should report not-all-expanded when there are no expandable nodes', async () => {
      const { component } = await createTreePage({
        nodes: [{ id: 'a', label: 'A' }],
        toolbar: { expandCollapse: true },
      });
      expect(component.isAllExpanded()).toBe(false);
    });

    it('should confirm and emit nodesDelete with the top-most checked ids', async () => {
      const { page, component } = await createTreePage({
        selectionMode: 'multiple',
        expandedNodeIds: ['root-1', 'parent-b'],
        // A fully-checked parent (parent-b via its leaves) plus a standalone leaf.
        checkedNodeIds: ['leaf-a', 'leaf-b1', 'leaf-b2'],
        toolbar: { delete: true },
      });
      const nodesDelete = jest.fn();
      page.root?.addEventListener('nodesDelete', nodesDelete);

      component.handleToolbarDelete();
      await page.waitForChanges();

      const dialog = page.root!.querySelector('dialog') as HTMLDialogElement & {
        showModal: jest.Mock;
      };
      expect(dialog.showModal).toHaveBeenCalled();
      expect(component.getDeleteMessage()).toBe(
        'Are you sure you want to delete 3 selected items?'
      );

      component.confirmDelete();
      expect(nodesDelete).toHaveBeenCalledWith(
        expect.objectContaining({ detail: { ids: ['leaf-a', 'parent-b'] } })
      );
    });

    it('should not open the confirm modal when nothing is checked', async () => {
      const { page, component } = await createTreePage({
        selectionMode: 'multiple',
        toolbar: { delete: true },
      });
      const nodesDelete = jest.fn();
      page.root?.addEventListener('nodesDelete', nodesDelete);

      component.handleToolbarDelete();
      await page.waitForChanges();

      const dialog = page.root!.querySelector('dialog') as HTMLDialogElement & {
        showModal: jest.Mock;
      };
      expect(dialog.showModal).not.toHaveBeenCalled();
      component.confirmDelete();
      expect(nodesDelete).not.toHaveBeenCalled();
    });

    it('should run the full bulk-delete flow from the toolbar button', async () => {
      const { page, component } = await createTreePage({
        selectionMode: 'multiple',
        checkedNodeIds: ['leaf-a'],
        toolbar: { delete: true },
      });
      const nodesDelete = jest.fn();
      page.root?.addEventListener('nodesDelete', nodesDelete);

      getToolbarButton(page, 'Delete')?.dispatchEvent(
        new CustomEvent('buttonClick', { bubbles: true })
      );
      await page.waitForChanges();
      expect(component.pendingDeleteIds).toEqual(['leaf-a']);

      // Confirm via the modal footer's Delete button (scoped to the modal).
      const confirmButton = Array.from(
        page.root!.querySelectorAll(
          '.modus-wc-content-tree-modal-footer modus-wc-button'
        )
      ).find((b) => b.textContent?.trim() === 'Delete');
      confirmButton?.dispatchEvent(
        new CustomEvent('buttonClick', { bubbles: true })
      );

      expect(nodesDelete).toHaveBeenCalledWith(
        expect.objectContaining({ detail: { ids: ['leaf-a'] } })
      );
    });

    it('should use a singular delete message for a single checked node', async () => {
      const { component } = await createTreePage({
        selectionMode: 'multiple',
        checkedNodeIds: ['leaf-a'],
        toolbar: { delete: true },
      });

      component.handleToolbarDelete();

      expect(component.getDeleteMessage()).toBe(
        'Are you sure you want to delete 1 selected item?'
      );
    });

    it('should count each checked leaf in the bulk delete message', async () => {
      const { component } = await createTreePage({
        selectionMode: 'multiple',
        expandedNodeIds: ['root-1', 'parent-b'],
        checkedNodeIds: ['leaf-b1', 'leaf-b2'],
        toolbar: { delete: true },
      });

      component.handleToolbarDelete();

      expect(component.getDeleteMessage()).toBe(
        'Are you sure you want to delete 2 selected items?'
      );
      expect(component.getTopMostCheckedIds()).toEqual(['parent-b']);
    });

    it('should clear the bulk selection when the single-delete flow starts', async () => {
      const { component } = await createTreePage({
        selectionMode: 'multiple',
        checkedNodeIds: ['leaf-a'],
        toolbar: { delete: true },
      });

      component.handleToolbarDelete();
      expect(component.pendingDeleteIds).toEqual(['leaf-a']);

      component.openDeleteConfirm('root-2');
      expect(component.pendingDeleteIds).toBeUndefined();
    });

    it('should tolerate bulk delete when the confirm dialog is missing', async () => {
      const { page, component } = await createTreePage({
        selectionMode: 'multiple',
        checkedNodeIds: ['leaf-a'],
        toolbar: { delete: true },
      });
      page.root!.querySelector('dialog')?.remove();

      expect(() => component.handleToolbarDelete()).not.toThrow();
      expect(component.pendingDeleteIds).toEqual(['leaf-a']);
    });

    it('should compute top-most checked ids without duplicating descendants', async () => {
      const { component } = await createTreePage({
        selectionMode: 'multiple',
        checkedNodeIds: ['leaf-b1', 'leaf-b2'],
      });

      // parent-b becomes fully checked, so only it is returned (not its leaves).
      expect(component.getTopMostCheckedIds()).toEqual(['parent-b']);
    });

    it('should render the delete button before the expand/collapse button', async () => {
      const { page } = await createTreePage({
        selectionMode: 'multiple',
        toolbar: { expandCollapse: true, delete: true },
      });

      const labels = Array.from(
        page.root!.querySelectorAll(
          '.modus-wc-content-tree-toolbar-end modus-wc-button'
        )
      ).map((b) => b.querySelector('button')?.getAttribute('aria-label'));
      expect(labels[0]).toBe('Delete selected');
      expect(labels[1]).toBe('Expand all');
    });

    it('should render the delete button in the neutral tertiary color', async () => {
      const { page } = await createTreePage({
        selectionMode: 'multiple',
        checkedNodeIds: ['leaf-a'],
        toolbar: { delete: true },
      });

      expect(getToolbarButton(page, 'Delete')?.color).toBe('tertiary');
    });
  });

  describe('search', () => {
    const getSearch = (page: SpecPage) =>
      page.root!.querySelector('modus-wc-text-input');

    it('should not render the search box by default', async () => {
      const { page } = await createTreePage();
      expect(getSearch(page)).toBeNull();
    });

    it('should render the search box when searchable', async () => {
      const { page } = await createTreePage({ searchable: true });
      expect(getSearch(page)).not.toBeNull();
    });

    it('should render the controls container for search even without a toolbar', async () => {
      const { page } = await createTreePage({ searchable: true });
      expect(
        page.root!.querySelector('.modus-wc-content-tree-controls')
      ).not.toBeNull();
      expect(page.root!.querySelector('modus-wc-toolbar')).toBeNull();
    });

    it('should filter the tree internally when the search box changes', async () => {
      const { page, component } = await createTreePage({
        searchable: true,
        expandedNodeIds: ['root-1', 'parent-b'],
      });

      component.handleSearchInput(
        new CustomEvent('inputChange', {
          detail: { target: { value: 'Overview' } },
        })
      );
      await page.waitForChanges();

      expect(component.searchQuery).toBe('Overview');
      expect(component.getActiveFilter()).toBe('Overview');

      const rendered = component.getRenderNodes();
      expect(rendered).toHaveLength(1);
      expect(rendered[0].id).toBe('root-1');
      expect(rendered[0].children?.map((c) => c.id)).toEqual(['leaf-a']);
    });

    it('should tolerate a search input event without detail', async () => {
      const { component } = await createTreePage({ searchable: true });
      component.setSearchQuery('Settings');

      component.handleSearchInput(new CustomEvent('inputChange'));

      expect(component.searchQuery).toBe('');
    });

    it('should tolerate a search input event without a target value', async () => {
      const { component } = await createTreePage({ searchable: true });

      component.handleSearchInput(
        new CustomEvent('inputChange', {
          detail: { target: {} as HTMLInputElement },
        })
      );

      expect(component.searchQuery).toBe('');
    });

    it('should update the search query from the rendered search input', async () => {
      const { page, component } = await createTreePage({ searchable: true });

      page.root!.querySelector('.modus-wc-content-tree-search')?.dispatchEvent(
        new CustomEvent('inputChange', {
          bubbles: true,
          detail: { target: { value: 'Settings' } },
        })
      );

      expect(component.searchQuery).toBe('Settings');
    });

    it('should clear the internal filter via the clear handler', async () => {
      const { page, component } = await createTreePage({ searchable: true });

      component.setSearchQuery('Settings');
      await page.waitForChanges();
      expect(component.isFiltering()).toBe(true);

      component.handleSearchClear();
      await page.waitForChanges();
      expect(component.searchQuery).toBe('');
      expect(component.isFiltering()).toBe(false);
    });

    it('should seed the search box from the initial filter value', async () => {
      const page = await newSpecPage({
        components: contentTreeComponents,
        html: '<modus-wc-content-tree aria-label="Content tree" searchable filter="Overview"></modus-wc-content-tree>',
      });
      const component = asHarness(page.rootInstance as ModusWcContentTree);
      component.nodes = sampleNodes;
      await page.waitForChanges();

      expect(component.searchQuery).toBe('Overview');
    });

    it('should use the controlled filter prop when not searchable', async () => {
      const { component } = await createTreePage({ filter: 'Settings' });
      expect(component.getActiveFilter()).toBe('Settings');
      expect(component.isFiltering()).toBe(true);
    });

    it('should ignore a search update that does not change the query', async () => {
      const { component } = await createTreePage({ searchable: true });

      component.setSearchQuery('abc');
      component.setSearchQuery('abc');

      expect(component.searchQuery).toBe('abc');
    });

    it('should reset transient collapses when the search query changes', async () => {
      const { component, page } = await createTreePage({ searchable: true });
      component.filterCollapsedIds = new Set(['root-1']);

      component.setSearchQuery('Settings');
      await page.waitForChanges();

      expect(component.filterCollapsedIds.size).toBe(0);
    });

    it('should default the active filter when filter is undefined and not searchable', async () => {
      const { component } = await createTreePage();
      component.filter = undefined;
      component.searchable = false;

      expect(component.getActiveFilter()).toBe('');
    });

    it('should default the active filter when search query is undefined and searchable', async () => {
      const { component } = await createTreePage({ searchable: true });
      component.searchQuery = undefined as unknown as string;

      expect(component.getActiveFilter()).toBe('');
    });

    it('should default search query on load when filter is undefined', async () => {
      const page = await newSpecPage({
        components: contentTreeComponents,
        html: '<modus-wc-content-tree aria-label="Content tree" searchable></modus-wc-content-tree>',
      });
      const component = asHarness(page.rootInstance as ModusWcContentTree);
      component.filter = undefined;
      component.componentWillLoad();

      expect(component.searchQuery).toBe('');
    });
  });

  describe('visibility toggle', () => {
    type VisibilityButtonEl = HTMLElement & { disabled?: boolean };

    const getVisibilityButton = (
      page: SpecPage,
      value: string
    ): VisibilityButtonEl | null => {
      const el = findTreeItem(page, value)?.querySelector(
        '.modus-wc-content-tree-visibility'
      );
      if (!(el instanceof HTMLElement)) return null;
      return el;
    };

    const getIconName = (button: VisibilityButtonEl | null) =>
      (
        button?.querySelector('modus-wc-icon') as
          | (HTMLElement & { name?: string })
          | null
      )?.name;

    it('should render an eye toggle showing visibility_on for an enabled node', async () => {
      const { page } = await createTreePage({ expandedNodeIds: ['root-1'] });
      expect(getIconName(getVisibilityButton(page, 'leaf-a'))).toBe(
        'visibility_on'
      );
    });

    it('should render the eye toggle showing visibility_off for a disabled node', async () => {
      const { page } = await createTreePage({ expandedNodeIds: ['root-1'] });
      expect(getIconName(getVisibilityButton(page, 'leaf-disabled'))).toBe(
        'visibility_off'
      );
    });

    it('should keep the eye toggle but hide the ellipsis menu on a disabled node', async () => {
      const { page } = await createTreePage({ expandedNodeIds: ['root-1'] });
      expect(getVisibilityButton(page, 'leaf-disabled')).not.toBeNull();
      expect(
        findTreeItem(page, 'leaf-disabled')?.querySelector(
          'modus-wc-dropdown-menu'
        )
      ).toBeNull();
    });

    it('should render the eye toggle before the ellipsis menu', async () => {
      const { page } = await createTreePage({ expandedNodeIds: ['root-1'] });
      const actions = findTreeItem(page, 'leaf-a')!.querySelector(
        '.modus-wc-content-tree-actions'
      )!;
      expect(
        actions.children[0].classList.contains(
          'modus-wc-content-tree-visibility'
        )
      ).toBe(true);
      expect(actions.children[1].tagName.toLowerCase()).toBe(
        'modus-wc-dropdown-menu'
      );
    });

    it('should emit nodeVisibilityChange with disabled true when disabling an enabled node', async () => {
      const { page, component } = await createTreePage();
      const nodeVisibilityChange = jest.fn();
      page.root?.addEventListener('nodeVisibilityChange', nodeVisibilityChange);

      component.handleVisibilityToggle(
        { stopPropagation: jest.fn() } as unknown as CustomEvent,
        getNode('leaf-a')
      );

      expect(nodeVisibilityChange).toHaveBeenCalledWith(
        expect.objectContaining({ detail: { id: 'leaf-a', disabled: true } })
      );
    });

    it('should emit nodeVisibilityChange with disabled false when enabling a disabled node', async () => {
      const { page, component } = await createTreePage();
      const nodeVisibilityChange = jest.fn();
      page.root?.addEventListener('nodeVisibilityChange', nodeVisibilityChange);

      component.handleVisibilityToggle(
        { stopPropagation: jest.fn() } as unknown as CustomEvent,
        getNode('leaf-disabled')
      );

      expect(nodeVisibilityChange).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { id: 'leaf-disabled', disabled: false },
        })
      );
    });

    it('should emit nodeVisibilityChange when the rendered eye toggle is clicked', async () => {
      const { page } = await createTreePage({ expandedNodeIds: ['root-1'] });
      const nodeVisibilityChange = jest.fn();
      page.root?.addEventListener('nodeVisibilityChange', nodeVisibilityChange);

      getVisibilityButton(page, 'leaf-a')?.dispatchEvent(
        new CustomEvent('buttonClick', { bubbles: true })
      );

      expect(nodeVisibilityChange).toHaveBeenCalledWith(
        expect.objectContaining({ detail: { id: 'leaf-a', disabled: true } })
      );
    });

    const getActions = (page: SpecPage, value: string) =>
      findTreeItem(page, value)?.querySelector(
        '.modus-wc-content-tree-actions'
      ) as HTMLElement | null;

    it('should mark the top-most locked node as the lock owner with an interactive eye', async () => {
      const { page } = await createTreePage({
        nodes: setNodeDisabled(sampleNodes, 'root-1', true),
        expandedNodeIds: ['root-1'],
      });
      const actions = getActions(page, 'root-1');
      expect(
        actions?.classList.contains('modus-wc-content-tree-lock-owner')
      ).toBe(true);
      // The owner's eye stays interactive so it can be unlocked.
      expect(getVisibilityButton(page, 'root-1')?.disabled).toBeFalsy();
    });

    it('should render a locked descendant as effectively disabled with a non-interactive eye', async () => {
      const { page } = await createTreePage({
        nodes: setNodeDisabled(sampleNodes, 'root-1', true),
        expandedNodeIds: ['root-1'],
      });
      // The child inherits the lock: eye shows the locked icon, is disabled, and
      // is not a lock owner; its ellipsis menu is hidden.
      expect(getIconName(getVisibilityButton(page, 'leaf-a'))).toBe(
        'visibility_off'
      );
      expect(getVisibilityButton(page, 'leaf-a')?.disabled).toBe(true);
      expect(
        getActions(page, 'leaf-a')?.classList.contains(
          'modus-wc-content-tree-lock-owner'
        )
      ).toBe(false);
      expect(
        findTreeItem(page, 'leaf-a')?.querySelector('modus-wc-dropdown-menu')
      ).toBeNull();
    });

    it('should not emit nodeVisibilityChange for a node whose ancestor is locked', async () => {
      const { page, component } = await createTreePage({
        nodes: setNodeDisabled(sampleNodes, 'root-1', true),
        expandedNodeIds: ['root-1'],
      });
      const nodeVisibilityChange = jest.fn();
      page.root?.addEventListener('nodeVisibilityChange', nodeVisibilityChange);

      component.handleVisibilityToggle(
        { stopPropagation: jest.fn() } as unknown as CustomEvent,
        getNode('leaf-a')
      );

      expect(nodeVisibilityChange).not.toHaveBeenCalled();
    });
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
    expect(nodeRename).toHaveBeenCalledTimes(1);
  });

  it('should emit nodeEditCancel when committing an unchanged inline edit', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });
    const nodeRename = jest.fn();
    const nodeEditCancel = jest.fn();
    page.root?.addEventListener('nodeRename', nodeRename);
    page.root?.addEventListener('nodeEditCancel', nodeEditCancel);

    component.commitEdit(getNode('leaf-a'));

    expect(nodeRename).not.toHaveBeenCalled();
    expect(nodeEditCancel).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'leaf-a' } })
    );
  });

  it('should emit nodeEditCancel when Enter is pressed without changing the label', async () => {
    const { page, component } = await createTreePage({
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });
    const nodeRename = jest.fn();
    const nodeEditCancel = jest.fn();
    page.root?.addEventListener('nodeRename', nodeRename);
    page.root?.addEventListener('nodeEditCancel', nodeEditCancel);

    const input = page.root!.querySelector(
      '.modus-wc-content-tree-edit-input input'
    ) as HTMLInputElement;
    const enterKey = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(enterKey, 'target', { value: input });
    component.handleInputKeyDown(enterKey);

    expect(nodeRename).not.toHaveBeenCalled();
    expect(nodeEditCancel).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'leaf-a' } })
    );
  });

  it('should emit nodeEditCancel when the edit input blurs without changing the label', async () => {
    const { page } = await createTreePage({
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
    textInput.dispatchEvent(
      new CustomEvent('inputBlur', { bubbles: true, composed: true })
    );

    expect(nodeRename).not.toHaveBeenCalled();
    expect(nodeEditCancel).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'leaf-a' } })
    );
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

    expect(nodeRename).not.toHaveBeenCalled();
    expect(nodeEditCancel).toHaveBeenCalledTimes(1);
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
    const nodeEditCancel = jest.fn();
    const nodeEdit = jest.fn();
    page.root?.addEventListener('nodeExpandChange', nodeExpandChange);
    page.root?.addEventListener('nodeCheckChange', nodeCheckChange);
    page.root?.addEventListener('nodeRename', nodeRename);
    page.root?.addEventListener('nodeEditCancel', nodeEditCancel);
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
    expect(nodeRename).not.toHaveBeenCalled();
    expect(nodeEditCancel).toHaveBeenCalled();

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
      {
        id: 'new-node',
        label: '',
        icon: { name: 'folder_closed', variant: 'solid' },
      },
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
    const nodes: ITreeNode[] = [
      { id: 'new-node', label: '', icon: { name: 'info', variant: 'solid' } },
    ];
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
    component.handleVisibilityToggle(bareEvent, getNode('leaf-a'));
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
    const querySpy = jest.spyOn(component.el, 'querySelector');
    (
      globalThis.requestAnimationFrame as jest.MockedFunction<
        typeof globalThis.requestAnimationFrame
      >
    ).mockClear();

    component.componentDidRender();

    // Drag-handle re-sync is skipped when drag-drop is off; edit focus must not run.
    expect(globalThis.requestAnimationFrame).not.toHaveBeenCalled();
    expect(querySpy).not.toHaveBeenCalledWith(
      '.modus-wc-content-tree-edit-input input'
    );
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

  it('should stop propagation for non-commit keys (e.g. Space) while editing so the tree-item cannot swallow them', async () => {
    const { component } = await createTreePage();
    component.editingNodeId = 'leaf-a';

    const spaceKey = new KeyboardEvent('keydown', { key: ' ' });
    const stopPropagation = jest.spyOn(spaceKey, 'stopPropagation');
    const preventDefault = jest.spyOn(spaceKey, 'preventDefault');

    component.handleInputKeyDown(spaceKey);

    expect(stopPropagation).toHaveBeenCalled();
    expect(preventDefault).not.toHaveBeenCalled();
  });

  it('should not stop propagation when no node is being edited', async () => {
    const { component } = await createTreePage();
    component.editingNodeId = undefined;

    const spaceKey = new KeyboardEvent('keydown', { key: ' ' });
    const stopPropagation = jest.spyOn(spaceKey, 'stopPropagation');

    component.handleInputKeyDown(spaceKey);

    expect(stopPropagation).not.toHaveBeenCalled();
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
    const querySpy = jest.spyOn(component.el, 'querySelector');
    (
      globalThis.requestAnimationFrame as jest.MockedFunction<
        typeof globalThis.requestAnimationFrame
      >
    ).mockClear();
    component.componentDidRender();

    // Drag-handle re-sync is skipped when drag-drop is off; cleared edit sessions do not.
    expect(globalThis.requestAnimationFrame).not.toHaveBeenCalled();
    expect(component.editFocusPending).toBe(false);
    expect(querySpy).not.toHaveBeenCalledWith(
      '.modus-wc-content-tree-edit-input input'
    );
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

  it('should collect every expandable node id for expand all / collapse all', () => {
    expect(getExpandableNodeIds(sampleNodes)).toEqual(['root-1', 'parent-b']);
    expect(getExpandableNodeIds([{ id: 'leaf', label: 'Leaf' }])).toEqual([]);
    expect(getExpandableNodeIds([])).toEqual([]);
  });

  it('should include lazy expandable nodes in getExpandableNodeIds', () => {
    const lazyNodes: ITreeNode[] = [
      { id: 'lazy-parent', label: 'Lazy', hasChildren: true },
      {
        id: 'loaded-parent',
        label: 'Loaded',
        children: [{ id: 'child', label: 'Child' }],
      },
      { id: 'leaf', label: 'Leaf' },
    ];

    expect(getExpandableNodeIds(lazyNodes)).toEqual([
      'lazy-parent',
      'loaded-parent',
    ]);
  });

  it('should leave collectLeafIds empty for lazy unloaded nodes', () => {
    expect(
      collectLeafIds({ id: 'lazy', label: 'Lazy', hasChildren: true })
    ).toEqual([]);
    expect(
      collectLeafIds({
        id: 'loaded',
        label: 'Loaded',
        children: [{ id: 'child', label: 'Child' }],
      })
    ).toEqual(['child']);
  });

  it('should not check lazy unloaded nodes via setNodeChecked', () => {
    const nodes: ITreeNode[] = [
      { id: 'lazy', label: 'Lazy', hasChildren: true },
    ];

    expect(setNodeChecked(nodes, [], 'lazy', true)).toEqual([]);
  });

  it('should return the same tree reference from updateNode when the id is missing', () => {
    expect(updateNode(sampleNodes, 'missing', { label: 'Nope' })).toBe(
      sampleNodes
    );
  });

  // --- Drag & drop: state-manager helpers ---

  it('isDescendant identifies self, descendants, and unrelated nodes', () => {
    expect(isDescendant(sampleNodes, 'root-1', 'root-1')).toBe(true);
    expect(isDescendant(sampleNodes, 'root-1', 'leaf-b1')).toBe(true);
    expect(isDescendant(sampleNodes, 'root-1', 'root-2')).toBe(false);
    // Ancestor is a leaf (no children).
    expect(isDescendant(sampleNodes, 'leaf-a', 'leaf-b1')).toBe(false);
    // Ancestor id is not in the tree.
    expect(isDescendant(sampleNodes, 'missing', 'root-1')).toBe(false);
  });

  it('moveNodeRelative reorders before/after siblings and nests inside', () => {
    const before: ITreeNode[] = moveNodeRelative(
      sampleNodes,
      'root-2',
      'root-1',
      'before'
    );
    expect(before.map((n) => n.id)).toEqual(['root-2', 'root-1']);

    const beforeSibling: ITreeNode[] = moveNodeRelative(
      sampleNodes,
      'leaf-a',
      'parent-b',
      'before'
    );
    expect(
      findNode(beforeSibling, 'root-1')!.children!.map((c) => c.id)
    ).toEqual(['leaf-disabled', 'leaf-a', 'parent-b']);

    const afterSibling: ITreeNode[] = moveNodeRelative(
      sampleNodes,
      'leaf-a',
      'parent-b',
      'after'
    );
    expect(
      findNode(afterSibling, 'root-1')!.children!.map((c) => c.id)
    ).toEqual(['leaf-disabled', 'parent-b', 'leaf-a']);

    const inside: ITreeNode[] = moveNodeRelative(
      sampleNodes,
      'root-2',
      'parent-b',
      'inside'
    );
    expect(findNode(inside, 'parent-b')!.children!.map((c) => c.id)).toEqual([
      'root-2',
      'leaf-b1',
      'leaf-b2',
    ]);
  });

  it('moveNodeRelative rejects invalid moves and returns the input unchanged', () => {
    expect(moveNodeRelative(sampleNodes, 'root-1', 'root-1', 'before')).toBe(
      sampleNodes
    );
    expect(moveNodeRelative(sampleNodes, 'missing', 'root-1', 'before')).toBe(
      sampleNodes
    );
    expect(moveNodeRelative(sampleNodes, 'root-1', 'missing', 'before')).toBe(
      sampleNodes
    );
    // Cannot drop a node into its own subtree.
    expect(moveNodeRelative(sampleNodes, 'root-1', 'leaf-b1', 'before')).toBe(
      sampleNodes
    );
  });

  // --- Visibility / lock: state-manager helpers ---

  it('setNodeDisabled sets only the target node and does not cascade to descendants', () => {
    const disabled: ITreeNode[] = setNodeDisabled(sampleNodes, 'root-1', true);
    expect(findNode(disabled, 'root-1')!.disabled).toBe(true);
    // Descendants keep their OWN state (inheritance is applied at render time).
    expect(findNode(disabled, 'leaf-a')!.disabled).toBeFalsy();
    expect(findNode(disabled, 'parent-b')!.disabled).toBeFalsy();
    // A node outside the subtree is untouched.
    expect(findNode(disabled, 'root-2')!.disabled).toBeFalsy();
  });

  it('setNodeDisabled preserves a descendant lock when a parent is unlocked and does not mutate input', () => {
    // Lock the parent while a child (leaf-disabled) is already locked.
    const locked: ITreeNode[] = setNodeDisabled(sampleNodes, 'root-1', true);
    // Unlocking the parent leaves the child's own lock intact.
    const unlocked: ITreeNode[] = setNodeDisabled(locked, 'root-1', false);
    expect(findNode(unlocked, 'root-1')!.disabled).toBe(false);
    expect(findNode(unlocked, 'leaf-disabled')!.disabled).toBe(true);
    // The original tree is unchanged.
    expect(findNode(sampleNodes, 'root-1')!.disabled).toBeFalsy();
  });

  it('hasDisabledAncestor detects a locked ancestor and ignores the node itself', () => {
    const locked = setNodeDisabled(sampleNodes, 'root-1', true);
    // leaf-a has a locked ancestor (root-1).
    expect(hasDisabledAncestor(locked, 'leaf-a')).toBe(true);
    expect(hasDisabledAncestor(locked, 'leaf-b1')).toBe(true);
    // root-1 is locked itself but has no locked ancestor.
    expect(hasDisabledAncestor(locked, 'root-1')).toBe(false);
    // Unrelated node.
    expect(hasDisabledAncestor(locked, 'root-2')).toBe(false);
    // Missing node.
    expect(hasDisabledAncestor(locked, 'missing')).toBe(false);
  });

  // --- Drag & drop: component handlers ---

  it('should skip deferred drag-handle sync when drag-drop is turned off before the next frame', async () => {
    const origRaf = globalThis.requestAnimationFrame;
    const deferred: FrameRequestCallback[] = [];
    globalThis.requestAnimationFrame = jest.fn((cb: FrameRequestCallback) => {
      deferred.push(cb);
      return deferred.length;
    });

    try {
      const { component } = await createTreePage({ allowDragDrop: true });
      component.componentDidRender();
      component.allowDragDrop = false;
      deferred.forEach((cb) => cb(0));
    } finally {
      globalThis.requestAnimationFrame = origRaf;
    }
  });

  it('should set the dragging id and drag data on drag start', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });
    const setData = jest.fn();
    const setDragImage = jest.fn();
    const e = makeDragEvent({
      dataTransfer: { setData, effectAllowed: '', setDragImage },
    });

    component.handleDragStart(e, getNode('leaf-a'));

    expect(component.draggingId).toBe('leaf-a');
    expect(setData).toHaveBeenCalledWith('text/plain', 'leaf-a');
    expect((e.dataTransfer as DataTransfer).effectAllowed).toBe('move');
  });

  it('should set a full-row drag image on drag start', async () => {
    const { page, component } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: ['root-1'],
    });
    const setDragImage = jest.fn<void, [Element, number, number]>();
    const treeItem = findTreeItem(page, 'leaf-a')!;
    const row = treeItem.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    jest.spyOn(row, 'getBoundingClientRect').mockReturnValue({
      top: 40,
      left: 10,
      width: 200,
      height: 32,
      right: 210,
      bottom: 72,
      x: 10,
      y: 40,
      toJSON: () => ({}),
    });
    const dragHandle = treeItem.querySelector(
      'modus-wc-button.modus-wc-content-tree-drag-handle button'
    ) as HTMLButtonElement;

    component.handleDragStart(
      makeDragEvent({
        dataTransfer: {
          setData: jest.fn(),
          effectAllowed: '',
          setDragImage,
        },
        target: dragHandle,
        clientX: 25,
        clientY: 52,
      }),
      getNode('leaf-a')
    );

    expect(setDragImage).toHaveBeenCalledTimes(1);
    const [ghost, offsetX, offsetY] = setDragImage.mock.calls[0];
    expect(ghost?.nodeType).toBe(1);
    expect(ghost.classList.contains('modus-wc-content-tree-drag-ghost')).toBe(
      true
    );
    expect(
      ghost.querySelector('.modus-wc-content-tree-drag-handle')
    ).not.toBeNull();
    expect(ghost.querySelector('.modus-wc-content-tree-actions')).toBeNull();
    expect(offsetX).toBe(15);
    expect(offsetY).toBe(12);
    expect(document.body.contains(ghost)).toBe(true);

    component.handleDragEnd();
    expect(document.body.contains(ghost)).toBe(false);
  });

  it('should copy the live row computed font size onto the matching ghost element', async () => {
    const { page, component } = await createTreePage({ allowDragDrop: true });
    const liveRow = page.doc.createElement('div');
    const liveLabel = page.doc.createElement('div');
    liveLabel.className = 'modus-wc-menu-item-labels';
    liveRow.appendChild(liveLabel);

    const ghostRow = page.doc.createElement('div');
    const ghostLabel = page.doc.createElement('div');
    ghostLabel.className = 'modus-wc-menu-item-labels';
    ghostRow.appendChild(ghostLabel);

    const getComputedStyleSpy = jest.spyOn(window, 'getComputedStyle');

    component.copyComputedFontSize(
      liveRow,
      ghostRow,
      '.modus-wc-menu-item-labels'
    );

    // The test environment's getComputedStyle stub reports no font size, but
    // this confirms both matched elements were resolved and the copy ran.
    expect(getComputedStyleSpy).toHaveBeenCalledWith(liveLabel);
    expect(ghostLabel.style.fontSize).toBe('');
    expect(ghostLabel.style.lineHeight).toBe('');

    getComputedStyleSpy.mockRestore();
  });

  it('should not copy a font size when the selector matches on neither row', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });
    const liveRow = document.createElement('div');
    const ghostRow = document.createElement('div');

    expect(() =>
      component.copyComputedFontSize(
        liveRow,
        ghostRow,
        '.modus-wc-menu-item-sublabel'
      )
    ).not.toThrow();
  });

  it('should not copy a font size when the ghost row has no matching element', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });
    const liveRow = document.createElement('div');
    const liveLabel = document.createElement('div');
    liveLabel.className = 'modus-wc-menu-item-sublabel';
    liveRow.appendChild(liveLabel);
    const ghostRow = document.createElement('div');

    expect(() =>
      component.copyComputedFontSize(
        liveRow,
        ghostRow,
        '.modus-wc-menu-item-sublabel'
      )
    ).not.toThrow();
  });

  it('should skip setting a drag image when the drag event has no dataTransfer', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });

    expect(() =>
      component.setRowDragImage(makeDragEvent(), getNode('leaf-a'))
    ).not.toThrow();
  });

  it('should build a drag ghost even when the row has no actions element', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });
    const row = document.createElement('div');
    row.textContent = 'Plain row';

    const ghost = component.buildDragGhost(row);

    expect(ghost.classList.contains('modus-wc-content-tree-drag-ghost')).toBe(
      true
    );
  });

  it('should skip the drag image when the row chrome cannot be resolved', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });
    const setDragImage = jest.fn();

    component.handleDragStart(
      makeDragEvent({
        dataTransfer: {
          setData: jest.fn(),
          effectAllowed: '',
          setDragImage,
        },
        target: document.createElement('span'),
      }),
      { id: 'missing-node', label: 'Missing' }
    );

    expect(setDragImage).not.toHaveBeenCalled();
  });

  it('should tolerate a missing setDragImage on drag start', async () => {
    const { page, component } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: ['root-1'],
    });
    const treeItem = findTreeItem(page, 'leaf-a')!;
    const dragHandle = treeItem.querySelector(
      'modus-wc-button.modus-wc-content-tree-drag-handle button'
    ) as HTMLButtonElement;

    component.handleDragStart(
      makeDragEvent({
        dataTransfer: { setData: jest.fn(), effectAllowed: '' },
        target: dragHandle,
      }),
      getNode('leaf-a')
    );

    expect(component.draggingId).toBe('leaf-a');
    expect(
      document.querySelector('.modus-wc-content-tree-drag-ghost')
    ).toBeNull();
  });

  it('should tolerate a missing dataTransfer on drag start', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });

    component.handleDragStart(makeDragEvent(), getNode('leaf-a'));

    expect(component.draggingId).toBe('leaf-a');
  });

  it('should ignore drag start for disabled nodes and when drag-drop is off', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });

    component.handleDragStart(makeDragEvent(), getNode('leaf-disabled'));
    expect(component.draggingId).toBeUndefined();

    component.allowDragDrop = false;
    component.handleDragStart(makeDragEvent(), getNode('leaf-a'));
    expect(component.draggingId).toBeUndefined();
  });

  it('should allow a drop on drag enter only while actively dragging', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });

    const disabled = makeDragEvent();
    component.allowDragDrop = false;
    component.handleDragEnter(disabled);
    expect(disabled.preventDefault).not.toHaveBeenCalled();

    component.allowDragDrop = true;
    const notDragging = makeDragEvent();
    component.draggingId = undefined;
    component.handleDragEnter(notDragging);
    expect(notDragging.preventDefault).not.toHaveBeenCalled();

    component.draggingId = 'leaf-a';
    const dragging = makeDragEvent();
    component.handleDragEnter(dragging);
    expect(dragging.preventDefault).toHaveBeenCalled();
    expect(dragging.stopPropagation).toHaveBeenCalled();
  });

  it('should mark a valid drop target with the computed position on drag over', async () => {
    const { component } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: ['root-1', 'parent-b'],
    });
    component.handleDragStart(
      makeDragEvent({ dataTransfer: { setData: jest.fn() } }),
      getNode('leaf-a')
    );

    const dataTransfer = { dropEffect: '' };
    const e = makeDragEvent({
      currentTarget: makeRowHost({ top: 0, height: 100 }),
      clientY: 10,
      dataTransfer,
    });
    component.handleDragOver(e, getNode('root-2'));

    expect(e.preventDefault).toHaveBeenCalled();
    expect(dataTransfer.dropEffect).toBe('move');
    expect(component.dragOverId).toBe('root-2');
    expect(component.dropPosition).toBe('before');
  });

  it('should clear drop state over an invalid target (and without a dataTransfer)', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });
    component.handleDragStart(makeDragEvent(), getNode('root-1'));

    component.handleDragOver(
      makeDragEvent({
        currentTarget: makeRowHost({ top: 0, height: 100 }),
        clientY: 10,
      }),
      getNode('root-1')
    );

    expect(component.dragOverId).toBeUndefined();
    expect(component.dropPosition).toBeUndefined();
  });

  it('should return early from drag over when not dragging or drag-drop is off', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });

    const disabled = makeDragEvent();
    component.allowDragDrop = false;
    component.handleDragOver(disabled, getNode('root-1'));
    expect(disabled.preventDefault).not.toHaveBeenCalled();

    component.allowDragDrop = true;
    component.draggingId = undefined;
    const notDragging = makeDragEvent();
    component.handleDragOver(notDragging, getNode('root-1'));
    expect(notDragging.preventDefault).not.toHaveBeenCalled();
  });

  it('should ignore drag leave within the same row', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });
    component.dragOverId = 'root-1';

    const inside = { querySelector: () => null, contains: () => true };
    component.handleDragLeave(
      makeDragEvent({ currentTarget: inside, relatedTarget: {} }),
      getNode('root-1')
    );

    expect(component.dragOverId).toBe('root-1');
  });

  it('should clear drop state and spring-load when leaving the drop-target row', async () => {
    const { component } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: [],
    });
    jest.useFakeTimers();
    component.handleDragStart(
      makeDragEvent({ dataTransfer: { setData: jest.fn() } }),
      getNode('leaf-a')
    );
    component.dragOverId = 'root-1';
    component.dropPosition = 'inside';
    component.scheduleSpringLoad(getNode('root-1'), 'inside');

    const host = { querySelector: () => null, contains: () => false };
    component.handleDragLeave(
      makeDragEvent({ currentTarget: host, relatedTarget: null }),
      getNode('root-1')
    );

    expect(component.dragOverId).toBeUndefined();
    expect(component.dropPosition).toBeUndefined();
    expect(component.springLoadId).toBeUndefined();
    jest.useRealTimers();
  });

  it('should leave state intact on drag leave toward an outside, non-matching row', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });
    component.dragOverId = 'root-2';

    const host = { querySelector: () => null, contains: () => false };
    component.handleDragLeave(
      makeDragEvent({ currentTarget: host, relatedTarget: {} }),
      getNode('root-1')
    );

    expect(component.dragOverId).toBe('root-2');
  });

  it('should reject self, descendants, disabled targets, and no active drag', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });

    expect(component.isInvalidDropTarget(getNode('root-1'))).toBe(true);

    component.draggingId = 'root-1';
    expect(component.isInvalidDropTarget(getNode('root-1'))).toBe(true);
    expect(component.isInvalidDropTarget(getNode('leaf-b1'))).toBe(true);
    expect(component.isInvalidDropTarget(getNode('leaf-disabled'))).toBe(true);

    component.draggingId = 'leaf-a';
    expect(component.isInvalidDropTarget(getNode('root-2'))).toBe(false);
  });

  it('should split a row into before/inside/after zones', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });
    const at = (clientY: number) =>
      component.computeDropPosition(
        makeDragEvent({
          currentTarget: makeRowHost({ top: 0, height: 100 }),
          clientY,
        }),
        getNode('root-1')
      );

    expect(at(10)).toBe('before');
    expect(at(50)).toBe('inside');
    expect(at(90)).toBe('after');
  });

  it('should fall back when the drop-target row rect is unavailable', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });
    const noRowHost = { querySelector: () => null, contains: () => false };

    expect(
      component.computeDropPosition(
        makeDragEvent({ currentTarget: noRowHost }),
        getNode('root-1')
      )
    ).toBe('inside');
    expect(
      component.computeDropPosition(
        makeDragEvent({ currentTarget: noRowHost }),
        getNode('leaf-a')
      )
    ).toBe('after');
    // A zero-height rect also falls back.
    expect(
      component.computeDropPosition(
        makeDragEvent({ currentTarget: makeRowHost({ top: 0, height: 0 }) }),
        getNode('leaf-a')
      )
    ).toBe('after');
  });

  it('should spring-load a collapsed parent hovered in its inside zone', async () => {
    const { page, component } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: [],
    });
    const nodeExpandChange = jest.fn();
    page.root?.addEventListener('nodeExpandChange', nodeExpandChange);

    jest.useFakeTimers();
    component.scheduleSpringLoad(getNode('root-1'), 'inside');
    jest.advanceTimersByTime(500);

    expect(nodeExpandChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'root-1', expanded: true } })
    );
    expect(component.springLoadId).toBeUndefined();
    jest.useRealTimers();
  });

  it('should not spring-load for non-inside, leaf, or already-expanded targets', async () => {
    const { component } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: ['parent-b'],
    });
    const setTimeoutSpy = jest.spyOn(globalThis, 'setTimeout');

    component.scheduleSpringLoad(getNode('root-1'), 'before');
    component.scheduleSpringLoad(getNode('leaf-a'), 'inside');
    component.scheduleSpringLoad(getNode('parent-b'), 'inside');

    expect(setTimeoutSpy).not.toHaveBeenCalled();
    setTimeoutSpy.mockRestore();
  });

  it('should not reschedule spring-load while one is pending for the same node', async () => {
    const { component } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: [],
    });
    jest.useFakeTimers();
    const setTimeoutSpy = jest.spyOn(globalThis, 'setTimeout');

    component.scheduleSpringLoad(getNode('root-1'), 'inside');
    component.scheduleSpringLoad(getNode('root-1'), 'inside');

    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
    component.clearSpringLoad();
    setTimeoutSpy.mockRestore();
    jest.useRealTimers();
  });

  it('should emit nodeMove on dragend after a valid drop', async () => {
    const { page, component } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: ['root-1'],
    });
    const nodeMove = jest.fn();
    page.root?.addEventListener('nodeMove', nodeMove);

    component.handleDragStart(
      makeDragEvent({ dataTransfer: { setData: jest.fn() } }),
      getNode('leaf-a')
    );
    component.handleDragOver(
      makeDragEvent({
        currentTarget: makeRowHost({ top: 0, height: 100 }),
        clientY: 10,
      }),
      getNode('root-2')
    );

    const dropEvent = makeDragEvent();
    component.handleDrop(dropEvent, getNode('root-2'));

    expect(dropEvent.preventDefault).toHaveBeenCalled();
    // Emit is deferred until dragend so a nodes update cannot destroy the
    // drag source while the browser still owns the gesture.
    expect(nodeMove).not.toHaveBeenCalled();
    expect(component.draggingId).toBe('leaf-a');

    component.handleDragEnd();

    expect(nodeMove).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'leaf-a', targetId: 'root-2', position: 'before' },
      })
    );
    expect(component.draggingId).toBeUndefined();
  });

  it('should not emit nodeMove for invalid targets or a missing position', async () => {
    const { page, component } = await createTreePage({ allowDragDrop: true });
    const nodeMove = jest.fn();
    page.root?.addEventListener('nodeMove', nodeMove);

    // Invalid target: dropping onto itself.
    component.handleDragStart(
      makeDragEvent({ dataTransfer: { setData: jest.fn() } }),
      getNode('root-1')
    );
    component.handleDrop(makeDragEvent(), getNode('root-1'));
    component.handleDragEnd();
    expect(nodeMove).not.toHaveBeenCalled();

    // Valid target but no drag-over resolved a position.
    component.handleDragStart(
      makeDragEvent({ dataTransfer: { setData: jest.fn() } }),
      getNode('leaf-a')
    );
    component.handleDrop(makeDragEvent(), getNode('root-2'));
    component.handleDragEnd();
    expect(nodeMove).not.toHaveBeenCalled();
  });

  it('should return early from drop when not dragging or drag-drop is off', async () => {
    const { component } = await createTreePage({ allowDragDrop: true });

    const disabled = makeDragEvent();
    component.allowDragDrop = false;
    component.handleDrop(disabled, getNode('root-1'));
    expect(disabled.preventDefault).not.toHaveBeenCalled();

    component.allowDragDrop = true;
    component.draggingId = undefined;
    const notDragging = makeDragEvent();
    component.handleDrop(notDragging, getNode('root-1'));
    expect(notDragging.preventDefault).not.toHaveBeenCalled();
  });

  it('should clear all drag state on drag end without emitting when nothing was dropped', async () => {
    const { page, component } = await createTreePage({ allowDragDrop: true });
    const nodeMove = jest.fn();
    page.root?.addEventListener('nodeMove', nodeMove);

    component.draggingId = 'root-1';
    component.dragOverId = 'root-1';
    component.dropPosition = 'inside';

    component.handleDragEnd();

    expect(nodeMove).not.toHaveBeenCalled();
    expect(component.draggingId).toBeUndefined();
    expect(component.dragOverId).toBeUndefined();
    expect(component.dropPosition).toBeUndefined();
  });

  it('should render drag handles when enabled and hide them on disabled rows', async () => {
    const { page } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: ['root-1', 'parent-b'],
    });

    expect(
      findTreeItem(page, 'root-1')?.querySelector(
        '.modus-wc-content-tree-drag-handle'
      )
    ).not.toBeNull();
    expect(
      findTreeItem(page, 'leaf-disabled')?.querySelector(
        '.modus-wc-content-tree-drag-handle'
      )
    ).toBeNull();
  });

  it('should route drag-and-drop through rendered tree-item and drag-handle listeners', async () => {
    const { page, component } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: ['root-1'],
    });
    const nodeMove = jest.fn();
    page.root?.addEventListener('nodeMove', nodeMove);

    const makeDomDragEvent = (
      type: string,
      extra: Record<string, unknown> = {}
    ) => {
      const event = new Event(type, {
        bubbles: true,
        cancelable: true,
      }) as DragEvent;
      Object.defineProperty(event, 'dataTransfer', {
        value: {
          setData: jest.fn(),
          effectAllowed: '',
          dropEffect: '',
          setDragImage: jest.fn(),
        },
        enumerable: true,
      });
      Object.assign(event, extra);
      return event;
    };

    const dragHandle = findTreeItem(page, 'leaf-a')?.querySelector(
      '.modus-wc-content-tree-drag-handle'
    ) as HTMLElement;
    dragHandle.dispatchEvent(makeDomDragEvent('dragstart'));
    expect(component.draggingId).toBe('leaf-a');

    const dropTarget = findTreeItem(page, 'root-2')!;
    const row = dropTarget.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    jest.spyOn(row, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      top: 0,
      width: 100,
      height: 100,
      right: 100,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });

    dropTarget.dispatchEvent(makeDomDragEvent('dragenter'));
    dropTarget.dispatchEvent(makeDomDragEvent('dragover', { clientY: 10 }));
    expect(component.dragOverId).toBe('root-2');
    expect(component.dropPosition).toBe('before');

    dropTarget.dispatchEvent(
      makeDomDragEvent('dragleave', { relatedTarget: null })
    );
    expect(component.dragOverId).toBeUndefined();

    dropTarget.dispatchEvent(makeDomDragEvent('dragover', { clientY: 10 }));
    dropTarget.dispatchEvent(makeDomDragEvent('drop'));
    expect(nodeMove).not.toHaveBeenCalled();
    expect(component.draggingId).toBe('leaf-a');

    dragHandle.dispatchEvent(makeDomDragEvent('dragend'));

    expect(nodeMove).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { id: 'leaf-a', targetId: 'root-2', position: 'before' },
      })
    );
    expect(component.draggingId).toBeUndefined();
    expect(component.dragOverId).toBeUndefined();
  });

  it('should not render drag handles while filtering or editing', async () => {
    const { page: filtering } = await createTreePage({
      allowDragDrop: true,
      filter: 'search',
    });
    expect(
      filtering.root!.querySelector('.modus-wc-content-tree-drag-handle')
    ).toBeNull();

    const { page: editing } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: ['root-1'],
      editingNodeId: 'leaf-a',
    });
    expect(
      findTreeItem(editing, 'leaf-a')?.querySelector(
        '.modus-wc-content-tree-drag-handle'
      )
    ).toBeNull();
  });

  it('should apply dragging and drop-target classes during a drag', async () => {
    const { page, component } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: ['root-1', 'parent-b'],
    });

    component.handleDragStart(
      makeDragEvent({ dataTransfer: { setData: jest.fn() } }),
      getNode('leaf-a')
    );
    component.handleDragOver(
      makeDragEvent({
        currentTarget: makeRowHost({ top: 0, height: 100 }),
        clientY: 50,
      }),
      getNode('parent-b')
    );
    await page.waitForChanges();

    expect(
      page.root!.querySelector('.modus-wc-content-tree-dragging')
    ).not.toBeNull();
    expect(
      page.root!.querySelector('.modus-wc-content-tree-drop-inside')
    ).not.toBeNull();
  });

  it('should not add a drop class when a drag-over target has no resolved position', async () => {
    const { page, component } = await createTreePage({
      allowDragDrop: true,
      expandedNodeIds: ['root-1'],
    });

    component.dragOverId = 'root-1';
    component.dropPosition = undefined;
    await page.waitForChanges();

    expect(
      page.root!.querySelector('[class*="modus-wc-content-tree-drop-"]')
    ).toBeNull();
  });

  // --- Lazy loading ---

  const lazyNode = (over: Partial<ITreeNode> = {}): ITreeNode => ({
    id: 'lazy',
    label: 'Lazy',
    hasChildren: true,
    ...over,
  });

  it('isLazyUnloaded distinguishes unloaded lazy nodes from loaded or empty ones', () => {
    expect(isLazyUnloaded(lazyNode())).toBe(true);
    expect(isLazyUnloaded(lazyNode({ children: [] }))).toBe(false);
    expect(
      isLazyUnloaded(lazyNode({ children: [{ id: 'x', label: 'X' }] }))
    ).toBe(false);
    expect(isLazyUnloaded({ id: 'leaf', label: 'Leaf' })).toBe(false);
  });

  it('should render an expand chevron for a lazy node that has no children yet', async () => {
    const nodes: ITreeNode[] = [lazyNode(), { id: 'leaf', label: 'Leaf' }];
    const { page } = await createTreePage({ nodes, expandedNodeIds: [] });

    // The lazy node gets a chevron toggle button; a real leaf gets a spacer.
    expect(
      findTreeItem(page, 'lazy')?.querySelector(
        '.modus-wc-content-tree-node-start modus-wc-button'
      )
    ).not.toBeNull();
    expect(
      findTreeItem(page, 'leaf')?.querySelector(
        '.modus-wc-content-tree-toggle-spacer'
      )
    ).not.toBeNull();
  });

  it('should keep layout spacer buttons out of the tab order', async () => {
    const nodes: ITreeNode[] = [
      { id: 'leaf', label: 'Leaf' },
      { id: 'disabled-leaf', label: 'Disabled', disabled: true },
    ];
    const { page } = await createTreePage({ nodes });

    const leafSpacerBtn = findTreeItem(page, 'leaf')?.querySelector(
      '.modus-wc-content-tree-toggle-spacer button'
    ) as HTMLButtonElement | null;
    const disabledActionsSpacer = findTreeItem(
      page,
      'disabled-leaf'
    )?.querySelector(
      '.modus-wc-content-tree-actions-spacer button'
    ) as HTMLButtonElement | null;

    expect(leafSpacerBtn?.tabIndex).toBe(-1);
    expect(disabledActionsSpacer?.tabIndex).toBe(-1);
  });

  it('should emit nodeLoadChildren when expandedNodeIds is updated directly', async () => {
    const nodes: ITreeNode[] = [lazyNode()];
    const { page, component } = await createTreePage({
      nodes,
      expandedNodeIds: [],
    });
    const nodeLoadChildren = jest.fn();
    page.root?.addEventListener('nodeLoadChildren', nodeLoadChildren);

    component.expandedNodeIds = ['lazy'];
    await page.waitForChanges();

    expect(nodeLoadChildren).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'lazy' } })
    );
    expect(component.loadingIds?.has('lazy')).toBe(true);
  });

  it('should emit nodeLoadChildren for lazy nodes that mount already expanded', async () => {
    const nodes: ITreeNode[] = [lazyNode()];
    const nodeLoadChildren = jest.fn();
    const page = await newSpecPage({
      components: contentTreeComponents,
      html: '<modus-wc-content-tree aria-label="Content tree"></modus-wc-content-tree>',
    });
    page.root?.addEventListener('nodeLoadChildren', nodeLoadChildren);
    const component = asHarness(page.rootInstance as ModusWcContentTree);
    component.nodes = nodes;
    component.expandedNodeIds = ['lazy'];
    component.componentWillLoad();
    await page.waitForChanges();

    expect(nodeLoadChildren).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'lazy' } })
    );
  });

  it('should disable checkboxes on lazy unloaded nodes in multi-select mode', async () => {
    const nodes: ITreeNode[] = [lazyNode()];
    const { page } = await createTreePage({
      nodes,
      selectionMode: 'multiple',
      expandedNodeIds: [],
    });

    const checkbox = findTreeItem(page, 'lazy')?.querySelector(
      'modus-wc-checkbox'
    ) as (HTMLElement & { disabled?: boolean }) | null;

    expect(checkbox?.disabled).toBe(true);
  });

  it('should emit nodeLoadChildren, track loading, and show a spinner on first expand', async () => {
    const nodes: ITreeNode[] = [lazyNode()];
    const { page, component } = await createTreePage({
      nodes,
      expandedNodeIds: [],
    });
    const nodeLoadChildren = jest.fn();
    const nodeExpandChange = jest.fn();
    page.root?.addEventListener('nodeLoadChildren', nodeLoadChildren);
    page.root?.addEventListener('nodeExpandChange', nodeExpandChange);

    component.handleExpandToggle(new CustomEvent('buttonClick'), nodes[0]);

    expect(nodeLoadChildren).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'lazy' } })
    );
    expect(nodeExpandChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { id: 'lazy', expanded: true } })
    );
    expect(component.loadingIds?.has('lazy')).toBe(true);

    // The app applies the expansion; children are still absent, so a spinner shows.
    component.expandedNodeIds = ['lazy'];
    await page.waitForChanges();
    expect(
      findTreeItem(page, 'lazy')?.querySelector('modus-wc-loader')
    ).not.toBeNull();
  });

  it('should clear loading and render children once they are provided', async () => {
    const nodes: ITreeNode[] = [lazyNode()];
    const { page, component } = await createTreePage({
      nodes,
      expandedNodeIds: [],
    });

    component.handleExpandToggle(new CustomEvent('buttonClick'), nodes[0]);
    component.expandedNodeIds = ['lazy'];
    await page.waitForChanges();
    expect(component.loadingIds?.has('lazy')).toBe(true);

    component.nodes = [
      lazyNode({ children: [{ id: 'child', label: 'Child' }] }),
    ];
    await page.waitForChanges();

    expect(component.loadingIds?.has('lazy')).toBe(false);
    expect(
      findTreeItem(page, 'lazy')?.querySelector('modus-wc-loader')
    ).toBeNull();
    expect(findTreeItem(page, 'child')).toBeTruthy();
  });

  it('should treat an empty children array as a loaded leaf', async () => {
    const nodes: ITreeNode[] = [lazyNode()];
    const { page, component } = await createTreePage({
      nodes,
      expandedNodeIds: [],
    });

    component.handleExpandToggle(new CustomEvent('buttonClick'), nodes[0]);
    component.expandedNodeIds = ['lazy'];
    await page.waitForChanges();
    expect(component.loadingIds?.has('lazy')).toBe(true);

    // The app reports "loaded, no items" by assigning an empty array.
    component.nodes = [lazyNode({ children: [] })];
    await page.waitForChanges();

    expect(component.loadingIds?.has('lazy')).toBe(false);
    // No chevron and no spinner: the node collapsed to a plain leaf. It gets an
    // invisible toggle spacer (a hidden button) so its label stays aligned.
    expect(
      findTreeItem(page, 'lazy')?.querySelector(
        '.modus-wc-content-tree-chevron'
      )
    ).toBeNull();
    expect(
      findTreeItem(page, 'lazy')?.querySelector('modus-wc-loader')
    ).toBeNull();
    expect(
      findTreeItem(page, 'lazy')?.querySelector(
        '.modus-wc-content-tree-toggle-spacer'
      )
    ).not.toBeNull();
  });

  it('should not emit nodeLoadChildren when collapsing a lazy node', async () => {
    const nodes: ITreeNode[] = [lazyNode()];
    const { component } = await createTreePage({
      nodes,
      expandedNodeIds: ['lazy'],
    });
    const nodeLoadChildren = jest.fn();
    component.el.addEventListener('nodeLoadChildren', nodeLoadChildren);

    // Already expanded: toggling collapses it, which must not trigger a load.
    component.handleExpandToggle(new CustomEvent('buttonClick'), nodes[0]);

    expect(nodeLoadChildren).not.toHaveBeenCalled();
  });

  it('should not emit nodeLoadChildren again while a load is already in flight', async () => {
    const nodes: ITreeNode[] = [lazyNode()];
    const { component } = await createTreePage({
      nodes,
      expandedNodeIds: [],
    });
    const nodeLoadChildren = jest.fn();
    component.el.addEventListener('nodeLoadChildren', nodeLoadChildren);

    component.handleExpandToggle(new CustomEvent('buttonClick'), nodes[0]);
    component.expandedNodeIds = ['lazy'];
    // Collapse, then re-expand before the children have arrived.
    component.handleExpandToggle(new CustomEvent('buttonClick'), nodes[0]);
    component.expandedNodeIds = [];
    component.handleExpandToggle(new CustomEvent('buttonClick'), nodes[0]);

    expect(nodeLoadChildren).toHaveBeenCalledTimes(1);
  });

  it('should not emit nodeLoadChildren for the transient toggle while filtering', async () => {
    const nodes: ITreeNode[] = [lazyNode()];
    const { component } = await createTreePage({
      nodes,
      filter: 'lazy',
      expandedNodeIds: [],
    });
    const nodeLoadChildren = jest.fn();
    component.el.addEventListener('nodeLoadChildren', nodeLoadChildren);

    component.handleExpandToggle(new CustomEvent('buttonClick'), nodes[0]);

    expect(nodeLoadChildren).not.toHaveBeenCalled();
  });

  it('should drop loading ids for nodes that leave the tree before loading', async () => {
    const nodes: ITreeNode[] = [lazyNode()];
    const { page, component } = await createTreePage({
      nodes,
      expandedNodeIds: [],
    });

    component.handleExpandToggle(new CustomEvent('buttonClick'), nodes[0]);
    expect(component.loadingIds?.has('lazy')).toBe(true);

    // The node is removed entirely before its children ever arrive.
    component.nodes = [{ id: 'other', label: 'Other' }];
    await page.waitForChanges();
    expect(component.loadingIds?.has('lazy')).toBe(false);
  });

  it('should keep the loading state while children are still absent after a nodes update', async () => {
    const nodes: ITreeNode[] = [lazyNode()];
    const { page, component } = await createTreePage({
      nodes,
      expandedNodeIds: [],
    });

    component.handleExpandToggle(new CustomEvent('buttonClick'), nodes[0]);
    expect(component.loadingIds?.has('lazy')).toBe(true);

    // An unrelated data change: the lazy node's children are still not loaded.
    component.nodes = [
      lazyNode({ label: 'Lazy (renamed)' }),
      { id: 'new', label: 'New' },
    ];
    await page.waitForChanges();
    expect(component.loadingIds?.has('lazy')).toBe(true);
  });

  it('should render a node with the default sibling index parameter', async () => {
    const { component } = await createTreePage({ expandedNodeIds: ['root-1'] });

    expect(() => component.renderNode(getNode('leaf-a'))).not.toThrow();
  });
});
