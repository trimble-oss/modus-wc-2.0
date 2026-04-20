import{x as l}from"./lit-element-CucEn6F2.js";import{o as m}from"./if-defined-BiZP-SBN.js";import{c as B}from"./shadow-host-helper-A4Nvcs5e.js";function N(o=8){return Math.random().toString(36).substring(2,2+o)}var h=Object.freeze,T=Object.defineProperty,S=(o,t)=>h(T(o,"raw",{value:h(o.slice())})),p;const D={title:"Components/Modal",component:"modus-wc-modal",args:{backdrop:"default","custom-class":"",fullscreen:!1,"modal-id":"my_modal_1",position:"center","show-close":!0,"show-fullscreen-toggle":!1},argTypes:{backdrop:{control:{type:"select"},options:["default","static"]},position:{control:{type:"select"},options:["bottom","center","top"]}},parameters:{layout:"centered"}},x=l(p||(p=S([`
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
`]))),d={render:o=>{const t=`${o["modal-id"]}${N(4)}}`,n=a=>{const e=document.getElementById(t);e&&(a==="show"?e.showModal():e.close())};return l`
<modus-wc-button id="open-modal-btn" @buttonClick=${()=>n("show")}>
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${m(o["custom-class"])}
  fullscreen=${o.fullscreen}
  modal-id=${t}
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
${x}
    `}},i={render:o=>{const t=`${o["modal-id"]}${N(4)}}`,n=a=>{const e=document.getElementById(t);e&&(a==="show"?e.showModal():e.close())};return l`
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
  modal-id=${t}
  backdrop=${m(o.backdrop)}
  position=${m(o.position)}
  show-close=${m(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <p slot="content">Sample modal content.</p>
  <modus-wc-button slot="footer" id="close-modal-btn" @buttonClick=${()=>n("hide")}>
    Close
  </modus-wc-button>
</modus-wc-modal>
${x}
    `}},r={render:o=>{const t="shadow-dom-modal",n=a=>{const e=document.getElementById(t);e&&e.showModal()};if(!customElements.get("modal-shadow-host")){const a=B({componentTag:"modus-wc-modal",propsMapper:(e,u)=>{const s=u;s.backdrop=e.backdrop,s.customClass=e["custom-class"]||"",s.fullscreen=!!e.fullscreen,s.modalId=t,s.position=e.position,s.showClose=!!e["show-close"],s.showFullscreenToggle=!!e["show-fullscreen-toggle"],u.hasChildNodes()||(u.innerHTML='<span slot="header">Modal Title</span><span slot="content">This is sample modal content.</span>')}});customElements.define("modal-shadow-host",a)}return l`
<modus-wc-button @buttonClick=${()=>n()}>
  Open modal
</modus-wc-button>
<modal-shadow-host .props=${{...o}}></modal-shadow-host>
    `}},c={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - Modal identification is now required via the `modal-id` prop.\n  - 2.0 requires the use of slots for a fully customizable `header`, `content`, and `footer`.\n  Primary and secondary buttons as well as `header-text` are no longer built-in.\n  - In 1.0, modals had built-in open/close state management with methods. 2.0 uses the native HTML dialog\n  element with `modal-id` to target the dialog with native `showModal()` and `close()` methods.\n\n#### Prop Mapping\n\n| 1.0 Prop                     | 2.0 Prop                | Notes                                         |\n|------------------------------|-------------------------|-----------------------------------------------|\n| aria-label                   | aria-label              |                                               |\n| backdrop                     | backdrop                |                                               |\n| fullscreen                   | fullscreen              |                                               |\n| header-text                  |                         | Not carried over, use `header` slot instead |\n| primary-button-aria-label    |                         | Not carried over, use `footer` slot instead |\n| primary-button-disabled      |                         | Not carried over, use `footer` slot instead |\n| primary-button-text          |                         | Not carried over, use `footer` slot instead |\n| secondary-button-aria-label  |                         | Not carried over, use `footer` slot instead |\n| secondary-button-disabled    |                         | Not carried over, use `footer` slot instead |\n| secondary-button-text        |                         | Not carried over, use `footer` slot instead |\n| show-fullscreen-toggle       | show-fullscreen-toggle  |                                               |\n| z-index                      |                         | Not carried over, use CSS instead             |\n\n#### Event Mapping\n\n| 1.0 Event            | 2.0 Event | Notes                                                                             |\n|----------------------|-----------|-----------------------------------------------------------------------------------|\n| closed               |           | Not carried over, use dialog `close()` event instead                            |\n| opened               |           | Not carried over, use dialog `showModal()` event instead                        |\n| primaryButtonClick   |           | Not carried over, handle with events on custom buttons in `footer` slot instead |\n| secondaryButtonClick |           | Not carried over, handle with events on custom buttons in `footer` slot instead |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>l`<div></div>`};var b,w,g;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(w=d.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var f,v,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var M,$,E;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const modalId = \`shadow-dom-modal\`;
    const handleModalVisibility = (action: 'show' | 'hide') => {
      const modal = document.getElementById(modalId) as HTMLDialogElement;
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
            el.innerHTML = \`<span slot="header">Modal Title</span><span slot="content">This is sample modal content.</span>\`;
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
}`,...(E=($=r.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var k,C,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const _=["Default","CustomWidthAndHeight","ShadowDomParent","Migration"];export{i as CustomWidthAndHeight,d as Default,c as Migration,r as ShadowDomParent,_ as __namedExportsOrder,D as default};
