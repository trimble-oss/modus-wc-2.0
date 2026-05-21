export interface IReorderResult<T> {
  items: T[];
  targetIndex: number;
}

/**
 * Reorders a list item by swapping it with the adjacent item in the given direction.
 */
export function reorderListItem<T>(
  items: T[],
  currentIndex: number,
  direction: number
): IReorderResult<T> | null {
  const targetIdx = currentIndex + direction;
  if (targetIdx < 0 || targetIdx >= items.length) return null;

  const newItems = [...items];
  [newItems[currentIndex], newItems[targetIdx]] = [
    newItems[targetIdx],
    newItems[currentIndex],
  ];

  return { items: newItems, targetIndex: targetIdx };
}

/**
 * Reorders a grid item by removing it from the current position
 * and inserting it at the target position.
 */
export function reorderGridItem<T>(
  items: T[],
  currentIndex: number,
  offset: number
): IReorderResult<T> | null {
  const targetIdx = currentIndex + offset;
  if (targetIdx < 0 || targetIdx >= items.length) return null;

  const newItems = [...items];
  const [movedItem] = newItems.splice(currentIndex, 1);
  newItems.splice(targetIdx, 0, movedItem);

  return { items: newItems, targetIndex: targetIdx };
}

/**
 * Calculates the number of columns in the grid layout
 * by comparing offsetTop values of consecutive items.
 */
export function getGridColumnCount(el: HTMLElement): number {
  const items = el.querySelectorAll('.grid-item');
  if (items.length <= 1) return 1;

  const firstTop = (items[0] as HTMLElement).offsetTop;
  let count = 1;
  for (let i = 1; i < items.length; i++) {
    if ((items[i] as HTMLElement).offsetTop === firstTop) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

/**
 * Returns the navigation offset for an arrow key based on the layout.
 * Returns null if the key is not applicable for the current layout.
 */
export function getNavigationOffset(
  key: string,
  layout: 'list' | 'grid',
  gridColumnCount: number
): number | null {
  switch (key) {
    case 'ArrowUp':
      return layout === 'grid' ? -gridColumnCount : -1;
    case 'ArrowDown':
      return layout === 'grid' ? gridColumnCount : 1;
    case 'ArrowLeft':
      return layout === 'grid' ? -1 : null;
    case 'ArrowRight':
      return layout === 'grid' ? 1 : null;
    default:
      return null;
  }
}

/**
 * Returns the valid target index for focus navigation,
 * or null if the target is out of bounds.
 */
export function getTargetFocusIndex(
  currentIndex: number,
  offset: number,
  totalItems: number
): number | null {
  const targetIdx = currentIndex + offset;
  return targetIdx >= 0 && targetIdx < totalItems ? targetIdx : null;
}

/**
 * Focuses the app menu item at the given index based on the layout.
 *
 * In list layout the focus target depends on edit mode: the wrapper row
 * (tabIndex 0 in edit mode) or the inner `<li>` rendered by
 * modus-wc-menu-item (native tab stop in normal mode).
 */
export function focusAppMenuItem(
  el: HTMLElement,
  layout: 'list' | 'grid',
  appIndex: number
): void {
  if (layout === 'grid') {
    const items = el.querySelectorAll('.grid-item');
    (items[appIndex] as HTMLElement)?.focus();
  } else {
    const rows = el.querySelectorAll('.app-menu-item-row');
    const row = rows[appIndex] as HTMLElement;
    if (!row) return;

    if (row.tabIndex === 0) {
      row.focus();
    } else {
      const li = row.querySelector('modus-wc-menu-item li') as HTMLElement;
      li?.focus();
    }
  }
}
