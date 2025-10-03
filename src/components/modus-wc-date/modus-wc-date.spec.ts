import { newSpecPage } from '@stencil/core/testing';
import { ModusWcDate } from './modus-wc-date';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { IInputFeedbackProp } from '../types';

describe('modus-wc-date', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Default date"></modus-wc-date>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: `<modus-wc-date
        aria-describedby="description"
        aria-label="Test date"
        aria-labelledby="Another element"
        auto-focus="true"
        bordered="false"
        custom-class="test-class"
        disabled="true"
        input-id="custom-id"
        input-tab-index="1"
        label="Test label"
        max="11/25/2024"
        min="11/20/2024"
        name="test-name"
        readonly="true"
        required="true"
        size="lg"
        value="Test value"
      ></modus-wc-date>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with error feedback', async () => {
    const feedback: IInputFeedbackProp = {
      level: 'error',
      message: 'Test error message',
    };
    const page = await newSpecPage({
      components: [ModusWcDate, ModusWcInputFeedback],
      html: '<modus-wc-date aria-label="Error input"></modus-wc-date>',
    });

    // Set feedback attribute
    const component = page.rootInstance as ModusWcDate;
    component.feedback = feedback;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Blur test"></modus-wc-date>',
    });
    const date = page.root!.querySelector('input');
    expect(date).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    date!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Change test"></modus-wc-date>',
    });
    const date = page.root!.querySelector('input');
    expect(date).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    date!.value = 'New value';
    date!.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.any(Event),
      })
    );
  });

  it('should emit focus event', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Focus test"></modus-wc-date>',
    });
    const date = page.root!.querySelector('input');
    expect(date).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    date!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should toggle calendar when calendar icon is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Calendar toggle test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;
    const calendarButton = page.root!.querySelector(
      '.calendar-icon-button'
    ) as HTMLButtonElement;

    expect(component.showCalendar).toBe(false);

    calendarButton.click();
    await page.waitForChanges();

    expect(component.showCalendar).toBe(true);
    expect(page.root!.querySelector('.calendar-container')).not.toBeNull();

    calendarButton.click();
    await page.waitForChanges();

    expect(component.showCalendar).toBe(false);
  });

  it('should close calendar on Escape key', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Escape key test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);
    await page.waitForChanges();

    expect(component.showCalendar).toBe(false);
  });

  it('should handle date selection from calendar', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Date selection test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const testDate = new Date(2025, 9, 15);
    component['handleDateSelect'](testDate);
    await page.waitForChanges();

    expect(component.value).toBe('2025-10-15');
    expect(component.showCalendar).toBe(false);
  });

  it('should enforce min date constraint', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Min date test" min="2025-10-10" value="2025-10-05"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    await page.waitForChanges();

    expect(component.value).toBe('2025-10-10');
  });

  it('should enforce max date constraint', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Max date test" max="2025-10-20" value="2025-10-25"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    await page.waitForChanges();

    expect(component.value).toBe('2025-10-20');
  });

  it('should disable dates outside min/max range', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Date range test" min="2025-10-10" max="2025-10-20"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const beforeMinDate = new Date(2025, 9, 5);
    const afterMaxDate = new Date(2025, 9, 25);
    const withinRangeDate = new Date(2025, 9, 15);

    expect(component['isDateDisabled'](beforeMinDate)).toBe(true);
    expect(component['isDateDisabled'](afterMaxDate)).toBe(true);
    expect(component['isDateDisabled'](withinRangeDate)).toBe(false);
  });

  it('should navigate to next month when next button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Next month test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const initialMonth = component.calendar.selectedMonth;
    const initialYear = component.calendar.selectedYear;

    component['addMonthOffset'](1);
    await page.waitForChanges();

    const expectedMonth = initialMonth === 11 ? 0 : initialMonth + 1;
    const expectedYear = initialMonth === 11 ? initialYear + 1 : initialYear;

    expect(component.calendar.selectedMonth).toBe(expectedMonth);
    expect(component.calendar.selectedYear).toBe(expectedYear);
  });

  it('should navigate to previous month when prev button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Prev month test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const initialMonth = component.calendar.selectedMonth;
    const initialYear = component.calendar.selectedYear;

    component['addMonthOffset'](-1);
    await page.waitForChanges();

    const expectedMonth = initialMonth === 0 ? 11 : initialMonth - 1;
    const expectedYear = initialMonth === 0 ? initialYear - 1 : initialYear;

    expect(component.calendar.selectedMonth).toBe(expectedMonth);
    expect(component.calendar.selectedYear).toBe(expectedYear);
  });

  it('should render 42 dates (6 weeks) in calendar', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Calendar layout test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    expect(component.calendar.dates.length).toBe(42);
  });

  it('should handle keyboard navigation with Enter key', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Enter key test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const testDate = new Date(2025, 9, 15);
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });

    component['handleDateKeyDown'](enterEvent, testDate);
    await page.waitForChanges();

    expect(component.value).toBe('2025-10-15');
    expect(component.showCalendar).toBe(false);
  });

  it('should handle keyboard navigation with Space key', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Space key test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const testDate = new Date(2025, 9, 15);
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });

    component['handleDateKeyDown'](spaceEvent, testDate);
    await page.waitForChanges();

    expect(component.value).toBe('2025-10-15');
    expect(component.showCalendar).toBe(false);
  });

  it('should sync value from input on blur', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Sync value test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;
    const input = page.root!.querySelector('input') as HTMLInputElement;

    input.value = '2025-10-15';
    input.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(component.value).toBe('2025-10-15');
  });

  it('should navigate calendar to selected date when opening', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Navigate test" value="2023-05-15"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component['toggleCalendar']();
    await page.waitForChanges();

    expect(component.showCalendar).toBe(true);
    expect(component.calendar.selectedYear).toBe(2023);
    expect(component.calendar.selectedMonth).toBe(4);
  });

  it('should show other-month dates', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Other month test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const currentMonth = component.calendar.selectedMonth;
    const dates = component.calendar.dates;

    const hasOtherMonthDates = dates.some(
      (date) => date.getMonth() !== currentMonth
    );
    expect(hasOtherMonthDates).toBe(true);
  });

  it('should prevent selection of disabled dates', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Disabled date test" min="2025-10-10"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const disabledDate = new Date(2025, 9, 5);
    const initialValue = component.value;

    component['handleDateSelect'](disabledDate);
    await page.waitForChanges();

    expect(component.value).toBe(initialValue);
  });

  it('should close calendar when clicking outside', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Click outside test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const clickEvent = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(clickEvent, 'composedPath', {
      value: () => [],
    });

    component['handleClickOutside'](clickEvent);
    await page.waitForChanges();

    expect(component.showCalendar).toBe(false);
  });

  it('should parse ISO date correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Parse date test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const parsed = component['parseISODate']('2025-10-15');
    expect(parsed).toBeInstanceOf(Date);
    expect(parsed?.getFullYear()).toBe(2025);
    expect(parsed?.getMonth()).toBe(9);
    expect(parsed?.getDate()).toBe(15);
  });

  it('should return undefined for invalid ISO date', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Invalid date test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    expect(component['parseISODate']('invalid-date')).toBeUndefined();
    expect(component['parseISODate']('2025-13-01')).toBeUndefined();
    expect(component['parseISODate']('')).toBeUndefined();
  });

  it('should format date to ISO string', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Format date test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const date = new Date(2025, 9, 15);
    const formatted = component['formatISODate'](date);

    expect(formatted).toBe('2025-10-15');
  });

  it('should clamp date within min/max bounds', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Clamp date test" min="2025-10-10" max="2025-10-20"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const beforeMin = new Date(2025, 9, 5);
    const afterMax = new Date(2025, 9, 25);
    const withinRange = new Date(2025, 9, 15);

    const clampedBefore = component['clampDate'](beforeMin);
    const clampedAfter = component['clampDate'](afterMax);
    const clampedWithin = component['clampDate'](withinRange);

    expect(clampedBefore.getDate()).toBe(10);
    expect(clampedAfter.getDate()).toBe(20);
    expect(clampedWithin.getDate()).toBe(15);
  });

  it('should navigate to different month when selecting other-month date', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Other month selection test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.calendar.gotoDate(2025, 9);
    await page.waitForChanges();

    const nextMonthDate = new Date(2025, 10, 1);
    component['handleDateSelect'](nextMonthDate);
    await page.waitForChanges();

    expect(component.value).toBe('2025-11-01');
    expect(component.calendar.selectedMonth).toBe(10);
  });

  it('should compare dates correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Compare dates test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const date1 = new Date(2025, 9, 15);
    const date2 = new Date(2025, 9, 15);
    const date3 = new Date(2025, 9, 20);

    expect(component['compareDate'](date1, date2)).toBe(0);
    expect(component['compareDate'](date1, date3)).toBeLessThan(0);
    expect(component['compareDate'](date3, date1)).toBeGreaterThan(0);
  });

  it('should handle empty value', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Empty value test" value=""></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    await page.waitForChanges();

    expect(component.value).toBe('');
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('');
  });

  it('should reject invalid date input on blur', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Invalid input test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;
    const input = page.root!.querySelector('input') as HTMLInputElement;

    component.value = '2025-10-15';
    await page.waitForChanges();

    input.value = 'invalid-date';
    input.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(component.value).toBe('2025-10-15');
    expect(input.value).toBe('2025-10-15');
  });

  it('should handle compareDate with null/undefined values', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Compare null dates test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const date = new Date(2025, 9, 15);

    expect(
      component['compareDate'](null as unknown as Date, null as unknown as Date)
    ).toBe(0);
    expect(component['compareDate'](null as unknown as Date, date)).toBe(-1);
    expect(component['compareDate'](date, null as unknown as Date)).toBe(1);
  });

  it('should clamp calendar month to min boundary', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Min month test" min="2025-10-15"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const beforeMinMonth = new Date(2025, 8, 1);
    const clamped = component['clampMonth'](beforeMinMonth);

    expect(clamped.getFullYear()).toBe(2025);
    expect(clamped.getMonth()).toBe(9);
  });

  it('should clamp calendar month to max boundary', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Max month test" max="2025-10-20"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const afterMaxMonth = new Date(2025, 11, 1);
    const clamped = component['clampMonth'](afterMaxMonth);

    expect(clamped.getFullYear()).toBe(2025);
    expect(clamped.getMonth()).toBe(9);
  });

  it('should prevent keyboard selection of disabled dates', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Disabled keyboard test" min="2025-10-10"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const disabledDate = new Date(2025, 9, 5);
    const initialValue = component.value;
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });

    component['handleDateKeyDown'](enterEvent, disabledDate);
    await page.waitForChanges();

    expect(component.value).toBe(initialValue);
  });

  it('should handle min > max scenario by adjusting max', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Min max conflict test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.min = '2025-10-20';
    component['handleMinChange']('2025-10-20');
    await page.waitForChanges();

    component.max = '2025-10-10';
    component['handleMaxChange']('2025-10-10');
    await page.waitForChanges();

    expect(component['minDate']?.getDate()).toBe(10);
  });

  it('should clear value when empty string is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Clear value test" value="2025-10-15"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    await page.waitForChanges();
    expect(component.value).toBe('2025-10-15');

    component.value = '';
    component['handleValueChange']('');
    await page.waitForChanges();

    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(component.value).toBe('');
    expect(input.value).toBe('');
  });

  it('should handle syncValueFromInput with empty input', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Sync empty test" value="2025-10-15"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;
    const input = page.root!.querySelector('input') as HTMLInputElement;

    await page.waitForChanges();

    input.value = '   ';
    component['syncValueFromInput']();
    await page.waitForChanges();

    expect(component.value).toBe('');
  });

  it('should ensure calendar stays within bounds when navigating', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Calendar bounds test" min="2025-10-01" max="2025-11-30"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component['setCalendarMonth'](2025, 8);
    await page.waitForChanges();

    expect(component.calendar.selectedMonth).toBe(9);

    component['setCalendarMonth'](2025, 12);
    await page.waitForChanges();

    expect(component.calendar.selectedMonth).toBe(10);
  });

  it('should return month date boundaries for min/max', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Month boundaries test" min="2025-10-15" max="2025-11-20"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const minMonth = component['getMinMonthDate']();
    const maxMonth = component['getMaxMonthDate']();

    expect(minMonth?.getMonth()).toBe(9);
    expect(minMonth?.getDate()).toBe(1);
    expect(maxMonth?.getMonth()).toBe(10);
    expect(maxMonth?.getDate()).toBe(1);
  });

  it('should handle undefined value in handleValueChange', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Undefined value test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const initialValue = component.value;
    component['handleValueChange'](undefined);
    await page.waitForChanges();

    expect(component.value).toBe(initialValue);
  });

  it('should handle invalid date format in value watcher', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Invalid format test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.value = 'abc-def-ghi';
    component['handleValueChange']('abc-def-ghi');
    await page.waitForChanges();

    expect(component.value).toBe('');
  });

  it('should navigate to min/max date when opening calendar without value', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Navigate to min test" min="2023-05-15"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component['toggleCalendar']();
    await page.waitForChanges();

    expect(component.showCalendar).toBe(true);
    expect(component.calendar.selectedYear).toBe(2023);
    expect(component.calendar.selectedMonth).toBe(4);
  });

  it('should not update calendar if already at correct month', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Calendar update test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.calendar.gotoDate(2025, 9);
    await page.waitForChanges();

    const calendarBefore = component.calendar;
    component['ensureCalendarWithinBounds'](new Date(2025, 9, 15));
    await page.waitForChanges();

    expect(component.calendar).toBe(calendarBefore);
  });

  it('should parse date with leading zeros', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Leading zeros test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const parsed = component['parseISODate']('2025-01-05');
    expect(parsed?.getFullYear()).toBe(2025);
    expect(parsed?.getMonth()).toBe(0);
    expect(parsed?.getDate()).toBe(5);
  });

  it('should reject date with invalid day for month', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Invalid day test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    expect(component['parseISODate']('2025-02-30')).toBeUndefined();
    expect(component['parseISODate']('2025-04-31')).toBeUndefined();
  });

  it('should clone date correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Clone date test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const original = new Date(2025, 9, 15, 14, 30, 0);
    const cloned = component['cloneDate'](original);

    expect(cloned.getFullYear()).toBe(2025);
    expect(cloned.getMonth()).toBe(9);
    expect(cloned.getDate()).toBe(15);
    expect(cloned.getHours()).toBe(0);
    expect(cloned.getMinutes()).toBe(0);
    expect(cloned).not.toBe(original);
  });
});
