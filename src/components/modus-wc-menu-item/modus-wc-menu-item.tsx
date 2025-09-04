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

  /** If true, renders a checkbox slot at the start of the menu item. */
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
      checkbox: this.checkbox,
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

  // private getCheckboxSize(): DaisySize {
  //   switch (this.size) {
  //     case 'sm':
  //       return 'sm';
  //     case 'md':
  //       return 'md';
  //     case 'lg':
  //       return 'lg';
  //     // istanbul ignore next (unreachable code)
  //     default:
  //       return 'md';
  //   }
  // }

  private handleItemSelect = () => {
    this.selected = !this.selected;
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
            <slot name="start-icon"></slot>
            {this.checkbox && (
              <modus-wc-checkbox
                aria-label="Checkbox"
                size={this.size}
                value={!!this.selected}
              />
            )}

            <div class="modus-wc-menu-item-labels">
              <div>{this.label}</div>
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
          </button>
        </li>
      </Host>
    );
  }
}
