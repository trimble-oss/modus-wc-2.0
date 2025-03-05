import{w as a}from"./decorator-Dt3Huotz.js";import{k as r}from"./lit-element-DVRzCIa_.js";import{t as i}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const e=[{description:"Item one description",icon:"alert",iconAriaLabel:"Alert",title:"Item One"},{description:"Item two description",icon:"alert",iconAriaLabel:"Alert",title:"Item Two"},{description:"Item three description",icon:"alert",iconAriaLabel:"Alert",title:"Item Three"}],w={title:"Components/Accordion",component:"modus-wc-accordion",decorators:[a],parameters:{actions:{handles:["expandedChange"]},layout:{padded:!0}}},l={render:n=>r`
<div style="padding: 20px;">
  <modus-wc-accordion custom-class=${i(n["custom-class"])}>
    <modus-wc-collapse .options=${e[0]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
    <modus-wc-collapse .options=${e[1]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
    <modus-wc-collapse .options=${e[2]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
  </modus-wc-accordion>
</div>
    `},o={...l};var t,s,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,w as default};
