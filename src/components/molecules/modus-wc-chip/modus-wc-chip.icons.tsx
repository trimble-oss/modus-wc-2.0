import { FunctionalComponent, h } from '@stencil/core';

interface SolidCancelIconProps {
  onClick?: (event: MouseEvent) => void;
}

export const SolidCancelIcon: FunctionalComponent<SolidCancelIconProps> = ({
  onClick,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="mi-solid mi-cancel-circle modus-wc-chip-icon"
    onClick={onClick}
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41 9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12 7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41" />
  </svg>
);

export const SolidCheckIcon: FunctionalComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="mi-solid mi-check modus-wc-chip-icon"
    viewBox="0 0 24 24"
  >
    <path d="M9 18c-.26 0-.51-.1-.71-.29l-4-4A.996.996 0 1 1 5.7 12.3l3.29 3.29 9.29-9.29a.996.996 0 1 1 1.41 1.41l-10 10c-.2.2-.45.29-.71.29Z" />
  </svg>
);
