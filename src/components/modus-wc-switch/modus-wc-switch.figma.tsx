import React from 'react';
import figma from '@figma/code-connect';

/**
 * Code Connect for Switch component (React)
 * Maps Figma variants to React wrapper component
 */
figma.connect(
  'https://www.figma.com/design/y9H5ucQKBjzI8JLuVrGcb3/Modus-2.0---Atomic-Design-System?node-id=42-33006',
  {
    props: {
      size: figma.enum('size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
      }),
      checked: figma.boolean('checked'),
      disabled: figma.boolean('disabled'),
      indeterminate: figma.boolean('indeterminate'),
    },
    example: ({ size, checked, disabled, indeterminate }) => (
      <modus-wc-switch
        size={size}
        value={checked}
        disabled={disabled}
        indeterminate={indeterminate}
      />
    ),
    links: [
      {
        name: 'Storybook',
        url: 'https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-switch--docs',
      },
      {
        name: 'GitHub Source',
        url: 'https://github.com/trimble-oss/modus-wc-2.0/tree/main/src/components/modus-wc-switch',
      },
      {
        name: 'React Integration',
        url: 'https://github.com/trimble-oss/modus-wc-2.0/tree/main/integrations/react',
      },
    ],
  }
);


