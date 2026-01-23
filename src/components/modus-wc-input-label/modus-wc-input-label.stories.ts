import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize } from '../types';

interface InputLabelArgs {
  'for-id'?: string;
  'custom-class'?: string;
  'label-text'?: string;
  required?: boolean;
  size?: ModusSize;
  'sub-label-text'?: string;
}

const meta: Meta<InputLabelArgs> = {
  title: 'Components/Forms/Input Label',
  component: 'modus-wc-input-label',
  args: {
    'label-text': 'Label',
    required: false,
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<InputLabelArgs>;

const Template: Story = {
  render: (args) => html`
    <modus-wc-input-label
      for-id=${ifDefined(args['for-id'])}
      custom-class=${ifDefined(args['custom-class'])}
      label-text=${ifDefined(args['label-text'])}
      ?required=${args['required']}
      size=${args.size}
      sub-label-text=${ifDefined(args['sub-label-text'])}
    ></modus-wc-input-label>
  `,
};

export const Default: Story = { ...Template };

export const Required: Story = { ...Template, args: { required: true } };

export const ShadowDomParent: Story = {
  render: (args) => {
    // Create a unique shadow host for input-label component
    if (!customElements.get('input-label-shadow-host')) {
      const InputLabelShadowHost = createShadowHostClass<InputLabelArgs>({
        componentTag: 'modus-wc-input-label',
        propsMapper: (v: InputLabelArgs, el: HTMLElement) => {
          const inputLabelEl = el as unknown as {
            forId: string;
            customClass: string;
            labelText: string;
            required: boolean;
            size: string;
            subLabelText: string;
          };
          inputLabelEl.forId = v['for-id'] ?? '';
          inputLabelEl.customClass = v['custom-class'] || '';
          inputLabelEl.labelText = v['label-text'] ?? '';
          inputLabelEl.required = Boolean(v.required);
          inputLabelEl.size = v.size ?? 'md';
          inputLabelEl.subLabelText = v['sub-label-text'] ?? '';
        },
      });
      customElements.define('input-label-shadow-host', InputLabelShadowHost);
    }

    return html`<input-label-shadow-host
      .props=${{ ...args }}
    ></input-label-shadow-host>`;
  },
};
