import { IInputFeedbackProp, ModusSize } from '../types';

export const convertPropsToClasses = ({
  bordered,
  disabled,
  feedback,
  readOnly,
  size,
}: {
  bordered?: boolean;
  disabled?: boolean;
  feedback?: IInputFeedbackProp;
  readOnly?: boolean;
  size?: ModusSize | 'xs' | 'xl';
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus-wc-input-bordered`;
  }

  if (disabled) {
    classes = `${classes} modus-wc-input-disabled`;
  }

  if (feedback) {
    classes = `${classes} modus-wc-input--${feedback.level}`;
  }

  if (readOnly) {
    classes = `${classes} modus-wc-text-input--readonly`;
  }

  if (size) {
    classes = `${classes} modus-wc-input-${size}`;
  }

  return classes.trim();
};
