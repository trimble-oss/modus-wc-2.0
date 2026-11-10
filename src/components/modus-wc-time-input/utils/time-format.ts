/** Parsed time in 24-hour components. `milliseconds` is 0–999. */
export interface IParsedTime {
  hours24: number;
  minutes: number;
  seconds: number;
  milliseconds?: number;
}

/** Display / picker hour clock: 12-hour with AM/PM, or 24-hour. */
export type TimeFormat = '12hrs' | '24hrs';

/** @deprecated Use `TimeFormat`. */
export type TimeHourFormat = TimeFormat;

/** Whether the hour clock is 12-hour (AM/PM). */
export function is12hrsFormat(format: TimeFormat = '24hrs'): boolean {
  return format === '12hrs';
}

/** Subset of `Intl.ResolvedDateTimeFormatOptions` used for hour-clock detection. */
export interface ILocaleHourOptions {
  hourCycle?: 'h11' | 'h12' | 'h23' | 'h24';
  hour12?: boolean;
}

/**
 * Hour clock preferred by the user's locale (browser language settings).
 * Falls back to `24hrs` when the runtime cannot report it.
 */
export function detectLocaleTimeFormat(locale?: string | string[]): TimeFormat {
  try {
    // `hourCycle` is missing from the project's TypeScript `lib` typings.
    const options = new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
    }).resolvedOptions() as ILocaleHourOptions;
    if (options.hourCycle) {
      return options.hourCycle === 'h11' || options.hourCycle === 'h12'
        ? '12hrs'
        : '24hrs';
    }
    if (typeof options.hour12 === 'boolean') {
      return options.hour12 ? '12hrs' : '24hrs';
    }
  } catch {
    // Unsupported Intl or invalid locale: use the default below.
  }
  return '24hrs';
}

