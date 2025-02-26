import{k as l}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";const m={title:"Components/Modal",component:"modus-wc-modal",args:{"modal-id":"my_modal_1"},argTypes:{backdrop:{control:{type:"select"},options:["default","static"]},position:{control:{type:"select"},options:["bottom","center","top"]}},parameters:{layout:"centered"}},e={render:o=>l`
<modus-wc-button onclick="${s(o["modal-id"])}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${s(o["custom-class"])}
  modal-id=${s(o["modal-id"])}
  backdrop=${s(o.backdrop)}
  position=${s(o.position)}
  show-close=${s(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="${s(o["modal-id"])}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `};var t,a,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-button onclick="\${ifDefined(args['modal-id'])}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=\${ifDefined(args['custom-class'])}
  modal-id=\${ifDefined(args['modal-id'])}
  backdrop=\${ifDefined(args.backdrop)}
  position=\${ifDefined(args.position)}
  show-close=\${ifDefined(args['show-close'])}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="\${ifDefined(args['modal-id'])}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    \`;
  }
}`,...(d=(a=e.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,m as default};
