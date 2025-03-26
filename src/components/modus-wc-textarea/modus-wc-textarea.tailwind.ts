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
    classes = `${classes} modus-wc-textarea-bordered`;
  }

  if (feedback) {
    classes = `${classes} modus-wc-input--${feedback.level}`;
  }

  if (size) {
    classes = `${classes} modus-wc-textarea-${size}`;
  }

  return classes.trim();
};
