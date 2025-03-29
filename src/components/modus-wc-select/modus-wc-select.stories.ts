import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ISelectOption } from './modus-wc-select';
import { IInputFeedbackProp, ModusSize } from '../types';

const options: ISelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

interface SelectArgs {
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  feedback?: IInputFeedbackProp;
  'input-aria-invalid'?: 'true' | 'false';
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  name?: string;
  options: ISelectOption[];
  required?: boolean;
  size?: ModusSize;
  value: string;
}

const meta: Meta<SelectArgs> = {
  title: 'Components/Forms/Select',
  component: 'modus-wc-select',
  args: {
    bordered: true,
    disabled: false,
    label: 'Label',
    options,
    size: 'md',
    value: '',
  },
  argTypes: {
    feedback: {
      description: 'Feedback prop for input components',
      table: {
        type: {
          detail: `
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `,
        },
      },
    },
    'input-aria-invalid': {
      control: { type: 'select' },
      options: ['true', 'false'],
    },
    options: {
      description: 'Array of option objects for the select dropdown',
      table: {
        type: {
          detail: `
            Interface: ISelectOption
            Properties:
            - disabled (boolean, optional): Whether the option is disabled and cannot be selected
            - label (string): Display text for the option
            - value (string): The value of the option
          `,
        },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
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

type Story = StoryObj<SelectArgs>;

export const Default: Story = {
  render: (args) => html`
    <modus-wc-select
      aria-label="Select input"
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      .feedback=${ifDefined(args.feedback)}
      input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
      input-id=${ifDefined(args['input-id'])}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      label=${ifDefined(args.label)}
      name=${ifDefined(args.name)}
      .options=${args.options}
      ?required=${args.required}
      size=${ifDefined(args.size)}
      .value=${args.value}
    ></modus-wc-select>
  `,
};

const errorFeedback: IInputFeedbackProp = {
  level: 'error',
  message: 'Value is required.',
};

export const WithErrorFeedback: Story = {
  render: (args) => html`
    <modus-wc-select
      aria-label="Select input"
      .feedback=${errorFeedback}
      label=${ifDefined(args.label)}
      .options=${[]}
      ?required=${true}
      .value=${args.value}
    ></modus-wc-select>
  `,
};
