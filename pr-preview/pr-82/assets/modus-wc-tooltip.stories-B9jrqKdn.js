import{k as r}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";const m={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"inline-radio"},options:["auto","top","right","left","bottom"]}}},p={render:o=>r`
      <modus-wc-tooltip
        content=${t(o.content)}
        custom-class="${o["custom-class"]}"
        ?force-open="${t(o["force-open"])}"
        id=${t(o.id)}
        position=${t(o.position)}
      >
        <modus-wc-badge content="Hover"></modus-wc-badge>
      </modus-wc-tooltip>
    `},e={...p};var n,s,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,m as default};
