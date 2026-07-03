import { cloneDate } from './date-utils';
import { WeekStartDay } from '../../types';

export const MONTH_SHORT_NAMES = [
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

export const WEEK_START_DAY_MAP: Record<WeekStartDay, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

/** Generates a localized guide for the placeholder (e.g., "mm/dd/yyyy") */
export function getLocaleFormatGuide(locale: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const parts = new Intl.DateTimeFormat(locale, options).formatToParts(
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

/** Formats date for display in the input using the selected format pattern */
export function formatForDisplay(date: Date, format: string): string {
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

  return format.replace(/yyyy|YYYY|mm|dd|DD|MMM/g, (matched) => map[matched]);
}

/**
 * Parses a date string into a `Date`. Accepts pure ISO 8601 (`YYYY-MM-DD`), abbreviated month
 * name strings matching the `MMM DD, YYYY` token pattern (e.g. `Oct 15, 2025`), and any
 * numeric format whose day/month/year order is resolved from `format` or the locale guide.
 */
export function parseISODate(
  value: string | undefined,
  format: string | undefined,
  locale: string
): Date | undefined {
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
      return cloneDate(date);
    }
    return undefined;
  }

  const guide = format || getLocaleFormatGuide(locale);

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
      return cloneDate(date);
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
    return cloneDate(date);
  }

  return undefined;
}
