import { Density } from '../../types';

export const convertTablePropsToClasses = (props: {
  density?: Density;
  zebra?: boolean;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'density') && props.density) {
    switch (props.density) {
      case 'compact':
        classes = `${classes} modus-wc-table-xs`;
        break;
    }
  }

  if (Object.prototype.hasOwnProperty.call(props, 'zebra') && !!props.zebra) {
    classes = `${classes} modus-wc-table-zebra`;
  }

  return classes;
};

export const convertRowPropsToClasses = (props: {
  active?: boolean;
  hover?: boolean;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'active') && !!props.active) {
    classes = `${classes} modus-wc-active`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'hover') && !!props.hover) {
    classes = `${classes} modus-wc-hover`;
  }

  return classes;
};

export const convertHeaderCellPropsToClasses = (props: {
  sortable?: boolean;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'sortable') &&
    !!props.sortable
  ) {
    classes = `${classes} modus-wc-cursor-pointer`;
  }

  return classes;
};
