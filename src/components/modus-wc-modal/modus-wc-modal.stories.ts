import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { generateRandomId } from '../utils';
import { hiddenScrollLockExampleSourceCode } from './modus-wc-modal.story-source';

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

/** Example pattern: add scrollbar-width to document.body before showModal(); restore on dialog close. */
const getScrollbarWidth = (): number => {
  const probe = document.createElement('div');
  probe.style.width = '100px';
  probe.style.height = '100px';
  probe.style.overflow = 'scroll';
  probe.style.position = 'absolute';
  probe.style.top = '-9999px';
  document.body.appendChild(probe);
  const width = probe.offsetWidth - probe.clientWidth;
  document.body.removeChild(probe);
  return width;
};

const measureScrollbarWidth = (): number =>
  Math.max(
    getScrollbarWidth(),
    window.innerWidth - document.documentElement.clientWidth
  );

const resolveModalDialog = (modalId: string): HTMLDialogElement | null => {
  const byId = document.getElementById(modalId);
  if (byId instanceof HTMLDialogElement) {
    return byId;
  }

  const host = document.querySelector(
    `modus-wc-modal[modal-id="${CSS.escape(modalId)}"]`
  );
  const nested = host?.querySelector('dialog');
  return nested instanceof HTMLDialogElement ? nested : null;
};

/** Story-only: hide page scroll and compensate with body padding-right (not default Modus CSS). */
const wireDialogScrollLockExample = (
  dialog: HTMLDialogElement
): (() => void) => {
  const docEl = document.documentElement;
  const body = document.body;

  let bodyPaddingRestore = body.style.paddingRight;
  let docOverflowRestore = docEl.style.overflow;
  let bodyOverflowRestore = body.style.overflow;
  let openCount = 0;

  const applyScrollLock = (): void => {
    if (openCount++ > 0) {
      return;
    }

    const scrollbarWidth = measureScrollbarWidth();

    bodyPaddingRestore = body.style.paddingRight;
    docOverflowRestore = docEl.style.overflow;
    bodyOverflowRestore = body.style.overflow;

    if (scrollbarWidth > 0) {
      const bodyPaddingRight =
        (parseFloat(window.getComputedStyle(body).paddingRight) || 0) +
        scrollbarWidth;
      body.style.paddingRight = `${bodyPaddingRight}px`;
    }

    docEl.style.setProperty('overflow', 'hidden', 'important');
    body.style.setProperty('overflow', 'hidden', 'important');
  };

  const clearScrollLock = (): void => {
    if (openCount === 0) {
      return;
    }
    if (--openCount > 0) {
      return;
    }

    if (bodyPaddingRestore) {
      body.style.paddingRight = bodyPaddingRestore;
    } else {
      body.style.removeProperty('padding-right');
    }

    if (docOverflowRestore) {
      docEl.style.overflow = docOverflowRestore;
    } else {
      docEl.style.removeProperty('overflow');
    }

    if (bodyOverflowRestore) {
      body.style.overflow = bodyOverflowRestore;
    } else {
      body.style.removeProperty('overflow');
    }

    bodyPaddingRestore = '';
    docOverflowRestore = '';
    bodyOverflowRestore = '';
  };

  const nativeShowModal = dialog.showModal.bind(dialog);
  const nativeClose = dialog.close.bind(dialog);

  dialog.showModal = () => {
    if (!dialog.open) {
      applyScrollLock();
    }
    nativeShowModal();
  };

  dialog.close = (returnValue?: string) => {
    nativeClose(returnValue);
  };

  dialog.addEventListener('close', clearScrollLock);

  return () => {
    dialog.showModal = nativeShowModal;
    dialog.close = nativeClose;
    dialog.removeEventListener('close', clearScrollLock);
    if (dialog.open) {
      clearScrollLock();
    }
    docEl.classList.remove('modus-wc-modal-scroll-lock-story');
  };
};

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

