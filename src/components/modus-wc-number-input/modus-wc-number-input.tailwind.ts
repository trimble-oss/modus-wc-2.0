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
    classes = `${classes} modus:input-bordered`;
  }

  if (feedback) {
    classes = `${classes} modus:input--${feedback.level}`;
  }

  if (readOnly) {
    classes = `${classes} modus:number-input--readonly`;
  }

  if (size) {
    classes = `${classes} modus:input-${size}`;
  }

  return classes.trim();
};
