import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Event as StencilEvent,
  VNode,
  Watch,
} from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import {
  DaisySize,
  IContentTreeToolbar,
  ITreeNode,
  ModusSize,
  SelectionMode,
} from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import {
  filterTree,
  findNode,
  getExpandableNodeIds,
  hasDisabledAncestor,
  isDescendant,
  isLazyUnloaded,
} from './tree-state-manager';

/** Aggregated checkbox state for a node and its descendants. */
type CheckState = 'checked' | 'unchecked' | 'indeterminate';

// Monotonic counter so each instance's delete modal gets a unique element id.
let contentTreeInstanceId = 0;

/**
 * A data-driven, stateless/controlled tree component. The consuming application
 * owns the `nodes` data (the single source of truth) and the controlled
 * `selectedNodeId` / `expandedNodeIds` state. The component renders the tree and
 * emits `nodeSelect` / `nodeExpandChange`; the application decides whether to
 * apply the change and passes the updated state back in.
 */
@Component({
  tag: 'modus-wc-content-tree',
  styleUrl: 'modus-wc-content-tree.scss',
  shadow: false,
})
export class ModusWcContentTree {
  private inheritedAttributes: Attributes = {};

  // Per-render cache of every node's aggregated checkbox state, built once in
  // render() so each checkbox lookup is O(1) instead of a recursive subtree walk.
  private checkStateById = new Map<string, CheckState>();

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Enables drag-and-drop reordering and reparenting via a per-row drag handle (shown on hover). After a successful drop the component emits `nodeMove` on `dragend`; the application applies it (e.g. via `moveNodeRelative`) and passes updated `nodes` back in. */
  @Prop() allowDragDrop?: boolean;

  /** Indicates that the content tree should have a border. */
  @Prop() bordered?: boolean;

  /** Custom CSS class to apply to the host element. */
  @Prop() customClass?: string = '';

  /** The ids of the checked leaf nodes (multi-select). Controlled by the consuming application. */
  @Prop() checkedNodeIds?: string[];

  /** The id of the node currently rendered as an inline editable input. Controlled by the consuming application (typically set in response to `nodeEdit`, `nodeAdd`, or `nodeDuplicate`). */
  @Prop() editingNodeId?: string;

  /** The ids of the currently expanded nodes. Controlled by the consuming application. */
  @Prop() expandedNodeIds?: string[];

  /** When set, only nodes whose label matches (and their ancestors) are shown. Matching is a case-insensitive substring; matched parents reveal their full subtree. When `searchable` is enabled, this only seeds the built-in search box's initial value. */
  @Prop() filter?: string = '';

  /** The tree data. The single source of truth, owned by the consuming application. */
  @Prop() nodes?: ITreeNode[];

  /** Shows a built-in search box above the tree that filters nodes internally (self-managed). When enabled, the search box owns the active filter and the `filter` prop is used only to seed its initial value. */
  @Prop() searchable?: boolean;

  /** The id of the currently selected (active) node. Controlled by the consuming application. */
  @Prop() selectedNodeId?: string;

  /** The selection mode of the content tree. */
  @Prop() selectionMode?: SelectionMode = 'single';

  /** The size of the content tree items. */
  @Prop() size?: ModusSize = 'md';

  /** Configures the optional toolbar rendered above the tree. When set, a toolbar is shown with the enabled controls: an expand-all / collapse-all toggle and a delete button (enabled only when nodes are checked in multi-select). */
  @Prop() toolbar?: IContentTreeToolbar;

  /** Event emitted when a node is selected. The consuming application should update `selectedNodeId`. */
  @StencilEvent() nodeSelect!: EventEmitter<{ id: string }>;

  /** Event emitted when a node's expansion is toggled. The consuming application should update `expandedNodeIds`. */
  @StencilEvent() nodeExpandChange!: EventEmitter<{
    id: string;
    expanded: boolean;
  }>;

  /** Event emitted when a checkbox is toggled (multi-select). The consuming application should update `checkedNodeIds`. */
  @StencilEvent() nodeCheckChange!: EventEmitter<{
    id: string;
    checked: boolean;
  }>;

  /** Event emitted when "Edit name" is chosen. The app should set `editingNodeId` to this id. */
  @StencilEvent() nodeEdit!: EventEmitter<{ id: string }>;

  /** Event emitted when "Duplicate" is chosen. The app should clone the node below it and set `editingNodeId` to the new id. */
  @StencilEvent() nodeDuplicate!: EventEmitter<{ id: string }>;

  /** Event emitted when "Add New Above/Below" or "Add Child Node" is chosen. The app should insert a node at the requested position and set `editingNodeId` to the new id. */
  @StencilEvent() nodeAdd!: EventEmitter<{
    referenceId: string;
    position: 'above' | 'below' | 'child';
  }>;

  /** Event emitted after the user confirms deletion. The app should remove the node from `nodes`. */
  @StencilEvent() nodeDelete!: EventEmitter<{ id: string }>;

  /** Event emitted when an inline edit is committed with an effective label change (via Enter or losing focus). The app should apply the new label and clear `editingNodeId`. */
  @StencilEvent() nodeRename!: EventEmitter<{ id: string; label: string }>;

  /** Event emitted when an inline edit ends without an effective change — via Escape, or Enter/blur while the draft matches the original label. The app should clear `editingNodeId` (and discard a freshly added node if its name is still empty). */
  @StencilEvent() nodeEditCancel!: EventEmitter<{ id: string }>;

  /** Event emitted after a successful drag-and-drop, once the gesture ends (`dragend`). Emitting on `dragend` (not `drop`) keeps the drag source in the DOM until the browser finishes the gesture, so applying the move (e.g. via `moveNodeRelative`) cannot tear down the handle mid-drag. `position` is relative to `targetId`: `before`/`after` reorder among the target's siblings; `inside` nests the node as the target's first child. */
  @StencilEvent() nodeMove!: EventEmitter<{
    id: string;
    targetId: string;
    position: 'before' | 'after' | 'inside';
  }>;

  /** Event emitted the first time a lazy node (`hasChildren: true` with no `children` yet) is expanded. The app should fetch the node's children and assign them to `nodes` (use `[]` when there are none); the component shows a spinner until `children` is defined. */
  @StencilEvent() nodeLoadChildren!: EventEmitter<{ id: string }>;

  /** Event emitted when the toolbar's expand-all / collapse-all toggle is clicked. The app should set `expandedNodeIds` to every expandable id (e.g. via `getExpandableNodeIds`) when `expanded` is `true`, or to `[]` when `false`. */
  @StencilEvent() expandAllChange!: EventEmitter<{ expanded: boolean }>;

