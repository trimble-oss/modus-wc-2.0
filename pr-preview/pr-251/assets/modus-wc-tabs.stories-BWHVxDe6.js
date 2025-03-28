import{w}from"./decorator-Dt3Huotz.js";import{k as T}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const A={title:"Components/Tabs",component:"modus-wc-tabs",args:{size:"md",tabs:[{label:"Tab 1"},{label:"Tab 2"},{label:"Tab 3",disabled:!0},{icon:"home"}],tabStyle:"bordered"},argTypes:{tabs:{description:"Array of tab objects defining the tabs to display",table:{type:{detail:`
            Interface: ITab
            Properties:
            - customClass (string, optional): Custom CSS class for the inner button
            - disabled (boolean, optional): Whether the tab is disabled
            - icon (string, optional): A Modus Icon name to display
            - iconPosition ('left' | 'right', optional): The position of the icon
            - label (string, optional): The content to display in the tab
          `}}},tabStyle:{control:{type:"select"},options:["boxed","bordered","lifted","none"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[w],parameters:{actions:{handles:["tabChange"]}}},r={render:e=>T`
<modus-wc-tabs
  active-tab-index="${t(e.activeTabIndex)}"
  aria-label="Tab group"
  tab-style="${t(e.tabStyle)}"
  .tabs="${e.tabs}"
  size="${t(e.size)}"
>
</modus-wc-tabs>
    `},a={...r},o={...r};o.args={activeTabIndex:1,tabs:[{label:"Normal"},{label:"Active"},{label:"Disabled",disabled:!0}]};const s={...r,args:{tabs:[{icon:"home"},{icon:"settings",iconPosition:"left",label:"Settings"},{icon:"alert",iconPosition:"right",label:"Alerts"}]}},n={render:e=>T`
<modus-wc-tabs
  active-tab-index="${t(e.activeTabIndex)}"
  aria-label="Tab group"
  custom-class="${t(e["custom-class"])}"
  ?img-src="${e["img-src"]}"
  tab-style="${t(e.tabStyle)}"
  .tabs="${e.tabs}"
  size="${t(e.size)}"
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
    `};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var b,d,p;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tabs
  active-tab-index="\${ifDefined(args.activeTabIndex)}"
  aria-label="Tab group"
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
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const D=["Default","ActiveAndDisabled","Icons","TabsWithPanel"];export{o as ActiveAndDisabled,a as Default,s as Icons,n as TabsWithPanel,D as __namedExportsOrder,A as default};
