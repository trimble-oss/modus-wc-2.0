import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';

interface TabArgs {
  active: boolean;
  disabled: boolean;
  'aria-label': string;
  'custom-class'?: string;
}

const meta: Meta<TabArgs> = {
  title: 'Components/Tab',
  component: 'modus-wc-tab',
  args: {
    'aria-label': 'Example tab',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<TabArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-tabs>
  <modus-wc-tab
    ?active="${args.active}"
    ?disabled="${args.disabled}"
    aria-label="${args['aria-label']}"
    custom-class="${ifDefined(args['custom-class'])}"
  >
    Tab 1
  </modus-wc-tab>
  <modus-wc-tab
    ?active="${args.active}"
    ?disabled="${args.disabled}"
    aria-label="${args['aria-label']}"
    custom-class="${ifDefined(args['custom-class'])}"
  >
    Tab 2
  </modus-wc-tab>
  <p slot="panel">
    Sample text for panel 1
  </p>
</modus-wc-tabs>
    `;
  },
};

export const Default: Story = { ...Template };
