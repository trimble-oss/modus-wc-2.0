import {
  format24h,
  formatDisplay,
  IParsedTime,
  is12hrsFormat,
  parse24h,
  TimeFormat,
  toHours12,
  toHours24,
} from './time-format';

export type SegmentKind = 'hour' | 'minute' | 'second' | 'period';

export interface ITimeSegment {
  kind: SegmentKind;
  start: number;
  end: number;
}

/** Empty native-style skeleton for the active display format. */
export function getSkeleton(
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): string {
  if (is12hrsFormat(hourFormat)) {
    return showSeconds ? '--:--:-- --' : '--:-- --';
  }
  return showSeconds ? '--:--:--' : '--:--';
}

/** Segment ranges for the fixed-width display string. */
export function getSegments(
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): ITimeSegment[] {
  if (is12hrsFormat(hourFormat)) {
    if (showSeconds) {
      return [
        { kind: 'hour', start: 0, end: 2 },
        { kind: 'minute', start: 3, end: 5 },
        { kind: 'second', start: 6, end: 8 },
        { kind: 'period', start: 9, end: 11 },
      ];
    }
    return [
      { kind: 'hour', start: 0, end: 2 },
      { kind: 'minute', start: 3, end: 5 },
      { kind: 'period', start: 6, end: 8 },
    ];
  }

  if (showSeconds) {
    return [
      { kind: 'hour', start: 0, end: 2 },
      { kind: 'minute', start: 3, end: 5 },
      { kind: 'second', start: 6, end: 8 },
    ];
  }
  return [
    { kind: 'hour', start: 0, end: 2 },
    { kind: 'minute', start: 3, end: 5 },
  ];
}

export function getSegmentText(display: string, segment: ITimeSegment): string {
  return display.slice(segment.start, segment.end);
}

export function isSegmentEmpty(segmentText: string): boolean {
  return segmentText.replace(/-/g, '') === '';
}

/** Whether every editable segment has digits (or AM/PM). */
export function isSkeletonDisplayComplete(
  display: string,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): boolean {
  const skeleton = getSkeleton(showSeconds, hourFormat);
  if (display.length !== skeleton.length) {
    return false;
  }
  return getSegments(showSeconds, hourFormat).every((seg) => {
    const text = getSegmentText(display, seg);
    if (seg.kind === 'period') {
      return text === 'AM' || text === 'PM';
    }
    return /^\d{2}$/.test(text);
  });
}

/** Parse a complete skeleton display into 24h components; null if incomplete or invalid. */
export function parseSkeletonDisplay(
  display: string,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): IParsedTime | null {
  if (!isSkeletonDisplayComplete(display, showSeconds, hourFormat)) {
    return null;
  }

  const segments = getSegments(showSeconds, hourFormat);
  const read = (kind: SegmentKind) =>
    getSegmentText(display, segments.find((s) => s.kind === kind)!);

  const hourText = read('hour');
  const minuteText = read('minute');
  const minutes = Number(minuteText);
  const seconds = showSeconds ? Number(read('second')) : 0;

  if (minutes > 59 || seconds > 59) {
    return null;
  }

  let hours24: number;
  if (is12hrsFormat(hourFormat)) {
    const hour12 = Number(hourText);
    const period = read('period').toUpperCase() as 'AM' | 'PM';
    if (hour12 < 1 || hour12 > 12) {
      return null;
    }
    hours24 = toHours24(hour12, period);
  } else {
    hours24 = Number(hourText);
    if (hours24 > 23) {
      return null;
    }
  }

  return { hours24, minutes, seconds };
}

/** Build display from a canonical 24h value or return the empty skeleton. */
export function displayFromValue(
  value: string,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): string {
  if (!value) {
    return getSkeleton(showSeconds, hourFormat);
  }
  const parsed = parse24h(value);
  if (!parsed) {
    return getSkeleton(showSeconds, hourFormat);
  }
  return formatDisplay(parsed, showSeconds, hourFormat);
}

/** Resolve segment at caret position (inclusive end for trailing edge). */
export function getSegmentAtCaret(
  caret: number,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): ITimeSegment {
  const segments = getSegments(showSeconds, hourFormat);
  const match =
    segments.find((seg) => caret >= seg.start && caret <= seg.end) ??
    segments[segments.length - 1];
  return match;
}

