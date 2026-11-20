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

  if (bordered === false) {
    classes = `${classes} moduswc:input-ghost`;
  } else {
    classes = `${classes} modus-wc-input-bordered`;
  }

  if (feedback) {
    classes = `${classes} modus-wc-input--${feedback.level}`;
  }

  if (readOnly) {
    classes = `${classes} modus-wc-time-input--readonly`;
  }

  if (size) {
    classes = `${classes} moduswc:input-${size} modus-wc-input-${size}`;
  }

  return classes.trim();
};
