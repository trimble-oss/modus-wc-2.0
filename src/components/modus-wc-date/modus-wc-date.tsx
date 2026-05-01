import { createPopper, Instance as PopperInstance } from '@popperjs/core';
import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-date.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { IInputFeedbackProp, ModusSize, WeekStartDay } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import DatePickerCalendar from './utils/calendar';

/** Payload for `rangeChange` when `variant` is `range` (HTML attribute `type="range"`). */
export interface IRangeChangeDetail {
  start: string;
  end: string;
}

/**
 * Per-picker metadata for range mode. All fields are optional.
 * Pass this as a JS object; avoid serialising large objects as HTML attributes.
 */
export interface IRangeConfig {
  /** `id` on the start input (`type="range"`). Defaults to the top-level `inputId`. */
  startInputId?: string;
  /** `id` on the end input (`type="range"`). */
  endInputId?: string;
  /** `name` on the start input. Defaults to the top-level `name`. */
  startName?: string;
  /** `name` on the end input. */
  endName?: string;
  /** Overrides the start input `aria-label`. Falls back to host `aria-label + ", start date"`. */
  startAriaLabel?: string;
  /** Overrides the end input `aria-label`. Falls back to host `aria-label + ", end date"`. */
  endAriaLabel?: string;
}

/** Matches Modus 2.0 DateInput: single picker vs start/end range. */
export type DateInputType = 'single' | 'range';

/** Which logical picker is active: single date, range start, or range end. */
type PickerSide = 'single' | 'start' | 'end';

const MONTH_SHORT_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const WEEK_START_DAY_MAP: Record<WeekStartDay, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

