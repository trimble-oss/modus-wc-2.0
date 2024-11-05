import{k as n}from"./lit-element-DVRzCIa_.js";const s={title:"Components/Atoms/Button",component:"modus-wc-button",args:{"aria-label":"Click me button",color:"primary",disabled:!1,"full-width":!1,label:"Click me",pressed:!1,size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"inline-radio"},options:["primary","secondary","tertiary","warning","danger"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},type:{control:{type:"inline-radio"},options:["button","submit","reset"]},variant:{control:{type:"inline-radio"},options:["filled","outlined","text"]},buttonClick:{action:"buttonClick",table:{category:"Events"}}}},a={render:t=>n`
      <modus-wc-button
        aria-label="${t["aria-label"]}"
        color="${t.color}"
        custom-class="${t["custom-class"]}"
        ?disabled="${t.disabled}"
        ?full-width="${t["full-width"]}"
        label="${t.label}"
        ?pressed="${t.pressed}"
        size="${t.size}"
        type="${t.type}"
        variant="${t.variant}"
        @buttonClick=${t.buttonClick}
      ></modus-wc-button>
    `},e={...a};var o,l,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,s as default};
