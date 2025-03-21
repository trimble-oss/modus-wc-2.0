import { FunctionalComponent, h } from '@stencil/core';

export const SearchIcon: FunctionalComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="mi-solid mi-search modus-wc-text-input-icon"
    viewBox="0 0 24 24"
  >
    <path d="m16.38 14.92-.66.05-.41-.41c2.44-2.81 2.28-7.1-.5-9.7S7.8 2.4 5.17 4.94a6.99 6.99 0 0 0-.08 9.98c2.61 2.61 6.77 2.72 9.52.34l.41.41-.05.65 3.89 3.89a.996.996 0 1 0 1.41-1.41l-3.88-3.88Zm-2.81-1.41a5.016 5.016 0 0 1-7.08 0c-1.95-1.95-1.95-5.13 0-7.08s5.13-1.95 7.08 0 1.95 5.13 0 7.08" />
  </svg>
);

export const ClearIcon: FunctionalComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="mi-solid mi-cancel-circle modus-wc-text-input-icon"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41 9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12 7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41" />
  </svg>
);
