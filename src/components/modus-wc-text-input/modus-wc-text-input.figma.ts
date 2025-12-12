import figma from '@figma/code-connect';
import html from '@figma/code-connect';

/**
 * Code Connect for Text Input component (Web Components)
 * Maps Figma variants to Web Component props
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
    example: ({ size }) =>
      html`<modus-wc-text-input size="${size}"></modus-wc-text-input>`,
    links: [
      {
        name: 'Storybook',
        url: 'https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-text-input--docs',
      },
      {
        name: 'GitHub Source',
        url: 'https://github.com/trimble-oss/modus-wc-2.0/tree/main/src/components/modus-wc-text-input',
      },
    ],
  }
);