export const HiddenScrollLockExample: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `
Default Modus CSS keeps \`:root\` at \`overflow: auto\` and \`scrollbar-gutter: auto\` while a modal is open (see \`global.css\`). This story shows an optional app pattern: hide page scroll (\`overflow: hidden\` on \`html\`/\`body\`) plus \`document.body\` \`padding-right\` equal to the scrollbar width before \`showModal()\`, restored on dialog \`close\`.

See \`wireDialogScrollLockExample\` in this story source file.
        `,
      },
      source: {
        code: hiddenScrollLockExampleSourceCode,
      },
    },
  },
  render: () => {
    const modalId = `body-padding-demo-${generateRandomId(4)}`;
    let teardown: (() => void) | undefined;

    const ensureWired = async (): Promise<HTMLDialogElement | null> => {
      if (!customElements.get('modus-wc-modal')) {
        await customElements.whenDefined('modus-wc-modal');
      }

      document.documentElement.classList.add(
        'modus-wc-modal-scroll-lock-story'
      );

      const dialog = resolveModalDialog(modalId);
      if (!dialog) {
        return null;
      }

      if (dialog.dataset.bodyPaddingWired === 'true') {
        return dialog;
      }

      teardown?.();
      teardown = wireDialogScrollLockExample(dialog);
      dialog.dataset.bodyPaddingWired = 'true';
      return dialog;
    };

    const handleModalVisibility = async (action: 'show' | 'hide') => {
      const dialog = await ensureWired();
      if (!dialog) {
        return;
      }
      if (action === 'show') {
        dialog.showModal();
      } else {
        dialog.close();
      }
    };

    const scrollSections = [
      {
        title: 'Site overview',
        body: 'Elevation models and boundary linework for the north campus expansion.',
      },
      {
        title: 'Field notes — March 12',
        body: 'Control points verified against NGS datasheet. Residuals within project tolerance.',
      },
      {
        title: 'Deliverables',
        body: 'DXF, LandXML, and PDF plan set uploaded to the shared project folder.',
      },
      {
        title: 'Issues',
        body: 'Two clash reports pending review near the utility corridor.',
      },
      {
        title: 'Team',
        body: 'Survey lead assigned. CAD support scheduled for next sprint.',
      },
      {
        title: 'Compliance',
        body: 'Metadata checklist complete. Awaiting final sign-off from the PM.',
      },
      {
        title: 'Attachments',
        body: '14 reference photos and 3 calibration certificates on file.',
      },
    ];

    // prettier-ignore
    return html`
<style>
  /*
    Default global.css sets overflow: auto on :root while a modal is open. This story
    opts into hidden scroll; beat that rule only while this class is present.
  */
  html.modus-wc-modal-scroll-lock-story:has(.modus-wc-modal[open]) {
    overflow: hidden !important;
    scrollbar-gutter: auto !important;
  }

  .scroll-lock-demo {
    box-sizing: border-box;
    min-height: 180vh;
    padding: var(--modus-wc-spacing-lg);
    background: var(--modus-wc-color-base-page);
  }

  .scroll-lock-demo__edge-marker {
    position: fixed;
    inset-inline-end: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    width: 2px;
    background: var(--modus-wc-color-warning);
    pointer-events: none;
  }

  .scroll-lock-demo__column {
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: var(--modus-wc-spacing-md);
    max-width: 48rem;
    margin-inline: auto;
    padding-inline: var(--modus-wc-spacing-md);
  }

  .scroll-lock-demo__intro-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--modus-wc-spacing-sm);
    margin-block-start: var(--modus-wc-spacing-sm);
  }

  .scroll-lock-demo__steps {
    display: flex;
    flex-direction: column;
    gap: var(--modus-wc-spacing-xs);
    margin: 0;
    padding-inline-start: var(--modus-wc-spacing-lg);
    color: var(--modus-wc-color-base-content);
  }

  .scroll-lock-demo__steps li {
    line-height: var(--modus-wc-line-height-md);
  }

  .scroll-lock-demo__caption {
    color: var(--modus-wc-color-base-content-low-contrast);
    margin-block-start: var(--modus-wc-spacing-md);
  }
</style>
<div class="scroll-lock-demo__edge-marker" aria-hidden="true"></div>
<div class="scroll-lock-demo">
  <div class="scroll-lock-demo__column">
    <modus-wc-card padding="compact" bordered=${false}>
      <modus-wc-typography slot="title" hierarchy="h1" size="lg">
        Hidden scroll lock
      </modus-wc-typography>
      <div class="scroll-lock-demo__intro">
        <modus-wc-typography hierarchy="p" size="md">
          Default Modus styles keep the page scrollable while a dialog is open. This
          demo applies the optional pattern from
          <code>wireDialogScrollLockExample</code> in the story source.
        </modus-wc-typography>
        <modus-wc-alert
          variant="info"
          alert-title="What to try"
          alert-description="Scroll down, open the modal, then close it. The fixed warning line on the viewport edge should not move; page content should not jump horizontally."
          custom-class="modus-wc-mt-4"
        ></modus-wc-alert>
        <div class="scroll-lock-demo__intro-actions">
          <modus-wc-button
            color="primary"
            variant="filled"
            size="sm"
            @buttonClick=${() => handleModalVisibility('show')}
          >
            <modus-wc-icon name="launch" size="xs" decorative></modus-wc-icon>
            Open modal
          </modus-wc-button>
        </div>
        <modus-wc-typography hierarchy="p" size="sm" custom-class="scroll-lock-demo__caption">
          Verify in DevTools
        </modus-wc-typography>
        <ol class="scroll-lock-demo__steps">
          <li>Background scroll stops while the dialog is open.</li>
          <li>Only <code>document.body</code> gains <code>padding-right</code> (not <code>html</code>).</li>
          <li>Content does not shift horizontally when the dialog closes.</li>
        </ol>
      </div>
    </modus-wc-card>
    ${scrollSections.map(
      (section) => html`
        <modus-wc-card padding="compact" bordered=${false}>
          <modus-wc-typography slot="title" hierarchy="h2" size="md">
            ${section.title}
          </modus-wc-typography>
          <modus-wc-typography hierarchy="p" size="md">${section.body}</modus-wc-typography>
        </modus-wc-card>
      `
    )}
  </div>
</div>
<modus-wc-modal aria-label="Scroll lock demonstration" modal-id=${modalId}>
  <span slot="header">Publish preview</span>
  <div slot="content">
    <modus-wc-typography hierarchy="p" size="md">
      Page scroll is hidden for this story only. Closing the dialog restores default
      scroll and removes extra body padding.
    </modus-wc-typography>
  </div>
  <div slot="footer" class="scroll-lock-demo__modal-footer">
    <modus-wc-button
      color="tertiary"
      variant="outlined"
      size="sm"
      @buttonClick=${() => handleModalVisibility('hide')}
    >
      Cancel
    </modus-wc-button>
    <modus-wc-button
      color="primary"
      variant="filled"
      size="sm"
      @buttonClick=${() => handleModalVisibility('hide')}
    >
      <modus-wc-icon name="check" size="xs" decorative></modus-wc-icon>
      Confirm
    </modus-wc-button>
  </div>
</modus-wc-modal>
<style>
  .scroll-lock-demo__modal-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: var(--modus-wc-spacing-sm);
    width: 100%;
  }
</style>
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
            // Wire the footer close button to close the dialog
            const closeBtn = el.querySelector('modus-wc-button[slot="footer"]');
            closeBtn?.addEventListener('buttonClick', () => {
              const dialog = el.querySelector('dialog') as HTMLDialogElement;
              dialog?.close();
            });
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
