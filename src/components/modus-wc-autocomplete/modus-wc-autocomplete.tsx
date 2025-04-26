import {
  Component,
  Element,
  EventEmitter,
  Fragment,
  h,
  Host,
  Listen,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { SearchSolidIcon } from '../../icons/search-solid.icon';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes, KEY } from '../utils';

export interface IAutocompleteItem {
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Whether the item is currently focused */
  focused?: boolean;
  /** The display text shown for the autocomplete item */
  label: string;
  /** Whether the item is currently selected */
  selected?: boolean;
  /** The unique value identifier for the item */
  value: string;
  /** Whether the item should be shown in the dropdown menu */
  visibleInMenu: boolean;
}

export interface IAutocompleteNoResults {
  /** The aria-label to provide accessibility information for the no results section. */
  ariaLabel?: string;
  /** The main label to display when no results are found. */
  label: string;
  /** The sub-label or additional text to display below the main label. */
  subLabel: string;
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
  @Prop() items?: IAutocompleteItem[] = [];

  /** The text to display within the label. */
  @Prop() label?: string;

  /** Whether the menu should remain open after an item is selected. */
  @Prop() leaveMenuOpen?: boolean = false;

  /** The minimum number of characters required to render the menu. */
  @Prop() minChars: number = 0;

  /** Whether the input allows multiple items to be selected.  */
  @Prop() multiSelect?: boolean = false;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string;

  /** The content to display when no results are found. */
  @Prop() noResults?: IAutocompleteNoResults = {
    ariaLabel: 'No results found',
    label: 'No results found',
    subLabel: 'Check spelling or try a different keyword',
  };

  /** Text that appears in the form control when it has no value set. */
  @Prop() placeholder?: string = '';

  /** Whether the value is editable. */
  @Prop() readOnly?: boolean = false;

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /** The size of the autocomplete (input and menu). */
  @Prop() size?: ModusSize = 'md';

  /** A spinner that appears when set to true */
  @Prop() showSpinner?: boolean = false;

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

  @Watch('disabled')
  @Watch('readOnly')
  handleMenuVisibilityChange() {
    if (this.disabled || this.readOnly) {
      this.menuVisible = false; // Close the menu immediately
    }
  }

