import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { generateRandomId } from '../utils';

interface ModalArgs {
  backdrop: 'default' | 'static';
  'custom-class'?: string;
  fullscreen: boolean;
  'modal-id'?: string;
  position: 'bottom' | 'center' | 'top';
  'show-close': boolean;
  'show-fullscreen-toggle': boolean;
}

const meta: Meta<ModalArgs> = {
  title: 'Components/Modal',
  component: 'modus-wc-modal',
  args: {
    backdrop: 'default',
    'custom-class': '',
    fullscreen: false,
    'modal-id': 'my_modal_1',
    position: 'center',
    'show-close': true,
    'show-fullscreen-toggle': false,
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
const illustrativeScript = html`
  <script>
    // This is to illustrate how to implement modal visibility handling
    // const modalId = document
    //   .querySelector('modus-wc-modal')
    //   .getAttribute('modal-id');
    // const handleModalVisibility = (action) => {
    //   const modal = document.getElementById(modalId);
    //   if (modal) {
    //     if (action === 'show') {
    //       modal.showModal();
    //     } else {
    //       modal.close();
    //     }
    //   }
    // };
    // const openButton = document.getElementById('open-modal-btn');
    // const closeButton = document.getElementById('close-modal-btn');
    // openButton.addEventListener('click', () =>
    //   handleModalVisibility('show')
    // );
    // closeButton.addEventListener('click', () =>
    //   handleModalVisibility('hide')
    // );
  </script>
`;

export const Default: Story = {
  render: (args) => {
    const modalId = `${args['modal-id']}${generateRandomId(4)}}`;

    const handleModalVisibility = (action: 'show' | 'hide') => {
      const modal = document.getElementById(modalId) as HTMLDialogElement;
      if (modal) {
        if (action === 'show') {
          modal.showModal();
        } else {
          modal.close();
        }
      }
    };

    // prettier-ignore
    return html`
<modus-wc-button id="open-modal-btn" @buttonClick=${() => handleModalVisibility('show')}>
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${ifDefined(args['custom-class'])}
  fullscreen=${args.fullscreen}
  modal-id=${modalId}
  backdrop=${args.backdrop}
  position=${args.position}
  show-close=${args['show-close']}
  show-fullscreen-toggle=${args['show-fullscreen-toggle']}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" id="close-modal-btn" @buttonClick=${() => handleModalVisibility('hide')}>
    Close
  </modus-wc-button>
</modus-wc-modal>
${illustrativeScript}
    `;
  },
};

export const CustomWidthAndHeight: Story = {
  render: (args) => {
    const modalId = `${args['modal-id']}${generateRandomId(4)}}`;

    const handleModalVisibility = (action: 'show' | 'hide') => {
      const modal = document.getElementById(modalId) as HTMLDialogElement;
      if (modal) {
        if (action === 'show') {
          modal.showModal();
        } else {
          modal.close();
        }
      }
    };

    // prettier-ignore
    return html`
<style>
  .expanded-modal .modus-wc-modal-box {
    width: 80%;
    max-width: none;
    height: 60%;
    max-height: none;
  }
</style>
<modus-wc-button id="open-modal-btn" @buttonClick=${() => handleModalVisibility('show')}>
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class="expanded-modal"
  modal-id=${modalId}
  backdrop=${ifDefined(args.backdrop)}
  position=${ifDefined(args.position)}
  show-close=${ifDefined(args['show-close'])}
>
  <span slot="header">Modal Title</span>
  <p slot="content">Sample modal content.</p>
  <modus-wc-button slot="footer" id="close-modal-btn" @buttonClick=${() => handleModalVisibility('hide')}>
    Close
  </modus-wc-button>
</modus-wc-modal>
${illustrativeScript}
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    const modalId = `shadow-dom-modal`;

    const handleModalVisibility = (action: 'show' | 'hide') => {
      // The dialog lives inside the shadow host's shadowRoot, not in document
      const host = document.querySelector(
        'modal-shadow-host'
      ) as HTMLElement & {
        shadowRoot: ShadowRoot;
      };
      const modal = host?.shadowRoot?.getElementById(
        modalId
      ) as HTMLDialogElement;
      if (modal) {
        if (action === 'show') modal.showModal();
        else modal.close();
      }
    };

    if (!customElements.get('modal-shadow-host')) {
      const ModalShadowHost = createShadowHostClass<ModalArgs>({
        componentTag: 'modus-wc-modal',
        propsMapper: (v: ModalArgs, el: HTMLElement) => {
          const modalEl = el as unknown as {
            backdrop: string;
            customClass: string;
            fullscreen: boolean;
            modalId: string;
            position: string;
            showClose: boolean;
            showFullscreenToggle: boolean;
          };
          modalEl.backdrop = v.backdrop;
          modalEl.customClass = v['custom-class'] || '';
          modalEl.fullscreen = Boolean(v.fullscreen);
          modalEl.modalId = modalId;
          modalEl.position = v.position;
          modalEl.showClose = Boolean(v['show-close']);
          modalEl.showFullscreenToggle = Boolean(v['show-fullscreen-toggle']);
          if (!el.hasChildNodes()) {
            el.innerHTML = `<span slot="header">Modal Title</span><span slot="content">This is sample modal content.</span><modus-wc-button slot="footer">Close</modus-wc-button>`;
          }
        },
      });
      customElements.define('modal-shadow-host', ModalShadowHost);
    }

    // prettier-ignore
    return html`
<modus-wc-button @buttonClick=${() => handleModalVisibility('show')}>
  Open modal
</modus-wc-button>
<modal-shadow-host .props=${{ ...args }}></modal-shadow-host>
    `;
  },
};
export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - Modal identification is now required via the \`modal-id\` prop.
  - 2.0 requires the use of slots for a fully customizable \`header\`, \`content\`, and \`footer\`.
  Primary and secondary buttons as well as \`header-text\` are no longer built-in.
  - In 1.0, modals had built-in open/close state management with methods. 2.0 uses the native HTML dialog
  element with \`modal-id\` to target the dialog with native \`showModal()\` and \`close()\` methods.

#### Prop Mapping

| 1.0 Prop                     | 2.0 Prop                | Notes                                         |
|------------------------------|-------------------------|-----------------------------------------------|
| aria-label                   | aria-label              |                                               |
| backdrop                     | backdrop                |                                               |
| fullscreen                   | fullscreen              |                                               |
| header-text                  |                         | Not carried over, use \`header\` slot instead |
| primary-button-aria-label    |                         | Not carried over, use \`footer\` slot instead |
| primary-button-disabled      |                         | Not carried over, use \`footer\` slot instead |
| primary-button-text          |                         | Not carried over, use \`footer\` slot instead |
| secondary-button-aria-label  |                         | Not carried over, use \`footer\` slot instead |
| secondary-button-disabled    |                         | Not carried over, use \`footer\` slot instead |
| secondary-button-text        |                         | Not carried over, use \`footer\` slot instead |
| show-fullscreen-toggle       | show-fullscreen-toggle  |                                               |
| z-index                      |                         | Not carried over, use CSS instead             |

#### Event Mapping

| 1.0 Event            | 2.0 Event | Notes                                                                             |
|----------------------|-----------|-----------------------------------------------------------------------------------|
| closed               |           | Not carried over, use dialog \`close()\` event instead                            |
| opened               |           | Not carried over, use dialog \`showModal()\` event instead                        |
| primaryButtonClick   |           | Not carried over, handle with events on custom buttons in \`footer\` slot instead |
| secondaryButtonClick |           | Not carried over, handle with events on custom buttons in \`footer\` slot instead |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
