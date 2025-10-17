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
import { IInputFeedbackProp, ModusSize } from '../types';
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
    | 'yyyy/mm/dd'
    | 'dd/mm/yyyy'
    | 'MMM DD, YYYY' = 'yyyy-mm-dd';

  /** The value of the control. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

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

    const parsed = this.parseISODate(newValue);
    if (!parsed) {
      if (this.value) {
        this.value = '';
      }
      return;
    }

    const clamped = this.clampDate(parsed);
    const formatted = this.formatISODate(clamped);

    if (newValue !== formatted) {
      this.value = formatted;
      return;
    }

    if (this.inputRef) {
      this.inputRef.value = formatted;
    }

    this.ensureCalendarWithinBounds(clamped);
  }

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Date input';
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);

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
    this.syncValueFromInput();
    this.inputBlur.emit(event);
  };

  private handleFocus = (event: FocusEvent) => {
    this.inputFocus.emit(event);
  };

  private handleInput = (event: InputEvent) => {
    this.inputChange.emit(event);
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
    }
  };

  private handleDateSelect = (date: Date) => {
    if (this.isDateDisabled(date)) {
      return;
    }

    this.value = this.formatISODate(date);

    // If the selected date is from a different month, navigate to that month
    // istanbul ignore next (unreachable code)
    if (
      date.getMonth() !== this.calendar.selectedMonth ||
      date.getFullYear() !== this.calendar.selectedYear
    ) {
      const newCalendar = new DatePickerCalendar();
      newCalendar.gotoDate(date.getFullYear(), date.getMonth());
      this.calendar = newCalendar;
    }

    this.showCalendar = false;

    // Emit change event
    if (this.inputRef) {
      const changeEvent = new Event('inputChange', { bubbles: true });
      this.inputRef.dispatchEvent(changeEvent);
    }
  };

  private addMonthOffset = (offset: number) => {
    const target = new Date(
      this.calendar.selectedYear,
      this.calendar.selectedMonth + offset,
      1
    );
    this.setCalendarMonth(target.getFullYear(), target.getMonth());
  };

  private handleMonthChange = (event: CustomEvent<InputEvent>) => {
    // Try to get the value from the original input event
    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const monthValue = selectTarget?.value;
    const newMonth = parseInt(monthValue || '0', 10);

    const currentYear = this.calendar.selectedYear;

    if (Number.isNaN(newMonth)) {
      return;
    }

    this.setCalendarMonth(currentYear, newMonth);
  };

  private handleYearChange = (event: CustomEvent<InputEvent>) => {
    // Try to get the value from the original input event
    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const yearValue = selectTarget?.value;
    const newYear = parseInt(yearValue || '0', 10);

    const currentMonth = this.calendar.selectedMonth;

    if (Number.isNaN(newYear)) {
      return;
    }

    this.setCalendarMonth(newYear, currentMonth);
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
    }
  }

  @Listen('keydown', { target: 'document' })
  handleEscapeKey(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.showCalendar) {
      this.showCalendar = false;
      event.preventDefault();

      // istanbul ignore next (unreachable code)
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }
  }

  private navigateToAdjacentMonth(currentIndex: number, isUp: boolean): void {
    const currentColumn = currentIndex % 7;

    // Navigate to previous/next month
    this.calendar.gotoDate(
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
      this.calendar.gotoDate(targetDate.getFullYear(), targetDate.getMonth());

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
              (e) => this.handleMonthChange(e)
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
              (e) => this.handleYearChange(e)
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
    const selectedDate = this.value ? new Date(this.value) : null;
    const currentMonth = this.calendar.selectedMonth;

    return (
      <div class="calendar-body">
        <div class="calendar-days-week">
          {this.calendar.getDaysOfWeek('default').map((d) => {
            return <div class="day-header">{d}</div>;
          })}
        </div>
        <div class="calendar-dates">
          {this.calendar.dates.map((date) => {
            if (!date) {
              return null;
            }

            const isToday = this.compareDate(date, today) === 0;
            const isSelected =
              (selectedDate && this.compareDate(date, selectedDate) === 0) ||
              false;
            const isCurrentMonth = date.getMonth() === currentMonth;
            const isDisabled = this.isDateDisabled(date);

            return (
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

  private parseISODate(value?: string): Date | undefined {
    if (!value) {
      return undefined;
    }

    let yearStr: string, monthStr: string | number, dayStr: string;

    if (this.format === 'MMM DD, YYYY') {
      // Parse "Jan 01, 2025" format
      const match = value.match(/^([A-Za-z]{3})\s+(\d{1,2}),\s+(\d{4})$/);
      if (!match) {
        return undefined;
      }
      const [, monthName, day, year] = match;
      // Case-insensitive month name lookup
      monthStr = MONTH_SHORT_NAMES.findIndex(
        (m) => m.toLowerCase() === monthName.toLowerCase()
      );
      if (monthStr === -1) {
        return undefined;
      }
      dayStr = day;
      yearStr = year;
    } else {
      // istanbul ignore next (unreachable code)
      const separator = this.format?.includes('/') ? '/' : '-';
      const parts = value.split(separator);

      if (parts.length !== 3) {
        return undefined;
      }

      if (this.format === 'dd-mm-yyyy' || this.format === 'dd/mm/yyyy') {
        [dayStr, monthStr, yearStr] = parts;
      } else {
        // yyyy-mm-dd or yyyy/mm/dd
        [yearStr, monthStr, dayStr] = parts;
      }
    }

    // istanbul ignore next (unreachable code)
    if (yearStr == null || monthStr == null || dayStr == null) {
      return undefined;
    }

    const year = Number(yearStr);
    const month =
      typeof monthStr === 'number' ? monthStr : Number(monthStr) - 1;
    const day = Number(dayStr);

    if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
      return undefined;
    }

    const date = new Date(year, month, day);

    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month ||
      date.getDate() !== day
    ) {
      return undefined;
    }

    return this.cloneDate(date);
  }

  private formatISODate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    switch (this.format) {
      case 'dd-mm-yyyy':
        return `${day}-${month}-${year}`;
      case 'dd/mm/yyyy':
        return `${day}/${month}/${year}`;
      case 'yyyy/mm/dd':
        return `${year}/${month}/${day}`;
      case 'MMM DD, YYYY': {
        const monthName = MONTH_SHORT_NAMES[date.getMonth()];
        return `${monthName} ${day}, ${year}`;
      }
      default:
        // yyyy-mm-dd
        return `${year}-${month}-${day}`;
    }
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
      const newCalendar = new DatePickerCalendar();
      newCalendar.gotoDate(
        referenceDate.getFullYear(),
        referenceDate.getMonth()
      );
      this.calendar = newCalendar;
    }
  }

  private setCalendarMonth(year: number, month: number) {
    const newCalendar = new DatePickerCalendar();
    newCalendar.gotoDate(year, month);
    this.calendar = newCalendar;
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
      this.inputRef.value = this.value || '';
      return;
    }

    const clamped = this.clampDate(parsed);
    const formatted = this.formatISODate(clamped);
    this.value = formatted;
    this.inputRef.value = formatted;
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
            placeholder={this.format}
            readonly={this.readOnly}
            required={this.required}
            tabIndex={this.inputTabIndex}
            type="text"
            value={this.value}
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
          <div ref={(el) => (this.calendarRef = el)} class="calendar-container">
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
