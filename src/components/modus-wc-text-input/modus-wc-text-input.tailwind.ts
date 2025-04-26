import { DaisySize, IInputFeedbackProp } from '../types';

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
  size?: DaisySize;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus:input-bordered`;
  }

  if (disabled) {
    classes = `${classes} modus:input-disabled`;
  }

  if (feedback) {
    classes = `${classes} modus:input--${feedback.level}`;
  }

  if (readOnly) {
    classes = `${classes} modus:text-input--readonly`;
  }

  if (size) {
    classes = `${classes} modus:input-${size}`;
  }

  return classes.trim();
};
