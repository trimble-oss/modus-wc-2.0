import{k as i}from"./lit-element-DVRzCIa_.js";import{t as r}from"./if-defined-1ipA9LQg.js";const z={title:"Components/Icon",component:"modus-wc-icon",args:{"custom-class":"",decorative:!1,name:"alert",size:"md"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]}}},d={render:e=>i`
      <modus-wc-icon
        aria-label="Alert icon"
        custom-class="${r(e["custom-class"])}"
        ?decorative="${r(e.decorative)}"
        name="${e.name}"
        size="${e.size}"
      >
      </modus-wc-icon>
    `},o={...d},s={render:e=>i`
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
    `};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var t,m,l;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const w=["Default","CustomColor"];export{s as CustomColor,o as Default,w as __namedExportsOrder,z as default};
