import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { LOGO_VARIANTS } from '../modus-wc-logo/logo-constants';
import { AppName } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import {
  focusAppMenuItem,
  getGridColumnCount,
  getNavigationOffset,
  getTargetFocusIndex,
  reorderGridItem,
  reorderListItem,
} from './utils/app-menu-keyboard';

export interface IAppMenuItem {
  /** The app name of the menu item. */
  appName: AppName;
}

@Component({
  tag: 'modus-wc-app-menu',
  styleUrl: 'modus-wc-app-menu.scss',
  shadow: false,
})
export class ModusWcAppMenu {
  private inheritedAttributes: Attributes = {};

  @Element() el!: HTMLElement;

  /** custom class to apply to the menu */
  @Prop() customClass?: string = '';

  /** The layout of the menu. */
  @Prop({ mutable: true }) layout?: 'list' | 'grid' = 'list';

  /** The apps to display in the menu. */
  @Prop({ mutable: true }) apps?: IAppMenuItem[] = [];

  /** Emit event when the layout changes */
  @StencilEvent() layoutChange!: EventEmitter<{
    layout: 'list' | 'grid';
  }>;

  /** Emitted when reordering is confirmed via "Done" and the order differs from when edit started */
  @StencilEvent() itemsOrderChange!: EventEmitter<IAppMenuItem[]>;

  /** Emitted when an item is clicked */
  @StencilEvent() itemClick!: EventEmitter<{ appName: AppName }>;

  @State() isEditMode = false;

  @State() draggedItemPos: { appIndex: number } | null = null;

  @State() dropTargetIndex: number | null = null;

  @State() grabbedItemPos: { appIndex: number } | null = null;

  @State() truncatedApps: Set<AppName> = new Set();