/**
 * A customizable date picker component used to create date inputs.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-date',
  styleUrl: 'modus-wc-date.scss',
  shadow: false,
})
export class ModusWcDate {
  private inheritedAttributes: Attributes = {};
  private popperInstance: PopperInstance | null = null;
  private endPopperInstance: PopperInstance | null = null;
  private inputRef?: HTMLInputElement;
  private calendarRef?: HTMLElement;
  private endInputRef?: HTMLInputElement;
  private endCalendarRef?: HTMLElement;
  /** Stable id for range mode legend (unique per instance). */
  private rangeLegendId = '';
  private locale: string = 'en-US';
  private minDate?: Date;
  private maxDate?: Date;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Show the calendar dropdown */
  @State() private showCalendar = false;

  /** Calendar state object */
  @State() private calendar: DatePickerCalendar = new DatePickerCalendar();

  /** Currently focused date index in calendar */
  @State() private focusedDateIndex: number = -1;

  /** Show the end picker's calendar (range mode). */
  @State() private showEndCalendar = false;

  /** Calendar state for the end picker (range mode). */
  @State() private endCalendar: DatePickerCalendar = new DatePickerCalendar();

  /** Focused date index in the end picker's calendar. */
  @State() private endFocusedDateIndex: number = -1;

  /** Tracks whether the component currently has focus */
  private hasFocus = false;

  /** Tracks whether the end input currently has focus (range mode). */
  private endHasFocus = false;

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the input. */
  @Prop() customClass?: string = '';

  /** Whether the form control is disabled. */
  @Prop() disabled?: boolean = false;

  /** Feedback to render below the input. */
  @Prop() feedback?: IInputFeedbackProp;

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /** Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). */
  @Prop() inputTabIndex?: number;

  /** The text to display within the label. */
  @Prop() label?: string;

  /** Maximum date value. */
  @Prop() max?: string;

  /** Minimum date value. */
  @Prop() min?: string;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string;

  /** Whether the value is editable. */
  @Prop() readOnly?: boolean = false;

  /** A value is required or must be checked for the form to be submittable. */
  @Prop() required?: boolean = false;

  /** The size of the input. */
  @Prop() size?: ModusSize = 'md';

  /** The date format for display and input. */
  @Prop() format?:
    | 'yyyy-mm-dd'
    | 'dd-mm-yyyy'
    | 'mm-dd-yyyy'
    | 'yyyy/mm/dd'
    | 'dd/mm/yyyy'
    | 'mm/dd/yyyy'
    | 'MMM DD, YYYY';

  /** The value of the control. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** The first day of the week for the calendar display */
  @Prop() weekStartDay?: WeekStartDay = 'sunday';

  /** Displays ISO 8601 week numbers in the calendar. Week numbers are calculated with Monday as the first day of the week. */
  @Prop() showWeekNumbers?: boolean = false;

  /** `single` (default): one date (`value`). `range`: start (`start`) and end (`end`) pickers with cross bounds. Reflected as HTML attribute `type`. */
  @Prop({ attribute: 'type' }) variant?: DateInputType = 'single';

  /** When `variant` is `range` (`type="range"`), the start date (ISO 8601 `YYYY-MM-DD`). */
  @Prop({ mutable: true }) start: string = '';

  /** When `variant` is `range` (`type="range"`), the end date (ISO 8601 `YYYY-MM-DD`). */
  @Prop({ mutable: true }) end: string = '';

  /**
   * Per-picker metadata for range mode: start/end `inputId`, `name`, and `aria-label` overrides.
   * Only used when `variant` is `range` (`type="range"`).
   */
  @Prop() rangeConfig?: IRangeConfig;

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. `target.value` is always ISO 8601 (YYYY-MM-DD), or empty string when incomplete or invalid. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  /** Event emitted when the calendar month selection changes. */
  @StencilEvent() calendarMonthChange!: EventEmitter<number>;

  /** Event emitted when the calendar year selection changes. */
  @StencilEvent() calendarYearChange!: EventEmitter<number>;

  /** When `type` is `range`, emitted after either picker updates (same timing as `inputChange` / calendar blur on children). */
  @StencilEvent() rangeChange!: EventEmitter<IRangeChangeDetail>;

  /** Re-displays the stored ISO value in the new format when the `format` prop changes. */
  @Watch('format')
  handleFormatChange() {
    const sides: PickerSide[] =
      this.variant === 'range' ? ['start', 'end'] : ['single'];
    for (const side of sides) {
      const inputRef = side === 'end' ? this.endInputRef : this.inputRef;
      const iso =
        side === 'end' ? this.end : side === 'start' ? this.start : this.value;
      if (iso && inputRef) {
        const parsed = this.parseISODate(iso);
        if (parsed) {
          inputRef.value = this.formatForDisplay(this.clampDate(parsed, side));
        }
      }
    }
  }

  @Watch('min')
  handleMinChange(newValue?: string) {
    this.minDate = this.parseISODate(newValue);
    if (this.maxDate && this.minDate && this.minDate > this.maxDate) {
      this.maxDate = this.cloneDate(this.minDate);
    }
    this.ensureValueWithinBounds();
  }

  @Watch('max')
  handleMaxChange(newValue?: string) {
    this.maxDate = this.parseISODate(newValue);
    if (this.minDate && this.maxDate && this.maxDate < this.minDate) {
      this.minDate = this.cloneDate(this.maxDate);
    }
    this.ensureValueWithinBounds();
  }

  @Watch('value')
  handleValueChange(newValue?: string) {
    if (newValue === undefined || this.variant === 'range') {
      return;
    }
    this.applyIsoPropToInput(
      newValue,
      'single',
      this.inputRef,
      () => this.hasFocus
    );
  }

  @Watch('start')
  handleStartChange(newValue?: string) {
    if (newValue === undefined || this.variant !== 'range') {
      return;
    }
    this.applyIsoPropToInput(
      newValue,
      'start',
      this.inputRef,
      () => this.hasFocus
    );
  }

  @Watch('end')
  handleEndChange(newValue?: string) {
    if (newValue === undefined || this.variant !== 'range') {
      return;
    }
    this.applyIsoPropToInput(
      newValue,
      'end',
      this.endInputRef,
      () => this.endHasFocus
    );
  }

  /**
   * Syncs a prop-driven ISO value to the given input display (and calendar month when not typing).
   * Handles both typing (partial pass-through) and programmatic (clamp + reformat) paths.
   * Does NOT write back to the prop — callers own their prop; this only updates the DOM input.
   */
  private applyIsoPropToInput(
    newValue: string,
    side: PickerSide,
    inputRef: HTMLInputElement | undefined,
    hasFocusGetter: () => boolean
  ) {
    if (!inputRef) {
      return;
    }
    if (!newValue) {
      inputRef.value = '';
      return;
    }
    if (hasFocusGetter()) {
      const isISO = /^\d{4}-\d{2}-\d{2}$/.test(newValue);
      if (isISO) {
        const parsed = this.parseISODate(newValue);
        if (parsed) {
          inputRef.value = this.formatForDisplay(this.clampDate(parsed, side));
        } else {
          inputRef.value = newValue;
        }
      } else {
        inputRef.value = newValue;
      }
      return;
    }
    const parsed = this.parseISODate(newValue);
    if (!parsed) {
      inputRef.value = '';
      return;
    }
    const clamped = this.clampDate(parsed, side);
    inputRef.value = this.formatForDisplay(clamped);
    const event = new Event('input', { bubbles: true });
    inputRef.dispatchEvent(event);
    this.ensureCalendarWithinBounds(clamped, side);
  }

  @Watch('weekStartDay')
  handleWeekStartDayChange() {
    const firstDayOfWeek =
      WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
    this.calendar = new DatePickerCalendar(firstDayOfWeek);

    if (this.variant === 'range') {
      this.endCalendar = new DatePickerCalendar(firstDayOfWeek);
      const startDate = this.parseISODate(this.start);
      if (startDate) {
        this.calendar.gotoDate(startDate.getFullYear(), startDate.getMonth());
      }
      const endDate = this.parseISODate(this.end);
      if (endDate) {
        this.endCalendar.gotoDate(endDate.getFullYear(), endDate.getMonth());
      }
      return;
    }

    const selectedDate = this.parseISODate(this.value);
    if (selectedDate) {
      this.calendar.gotoDate(
        selectedDate.getFullYear(),
        selectedDate.getMonth()
      );
    }
  }

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

    if (!this.el.ariaLabel) {
      this.el.ariaLabel =
        this.variant === 'range' ? 'Date range' : 'Date input';
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);

    try {
      this.locale =
        document.documentElement.lang || navigator.language || 'en-US';
      new Intl.DateTimeFormat(this.locale);
    } catch {
      this.locale = 'en-US';
    }

    // Initialize calendar with the correct first day of week
    const firstDayOfWeek =
      WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
    this.calendar = new DatePickerCalendar(firstDayOfWeek);
    if (this.variant === 'range') {
      this.endCalendar = new DatePickerCalendar(firstDayOfWeek);
    }
    this.handleMinChange(this.min);
    this.handleMaxChange(this.max);
    if (this.variant === 'range') {
      this.rangeLegendId = this.el.id
        ? `${this.el.id}-range-legend`
        : typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? `modus-wc-date-range-legend-${crypto.randomUUID()}`
          : `modus-wc-date-range-legend-${Date.now()}`;
      this.handleStartChange(this.start);
      this.handleEndChange(this.end);
    } else {
      this.handleValueChange(this.value);
    }
  }

  componentDidUpdate() {
    if (this.variant === 'range') {
      this.syncPopperForSide('start');
      this.syncPopperForSide('end');
    } else {
      this.syncPopperForSide('single');
    }
  }

  disconnectedCallback() {
    this.popperInstance?.destroy();
    this.popperInstance = null;
    this.endPopperInstance?.destroy();
    this.endPopperInstance = null;
  }

  private getClasses(): string {
    const classList = [
      'modus-wc-date-input',
      'modus-wc-input',
      'modus-wc-w-full',
    ];
    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      feedback: this.feedback,
      readOnly: this.readOnly,
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  /** `side` matches the current `variant` (single vs start/end range). */
  private isActivePickerSide(side: PickerSide): boolean {
    return this.variant === 'range'
      ? side === 'start' || side === 'end'
      : side === 'single';
  }

  /** Accessible name for range pickers; explicit rangeConfig overrides beat host `aria-label`, then defaults. */
  private getRangeInputAriaLabel(isEnd: boolean): string {
    const explicit = (
      isEnd ? this.rangeConfig?.endAriaLabel : this.rangeConfig?.startAriaLabel
    )?.trim();
    if (explicit) {
      return explicit;
    }
    const host = this.el.ariaLabel?.trim();
    if (host) {
      return isEnd ? `${host}, end date` : `${host}, start date`;
    }
    return isEnd ? 'End date' : 'Start date';
  }

  private syncPopperForSide(side: PickerSide) {
    if (!this.isActivePickerSide(side)) {
      return;
    }
    const isEnd = side === 'end';

    const showCalendar = isEnd ? this.showEndCalendar : this.showCalendar;
    const inputRef = isEnd ? this.endInputRef : this.inputRef;
    const calendarRef = isEnd ? this.endCalendarRef : this.calendarRef;

    if (showCalendar && inputRef && calendarRef) {
      this.setupPopper(side);
    } else if (isEnd && this.endPopperInstance) {
      this.endPopperInstance.destroy();
      this.endPopperInstance = null;
    } else if (!isEnd && this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  private getIsoForSide(side: PickerSide): string {
    return side === 'end'
      ? this.end
      : side === 'start'
        ? this.start
        : this.value;
  }

  private getPickerBounds(side: PickerSide): {
    minDate?: Date;
    maxDate?: Date;
  } {
    if (this.variant !== 'range') {
      return { minDate: this.minDate, maxDate: this.maxDate };
    }
    if (side === 'start') {
      return {
        minDate: this.minDate,
        maxDate: this.parseISODate(this.getRangeStartMaxBound()),
      };
    }
    if (side === 'end') {
      return {
        minDate: this.parseISODate(this.getRangeEndMinBound()),
        maxDate: this.maxDate,
      };
    }
    return { minDate: this.minDate, maxDate: this.maxDate };
  }

  private resolveOpenCalendarSide(): PickerSide | null {
    if (this.variant !== 'range') {
      return this.showCalendar ? 'single' : null;
    }
    if (this.showCalendar && this.showEndCalendar) {
      const ae = document.activeElement;
      if (ae && this.endCalendarRef?.contains(ae as Node)) {
        return 'end';
      }
      if (ae && this.calendarRef?.contains(ae as Node)) {
        return 'start';
      }
      return 'start';
    }
    if (this.showEndCalendar) {
      return 'end';
    }
    if (this.showCalendar) {
      return 'start';
    }
    return null;
  }

  private getCalendarForSide(side: PickerSide): DatePickerCalendar {
    return side === 'end' ? this.endCalendar : this.calendar;
  }

  private setCalendarForSide(side: PickerSide, cal: DatePickerCalendar) {
    if (side === 'end') {
      this.endCalendar = cal;
    } else {
      this.calendar = cal;
    }
  }

  private getFocusedIdx(side: PickerSide): number {
    return side === 'end' ? this.endFocusedDateIndex : this.focusedDateIndex;
  }

  private setFocusedIdx(side: PickerSide, index: number) {
    if (side === 'end') {
      this.endFocusedDateIndex = index;
    } else {
      this.focusedDateIndex = index;
    }
  }

  private handleBlur = (event: FocusEvent, side: PickerSide = 'single') => {
    // Check if focus is moving to an element within the component
    const relatedTarget = event.relatedTarget as HTMLElement;
    // istanbul ignore next (unreachable code)
    if (relatedTarget && this.el.contains(relatedTarget)) {
      // Focus is moving within the component, don't emit blur
      return;
    }

    if (side === 'end') {
      this.endHasFocus = false;
    } else {
      this.hasFocus = false;
    }
    this.syncValueFromInput(side);
    this.inputBlur.emit(event);
  };

  private handleFocus = (event: FocusEvent, side: PickerSide = 'single') => {
    if (side === 'end') {
      if (!this.endHasFocus) {
        this.endHasFocus = true;
        this.inputFocus.emit(event);
      }
    } else if (!this.hasFocus) {
      this.hasFocus = true;
      this.inputFocus.emit(event);
    }
  };

  private handleInput = (event: InputEvent, side: PickerSide = 'single') => {
    const rawValue = (event.target as HTMLInputElement)?.value ?? '';
    const parsed = this.parseISODate(rawValue);
    const isoValue = parsed
      ? this.formatISODate(this.clampDate(parsed, side))
      : '';
    this.inputChange.emit({
      target: { value: isoValue },
    } as unknown as InputEvent);

    if (this.variant === 'range' && (side === 'start' || side === 'end')) {
      const prevStart = this.start;
      const prevEnd = this.end;
      if (side === 'start') {
        this.start = isoValue;
      } else {
        this.end = isoValue;
      }
      if (prevStart !== this.start || prevEnd !== this.end) {
        this.rangeChange.emit({ start: this.start, end: this.end });
      }
    }
  };

  private handleInputKeyDown = (
    event: KeyboardEvent,
    side: PickerSide = 'single'
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.syncValueFromInput(side);
    }
  };

  private setupPopper(side: PickerSide = 'single') {
    if (!this.isActivePickerSide(side)) {
      return;
    }
    const isEnd = side === 'end';
    const inputRef = isEnd ? this.endInputRef : this.inputRef;
    const calendarRef = isEnd ? this.endCalendarRef : this.calendarRef;
    if (!inputRef || !calendarRef) {
      return;
    }
    const popperOptions = {
      placement: 'bottom-start' as const,
      strategy: 'fixed' as const,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['top-start', 'bottom-end', 'top-end'],
          },
        },
      ],
    };
    if (isEnd) {
      this.endPopperInstance?.destroy();
      this.endPopperInstance = createPopper(
        inputRef,
        calendarRef,
        popperOptions
      );
    } else {
      this.popperInstance?.destroy();
      this.popperInstance = createPopper(inputRef, calendarRef, popperOptions);
    }
  }

  private toggleCalendar = (side: PickerSide = 'single') => {
    if (!this.isActivePickerSide(side)) {
      return;
    }
    const isEnd = side === 'end';
    const show = isEnd ? this.showEndCalendar : this.showCalendar;
    const nextShow = !show;
    if (isEnd) {
      this.showEndCalendar = nextShow;
    } else {
      this.showCalendar = nextShow;
    }

    if (nextShow) {
      const selectedDate = this.parseISODate(this.getIsoForSide(side));
      this.ensureCalendarWithinBounds(selectedDate ?? undefined, side);
      const cal = this.getCalendarForSide(side);
      if (selectedDate) {
        const selectedIndex = cal.dates.findIndex(
          (d) => d && this.compareDate(d, selectedDate) === 0
        );
        if (selectedIndex !== -1) {
          this.setFocusedIdx(side, selectedIndex);
        }
      } else {
        this.ensureCalendarWithinBounds(new Date(), side);
        const calOpen = this.getCalendarForSide(side);
        this.setFocusedIdx(
          side,
          calOpen.dates.findIndex(
            (d) => d && this.compareDate(d, new Date()) === 0
          )
        );
      }
    } else {
      this.setFocusedIdx(side, -1);
    }
    const inputRef = isEnd ? this.endInputRef : this.inputRef;
    inputRef?.focus();
  };

  private handleDateSelect = (date: Date, side: PickerSide = 'single') => {
    if (this.isDateDisabled(date, side)) {
      return;
    }

    const isEnd = side === 'end';
    if (isEnd) {
      this.endHasFocus = false;
      this.end = this.formatISODate(date);
      this.showEndCalendar = false;
    } else if (side === 'start') {
      this.hasFocus = false;
      this.start = this.formatISODate(date);
      this.showCalendar = false;
    } else {
      this.hasFocus = false;
      this.value = this.formatISODate(date);
      this.showCalendar = false;
    }

    const cal = this.getCalendarForSide(side);
    if (
      date.getMonth() !== cal.selectedMonth ||
      date.getFullYear() !== cal.selectedYear
    ) {
      const newCalendar = new DatePickerCalendar(
        WEEK_START_DAY_MAP[this.weekStartDay || 'sunday']
      );
      newCalendar.gotoDate(date.getFullYear(), date.getMonth());
      this.setCalendarForSide(side, newCalendar);
    }

    this.inputBlur.emit(new FocusEvent('blur', { bubbles: true }));
    if (this.variant === 'range' && (side === 'start' || side === 'end')) {
      this.rangeChange.emit({ start: this.start, end: this.end });
    }
  };

  private addMonthOffset = (offset: number, side: PickerSide = 'single') => {
    const cal = this.getCalendarForSide(side);
    const target = new Date(cal.selectedYear, cal.selectedMonth + offset, 1);
    this.updateCalendarAndEmitEvents(
      target.getFullYear(),
      target.getMonth(),
      side
    );
  };

  private handleMonthChange = (
    event: CustomEvent<InputEvent>,
    side: PickerSide = 'single'
  ) => {
    event.stopPropagation();

    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const monthValue = selectTarget?.value;
    const newMonth = parseInt(monthValue || '0', 10);

    const cal = this.getCalendarForSide(side);
    const currentYear = cal.selectedYear;

    if (Number.isNaN(newMonth)) {
      return;
    }

    this.updateCalendarAndEmitEvents(currentYear, newMonth, side);
  };

  private handleYearChange = (
    event: CustomEvent<InputEvent>,
    side: PickerSide = 'single'
  ) => {
    event.stopPropagation();

    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const yearValue = selectTarget?.value;
    const newYear = parseInt(yearValue || '0', 10);

    const cal = this.getCalendarForSide(side);
    const currentMonth = cal.selectedMonth;

    if (Number.isNaN(newYear)) {
      return;
    }

    this.updateCalendarAndEmitEvents(newYear, currentMonth, side);
  };

  private handleDateKeyDown = (
    event: KeyboardEvent,
    date: Date,
    side: PickerSide = 'single'
  ) => {
    if (this.isDateDisabled(date, side)) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleDateSelect(date, side);
    }
  };

  @Listen('click', { target: 'document' })
  handleClickOutside(event: MouseEvent) {
    const path = event.composedPath();
    const insideComponent = path.includes(this.el);
    if (!insideComponent) {
      if (this.showCalendar) {
        this.showCalendar = false;
        this.hasFocus = false;
      }
      if (this.showEndCalendar) {
        this.showEndCalendar = false;
        this.endHasFocus = false;
      }
    }
  }

  @Listen('keydown', { target: 'document' })
  handleEscapeKey(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      if (this.showCalendar) {
        this.showCalendar = false;
        event.preventDefault();
      }
      if (this.showEndCalendar) {
        this.showEndCalendar = false;
        event.preventDefault();
      }
    }
  }

  private navigateToAdjacentMonth(
    currentIndex: number,
    isUp: boolean,
    side: PickerSide = 'single'
  ): void {
    const cal = this.getCalendarForSide(side);
    const currentColumn = currentIndex % 7;

    this.updateCalendarAndEmitEvents(
      cal.selectedYear,
      cal.selectedMonth + (isUp ? -1 : 1),
      side
    );

    const calNext = this.getCalendarForSide(side);
    const weekRange = isUp ? [5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5];

    for (const week of weekRange) {
      const indexInWeek = week * 7 + currentColumn;
      if (
        indexInWeek < calNext.dates.length &&
        calNext.dates[indexInWeek]?.getMonth() === calNext.selectedMonth
      ) {
        this.setFocusedIdx(side, indexInWeek);
        return;
      }
    }

    const currentMonthIndices = calNext.dates
      .map((date, index) =>
        date?.getMonth() === calNext.selectedMonth ? index : -1
      )
      .filter((index) => index !== -1);

    this.setFocusedIdx(
      side,
      isUp
        ? (currentMonthIndices[currentMonthIndices.length - 1] ??
            calNext.dates.length - 1)
        : (currentMonthIndices[0] ?? 0)
    );
  }

  @Listen('keydown')
  handleArrowKeys(event: KeyboardEvent) {
    const side = this.resolveOpenCalendarSide();
    if (side === null) {
      return;
    }

    const key = event.key;

    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      return;
    }

    event.preventDefault();

    const cal = this.getCalendarForSide(side);
    const totalDates = cal.dates.length;
    let newIndex = this.getFocusedIdx(side);

    if (newIndex === -1) {
      const iso = this.getIsoForSide(side);
      if (iso) {
        const selectedDate = this.parseISODate(iso);
        if (selectedDate) {
          newIndex = cal.dates.findIndex(
            (date) => this.compareDate(date, selectedDate) === 0
          );
        }
      }
      if (newIndex === -1) {
        newIndex = 0;
      }
    }

    let targetIndex = newIndex;
    let shouldChangeMonth = false;
    let targetDate: Date | null = null;

    switch (key) {
      case 'ArrowLeft':
        targetIndex = newIndex - 1;
        break;
      case 'ArrowRight':
        targetIndex = newIndex + 1;
        break;
      case 'ArrowUp':
        targetIndex = newIndex - 7;
        break;
      case 'ArrowDown':
        targetIndex = newIndex + 7;
        break;
    }

    if (targetIndex >= 0 && targetIndex < totalDates) {
      targetDate = cal.dates[targetIndex];

      if (targetDate) {
        let searchIndex = targetIndex;
        const direction =
          key === 'ArrowLeft'
            ? -1
            : key === 'ArrowRight'
              ? 1
              : key === 'ArrowUp'
                ? -7
                : 7;

        while (
          searchIndex >= 0 &&
          searchIndex < totalDates &&
          this.isDateDisabled(cal.dates[searchIndex], side)
        ) {
          searchIndex += direction;
        }

        if (
          searchIndex >= 0 &&
          searchIndex < totalDates &&
          cal.dates[searchIndex]
        ) {
          targetDate = cal.dates[searchIndex];
          targetIndex = searchIndex;
        } else {
          return;
        }

        if (targetDate.getMonth() !== cal.selectedMonth) {
          shouldChangeMonth = true;
        }
        this.setFocusedIdx(side, targetIndex);
      }
    } else {
      shouldChangeMonth = true;

      if (key === 'ArrowUp') {
        const prevMonthDate = new Date(
          cal.selectedYear,
          cal.selectedMonth - 1,
          1
        );
        if (!this.isDateDisabled(prevMonthDate, side)) {
          this.navigateToAdjacentMonth(newIndex, true, side);
          shouldChangeMonth = false;
        }
      } else if (key === 'ArrowDown') {
        const nextMonthDate = new Date(
          cal.selectedYear,
          cal.selectedMonth + 1,
          1
        );
        if (!this.isDateDisabled(nextMonthDate, side)) {
          this.navigateToAdjacentMonth(newIndex, false, side);
          shouldChangeMonth = false;
        }
      } else if (key === 'ArrowLeft') {
        const prevMonthDate = new Date(
          cal.selectedYear,
          cal.selectedMonth - 1,
          1
        );
        targetDate = new Date(
          prevMonthDate.getFullYear(),
          prevMonthDate.getMonth() + 1,
          0
        );

        if (this.isDateDisabled(targetDate, side)) {
          return;
        }
      } else {
        targetDate = new Date(cal.selectedYear, cal.selectedMonth + 1, 1);

        if (this.isDateDisabled(targetDate, side)) {
          return;
        }
      }
    }

    if (shouldChangeMonth && targetDate) {
      this.updateCalendarAndEmitEvents(
        targetDate.getFullYear(),
        targetDate.getMonth(),
        side
      );

      const calAfter = this.getCalendarForSide(side);
      const newTargetIndex = calAfter.dates.findIndex(
        (date) => date && this.compareDate(date, targetDate) === 0
      );

      if (newTargetIndex !== -1) {
        this.setFocusedIdx(side, newTargetIndex);
      } else {
        if (key === 'ArrowLeft' || key === 'ArrowUp') {
          const lastCurrentMonthIndex = calAfter.dates
            .map((date, index) =>
              date && date.getMonth() === targetDate.getMonth() ? index : -1
            )
            .filter((index) => index !== -1)
            .pop();
          this.setFocusedIdx(
            side,
            lastCurrentMonthIndex !== undefined
              ? lastCurrentMonthIndex
              : calAfter.dates.length - 1
          );
        } else {
          const firstCurrentMonthIndex = calAfter.dates.findIndex(
            (date) => date && date.getMonth() === targetDate.getMonth()
          );
          this.setFocusedIdx(
            side,
            firstCurrentMonthIndex !== -1 ? firstCurrentMonthIndex : 0
          );
        }
      }
    }

    const calRef = side === 'end' ? this.endCalendarRef : this.calendarRef;
    const dateButtons = calRef?.querySelectorAll('.calendar-day');
    const focusedIdx = this.getFocusedIdx(side);
    if (dateButtons && dateButtons[focusedIdx]) {
      (dateButtons[focusedIdx] as HTMLElement).focus();
    }
  }

  private renderCalendarHeader(side: PickerSide = 'single') {
    const cal = this.getCalendarForSide(side);
    const currentYear = cal.selectedYear;
    const currentMonth = cal.selectedMonth;

    // Generate year options (current year ± 100 years)
    const yearOptions: { value: string; label: string }[] = [];
    for (let i = currentYear - 100; i <= currentYear + 100; i++) {
      yearOptions.push({ value: i.toString(), label: i.toString() });
    }

    // Generate month options
    const monthOptions = MONTH_SHORT_NAMES.map((month, index) => ({
      value: index.toString(),
      label: month,
    }));

    return (
      <div class="calendar-header">
        <modus-wc-button
          type="button"
          aria-label="Previous"
          variant="borderless"
          shape="circle"
          size="xs"
          onButtonClick={
            // istanbul ignore next (unreachable code)
            () => this.addMonthOffset(-1, side)
          }
          class="nav-btn"
        >
          <modus-wc-icon name="chevron_left" size="sm" />
        </modus-wc-button>

        <div class="calendar-selects">
          <modus-wc-select
            key={`month-${side}-${currentYear}-${currentMonth}`}
            class="month-select"
            value={currentMonth.toString()}
            options={monthOptions}
            onInputChange={
              // istanbul ignore next (unreachable code)
              (e) => this.handleMonthChange(e as CustomEvent<InputEvent>, side)
            }
            onInputBlur={
              // istanbul ignore next (unreachable code)
              (e) => e.stopPropagation()
            }
            bordered={false}
            size="sm"
          />
          <modus-wc-select
            key={`year-${side}-${currentYear}`}
            class="year-select"
            value={currentYear.toString()}
            options={yearOptions}
            onInputChange={
              // istanbul ignore next (unreachable code)
              (e) => this.handleYearChange(e as CustomEvent<InputEvent>, side)
            }
            onInputBlur={
              // istanbul ignore next (unreachable code)
              (e) => e.stopPropagation()
            }
            bordered={false}
            size="sm"
          />
        </div>

        <modus-wc-button
          type="button"
          aria-label="Next"
          variant="borderless"
          shape="circle"
          size="xs"
          onButtonClick={
            // istanbul ignore next (unreachable code)
            () => this.addMonthOffset(1, side)
          }
          class="nav-btn"
        >
          <modus-wc-icon name="chevron_right" size="sm" />
        </modus-wc-button>
      </div>
    );
  }

  private renderCalendarBody(side: PickerSide = 'single') {
    const cal = this.getCalendarForSide(side);
    const today = new Date();
    const selectedDate = this.parseISODate(this.getIsoForSide(side));
    const currentMonth = cal.selectedMonth;
    const weekStartDayNum =
      WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];

    return (
      <div class="calendar-body">
        <div
          class={`calendar-days-week${this.showWeekNumbers ? ' has-week-numbers' : ''}`}
        >
          {this.showWeekNumbers && <div class="week-number-header"></div>}
          {cal.getDaysOfWeek('default', weekStartDayNum).map((d) => {
            return <div class="day-header">{d}</div>;
          })}
        </div>
        <div
          class={`calendar-dates${this.showWeekNumbers ? ' has-week-numbers' : ''}`}
        >
          {cal.dates.map((date, index) => {
            // Add week number at the start of each row (every 7 days)
            const weekNumberElement =
              this.showWeekNumbers && index % 7 === 0 ? (
                <div
                  class="week-number"
                  aria-label={`Week ${cal.getWeekNumber(date, weekStartDayNum)}`}
                >
                  {cal.getWeekNumber(date, weekStartDayNum)}
                </div>
              ) : null;

            if (!date) {
              return weekNumberElement;
            }

            const isToday = this.compareDate(date, today) === 0;
            const isSelected =
              (selectedDate && this.compareDate(date, selectedDate) === 0) ||
              false;
            const isCurrentMonth = date.getMonth() === currentMonth;
            const isDisabled = this.isDateDisabled(date, side);

            const button = (
              <button
                type="button"
                class={{
                  'calendar-day': true,
                  'current-day': isToday,
                  selected: isSelected,
                  'current-month': isCurrentMonth,
                  'other-month': !isCurrentMonth,
                  disabled: isDisabled,
                }}
                disabled={isDisabled}
                onClick={() => this.handleDateSelect(date, side)}
                onKeyDown={(e) => this.handleDateKeyDown(e, date, side)}
                tabIndex={isDisabled ? -1 : 0}
              >
                {date.getDate()}
              </button>
            );

            // Only create array when week number exists
            return weekNumberElement ? [weekNumberElement, button] : button;
          })}
        </div>
      </div>
    );
  }

  private compareDate(date1: Date, date2: Date): number {
    if (!date1) return date2 ? -1 : 0;
    if (!date2) return 1;
    return (
      date1.getFullYear() - date2.getFullYear() ||
      date1.getMonth() - date2.getMonth() ||
      date1.getDate() - date2.getDate()
    );
  }

  private get effectiveFormat(): string {
    return this.format || this.getLocaleFormatGuide();
  }

  /** Generates a localized guide for the placeholder (e.g., "mm/dd/yyyy") */
  private getLocaleFormatGuide(): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    const parts = new Intl.DateTimeFormat(this.locale, options).formatToParts(
      new Date(2026, 11, 31)
    );
    return parts
      .map((part) => {
        switch (part.type) {
          case 'day':
            return 'dd';
          case 'month':
            return 'mm';
          case 'year':
            return 'yyyy';
          default:
            return part.value;
        }
      })
      .join('');
  }

  /**
   * Parses a date string into a `Date`. Accepts pure ISO 8601 (`YYYY-MM-DD`), abbreviated month
   * name strings matching the `MMM DD, YYYY` token pattern (e.g. `Oct 15, 2025`), and any
   * numeric format whose day/month/year order is resolved from `this.format` or the locale guide.
   */
  private parseISODate(value?: string): Date | undefined {
    if (!value) return undefined;

    const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (isoMatch) {
      const date = new Date(
        Number(isoMatch[1]),
        Number(isoMatch[2]) - 1,
        Number(isoMatch[3])
      );
      if (
        date.getFullYear() === Number(isoMatch[1]) &&
        date.getMonth() === Number(isoMatch[2]) - 1 &&
        date.getDate() === Number(isoMatch[3])
      ) {
        return this.cloneDate(date);
      }
      return undefined;
    }

    const guide = this.effectiveFormat;

    // Handle abbreviated month name format (e.g. "MMM DD, YYYY" → "Oct 15, 2025")
    if (guide.includes('MMM')) {
      const mmmMatch = value.match(/^([A-Za-z]{3})\s+(\d{1,2}),?\s+(\d{4})$/);
      if (!mmmMatch) return undefined;
      const monthIdx = MONTH_SHORT_NAMES.findIndex(
        (m) => m.toLowerCase() === mmmMatch[1].toLowerCase()
      );
      if (monthIdx === -1) return undefined;
      const dayNum = Number(mmmMatch[2]);
      const yearNum = Number(mmmMatch[3]);
      const date = new Date(yearNum, monthIdx, dayNum);
      if (
        date.getFullYear() === yearNum &&
        date.getMonth() === monthIdx &&
        date.getDate() === dayNum
      ) {
        return this.cloneDate(date);
      }
      return undefined;
    }

    // Extract numbers separated by /, -, or . only (exactly 3 groups required)
    const numbers = value.match(/^(\d+)[/\-.](\d+)[/\-.](\d+)$/);
    if (!numbers) return undefined;

    const [n1, n2, n3] = [
      Number(numbers[1]),
      Number(numbers[2]),
      Number(numbers[3]),
    ];

    let day: number, month: number, year: number;
    const guideLower = guide.toLowerCase();

    if (guideLower.startsWith('m')) {
      [month, day, year] = [n1, n2, n3];
      month -= 1;
    } else if (guideLower.startsWith('y')) {
      [year, month, day] = [n1, n2, n3];
      month -= 1;
    } else {
      [day, month, year] = [n1, n2, n3];
      month -= 1;
    }

    const date = new Date(year, month, day);
    if (
      date.getFullYear() === year &&
      date.getMonth() === month &&
      date.getDate() === day
    ) {
      return this.cloneDate(date);
    }

    return undefined;
  }

  /** Formats date as ISO 8601 (YYYY-MM-DD) for the value prop */
  private formatISODate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /** Returns ISO for `side` formatted for display, or empty when absent / unparseable. */
  private getDisplayValue(side: PickerSide): string {
    const iso = this.getIsoForSide(side);
    if (!iso) {
      return '';
    }
    const parsed = this.parseISODate(iso);
    return parsed ? this.formatForDisplay(parsed) : '';
  }

  /** Formats date for display in the input using the selected format pattern */
  private formatForDisplay(date: Date): string {
    const fmt = this.effectiveFormat;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    const monthName = MONTH_SHORT_NAMES[date.getMonth()];

    const map: Record<string, string> = {
      yyyy: year,
      YYYY: year,
      mm: month,
      dd: day,
      DD: day,
      MMM: monthName,
    };

    return fmt.replace(/yyyy|YYYY|mm|dd|DD|MMM/g, (matched) => map[matched]);
  }

  private cloneDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  private clampDate(date: Date, side: PickerSide = 'single'): Date {
    const { minDate, maxDate } = this.getPickerBounds(side);
    let result = this.cloneDate(date);

    if (minDate && result < minDate) {
      result = this.cloneDate(minDate);
    }

    if (maxDate && result > maxDate) {
      result = this.cloneDate(maxDate);
    }

    return result;
  }

  private isDateDisabled(date: Date, side: PickerSide = 'single'): boolean {
    const { minDate, maxDate } = this.getPickerBounds(side);
    if (minDate && date < minDate) {
      return true;
    }

    if (maxDate && date > maxDate) {
      return true;
    }

    return false;
  }

  private clampIsoToProp(iso: string, side: PickerSide): string {
    if (!iso) {
      return '';
    }
    const parsed = this.parseISODate(iso);
    if (!parsed) {
      return '';
    }
    return this.formatISODate(this.clampDate(parsed, side));
  }

  private ensureValueWithinBounds() {
    if (this.variant === 'range') {
      const nextStart = this.clampIsoToProp(this.start, 'start');
      if (nextStart !== this.start) {
        this.start = nextStart;
      }
      const nextEnd = this.clampIsoToProp(this.end, 'end');
      if (nextEnd !== this.end) {
        this.end = nextEnd;
      }
      return;
    }
    if (!this.value) {
      return;
    }
    const clamped = this.clampIsoToProp(this.value, 'single');
    if (clamped !== this.value) {
      this.value = clamped;
    }
  }

  private ensureCalendarWithinBounds(
    referenceDate?: Date,
    side: PickerSide = 'single'
  ) {
    if (referenceDate) {
      const firstDayOfWeek =
        WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
      const newCalendar = new DatePickerCalendar(firstDayOfWeek);
      newCalendar.gotoDate(
        referenceDate.getFullYear(),
        referenceDate.getMonth()
      );
      this.setCalendarForSide(side, newCalendar);
    }
  }

  private setCalendarMonth(
    year: number,
    month: number,
    side: PickerSide = 'single'
  ) {
    this.ensureCalendarWithinBounds(new Date(year, month, 1), side);
  }

  private updateCalendarAndEmitEvents(
    year: number,
    month: number,
    side: PickerSide = 'single'
  ) {
    const cal = this.getCalendarForSide(side);
    const oldYear = cal.selectedYear;
    const oldMonth = cal.selectedMonth;

    this.setCalendarMonth(year, month, side);

    if (month !== oldMonth) {
      this.calendarMonthChange.emit(month);
    }

    if (year !== oldYear) {
      this.calendarYearChange.emit(year);
    }
  }

  private syncValueFromInput(side: PickerSide = 'single') {
    const inputRef = side === 'end' ? this.endInputRef : this.inputRef;
    if (!inputRef) {
      return;
    }

    const value = inputRef.value.trim();

    if (!value) {
      if (this.variant === 'range') {
        const prevStart = this.start;
        const prevEnd = this.end;
        if (side === 'end') {
          this.end = '';
        } else if (side === 'start') {
          this.start = '';
        }
        if (prevStart !== this.start || prevEnd !== this.end) {
          this.rangeChange.emit({ start: this.start, end: this.end });
        }
      } else if (this.value) {
        this.value = '';
      }
      return;
    }

    const parsed = this.parseISODate(value);

    if (!parsed) {
      inputRef.value = this.getDisplayValue(side);
      return;
    }

    const clamped = this.clampDate(parsed, side);
    const formatted = this.formatISODate(clamped);
    const prevStart = this.start;
    const prevEnd = this.end;

    if (side === 'end') {
      this.end = formatted;
    } else if (side === 'start') {
      this.start = formatted;
    } else {
      this.value = formatted;
    }
    inputRef.value = this.formatForDisplay(clamped);

    if (
      this.variant === 'range' &&
      (side === 'start' || side === 'end') &&
      (prevStart !== this.start || prevEnd !== this.end)
    ) {
      this.rangeChange.emit({ start: this.start, end: this.end });
    }
  }

  private getRangeStartMaxBound(): string | undefined {
    const end = this.end;
    const cap = this.max;
    if (end && /^\d{4}-\d{2}-\d{2}$/.test(end)) {
      if (!cap) {
        return end;
      }
      return end <= cap ? end : cap;
    }
    return cap || undefined;
  }

  private getRangeEndMinBound(): string | undefined {
    const start = this.start;
    const capMin = this.min;
    if (start && /^\d{4}-\d{2}-\d{2}$/.test(start)) {
      if (!capMin) {
        return start;
      }
      return start >= capMin ? start : capMin;
    }
    return capMin || undefined;
  }

  private renderPickerContent(side: PickerSide) {
    if (!this.isActivePickerSide(side)) {
      return null;
    }

    const isEnd = side === 'end';
    const showCal = isEnd ? this.showEndCalendar : this.showCalendar;
    const hasFocusState = isEnd ? this.endHasFocus : this.hasFocus;
    const inputRef = isEnd ? this.endInputRef : this.inputRef;
    const ariaLabel = this.getRangeInputAriaLabel(isEnd);

    return [
      <div
        class="date-input-container"
        key={isEnd ? 'end-picker' : 'start-picker'}
      >
        <input
          ref={(el) => {
            if (isEnd) {
              this.endInputRef = el as HTMLInputElement;
            } else {
              this.inputRef = el as HTMLInputElement;
            }
          }}
          aria-disabled={this.disabled}
          aria-label={this.variant === 'range' ? ariaLabel : undefined}
          class={this.getClasses()}
          disabled={this.disabled}
          id={
            isEnd
              ? (this.rangeConfig?.endInputId ?? this.inputId)
              : (this.rangeConfig?.startInputId ?? this.inputId)
          }
          name={
            isEnd
              ? (this.rangeConfig?.endName ?? this.name)
              : (this.rangeConfig?.startName ?? this.name)
          }
          onBlur={(e) => this.handleBlur(e, side)}
          onFocus={(e) => this.handleFocus(e, side)}
          onInput={(e) => this.handleInput(e, side)}
          onKeyDown={(e) => this.handleInputKeyDown(e, side)}
          placeholder={this.effectiveFormat}
          readonly={this.readOnly}
          required={this.required}
          tabIndex={isEnd ? undefined : this.inputTabIndex}
          type="text"
          value={
            hasFocusState ? (inputRef?.value ?? '') : this.getDisplayValue(side)
          }
          {...(isEnd ? {} : this.inheritedAttributes)}
        />
        <modus-wc-button
          aria-label="Open calendar"
          disabled={this.disabled || this.readOnly}
          variant="borderless"
          shape="circle"
          size="xs"
          color="tertiary"
          class="calendar-icon-button"
          onButtonClick={() => this.toggleCalendar(side)}
        >
          <modus-wc-icon name="calendar_blank" size="sm" />
        </modus-wc-button>
      </div>,
      showCal && (
        <div
          key={isEnd ? 'end-cal' : 'start-cal'}
          ref={(el) => {
            if (isEnd) {
              this.endCalendarRef = el as HTMLElement;
            } else {
              this.calendarRef = el as HTMLElement;
            }
          }}
          class={`calendar-container${this.showWeekNumbers ? ' has-week-numbers' : ''}`}
        >
          {this.renderCalendarHeader(side)}
          {this.renderCalendarBody(side)}
        </div>
      ),
    ];
  }

  private renderRange() {
    const legendId = this.label ? this.rangeLegendId : undefined;

    return (
      <Host class="modus-wc-date--range">
        <fieldset
          class="modus-wc-date-range-fieldset"
          aria-label={this.label ? undefined : this.el.ariaLabel || undefined}
        >
          {this.label && (
            <legend
              id={legendId}
              class={{
                'modus-wc-date-range-legend': true,
                [`modus-wc-date-range-legend--${this.size}`]: Boolean(
                  this.size
                ),
              }}
            >
              {this.label}
              {this.required && (
                <span aria-hidden="true" class="modus-wc-date-range-required">
                  {'\u00A0*'}
                </span>
              )}
            </legend>
          )}
          <div class="modus-wc-date-range-row">
            {this.renderPickerContent('start')}
            {this.renderPickerContent('end')}
          </div>
        </fieldset>
        {this.feedback && (
          <modus-wc-input-feedback
            level={this.feedback.level}
            message={this.feedback.message}
            size={this.size}
          />
        )}
      </Host>
    );
  }

  render() {
    if (this.variant === 'range') {
      return this.renderRange();
    }
    return (
      <Host>
        {this.label && (
          <modus-wc-input-label
            forId={this.inputId}
            labelText={this.label}
            required={this.required}
            size={this.size}
          />
        )}
        {this.renderPickerContent('single')}
        {this.feedback && (
          <modus-wc-input-feedback
            level={this.feedback.level}
            message={this.feedback.message}
            size={this.size}
          />
        )}
      </Host>
    );
  }
}