  /** Event emitted when the toolbar's delete button is confirmed. `ids` are the top-most checked nodes; the app should remove them (e.g. via `deleteNodes`). */
  @StencilEvent() nodesDelete!: EventEmitter<{ ids: string[] }>;

  /** Event emitted when a node's visibility (eye) toggle is clicked. `disabled` is the new state. The app should update the node's own `disabled` state (e.g. via `setNodeDisabled`); descendants become effectively disabled via ancestor inheritance. */
  @StencilEvent() nodeVisibilityChange!: EventEmitter<{
    id: string;
    disabled: boolean;
  }>;

  // Id of the node awaiting single-delete confirmation; drives the built-in modal.
  @State() private pendingDeleteId?: string;

  // Ids awaiting bulk-delete confirmation (from the toolbar); drives the modal.
  @State() private pendingDeleteIds?: string[];

  // The built-in search box's current query (self-managed when `searchable`).
  // Seeded from `filter` on load; drives filtering in place of the prop.
  @State() private searchQuery = '';

  // Ids the user has manually collapsed during the CURRENT filter session.
  // Transient, view-only state: it never touches the controlled
  // `expandedNodeIds`, and it resets whenever the filter value changes.
  @State() private filterCollapsedIds: Set<string> = new Set();

  // Ids of lazy nodes whose children are currently being fetched by the app
  // (after `nodeLoadChildren`). Transient: it drives the per-node spinner and
  // guards against re-emitting a load while one is already in flight. Cleared
  // once the node's `children` are provided (see onNodesChange).
  @State() private loadingIds: Set<string> = new Set();

  // Transient drag-and-drop state (only meaningful while `allowDragDrop`).
  @State() private draggingId?: string;
  @State() private dragOverId?: string;
  @State() private dropPosition?: 'before' | 'after' | 'inside';

  // Spring-load: auto-expand a collapsed parent after a short dwell while the
  // pointer hovers its "inside" zone during a drag.
  private springLoadId?: string;
  private springLoadTimer?: ReturnType<typeof setTimeout>;

  // Off-document clone passed to setDragImage; removed on drop / drag end.
  private dragGhost?: HTMLElement;

  // Stashed on drop; emitted from dragend so a nodes update cannot destroy the
  // drag source while the browser still owns the gesture.
  private pendingMove?: {
    id: string;
    targetId: string;
    position: 'before' | 'after' | 'inside';
  };

  // The id used by the inner <dialog> (must be unique per instance).
  private deleteModalId = `content-tree-delete-${contentTreeInstanceId++}`;

  // Draft label while inline-editing, plus a guard so a single edit session
  // resolves exactly once (Enter/blur commit vs Escape cancel never double-fire).
  private draftLabel = '';
  private editOriginalLabel = '';
  private editResolved = false;
  // Set when an edit session begins so the next render can focus the input.
  private editFocusPending = false;
  // The inline-edit input currently bound to the native keydown handler, kept
  // so the listener can be removed when the session ends or the host unmounts.
  private editInput?: HTMLInputElement;

  @Watch('editingNodeId')
  onEditingNodeIdChange(newId?: string): void {
    if (newId) {
      // Start a new edit session: arm the commit/cancel guard and seed the draft.
      this.editResolved = false;
      const node = findNode(this.getNodes(), newId);
      this.draftLabel = node?.label ?? '';
      this.editOriginalLabel = this.draftLabel;
      this.editFocusPending = true;
    } else {
      // Session ended. Mark resolved so any trailing blur from input removal cannot commit.
      this.editResolved = true;
      this.editFocusPending = false;
      this.detachInputKeyDown();
    }
  }

  @Watch('filter')
  onFilterChange(): void {
    // A new or changed filter re-forces every surviving parent open, so any
    // transient collapses from the previous filter session are discarded.
    if (this.filterCollapsedIds.size) {
      this.filterCollapsedIds = new Set();
    }
  }

  @Watch('nodes')
  onNodesChange(): void {
    if (!this.loadingIds.size) return;
    // A lazy node finishes loading once its `children` are defined (even `[]`,
    // which is treated as "loaded, no items"). Drop those ids (and any node
    // that has since left the tree) so the spinner gives way to the loaded rows.
    const next = new Set(this.loadingIds);
    for (const id of this.loadingIds) {
      const node = findNode(this.getNodes(), id);
      if (!node || node.children !== undefined) {
        next.delete(id);
      }
    }
    if (next.size !== this.loadingIds.size) {
      this.loadingIds = next;
    }
  }

  @Watch('expandedNodeIds')
  onExpandedNodeIdsChange(): void {
    this.syncLazyLoadsForExpandedNodes();
  }

  componentWillLoad() {
    handleShadowDOMStyles(this.el);

    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Content tree';
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);

    // Seed the built-in search box from any initial `filter` value.
    this.searchQuery = this.filter ?? '';

    // @Watch does not fire on initial load, so initialize the edit session here
    // when the consumer mounts with `editingNodeId` already set.
    if (this.editingNodeId) {
      this.onEditingNodeIdChange(this.editingNodeId);
    }

