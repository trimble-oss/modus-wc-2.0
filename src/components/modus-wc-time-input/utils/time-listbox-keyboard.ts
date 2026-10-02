import {
  ICircularScrollLock,
  maintainCircularScroll,
  scrollDatalistOptionIntoView,
  scrollWheelOptionIntoView,
} from './time-wheel-scroll';

const keyboardScrollLock: ICircularScrollLock = { current: false };

/** Rows a keyboard user can land on: visible copies that are still in range. */
function getEnabledListboxItems(
  listbox: Element | null,
  itemSelector: string
): HTMLElement[] {
  if (!listbox) {
    return [];
  }
  return Array.from(listbox.querySelectorAll<HTMLElement>(itemSelector)).filter(
    (el) =>
      el.getAttribute('aria-hidden') !== 'true' &&
      el.getAttribute('aria-disabled') !== 'true'
  );
}

function focusListboxItem(current: HTMLElement, target: HTMLElement): void {
  current.tabIndex = -1;
  target.tabIndex = 0;
  target.focus({ preventScroll: true });
  scrollDatalistOptionIntoView(target);
}

/** Move roving tabindex focus within a listbox. */
export function moveListboxFocus(
  current: HTMLElement,
  direction: 1 | -1,
  itemSelector: string
): void {
  const listbox = current.closest('[role="listbox"]');
  if (!listbox) {
    return;
  }
  const items = getEnabledListboxItems(listbox, itemSelector);
  const index = items.indexOf(current);
  if (index < 0 || items.length === 0) {
    return;
  }
  let nextIndex = index + direction;
  if (nextIndex < 0) {
    nextIndex = items.length - 1;
  } else if (nextIndex >= items.length) {
    nextIndex = 0;
  }
  focusListboxItem(current, items[nextIndex]);
}

function focusListboxEdge(
  current: HTMLElement,
  edge: 'start' | 'end',
  itemSelector: string
): void {
  const listbox = current.closest('[role="listbox"]');
  if (!listbox) {
    return;
  }
  const items = getEnabledListboxItems(listbox, itemSelector);
  if (items.length === 0) {
    return;
  }
  const target = edge === 'start' ? items[0] : items[items.length - 1];
  if (target === current) {
    scrollDatalistOptionIntoView(target);
    return;
  }
  focusListboxItem(current, target);
}

function getWheelA11yItems(listbox: Element | null): HTMLElement[] {
  return getEnabledListboxItems(listbox, '.time-wheel-option');
}

function valuesMatch(a: string, b: string): boolean {
  return a === b || Number(a) === Number(b);
}

/** Move the roving tabindex and focus onto a wheel's currently selected row. */
export function focusSelectedWheelOption(listbox: Element | null): void {
  if (!listbox) {
    return;
  }
  const viewport = listbox.closest<HTMLElement>('.time-wheel-viewport');
  // The selected row can be out of min/max, so fall back to the first row the
  // wheel accepts rather than leaving focus on an unusable option.
  const selected =
    listbox.querySelector<HTMLElement>(
      '.time-wheel-option.is-selected:not([aria-hidden="true"]):not([aria-disabled="true"])'
    ) ?? getWheelA11yItems(listbox)[0];
  if (!selected || !viewport) {
    return;
  }
  listbox
    .querySelectorAll<HTMLElement>('.time-wheel-option[tabindex="0"]')
    .forEach((el) => {
      if (el !== selected) {
        el.tabIndex = -1;
      }
    });
  selected.tabIndex = 0;
  selected.focus({ preventScroll: true });
  scrollWheelOptionIntoView(viewport, selected);
  const optionCount = Number(viewport.dataset.optionCount);
  if (viewport.dataset.circular === 'true' && optionCount >= 2) {
    maintainCircularScroll(viewport, optionCount, keyboardScrollLock);
  }
}

/**
 * Wheel selection re-renders through Stencil, so defer past the patch before
 * reading `.is-selected` and moving focus.
 */
export function scheduleWheelSelectionFocus(listbox: Element | null): void {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      focusSelectedWheelOption(listbox);
    });
  });
}

/** Move focus to the selected row of the previous / next wheel column. */
function focusAdjacentWheel(target: HTMLElement, direction: 1 | -1): void {
  const viewport = target.closest('.time-wheel-viewport');
  const wheels = viewport?.parentElement;
  if (!viewport || !wheels) {
    return;
  }
  const viewports = Array.from(
    wheels.querySelectorAll<HTMLElement>('.time-wheel-viewport')
  );
  const index = viewports.indexOf(viewport as HTMLElement);
  const next = viewports[index + direction];
  if (index < 0 || !next) {
    return;
  }
  target.tabIndex = -1;
  focusSelectedWheelOption(next.querySelector('[role="listbox"]'));
}

