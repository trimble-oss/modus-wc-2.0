import{w as t}from"./decorator-Dt3Huotz.js";import{k as p}from"./lit-element-DVRzCIa_.js";import{t as e}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const m={title:"Components/Pagination",component:"modus-wc-pagination",args:{"aria-label-first-page":"First page","aria-label-last-page":"Last page","aria-label-next-page":"Next page","aria-label-page":"Page {0}","aria-label-previous-page":"Previous page",count:5,"custom-class":"",page:1,size:"md"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[t],parameters:{actions:{handles:["pageChange"]}}},i={render:a=>p`
    <modus-wc-pagination
      aria-label-first-page=${e(a["aria-label-first-page"])}
      aria-label-last-page=${e(a["aria-label-last-page"])}
      aria-label-next-page=${e(a["aria-label-next-page"])}
      aria-label-page=${e(a["aria-label-page"])}
      aria-label-previous-page=${e(a["aria-label-previous-page"])}
      count=${a.count}
      custom-class=${e(a["custom-class"])}
      page=${a.page}
      size=${e(a.size)}
    ></modus-wc-pagination>
  `};var s,r,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-pagination
      aria-label-first-page=\${ifDefined(args['aria-label-first-page'])}
      aria-label-last-page=\${ifDefined(args['aria-label-last-page'])}
      aria-label-next-page=\${ifDefined(args['aria-label-next-page'])}
      aria-label-page=\${ifDefined(args['aria-label-page'])}
      aria-label-previous-page=\${ifDefined(args['aria-label-previous-page'])}
      count=\${args.count}
      custom-class=\${ifDefined(args['custom-class'])}
      page=\${args.page}
      size=\${ifDefined(args.size)}
    ></modus-wc-pagination>
  \`
}`,...(l=(r=i.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const u=["Default"];export{i as Default,u as __namedExportsOrder,m as default};
