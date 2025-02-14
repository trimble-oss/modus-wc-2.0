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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
  </svg>
);

export const SolidCheckIcon: FunctionalComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="mi-solid mi-check-circle modus-wc-chip-icon"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
  </svg>
);
