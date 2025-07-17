import {
  Component,
  Element,
  EventEmitter,
  Fragment,
  h,
  Host,
  JSX,
  Listen,
  Method,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { CloseSolidIcon } from '../../icons/close-solid.icon';
import { SearchSolidIcon } from '../../icons/search-solid.icon';
import { IAutocompleteItem, IAutocompleteNoResults, ModusSize } from '../types';
import { Attributes, inheritAriaAttributes, KEY } from '../utils';
import {
  BLUR_FOCUSOUT_DELAY_MS,
  clearAllFocus,
  getClasses,
  getMultiSelectClasses,
  getVisibleItems,
  handleArrowDown as processArrowDown,
  handleArrowUp as processArrowUp,
  handleBackspace as processBackspace,
  processChipRemoval,
  processInputChange,
  processItemSelection,
  processKeyEvent,
  syncFilteredItems,
  updateItemFocus,
} from './modus-wc-autocomplete-core';

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
    return getClasses(this.customClass);
  }

  private getMultiSelectClasses(): string {
    return getMultiSelectClasses({
      bordered: this.bordered,
      disabled: this.disabled,
      readOnly: this.readOnly,
      size: this.size,
    });
  }

  private getVisibleItems(): IAutocompleteItem[] {
    return getVisibleItems(this.filteredItems);
  }

  private syncFilteredItems(): void {
    this.filteredItems = syncFilteredItems(this.items, this.value);
  }

  private updateItemFocus(targetValue: string): void {
    const updated = updateItemFocus(this.items, targetValue);
    if (updated) {
      this.items = updated;
      this.syncFilteredItems();
    }
  }

  private clearAllFocus(): void {
    const updated = clearAllFocus(this.items);
    if (updated) {
      this.items = updated;
      this.syncFilteredItems();
    }
  }

  private handleArrowDown(): void {
    const input = this.el.querySelector('input');
    if (!input) return;

    processArrowDown({
      showMenuOnFocus: this.showMenuOnFocus,
      minChars: this.minChars,
      inputValue: input.value,
      initialNavigation: this.initialNavigation,
      visibleItems: this.getVisibleItems(),
      onUpdateFocus: (value) => this.updateItemFocus(value),
      onSetMenuVisible: (visible) => (this.menuVisible = visible),
      onSetInitialNavigation: (value) => (this.initialNavigation = value),
    });
  }

  private handleArrowUp(): void {
    processArrowUp({
      initialNavigation: this.initialNavigation,
      visibleItems: this.getVisibleItems(),
      onUpdateFocus: (value) => this.updateItemFocus(value),
      onSetInitialNavigation: (value) => (this.initialNavigation = value),
    });
  }

  private handleEscape(): void {
    this.clearAllFocus();
    this.initialNavigation = true;
    this.menuVisible = false;
  }

  private handleEnter(): void {
    const visibleItems = this.getVisibleItems();
    const focusedItem = visibleItems.find((item) => item.focused);

    if (focusedItem) {
      this.handleItemSelect(focusedItem);
    } else if (this.multiSelect) {
      const selectedItems = this.items?.filter((item) => item.selected) || [];
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
  }

  private handleBackspace(input: HTMLInputElement): void {
    processBackspace(input, {
      multiSelect: this.multiSelect,
      selectionOrder: this.selectionOrder,
      items: this.items,
      onChipRemove: (item) => this.handleChipRemove(item),
    });
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
    const result = processInputChange(event, {
      disabled: this.disabled,
      readOnly: this.readOnly,
      customInputChange: this.customInputChange,
      showMenuOnFocus: this.showMenuOnFocus,
      minChars: this.minChars,
      items: this.items,
      multiSelect: this.multiSelect,
      debounceMs: this.debounceMs,
    });

    if (!result.inputValue && !result.shouldShowMenu) {
      return;
    }

    this.menuVisible = result.shouldShowMenu;
    this.items = result.updatedItems;
    this.value = result.inputValue;

    // Sync filtered items based on new search value
    this.syncFilteredItems();

    if (result.shouldResetNavigation) {
      this.initialNavigation = false;
    }

    // Handle immediate emit if no debounce
    if (!this.debounceMs) {
      this.inputChange.emit(event.detail);
    } else if (!this.customInputChange) {
      // Handle debounced emit
      if (this.debounceTimer) {
        window.clearTimeout(this.debounceTimer);
      }
      this.debounceTimer = window.setTimeout(() => {
        this.inputChange.emit(event.detail);
      }, this.debounceMs);
    }
  };

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    const { handled, keyLower } = processKeyEvent(event, {
      disabled: this.disabled,
      readOnly: this.readOnly,
      customKeyDown: this.customKeyDown,
    });

    if (handled) return;

    const input = event.target as HTMLInputElement;

    switch (keyLower) {
      case KEY.ArrowDown.toLowerCase(): {
        this.handleArrowDown();
        break;
      }

      case KEY.ArrowUp.toLowerCase(): {
        this.handleArrowUp();
        break;
      }

      case KEY.Escape.toLowerCase(): {
        this.handleEscape();
        break;
      }

      case KEY.Enter.toLowerCase(): {
        this.handleEnter();
        break;
      }

      case KEY.Backspace.toLowerCase(): {
        this.handleBackspace(input);
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
    const result = processItemSelection(item, {
      disabled: this.disabled,
      readOnly: this.readOnly,
      items: this.items,
      multiSelect: this.multiSelect,
      leaveMenuOpen: this.leaveMenuOpen,
      selectionOrder: this.selectionOrder,
      maxChips: this.maxChips,
      customItemSelect: this.customItemSelect,
    });

    if (result.updatedItems && result.updatedItems !== this.items) {
      this.items = result.updatedItems;
      this.syncFilteredItems();
    }

    if (result.updatedValue !== undefined) {
      this.value = result.updatedValue;
    }

    if (result.updatedSelectionOrder) {
      this.selectionOrder = result.updatedSelectionOrder;
    }

    if (result.shouldExpandChips) {
      this.isChipsExpanded = true;
    }

    if (result.shouldCloseMenu) {
      this.menuVisible = false;
    }

    // Only emit event and update navigation if not disabled/readonly and not using custom handler
    if (
      !this.disabled &&
      !this.readOnly &&
      !this.customItemSelect &&
      this.items
    ) {
      this.initialNavigation = true;
      this.itemSelect.emit(item);
    }
  };

  private handleChipRemove = (item: IAutocompleteItem) => {
    const result = processChipRemoval(item, {
      disabled: this.disabled,
      readOnly: this.readOnly,
      items: this.items,
      selectionOrder: this.selectionOrder,
    });

    if (result.updatedItems) {
      this.items = result.updatedItems;
      this.selectionOrder = result.updatedSelectionOrder;
      this.syncFilteredItems();
    }

    // Emit event for external handlers who want to know about the removal
    if (!this.disabled && !this.readOnly) {
      this.chipRemove.emit(item);
    }
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

  private renderChips(): JSX.Element {
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
  }

  private renderClearButton(): JSX.Element | null {
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
  }

  private renderExpandCollapseButton(): JSX.Element | null {
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
          aria-label={this.isChipsExpanded ? 'Collapse chips' : 'Expand chips'}
          name={this.isChipsExpanded ? 'caret_up' : 'caret_down'}
          size="md"
        />
      </modus-wc-button>
    );
  }

  private renderMoreChipsIndicator(): JSX.Element | null {
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
  }

  private renderInput(): JSX.Element {
    return (
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
  }

  private renderMenuItems(hasSlottedContent: boolean): JSX.Element {
    if (this.showSpinner) {
      return (
        <li>
          <modus-wc-loader variant="spinner" size={this.size}></modus-wc-loader>
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

  render() {
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
              {this.renderChips()}
              {this.renderMoreChipsIndicator()}
              {this.renderInput()}
            </div>
            <div class="modus-wc-autocomplete-button-container">
              {this.renderClearButton()}
              {this.renderExpandCollapseButton()}
            </div>
          </div>
        ) : (
          <Fragment>{this.renderInput()}</Fragment>
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
            {this.renderMenuItems(hasSlottedContent)}
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
              {this.renderMenuItems(hasSlottedContent)}
              <slot name="menu-items"></slot>
            </modus-wc-menu>
          )
        )}
      </Host>
    );
  }
}