  // istanbul ignore next - TODO
  disconnectedCallback() {
    // Clean up any existing debounce timer when component is destroyed
    if (this.debounceTimer) {
      window.clearTimeout(this.debounceTimer);
    }
    document.removeEventListener('click', this.handleOutsideClick);
  }

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Autocomplete input';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
    document.addEventListener('click', this.handleOutsideClick);
  }

  private getClasses(): string {
    const classList: string[] = ['modus:autocomplete'];

    // The order CSS classes are added matters to CSS specificity
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getMultiSelectClasses(): string {
    return [
      'modus:autocomplete-multi-select',
      this.bordered && 'modus:autocomplete-multi-select--bordered',
      this.disabled && 'modus:autocomplete-multi-select--disabled',
      this.readOnly && 'modus:autocomplete-multi-select--readonly',
    ]
      .filter(Boolean)
      .join(' ');
  }

  private handleBlur = (event: CustomEvent<FocusEvent>) => {
    // if enter key is pressed, return
    // Hide menu after a short delay to allow for item selection
    // istanbul ignore next - TODO
    setTimeout(() => {
      const relatedTarget = event.detail.relatedTarget as HTMLElement;
      if (!relatedTarget || !this.el.contains(relatedTarget)) {
        this.menuVisible = false;
      }
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

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    if (!(event.target instanceof HTMLInputElement)) return;

    const input = event.target;

    switch (event.key) {
      case KEY.ArrowDown:
        event.preventDefault();
        if (input.value.length >= this.minChars) {
          this.menuVisible = true;
        }
        break;

      case KEY.Backspace:
        if (this.multiSelect && input.value.length === 0) {
          let selectedItems: IAutocompleteItem[] = [];
          if (this.items) {
            selectedItems = this.items.filter((item) => item.selected);
          }
          const lastSelectedItem = selectedItems[selectedItems.length - 1];
          if (lastSelectedItem) {
            this.chipRemove.emit(lastSelectedItem);
          }
        }
        break;

      case KEY.Escape:
        event.preventDefault();
        this.menuVisible = false;
        break;

      case KEY.Enter:
        event.preventDefault();
        if (this.multiSelect) {
          let selectedItems: IAutocompleteItem[] = [];
          if (this.items) {
            selectedItems = this.items.filter((item) => item.selected);
          }
          const lastSelectedItem = selectedItems[selectedItems.length - 1];
          if (lastSelectedItem) {
            this.itemSelect.emit(lastSelectedItem);
          }
        } else {
          const selectedItem = this.items?.find((item) => item.selected);
          if (selectedItem) {
            this.itemSelect.emit(selectedItem);
          }
        }
        if (this.menuVisible && !this.leaveMenuOpen) {
          input.blur();
        }
        break;
    }
  }

  private handleFocus = (event: CustomEvent<FocusEvent>) => {
    this.inputFocus.emit(event.detail);
  };

  // TODO - add code coverage once autocomplete is updated
  // istanbul ignore next
  private handleItemSelect = (item: IAutocompleteItem) => {
    if (this.disabled || this.readOnly) return;
    this.menuVisible = !!this.leaveMenuOpen;
    this.itemSelect.emit(item);
  };

  // TODO - add code coverage once chip component is implemented
  // istanbul ignore next
  private handleChipRemove = (item: IAutocompleteItem) => {
    if (this.disabled || this.readOnly) {
      return; // Do nothing if the component is disabled
    }
    this.chipRemove.emit(item);
  };

  private renderNoResults() {
    return (
      <div class="modus:autocomplete-no-results">
        <div class="icon-label" aria-label={this.noResults?.ariaLabel}>
          <SearchSolidIcon className="modus:autocomplete-search-icon" />
          <div class="label">{this.noResults?.label}</div>
        </div>
        <div class="sub-label">{this.noResults?.subLabel}</div>
      </div>
    );
  }

  private handleOutsideClick = (event: MouseEvent) => {
    if (!this.el.contains(event.target as Node)) {
      this.menuVisible = false; // Close menu if click is outside
    }
  };

  render() {
    const getChips = () => {
      const selectedItems = this.items?.filter((item) => item.selected);

      // TODO - use chip component
      // TODO - add code coverage once chip component is implemented
      // istanbul ignore next
      return (
        <Fragment>
          {selectedItems?.map((item) => (
            <modus-wc-chip
              aria-label="Remove item button"
              label={item.label}
              show-remove="true"
              size="sm"
              disabled={this.disabled || this.readOnly}
              onChipRemove={() => this.handleChipRemove(item)}
              variant="filled"
            ></modus-wc-chip>
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
      if (this.showSpinner) {
        return (
          <li>
            <modus-wc-loader
              variant="spinner"
              size={this.size}
            ></modus-wc-loader>
          </li>
        );
      }

      const menuItems = this.items?.filter((item) => item.visibleInMenu) || [];
      const noResults =
        this.noResults?.label ||
        this.noResults?.subLabel ||
        this.noResults?.ariaLabel;

      return (
        <Fragment>
          {menuItems?.length > 0 || !noResults
            ? menuItems.map((item) => (
                <modus-wc-menu-item
                  label={item.label}
                  onItemSelect={() => this.handleItemSelect(item)}
                  selected={item.selected}
                  disabled={item.disabled}
                  focused={item.focused}
                  value={item.value}
                />
              ))
            : this.renderNoResults()}
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
          <div class={this.getMultiSelectClasses()}>
            {getChips()}
            {getInput()}
          </div>
        ) : (
          <Fragment>{getInput()}</Fragment>
        )}
        <modus-wc-menu
          aria-label="Autocomplete menu"
          bordered={this.bordered}
          class={this.menuVisible ? 'menu-visible' : ' menu-hidden'}
          size={this.size}
        >
          {getMenuItems()}
          <slot name="menu-items"></slot>
        </modus-wc-menu>
      </Host>
    );
  }
}
