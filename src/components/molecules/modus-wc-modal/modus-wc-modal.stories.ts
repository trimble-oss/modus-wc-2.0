import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ModalArgs {
  backdrop?: 'default' | 'static';
  'custom-class'?: string;
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
    // prettier-ignore
    return html`
<modus-wc-button onclick="${ifDefined(args['modal-id'])}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${ifDefined(args['custom-class'])}
  modal-id=${ifDefined(args['modal-id'])}
  backdrop=${ifDefined(args.backdrop)}
  position=${ifDefined(args.position)}
  show-close=${ifDefined(args['show-close'])}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="${ifDefined(args['modal-id'])}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `;
  },
};
