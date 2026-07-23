import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-tree-item.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { ModusSize, SelectionMode } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable tree item component used to display the item portion of a tree menu.
 *
 * This component supports `start` and `end` slots for custom content at the beginning and end of the item.
 */
@Component({
  tag: 'modus-wc-tree-item',
  styleUrl: 'modus-wc-tree-item.scss',
  shadow: false,
})
export class ModusWcTreeItem {
  private inheritedAttributes: Attributes = {};
  private parentTreeMenuObserver?: MutationObserver;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  @Prop() bordered?: boolean;

  /** If true, renders a checkbox at the start of the tree item. */
  @Prop() checkbox?: boolean;

  /** Custom CSS class to apply to the li element. */
  @Prop() customClass?: string = '';

  /** The disabled state of the tree item. */
  @Prop() disabled?: boolean;

  /** The text rendered in the tree item. */
  @Prop() label: string = '';

  /** The selected state of the tree item. */
  @Prop({ mutable: true }) selected?: boolean;

  /** The focused state of the tree item. */
  @Prop() focused?: boolean;

  /** The size of the tree item. */
  @Prop() size?: ModusSize = 'md';

  /** The text rendered beneath the label. */
  @Prop() subLabel?: string;

  /** The tooltip text to display when hovering over the tree item. */
  @Prop() tooltipContent?: string;

  /** The position of the tooltip relative to the tree item. */
  @Prop() tooltipPosition?: 'auto' | 'top' | 'right' | 'bottom' | 'left' =
    'auto';

  /** The unique identifying value of the tree item. */
  @Prop() value: string = '';

  /** Whether this tree item has a collapsible submenu. When true, the item will show a caret and handle toggle behavior. */
  @Prop() hasSubmenu?: boolean;

  /** When true, prevents the built-in inline submenu toggle on click. The item will only emit `itemSelect` so the consumer can handle the expansion externally (e.g. show a flyout panel). Only has an effect when `hasSubmenu` is also true. */
  @Prop() blockExpand?: boolean;

  /** Internal state to track if submenu is expanded */
  @State() isExpanded: boolean = false;

  @State() private _selectionMode?: SelectionMode;

