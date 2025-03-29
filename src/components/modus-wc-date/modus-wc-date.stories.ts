import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IInputFeedbackProp, ModusSize } from '../types';

interface DateArgs {
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  feedback?: IInputFeedbackProp;
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  max?: string;
  min?: string;
  name?: string;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  size?: ModusSize;
  value: string;
}

const meta: Meta<DateArgs> = {
  title: 'Components/Forms/Date',
  component: 'modus-wc-date',
  args: {
    bordered: true,
    'custom-class': '',
    disabled: false,
    label: 'Label',
    'read-only': false,
    required: false,
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

type Story = StoryObj<DateArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-date
        aria-label="Date input"
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        .feedback=${ifDefined(args.feedback)}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        label=${ifDefined(args.label)}
        max=${ifDefined(args.max)}
        min=${ifDefined(args.min)}
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        ?read-only=${args['read-only']}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        .value=${args.value}
      ></modus-wc-date>
    `;
  },
};

const errorFeedback: IInputFeedbackProp = {
  level: 'error',
  message: 'Value is required.',
};

export const WithErrorFeedback: Story = {
  render: (args) => html`
    <modus-wc-date
      aria-label="Date input"
      .feedback=${errorFeedback}
      label=${ifDefined(args.label)}
      ?required=${true}
      .value=${args.value}
    ></modus-wc-date>
  `,
};
