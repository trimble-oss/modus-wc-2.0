import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { DaisySize } from '../../types';

interface SliderArgs {
  'aria-describedby'?: string;
  'aria-label': string;
  'aria-labelledby'?: string;
  'custom-class'?: string;
  disabled?: boolean;
  'input-dir'?: 'ltr' | 'rtl' | 'auto';
  'input-id'?: string;
  'input-tab-index'?: number;
  max?: number;
  min?: number;
  name?: string;
  required?: boolean;
  size?: DaisySize;
  step?: number;
  value: boolean;
}

const meta: Meta<SliderArgs> = {
  title: 'Components/Forms/Slider',
  component: 'modus-wc-slider',
  args: {
    'aria-label': 'Slider',
    'custom-class': '',
    disabled: false,
    name: '',
    required: false,
    size: 'xs',
    value: true,
  },
  argTypes: {
    'input-dir': {
      control: {
        type: 'inline-radio',
      },
      options: ['ltr', 'rtl', 'auto'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
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

type Story = StoryObj<SliderArgs>;

export const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-slider
        aria-describedby=${ifDefined(args['aria-describedby'])}
        aria-label=${args['aria-label']}
        aria-labelledby=${ifDefined(args['aria-labelledby'])}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        input-dir=${ifDefined(args['input-dir'])}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        max=${ifDefined(args.max)}
        min=${ifDefined(args.min)}
        name=${ifDefined(args.name)}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        step=${ifDefined(args.step)}
        .value=${args.value}
      ></modus-wc-slider>
    `;
  },
};

// prettier-ignore
export const SliderWithLabel: Story = {
  render: () => {
    return html`
<style>
  .form-control {
    display: flex;
    flex-direction: column;
  }
  modus-wc-input-label {
    padding-bottom: 8px;
  }
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-input-label
      for-id="slider-input"
      label-text="Example slider"
    ></modus-wc-input-label>
    <modus-wc-slider
      aria-label="Example slider"
      input-id="slider-input"
      value="70"
    ></modus-wc-slider>
  </div>
</form>
    `;
  },
};
