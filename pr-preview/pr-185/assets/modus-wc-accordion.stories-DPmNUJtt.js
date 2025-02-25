import{w as i}from"./decorator-Dt3Huotz.js";import{k as a}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const t=[{description:"Item one description",icon:"alert",iconAriaLabel:"Alert",title:"Item One"},{description:"Item two description",icon:"alert",iconAriaLabel:"Alert",title:"Item Two"},{description:"Item three description",icon:"alert",iconAriaLabel:"Alert",title:"Item Three"}],w={title:"Components/Accordion",component:"modus-wc-accordion",args:{bordered:!0,size:"md"},argTypes:{size:{control:{type:"select",options:["xs","sm","md","lg"]}}},decorators:[i],parameters:{actions:{handles:["expandedChange"]},layout:{padded:!0}}},d={render:o=>a`
<div style="padding: 20px;">
  <modus-wc-accordion
    ?bordered=${o.bordered}
    custom-class=${s(o["custom-class"])}
    size=${s(o.size)}
  >
    <modus-wc-collapse .options=${t[0]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
    <modus-wc-collapse .options=${t[1]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
    <modus-wc-collapse .options=${t[2]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
  </modus-wc-accordion>
</div>
    `},e={...d};var c,r,n;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,w as default};
