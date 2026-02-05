import{w as W}from"./decorator-D4YmxizW.js";import{x as t}from"./lit-element-CucEn6F2.js";import{o}from"./if-defined-BiZP-SBN.js";import{c as P}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const q={title:"Components/Menu Item",component:"modus-wc-menu-item",args:{label:"Menu Item",size:"md",value:"menuItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[W],parameters:{actions:{handles:["itemSelect"]}}},B={render:e=>t`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    tooltip-content=${o(e["tooltip-content"])}
    tooltip-position=${o(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},c={...B},l={render:e=>t`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
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
    `},u={args:{checkbox:!0},render:e=>t`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    value=${e.value}
 ></modus-wc-menu-item>
</modus-wc-menu>
    `},a={args:{"tooltip-content":"This is a tooltip for the menu item","tooltip-position":"top"},render:e=>t`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    tooltip-content=${o(e["tooltip-content"])}
    tooltip-position=${o(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},r={args:{"show-visibility-toggle":!0,"show-more-actions":!0,checkbox:!0},render:e=>t`
<modus-wc-menu>
  <modus-wc-menu-item
    ?checkbox=${e.checkbox}
    has-submenu="true"
    label="Documents"
    ?show-visibility-toggle=${e["show-visibility-toggle"]}
    ?show-more-actions=${e["show-more-actions"]}
    size=${e.size}
    value="documents"
  >
    <modus-wc-icon
      slot="start-icon"
      name="folder_closed"
      size="sm"
      variant="solid"
    ></modus-wc-icon>
    <modus-wc-menu .isSubMenu=${!0}>
      <modus-wc-menu-item
        ?checkbox=${e.checkbox}
        label="Reports.pdf"
        ?show-visibility-toggle=${e["show-visibility-toggle"]}
        ?show-more-actions=${e["show-more-actions"]}
        size=${e.size}
        value="reports"
      >
        <modus-wc-icon
          slot="start-icon"
          name="description"
          size="sm"
          variant="solid"
        ></modus-wc-icon>
      </modus-wc-menu-item>
      <modus-wc-menu-item
        ?checkbox=${e.checkbox}
        label="Presentation.pptx"
        ?show-visibility-toggle=${e["show-visibility-toggle"]}
        ?show-more-actions=${e["show-more-actions"]}
        size=${e.size}
        value="presentation"
      >
        <modus-wc-icon
          slot="start-icon"
          name="description"
          size="sm"
          variant="solid"
        ></modus-wc-icon>
      </modus-wc-menu-item>
    </modus-wc-menu>
  </modus-wc-menu-item>
  <modus-wc-menu-item
    ?checkbox=${e.checkbox}
    has-submenu="true"
    label="Projects"
    ?show-visibility-toggle=${e["show-visibility-toggle"]}
    ?show-more-actions=${e["show-more-actions"]}
    size=${e.size}
    value="projects"
  >
    <modus-wc-icon
      slot="start-icon"
      name="folder_closed"
      size="sm"
      variant="solid"
    ></modus-wc-icon>
    <modus-wc-menu .isSubMenu=${!0}>
      <modus-wc-menu-item
        ?checkbox=${e.checkbox}
        label="Website Redesign"
        ?show-visibility-toggle=${e["show-visibility-toggle"]}
        ?show-more-actions=${e["show-more-actions"]}
        size=${e.size}
        value="website"
      >
        <modus-wc-icon
          slot="start-icon"
          name="description"
          size="sm"
          variant="solid"
        ></modus-wc-icon>
      </modus-wc-menu-item>
    </modus-wc-menu>
  </modus-wc-menu-item>
</modus-wc-menu>
    `},d={render:e=>{if(!customElements.get("menu-item-shadow-host")){const L=P({componentTag:"modus-wc-menu",propsMapper:(s,i)=>{const T=i;T.ariaLabel="Shadow DOM Menu";let m=i.querySelector("modus-wc-menu-item");m||(m=document.createElement("modus-wc-menu-item"),i.innerHTML="",i.appendChild(m));const n=m;n.ariaLabel="Menu item in shadow DOM",n.bordered=!!s.bordered,n.checkbox=!!s.checkbox,n.customClass=s["custom-class"]||"",n.disabled=!!s.disabled,n.label=s.label,n.selected=!!s.selected,n.size=s.size||"md",n.subLabel=s["sub-label"]||"",n.tooltipContent=s["tooltip-content"]||"",n.tooltipPosition=s["tooltip-position"]||"auto",n.value=s.value}});customElements.define("menu-item-shadow-host",L)}return t`<menu-item-shadow-host
      .props=${{...e}}
    ></menu-item-shadow-host>`}};var b,w,p;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template
}`,...(p=(w=c.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};var h,$,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=($=l.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var v,z,x;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(z=u.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var f,k,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(k=a.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var y,E,M;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    'show-visibility-toggle': true,
    'show-more-actions': true,
    checkbox: true
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-menu>
  <modus-wc-menu-item
    ?checkbox=\${args.checkbox}
    has-submenu="true"
    label="Documents"
    ?show-visibility-toggle=\${args['show-visibility-toggle']}
    ?show-more-actions=\${args['show-more-actions']}
    size=\${args.size}
    value="documents"
  >
    <modus-wc-icon
      slot="start-icon"
      name="folder_closed"
      size="sm"
      variant="solid"
    ></modus-wc-icon>
    <modus-wc-menu .isSubMenu=\${true}>
      <modus-wc-menu-item
        ?checkbox=\${args.checkbox}
        label="Reports.pdf"
        ?show-visibility-toggle=\${args['show-visibility-toggle']}
        ?show-more-actions=\${args['show-more-actions']}
        size=\${args.size}
        value="reports"
      >
        <modus-wc-icon
          slot="start-icon"
          name="description"
          size="sm"
          variant="solid"
        ></modus-wc-icon>
      </modus-wc-menu-item>
      <modus-wc-menu-item
        ?checkbox=\${args.checkbox}
        label="Presentation.pptx"
        ?show-visibility-toggle=\${args['show-visibility-toggle']}
        ?show-more-actions=\${args['show-more-actions']}
        size=\${args.size}
        value="presentation"
      >
        <modus-wc-icon
          slot="start-icon"
          name="description"
          size="sm"
          variant="solid"
        ></modus-wc-icon>
      </modus-wc-menu-item>
    </modus-wc-menu>
  </modus-wc-menu-item>
  <modus-wc-menu-item
    ?checkbox=\${args.checkbox}
    has-submenu="true"
    label="Projects"
    ?show-visibility-toggle=\${args['show-visibility-toggle']}
    ?show-more-actions=\${args['show-more-actions']}
    size=\${args.size}
    value="projects"
  >
    <modus-wc-icon
      slot="start-icon"
      name="folder_closed"
      size="sm"
      variant="solid"
    ></modus-wc-icon>
    <modus-wc-menu .isSubMenu=\${true}>
      <modus-wc-menu-item
        ?checkbox=\${args.checkbox}
        label="Website Redesign"
        ?show-visibility-toggle=\${args['show-visibility-toggle']}
        ?show-more-actions=\${args['show-more-actions']}
        size=\${args.size}
        value="website"
      >
        <modus-wc-icon
          slot="start-icon"
          name="description"
          size="sm"
          variant="solid"
        ></modus-wc-icon>
      </modus-wc-menu-item>
    </modus-wc-menu>
  </modus-wc-menu-item>
</modus-wc-menu>
    \`;
  }
}`,...(M=(E=r.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var S,D,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(D=d.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const V=["Default","WithIcon","WithCheckbox","WithTooltip","WithVisibilityAndActions","ShadowDomParent"];export{c as Default,d as ShadowDomParent,u as WithCheckbox,l as WithIcon,a as WithTooltip,r as WithVisibilityAndActions,V as __namedExportsOrder,q as default};
