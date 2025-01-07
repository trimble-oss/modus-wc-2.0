import{k as r}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import{w as h}from"./decorator-Dt3Huotz.js";import"./v4-CQkTLCs1.js";var u=Object.freeze,g=Object.defineProperty,S=(e,i)=>u(g(e,"raw",{value:u(e.slice())})),c;const s=[{label:"Item 1",value:"1"},{label:"Item 2",value:"2"},{label:"Item 3",value:"3"}],M={title:"Components/Menu",component:"modus-wc-menu",args:{"aria-label":"Example menu",bordered:!0,items:s,orientation:"vertical",size:"md"},argTypes:{orientation:{control:{type:"inline-radio"},options:["horizontal","vertical"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},decorators:[h],parameters:{actions:{handles:["itemSelect"]}}},a={render:e=>{const i=l=>{const o=l.target.closest("modus-wc-menu");o&&(o.activeItemValue=l.detail.value)};return r`
      <modus-wc-menu
        active-item-value="${t(e["active-item-value"])}"
        aria-label="${e["aria-label"]}"
        ?bordered=${e.bordered}
        custom-class="${t(e["custom-class"])}"
        .items=${e.items}
        orientation=${t(e.orientation)}
        size=${t(e.size)}
        menu-title="${t(e["menu-title"])}"
        @itemSelect=${i}
      ></modus-wc-menu>
    `}},n={render:()=>{const e=[...s,{disabled:!0,label:"Item 4",value:"4"}];return r(c||(c=S([`
<script>
  // Items bound to modus-wc-menu "items" attribute
  const items = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { disabled: true, label: 'Item 4', value: '4' },
  ];
<\/script>
<modus-wc-menu
  active-item-value="2"
  aria-label="Example menu"
  .items=`,`
  menu-title="Items"
></modus-wc-menu>
    `])),e)}},m={render:()=>r`
      <modus-wc-menu
        aria-label="Example menu"
        .items=${s}
        orientation="horizontal"
      ></modus-wc-menu>
    `};var d,p,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var v,I,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const updatedItems = [...items, {
      disabled: true,
      label: 'Item 4',
      value: '4'
    }];
    return html\`
<script>
  // Items bound to modus-wc-menu "items" attribute
  const items = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { disabled: true, label: 'Item 4', value: '4' },
  ];
<\/script>
<modus-wc-menu
  active-item-value="2"
  aria-label="Example menu"
  .items=\${updatedItems}
  menu-title="Items"
></modus-wc-menu>
    \`;
  }
}`,...(w=(I=n.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var $,f,z;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-menu
        aria-label="Example menu"
        .items=\${items}
        orientation="horizontal"
      ></modus-wc-menu>
    \`;
  }
}`,...(z=(f=m.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};const y=["Template","ItemVariations","HorizontalMenu"];export{m as HorizontalMenu,n as ItemVariations,a as Template,y as __namedExportsOrder,M as default};
