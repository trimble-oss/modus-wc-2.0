import { Fragment, h, JSX } from '@stencil/core';
import { CloseSolidIcon } from '../../icons/close-solid.icon';
import { SearchSolidIcon } from '../../icons/search-solid.icon';
import { IAutocompleteItem, IAutocompleteNoResults, ModusSize } from '../types';
import { KEY } from '../utils';
import { Attributes } from '../utils';

// Timeout constants for consistent behavior
export const BLUR_FOCUSOUT_DELAY_MS = 200; // Delay before handling blur/focusout to allow related element focus

export function getClasses(customClass?: string): string {
  const classList: string[] = ['modus-wc-autocomplete'];
  if (customClass) classList.push(customClass);
  return classList.join(' ');
}

export function getMultiSelectClasses(props: {
  bordered?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  size?: ModusSize;
}): string {
  return [
    'modus-wc-autocomplete-multi-select',
    'modus-wc-input',
    'modus-wc-w-full',
    'modus-wc-flex',
    'modus-wc-items-center',
    'modus-wc-gap-1',
    props.bordered && 'modus-wc-input-bordered',
    props.disabled && 'modus-wc-input-disabled',
    props.readOnly && 'modus-wc-text-input--readonly',
    props.size && `modus-wc-input-${props.size}`,
    props.bordered && 'modus-wc-autocomplete-multi-select--bordered',
    props.disabled && 'modus-wc-autocomplete-multi-select--disabled',
    props.readOnly && 'modus-wc-autocomplete-multi-select--readonly',
  ]
    .filter(Boolean)
    .join(' ');
}

export function getVisibleItems(
  filteredItems?: IAutocompleteItem[]
): IAutocompleteItem[] {
  return filteredItems?.filter((item) => !item.disabled) || [];
}

export function syncFilteredItems(
  items: IAutocompleteItem[] | undefined,
  value: string,
  leaveMenuOpen?: boolean,
  customInputChange?: (value: string) => void
): IAutocompleteItem[] {
  if (!items) {
    return [];
  }

  // When leaveMenuOpen is true and an item is selected, show all items
  if (leaveMenuOpen && items.some((item) => item.selected)) {
    return [...items];
  }

  // if customInputChange is defined, return items that are visibleInMenu
  if (customInputChange) {
    return items.filter((item) => item.visibleInMenu);
  }

  const currentSearchText = value?.toLowerCase() || '';

  if (currentSearchText === '') {
    // When no search text, show all items that are visibleInMenu
    return items.filter((item) => item.visibleInMenu);
  } else {
    // Filter items based on current search text AND visibleInMenu
    return items.filter(
      (item) =>
        item.visibleInMenu &&
        item.label.toLowerCase().includes(currentSearchText)
    );
  }
}

export function updateItemFocus(
  items: IAutocompleteItem[] | undefined,
  targetValue: string
): IAutocompleteItem[] | undefined {
  if (!items) return [];

  return [
    ...items.map((item) => ({
      ...item,
      focused: item.value === targetValue,
    })),
  ];
}

export function clearAllFocus(
  items: IAutocompleteItem[] | undefined
): IAutocompleteItem[] | undefined {
  if (!items) return [];

  return [
    ...items.map((item) => ({
      ...item,
      focused: false,
    })),
  ];
}

export interface ArrowNavigationParams {
  showMenuOnFocus?: boolean;
  minChars: number;
  inputValue: string;
  initialNavigation: boolean;
  visibleItems: IAutocompleteItem[];
  onUpdateFocus: (value: string) => void;
  onSetMenuVisible: (visible: boolean) => void;
  onSetInitialNavigation: (value: boolean) => void;
}

