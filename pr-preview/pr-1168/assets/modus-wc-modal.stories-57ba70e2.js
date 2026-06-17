import{b as d}from"./lit-element-38260dd9.js";import{o as u}from"./if-defined-30b85b98.js";import{c as P}from"./shadow-host-helper-0b7f7548.js";var L=Object.defineProperty,O=(o,e)=>{for(var n in e)L(o,n,{get:e[n],enumerable:!0})},V=o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),D={};O(D,{err:()=>B,map:()=>R,ok:()=>w,unwrap:()=>q,unwrapErr:()=>z});var w=o=>({isOk:!0,isErr:!1,value:o}),B=o=>({isOk:!1,isErr:!0,value:o});function R(o,e){if(o.isOk){const n=e(o.value);return n instanceof Promise?n.then(a=>w(a)):w(n)}if(o.isErr){const n=o.value;return B(n)}throw"should never get here"}var q=o=>{if(o.isOk)return o.value;throw o.value},z=o=>{if(o.isErr)return o.value;throw o.value},b=o=>{const e=V(o);return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${e}))(${e}\\b)`,"g")};b("::slotted");b(":host");b(":host-context");function H(o=8){return Math.random().toString(36).substring(2,2+o)}var f=Object.freeze,A=Object.defineProperty,j=(o,e)=>f(A(o,"raw",{value:f(e||o.slice())})),g;const J={title:"Components/Modal",component:"modus-wc-modal",args:{backdrop:"default","custom-class":"",fullscreen:!1,"modal-id":"my_modal_1",position:"center","show-close":!0,"show-fullscreen-toggle":!1},argTypes:{backdrop:{control:{type:"select"},options:["default","static"]},position:{control:{type:"select"},options:["bottom","center","top"]}},parameters:{layout:"centered"}},_=d(g||(g=j([`
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
`]))),r={render:o=>{const e=`${o["modal-id"]}${H(4)}}`,n=a=>{const t=document.getElementById(e);t&&(a==="show"?t.showModal():t.close())};return d`
<modus-wc-button id="open-modal-btn" @buttonClick=${()=>n("show")}>
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${u(o["custom-class"])}
  fullscreen=${o.fullscreen}
  modal-id=${e}
  backdrop=${o.backdrop}
  position=${o.position}
  show-close=${o["show-close"]}
  show-fullscreen-toggle=${o["show-fullscreen-toggle"]}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" id="close-modal-btn" @buttonClick=${()=>n("hide")}>
    Close
  </modus-wc-button>
</modus-wc-modal>
${_}
    `}},i={render:o=>{const e=`${o["modal-id"]}${H(4)}}`,n=a=>{const t=document.getElementById(e);t&&(a==="show"?t.showModal():t.close())};return d`
<style>
  .expanded-modal .modus-wc-modal-box {
    width: 80%;
    max-width: none;
    height: 60%;
    max-height: none;
  }
</style>
<modus-wc-button id="open-modal-btn" @buttonClick=${()=>n("show")}>
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class="expanded-modal"
  modal-id=${e}
  backdrop=${u(o.backdrop)}
  position=${u(o.position)}
  show-close=${u(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <p slot="content">Sample modal content.</p>
  <modus-wc-button slot="footer" id="close-modal-btn" @buttonClick=${()=>n("hide")}>
    Close
  </modus-wc-button>
</modus-wc-modal>
${_}
    `}},c={render:o=>{const e="shadow-dom-modal",n=a=>{var s;const t=document.querySelector("modal-shadow-host"),l=(s=t==null?void 0:t.shadowRoot)==null?void 0:s.getElementById(e);l&&(a==="show"?l.showModal():l.close())};if(!customElements.get("modal-shadow-host")){const a=P({componentTag:"modus-wc-modal",propsMapper:(t,l)=>{const s=l;if(s.backdrop=t.backdrop,s.customClass=t["custom-class"]||"",s.fullscreen=Boolean(t.fullscreen),s.modalId=e,s.position=t.position,s.showClose=Boolean(t["show-close"]),s.showFullscreenToggle=Boolean(t["show-fullscreen-toggle"]),!l.hasChildNodes()){l.innerHTML='<span slot="header">Modal Title</span><span slot="content">This is sample modal content.</span><modus-wc-button slot="footer">Close</modus-wc-button>';const h=l.querySelector('modus-wc-button[slot="footer"]');h==null||h.addEventListener("buttonClick",()=>{const p=l.querySelector("dialog");p==null||p.close()})}}});customElements.define("modal-shadow-host",a)}return d`
<modus-wc-button @buttonClick=${()=>n("show")}>
  Open modal
</modus-wc-button>
<modal-shadow-host .props=${{...o}}></modal-shadow-host>
    `}},m={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - Modal identification is now required via the `modal-id` prop.\n  - 2.0 requires the use of slots for a fully customizable `header`, `content`, and `footer`.\n  Primary and secondary buttons as well as `header-text` are no longer built-in.\n  - In 1.0, modals had built-in open/close state management with methods. 2.0 uses the native HTML dialog\n  element with `modal-id` to target the dialog with native `showModal()` and `close()` methods.\n\n#### Prop Mapping\n\n| 1.0 Prop                     | 2.0 Prop                | Notes                                         |\n|------------------------------|-------------------------|-----------------------------------------------|\n| aria-label                   | aria-label              |                                               |\n| backdrop                     | backdrop                |                                               |\n| fullscreen                   | fullscreen              |                                               |\n| header-text                  |                         | Not carried over, use `header` slot instead |\n| primary-button-aria-label    |                         | Not carried over, use `footer` slot instead |\n| primary-button-disabled      |                         | Not carried over, use `footer` slot instead |\n| primary-button-text          |                         | Not carried over, use `footer` slot instead |\n| secondary-button-aria-label  |                         | Not carried over, use `footer` slot instead |\n| secondary-button-disabled    |                         | Not carried over, use `footer` slot instead |\n| secondary-button-text        |                         | Not carried over, use `footer` slot instead |\n| show-fullscreen-toggle       | show-fullscreen-toggle  |                                               |\n| z-index                      |                         | Not carried over, use CSS instead             |\n\n#### Event Mapping\n\n| 1.0 Event            | 2.0 Event | Notes                                                                             |\n|----------------------|-----------|-----------------------------------------------------------------------------------|\n| closed               |           | Not carried over, use dialog `close()` event instead                            |\n| opened               |           | Not carried over, use dialog `showModal()` event instead                        |\n| primaryButtonClick   |           | Not carried over, handle with events on custom buttons in `footer` slot instead |\n| secondaryButtonClick |           | Not carried over, handle with events on custom buttons in `footer` slot instead |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>d`<div></div>`};var v,y,M;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(M=(y=r.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var E,$,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=($=i.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var C,S,x;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(S=c.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,N,T;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const K=["Default","CustomWidthAndHeight","ShadowDomParent","Migration"];export{i as CustomWidthAndHeight,r as Default,m as Migration,c as ShadowDomParent,K as __namedExportsOrder,J as default};
