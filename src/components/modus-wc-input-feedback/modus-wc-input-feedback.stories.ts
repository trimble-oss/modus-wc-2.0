import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IInputFeedbackLevel } from './modus-wc-input-feedback';
import { ModusSize } from '../types';

interface InputFeedbackArgs {
  'custom-class'?: string;
  icon?: string;
  level: IInputFeedbackLevel;
  message?: string;
  size?: ModusSize;
}

const meta: Meta<InputFeedbackArgs> = {
  title: 'Components/Forms/Input Feedback',
  component: 'modus-wc-input-feedback',
  args: {
    level: 'error',
    message: 'Uh oh. You done messed up.',
    size: 'md',
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['error', 'info', 'success', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<InputFeedbackArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-input-feedback
  custom-class=${ifDefined(args['custom-class'])}
  icon=${ifDefined(args.icon)}
  level=${args.level}
  message=${ifDefined(args.message)}
  size=${ifDefined(args.size)}
>
</modus-wc-input-feedback>
    `;
  },
};

export const Default: Story = { ...Template };

export const WithCustomModusIcon: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-input-feedback
  custom-class=${ifDefined(args['custom-class'])}
  icon='calendar_check'
  level='success'
  message='Event added to calendar!'
  size=${ifDefined(args.size)}
>
</modus-wc-input-feedback>
    `;
  },
};
