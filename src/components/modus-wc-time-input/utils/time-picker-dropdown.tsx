import { FunctionalComponent, h } from '@stencil/core';
import {
  is12hrsFormat,
  parse24h,
  TimeFormat,
  toTotalSeconds,
} from './time-format';
import {
  handleDatalistOptionKeyDown,
  handleWheelOptionKeyDown,
  scheduleWheelSelectionFocus,
} from './time-listbox-keyboard';
import {
  buildCircularWheelOptions,
  buildDatalistOptions,
  getHourOptions,
  getPeriodOptions,
  getUnitOptions,
  IDatalistOption,
  isWheelOptionInRange,
  resolveWheelState,
  TIME_WHEEL_LOOP_COPIES,
  TimeWheelKind,
} from './time-options';

export interface IWheelSelectionPartial {
  hour?: number;
  minutes?: number;
  seconds?: number;
  period?: 'AM' | 'PM';
}

export interface ITimePickerDropdownProps {
  dropdownId: string;
  setDropdownRef: (el: HTMLElement | undefined) => void;
  value: string;
  effectiveShowSeconds: boolean;
  resolvedFormat: TimeFormat;
  minuteStep: number;
  secondStep: number;
  datalistOptions: string[];
  intervalMinutes?: number;
  min?: string;
  max?: string;
  onWheelSelect: (partial: IWheelSelectionPartial) => void;
  onWheelCommit: () => void;
  onDatalistSelect: (value24h: string) => void;
  onOtherSelect: () => void;
}

/**
 * Row the datalist opens on. An exact match wins; a value off the interval
 * grid (typed, or left over from another `interval-minutes`) falls back to the
 * closest option so the list still opens next to the field instead of at 00:00.
 */
export function resolveFocusableDatalistValue(
  options: IDatalistOption[],
  value: string
): string | undefined {
  if (options.length === 0) {
    return undefined;
  }
  const exact = options.find((opt) => opt.value === value);
  if (exact) {
    return exact.value;
  }
  const parsed = parse24h(value);
  if (!parsed) {
    return options[0].value;
  }
  const target = toTotalSeconds(parsed);
  return options.reduce((closest, opt) => {
    const optParsed = parse24h(opt.value);
    const closestParsed = parse24h(closest);
    if (!optParsed || !closestParsed) {
      return closest;
    }
    return Math.abs(toTotalSeconds(optParsed) - target) <
      Math.abs(toTotalSeconds(closestParsed) - target)
      ? opt.value
      : closest;
  }, options[0].value);
}

export function resolveFocusableWheelKey(
  looped: { copy: number; key: string; value: string }[],
  selectedValue: string,
  circular: boolean,
  isOptionDisabled?: (value: string) => boolean
): string | undefined {
  const middleCopy = Math.floor(TIME_WHEEL_LOOP_COPIES / 2);
  const isA11y = (opt: { copy: number }) =>
    !circular || opt.copy === middleCopy;
  const enabled = (opt: { value: string }) =>
    !isOptionDisabled || !isOptionDisabled(opt.value);

  const selectedA11y = looped.find(
    (opt) =>
      isA11y(opt) &&
      enabled(opt) &&
      (opt.value === selectedValue ||
        Number(opt.value) === Number(selectedValue))
  );
  if (selectedA11y) {
    return selectedA11y.key;
  }
  return looped.find((opt) => isA11y(opt) && enabled(opt))?.key;
}

