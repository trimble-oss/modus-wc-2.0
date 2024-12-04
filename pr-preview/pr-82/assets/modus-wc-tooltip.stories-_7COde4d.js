import{k as c}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";const m={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"inline-radio"},options:["auto","top","right","left","bottom"]}}},r={render:o=>c`
      <modus-wc-tooltip
        content=${t(o.content)}
        custom-class="${o["custom-class"]}"
        ?force-open="${t(o["force-open"])}"
        tooltip-id="${t(o["tooltip-id"])}"
        position=${t(o.position)}
      >
        <modus-wc-badge content="Hover"></modus-wc-badge>
      </modus-wc-tooltip>
    `},e={...r};var n,s,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,m as default};
