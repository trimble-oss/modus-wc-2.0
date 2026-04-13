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

export interface IAppMenuItem {
  /** The app name of the menu item. */
  appName: AppName;
}

export interface IAppMenuSection {
  /** The title of the menu. */
  title?: string;
  /** The subtitle of the menu. */
  subtitle?: string;
  /** The items of the menu. */
  items: IAppMenuItem[];
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

  /** The sections of the menu. */
  @Prop({ mutable: true }) sections?: IAppMenuSection[] = [];

  /** Emit event when the layout changes */
  @StencilEvent() layoutChange!: EventEmitter<{
    layout: 'list' | 'grid';
  }>;

  /** Emitted when reordering is confirmed via "Done" */
  @StencilEvent() itemsOrderChange!: EventEmitter<IAppMenuSection[]>;

  @State() isEditMode = false;

  @State() previousSections: IAppMenuSection[] = [];

  @State() draggedItemPos: { sectionIdx: number; itemIdx: number } | null =
    null;

  @State() grabbedItemPos: { sectionIdx: number; itemIdx: number } | null =
    null;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidRender() {
    this.updateGridTooltips();
  }

  private updateGridTooltips() {
    const tooltips = this.el.querySelectorAll('.grid-item modus-wc-tooltip');
    tooltips.forEach((tooltip) => {
      const label = tooltip.querySelector(
        '.grid-item-text-label'
      ) as HTMLElement;
      if (label) {
        const isTruncated =
          label.scrollWidth > label.clientWidth ||
          label.scrollHeight > label.clientHeight;
        (tooltip as HTMLElement & { disabled: boolean }).disabled =
          !isTruncated;
      }
    });
  }

  private getDisplayName(appName: AppName): string {
    return LOGO_VARIANTS[appName]?.displayName ?? appName;
  }

  @Watch('layout')
  protected onLayoutChange(newLayout: 'list' | 'grid') {
    this.layoutChange.emit({ layout: newLayout });
  }

  handleEdit() {
    this.previousSections = JSON.parse(JSON.stringify(this.sections ?? []));
    this.isEditMode = true;
  }

  handleDone() {
    this.isEditMode = false;
    this.grabbedItemPos = null;
    this.itemsOrderChange.emit(this.sections);
  }

  handleCancel() {
    this.sections = [...this.previousSections];
    this.isEditMode = false;
    this.grabbedItemPos = null;
  }

  handleKeyDown(e: KeyboardEvent, sectionIdx: number, itemIdx: number) {
    if (!this.isEditMode) return;

    switch (e.key) {
      case ' ':
      case 'Enter':
        e.preventDefault();
        if (this.grabbedItemPos) {
          this.grabbedItemPos = null;
        } else {
          this.grabbedItemPos = { sectionIdx, itemIdx };
        }
        break;

      case 'ArrowUp':
        if (this.grabbedItemPos) {
          e.preventDefault();
          if (this.layout === 'grid') {
            this.moveGridItemByKeyboard(-this.getGridColumnCount());
          } else {
            this.moveListItemByKeyboard(-1);
          }
        }
        break;

      case 'ArrowDown':
        if (this.grabbedItemPos) {
          e.preventDefault();
          if (this.layout === 'grid') {
            this.moveGridItemByKeyboard(this.getGridColumnCount());
          } else {
            this.moveListItemByKeyboard(1);
          }
        }
        break;

      case 'ArrowLeft':
        if (this.grabbedItemPos && this.layout === 'grid') {
          e.preventDefault();
          this.moveGridItemByKeyboard(-1);
        }
        break;

      case 'ArrowRight':
        if (this.grabbedItemPos && this.layout === 'grid') {
          e.preventDefault();
          this.moveGridItemByKeyboard(1);
        }
        break;

      case 'Escape':
        if (this.grabbedItemPos) {
          e.preventDefault();
          this.grabbedItemPos = null;
        }
        break;
    }
  }

  private getGridColumnCount(): number {
    const items = this.el.querySelectorAll('.grid-item');
    if (items.length <= 1) return 1;

    const firstTop = (items[0] as HTMLElement).offsetTop;
    let count = 1;
    for (let i = 1; i < items.length; i++) {
      if ((items[i] as HTMLElement).offsetTop === firstTop) {
        count++;
      } else {
        break;
      }
    }

    return count;
  }

  private moveListItemByKeyboard(direction: -1 | 1) {
    if (!this.grabbedItemPos) return;

    const sections = this.sections ?? [];
    const { sectionIdx, itemIdx } = this.grabbedItemPos;
    const section = sections[sectionIdx];
    if (!section) return;

    const targetIdx = itemIdx + direction;

    if (targetIdx >= 0 && targetIdx < section.items.length) {
      const newSections = sections.map((s) => ({
        ...s,
        items: [...s.items],
      }));
      const items = newSections[sectionIdx].items;
      [items[itemIdx], items[targetIdx]] = [items[targetIdx], items[itemIdx]];

      this.sections = newSections;
      this.grabbedItemPos = { sectionIdx, itemIdx: targetIdx };

      requestAnimationFrame(() => {
        this.focusItemAt(sectionIdx, targetIdx);
      });
    } else {
      this.moveItemAcrossSections(direction, sections, sectionIdx, itemIdx);
    }
  }

