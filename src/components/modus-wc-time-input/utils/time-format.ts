/** Parsed time in 24-hour components. */
export interface IParsedTime {
  hours24: number;
  minutes: number;
  seconds: number;
}

/** Display / picker hour clock: 12-hour with AM/PM, or 24-hour. */
export type TimeHourFormat = '12h' | '24h';

/** Whether the hour clock is 12-hour (AM/PM). */
export function is12HourFormat(hourFormat: TimeHourFormat = '24h'): boolean {
  return hourFormat === '12h';
}
const COMPLETE_12H = /^(\d{1,2}):(\d{2})(?:\s|:)?(?:(\d{2})\s+)?(AM|PM)$/i;
const COMPLETE_12H_NO_SECONDS = /^(\d{1,2}):(\d{2})\s+(AM|PM)$/i;
const COMPLETE_12H_WITH_SECONDS = /^(\d{1,2}):(\d{2}):(\d{2})\s+(AM|PM)$/i;
const COMPLETE_24H = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/;
const COMPLETE_24H_NO_SECONDS = /^(\d{1,2}):(\d{2})$/;
const COMPLETE_24H_WITH_SECONDS = /^(\d{1,2}):(\d{2}):(\d{2})$/;

function pad2(n: number): string {
  return n.toString().padStart(2, '0');
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
  if (
    Number.isNaN(hours24) ||
    Number.isNaN(minutes) ||
    Number.isNaN(seconds) ||
    hours24 > 23 ||
    minutes > 59 ||
    seconds > 59
  ) {
    return null;
  }
  return { hours24, minutes, seconds };
}

/** Format as 24-hour `HH:mm` or `HH:mm:ss`. */
export function format24h(time: IParsedTime, showSeconds = false): string {
  const base = `${pad2(time.hours24)}:${pad2(time.minutes)}`;
  return showSeconds ? `${base}:${pad2(time.seconds)}` : base;
}

/** Format for 12-hour display: `HH:MM AM/PM` or `HH:MM:SS AM/PM`. */
export function format12hDisplay(
  time: IParsedTime,
  showSeconds = false
): string {
  const { hour12, period } = toHours12(time.hours24);
  const base = `${pad2(hour12)}:${pad2(time.minutes)}`;
  if (showSeconds) {
    return `${base}:${pad2(time.seconds)} ${period}`;
  }
  return `${base} ${period}`;
}

/** Format the visible field string for the active hour format. */
export function formatDisplay(
  time: IParsedTime,
  showSeconds = false,
  hourFormat: TimeHourFormat = '24h'
): string {
  return is12HourFormat(hourFormat)
    ? format12hDisplay(time, showSeconds)
    : format24h(time, showSeconds);
}

/** Parse a 12-hour display string into components. */
export function parse12hDisplay(
  display: string,
  showSeconds = false
): IParsedTime | null {
  if (!display?.trim()) {
    return null;
  }
  const trimmed = display.trim().replace(/\s+/g, ' ');
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
  showSeconds = false
): IParsedTime | null {
  if (!display?.trim()) {
    return null;
  }
  const trimmed = display.trim();
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
  hourFormat: TimeHourFormat = '24h'
): IParsedTime | null {
  return is12HourFormat(hourFormat)
    ? parse12hDisplay(display, showSeconds)
    : parse24hDisplay(display, showSeconds);
}

/**
 * Compare two 24h time strings (or parsed times) as minutes from midnight.
 * Returns negative if a < b, 0 if equal, positive if a > b.
 */
export function compareTimes(a: IParsedTime, b: IParsedTime): number {
  const aTotal = a.hours24 * 3600 + a.minutes * 60 + a.seconds;
  const bTotal = b.hours24 * 3600 + b.minutes * 60 + b.seconds;
  return aTotal - bTotal;
}

/** Clamp a parsed time between optional min/max 24h strings. */
export function clampTime(
  time: IParsedTime,
  min?: string,
  max?: string
): IParsedTime {
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

/** Total seconds since midnight for a parsed time. */
export function toTotalSeconds(time: IParsedTime): number {
  return time.hours24 * 3600 + time.minutes * 60 + time.seconds;
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
