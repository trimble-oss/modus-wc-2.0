import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { generateRandomId } from '../../utils';

interface ModalArgs {
  backdrop?: 'default' | 'static';
  'custom-class'?: string;
  fullscreen?: boolean;
  'modal-id'?: string;
  position?: 'bottom' | 'center' | 'top';
  'show-close'?: boolean;
}

const meta: Meta<ModalArgs> = {
  title: 'Components/Modal',
  component: 'modus-wc-modal',
  args: {
    'modal-id': 'my_modal_1',
  },
  argTypes: {
    backdrop: {
      control: { type: 'select' },
      options: ['default', 'static'],
    },
    position: {
      control: { type: 'select' },
      options: ['bottom', 'center', 'top'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<ModalArgs>;

export const Default: Story = {
  render: (args) => {
    const uniqueModalId = generateRandomId(4);
    // prettier-ignore
    return html`
<modus-wc-button onclick="${args['modal-id'] + uniqueModalId}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${ifDefined(args['custom-class'])}
  fullscreen=${ifDefined(args.fullscreen)}
  modal-id=${args['modal-id'] + uniqueModalId}
  backdrop=${ifDefined(args.backdrop)}
  position=${ifDefined(args.position)}
  show-close=${ifDefined(args['show-close'])}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="${args['modal-id'] + uniqueModalId}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `;
  },
};

export const CustomWidthAndHeight: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  #modal2 .modus-wc-modal-box {
    width: 80%;
    max-width: none;
    height: 60%;
    max-height: none;
  }
</style>
<modus-wc-button onclick="modal2.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class="expanded-modal"
  modal-id="modal2"
  backdrop=${ifDefined(args.backdrop)}
  position=${ifDefined(args.position)}
  show-close=${ifDefined(args['show-close'])}
>
  <span slot="header">Modal Title</span>
  <p slot="content">Sample expanded modal content.</p>
  <modus-wc-button slot="footer" onclick="modal2.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `;
  },
};
