import { IInputFeedbackProp } from '../types';

export const convertPropsToClasses = ({
  bordered,
  feedback,
  readOnly,
  size,
}: {
  bordered?: boolean;
  feedback?: IInputFeedbackProp;
  readOnly?: boolean;
  size?: string;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus-wc-input-bordered`;
  }

  if (feedback) {
    classes = `${classes} modus-wc-input--${feedback.level}`;
  }

  if (readOnly) {
    classes = `${classes} modus-wc-number-input--readonly`;
  }

  if (size) {
    classes = `${classes} modus-wc-input-${size}`;
  }

  return classes.trim();
};