  private moveItemAcrossSections(
    direction: -1 | 1,
    sections: IAppMenuSection[],
    sectionIdx: number,
    itemIdx: number
  ) {
    const targetSectionIdx = sectionIdx + direction;
    if (targetSectionIdx < 0 || targetSectionIdx >= sections.length) return;

    const newSections = sections.map((s) => ({
      ...s,
      items: [...s.items],
    }));

    const [movedItem] = newSections[sectionIdx].items.splice(itemIdx, 1);
    const targetItemIdx =
      direction === 1 ? 0 : newSections[targetSectionIdx].items.length;
    newSections[targetSectionIdx].items.splice(targetItemIdx, 0, movedItem);

    this.sections = newSections;
    this.grabbedItemPos = {
      sectionIdx: targetSectionIdx,
      itemIdx: targetItemIdx,
    };

    requestAnimationFrame(() => {
      this.focusItemAt(targetSectionIdx, targetItemIdx);
    });
  }

  private moveGridItemByKeyboard(offset: number) {
    if (!this.grabbedItemPos) return;

    const sections = this.sections ?? [];
    const { sectionIdx, itemIdx } = this.grabbedItemPos;

    const sectionSizes = sections.map((s) => s.items.length);
    const flatItems: IAppMenuItem[] = [];
    for (const section of sections) {
      flatItems.push(...section.items.map((item) => ({ ...item })));
    }

    let currentFlatIdx = 0;
    for (let s = 0; s < sectionIdx; s++) {
      currentFlatIdx += sectionSizes[s];
    }
    currentFlatIdx += itemIdx;

    const targetFlatIdx = currentFlatIdx + offset;
    if (targetFlatIdx < 0 || targetFlatIdx >= flatItems.length) return;

    const [movedItem] = flatItems.splice(currentFlatIdx, 1);
    flatItems.splice(targetFlatIdx, 0, movedItem);

    let remaining = [...flatItems];
    const newSections = sections.map((s, idx) => ({
      ...s,
      items: remaining.splice(0, sectionSizes[idx]),
    }));

    let newSectionIdx = 0;
    let newItemIdx = targetFlatIdx;
    for (let s = 0; s < sectionSizes.length; s++) {
      if (newItemIdx < sectionSizes[s]) {
        newSectionIdx = s;
        break;
      }
      newItemIdx -= sectionSizes[s];
    }

    this.sections = newSections;
    this.grabbedItemPos = { sectionIdx: newSectionIdx, itemIdx: newItemIdx };

    requestAnimationFrame(() => {
      this.focusItemAt(newSectionIdx, newItemIdx);
    });
  }

  private focusItemAt(sectionIdx: number, itemIdx: number) {
    const selector =
      this.layout === 'grid'
        ? '.grid-item[tabindex]'
        : '.app-menu-item-row[tabindex]';
    const items = this.el.querySelectorAll(selector);

    let flatIdx = 0;
    const sections = this.sections ?? [];
    for (let s = 0; s < sectionIdx; s++) {
      flatIdx += sections[s]?.items.length ?? 0;
    }
    flatIdx += itemIdx;

    const target = items[flatIdx] as HTMLElement;
    target?.focus();
  }

  private isGrabbed(sectionIdx: number, itemIdx: number): boolean {
    return (
      this.grabbedItemPos?.sectionIdx === sectionIdx &&
      this.grabbedItemPos.itemIdx === itemIdx
    );
  }

