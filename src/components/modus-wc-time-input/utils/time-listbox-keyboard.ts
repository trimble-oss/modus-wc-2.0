import {
  ICircularScrollLock,
  maintainCircularScroll,
  scrollWheelOptionIntoView,
} from './time-wheel-scroll';

const keyboardScrollLock: ICircularScrollLock = { current: false };

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
  const items = Array.from(
    listbox.querySelectorAll<HTMLElement>(itemSelector)
  ).filter((el) => el.getAttribute('aria-hidden') !== 'true');
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
  current.tabIndex = -1;
  const target = items[nextIndex];
  target.tabIndex = 0;
  target.focus({ preventScroll: true });
}

function getWheelA11yItems(listbox: Element | null): HTMLElement[] {
  if (!listbox) {
    return [];
  }
  return Array.from(
    listbox.querySelectorAll<HTMLElement>('.time-wheel-option')
  ).filter((el) => el.getAttribute('aria-hidden') !== 'true');
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
  const selected = listbox.querySelector<HTMLElement>(
    '.time-wheel-option.is-selected:not([aria-hidden="true"])'
  );
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
  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) {
    nextIndex = items.length - 1;
  } else if (nextIndex >= items.length) {
    nextIndex = 0;
  }
  const nextValue = values[nextIndex];
  if (!nextValue || valuesMatch(nextValue, currentValue)) {
    return;
  }
  onSelect(nextValue);
  scheduleWheelSelectionFocus(listbox);
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
    const listbox = target.closest('[role="listbox"]');
    const first = getWheelA11yItems(listbox)[0];
    const firstValue = first?.dataset.value;
    if (firstValue && !valuesMatch(firstValue, value)) {
      onSelect(firstValue);
      scheduleWheelSelectionFocus(listbox);
    }
    return;
  }
  if (event.key === 'End') {
    event.preventDefault();
    const listbox = target.closest('[role="listbox"]');
    const items = getWheelA11yItems(listbox);
    const last = items[items.length - 1];
    const lastValue = last?.dataset.value;
    if (lastValue && !valuesMatch(lastValue, value)) {
      onSelect(lastValue);
      scheduleWheelSelectionFocus(listbox);
    }
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
  }
}
