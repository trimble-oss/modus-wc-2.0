import{k as c}from"./lit-element-DVRzCIa_.js";import{t as u}from"./if-defined-1ipA9LQg.js";const p={title:"Components/Progress",component:"modus-wc-progress",args:{"aria-label":"Example progress bar",indeterminate:!1,max:100,value:70},parameters:{layout:"padded"}},r={render:e=>c`
      <modus-wc-progress
        aria-label="${e["aria-label"]}"
        custom-class="${e["custom-class"]}"
        ?indeterminate=${e.indeterminate}
        max=${u(e.max)}
        value=${e.value}
      ></modus-wc-progress>
    `},s={render:()=>c` <modus-wc-progress indeterminate="true"></modus-wc-progress> `};var a,t,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-progress
        aria-label="\${args['aria-label']}"
        custom-class="\${args['custom-class']}"
        ?indeterminate=\${args.indeterminate}
        max=\${ifDefined(args.max)}
        value=\${args.value}
      ></modus-wc-progress>
    \`;
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var o,m,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return html\` <modus-wc-progress indeterminate="true"></modus-wc-progress> \`;
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const g=["Template","Indeterminate"];export{s as Indeterminate,r as Template,g as __namedExportsOrder,p as default};
