import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

interface SliderArgs {
  'a11y-describedby'?: string;
  'a11y-label': string;
  'a11y-labelledby'?: string;
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
    'a11y-label': 'Slider',
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
        a11y-describedby=${ifDefined(args['a11y-describedby'])}
        a11y-label=${args['a11y-label']}
        a11y-labelledby=${ifDefined(args['a11y-labelledby'])}
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
      a11y-label="Example slider"
      input-id="slider-input"
      value="70"
    ></modus-wc-slider>
  </div>
</form>
    `;
  },
};