export function getPrevSegment(
  segment: ITimeSegment,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): ITimeSegment {
  const segments = getSegments(showSeconds, hourFormat);
  const index = segments.findIndex((s) => s.kind === segment.kind);
  return segments[Math.max(0, index - 1)];
}

export function getNextSegment(
  segment: ITimeSegment,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): ITimeSegment {
  const segments = getSegments(showSeconds, hourFormat);
  const index = segments.findIndex((s) => s.kind === segment.kind);
  return segments[Math.min(segments.length - 1, index + 1)];
}

function padSegment(n: number): string {
  return n.toString().padStart(2, '0');
}

/** Effective time for stepping — dashes become native-like defaults. */
export function getEffectiveTime(
  display: string,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): IParsedTime {
  const complete = parseSkeletonDisplay(display, showSeconds, hourFormat);
  if (complete) {
    return complete;
  }

  const segments = getSegments(showSeconds, hourFormat);
  const hourText = getSegmentText(
    display,
    segments.find((s) => s.kind === 'hour')!
  );
  const minuteText = getSegmentText(
    display,
    segments.find((s) => s.kind === 'minute')!
  );
  const secondSeg = segments.find((s) => s.kind === 'second');
  const periodSeg = segments.find((s) => s.kind === 'period');

  let hours24 = 0;
  if (is12hrsFormat(hourFormat)) {
    const hour12 = isSegmentEmpty(hourText) ? 12 : Number(hourText);
    const period =
      periodSeg && !isSegmentEmpty(getSegmentText(display, periodSeg))
        ? (getSegmentText(display, periodSeg).toUpperCase() as 'AM' | 'PM')
        : 'AM';
    hours24 = toHours24(hour12, period);
  } else {
    hours24 = isSegmentEmpty(hourText) ? 0 : Number(hourText);
  }

  const minutes = isSegmentEmpty(minuteText) ? 0 : Number(minuteText);
  const seconds =
    secondSeg && !isSegmentEmpty(getSegmentText(display, secondSeg))
      ? Number(getSegmentText(display, secondSeg))
      : 0;

  return { hours24, minutes, seconds };
}

/** Write one segment back into the display string. */
export function setSegmentText(
  display: string,
  segment: ITimeSegment,
  text: string
): string {
  return display.slice(0, segment.start) + text + display.slice(segment.end);
}

/** Apply stepped value to a segment and return updated display. */
export function applyStepToSegment(
  display: string,
  segment: ITimeSegment,
  delta: number,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs',
  minuteStep = 1,
  secondStep = 1
): string {
  const time = getEffectiveTime(display, showSeconds, hourFormat);

  if (segment.kind === 'hour') {
    if (is12hrsFormat(hourFormat)) {
      const { hour12, period } = toHours12(time.hours24);
      let next = hour12 + delta;
      if (next < 1) next = 12;
      if (next > 12) next = 1;
      time.hours24 = toHours24(next, period);
    } else {
      time.hours24 = (time.hours24 + delta + 24) % 24;
    }
  } else if (segment.kind === 'minute') {
    time.minutes = (time.minutes + delta * minuteStep + 60) % 60;
  } else if (segment.kind === 'second') {
    time.seconds = (time.seconds + delta * secondStep + 60) % 60;
  } else if (segment.kind === 'period') {
    time.hours24 = (time.hours24 + 12) % 24;
  }

  return formatDisplay(time, showSeconds, hourFormat);
}

export function setSegmentToBound(
  display: string,
  segment: ITimeSegment,
  bound: 'min' | 'max',
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): string {
  const time = getEffectiveTime(display, showSeconds, hourFormat);

  if (segment.kind === 'hour') {
    if (is12hrsFormat(hourFormat)) {
      const period = bound === 'min' ? ('AM' as const) : ('PM' as const);
      time.hours24 = toHours24(bound === 'min' ? 1 : 12, period);
    } else {
      time.hours24 = bound === 'min' ? 0 : 23;
    }
  } else if (segment.kind === 'minute' || segment.kind === 'second') {
    const value = bound === 'min' ? 0 : 59;
    if (segment.kind === 'minute') {
      time.minutes = value;
    } else {
      time.seconds = value;
    }
  } else if (segment.kind === 'period') {
    const { period } = toHours12(time.hours24);
    const next = bound === 'min' ? 'AM' : 'PM';
    if (period !== next) {
      time.hours24 = (time.hours24 + 12) % 24;
    }
  }

  return formatDisplay(time, showSeconds, hourFormat);
}

