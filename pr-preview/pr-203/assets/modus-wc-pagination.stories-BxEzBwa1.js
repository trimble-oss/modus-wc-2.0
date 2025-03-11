import{w as r}from"./decorator-Dt3Huotz.js";import{k as c}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const d={title:"Components/Pagination",component:"modus-wc-pagination",args:{count:5,"custom-class":"",page:1,size:"md"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[r],parameters:{actions:{handles:["pageChange"]}}},o={render:s=>c`
    <modus-wc-pagination
      count=${s.count}
      custom-class=${a(s["custom-class"])}
      page=${s.page}
      size=${a(s.size)}
    ></modus-wc-pagination>
  `};var e,t,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-pagination
      count=\${args.count}
      custom-class=\${ifDefined(args['custom-class'])}
      page=\${args.page}
      size=\${ifDefined(args.size)}
    ></modus-wc-pagination>
  \`
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const g=["Default"];export{o as Default,g as __namedExportsOrder,d as default};