  handleDragStart(e: DragEvent, sectionIdx: number, itemIdx: number) {
    if (!this.isEditMode) return;
    this.draggedItemPos = { sectionIdx, itemIdx };
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
    }
  }

  handleDragOver(e: DragEvent) {
    if (!this.isEditMode) return;
    e.preventDefault();
  }

  private cloneSections(): IAppMenuSection[] | null {
    const sections = this.sections ?? [];
    const { sectionIdx, itemIdx } = this.draggedItemPos!;

    if (!sections[sectionIdx] || itemIdx >= sections[sectionIdx].items.length) {
      this.draggedItemPos = null;
      return null;
    }

    return sections.map((s) => ({ ...s, items: [...s.items] }));
  }

  handleDrop(e: DragEvent, targetSectionIdx: number, targetItemIdx: number) {
    if (!this.isEditMode || !this.draggedItemPos) return;
    e.preventDefault();
    e.stopPropagation();

    const { sectionIdx: sIdx, itemIdx: iIdx } = this.draggedItemPos;
    const newSections = this.cloneSections();
    if (!newSections || !newSections[targetSectionIdx]) {
      this.draggedItemPos = null;
      return;
    }

    const [movedItem] = newSections[sIdx].items.splice(iIdx, 1);
    newSections[targetSectionIdx].items.splice(targetItemIdx, 0, movedItem);

    this.sections = newSections;
    this.draggedItemPos = null;
  }

  handleContainerDrop(e: DragEvent, sectionIdx: number) {
    if (!this.isEditMode || !this.draggedItemPos) return;
    e.preventDefault();

    const { sectionIdx: sIdx, itemIdx: iIdx } = this.draggedItemPos;
    const newSections = this.cloneSections();
    if (!newSections || !newSections[sectionIdx]) {
      this.draggedItemPos = null;
      return;
    }

    const [movedItem] = newSections[sIdx].items.splice(iIdx, 1);
    newSections[sectionIdx].items.push(movedItem);

    this.sections = newSections;
    this.draggedItemPos = null;
  }

  renderListLayout() {
    const sections = this.sections ?? [];
    return sections.map((section, sIdx) => (
      <div
        class="app-menu-section"
        role="group"
        aria-label={section.title ?? ''}
      >
        <div class="submenu-title-container">
          <modus-wc-typography
            size="md"
            weight="bold"
            label={section.title ?? ''}
          ></modus-wc-typography>
          <modus-wc-typography
            size="sm"
            weight="normal"
            label={section.subtitle ?? ''}
          ></modus-wc-typography>
        </div>
        <div
          class="app-menu-items"
          onDragOver={(e) => this.handleDragOver(e)}
          onDrop={(e) => this.handleContainerDrop(e, sIdx)}
        >
          <modus-wc-menu>
            {section.items.map((item, iIdx) => (
              <div
                aria-grabbed={
                  this.isEditMode
                    ? this.isGrabbed(sIdx, iIdx)
                      ? 'true'
                      : 'false'
                    : undefined
                }
                aria-roledescription={
                  this.isEditMode ? 'reorderable item' : undefined
                }
                class={`app-menu-item-row ${this.isEditMode ? 'draggable-item' : ''} ${this.isGrabbed(sIdx, iIdx) ? 'grabbed-item' : ''}`}
                draggable={this.isEditMode}
                onDragStart={(e) => this.handleDragStart(e, sIdx, iIdx)}
                onDragOver={(e) => this.handleDragOver(e)}
                onDrop={(e) => this.handleDrop(e, sIdx, iIdx)}
                onKeyDown={(e) => this.handleKeyDown(e, sIdx, iIdx)}
                role={this.isEditMode ? 'option' : undefined}
                tabindex={this.isEditMode ? 0 : undefined}
              >
                {this.isEditMode && (
                  <modus-wc-button
                    aria-label="Reorder"
                    shape="square"
                    size="xs"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      name="drag_indicator"
                      custom-class="drag-icon"
                    ></modus-wc-icon>
                  </modus-wc-button>
                )}
                <modus-wc-menu-item label={this.getDisplayName(item.appName)}>
                  <modus-wc-logo
                    name={item.appName}
                    custom-class="app-logo"
                    emblem={true}
                    slot="start-icon"
                  ></modus-wc-logo>
                </modus-wc-menu-item>
              </div>
            ))}
          </modus-wc-menu>
        </div>
      </div>
    ));
  }

  renderGridLayout() {
    const sections = this.sections ?? [];
    const allItems = sections.flatMap((section, sIdx) =>
      section.items.map((item, iIdx) => ({ item, sIdx, iIdx }))
    );

    return (
      <div
        class="grid-menu"
        onDragOver={(e) => this.handleDragOver(e)}
        onDrop={(e) =>
          this.handleContainerDrop(e, this.draggedItemPos?.sectionIdx ?? 0)
        }
      >
        <div class="grid-row" role={this.isEditMode ? 'listbox' : 'list'}>
          {allItems.map(({ item, sIdx, iIdx }) => (
            <div
              aria-grabbed={
                this.isEditMode
                  ? this.isGrabbed(sIdx, iIdx)
                    ? 'true'
                    : 'false'
                  : undefined
              }
              aria-label={this.getDisplayName(item.appName)}
              aria-roledescription={
                this.isEditMode ? 'reorderable item' : undefined
              }
              class={`grid-item ${this.isEditMode ? 'draggable-item' : ''} ${this.isGrabbed(sIdx, iIdx) ? 'grabbed-item' : ''}`}
              draggable={this.isEditMode}
              onDragStart={(e) => this.handleDragStart(e, sIdx, iIdx)}
              onDragOver={(e) => this.handleDragOver(e)}
              onDrop={(e) => this.handleDrop(e, sIdx, iIdx)}
              onKeyDown={(e) => this.handleKeyDown(e, sIdx, iIdx)}
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
                name={item.appName}
                custom-class="grid-emblem"
                emblem={true}
              ></modus-wc-logo>
              <modus-wc-tooltip
                content={this.getDisplayName(item.appName)}
                position="auto"
              >
                <modus-wc-typography
                  custom-class="grid-item-text-label"
                  size="xs"
                  weight="normal"
                  label={this.getDisplayName(item.appName)}
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
