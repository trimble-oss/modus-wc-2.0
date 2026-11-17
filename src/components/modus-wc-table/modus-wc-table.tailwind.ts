import { Density } from '../types';

interface TableProps {
  density?: Density;
  zebra?: boolean;
  hover?: boolean;
}

/**
 * Converts table props to CSS classes for styling
 * @param props Table props
 * @returns CSS class string
 */
export function convertTablePropsToClasses(props: TableProps): string {
  const classes: string[] = [];

  // Add density class
  if (props.density) {
    classes.push(`modus-wc-table-density-${props.density}`);
  }

  // Add zebra class
  if (props.zebra) {
    classes.push('moduswc:table-zebra modus-wc-table-zebra');
  }

  // Add hover class
  if (props.hover) {
    classes.push('modus-wc-table-hover');
  }

  return classes.join(' ');
}

// Utility classes for sortable functionality
export const tableSortableClasses = {
  header: {
    sortable: 'moduswc:cursor-pointer',
    sorted: 'moduswc:font-bold',
    asc: 'sort-asc',
    desc: 'sort-desc',
  },
  icon: {
    base: 'moduswc:ml-2 moduswc:inline-block',
    asc: '▲',
    desc: '▼',
    none: '',
  },
};

export const convertRowPropsToClasses = ({
  active,
  hover,
}: {
  active?: boolean;
  hover?: boolean;
}): string => {
  let classes = '';

  if (active) {
    classes = `${classes} modus-wc-active`;
  }

  if (hover) {
    classes = `${classes} modus-wc-hover`;
  }

  return classes.trim();
};

export const convertHeaderCellPropsToClasses = ({
  sortable,
}: {
  sortable?: boolean;
}): string => {
  let classes = '';

  if (sortable) {
    classes = `${classes} moduswc:cursor-pointer modus-wc-cursor-pointer`;
  }

  return classes.trim();
};
