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
import { SearchSolidIcon } from '../../icons/search-solid.icon';
import { handleShadowDOMStyles } from '../base-component';
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
  renderChips,
  renderClearButton,
  renderExpandCollapseButton,
  renderInput,
  renderMenuItems,
  renderMoreChipsIndicator,
  syncFilteredItems,
  updateItemFocus,
} from './modus-wc-autocomplete-core';

/**
 * A customizable autocomplete component used to create searchable text inputs.
 *
 * The component supports a `<slot>` for injecting custom content.
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
  @State() private searchText: string = ''; // Dedicated state for active search query

  private debounceTimer?: number;
  private inheritedAttributes: Attributes = {};
  private programmaticOpen: boolean = false;
  private isNavigating: boolean = false; // Flag to prevent re-filtering during navigation

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

  /** Event emitted when the clear button is clicked. */
  @StencilEvent() clearClick!: EventEmitter<void>;

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
  handleItemsChange(
    newItems: IAutocompleteItem[],
    oldItems: IAutocompleteItem[]
  ) {
    // Only sync filtered items if items actually changed (not just focus updates)
    // and we're not currently navigating
    if (
      this.items &&
      !this.isNavigating &&
      JSON.stringify(
        newItems?.map((i) => ({
          value: i.value,
          selected: i.selected,
          focused: i.focused,
        }))
      ) !==
        JSON.stringify(
          oldItems?.map((i) => ({
            value: i.value,
            selected: i.selected,
            focused: i.focused,
          }))
        )
    ) {
      if (this.multiSelect) {
        // Keep items in selectionOrder that are still selected
        const stillSelectedValues = this.selectionOrder.filter((value) =>
          newItems.some((item) => item.value === value && item.selected)
        );

        // Add any newly selected items that aren't already in selectionOrder
        const newlySelectedValues = newItems
          .filter(
            (item) => item.selected && !stillSelectedValues.includes(item.value)
          )
          .map((item) => item.value);

        // Preserve the original selection order and append new selections
        this.selectionOrder = [...stillSelectedValues, ...newlySelectedValues];
      }
      this.syncFilteredItems();
    }
  }

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

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
    this.filteredItems = syncFilteredItems(
      this.items,
      this.searchText,
      this.leaveMenuOpen,
      this.customInputChange
    );
  }

  private updateItemFocus(targetValue: string): void {
    this.isNavigating = true; // Prevent items watcher from re-filtering
    const updated = updateItemFocus(this.items, targetValue);
    if (updated) {
      this.items = updated;

      // We need to update filteredItems to reflect the focus change
      // But only if we're actively filtering
      if (this.searchText) {
        this.syncFilteredItems();
      } else {
        // When not filtering, update filteredItems to reflect the focus change
        // without applying any filter
        this.filteredItems = this.items.filter((item) => item.visibleInMenu);
      }
    }
    this.isNavigating = false; // Reset flag
  }

  private clearAllFocus(): void {
    const updated = clearAllFocus(this.items);
    if (updated) {
      this.items = updated;
      // When clearing focus (e.g., on Escape), show all items instead of filtered
      this.filteredItems = this.items.filter((item) => item.visibleInMenu);
    }
  }

  private scrollToOptionSelected(): void {
    if (this.multiSelect) return;

    requestAnimationFrame(() => {
      const menuEl = this.el.querySelector('modus-wc-menu') as HTMLElement;
      if (menuEl) {
        const targetItem = menuEl.querySelector(
          '.modus-wc-menu-item-selected'
        ) as HTMLElement;

        const scrollContainer = menuEl.querySelector(
          '.modus-wc-menu'
        ) as HTMLElement;

        const containerRect = scrollContainer.getBoundingClientRect();
        const itemRect = targetItem.getBoundingClientRect();

        const isAboveView = itemRect.top < containerRect.top;
        const isBelowView = itemRect.bottom > containerRect.bottom;

        if (isAboveView || isBelowView) {
          const scrollTop = targetItem.offsetTop;
          scrollContainer.scrollTo({
            top: Math.max(0, scrollTop),
            behavior: 'smooth',
          });
        }
      }
    });
  }

  private handleArrowDown(): void {
    const input = this.el.querySelector('input');
    if (!input) return;

    // Check if we're in filtering mode based on searchText BEFORE clearing it
    const wasFiltering = this.searchText.length > 0;

    if (this.initialNavigation) {
      if (this.searchText) {
        this.searchText = '';
      }
      // Reset filtered items when initial navigation to ensure all items are shown
      if (this.items) {
        this.filteredItems = this.items.filter((item) => item.visibleInMenu);
      }
    }

    processArrowDown({
      showMenuOnFocus: this.showMenuOnFocus,
      minChars: this.minChars,
      inputValue: input.value,
      initialNavigation: this.initialNavigation,
      visibleItems: this.getVisibleItems(),
      onUpdateFocus: (value) => {
        this.updateItemFocus(value);
        // After updating focus, if not filtering, ensure we show all items
        if (!wasFiltering && !this.searchText && this.items) {
          this.filteredItems = this.items.filter((item) => item.visibleInMenu);
        }
      },
      onSetMenuVisible: (visible) => {
        this.menuVisible = visible;
        // Only scroll if menu is becoming visible and there's a selected item
        if (visible && this.items?.some((item) => item.selected)) {
          this.scrollToOptionSelected();
        }
      },
      onSetInitialNavigation: (value) => (this.initialNavigation = value),
    });
  }

  private handleArrowUp(): void {
    // Check if we're in filtering mode based on searchText
    const isFiltering = this.searchText.length > 0;

    processArrowUp({
      initialNavigation: this.initialNavigation,
      visibleItems: this.getVisibleItems(),
      onUpdateFocus: (value) => {
        this.updateItemFocus(value);
        // After updating focus, if not filtering, ensure we show all items
        if (!isFiltering && this.items) {
          this.filteredItems = this.items.filter((item) => item.visibleInMenu);
        }
      },
      onSetInitialNavigation: (value) => (this.initialNavigation = value),
    });
  }

  private handleEscape(): void {
    this.clearAllFocus();
    this.initialNavigation = true;
    this.menuVisible = false;
    this.searchText = ''; // Clear search text on escape
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

  private handleFocusOutside = (event: FocusEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement;

    // Use composedPath() for Shadow DOM compatibility
    const path = event.composedPath && event.composedPath();
    const focusedInside =
      relatedTarget &&
      (this.el.contains(relatedTarget) || (path && path.includes(this.el)));

    if (!focusedInside) {
      // Hide menu immediately to prevent flicker
      if (!this.programmaticOpen) {
        this.menuVisible = false;
      }

      // Use setTimeout for cleanup and blur event
      setTimeout(() => {
        // Reset filtered items after menu is hidden
        if (this.items) {
          this.filteredItems = this.items.filter((item) => item.visibleInMenu);
        }
        this.inputBlur.emit(event);
      }, BLUR_FOCUSOUT_DELAY_MS);
    }
  };

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
    }

    this.handleFocusOutside(event.detail);
  };

  private handleMenuFocusout = (event: CustomEvent<FocusEvent>) => {
    this.handleFocusOutside(event.detail);
  };

  private handleChange = (event: CustomEvent<Event>) => {
    // Prevent the child text-input's immediate inputChange event
    event.stopPropagation();

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
    if (result.updatedItems) {
      this.items = result.updatedItems;
    }
    this.value = result.inputValue;
    this.searchText = result.inputValue; // Update search text as user types

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
    // Prevent the child text-input's immediate inputFocus event
    event.stopPropagation();

    if (!this.disabled && !this.readOnly) {
      // When focusing, clear searchText if value matches a selected item
      // This prevents treating the display value as a search query
      const hasSelectedItem = this.items?.some(
        (item) => item.selected && item.label === this.value
      );

      if (hasSelectedItem) {
        this.searchText = '';
      }

      // Show all items on focus
      if (this.items) {
        this.filteredItems = this.items.filter((item) => item.visibleInMenu);
      }

      if (this.showMenuOnFocus) {
        this.menuVisible = true;

        // Scroll to selected item when menu opens via mouse focus
        if (this.items?.some((item) => item.selected)) {
          requestAnimationFrame(() => {
            this.scrollToOptionSelected();
          });
        }
      }
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
      this.searchText = ''; // Clear search text when clearing selection
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
    this.searchText = ''; // Clear search text as well
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

    const isSelected = item.selected;
    if (this.multiSelect && isSelected && item.checkbox) {
      this.handleChipRemove(item);
    }

    if (result.updatedItems && result.updatedItems !== this.items) {
      this.items = result.updatedItems;
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

    // Clear search text after selection - this is critical to prevent state ambiguity
    this.searchText = '';

    // Reset filtered items to show all items after selection
    if (this.items) {
      this.filteredItems = this.items.filter((item) => item.visibleInMenu);
    }

    // Only emit event and update navigation if not disabled/readonly
    if (!this.disabled && !this.readOnly && this.items) {
      this.initialNavigation = true;
      this.itemSelect.emit(item);

      // Scroll to selected option after selection
      if (!this.multiSelect && this.menuVisible) {
        this.scrollToOptionSelected();
      }
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
      // When removing chips, show all items instead of applying text filtering
      this.filteredItems = this.items.filter((item) => item.visibleInMenu);
    }

    // Emit event for external handlers who want to know about the removal
    if (!this.disabled && !this.readOnly) {
      this.chipRemove.emit(item);
    }
  };

  private handleClearAll = (event?: CustomEvent<void>) => {
    // This method is called by the text input and a button, stop propagation of the text input event
    // istanbul ignore next
    event?.stopPropagation();

    void this.clearInput();
    this.clearClick.emit();
  };

  private toggleChipsExpansion = () => {
    if (this.leaveMenuOpen && this.isChipsExpanded) {
      this.menuVisible = false;
    }

    this.isChipsExpanded = !this.isChipsExpanded;
    this.chipsExpansionChange.emit({ expanded: this.isChipsExpanded });
  };

  private handleOutsideClick = (event: MouseEvent) => {
    // Use composedPath() for Shadow DOM compatibility
    const path = event.composedPath();
    const clickedInside = path.includes(this.el);

    if (!clickedInside && !this.programmaticOpen) {
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
    const hasSlottedMenuItems = !!this.el.querySelector('[slot="menu-items"]');
    const hasSlottedCustomIcon = !!this.el.querySelector(
      '[slot="custom-icon"]'
    );

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
              {renderChips({
                selectionOrder: this.selectionOrder,
                items: this.items,
                isChipsExpanded: this.isChipsExpanded,
                maxChips: this.maxChips,
                disabled: this.disabled,
                readOnly: this.readOnly,
                onChipRemove: (item) => this.handleChipRemove(item),
              })}
              {renderMoreChipsIndicator({
                selectionOrder: this.selectionOrder,
                maxChips: this.maxChips,
                isChipsExpanded: this.isChipsExpanded,
              })}
              {renderInput({
                bordered: this.bordered,
                multiSelect: this.multiSelect,
                disabled: this.disabled,
                includeClear: this.includeClear,
                includeSearch: this.includeSearch,
                inputId: this.inputId,
                inputTabIndex: this.inputTabIndex,
                name: this.name,
                placeholder: this.placeholder,
                readOnly: this.readOnly,
                required: this.required,
                size: this.size,
                value: this.value,
                inheritedAttributes: this.inheritedAttributes,
                customIconSlot: hasSlottedCustomIcon,
                onBlur: this.handleBlur,
                onChange: this.handleChange,
                onFocus: this.handleFocus,
              })}
            </div>
            <div class="modus-wc-autocomplete-button-container">
              {renderClearButton({
                includeClear: this.includeClear,
                disabled: this.disabled,
                readOnly: this.readOnly,
                selectionOrder: this.selectionOrder,
                value: this.value,
                onClearAll: this.handleClearAll,
              })}
              {renderExpandCollapseButton({
                selectionOrder: this.selectionOrder,
                maxChips: this.maxChips,
                isChipsExpanded: this.isChipsExpanded,
                disabled: this.disabled,
                readOnly: this.readOnly,
                onToggleExpansion: this.toggleChipsExpansion,
              })}
            </div>
          </div>
        ) : (
          <Fragment>
            {renderInput({
              bordered: this.bordered,
              multiSelect: this.multiSelect,
              disabled: this.disabled,
              includeClear: this.includeClear,
              includeSearch: this.includeSearch,
              inputId: this.inputId,
              inputTabIndex: this.inputTabIndex,
              name: this.name,
              placeholder: this.placeholder,
              readOnly: this.readOnly,
              required: this.required,
              size: this.size,
              value: this.value,
              inheritedAttributes: this.inheritedAttributes,
              customIconSlot: hasSlottedCustomIcon,
              onBlur: this.handleBlur,
              onChange: this.handleChange,
              onClear: this.handleClearAll,
              onFocus: this.handleFocus,
            })}
          </Fragment>
        )}
        {hasSlottedMenuItems ? (
          // When using custom slots, keep menu in DOM and use CSS to hide/show
          <modus-wc-menu
            aria-label="Autocomplete menu"
            bordered={this.bordered}
            class={this.menuVisible ? 'menu-visible' : 'menu-hidden'}
            onMenuFocusout={this.handleMenuFocusout}
            onMouseDown={(e) => e.preventDefault()}
            size={this.size}
          >
            {renderMenuItems({
              showSpinner: this.showSpinner,
              size: this.size,
              filteredItems: this.filteredItems,
              items: this.items,
              noResults: this.noResults,
              hasSlottedContent: hasSlottedMenuItems,
              onItemSelect: this.handleItemSelectByValue,
            })}
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
              {renderMenuItems({
                showSpinner: this.showSpinner,
                size: this.size,
                filteredItems: this.filteredItems,
                items: this.items,
                noResults: this.noResults,
                hasSlottedContent: hasSlottedMenuItems,
                onItemSelect: this.handleItemSelectByValue,
              })}
              <slot name="menu-items"></slot>
            </modus-wc-menu>
          )
        )}
      </Host>
    );
  }
}
