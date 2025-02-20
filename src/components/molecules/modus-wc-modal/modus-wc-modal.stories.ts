import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ModalArgs {
  'custom-class'?: string;
}

const meta: Meta<ModalArgs> = {
  title: 'Components/Modal',
  component: 'modus-wc-modal',
  args: {},
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<ModalArgs>;

export const DefaultModal: Story = {
  render: (args) => {
    return html`
      <modus-wc-button onclick="my_modal_1.showModal()">
        Open modal
      </modus-wc-button>
      <modus-wc-modal
        aria-label="Example modal"
        custom-class=${ifDefined(args['custom-class'])}
        modal-id="my_modal_1"
      >
        <span slot="title">Modal Title</span>
        <span slot="content">
          This is a sample modal content. You can place any content here.
        </span>
        <div slot="actions">
          <modus-wc-button onclick="my_modal_1.close()">
            Close
          </modus-wc-button>
        </div>
      </modus-wc-modal>
    `;
  },
};
