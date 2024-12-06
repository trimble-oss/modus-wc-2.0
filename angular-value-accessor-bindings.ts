import { ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['modus-wc-checkbox'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'boolean',
  },
  {
    elementSelectors: ['modus-wc-date'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['modus-wc-number-input'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['modus-wc-radio'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'boolean',
  },
  {
    elementSelectors: ['modus-wc-select'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['modus-wc-text-input'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['modus-wc-textarea'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'text',
  },
];

export default angularValueAccessorBindings;
