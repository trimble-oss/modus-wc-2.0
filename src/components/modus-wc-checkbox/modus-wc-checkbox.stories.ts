import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize } from '../types';

interface CheckboxArgs {
  'custom-class'?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  name?: string;
  required?: boolean;
  size?: ModusSize;
  value: boolean;
}

const meta: Meta<CheckboxArgs> = {
  title: 'Components/Forms/Checkbox',
  component: 'modus-wc-checkbox',
  args: {
    'custom-class': '',
    disabled: false,
    indeterminate: false,
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

type Story = StoryObj<CheckboxArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-checkbox
        aria-label="Checkbox"
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        .indeterminate=${args.indeterminate}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        label=${ifDefined(args.label)}
        name=${ifDefined(args.name)}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        .value=${args.value}
      ></modus-wc-checkbox>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    // Create a unique shadow host for checkbox component
    if (!customElements.get('checkbox-shadow-host')) {
      const CheckboxShadowHost = createShadowHostClass<CheckboxArgs>({
        componentTag: 'modus-wc-checkbox',
        propsMapper: (v: CheckboxArgs, el: HTMLElement) => {
          const checkboxEl = el as unknown as {
            customClass: string;
            disabled: boolean;
            indeterminate: boolean;
            inputId: string;
            inputTabIndex: number;
            label: string;
            name: string;
            required: boolean;
            size: string;
            value: boolean;
          };
          checkboxEl.customClass = v['custom-class'] || '';
          checkboxEl.disabled = Boolean(v.disabled);
          checkboxEl.indeterminate = Boolean(v.indeterminate);
          checkboxEl.inputId = v['input-id'] ?? '';
          checkboxEl.inputTabIndex = v['input-tab-index'] ?? 0;
          checkboxEl.label = v.label ?? '';
          checkboxEl.name = v.name ?? '';
          checkboxEl.required = Boolean(v.required);
          checkboxEl.size = v.size ?? '';
          checkboxEl.value = Boolean(v.value);
        },
      });
      customElements.define('checkbox-shadow-host', CheckboxShadowHost);
    }

    return html`<checkbox-shadow-host
      .props=${{ ...args }}
    ></checkbox-shadow-host>`;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - The \`checked\` prop is now \`value\` in 2.0.
  - The \`checkboxClick\` event is now \`inputChange\` in 2.0.
  - Size values have changed from verbose names (\`small\`, \`medium\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop         | 2.0 Prop      | Notes                                   |
|------------------|---------------|-----------------------------------------|
| aria-label       | aria-label    |                                         |
| checked          | value         |                                         |
| disabled         | disabled      |                                         |
| indeterminate    | indeterminate |                                         |
| label            | label         |                                         |
| size             | size          | \`small\` → \`sm\`, \`medium\` → \`md\` |
| stop-propagation |               | Not carried over                        |

#### Event Mapping

| 1.0 Event     | 2.0 Event   | Notes                                                 |
|---------------|-------------|-------------------------------------------------------|
| checkboxClick | inputChange | Event now emits \`InputEvent\` instead of \`boolean\` |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
