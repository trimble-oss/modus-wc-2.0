import{w as C}from"./decorator-Cv9na35H.js";import{b as s}from"./lit-element-DgBvYnzn.js";import{o}from"./if-defined-BnVFTJ4o.js";import{c as L}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const q={title:"Components/Menu Item",component:"modus-wc-menu-item",args:{label:"Menu Item",size:"md",value:"menuItem"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[C],parameters:{actions:{handles:["itemSelect"]}}},T={render:e=>s`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    ?focused=${e.focused}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    tooltip-content=${o(e["tooltip-content"])}
    tooltip-position=${o(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},i={...T},a={render:e=>s`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    ?focused=${e.focused}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    tooltip-content=${o(e["tooltip-content"])}
    tooltip-position=${o(e["tooltip-position"])}
    value=${e.value}
  >
    <modus-wc-icon
      slot="start-icon"
      name="alert"
      size="sm"
    ></modus-wc-icon>
  </modus-wc-menu-item>
</modus-wc-menu>
    `},u={args:{checkbox:!0},render:e=>s`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    ?focused=${e.focused}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    value=${e.value}
 ></modus-wc-menu-item>
</modus-wc-menu>
    `},c={args:{"tooltip-content":"This is a tooltip for the menu item","tooltip-position":"top"},render:e=>s`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    ?focused=${e.focused}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    tooltip-content=${o(e["tooltip-content"])}
    tooltip-position=${o(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},d={render:e=>{if(!customElements.get("menu-item-shadow-host")){const D=L({componentTag:"modus-wc-menu",propsMapper:(t,l)=>{const S=l;S.ariaLabel="Shadow DOM Menu";let m=l.querySelector("modus-wc-menu-item");m||(m=document.createElement("modus-wc-menu-item"),l.innerHTML="",l.appendChild(m));const n=m;n.ariaLabel="Menu item in shadow DOM",n.bordered=!!t.bordered,n.checkbox=!!t.checkbox,n.customClass=t["custom-class"]||"",n.disabled=!!t.disabled,n.focused=!!t.focused,n.label=t.label,n.selected=!!t.selected,n.size=t.size??"md",n.subLabel=t["sub-label"]||"",n.tooltipContent=t["tooltip-content"]||"",n.tooltipPosition=t["tooltip-position"]||"auto",n.value=t.value}});customElements.define("menu-item-shadow-host",D)}return s`<menu-item-shadow-host
      .props=${{...e}}
    ></menu-item-shadow-host>`}};var r,b,p;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(p=(b=i.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var $,h,w;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=\${args.bordered}
    ?checkbox=\${args.checkbox}
    custom-class=\${ifDefined(args['custom-class'])}
    ?disabled=\${args.disabled}
    ?focused=\${args.focused}
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
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,I,g;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    ?focused=\${args.focused}
    label=\${args.label}
    ?selected=\${args.selected}
    size=\${args.size}
    sub-label=\${ifDefined(args['sub-label'])}
    value=\${args.value}
 ></modus-wc-menu-item>
</modus-wc-menu>
    \`;
  }
}`,...(g=(I=u.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var E,x,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    ?focused=\${args.focused}
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
}`,...(z=(x=c.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var v,k,M;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for menu-item component
    if (!customElements.get('menu-item-shadow-host')) {
      const MenuItemShadowHost = createShadowHostClass<MenuItemArgs>({
        componentTag: 'modus-wc-menu',
        propsMapper: (v: MenuItemArgs, el: HTMLElement) => {
          const menuEl = el as unknown as {
            ariaLabel: string;
          };
          menuEl.ariaLabel = 'Shadow DOM Menu';

          // Get or create menu item
          let menuItem = el.querySelector('modus-wc-menu-item');
          if (!menuItem) {
            menuItem = document.createElement('modus-wc-menu-item');
            el.innerHTML = '';
            el.appendChild(menuItem);
          }

          // Update properties on the existing element
          const menuItemEl = menuItem as unknown as {
            ariaLabel: string;
            bordered: boolean;
            checkbox: boolean;
            customClass: string;
            disabled: boolean;
            focused: boolean;
            label: string;
            selected: boolean;
            size: string;
            subLabel: string;
            tooltipContent: string;
            tooltipPosition: string;
            value: string;
          };
          menuItemEl.ariaLabel = 'Menu item in shadow DOM';
          menuItemEl.bordered = Boolean(v.bordered);
          menuItemEl.checkbox = Boolean(v.checkbox);
          menuItemEl.customClass = v['custom-class'] || '';
          menuItemEl.disabled = Boolean(v.disabled);
          menuItemEl.focused = Boolean(v.focused);
          menuItemEl.label = v.label;
          menuItemEl.selected = Boolean(v.selected);
          menuItemEl.size = v.size ?? 'md';
          menuItemEl.subLabel = v['sub-label'] || '';
          menuItemEl.tooltipContent = v['tooltip-content'] || '';
          menuItemEl.tooltipPosition = v['tooltip-position'] || 'auto';
          menuItemEl.value = v.value;
        }
      });
      customElements.define('menu-item-shadow-host', MenuItemShadowHost);
    }
    return html\`<menu-item-shadow-host
      .props=\${{
      ...args
    }}
    ></menu-item-shadow-host>\`;
  }
}`,...(M=(k=d.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const A=["Default","WithIcon","WithCheckbox","WithTooltip","ShadowDomParent"];export{i as Default,d as ShadowDomParent,u as WithCheckbox,a as WithIcon,c as WithTooltip,A as __namedExportsOrder,q as default};
