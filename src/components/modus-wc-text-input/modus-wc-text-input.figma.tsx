import React from 'react';
import figma from '@figma/code-connect';

/**
 * Code Connect for Text Input component (React)
 * Maps Figma variants to React wrapper component
 */
figma.connect(
  'https://www.figma.com/design/y9H5ucQKBjzI8JLuVrGcb3/Modus-2.0---Atomic-Design-System?node-id=12574-25763',
  {
    props: {
      size: figma.enum('Size', {
        XS: 'sm',
        SM: 'sm',
        MD: 'md',
        LG: 'lg',
        XL: 'lg',
      }),
    },
    example: ({ size }) => <modus-wc-text-input size={size} />,
    links: [
      {
        name: 'Storybook',
        url: 'https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-text-input--docs',
      },
      {
        name: 'GitHub Source',
        url: 'https://github.com/trimble-oss/modus-wc-2.0/tree/main/src/components/modus-wc-text-input',
      },
      {
        name: 'React Integration',
        url: 'https://github.com/trimble-oss/modus-wc-2.0/tree/main/integrations/react',
      },
    ],
  }
);
