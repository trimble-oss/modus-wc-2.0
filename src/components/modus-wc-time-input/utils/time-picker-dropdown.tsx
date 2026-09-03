import { FunctionalComponent, h } from '@stencil/core';
import { is12hrsFormat, TimeFormat } from './time-format';
import {
  handleDatalistOptionKeyDown,
  handleWheelOptionKeyDown,
} from './time-listbox-keyboard';
import {
  buildCircularWheelOptions,
  buildDatalistOptions,
  getHourOptions,
  getPeriodOptions,
  getUnitOptions,
  resolveWheelState,
  TIME_WHEEL_LOOP_COPIES,
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
  onDatalistSelect: (value24h: string) => void;
  onOtherSelect: () => void;
}

export function resolveFocusableWheelKey(
  looped: { copy: number; key: string; value: string }[],
  selectedValue: string,
  circular: boolean
): string | undefined {
  const middleCopy = Math.floor(TIME_WHEEL_LOOP_COPIES / 2);
  const selectedA11y = looped.find(
    (opt) =>
      (!circular || opt.copy === middleCopy) &&
      (opt.value === selectedValue ||
        Number(opt.value) === Number(selectedValue))
  );
  if (selectedA11y) {
    return selectedA11y.key;
  }
  return looped.find((opt) => !circular || opt.copy === middleCopy)?.key;
}

const TimeWheel: FunctionalComponent<{
  kind: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onSelect: (value: string) => void;
  circular?: boolean;
}> = ({
  kind,
  options,
  selectedValue,
  onSelect,
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
    circular
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
          return (
            <li
              key={opt.key}
              class={{
                'time-wheel-option': true,
                'is-selected': selected,
              }}
              data-wheel-copy={opt.copy}
              data-value={opt.value}
              role="option"
              aria-hidden={isA11yCopy ? undefined : 'true'}
              aria-selected={
                isA11yCopy ? (selected ? 'true' : 'false') : undefined
              }
              tabIndex={isA11yCopy && opt.key === focusableKey ? 0 : -1}
              onMouseDown={(e: MouseEvent) => {
                e.preventDefault();
              }}
              onClick={() => onSelect(opt.value)}
              onKeyDown={(e: KeyboardEvent) =>
                handleWheelOptionKeyDown(e, isA11yCopy, onSelect, opt.value)
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
    | 'onWheelSelect'
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
        />
        <TimeWheel
          kind="minutes"
          options={minutes}
          selectedValue={String(state.minutes)}
          onSelect={(v) => props.onWheelSelect({ minutes: Number(v) })}
        />
        {props.effectiveShowSeconds && (
          <TimeWheel
            kind="seconds"
            options={seconds}
            selectedValue={String(state.seconds)}
            onSelect={(v) => props.onWheelSelect({ seconds: Number(v) })}
          />
        )}
        {is12hrsFormat(props.resolvedFormat) && (
          <TimeWheel
            kind="period"
            options={periods}
            selectedValue={state.period}
            onSelect={(v) => props.onWheelSelect({ period: v as 'AM' | 'PM' })}
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

  const focusableValue =
    options.find((opt) => opt.value === props.value)?.value ??
    options[0]?.value;

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
