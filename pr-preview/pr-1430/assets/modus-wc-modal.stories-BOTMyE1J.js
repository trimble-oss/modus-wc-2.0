import{b as r}from"./lit-element-DgBvYnzn.js";import{o as g}from"./if-defined-BnVFTJ4o.js";import{c as R}from"./shadow-host-helper-A4Nvcs5e.js";function b(o=8){return Math.random().toString(36).substring(2,2+o)}var v=Object.freeze,W=Object.defineProperty,O=(o,s)=>v(W(o,"raw",{value:v(o.slice())})),k;const J={title:"Components/Modal",component:"modus-wc-modal",args:{backdrop:"default","custom-class":"",fullscreen:!1,"modal-id":"my_modal_1",position:"center","show-close":!0,"show-fullscreen-toggle":!1},argTypes:{backdrop:{control:{type:"select"},options:["default","static"]},position:{control:{type:"select"},options:["bottom","center","top"]}},parameters:{layout:"centered"}},q=()=>{const o=document.createElement("div");o.style.width="100px",o.style.height="100px",o.style.overflow="scroll",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const s=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),s},A=()=>Math.max(q(),window.innerWidth-document.documentElement.clientWidth),j=o=>{const s=document.documentElement,l=document.body;let a=l.style.paddingRight,e=s.style.overflow,n=l.style.overflow,t=0;const d=()=>{if(t++>0)return;const c=A();if(a=l.style.paddingRight,e=s.style.overflow,n=l.style.overflow,c>0){const V=(parseFloat(window.getComputedStyle(l).paddingRight)||0)+c;l.style.paddingRight=`${V}px`}s.style.setProperty("overflow","hidden","important"),l.style.setProperty("overflow","hidden","important")},i=()=>{t!==0&&(--t>0||(a?l.style.paddingRight=a:l.style.removeProperty("padding-right"),e?s.style.overflow=e:s.style.removeProperty("overflow"),n?l.style.overflow=n:l.style.removeProperty("overflow"),a="",e="",n=""))},y=o.showModal.bind(o),f=o.close.bind(o);return o.showModal=()=>{o.open||d(),y()},o.close=c=>{f(c)},o.addEventListener("close",i),()=>{o.showModal=y,o.close=f,o.removeEventListener("close",i),o.open&&i(),s.classList.remove("modus-wc-modal-scroll-lock-story")}},H=r(k||(k=O([`
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
  <\/script>
`]))),m={render:o=>{const s=`${o["modal-id"]}${b(4)}}`,l=a=>{const e=document.getElementById(s);e&&(a==="show"?e.showModal():e.close())};return r`
<modus-wc-button id="open-modal-btn" @buttonClick=${()=>l("show")}>
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${g(o["custom-class"])}
  fullscreen=${o.fullscreen}
  modal-id=${s}
  backdrop=${o.backdrop}
  position=${o.position}
  show-close=${o["show-close"]}
  show-fullscreen-toggle=${o["show-fullscreen-toggle"]}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" id="close-modal-btn" @buttonClick=${()=>l("hide")}>
    Close
  </modus-wc-button>
</modus-wc-modal>
${H}
    `}},u={render:o=>{const s=`${o["modal-id"]}${b(4)}}`,l=a=>{const e=document.getElementById(s);e&&(a==="show"?e.showModal():e.close())};return r`
<style>
  .expanded-modal .modus-wc-modal-box {
    width: 80%;
    max-width: none;
    height: 60%;
    max-height: none;
  }
</style>
<modus-wc-button id="open-modal-btn" @buttonClick=${()=>l("show")}>
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class="expanded-modal"
  modal-id=${s}
  backdrop=${g(o.backdrop)}
  position=${g(o.position)}
  show-close=${g(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <p slot="content">Sample modal content.</p>
  <modus-wc-button slot="footer" id="close-modal-btn" @buttonClick=${()=>l("hide")}>
    Close
  </modus-wc-button>
</modus-wc-modal>
${H}
    `}},p={parameters:{layout:"fullscreen",docs:{description:{story:"\nDefault Modus CSS keeps `:root` at `overflow: auto` and `scrollbar-gutter: auto` while a modal is open (see `global.css`). This story shows an optional app pattern: hide page scroll (`overflow: hidden` on `html`/`body`) plus `document.body` `padding-right` equal to the scrollbar width before `showModal()`, restored on dialog `close`.\n\nSee `wireDialogScrollLockExample` in this story source file.\n        "},source:{type:"code"}}},render:()=>{const o=`body-padding-demo-${b(4)}`;let s;const l=()=>document.getElementById(o),a=()=>{const t=l();return document.documentElement.classList.add("modus-wc-modal-scroll-lock-story"),!t||t.dataset.bodyPaddingWired==="true"||(s==null||s(),s=j(t),t.dataset.bodyPaddingWired="true"),t},e=t=>{const d=a();d&&(t==="show"?d.showModal():d.close())};return r`
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
    <modus-wc-card padding="compact" bordered=${!1}>
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
            @buttonClick=${()=>e("show")}
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
    ${[{title:"Site overview",body:"Elevation models and boundary linework for the north campus expansion."},{title:"Field notes — March 12",body:"Control points verified against NGS datasheet. Residuals within project tolerance."},{title:"Deliverables",body:"DXF, LandXML, and PDF plan set uploaded to the shared project folder."},{title:"Issues",body:"Two clash reports pending review near the utility corridor."},{title:"Team",body:"Survey lead assigned. CAD support scheduled for next sprint."},{title:"Compliance",body:"Metadata checklist complete. Awaiting final sign-off from the PM."},{title:"Attachments",body:"14 reference photos and 3 calibration certificates on file."}].map(t=>r`
        <modus-wc-card padding="compact" bordered=${!1}>
          <modus-wc-typography slot="title" hierarchy="h2" size="md">
            ${t.title}
          </modus-wc-typography>
          <modus-wc-typography hierarchy="p" size="md">${t.body}</modus-wc-typography>
        </modus-wc-card>
      `)}
  </div>
</div>
<modus-wc-modal aria-label="Scroll lock demonstration" modal-id=${o}>
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
      @buttonClick=${()=>e("hide")}
    >
      Cancel
    </modus-wc-button>
    <modus-wc-button
      color="primary"
      variant="filled"
      size="sm"
      @buttonClick=${()=>e("hide")}
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
    `}},h={render:o=>{const s="shadow-dom-modal",l=a=>{var t;const e=document.querySelector("modal-shadow-host"),n=(t=e==null?void 0:e.shadowRoot)==null?void 0:t.getElementById(s);n&&n.showModal()};if(!customElements.get("modal-shadow-host")){const a=R({componentTag:"modus-wc-modal",propsMapper:(e,n)=>{const t=n;if(t.backdrop=e.backdrop,t.customClass=e["custom-class"]||"",t.fullscreen=!!e.fullscreen,t.modalId=s,t.position=e.position,t.showClose=!!e["show-close"],t.showFullscreenToggle=!!e["show-fullscreen-toggle"],!n.hasChildNodes()){n.innerHTML='<span slot="header">Modal Title</span><span slot="content">This is sample modal content.</span><modus-wc-button slot="footer">Close</modus-wc-button>';const d=n.querySelector('modus-wc-button[slot="footer"]');d==null||d.addEventListener("buttonClick",()=>{const i=n.querySelector("dialog");i==null||i.close()})}}});customElements.define("modal-shadow-host",a)}return r`
<modus-wc-button @buttonClick=${()=>l()}>
  Open modal
</modus-wc-button>
<modal-shadow-host .props=${{...o}}></modal-shadow-host>
    `}},w={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - Modal identification is now required via the `modal-id` prop.\n  - 2.0 requires the use of slots for a fully customizable `header`, `content`, and `footer`.\n  Primary and secondary buttons as well as `header-text` are no longer built-in.\n  - In 1.0, modals had built-in open/close state management with methods. 2.0 uses the native HTML dialog\n  element with `modal-id` to target the dialog with native `showModal()` and `close()` methods.\n\n#### Prop Mapping\n\n| 1.0 Prop                     | 2.0 Prop                | Notes                                         |\n|------------------------------|-------------------------|-----------------------------------------------|\n| aria-label                   | aria-label              |                                               |\n| backdrop                     | backdrop                |                                               |\n| fullscreen                   | fullscreen              |                                               |\n| header-text                  |                         | Not carried over, use `header` slot instead |\n| primary-button-aria-label    |                         | Not carried over, use `footer` slot instead |\n| primary-button-disabled      |                         | Not carried over, use `footer` slot instead |\n| primary-button-text          |                         | Not carried over, use `footer` slot instead |\n| secondary-button-aria-label  |                         | Not carried over, use `footer` slot instead |\n| secondary-button-disabled    |                         | Not carried over, use `footer` slot instead |\n| secondary-button-text        |                         | Not carried over, use `footer` slot instead |\n| show-fullscreen-toggle       | show-fullscreen-toggle  |                                               |\n| z-index                      |                         | Not carried over, use CSS instead             |\n\n#### Event Mapping\n\n| 1.0 Event            | 2.0 Event | Notes                                                                             |\n|----------------------|-----------|-----------------------------------------------------------------------------------|\n| closed               |           | Not carried over, use dialog `close()` event instead                            |\n| opened               |           | Not carried over, use dialog `showModal()` event instead                        |\n| primaryButtonClick   |           | Not carried over, handle with events on custom buttons in `footer` slot instead |\n| secondaryButtonClick |           | Not carried over, handle with events on custom buttons in `footer` slot instead |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var x,M,_;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const modalId = \`\${args['modal-id']}\${generateRandomId(4)}}\`;
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
    return html\`
<modus-wc-button id="open-modal-btn" @buttonClick=\${() => handleModalVisibility('show')}>
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=\${ifDefined(args['custom-class'])}
  fullscreen=\${args.fullscreen}
  modal-id=\${modalId}
  backdrop=\${args.backdrop}
  position=\${args.position}
  show-close=\${args['show-close']}
  show-fullscreen-toggle=\${args['show-fullscreen-toggle']}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" id="close-modal-btn" @buttonClick=\${() => handleModalVisibility('hide')}>
    Close
  </modus-wc-button>
</modus-wc-modal>
\${illustrativeScript}
    \`;
  }
}`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,C,E;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const modalId = \`\${args['modal-id']}\${generateRandomId(4)}}\`;
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
    return html\`
<style>
  .expanded-modal .modus-wc-modal-box {
    width: 80%;
    max-width: none;
    height: 60%;
    max-height: none;
  }
</style>
<modus-wc-button id="open-modal-btn" @buttonClick=\${() => handleModalVisibility('show')}>
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class="expanded-modal"
  modal-id=\${modalId}
  backdrop=\${ifDefined(args.backdrop)}
  position=\${ifDefined(args.position)}
  show-close=\${ifDefined(args['show-close'])}
>
  <span slot="header">Modal Title</span>
  <p slot="content">Sample modal content.</p>
  <modus-wc-button slot="footer" id="close-modal-btn" @buttonClick=\${() => handleModalVisibility('hide')}>
    Close
  </modus-wc-button>
</modus-wc-modal>
\${illustrativeScript}
    \`;
  }
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,T,z;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: \`
Default Modus CSS keeps \\\`:root\\\` at \\\`overflow: auto\\\` and \\\`scrollbar-gutter: auto\\\` while a modal is open (see \\\`global.css\\\`). This story shows an optional app pattern: hide page scroll (\\\`overflow: hidden\\\` on \\\`html\\\`/\\\`body\\\`) plus \\\`document.body\\\` \\\`padding-right\\\` equal to the scrollbar width before \\\`showModal()\\\`, restored on dialog \\\`close\\\`.

See \\\`wireDialogScrollLockExample\\\` in this story source file.
        \`
      },
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const modalId = \`body-padding-demo-\${generateRandomId(4)}\`;
    let teardown: (() => void) | undefined;
    const getDialog = (): HTMLDialogElement | null => document.getElementById(modalId) as HTMLDialogElement | null;
    const ensureWired = (): HTMLDialogElement | null => {
      const dialog = getDialog();
      document.documentElement.classList.add('modus-wc-modal-scroll-lock-story');
      if (!dialog || dialog.dataset.bodyPaddingWired === 'true') {
        return dialog;
      }
      teardown?.();
      teardown = wireDialogScrollLockExample(dialog);
      dialog.dataset.bodyPaddingWired = 'true';
      return dialog;
    };
    const handleModalVisibility = (action: 'show' | 'hide') => {
      const dialog = ensureWired();
      if (!dialog) {
        return;
      }
      if (action === 'show') {
        dialog.showModal();
      } else {
        dialog.close();
      }
    };
    const scrollSections = [{
      title: 'Site overview',
      body: 'Elevation models and boundary linework for the north campus expansion.'
    }, {
      title: 'Field notes — March 12',
      body: 'Control points verified against NGS datasheet. Residuals within project tolerance.'
    }, {
      title: 'Deliverables',
      body: 'DXF, LandXML, and PDF plan set uploaded to the shared project folder.'
    }, {
      title: 'Issues',
      body: 'Two clash reports pending review near the utility corridor.'
    }, {
      title: 'Team',
      body: 'Survey lead assigned. CAD support scheduled for next sprint.'
    }, {
      title: 'Compliance',
      body: 'Metadata checklist complete. Awaiting final sign-off from the PM.'
    }, {
      title: 'Attachments',
      body: '14 reference photos and 3 calibration certificates on file.'
    }];

    // prettier-ignore
    return html\`
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
    <modus-wc-card padding="compact" bordered=\${false}>
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
            @buttonClick=\${() => handleModalVisibility('show')}
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
    \${scrollSections.map(section => html\`
        <modus-wc-card padding="compact" bordered=\${false}>
          <modus-wc-typography slot="title" hierarchy="h2" size="md">
            \${section.title}
          </modus-wc-typography>
          <modus-wc-typography hierarchy="p" size="md">\${section.body}</modus-wc-typography>
        </modus-wc-card>
      \`)}
  </div>
</div>
<modus-wc-modal aria-label="Scroll lock demonstration" modal-id=\${modalId}>
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
      @buttonClick=\${() => handleModalVisibility('hide')}
    >
      Cancel
    </modus-wc-button>
    <modus-wc-button
      color="primary"
      variant="filled"
      size="sm"
      @buttonClick=\${() => handleModalVisibility('hide')}
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
    \`;
  }
}`,...(z=(T=p.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var D,I,L;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const modalId = \`shadow-dom-modal\`;
    const handleModalVisibility = (action: 'show' | 'hide') => {
      // The dialog lives inside the shadow host's shadowRoot, not in document
      const host = document.querySelector('modal-shadow-host') as HTMLElement & {
        shadowRoot: ShadowRoot;
      };
      const modal = host?.shadowRoot?.getElementById(modalId) as HTMLDialogElement;
      if (modal) {
        if (action === 'show') modal.showModal();else modal.close();
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
            el.innerHTML = \`<span slot="header">Modal Title</span><span slot="content">This is sample modal content.</span><modus-wc-button slot="footer">Close</modus-wc-button>\`;
            // Wire the footer close button to close the dialog
            const closeBtn = el.querySelector('modus-wc-button[slot="footer"]');
            closeBtn?.addEventListener('buttonClick', () => {
              const dialog = el.querySelector('dialog') as HTMLDialogElement;
              dialog?.close();
            });
          }
        }
      });
      customElements.define('modal-shadow-host', ModalShadowHost);
    }

    // prettier-ignore
    return html\`
<modus-wc-button @buttonClick=\${() => handleModalVisibility('show')}>
  Open modal
</modus-wc-button>
<modal-shadow-host .props=\${{
      ...args
    }}></modal-shadow-host>
    \`;
  }
}`,...(L=(I=h.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var N,P,B;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - Modal identification is now required via the \\\`modal-id\\\` prop.
  - 2.0 requires the use of slots for a fully customizable \\\`header\\\`, \\\`content\\\`, and \\\`footer\\\`.
  Primary and secondary buttons as well as \\\`header-text\\\` are no longer built-in.
  - In 1.0, modals had built-in open/close state management with methods. 2.0 uses the native HTML dialog
  element with \\\`modal-id\\\` to target the dialog with native \\\`showModal()\\\` and \\\`close()\\\` methods.

#### Prop Mapping

| 1.0 Prop                     | 2.0 Prop                | Notes                                         |
|------------------------------|-------------------------|-----------------------------------------------|
| aria-label                   | aria-label              |                                               |
| backdrop                     | backdrop                |                                               |
| fullscreen                   | fullscreen              |                                               |
| header-text                  |                         | Not carried over, use \\\`header\\\` slot instead |
| primary-button-aria-label    |                         | Not carried over, use \\\`footer\\\` slot instead |
| primary-button-disabled      |                         | Not carried over, use \\\`footer\\\` slot instead |
| primary-button-text          |                         | Not carried over, use \\\`footer\\\` slot instead |
| secondary-button-aria-label  |                         | Not carried over, use \\\`footer\\\` slot instead |
| secondary-button-disabled    |                         | Not carried over, use \\\`footer\\\` slot instead |
| secondary-button-text        |                         | Not carried over, use \\\`footer\\\` slot instead |
| show-fullscreen-toggle       | show-fullscreen-toggle  |                                               |
| z-index                      |                         | Not carried over, use CSS instead             |

#### Event Mapping

| 1.0 Event            | 2.0 Event | Notes                                                                             |
|----------------------|-----------|-----------------------------------------------------------------------------------|
| closed               |           | Not carried over, use dialog \\\`close()\\\` event instead                            |
| opened               |           | Not carried over, use dialog \\\`showModal()\\\` event instead                        |
| primaryButtonClick   |           | Not carried over, handle with events on custom buttons in \\\`footer\\\` slot instead |
| secondaryButtonClick |           | Not carried over, handle with events on custom buttons in \\\`footer\\\` slot instead |
        \`
      }
    },
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  render: () => html\`<div></div>\`
}`,...(B=(P=w.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const K=["Default","CustomWidthAndHeight","HiddenScrollLockExample","ShadowDomParent","Migration"];export{u as CustomWidthAndHeight,m as Default,p as HiddenScrollLockExample,w as Migration,h as ShadowDomParent,K as __namedExportsOrder,J as default};
