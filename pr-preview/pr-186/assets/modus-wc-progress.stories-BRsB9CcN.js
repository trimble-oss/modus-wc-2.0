import{k as u}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";const l={title:"Components/Progress",component:"modus-wc-progress",args:{indeterminate:!1,max:100,value:70},parameters:{layout:"padded"}},r={render:e=>u`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="${a(e["custom-class"])}"
        ?indeterminate=${e.indeterminate}
        max=${a(e.max)}
        value=${e.value}
      ></modus-wc-progress>
    `},s={render:()=>u` <modus-wc-progress indeterminate="true"></modus-wc-progress> `};var t,n,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="\${ifDefined(args['custom-class'])}"
        ?indeterminate=\${args.indeterminate}
        max=\${ifDefined(args.max)}
        value=\${args.value}
      ></modus-wc-progress>
    \`;
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var m,d,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return html\` <modus-wc-progress indeterminate="true"></modus-wc-progress> \`;
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const g=["Default","Indeterminate"];export{r as Default,s as Indeterminate,g as __namedExportsOrder,l as default};
