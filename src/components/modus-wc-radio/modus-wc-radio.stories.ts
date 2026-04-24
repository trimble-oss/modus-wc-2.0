import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize } from '../types';

interface RadioArgs {
  'custom-class'?: string;
  disabled?: boolean;
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  name?: string;
  required?: boolean;
  size?: ModusSize;
  value: boolean;
}

const meta: Meta<RadioArgs> = {
  title: 'Components/Forms/Radio',
  component: 'modus-wc-radio',
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

type Story = StoryObj<RadioArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-radio
        aria-label="Radio"
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        label=${ifDefined(args.label)}
        name=${ifDefined(args.name)}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        .value=${args.value}
      ></modus-wc-radio>
    `;
  },
};

export const RadioGroup: Story = {
  // prettier-ignore
  render: (args) => {
    return html`
<style>
  .radio-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .radio-group legend {
    margin-bottom: 0.5rem;
  }
</style>

<main role="main">
  <fieldset class="radio-group">
    <legend>Select an option:</legend>

    <modus-wc-radio
      label="Option 1"
      name="radio-group-demo"
      input-id="option1"
      ?disabled=${args.disabled}
      size=${ifDefined(args.size)}
      .value=${true}
      @inputChange=${(e: CustomEvent) => {
        // In a real app, you would update your state management here
        console.log('Selected:', e.target);
      }}
    ></modus-wc-radio>

    <modus-wc-radio
      label="Option 2"
      name="radio-group-demo"
      input-id="option2"
      ?disabled=${args.disabled}
      size=${ifDefined(args.size)}
      .value=${false}
      @inputChange=${(e: CustomEvent) => {
        console.log('Selected:', e.target);
      }}
    ></modus-wc-radio>

    <modus-wc-radio
      label="Option 3"
      name="radio-group-demo"
      input-id="option3"
      ?disabled=${args.disabled}
      size=${ifDefined(args.size)}
      .value=${false}
      @inputChange=${(e: CustomEvent) => {
        console.log('Selected:', e.target);
      }}
    ></modus-wc-radio>
  </fieldset>
</main>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    // Create a unique shadow host for radio component
    if (!customElements.get('radio-shadow-host')) {
      const RadioShadowHost = createShadowHostClass<RadioArgs>({
        componentTag: 'modus-wc-radio',
        propsMapper: (v: RadioArgs, el: HTMLElement) => {
          const radioEl = el as unknown as {
            customClass: string;
            disabled: boolean;
            inputId: string;
            inputTabIndex: number;
            label: string;
            name: string;
            required: boolean;
            size: string;
            value: boolean;
          };
          radioEl.customClass = v['custom-class'] || '';
          radioEl.disabled = Boolean(v.disabled);
          radioEl.inputId = v['input-id'] || '';
          radioEl.inputTabIndex = v['input-tab-index'] || 0;
          radioEl.label = v.label || '';
          radioEl.name = v.name || '';
          radioEl.required = Boolean(v.required);
          radioEl.size = v.size || 'md';
          radioEl.value = Boolean(v.value);
        },
      });
      customElements.define('radio-shadow-host', RadioShadowHost);
    }

    return html`<radio-shadow-host .props=${{ ...args }}></radio-shadow-host>`;
  },
};
export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\`small\`, \`medium\`) to abbreviations (\`xs\`, \`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop            | 2.0 Prop    | Notes                                                |
|---------------------|-------------|----------------------------------------------------- |
| checked             | value       |                                                      |
| disabled            | disabled    |                                                      |
| handle-button-click |             | Not carried over                                     |
| handle-keydown      |             | Not carried over                                     |
| id                  | input-id    |                                                      |
| label               | label       |                                                      |
| name                | name        |                                                      |
| ref                 |             | Not carried over                                     |
| size                | size        | \`small\` → \`sm\`, \`medium\` → \`md\`              |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes                                               |
|-------------|-------------|-----------------------------------------------------|
| buttonClick | inputChange | Now emits an \`InputEvent\` instead of a \`string\` |
        `,
      },
    },
    // To hide the actual story rendering and only show docs:
    controls: { disable: true },
    canvas: { disable: true },
  },
  // Simple render function or leave it empty
  render: () => html`<div></div>`,
};
