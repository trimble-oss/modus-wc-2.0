import { ModusSize } from '../types';
import { IInputFeedbackLevel } from './modus-wc-input-feedback';

export const convertPropsToClasses = ({
  level,
  size,
}: {
  level?: IInputFeedbackLevel;
  size?: ModusSize;
}): string => {
  let classes = '';

  if (level) {
    classes = `${classes} modus:input-feedback--${level}`;
  }

  if (size) {
    classes = `${classes} modus:input-feedback--${size}`;
  }

  return classes.trim();
};
