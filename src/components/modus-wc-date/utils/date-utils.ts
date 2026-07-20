export function compareDate(date1: Date, date2: Date): number {
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

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function cloneDate(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/** Formats date as ISO 8601 (YYYY-MM-DD) for the value prop */
export function formatISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
