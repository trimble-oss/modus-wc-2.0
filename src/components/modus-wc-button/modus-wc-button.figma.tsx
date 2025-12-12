import React from 'react';
import figma from '@figma/code-connect';

/**
 * Code Connect for Button component (React)
 * Maps Figma variants to React wrapper component
 */
figma.connect(
  'https://www.figma.com/design/y9H5ucQKBjzI8JLuVrGcb3/Modus-2.0---Atomic-Design-System?node-id=7-3230',
  {
    props: {
      size: figma.enum('size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
      }),
      variant: figma.enum('style', {
        fill: 'filled',
        outline: 'outlined',
      }),
      shape: figma.enum('radius', {
        square: 'square',
        circle: 'circle',
      }),
    },
    example: ({ size, variant, shape }) => (
      <modus-wc-button size={size} variant={variant} shape={shape}>
        Button
      </modus-wc-button>
    ),
    links: [
      {
        name: 'Storybook',
        url: 'https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-button--docs',
      },
      {
        name: 'GitHub Source',
        url: 'https://github.com/trimble-oss/modus-wc-2.0/tree/main/src/components/modus-wc-button',
      },
      {
        name: 'React Integration',
        url: 'https://github.com/trimble-oss/modus-wc-2.0/tree/main/integrations/react',
      },
    ],
  }
);
