import{w as H}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-CucEn6F2.js";import{o as t}from"./if-defined-BiZP-SBN.js";import{c as B}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var w=Object.freeze,W=Object.defineProperty,O=(e,m)=>w(W(e,"raw",{value:w(e.slice())})),h;const J={title:"Components/Menu Item",component:"modus-wc-menu-item",args:{label:"Menu Item",size:"md",value:"menuItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]},"_show-visibility-toggle":{table:{disable:!0}}},decorators:[H],parameters:{actions:{handles:["itemSelect","itemVisibilityToggle"]}}},P={render:e=>i`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${t(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${t(e["sub-label"])}
    tooltip-content=${t(e["tooltip-content"])}
    tooltip-position=${t(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},u={...P},c={render:e=>i`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${t(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${t(e["sub-label"])}
    tooltip-content=${t(e["tooltip-content"])}
    tooltip-position=${t(e["tooltip-position"])}
    value=${e.value}
  >
    <modus-wc-icon
      slot="start-icon"
      name="alert"
      size="sm"
    ></modus-wc-icon>
  </modus-wc-menu-item>
</modus-wc-menu>
    `},r={args:{checkbox:!0},render:e=>i`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${t(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${t(e["sub-label"])}
    value=${e.value}
 ></modus-wc-menu-item>
</modus-wc-menu>
    `},d={args:{"tooltip-content":"This is a tooltip for the menu item","tooltip-position":"top"},render:e=>i`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    custom-class=${t(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${t(e["sub-label"])}
    tooltip-content=${t(e["tooltip-content"])}
    tooltip-position=${t(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},b={render:e=>{const m=n=>{const a=n.target.closest("modus-wc-menu-item");if(!a)return;const s=n.detail.visible;a.disabled=!s};return i(h||(h=O([`
      <script>
        const handleVisibilityToggle = (event: CustomEvent) => {
           const source = event.target as HTMLElement;
           const menuItem = source.closest('modus-wc-menu-item');
           if (!menuItem) return;

           const isVisible = event.detail.visible;
           menuItem.disabled = !isVisible;
         };
      <\/script>
      <modus-wc-menu>
        <modus-wc-menu-item
          label=`,`
          size=`,`
          value=`,`
          _show-visibility-toggle="true"
          @itemVisibilityToggle=`,`
        >
          <modus-wc-icon
            slot="start-icon"
            name="folder_closed"
            variant="solid"
          ></modus-wc-icon>
        </modus-wc-menu-item>
      </modus-wc-menu>
    `])),e.label,e.size,e.value,m)}},p={render:e=>{if(!customElements.get("menu-item-shadow-host")){const m=B({componentTag:"modus-wc-menu",propsMapper:(n,l)=>{const a=l;a.ariaLabel="Shadow DOM Menu";let s=l.querySelector("modus-wc-menu-item");s||(s=document.createElement("modus-wc-menu-item"),l.innerHTML="",l.appendChild(s));const o=s;o.ariaLabel="Menu item in shadow DOM",o.bordered=!!n.bordered,o.checkbox=!!n.checkbox,o.customClass=n["custom-class"]||"",o.disabled=!!n.disabled,o.label=n.label,o.selected=!!n.selected,o.size=n.size||"md",o.subLabel=n["sub-label"]||"",o.tooltipContent=n["tooltip-content"]||"",o.tooltipPosition=n["tooltip-position"]||"auto",o.value=n.value}});customElements.define("menu-item-shadow-host",m)}return i`<menu-item-shadow-host
      .props=${{...e}}
    ></menu-item-shadow-host>`}};var $,g,v;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Template
}`,...(v=(g=u.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,I,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(I=c.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var z,T,x;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(x=(T=r.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var M,k,y;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(y=(k=d.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var D,S,C;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const handleVisibilityToggle = (event: CustomEvent) => {
      const source = event.target as HTMLElement;
      const menuItem = source.closest('modus-wc-menu-item');
      if (!menuItem) return;
      const isVisible = event.detail.visible;
      menuItem.disabled = !isVisible;
    };
    // prettier-ignore
    return html\`
      <script>
        const handleVisibilityToggle = (event: CustomEvent) => {
           const source = event.target as HTMLElement;
           const menuItem = source.closest('modus-wc-menu-item');
           if (!menuItem) return;

           const isVisible = event.detail.visible;
           menuItem.disabled = !isVisible;
         };
      <\/script>
      <modus-wc-menu>
        <modus-wc-menu-item
          label=\${args.label}
          size=\${args.size}
          value=\${args.value}
          _show-visibility-toggle="true"
          @itemVisibilityToggle=\${handleVisibilityToggle}
        >
          <modus-wc-icon
            slot="start-icon"
            name="folder_closed"
            variant="solid"
          ></modus-wc-icon>
        </modus-wc-menu-item>
      </modus-wc-menu>
    \`;
  }
}`,...(C=(S=b.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var V,L,_;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
          menuItemEl.label = v.label;
          menuItemEl.selected = Boolean(v.selected);
          menuItemEl.size = v.size || 'md';
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
}`,...(_=(L=p.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const K=["Default","WithIcon","WithCheckbox","WithTooltip","WithVisibilityToggle","ShadowDomParent"];export{u as Default,p as ShadowDomParent,r as WithCheckbox,c as WithIcon,d as WithTooltip,b as WithVisibilityToggle,K as __namedExportsOrder,J as default};
