import { FunctionalComponent, h } from '@stencil/core';

interface Props {
  className?: string;
}

export const ChevronDoubleRightSolidIcon: FunctionalComponent<Props> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class={`mi-chevron-double-right ${className || ''}`}
    viewBox="0 0 24 24"
  >
    <path d="M7.12 6.71c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41L9.58 12 5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41zm11.17 4.58L13.7 6.7c-.38-.38-1.02-.38-1.41 0a.996.996 0 0 0 0 1.41l3.88 3.88-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41Z" />
  </svg>
);
