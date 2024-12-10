import{k as r}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import{w as f}from"./decorator-Dt3Huotz.js";import"./v4-CQkTLCs1.js";const o=[{label:"Item 1",value:"1"},{label:"Item 2",value:"2"},{label:"Item 3",value:"3"}],E={title:"Components/Menu",component:"modus-wc-menu",args:{"aria-label":"Example menu",bordered:!0,items:o,orientation:"vertical",size:"md"},argTypes:{orientation:{control:{type:"inline-radio"},options:["horizontal","vertical"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},decorators:[f],parameters:{actions:{handles:["itemSelect"]}}},n={render:e=>{const I=s=>{const i=s.target.closest("modus-wc-menu");i&&(i.activeItemValue=s.detail.value)};return r`
      <modus-wc-menu
        active-item-value="${t(e["active-item-value"])}"
        aria-label="${e["aria-label"]}"
        ?bordered=${e.bordered}
        custom-class="${t(e["custom-class"])}"
        .items=${e.items}
        orientation=${t(e.orientation)}
        size=${t(e.size)}
        menu-title="${t(e["menu-title"])}"
        @itemSelect=${I}
      ></modus-wc-menu>
    `}},h=[...o,{disabled:!0,label:"Item 4",value:"4"}],a={render:()=>r`
      <modus-wc-menu
        active-item-value="2"
        aria-label="Example menu"
        .items=${h}
        menu-title="Items"
      ></modus-wc-menu>
    `},m={render:()=>r`
      <modus-wc-menu
        aria-label="Example menu"
        .items=${o}
        orientation="horizontal"
      ></modus-wc-menu>
    `};var l,u,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const handleItemSelect = (e: CustomEvent<IMenuItem>) => {
      const menu = (e.target as HTMLElement).closest('modus-wc-menu');
      if (menu) menu.activeItemValue = e.detail.value;
    };
    return html\`
      <modus-wc-menu
        active-item-value="\${ifDefined(args['active-item-value'])}"
        aria-label="\${args['aria-label']}"
        ?bordered=\${args.bordered}
        custom-class="\${ifDefined(args['custom-class'])}"
        .items=\${args.items}
        orientation=\${ifDefined(args.orientation)}
        size=\${ifDefined(args.size)}
        menu-title="\${ifDefined(args['menu-title'])}"
        @itemSelect=\${handleItemSelect}
      ></modus-wc-menu>
    \`;
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,p,v;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(p=a.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var $,b,w;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-menu
        aria-label="Example menu"
        .items=\${items}
        orientation="horizontal"
      ></modus-wc-menu>
    \`;
  }
}`,...(w=(b=m.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const D=["Template","ItemVariations","HorizontalMenu"];export{m as HorizontalMenu,a as ItemVariations,n as Template,D as __namedExportsOrder,E as default};
