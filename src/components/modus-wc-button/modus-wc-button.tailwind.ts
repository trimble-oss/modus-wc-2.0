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
        classes = `${classes} moduswc:btn-primary modus-wc-btn-primary`;
        break;
      case 'secondary':
        classes = `${classes} moduswc:btn-secondary modus-wc-btn-secondary`;
        break;
      case 'tertiary':
        classes = `${classes} moduswc:btn-neutral modus-wc-btn-neutral`;
        break;
      case 'warning':
        classes = `${classes} moduswc:btn-warning modus-wc-btn-warning`;
        break;
      case 'danger':
        classes = `${classes} moduswc:btn-error modus-wc-btn-error`;
        break;
      case 'neutral':
        classes = `${classes} moduswc:btn-base-inverted modus-wc-btn-base-inverted`;
        break;
      case 'success':
        classes = `${classes} moduswc:btn-success modus-wc-btn-success`;
        break;
    }
  }

  if (disabled) {
    classes = `${classes} moduswc:btn-disabled modus-wc-btn-disabled`;
  }

  if (fullWidth) {
    classes = `${classes} moduswc:btn-block modus-wc-btn-block`;
  }

  if (pressed) {
    classes = `${classes} moduswc:btn-active modus-wc-btn-active`;
  }

  if (shape) {
    switch (shape) {
      case 'circle':
        classes = `${classes} moduswc:btn-circle modus-wc-btn-circle`;
        break;
      case 'ellipse':
        classes = `${classes} modus-wc-btn-ellipse`;
        break;
      case 'square':
        classes = `${classes} moduswc:btn-square modus-wc-btn-square`;
        break;
    }
  }

  if (size) {
    classes = `${classes} moduswc:btn-${size} modus-wc-btn-${size}`;
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
        classes = `${classes} moduswc:btn-outline modus-wc-btn-outline`;
        break;
    }
  }

  return classes.trim();
};
