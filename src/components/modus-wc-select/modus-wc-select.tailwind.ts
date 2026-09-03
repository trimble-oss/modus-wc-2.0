import { IInputFeedbackProp, ModusSize } from '../types';

export const convertPropsToClasses = ({
  bordered,
  feedback,
  readOnly,
  size,
}: {
  bordered?: boolean;
  feedback?: IInputFeedbackProp;
  readOnly?: boolean;
  size?: ModusSize | 'xs' | 'xl';
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus-wc-select-bordered`;
  }

  if (feedback) {
    classes = `${classes} modus-wc-select--${feedback.level}`;
  }

  if (readOnly) {
    classes = `${classes} modus-wc-select--readonly`;
  }

  if (size) {
    classes = `${classes} modus-wc-select-${size}`;
  }

  return classes.trim();
};
