import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../../types';

interface InputLabelArgs {
  'for-id'?: string;
  'custom-class'?: string;
  'label-text'?: string;
  required?: boolean;
  size?: ModusSize;
}

const meta: Meta<InputLabelArgs> = {
  title: 'Components/Forms/Input Label',
  component: 'modus-wc-input-label',
  args: {
    'label-text': 'Label',
    required: false,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<InputLabelArgs>;

const Template: Story = {
  render: (args) => html`
    <modus-wc-input-label
      for-id=${ifDefined(args['for-id'])}
      custom-class=${ifDefined(args['custom-class'])}
      label-text=${ifDefined(args['label-text'])}
      ?required=${args['required']}
      size=${args.size}
    ></modus-wc-input-label>
  `,
};

export const Default: Story = { ...Template };

export const Required: Story = { ...Template, args: { required: true } };
