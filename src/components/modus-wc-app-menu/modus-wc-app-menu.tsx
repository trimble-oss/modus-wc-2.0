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

  /** Emitted when reordering is confirmed via "Done" */
  @StencilEvent() itemsOrderChange!: EventEmitter<IAppMenuItem[]>;

  /** Emitted when an item is clicked */
  @StencilEvent() itemClick!: EventEmitter<{ appIndex: number }>;

  @State() isEditMode = false;

  @State() draggedItemPos: { appIndex: number } | null = null;

  @State() dropTargetIndex: number | null = null;

  @State() grabbedItemPos: { appIndex: number } | null = null;

  @State() truncatedApps: Set<string> = new Set();

  private appsSnapshot: IAppMenuItem[] | null = null;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.scheduleTooltipUpdate();
  }

  @Watch('apps')
  onAppsChange() {
    this.scheduleTooltipUpdate();
  }

  private scheduleTooltipUpdate() {
    if (this.layout !== 'grid') return;
    requestAnimationFrame(() => this.updateGridTooltips());
  }

  private updateGridTooltips() {
    const updated = new Set<string>();
    const gridItems = this.el.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
      const label = gridItem.querySelector('.grid-item-text-label');
      const appName = gridItem
        .querySelector('modus-wc-logo')
        ?.getAttribute('name');
      if (label && appName) {
        const isTruncated =
          label.scrollWidth > label.clientWidth ||
          label.scrollHeight > label.clientHeight;
        if (isTruncated) {
          updated.add(appName);
        }
      }
    });
    this.truncatedApps = updated;
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

  private handleDone() {
    this.isEditMode = false;
    this.grabbedItemPos = null;
    this.appsSnapshot = null;
    this.itemsOrderChange.emit(this.apps);
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
    if (!this.isEditMode) return;

    switch (e.key) {
      case ' ':
      case 'Enter':
        e.preventDefault();
        this.grabbedItemPos = this.grabbedItemPos ? null : { appIndex };
        break;

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

        if (this.grabbedItemPos) {
          this.reorderByKeyboard(appIndex, offset);
        } else {
          this.navigateFocusByKeyboard(appIndex, offset);
        }
        break;
      }

      case 'Escape':
        if (this.grabbedItemPos) {
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
              onClick={() => this.itemClick.emit({ appIndex })}
              aria-label={this.getDisplayName(app.appName)}
              aria-roledescription={
                this.isEditMode ? 'reorderable item' : undefined
              }
              class={`app-menu-item-row ${this.isEditMode ? 'draggable-item' : ''} ${this.isGrabbed(appIndex) ? 'grabbed-item' : ''} ${this.isDragSource(appIndex) ? 'drag-source' : ''} ${this.dropTargetIndex === appIndex ? 'drop-target' : ''}`}
              draggable={this.isEditMode}
              onDragEnd={() => this.handleDragEnd()}
              onDragEnter={(e) => this.handleDragEnter(e, appIndex)}
              onDragOver={(e) => this.handleDragOver(e)}
              onDragStart={(e) => this.handleDragStart(e, appIndex)}
              onDrop={(e) => this.handleDrop(e, appIndex)}
              onKeyDown={(e) => this.handleKeyDown(e, appIndex)}
              role={this.isEditMode ? 'option' : undefined}
              tabindex={this.isEditMode ? 0 : undefined}
            >
              {this.isEditMode && (
                <modus-wc-icon
                  name="drag_indicator"
                  custom-class="drag-icon"
                  size="xs"
                ></modus-wc-icon>
              )}
              <modus-wc-menu-item label={this.getDisplayName(app.appName)}>
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
            <div
              key={app.appName}
              aria-label={this.getDisplayName(app.appName)}
              aria-roledescription={
                this.isEditMode ? 'reorderable item' : undefined
              }
              class={`grid-item ${this.isEditMode ? 'draggable-item' : ''} ${this.isGrabbed(appIndex) ? 'grabbed-item' : ''} ${this.isDragSource(appIndex) ? 'drag-source' : ''} ${this.dropTargetIndex === appIndex ? 'drop-target' : ''}`}
              draggable={this.isEditMode}
              onClick={() => this.itemClick.emit({ appIndex })}
              onDragEnd={() => this.handleDragEnd()}
              onDragEnter={(e) => this.handleDragEnter(e, appIndex)}
              onDragOver={(e) => this.handleDragOver(e)}
              onDragStart={(e) => this.handleDragStart(e, appIndex)}
              onDrop={(e) => this.handleDrop(e, appIndex)}
              onKeyDown={(e) => this.handleKeyDown(e, appIndex)}
              role={this.isEditMode ? 'option' : 'listitem'}
              tabindex={this.isEditMode ? 0 : undefined}
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
                  size="xs"
                  weight="normal"
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
                  size="md"
                  weight="bold"
                  label={this.isEditMode ? 'Edit' : 'Trimble apps'}
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
                    onClick={() => this.handleEdit()}
                  >
                    <modus-wc-icon name="pencil"></modus-wc-icon>
                  </modus-wc-button>
                ) : (
                  [
                    <modus-wc-button
                      size="sm"
                      color="tertiary"
                      onClick={() => this.handleCancel()}
                    >
                      Cancel
                    </modus-wc-button>,
                    <modus-wc-button
                      size="sm"
                      color="primary"
                      onClick={() => this.handleDone()}
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
