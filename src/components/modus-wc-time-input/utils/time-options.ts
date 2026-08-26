import {
  format24h,
  formatDisplay,
  fromTotalSeconds,
  IParsedTime,
  is12HourFormat,
  pad2Time,
  parse24h,
  TimeHourFormat,
  toHours12,
  toTotalSeconds,
} from './time-format';

export type TimeWheelKind = 'hours' | 'minutes' | 'seconds' | 'period';

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
  hourFormat: TimeHourFormat = '24h'
): ITimeWheelOption[] {
  if (is12HourFormat(hourFormat)) {
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

/** Minute or second options 00–59, optionally stepped. */
export function getUnitOptions(step = 1): ITimeWheelOption[] {
  const safeStep = step > 0 ? step : 1;
  const options: ITimeWheelOption[] = [];
  for (let i = 0; i < 60; i += safeStep) {
    const label = pad2Time(i);
    options.push({ label, value: String(i) });
  }
  return options;
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
  hourFormat?: TimeHourFormat;
}): IDatalistOption[] {
  const {
    options = [],
    intervalMinutes = 15,
    showSeconds = false,
    min,
    max,
    hourFormat = '24h',
  } = params;

  const toOption = (parsed: IParsedTime): IDatalistOption => ({
    value: format24h(parsed, showSeconds),
    label: formatDisplay(parsed, showSeconds, hourFormat),
  });

  if (options.length > 0) {
    return options
      .map((opt) => {
        const parsed = parse24h(opt);
        return parsed ? toOption(parsed) : null;
      })
      .filter((o): o is IDatalistOption => o !== null);
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
  period: 'AM' | 'PM';
}

/** Resolve wheel selection state from a 24h value (or defaults). */
export function resolveWheelState(
  value: string,
  showSeconds: boolean,
  hourFormat: TimeHourFormat = '24h'
): IWheelState {
  const parsed = parse24h(value) ?? {
    hours24: 9,
    minutes: 0,
    seconds: 0,
  };
  if (is12HourFormat(hourFormat)) {
    const { hour12, period } = toHours12(parsed.hours24);
    return {
      hour: hour12,
      minutes: parsed.minutes,
      seconds: showSeconds ? parsed.seconds : 0,
      period,
    };
  }
  return {
    hour: parsed.hours24,
    minutes: parsed.minutes,
    seconds: showSeconds ? parsed.seconds : 0,
    period: parsed.hours24 < 12 ? 'AM' : 'PM',
  };
}

/** Build 24h value string from wheel state. */
export function valueFromWheelState(
  state: IWheelState,
  showSeconds: boolean,
  hourFormat: TimeHourFormat = '24h'
): string {
  let hours24: number;
  if (is12HourFormat(hourFormat)) {
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
  };
  return format24h(time, showSeconds);
}