  private appsSnapshot: IAppMenuItem[] | null = null;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.scheduleTooltipUpdate();
  }

  @Watch('apps')
  onAppsChange() {
    if (!this.isEditMode) {
      this.scheduleTooltipUpdate();
    }
  }

  private scheduleTooltipUpdate() {
    requestAnimationFrame(() => {
      if (this.layout === 'grid') {
        this.updateGridTooltips();
      } else {
        this.updateListTooltips();
      }
    });
  }

  private setsAreEqual(a: Set<AppName>, b: Set<AppName>): boolean {
    if (a.size !== b.size) return false;
    for (const name of a) {
      if (!b.has(name)) return false;
    }
    return true;
  }

  private setTruncatedApps(next: Set<AppName>) {
    if (this.setsAreEqual(next, this.truncatedApps)) return;
    this.truncatedApps = next;
  }

  private updateGridTooltips() {
    const updated = new Set<AppName>();
    const gridItems = this.el.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem, appIndex) => {
      const label = gridItem.querySelector('.grid-item-text-label');
      const appName = this.apps?.[appIndex]?.appName;
      if (label && appName) {
        const isTruncated =
          label.scrollWidth > label.clientWidth ||
          label.scrollHeight > label.clientHeight;
        if (isTruncated) {
          updated.add(appName);
        }
      }
    });
    this.setTruncatedApps(updated);
  }

  /** Label text node that visually truncates (inner div), not `.modus-wc-menu-item-labels`. */
  private getListMenuItemLabelTextElement(row: Element): HTMLElement | null {
    const labels = row.querySelector('.modus-wc-menu-item-labels');
    if (!labels) return null;

    // Walk direct children only; `:scope >` is unavailable in mock-doc (used in tests).
    for (const child of Array.from(labels.children)) {
      if (child.tagName === 'MODUS-WC-TOOLTIP') {
        const textDiv = child.firstElementChild?.firstElementChild ?? null;
        return textDiv as HTMLElement | null;
      }

      if (
        child.tagName === 'DIV' &&
        !child.classList.contains('modus-wc-menu-item-sublabel')
      ) {
        return child as HTMLElement;
      }
    }

    return null;
  }

  private updateListTooltips() {
    const updated = new Set<AppName>();
    const rows = this.el.querySelectorAll('.app-menu-item-row');
    rows.forEach((row, appIndex) => {
      const appName = this.apps?.[appIndex]?.appName;
      if (!appName) return;

      const textEl = this.getListMenuItemLabelTextElement(row);
      if (!textEl) return;

      const isTruncated =
        textEl.scrollWidth > textEl.clientWidth ||
        textEl.scrollHeight > textEl.clientHeight;
      if (isTruncated) {
        updated.add(appName);
      }
    });
    this.setTruncatedApps(updated);
  }

  private getDisplayName(appName: AppName): string {
    return LOGO_VARIANTS[appName]?.displayName ?? appName;
  }

  @Watch('layout')
  onLayoutChange(newLayout: 'list' | 'grid') {
    this.layoutChange.emit({ layout: newLayout });
    this.scheduleTooltipUpdate();
  }

  private handleEdit() {
    this.appsSnapshot = [...(this.apps ?? [])];
    this.isEditMode = true;
    const layout = this.layout ?? 'list';
    requestAnimationFrame(() => {
      focusAppMenuItem(this.el, layout, 0);
    });
  }

  private hasOrderChangedSinceEdit(): boolean {
    const snapshot = this.appsSnapshot;
    if (!snapshot) return false;
    const current = this.apps ?? [];
    if (current.length !== snapshot.length) return true;
    // Length equality guarantees snapshot[i] is defined here.
    return current.some((item, i) => item.appName !== snapshot[i].appName);
  }

  private handleDone() {
    const shouldEmit = this.hasOrderChangedSinceEdit();
    this.isEditMode = false;
    this.grabbedItemPos = null;
    this.appsSnapshot = null;
    if (shouldEmit) {
      this.itemsOrderChange.emit([...(this.apps ?? [])]);
    }
  }

  private handleCancel() {
    if (this.appsSnapshot) {
      this.apps = this.appsSnapshot;
    }
    this.appsSnapshot = null;
    this.isEditMode = false;
    this.grabbedItemPos = null;
  }

  private handleKeyDown(e: KeyboardEvent, appIndex: number) {
    switch (e.key) {
      case ' ':
      case 'Enter': {
        if (this.isEditMode) {
          e.preventDefault();
          this.grabbedItemPos = this.grabbedItemPos ? null : { appIndex };
        } else {
          const app = this.apps?.[appIndex];
          if (app) {
            e.preventDefault();
            this.itemClick.emit({ appName: app.appName });
          }
        }
        break;
      }

      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight': {
        const layout = this.layout ?? 'list';
        const gridCols = layout === 'grid' ? getGridColumnCount(this.el) : 1;
        const offset = getNavigationOffset(e.key, layout, gridCols);
        if (offset === null) return;

        e.preventDefault();
        e.stopPropagation();

        if (this.isEditMode && this.grabbedItemPos) {
          this.reorderByKeyboard(appIndex, offset);
        } else {
          this.navigateFocusByKeyboard(appIndex, offset);
        }
        break;
      }

      case 'Escape':
        if (this.isEditMode && this.grabbedItemPos) {
          e.preventDefault();
          this.grabbedItemPos = null;
        }
        break;
    }
  }

  private reorderByKeyboard(appIndex: number, offset: number) {
    const apps = this.apps ?? [];
    const layout = this.layout ?? 'list';
    const result =
      layout === 'grid'
        ? reorderGridItem(apps, appIndex, offset)
        : reorderListItem(apps, appIndex, offset);

    if (result) {
      this.apps = result.items;
      this.grabbedItemPos = { appIndex: result.targetIndex };
      requestAnimationFrame(() => {
        focusAppMenuItem(this.el, layout, result.targetIndex);
      });
    }
  }

  private navigateFocusByKeyboard(appIndex: number, offset: number) {
    const layout = this.layout ?? 'list';
    const targetIdx = getTargetFocusIndex(
      appIndex,
      offset,
      this.apps?.length ?? 0
    );

    if (targetIdx !== null) {
      requestAnimationFrame(() => {
        focusAppMenuItem(this.el, layout, targetIdx);
      });
    }
  }

  private isGrabbed(appIndex: number): boolean {
    return this.grabbedItemPos?.appIndex === appIndex;
  }

  // Release the grab when keyboard focus moves out of the grabbed row,
  // otherwise the previously grabbed row keeps its outline alongside the
  // newly focused one (e.g., after pressing Tab).
  private handleRowFocusOut(e: FocusEvent, appIndex: number) {
    if (!this.isGrabbed(appIndex)) return;

    const row = e.currentTarget as HTMLElement | null;
    const next = e.relatedTarget as Node | null;
    if (row && next && row.contains(next)) return;

    this.grabbedItemPos = null;
  }

  private isDragSource(appIndex: number): boolean {
    return this.draggedItemPos?.appIndex === appIndex;
  }

  private handleDragStart(e: DragEvent, appIndex: number) {
    if (!this.isEditMode) return;
    this.draggedItemPos = { appIndex };
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
    }
  }

  private handleDragOver(e: DragEvent) {
    if (!this.isEditMode) return;
    e.preventDefault();
  }

  private handleDragEnter(e: DragEvent, appIndex: number) {
    if (!this.isEditMode || !this.draggedItemPos) return;
    e.preventDefault();
    this.dropTargetIndex =
      this.draggedItemPos.appIndex !== appIndex ? appIndex : null;
  }

  private handleDragEnd() {
    this.draggedItemPos = null;
    this.dropTargetIndex = null;
  }

  private handleDragLeave(e: DragEvent) {
    const container = e.currentTarget as HTMLElement;
    const related = e.relatedTarget as Node | null;
    if (!related || !container.contains(related)) {
      this.dropTargetIndex = null;
    }
  }

  private handleDrop(e: DragEvent, targetAppIndex: number) {
    if (!this.isEditMode || !this.draggedItemPos) return;
    e.preventDefault();
    e.stopPropagation();

    const apps = [...(this.apps ?? [])];
    const { appIndex } = this.draggedItemPos;
    const [movedItem] = apps.splice(appIndex, 1);
    if (!movedItem) return;
    apps.splice(targetAppIndex, 0, movedItem);
    this.apps = apps;

    this.draggedItemPos = null;
    this.dropTargetIndex = null;
  }

  private handleContainerDrop(e: DragEvent) {
    if (!this.isEditMode || !this.draggedItemPos) return;
    e.preventDefault();

    const apps = [...(this.apps ?? [])];
    const { appIndex } = this.draggedItemPos;
    const [movedItem] = apps.splice(appIndex, 1);
    if (!movedItem) return;
    apps.push(movedItem);
    this.apps = apps;

    this.draggedItemPos = null;
    this.dropTargetIndex = null;
  }

  private renderListLayout() {
    const apps = this.apps ?? [];

    return (
      <div
        class="app-menu-items"
        onDragLeave={(e) => this.handleDragLeave(e)}
        onDragOver={(e) => this.handleDragOver(e)}
        onDrop={(e) => this.handleContainerDrop(e)}
      >
        <modus-wc-menu>
          {apps.map((app, appIndex) => (
            <div
              aria-label={this.getDisplayName(app.appName)}
              aria-roledescription={
                this.isEditMode ? 'reorderable item' : undefined
              }
              class={`app-menu-item-row ${this.isEditMode ? 'draggable-item' : ''} ${this.isGrabbed(appIndex) ? 'grabbed-item' : ''} ${this.isDragSource(appIndex) ? 'drag-source' : ''} ${this.dropTargetIndex === appIndex ? 'drop-target' : ''}`}
              draggable={this.isEditMode}
              onClick={() => {
                if (!this.isEditMode) {
                  this.itemClick.emit({ appName: app.appName });
                }
              }}
              onDragEnd={() => this.handleDragEnd()}
              onDragEnter={(e) => this.handleDragEnter(e, appIndex)}
              onDragOver={(e) => this.handleDragOver(e)}
              onDragStart={(e) => this.handleDragStart(e, appIndex)}
              onDrop={(e) => this.handleDrop(e, appIndex)}
              onFocusout={(e) => this.handleRowFocusOut(e, appIndex)}
              onKeyDown={(e) => this.handleKeyDown(e, appIndex)}
              role={this.isEditMode ? 'option' : 'listitem'}
              tabindex={this.isEditMode ? 0 : -1}
            >
              {this.isEditMode && (
                <modus-wc-icon
                  name="drag_indicator"
                  custom-class="drag-icon"
                  size="xs"
                ></modus-wc-icon>
              )}
              <modus-wc-menu-item
                label={this.getDisplayName(app.appName)}
                tooltipContent={
                  this.truncatedApps.has(app.appName)
                    ? this.getDisplayName(app.appName)
                    : undefined
                }
                tooltipPosition="auto"
                onItemSelect={(e) => e.stopPropagation()}
              >
                <modus-wc-logo
                  name={app.appName}
                  custom-class="app-logo"
                  emblem={true}
                  slot="start-icon"
                ></modus-wc-logo>
              </modus-wc-menu-item>
            </div>
          ))}
        </modus-wc-menu>
      </div>
    );
  }

  private renderGridLayout() {
    const apps = this.apps ?? [];

    return (
      <div
        class="grid-menu"
        onDragLeave={(e) => this.handleDragLeave(e)}
        onDragOver={(e) => this.handleDragOver(e)}
        onDrop={(e) => this.handleContainerDrop(e)}
      >
        <div class="grid-row" role={this.isEditMode ? 'listbox' : 'list'}>
          {apps.map((app, appIndex) => (
            // Intentionally unkeyed: Stencil's keyed reconciliation triggers
            // insertBefore on grid-item DOM nodes during a reorder, which fires
            // a transient disconnectedCallback on descendant custom elements.
            // modus-wc-tooltip only sets up its popper/popover in
            // componentDidLoad (runs once), so after the disconnect/reconnect
            // its popover is detached from document.body and hover stops
            // showing the tooltip for any moved item. Reusing nodes by
            // position keeps the tooltip subtree connected.
            <div
              aria-label={this.getDisplayName(app.appName)}
              aria-roledescription={
                this.isEditMode ? 'reorderable item' : undefined
              }
              class={`grid-item ${this.isEditMode ? 'draggable-item' : ''} ${this.isGrabbed(appIndex) ? 'grabbed-item' : ''} ${this.isDragSource(appIndex) ? 'drag-source' : ''} ${this.dropTargetIndex === appIndex ? 'drop-target' : ''}`}
              draggable={this.isEditMode}
              onClick={() => {
                if (!this.isEditMode) {
                  this.itemClick.emit({ appName: app.appName });
                }
              }}
              onDragEnd={() => this.handleDragEnd()}
              onDragEnter={(e) => this.handleDragEnter(e, appIndex)}
              onDragOver={(e) => this.handleDragOver(e)}
              onDragStart={(e) => this.handleDragStart(e, appIndex)}
              onDrop={(e) => this.handleDrop(e, appIndex)}
              onFocusout={(e) => this.handleRowFocusOut(e, appIndex)}
              onKeyDown={(e) => this.handleKeyDown(e, appIndex)}
              role={this.isEditMode ? 'option' : 'listitem'}
              tabindex={0}
            >
              {this.isEditMode && (
                <modus-wc-icon
                  name="drag_indicator"
                  custom-class="drag-icon"
                  size="xs"
                ></modus-wc-icon>
              )}
              <modus-wc-logo
                name={app.appName}
                custom-class="grid-emblem"
                emblem={true}
              ></modus-wc-logo>
              <modus-wc-tooltip
                content={this.getDisplayName(app.appName)}
                disabled={!this.truncatedApps.has(app.appName)}
                position="auto"
              >
                <modus-wc-typography
                  custom-class="grid-item-text-label"
                  size="sm"
                  label={this.getDisplayName(app.appName)}
                ></modus-wc-typography>
              </modus-wc-tooltip>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Host
        {...this.inheritedAttributes}
        class={this.customClass ? this.customClass : undefined}
      >
        <modus-wc-panel height="568px" width="320px">
          <div slot="body">
            <div class="menu-header">
              <div class="header-title">
                <modus-wc-typography
                  size="2xl"
                  weight="semibold"
                  hierarchy="h3"
                  label={this.isEditMode ? 'Edit' : 'Trimble Apps'}
                ></modus-wc-typography>
              </div>
              <div class="header-end-content">
                <slot name="header-end-content"></slot>
                {!this.isEditMode ? (
                  <modus-wc-button
                    aria-label="Edit app order"
                    shape="square"
                    size="sm"
                    variant="filled"
                    color="tertiary"
                    onButtonClick={() => this.handleEdit()}
                  >
                    <modus-wc-icon
                      name="pencil"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                ) : (
                  [
                    <modus-wc-button
                      size="sm"
                      color="tertiary"
                      onButtonClick={() => this.handleCancel()}
                    >
                      Cancel
                    </modus-wc-button>,
                    <modus-wc-button
                      size="sm"
                      color="primary"
                      onButtonClick={() => this.handleDone()}
                    >
                      Done
                    </modus-wc-button>,
                  ]
                )}
              </div>
            </div>
            <div class="app-menu-body">
              {this.layout === 'list'
                ? this.renderListLayout()
                : this.renderGridLayout()}
            </div>
          </div>
        </modus-wc-panel>
      </Host>
    );
  }
}