export function handleArrowDown(params: ArrowNavigationParams): void {
  const {
    showMenuOnFocus,
    minChars,
    inputValue,
    initialNavigation,
    visibleItems,
    onUpdateFocus,
    onSetMenuVisible,
    onSetInitialNavigation,
  } = params;

  if (showMenuOnFocus || inputValue.length >= minChars) {
    onSetMenuVisible(true);
  }

  if (initialNavigation) {
    onSetInitialNavigation(false);
    return;
  }

  const currentIndex = visibleItems.findIndex((item) => item.focused);
  const nextIndex =
    currentIndex < 0 ? 0 : Math.min(currentIndex + 1, visibleItems.length - 1);

  if (
    nextIndex >= 0 &&
    nextIndex < visibleItems.length &&
    visibleItems[nextIndex]
  ) {
    const item = visibleItems[nextIndex];
    if (item && item.value) {
      onUpdateFocus(item.value);
    }
  }
}

export function handleArrowUp(params: {
  initialNavigation: boolean;
  visibleItems: IAutocompleteItem[];
  onUpdateFocus: (value: string) => void;
  onSetInitialNavigation: (value: boolean) => void;
}): void {
  const {
    initialNavigation,
    visibleItems,
    onUpdateFocus,
    onSetInitialNavigation,
  } = params;

  if (initialNavigation) {
    onSetInitialNavigation(false);
    return;
  }

  const currentIndex = visibleItems.findIndex((item) => item.focused);
  const prevIndex =
    currentIndex < 0 ? visibleItems.length - 1 : Math.max(currentIndex - 1, 0);

  if (
    prevIndex >= 0 &&
    prevIndex < visibleItems.length &&
    visibleItems[prevIndex]
  ) {
    const item = visibleItems[prevIndex];
    if (item && item.value) {
      onUpdateFocus(item.value);
    }
  }
}

export function processKeyEvent(
  event: KeyboardEvent,
  params: {
    disabled?: boolean;
    readOnly?: boolean;
    customKeyDown?: (event: KeyboardEvent) => void;
  }
): { handled: boolean; keyLower: string } {
  if (params.customKeyDown) {
    params.customKeyDown(event);
    return { handled: true, keyLower: '' };
  }

  // Don't process keyboard events when disabled or readOnly
  if (params.disabled || params.readOnly) {
    return { handled: true, keyLower: '' };
  }

  if (!(event.target instanceof HTMLInputElement)) {
    return { handled: true, keyLower: '' };
  }

  const keyLower = event.key.toLowerCase();

  if (
    [KEY.ArrowDown, KEY.ArrowUp, KEY.Enter, KEY.Escape]
      .map((k) => k.toLowerCase())
      .includes(keyLower)
  ) {
    event.preventDefault();
  }

  return { handled: false, keyLower };
}

export function handleBackspace(
  input: HTMLInputElement,
  params: {
    multiSelect?: boolean;
    selectionOrder: string[];
    items?: IAutocompleteItem[];
    onChipRemove: (item: IAutocompleteItem) => void;
  }
): void {
  if (params.multiSelect && input.value.length === 0) {
    // Get the last selected chip in selection order
    if (params.selectionOrder.length > 0) {
      const lastSelectedValue =
        params.selectionOrder[params.selectionOrder.length - 1];
      const lastSelectedItem = params.items?.find(
        (item) => item.value === lastSelectedValue
      );

      if (lastSelectedItem) {
        // Remove the chip internally
        params.onChipRemove(lastSelectedItem);
      }
    }
  }
}

