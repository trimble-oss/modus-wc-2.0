import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-menu-item.tailwind';
import { DaisySize, ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable menu item component used to display the item portion of a menu
 */
@Component({
  tag: 'modus-wc-menu-item',
  styleUrl: 'modus-wc-menu-item.scss',
  shadow: false,
})
export class ModusWcMenuItem {
  private inheritedAttributes: Attributes = {};

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

  /** The modus icon name to render on the start of the menu item. */
  @Prop() startIcon?: string;

  /** The selected state of the menu item. */
  @Prop() selected?: boolean;

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

  /** Event emitted when a menu item is selected. */
  @StencilEvent() itemSelect!: EventEmitter<{ value: string }>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-menu-item'];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      disabled: this.disabled,
      selected: this.selected,
      focused: this.focused,
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getIconSize(): DaisySize {
    switch (this.size) {
      case 'sm':
        return 'xs';
      case 'md':
        return 'sm';
      case 'lg':
        return 'md';
      // istanbul ignore next (unreachable code)
      default:
        return 'sm';
    }
  }

  private handleItemSelect = () => {
    // For checkbox items, provide immediate visual feedback
    if (this.checkbox) {
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
      }
    }

    // Always emit the event - let the parent decide whether to handle deselection
    this.itemSelect.emit({ value: this.value });
  };

  render() {
    return (
      <Host>
        <li
          aria-current={this.selected}
          aria-disabled={this.disabled}
          class={this.getClasses()}
          role="menuitem"
          {...this.inheritedAttributes}
        >
          <button
            disabled={this.disabled}
            onClick={this.handleItemSelect}
            type="button"
          >
            <div class="modus-wc-menu-item-content">
              {this.checkbox && (
                <modus-wc-checkbox
                  aria-label="Checkbox"
                  disabled={this.disabled}
                  size={this.size}
                  value={!!this.selected}
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
              {this.selected && this.checkbox !== true && (
                <div class="modus-wc-menu-item-selected-icon">
                  <modus-wc-icon
                    decorative={true}
                    name="check"
                    size={this.getIconSize()}
                  />
                </div>
              )}
            </div>
          </button>
        </li>
      </Host>
    );
  }
}