export function clearSegmentInDisplay(
  display: string,
  segment: ITimeSegment,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): string {
  const skeleton = getSkeleton(showSeconds, hourFormat);
  const replacement =
    segment.kind === 'period' ? '--' : '-'.repeat(segment.end - segment.start);
  let next = setSegmentText(display, segment, replacement);
  // Normalize period placeholder to match skeleton
  if (segment.kind === 'period') {
    next = setSegmentText(
      next,
      segment,
      skeleton.slice(segment.start, segment.end)
    );
  }
  return next;
}

/**
 * Type a digit into the active segment with native-like auto-advance.
 * Returns updated display and whether to advance to the next segment.
 */
export function typeDigitInSegment(
  display: string,
  segment: ITimeSegment,
  digit: string,
  existingBuffer: string,
  hourFormat: TimeFormat = '24hrs'
): { display: string; buffer: string; advance: boolean } {
  const current = getSegmentText(display, segment);
  const isEmpty = isSegmentEmpty(current);
  const currentDigits = current.replace(/-/g, '');
  let buffer = existingBuffer;

  if (segment.kind === 'period') {
    const upper = digit.toUpperCase();
    if (upper === 'A') {
      return {
        display: setSegmentText(display, segment, 'AM'),
        buffer: '',
        advance: true,
      };
    }
    if (upper === 'P') {
      return {
        display: setSegmentText(display, segment, 'PM'),
        buffer: '',
        advance: true,
      };
    }
    return { display, buffer, advance: false };
  }

  if (!isEmpty && buffer === '') {
    buffer = currentDigits;
  }

  const nextBuffer = (isEmpty ? '' : buffer) + digit;
  const width = segment.end - segment.start;

  if (segment.kind === 'hour' && is12hrsFormat(hourFormat)) {
    const n = Number(nextBuffer);
    if (nextBuffer.length >= 2 || n > 1) {
      const clamped = Math.min(12, Math.max(1, n || 1));
      return {
        display: setSegmentText(
          display,
          segment,
          padSegment(clamped).slice(-2)
        ),
        buffer: '',
        advance: true,
      };
    }
    return {
      display: setSegmentText(
        display,
        segment,
        `${nextBuffer}${'-'.repeat(width - nextBuffer.length)}`
      ),
      buffer: nextBuffer,
      advance: false,
    };
  }

  if (segment.kind === 'hour') {
    const n = Number(nextBuffer);
    if (nextBuffer.length >= 2 || n > 2) {
      const clamped = Math.min(23, n);
      return {
        display: setSegmentText(display, segment, padSegment(clamped)),
        buffer: '',
        advance: true,
      };
    }
    return {
      display: setSegmentText(
        display,
        segment,
        `${nextBuffer}${'-'.repeat(width - nextBuffer.length)}`
      ),
      buffer: nextBuffer,
      advance: false,
    };
  }

  // minute or second
  const n = Number(nextBuffer);
  if (nextBuffer.length >= 2 || n > 5) {
    const clamped = Math.min(59, n);
    return {
      display: setSegmentText(display, segment, padSegment(clamped)),
      buffer: '',
      advance: true,
    };
  }
  return {
    display: setSegmentText(
      display,
      segment,
      `${nextBuffer}${'-'.repeat(width - nextBuffer.length)}`
    ),
    buffer: nextBuffer,
    advance: false,
  };
}

/** Human-readable label for aria-live announcements. */
export function getAriaLiveLabel(
  display: string,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): string {
  if (!isSkeletonDisplayComplete(display, showSeconds, hourFormat)) {
    return 'Time incomplete';
  }
  const parsed = parseSkeletonDisplay(display, showSeconds, hourFormat);
  if (!parsed) {
    return 'Time incomplete';
  }
  return formatDisplay(parsed, showSeconds, hourFormat);
}

/** Convert complete display to 24h storage string. */
export function displayTo24h(
  display: string,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs'
): string | null {
  const parsed = parseSkeletonDisplay(display, showSeconds, hourFormat);
  if (!parsed) {
    return null;
  }
  return format24h(parsed, showSeconds);
}
