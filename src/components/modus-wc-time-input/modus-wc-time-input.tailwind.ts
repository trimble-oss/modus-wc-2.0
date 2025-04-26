import { DaisySize, IInputFeedbackProp } from '../types';

export const convertPropsToClasses = ({
  bordered,
  feedback,
  readOnly,
  size,
}: {
  bordered?: boolean;
  feedback?: IInputFeedbackProp;
  readOnly?: boolean;
  size?: DaisySize;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus:input-bordered`;
  }

  if (feedback) {
    classes = `${classes} modus:input--${feedback.level}`;
  }

  if (readOnly) {
    classes = `${classes} modus:time-input--readonly`;
  }

  if (size) {
    classes = `${classes} modus:input-${size}`;
  }

  return classes.trim();
};
