import{w as r}from"./decorator-Dt3Huotz.js";import{k as i}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const c={firstPage:"First page",lastPage:"Last page",nextPage:"Next page",page:"Page {0}",previousPage:"Previous page"},g={title:"Components/Pagination",component:"modus-wc-pagination",args:{"arial-label-values":c,count:5,"custom-class":"",page:1,size:"md"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[r],parameters:{actions:{handles:["pageChange"]}}},e={render:a=>i`
    <modus-wc-pagination
      .ariaLabelValues=${a["arial-label-values"]}
      count=${a.count}
      custom-class=${s(a["custom-class"])}
      page=${a.page}
      size=${s(a.size)}
    ></modus-wc-pagination>
  `};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-pagination
      .ariaLabelValues=\${args['arial-label-values']}
      count=\${args.count}
      custom-class=\${ifDefined(args['custom-class'])}
      page=\${args.page}
      size=\${ifDefined(args.size)}
    ></modus-wc-pagination>
  \`
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,g as default};
