import {
  clampTime,
  format24h,
  formatDisplay,
  fromTotalSeconds,
  IParsedTime,
  is12hrsFormat,
  pad2Time,
  parse24h,
  TimeFormat,
  toHours12,
  toTotalSeconds,
} from './time-format';

export type TimeWheelKind =
  | 'hours'
  | 'minutes'
  | 'seconds'
  | 'milliseconds'
  | 'period';

export interface ITimeWheelOption {
  label: string;
  value: string;
}

/** How many times circular wheels repeat their options for seamless looping. */
export const TIME_WHEEL_LOOP_COPIES = 3;

/**
 * Repeat options so the wheel can scroll past the ends and wrap (infinite scroll).
 * Clones are identical in value; the middle copy is the a11y-facing set.
 */
export function buildCircularWheelOptions(
  options: ITimeWheelOption[],
  copies = TIME_WHEEL_LOOP_COPIES
): Array<ITimeWheelOption & { copy: number; key: string }> {
  if (options.length < 2 || copies < 2) {
    return options.map((opt, index) => ({
      ...opt,
      copy: 0,
      key: `0-${index}-${opt.value}`,
    }));
  }
  const result: Array<ITimeWheelOption & { copy: number; key: string }> = [];
  for (let copy = 0; copy < copies; copy++) {
    options.forEach((opt, index) => {
      result.push({
        ...opt,
        copy,
        key: `${copy}-${index}-${opt.value}`,
      });
    });
  }
  return result;
}

/** Hour options: 01–12 (12h) or 00–23 (24h). */
export function getHourOptions(
  hourFormat: TimeFormat = '24hrs'
): ITimeWheelOption[] {
  if (is12hrsFormat(hourFormat)) {
    return Array.from({ length: 12 }, (_, i) => {
      const hour12 = i + 1;
      return { label: pad2Time(hour12), value: String(hour12) };
    });
  }
  return Array.from({ length: 24 }, (_, i) => ({
    label: pad2Time(i),
    value: String(i),
  }));
}

/**
 * Minute or second options. `offset` is the anchor residue so a step of 15
 * with min 09:05 lists 05, 20, 35, 50 rather than 00, 15, 30, 45.
 */
export function getUnitOptions(step = 1, offset = 0): ITimeWheelOption[] {
  const safeStep = step > 0 ? step : 1;
  const start = ((Math.trunc(offset) % safeStep) + safeStep) % safeStep;
  const options: ITimeWheelOption[] = [];
  for (let i = start; i < 60; i += safeStep) {
    const label = pad2Time(i);
    options.push({ label, value: String(i) });
  }
  return options;
}

/**
 * Millisecond rows on the same step grid as commit. `stepSeconds` 0.5 lists
 * 000 and 500; an anchor shifts the residue (min .050 with step 0.1 → 050, 150, …).
 */
export function getMillisecondOptions(
  stepSeconds = 0.1,
  anchorMs = 0
): ITimeWheelOption[] {
  const stepMs = Math.max(1, Math.round(stepSeconds * 1000));
  const origin = ((Math.round(anchorMs) % 1000) + 1000) % 1000;
  const values: number[] = [];
  const seen = new Set<number>();
  for (let i = 0; i < 1000; i++) {
    const ms = (origin + i * stepMs) % 1000;
    if (seen.has(ms)) {
      break;
    }
    seen.add(ms);
    values.push(ms);
  }
  values.sort((a, b) => a - b);
  return values.map((value) => ({
    label: value.toString().padStart(3, '0'),
    value: String(value),
  }));
}

export function getPeriodOptions(): ITimeWheelOption[] {
  return [
    { label: 'AM', value: 'AM' },
    { label: 'PM', value: 'PM' },
  ];
}

export interface IDatalistOption {
  /** 24-hour value for storage / events */
  value: string;
  /** Label for display (12h or 24h based on format) */
  label: string;
}

/**
 * Build datalist options from explicit 24h strings, or generate by interval.
 */
export function buildDatalistOptions(params: {
  options?: string[];
  intervalMinutes?: number;
  showSeconds?: boolean;
  min?: string;
  max?: string;
  format?: TimeFormat;
}): IDatalistOption[] {
  const {
    options = [],
    intervalMinutes = 15,
    showSeconds = false,
    min,
    max,
    format = '24hrs',
  } = params;

  const toOption = (parsed: IParsedTime): IDatalistOption => ({
    value: format24h(parsed, showSeconds),
    label: formatDisplay(parsed, showSeconds, format),
  });

  if (options.length > 0) {
    return options
      .map((opt) => {
        const parsed = parse24h(opt);
        return parsed ? toOption(parsed) : null;
      })
      .filter((o): o is IDatalistOption => o !== null)
      .filter((o) => {
        const parsed = parse24h(o.value);
        if (!parsed) {
          return false;
        }
        const clamped = clampTime(parsed, min, max);
        return format24h(clamped, showSeconds) === o.value;
      });
  }

  const intervalSec = Math.max(1, intervalMinutes) * 60;
  const minParsed = min ? parse24h(min) : fromTotalSeconds(0);
  const maxParsed = max
    ? parse24h(max)
    : fromTotalSeconds(23 * 3600 + 59 * 60 + (showSeconds ? 59 : 0));

  if (!minParsed || !maxParsed) {
    return [];
  }

  const start = toTotalSeconds(minParsed);
  const end = toTotalSeconds(maxParsed);
  const result: IDatalistOption[] = [];

  for (let t = start; t <= end; t += intervalSec) {
    const parsed = fromTotalSeconds(t);
    if (!showSeconds) {
      parsed.seconds = 0;
    }
    result.push(toOption(parsed));
  }

  return result;
}

