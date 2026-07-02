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

  /** Tracks whether the component currently has focus */
  private hasFocus = false;

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

  /** Maximum date value. Must match the `format` prop pattern (or the locale-derived format when unset) or ISO 8601 (`YYYY-MM-DD`). */
  @Prop() max?: string;

  /** Minimum date value. Must match the `format` prop pattern (or the locale-derived format when unset) or ISO 8601 (`YYYY-MM-DD`). */
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

  /** Hides leading/trailing dates from adjacent months. Rows that mix current-month and overflow dates blank the overflow cells; rows made entirely of overflow dates are removed, shrinking the calendar height. */
  @Prop() hideOverflowDates?: boolean = false;

  /** Activates range mode. `value` is the start date; `endValue` is the end date. */
  @Prop() type?: 'single' | 'range' = 'single';

  /** The end date value in range mode. Always ISO 8601 (YYYY-MM-DD) or empty string. */
  @Prop({ mutable: true, reflect: true }) endValue: string = '';

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
    if (newValue === undefined) {
      return;
    }

    if (!newValue) {
      if (this.inputRef) {
        this.inputRef.value = '';
      }
      return;
    }

    // When the input has focus, the user is actively typing.
    // Allow partial/incomplete values to pass through without validation
    // so that controlled input patterns (e.g. React) work correctly.
    // Only reformat strict ISO 8601 values set programmatically; all other
    // typed/partial input passes through unchanged.
    if (this.hasFocus) {
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
  }

  @Watch('weekStartDay')
  handleWeekStartDayChange() {
    // Reinitialize calendar with new first day of week
    const firstDayOfWeek =
      WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
    this.calendar = new DatePickerCalendar(firstDayOfWeek);

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

    if (!newValue) {
      return;
    }

    const parsed = this.parseISODate(newValue);
    if (!parsed) {
      return;
    }

    // Navigate end calendar to the end date's month
    const firstDayOfWeek =
      WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
    const newCal = new DatePickerCalendar(firstDayOfWeek);
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
    const firstDayOfWeek =
      WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
    this.calendar = new DatePickerCalendar(firstDayOfWeek);
    this.handleMinChange(this.min);
    this.handleMaxChange(this.max);
    this.handleValueChange(this.value);

    if (this.type === 'range') {
      const endCal = new DatePickerCalendar(firstDayOfWeek);
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
        this.setupStartPopper(this.inputRef, this.calendarRef);
      } else if (this.startPopperInstance) {
        this.startPopperInstance.destroy();
        this.startPopperInstance = null;
      }

      if (this.showEndCalendar && this.endInputRef && this.endCalendarRef) {
        this.setupEndPopper(this.endInputRef, this.endCalendarRef);
      } else if (this.endPopperInstance) {
        this.endPopperInstance.destroy();
        this.endPopperInstance = null;
      }
    } else {
      if (this.showCalendar && this.inputRef && this.calendarRef) {
        this.setupPopper(this.inputRef, this.calendarRef);
      } else if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
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

  private handleBlur = (event: FocusEvent) => {
    // Check if focus is moving to an element within the component
    const relatedTarget = event.relatedTarget as HTMLElement;
    // istanbul ignore next (unreachable code)
    if (relatedTarget && this.el.contains(relatedTarget)) {
      // Focus is moving within the component, don't emit blur
      return;
    }

    // Focus is leaving the component
    this.hasFocus = false;
    this.syncValueFromInput();
    this.inputBlur.emit(event);
  };

  private handleFocus = (event: FocusEvent) => {
    // Only emit focus if component didn't already have focus
    if (!this.hasFocus) {
      this.hasFocus = true;
      this.inputFocus.emit(event);
    }
  };

  private handleInput = (event: InputEvent) => {
    const rawValue = (event.target as HTMLInputElement)?.value ?? '';
    const parsed = this.parseISODate(rawValue);
    const isoValue = parsed ? this.formatISODate(this.clampDate(parsed)) : '';
    this.inputChange.emit({
      target: { value: isoValue },
    } as unknown as InputEvent);
  };

  private handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.syncValueFromInput();
    }
  };

  private createPopperOptions(
    placement: 'bottom-start' | 'bottom-end' = 'bottom-start'
  ) {
    const fallbackPlacements =
      placement === 'bottom-end'
        ? (['top-end', 'bottom-start', 'top-start'] as const)
        : (['top-start', 'bottom-end', 'top-end'] as const);
    return {
      placement,
      strategy: 'fixed' as const,
      modifiers: [
        { name: 'offset', options: { offset: [0, 8] } },
        {
          name: 'flip',
          options: {
            fallbackPlacements,
          },
        },
      ],
    };
  }

  private setupPopper = (anchor: HTMLElement, calendar: HTMLElement) => {
    if (this.popperInstance) {
      this.popperInstance.destroy();
    }
    this.popperInstance = createPopper(
      anchor,
      calendar,
      this.createPopperOptions('bottom-start')
    );
  };

  private setupStartPopper = (anchor: HTMLElement, calendar: HTMLElement) => {
    if (this.startPopperInstance) {
      this.startPopperInstance.destroy();
    }
    this.startPopperInstance = createPopper(
      anchor,
      calendar,
      this.createPopperOptions('bottom-start')
    );
  };

  private setupEndPopper = (anchor: HTMLElement, calendar: HTMLElement) => {
    if (this.endPopperInstance) {
      this.endPopperInstance.destroy();
    }
    this.endPopperInstance = createPopper(
      anchor,
      calendar,
      this.createPopperOptions('bottom-end')
    );
  };

  private toggleCalendar = () => {
    this.showCalendar = !this.showCalendar;

    if (this.showCalendar) {
      // Single mode: navigate to selected date or today
      const selectedDate = this.parseISODate(this.value);
      this.ensureCalendarWithinBounds(selectedDate);

      if (selectedDate) {
        const selectedIndex = this.calendar.dates.findIndex(
          (date) => date && this.compareDate(date, selectedDate) === 0
        );
        if (selectedIndex !== -1) {
          this.focusedDateIndex = selectedIndex;
        }
      } else {
        this.ensureCalendarWithinBounds(new Date());
        this.focusedDateIndex = this.calendar.dates.findIndex(
          (date) => date && this.compareDate(date, new Date()) === 0
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
    this.showStartCalendar = true;
    const startDate = this.parseISODate(this.value);
    this.ensureCalendarWithinBounds(startDate ?? new Date());
  };

  private openEndCalendar = () => {
    this.showEndCalendar = true;
    const firstDayOfWeek =
      WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
    const endCal = new DatePickerCalendar(firstDayOfWeek);
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
    } else {
      this.openStartCalendar();
    }
    if (this.inputRef) {
      this.inputRef.focus();
    }
  };

  private toggleEndCalendar = () => {
    if (this.showEndCalendar) {
      this.showEndCalendar = false;
    } else {
      this.openEndCalendar();
    }
    if (this.endInputRef) {
      this.endInputRef.focus();
    }
  };

  private handleStartInputClick = () => {
    if (this.disabled || this.readOnly) {
      return;
    }
    this.openStartCalendar();
  };

  private handleEndInputClick = () => {
    if (this.disabled || this.readOnly) {
      return;
    }
    this.openEndCalendar();
  };

  private handleDateSelect = (date: Date) => {
    if (this.isDateDisabled(date)) {
      return;
    }

    // Clear hasFocus before setting value so the @Watch('value') handler
    // takes the full validation path and dispatches the input event.
    this.hasFocus = false;
    this.value = this.formatISODate(date);

    // If the selected date is from a different month, navigate to that month
    // istanbul ignore next (unreachable code)
    if (
      date.getMonth() !== this.calendar.selectedMonth ||
      date.getFullYear() !== this.calendar.selectedYear
    ) {
      const firstDayOfWeek = WEEK_START_DAY_MAP[this.weekStartDay || 'sunday'];
      const newCalendar = new DatePickerCalendar(firstDayOfWeek);
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
    const firstDayOfWeek =
      WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
    const newCal = new DatePickerCalendar(firstDayOfWeek);
    newCal.gotoDate(
      this.endCalendar.selectedYear,
      this.endCalendar.selectedMonth + offset
    );
    this.endCalendar = newCal;
  };

  private handleEndMonthChange = (event: CustomEvent<InputEvent>) => {
    event.stopPropagation();
    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const newMonth = parseInt(selectTarget?.value || '0', 10);
    if (Number.isNaN(newMonth)) {
      return;
    }
    const firstDayOfWeek =
      WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
    const newCal = new DatePickerCalendar(firstDayOfWeek);
    newCal.gotoDate(this.endCalendar.selectedYear, newMonth);
    this.endCalendar = newCal;
  };

  private handleEndYearChange = (event: CustomEvent<InputEvent>) => {
    event.stopPropagation();
    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const newYear = parseInt(selectTarget?.value || '0', 10);
    if (Number.isNaN(newYear)) {
      return;
    }
    const firstDayOfWeek =
      WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
    const newCal = new DatePickerCalendar(firstDayOfWeek);
    newCal.gotoDate(newYear, this.endCalendar.selectedMonth);
    this.endCalendar = newCal;
  };

  private handleRangeDateSelect = (date: Date) => {
    if (this.isDateDisabled(date)) {
      return;
    }

    this.hasFocus = false;

    const startParsed = this.parseISODate(this.value);
    const endParsed = this.parseISODate(this.endValue);

    const isOnStart =
      !!startParsed && this.compareDate(date, startParsed) === 0;
    const isOnEnd = !!endParsed && this.compareDate(date, endParsed) === 0;

    // --- Case: nothing selected ---
    if (!startParsed && !endParsed) {
      this.value = this.formatISODate(date);
      this.anchorEndpoint = 'start';
      return;
    }

    // --- Case: only start set (anchor is always 'start' here) ---
    if (startParsed && !endParsed) {
      if (isOnStart) {
        // Clicking the sole start anchor keeps it — nothing changes
        return;
      }
      if (this.compareDate(date, startParsed) >= 0) {
        // On or after start → set end
        this.endValue = this.formatISODate(date);
        this.anchorEndpoint = 'end';
        this.rangeChange.emit({
          startDate: this.value,
          endDate: this.formatISODate(date),
        });
      } else {
        // Before start → move start left
        this.value = this.formatISODate(date);
        this.anchorEndpoint = 'start';
      }
      return;
    }

    // --- Case: both start and end set ---
    if (startParsed && endParsed) {
      // Defensive: if anchor was never initialized (e.g. props set externally),
      // default to 'end' so clicks are always handled.
      if (this.anchorEndpoint === null) {
        this.anchorEndpoint = 'end';
      }

      if (this.anchorEndpoint === 'start') {
        if (isOnStart) {
          // Clicking the locked anchor keeps it as start and clears end
          this.endValue = '';
          this.anchorEndpoint = 'start';
          return;
        }
        if (isOnEnd) {
          // Clicking the lighter endpoint swaps the anchor (no value change)
          this.anchorEndpoint = 'end';
          return;
        }
        if (this.compareDate(date, startParsed) < 0) {
          // Before the locked start anchor → reset, this date becomes new start
          this.value = this.formatISODate(date);
          this.endValue = '';
          this.anchorEndpoint = 'start';
          return;
        }
        // On or after start (inside range OR extending past end) → set new end
        this.endValue = this.formatISODate(date);
        this.anchorEndpoint = 'end';
        this.rangeChange.emit({
          startDate: this.value,
          endDate: this.formatISODate(date),
        });
        return;
      }

      if (this.anchorEndpoint === 'end') {
        if (isOnEnd) {
          // Clicking the locked end anchor pivots it to become the new start
          this.value = this.endValue;
          this.endValue = '';
          this.anchorEndpoint = 'start';
          return;
        }
        if (isOnStart) {
          // Clicking the lighter endpoint swaps the anchor (no value change)
          this.anchorEndpoint = 'start';
          return;
        }
        if (this.compareDate(date, endParsed) > 0) {
          // After the locked end anchor → reset, this date becomes new start
          this.value = this.formatISODate(date);
          this.endValue = '';
          this.anchorEndpoint = 'start';
          return;
        }
        // On or before end (inside range OR extending past start) → set new start
        this.value = this.formatISODate(date);
        this.anchorEndpoint = 'start';
        return;
      }
    }
  };

  private handleEndBlur = (event: FocusEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement;
    // istanbul ignore next (unreachable code)
    if (relatedTarget && this.el.contains(relatedTarget)) {
      return;
    }
    this.hasFocus = false;
    this.syncEndValueFromInput();
    this.inputBlur.emit(event);
  };

  private handleEndInput = (event: InputEvent) => {
    event.stopPropagation();
    // End date value is validated and synced on blur
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
        this.hasFocus = false;
      } else if (this.showCalendar) {
        this.showCalendar = false;
        this.hasFocus = false;
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

  private navigateToAdjacentMonth(currentIndex: number, isUp: boolean): void {
    const currentColumn = currentIndex % 7;

    // Navigate to previous/next month
    // Date constructor will normalize out-of-bounds months (e.g., -1 → Dec of prev year, 12 → Jan of next year)
    this.updateCalendarAndEmitEvents(
      this.calendar.selectedYear,
      this.calendar.selectedMonth + (isUp ? -1 : 1)
    );

    // Find target date in same column
    const weekRange = isUp ? [5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5];

    for (const week of weekRange) {
      const indexInWeek = week * 7 + currentColumn;
      // istanbul ignore next (optional chaining)
      if (
        indexInWeek < this.calendar.dates.length &&
        this.calendar.dates[indexInWeek]?.getMonth() ===
          this.calendar.selectedMonth
      ) {
        this.focusedDateIndex = indexInWeek;
        return;
      }
    }

    // Fallback to first/last current-month date
    // istanbul ignore next (fallback scenario)
    const currentMonthIndices = this.calendar.dates
      .map((date, index) =>
        date?.getMonth() === this.calendar.selectedMonth ? index : -1
      )
      .filter((index) => index !== -1);

    // istanbul ignore next (fallback scenario)
    this.focusedDateIndex = isUp
      ? (currentMonthIndices[currentMonthIndices.length - 1] ??
        this.calendar.dates.length - 1)
      : (currentMonthIndices[0] ?? 0);
  }

  @Listen('keydown')
  handleArrowKeys(event: KeyboardEvent) {
    if (!this.showCalendar) {
      return;
    }

    const key = event.key;

    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      return;
    }

    event.preventDefault();

    const totalDates = this.calendar.dates.length;
    let newIndex = this.focusedDateIndex;

    // If no date is focused, start with the first date or selected date
    if (newIndex === -1) {
      if (this.value) {
        const selectedDate = this.parseISODate(this.value);
        if (selectedDate) {
          newIndex = this.calendar.dates.findIndex(
            (date) => this.compareDate(date, selectedDate) === 0
          );
        }
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
    if (targetIndex >= 0 && targetIndex < totalDates) {
      targetDate = this.calendar.dates[targetIndex];

      if (targetDate) {
        // Skip disabled dates - keep moving in the same direction until we find a valid date
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
          this.isDateDisabled(this.calendar.dates[searchIndex])
        ) {
          searchIndex += direction;
        }

        // If we found a valid date within bounds
        if (
          searchIndex >= 0 &&
          searchIndex < totalDates &&
          this.calendar.dates[searchIndex]
        ) {
          targetDate = this.calendar.dates[searchIndex];
          targetIndex = searchIndex;
        } else {
          // No valid date found in this direction, don't move
          return;
        }

        // If target date is from a different month, navigate to that month
        // istanbul ignore next (optional chaining)
        if (targetDate.getMonth() !== this.calendar.selectedMonth) {
          shouldChangeMonth = true;
        }
        this.focusedDateIndex = targetIndex;
      }
    } else {
      // Target is outside current calendar, navigate to appropriate month
      shouldChangeMonth = true;

      if (key === 'ArrowUp') {
        // Check if we can navigate to previous month
        const prevMonthDate = new Date(
          this.calendar.selectedYear,
          this.calendar.selectedMonth - 1,
          1
        );
        if (!this.isDateDisabled(prevMonthDate)) {
          this.navigateToAdjacentMonth(newIndex, true);
          shouldChangeMonth = false; // Already handled in helper
        }
      } else if (key === 'ArrowDown') {
        // Check if we can navigate to next month
        const nextMonthDate = new Date(
          this.calendar.selectedYear,
          this.calendar.selectedMonth + 1,
          1
        );
        if (!this.isDateDisabled(nextMonthDate)) {
          this.navigateToAdjacentMonth(newIndex, false);
          shouldChangeMonth = false; // Already handled in helper
        }
      } else if (key === 'ArrowLeft') {
        // Go to previous month's last day
        const prevMonthDate = new Date(
          this.calendar.selectedYear,
          this.calendar.selectedMonth - 1,
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
        targetDate = new Date(
          this.calendar.selectedYear,
          this.calendar.selectedMonth + 1,
          1
        ); // First day of next month

        // Only navigate if not disabled
        if (this.isDateDisabled(targetDate)) {
          return;
        }
      }
    }

    // Handle month change if needed
    if (shouldChangeMonth && targetDate) {
      this.updateCalendarAndEmitEvents(
        targetDate.getFullYear(),
        targetDate.getMonth()
      );

      // Find the target date in the new calendar
      const newTargetIndex = this.calendar.dates.findIndex(
        // istanbul ignore next (optional chaining)
        (date) => date && this.compareDate(date, targetDate) === 0
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
          const lastCurrentMonthIndex = this.calendar.dates
            .map((date, index) =>
              date && date.getMonth() === targetDate.getMonth() ? index : -1
            )
            .filter((index) => index !== -1)
            .pop();
          // istanbul ignore next (fallback scenario)
          this.focusedDateIndex =
            lastCurrentMonthIndex !== undefined
              ? lastCurrentMonthIndex
              : this.calendar.dates.length - 1;
        } else {
          // Focus on first current-month date
          // istanbul ignore next (fallback scenario)
          const firstCurrentMonthIndex = this.calendar.dates.findIndex(
            (date) => date && date.getMonth() === targetDate.getMonth()
          );
          // istanbul ignore next (fallback scenario)
          this.focusedDateIndex =
            firstCurrentMonthIndex !== -1 ? firstCurrentMonthIndex : 0;
        }
      }
    }

    // Focus the corresponding button
    // istanbul ignore next (unreachable code)
    const dateButtons = this.calendarRef?.querySelectorAll('.calendar-day');
    if (dateButtons && dateButtons[this.focusedDateIndex]) {
      // istanbul ignore next (unreachable code)
      (dateButtons[this.focusedDateIndex] as HTMLElement).focus();
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

  private renderCalendarBody(cal: DatePickerCalendar) {
    const today = new Date();
    const selectedDate = this.parseISODate(this.value);
    const startDate = this.parsedStartDate;
    const endDate = this.parsedEndDate;
    const currentMonth = cal.selectedMonth;
    const weekStartNum = WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];

    // --- Hover preview range computation ---
    // Only active in range mode when an anchor is set and a date is being hovered.
    const anchorDate =
      this.anchorEndpoint === 'start'
        ? startDate
        : this.anchorEndpoint === 'end'
          ? endDate
          : null;
    const hoverParsed = this.isRange ? this.parseISODate(this.hoverDate) : null;
    let previewStart: Date | null = null;
    let previewEnd: Date | null = null;
    // Hovering directly on the anchor itself is a zero-length "extension"
    // (nothing would change on click) — skip the preview run entirely so
    // the anchor doesn't grow dashed caps on both sides with nothing to
    // connect to.
    const isHoveringAnchor =
      !!anchorDate &&
      !!hoverParsed &&
      this.compareDate(hoverParsed, anchorDate) === 0;
    if (
      anchorDate &&
      hoverParsed &&
      !isHoveringAnchor &&
      !this.isDateDisabled(hoverParsed)
    ) {
      if (this.compareDate(hoverParsed, anchorDate) >= 0) {
        previewStart = anchorDate;
        previewEnd = hoverParsed;
      } else {
        previewStart = hoverParsed;
        previewEnd = anchorDate;
      }

      // When a full range exists, preview only the extension beyond it — not
      // cells already in the confirmed selection. The extension zone touches
      // the confirmed range flush (no gap), so the neighbor-connectivity
      // model in computeCaps() joins the two runs into one continuous pill
      // without needing any special-cased "suppress this cap" logic.
      if (startDate && endDate) {
        const [rangeLo, rangeHi] =
          this.compareDate(startDate, endDate) <= 0
            ? [startDate, endDate]
            : [endDate, startDate];
        const hoverBeforeRange = this.compareDate(hoverParsed, rangeLo) < 0;
        const hoverAfterRange = this.compareDate(hoverParsed, rangeHi) > 0;
        const hoverInRange = !hoverBeforeRange && !hoverAfterRange;

        if (hoverInRange) {
          previewStart = null;
          previewEnd = null;
        } else if (hoverAfterRange) {
          const dayAfterEnd = this.addDays(rangeHi, 1);
          // istanbul ignore else (unreachable: hoverAfterRange guarantees
          // hoverParsed > rangeHi, so dayAfterEnd (rangeHi + 1) is always
          // <= hoverParsed)
          if (this.compareDate(dayAfterEnd, hoverParsed) <= 0) {
            previewStart = dayAfterEnd;
            previewEnd = hoverParsed;
          } else {
            previewStart = null;
            previewEnd = null;
          }
        } else if (hoverBeforeRange) {
          const dayBeforeStart = this.addDays(rangeLo, -1);
          // istanbul ignore else (unreachable: hoverBeforeRange guarantees
          // hoverParsed < rangeLo, so hoverParsed is always <=
          // dayBeforeStart (rangeLo - 1))
          if (this.compareDate(hoverParsed, dayBeforeStart) <= 0) {
            previewStart = hoverParsed;
            previewEnd = dayBeforeStart;
          } else {
            previewStart = null;
            previewEnd = null;
          }
        }
      }
    }

    // Confirmed range bounds, sorted. A single-day selection (start === end)
    // has no fill/pill — only the anchor's own selected circle renders.
    const hasFullRange = this.isRange && !!startDate && !!endDate;
    const isSameStartEnd =
      hasFullRange && startDate && endDate
        ? this.compareDate(startDate, endDate) === 0
        : false;
    let rangeLo: Date | null = null;
    let rangeHi: Date | null = null;
    if (hasFullRange && startDate && endDate && !isSameStartEnd) {
      [rangeLo, rangeHi] =
        this.compareDate(startDate, endDate) <= 0
          ? [startDate, endDate]
          : [endDate, startDate];
    }

    // The extendability affordance (dashed half on the range endpoint cap)
    // is only meaningful while the cursor is actively previewing an
    // extension past that boundary — it's derived from the same clipped
    // preview run used for the fill/border, not shown as a static hint.
    const hoveringBeforeStart =
      !!previewEnd && !!rangeLo && this.compareDate(previewEnd, rangeLo) < 0;
    const hoveringAfterEnd =
      !!previewStart &&
      !!rangeHi &&
      this.compareDate(previewStart, rangeHi) > 0;

    // Single source of truth for "is this date visually highlighted" —
    // confirmed selection and hover preview are both considered so
    // connectivity is computed the same way across their shared boundary.
    const isHighlighted = (d: Date): boolean => {
      const dMonth = d.getMonth();
      const inConfirmed =
        !!rangeLo &&
        !!rangeHi &&
        this.isInHighlightRun(d, rangeLo, rangeHi, dMonth === currentMonth);
      const inPreview =
        !!previewStart &&
        !!previewEnd &&
        this.isInHighlightRun(
          d,
          previewStart,
          previewEnd,
          dMonth === currentMonth
        );
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
            if (this.hideOverflowDates && date) {
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

            const isToday = this.compareDate(date, today) === 0;
            const isCurrentMonth = date.getMonth() === currentMonth;
            const isDisabled = this.isDateDisabled(date);

            // Within a retained (mixed) row, blank out individual overflow
            // cells while preserving the grid column alignment.
            if (this.hideOverflowDates && !isCurrentMonth) {
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
              this.compareDate(date, startDate) === 0;
            const isRangeEnd =
              !!rangeLo &&
              !!rangeHi &&
              isCurrentMonth &&
              !!endDate &&
              this.compareDate(date, endDate) === 0;

            // isAnchor covers both single-date (start only) and full-range cases
            // so the anchor endpoint always appears darker.
            const isAnchor =
              this.isRange &&
              isCurrentMonth &&
              ((this.anchorEndpoint === 'start' &&
                !!startDate &&
                this.compareDate(date, startDate) === 0) ||
                (this.anchorEndpoint === 'end' &&
                  !!endDate &&
                  this.compareDate(date, endDate) === 0));

            // The confirmed range's own sorted boundary — always capped
            // regardless of neighbor connectivity, even while an adjacent
            // hover preview is active. Without this, a preview extending
            // past the boundary would make computeCaps() treat the preview
            // cell as a "connected" neighbor and flatten the confirmed
            // range's edge into a square, flush join instead of keeping its
            // own rounded cap.
            const isAtRangeLo =
              !!rangeLo &&
              isCurrentMonth &&
              this.compareDate(date, rangeLo) === 0;
            const isAtRangeHi =
              !!rangeHi &&
              isCurrentMonth &&
              this.compareDate(date, rangeHi) === 0;

            // Confirmed selection and hover preview are both "highlighted
            // runs" — a cell belongs to at most one of them (preview is
            // already clipped to exclude cells inside the confirmed range).
            const colIndex = index % 7;
            const confirmed =
              !!rangeLo &&
              !!rangeHi &&
              this.isInHighlightRun(date, rangeLo, rangeHi, isCurrentMonth);
            const preview =
              !!previewStart &&
              !!previewEnd &&
              this.isInHighlightRun(
                date,
                previewStart,
                previewEnd,
                isCurrentMonth
              );
            // The actively hovered date gets a solid button fill; suppressed
            // when it coincides with the anchor (anchor already renders its
            // own selected circle). Compared against the actual cursor date
            // (not previewEnd) since previewEnd is the anchor itself — not
            // the hovered cell — whenever hovering backward past the anchor.
            const isHoveredDay =
              preview &&
              !!hoverParsed &&
              this.compareDate(date, hoverParsed) === 0 &&
              !isAnchor;

            // Connectivity is derived once, identically for confirmed and
            // preview cells (and for the anchor), from a single shared
            // "is this neighbor highlighted" predicate — no per-role
            // row/month special-casing needed.
            const caps =
              confirmed || preview
                ? this.computeCaps(date, colIndex, currentMonth, isHighlighted)
                : null;

            // Single-mode selection
            const isSelected =
              !this.isRange &&
              ((selectedDate && this.compareDate(date, selectedDate) === 0) ||
                false);

            const button = (
              <button
                type="button"
                class={{
                  'calendar-day': true,
                  'current-day': isToday,
                  selected:
                    isSelected || isRangeStart || isRangeEnd || isAnchor,
                  'hover-preview-end': isHoveredDay,
                  'current-month': isCurrentMonth,
                  'other-month': !isCurrentMonth,
                  disabled: isDisabled,
                }}
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
                        this.hoverDate = this.formatISODate(date);
                      }
                    : undefined
                }
                onKeyDown={(e) => this.handleDateKeyDown(e, date)}
                tabIndex={isDisabled ? -1 : 0}
              >
                {date.getDate()}
              </button>
            );

            if (this.isRange) {
              const cell = (
                <div
                  class={{
                    'calendar-day-cell': true,
                    'range-start': isRangeStart,
                    'range-end': isRangeEnd,
                    'range-anchor': isAnchor,
                    'range-fill': confirmed && !isAnchor,
                    'range-cap-left': this.shouldApplyRangeCapLeft(
                      confirmed,
                      isAnchor,
                      caps,
                      isAtRangeLo
                    ),
                    'range-cap-right': this.shouldApplyRangeCapRight(
                      confirmed,
                      isAnchor,
                      caps,
                      isAtRangeHi
                    ),
                    // Directional extendability hint: only rendered on the
                    // range-start/range-end cap while the cursor is actively
                    // previewing an extension past that side — not shown as
                    // a permanent default decoration.
                    'hover-affordance-left':
                      this.shouldApplyHoverAffordanceLeft(
                        isRangeStart,
                        isAnchor,
                        caps,
                        hoveringBeforeStart,
                        isAtRangeLo
                      ),
                    'hover-affordance-right':
                      this.shouldApplyHoverAffordanceRight(
                        isRangeEnd,
                        isAnchor,
                        caps,
                        hoveringAfterEnd,
                        isAtRangeHi
                      ),
                    'hover-fill': preview && !isAnchor,
                    // Cap classes carry only border + radius (no fill), so
                    // they're safe to share with the anchor — its own circle
                    // still reads as the visual endpoint, but the wrapper's
                    // outline now closes into a proper rounded cap on
                    // whichever side doesn't connect, instead of leaving a
                    // square corner poking out from a flat, unrounded edge.
                    'hover-cap-left': this.shouldApplyHoverCapLeft(
                      preview,
                      caps
                    ),
                    'hover-cap-right': this.shouldApplyHoverCapRight(
                      preview,
                      caps
                    ),
                    // Top/bottom connecting border for the anchor while it
                    // participates in an active preview — combined with the
                    // cap classes above, this closes into a full outline
                    // (flat where it connects to a neighbor, rounded where
                    // it doesn't).
                    'anchor-preview-connector': isAnchor && preview,
                    // The anchor never gets a rounded fill cap (that would
                    // mismatch its circle and reintroduce a halo), but when
                    // it sits inside a confirmed range it still needs the
                    // same flat fill as its neighbors — otherwise a white
                    // gap appears where the pill background stops short.
                    'range-anchor-fill':
                      isAnchor &&
                      confirmed &&
                      !!caps &&
                      (!caps.capLeft || !caps.capRight),
                  }}
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

  private compareDate(date1: Date, date2: Date): number {
    if (!date1 && !date2) {
      return 0;
    } else if (!date1 && date2) {
      return -1;
    } else if (date1 && !date2) {
      return 1;
    }

    let delta: number;

    delta = date1.getFullYear() - date2.getFullYear();
    if (delta !== 0) {
      return delta;
    }

    delta = date1.getMonth() - date2.getMonth();
    if (delta !== 0) {
      return delta;
    }

    return date1.getDate() - date2.getDate();
  }

  private addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  /**
   * Shared membership test for both the confirmed range and the hover
   * preview: is `date` inside the inclusive [lo, hi] run, and part of the
   * displayed month? Used as the single source of truth for "is this cell
   * highlighted" so caps/fills are derived identically for both cases.
   */
  private isInHighlightRun(
    date: Date,
    lo: Date,
    hi: Date,
    isCurrentMonth: boolean
  ): boolean {
    return (
      isCurrentMonth &&
      this.compareDate(date, lo) >= 0 &&
      this.compareDate(date, hi) <= 0
    );
  }

  private shouldApplyRangeCapLeft(
    confirmed: boolean,
    isAnchor: boolean,
    caps: { capLeft: boolean; capRight: boolean } | null,
    isAtRangeLo: boolean
  ): boolean {
    return confirmed && !isAnchor && (!!caps?.capLeft || isAtRangeLo);
  }

  private shouldApplyRangeCapRight(
    confirmed: boolean,
    isAnchor: boolean,
    caps: { capLeft: boolean; capRight: boolean } | null,
    isAtRangeHi: boolean
  ): boolean {
    return confirmed && !isAnchor && (!!caps?.capRight || isAtRangeHi);
  }

  private shouldApplyHoverAffordanceLeft(
    isRangeStart: boolean,
    _isAnchor: boolean,
    caps: { capLeft: boolean; capRight: boolean } | null,
    hoveringBeforeStart: boolean,
    isAtRangeLo: boolean
  ): boolean {
    // The affordance applies regardless of whether this cell is the anchor —
    // when hovering before the confirmed start, the start cell (anchor or not)
    // always needs the left-half dashed hint so the user can see it's extendable.
    return isRangeStart && (!!caps?.capLeft || isAtRangeLo) && hoveringBeforeStart;
  }

  private shouldApplyHoverAffordanceRight(
    isRangeEnd: boolean,
    _isAnchor: boolean,
    caps: { capLeft: boolean; capRight: boolean } | null,
    hoveringAfterEnd: boolean,
    isAtRangeHi: boolean
  ): boolean {
    return isRangeEnd && (!!caps?.capRight || isAtRangeHi) && hoveringAfterEnd;
  }

  private shouldApplyHoverCapLeft(
    preview: boolean,
    caps: { capLeft: boolean; capRight: boolean } | null
  ): boolean {
    return preview && !!caps?.capLeft;
  }

  private shouldApplyHoverCapRight(
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
  private computeCaps(
    date: Date,
    colIndex: number,
    currentMonth: number,
    isMember: (d: Date) => boolean
  ): { capLeft: boolean; capRight: boolean } {
    const prevDay = this.addDays(date, -1);
    const nextDay = this.addDays(date, 1);
    const connectsLeft =
      colIndex > 0 && prevDay.getMonth() === currentMonth && isMember(prevDay);
    const connectsRight =
      colIndex < 6 && nextDay.getMonth() === currentMonth && isMember(nextDay);
    return { capLeft: !connectsLeft, capRight: !connectsRight };
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

  /** Returns the current value formatted for display, or empty string if value is absent or unparseable. */
  private get inputDisplayValue(): string {
    if (!this.value) return '';
    const parsed = this.parseISODate(this.value);
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

  private clampDate(date: Date): Date {
    let result = this.cloneDate(date);

    if (this.minDate && result < this.minDate) {
      result = this.cloneDate(this.minDate);
    }

    if (this.maxDate && result > this.maxDate) {
      result = this.cloneDate(this.maxDate);
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
    const formatted = this.formatISODate(clamped);

    if (formatted !== this.value) {
      this.value = formatted;
    }
  }

  private ensureCalendarWithinBounds(referenceDate?: Date) {
    // Allow viewing any month, just disable dates outside min/max
    if (referenceDate) {
      const firstDayOfWeek =
        WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
      const newCalendar = new DatePickerCalendar(firstDayOfWeek);
      newCalendar.gotoDate(
        referenceDate.getFullYear(),
        referenceDate.getMonth()
      );
      this.calendar = newCalendar;
    }
  }

  private setCalendarMonth(year: number, month: number) {
    const firstDayOfWeek =
      WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay];
    const newCalendar = new DatePickerCalendar(firstDayOfWeek);
    newCalendar.gotoDate(year, month);
    this.calendar = newCalendar;
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

  private syncValueFromInput() {
    if (!this.inputRef) {
      return;
    }

    const value = this.inputRef.value.trim();

    if (!value) {
      if (this.value) {
        this.value = '';
      }
      return;
    }

    const parsed = this.parseISODate(value);

    if (!parsed) {
      this.inputRef.value = this.inputDisplayValue;
      return;
    }

    const clamped = this.clampDate(parsed);
    this.value = this.formatISODate(clamped);
    this.inputRef.value = this.formatForDisplay(clamped);
  }

  private syncEndValueFromInput() {
    if (!this.endInputRef) {
      return;
    }

    const value = this.endInputRef.value.trim();

    if (!value) {
      if (this.endValue) {
        this.endValue = '';
      }
      return;
    }

    const parsed = this.parseISODate(value);

    if (!parsed) {
      this.endInputRef.value = this.endInputDisplayValue;
      return;
    }

    const clamped = this.clampDate(parsed);
    this.endValue = this.formatISODate(clamped);
    this.endInputRef.value = this.formatForDisplay(clamped);
  }

  private get isRange(): boolean {
    return this.type === 'range';
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
              this.hasFocus
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
            class={`calendar-container${this.showWeekNumbers ? ' has-week-numbers' : ''}${this.hideOverflowDates ? ' dynamic-height' : ''}`}
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
              onClick={this.handleStartInputClick}
              onFocus={this.handleFocus}
              onInput={this.handleInput}
              onKeyDown={this.handleInputKeyDown}
              placeholder={this.effectiveFormat}
              readonly={this.readOnly}
              required={this.required}
              tabIndex={this.inputTabIndex}
              type="text"
              value={
                this.hasFocus
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
              onClick={this.handleEndInputClick}
              onFocus={this.handleFocus}
              onInput={this.handleEndInput}
              onKeyDown={this.handleInputKeyDown}
              placeholder={this.effectiveFormat}
              readonly={this.readOnly}
              tabIndex={this.inputTabIndex}
              type="text"
              value={this.endInputDisplayValue}
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
            class={`calendar-container${this.showWeekNumbers ? ' has-week-numbers' : ''}${this.hideOverflowDates ? ' dynamic-height' : ''}`}
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
            class={`calendar-container${this.showWeekNumbers ? ' has-week-numbers' : ''}${this.hideOverflowDates ? ' dynamic-height' : ''}`}
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
