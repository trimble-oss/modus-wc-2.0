import{k as r}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";function u(o=8){return Math.random().toString(36).substring(2,2+o)}const h={title:"Components/Modal",component:"modus-wc-modal",args:{"modal-id":"my_modal_1"},argTypes:{backdrop:{control:{type:"select"},options:["default","static"]},position:{control:{type:"select"},options:["bottom","center","top"]}},parameters:{layout:"centered"}},e={render:o=>{const t=u(4);return r`
<modus-wc-button onclick="${o["modal-id"]+t}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${n(o["custom-class"])}
  fullscreen=${n(o.fullscreen)}
  modal-id=${o["modal-id"]+t}
  backdrop=${n(o.backdrop)}
  position=${n(o.position)}
  show-close=${n(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="${o["modal-id"]+t}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `}},s={render:o=>r`
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
  backdrop=${n(o.backdrop)}
  position=${n(o.position)}
  show-close=${n(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <p slot="content">Sample expanded modal content.</p>
  <modus-wc-button slot="footer" onclick="modal2.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `};var a,d,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="\${args['modal-id'] + uniqueModalId}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    \`;
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,c,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  <p slot="content">Sample expanded modal content.</p>
  <modus-wc-button slot="footer" onclick="modal2.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    \`;
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const b=["Default","CustomWidthAndHeight"];export{s as CustomWidthAndHeight,e as Default,b as __namedExportsOrder,h as default};
