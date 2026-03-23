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
import { convertPropsToClasses } from './modus-wc-menu-item.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { ModusSize, SelectionMode } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable menu item component used to display the item portion of a menu.
 *
 * This component supports a 'start-icon' `<slot>` that allows for custom icons to be placed at the beginning of the item.
 */
@Component({
  tag: 'modus-wc-menu-item',
  styleUrl: 'modus-wc-menu-item.scss',
  shadow: false,
})
export class ModusWcMenuItem {
  private inheritedAttributes: Attributes = {};
  private parentMenuObserver?: MutationObserver;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  @Prop() bordered?: boolean;

  /** If true, renders a checkbox at the start of the menu item. */
  @Prop() checkbox?: boolean;

  /** Custom CSS class to apply to the li element. */
  @Prop() customClass?: string = '';

  /** The disabled state of the menu item. */
  @Prop() disabled?: boolean;

  /** The text rendered in the menu item. */
  @Prop() label: string = '';

  /** The selected state of the menu item. */
  @Prop({ mutable: true }) selected?: boolean;

  /** The focused state of the menu item. */
  @Prop() focused?: boolean;

  /** The size of the menu item. */
  @Prop() size?: ModusSize = 'md';

  /** The text rendered beneath the label. */
  @Prop() subLabel?: string;

  /** The tooltip text to display when hovering over the menu item. */
  @Prop() tooltipContent?: string;

  /** The position of the tooltip relative to the menu item. */
  @Prop() tooltipPosition?: 'auto' | 'top' | 'right' | 'bottom' | 'left' =
    'auto';

  /** The unique identifying value of the menu item. */
  @Prop() value: string = '';

  /** Whether this menu item has a collapsible submenu. When true, the item will show a caret and handle toggle behavior. */
  @Prop() hasSubmenu?: boolean;

  /** Internal state to track if submenu is expanded */
  @State() isExpanded: boolean = false;

  @State() checked: boolean = false;

  /** Event emitted when a menu item is selected. */
  @StencilEvent() itemSelect!: EventEmitter<{
    value: string;
    selected?: boolean;
  }>;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    if (typeof MutationObserver === 'undefined') return;

