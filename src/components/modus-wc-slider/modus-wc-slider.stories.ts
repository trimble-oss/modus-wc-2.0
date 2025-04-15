import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../types';

interface SliderArgs {
  'custom-class'?: string;
  disabled?: boolean;
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  max?: number;
  min?: number;
  name?: string;
  required?: boolean;
  size?: ModusSize;
  step?: number;
  value: boolean;
}

const meta: Meta<SliderArgs> = {
  title: 'Components/Forms/Slider',
  component: 'modus-wc-slider',
  args: {
    'custom-class': '',
    disabled: false,
    label: 'Label',
    name: '',
    required: false,
    size: 'md',
    value: true,
  },
  argTypes: {
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

type Story = StoryObj<SliderArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-slider
        aria-label="Slider"
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        label=${ifDefined(args.label)}
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

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for additional info and examples.
  - Property names have changed: \`max-value\` → \`max\`, \`min-value\` → \`min\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop     | Notes |
|-------------|--------------|-------|
| aria-label  | aria-label   |       |
| disabled    | disabled     |       |
| label       | label        |       |
| max-value   | max          |       |
| min-value   | min          |       |
| value       | value        |       |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange |             | Not carried over |
| valueInput  | inputChange |                  |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