/** @deprecated Use `is12hrsFormat`. */
export function is12HourFormat(format: TimeFormat = '24hrs'): boolean {
  return is12hrsFormat(format);
}
const COMPLETE_12H = /^(\d{1,2}):(\d{2})(?:\s|:)?(?:(\d{2})\s+)?(AM|PM)$/i;
const COMPLETE_12H_NO_SECONDS = /^(\d{1,2}):(\d{2})\s+(AM|PM)$/i;
const COMPLETE_12H_WITH_SECONDS = /^(\d{1,2}):(\d{2}):(\d{2})\s+(AM|PM)$/i;
const COMPLETE_24H = /^(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?$/;
const COMPLETE_24H_NO_SECONDS = /^(\d{1,2}):(\d{2})$/;
const COMPLETE_24H_WITH_SECONDS = /^(\d{1,2}):(\d{2}):(\d{2})$/;
const COMPLETE_24H_WITH_MILLIS = /^(\d{1,2}):(\d{2}):(\d{2})\.(\d{1,3})$/;
const COMPLETE_12H_WITH_MILLIS =
  /^(\d{1,2}):(\d{2}):(\d{2})\.(\d{1,3})\s+(AM|PM)$/i;

function pad2(n: number): string {
  return n.toString().padStart(2, '0');
}

function pad3(n: number): string {
  return n.toString().padStart(3, '0');
}

/** Fractional seconds (`5` → 500ms, `05` → 50ms). */
function parseMillisFraction(text: string | undefined): number {
  if (!text) {
    return 0;
  }
  return Number(text.padEnd(3, '0'));
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

/** Convert 12-hour hour + period to 24-hour hour (0–23). */
export function toHours24(hour12: number, period: 'AM' | 'PM'): number {
  const h = clamp(hour12, 1, 12);
  if (period === 'AM') {
    return h === 12 ? 0 : h;
  }
  return h === 12 ? 12 : h + 12;
}

/** Convert 24-hour hour to 12-hour hour + period. */
export function toHours12(hours24: number): {
  hour12: number;
  period: 'AM' | 'PM';
} {
  const h = ((hours24 % 24) + 24) % 24;
  const period: 'AM' | 'PM' = h < 12 ? 'AM' : 'PM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return { hour12, period };
}

/** Parse a 24-hour `HH:mm` or `HH:mm:ss` value. */
export function parse24h(value: string): IParsedTime | null {
  if (!value?.trim()) {
    return null;
  }
  const match = COMPLETE_24H.exec(value.trim());
  if (!match) {
    return null;
  }
  const hours24 = Number(match[1]);
  const minutes = Number(match[2]);
  const seconds = match[3] !== undefined ? Number(match[3]) : 0;
  const milliseconds =
    match[4] !== undefined ? parseMillisFraction(match[4]) : undefined;
  if (
    Number.isNaN(hours24) ||
    Number.isNaN(minutes) ||
    Number.isNaN(seconds) ||
    (milliseconds !== undefined &&
      (Number.isNaN(milliseconds) || milliseconds > 999)) ||
    hours24 > 23 ||
    minutes > 59 ||
    seconds > 59
  ) {
    return null;
  }
  return milliseconds === undefined
    ? { hours24, minutes, seconds }
    : { hours24, minutes, seconds, milliseconds };
}

/** Format as 24-hour `HH:mm`, `HH:mm:ss`, or `HH:mm:ss.SSS`. */
export function format24h(
  time: IParsedTime,
  showSeconds = false,
  showMilliseconds = false
): string {
  const base = `${pad2(time.hours24)}:${pad2(time.minutes)}`;
  if (showMilliseconds) {
    return `${base}:${pad2(time.seconds)}.${pad3(time.milliseconds ?? 0)}`;
  }
  return showSeconds ? `${base}:${pad2(time.seconds)}` : base;
}

/** Format for 12-hour display: `HH:MM AM/PM` or `HH:MM:SS AM/PM`. */
export function format12hDisplay(
  time: IParsedTime,
  showSeconds = false,
  showMilliseconds = false
): string {
  const { hour12, period } = toHours12(time.hours24);
  const base = `${pad2(hour12)}:${pad2(time.minutes)}`;
  if (showMilliseconds) {
    return `${base}:${pad2(time.seconds)}.${pad3(time.milliseconds ?? 0)} ${period}`;
  }
  if (showSeconds) {
    return `${base}:${pad2(time.seconds)} ${period}`;
  }
  return `${base} ${period}`;
}

/** Format the visible field string for the active hour format. */
export function formatDisplay(
  time: IParsedTime,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs',
  showMilliseconds = false
): string {
  return is12hrsFormat(hourFormat)
    ? format12hDisplay(time, showSeconds, showMilliseconds)
    : format24h(time, showSeconds, showMilliseconds);
}

/** Parse a 12-hour display string into components. */
export function parse12hDisplay(
  display: string,
  showSeconds = false,
  showMilliseconds = false
): IParsedTime | null {
  if (!display?.trim()) {
    return null;
  }
  const trimmed = display.trim().replace(/\s+/g, ' ');
  if (showMilliseconds) {
    const withMs = COMPLETE_12H_WITH_MILLIS.exec(trimmed);
    if (!withMs) {
      return null;
    }
    const hour12 = Number(withMs[1]);
    const minutes = Number(withMs[2]);
    const seconds = Number(withMs[3]);
    const milliseconds = parseMillisFraction(withMs[4]);
    const period = withMs[5].toUpperCase() as 'AM' | 'PM';
    if (
      hour12 < 1 ||
      hour12 > 12 ||
      minutes > 59 ||
      seconds > 59 ||
      milliseconds > 999
    ) {
      return null;
    }
    return {
      hours24: toHours24(hour12, period),
      minutes,
      seconds,
      milliseconds,
    };
  }
  if (showSeconds) {
    const withSec = COMPLETE_12H_WITH_SECONDS.exec(trimmed);
    if (withSec) {
      const hour12 = Number(withSec[1]);
      const minutes = Number(withSec[2]);
      const seconds = Number(withSec[3]);
      const period = withSec[4].toUpperCase() as 'AM' | 'PM';
      if (hour12 < 1 || hour12 > 12 || minutes > 59 || seconds > 59) {
        return null;
      }
      return {
        hours24: toHours24(hour12, period),
        minutes,
        seconds,
      };
    }
  }

  const noSec = COMPLETE_12H_NO_SECONDS.exec(trimmed);
  if (noSec) {
    const hour12 = Number(noSec[1]);
    const minutes = Number(noSec[2]);
    const period = noSec[3].toUpperCase() as 'AM' | 'PM';
    if (hour12 < 1 || hour12 > 12 || minutes > 59) {
      return null;
    }
    return {
      hours24: toHours24(hour12, period),
      minutes,
      seconds: 0,
    };
  }

  const flex = COMPLETE_12H.exec(trimmed);
  if (!flex) {
    return null;
  }
  const hour12 = Number(flex[1]);
  const minutes = Number(flex[2]);
  const seconds = flex[3] !== undefined ? Number(flex[3]) : 0;
  const period = flex[4].toUpperCase() as 'AM' | 'PM';
  if (hour12 < 1 || hour12 > 12 || minutes > 59 || seconds > 59) {
    return null;
  }
  return {
    hours24: toHours24(hour12, period),
    minutes,
    seconds: showSeconds ? seconds : 0,
  };
}

/** Parse a complete 24-hour display string (same shape as stored value). */
export function parse24hDisplay(
  display: string,
  showSeconds = false,
  showMilliseconds = false
): IParsedTime | null {
  if (!display?.trim()) {
    return null;
  }
  const trimmed = display.trim();
  if (showMilliseconds) {
    if (!COMPLETE_24H_WITH_MILLIS.test(trimmed)) {
      return null;
    }
    return parse24h(trimmed);
  }
  if (showSeconds) {
    const withSec = COMPLETE_24H_WITH_SECONDS.exec(trimmed);
    if (!withSec) {
      return null;
    }
    return parse24h(trimmed);
  }
  const noSec = COMPLETE_24H_NO_SECONDS.exec(trimmed);
  if (!noSec) {
    return null;
  }
  return parse24h(trimmed);
}

/** Parse the visible field for the active hour format. */
export function parseDisplay(
  display: string,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs',
  showMilliseconds = false
): IParsedTime | null {
  return is12hrsFormat(hourFormat)
    ? parse12hDisplay(display, showSeconds, showMilliseconds)
    : parse24hDisplay(display, showSeconds, showMilliseconds);
}

/**
 * Parse a value from browser autofill, paste, or other external entry.
 * Tries the active format first, then common alternate shapes (e.g. 12h with seconds).
 */
export function parseExternalTimeValue(
  raw: string,
  showSeconds = false,
  hourFormat: TimeFormat = '24hrs',
  showMilliseconds = false
): IParsedTime | null {
  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }

  const alternateFormat: TimeFormat =
    hourFormat === '12hrs' ? '24hrs' : '12hrs';
  const attempts = [
    parse24h(trimmed),
    parseDisplay(trimmed, showSeconds, hourFormat),
    parseDisplay(trimmed, showSeconds, alternateFormat),
    parseDisplay(trimmed, true, '12hrs', showMilliseconds),
    parseDisplay(trimmed, true, '24hrs', showMilliseconds),
  ];

  for (const parsed of attempts) {
    if (parsed) {
      if (!showSeconds && !showMilliseconds) {
        return { ...parsed, seconds: 0 };
      }
      return parsed;
    }
  }

  return null;
}

/**
 * Compare two 24h time strings (or parsed times) as minutes from midnight.
 * Returns negative if a < b, 0 if equal, positive if a > b.
 */
export function compareTimes(a: IParsedTime, b: IParsedTime): number {
  return toTotalMillis(a) - toTotalMillis(b);
}

const DAY_MILLIS = 24 * 60 * 60 * 1000;

/**
 * Whether `time` sits in `[min, max]`. When `min` is later than `max`, the
 * range wraps midnight (HTML time inputs): `22:00`–`06:00` allows `23:00`
 * and `01:00`, and excludes the daytime gap.
 */
export function isInTimeRange(
  time: IParsedTime,
  min?: string,
  max?: string
): boolean {
  const bounds = timeRangeMillis(min, max);
  if (!bounds) {
    return true;
  }
  const t = toTotalMillis(time);
  if (bounds.wraps) {
    return t >= bounds.lower || t <= bounds.upper;
  }
  return t >= bounds.lower && t <= bounds.upper;
}

/** Clamp a parsed time between optional min/max 24h strings. */
export function clampTime(
  time: IParsedTime,
  min?: string,
  max?: string
): IParsedTime {
  if (isInTimeRange(time, min, max)) {
    return { ...time };
  }
  const bounds = timeRangeMillis(min, max);
  if (!bounds) {
    return { ...time };
  }
  const t = toTotalMillis(time);
  if (bounds.wraps && t > bounds.upper && t < bounds.lower) {
    const minParsed = parse24h(min ?? '');
    const maxParsed = parse24h(max ?? '');
    if (!minParsed || !maxParsed) {
      return { ...time };
    }
    return t - bounds.upper <= bounds.lower - t
      ? { ...maxParsed }
      : { ...minParsed };
  }
  let result = { ...time };
  const minParsed = min ? parse24h(min) : null;
  const maxParsed = max ? parse24h(max) : null;
  if (minParsed && compareTimes(result, minParsed) < 0) {
    result = { ...minParsed };
  }
  if (maxParsed && compareTimes(result, maxParsed) > 0) {
    result = { ...maxParsed };
  }
  return result;
}

function timeRangeMillis(
  min?: string,
  max?: string
): { lower: number; upper: number; wraps: boolean } | null {
  const minParsed = min ? parse24h(min) : null;
  const maxParsed = max ? parse24h(max) : null;
  if (!minParsed && !maxParsed) {
    return null;
  }
  const lower = minParsed ? toTotalMillis(minParsed) : 0;
  const upper = maxParsed ? toTotalMillis(maxParsed) : DAY_MILLIS - 1;
  return { lower, upper, wraps: lower > upper };
}

/** Total seconds since midnight for a parsed time. */
export function toTotalSeconds(time: IParsedTime): number {
  return (
    time.hours24 * 3600 +
    time.minutes * 60 +
    time.seconds +
    (time.milliseconds ?? 0) / 1000
  );
}

/** Total milliseconds since midnight. */
export function toTotalMillis(time: IParsedTime): number {
  return (
    (time.hours24 * 3600 + time.minutes * 60 + time.seconds) * 1000 +
    (time.milliseconds ?? 0)
  );
}

/** Build a parsed time from milliseconds since midnight, wrapping at 24h. */
export function fromTotalMillis(total: number): IParsedTime {
  const normalized = ((total % DAY_MILLIS) + DAY_MILLIS) % DAY_MILLIS;
  const milliseconds = normalized % 1000;
  const totalSeconds = Math.floor(normalized / 1000);
  const hours24 = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours24, minutes, seconds, milliseconds };
}

