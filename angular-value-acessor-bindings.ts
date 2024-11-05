import { ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['modus-wc-textarea'],
    event: 'textareaChange',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['modus-wc-text-input'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'text',
  },
];

export default angularValueAccessorBindings;
