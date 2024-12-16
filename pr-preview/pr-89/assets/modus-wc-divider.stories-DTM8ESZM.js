import{k as i}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";const p={title:"Components/Divider",component:"modus-wc-divider",args:{"a11y-label":"Example divider",color:"tertiary",content:"","custom-class":"",orientation:"vertical",position:"center",responsive:!0},argTypes:{"a11y-label":{control:"text"},color:{control:{type:"radio"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},content:{control:"text"},"custom-class":{control:"text"},orientation:{control:{type:"inline-radio"},options:["horizontal","vertical"]},position:{control:{type:"inline-radio"},options:["start","center","end"]},responsive:{control:{type:"boolean"}}},parameters:{layout:"padded"}},s={render:o=>i`
    <modus-wc-divider
      a11y-label="${o["a11y-label"]}"
      color="${o.color}"
      content="${o.content}"
      custom-class="${a(o["custom-class"])}"
      orientation="${o.orientation}"
      position="${o.position}"
      responsive="${o.responsive}"
      style="${o.orientation==="horizontal"?"display: flex; height: 100px":""}"
    ></modus-wc-divider>
  `},t={...s};var e,r,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...Template
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,p as default};
