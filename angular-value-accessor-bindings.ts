import { ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['modus-wc-checkbox', 'modus-wc-radio'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'boolean',
  },
  {
    elementSelectors: [
      'modus-wc-autocomplete',
      'modus-wc-date',
      'modus-wc-number-input',
      'modus-wc-select',
      'modus-wc-text-input',
      'modus-wc-textarea',
    ],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'text',
  },
];

export default angularValueAccessorBindings;