    // @Watch does not fire on initial load; fetch children for any lazy nodes
    // that mount already expanded (e.g. expand-all or deep-linked state).
    this.syncLazyLoadsForExpandedNodes();
  }

  componentDidRender() {
    if (this.allowDragDrop) {
      this.syncDragHandleDraggable();
      // Child modus-wc-button hosts may finish their inner <button> one frame
      // later after a keyed recreate — re-sync so draggable is never missed.
      requestAnimationFrame(() => this.syncDragHandleDraggable());
    }

    if (!this.editFocusPending || !this.editingNodeId) return;
    this.editFocusPending = false;

    // Wait a frame so the freshly rendered input is in the DOM, then focus it,
    // select any existing text, and bind a native keydown handler directly on
    // the input. A direct target-phase listener reliably fires (and can
    // stopPropagation) before the inner modus-wc-tree-item's bubble keydown
    // handler treats Enter as a row-select instead of an edit commit.
    requestAnimationFrame(() => {
      const input = this.el.querySelector<HTMLInputElement>(
        '.modus-wc-content-tree-edit-input input'
      );
      if (!input) return;
      input.focus();
      input.select();
      // Drop any listener from a previous session before binding the new one.
      this.detachInputKeyDown();
      this.editInput = input;
      input.addEventListener('keydown', this.handleInputKeyDown);
    });
  }

  disconnectedCallback() {
    this.detachInputKeyDown();
    this.clearSpringLoad();
    this.pendingMove = undefined;
    this.removeDragGhost();
  }

  // modus-wc-button does not expose draggable; set it on the inner native
  // button so HTML5 drag-and-drop works from the per-row reorder handle.
  private syncDragHandleDraggable(): void {
    if (!this.allowDragDrop) return;
    this.el
      .querySelectorAll<HTMLButtonElement>(
        'modus-wc-button.modus-wc-content-tree-drag-handle button'
      )
      .forEach((button) => {
        button.draggable = true;
      });
  }

  // Remove the native keydown listener bound to the inline-edit input and clear
  // the reference. Safe to call when no input is bound.
  private detachInputKeyDown(): void {
    this.editInput?.removeEventListener('keydown', this.handleInputKeyDown);
    this.editInput = undefined;
  }

  // Commit on Enter, cancel on Escape, straight from the input element. Reads
  // the live value so the latest keystroke is never lost.
  private handleInputKeyDown = (e: KeyboardEvent) => {
    if (!this.editingNodeId) return;

    // Keep every keystroke (notably Space) inside the edit input: the enclosing
    // modus-wc-tree-item listens for bubbling keydown and calls preventDefault()
    // on Enter/Space to select the row, which would otherwise swallow spaces and
    // commit on Enter before the edit handler runs.
    e.stopPropagation();

    if (e.key !== 'Enter' && e.key !== 'Escape') return;

    const node = findNode(this.getNodes(), this.editingNodeId);
    if (!node) return;

    e.preventDefault();

    if (e.key === 'Enter') {
      this.draftLabel = (e.target as HTMLInputElement).value ?? this.draftLabel;
      this.commitEdit(node);
    } else {
      this.cancelEdit(node);
    }
  };

  @Listen('itemSelect')
  handleItemSelect(e: CustomEvent<{ value: string; selected?: boolean }>) {
    const id = e.detail?.value;
    if (!id) return;

    const node = findNode(this.getNodes(), id);
    if (!node || node.disabled) return;

    // Selecting a node only sets the active state; expansion is handled
    // exclusively by the chevron toggle.
    this.nodeSelect.emit({ id });
  }

  private handleExpandToggle = (e: CustomEvent, node: ITreeNode) => {
    (e as unknown as Event).stopPropagation?.();

    // During filtering the toggle is transient and visual only: flip the local
    // override and re-render, but DO NOT emit so the controlled
    // `expandedNodeIds` is preserved and restored once the filter clears.
    if (this.isFiltering()) {
      const next = new Set(this.filterCollapsedIds);
      if (next.has(node.id)) {
        next.delete(node.id);
      } else {
        next.add(node.id);
      }
      this.filterCollapsedIds = next;
      return;
    }

    const expanded = !this.isExpanded(node.id);

    if (expanded) {
      this.requestLazyLoadIfNeeded(node.id);
    }

    this.nodeExpandChange.emit({ id: node.id, expanded });
  };

  private handleCheckboxChange = (e: CustomEvent, node: ITreeNode) => {
    (e as unknown as Event).stopPropagation?.();
    if (isLazyUnloaded(node)) return;
    // Clicking an unchecked or mixed checkbox checks the whole branch; clicking
    // a fully checked one unchecks it. The app cascades via `setNodeChecked`.
    const checked = this.getCheckStateById(node.id) !== 'checked';
    this.nodeCheckChange.emit({ id: node.id, checked });
  };

  private handleVisibilityToggle = (e: CustomEvent, node: ITreeNode) => {
    (e as unknown as Event).stopPropagation?.();
    // A node whose ancestor is locked cannot be toggled: the ancestor must be
    // unlocked first. Only the top-most locked node (or an enabled node) is
    // interactive.
    if (hasDisabledAncestor(this.getNodes(), node.id)) return;
    // The eye toggles this node's OWN `disabled` (lock) state. The component
    // stays stateless: the app applies the new state (e.g. via
    // `setNodeDisabled`). Descendants inherit the lock at render time, so their
    // own state is preserved and restored when this node is unlocked.
    this.nodeVisibilityChange.emit({ id: node.id, disabled: !node.disabled });
  };

  // --- Drag & drop (opt-in via `allowDragDrop`) ---
  // The component stays stateless: a valid drop stashes the intent and
  // `dragend` emits `nodeMove` so the app can apply it (e.g. via
  // `moveNodeRelative`) without tearing down the drag source mid-gesture.

  private handleDragStart = (e: DragEvent, node: ITreeNode) => {
    if (!this.allowDragDrop || node.disabled) return;
    this.pendingMove = undefined;
    this.draggingId = node.id;
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      // Some browsers require drag data for the drag to initiate.
      e.dataTransfer.setData('text/plain', node.id);
      this.setRowDragImage(e, node);
    }
  };

  private handleDragEnter = (e: DragEvent) => {
    if (!this.allowDragDrop || !this.draggingId) return;
    // stopPropagation keeps only the innermost (hovered) row reacting, so a
    // nested child never also marks its ancestor row as the drop target.
    e.stopPropagation();
    e.preventDefault();
  };

  private handleDragOver = (e: DragEvent, node: ITreeNode) => {
    if (!this.allowDragDrop || !this.draggingId) return;
    e.stopPropagation();
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';

    if (this.isInvalidDropTarget(node)) {
      this.clearDropState();
      this.clearSpringLoad();
      return;
    }

    const position = this.computeDropPosition(e, node);
    this.dragOverId = node.id;
    this.dropPosition = position;
    this.scheduleSpringLoad(node, position);
  };

  private handleDragLeave = (e: DragEvent, node: ITreeNode) => {
    const host = e.currentTarget as HTMLElement;
    const related = e.relatedTarget as Node | null;
    // Ignore moves between the row's own descendants.
    if (related && host.contains(related)) return;
    if (this.dragOverId === node.id) this.clearDropState();
    if (this.springLoadId === node.id) this.clearSpringLoad();
  };

  private handleDrop = (e: DragEvent, node: ITreeNode) => {
    if (!this.allowDragDrop || !this.draggingId) return;
    e.stopPropagation();
    e.preventDefault();

    const id = this.draggingId;
    const position = this.dropPosition;
    const valid = !this.isInvalidDropTarget(node);

    this.clearSpringLoad();
    this.clearDropState();
    // Keep `draggingId` until dragend so the source row (and its dragend
    // listener) stay mounted; only stash the move for emission on dragend.
    this.pendingMove =
      valid && position ? { id, targetId: node.id, position } : undefined;
    this.removeDragGhost();
  };

  private handleDragEnd = () => {
    const move = this.pendingMove;
    this.pendingMove = undefined;
    this.draggingId = undefined;
    this.clearDropState();
    this.clearSpringLoad();
    this.removeDragGhost();

    if (move) {
      this.nodeMove.emit(move);
    }
  };

  private resolveDragRow(
    node: ITreeNode,
    event: DragEvent
  ): HTMLElement | null {
    const target = event.target;
    const fromTarget =
      target instanceof HTMLElement
        ? target.closest('modus-wc-tree-item')
        : null;
    const treeItem =
      fromTarget && this.el.contains(fromTarget)
        ? fromTarget
        : Array.from(this.el.querySelectorAll('modus-wc-tree-item')).find(
            (item) =>
              (item as HTMLElement & { value: string }).value === node.id
          );

    return (
      treeItem?.querySelector<HTMLElement>('.modus-wc-menu-item-interactive') ??
      null
    );
  }

  private attachDragGhost(row: HTMLElement): HTMLElement {
    this.removeDragGhost();
    const ghost = this.buildDragGhost(row);
    document.body.appendChild(ghost);
    this.dragGhost = ghost;
    return ghost;
  }

  // Drag starts from the handle only; use the full row as the drag image so the node travels with the cursor.
  private setRowDragImage(event: DragEvent, node: ITreeNode): void {
    const dataTransfer = event.dataTransfer;
    if (!dataTransfer?.setDragImage) return;

    const row = this.resolveDragRow(node, event);
    if (!row) return;

    const ghost = this.attachDragGhost(row);

    const rect = row.getBoundingClientRect();
    const offsetX =
      rect.width > 0
        ? Math.min(rect.width, Math.max(0, event.clientX - rect.left))
        : 0;
    const offsetY =
      rect.height > 0
        ? Math.min(rect.height, Math.max(0, event.clientY - rect.top))
        : 0;

    dataTransfer.setDragImage(ghost, offsetX, offsetY);
  }

  private buildDragGhost(row: HTMLElement): HTMLElement {
    const ghost = row.cloneNode(true) as HTMLElement;
    ghost.classList.add('modus-wc-content-tree-drag-ghost');
    ghost.setAttribute('aria-hidden', 'true');
    ghost.style.position = 'fixed';
    ghost.style.top = '-9999px';
    ghost.style.left = '-9999px';
    ghost.style.pointerEvents = 'none';
    ghost.querySelector('.modus-wc-content-tree-actions')?.remove();
    const { width } = row.getBoundingClientRect();
    if (width > 0) {
      ghost.style.width = `${width}px`;
      ghost.style.minWidth = `${width}px`;
    }
    // The row's font size comes from a size class on its <li> ancestor
    // (e.g. `.modus-wc-menu-item-md`), which the clone does not include —
    // copy the resolved values so ghost text matches the live row exactly.
    const rowStyle = window.getComputedStyle(row);
    ghost.style.fontSize = rowStyle.fontSize;
    ghost.style.lineHeight = rowStyle.lineHeight;
    this.copyComputedFontSize(row, ghost, '.modus-wc-menu-item-labels');
    this.copyComputedFontSize(row, ghost, '.modus-wc-menu-item-sublabel');
    return ghost;
  }

  // Some themes set a more specific font-size on the label/sublabel itself
  // (beyond the row-level size class); mirror it directly on the ghost clone.
  private copyComputedFontSize(
    liveRow: HTMLElement,
    ghostRow: HTMLElement,
    selector: string
  ): void {
    const liveEl = liveRow.querySelector(selector);
    const ghostEl = ghostRow.querySelector<HTMLElement>(selector);
    if (!liveEl || !ghostEl) return;
    const liveStyle = window.getComputedStyle(liveEl);
    ghostEl.style.fontSize = liveStyle.fontSize;
    ghostEl.style.lineHeight = liveStyle.lineHeight;
  }

  private removeDragGhost(): void {
    this.dragGhost?.remove();
    this.dragGhost = undefined;
  }

  private clearDropState(): void {
    this.dragOverId = undefined;
    this.dropPosition = undefined;
  }

  private clearSpringLoad(): void {
    if (this.springLoadTimer) {
      clearTimeout(this.springLoadTimer);
      this.springLoadTimer = undefined;
    }
    this.springLoadId = undefined;
  }

  // A node cannot be dropped onto itself, into its own subtree (would orphan the
  // branch), or onto a disabled row.
  private isInvalidDropTarget(
    node: ITreeNode,
    moveId = this.draggingId
  ): boolean {
    if (!moveId) return true;
    if (node.disabled || node.id === moveId) return true;
    return isDescendant(this.getNodes(), moveId, node.id);
  }

  // Split the target row into three zones by pointer position: the top edge
  // reorders before the target, the bottom edge after it, and the middle nests
  // inside it.
  private computeDropPosition(
    e: DragEvent,
    node: ITreeNode
  ): 'before' | 'after' | 'inside' {
    const host = e.currentTarget as HTMLElement;
    const row = host.querySelector<HTMLElement>(
      '.modus-wc-menu-item-interactive'
    );
    const rect = row?.getBoundingClientRect();

    if (!rect || !rect.height) {
      // Layout unavailable (e.g. unit tests): nest into parents, reorder after leaves.
      return node.children?.length ? 'inside' : 'after';
    }

    const ratio = (e.clientY - rect.top) / rect.height;
    if (ratio < 0.3) return 'before';
    if (ratio > 0.7) return 'after';
    return 'inside';
  }

  // Auto-expand a collapsed parent after a short dwell when hovering its inside
  // zone, so the user can drop into its children (spring-loading).
  private scheduleSpringLoad(
    node: ITreeNode,
    position: 'before' | 'after' | 'inside'
  ): void {
    const shouldSpring =
      position === 'inside' &&
      !!node.children?.length &&
      !this.isExpanded(node.id);

    if (!shouldSpring) {
      this.clearSpringLoad();
      return;
    }
    // A dwell is already scheduled for this node; let it run.
    if (this.springLoadId === node.id) return;

    this.clearSpringLoad();
    this.springLoadId = node.id;
    this.springLoadTimer = setTimeout(() => {
      this.nodeExpandChange.emit({ id: node.id, expanded: true });
      this.springLoadId = undefined;
      this.springLoadTimer = undefined;
    }, 500);
  }

  // --- Transactional menu (Edit / Duplicate / Add / Delete) ---

  private onMenuAction = (
    e: CustomEvent<{ value: string }>,
    action: 'edit' | 'duplicate' | 'above' | 'below' | 'child' | 'delete',
    node: ITreeNode
  ) => {
    // Stop the menu item's `itemSelect` from bubbling to our own row-select
    // listener, then close the dropdown so the action is clearly applied.
    (e as unknown as Event).stopPropagation?.();
    this.closeDropdownFromEvent(e);

    switch (action) {
      case 'edit':
        this.nodeEdit.emit({ id: node.id });
        break;
      case 'duplicate':
        this.nodeDuplicate.emit({ id: node.id });
        break;
      case 'above':
      case 'below':
      case 'child':
        this.nodeAdd.emit({ referenceId: node.id, position: action });
        break;
      case 'delete':
        this.openDeleteConfirm(node.id);
        break;
    }
  };

  private closeDropdownFromEvent(e: CustomEvent): void {
    const trigger = (e.target as HTMLElement | null)?.closest(
      'modus-wc-dropdown-menu'
    ) as (HTMLElement & { menuVisible?: boolean }) | null;
    if (!trigger) return;

    // Action menus should not keep single-select highlight after close.
    trigger.querySelectorAll('modus-wc-menu-item').forEach((item) => {
      (item as HTMLElement & { selected?: boolean }).selected = false;
    });

    trigger.menuVisible = false;
  }

  private getDeleteDialog(): HTMLDialogElement | null {
    return this.el.querySelector<HTMLDialogElement>(`#${this.deleteModalId}`);
  }

  private openDeleteConfirm(id: string): void {
    this.pendingDeleteIds = undefined;
    this.pendingDeleteId = id;
    this.getDeleteDialog()?.showModal();
  }

  private closeDeleteConfirm(): void {
    this.getDeleteDialog()?.close();
    this.pendingDeleteId = undefined;
    this.pendingDeleteIds = undefined;
  }

  private confirmDelete = () => {
    // A pending bulk selection (toolbar) takes precedence over a single-row delete.
    if (this.pendingDeleteIds?.length) {
      this.nodesDelete.emit({ ids: this.pendingDeleteIds });
    } else if (this.pendingDeleteId) {
      this.nodeDelete.emit({ id: this.pendingDeleteId });
    }
    this.closeDeleteConfirm();
  };

  // The confirmation copy adapts to a single-row delete vs a bulk toolbar delete.
  // Bulk copy counts checked leaves (`checkedNodeIds`); deletion still emits
  // top-most branch ids via `nodesDelete` so the app removes whole subtrees once.
  private getDeleteMessage(): string {
    if (this.pendingDeleteIds?.length) {
      const count = this.coerceArray<string>(this.checkedNodeIds).length;
      return `Are you sure you want to delete ${count} selected item${
        count === 1 ? '' : 's'
      }?`;
    }
    return 'Are you sure you want to delete this item?';
  }

  // --- Toolbar (opt-in via `toolbar`) ---

  // The toolbar renders only when the prop is set with at least one control on.
  private hasToolbar(): boolean {
    return (
      !!this.toolbar && (!!this.toolbar.expandCollapse || !!this.toolbar.delete)
    );
  }

  // The delete button is enabled only in multi-select once something is checked.
  private hasCheckedSelection(): boolean {
    return (
      this.isMultiSelect() &&
      this.coerceArray<string>(this.checkedNodeIds).length > 0
    );
  }

  // True when every expandable node is already open (drives the toggle's label/icon).
  private isAllExpanded(): boolean {
    const expandable = getExpandableNodeIds(this.getNodes());
    if (!expandable.length) return false;
    const expanded = new Set(this.coerceArray<string>(this.expandedNodeIds));
    return expandable.every((id: string) => expanded.has(id));
  }

  private handleExpandAllToggle = () => {
    this.expandAllChange.emit({ expanded: !this.isAllExpanded() });
  };

  private handleToolbarDelete = () => {
    // Rebuild the check-state map so the selection reflects the latest data,
    // then confirm deletion of the top-most checked nodes.
    this.buildCheckStateMap();
    const ids = this.getTopMostCheckedIds();
    if (!ids.length) return;
    this.pendingDeleteId = undefined;
    this.pendingDeleteIds = ids;
    this.getDeleteDialog()?.showModal();
  };

  // Collect the top-most checked nodes: a node whose derived state is 'checked'
  // and whose parent is not fully checked. This captures each checked branch once
  // (a checked parent covers its descendants) plus any individually checked leaf.
  private getTopMostCheckedIds(): string[] {
    const ids: string[] = [];
    const visit = (node: ITreeNode, parentChecked: boolean): void => {
      const checked = this.getCheckStateById(node.id) === 'checked';
      if (checked && !parentChecked) ids.push(node.id);
      node.children?.forEach((child) => visit(child, checked));
    };
    this.getNodes().forEach((node) => visit(node, false));
    return ids;
  }

  private handleSearchInput = (e: CustomEvent) => {
    const value =
      (e as unknown as { detail?: { target?: HTMLInputElement } }).detail
        ?.target?.value ?? '';
    this.setSearchQuery(value);
  };

  private handleSearchClear = () => this.setSearchQuery('');

  // Update the built-in search query; a changed query re-forces surviving
  // parents open (mirroring onFilterChange for the controlled `filter` prop).
  private setSearchQuery(value: string): void {
    if (value === this.searchQuery) return;
    this.searchQuery = value;
    if (this.filterCollapsedIds.size) {
      this.filterCollapsedIds = new Set();
    }
  }

  private renderSearch(): VNode | null {
    if (!this.searchable) return null;

    return (
      <modus-wc-text-input
        aria-label="Search tree"
        customClass="modus-wc-content-tree-search"
        includeClear
        includeSearch
        placeholder="Search…"
        size={this.getSearchInputSize() as ModusSize}
        type="search"
        value={this.searchQuery}
        onInputChange={this.handleSearchInput}
        onClearClick={this.handleSearchClear}
      />
    );
  }

  private renderToolbar(): VNode | null {
    if (!this.hasToolbar()) return null;

    const toolbar = this.toolbar!;
    const allExpanded = this.isAllExpanded();

    return (
      <modus-wc-toolbar
        aria-label="Content tree toolbar"
        customClass="modus-wc-content-tree-toolbar"
      >
        <div class="modus-wc-content-tree-toolbar-end" slot="end">
          {toolbar.delete ? (
            <modus-wc-button
              aria-label="Delete selected"
              color="tertiary"
              disabled={!this.hasCheckedSelection()}
              shape="square"
              size={this.getControlButtonSize()}
              variant="borderless"
              onButtonClick={this.handleToolbarDelete}
            >
              <modus-wc-icon
                decorative
                name="delete"
                variant="solid"
                size={this.getActionIconSize()}
              />
            </modus-wc-button>
          ) : null}
          {toolbar.expandCollapse ? (
            <modus-wc-button
              aria-label={allExpanded ? 'Collapse all' : 'Expand all'}
              color="tertiary"
              shape="square"
              size={this.getControlButtonSize()}
              variant="borderless"
              onButtonClick={this.handleExpandAllToggle}
            >
              <modus-wc-icon
                decorative
                name={allExpanded ? 'unfold_less' : 'unfold_more'}
                size={this.getActionIconSize()}
              />
            </modus-wc-button>
          ) : null}
        </div>
      </modus-wc-toolbar>
    );
  }

  // The search box and toolbar stack vertically (one per row) above the tree.
  private renderControls(): VNode | null {
    if (!this.searchable && !this.hasToolbar()) return null;

    return (
      <div class="modus-wc-content-tree-controls">
        {this.renderSearch()}
        {this.renderToolbar()}
      </div>
    );
  }

  // --- Inline editing ---

  private handleEditInput = (e: CustomEvent) => {
    const target = (e as unknown as { detail?: { target?: HTMLInputElement } })
      .detail?.target;
    this.draftLabel = target?.value ?? '';
  };

  private hasEditChanged(): boolean {
    return this.draftLabel.trim() !== this.editOriginalLabel.trim();
  }

  private commitEdit = (node: ITreeNode) => {
    if (this.editResolved) return;
    this.editResolved = true;
    if (!this.hasEditChanged()) {
      this.nodeEditCancel.emit({ id: node.id });
      return;
    }
    this.nodeRename.emit({ id: node.id, label: this.draftLabel.trim() });
  };

  private cancelEdit = (node: ITreeNode) => {
    if (this.editResolved) return;
    this.editResolved = true;
    this.nodeEditCancel.emit({ id: node.id });
  };

  private isMultiSelect(): boolean {
    return this.selectionMode === 'multiple';
  }

  /**
   * Icon-only row/toolbar controls (chevron, drag handle, eye, ellipsis, toolbar
   * buttons). Uses the atom's default sizes — no custom width/height. `md` tree →
   * `xs` button; `lg` → `sm`; `sm` clamps at `xs` (the smallest `DaisySize`).
   */
  private getControlButtonSize(): DaisySize {
    return this.size === 'lg' ? 'sm' : 'xs';
  }

  private getSearchInputSize(): DaisySize {
    switch (this.size) {
      case 'sm':
        return 'sm';
      case 'lg':
        return 'md';
      default:
        return 'sm';
    }
  }

  /** Glyph inside icon-only controls: `sm` tree → `xs`; `md` → `sm`; `lg` → `md`. */
  private getActionIconSize(): DaisySize {
    switch (this.size) {
      case 'sm':
        return 'xs';
      case 'lg':
        return 'md';
      default:
        return 'sm';
    }
  }

  /** Node glyph (start icon): `sm` tree → `xs`; `md` → `sm`; `lg` → `md`. */
  private getNodeIconSize(): DaisySize {
    switch (this.size) {
      case 'sm':
        return 'xs';
      case 'lg':
        return 'md';
      default:
        return 'sm';
    }
  }

  /** Checkbox: `sm` and `md` trees → `sm`; `lg` → `md`. */
  private getCheckboxSize(): ModusSize {
    return this.size === 'lg' ? 'md' : 'sm';
  }

  // Build `checkStateById` for the whole tree in a single post-order pass:
  // leaves read directly from `checkedNodeIds`; parents aggregate their
  // descendants into checked / unchecked / mixed. Computed from the full
  // (unfiltered) node set so a parent still aggregates over all of its
  // descendants while filtering. Only populated in multi-select mode.
  private buildCheckStateMap(): void {
    this.checkStateById.clear();
    if (!this.isMultiSelect()) return;

    const checked = new Set(this.coerceArray<string>(this.checkedNodeIds));

    const visit = (node: ITreeNode): CheckState => {
      let state: CheckState;
      if (isLazyUnloaded(node)) {
        // Leaves are unknown until children load; treat as unchecked.
        state = 'unchecked';
      } else if (!node.children?.length) {
        state = checked.has(node.id) ? 'checked' : 'unchecked';
      } else {
        const childStates = node.children.map(visit);
        state = childStates.every((s) => s === 'checked')
          ? 'checked'
          : childStates.every((s) => s === 'unchecked')
            ? 'unchecked'
            : 'indeterminate';
      }
      this.checkStateById.set(node.id, state);
      return state;
    };

    this.getNodes().forEach(visit);
  }

  private getNodes(): ITreeNode[] {
    return this.coerceArray<ITreeNode>(this.nodes);
  }

  // The filter string currently driving the view: the built-in search box's
  // query when `searchable`, otherwise the controlled `filter` prop.
  private getActiveFilter(): string {
    return (this.searchable ? this.searchQuery : this.filter) ?? '';
  }

  private isFiltering(): boolean {
    return this.getActiveFilter().trim().length > 0;
  }

  // The tree actually rendered: pruned to matches + their ancestors when a
  // filter is active, otherwise the full data set.
  private getRenderNodes(): ITreeNode[] {
    const nodes = this.getNodes();
    return this.isFiltering()
      ? filterTree(nodes, this.getActiveFilter())
      : nodes;
  }

  // O(1) lookup into the per-render `checkStateById` cache (see
  // buildCheckStateMap). Unknown ids read as unchecked.
  private getCheckStateById(id: string): CheckState {
    return this.checkStateById.get(id) ?? 'unchecked';
  }

  private isExpanded(id: string): boolean {
    // While filtering, parents default to open so the path to each match is
    // visible. The user may collapse one for the duration of this filter
    // session (tracked in `filterCollapsedIds`); the persisted
    // `expandedNodeIds` is left untouched and restored once the filter clears.
    if (this.isFiltering()) return !this.filterCollapsedIds.has(id);
    return this.coerceArray<string>(this.expandedNodeIds).includes(id);
  }

  // Ask the app to fetch children the first time a lazy node is expanded,
  // whether via the chevron or a controlled `expandedNodeIds` update.
  private requestLazyLoadIfNeeded(id: string): void {
    if (this.isFiltering()) return;
    const node = findNode(this.getNodes(), id);
    if (!node || !isLazyUnloaded(node) || this.loadingIds.has(id)) return;
    this.loadingIds = new Set(this.loadingIds).add(id);
    this.nodeLoadChildren.emit({ id });
  }

  private syncLazyLoadsForExpandedNodes(): void {
    if (this.isFiltering()) return;
    for (const id of this.coerceArray<string>(this.expandedNodeIds)) {
      this.requestLazyLoadIfNeeded(id);
    }
  }

  // Find the 1st-level node whose subtree (itself or any descendant) contains
  // the selected node, so the family indicator line can be anchored to it.
  private getActiveRootId(): string | undefined {
    const selected = this.selectedNodeId;
    if (!selected) return undefined;

    const containsSelected = (node: ITreeNode): boolean =>
      node.id === selected ||
      !!node.children?.some((child) => containsSelected(child));

    return this.getNodes().find((root) => containsSelected(root))?.id;
  }

  // Support both property (array) and attribute (JSON string) assignment.
  private coerceArray<T>(value: T[] | string | undefined): T[] {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string' && value.trim()) {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  }

  // A placeholder row shown in place of a lazy node's children while the
  // application fetches them (see `nodeLoadChildren`). Disabled so it is not
  // selectable; only the spinner is shown, which announces the loading state
  // via its built-in role="status" / "Loading" accessible name.
  private renderLoadingRow(node: ITreeNode): VNode {
    return (
      <modus-wc-tree-item
        key={`${node.id}-loading`}
        customClass="modus-wc-content-tree-loading"
        disabled
        label=""
        size={this.size}
        value={`${node.id}-loading`}
      >
        <div class="modus-wc-content-tree-node-start" slot="start">
          <modus-wc-loader
            class="modus-wc-content-tree-loader"
            size={this.getNodeIconSize()}
            variant="spinner"
          />
        </div>
      </modus-wc-tree-item>
    );
  }

  private renderNode = (
    node: ITreeNode,
    activeRootId?: string,
    index = 0,
    ancestorDisabled = false
  ): VNode => {
    // `hasChildren` is truthy when the node has loaded children OR is a lazy
    // node still awaiting them (so it still shows an expand chevron).
    const hasChildren = !!node.children?.length || isLazyUnloaded(node);
    const expanded = hasChildren && this.isExpanded(node.id);
    const editing = node.id === this.editingNodeId;

    // A node is effectively disabled (locked) when it OR any ancestor is locked.
    // Only the topmost locked node ("lock owner") keeps an interactive eye so it
    // can be unlocked; descendants inherit the lock and cannot be toggled until
    // the ancestor is unlocked. Each node still keeps its OWN `disabled` state.
    const effectiveDisabled = !!node.disabled || ancestorDisabled;
    const isLockOwner = effectiveDisabled && !ancestorDisabled;

    const classes: string[] = [];
    if (hasChildren) classes.push('modus-wc-content-tree-parent');
    // `activeRootId` is a root id (ids are unique), so this only matches the
    // 1st-level base parent of the selected node, never an inner node.
    if (node.id === activeRootId) {
      classes.push('modus-wc-content-tree-family-active');
    }
    if (this.allowDragDrop) {
      if (this.draggingId === node.id) {
        classes.push('modus-wc-content-tree-dragging');
      }
      if (this.dragOverId === node.id && this.dropPosition) {
        classes.push(`modus-wc-content-tree-drop-${this.dropPosition}`);
      }
    }

    // A drag handle appears on hover; dragging is disabled while filtering
    // (order is ambiguous in a pruned view), while editing, and on disabled rows.
    const showDragHandle =
      this.allowDragDrop &&
      !this.isFiltering() &&
      !editing &&
      !effectiveDisabled;

    // Folding the sibling index into the key makes a reordered row's key change,
    // so Stencil recreates it at the new position instead of trying to move it.
    // With `shadow: false`, slot-relocated custom elements are not physically
    // moved on a keyed reorder, so the create/destroy path (the same one add and
    // delete rely on) is what actually reflects the new order in the DOM.
    return (
      <modus-wc-tree-item
        key={`${node.id}#${index}`}
        customClass={classes.join(' ') || undefined}
        disabled={effectiveDisabled}
        label={editing ? '' : node.label}
        selected={node.id === this.selectedNodeId}
        size={this.size}
        value={node.id}
        onDragEnter={
          this.allowDragDrop
            ? (e: DragEvent) => this.handleDragEnter(e)
            : undefined
        }
        onDragOver={
          this.allowDragDrop
            ? (e: DragEvent) => this.handleDragOver(e, node)
            : undefined
        }
        onDragLeave={
          this.allowDragDrop
            ? (e: DragEvent) => this.handleDragLeave(e, node)
            : undefined
        }
        onDrop={
          this.allowDragDrop
            ? (e: DragEvent) => this.handleDrop(e, node)
            : undefined
        }
      >
        {showDragHandle ? (
          <modus-wc-button
            slot="start"
            aria-label={`Reorder ${node.label || 'item'}`}
            class="modus-wc-content-tree-drag-handle"
            color="tertiary"
            data-node-id={node.id}
            shape="square"
            size={this.getControlButtonSize()}
            variant="borderless"
            onDragStart={(e: DragEvent) => this.handleDragStart(e, node)}
            onDragEnd={this.handleDragEnd}
          >
            <modus-wc-icon
              decorative
              name="drag_indicator"
              size={this.getActionIconSize()}
            />
          </modus-wc-button>
        ) : null}
        <div class="modus-wc-content-tree-node-start" slot="start">
          {hasChildren ? (
            <modus-wc-button
              aria-expanded={String(expanded)}
              aria-label={`${expanded ? 'Collapse' : 'Expand'} ${node.label || 'item'}`}
              class="modus-wc-content-tree-chevron modus-wc-content-tree-row-control"
              color="tertiary"
              disabled={effectiveDisabled}
              shape="square"
              size={this.getControlButtonSize()}
              variant="borderless"
              onButtonClick={(e: CustomEvent) =>
                this.handleExpandToggle(e, node)
              }
            >
              <modus-wc-icon
                decorative
                name={expanded ? 'expand_more' : 'chevron_right'}
                size={this.getActionIconSize()}
              />
            </modus-wc-button>
          ) : (
            // Invisible, same-sized chevron placeholder so leaf labels align
            // under parent labels without a custom-width spacer.
            <modus-wc-button
              aria-hidden="true"
              class="modus-wc-content-tree-toggle-spacer modus-wc-content-tree-row-control"
              color="tertiary"
              disabled
              shape="square"
              size={this.getControlButtonSize()}
              variant="borderless"
            >
              <modus-wc-icon
                decorative
                name="chevron_right"
                size={this.getActionIconSize()}
              />
            </modus-wc-button>
          )}
          {this.isMultiSelect() ? (
            <modus-wc-checkbox
              aria-label={node.label ? `Select ${node.label}` : 'Select node'}
              disabled={effectiveDisabled || isLazyUnloaded(node)}
              indeterminate={
                this.getCheckStateById(node.id) === 'indeterminate'
              }
              size={this.getCheckboxSize()}
              value={this.getCheckStateById(node.id) === 'checked'}
              onInputChange={(e: CustomEvent) =>
                this.handleCheckboxChange(e, node)
              }
            />
          ) : null}
          {node.icon ? (
            <modus-wc-icon
              decorative
              name={node.icon.name}
              size={this.getNodeIconSize()}
              variant={node.icon.variant}
            />
          ) : null}
          {editing ? (
            <modus-wc-text-input
              aria-label={`Edit name for ${node.label || 'new node'}`}
              class="modus-wc-content-tree-edit-input"
              placeholder="Enter name"
              size={this.size}
              value={node.label}
              onInputChange={this.handleEditInput}
              onInputBlur={() => this.commitEdit(node)}
            />
          ) : null}
        </div>
        {!editing ? (
          <div
            class={`modus-wc-content-tree-actions${
              isLockOwner ? ' modus-wc-content-tree-lock-owner' : ''
            }`}
            slot="end"
          >
            <modus-wc-button
              aria-label={
                effectiveDisabled
                  ? `Enable ${node.label || 'item'}`
                  : `Disable ${node.label || 'item'}`
              }
              class="modus-wc-content-tree-visibility modus-wc-content-tree-row-control"
              color="tertiary"
              disabled={ancestorDisabled}
              shape="square"
              size={this.getControlButtonSize()}
              variant="borderless"
              onButtonClick={(e: CustomEvent) =>
                this.handleVisibilityToggle(e, node)
              }
            >
              <modus-wc-icon
                decorative
                name={effectiveDisabled ? 'visibility_off' : 'visibility_on'}
                size={this.getActionIconSize()}
              />
            </modus-wc-button>
            {!effectiveDisabled ? (
              <modus-wc-dropdown-menu
                buttonAriaLabel={`Actions for ${node.label || 'item'}`}
                buttonColor="tertiary"
                buttonShape="square"
                buttonSize={this.getControlButtonSize()}
                buttonVariant="borderless"
                customClass="modus-wc-content-tree-row-control"
                menuPlacement="bottom-end"
                menuSize={this.size}
              >
                <modus-wc-icon
                  slot="button"
                  decorative
                  name="more_vertical"
                  size={this.getActionIconSize()}
                />
                <div slot="menu">
                  <modus-wc-menu-item
                    label="Edit name"
                    value="edit"
                    onItemSelect={(e: CustomEvent<{ value: string }>) =>
                      this.onMenuAction(e, 'edit', node)
                    }
                  />
                  <modus-wc-menu-item
                    label="Duplicate"
                    value="duplicate"
                    onItemSelect={(e: CustomEvent<{ value: string }>) =>
                      this.onMenuAction(e, 'duplicate', node)
                    }
                  />
                  <modus-wc-menu-item
                    label="Add New Above"
                    value="above"
                    onItemSelect={(e: CustomEvent<{ value: string }>) =>
                      this.onMenuAction(e, 'above', node)
                    }
                  />
                  <modus-wc-menu-item
                    label="Add New Below"
                    value="below"
                    onItemSelect={(e: CustomEvent<{ value: string }>) =>
                      this.onMenuAction(e, 'below', node)
                    }
                  />
                  <modus-wc-menu-item
                    label="Add Child Node"
                    value="child"
                    onItemSelect={(e: CustomEvent<{ value: string }>) =>
                      this.onMenuAction(e, 'child', node)
                    }
                  />
                  <modus-wc-menu-item
                    label="Delete"
                    value="delete"
                    onItemSelect={(e: CustomEvent<{ value: string }>) =>
                      this.onMenuAction(e, 'delete', node)
                    }
                  />
                </div>
              </modus-wc-dropdown-menu>
            ) : (
              // A disabled row hides the ellipsis menu, but an equally sized,
              // invisible placeholder reserves its width so the eye toggle keeps
              // the same horizontal position as on enabled rows (no jump).
              <modus-wc-button
                aria-hidden="true"
                class="modus-wc-content-tree-actions-spacer modus-wc-content-tree-row-control"
                color="tertiary"
                disabled
                shape="square"
                size={this.getControlButtonSize()}
                variant="borderless"
              >
                <modus-wc-icon
                  decorative
                  name="more_vertical"
                  size={this.getActionIconSize()}
                />
              </modus-wc-button>
            )}
          </div>
        ) : null}
        {expanded ? (
          <modus-wc-tree-menu
            isSubMenu
            customClass="modus-wc-menu-dropdown-show"
          >
            {node.children === undefined
              ? this.renderLoadingRow(node)
              : node.children.map((child, index) =>
                  this.renderNode(child, activeRootId, index, effectiveDisabled)
                )}
          </modus-wc-tree-menu>
        ) : null}
      </modus-wc-tree-item>
    );
  };

  render() {
    this.buildCheckStateMap();
    const activeRootId = this.getActiveRootId();
    const nodes = this.getRenderNodes();

    return (
      <Host class={this.customClass || undefined}>
        {this.renderControls()}
        {/* The inner menu stays in 'single' mode so a row click only sets the
            active node. Multi-select is handled by our own checkboxes (rendered
            in slot="start"), keeping "active" and "checked" fully independent. */}
        <modus-wc-tree-menu
          bordered={this.bordered}
          selectionMode="single"
          size={this.size}
          {...this.inheritedAttributes}
        >
          {nodes.map((node, index) =>
            this.renderNode(node, activeRootId, index)
          )}
        </modus-wc-tree-menu>

        <modus-wc-modal
          aria-label="Confirm deletion"
          backdrop="static"
          customClass="modus-wc-content-tree-modal"
          modalId={this.deleteModalId}
          position="center"
          showClose={false}
        >
          <div class="modus-wc-content-tree-modal-body" slot="content">
            <div class="modus-wc-content-tree-modal-message">
              <modus-wc-typography
                label="Confirm Deletion"
                size="md"
                weight="semibold"
              />
              <modus-wc-typography
                label={this.getDeleteMessage()}
                size="sm"
                weight="normal"
              />
            </div>
          </div>
          <div class="modus-wc-content-tree-modal-footer" slot="footer">
            <modus-wc-button
              color="tertiary"
              size="sm"
              variant="filled"
              onButtonClick={() => this.closeDeleteConfirm()}
            >
              Cancel
            </modus-wc-button>
            <modus-wc-button
              color="danger"
              size="sm"
              onButtonClick={this.confirmDelete}
            >
              Delete
            </modus-wc-button>
          </div>
        </modus-wc-modal>
      </Host>
    );
  }
}
