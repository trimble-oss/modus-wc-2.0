import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
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

export const ShadowDomParent: Story = {
  render: (args) => {
    // Create a unique shadow host for slider component
    if (!customElements.get('slider-shadow-host')) {
      const SliderShadowHost = createShadowHostClass<SliderArgs>({
        componentTag: 'modus-wc-slider',
        propsMapper: (v: SliderArgs, el: HTMLElement) => {
          const sliderEl = el as unknown as {
            customClass: string;
            disabled: boolean;
            inputId: string;
            inputTabIndex: number;
            label: string;
            max: number;
            min: number;
            name: string;
            required: boolean;
            size: string;
            step: number;
            value: number;
          };
          sliderEl.customClass = v['custom-class'] || '';
          sliderEl.disabled = Boolean(v.disabled);
          sliderEl.inputId = v['input-id'] ?? '';
          sliderEl.inputTabIndex = v['input-tab-index'] ?? 0;
          sliderEl.label = v.label ?? '';
          sliderEl.max = v.max ?? 100;
          sliderEl.min = v.min ?? 0;
          sliderEl.name = v.name ?? '';
          sliderEl.required = Boolean(v.required);
          sliderEl.size = v.size ?? 'md';
          sliderEl.step = v.step ?? 1;
          sliderEl.value = typeof v.value === 'number' ? v.value : 0;
        },
      });
      customElements.define('slider-shadow-host', SliderShadowHost);
    }

    return html`<slider-shadow-host
      .props=${{ ...args }}
    ></slider-shadow-host>`;
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