export interface IWheelState {
  /** Hour shown in the hours wheel (1–12 for 12h, 0–23 for 24h) */
  hour: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  period: 'AM' | 'PM';
}

/** Resolve wheel selection state from a 24h value (or defaults). */
export function resolveWheelState(
  value: string,
  showSeconds: boolean,
  hourFormat: TimeFormat = '24hrs'
): IWheelState {
  const parsed = parse24h(value) ?? {
    hours24: 9,
    minutes: 0,
    seconds: 0,
  };
  if (is12hrsFormat(hourFormat)) {
    const { hour12, period } = toHours12(parsed.hours24);
    return {
      hour: hour12,
      minutes: parsed.minutes,
      seconds: showSeconds ? parsed.seconds : 0,
      milliseconds: parsed.milliseconds ?? 0,
      period,
    };
  }
  return {
    hour: parsed.hours24,
    minutes: parsed.minutes,
    seconds: showSeconds ? parsed.seconds : 0,
    milliseconds: parsed.milliseconds ?? 0,
    period: parsed.hours24 < 12 ? 'AM' : 'PM',
  };
}

/**
 * Seconds a wheel row spans once the finer wheels below it are free to move.
 * An hour row covers its whole hour, so it stays selectable while any minute
 * inside it is within bounds instead of being judged on the current minute.
 */
function getWheelOptionSpan(
  kind: TimeWheelKind,
  value: string,
  state: IWheelState,
  params: {
    showSeconds: boolean;
    showMilliseconds?: boolean;
    hourFormat: TimeFormat;
  }
): { start: number; end: number } | null {
  const fraction = params.showMilliseconds ? 0.999 : 0;

  if (kind === 'period') {
    // A period covers its half of the day whatever the other wheels read.
    const start = value === 'AM' ? 0 : 12 * 3600;
    const end = start + 12 * 3600 - (params.showMilliseconds ? 0.001 : 1);
    return { start, end };
  }

  const next: IWheelState = { ...state };
  let spanSeconds = 0;

  switch (kind) {
    case 'hours':
      next.hour = Number(value);
      spanSeconds = 59 * 60 + 59 + fraction;
      break;
    case 'minutes':
      next.minutes = Number(value);
      spanSeconds = params.showSeconds ? 59 + fraction : 0;
      break;
    case 'seconds':
      next.seconds = Number(value);
      spanSeconds = params.showMilliseconds ? 0.999 : 0;
      break;
    case 'milliseconds':
      next.milliseconds = Number(value);
      break;
    default:
      break;
  }

  const parsed = parse24h(
    valueFromWheelState(
      next,
      params.showSeconds,
      params.hourFormat,
      params.showMilliseconds
    )
  );
  if (!parsed) {
    return null;
  }

  // Ignore the columns this row leaves the user free to change.
  let start = parsed.hours24 * 3600;
  if (kind !== 'hours') {
    start += parsed.minutes * 60;
  }
  if (kind === 'seconds' || kind === 'milliseconds') {
    start += parsed.seconds;
  }
  if (kind === 'milliseconds') {
    start += (parsed.milliseconds ?? 0) / 1000;
  }

  return { start, end: start + spanSeconds };
}

/** Whether a wheel row can still reach a value inside `min` / `max`. */
export function isWheelOptionInRange(
  kind: TimeWheelKind,
  value: string,
  state: IWheelState,
  params: {
    showSeconds: boolean;
    showMilliseconds?: boolean;
    hourFormat: TimeFormat;
    min?: string;
    max?: string;
  }
): boolean {
  if (!params.min && !params.max) {
    return true;
  }

  const span = getWheelOptionSpan(kind, value, state, params);
  if (!span) {
    return false;
  }

  const minParsed = params.min ? parse24h(params.min) : null;
  const maxParsed = params.max ? parse24h(params.max) : null;
  const lower = minParsed ? toTotalSeconds(minParsed) : 0;
  const upper = maxParsed
    ? toTotalSeconds(maxParsed)
    : 24 * 3600 - (params.showMilliseconds ? 0.001 : 1);

  // min later than max wraps midnight: the allowed set is the union of both ends.
  return lower <= upper
    ? span.end >= lower && span.start <= upper
    : span.end >= lower || span.start <= upper;
}

export function valueFromWheelState(
  state: IWheelState,
  showSeconds: boolean,
  hourFormat: TimeFormat = '24hrs',
  showMilliseconds = false
): string {
  let hours24: number;
  if (is12hrsFormat(hourFormat)) {
    hours24 =
      state.period === 'AM'
        ? state.hour === 12
          ? 0
          : state.hour
        : state.hour === 12
          ? 12
          : state.hour + 12;
  } else {
    hours24 = ((state.hour % 24) + 24) % 24;
  }
  const time: IParsedTime = {
    hours24,
    minutes: state.minutes,
    seconds: showSeconds ? state.seconds : 0,
    milliseconds: showMilliseconds ? state.milliseconds : 0,
  };
  return format24h(time, showSeconds, showMilliseconds);
}
