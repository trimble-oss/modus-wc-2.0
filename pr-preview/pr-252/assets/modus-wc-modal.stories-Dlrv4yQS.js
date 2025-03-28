import{k as i}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";function u(o=8){return Math.random().toString(36).substring(2,2+o)}const h={title:"Components/Modal",component:"modus-wc-modal",args:{backdrop:"default","custom-class":"",fullscreen:!1,"modal-id":"my_modal_1",position:"center","show-close":!0,"show-fullscreen-toggle":!1},argTypes:{backdrop:{control:{type:"select"},options:["default","static"]},position:{control:{type:"select"},options:["bottom","center","top"]}},parameters:{layout:"centered"}},e={render:o=>{const l=u(4);return i`
<modus-wc-button onclick="${o["modal-id"]+l}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${t(o["custom-class"])}
  fullscreen=${o.fullscreen}
  modal-id=${o["modal-id"]+l}
  backdrop=${o.backdrop}
  position=${o.position}
  show-close=${o["show-close"]}
  show-fullscreen-toggle=${o["show-fullscreen-toggle"]}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="${o["modal-id"]+l}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `}},s={render:o=>i`
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
  backdrop=${t(o.backdrop)}
  position=${t(o.position)}
  show-close=${t(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <p slot="content">Sample modal content.</p>
  <modus-wc-button slot="footer" onclick="modal2.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `};var n,a,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(a=e.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var c,m,r;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(r=(m=s.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const b=["Default","CustomWidthAndHeight"];export{s as CustomWidthAndHeight,e as Default,b as __namedExportsOrder,h as default};
