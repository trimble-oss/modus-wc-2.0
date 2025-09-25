export default class DatePickerCalendar {
  private currentDate: Date = new Date();
  private currentMonthDates: Array<Date> = [];

  constructor(calendar?: DatePickerCalendar) {
    if (calendar) {
      this.gotoDate(
        calendar.currentDate.getFullYear(),
        calendar.currentDate.getMonth()
      );
    } else {
      const today = new Date();
      this.gotoDate(today.getFullYear(), today.getMonth());
    }
  }

  get selectedYear(): number {
    return this.currentDate.getFullYear();
  }

  get selectedMonth(): number {
    return this.currentDate.getMonth();
  }

  get dates(): Array<Date> {
    return this.currentMonthDates;
  }

  addMonthOffset(offset: number): DatePickerCalendar {
    this.gotoDate(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + offset
    );
    return this;
  }

  gotoDate(year: number, month: number): void {
    this.currentDate = new Date(year, month, 1);
    this.calculateDates();
  }

  getDaysOfWeek(locale: string, firstDayOfWeek = 0) {
    /**
     * Nov 1st, 2020 starts on a Sunday,
     * assumes weeks start on Sunday,
     * but is configurable via `firstDayOfWeek`.
     */
    const intl = new Intl.DateTimeFormat(locale, { weekday: 'short' });
    const startDate = new Date('11/01/2020');
    const daysOfWeek: string[] = [];

    /**
     * For each day of the week,
     * get the day name.
     */
    for (let i = firstDayOfWeek; i < firstDayOfWeek + 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + i);
      const d = intl.format(currentDate);
      daysOfWeek.push(d.toUpperCase().startsWith('SA') ? d : d.slice(0, 2));
    }

    return daysOfWeek;
  }

  private calculateDates(): void {
    const dates: Date[] = [];
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    // Get first day of current month and calculate starting date
    const firstDayOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Start from the previous month's dates to fill the first week
    const startDate = new Date(year, month, 1 - firstDayOfWeek);

    // Generate 42 dates (6 weeks * 7 days) to ensure consistent 6-row layout
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }

    this.currentMonthDates = dates;
  }
}
