import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ModalArgs {
  'custom-class'?: string;
  'modal-id'?: string;
  'outside-click-close'?: boolean;
  position?: 'center' | 'top' | 'bottom';
  'show-corner-close-button'?: boolean;
}

const meta: Meta<ModalArgs> = {
  title: 'Components/Modal',
  component: 'modus-wc-modal',
  args: {
    'modal-id': 'my_modal_1',
    'outside-click-close': true,
    'show-corner-close-button': true,
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'center', 'bottom'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<ModalArgs>;

// prettier-ignore
export const DefaultModal: Story = {
  render: (args) => {
    return html`
<modus-wc-button onclick="${ifDefined(args['modal-id'])}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${ifDefined(args['custom-class'])}
  modal-id=${ifDefined(args['modal-id'])}
  outside-click-close=${ifDefined(args['outside-click-close'])}
  position=${ifDefined(args.position)}
  show-corner-close-button=${ifDefined(args['show-corner-close-button'])}
>
  <span slot="title">Modal Title</span>
  <span slot="content"> This is a sample modal content. </span>
  <div slot="actions">
    <modus-wc-button onclick="${ifDefined(args['modal-id'])}.close()">
      Close
    </modus-wc-button>
  </div>
</modus-wc-modal>
    `;
  },
};
