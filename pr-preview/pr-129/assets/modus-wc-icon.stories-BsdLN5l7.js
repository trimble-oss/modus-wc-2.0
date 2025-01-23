import{k as n}from"./lit-element-DVRzCIa_.js";import{t as c}from"./if-defined-1ipA9LQg.js";const d={title:"Components/Icon",component:"modus-wc-icon",args:{"aria-label":"Alert icon","custom-class":"",decorative:!1,name:"alert",size:"md",color:""},argTypes:{size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]},color:{control:{type:"color"}}}},m={render:o=>{var r;const s=o.color?`color-${o.color.replace("#","")}`:"";return n`
      <style>
        .color-${(r=o.color)==null?void 0:r.replace("#","")} {
          color: ${o.color};
        }
      </style>
      <modus-wc-icon
        aria-label="${c(o["aria-label"])}"
        custom-class="${c(o["custom-class"])} ${s}"
        ?decorative="${c(o.decorative)}"
        name="${o.name}"
        size="${o.size}"
      >
      </modus-wc-icon>
    `}},e={...m};var t,l,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,d as default};
