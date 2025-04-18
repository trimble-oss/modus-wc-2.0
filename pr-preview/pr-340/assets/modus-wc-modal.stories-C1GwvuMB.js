import{x as r}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";function w(o=8){return Math.random().toString(36).substring(2,2+o)}const v={title:"Components/Modal",component:"modus-wc-modal",args:{backdrop:"default","custom-class":"",fullscreen:!1,"modal-id":"my_modal_1",position:"center","show-close":!0,"show-fullscreen-toggle":!1},argTypes:{backdrop:{control:{type:"select"},options:["default","static"]},position:{control:{type:"select"},options:["bottom","center","top"]}},parameters:{layout:"centered"}},e={render:o=>{const s=w(4);return r`
<modus-wc-button onclick="${o["modal-id"]+s}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${a(o["custom-class"])}
  fullscreen=${o.fullscreen}
  modal-id=${o["modal-id"]+s}
  backdrop=${o.backdrop}
  position=${o.position}
  show-close=${o["show-close"]}
  show-fullscreen-toggle=${o["show-fullscreen-toggle"]}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="${o["modal-id"]+s}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `}},t={render:o=>r`
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
  backdrop=${a(o.backdrop)}
  position=${a(o.position)}
  show-close=${a(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <p slot="content">Sample modal content.</p>
  <modus-wc-button slot="footer" onclick="modal2.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `},n={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - Modal identification is now required via the `modal-id` prop.\n  - 2.0 requires the use of slots for a fully customizable `header`, `content`, and `footer`.\n  Primary and secondary buttons as well as `header-text` are no longer built-in.\n  - In 1.0, modals had built-in open/close state management with methods. 2.0 uses the native HTML dialog\n  element with `modal-id` to target the dialog with native `showModal()` and `close()` methods.\n\n#### Prop Mapping\n\n| 1.0 Prop                     | 2.0 Prop                | Notes                                         |\n|------------------------------|-------------------------|-----------------------------------------------|\n| aria-label                   | aria-label              |                                               |\n| backdrop                     | backdrop                |                                               |\n| fullscreen                   | fullscreen              |                                               |\n| header-text                  |                         | Not carried over, use `header` slot instead |\n| primary-button-aria-label    |                         | Not carried over, use `footer` slot instead |\n| primary-button-disabled      |                         | Not carried over, use `footer` slot instead |\n| primary-button-text          |                         | Not carried over, use `footer` slot instead |\n| secondary-button-aria-label  |                         | Not carried over, use `footer` slot instead |\n| secondary-button-disabled    |                         | Not carried over, use `footer` slot instead |\n| secondary-button-text        |                         | Not carried over, use `footer` slot instead |\n| show-fullscreen-toggle       | show-fullscreen-toggle  |                                               |\n| z-index                      |                         | Not carried over, use CSS instead             |\n\n#### Event Mapping\n\n| 1.0 Event            | 2.0 Event | Notes                                                                             |\n|----------------------|-----------|-----------------------------------------------------------------------------------|\n| closed               |           | Not carried over, use dialog `close()` event instead                            |\n| opened               |           | Not carried over, use dialog `showModal()` event instead                        |\n| primaryButtonClick   |           | Not carried over, handle with events on custom buttons in `footer` slot instead |\n| secondaryButtonClick |           | Not carried over, handle with events on custom buttons in `footer` slot instead |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var d,l,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const uniqueModalId = generateRandomId(4);
    // prettier-ignore
    return html\`
<modus-wc-button onclick="\${args['modal-id'] + uniqueModalId}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=\${ifDefined(args['custom-class'])}
  fullscreen=\${args.fullscreen}
  modal-id=\${args['modal-id'] + uniqueModalId}
  backdrop=\${args.backdrop}
  position=\${args.position}
  show-close=\${args['show-close']}
  show-fullscreen-toggle=\${args['show-fullscreen-toggle']}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="\${args['modal-id'] + uniqueModalId}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    \`;
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
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
  backdrop=\${ifDefined(args.backdrop)}
  position=\${ifDefined(args.position)}
  show-close=\${ifDefined(args['show-close'])}
>
  <span slot="header">Modal Title</span>
  <p slot="content">Sample modal content.</p>
  <modus-wc-button slot="footer" onclick="modal2.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    \`;
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const y=["Default","CustomWidthAndHeight","Migration"];export{t as CustomWidthAndHeight,e as Default,n as Migration,y as __namedExportsOrder,v as default};
