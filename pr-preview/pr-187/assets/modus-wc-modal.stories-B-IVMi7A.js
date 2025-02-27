import{k as i}from"./lit-element-DVRzCIa_.js";import{t as e}from"./if-defined-1ipA9LQg.js";function u(o=8){return Math.random().toString(36).substring(2,2+o)}const b={title:"Components/Modal",component:"modus-wc-modal",args:{"modal-id":"my_modal_1"},argTypes:{backdrop:{control:{type:"select"},options:["default","static"]},position:{control:{type:"select"},options:["bottom","center","top"]}},parameters:{layout:"centered"}},d={render:o=>{const s=u(4);return i`
<modus-wc-button onclick="${o["modal-id"]+s}.showModal()">
  Open modal
</modus-wc-button>
<modus-wc-modal
  aria-label="Example modal"
  custom-class=${e(o["custom-class"])}
  modal-id=${o["modal-id"]+s}
  backdrop=${e(o.backdrop)}
  position=${e(o.position)}
  show-close=${e(o["show-close"])}
>
  <span slot="header">Modal Title</span>
  <span slot="content"> This is sample modal content. </span>
  <modus-wc-button slot="footer" onclick="${o["modal-id"]+s}.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `}},a={render:o=>i`
<style>
  .expanded-modal .modus-wc-modal-box {
    max-width: 64rem;
    width: 96%;
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
  <div slot="content">
    <p>Sample expanded modal content.</p>
  </div>
  <modus-wc-button slot="footer" onclick="my_modal_2.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    `};var t,n,l;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(l=(n=d.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,c,r;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .expanded-modal .modus-wc-modal-box {
    max-width: 64rem;
    width: 96%;
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
  <div slot="content">
    <p>Sample expanded modal content.</p>
  </div>
  <modus-wc-button slot="footer" onclick="my_modal_2.close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
    \`;
  }
}`,...(r=(c=a.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const h=["Default","CustomWidth"];export{a as CustomWidth,d as Default,h as __namedExportsOrder,b as default};
