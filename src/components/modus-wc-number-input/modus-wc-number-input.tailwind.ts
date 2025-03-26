import { IInputFeedbackProp } from '../types';

export const convertPropsToClasses = ({
  bordered,
  feedback,
  size,
}: {
  bordered?: boolean;
  feedback?: IInputFeedbackProp;
  size?: string;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus-wc-input-bordered`;
  }

  if (feedback) {
    classes = `${classes} modus-wc-input--${feedback.level}`;
  }

  if (size) {
    classes = `${classes} modus-wc-input-${size}`;
  }

  return classes.trim();
};
