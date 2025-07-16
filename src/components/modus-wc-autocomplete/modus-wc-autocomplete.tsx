import {
  Component,
  Element,
  EventEmitter,
  Fragment,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { CloseSolidIcon } from '../../icons/close-solid.icon';
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

// Timeout constants for consistent behavior
const BLUR_FOCUSOUT_DELAY_MS = 200; // Delay before handling blur/focusout to allow related element focus

/**
 * A customizable autocomplete component used to create searchable text inputs.
 */
@Component({
  tag: 'modus-wc-autocomplete',
  styleUrl: 'modus-wc-autocomplete.scss',
  shadow: false,
})
export class ModusWcAutocomplete {
  @State() private menuVisible: boolean = false;
  @State() private isChipsExpanded: boolean = false;
  @State() private initialNavigation: boolean = true;
  @State() private filteredItems: IAutocompleteItem[] = [];
  @State() private selectionOrder: string[] = []; // Track order of chip selection

  private debounceTimer?: number;
  private inheritedAttributes: Attributes = {};
  private programmaticOpen: boolean = false;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

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

  /** Show the clear button within the input field. */
  @Prop() includeClear?: boolean = false;

  /** Show the search icon within the input field. */
  @Prop() includeSearch?: boolean = false;

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

  /** Whether to show the menu whenever the input has focus, regardless of input value. */
  @Prop() showMenuOnFocus?: boolean = false;

  /** The size of the autocomplete (input and menu). */
  @Prop() size?: ModusSize = 'md';

  /** A spinner that appears when set to true */
  @Prop() showSpinner?: boolean = false;

  /** The value of the control. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Maximum number of chips to display. When exceeded, shows expand/collapse button. Set to -1 to disable limit. */
  @Prop() maxChips?: number = -1;

  /** Custom item selection handler - if provided, overrides default selection logic */
  @Prop() customItemSelect?: (item: IAutocompleteItem) => void;

  /** Custom input change handler - if provided, overrides default search filtering */
  @Prop() customInputChange?: (value: string) => void;

  /** Custom key down handler - if provided, overrides default keyboard navigation */
  @Prop() customKeyDown?: (event: KeyboardEvent) => void;

  /** Custom blur handler - if provided, overrides default blur behavior */
  @Prop() customBlur?: (event: FocusEvent) => void;

  /** Minimum width for the text input in pixels. When chips would make input smaller, container height increases instead. */
  @Prop() minInputWidth?: number = 10;

  /** Event emitted when a selected item chip is removed. */
  @StencilEvent() chipRemove!: EventEmitter<IAutocompleteItem>;

  /** Event emitted when chips expansion state changes. */
  @StencilEvent() chipsExpansionChange!: EventEmitter<{ expanded: boolean }>;

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
      this.menuVisible = false;
    }
  }

  @Watch('items')
  handleItemsChange() {
    if (this.items) {
      this.filteredItems = [...this.items];
    }
  }

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Autocomplete input';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
    document.addEventListener('click', this.handleOutsideClick);

    if (this.items) {
      this.filteredItems = [...this.items];

      // Initialize selection order for pre-selected items
      this.selectionOrder = this.items
        .filter((item) => item.selected)
        .map((item) => item.value);
    }
  }

  disconnectedCallback() {
    if (this.debounceTimer) {
      window.clearTimeout(this.debounceTimer);
    }
    document.removeEventListener('click', this.handleOutsideClick);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-autocomplete'];

    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getMultiSelectClasses(): string {
    return [
      'modus-wc-autocomplete-multi-select',
      'modus-wc-input',
      'modus-wc-w-full',
      'modus-wc-flex',
      'modus-wc-items-center',
      'modus-wc-gap-1',
      this.bordered && 'modus-wc-input-bordered',
      this.disabled && 'modus-wc-input-disabled',
      this.readOnly && 'modus-wc-text-input--readonly',
      this.size && `modus-wc-input-${this.size}`,
      this.bordered && 'modus-wc-autocomplete-multi-select--bordered',
      this.disabled && 'modus-wc-autocomplete-multi-select--disabled',
      this.readOnly && 'modus-wc-autocomplete-multi-select--readonly',
    ]
      .filter(Boolean)
      .join(' ');
  }

  private handleBlur = (event: CustomEvent<FocusEvent>) => {
    if (this.customBlur) {
      this.customBlur(event.detail);
      return;
    }

    event.stopPropagation();

    this.initialNavigation = true;
    if (this.items) {
      this.items = [
        ...this.items.map((item) => ({
          ...item,
          focused: false,
        })),
      ];
      // Sync filtered items from updated items (maintains current search filter)
      this.syncFilteredItems();
    }

    setTimeout(() => {
      const relatedTarget = event.detail.relatedTarget as HTMLElement;

      if (!relatedTarget || !this.el.contains(relatedTarget)) {
        this.isChipsExpanded = false; // Always collapse on blur
        if (!this.programmaticOpen) {
          this.menuVisible = false;
        }
        this.inputBlur.emit(event.detail);
      }
    }, BLUR_FOCUSOUT_DELAY_MS);
  };

  private handleMenuFocusout = (event: CustomEvent<FocusEvent>) => {
    setTimeout(() => {
      const relatedTarget = event.detail.relatedTarget as HTMLElement;

      if (!relatedTarget || !this.el.contains(relatedTarget)) {
        if (!this.programmaticOpen) {
          this.menuVisible = false;
        }
        this.inputBlur.emit(event.detail);
      }
    }, BLUR_FOCUSOUT_DELAY_MS);
  };

  private handleChange = (event: CustomEvent<Event>) => {
    if (this.disabled || this.readOnly) return;

    // Add null checks for edge cases
    if (!event.detail || !event.detail.target) {
      return;
    }

    const input = event.detail.target as HTMLInputElement;
    const inputValue = input.value || '';

    if (this.customInputChange) {
      this.customInputChange(inputValue);
      return;
    }

    // Update menu visibility
    if (this.showMenuOnFocus) {
      this.menuVisible = true;
    } else {
      this.menuVisible = inputValue.length >= this.minChars;
    }

    if (this.items) {
      // Clear the focused state from all items
      this.items = [
        ...this.items.map((item) => ({
          ...item,
          focused: false,
        })),
      ];

      // In single select mode, if the input is cleared, also clear the selection
      if (!this.multiSelect && inputValue === '') {
        this.items = [
          ...this.items.map((item) => ({
            ...item,
            selected: false,
          })),
        ];
      }
    }

    this.value = inputValue;

    // Sync filtered items based on new search value
    this.syncFilteredItems();

    if (this.value) {
      this.initialNavigation = false;
    }

    if (this.debounceTimer) {
      window.clearTimeout(this.debounceTimer);
    }

    if (!this.debounceMs) {
      this.inputChange.emit(event.detail);
      return;
    }

    this.debounceTimer = window.setTimeout(() => {
      this.inputChange.emit(event.detail);
    }, this.debounceMs);
  };

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    if (this.customKeyDown) {
      this.customKeyDown(event);
      return;
    }

    // Don't process keyboard events when disabled or readOnly
    if (this.disabled || this.readOnly) {
      return;
    }

    if (!(event.target instanceof HTMLInputElement)) return;

    const input = event.target;
    const keyLower = event.key.toLowerCase();

    if (
      [KEY.ArrowDown, KEY.ArrowUp, KEY.Enter, KEY.Escape]
        .map((k) => k.toLowerCase())
        .includes(keyLower)
    ) {
      event.preventDefault();
    }

    const visibleItems = this.getVisibleItems();

    switch (keyLower) {
      case KEY.ArrowDown.toLowerCase(): {
        if (this.showMenuOnFocus || input.value.length >= this.minChars) {
          this.menuVisible = true;
        }

        if (this.initialNavigation) {
          this.initialNavigation = false;
          return;
        }

        const currentIndex = visibleItems.findIndex((item) => item.focused);
        const nextIndex =
          currentIndex < 0
            ? 0
            : Math.min(currentIndex + 1, visibleItems.length - 1);

        if (visibleItems[nextIndex]) {
          this.updateItemFocus(visibleItems[nextIndex].value);
        }
        break;
      }

      case KEY.ArrowUp.toLowerCase(): {
        if (this.initialNavigation) {
          this.initialNavigation = false;
          return;
        }

        const currentIndex = visibleItems.findIndex((item) => item.focused);
        const prevIndex =
          currentIndex < 0
            ? visibleItems.length - 1
            : Math.max(currentIndex - 1, 0);

        if (visibleItems[prevIndex]) {
          this.updateItemFocus(visibleItems[prevIndex].value);
        }
        break;
      }

      case KEY.Escape.toLowerCase(): {
        this.clearAllFocus();
        this.initialNavigation = true;
        this.menuVisible = false;
        break;
      }

      case KEY.Enter.toLowerCase(): {
        const focusedItem = visibleItems.find((item) => item.focused);

        if (focusedItem) {
          this.handleItemSelect(focusedItem);
        } else if (this.multiSelect) {
          const selectedItems =
            this.items?.filter((item) => item.selected) || [];
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
        break;
      }

      case KEY.Backspace.toLowerCase(): {
        if (this.multiSelect && input.value.length === 0) {
          // Get the last selected chip in selection order
          if (this.selectionOrder.length > 0) {
            const lastSelectedValue =
              this.selectionOrder[this.selectionOrder.length - 1];
            const lastSelectedItem = this.items?.find(
              (item) => item.value === lastSelectedValue
            );

            if (lastSelectedItem) {
              // Remove the chip internally
              this.handleChipRemove(lastSelectedItem);
            }
          }
        }
        break;
      }
    }
  }

  private handleFocus = (event: CustomEvent<FocusEvent>) => {
    if (!this.disabled && !this.readOnly && this.showMenuOnFocus) {
      this.menuVisible = true;
    }

    this.inputFocus.emit(event.detail);
  };

  /**
   * Programmatically select an item
   */
  @Method()
  async selectItem(item: IAutocompleteItem | null) {
    if (item) {
      this.handleItemSelect(item);
    } else {
      this.selectionOrder = []; // Clear selection order
      if (this.items) {
        this.items = [
          ...this.items.map((menuItem) => ({
            ...menuItem,
            selected: false,
          })),
        ];
      }
      this.value = '';
    }
    return Promise.resolve();
  }

  /**
   * Programmatically open the menu
   */
  @Method()
  async openMenu() {
    this.programmaticOpen = true;
    this.menuVisible = true;
    return Promise.resolve();
  }

  /**
   * Programmatically close the menu
   */
  @Method()
  async closeMenu() {
    this.programmaticOpen = false;
    this.menuVisible = false;
    return Promise.resolve();
  }

  /**
   * Programmatically toggle the menu open/closed
   */
  @Method()
  async toggleMenu() {
    if (!this.menuVisible) {
      this.programmaticOpen = true;
    } else {
      this.programmaticOpen = false;
    }
    this.menuVisible = !this.menuVisible;
    return Promise.resolve();
  }

  /**
   * Programmatically set focus to input
   */
  @Method()
  async focusInput() {
    const inputElement = this.el.querySelector('input');
    if (inputElement) {
      inputElement.focus();
    }
    return Promise.resolve();
  }

  /**
   * Clear the input value and reset items
   */
  @Method()
  async clearInput() {
    this.value = '';
    this.selectionOrder = []; // Clear selection order
    if (this.items) {
      this.items = [
        ...this.items.map((item) => ({
          ...item,
          selected: false, // Explicitly clear all selections
        })),
      ];
      this.filteredItems = [...this.items];
    }
    return Promise.resolve();
  }

  private handleItemSelectByValue = (value: string) => {
    if (this.disabled || this.readOnly) return;

    const currentItem = this.items?.find((item) => item.value === value);
    if (!currentItem) return;

    this.handleItemSelect(currentItem);
  };

  private handleItemSelect = (item: IAutocompleteItem) => {
    if (this.disabled || this.readOnly || !this.items) return;

    if (this.customItemSelect) {
      this.customItemSelect(item);
      return;
    }

    if (this.multiSelect) {
      this.value = '';

      const currentItem = this.items.find(
        (menuItem) => menuItem.value === item.value
      );
      const isCurrentlySelected = currentItem?.selected || false;

      if (isCurrentlySelected) {
        if (!this.leaveMenuOpen) {
          this.menuVisible = false;
        }
        return;
      }

      this.items = [
        ...this.items.map((menuItem) => ({
          ...menuItem,
          selected: menuItem.value === item.value ? true : menuItem.selected,
          focused: false,
        })),
      ];

      // Add to end of selection order
      this.selectionOrder = [...this.selectionOrder, item.value];

      // If we exceed maxChips, automatically expand
      if (
        this.maxChips &&
        this.maxChips > 0 &&
        this.selectionOrder.length > this.maxChips
      ) {
        this.isChipsExpanded = true;
      }

      // Sync filtered items from updated items (maintains current search filter)
      this.syncFilteredItems();
    } else {
      this.items = [
        ...this.items.map((menuItem) => ({
          ...menuItem,
          selected: menuItem.value === item.value,
          focused: false,
        })),
      ];
      this.value = item.label;

      // Sync filtered items from updated items
      this.syncFilteredItems();
    }

    this.initialNavigation = true;

    if (!this.leaveMenuOpen) {
      this.menuVisible = false;
    }

    this.itemSelect.emit(item);
  };

  private handleChipRemove = (item: IAutocompleteItem) => {
    if (this.disabled || this.readOnly) {
      return;
    }

    // Handle chip removal internally by default
    if (this.items) {
      this.items = [
        ...this.items.map((menuItem) => ({
          ...menuItem,
          selected: menuItem.value === item.value ? false : menuItem.selected,
        })),
      ];

      // Remove from selection order
      this.selectionOrder = this.selectionOrder.filter(
        (value) => value !== item.value
      );

      // Sync filtered items from updated items (maintains current search filter)
      this.syncFilteredItems();
    }

    // Emit event for external handlers who want to know about the removal
    this.chipRemove.emit(item);
  };

  private handleClearAll = () => {
    void this.clearInput();
  };

  private toggleChipsExpansion = () => {
    this.isChipsExpanded = !this.isChipsExpanded;
    this.chipsExpansionChange.emit({ expanded: this.isChipsExpanded });
  };

  private renderNoResults() {
    return (
      <div class="modus-wc-autocomplete-no-results">
        <div class="icon-label" aria-label={this.noResults?.ariaLabel}>
          <SearchSolidIcon className="modus-wc-autocomplete-search-icon" />
          <div class="label">{this.noResults?.label}</div>
        </div>
        <div class="sub-label">{this.noResults?.subLabel}</div>
      </div>
    );
  }

  private handleOutsideClick = (event: MouseEvent) => {
    if (!this.el.contains(event.target as Node) && !this.programmaticOpen) {
      this.menuVisible = false;
      this.isChipsExpanded = false;
    }

    // Reset programmaticOpen flag after handling the click
    if (this.programmaticOpen) {
      this.programmaticOpen = false;
    }
  };

  private getVisibleItems(): IAutocompleteItem[] {
    return this.filteredItems?.filter((item) => !item.disabled) || [];
  }

  private syncFilteredItems(): void {
    if (!this.items) {
      this.filteredItems = [];
      return;
    }

    const currentSearchText = this.value?.toLowerCase() || '';

    if (currentSearchText === '') {
      // When no search text, show all items
      this.filteredItems = [...this.items];
    } else {
      // Filter items based on current search text
      this.filteredItems = this.items.filter((item) =>
        item.label.toLowerCase().includes(currentSearchText)
      );
    }
  }

  private updateItemFocus(targetValue: string): void {
    if (!this.items) return;

    this.items = [
      ...this.items.map((item) => ({
        ...item,
        focused: item.value === targetValue,
      })),
    ];

    // Sync filtered items from updated items
    this.syncFilteredItems();
  }

  private clearAllFocus(): void {
    if (!this.items) return;

    this.items = [
      ...this.items.map((item) => ({
        ...item,
        focused: false,
      })),
    ];

    // Sync filtered items from updated items
    this.syncFilteredItems();
  }

  render() {
    const getChips = () => {
      // Get selected items in selection order
      const selectedItems = this.selectionOrder
        .map((value) =>
          this.items?.find((item) => item.value === value && item.selected)
        )
        .filter(Boolean) as IAutocompleteItem[];

      if (selectedItems.length === 0) {
        return <Fragment></Fragment>;
      }

      // Chip display logic:
      // - Not expanded: show up to maxChips (compact view)
      // - Expanded: show all chips regardless of focus state
      const effectiveMaxChips =
        !this.isChipsExpanded && this.maxChips && this.maxChips > 0
          ? this.maxChips
          : selectedItems.length;

      const visibleItems = selectedItems.slice(0, effectiveMaxChips);

      return (
        <Fragment>
          {visibleItems.map((item) => (
            <modus-wc-chip
              aria-label="Remove item button"
              label={item.label}
              show-remove={true}
              size="sm"
              disabled={this.disabled || this.readOnly}
              onChipRemove={(event) => {
                event.stopPropagation();
                this.handleChipRemove(item);
              }}
              variant="filled"
            ></modus-wc-chip>
          ))}
        </Fragment>
      );
    };

    const getClearButton = () => {
      const showClear =
        this.includeClear &&
        !this.disabled &&
        !this.readOnly &&
        (this.selectionOrder.length > 0 || this.value?.length > 0);

      if (!showClear) {
        return null;
      }

      return (
        <modus-wc-button
          onClick={this.handleClearAll}
          variant="borderless"
          color="secondary"
          aria-label="Clear all"
          disabled={this.disabled || this.readOnly}
          size="xs"
          shape="circle"
          type="button"
        >
          <CloseSolidIcon />
        </modus-wc-button>
      );
    };

    const getExpandCollapseButton = () => {
      const selectedItemsCount = this.selectionOrder.length;

      // Show expand/collapse button when there are more chips than maxChips
      if (
        !this.maxChips ||
        this.maxChips <= 0 ||
        selectedItemsCount <= this.maxChips
      ) {
        return null;
      }

      const remainingCount = selectedItemsCount - this.maxChips;

      return (
        <modus-wc-button
          custom-class={`modus-wc-autocomplete-expand-button ${this.isChipsExpanded ? 'expanded' : ''}`}
          onClick={this.toggleChipsExpansion}
          variant="borderless"
          color="secondary"
          aria-label={
            this.isChipsExpanded
              ? 'Collapse chips'
              : `Show ${remainingCount} more`
          }
          disabled={this.disabled || this.readOnly}
          size="xs"
          shape="circle"
          type="button"
        >
          <modus-wc-icon
            aria-label={
              this.isChipsExpanded ? 'Collapse chips' : 'Expand chips'
            }
            name={this.isChipsExpanded ? 'caret_up' : 'caret_down'}
            size="md"
          />
        </modus-wc-button>
      );
    };

    const getMoreChipsIndicator = () => {
      const selectedItemsCount = this.selectionOrder.length;

      // Show "+N more" when there are more chips than maxChips and not expanded
      if (!this.maxChips || this.maxChips <= 0 || this.isChipsExpanded) {
        return null;
      }

      const remainingCount = selectedItemsCount - this.maxChips;

      if (remainingCount <= 0) {
        return null;
      }

      return (
        <modus-wc-chip
          label={`+${remainingCount}`}
          size="sm"
          variant="filled"
        ></modus-wc-chip>
      );
    };

    const getInput = () => (
      <modus-wc-text-input
        bordered={this.bordered && !this.multiSelect}
        disabled={this.disabled}
        includeClear={!this.multiSelect && this.includeClear}
        includeSearch={!this.multiSelect && this.includeSearch}
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

      const menuItems = this.filteredItems || this.items || [];
      const noResults =
        this.noResults?.label ||
        this.noResults?.subLabel ||
        this.noResults?.ariaLabel;

      return (
        <Fragment>
          {menuItems.length > 0 || !noResults || hasSlottedContent
            ? menuItems.map((item) => (
                <modus-wc-menu-item
                  disabled={item.disabled}
                  focused={item.focused}
                  label={item.label}
                  onItemSelect={() => this.handleItemSelectByValue(item.value)}
                  onMouseDown={(e) => e.preventDefault()}
                  selected={item.selected}
                  value={item.value}
                />
              ))
            : this.renderNoResults()}
        </Fragment>
      );
    };

    // Set CSS custom properties for dynamic min-width control
    const minWidth = this.minInputWidth || 10;
    const cssVariables = {
      '--modus-autocomplete-min-input-width': `${minWidth}px`,
    };

    // Check if we have slotted content
    const hasSlottedContent = !!this.el.querySelector('[slot="menu-items"]');

    return (
      <Host class={this.getClasses()} style={cssVariables}>
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
            {this.includeSearch && (
              <SearchSolidIcon className="modus-wc-autocomplete-search-icon" />
            )}
            <div class="modus-wc-autocomplete-content">
              {getChips()}
              {getMoreChipsIndicator()}
              {getInput()}
            </div>
            <div class="modus-wc-autocomplete-button-container">
              {getClearButton()}
              {getExpandCollapseButton()}
            </div>
          </div>
        ) : (
          <Fragment>{getInput()}</Fragment>
        )}
        {hasSlottedContent ? (
          // When using custom slots, keep menu in DOM and use CSS to hide/show
          <modus-wc-menu
            aria-label="Autocomplete menu"
            bordered={this.bordered}
            class={this.menuVisible ? 'menu-visible' : 'menu-hidden'}
            onMenuFocusout={this.handleMenuFocusout}
            onMouseDown={(e) => e.preventDefault()}
            size={this.size}
          >
            {getMenuItems()}
            <slot name="menu-items"></slot>
          </modus-wc-menu>
        ) : (
          // When NOT using slots, conditionally render menu (automatic scroll reset)
          this.menuVisible && (
            <modus-wc-menu
              aria-label="Autocomplete menu"
              bordered={this.bordered}
              class="menu-visible"
              onMenuFocusout={this.handleMenuFocusout}
              onMouseDown={(e) => e.preventDefault()}
              size={this.size}
            >
              {getMenuItems()}
              <slot name="menu-items"></slot>
            </modus-wc-menu>
          )
        )}
      </Host>
    );
  }
}