/**
 * HTML time step: `(value - anchor) mod step === 0`, with `step` in seconds.
 * Anchor is `min`, or midnight when `min` is omitted.
 */
export function isStepMismatch(
  time: IParsedTime,
  stepSeconds: number,
  anchor?: IParsedTime | null
): boolean {
  const stepMs = Math.round(stepSeconds * 1000);
  if (!Number.isFinite(stepMs) || stepMs <= 0) {
    return false;
  }
  const delta = toTotalMillis(time) - (anchor ? toTotalMillis(anchor) : 0);
  return ((delta % stepMs) + stepMs) % stepMs !== 0;
}

/**
 * Nearest step-grid instant that stays inside the same day and inside min/max.
 * Rounding past midnight is clamped to the last grid point of the day so a
 * value such as 23:59:59 with step 7 does not wrap to 00:00:01.
 */
export function snapTimeToGrid(
  time: IParsedTime,
  stepSeconds: number,
  min?: string,
  max?: string
): IParsedTime {
  const stepMs = Math.max(1, Math.round(stepSeconds * 1000));
  const anchor = min ? parse24h(min) : null;
  if (
    !isStepMismatch(time, stepSeconds, anchor) &&
    isInTimeRange(time, min, max)
  ) {
    return time;
  }
  const anchorMs = anchor ? toTotalMillis(anchor) : 0;
  const first = Math.ceil(-anchorMs / stepMs);
  const last = Math.floor((DAY_MILLIS - 1 - anchorMs) / stepMs);
  const target = Math.round((toTotalMillis(time) - anchorMs) / stepMs);
  let index = Math.min(last, Math.max(first, target));
  let snappedMs = anchorMs + index * stepMs;
  const bounds = timeRangeMillis(min, max);

  const inRange = (ms: number) => isInTimeRange(fromTotalMillis(ms), min, max);

  if (bounds && !inRange(snappedMs)) {
    if (bounds.wraps && snappedMs > bounds.upper && snappedMs < bounds.lower) {
      snappedMs =
        snappedMs - bounds.upper <= bounds.lower - snappedMs
          ? bounds.upper
          : bounds.lower;
    } else {
      if (snappedMs < bounds.lower) {
        snappedMs = bounds.lower;
      }
      if (snappedMs > bounds.upper) {
        snappedMs = bounds.upper;
      }
    }
    index = Math.min(
      last,
      Math.max(first, Math.round((snappedMs - anchorMs) / stepMs))
    );
    snappedMs = anchorMs + index * stepMs;
    if (!inRange(snappedMs) && snappedMs > bounds.upper) {
      snappedMs -= stepMs;
    } else if (!inRange(snappedMs) && snappedMs < bounds.lower) {
      snappedMs += stepMs;
    }
  }
  return fromTotalMillis(snappedMs);
}

/**
 * Next or previous instant on the step grid. `delta` is +1 or -1.
 * Carries across minutes and hours and wraps at midnight.
 */
export function stepTimeOnGrid(
  time: IParsedTime,
  delta: number,
  stepSeconds: number,
  anchor?: IParsedTime | null
): IParsedTime {
  const stepMs = Math.max(1, Math.round(stepSeconds * 1000));
  const anchorMs = anchor ? toTotalMillis(anchor) : 0;
  const offset = toTotalMillis(time) - anchorMs;
  const nextOffset =
    delta > 0
      ? (Math.floor(offset / stepMs) + 1) * stepMs
      : (Math.ceil(offset / stepMs) - 1) * stepMs;
  return fromTotalMillis(anchorMs + nextOffset);
}

/** Build parsed time from total seconds since midnight. */
export function fromTotalSeconds(total: number): IParsedTime {
  const normalized = ((total % 86400) + 86400) % 86400;
  const hours24 = Math.floor(normalized / 3600);
  const minutes = Math.floor((normalized % 3600) / 60);
  const seconds = normalized % 60;
  return { hours24, minutes, seconds };
}

export function pad2Time(n: number): string {
  return pad2(n);
}
