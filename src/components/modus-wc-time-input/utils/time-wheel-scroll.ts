import { TIME_WHEEL_LOOP_COPIES } from './time-options';

export interface ICircularScrollLock {
  current: boolean;
}

/** Map a wheel viewport element to its kind key (`hours`, `minutes`, etc.). */
export function getWheelViewportKind(viewport: HTMLElement): string {
  return (
    Array.from(viewport.classList)
      .find(
        (c) => typeof c === 'string' && c.startsWith('time-wheel-viewport--')
      )
      ?.replace('time-wheel-viewport--', '') ?? ''
  );
}

/** Prefer the middle copy of a circular wheel when scrolling to selection. */
export function getPreferredSelectedOption(
  viewportEl: HTMLElement
): HTMLElement | null {
  const selected = Array.from(
    viewportEl.querySelectorAll<HTMLElement>('.time-wheel-option.is-selected')
  );
  if (selected.length === 0) {
    return null;
  }
  if (viewportEl.dataset.circular !== 'true') {
    return selected[0];
  }
  const middle = selected.find(
    (el) =>
      el.dataset.wheelCopy === String(Math.floor(TIME_WHEEL_LOOP_COPIES / 2))
  );
  return middle ?? selected[0];
}

export function getCircularSetHeight(
  viewportEl: HTMLElement,
  optionCount: number
): number {
  const items = viewportEl.querySelectorAll('.time-wheel-option');
  if (items.length < optionCount * 2) {
    const first = items[0] as HTMLElement | undefined;
    return optionCount * (first?.offsetHeight || 0);
  }
  const first = items[0] as HTMLElement;
  const nextCopyFirst = items[optionCount] as HTMLElement;
  return nextCopyFirst.offsetTop - first.offsetTop;
}

export function maintainCircularScroll(
  viewportEl: HTMLElement,
  optionCount: number,
  lock: ICircularScrollLock
): void {
  if (lock.current || optionCount < 2) {
    return;
  }
  const setHeight = getCircularSetHeight(viewportEl, optionCount);
  if (setHeight <= 0) {
    return;
  }
  const { scrollTop } = viewportEl;
  if (scrollTop < setHeight) {
    lock.current = true;
    viewportEl.scrollTop = scrollTop + setHeight;
    lock.current = false;
  } else if (scrollTop >= setHeight * 2) {
    lock.current = true;
    viewportEl.scrollTop = scrollTop - setHeight;
    lock.current = false;
  }
}

export function saveWheelScrollPositions(
  dropdownRef: HTMLElement | undefined,
  positions: Map<string, number>
): void {
  if (!dropdownRef) {
    return;
  }
  dropdownRef
    .querySelectorAll<HTMLElement>('.time-wheel-viewport')
    .forEach((viewport) => {
      const kind = getWheelViewportKind(viewport);
      if (kind) {
        positions.set(kind, viewport.scrollTop);
      }
    });
}

export function restoreWheelScrollPositions(
  dropdownRef: HTMLElement | undefined,
  positions: Map<string, number>,
  lock: ICircularScrollLock
): void {
  if (!dropdownRef || positions.size === 0) {
    return;
  }
  lock.current = true;
  dropdownRef
    .querySelectorAll<HTMLElement>('.time-wheel-viewport')
    .forEach((viewport) => {
      const kind = getWheelViewportKind(viewport);
      const top = kind ? positions.get(kind) : undefined;
      if (top != null) {
        viewport.scrollTop = top;
      }
    });
  lock.current = false;
}

export function scrollWheelsToSelection(
  dropdownRef: HTMLElement | undefined
): void {
  if (!dropdownRef) {
    return;
  }
  const viewports = dropdownRef.querySelectorAll('.time-wheel-viewport');
  viewports.forEach((viewport) => {
    const viewportEl = viewport as HTMLElement;
    const selected = getPreferredSelectedOption(viewportEl);
    if (!selected) {
      return;
    }
    viewportEl.scrollTop +=
      selected.getBoundingClientRect().top -
      viewportEl.getBoundingClientRect().top;
  });
}

export function bindCircularWheelListeners(
  dropdownRef: HTMLElement | undefined,
  lock: ICircularScrollLock
): Array<() => void> {
  if (!dropdownRef) {
    return [];
  }
  const cleanups: Array<() => void> = [];
  const viewports = dropdownRef.querySelectorAll(
    '.time-wheel-viewport[data-circular="true"]'
  );
  viewports.forEach((viewport) => {
    const viewportEl = viewport as HTMLElement;
    const optionCount = Number(viewportEl.dataset.optionCount);
    if (!optionCount || optionCount < 2) {
      return;
    }
    const onScroll = () =>
      maintainCircularScroll(viewportEl, optionCount, lock);
    viewportEl.addEventListener('scroll', onScroll, { passive: true });
    cleanups.push(() => viewportEl.removeEventListener('scroll', onScroll));
  });
  return cleanups;
}

export function unbindCircularWheelListeners(
  cleanups: Array<() => void>
): void {
  cleanups.forEach((cleanup) => cleanup());
}
