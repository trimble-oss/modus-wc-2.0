import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize } from '../types';

type SliderStoryHost = HTMLElement & {
  getSliderValue?: () => Promise<number>;
  getDualRangeValues?: () => Promise<{
    minValue: number;
    maxValue: number;
  } | null>;
};

async function updateSliderLiveDisplay(
  host: SliderStoryHost,
  liveEl: HTMLElement
): Promise<void> {
  // Check the HTML attribute (always set by Lit before element upgrade)
  // rather than the JS property which may be unavailable on first render.
  const isDualRange = host.hasAttribute('dual-range');
  if (isDualRange && host.getDualRangeValues) {
    const range = await host.getDualRangeValues();
    liveEl.textContent = range
      ? `minValue: ${range.minValue}, maxValue: ${range.maxValue}`
      : '';
    return;
  }
  if (host.getSliderValue) {
    const v = await host.getSliderValue();
    liveEl.textContent = `value: ${v}`;
  }
}

function attachSliderLiveRef(root: Element | undefined) {
  if (!(root instanceof HTMLElement)) {
    return undefined;
  }
  const slider = root.querySelector('modus-wc-slider');
  const live = root.querySelector<HTMLElement>('[data-slider-live-value]');
  if (!slider || !live) {
    return undefined;
  }
  const sync = () =>
    void updateSliderLiveDisplay(slider as SliderStoryHost, live);
  void sync();
  slider.addEventListener('inputChange', sync);
  return () => slider.removeEventListener('inputChange', sync);
}

interface SliderArgs {
  'custom-class'?: string;
  disabled?: boolean;
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  max?: number;
  'max-value'?: number;
  min?: number;
  'min-value'?: number;
  name?: string;
  required?: boolean;
  size?: ModusSize;
  step?: number;
  value: number;
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
    value: 0,
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
      <div
        style="display:flex;flex-direction:column;gap:0.5rem"
        ${ref(attachSliderLiveRef)}
      >
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
        <p
          style="margin:0;font-size:0.875rem;color:var(--modus-wc-color-gray-6)"
        >
          <span data-slider-live-value></span>
        </p>
      </div>
    `;
  },
};

export const DualRange: Story = {
  args: {
    label: 'Price Range',
    min: 0,
    max: 100,
    'min-value': 20,
    'max-value': 80,
  },
  render: (args) => {
    const minV = args['min-value'] ?? 20;
    const maxV = args['max-value'] ?? 80;
    return html`
      <div
        style="display:flex;flex-direction:column;gap:0.5rem"
        ${ref(attachSliderLiveRef)}
      >
        <modus-wc-slider
          aria-label="Price range slider"
          custom-class=${ifDefined(args['custom-class'])}
          ?disabled=${args.disabled}
          ?dual-range=${true}
          input-id=${ifDefined(args['input-id'])}
          input-tab-index=${ifDefined(args['input-tab-index'])}
          label=${ifDefined(args.label)}
          max=${ifDefined(args.max)}
          min=${ifDefined(args.min)}
          .maxValue=${maxV}
          .minValue=${minV}
          name=${ifDefined(args.name)}
          ?required=${args.required}
          size=${ifDefined(args.size)}
          step=${ifDefined(args.step)}
        ></modus-wc-slider>
        <p
          style="margin:0;font-size:0.875rem;color:var(--modus-wc-color-gray-6)"
        >
          <span data-slider-live-value></span>
        </p>
      </div>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
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
