import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

interface ProgressArgs {
  'custom-class'?: string;
  indeterminate: boolean;
  label?: string;
  max?: number;
  value: number;
  variant?: 'default' | 'radial';
}

const meta: Meta<ProgressArgs> = {
  title: 'Components/Progress',
  component: 'modus-wc-progress',
  args: {
    indeterminate: false,
    max: 100,
    value: 70,
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'radial'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<ProgressArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="${ifDefined(args['custom-class'])}"
        ?indeterminate=${args.indeterminate}
        label=${ifDefined(args.label)}
        max=${ifDefined(args.max)}
        value=${args.value}
        variant=${ifDefined(args.variant)}
      ></modus-wc-progress>
    `;
  },
};

export const Indeterminate: Story = {
  render: () => {
    return html` <modus-wc-progress indeterminate="true"></modus-wc-progress> `;
  },
};

export const SizeVariations: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  modus-wc-progress.modus-wc-progress-container .size-small {
    height: 0.5rem;
  }
  modus-wc-progress.modus-wc-progress-container .size-compact {
    height: 0.25rem;
  }
</style>
<div>
  <div>
    Default size
    <modus-wc-progress value=${args.value}></modus-wc-progress>
  </div>
  <div>
    Small size
    <modus-wc-progress
      value=${args.value}
      custom-class="size-small"
    ></modus-wc-progress>
  </div>
  <div>
    Compact size
    <modus-wc-progress
      value=${args.value}
      custom-class="size-compact"
    ></modus-wc-progress>
  </div>
</div>
    `;
  },
};

export const LabelTextColor: Story = {
  args: {
    label: 'Loading...',
    value: 50,
  },
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  modus-wc-progress .modus-wc-progress-label.custom-label-color {
    color: #f00;
  }
</style>
<modus-wc-progress
  value=${args.value}
  label=${ifDefined(args.label)}
  custom-class="custom-label-color"
></modus-wc-progress>
    `;
  },
};

export const CustomBarColor: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  modus-wc-progress .modus-wc-progress.custom-bar-color::-webkit-progress-value {
    background-color: #f48;
  }
  modus-wc-progress .modus-wc-progress.custom-bar-color::-moz-progress-bar {
    background-color: #f48;
  }
</style>
<modus-wc-progress
  value=${args.value}
  custom-class="custom-bar-color"
></modus-wc-progress>
    `;
  },
};

export const CustomBackgroundColor: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  modus-wc-progress .modus-wc-progress.custom-bg-color {
    background-color: #f00;
  }
</style>
<modus-wc-progress
  value=${args.value}
  custom-class="custom-bg-color"
></modus-wc-progress>
    `;
  },
};

export const RadialWithSlottedContent: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  #radial-icon {
    justify-content: center;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  ?indeterminate=${args.indeterminate}
  max=${ifDefined(args.max)}
  variant="radial"
  value=${args.value}
>
  <modus-wc-icon id="radial-icon" name="clipboard" size="md"></modus-wc-icon>
  ${args.value}%
</modus-wc-progress>
    `;
  },
  parameters: {
    layout: 'centered',
  },
};

export const RadialWithCustomSizeAndThickness: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .radial-progress--lg {
    --size: 12rem;
  }
  .radial-progress--thin {
    --thickness: 0.5rem;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg"
  ?indeterminate=${args.indeterminate}
  max=${ifDefined(args.max)}
  variant="radial"
  value=${args.value}
>
  ${args.value}%
</modus-wc-progress>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg radial-progress--thin"
  ?indeterminate=${args.indeterminate}
  max=${ifDefined(args.max)}
  variant="radial"
  value=${args.value}
>
  ${args.value}%
</modus-wc-progress>
    `;
  },
  parameters: {
    layout: 'centered',
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('progress-shadow-host')) {
      const ProgressShadowHost = createShadowHostClass<ProgressArgs>({
        componentTag: 'modus-wc-progress',
        propsMapper: (v: ProgressArgs, el: HTMLElement) => {
          const progressEl = el as unknown as {
            customClass: string;
            indeterminate: boolean;
            label: string;
            max: number;
            value: number;
            variant: string;
          };
          progressEl.customClass = v['custom-class'] || '';
          progressEl.indeterminate = Boolean(v.indeterminate);
          progressEl.label = v.label ?? '';
          progressEl.max = v.max ?? 100;
          progressEl.value = v.value;
          progressEl.variant = v.variant ?? 'default';
        },
      });
      customElements.define('progress-shadow-host', ProgressShadowHost);
    }

    return html`<progress-shadow-host
      .props=${{ ...args }}
    ></progress-shadow-host>`;
  },
};
export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - Colors and sizes are now handled through CSS instead of direct props.
  - The \`mode\` prop has been replaced with an \`indeterminate\` boolean prop.

#### Prop Mapping

| 1.0 Prop          | 2.0 Prop      | Notes                                                |
|-------------------|---------------|------------------------------------------------------|
| aria-label        | aria-label    |                                                      |
| background-color  |               | Not carried over, use CSS instead                    |
| color             |               | Not carried over, use CSS instead                    |
| max-value         | max           |                                                      |
| min-value         |               | Not carried over                                     |
| mode              | indeterminate | 1.0: \`determinate\`/\`indeterminate\`, 2.0: boolean |
| size              |               | Not carried over, use CSS instead                    |
| text              | label         |                                                      |
| text-color        |               | Not carried over, use CSS instead                    |
| value             | value         |                                                      |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