function selectAdjacentWheelValue(
  target: HTMLElement,
  direction: 1 | -1,
  currentValue: string,
  onSelect: (value: string) => void
): void {
  const listbox = target.closest('[role="listbox"]');
  const items = getWheelA11yItems(listbox);
  const values = items.map((el) => el.dataset.value ?? '');
  const currentIndex = values.findIndex((value) =>
    valuesMatch(value, currentValue)
  );
  if (currentIndex < 0 || items.length === 0) {
    return;
  }
  // getWheelA11yItems already drops out-of-range rows, so wrapping here keeps
  // arrow keys inside the values the wheel will actually accept.
  const nextIndex = (currentIndex + direction + items.length) % items.length;
  const nextValue = values[nextIndex];
  if (!nextValue || valuesMatch(nextValue, currentValue)) {
    return;
  }
  onSelect(nextValue);
  scheduleWheelSelectionFocus(listbox);
}

/**
 * Escape hatch for a focused row that sits outside min / max: jump to the
 * closest row the wheel will accept instead of refusing every arrow key.
 */
function selectNearestEnabledWheelValue(
  target: HTMLElement,
  currentValue: string,
  onSelect: (value: string) => void
): void {
  const listbox = target.closest('[role="listbox"]');
  const items = getWheelA11yItems(listbox);
  if (items.length === 0) {
    return;
  }
  const current = Number(currentValue);
  const nearest = Number.isNaN(current)
    ? items[0]
    : items.reduce((closest, item) => {
        const distance = Math.abs(Number(item.dataset.value) - current);
        const closestDistance = Math.abs(
          Number(closest.dataset.value) - current
        );
        return distance < closestDistance ? item : closest;
      }, items[0]);
  const nextValue = nearest.dataset.value;
  if (!nextValue) {
    return;
  }
  onSelect(nextValue);
  scheduleWheelSelectionFocus(listbox);
}

function selectWheelEdgeValue(
  target: HTMLElement,
  edge: 'start' | 'end',
  currentValue: string,
  onSelect: (value: string) => void
): void {
  const listbox = target.closest('[role="listbox"]');
  const items = getWheelA11yItems(listbox);
  if (items.length === 0) {
    return;
  }
  const edgeItem = edge === 'start' ? items[0] : items[items.length - 1];
  const edgeValue = edgeItem?.dataset.value;
  if (edgeValue && !valuesMatch(edgeValue, currentValue)) {
    onSelect(edgeValue);
    scheduleWheelSelectionFocus(listbox);
  }
}

/** Navigation-only handling for a row that is outside min / max. */
function handleDisabledWheelOptionKeyDown(
  event: KeyboardEvent,
  target: HTMLElement,
  value: string,
  onSelect: (value: string) => void
): void {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    focusAdjacentWheel(target, event.key === 'ArrowRight' ? 1 : -1);
    return;
  }
  if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault();
    selectWheelEdgeValue(
      target,
      event.key === 'Home' ? 'start' : 'end',
      value,
      onSelect
    );
    return;
  }
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault();
    selectNearestEnabledWheelValue(target, value, onSelect);
  }
}

export function handleWheelOptionKeyDown(
  event: KeyboardEvent,
  isA11yCopy: boolean,
  onSelect: (value: string) => void,
  value: string,
  onCommit?: () => void
): void {
  if (!isA11yCopy) {
    return;
  }
  const target = event.currentTarget as HTMLElement;
  if (target.getAttribute('aria-disabled') === 'true') {
    // A row can hold focus while out of min / max, e.g. the value predates the
    // bounds. Commit keys stay blocked, but navigation must still get out.
    handleDisabledWheelOptionKeyDown(event, target, value, onSelect);
    return;
  }
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    onSelect(value);
    // Enter confirms the picker; Space only sets the row.
    if (event.key === 'Enter') {
      onCommit?.();
    }
    return;
  }
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    selectAdjacentWheelValue(target, 1, value, onSelect);
    return;
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    selectAdjacentWheelValue(target, -1, value, onSelect);
    return;
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    focusAdjacentWheel(target, 1);
    return;
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    focusAdjacentWheel(target, -1);
    return;
  }
  if (event.key === 'Home') {
    event.preventDefault();
    selectWheelEdgeValue(target, 'start', value, onSelect);
    return;
  }
  if (event.key === 'End') {
    event.preventDefault();
    selectWheelEdgeValue(target, 'end', value, onSelect);
  }
}

export function handleDatalistOptionKeyDown(
  event: KeyboardEvent,
  onSelect: () => void
): void {
  const target = event.currentTarget as HTMLElement;
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    onSelect();
    return;
  }
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    moveListboxFocus(target, 1, '.time-datalist-option');
    return;
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    moveListboxFocus(target, -1, '.time-datalist-option');
    return;
  }
  if (event.key === 'Home') {
    event.preventDefault();
    focusListboxEdge(target, 'start', '.time-datalist-option');
    return;
  }
  if (event.key === 'End') {
    event.preventDefault();
    focusListboxEdge(target, 'end', '.time-datalist-option');
  }
}
