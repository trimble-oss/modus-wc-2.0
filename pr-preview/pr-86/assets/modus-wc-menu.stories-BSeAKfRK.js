import{k as i}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import{w as v}from"./decorator-Dt3Huotz.js";import"./v4-CQkTLCs1.js";const o=[{label:"Item 1",value:"1"},{label:"Item 2",value:"2"},{label:"Item 3",value:"3"}],h={title:"Components/Menu",component:"modus-wc-menu",args:{"aria-label":"Example menu",bordered:!0,items:o,orientation:"vertical",size:"md"},argTypes:{orientation:{control:{type:"inline-radio"},options:["horizontal","vertical"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},decorators:[v],parameters:{actions:{handles:["itemSelect"]}}},n={render:e=>i`
      <modus-wc-menu
        active-item-value="${t(e["active-item-value"])}"
        aria-label="${e["aria-label"]}"
        ?bordered=${e.bordered}
        custom-class="${t(e["custom-class"])}"
        .items=${t(e.items)}
        orientation=${t(e.orientation)}
        size=${t(e.size)}
        menu-title="${t(e["menu-title"])}"
      ></modus-wc-menu>
    `},f=[...o,{disabled:!0,label:"Item 4",value:"4"}],a={render:()=>i`
      <modus-wc-menu
        active-item-value="2"
        aria-label="Example menu"
        .items=${f}
        menu-title="Items"
      ></modus-wc-menu>
    `},r={render:()=>i`
      <modus-wc-menu
        aria-label="Example menu"
        .items=${o}
        orientation="horizontal"
      ></modus-wc-menu>
    `};var m,s,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-menu
        active-item-value="\${ifDefined(args['active-item-value'])}"
        aria-label="\${args['aria-label']}"
        ?bordered=\${args.bordered}
        custom-class="\${ifDefined(args['custom-class'])}"
        .items=\${ifDefined(args.items)}
        orientation=\${ifDefined(args.orientation)}
        size=\${ifDefined(args.size)}
        menu-title="\${ifDefined(args['menu-title'])}"
      ></modus-wc-menu>
    \`;
  }
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-menu
        active-item-value="2"
        aria-label="Example menu"
        .items=\${updatedItems}
        menu-title="Items"
      ></modus-wc-menu>
    \`;
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,$,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-menu
        aria-label="Example menu"
        .items=\${items}
        orientation="horizontal"
      ></modus-wc-menu>
    \`;
  }
}`,...(b=($=r.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const x=["Template","ItemVariations","HorizontalMenu"];export{r as HorizontalMenu,a as ItemVariations,n as Template,x as __namedExportsOrder,h as default};
