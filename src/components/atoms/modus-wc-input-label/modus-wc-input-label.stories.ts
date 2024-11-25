import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface InputLabelArgs {
  'for-id'?: string;
  'custom-class'?: string;
  'label-dir'?: '' | 'ltr' | 'rtl' | 'auto';
  'label-text'?: string;
  required?: boolean;
}

const meta: Meta<InputLabelArgs> = {
  title: 'Components/Forms/Input Label',
  component: 'modus-wc-input-label',
  args: {
    'label-text': 'Label',
    required: false,
  },
  argTypes: {
    'label-dir': {
      control: { type: 'inline-radio' },
      options: ['ltr', 'rtl', 'auto'],
    },
  },
};

export default meta;

type Story = StoryObj<InputLabelArgs>;

const Template: Story = {
  render: (args) => html`
    <modus-wc-input-label
      for-id="${ifDefined(args['for-id'])}"
      custom-class="${ifDefined(args['custom-class'])}"
      label-dir="${ifDefined(args['label-dir'])}"
      label-text="${ifDefined(args['label-text'])}"
      ?required="${args['required']}"
    ></modus-wc-input-label>
  `,
};

export const Default: Story = { ...Template };
