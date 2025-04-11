import { FunctionalComponent, h } from '@stencil/core';

interface Props {
  className?: string;
}

export const CheckCircleSolidIcon: FunctionalComponent<Props> = ({
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class={`mi-outline mi-check-circle ${className || ''}`}
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m5.04-11.28V8.7c-.4-.39-1.03-.39-1.42 0L10.33 14l-2.6-2.62a.996.996 0 0 0-1.41 0 .984.984 0 0 0-.01 1.4l.01.01 3.3 3.34a1 1 0 0 0 1.42.01l6-6.01a.996.996 0 0 0 0-1.41" />
    </svg>
  );
};
