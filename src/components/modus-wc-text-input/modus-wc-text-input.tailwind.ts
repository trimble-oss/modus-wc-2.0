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
  size?: DaisySize | 'xl';
}): string => {
  let classes = '';

  if (bordered === false) {
    classes = `${classes} moduswc:input-ghost`;
  }

  if (disabled) {
    classes = `${classes} moduswc:input-disabled`;
  }

  if (feedback) {
    classes = `${classes} modus-wc-input--${feedback.level}`;
  }

  if (readOnly) {
    classes = `${classes} modus-wc-text-input--readonly`;
  }

  if (size) {
    classes = `${classes} moduswc:input-${size}`;
  }

  return classes.trim();
};
