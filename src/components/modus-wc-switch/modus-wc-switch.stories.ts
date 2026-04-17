import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize } from '../types';

interface SwitchArgs {
  'custom-class'?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  name?: string;
  required?: boolean;
  size?: ModusSize | 'xs';
  value: boolean;
}

const meta: Meta<SwitchArgs> = {
  title: 'Components/Forms/Switch',
  component: 'modus-wc-switch',
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

type Story = StoryObj<SwitchArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-switch
        aria-label="Toggle"
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
      ></modus-wc-switch>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    // Create a unique shadow host for switch component
    if (!customElements.get('switch-shadow-host')) {
      const SwitchShadowHost = createShadowHostClass<SwitchArgs>({
        componentTag: 'modus-wc-switch',
        propsMapper: (v: SwitchArgs, el: HTMLElement) => {
          const switchEl = el as unknown as {
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
          switchEl.customClass = v['custom-class'] || '';
          switchEl.disabled = Boolean(v.disabled);
          switchEl.indeterminate = Boolean(v.indeterminate);
          switchEl.inputId = v['input-id'] || '';
          switchEl.inputTabIndex = v['input-tab-index'] || 0;
          switchEl.label = v.label || '';
          switchEl.name = v.name || '';
          switchEl.required = Boolean(v.required);
          switchEl.size = v.size || 'md';
          switchEl.value = Boolean(v.value);
        },
      });
      customElements.define('switch-shadow-host', SwitchShadowHost);
    }

    return html`<switch-shadow-host
      .props=${{ ...args }}
    ></switch-shadow-host>`;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs documentation for additional info and examples.
  - \`checked\` prop has been renamed to \`value\` to maintain consistency across form components.
  - Size values have changed from verbose names (\`small\`, \`medium\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop         | 2.0 Prop            | Notes                                                       |
|------------------|---------------------|-------------------------------------------------------------|
| aria-label       | aria-label          |                                                             |
| checked          | value               |                                                             |
| disabled         | disabled            |                                                             |
| label            | label               |                                                             |
| size             | size                | \`small\` → \`sm\`, \`medium\` → \`md\`                     |

#### Event Mapping

| 1.0 Event      | 2.0 Event      | Notes                                                 |
|----------------|----------------|-------------------------------------------------------|
| switchClick    | inputChange    |                                                       |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
