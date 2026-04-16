import{x as s}from"./lit-element-CucEn6F2.js";import{o as i}from"./if-defined-BiZP-SBN.js";const p={title:"Components/Divider",component:"modus-wc-divider",args:{color:"tertiary",content:"","custom-class":"",orientation:"vertical",position:"center",responsive:!0},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},content:{control:"text"},"custom-class":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},position:{control:{type:"select"},options:["start","center","end"]},responsive:{control:{type:"boolean"}}},parameters:{layout:"padded"}},c={render:o=>s`
    <modus-wc-divider
      color="${o.color}"
      content="${o.content}"
      custom-class="${i(o["custom-class"])}"
      orientation="${o.orientation}"
      position="${o.position}"
      responsive="${o.responsive}"
      style="${o.orientation==="horizontal"?"display: flex; height: 100px":""}"
    ></modus-wc-divider>
  `},t={...c};var e,r,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...Template
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,p as default};
