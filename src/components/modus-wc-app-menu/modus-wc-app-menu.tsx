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

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
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
    this.itemsOrderChange.emit(this.sections);
  }

  handleCancel() {
    this.sections = [...this.previousSections];
    this.isEditMode = false;
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
                class={`app-menu-item-row ${this.isEditMode ? 'draggable-item' : ''}`}
                draggable={this.isEditMode}
                onDragStart={(e) => this.handleDragStart(e, sIdx, iIdx)}
                onDragOver={(e) => this.handleDragOver(e)}
                onDrop={(e) => this.handleDrop(e, sIdx, iIdx)}
              >
                {this.isEditMode && (
                  <modus-wc-button
                    aria-label="Drag to reorder"
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
        <div class="grid-row" role="list">
          {allItems.map(({ item, sIdx, iIdx }) => (
            <div
              aria-label={this.getDisplayName(item.appName)}
              class={`grid-item ${this.isEditMode ? 'draggable-item' : ''}`}
              draggable={this.isEditMode}
              onDragStart={(e) => this.handleDragStart(e, sIdx, iIdx)}
              onDragOver={(e) => this.handleDragOver(e)}
              onDrop={(e) => this.handleDrop(e, sIdx, iIdx)}
              role="listitem"
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
              <modus-wc-typography
                custom-class="grid-item-text-label"
                size="xs"
                weight="normal"
                label={this.getDisplayName(item.appName)}
              ></modus-wc-typography>
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
        <modus-wc-panel height="600px" width="320px">
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
