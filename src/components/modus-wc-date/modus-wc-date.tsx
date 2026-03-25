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
  private inputRef?: HTMLInputElement;
  private calendarRef?: HTMLElement;
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

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  /** Event emitted when the calendar month selection changes. */
  @StencilEvent() calendarMonthChange!: EventEmitter<number>;

  /** Event emitted when the calendar year selection changes. */
  @StencilEvent() calendarYearChange!: EventEmitter<number>;

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
  }

  componentDidUpdate() {
    if (this.showCalendar && this.inputRef && this.calendarRef) {
      this.setupPopper();
    } else if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  disconnectedCallback() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
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
    this.inputChange.emit(event);
  };

  private handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.syncValueFromInput();
    }
  };

  private setupPopper = () => {
    if (this.popperInstance) {
      this.popperInstance.destroy();
    }

    this.popperInstance = createPopper(this.inputRef!, this.calendarRef!, {
      placement: 'bottom-start',
      strategy: 'fixed',
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
    });
  };

  private toggleCalendar = () => {
    this.showCalendar = !this.showCalendar;

    // If opening the calendar and there's a selected date, navigate to it
    if (this.showCalendar) {
      const selectedDate = this.parseISODate(this.value);
      this.ensureCalendarWithinBounds(selectedDate);

      // Set focus to the selected date if it exists
      if (selectedDate) {
        const selectedIndex = this.calendar.dates.findIndex(
          (date) => date && this.compareDate(date, selectedDate) === 0
        );
        if (selectedIndex !== -1) {
          this.focusedDateIndex = selectedIndex;
        }
      }
      // set focus to today
      else {
        this.ensureCalendarWithinBounds(new Date());
        this.focusedDateIndex = this.calendar.dates.findIndex(
          (date) => date && this.compareDate(date, new Date()) === 0
        );
      }
    } else {
      // Reset focus when closing
      this.focusedDateIndex = -1;
    }
    // Always ensure input is focused when toggling calendar (opening or closing)
    if (this.inputRef) {
      this.inputRef.focus();
    }
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
      this.handleDateSelect(date);
    }
  };

  @Listen('click', { target: 'document' })
  handleClickOutside(event: MouseEvent) {
    const path = event.composedPath();
    const insideComponent = path.includes(this.el);
    if (!insideComponent && this.showCalendar) {
      this.showCalendar = false;
      this.hasFocus = false;
    }
  }

  @Listen('keydown', { target: 'document' })
  handleEscapeKey(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.showCalendar) {
      this.showCalendar = false;
      event.preventDefault();
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

  private renderCalendarHeader() {
    const currentYear = this.calendar.selectedYear;
    const currentMonth = this.calendar.selectedMonth;

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
            () => this.addMonthOffset(-1)
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
              (e) => this.handleMonthChange(e as CustomEvent<InputEvent>)
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
              (e) => this.handleYearChange(e as CustomEvent<InputEvent>)
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
            () => this.addMonthOffset(1)
          }
          class="nav-btn"
        >
          <modus-wc-icon name="chevron_right" size="sm" />
        </modus-wc-button>
      </div>
    );
  }

  private renderCalendarBody() {
    const today = new Date();
    const selectedDate = this.parseISODate(this.value);
    const currentMonth = this.calendar.selectedMonth;

    return (
      <div class="calendar-body">
        <div
          class={`calendar-days-week${this.showWeekNumbers ? ' has-week-numbers' : ''}`}
        >
          {this.showWeekNumbers && <div class="week-number-header"></div>}
          {this.calendar
            .getDaysOfWeek(
              'default',
              WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay]
            )
            .map((d) => {
              return <div class="day-header">{d}</div>;
            })}
        </div>
        <div
          class={`calendar-dates${this.showWeekNumbers ? ' has-week-numbers' : ''}`}
        >
          {this.calendar.dates.map((date, index) => {
            // Add week number at the start of each row (every 7 days)
            const weekNumberElement =
              this.showWeekNumbers && index % 7 === 0 ? (
                <div
                  class="week-number"
                  aria-label={`Week ${this.calendar.getWeekNumber(date, WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay])}`}
                >
                  {this.calendar.getWeekNumber(
                    date,
                    WEEK_START_DAY_MAP[this.weekStartDay as WeekStartDay]
                  )}
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
            const isDisabled = this.isDateDisabled(date);

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
                onClick={() => this.handleDateSelect(date)}
                onKeyDown={(e) => this.handleDateKeyDown(e, date)}
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

  render() {
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
        <div class="date-input-container">
          <input
            ref={(el) => (this.inputRef = el)}
            aria-disabled={this.disabled}
            class={this.getClasses()}
            disabled={this.disabled}
            id={this.inputId}
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
            value={this.hasFocus ? undefined : this.inputDisplayValue}
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
            class={`calendar-container${this.showWeekNumbers ? ' has-week-numbers' : ''}`}
          >
            {this.renderCalendarHeader()}
            {this.renderCalendarBody()}
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
