import{w as i}from"./decorator-Dt3Huotz.js";import{k as p}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const m={title:"Collapse Title",description:"Collapse description",icon:"alert",iconAriaLabel:"Alert"},v={title:"Components/Collapse",component:"modus-wc-collapse",args:{bordered:!0,expanded:!1,options:m},decorators:[i],parameters:{actions:{handles:["expandedChange"]},layout:"padded"}},u={render:e=>p`
<modus-wc-collapse
  ?bordered=${e.bordered}
  custom-class=${t(e["custom-class"])}
  ?expanded=${e.expanded}
  id=${t(e.id)}
  .options=${t(e.options)}
>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
    `},o={...u},s={render:e=>p`
<modus-wc-collapse
  ?bordered=${e.bordered}
  custom-class=${t(e["custom-class"])}
  ?expanded=${e.expanded}
  id="123"
>
  <div slot="header" class="modus-wc-collapse-title" id="123">Custom header</div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
    `};var d,r,a;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var n,c,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-collapse
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  ?expanded=\${args.expanded}
  id="123"
>
  <div slot="header" class="modus-wc-collapse-title" id="123">Custom header</div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
    \`;
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const x=["Default","WithCustomContent"];export{o as Default,s as WithCustomContent,x as __namedExportsOrder,v as default};
