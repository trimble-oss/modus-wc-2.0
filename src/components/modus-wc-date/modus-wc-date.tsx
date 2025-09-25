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
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-date.tailwind';
import { IInputFeedbackProp, ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import DatePickerCalendar from './utils/calendar';

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

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Show the calendar dropdown */
  @State() showCalendar = false;

  /** Calendar state object */
  @State() calendar: DatePickerCalendar = new DatePickerCalendar();

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

  /** The value of the control (yyyy-mm-dd). */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Date input';
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidUpdate() {
    if (this.showCalendar && this.inputRef && this.calendarRef) {
      this.setupPopper();
      // Navigate calendar to the selected date if one exists
      if (this.value) {
        const selectedDate = new Date(this.value);
        if (!isNaN(selectedDate.getTime())) {
          this.calendar.gotoDate(
            selectedDate.getFullYear(),
            selectedDate.getMonth()
          );
        }
      }
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
  };

  private handleCalendarIconClick = () => {
    this.toggleCalendar();
  };

  private handleDateSelect = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    this.value = `${year}-${month}-${day}`;
    this.showCalendar = false;

    // Emit change event
    if (this.inputRef) {
      const changeEvent = new Event('change', { bubbles: true });
      this.inputRef.dispatchEvent(changeEvent);
    }
  };

  private addMonthOffset = (offset: number) => {
    const newCalendar = new DatePickerCalendar();
    newCalendar.gotoDate(
      this.calendar.selectedYear,
      this.calendar.selectedMonth + offset
    );
    this.calendar = newCalendar;
  };

  private handleMonthChange = (event: CustomEvent<InputEvent>) => {
    // Try to get the value from the original input event
    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const monthValue = selectTarget?.value;
    const newMonth = parseInt(monthValue || '0', 10);

    // Get the current year from the year select element, not from calendar state
    const yearSelect = this.calendarRef?.querySelector(
      '.year-select'
    ) as HTMLSelectElement;
    const currentYear = yearSelect
      ? parseInt(yearSelect.value || '0', 10)
      : this.calendar.selectedYear;

    // Create new calendar and immediately set the correct date
    const newCalendar = new DatePickerCalendar();
    newCalendar.gotoDate(currentYear, newMonth);
    this.calendar = newCalendar;
  };

  private handleYearChange = (event: CustomEvent<InputEvent>) => {
    // Try to get the value from the original input event
    const inputEvent = event.detail;
    const selectTarget = inputEvent?.target as HTMLSelectElement;
    const yearValue = selectTarget?.value;
    const newYear = parseInt(yearValue || '0', 10);

    // Get the current month from the month select element, not from calendar state
    const monthSelect = this.calendarRef?.querySelector(
      '.month-select'
    ) as HTMLSelectElement;
    const currentMonth = monthSelect
      ? parseInt(monthSelect.value || '0', 10)
      : this.calendar.selectedMonth;

    // Create new calendar and immediately set the correct date
    const newCalendar = new DatePickerCalendar();
    newCalendar.gotoDate(newYear, currentMonth);
    this.calendar = newCalendar;
  };

  private handleDateKeyDown = (event: KeyboardEvent, date: Date) => {
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

  private renderCalendarHeader() {
    const currentYear = this.calendar.selectedYear;
    const currentMonth = this.calendar.selectedMonth;

    // Generate year options (current year ± 10 years)
    const yearOptions: { value: string; label: string }[] = [];
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
      yearOptions.push({ value: i.toString(), label: i.toString() });
    }

    // Generate month options
    const monthOptions = [
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
    ].map((month, index) => ({ value: index.toString(), label: month }));

    return (
      <div class="calendar-header">
        <modus-wc-button
          type="button"
          aria-label="Previous"
          variant="borderless"
          shape="circle"
          size="xs"
          onClick={() => this.addMonthOffset(-1)}
          class="nav-btn"
        >
          <modus-wc-icon name="chevron_left" size="sm" />
        </modus-wc-button>

        <div class="calendar-selects">
          <modus-wc-select
            key={`month-${currentMonth}`}
            class="month-select"
            value={currentMonth.toString()}
            options={monthOptions}
            onInputChange={(e) => this.handleMonthChange(e)}
            bordered={false}
            size="md"
          />
          <modus-wc-select
            key={`year-${currentYear}`}
            class="year-select"
            value={currentYear.toString()}
            options={yearOptions}
            onInputChange={(e) => this.handleYearChange(e)}
            bordered={false}
            size="md"
          />
        </div>

        <modus-wc-button
          type="button"
          aria-label="Next"
          variant="borderless"
          shape="circle"
          size="xs"
          onClick={() => this.addMonthOffset(1)}
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

    // Get day of the week and prepare blank cells to render the calendar dates properly
    const firstDay = new Date(
      this.calendar.selectedYear,
      this.calendar.selectedMonth
    )?.getDay();
    const blankDatesArr = new Array(firstDay).fill(0);

    return (
      <div class="calendar-body">
        <div class="calendar-days-week">
          {this.calendar.getDaysOfWeek('default').map((d) => {
            return <div class="day-header">{d}</div>;
          })}
        </div>
        <div class="calendar-dates">
          {blankDatesArr &&
            blankDatesArr.length > 0 &&
            blankDatesArr.map(() => {
              return <div class="calendar-day blank"></div>;
            })}
          {this.calendar.dates.map((date) => {
            if (!date) {
              return null;
            }

            const isToday = this.compareDate(date, today) === 0;
            const isSelected =
              (selectedDate && this.compareDate(date, selectedDate) === 0) ||
              false;

            return (
              <button
                type="button"
                class={{
                  'calendar-day': true,
                  'current-day': isToday,
                  selected: isSelected,
                }}
                onClick={() => this.handleDateSelect(date)}
                onKeyDown={(e) => this.handleDateKeyDown(e, date)}
                tabIndex={0}
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
            placeholder="yyyy-mm-dd"
            readonly={this.readOnly}
            required={this.required}
            tabIndex={this.inputTabIndex}
            type="text"
            value={this.value}
            {...this.inheritedAttributes}
          />
          <button
            type="button"
            class="calendar-icon-button"
            onClick={this.handleCalendarIconClick}
            aria-label="Open calendar"
          >
            <modus-wc-icon name="calendar" size="sm" />
          </button>
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
