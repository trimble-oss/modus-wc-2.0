import{w as y}from"./decorator-Dt3Huotz.js";import{k as w}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const D={title:"Components/Tabs",component:"modus-wc-tabs",args:{"aria-label":"Example Tab Group",tabs:[{label:"Tab 1"},{label:"Tab 2"},{label:"Tab 3",disabled:!0},{icon:"home"}]},argTypes:{tabStyle:{control:{type:"radio"},options:["boxed","bordered","lifted","none"]},size:{control:{type:"radio"},options:["xs","sm","md","lg"]}},decorators:[y],parameters:{actions:{handles:["tabChange"]}}},r={render:e=>w`
<modus-wc-tabs
  active-tab-index="${a(e.activeTabIndex)}"
  aria-label="${e["aria-label"]}"
  tab-style="${a(e.tabStyle)}"
  .tabs="${e.tabs}"
  size="${a(e.size)}"
>
</modus-wc-tabs>
    `},s={...r},t={...r};t.args={activeTabIndex:1,tabs:[{label:"Normal"},{label:"Active"},{label:"Disabled",disabled:!0}]};const o={...r,args:{tabs:[{icon:"home"},{icon:"settings",iconPosition:"left",label:"Settings"},{icon:"alert",iconPosition:"right",label:"Alerts"}]}},n={render:e=>w`
<modus-wc-tabs
  active-tab-index="${a(e.activeTabIndex)}"
  aria-label="${e["aria-label"]}"
  custom-class="${a(e["custom-class"])}"
  ?img-src="${e["img-src"]}"
  tab-style="${a(e.tabStyle)}"
  .tabs="${e.tabs}"
  size="${a(e.size)}"
>
  <p slot="tab-0">
    Modus (noun) : a mode of procedure : a way of doing something
  </p>
  <p slot="tab-1">
    input (noun) : information fed into a data processing system or computer
  </p>
  <p slot="tab-2">
    secret (noun) : kept from knowledge or view : hidden
  </p>
  <p slot="tab-3">
    snapshot (noun) : an impression or view of something brief or transitory
  </p>
</modus-wc-tabs>
    `};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var b,d,m;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  args: {
    tabs: [{
      icon: 'home'
    }, {
      icon: 'settings',
      iconPosition: 'left',
      label: 'Settings'
    }, {
      icon: 'alert',
      iconPosition: 'right',
      label: 'Alerts'
    }]
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,h,$;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tabs
  active-tab-index="\${ifDefined(args.activeTabIndex)}"
  aria-label="\${args['aria-label']}"
  custom-class="\${ifDefined(args['custom-class'])}"
  ?img-src="\${args['img-src']}"
  tab-style="\${ifDefined(args.tabStyle)}"
  .tabs="\${args.tabs}"
  size="\${ifDefined(args.size)}"
>
  <p slot="tab-0">
    Modus (noun) : a mode of procedure : a way of doing something
  </p>
  <p slot="tab-1">
    input (noun) : information fed into a data processing system or computer
  </p>
  <p slot="tab-2">
    secret (noun) : kept from knowledge or view : hidden
  </p>
  <p slot="tab-3">
    snapshot (noun) : an impression or view of something brief or transitory
  </p>
</modus-wc-tabs>
    \`;
  }
}`,...($=(h=n.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};const A=["Default","ActiveAndDisabled","Icons","TabsWithPanel"];export{t as ActiveAndDisabled,s as Default,o as Icons,n as TabsWithPanel,A as __namedExportsOrder,D as default};
