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
    classes = `${classes} modus-wc-input-bordered`;
  }

  if (readOnly) {
    classes = `${classes} modus-wc-text-input-readonly`;
  }

  if (feedback) {
    classes = `${classes} modus-wc-input--${feedback.level}`;
  }

  if (size) {
    classes = `${classes} modus-wc-input-${size}`;
  }

  return classes;
};
