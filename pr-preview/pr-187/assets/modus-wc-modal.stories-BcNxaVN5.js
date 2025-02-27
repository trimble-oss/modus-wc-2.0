import{k as r}from"./lit-element-DVRzCIa_.js";import{t as e}from"./if-defined-1ipA9LQg.js";function u(o=8){return Math.random().toString(36).substring(2,2+o)}const h={title:"Components/Modal",component:"modus-wc-modal",args:{"modal-id":"my_modal_1"},argTypes:{backdrop:{control:{type:"select"},options:["default","static"]},position:{control:{type:"select"},options:["bottom","center","top"]}},parameters:{layout:"centered"}},t={render:o=>{const a=u(4);return r`
<modus-wc-button onclick="${o["modal-id"]+a}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${e(o["custom-class"])}
  modal-id=${o["modal-id"]+a}
  backdrop=${e(o.backdrop)}
  position=${e(o.position)}
  show-close=${e(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="${o["modal-id"]+a}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `}},d={render:o=>r`
<style>
  .expanded-modal .modus-wc-modal-box {
    max-width: 64rem;
    max-height: 64rem;
    width: 96%;
    height: 96%;
  }

  .my-modal-content {
    height: 41rem;
  }
</style>
<modus-wc-button onclick="my_modal_2.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class="expanded-modal"
  modal-id="my_modal_2"
  backdrop=${e(o.backdrop)}
  position=${e(o.position)}
  show-close=${e(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <div class="my-modal-content" slot="content">
    <p>Sample expanded modal content.</p>
  </div>
  <modus-wc-button slot="footer" onclick="my_modal_2.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `};var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,c,i;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .expanded-modal .modus-wc-modal-box {
    max-width: 64rem;
    max-height: 64rem;
    width: 96%;
    height: 96%;
  }

  .my-modal-content {
    height: 41rem;
  }
</style>
<modus-wc-button onclick="my_modal_2.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class="expanded-modal"
  modal-id="my_modal_2"
  backdrop=\${ifDefined(args.backdrop)}
  position=\${ifDefined(args.position)}
  show-close=\${ifDefined(args['show-close'])}
>
  <span slot="header">Modal Title</span>
  <div class="my-modal-content" slot="content">
    <p>Sample expanded modal content.</p>
  </div>
  <modus-wc-button slot="footer" onclick="my_modal_2.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    \`;
  }
}`,...(i=(c=d.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const b=["Default","CustomWidthAndHeight"];export{d as CustomWidthAndHeight,t as Default,b as __namedExportsOrder,h as default};
