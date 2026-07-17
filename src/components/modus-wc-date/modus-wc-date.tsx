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
import {
  DateRangeField,
  IDateRange,
  IInputFeedbackProp,
  ModusSize,
  WeekStartDay,
} from '../types';
import {
  Attributes,
  createEffectiveIdResolver,
  inheritAriaAttributes,
} from '../utils';
import DatePickerCalendar from './utils/calendar';
import {
  formatForDisplay as formatDateForDisplay,
  getLocaleFormatGuide,
  MONTH_SHORT_NAMES,
  parseISODate as parseDateValue,
  WEEK_START_DAY_MAP,
} from './utils/date-format';
import { cloneDate, compareDate, formatISODate } from './utils/date-utils';
import { createPopperOptions } from './utils/popper-utils';
import {
  computeCaps,
  computeHoverPreviewRange,
  getRangeDayCellClasses,
  isInHighlightRun,
} from './utils/range-utils';

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
  private startPopperInstance: PopperInstance | null = null;
  private endPopperInstance: PopperInstance | null = null;
  private inputRef?: HTMLInputElement;
  private endInputRef?: HTMLInputElement;
  private calendarRef?: HTMLElement;
  private endCalendarRef?: HTMLElement;
  private locale: string = 'en-US';
  private minDate?: Date;
  private maxDate?: Date;
  private readonly resolveEffectiveId = createEffectiveIdResolver();

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Show the calendar dropdown */
  @State() private showCalendar = false;

  /** Calendar state object */
  @State() private calendar: DatePickerCalendar = new DatePickerCalendar();

  /** Currently focused date index in calendar */
  @State() private focusedDateIndex: number = -1;

  /** Whether the start calendar popover is open in range mode */
  @State() private showStartCalendar = false;

  /** Whether the end calendar popover is open in range mode */
  @State() private showEndCalendar = false;

  /** Tracks the most recently clicked endpoint in range mode (null when nothing selected) */
  @State() private anchorEndpoint: 'start' | 'end' | null = null;

  /** Hovered date during range selection — drives the dashed preview range */
  @State() private hoverDate: string = '';

  /** Calendar state object for the end (right) panel in range mode */
  @State() private endCalendar: DatePickerCalendar = new DatePickerCalendar();

  /** Tracks whether the start input currently has focus */
  private hasStartFocus = false;

  /** Tracks whether the end input currently has focus (range mode) */
  private hasEndFocus = false;

  /** Deferred keyboard focus — applied in componentDidUpdate after the calendar re-renders */
  private pendingCalendarDayFocus: {
    container?: HTMLElement;
    date: Date;
  } | null = null;

  /** Last range calendar panel that received focus — used when both are open */
  private activeRangeCalendarPanel: 'start' | 'end' | null = null;

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the input. */
  @Prop() customClass?: string = '';

  /** Whether the form control is disabled. */
  @Prop() disabled?: boolean = false;

  /** Feedback to render below the input. */
  @Prop() feedback?: IInputFeedbackProp;

  /** The ID of the start input in single mode. In range mode, the end input id is `{inputId}-end` (or `{generated-id}-end` when omitted). There is no separate prop for the end input id. */
  @Prop() inputId?: string;

  /** Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). */
  @Prop() inputTabIndex?: number;

  /** The text to display within the label. */
  @Prop() label?: string;

  /** Maximum date value. Must match the `format` prop pattern (or the locale-derived format when unset) or ISO 8601 (`YYYY-MM-DD`). */
  @Prop() max?: string;

  /** Minimum date value. Must match the `format` prop pattern (or the locale-derived format when unset) or ISO 8601 (`YYYY-MM-DD`). */
  @Prop() min?: string;

  /** Name of the form control. In range mode, the end input name is `{name}-end`. There is no separate prop for the end input name. */
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

  /** The selected date in single mode. In range mode (`type="range"`), the start date of the range. Must match the `format` prop pattern (or the locale-derived format when unset) or ISO 8601 (`YYYY-MM-DD`). Empty string when unset. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** The first day of the week for the calendar display */
  @Prop() weekStartDay?: WeekStartDay = 'sunday';

  /** Displays ISO 8601 week numbers in the calendar. Week numbers are calculated with Monday as the first day of the week. */
  @Prop() showWeekNumbers?: boolean = false;

  /** When omitted, defaults to `true` in range mode and `false` in single mode. */
  @Prop() hideOverflowDates?: boolean;

  /** Activates range mode. `value` is the start date; `endValue` is the end date. */
  @Prop() type?: 'single' | 'range' = 'single';

  /** The end date in range mode (`type="range"`). Must match the `format` prop pattern (or the locale-derived format when unset) or ISO 8601 (`YYYY-MM-DD`). Empty string when unset. Ignored in single mode. */
  @Prop({ mutable: true, reflect: true }) endValue: string = '';

  /** Event emitted when the input loses focus. In range mode, `detail.field` is `'start'` or `'end'`. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. `target.value` is always ISO 8601 (YYYY-MM-DD), or empty string when incomplete or invalid. In range mode, `detail.field` is `'start'` or `'end'`. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Event emitted when the input gains focus. In range mode, `detail.field` is `'start'` or `'end'`. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  /** Event emitted when the start (or single-mode) calendar month selection changes. */
  @StencilEvent() calendarMonthChange!: EventEmitter<number>;

  /** Event emitted when the start (or single-mode) calendar year selection changes. */
  @StencilEvent() calendarYearChange!: EventEmitter<number>;

  /** Event emitted when the end calendar month selection changes in range mode. */
  @StencilEvent() endCalendarMonthChange!: EventEmitter<number>;

  /** Event emitted when the end calendar year selection changes in range mode. */
  @StencilEvent() endCalendarYearChange!: EventEmitter<number>;

  /** Event emitted when a complete date range is selected in range mode. */
  @StencilEvent() rangeChange!: EventEmitter<IDateRange>;

  /** Re-displays the stored ISO value in the new format when the `format` prop changes. */
  @Watch('format')
  handleFormatChange() {
    if (this.value && this.inputRef) {
      const parsed = this.parseISODate(this.value);
      if (parsed) {
        this.inputRef.value = this.formatForDisplay(parsed);
      }
    }

    if (this.isRange && this.endValue && this.endInputRef) {
      const parsed = this.parseISODate(this.endValue);
      if (parsed) {
        this.endInputRef.value = this.formatForDisplay(parsed);
      }
    }
  }

  @Watch('min')
  handleMinChange(newValue?: string) {
    this.minDate = this.parseISODate(newValue);
    if (this.maxDate && this.minDate && this.minDate > this.maxDate) {
      this.maxDate = cloneDate(this.minDate);
    }
    this.ensureValueWithinBounds();
  }

  @Watch('max')
  handleMaxChange(newValue?: string) {
    this.maxDate = this.parseISODate(newValue);
    if (this.minDate && this.maxDate && this.maxDate < this.minDate) {
      this.minDate = cloneDate(this.maxDate);
    }
    this.ensureValueWithinBounds();
  }

  @Watch('value')
  handleValueChange(newValue?: string) {
    if (newValue === undefined) {
      return;
    }

    if (!newValue) {
      if (this.inputRef) {
        this.inputRef.value = '';
      }
      if (this.isRange) {
        this.normalizeRangeAnchor();
      }
      return;
    }

    // When the input has focus, the user is actively typing.
    // Allow partial/incomplete values to pass through without validation
    // so that controlled input patterns (e.g. React) work correctly.
    // Only reformat strict ISO 8601 values set programmatically; all other
    // typed/partial input passes through unchanged.
    if (this.hasStartFocus) {
      const isISO = /^\d{4}-\d{2}-\d{2}$/.test(newValue);
      if (isISO) {
        const parsed = this.parseISODate(newValue);
        if (parsed) {
          // Clamp for display only — do not write back to this.value to avoid
          // re-triggering this watcher and risking a loop in controlled-input patterns.
          if (this.inputRef) {
            this.inputRef.value = this.formatForDisplay(this.clampDate(parsed));
          }
        } else if (this.inputRef) {
          this.inputRef.value = newValue;
        }
      } else if (this.inputRef) {
        this.inputRef.value = newValue;
      }
      return;
    }

    // Prop-driven change (no focus). Parse and update the display.
    // The parent is responsible for providing a valid value; we clamp only
    // the display here and never write back to this.value from the watcher.
    const parsed = this.parseISODate(newValue);
    if (!parsed) {
      if (this.inputRef) {
        this.inputRef.value = '';
      }
      return;
    }

    const clamped = this.clampDate(parsed);
    if (this.inputRef) {
      this.inputRef.value = this.formatForDisplay(clamped);
      const event = new Event('input', { bubbles: true });
      this.inputRef.dispatchEvent(event);
    }

    this.ensureCalendarWithinBounds(clamped);

    if (this.isRange) {
      this.normalizeRangeAnchor();
    }
  }

  @Watch('weekStartDay')
  handleWeekStartDayChange() {
    // Reinitialize calendar with new first day of week
    this.calendar = new DatePickerCalendar(this.firstDayOfWeek);

    // Navigate to currently selected date if exists
    const selectedDate = this.parseISODate(this.value);
    if (selectedDate) {
      this.calendar.gotoDate(
        selectedDate.getFullYear(),
        selectedDate.getMonth()
      );
    }
  }

  @Watch('endValue')
  handleEndValueChange(newValue?: string) {
    if (newValue === undefined || !this.isRange) {
      return;
    }

    this.normalizeRangeAnchor();

    if (!newValue) {
      return;
    }

    const parsed = this.parseISODate(newValue);
    if (!parsed) {
      return;
    }

    // Navigate end calendar to the end date's month
    const newCal = new DatePickerCalendar(this.firstDayOfWeek);
    newCal.gotoDate(parsed.getFullYear(), parsed.getMonth());
    this.endCalendar = newCal;
  }

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Date input';
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
    this.calendar = new DatePickerCalendar(this.firstDayOfWeek);
    this.handleMinChange(this.min);
    this.handleMaxChange(this.max);
    this.handleValueChange(this.value);

    if (this.type === 'range') {
      const endCal = new DatePickerCalendar(this.firstDayOfWeek);
      const endDate = this.parseISODate(this.endValue);
      if (endDate) {
        endCal.gotoDate(endDate.getFullYear(), endDate.getMonth());
      } else {
        endCal.gotoDate(
          this.calendar.selectedYear,
          this.calendar.selectedMonth + 1
        );
      }
      this.endCalendar = endCal;

      // Initialize anchor from pre-set prop values so clicks work on load.
      if (this.parseISODate(this.endValue)) {
        this.anchorEndpoint = 'end';
      } else if (this.parseISODate(this.value)) {
        this.anchorEndpoint = 'start';
      }
    }
  }

  componentDidUpdate() {
    if (this.isRange) {
      if (this.showStartCalendar && this.inputRef && this.calendarRef) {
        this.setupCalendarPopper(this.inputRef, this.calendarRef, 'start');
      } else if (this.startPopperInstance) {
        this.startPopperInstance.destroy();
        this.startPopperInstance = null;
      }

      if (this.showEndCalendar && this.endInputRef && this.endCalendarRef) {
        this.setupCalendarPopper(this.endInputRef, this.endCalendarRef, 'end');
      } else if (this.endPopperInstance) {
        this.endPopperInstance.destroy();
        this.endPopperInstance = null;
      }
    } else {
      if (this.showCalendar && this.inputRef && this.calendarRef) {
        this.setupCalendarPopper(this.inputRef, this.calendarRef, 'single');
      } else if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
    }

    if (this.pendingCalendarDayFocus) {
      const { container, date } = this.pendingCalendarDayFocus;
      this.pendingCalendarDayFocus = null;
      this.focusCalendarDayButton(container, date);
    }
  }

  disconnectedCallback() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }

    if (this.startPopperInstance) {
      this.startPopperInstance.destroy();
      this.startPopperInstance = null;
    }

    if (this.endPopperInstance) {
      this.endPopperInstance.destroy();
      this.endPopperInstance = null;
    }
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

  private emitInputChange(isoValue: string, field?: DateRangeField): void {
    if (this.isRange && field) {
      this.inputChange.emit({
        target: { value: isoValue },
        field,
      } as unknown as InputEvent);
      return;
    }

    this.inputChange.emit({
      target: { value: isoValue },
    } as unknown as InputEvent);
  }

  private emitInputFocus(event: FocusEvent, field?: DateRangeField): void {
    if (this.isRange && field) {
      this.inputFocus.emit(Object.assign(event, { field }));
      return;
    }

    this.inputFocus.emit(event);
  }

  private emitInputBlur(event: FocusEvent, field?: DateRangeField): void {
    if (this.isRange && field) {
      this.inputBlur.emit(Object.assign(event, { field }));
      return;
    }

    this.inputBlur.emit(event);
  }

  private emitRangeChangeIfComplete(): void {
    const start = this.parseISODate(this.value);
    const end = this.parseISODate(this.endValue);
    if (!start || !end) {
      return;
    }

    this.rangeChange.emit({
      startDate: this.value,
      endDate: this.endValue,
    });
  }

  private focusCalendarDayButton(
    calendarContainer: HTMLElement | undefined,
    date: Date
  ): void {
    const button = calendarContainer?.querySelector(
      `.calendar-day[data-iso-date="${formatISODate(date)}"]`
    ) as HTMLElement | undefined;
    button?.focus();
  }

  private scheduleCalendarDayFocus(
    calendarContainer: HTMLElement | undefined,
    date: Date
  ): void {
    this.pendingCalendarDayFocus = { container: calendarContainer, date };
  }

  /** Whether a grid index maps to a rendered, focusable day button */
  private isFocusableCalendarIndex(
    cal: DatePickerCalendar,
    index: number
  ): boolean {
    const date = cal.dates[index];
    if (!date || this.isDateDisabled(date)) {
      return false;
    }

    if (!this.effectiveHideOverflowDates) {
      return true;
    }

    if (date.getMonth() !== cal.selectedMonth) {
      return false;
    }

    const rowIndex = Math.floor(index / 7);
    const rowIsFullyOverflow = cal.dates
      .slice(rowIndex * 7, rowIndex * 7 + 7)
      .every((d) => !d || d.getMonth() !== cal.selectedMonth);

    return !rowIsFullyOverflow;
  }

  private handleBlur = (event: FocusEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement | null;
    // istanbul ignore next (unreachable code)
    if (relatedTarget && this.el.contains(relatedTarget)) {
      // istanbul ignore next
      if (this.isRange && relatedTarget === this.endInputRef) {
        this.hasStartFocus = false;
        this.syncValueFromInput();
        this.emitInputBlur(event, 'start');
      }
      return;
    }

    // Focus is leaving the component
    this.hasStartFocus = false;
    this.syncValueFromInput();
    this.emitInputBlur(event, this.isRange ? 'start' : undefined);
  };

  private handleFocus = (event: FocusEvent) => {
    // Only emit focus if the start input didn't already have focus
    if (!this.hasStartFocus) {
      this.hasStartFocus = true;
      this.emitInputFocus(event, this.isRange ? 'start' : undefined);
    }
  };

  private handleEndFocus = (event: FocusEvent) => {
    if (!this.hasEndFocus) {
      this.hasEndFocus = true;
      this.emitInputFocus(event, 'end');
    }
  };

  private handleInput = (event: InputEvent) => {
    const rawValue = (event.target as HTMLInputElement)?.value ?? '';
    const parsed = this.parseISODate(rawValue);
    const isoValue = parsed ? formatISODate(this.clampDate(parsed)) : '';
    this.emitInputChange(isoValue, this.isRange ? 'start' : undefined);
  };

  private handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.syncValueFromInput();
    }
  };

  private handleEndInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.syncEndValueFromInput();
    }
  };

  private setupCalendarPopper(
    anchor: HTMLElement,
    calendar: HTMLElement,
    target: 'single' | 'start' | 'end'
  ): void {
    const placement = target === 'end' ? 'bottom-end' : 'bottom-start';
    const options = createPopperOptions(placement);

    if (target === 'single') {
      if (this.popperInstance) {
        this.popperInstance.destroy();
      }
      this.popperInstance = createPopper(anchor, calendar, options);
      return;
    }

    if (target === 'start') {
      if (this.startPopperInstance) {
        this.startPopperInstance.destroy();
      }
      this.startPopperInstance = createPopper(anchor, calendar, options);
      return;
    }

    if (this.endPopperInstance) {
      this.endPopperInstance.destroy();
    }
    this.endPopperInstance = createPopper(anchor, calendar, options);
  }

  private toggleCalendar = () => {
    this.showCalendar = !this.showCalendar;

    if (this.showCalendar) {
      // Single mode: navigate to selected date or today
      const selectedDate = this.parseISODate(this.value);
      this.ensureCalendarWithinBounds(selectedDate);

      if (selectedDate) {
        const selectedIndex = this.calendar.dates.findIndex(
          (date) => date && compareDate(date, selectedDate) === 0
        );
        if (selectedIndex !== -1) {
          this.focusedDateIndex = selectedIndex;
        }
      } else {
        this.ensureCalendarWithinBounds(new Date());
        this.focusedDateIndex = this.calendar.dates.findIndex(
          (date) => date && compareDate(date, new Date()) === 0
        );
      }
    } else {
      this.focusedDateIndex = -1;
    }

    if (this.inputRef) {
      this.inputRef.focus();
    }
  };

  private openStartCalendar = () => {
    this.hoverDate = '';
    this.showStartCalendar = true;
    this.activeRangeCalendarPanel = 'start';
    const startDate = this.parseISODate(this.value);
    this.ensureCalendarWithinBounds(startDate ?? new Date());
  };

  private openEndCalendar = () => {
    this.hoverDate = '';
    this.showEndCalendar = true;
    this.activeRangeCalendarPanel = 'end';
    const endCal = new DatePickerCalendar(this.firstDayOfWeek);
    const endDate = this.parseISODate(this.endValue);
    if (endDate) {
      endCal.gotoDate(endDate.getFullYear(), endDate.getMonth());
    } else {
      const startDate = this.parseISODate(this.value);
      if (startDate) {
        endCal.gotoDate(startDate.getFullYear(), startDate.getMonth() + 1);
      } else {
        const today = new Date();
        endCal.gotoDate(today.getFullYear(), today.getMonth() + 1);
      }
    }
    this.endCalendar = endCal;
  };

  private toggleStartCalendar = () => {
    if (this.showStartCalendar) {
      this.showStartCalendar = false;
      if (this.inputRef) {
        this.inputRef.focus();
      }
      return;
    }

    this.openStartCalendar();
  };

  private toggleEndCalendar = () => {
    if (this.showEndCalendar) {
      this.showEndCalendar = false;
      if (this.endInputRef) {
        this.endInputRef.focus();
      }
      return;
    }

    this.openEndCalendar();
  };

  private handleDateSelect = (date: Date) => {
    if (this.isDateDisabled(date)) {
      return;
    }

    // Clear hasStartFocus before setting value so the @Watch('value') handler
    // takes the full validation path and dispatches the input event.
    this.hasStartFocus = false;
    this.value = formatISODate(date);

    // If the selected date is from a different month, navigate to that month
    // istanbul ignore next (unreachable code)
    if (
      date.getMonth() !== this.calendar.selectedMonth ||
      date.getFullYear() !== this.calendar.selectedYear
    ) {
      const newCalendar = new DatePickerCalendar(this.firstDayOfWeek);
      newCalendar.gotoDate(date.getFullYear(), date.getMonth());
      this.calendar = newCalendar;
    }

    this.showCalendar = false;
    this.inputBlur.emit(new FocusEvent('blur', { bubbles: true }));
  };

  private addMonthOffset = (offset: number) => {
    const target = new Date(
      this.calendar.selectedYear,
      this.calendar.selectedMonth + offset,
      1
    );
    this.updateCalendarAndEmitEvents(target.getFullYear(), target.getMonth());
  };

  private addEndMonthOffset = (offset: number) => {
    const target = new Date(
      this.endCalendar.selectedYear,
      this.endCalendar.selectedMonth + offset,
      1
    );
    this.updateEndCalendarAndEmitEvents(
      target.getFullYear(),
      target.getMonth()
    );
  };

  private handleEndMonthChange = (event: CustomEvent<InputEvent>) => {
    event.stopPropagation();
    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const newMonth = parseInt(selectTarget?.value || '0', 10);
    if (Number.isNaN(newMonth)) {
      return;
    }
    this.updateEndCalendarAndEmitEvents(
      this.endCalendar.selectedYear,
      newMonth
    );
  };

  private handleEndYearChange = (event: CustomEvent<InputEvent>) => {
    event.stopPropagation();
    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const newYear = parseInt(selectTarget?.value || '0', 10);
    if (Number.isNaN(newYear)) {
      return;
    }
    this.updateEndCalendarAndEmitEvents(
      newYear,
      this.endCalendar.selectedMonth
    );
  };

  private handleRangeDateSelect = (date: Date) => {
    if (this.isDateDisabled(date)) {
      return;
    }

    if (this.hasStartFocus) {
      this.syncValueFromInput();
    }
    if (this.hasEndFocus) {
      this.syncEndValueFromInput();
    }

    this.hasStartFocus = false;
    this.hasEndFocus = false;

    const startParsed = this.parseISODate(this.value);
    const endParsed = this.parseISODate(this.endValue);

    const isOnStart = !!startParsed && compareDate(date, startParsed) === 0;
    const isOnEnd = !!endParsed && compareDate(date, endParsed) === 0;

    switch (this.rangeSelectionState) {
      case 'empty':
        this.value = formatISODate(date);
        this.normalizeRangeAnchor();
        return;

      case 'start-only':
        if (isOnStart) {
          return;
        }
        if (compareDate(date, startParsed!) >= 0) {
          this.endValue = formatISODate(date);
          this.anchorEndpoint = 'end';
          this.normalizeRangeAnchor();
          this.rangeChange.emit({
            startDate: this.value,
            endDate: formatISODate(date),
          });
        } else {
          this.value = formatISODate(date);
          this.normalizeRangeAnchor();
        }
        return;

      case 'end-only':
        if (isOnEnd) {
          this.value = this.endValue;
          this.endValue = '';
          this.normalizeRangeAnchor();
          return;
        }
        if (compareDate(date, endParsed!) > 0) {
          this.value = formatISODate(date);
          this.endValue = '';
          this.normalizeRangeAnchor();
          return;
        }
        this.value = formatISODate(date);
        this.anchorEndpoint = 'start';
        this.normalizeRangeAnchor();
        this.rangeChange.emit({
          startDate: this.value,
          endDate: this.endValue,
        });
        return;

      case 'complete':
        if (this.anchorEndpoint === null) {
          this.anchorEndpoint = 'end';
        }

        if (this.anchorEndpoint === 'start') {
          if (isOnStart) {
            this.endValue = '';
            this.normalizeRangeAnchor();
            return;
          }
          if (isOnEnd) {
            this.anchorEndpoint = 'end';
            return;
          }
          if (compareDate(date, startParsed!) < 0) {
            this.value = formatISODate(date);
            this.endValue = '';
            this.normalizeRangeAnchor();
            return;
          }
          this.endValue = formatISODate(date);
          this.anchorEndpoint = 'end';
          this.normalizeRangeAnchor();
          this.rangeChange.emit({
            startDate: this.value,
            endDate: formatISODate(date),
          });
          return;
        }

        if (this.anchorEndpoint === 'end') {
          if (isOnEnd) {
            this.value = this.endValue;
            this.endValue = '';
            this.normalizeRangeAnchor();
            return;
          }
          if (isOnStart) {
            this.anchorEndpoint = 'start';
            return;
          }
          if (compareDate(date, endParsed!) > 0) {
            this.value = formatISODate(date);
            this.endValue = '';
            this.normalizeRangeAnchor();
            return;
          }
          this.value = formatISODate(date);
          this.anchorEndpoint = 'start';
          this.emitRangeChangeIfComplete();
        }
        return;

      default: {
        const exhaustiveCheck: never = this.rangeSelectionState;
        return exhaustiveCheck;
      }
    }
  };

  private handleEndBlur = (event: FocusEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement | null;
    // istanbul ignore next (unreachable code)
    if (relatedTarget && this.el.contains(relatedTarget)) {
      // istanbul ignore next
      if (relatedTarget === this.inputRef) {
        this.hasEndFocus = false;
        this.syncEndValueFromInput();
        this.emitInputBlur(event, 'end');
      }
      return;
    }

    this.hasEndFocus = false;
    this.syncEndValueFromInput();
    this.emitInputBlur(event, 'end');
  };

  private handleEndInput = (event: InputEvent) => {
    event.stopPropagation();
    const rawValue = (event.target as HTMLInputElement)?.value ?? '';
    const parsed = this.parseISODate(rawValue);
    const isoValue = parsed ? formatISODate(this.clampDate(parsed)) : '';
    this.emitInputChange(isoValue, 'end');
  };

  private handleMonthChange = (event: CustomEvent<InputEvent>) => {
    event.stopPropagation();

    // Try to get the value from the original input event
    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const monthValue = selectTarget?.value;
    const newMonth = parseInt(monthValue || '0', 10);

    const currentYear = this.calendar.selectedYear;

    if (Number.isNaN(newMonth)) {
      return;
    }

    this.updateCalendarAndEmitEvents(currentYear, newMonth);
  };

  private handleYearChange = (event: CustomEvent<InputEvent>) => {
    event.stopPropagation();

    // Try to get the value from the original input event
    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const yearValue = selectTarget?.value;
    const newYear = parseInt(yearValue || '0', 10);

    const currentMonth = this.calendar.selectedMonth;

    if (Number.isNaN(newYear)) {
      return;
    }

    this.updateCalendarAndEmitEvents(newYear, currentMonth);
  };

  private handleDateKeyDown = (event: KeyboardEvent, date: Date) => {
    if (this.isDateDisabled(date)) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (this.isRange) {
        this.handleRangeDateSelect(date);
      } else {
        this.handleDateSelect(date);
      }
    }
  };

  @Listen('click', { target: 'document' })
  handleClickOutside(event: MouseEvent) {
    const path = event.composedPath();
    const insideComponent = path.includes(this.el);
    if (!insideComponent) {
      if (this.isRange && (this.showStartCalendar || this.showEndCalendar)) {
        this.showStartCalendar = false;
        this.showEndCalendar = false;
        this.hasStartFocus = false;
        this.hasEndFocus = false;
      } else if (this.showCalendar) {
        this.showCalendar = false;
        this.hasStartFocus = false;
      }
    }
  }

  @Listen('keydown', { target: 'document' })
  handleEscapeKey(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      if (this.isRange && (this.showStartCalendar || this.showEndCalendar)) {
        this.showStartCalendar = false;
        this.showEndCalendar = false;
        event.preventDefault();
      } else if (this.showCalendar) {
        this.showCalendar = false;
        event.preventDefault();
      }
    }
  }

  // istanbul ignore next
  private getCalendarContainerFromNode(
    focusNode?: Node | null
  ): HTMLElement | undefined {
    if (!(focusNode instanceof Node)) {
      return undefined;
    }

    let node: Node | null = focusNode;
    while (node && node !== this.el) {
      if (
        node instanceof HTMLElement &&
        node.classList.contains('calendar-container')
      ) {
        return node;
      }
      node = node.parentNode;
    }

    return undefined;
  }

  // istanbul ignore next
  private isFocusWithinCalendar(
    calendarRef: HTMLElement | undefined,
    focusNode?: Node | null
  ): boolean {
    if (!calendarRef || !(focusNode instanceof Node)) {
      return false;
    }

    let node: Node | null = focusNode;
    while (node && node !== this.el) {
      if (node === calendarRef) {
        return true;
      }
      node = node.parentNode;
    }

    const container = this.getCalendarContainerFromNode(focusNode);
    if (container) {
      return container === calendarRef;
    }

    if (calendarRef.contains(focusNode)) {
      return true;
    }

    if (
      focusNode instanceof HTMLElement &&
      focusNode.hasAttribute('data-iso-date')
    ) {
      const isoDate = focusNode.getAttribute('data-iso-date');
      return (
        calendarRef.querySelector(`[data-iso-date="${isoDate}"]`) === focusNode
      );
    }

    return false;
  }

  // istanbul ignore next
  private syncActiveRangeCalendarPanel(focusNode?: Node | null): void {
    if (!this.isRange || !(focusNode instanceof Node)) {
      return;
    }

    if (
      this.showEndCalendar &&
      this.isFocusWithinCalendar(this.endCalendarRef, focusNode)
    ) {
      this.activeRangeCalendarPanel = 'end';
      return;
    }

    if (
      this.showStartCalendar &&
      this.isFocusWithinCalendar(this.calendarRef, focusNode)
    ) {
      this.activeRangeCalendarPanel = 'start';
    }
  }

  // istanbul ignore next
  @Listen('focusin')
  handleCalendarFocusIn(event: FocusEvent) {
    this.syncActiveRangeCalendarPanel(event.target as Node | null);
  }

  // istanbul ignore next
  private getFocusedCalendarDayIsoDate(focusNode?: Node | null): string | null {
    if (!(focusNode instanceof HTMLElement)) {
      if (!(document.activeElement instanceof HTMLElement)) {
        return null;
      }

      return this.getIsoDateFromCalendarDay(document.activeElement);
    }

    return this.getIsoDateFromCalendarDay(focusNode);
  }

  // istanbul ignore next
  private getIsoDateFromCalendarDay(element: HTMLElement): string | null {
    let node: HTMLElement | null = element;
    while (node && node !== this.el) {
      if (node.hasAttribute('data-iso-date')) {
        return node.getAttribute('data-iso-date');
      }
      node = node.parentElement;
    }

    return null;
  }

  private getActiveCalendarContext(focusNode?: Node | null):
    | {
        getCal: () => DatePickerCalendar;
        getRef: () => HTMLElement | undefined;
        updateMonth: (year: number, month: number) => void;
        getValue: () => string;
      }
    | undefined {
    if (this.isRange) {
      // istanbul ignore next
      if (
        this.showEndCalendar &&
        this.isFocusWithinCalendar(this.endCalendarRef, focusNode)
      ) {
        return {
          getCal: () => this.endCalendar,
          getRef: () => this.endCalendarRef,
          updateMonth: (year, month) =>
            this.updateEndCalendarAndEmitEvents(year, month),
          getValue: () => this.endValue || this.value,
        };
      }

      // istanbul ignore next
      if (
        this.showStartCalendar &&
        this.isFocusWithinCalendar(this.calendarRef, focusNode)
      ) {
        return {
          getCal: () => this.calendar,
          getRef: () => this.calendarRef,
          updateMonth: (year, month) =>
            this.updateCalendarAndEmitEvents(year, month),
          getValue: () => this.value,
        };
      }

      // istanbul ignore next
      if (this.activeRangeCalendarPanel === 'end' && this.showEndCalendar) {
        return {
          getCal: () => this.endCalendar,
          getRef: () => this.endCalendarRef,
          updateMonth: (year, month) =>
            this.updateEndCalendarAndEmitEvents(year, month),
          getValue: () => this.endValue || this.value,
        };
      }

      // istanbul ignore next
      if (this.activeRangeCalendarPanel === 'start' && this.showStartCalendar) {
        return {
          getCal: () => this.calendar,
          getRef: () => this.calendarRef,
          updateMonth: (year, month) =>
            this.updateCalendarAndEmitEvents(year, month),
          getValue: () => this.value,
        };
      }

      if (this.showEndCalendar && !this.showStartCalendar) {
        return {
          getCal: () => this.endCalendar,
          getRef: () => this.endCalendarRef,
          updateMonth: (year, month) =>
            this.updateEndCalendarAndEmitEvents(year, month),
          getValue: () => this.endValue || this.value,
        };
      }

      if (this.showStartCalendar) {
        return {
          getCal: () => this.calendar,
          getRef: () => this.calendarRef,
          updateMonth: (year, month) =>
            this.updateCalendarAndEmitEvents(year, month),
          getValue: () => this.value,
        };
      }

      // istanbul ignore next
      if (this.showEndCalendar) {
        return {
          getCal: () => this.endCalendar,
          getRef: () => this.endCalendarRef,
          updateMonth: (year, month) =>
            this.updateEndCalendarAndEmitEvents(year, month),
          getValue: () => this.endValue || this.value,
        };
      }

      return undefined;
    }

    if (this.showCalendar) {
      return {
        getCal: () => this.calendar,
        getRef: () => this.calendarRef,
        updateMonth: (year, month) =>
          this.updateCalendarAndEmitEvents(year, month),
        getValue: () => this.value,
      };
    }

    return undefined;
  }

  private navigateToAdjacentMonth(
    active: {
      getCal: () => DatePickerCalendar;
      updateMonth: (year: number, month: number) => void;
    },
    currentIndex: number,
    isUp: boolean
  ): void {
    const cal = active.getCal();
    const currentColumn = currentIndex % 7;

    // Navigate to previous/next month
    // Date constructor will normalize out-of-bounds months (e.g., -1 → Dec of prev year, 12 → Jan of next year)
    active.updateMonth(cal.selectedYear, cal.selectedMonth + (isUp ? -1 : 1));

    const updatedCal = active.getCal();

    // Find target date in same column
    const weekRange = isUp ? [5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5];

    for (const week of weekRange) {
      const indexInWeek = week * 7 + currentColumn;
      const date = updatedCal.dates[indexInWeek];
      if (
        indexInWeek < updatedCal.dates.length &&
        date.getMonth() === updatedCal.selectedMonth &&
        this.isFocusableCalendarIndex(updatedCal, indexInWeek)
      ) {
        this.focusedDateIndex = indexInWeek;
        return;
      }
    }

    // Fallback to first/last focusable current-month date
    // istanbul ignore next
    const focusableMonthIndices = updatedCal.dates
      .map((_date, index) =>
        updatedCal.dates[index]?.getMonth() === updatedCal.selectedMonth &&
        this.isFocusableCalendarIndex(updatedCal, index)
          ? index
          : -1
      )
      .filter((index) => index !== -1);

    // istanbul ignore next
    this.focusedDateIndex = isUp
      ? (focusableMonthIndices[focusableMonthIndices.length - 1] ??
        updatedCal.dates.length - 1)
      : (focusableMonthIndices[0] ?? 0);
  }

  @Listen('keydown')
  handleArrowKeys(event: KeyboardEvent) {
    this.syncActiveRangeCalendarPanel(event.target as Node | null);
    const active = this.getActiveCalendarContext(event.target as Node | null);
    if (!active) {
      return;
    }

    const key = event.key;

    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      return;
    }

    event.preventDefault();

    let cal = active.getCal();
    const totalDates = cal.dates.length;
    let newIndex = this.focusedDateIndex;

    const focusedIsoDate = this.getFocusedCalendarDayIsoDate(
      event.target as Node | null
    );
    // istanbul ignore next
    if (focusedIsoDate) {
      const focusedDate = this.parseISODate(focusedIsoDate);
      if (focusedDate) {
        const indexFromDom = cal.dates.findIndex(
          (date) => date && compareDate(date, focusedDate) === 0
        );
        if (indexFromDom !== -1) {
          newIndex = indexFromDom;
        }
      }
    }

    // If no date is focused, start with the first date or selected date
    if (newIndex === -1) {
      const selectedDate = this.parseISODate(active.getValue());
      if (selectedDate) {
        newIndex = cal.dates.findIndex(
          (date) => date && compareDate(date, selectedDate) === 0
        );
      }
      // istanbul ignore next (unreachable code)
      if (newIndex === -1) {
        newIndex = 0;
      }
    }

    // Calculate target position for each arrow key
    let targetIndex = newIndex;
    let shouldChangeMonth = false;
    let targetDate: Date | null = null;

    // Navigate based on arrow key
    // istanbul ignore next (unreachable code)
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

    // Check if target index is valid and get the target date
    let crossMonthBoundary = targetIndex < 0 || targetIndex >= totalDates;

    if (!crossMonthBoundary) {
      targetDate = cal.dates[targetIndex];

      if (targetDate) {
        // Skip disabled / non-rendered overflow cells — keep moving in the same
        // direction until we find a focusable date or leave the grid.
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
          !this.isFocusableCalendarIndex(cal, searchIndex)
        ) {
          searchIndex += direction;
        }

        if (
          searchIndex >= 0 &&
          searchIndex < totalDates &&
          this.isFocusableCalendarIndex(cal, searchIndex)
        ) {
          targetDate = cal.dates[searchIndex];
          targetIndex = searchIndex;

          // If target date is from a different month, navigate to that month
          // istanbul ignore next (optional chaining)
          if (targetDate.getMonth() !== cal.selectedMonth) {
            shouldChangeMonth = true;
          }
          this.focusedDateIndex = targetIndex;
        } else {
          crossMonthBoundary = true;
        }
      }
    }

    if (crossMonthBoundary) {
      // Target is outside current calendar, navigate to appropriate month
      shouldChangeMonth = true;

      if (key === 'ArrowUp') {
        // Check if we can navigate to previous month
        const prevMonthDate = new Date(
          cal.selectedYear,
          cal.selectedMonth - 1,
          1
        );
        if (!this.isDateDisabled(prevMonthDate)) {
          this.navigateToAdjacentMonth(active, newIndex, true);
          shouldChangeMonth = false; // Already handled in helper
        } else {
          return;
        }
      } else if (key === 'ArrowDown') {
        // Check if we can navigate to next month
        const nextMonthDate = new Date(
          cal.selectedYear,
          cal.selectedMonth + 1,
          1
        );
        if (!this.isDateDisabled(nextMonthDate)) {
          this.navigateToAdjacentMonth(active, newIndex, false);
          shouldChangeMonth = false; // Already handled in helper
        } else {
          return;
        }
      } else if (key === 'ArrowLeft') {
        // Go to previous month's last day
        const prevMonthDate = new Date(
          cal.selectedYear,
          cal.selectedMonth - 1,
          1
        );
        targetDate = new Date(
          prevMonthDate.getFullYear(),
          prevMonthDate.getMonth() + 1,
          0
        ); // Last day of previous month

        // Only navigate if not disabled
        if (this.isDateDisabled(targetDate)) {
          return;
        }
      } else {
        // Go to next month's first day
        targetDate = new Date(cal.selectedYear, cal.selectedMonth + 1, 1); // First day of next month

        // Only navigate if not disabled
        if (this.isDateDisabled(targetDate)) {
          return;
        }
      }
    } else {
      // istanbul ignore next
      if (!targetDate) {
        return;
      }
    }

    // Handle month change if needed
    if (shouldChangeMonth && targetDate) {
      active.updateMonth(targetDate.getFullYear(), targetDate.getMonth());
      cal = active.getCal();

      // Find the target date in the new calendar
      const newTargetIndex = cal.dates.findIndex(
        // istanbul ignore next (optional chaining)
        (date) => date && compareDate(date, targetDate) === 0
      );

      // istanbul ignore next (inequality check)
      if (newTargetIndex !== -1) {
        this.focusedDateIndex = newTargetIndex;
      } else {
        // Fallback positioning
        // istanbul ignore next (fallback scenario)
        if (key === 'ArrowLeft' || key === 'ArrowUp') {
          // Focus on last current-month date
          // istanbul ignore next (fallback scenario)
          const lastCurrentMonthIndex = cal.dates
            .map((date, index) =>
              date && date.getMonth() === targetDate.getMonth() ? index : -1
            )
            .filter((index) => index !== -1)
            .pop();
          // istanbul ignore next (fallback scenario)
          this.focusedDateIndex =
            lastCurrentMonthIndex !== undefined
              ? lastCurrentMonthIndex
              : cal.dates.length - 1;
        } else {
          // Focus on first current-month date
          // istanbul ignore next (fallback scenario)
          const firstCurrentMonthIndex = cal.dates.findIndex(
            (date) => date && date.getMonth() === targetDate.getMonth()
          );
          // istanbul ignore next (fallback scenario)
          this.focusedDateIndex =
            firstCurrentMonthIndex !== -1 ? firstCurrentMonthIndex : 0;
        }
      }
    }

    // Focus the corresponding button by date — grid index ≠ button index when
    // overflow dates are hidden (blank cells have no .calendar-day button).
    const focusedDate = active.getCal().dates[this.focusedDateIndex];
    if (focusedDate) {
      this.scheduleCalendarDayFocus(active.getRef(), focusedDate);
    }
  }

  private renderCalendarHeader(
    cal: DatePickerCalendar,
    onPrev: () => void,
    onNext: () => void,
    onMonthChange: (e: CustomEvent<InputEvent>) => void,
    onYearChange: (e: CustomEvent<InputEvent>) => void
  ) {
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
            () => onPrev()
          }
          class="nav-btn"
        >
          <modus-wc-icon name="chevron_left" size="sm" />
        </modus-wc-button>

        <div class="calendar-selects">
          <modus-wc-select
            key={`month-${currentYear}-${currentMonth}`}
            class="month-select"
            value={currentMonth.toString()}
            options={monthOptions}
            onInputChange={
              // istanbul ignore next (unreachable code)
              onMonthChange
            }
            onInputBlur={
              // istanbul ignore next (unreachable code)
              (e) => e.stopPropagation()
            }
            bordered={false}
            size="sm"
          />
          <modus-wc-select
            key={`year-${currentYear}`}
            class="year-select"
            value={currentYear.toString()}
            options={yearOptions}
            onInputChange={
              // istanbul ignore next (unreachable code)
              onYearChange
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
            () => onNext()
          }
          class="nav-btn"
        >
          <modus-wc-icon name="chevron_right" size="sm" />
        </modus-wc-button>
      </div>
    );
  }

  private renderDayButton(
    date: Date,
    flags: {
      isToday: boolean;
      isCurrentMonth: boolean;
      isDisabled: boolean;
      isSelected: boolean;
      isRangeStart: boolean;
      isRangeEnd: boolean;
      isAnchor: boolean;
      isHoveredDay: boolean;
    }
  ) {
    const {
      isToday,
      isCurrentMonth,
      isDisabled,
      isSelected,
      isRangeStart,
      isRangeEnd,
      isAnchor,
      isHoveredDay,
    } = flags;

    return (
      <button
        type="button"
        class={{
          'calendar-day': true,
          'current-day': isToday,
          selected: isSelected || isRangeStart || isRangeEnd || isAnchor,
          'hover-preview-end': isHoveredDay,
          'current-month': isCurrentMonth,
          'other-month': !isCurrentMonth,
          disabled: isDisabled,
        }}
        data-iso-date={formatISODate(date)}
        disabled={isDisabled}
        onClick={() =>
          // istanbul ignore next (unreachable code)
          this.isRange
            ? this.handleRangeDateSelect(date)
            : this.handleDateSelect(date)
        }
        onMouseEnter={
          // istanbul ignore next (unreachable code)
          this.isRange && !isDisabled
            ? () => {
                this.hoverDate = formatISODate(date);
              }
            : undefined
        }
        onKeyDown={(e) => this.handleDateKeyDown(e, date)}
        tabIndex={isDisabled ? -1 : 0}
      >
        {date.getDate()}
      </button>
    );
  }

  private renderCalendarBody(cal: DatePickerCalendar) {
    const today = new Date();
    const selectedDate = this.parseISODate(this.value);
    const startDate = this.parsedStartDate;
    const endDate = this.parsedEndDate;
    const currentMonth = cal.selectedMonth;
    const weekStartNum = this.firstDayOfWeek;

    // Confirmed range bounds, sorted once. A single-day selection (start === end)
    // has no fill/pill — only the anchor's own selected circle renders.
    const hasFullRange = this.isRange && !!startDate && !!endDate;
    const isSameStartEnd =
      hasFullRange && startDate && endDate
        ? compareDate(startDate, endDate) === 0
        : false;
    let rangeLo: Date | null = null;
    let rangeHi: Date | null = null;
    if (hasFullRange && startDate && endDate && !isSameStartEnd) {
      [rangeLo, rangeHi] =
        compareDate(startDate, endDate) <= 0
          ? [startDate, endDate]
          : [endDate, startDate];
    }

    // Hover preview range — only active in range mode when an anchor is set.
    const anchorDate =
      this.anchorEndpoint === 'start'
        ? startDate
        : this.anchorEndpoint === 'end'
          ? endDate
          : null;
    const hoverParsed = this.isRange ? this.parseISODate(this.hoverDate) : null;
    const { previewStart, previewEnd } = computeHoverPreviewRange(
      anchorDate ?? null,
      this.anchorEndpoint,
      hoverParsed ?? null,
      rangeLo,
      rangeHi,
      (date) => this.isDateDisabled(date)
    );

    // The extendability affordance (dashed half on the range endpoint cap)
    // is only meaningful while the cursor is actively previewing an
    // extension past that boundary — it's derived from the same clipped
    // preview run used for the fill/border, not shown as a static hint.
    const hoveringBeforeStart =
      !!previewEnd && !!rangeLo && compareDate(previewEnd, rangeLo) < 0;
    const hoveringAfterEnd =
      !!previewStart && !!rangeHi && compareDate(previewStart, rangeHi) > 0;

    // Single source of truth for "is this date visually highlighted" —
    // confirmed selection and hover preview are both considered so
    // connectivity is computed the same way across their shared boundary.
    const isHighlighted = (d: Date): boolean => {
      const dMonth = d.getMonth();
      const inConfirmed =
        !!rangeLo &&
        !!rangeHi &&
        isInHighlightRun(d, rangeLo, rangeHi, dMonth === currentMonth);
      const inPreview =
        !!previewStart &&
        !!previewEnd &&
        isInHighlightRun(d, previewStart, previewEnd, dMonth === currentMonth);
      return inConfirmed || inPreview;
    };

    return (
      <div
        class="calendar-body"
        onMouseLeave={
          // istanbul ignore next (unreachable code)
          () => {
            this.hoverDate = '';
          }
        }
      >
        <div
          class={`calendar-days-week${this.showWeekNumbers ? ' has-week-numbers' : ''}`}
        >
          {this.showWeekNumbers && <div class="week-number-header"></div>}
          {cal.getDaysOfWeek('default', weekStartNum).map((d) => {
            return <div class="day-header">{d}</div>;
          })}
        </div>
        <div
          class={`calendar-dates${this.showWeekNumbers ? ' has-week-numbers' : ''}`}
        >
          {cal.dates.map((date, index) => {
            const rowIndex = Math.floor(index / 7);
            // A row is entirely overflow when none of its 7 dates belong to
            // the displayed month — skip rendering it completely so the
            // calendar height shrinks.
            if (this.effectiveHideOverflowDates && date) {
              const rowIsFullyOverflow = cal.dates
                .slice(rowIndex * 7, rowIndex * 7 + 7)
                .every((d) => !d || d.getMonth() !== currentMonth);
              if (rowIsFullyOverflow) {
                return null;
              }
            }

            // Add week number at the start of each row (every 7 days)
            const weekNumberElement =
              this.showWeekNumbers && index % 7 === 0 ? (
                <div
                  class="week-number"
                  aria-label={`Week ${cal.getWeekNumber(date, weekStartNum)}`}
                >
                  {cal.getWeekNumber(date, weekStartNum)}
                </div>
              ) : null;

            if (!date) {
              return weekNumberElement;
            }

            const isToday = compareDate(date, today) === 0;
            const isCurrentMonth = date.getMonth() === currentMonth;
            const isDisabled = this.isDateDisabled(date);

            // Within a retained (mixed) row, blank out individual overflow
            // cells while preserving the grid column alignment.
            if (this.effectiveHideOverflowDates && !isCurrentMonth) {
              const blankCell = (
                <div class="calendar-day-cell calendar-day-cell--empty" />
              );
              return weekNumberElement
                ? [weekNumberElement, blankCell]
                : blankCell;
            }

            // Range-mode class calculations — only when both endpoints are set.
            // isCurrentMonth guard prevents other-month overflow dates from inheriting range styles.
            const isRangeStart =
              !!rangeLo &&
              !!rangeHi &&
              isCurrentMonth &&
              !!startDate &&
              compareDate(date, startDate) === 0;
            const isRangeEnd =
              !!rangeLo &&
              !!rangeHi &&
              isCurrentMonth &&
              !!endDate &&
              compareDate(date, endDate) === 0;

            // isAnchor covers both single-date (start only) and full-range cases
            // so the anchor endpoint always appears darker.
            const isAnchor =
              this.isRange &&
              isCurrentMonth &&
              ((this.anchorEndpoint === 'start' &&
                !!startDate &&
                compareDate(date, startDate) === 0) ||
                (this.anchorEndpoint === 'end' &&
                  !!endDate &&
                  compareDate(date, endDate) === 0));

            // The confirmed range's own sorted boundary — always capped
            // regardless of neighbor connectivity, even while an adjacent
            // hover preview is active. Without this, a preview extending
            // past the boundary would make computeCaps() treat the preview
            // cell as a "connected" neighbor and flatten the confirmed
            // range's edge into a square, flush join instead of keeping its
            // own rounded cap.
            const isAtRangeLo =
              !!rangeLo && isCurrentMonth && compareDate(date, rangeLo) === 0;
            const isAtRangeHi =
              !!rangeHi && isCurrentMonth && compareDate(date, rangeHi) === 0;

            // Confirmed selection and hover preview are both "highlighted
            // runs" — a cell belongs to at most one of them (preview is
            // already clipped to exclude cells inside the confirmed range).
            const colIndex = index % 7;
            const confirmed =
              !!rangeLo &&
              !!rangeHi &&
              isInHighlightRun(date, rangeLo, rangeHi, isCurrentMonth);
            const preview =
              !!previewStart &&
              !!previewEnd &&
              isInHighlightRun(date, previewStart, previewEnd, isCurrentMonth);
            // The actively hovered date gets a solid button fill; suppressed
            // when it coincides with the anchor (anchor already renders its
            // own selected circle). Compared against the actual cursor date
            // (not previewEnd) since previewEnd is the anchor itself — not
            // the hovered cell — whenever hovering backward past the anchor.
            const isHoveredDay =
              preview &&
              !!hoverParsed &&
              compareDate(date, hoverParsed) === 0 &&
              !isAnchor;

            // Connectivity is derived once, identically for confirmed and
            // preview cells (and for the anchor), from a single shared
            // "is this neighbor highlighted" predicate — no per-role
            // row/month special-casing needed.
            const caps =
              confirmed || preview
                ? computeCaps(date, colIndex, currentMonth, isHighlighted)
                : null;

            const isSelected =
              !this.isRange &&
              ((selectedDate && compareDate(date, selectedDate) === 0) ||
                false);

            const button = this.renderDayButton(date, {
              isToday,
              isCurrentMonth,
              isDisabled,
              isSelected,
              isRangeStart,
              isRangeEnd,
              isAnchor,
              isHoveredDay,
            });

            if (this.isRange) {
              const cell = (
                <div
                  class={getRangeDayCellClasses({
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
                  })}
                >
                  {button}
                </div>
              );
              return weekNumberElement ? [weekNumberElement, cell] : cell;
            }

            // Only create array when week number exists
            return weekNumberElement ? [weekNumberElement, button] : button;
          })}
        </div>
      </div>
    );
  }

  private get effectiveFormat(): string {
    return this.format || getLocaleFormatGuide(this.locale);
  }

  private parseISODate(value?: string): Date | undefined {
    return parseDateValue(value, this.effectiveFormat, this.locale);
  }

  /** Returns the current value formatted for display, or empty string if value is absent or unparseable. */
  private get inputDisplayValue(): string {
    if (!this.value) return '';
    const parsed = this.parseISODate(this.value);
    return parsed ? this.formatForDisplay(parsed) : '';
  }

  private formatForDisplay(date: Date): string {
    return formatDateForDisplay(date, this.effectiveFormat);
  }

  private clampDate(date: Date): Date {
    let result = cloneDate(date);

    if (this.minDate && result < this.minDate) {
      result = cloneDate(this.minDate);
    }

    if (this.maxDate && result > this.maxDate) {
      result = cloneDate(this.maxDate);
    }

    return result;
  }

  private isDateDisabled(date: Date): boolean {
    if (this.minDate && date < this.minDate) {
      return true;
    }

    if (this.maxDate && date > this.maxDate) {
      return true;
    }

    return false;
  }

  private ensureValueWithinBounds() {
    if (!this.value) {
      return;
    }

    const parsed = this.parseISODate(this.value);
    if (!parsed) {
      this.value = '';
      return;
    }

    const clamped = this.clampDate(parsed);
    const formatted = formatISODate(clamped);

    if (formatted !== this.value) {
      this.value = formatted;
    }
  }

  private ensureCalendarWithinBounds(referenceDate?: Date) {
    // Allow viewing any month, just disable dates outside min/max
    if (referenceDate) {
      const newCalendar = new DatePickerCalendar(this.firstDayOfWeek);
      newCalendar.gotoDate(
        referenceDate.getFullYear(),
        referenceDate.getMonth()
      );
      this.calendar = newCalendar;
    }
  }

  private setCalendarMonth(year: number, month: number) {
    const newCalendar = new DatePickerCalendar(this.firstDayOfWeek);
    newCalendar.gotoDate(year, month);
    this.calendar = newCalendar;
  }

  private updateEndCalendarAndEmitEvents(year: number, month: number): void {
    const oldYear = this.endCalendar.selectedYear;
    const oldMonth = this.endCalendar.selectedMonth;

    const newCal = new DatePickerCalendar(this.firstDayOfWeek);
    newCal.gotoDate(year, month);
    this.endCalendar = newCal;

    if (month !== oldMonth) {
      this.endCalendarMonthChange.emit(month);
    }

    if (year !== oldYear) {
      this.endCalendarYearChange.emit(year);
    }
  }

  private updateCalendarAndEmitEvents(year: number, month: number) {
    const oldYear = this.calendar.selectedYear;
    const oldMonth = this.calendar.selectedMonth;

    this.setCalendarMonth(year, month);

    // Emit events only if the values actually changed
    if (month !== oldMonth) {
      this.calendarMonthChange.emit(month);
    }

    if (year !== oldYear) {
      this.calendarYearChange.emit(year);
    }
  }

  private syncInputToValue(
    ref: HTMLInputElement | undefined,
    getValue: () => string,
    setValue: (v: string) => void,
    getDisplayValue: () => string
  ): void {
    if (!ref) {
      return;
    }

    const value = ref.value.trim();

    if (!value) {
      if (getValue()) {
        setValue('');
      }
      return;
    }

    const parsed = this.parseISODate(value);

    if (!parsed) {
      ref.value = getDisplayValue();
      return;
    }

    const clamped = this.clampDate(parsed);
    setValue(formatISODate(clamped));
    ref.value = this.formatForDisplay(clamped);
  }

  private syncValueFromInput() {
    this.syncInputToValue(
      this.inputRef,
      () => this.value,
      (v) => {
        this.value = v;
      },
      () => this.inputDisplayValue
    );
    if (this.isRange) {
      this.normalizeRangeAnchor();
    }
  }

  private syncEndValueFromInput() {
    this.syncInputToValue(
      this.endInputRef,
      () => this.endValue,
      (v) => {
        this.endValue = v;
      },
      () => this.endInputDisplayValue
    );
    if (this.isRange) {
      this.normalizeRangeAnchor();
    }
    this.emitRangeChangeIfComplete();
  }

  private get isRange(): boolean {
    return this.type === 'range';
  }

  private get rangeSelectionState():
    | 'empty'
    | 'start-only'
    | 'end-only'
    | 'complete' {
    const hasStart = !!this.parseISODate(this.value);
    const hasEnd = !!this.parseISODate(this.endValue);
    if (hasStart && hasEnd) {
      return 'complete';
    }
    if (hasStart) {
      return 'start-only';
    }
    if (hasEnd) {
      return 'end-only';
    }
    return 'empty';
  }

  private normalizeRangeAnchor(): void {
    if (!this.isRange) {
      return;
    }

    switch (this.rangeSelectionState) {
      case 'complete':
        this.anchorEndpoint = this.anchorEndpoint ?? 'end';
        break;
      case 'start-only':
        this.anchorEndpoint = 'start';
        break;
      case 'end-only':
        this.anchorEndpoint = 'end';
        break;
      case 'empty':
        this.anchorEndpoint = null;
        break;
      default: {
        const exhaustiveCheck: never = this.rangeSelectionState;
        return exhaustiveCheck;
      }
    }
  }

  private get effectiveHideOverflowDates(): boolean {
    return this.hideOverflowDates ?? this.type === 'range';
  }

  private get firstDayOfWeek(): number {
    return WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
  }

  private get parsedStartDate(): Date | undefined {
    return this.isRange ? this.parseISODate(this.value) : undefined;
  }

  private get parsedEndDate(): Date | undefined {
    return this.isRange ? this.parseISODate(this.endValue) : undefined;
  }

  private get endInputDisplayValue(): string {
    if (!this.endValue) return '';
    const parsed = this.parseISODate(this.endValue);
    return parsed ? this.formatForDisplay(parsed) : '';
  }

  private get endInputAttributes(): Attributes {
    const attrs = { ...this.inheritedAttributes };
    const ariaLabel = attrs['aria-label'];
    delete attrs['aria-labelledby'];

    return {
      ...attrs,
      'aria-label': ariaLabel ? `${ariaLabel} end` : 'End date',
    };
  }

  render() {
    const effectiveId = this.resolveEffectiveId(this.inputId);

    if (this.isRange) {
      return this.renderRangeMode(effectiveId);
    }

    return (
      <Host>
        {this.label && (
          <modus-wc-input-label
            forId={effectiveId}
            labelText={this.label}
            required={this.required}
            size={this.size}
          />
        )}
        <div class="date-input-container">
          <input
            ref={(el) => (this.inputRef = el)}
            aria-disabled={this.disabled}
            class={this.getClasses()}
            disabled={this.disabled}
            id={effectiveId}
            name={this.name}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onInput={this.handleInput}
            onKeyDown={this.handleInputKeyDown}
            placeholder={this.effectiveFormat}
            readonly={this.readOnly}
            required={this.required}
            tabIndex={this.inputTabIndex}
            type="text"
            value={
              this.hasStartFocus
                ? (this.inputRef?.value ?? '')
                : this.inputDisplayValue
            }
            {...this.inheritedAttributes}
          />
          <modus-wc-button
            aria-label="Open calendar"
            disabled={this.disabled || this.readOnly}
            variant="borderless"
            shape="circle"
            size="xs"
            color="tertiary"
            class="calendar-icon-button"
            onButtonClick={
              // istanbul ignore next (unreachable code)
              () => this.toggleCalendar()
            }
          >
            <modus-wc-icon name="calendar_blank" size="sm" />
          </modus-wc-button>
        </div>

        {this.showCalendar && (
          <div
            ref={(el) => (this.calendarRef = el)}
            class={`calendar-container${this.showWeekNumbers ? ' has-week-numbers' : ''}${this.effectiveHideOverflowDates ? ' dynamic-height' : ''}`}
          >
            {this.renderCalendarHeader(
              this.calendar,
              // istanbul ignore next (unreachable code)
              () => this.addMonthOffset(-1),
              // istanbul ignore next (unreachable code)
              () => this.addMonthOffset(1),
              // istanbul ignore next (unreachable code)
              (e) => this.handleMonthChange(e),
              // istanbul ignore next (unreachable code)
              (e) => this.handleYearChange(e)
            )}
            {this.renderCalendarBody(this.calendar)}
          </div>
        )}

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

  private renderRangeMode(effectiveId: string) {
    // istanbul ignore next (effectiveId is always resolved by createEffectiveIdResolver)
    const endId = effectiveId ? `${effectiveId}-end` : undefined;

    return (
      <Host>
        {this.label && (
          <modus-wc-input-label
            forId={effectiveId}
            labelText={this.label}
            required={this.required}
            size={this.size}
          />
        )}
        <div class="date-range-inputs">
          <div class="date-input-container">
            <input
              ref={(el) => (this.inputRef = el)}
              aria-disabled={this.disabled}
              class={this.getClasses()}
              disabled={this.disabled}
              id={effectiveId}
              name={this.name}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              onInput={this.handleInput}
              onKeyDown={this.handleInputKeyDown}
              placeholder={this.effectiveFormat}
              readonly={this.readOnly}
              required={this.required}
              tabIndex={this.inputTabIndex}
              type="text"
              value={
                this.hasStartFocus
                  ? // istanbul ignore next (optional chaining)
                    (this.inputRef?.value ?? '')
                  : this.inputDisplayValue
              }
              {...this.inheritedAttributes}
            />
            <modus-wc-button
              aria-label="Open start calendar"
              disabled={this.disabled || this.readOnly}
              variant="borderless"
              shape="circle"
              size="xs"
              color="tertiary"
              class="calendar-icon-button"
              onButtonClick={
                // istanbul ignore next (unreachable code)
                () => this.toggleStartCalendar()
              }
            >
              <modus-wc-icon name="calendar_blank" size="sm" />
            </modus-wc-button>
          </div>
          <div class="date-input-container">
            <input
              ref={(el) => (this.endInputRef = el)}
              aria-disabled={this.disabled}
              class={this.getClasses()}
              disabled={this.disabled}
              id={endId}
              name={this.name ? `${this.name}-end` : undefined}
              onBlur={this.handleEndBlur}
              onFocus={this.handleEndFocus}
              onInput={this.handleEndInput}
              onKeyDown={this.handleEndInputKeyDown}
              placeholder={this.effectiveFormat}
              readonly={this.readOnly}
              required={this.required}
              tabIndex={this.inputTabIndex}
              type="text"
              value={
                this.hasEndFocus
                  ? // istanbul ignore next (optional chaining)
                    (this.endInputRef?.value ?? '')
                  : this.endInputDisplayValue
              }
              {...this.endInputAttributes}
            />
            <modus-wc-button
              aria-label="Open end calendar"
              disabled={this.disabled || this.readOnly}
              variant="borderless"
              shape="circle"
              size="xs"
              color="tertiary"
              class="calendar-icon-button"
              onButtonClick={
                // istanbul ignore next (unreachable code)
                () => this.toggleEndCalendar()
              }
            >
              <modus-wc-icon name="calendar_blank" size="sm" />
            </modus-wc-button>
          </div>
        </div>

        {this.showStartCalendar && (
          <div
            ref={(el) => (this.calendarRef = el)}
            class={`calendar-container${this.showWeekNumbers ? ' has-week-numbers' : ''}${this.effectiveHideOverflowDates ? ' dynamic-height' : ''}`}
          >
            {this.renderCalendarHeader(
              this.calendar,
              // istanbul ignore next (unreachable code)
              () => this.addMonthOffset(-1),
              // istanbul ignore next (unreachable code)
              () => this.addMonthOffset(1),
              // istanbul ignore next (unreachable code)
              (e) => this.handleMonthChange(e),
              // istanbul ignore next (unreachable code)
              (e) => this.handleYearChange(e)
            )}
            {this.renderCalendarBody(this.calendar)}
          </div>
        )}

        {this.showEndCalendar && (
          <div
            ref={(el) => (this.endCalendarRef = el)}
            class={`calendar-container${this.showWeekNumbers ? ' has-week-numbers' : ''}${this.effectiveHideOverflowDates ? ' dynamic-height' : ''}`}
          >
            {this.renderCalendarHeader(
              this.endCalendar,
              // istanbul ignore next (unreachable code)
              () => this.addEndMonthOffset(-1),
              // istanbul ignore next (unreachable code)
              () => this.addEndMonthOffset(1),
              // istanbul ignore next (unreachable code)
              (e) => this.handleEndMonthChange(e),
              // istanbul ignore next (unreachable code)
              (e) => this.handleEndYearChange(e)
            )}
            {this.renderCalendarBody(this.endCalendar)}
          </div>
        )}

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