  /** Event emitted when a tree item is selected. */
  @StencilEvent() itemSelect!: EventEmitter<{
    value: string;
    selected?: boolean;
  }>;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    this._selectionMode = this.resolveSelectionMode();
  }

  componentDidLoad() {
    if (typeof MutationObserver === 'undefined') return;

    const parentTreeMenu = this.el.closest('modus-wc-tree-menu');

    if (parentTreeMenu) {
      this.parentTreeMenuObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.attributeName === 'selection-mode') {
            this.handleSelectionModeChange();
            break;
          }
        }
      });
      this.parentTreeMenuObserver.observe(parentTreeMenu, { attributes: true });
    }
  }

  disconnectedCallback() {
    this.parentTreeMenuObserver?.disconnect();
  }

  private handleSelectionModeChange(): void {
    this._selectionMode = this.resolveSelectionMode();
    this.selected = false;
  }

  private isOwnKeydownTarget(e: KeyboardEvent): boolean {
    const { target } = e;
    if (!target || typeof (target as Element).closest !== 'function') {
      return false;
    }

    return (target as Element).closest('modus-wc-tree-item') === this.el;
  }

  @Listen('keydown')
  handleKeyDown(e: KeyboardEvent) {
    if (this.disabled) return;
    if (!this.isOwnKeydownTarget(e)) return;

    // Nested submenu rows live inside an ancestor tree-item host. Without this
    // guard, Space/Enter on a child bubbles up and activates the parent too.
    const owningItem =
      (e.target as Element | null)?.closest?.('modus-wc-tree-item') ?? null;
    if (owningItem !== this.el) return;

    if (e.key === 'Enter' || e.key === ' ') {
      if (
        this.isInteractiveSlotTarget(e, 'start') ||
        this.isInteractiveSlotTarget(e, 'end')
      ) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      this.handleItemSelect();
    }
  }

  /**
   * Public method to collapse the submenu if it's expanded
   */
  @Method()
  async collapseSubmenu(): Promise<void> {
    if (this.hasSubmenu && this.isExpanded) {
      const submenu = this.el.querySelector(
        '.modus-wc-menu-dropdown'
      ) as HTMLElement;
      const liElement = this.el.querySelector('li');

      if (submenu && liElement) {
        submenu.classList.remove('modus-wc-menu-dropdown-show');
        liElement.classList.remove('modus-wc-menu-item-expanded');
        liElement.classList.remove('modus-wc-menu-dropdown-show');
        this.isExpanded = false;
      }
    }
    return Promise.resolve();
  }

  private getRootTreeMenu(): HTMLElement | null {
    let treeMenu = this.el.closest<HTMLElement>('modus-wc-tree-menu');
    while (treeMenu) {
      const parent =
        treeMenu.parentElement?.closest<HTMLElement>('modus-wc-tree-menu') ??
        null;
      if (!parent) break;
      treeMenu = parent;
    }
    return treeMenu;
  }

  private deselectSiblings(): void {
    const rootTreeMenu = this.getRootTreeMenu();
    if (!rootTreeMenu) return;

    const allItems = rootTreeMenu.querySelectorAll('modus-wc-tree-item');
    allItems.forEach((item) => {
      if (item !== this.el) {
        (item as HTMLElement & { selected?: boolean }).selected = false;
      }
    });
  }

  private resolveSelectionMode() {
    return (
      this.el.closest('modus-wc-tree-menu') as HTMLElement & {
        selectionMode?: SelectionMode;
      }
    )?.selectionMode;
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-menu-item'];

    const isActive = !this.hasSubmenu && !!this.selected;

    const propClasses = convertPropsToClasses({
      active: isActive,
      bordered: this.bordered,
      disabled: this.disabled,
      focused: this.focused,
      size: this.size,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getInteractiveClasses(): string {
    const classList: string[] = ['modus-wc-menu-item-interactive'];
    if (this.hasSubmenu) classList.push('modus-wc-menu-dropdown-toggle');
    return classList.join(' ');
  }

  private getRole(mode?: SelectionMode): string {
    if (mode === 'multiple') return 'menuitemcheckbox';
    if (mode === 'single') return 'menuitemradio';
    return 'menuitem';
  }

  private hasCheckbox(mode?: SelectionMode): boolean {
    return this.checkbox || mode === 'multiple';
  }

  private getAriaChecked(mode?: SelectionMode): string | undefined {
    if (!this.hasCheckbox(mode)) return undefined;
    return this.selected ? 'true' : 'false';
  }

  private getAriaSelected(mode?: SelectionMode): string | undefined {
    if (this.hasCheckbox(mode)) return undefined;
    if (mode === 'single') return this.selected ? 'true' : 'false';
    return undefined;
  }

  private isSlotTarget(event: UIEvent, slotName: 'start' | 'end'): boolean {
    const slotted = Array.from(
      this.el.querySelectorAll(`[slot="${slotName}"]`)
    );
    if (slotted.length === 0) return false;

    // Use the innermost event target so this works regardless of how
    // Stencil's slot relocation affects composedPath ancestry order.
    const innerTarget = event.composedPath()[0] as Node | undefined;
    if (!innerTarget) return false;

    return slotted.some((el) => el === innerTarget || el.contains(innerTarget));
  }

  private isInteractiveSlotTarget(
    event: UIEvent,
    slotName: 'start' | 'end'
  ): boolean {
    if (!this.isSlotTarget(event, slotName)) return false;

    if (slotName === 'end') return true;

    const interactiveSelector =
      'button, a, input, select, textarea, modus-wc-button, modus-wc-checkbox';

    return event.composedPath().some((node) => {
      if (!(node instanceof HTMLElement)) return false;
      return (
        node.matches(interactiveSelector) || !!node.closest(interactiveSelector)
      );
    });
  }

  private handleItemClick = (event: MouseEvent) => {
    if (this.isInteractiveSlotTarget(event, 'end')) return;
    if (this.isInteractiveSlotTarget(event, 'start')) return;

    this.handleItemSelect();

    // Blurring the li prevents the focus ring from sticking after mouse click.
    this.el.querySelector('li')?.blur();
  };

  private handleItemSelect = () => {
    if (this.hasSubmenu) {
      if (this.blockExpand) {
        this.itemSelect.emit({ value: this.value });
        return;
      }

      const sideNav = this.el.closest('modus-wc-side-navigation');
      if (
        sideNav &&
        !(sideNav as HTMLElement & { expanded: boolean }).expanded
      ) {
        this.itemSelect.emit({ value: this.value });
        return;
      }

      const submenu = this.el.querySelector(
        '.modus-wc-menu-dropdown'
      ) as HTMLElement;
      const liElement = this.el.querySelector('li');

      if (submenu && liElement) {
        submenu.classList.toggle('modus-wc-menu-dropdown-show');
        this.isExpanded = submenu.classList.contains(
          'modus-wc-menu-dropdown-show'
        );

        if (this.isExpanded) {
          liElement.classList.add('modus-wc-menu-item-expanded');
          liElement.classList.add('modus-wc-menu-dropdown-show');
        } else {
          liElement.classList.remove('modus-wc-menu-item-expanded');
          liElement.classList.remove('modus-wc-menu-dropdown-show');
        }
      }
    } else if (this.resolveSelectionMode() === 'multiple' || this.checkbox) {
      this.selected = !this.selected;
    } else {
      if (this.resolveSelectionMode() === 'single') {
        this.deselectSiblings();
      }
      this.selected = true;
    }

    this.itemSelect.emit({ value: this.value, selected: this.selected });
  };

  render() {
    const mode = this._selectionMode;

    return (
      <Host>
        <li
          aria-checked={this.getAriaChecked(mode)}
          aria-disabled={this.disabled}
          aria-expanded={this.hasSubmenu ? String(this.isExpanded) : undefined}
          aria-selected={this.getAriaSelected(mode)}
          class={this.getClasses()}
          role={this.getRole(mode)}
          tabIndex={this.disabled ? -1 : 0}
          {...this.inheritedAttributes}
        >
          <div
            class={this.getInteractiveClasses()}
            onClick={this.handleItemClick}
            role="presentation"
            tabIndex={-1}
          >
            <div class="modus-wc-menu-item-content">
              {(this.checkbox || mode === 'multiple') && (
                <modus-wc-checkbox
                  aria-label="Checkbox"
                  disabled={this.disabled}
                  size={this.size}
                  value={!!this.selected}
                />
              )}
              <slot name="start"></slot>
              <div class="modus-wc-menu-item-labels">
                {this.tooltipContent ? (
                  <modus-wc-tooltip
                    content={this.tooltipContent}
                    position={this.tooltipPosition}
                    customClass="modus-wc-menu-item-tooltip"
                  >
                    <div>{this.label}</div>
                  </modus-wc-tooltip>
                ) : (
                  <div>{this.label}</div>
                )}
                {this.subLabel && (
                  <div class="modus-wc-menu-item-sublabel">{this.subLabel}</div>
                )}
              </div>
              <slot name="end"></slot>
            </div>
          </div>
          <slot></slot>
        </li>
      </Host>
    );
  }
}