export function processItemSelection(
  item: IAutocompleteItem,
  params: {
    disabled?: boolean;
    readOnly?: boolean;
    items?: IAutocompleteItem[];
    multiSelect?: boolean;
    leaveMenuOpen?: boolean;
    selectionOrder: string[];
    maxChips?: number;
    customItemSelect?: (item: IAutocompleteItem) => void;
  }
): {
  updatedItems: IAutocompleteItem[] | undefined;
  updatedValue: string | undefined;
  updatedSelectionOrder: string[];
  shouldExpandChips: boolean;
  shouldCloseMenu: boolean;
} {
  if (params.disabled || params.readOnly || !params.items) {
    return {
      updatedItems: params.items,
      updatedValue: undefined,
      updatedSelectionOrder: params.selectionOrder,
      shouldExpandChips: false,
      shouldCloseMenu: false,
    };
  }

  if (params.customItemSelect) {
    params.customItemSelect(item);
    return {
      updatedItems: undefined,
      updatedValue: undefined,
      updatedSelectionOrder: params.selectionOrder,
      shouldExpandChips: false,
      shouldCloseMenu: false,
    };
  }

  let updatedItems: IAutocompleteItem[];
  let updatedValue: string | undefined = undefined;
  let updatedSelectionOrder = params.selectionOrder;
  let shouldExpandChips = false;

  if (params.multiSelect) {
    const currentItem = params.items.find(
      (menuItem) => menuItem.value === item.value
    );
    const isCurrentlySelected = currentItem?.selected || false;

    // Also check if item is already in selectionOrder to prevent duplicates
    const isInSelectionOrder = params.selectionOrder.includes(item.value);

    if (isCurrentlySelected || isInSelectionOrder) {
      return {
        updatedItems: params.items,
        updatedValue: '',
        updatedSelectionOrder: params.selectionOrder,
        shouldExpandChips: false,
        shouldCloseMenu: !params.leaveMenuOpen,
      };
    }

    updatedItems = [
      ...params.items.map((menuItem) => ({
        ...menuItem,
        selected: menuItem.value === item.value ? true : menuItem.selected,
        focused: params.leaveMenuOpen ? menuItem.value === item.value : false,
      })),
    ];

    // Add to end of selection order (now guaranteed not to be a duplicate)
    updatedSelectionOrder = [...params.selectionOrder, item.value];

    // Clear the input value in multi-select mode
    updatedValue = '';

    // If we exceed maxChips, automatically expand
    if (
      params.maxChips &&
      params.maxChips > 0 &&
      updatedSelectionOrder.length > params.maxChips
    ) {
      shouldExpandChips = true;
    }
  } else {
    updatedItems = [
      ...params.items.map((menuItem) => ({
        ...menuItem,
        selected: menuItem.value === item.value,
        focused: params.leaveMenuOpen ? menuItem.value === item.value : false,
      })),
    ];
    // Always set the input value to show the selected item's label
    updatedValue = item.label;
  }

  return {
    updatedItems,
    updatedValue,
    updatedSelectionOrder,
    shouldExpandChips,
    shouldCloseMenu: !params.leaveMenuOpen,
  };
}

export function processChipRemoval(
  item: IAutocompleteItem,
  params: {
    disabled?: boolean;
    readOnly?: boolean;
    items?: IAutocompleteItem[];
    selectionOrder: string[];
  }
): {
  updatedItems: IAutocompleteItem[] | undefined;
  updatedSelectionOrder: string[];
} {
  if (params.disabled || params.readOnly || !params.items) {
    return {
      updatedItems: params.items,
      updatedSelectionOrder: params.selectionOrder,
    };
  }

  const updatedItems = [
    ...params.items.map((menuItem) => ({
      ...menuItem,
      selected: menuItem.value === item.value ? false : menuItem.selected,
    })),
  ];

  // Remove from selection order
  const updatedSelectionOrder = params.selectionOrder.filter(
    (value) => value !== item.value
  );

  return {
    updatedItems,
    updatedSelectionOrder,
  };
}

