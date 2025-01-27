import{k as m}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";const z={title:"Components/Icon",component:"modus-wc-icon",args:{"aria-label":"Alert icon","custom-class":"",decorative:!1,name:"alert",size:"md"},argTypes:{size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}}},d={render:e=>m`
      <modus-wc-icon
        aria-label="${s(e["aria-label"])}"
        custom-class="${s(e["custom-class"])}"
        ?decorative="${s(e.decorative)}"
        name="${e.name}"
        size="${e.size}"
      >
      </modus-wc-icon>
    `},o={...d},r={render:e=>m`
      <style>
        .red-icon {
          color: red;
        }
      </style>
      <modus-wc-icon
        aria-label="Red alert icon"
        custom-class="red-icon"
        name="alert"
        size="${e.size}"
      >
      </modus-wc-icon>
    `};var a,n,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var t,l,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <style>
        .red-icon {
          color: red;
        }
      </style>
      <modus-wc-icon
        aria-label="Red alert icon"
        custom-class="red-icon"
        name="alert"
        size="\${args.size}"
      >
      </modus-wc-icon>
    \`;
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const w=["Default","CustomColor"];export{r as CustomColor,o as Default,w as __namedExportsOrder,z as default};
