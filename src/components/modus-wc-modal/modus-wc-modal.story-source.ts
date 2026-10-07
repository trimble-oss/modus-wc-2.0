/** Docs "Show code" for HiddenScrollLockExample — matches the story background + scroll lock. */
export const hiddenScrollLockExampleSourceCode = `
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

  .scroll-lock-demo__modal-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: var(--modus-wc-spacing-sm);
    width: 100%;
  }
</style>

<div class="scroll-lock-demo__edge-marker" aria-hidden="true"></div>
<div class="scroll-lock-demo">
  <div class="scroll-lock-demo__column">
    <modus-wc-card padding="compact" bordered="false">
      <modus-wc-typography slot="title" hierarchy="h1" size="lg">
        Hidden scroll lock
      </modus-wc-typography>
      <div class="scroll-lock-demo__intro">
        <modus-wc-typography hierarchy="p" size="md">
          Default Modus styles keep the page scrollable while a dialog is open. This
          demo applies the optional pattern from
          <code>wireDialogScrollLock</code> in the script below.
        </modus-wc-typography>
        <modus-wc-alert
          variant="info"
          alert-title="What to try"
          alert-description="Scroll down, open the modal, then close it. The fixed warning line on the viewport edge should not move; page content should not jump horizontally."
          custom-class="modus-wc-mt-4"
        ></modus-wc-alert>
        <div class="scroll-lock-demo__intro-actions">
          <modus-wc-button
            id="open-scroll-lock-modal"
            color="primary"
            variant="filled"
            size="sm"
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

    <modus-wc-card padding="compact" bordered="false">
      <modus-wc-typography slot="title" hierarchy="h2" size="md">
        Site overview
      </modus-wc-typography>
      <modus-wc-typography hierarchy="p" size="md">
        Elevation models and boundary linework for the north campus expansion.
      </modus-wc-typography>
    </modus-wc-card>

    <modus-wc-card padding="compact" bordered="false">
      <modus-wc-typography slot="title" hierarchy="h2" size="md">
        Field notes — March 12
      </modus-wc-typography>
      <modus-wc-typography hierarchy="p" size="md">
        Control points verified against NGS datasheet. Residuals within project tolerance.
      </modus-wc-typography>
    </modus-wc-card>

    <modus-wc-card padding="compact" bordered="false">
      <modus-wc-typography slot="title" hierarchy="h2" size="md">
        Deliverables
      </modus-wc-typography>
      <modus-wc-typography hierarchy="p" size="md">
        DXF, LandXML, and PDF plan set uploaded to the shared project folder.
      </modus-wc-typography>
    </modus-wc-card>

    <modus-wc-card padding="compact" bordered="false">
      <modus-wc-typography slot="title" hierarchy="h2" size="md">
        Issues
      </modus-wc-typography>
      <modus-wc-typography hierarchy="p" size="md">
        Two clash reports pending review near the utility corridor.
      </modus-wc-typography>
    </modus-wc-card>

    <modus-wc-card padding="compact" bordered="false">
      <modus-wc-typography slot="title" hierarchy="h2" size="md">
        Team
      </modus-wc-typography>
      <modus-wc-typography hierarchy="p" size="md">
        Survey lead assigned. CAD support scheduled for next sprint.
      </modus-wc-typography>
    </modus-wc-card>

    <modus-wc-card padding="compact" bordered="false">
      <modus-wc-typography slot="title" hierarchy="h2" size="md">
        Compliance
      </modus-wc-typography>
      <modus-wc-typography hierarchy="p" size="md">
        Metadata checklist complete. Awaiting final sign-off from the PM.
      </modus-wc-typography>
    </modus-wc-card>

    <modus-wc-card padding="compact" bordered="false">
      <modus-wc-typography slot="title" hierarchy="h2" size="md">
        Attachments
      </modus-wc-typography>
      <modus-wc-typography hierarchy="p" size="md">
        14 reference photos and 3 calibration certificates on file.
      </modus-wc-typography>
    </modus-wc-card>
  </div>
</div>

<modus-wc-modal modal-id="scroll-lock-demo" aria-label="Scroll lock demonstration">
  <span slot="header">Publish preview</span>
  <div slot="content">
    <modus-wc-typography hierarchy="p" size="md">
      Page scroll is hidden for this story only. Closing the dialog restores default
      scroll and removes extra body padding.
    </modus-wc-typography>
  </div>
  <div slot="footer" class="scroll-lock-demo__modal-footer">
    <modus-wc-button id="close-scroll-lock-modal" color="tertiary" variant="outlined" size="sm">
      Cancel
    </modus-wc-button>
    <modus-wc-button id="confirm-scroll-lock-modal" color="primary" variant="filled" size="sm">
      <modus-wc-icon name="check" size="xs" decorative></modus-wc-icon>
      Confirm
    </modus-wc-button>
  </div>
</modus-wc-modal>

<script>
  document.documentElement.classList.add('modus-wc-modal-scroll-lock-story');

  const modalId = 'scroll-lock-demo';

  const getScrollbarWidth = () => {
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

  const measureScrollbarWidth = () =>
    Math.max(
      getScrollbarWidth(),
      window.innerWidth - document.documentElement.clientWidth
    );

  const wireDialogScrollLock = (dialog) => {
    const docEl = document.documentElement;
    const body = document.body;

    let bodyPaddingRestore = body.style.paddingRight;
    let docOverflowRestore = docEl.style.overflow;
    let bodyOverflowRestore = body.style.overflow;
    let openCount = 0;

    const applyScrollLock = () => {
      if (openCount++ > 0) return;

      const scrollbarWidth = measureScrollbarWidth();

      bodyPaddingRestore = body.style.paddingRight;
      docOverflowRestore = docEl.style.overflow;
      bodyOverflowRestore = body.style.overflow;

      if (scrollbarWidth > 0) {
        const bodyPaddingRight =
          (parseFloat(window.getComputedStyle(body).paddingRight) || 0) +
          scrollbarWidth;
        body.style.paddingRight = bodyPaddingRight + 'px';
      }

      docEl.style.setProperty('overflow', 'hidden', 'important');
      body.style.setProperty('overflow', 'hidden', 'important');
    };

    const clearScrollLock = () => {
      if (openCount === 0) return;
      if (--openCount > 0) return;

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
      if (!dialog.open) applyScrollLock();
      nativeShowModal();
    };

    dialog.close = (returnValue) => {
      nativeClose(returnValue);
    };

    dialog.addEventListener('close', clearScrollLock);

    return () => {
      dialog.showModal = nativeShowModal;
      dialog.close = nativeClose;
      dialog.removeEventListener('close', clearScrollLock);
      if (dialog.open) clearScrollLock();
    };
  };

  const resolveDialog = () => {
    const byId = document.getElementById(modalId);
    if (byId instanceof HTMLDialogElement) {
      return byId;
    }
    const host = document.querySelector(
      'modus-wc-modal[modal-id="' + modalId + '"]'
    );
    const nested = host?.querySelector('dialog');
    return nested instanceof HTMLDialogElement ? nested : null;
  };

  let scrollLockWired = false;

  const ensureWired = async () => {
    if (!customElements.get('modus-wc-modal')) {
      await customElements.whenDefined('modus-wc-modal');
    }
    const dialog = resolveDialog();
    if (!dialog) {
      return null;
    }
    if (!scrollLockWired) {
      wireDialogScrollLock(dialog);
      scrollLockWired = true;
    }
    return dialog;
  };

  const openModal = async () => {
    const dialog = await ensureWired();
    dialog?.showModal();
  };

  const closeModal = async () => {
    const dialog = await ensureWired();
    dialog?.close();
  };

  const bindButtons = () => {
    document
      .getElementById('open-scroll-lock-modal')
      ?.addEventListener('buttonClick', () => {
        void openModal();
      });
    document
      .getElementById('close-scroll-lock-modal')
      ?.addEventListener('buttonClick', () => {
        void closeModal();
      });
    document
      .getElementById('confirm-scroll-lock-modal')
      ?.addEventListener('buttonClick', () => {
        void closeModal();
      });
  };

  bindButtons();
</script>
`;
