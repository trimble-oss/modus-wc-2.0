import { ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['modus-wc-textarea', 'modus-wc-text-input'],
    event: 'change',
    targetAttr: 'value',
    type: 'text',
  },
];

export default angularValueAccessorBindings;
