import{w as y}from"./decorator-D4YmxizW.js";import{x as t}from"./lit-element-C8zulti1.js";import{o as n}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const T={title:"Components/Menu Item",component:"modus-wc-menu-item",args:{label:"Menu Item",size:"md",value:"menuItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]},expandSubmenu:{description:"Expand the submenu if it is collapsed. Only works when has-submenu is true.",table:{category:"Methods",type:{summary:"() => Promise<void>"}}},collapseSubmenu:{description:"Collapse the submenu if it is expanded. Only works when has-submenu is true.",table:{category:"Methods",type:{summary:"() => Promise<void>"}}}},decorators:[y],parameters:{actions:{handles:["itemSelect"]}}},z={render:e=>t`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${n(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${n(e["sub-label"])}
    tooltip-content=${n(e["tooltip-content"])}
    tooltip-position=${n(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},o={...z},s={render:e=>t`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${n(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${n(e["sub-label"])}
    tooltip-content=${n(e["tooltip-content"])}
    tooltip-position=${n(e["tooltip-position"])}
    value=${e.value}
  >
    <modus-wc-icon
      slot="start-icon"
      name="alert"
      size="sm"
    ></modus-wc-icon>
  </modus-wc-menu-item>
</modus-wc-menu>
    `},u={args:{checkbox:!0},render:e=>t`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${n(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${n(e["sub-label"])}
    value=${e.value}
 ></modus-wc-menu-item>
</modus-wc-menu>
    `},m={args:{"tooltip-content":"This is a tooltip for the menu item","tooltip-position":"top"},render:e=>t`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    custom-class=${n(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${n(e["sub-label"])}
    tooltip-content=${n(e["tooltip-content"])}
    tooltip-position=${n(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},i={render:()=>t`
<style>
  #submenu-demo-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .control-buttons {
    display: flex;
    gap: 8px;
  }
</style>

<div id="submenu-demo-container">
  <div class="control-buttons">
    <modus-wc-button
      @buttonClick=${()=>{const e=document.getElementById("menu-with-submenu");e!=null&&e.expandSubmenu&&e.expandSubmenu()}}
      size="sm"
    >
      Expand Submenu
    </modus-wc-button>
    
    <modus-wc-button
      @buttonClick=${()=>{const e=document.getElementById("menu-with-submenu");e!=null&&e.collapseSubmenu&&e.collapseSubmenu()}}
      size="sm"
    >
      Collapse Submenu
    </modus-wc-button>
  </div>

  <modus-wc-menu>
    <modus-wc-menu-item
      id="menu-with-submenu"
      label="Parent Item"
      value="parent"
      has-submenu
    >
      <modus-wc-menu-item label="Child Item 1" value="child1"></modus-wc-menu-item>
      <modus-wc-menu-item label="Child Item 2" value="child2"></modus-wc-menu-item>
      <modus-wc-menu-item label="Child Item 3" value="child3"></modus-wc-menu-item>
    </modus-wc-menu-item>
  </modus-wc-menu>
</div>
    `};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var a,r,b;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=\${args.bordered}
    ?checkbox=\${args.checkbox}
    custom-class=\${ifDefined(args['custom-class'])}
    ?disabled=\${args.disabled}
    label=\${args.label}
    ?selected=\${args.selected}
    size=\${args.size}
    sub-label=\${ifDefined(args['sub-label'])}
    tooltip-content=\${ifDefined(args['tooltip-content'])}
    tooltip-position=\${ifDefined(args['tooltip-position'])}
    value=\${args.value}
  >
    <modus-wc-icon
      slot="start-icon"
      name="alert"
      size="sm"
    ></modus-wc-icon>
  </modus-wc-menu-item>
</modus-wc-menu>
    \`;
  }
}`,...(b=(r=s.parameters)==null?void 0:r.docs)==null?void 0:b.source}}};var p,$,w;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checkbox: true
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=\${args.bordered}
    ?checkbox=\${args.checkbox}
    custom-class=\${ifDefined(args['custom-class'])}
    ?disabled=\${args.disabled}
    label=\${args.label}
    ?selected=\${args.selected}
    size=\${args.size}
    sub-label=\${ifDefined(args['sub-label'])}
    value=\${args.value}
 ></modus-wc-menu-item>
</modus-wc-menu>
    \`;
  }
}`,...(w=($=u.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var h,f,v;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    'tooltip-content': 'This is a tooltip for the menu item',
    'tooltip-position': 'top'
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=\${args.bordered}
    custom-class=\${ifDefined(args['custom-class'])}
    ?disabled=\${args.disabled}
    label=\${args.label}
    ?selected=\${args.selected}
    size=\${args.size}
    sub-label=\${ifDefined(args['sub-label'])}
    tooltip-content=\${ifDefined(args['tooltip-content'])}
    tooltip-position=\${ifDefined(args['tooltip-position'])}
    value=\${args.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    \`;
  }
}`,...(v=(f=m.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,S,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<style>
  #submenu-demo-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .control-buttons {
    display: flex;
    gap: 8px;
  }
</style>

<div id="submenu-demo-container">
  <div class="control-buttons">
    <modus-wc-button
      @buttonClick=\${() => {
      const menuItem = document.getElementById('menu-with-submenu') as HTMLElement & {
        expandSubmenu?: () => Promise<void>;
      };
      if (menuItem?.expandSubmenu) {
        void menuItem.expandSubmenu();
      }
    }}
      size="sm"
    >
      Expand Submenu
    </modus-wc-button>
    
    <modus-wc-button
      @buttonClick=\${() => {
      const menuItem = document.getElementById('menu-with-submenu') as HTMLElement & {
        collapseSubmenu?: () => Promise<void>;
      };
      if (menuItem?.collapseSubmenu) {
        void menuItem.collapseSubmenu();
      }
    }}
      size="sm"
    >
      Collapse Submenu
    </modus-wc-button>
  </div>

  <modus-wc-menu>
    <modus-wc-menu-item
      id="menu-with-submenu"
      label="Parent Item"
      value="parent"
      has-submenu
    >
      <modus-wc-menu-item label="Child Item 1" value="child1"></modus-wc-menu-item>
      <modus-wc-menu-item label="Child Item 2" value="child2"></modus-wc-menu-item>
      <modus-wc-menu-item label="Child Item 3" value="child3"></modus-wc-menu-item>
    </modus-wc-menu-item>
  </modus-wc-menu>
</div>
    \`;
  }
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const W=["Default","WithIcon","WithCheckbox","WithTooltip","WithSubmenu"];export{o as Default,u as WithCheckbox,s as WithIcon,i as WithSubmenu,m as WithTooltip,W as __namedExportsOrder,T as default};