export function processInputChange(
  event: CustomEvent<Event>,
  params: {
    disabled?: boolean;
    readOnly?: boolean;
    customInputChange?: (value: string) => void;
    showMenuOnFocus?: boolean;
    minChars: number;
    items?: IAutocompleteItem[];
    multiSelect?: boolean;
    debounceMs?: number;
  }
): {
  inputValue: string;
  shouldShowMenu: boolean;
  updatedItems: IAutocompleteItem[] | undefined;
  shouldResetNavigation: boolean;
} {
  if (params.disabled || params.readOnly) {
    return {
      inputValue: '',
      shouldShowMenu: false,
      updatedItems: params.items,
      shouldResetNavigation: false,
    };
  }

  // Add null checks for edge cases
  if (!event.detail || !event.detail.target) {
    return {
      inputValue: '',
      shouldShowMenu: false,
      updatedItems: params.items,
      shouldResetNavigation: false,
    };
  }

  const input = event.detail.target as HTMLInputElement;
  const inputValue = input.value || '';

  if (params.customInputChange) {
    params.customInputChange(inputValue);
    return {
      inputValue,
      shouldShowMenu: false,
      updatedItems: undefined, // Don't update items - custom handler will do it
      shouldResetNavigation: false,
    };
  }

  // Update menu visibility
  let shouldShowMenu: boolean;
  if (params.showMenuOnFocus) {
    shouldShowMenu = true;
  } else {
    shouldShowMenu = inputValue.length >= params.minChars;
  }

  let updatedItems = params.items;
  if (params.items) {
    // Clear the focused state from all items
    updatedItems = [
      ...params.items.map((item) => ({
        ...item,
        focused: false,
      })),
    ];

    // In single select mode, if the input is cleared, also clear the selection
    if (!params.multiSelect && inputValue === '') {
      updatedItems = [
        ...updatedItems.map((item) => ({
          ...item,
          selected: false,
        })),
      ];
    }
  }

  return {
    inputValue,
    shouldShowMenu,
    updatedItems,
    shouldResetNavigation: !!inputValue,
  };
}

// Rendering Functions
interface RenderNoResultsParams {
  noResults?: IAutocompleteNoResults;
}

export function renderNoResults(params: RenderNoResultsParams): JSX.Element {
  return (
    <div class="modus-wc-autocomplete-no-results">
      <div class="icon-label" aria-label={params.noResults?.ariaLabel}>
        <SearchSolidIcon className="modus-wc-autocomplete-search-icon" />
        <div class="label">{params.noResults?.label}</div>
      </div>
      <div class="sub-label">{params.noResults?.subLabel}</div>
    </div>
  );
}

interface RenderChipsParams {
  selectionOrder: string[];
  items?: IAutocompleteItem[];
  isChipsExpanded: boolean;
  maxChips?: number;
  disabled?: boolean;
  readOnly?: boolean;
  onChipRemove: (item: IAutocompleteItem) => void;
}

export function renderChips(params: RenderChipsParams): JSX.Element {
  // Get selected items in selection order
  const selectedItems = params.selectionOrder
    .map((value) =>
      params.items?.find((item) => item.value === value && item.selected)
    )
    .filter(Boolean) as IAutocompleteItem[];

  if (selectedItems.length === 0) {
    return <Fragment></Fragment>;
  }

  // Chip display logic:
  // - Not expanded: show up to maxChips (compact view)
  // - Expanded: show all chips regardless of focus state
  const effectiveMaxChips =
    !params.isChipsExpanded && params.maxChips && params.maxChips > 0
      ? params.maxChips
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
          disabled={params.disabled || params.readOnly}
          onChipRemove={(event) => {
            event.stopPropagation();
            params.onChipRemove(item);
          }}
          variant="filled"
        ></modus-wc-chip>
      ))}
    </Fragment>
  );
}

interface RenderClearButtonParams {
  includeClear?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  selectionOrder: string[];
  value?: string;
  onClearAll: () => void;
}

export function renderClearButton(
  params: RenderClearButtonParams
): JSX.Element | null {
  const showClear =
    params.includeClear &&
    !params.disabled &&
    !params.readOnly &&
    (params.selectionOrder.length > 0 || (params.value?.length ?? 0) > 0);

  if (!showClear) {
    return null;
  }

  return (
    <modus-wc-button
      onClick={params.onClearAll}
      variant="borderless"
      color="secondary"
      aria-label="Clear all"
      disabled={params.disabled || params.readOnly}
      size="xs"
      shape="circle"
      type="button"
    >
      <CloseSolidIcon />
    </modus-wc-button>
  );
}

interface RenderExpandCollapseButtonParams {
  selectionOrder: string[];
  maxChips?: number;
  isChipsExpanded: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onToggleExpansion: () => void;
}

