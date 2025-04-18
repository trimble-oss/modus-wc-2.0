import { FunctionalComponent, h } from '@stencil/core';

interface Props {
  className?: string;
}

export const WarningOutlineIcon: FunctionalComponent<Props> = ({
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class={`mi-outline mi-warning ${className || ''}`}
      viewBox="0 0 24 24"
    >
      <path d="M12 15.12c-.67 0-1.21.54-1.21 1.19s.54 1.21 1.21 1.21 1.21-.54 1.21-1.21-.54-1.19-1.21-1.19m0-1.61c.36 0 .62-.26.66-.7l.39-5.04s.01-.1.01-.14c0-.63-.45-1.15-1.06-1.15s-1.06.51-1.06 1.15v.14l.4 5.04c.04.44.28.7.66.7M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" />
    </svg>
  );
};
