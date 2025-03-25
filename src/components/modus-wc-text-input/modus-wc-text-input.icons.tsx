import { FunctionalComponent, h } from '@stencil/core';
import { KEY } from '../utils';

export const SearchIcon: FunctionalComponent = () => (
  <svg
    class="modus-wc-text-input-icon"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m16.38 14.92-.66.05-.41-.41c2.44-2.81 2.28-7.1-.5-9.7S7.8 2.4 5.17 4.94a6.99 6.99 0 0 0-.08 9.98c2.61 2.61 6.77 2.72 9.52.34l.41.41-.05.65 3.89 3.89a.996.996 0 1 0 1.41-1.41l-3.88-3.88Zm-2.81-1.41a5.016 5.016 0 0 1-7.08 0c-1.95-1.95-1.95-5.13 0-7.08s5.13-1.95 7.08 0 1.95 5.13 0 7.08" />
  </svg>
);

export type ClearIconProps = {
  onClear: (event: MouseEvent | KeyboardEvent) => void;
};

export const ClearIcon: FunctionalComponent<ClearIconProps> = ({ onClear }) => {
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === KEY.Enter || event.key === KEY.Space) {
      event.preventDefault();
      onClear(event);
    }
  };

  return (
    <svg
      class="modus-wc-text-input-icon modus-wc-text-input-icon-clear"
      fill="currentColor"
      onClick={onClear}
      onKeyDown={handleKeydown}
      role="button"
      tabindex={0}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" />
    </svg>
  );
};