export function renderExpandCollapseButton(
  params: RenderExpandCollapseButtonParams
): JSX.Element | null {
  const selectedItemsCount = params.selectionOrder.length;

  // Show expand/collapse button when there are more chips than maxChips
  if (
    !params.maxChips ||
    params.maxChips <= 0 ||
    selectedItemsCount <= params.maxChips
  ) {
    return null;
  }

  const remainingCount = selectedItemsCount - params.maxChips;

  return (
    <modus-wc-button
      custom-class={`modus-wc-autocomplete-expand-button ${params.isChipsExpanded ? 'expanded' : ''}`}
      onClick={params.onToggleExpansion}
      variant="borderless"
      color="secondary"
      aria-label={
        params.isChipsExpanded
          ? 'Collapse chips'
          : `Show ${remainingCount} more`
      }
      disabled={params.disabled || params.readOnly}
      size="xs"
      shape="circle"
      type="button"
    >
      <modus-wc-icon
        aria-label={params.isChipsExpanded ? 'Collapse chips' : 'Expand chips'}
        name={params.isChipsExpanded ? 'caret_up' : 'caret_down'}
        size="md"
      />
    </modus-wc-button>
  );
}

interface RenderMoreChipsIndicatorParams {
  selectionOrder: string[];
  maxChips?: number;
  isChipsExpanded: boolean;
}

export function renderMoreChipsIndicator(
  params: RenderMoreChipsIndicatorParams
): JSX.Element | null {
  const selectedItemsCount = params.selectionOrder.length;

  // Show "+N more" when there are more chips than maxChips and not expanded
  if (!params.maxChips || params.maxChips <= 0 || params.isChipsExpanded) {
    return null;
  }

  const remainingCount = selectedItemsCount - params.maxChips;

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

interface RenderInputParams {
  bordered?: boolean;
  multiSelect?: boolean;
  disabled?: boolean;
  includeClear?: boolean;
  includeSearch?: boolean;
  inputId?: string;
  inputTabIndex?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: ModusSize;
  value: string;
  inheritedAttributes: Attributes;
  onBlur: (event: CustomEvent<FocusEvent>) => void;
  onChange: (event: CustomEvent<Event>) => void;
  onFocus: (event: CustomEvent<FocusEvent>) => void;
}

export function renderInput(params: RenderInputParams): JSX.Element {
  return (
    <modus-wc-text-input
      bordered={params.bordered && !params.multiSelect}
      disabled={params.disabled}
      includeClear={!params.multiSelect && params.includeClear}
      includeSearch={!params.multiSelect && params.includeSearch}
      inputId={params.inputId}
      inputTabIndex={params.inputTabIndex}
      name={params.name}
      onInputBlur={params.onBlur}
      onInputChange={params.onChange}
      onInputFocus={params.onFocus}
      placeholder={params.placeholder}
      readOnly={params.readOnly}
      required={params.required}
      size={params.size}
      value={params.value}
      {...params.inheritedAttributes}
    />
  );
}

interface RenderMenuItemsParams {
  showSpinner?: boolean;
  size?: ModusSize;
  filteredItems?: IAutocompleteItem[];
  items?: IAutocompleteItem[];
  noResults?: IAutocompleteNoResults;
  hasSlottedContent: boolean;
  onItemSelect: (value: string) => void;
}

export function renderMenuItems(params: RenderMenuItemsParams): JSX.Element {
  if (params.showSpinner) {
    return (
      <li>
        <modus-wc-loader variant="spinner" size={params.size}></modus-wc-loader>
      </li>
    );
  }

  const menuItems = params.filteredItems || params.items || [];
  const noResults =
    params.noResults?.label ||
    params.noResults?.subLabel ||
    params.noResults?.ariaLabel;

  return (
    <Fragment>
      {menuItems.length > 0 || !noResults || params.hasSlottedContent
        ? menuItems.map((item) => (
            <modus-wc-menu-item
              disabled={item.disabled}
              focused={item.focused}
              label={item.label}
              onItemSelect={(e: CustomEvent) => {
                e.stopPropagation();
                params.onItemSelect(item.value);
              }}
              onMouseDown={(e) => e.preventDefault()}
              selected={item.selected}
              tooltip-content={item.tooltipContent}
              tooltip-position={item.tooltipPosition}
              value={item.value}
            />
          ))
        : renderNoResults({ noResults: params.noResults })}
    </Fragment>
  );
}
