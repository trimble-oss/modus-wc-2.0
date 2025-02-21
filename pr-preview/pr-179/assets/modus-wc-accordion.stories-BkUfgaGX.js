import{w as a}from"./decorator-Dt3Huotz.js";import{k as r}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const d=[{customClass:"test-class",description:"Sports played by a team.",expanded:!0,icon:"people_group",iconAriaLabel:"Team icon",title:"Team Sports"},{customClass:"test-class",description:"Sports played by individuals.",expanded:!1,icon:"person",iconAriaLabel:"Person icon",title:"Individual Sports"},{customClass:"test-class",description:"Sports played in water.",expanded:!1,icon:"fog",iconAriaLabel:"Water icon",title:"Water Sports"}],f={title:"Components/Accordion",component:"modus-wc-accordion",args:{bordered:!0,items:d,size:"md"},argTypes:{size:{control:{type:"select",options:["xs","sm","md","lg"]}}},decorators:[a],parameters:{actions:{handles:["expandedChange"]},layout:{padded:!0}}},n={render:e=>r`
<div style="padding: 20px;">
  <modus-wc-accordion
    ?bordered=${e.bordered}
    custom-class=${s(e["custom-class"])}
    .items=${e.items}
    size=${s(e.size)}
  >
    <div slot="item-0">
      <ul>
        <li>Baseball</li>
        <li>Basketball</li>
        <li>Soccer</li>
      </ul>
    </div>
    <div slot="item-1">
      <ul>
        <li>Tennis</li>
        <li>Golf</li>
        <li>Wrestling</li>
      </ul>
    </div>
    <div slot="item-2">
      <ul>
        <li>Sailing</li>
        <li>Surfing</li>
        <li>Swimming</li>
      </ul>
    </div>
  </modus-wc-accordion>
</div>
    `},i={...n};var t,o,l;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(l=(o=i.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const S=["Default"];export{i as Default,S as __namedExportsOrder,f as default};
