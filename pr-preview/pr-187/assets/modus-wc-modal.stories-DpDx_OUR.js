import{k as i}from"./lit-element-DVRzCIa_.js";import{t as e}from"./if-defined-1ipA9LQg.js";function u(o=8){return Math.random().toString(36).substring(2,2+o)}const h={title:"Components/Modal",component:"modus-wc-modal",args:{"modal-id":"my_modal_1"},argTypes:{backdrop:{control:{type:"select"},options:["default","static"]},position:{control:{type:"select"},options:["bottom","center","top"]}},parameters:{layout:"centered"}},s={render:o=>{const t=u(4);return i`
<modus-wc-button onclick="${o["modal-id"]+t}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${e(o["custom-class"])}
  fullscreen=${e(o.fullscreen)}
  modal-id=${o["modal-id"]+t}
  backdrop=${e(o.backdrop)}
  position=${e(o.position)}
  show-close=${e(o["show-close"])}
  show-fullscreen-toggle=${e(o["show-fullscreen-toggle"])}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="${o["modal-id"]+t}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `}},n={render:o=>i`
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
  backdrop=${e(o.backdrop)}
  position=${e(o.position)}
  show-close=${e(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <p slot="content">Sample modal content.</p>
  <modus-wc-button slot="footer" onclick="modal2.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `};var a,l,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
  fullscreen=\${ifDefined(args.fullscreen)}
  modal-id=\${args['modal-id'] + uniqueModalId}
  backdrop=\${ifDefined(args.backdrop)}
  position=\${ifDefined(args.position)}
  show-close=\${ifDefined(args['show-close'])}
  show-fullscreen-toggle=\${ifDefined(args['show-fullscreen-toggle'])}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="\${args['modal-id'] + uniqueModalId}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    \`;
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,r;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(r=(m=n.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const f=["Default","CustomWidthAndHeight"];export{n as CustomWidthAndHeight,s as Default,f as __namedExportsOrder,h as default};
