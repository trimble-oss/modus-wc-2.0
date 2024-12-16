import{k as u}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";const i={title:"Components/Progress",component:"modus-wc-progress",args:{"a11y-label":"Example progress bar",indeterminate:!1,max:100,value:70},parameters:{layout:"padded"}},r={render:e=>u`
      <modus-wc-progress
        a11y-label="${e["a11y-label"]}"
        custom-class="${a(e["custom-class"])}"
        ?indeterminate=${e.indeterminate}
        max=${a(e.max)}
        value=${e.value}
      ></modus-wc-progress>
    `},s={render:()=>u` <modus-wc-progress indeterminate="true"></modus-wc-progress> `};var t,n,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-progress
        a11y-label="\${args['a11y-label']}"
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
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const g=["Template","Indeterminate"];export{s as Indeterminate,r as Template,g as __namedExportsOrder,i as default};
