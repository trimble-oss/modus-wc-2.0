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
  target.focus();
}

export function handleWheelOptionKeyDown(
  event: KeyboardEvent,
  isA11yCopy: boolean,
  onSelect: (value: string) => void,
  value: string
): void {
  if (!isA11yCopy) {
    return;
  }
  const target = event.currentTarget as HTMLElement;
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    onSelect(value);
    return;
  }
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    moveListboxFocus(target, 1, '.time-wheel-option');
    return;
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    moveListboxFocus(target, -1, '.time-wheel-option');
    return;
  }
  if (event.key === 'Home') {
    event.preventDefault();
    const listbox = target.closest('[role="listbox"]');
    const first = listbox?.querySelector<HTMLElement>(
      '.time-wheel-option:not([aria-hidden="true"])'
    );
    if (first && first !== target) {
      target.tabIndex = -1;
      first.tabIndex = 0;
      first.focus();
    }
    return;
  }
  if (event.key === 'End') {
    event.preventDefault();
    const listbox = target.closest('[role="listbox"]');
    const items = listbox?.querySelectorAll<HTMLElement>(
      '.time-wheel-option:not([aria-hidden="true"])'
    );
    const last = items?.[items.length - 1];
    if (last && last !== target) {
      target.tabIndex = -1;
      last.tabIndex = 0;
      last.focus();
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
