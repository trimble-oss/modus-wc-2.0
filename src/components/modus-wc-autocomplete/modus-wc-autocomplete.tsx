import {
  Component,
  Element,
  EventEmitter,
  Fragment,
  h,
  Host,
  Prop,
  State,
  Event as StencilEvent,
} from '@stencil/core';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

export interface IAutocompleteItem {
  /** The display text shown for the autocomplete item */
  label: string;
  /** Whether the item is currently selected */
  selected?: boolean;
  /** The unique value identifier for the item */
  value: string;
  /** Whether the item should be shown in the dropdown menu */
  visibleInMenu: boolean;
}

/**
 * A customizable autocomplete component used to create searchable text inputs.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-autocomplete',
  styleUrl: 'modus-wc-autocomplete.scss',
  shadow: false,
})
export class ModusWcAutocomplete {
  private debounceTimer?: number;
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  @State() private menuVisible: boolean = false;

  /** Indicates that the autocomplete should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to host element. */
  @Prop() customClass?: string = '';

  /**
   * The debounce timeout in milliseconds.
   * Set to 0 to disable debouncing.
   */
  @Prop() debounceMs?: number = 300;

  /** Whether the form control is disabled. */
  @Prop() disabled?: boolean = false;

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /** Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). */
  @Prop() inputTabIndex?: number;

  /**
   * The items to display in the menu.
   * Creating a new array of items will ensure proper component re-render.
   **/
  @Prop() items: IAutocompleteItem[] = [];

  /** The text to display within the label. */
  @Prop() label?: string;

  /** The minimum number of characters required to render the menu. */
  @Prop() minChars: number = 0;

  /** Whether the input allows multiple items to be selected.  */
  @Prop() multiSelect?: boolean = false;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string;

  /** Text that appears in the form control when it has no value set. */
  @Prop() placeholder?: string = '';

  /** Whether the value is editable. */
  @Prop() readOnly?: boolean = false;

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /** The size of the autocomplete (input and menu). */
  @Prop() size?: ModusSize = 'md';

  /** The value of the control. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Event emitted when a selected item chip is removed. */
  @StencilEvent() chipRemove!: EventEmitter<IAutocompleteItem>;

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /**
   * Event emitted when the input value changes.
   * This event is debounced based on the debounceMs prop.
   */
  @StencilEvent() inputChange!: EventEmitter<Event>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  /** Event emitted when a menu item is selected. */
  @StencilEvent() itemSelect!: EventEmitter<IAutocompleteItem>;

  // istanbul ignore next - TODO
  disconnectedCallback() {
    // Clean up any existing debounce timer when component is destroyed
    if (this.debounceTimer) {
      window.clearTimeout(this.debounceTimer);
    }
  }

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Autocomplete input';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-autocomplete'];

    // The order CSS classes are added matters to CSS specificity
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleBlur = (event: CustomEvent<FocusEvent>) => {
    // Hide menu after a short delay to allow for item selection
    // istanbul ignore next - TODO
    setTimeout(() => {
      this.menuVisible = false;
    }, 200);

    this.inputBlur.emit(event.detail);
  };

  private handleChange = (event: CustomEvent<Event>) => {
    const value = (event.detail.target as HTMLInputElement).value;

    // Show menu only if we meet minimum character threshold
    this.menuVisible = value.length >= this.minChars;

    // Clear any existing timer
    // istanbul ignore next - TODO
    if (this.debounceTimer) {
      window.clearTimeout(this.debounceTimer);
    }

    // If debouncing is disabled, emit immediately
    // istanbul ignore next - TODO
    if (!this.debounceMs) {
      this.inputChange.emit(event.detail);
      return;
    }

    // Set up new debounce timer
    // istanbul ignore next - TODO
    this.debounceTimer = window.setTimeout(() => {
      this.inputChange.emit(event.detail);
    }, this.debounceMs);
  };

  private handleFocus = (event: CustomEvent<FocusEvent>) => {
    const value = (event.detail.target as HTMLInputElement).value;

    // Show menu on focus if we meet minimum character threshold
    this.menuVisible = !this.readOnly && value.length >= this.minChars;

    this.inputFocus.emit(event.detail);
  };

  // TODO - add code coverage once autocomplete is updated
  // istanbul ignore next
  private handleItemSelect = (item: IAutocompleteItem) => {
    this.menuVisible = false;
    this.itemSelect.emit(item);
  };

  // TODO - add code coverage once chip component is implemented
  // istanbul ignore next
  private handleChipRemove = (item: IAutocompleteItem) => {
    this.chipRemove.emit(item);
  };

  render() {
    const getChips = () => {
      const selectedItems = this.items.filter((item) => item.selected);

      // TODO - use chip component
      // TODO - add code coverage once chip component is implemented
      // istanbul ignore next
      return (
        <Fragment>
          {selectedItems?.map((item) => (
            <div class="chip">
              <modus-wc-button
                aria-label="Remove item button"
                color="secondary"
                onClick={() => this.handleChipRemove(item)}
                shape="circle"
                size="xs"
              >
                <modus-wc-icon decorative={true} name="close" />
              </modus-wc-button>
              <div class="label">{item.label}</div>
            </div>
          ))}
        </Fragment>
      );
    };

    const getInput = () => (
      <modus-wc-text-input
        bordered={this.bordered && !this.multiSelect}
        disabled={this.disabled}
        inputId={this.inputId}
        inputTabIndex={this.inputTabIndex}
        name={this.name}
        onInputBlur={this.handleBlur}
        onInputChange={this.handleChange}
        onInputFocus={this.handleFocus}
        placeholder={this.placeholder}
        readOnly={this.readOnly}
        required={this.required}
        size={this.size}
        value={this.value}
        {...this.inheritedAttributes}
      />
    );

    // TODO - to improve flexibility, allow users to pass their own `<modus-wc-menu-item>` elements
    // TODO - add code coverage once autocomplete is updated
    // istanbul ignore next
    const getMenuItems = () => {
      const menuItems = this.items.filter((item) => item.visibleInMenu);

      return (
        <Fragment>
          {menuItems.map((item) => (
            <modus-wc-menu-item
              label={item.label}
              onItemSelect={() => this.handleItemSelect(item)}
              selected={item.selected}
              value={item.value}
            />
          ))}
        </Fragment>
      );
    };

    return (
      <Host class={this.getClasses()}>
        {this.label && (
          <modus-wc-input-label
            forId={this.inputId}
            labelText={this.label}
            required={this.required}
            size={this.size}
          />
        )}
        {this.multiSelect ? (
          <div
            class={`modus-wc-autocomplete-multi-select ${this.bordered ? 'modus-wc-autocomplete-multi-select--bordered' : ''}`}
          >
            {getChips()}
            {getInput()}
          </div>
        ) : (
          <Fragment>{getInput()}</Fragment>
        )}
        {
          <modus-wc-menu
            aria-label="Autocomplete menu"
            bordered={this.bordered}
            size={this.size}
            class={this.menuVisible ? 'menu-visible' : 'menu-hidden'}
          >
            {getMenuItems()}
            <slot name="menu-items"></slot>
          </modus-wc-menu>
        }
      </Host>
    );
  }
}
