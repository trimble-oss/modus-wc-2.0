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
import { DaisySize, ITreeNode, ModusSize, SelectionMode } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import { filterTree, findNode } from './tree-state-manager';

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

  // Id of the 1st-level (base) parent whose family contains the selected node.
  // Recomputed on every render; drives the shared family indicator line.
  private activeRootId?: string;

  // Per-render cache of every node's aggregated checkbox state, built once in
  // render() so each checkbox lookup is O(1) instead of a recursive subtree walk.
  private checkStateById = new Map<string, CheckState>();

  /** Reference to the host element */
  @Element() el!: HTMLElement;

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

  /** When set, only nodes whose label matches (and their ancestors) are shown. Matching is a case-insensitive substring; matched parents reveal their full subtree. */
  @Prop() filter?: string = '';

  /** The tree data. The single source of truth, owned by the consuming application. */
  @Prop() nodes?: ITreeNode[];

  /** The id of the currently selected (active) node. Controlled by the consuming application. */
  @Prop() selectedNodeId?: string;

  /** The selection mode of the content tree. */
  @Prop() selectionMode?: SelectionMode = 'single';

  /** The size of the content tree items. */
  @Prop() size?: ModusSize = 'md';

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

  /** Event emitted when an inline edit is committed. The app should apply the new label and clear `editingNodeId`. */
  @StencilEvent() nodeRename!: EventEmitter<{ id: string; label: string }>;

  /** Event emitted when an inline edit is cancelled. The app should clear `editingNodeId` (and discard a freshly added node if its name is still empty). */
  @StencilEvent() nodeEditCancel!: EventEmitter<{ id: string }>;

  // Id of the node awaiting delete confirmation; drives the built-in modal.
  @State() private pendingDeleteId?: string;

  // Ids the user has manually collapsed during the CURRENT filter session.
  // Transient, view-only state: it never touches the controlled
  // `expandedNodeIds`, and it resets whenever the filter value changes.
  @State() private filterCollapsedIds: Set<string> = new Set();

  // The id used by the inner <dialog> (must be unique per instance).
  private deleteModalId = `content-tree-delete-${contentTreeInstanceId++}`;

  // Draft label while inline-editing, plus a guard so a single edit session
  // resolves exactly once (Enter/blur commit vs Escape cancel never double-fire).
  private draftLabel = '';
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

  componentWillLoad() {
    handleShadowDOMStyles(this.el);

    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Content tree';
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);

    // @Watch does not fire on initial load, so initialize the edit session here
    // when the consumer mounts with `editingNodeId` already set.
    if (this.editingNodeId) {
      this.onEditingNodeIdChange(this.editingNodeId);
    }
  }

  componentDidRender() {
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
    if (e.key !== 'Enter' && e.key !== 'Escape') return;
    if (!this.editingNodeId) return;

    const node = findNode(this.getNodes(), this.editingNodeId);
    if (!node) return;

    e.preventDefault();
    e.stopPropagation();

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

    this.nodeExpandChange.emit({
      id: node.id,
      expanded: !this.isExpanded(node.id),
    });
  };

  private handleCheckboxChange = (e: CustomEvent, node: ITreeNode) => {
    (e as unknown as Event).stopPropagation?.();
    // Clicking an unchecked or mixed checkbox checks the whole branch; clicking
    // a fully checked one unchecks it. The app cascades via `setNodeChecked`.
    const checked = this.getCheckStateById(node.id) !== 'checked';
    this.nodeCheckChange.emit({ id: node.id, checked });
  };

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
    if (trigger) trigger.menuVisible = false;
  }

  private getDeleteDialog(): HTMLDialogElement | null {
    return this.el.querySelector<HTMLDialogElement>(`#${this.deleteModalId}`);
  }

  private openDeleteConfirm(id: string): void {
    this.pendingDeleteId = id;
    this.getDeleteDialog()?.showModal();
  }

  private closeDeleteConfirm(): void {
    this.getDeleteDialog()?.close();
    this.pendingDeleteId = undefined;
  }

  private confirmDelete = () => {
    if (this.pendingDeleteId) {
      this.nodeDelete.emit({ id: this.pendingDeleteId });
    }
    this.closeDeleteConfirm();
  };

  // --- Inline editing ---

  private handleEditInput = (e: CustomEvent) => {
    const target = (e as unknown as { detail?: { target?: HTMLInputElement } })
      .detail?.target;
    this.draftLabel = target?.value ?? '';
  };

  private commitEdit = (node: ITreeNode) => {
    if (this.editResolved) return;
    this.editResolved = true;
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

  /** Icon-only row controls (chevron, ellipsis): one step below tree `size`. */
  private getActionButtonSize(): DaisySize {
    switch (this.size) {
      case 'sm':
        return 'xs';
      case 'lg':
        return 'md';
      default:
        return 'sm';
    }
  }

  /** Icons inside icon-only buttons: one step below the action button. */
  private getActionIconSize(): DaisySize {
    return this.size === 'lg' ? 'sm' : 'xs';
  }

  /** Node glyph in the start slot: matches tree row density. */
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
      if (!node.children?.length) {
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

  private isFiltering(): boolean {
    return !!this.filter && this.filter.trim().length > 0;
  }

  // The tree actually rendered: pruned to matches + their ancestors when a
  // filter is active, otherwise the full data set.
  private getRenderNodes(): ITreeNode[] {
    const nodes = this.getNodes();
    return this.isFiltering() ? filterTree(nodes, this.filter!) : nodes;
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

  private renderNode = (node: ITreeNode): VNode => {
    const hasChildren = !!node.children?.length;
    const expanded = hasChildren && this.isExpanded(node.id);
    const editing = node.id === this.editingNodeId;

    const classes: string[] = [];
    if (hasChildren) classes.push('modus-wc-content-tree-parent');
    // `activeRootId` is a root id (ids are unique), so this only matches the
    // 1st-level base parent of the selected node, never an inner node.
    if (node.id === this.activeRootId) {
      classes.push('modus-wc-content-tree-family-active');
    }

    return (
      <modus-wc-tree-item
        key={node.id}
        customClass={classes.join(' ') || undefined}
        disabled={node.disabled}
        label={editing ? '' : node.label}
        selected={node.id === this.selectedNodeId}
        size={this.size}
        value={node.id}
      >
        <div class="modus-wc-content-tree-node-start" slot="start">
          {hasChildren ? (
            <modus-wc-button
              aria-expanded={String(expanded)}
              aria-label={`${expanded ? 'Collapse' : 'Expand'} ${node.label}`}
              color="tertiary"
              disabled={node.disabled}
              shape="square"
              size={this.getActionButtonSize()}
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
            <span
              aria-hidden="true"
              class="modus-wc-content-tree-toggle-spacer"
            />
          )}
          {this.isMultiSelect() ? (
            <modus-wc-checkbox
              aria-label={node.label ? `Select ${node.label}` : 'Select node'}
              disabled={node.disabled}
              indeterminate={
                this.getCheckStateById(node.id) === 'indeterminate'
              }
              size={this.size}
              value={this.getCheckStateById(node.id) === 'checked'}
              onInputChange={(e: CustomEvent) =>
                this.handleCheckboxChange(e, node)
              }
            />
          ) : null}
          {node.icon ? (
            <modus-wc-icon
              decorative
              name={node.icon}
              size={this.getNodeIconSize()}
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
        {!editing && !node.disabled ? (
          <div class="modus-wc-content-tree-actions" slot="end">
            <modus-wc-dropdown-menu
              buttonAriaLabel={`Actions for ${node.label}`}
              buttonColor="tertiary"
              buttonShape="square"
              buttonSize={this.getActionButtonSize()}
              buttonVariant="borderless"
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
          </div>
        ) : null}
        {expanded ? (
          <modus-wc-tree-menu
            isSubMenu
            customClass="modus-wc-menu-dropdown-show"
          >
            {node.children!.map((child) => this.renderNode(child))}
          </modus-wc-tree-menu>
        ) : null}
      </modus-wc-tree-item>
    );
  };

  render() {
    this.activeRootId = this.getActiveRootId();
    this.buildCheckStateMap();
    const nodes = this.getRenderNodes();

    return (
      <Host class={this.customClass || undefined}>
        {/* The inner menu stays in 'single' mode so a row click only sets the
            active node. Multi-select is handled by our own checkboxes (rendered
            in slot="start"), keeping "active" and "checked" fully independent. */}
        <modus-wc-tree-menu
          bordered={this.bordered}
          selectionMode="single"
          size={this.size}
          {...this.inheritedAttributes}
        >
          {nodes.map((node) => this.renderNode(node))}
        </modus-wc-tree-menu>

        <modus-wc-modal
          aria-label="Confirm delete"
          backdrop="static"
          modalId={this.deleteModalId}
          position="center"
        >
          <span slot="header">Are you sure you want to delete?</span>
          <div slot="content">
            <modus-wc-typography
              label="This action cannot be undone."
              size="md"
            />
          </div>
          <div class="modus-wc-content-tree-modal-footer" slot="footer">
            <modus-wc-button
              color="tertiary"
              size="sm"
              variant="outlined"
              onButtonClick={() => this.closeDeleteConfirm()}
            >
              No
            </modus-wc-button>
            <modus-wc-button
              color="danger"
              size="sm"
              onButtonClick={this.confirmDelete}
            >
              Yes
            </modus-wc-button>
          </div>
        </modus-wc-modal>
      </Host>
    );
  }
}
