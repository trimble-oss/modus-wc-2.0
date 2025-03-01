import{k as c}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";const m={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","left","bottom"]}}},i={render:o=>c`
      <modus-wc-tooltip
        content=${t(o.content)}
        custom-class="${t(o["custom-class"])}"
        disabled="${t(o.disabled)}"
        ?force-open="${o["force-open"]}"
        tooltip-id="${t(o["tooltip-id"])}"
        position=${t(o.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `},e={...i};var s,n,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,m as default};
