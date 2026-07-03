import { addDays, compareDate } from './date-utils';

/**
 * Shared membership test for both the confirmed range and the hover
 * preview: is `date` inside the inclusive [lo, hi] run, and part of the
 * displayed month? Used as the single source of truth for "is this cell
 * highlighted" so caps/fills are derived identically for both cases.
 */
export function isInHighlightRun(
  date: Date,
  lo: Date,
  hi: Date,
  isCurrentMonth: boolean
): boolean {
  return (
    isCurrentMonth &&
    compareDate(date, lo) >= 0 &&
    compareDate(date, hi) <= 0
  );
}

export function shouldApplyRangeCapLeft(
  confirmed: boolean,
  isAnchor: boolean,
  caps: { capLeft: boolean; capRight: boolean } | null,
  isAtRangeLo: boolean
): boolean {
  return confirmed && !isAnchor && (!!caps?.capLeft || isAtRangeLo);
}

export function shouldApplyRangeCapRight(
  confirmed: boolean,
  isAnchor: boolean,
  caps: { capLeft: boolean; capRight: boolean } | null,
  isAtRangeHi: boolean
): boolean {
  return confirmed && !isAnchor && (!!caps?.capRight || isAtRangeHi);
}

export function shouldApplyHoverAffordanceLeft(
  isRangeStart: boolean,
  caps: { capLeft: boolean; capRight: boolean } | null,
  hoveringBeforeStart: boolean,
  isAtRangeLo: boolean
): boolean {
  // The affordance applies regardless of whether this cell is the anchor —
  // when hovering before the confirmed start, the start cell (anchor or not)
  // always needs the left-half dashed hint so the user can see it's extendable.
  return (
    isRangeStart && (!!caps?.capLeft || isAtRangeLo) && hoveringBeforeStart
  );
}

export function shouldApplyHoverAffordanceRight(
  isRangeEnd: boolean,
  caps: { capLeft: boolean; capRight: boolean } | null,
  hoveringAfterEnd: boolean,
  isAtRangeHi: boolean
): boolean {
  return isRangeEnd && (!!caps?.capRight || isAtRangeHi) && hoveringAfterEnd;
}

export function shouldApplyHoverCapLeft(
  preview: boolean,
  caps: { capLeft: boolean; capRight: boolean } | null
): boolean {
  return preview && !!caps?.capLeft;
}

export function shouldApplyHoverCapRight(
  preview: boolean,
  caps: { capLeft: boolean; capRight: boolean } | null
): boolean {
  return preview && !!caps?.capRight;
}

/**
 * Neighbor-connectivity model: a cell's left/right edge is capped
 * (rounded) unless its immediate neighbor in that direction is in the
 * displayed month and also a member of the same highlighted run. This
 * single rule replaces per-role flags (row-start/end, month-start/end,
 * anchor-adjacency, etc.) — connectivity is derived the same way
 * everywhere, including at the anchor cell, so runs always render as
 * continuous pills with no special-casing. The one caller-side exception
 * is the confirmed range's own boundary (see isAtRangeLo/isAtRangeHi in
 * renderCalendarBody), which stays capped even when an adjacent hover
 * preview would otherwise read as a connected neighbor here.
 */
export function computeCaps(
  date: Date,
  colIndex: number,
  currentMonth: number,
  isMember: (d: Date) => boolean
): { capLeft: boolean; capRight: boolean } {
  const prevDay = addDays(date, -1);
  const nextDay = addDays(date, 1);
  const connectsLeft =
    colIndex > 0 && prevDay.getMonth() === currentMonth && isMember(prevDay);
  const connectsRight =
    colIndex < 6 && nextDay.getMonth() === currentMonth && isMember(nextDay);
  return { capLeft: !connectsLeft, capRight: !connectsRight };
}

