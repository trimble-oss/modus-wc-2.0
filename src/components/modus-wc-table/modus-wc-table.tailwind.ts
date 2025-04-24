import { Density } from '../types';

export const convertTablePropsToClasses = ({
  density,
  zebra,
}: {
  density?: Density;
  zebra?: boolean;
}): string => {
  let classes = '';

  if (density) {
    switch (density) {
      case 'compact':
        classes = `${classes} modus-wc-table-xs`;
        break;
    }
  }

  if (zebra) {
    classes = `${classes} modus-wc-table-zebra`;
  }

  return classes.trim();
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
    classes = `${classes} modus:cursor-pointer`;
  }

  return classes.trim();
};