const TimeWheel: FunctionalComponent<{
  kind: TimeWheelKind;
  options: { label: string; value: string }[];
  selectedValue: string;
  onSelect: (value: string) => void;
  onCommit: () => void;
  isOptionDisabled?: (value: string) => boolean;
  circular?: boolean;
}> = ({
  kind,
  options,
  selectedValue,
  onSelect,
  onCommit,
  isOptionDisabled,
  circular = options.length >= 2,
}) => {
  const looped = circular
    ? buildCircularWheelOptions(options)
    : options.map((opt, index) => ({
        ...opt,
        copy: 0,
        key: `0-${index}-${opt.value}`,
      }));
  const focusableKey = resolveFocusableWheelKey(
    looped,
    selectedValue,
    circular,
    isOptionDisabled
  );
  const middleCopy = Math.floor(TIME_WHEEL_LOOP_COPIES / 2);

  return (
    <div
      class={{
        'time-wheel-viewport': true,
        [`time-wheel-viewport--${kind}`]: true,
        'time-wheel-viewport--compact': !circular,
      }}
      data-circular={circular ? 'true' : 'false'}
      data-option-count={options.length}
    >
      <ul
        class={`time-wheel time-wheel--${kind}`}
        role="listbox"
        aria-label={kind}
      >
        {looped.map((opt) => {
          const selected =
            opt.value === selectedValue ||
            Number(opt.value) === Number(selectedValue);
          const isA11yCopy = !circular || opt.copy === middleCopy;
          const disabled = isOptionDisabled?.(opt.value) ?? false;
          return (
            <li
              key={opt.key}
              class={{
                'time-wheel-option': true,
                'is-selected': selected,
                'is-disabled': disabled,
              }}
              data-wheel-copy={opt.copy}
              data-value={opt.value}
              role="option"
              aria-disabled={disabled ? 'true' : undefined}
              aria-hidden={isA11yCopy ? undefined : 'true'}
              aria-selected={
                isA11yCopy ? (selected ? 'true' : 'false') : undefined
              }
              tabIndex={
                isA11yCopy && !disabled && opt.key === focusableKey ? 0 : -1
              }
              onMouseDown={(e: MouseEvent) => {
                e.preventDefault();
              }}
              onClick={(e: MouseEvent) => {
                if (disabled) {
                  return;
                }
                onSelect(opt.value);
                // Keep the roving tabindex on the row the pointer just picked.
                scheduleWheelSelectionFocus(
                  (e.currentTarget as HTMLElement).closest('[role="listbox"]')
                );
              }}
              onKeyDown={(e: KeyboardEvent) =>
                handleWheelOptionKeyDown(
                  e,
                  isA11yCopy,
                  onSelect,
                  opt.value,
                  onCommit
                )
              }
            >
              {opt.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const TimePickerDropdown: FunctionalComponent<
  Pick<
    ITimePickerDropdownProps,
    | 'dropdownId'
    | 'setDropdownRef'
    | 'value'
    | 'effectiveShowSeconds'
    | 'resolvedFormat'
    | 'minuteStep'
    | 'secondStep'
    | 'min'
    | 'max'
    | 'onWheelSelect'
    | 'onWheelCommit'
  >
> = (props) => {
  const state = resolveWheelState(
    props.value,
    props.effectiveShowSeconds,
    props.resolvedFormat
  );
  const hours = getHourOptions(props.resolvedFormat);
  const minutes = getUnitOptions(props.minuteStep);
  const seconds = props.effectiveShowSeconds
    ? getUnitOptions(props.secondStep)
    : [];
  const periods = getPeriodOptions();

  const wheelRange = {
    showSeconds: props.effectiveShowSeconds,
    hourFormat: props.resolvedFormat,
    min: props.min,
    max: props.max,
  };
  const isOptionDisabled = (kind: TimeWheelKind, value: string) =>
    !isWheelOptionInRange(kind, value, state, wheelRange);

  return (
    <div
      class="time-dropdown time-dropdown--picker"
      id={props.dropdownId}
      ref={props.setDropdownRef}
      role="dialog"
      aria-label="Time picker"
    >
      <div class="time-wheels">
        <TimeWheel
          kind="hours"
          options={hours}
          selectedValue={String(state.hour)}
          onSelect={(v) => props.onWheelSelect({ hour: Number(v) })}
          onCommit={props.onWheelCommit}
          isOptionDisabled={(v) => isOptionDisabled('hours', v)}
        />
        <TimeWheel
          kind="minutes"
          options={minutes}
          selectedValue={String(state.minutes)}
          onSelect={(v) => props.onWheelSelect({ minutes: Number(v) })}
          onCommit={props.onWheelCommit}
          isOptionDisabled={(v) => isOptionDisabled('minutes', v)}
        />
        {props.effectiveShowSeconds && (
          <TimeWheel
            kind="seconds"
            options={seconds}
            selectedValue={String(state.seconds)}
            onSelect={(v) => props.onWheelSelect({ seconds: Number(v) })}
            onCommit={props.onWheelCommit}
            isOptionDisabled={(v) => isOptionDisabled('seconds', v)}
          />
        )}
        {is12hrsFormat(props.resolvedFormat) && (
          <TimeWheel
            kind="period"
            options={periods}
            selectedValue={state.period}
            onSelect={(v) => props.onWheelSelect({ period: v as 'AM' | 'PM' })}
            onCommit={props.onWheelCommit}
            isOptionDisabled={(v) => isOptionDisabled('period', v)}
            circular={false}
          />
        )}
      </div>
    </div>
  );
};

export const TimeDatalistDropdown: FunctionalComponent<
  Pick<
    ITimePickerDropdownProps,
    | 'dropdownId'
    | 'setDropdownRef'
    | 'value'
    | 'effectiveShowSeconds'
    | 'resolvedFormat'
    | 'datalistOptions'
    | 'intervalMinutes'
    | 'min'
    | 'max'
    | 'onDatalistSelect'
    | 'onOtherSelect'
  >
> = (props) => {
  const options = buildDatalistOptions({
    options: props.datalistOptions,
    intervalMinutes: props.intervalMinutes,
    showSeconds: props.effectiveShowSeconds,
    min: props.min,
    max: props.max,
    format: props.resolvedFormat,
  });

  const focusableValue = resolveFocusableDatalistValue(options, props.value);

  return (
    <div
      class="time-dropdown time-dropdown--datalist"
      id={props.dropdownId}
      ref={props.setDropdownRef}
      role="listbox"
      aria-label="Time options"
    >
      <ul class="time-datalist">
        {options.map((opt) => {
          const selected = opt.value === props.value;
          return (
            <li
              class={{
                'time-datalist-option': true,
                'is-selected': selected,
              }}
              role="option"
              aria-selected={selected ? 'true' : 'false'}
              tabIndex={opt.value === focusableValue ? 0 : -1}
              onClick={() => props.onDatalistSelect(opt.value)}
              onKeyDown={(e: KeyboardEvent) =>
                handleDatalistOptionKeyDown(e, () =>
                  props.onDatalistSelect(opt.value)
                )
              }
            >
              {opt.label}
            </li>
          );
        })}
        <li class="time-datalist-divider" role="separator" />
        <li
          class="time-datalist-option time-datalist-option--other"
          role="option"
          aria-selected="false"
          tabIndex={focusableValue == null ? 0 : -1}
          onClick={props.onOtherSelect}
          onKeyDown={(e: KeyboardEvent) =>
            handleDatalistOptionKeyDown(e, props.onOtherSelect)
          }
        >
          Other
        </li>
      </ul>
    </div>
  );
};