export function computeHoverPreviewRange(
  anchorDate: Date | null,
  hoverParsed: Date | null,
  rangeLo: Date | null,
  rangeHi: Date | null,
  isDateDisabled: (date: Date) => boolean
): { previewStart: Date | null; previewEnd: Date | null } {
  let previewStart: Date | null = null;
  let previewEnd: Date | null = null;

  const isHoveringAnchor =
    !!anchorDate &&
    !!hoverParsed &&
    compareDate(hoverParsed, anchorDate) === 0;

  if (
    !anchorDate ||
    !hoverParsed ||
    isHoveringAnchor ||
    isDateDisabled(hoverParsed)
  ) {
    return { previewStart, previewEnd };
  }

  if (compareDate(hoverParsed, anchorDate) >= 0) {
    previewStart = anchorDate;
    previewEnd = hoverParsed;
  } else {
    previewStart = hoverParsed;
    previewEnd = anchorDate;
  }

  if (rangeLo && rangeHi) {
    const hoverBeforeRange = compareDate(hoverParsed, rangeLo) < 0;
    const hoverAfterRange = compareDate(hoverParsed, rangeHi) > 0;
    const hoverInRange = !hoverBeforeRange && !hoverAfterRange;

    if (hoverInRange) {
      previewStart = null;
      previewEnd = null;
    } else if (hoverAfterRange) {
      const dayAfterEnd = addDays(rangeHi, 1);
      // istanbul ignore else (unreachable: hoverAfterRange guarantees
      // hoverParsed > rangeHi, so dayAfterEnd (rangeHi + 1) is always
      // <= hoverParsed)
      if (compareDate(dayAfterEnd, hoverParsed) <= 0) {
        previewStart = dayAfterEnd;
        previewEnd = hoverParsed;
      } else {
        previewStart = null;
        previewEnd = null;
      }
    } else if (hoverBeforeRange) {
      const dayBeforeStart = addDays(rangeLo, -1);
      // istanbul ignore else (unreachable: hoverBeforeRange guarantees
      // hoverParsed < rangeLo, so hoverParsed is always <=
      // dayBeforeStart (rangeLo - 1))
      if (compareDate(hoverParsed, dayBeforeStart) <= 0) {
        previewStart = hoverParsed;
        previewEnd = dayBeforeStart;
      } else {
        previewStart = null;
        previewEnd = null;
      }
    }
  }

  return { previewStart, previewEnd };
}

export function getRangeDayCellClasses(context: {
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isAnchor: boolean;
  confirmed: boolean;
  preview: boolean;
  caps: { capLeft: boolean; capRight: boolean } | null;
  isAtRangeLo: boolean;
  isAtRangeHi: boolean;
  hoveringBeforeStart: boolean;
  hoveringAfterEnd: boolean;
}): Record<string, boolean> {
  const {
    isRangeStart,
    isRangeEnd,
    isAnchor,
    confirmed,
    preview,
    caps,
    isAtRangeLo,
    isAtRangeHi,
    hoveringBeforeStart,
    hoveringAfterEnd,
  } = context;

  return {
    'calendar-day-cell': true,
    'range-start': isRangeStart,
    'range-end': isRangeEnd,
    'range-anchor': isAnchor,
    'range-fill': confirmed && !isAnchor,
    'range-cap-left': shouldApplyRangeCapLeft(
      confirmed,
      isAnchor,
      caps,
      isAtRangeLo
    ),
    'range-cap-right': shouldApplyRangeCapRight(
      confirmed,
      isAnchor,
      caps,
      isAtRangeHi
    ),
    'hover-affordance-left': shouldApplyHoverAffordanceLeft(
      isRangeStart,
      caps,
      hoveringBeforeStart,
      isAtRangeLo
    ),
    'hover-affordance-right': shouldApplyHoverAffordanceRight(
      isRangeEnd,
      caps,
      hoveringAfterEnd,
      isAtRangeHi
    ),
    'hover-fill': preview && !isAnchor,
    'hover-cap-left': shouldApplyHoverCapLeft(preview, caps),
    'hover-cap-right': shouldApplyHoverCapRight(preview, caps),
    'anchor-preview-connector': isAnchor && preview,
    'range-anchor-fill':
      isAnchor && confirmed && !!caps && (!caps.capLeft || !caps.capRight),
  };
}