    const parentMenu = this.el.closest('modus-wc-menu');
    if (parentMenu) {
      this.parentMenuObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.attributeName === 'selection-mode') {
            this.handleSelectionModeChange();
            break;
          }
        }
      });
      this.parentMenuObserver.observe(parentMenu, { attributes: true });
    }
  }

  disconnectedCallback() {
    this.parentMenuObserver?.disconnect();
  }

  private handleSelectionModeChange(): void {
    this.selected = this.selected === undefined ? false : undefined;
    this.checked = false;
  }

  @Listen('keydown')
  handleKeyDown(e: KeyboardEvent) {
    if (this.disabled) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
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
        this.isExpanded = false;
      }
    }
    return Promise.resolve();
  }

  private deselectSiblings(): void {
    const menu = this.el.closest('modus-wc-menu');
    if (!menu) return;

    const siblings = menu.querySelectorAll('modus-wc-menu-item');
    siblings.forEach((item) => {
      if (item !== this.el && item.closest('modus-wc-menu') === menu) {
        (item as HTMLElement & { selected?: boolean }).selected = false;
      }
    });
  }

  private resolveSelectionMode() {
    return (
      this.el.closest('modus-wc-menu') as HTMLElement & {
        selectionMode?: SelectionMode;
      }
    )?.selectionMode;
  }

  private getClasses(mode?: SelectionMode): string {
    const classList: string[] = ['modus-wc-menu-item'];

    const isSelected = !this.hasSubmenu && mode !== 'multiple' && this.selected;
    const isChecked = !this.hasSubmenu && mode === 'multiple' && this.checked;

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      disabled: this.disabled,
      selected: isSelected,
      checked: isChecked,
      focused: this.focused,
      size: this.size,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getButtonClasses(): string {
    return this.hasSubmenu ? 'modus-wc-menu-dropdown-toggle' : '';
  }

  private getRole(mode?: SelectionMode): string {
    if (mode === 'multiple') return 'menuitemcheckbox';
    if (mode === 'single') return 'menuitemradio';
    return 'menuitem';
  }

  private getAriaChecked(mode?: SelectionMode): string | undefined {
    if (mode === 'multiple') return this.checked ? 'true' : 'false';
    if (mode === 'single') return this.selected ? 'true' : 'false';
    return undefined;
  }

  private handleItemSelect = () => {
    if (this.hasSubmenu) {
      // Check if side nav is expanded (if this menu is inside a side nav)
      const sideNav = this.el.closest('modus-wc-side-navigation');
      if (
        sideNav &&
        !(sideNav as HTMLElement & { expanded: boolean }).expanded
      ) {
        // Don't allow submenu expansion when side nav is collapsed
        // Still emit the event for consistency
        this.itemSelect.emit({ value: this.value });
        return;
      }

      // The submenu should be inside this menu-item element (slotted content)
      const submenu = this.el.querySelector(
        '.modus-wc-menu-dropdown'
      ) as HTMLElement;
      const liElement = this.el.querySelector('li');

      if (submenu && liElement) {
        submenu.classList.toggle('modus-wc-menu-dropdown-show');
        const buttonElement = liElement.querySelector('button');

        // Update internal expanded state and add/remove class
        this.isExpanded = submenu.classList.contains(
          'modus-wc-menu-dropdown-show'
        );

        if (this.isExpanded) {
          liElement.classList.add('modus-wc-menu-item-expanded');
          if (buttonElement) {
            buttonElement.classList.add('modus-wc-menu-dropdown-show');
          }
        } else {
          liElement.classList.remove('modus-wc-menu-item-expanded');
          if (buttonElement) {
            buttonElement.classList.remove('modus-wc-menu-dropdown-show');
          }
        }
      }
    } else if (this.resolveSelectionMode() === 'multiple') {
      this.checked = !this.checked;
      this.itemSelect.emit({ value: this.value, selected: this.checked });
      return;
    } else if (this.checkbox) {
      const liElement = this.el.querySelector('li');
      const checkboxElement = this.el.querySelector('modus-wc-checkbox');

      if (liElement) {
        // Toggle based on current state
        const isSelected = liElement.classList.contains(
          'modus-wc-menu-item-selected'
        );
        if (isSelected) {
          liElement.classList.remove('modus-wc-menu-item-selected');
        } else {
          liElement.classList.add('modus-wc-menu-item-selected');
        }
        // Update checkbox visual state
        if (checkboxElement) {
          checkboxElement.setAttribute('value', (!isSelected).toString());
        }

        this.selected = true;
      }
    } else {
      if (this.resolveSelectionMode() === 'single') {
        this.deselectSiblings();
      }
      this.selected = true;
    }

    this.itemSelect.emit({ value: this.value, selected: this.selected });
  };

  render() {
    const mode = this.resolveSelectionMode();
    const isMulti = mode === 'multiple';

    return (
      <Host>
        <li
          aria-checked={this.getAriaChecked(mode)}
          aria-disabled={this.disabled}
          class={this.getClasses(mode)}
          role={this.getRole(mode)}
          tabIndex={this.disabled ? -1 : 0}
          {...this.inheritedAttributes}
        >
          <button
            class={this.getButtonClasses()}
            disabled={this.disabled}
            onClick={this.handleItemSelect}
            tabIndex={-1}
            type="button"
          >
            <div class="modus-wc-menu-item-content">
              {(this.checkbox || isMulti) && (
                <modus-wc-checkbox
                  aria-label="Checkbox"
                  disabled={this.disabled}
                  size={this.size}
                  value={isMulti ? this.checked : !!this.selected}
                />
              )}
              <slot name="start-icon"></slot>
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
            </div>
          </button>
          <slot></slot>
        </li>
      </Host>
    );
  }
}
