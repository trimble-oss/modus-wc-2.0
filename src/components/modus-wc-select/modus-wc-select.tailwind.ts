import { IInputFeedbackProp, ModusSize } from '../types';

export const convertPropsToClasses = ({
  bordered,
  feedback,
  size,
}: {
  bordered?: boolean;
  feedback?: IInputFeedbackProp;
  size?: ModusSize;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus:select-bordered`;
  }

  if (feedback) {
    classes = `${classes} modus:input--${feedback.level}`;
  }

  if (size) {
    classes = `${classes} modus:select-${size}`;
  }

  return classes.trim();
};
