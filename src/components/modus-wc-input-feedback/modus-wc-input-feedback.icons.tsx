import { FunctionalComponent, h } from '@stencil/core';

export const CheckIcon: FunctionalComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="modus-wc-input-feedback-icon mi-outline mi-check-circle"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m5.04-11.28V8.7c-.4-.39-1.03-.39-1.42 0L10.33 14l-2.6-2.62a.996.996 0 0 0-1.41 0 .984.984 0 0 0-.01 1.4l.01.01 3.3 3.34a1 1 0 0 0 1.42.01l6-6.01a.996.996 0 0 0 0-1.41" />
    </svg>
  );
};

export const InfoIcon: FunctionalComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="modus-wc-input-feedback-icon mi-outline mi-info"
      viewBox="0 0 24 24"
    >
      <path d="M12 9.03c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0 13c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1" />
    </svg>
  );
};

export const WarningIcon: FunctionalComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="modus-wc-input-feedback-icon mi-outline mi-warning"
      viewBox="0 0 24 24"
    >
      <path d="M12 15.12c-.67 0-1.21.54-1.21 1.19s.54 1.21 1.21 1.21 1.21-.54 1.21-1.21-.54-1.19-1.21-1.19m0-1.61c.36 0 .62-.26.66-.7l.39-5.04s.01-.1.01-.14c0-.63-.45-1.15-1.06-1.15s-1.06.51-1.06 1.15v.14l.4 5.04c.04.44.28.7.66.7M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" />
    </svg>
  );
};
