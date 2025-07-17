import { IAutocompleteItem, ModusSize } from '../types';
import { KEY } from '../utils';

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
  value: string
): IAutocompleteItem[] {
  if (!items) {
    return [];
  }

  const currentSearchText = value?.toLowerCase() || '';

  if (currentSearchText === '') {
    // When no search text, show all items
    return [...items];
  } else {
    // Filter items based on current search text
    return items.filter((item) =>
      item.label.toLowerCase().includes(currentSearchText)
    );
  }
}

export function updateItemFocus(
  items: IAutocompleteItem[] | undefined,
  targetValue: string
): IAutocompleteItem[] | undefined {
  if (!items) return undefined;

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
  if (!items) return undefined;

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

  if (visibleItems[nextIndex]) {
    onUpdateFocus(visibleItems[nextIndex].value);
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

  if (visibleItems[prevIndex]) {
    onUpdateFocus(visibleItems[prevIndex].value);
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
  updatedValue: string;
  updatedSelectionOrder: string[];
  shouldExpandChips: boolean;
  shouldCloseMenu: boolean;
} {
  if (params.disabled || params.readOnly || !params.items) {
    return {
      updatedItems: params.items,
      updatedValue: '',
      updatedSelectionOrder: params.selectionOrder,
      shouldExpandChips: false,
      shouldCloseMenu: false,
    };
  }

  if (params.customItemSelect) {
    params.customItemSelect(item);
    return {
      updatedItems: params.items,
      updatedValue: '',
      updatedSelectionOrder: params.selectionOrder,
      shouldExpandChips: false,
      shouldCloseMenu: false,
    };
  }

  let updatedItems: IAutocompleteItem[];
  let updatedValue: string = '';
  let updatedSelectionOrder = params.selectionOrder;
  let shouldExpandChips = false;

  if (params.multiSelect) {
    const currentItem = params.items.find(
      (menuItem) => menuItem.value === item.value
    );
    const isCurrentlySelected = currentItem?.selected || false;

    if (isCurrentlySelected) {
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
        focused: false,
      })),
    ];

    // Add to end of selection order
    updatedSelectionOrder = [...params.selectionOrder, item.value];

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
        focused: false,
      })),
    ];
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
      updatedItems: params.items,
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
