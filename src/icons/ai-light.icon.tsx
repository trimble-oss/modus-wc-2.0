import { FunctionalComponent, h } from '@stencil/core';

interface Props {
  className?: string;
}

export const AiLightIcon: FunctionalComponent<Props> = ({ className }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 887 982"
      class={className || ''}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="20%" stop-color="#FF00FF" />
          <stop offset="60%" stop-color="#0066CC" />
          <stop offset="100%" stop-color="#0066CC" />
        </linearGradient>
      </defs>
      <path
        d="m36.76 749.83v231.56l201.3-116.22c-77.25-16.64-147.52-56.92-201.3-115.34z"
        fill="#0066CC"
      />
      <path
        d="m236.59 115.18-199.83-115.18v230.14c56.05-60.9 128.22-99.28 199.83-114.97z"
        fill="#FF00FF"
      />
      <path
        d="m685.40 374.91c23.68 75.15 23.76 156.75-.59 232.74l201.86-116.54c-9.54-5.51-189.55-109.44-201.26-116.2z"
        fill="#0066CC"
      />
      <path
        d="m577.75 489.53c0 142.28-115.34 257.62-257.62 257.62s-257.62-115.34-257.62-257.62 115.34-257.62 257.63-257.62 257.62 115.34 257.62 257.62m62.57-.44c0-176.82-143.34-320.16-320.16-320.16s-320.17 143.33-320.17 320.16 143.34 320.16 320.16 320.16 320.16-143.34 320.16-320.16"
        fill="url(#gradient)"
      />
    </svg>
  );
};
