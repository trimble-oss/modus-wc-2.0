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

  it('should adjust max when min is set higher than existing max', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Min higher than max test" max="2025-10-10"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    await page.waitForChanges();

    component.min = '2025-10-20';
    component['handleMinChange']('2025-10-20');
    await page.waitForChanges();

    expect(component['maxDate']?.getDate()).toBe(20);
  });

  it('should auto-correct invalid value format', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Auto-correct test" min="2025-10-10" value="2025-10-05"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    await page.waitForChanges();

    expect(component.value).toBe('2025-10-10');
  });

  it('should destroy popper instance when calendar closes', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Popper destroy test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    expect(component['popperInstance']).toBeTruthy();

    component.showCalendar = false;
    await page.waitForChanges();

    expect(component['popperInstance']).toBeNull();
  });

  it('should handle ensureValueWithinBounds with no value', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="No value bounds test" min="2025-10-10"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component['ensureValueWithinBounds']();
    await page.waitForChanges();

    expect(component.value).toBe('');
  });

  it('should handle ensureValueWithinBounds with invalid value', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Invalid value bounds test" min="2025-10-10"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.value = 'invalid';
    component['ensureValueWithinBounds']();
    await page.waitForChanges();

    expect(component.value).toBe('');
  });

  it('should sync value and correct to formatted ISO when valid', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Value formatting test" min="2025-10-10" max="2025-10-20"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.value = '2025-10-08';
    component['handleValueChange']('2025-10-08');
    await page.waitForChanges();

    expect(component.value).toBe('2025-10-10');
  });

  it('should return undefined for getMinMonthDate when no min', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="No min month test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const minMonth = component['getMinMonthDate']();
    expect(minMonth).toBeUndefined();
  });

  it('should return undefined for getMaxMonthDate when no max', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="No max month test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    const maxMonth = component['getMaxMonthDate']();
    expect(maxMonth).toBeUndefined();
  });

  it('should close calendar when Escape is pressed with active element', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Escape blur test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    component['handleEscapeKey'](escapeEvent);
    await page.waitForChanges();

    expect(component.showCalendar).toBe(false);
  });

  it('should call disconnectedCallback and cleanup popper', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Disconnect test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    expect(component['popperInstance']).toBeTruthy();

    component.disconnectedCallback();

    expect(component['popperInstance']).toBeNull();
  });

  it('should handle month change via select component event', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Month change test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const mockSelectElement = document.createElement('select');
    mockSelectElement.value = '5';

    const mockEvent = new CustomEvent('inputChange', {
      detail: {
        target: mockSelectElement,
      } as unknown as InputEvent,
    });

    component['handleMonthChange'](
      mockEvent as unknown as CustomEvent<InputEvent>
    );
    await page.waitForChanges();

    expect(component.calendar.selectedMonth).toBe(5);
  });

  it('should handle year change via select component event', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Year change test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const mockSelectElement = document.createElement('select');
    mockSelectElement.value = '2023';

    const mockEvent = new CustomEvent('inputChange', {
      detail: {
        target: mockSelectElement,
      } as unknown as InputEvent,
    });

    component['handleYearChange'](
      mockEvent as unknown as CustomEvent<InputEvent>
    );
    await page.waitForChanges();

    expect(component.calendar.selectedYear).toBe(2023);
  });

  it('should handle NaN value in month change', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="NaN month test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const mockSelectElement = document.createElement('select');
    mockSelectElement.value = 'invalid';

    const mockEvent = new CustomEvent('inputChange', {
      detail: {
        target: mockSelectElement,
      } as unknown as InputEvent,
    });

    const beforeMonth = component.calendar.selectedMonth;
    component['handleMonthChange'](
      mockEvent as unknown as CustomEvent<InputEvent>
    );
    await page.waitForChanges();

    expect(component.calendar.selectedMonth).toBe(beforeMonth);
  });

  it('should handle NaN value in year change', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="NaN year test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const mockSelectElement = document.createElement('select');
    mockSelectElement.value = 'invalid';

    const mockEvent = new CustomEvent('inputChange', {
      detail: {
        target: mockSelectElement,
      } as unknown as InputEvent,
    });

    const beforeYear = component.calendar.selectedYear;
    component['handleYearChange'](
      mockEvent as unknown as CustomEvent<InputEvent>
    );
    await page.waitForChanges();

    expect(component.calendar.selectedYear).toBe(beforeYear);
  });

  it('should handle calendar dates with null date entry', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Null date test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const calendarDates = page.root!.querySelectorAll('.calendar-day');
    expect(calendarDates.length).toBeGreaterThan(0);
  });

  it('should handle selecting date from another year', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Different year selection test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.calendar.gotoDate(2025, 9);
    await page.waitForChanges();

    const differentYearDate = new Date(2024, 9, 15);
    component['handleDateSelect'](differentYearDate);
    await page.waitForChanges();

    expect(component.value).toBe('2024-10-15');
    expect(component.calendar.selectedYear).toBe(2024);
  });

  it('should navigate calendar when selecting date from different month and year', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Different month year test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.calendar.gotoDate(2025, 5);
    await page.waitForChanges();

    const differentDate = new Date(2024, 11, 25);
    component['handleDateSelect'](differentDate);
    await page.waitForChanges();

    expect(component.value).toBe('2024-12-25');
    expect(component.calendar.selectedYear).toBe(2024);
    expect(component.calendar.selectedMonth).toBe(11);
  });

  it('should handle syncValueFromInput with no inputRef', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="No input ref test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component['inputRef'] = undefined;
    component['syncValueFromInput']();
    await page.waitForChanges();

    expect(component.value).toBe('');
  });

  it('should render calendar with all inline event handlers', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Render handlers test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const prevButton = page.root!.querySelector('.nav-btn');
    const nextButton = page.root!.querySelectorAll('.nav-btn')[1];

    expect(prevButton).toBeTruthy();
    expect(nextButton).toBeTruthy();

    const monthSelect = page.root!.querySelector('.month-select');
    const yearSelect = page.root!.querySelector('.year-select');

    expect(monthSelect).toBeTruthy();
    expect(yearSelect).toBeTruthy();
  });

  it('should handle clicking on calendar date buttons', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Click date button test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const dateButtons = page.root!.querySelectorAll(
      '.calendar-day:not(.other-month)'
    );
    expect(dateButtons.length).toBeGreaterThan(0);

    const firstDateButton = dateButtons[0] as HTMLButtonElement;
    firstDateButton.click();
    await page.waitForChanges();

    expect(component.showCalendar).toBe(false);
    expect(component.value).toBeTruthy();
  });

  it('should handle keyboard event on date button', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Date keyboard test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const dateButtons = page.root!.querySelectorAll(
      '.calendar-day:not(.other-month)'
    );
    const firstDateButton = dateButtons[0] as HTMLButtonElement;

    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
    });
    firstDateButton.dispatchEvent(enterEvent);
    await page.waitForChanges();

    expect(component.showCalendar).toBe(false);
  });

  it('should handle clicking prev month button', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Prev button test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const initialMonth = component.calendar.selectedMonth;
    const prevButton = page.root!.querySelector('.nav-btn') as HTMLElement;

    prevButton.click();
    await page.waitForChanges();

    const expectedMonth = initialMonth === 0 ? 11 : initialMonth - 1;
    expect(component.calendar.selectedMonth).toBe(expectedMonth);
  });

  it('should handle clicking next month button', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Next button test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const initialMonth = component.calendar.selectedMonth;
    const navButtons = page.root!.querySelectorAll('.nav-btn');
    const nextButton = navButtons[navButtons.length - 1] as HTMLElement;

    nextButton.click();
    await page.waitForChanges();

    const expectedMonth = initialMonth === 11 ? 0 : initialMonth + 1;
    expect(component.calendar.selectedMonth).toBe(expectedMonth);
  });

  it('should verify calendar renders with select components', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Select render test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const monthSelect = page.root!.querySelector('.month-select');
    const yearSelect = page.root!.querySelector('.year-select');

    expect(monthSelect).toBeTruthy();
    expect(yearSelect).toBeTruthy();
  });

  it('should navigate calendar when selecting date from both different month and year', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Navigate different month year test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    component.calendar.gotoDate(2025, 9);
    await page.waitForChanges();

    const prevMonthDate = new Date(2025, 8, 28);
    component['handleDateSelect'](prevMonthDate);
    await page.waitForChanges();

    expect(component.value).toBe('2025-09-28');
    expect(component.calendar.selectedMonth).toBe(8);
    expect(component.calendar.selectedYear).toBe(2025);
  });

  it('should properly handle null dates in calendar.dates array', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Null dates test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    component.calendar['currentMonthDates'] = [
      null as unknown as Date,
      new Date(2025, 9, 1),
    ];
    await page.waitForChanges();

    const dateButtons = page.root!.querySelectorAll('.calendar-day');
    expect(dateButtons.length).toBe(1);
  });

  it('should navigate calendar when selecting other-month date with different year', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Cross-month-year test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.calendar.gotoDate(2025, 0);
    await page.waitForChanges();

    const previousYearDate = new Date(2024, 11, 30);
    component['handleDateSelect'](previousYearDate);
    await page.waitForChanges();

    expect(component.value).toBe('2024-12-30');
    expect(component.calendar.selectedYear).toBe(2024);
    expect(component.calendar.selectedMonth).toBe(11);
  });

  it('should blur document.activeElement when it is an HTMLElement on Escape', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Active element blur test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const button = document.createElement('button');
    document.body.appendChild(button);
    button.focus();

    const escapeEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
    });
    document.dispatchEvent(escapeEvent);
    await page.waitForChanges();

    expect(component.showCalendar).toBe(false);
    expect(document.activeElement).not.toBe(button);

    document.body.removeChild(button);
  });

  it('should NOT navigate calendar when selecting date from same month and year', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Same month test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.calendar.gotoDate(2025, 9);
    const initialCalendar = component.calendar;
    await page.waitForChanges();

    const sameMonthDate = new Date(2025, 9, 15);
    component['handleDateSelect'](sameMonthDate);
    await page.waitForChanges();

    expect(component.value).toBe('2025-10-15');
    expect(component.calendar).toBe(initialCalendar);
  });

  it('should create new calendar when selecting date from different month ONLY', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Different month only test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.calendar.gotoDate(2025, 9);
    await page.waitForChanges();

    const differentMonthDate = new Date(2025, 10, 5);

    const calendarBefore = component.calendar.selectedMonth;
    component['handleDateSelect'](differentMonthDate);
    await page.waitForChanges();

    expect(component.value).toBe('2025-11-05');
    expect(component.calendar.selectedMonth).toBe(10);
    expect(component.calendar.selectedMonth).not.toBe(calendarBefore);
  });

  it('should create new calendar when selecting date from different year', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Different year navigation test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.calendar.gotoDate(2025, 9);
    const initialCalendar = component.calendar;
    await page.waitForChanges();

    const differentYearDate = new Date(2026, 9, 15);
    component['handleDateSelect'](differentYearDate);
    await page.waitForChanges();

    expect(component.value).toBe('2026-10-15');
    expect(component.calendar).not.toBe(initialCalendar);
    expect(component.calendar.selectedYear).toBe(2026);
  });

  it('should use empty string fallback when value is falsy in syncValueFromInput', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Empty fallback test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;
    const input = page.root!.querySelector('input') as HTMLInputElement;

    component.value = '';
    input.value = 'invalid-format';
    component['syncValueFromInput']();
    await page.waitForChanges();

    expect(input.value).toBe('');
  });

  it('should use 0 fallback when monthValue is undefined in handleMonthChange', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Month undefined test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const mockEvent = new CustomEvent('inputChange', {
      detail: {
        target: { value: undefined },
      } as unknown as InputEvent,
    });

    component['handleMonthChange'](
      mockEvent as unknown as CustomEvent<InputEvent>
    );
    await page.waitForChanges();

    // When value is undefined, it uses '0' fallback: parseInt('0', 10) = 0 (January)
    expect(component.calendar.selectedMonth).toBe(0);
  });

  it('should use 0 fallback when yearValue is undefined in handleYearChange', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Year undefined test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const mockEvent = new CustomEvent('inputChange', {
      detail: {
        target: { value: undefined },
      } as unknown as InputEvent,
    });

    component['handleYearChange'](
      mockEvent as unknown as CustomEvent<InputEvent>
    );
    await page.waitForChanges();

    // parseInt(undefined || '0', 10) = parseInt('0', 10) = 0
    // new Date(0, month, day) creates year 1900 in JavaScript
    expect(component.calendar.selectedYear).toBe(1900);
  });

  it('should use calendar.selectedYear fallback when yearSelect is not found', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="No year select test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    component['calendarRef'] = document.createElement('div');
    await page.waitForChanges();

    const mockSelectElement = document.createElement('select');
    mockSelectElement.value = '5';

    const mockEvent = new CustomEvent('inputChange', {
      detail: {
        target: mockSelectElement,
      } as unknown as InputEvent,
    });

    component['handleMonthChange'](
      mockEvent as unknown as CustomEvent<InputEvent>
    );
    await page.waitForChanges();

    // When querySelector returns null, yearSelect is undefined, so it uses fallback
    // But the fallback is this.calendar.selectedYear, which uses the OLD calendar
    // After gotoDate, a new calendar is created, so we should check it worked
    expect(component.calendar.selectedMonth).toBe(5);
  });

  it('should use calendar.selectedMonth fallback when monthSelect is not found', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="No month select test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    component['calendarRef'] = document.createElement('div');
    await page.waitForChanges();

    const mockSelectElement = document.createElement('select');
    mockSelectElement.value = '2024';

    const mockEvent = new CustomEvent('inputChange', {
      detail: {
        target: mockSelectElement,
      } as unknown as InputEvent,
    });

    component['handleYearChange'](
      mockEvent as unknown as CustomEvent<InputEvent>
    );
    await page.waitForChanges();

    // When querySelector returns null, monthSelect is undefined, so it uses fallback
    // After gotoDate, a new calendar is created
    expect(component.calendar.selectedYear).toBe(2024);
  });

  it('should handle event with null detail in handleMonthChange', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Null detail month test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const mockEvent = new CustomEvent('inputChange', {
      detail: null as unknown as InputEvent,
    });

    component['handleMonthChange'](
      mockEvent as unknown as CustomEvent<InputEvent>
    );
    await page.waitForChanges();

    // When detail is null, inputEvent?.target is undefined, selectTarget?.value is undefined
    // parseInt(undefined || '0', 10) = 0
    expect(component.calendar.selectedMonth).toBe(0);
  });

  it('should handle event with null detail in handleYearChange', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Null detail year test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;
    await page.waitForChanges();

    const mockEvent = new CustomEvent('inputChange', {
      detail: null as unknown as InputEvent,
    });

    component['handleYearChange'](mockEvent);
    await page.waitForChanges();

    // When detail is null, yearValue is undefined, parseInt(undefined || '0', 10) = 0 (year 1900)
    expect(component.calendar.selectedYear).toBe(1900);
  });

  it('should handle null calendarRef in handleMonthChange', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Null calendar ref month test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component['calendarRef'] = null as unknown as HTMLElement;

    const mockSelectElement = document.createElement('select');
    mockSelectElement.value = '7';

    const mockEvent = new CustomEvent('inputChange', {
      detail: {
        target: mockSelectElement,
      } as unknown as InputEvent,
    });

    component['handleMonthChange'](
      mockEvent as unknown as CustomEvent<InputEvent>
    );
    await page.waitForChanges();

    // When calendarRef is null, querySelector returns undefined, uses calendar.selectedYear fallback
    expect(component.calendar.selectedMonth).toBe(7);
  });

  it('should handle null calendarRef in handleYearChange', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Null calendar ref year test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component['calendarRef'] = null as unknown as HTMLElement;

    const mockSelectElement = document.createElement('select');
    mockSelectElement.value = '2022';

    const mockEvent = new CustomEvent('inputChange', {
      detail: {
        target: mockSelectElement,
      } as unknown as InputEvent,
    });

    component['handleYearChange'](
      mockEvent as unknown as CustomEvent<InputEvent>
    );
    await page.waitForChanges();

    // When calendarRef is null, querySelector returns undefined, uses calendar.selectedMonth fallback
    expect(component.calendar.selectedYear).toBe(2022);
  });

  it('should navigate to previous year when selecting date from it', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Previous year navigation test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    // Set calendar to January 2025
    component.calendar.gotoDate(2025, 0);
    await page.waitForChanges();

    // Select a date from December 2024 (different year)
    const prevYearDate = new Date(2024, 11, 31);

    // Call handleDateSelect directly to ensure lines 283-285 are hit
    component['handleDateSelect'](prevYearDate);
    await page.waitForChanges();

    expect(component.value).toBe('2024-12-31');
    expect(component.calendar.selectedMonth).toBe(11); // December
    expect(component.calendar.selectedYear).toBe(2024);
  });

  it('should render calendar with month/year select handlers', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Calendar handlers test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    // Open calendar to render the selects
    component.showCalendar = true;
    await page.waitForChanges();

    // Find the rendered selects
    const monthSelect = page.root!.querySelector('.month-select');
    const yearSelect = page.root!.querySelector('.year-select');

    expect(monthSelect).toBeTruthy();
    expect(yearSelect).toBeTruthy();

    // The rendered component should have onInputChange handlers attached
    const rendered = component.render();
    expect(rendered).toBeTruthy();
  });

  it('should navigate to different month when selecting date from it', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Different month navigation"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    // Start in October 2025
    component.calendar.gotoDate(2025, 9);
    const initialMonth = component.calendar.selectedMonth;

    // Select a date from December 2025
    const decemberDate = new Date(2025, 11, 15);

    // This should enter the if block at lines 279-286
    component['handleDateSelect'](decemberDate);
    await page.waitForChanges();

    // Verify navigation occurred
    expect(component.value).toBe('2025-12-15');
    expect(component.calendar.selectedMonth).toBe(11);
    expect(component.calendar.selectedYear).toBe(2025);
    expect(component.calendar.selectedMonth).not.toBe(initialMonth);
  });

  it('should test document.activeElement blur path', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Active element test"></modus-wc-date>',
    });
    const component = page.rootInstance as ModusWcDate;

    component.showCalendar = true;

    // Create a test to ensure the instanceof check works
    const mockActiveElement = {
      blur: jest.fn(),
    };

    // Override activeElement
    const originalActiveElement = Object.getOwnPropertyDescriptor(
      document,
      'activeElement'
    );
    Object.defineProperty(document, 'activeElement', {
      get: () => mockActiveElement,
      configurable: true,
    });

    // Test that non-HTMLElement doesn't call blur
    component['handleEscapeKey'](
      new KeyboardEvent('keydown', { key: 'Escape' })
    );

    expect(component.showCalendar).toBe(false);

    // Restore
    if (originalActiveElement) {
      Object.defineProperty(document, 'activeElement', originalActiveElement);
    }
  });
});
