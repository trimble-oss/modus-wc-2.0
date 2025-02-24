import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../../types';

interface NumberInputArgs {
  'auto-complete'?: 'on' | 'off';
  bordered?: boolean;
  'custom-class'?: string;
  currency?: string;
  disabled?: boolean;
  'input-aria-invalid'?: 'true' | 'false';
  'input-id'?: string;
  'input-mode': 'decimal' | 'none' | 'numeric';
  'input-tab-index'?: number;
  label?: string;
  locale?: string;
  max?: number;
  min?: number;
  name?: string;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  size?: ModusSize;
  step?: number;
  type?: 'number' | 'range';
  value: string;
}

const meta: Meta<NumberInputArgs> = {
  title: 'Components/Forms/Number Input',
  component: 'modus-wc-number-input',
  args: {
    bordered: true,
    disabled: false,
    'input-mode': 'numeric',
    label: 'Label',
    size: 'md',
    type: 'number',
    value: '',
  },
  argTypes: {
    'auto-complete': {
      control: { type: 'select' },
      options: ['on', 'off'],
    },
    currency: {
      name: 'currency',
      description:
        'The currency symbol.\nNote: Follow the currency codes from [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) for the `currencySymbol` property.\n',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } },
    },
    'input-aria-invalid': {
      control: { type: 'select' },
      options: ['true', 'false'],
    },
    'input-mode': {
      control: { type: 'select' },
      options: ['decimal', 'none', 'numeric'],
    },
    locale: {
      name: 'locale',
      description:
        'The locale of the selected currency. Note: Follow the locale codes from [BCP 47](https://tools.ietf.org/html/bcp47) for the `locale` property.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'select' },
      options: ['number', 'range'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['inputBlur', 'inputChange', 'inputFocus'],
    },
  },
};

export default meta;

type Story = StoryObj<NumberInputArgs>;

export const Default: Story = {
  render: (args) => html`
    <modus-wc-number-input
      aria-label="Number input"
      auto-complete=${ifDefined(args['auto-complete'])}
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      currency=${ifDefined(args['currency'])}
      ?disabled=${args.disabled}
      input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
      input-id=${ifDefined(args['input-id'])}
      input-mode=${args['input-mode']}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      label=${ifDefined(args.label)}
      locale=${ifDefined(args['locale'])}
      max=${ifDefined(args.max)}
      min=${ifDefined(args.min)}
      name=${ifDefined(args.name)}
      placeholder=${ifDefined(args.placeholder)}
      ?read-only=${args['read-only']}
      ?required=${args.required}
      size=${ifDefined(args.size)}
      step=${ifDefined(args.step)}
      type=${ifDefined(args.type)}
      .value=${args.value}
    ></modus-wc-number-input>
  `,
};
