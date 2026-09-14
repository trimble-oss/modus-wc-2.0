import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  color,
  disabled,
  fullWidth,
  pressed,
  shape,
  size,
  variant,
}: {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'warning'
    | 'danger'
    | 'neutral'
    | 'success';
  disabled?: boolean;
  fullWidth?: boolean;
  pressed?: boolean;
  shape?: 'circle' | 'ellipse' | 'rectangle' | 'square';
  size?: DaisySize | 'xl';
  variant?: 'borderless' | 'filled' | 'outlined';
}): string => {
  let classes = '';

  if (color) {
    switch (color) {
      case 'primary':
        classes = `${classes} moduswc:btn-primary`;
        break;
      case 'secondary':
        classes = `${classes} moduswc:btn-secondary`;
        break;
      case 'tertiary':
        classes = `${classes} moduswc:btn-neutral`;
        break;
      case 'warning':
        classes = `${classes} moduswc:btn-warning`;
        break;
      case 'danger':
        classes = `${classes} moduswc:btn-error`;
        break;
      case 'neutral':
        classes = `${classes} moduswc:btn-base-inverted`;
        break;
      case 'success':
        classes = `${classes} moduswc:btn-success`;
        break;
    }
  }

  if (disabled) {
    classes = `${classes} moduswc:btn-disabled`;
  }

  if (fullWidth) {
    classes = `${classes} moduswc:btn-block`;
  }

  if (pressed) {
    classes = `${classes} moduswc:btn-active`;
  }

  if (shape) {
    switch (shape) {
      case 'circle':
        classes = `${classes} moduswc:btn-circle`;
        break;
      case 'ellipse':
        classes = `${classes} modus-wc-btn-ellipse`;
        break;
      case 'square':
        classes = `${classes} moduswc:btn-square`;
        break;
    }
  }

  if (size) {
    classes = `${classes} moduswc:btn-${size}`;
  }

  if (variant) {
    switch (variant) {
      case 'borderless':
        classes = `${classes} modus-wc-btn-borderless`;
        break;
      case 'filled':
        classes = `${classes} modus-wc-btn-filled`;
        break;
      case 'outlined':
        classes = `${classes} moduswc:btn-outline`;
        break;
    }
  }

  return classes.trim();
};
