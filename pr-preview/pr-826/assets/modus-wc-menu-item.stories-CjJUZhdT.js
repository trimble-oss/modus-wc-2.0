import{w as P}from"./decorator-D4YmxizW.js";import{x as s}from"./lit-element-CucEn6F2.js";import{o as n}from"./if-defined-BiZP-SBN.js";import{c as B}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const q={title:"Components/Menu Item",component:"modus-wc-menu-item",args:{label:"Menu Item",size:"md",value:"menuItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[P],parameters:{actions:{handles:["itemSelect"]}}},H={render:e=>s`
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
    `},m={...H},u={render:e=>s`
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
    `},a={args:{checkbox:!0},render:e=>s`
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
    `},l={args:{"tooltip-content":"This is a tooltip for the menu item","tooltip-position":"top"},render:e=>s`
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
    `},r={args:{"show-content-tree-actions":!0,checkbox:!0},render:e=>s`
<modus-wc-menu>
  <modus-wc-menu-item
    ?checkbox=${e.checkbox}
    has-submenu="true"
    label="Documents"
    ?show-content-tree-actions=${e["show-content-tree-actions"]}
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
        ?show-content-tree-actions=${e["show-content-tree-actions"]}
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
        ?show-content-tree-actions=${e["show-content-tree-actions"]}
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
    ?show-content-tree-actions=${e["show-content-tree-actions"]}
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
        ?show-content-tree-actions=${e["show-content-tree-actions"]}
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
    `},d={render:e=>{if(!customElements.get("menu-item-shadow-host")){const L=B({componentTag:"modus-wc-menu",propsMapper:(t,c)=>{const W=c;W.ariaLabel="Shadow DOM Menu";let i=c.querySelector("modus-wc-menu-item");i||(i=document.createElement("modus-wc-menu-item"),c.innerHTML="",c.appendChild(i));const o=i;o.ariaLabel="Menu item in shadow DOM",o.bordered=!!t.bordered,o.checkbox=!!t.checkbox,o.customClass=t["custom-class"]||"",o.disabled=!!t.disabled,o.label=t.label,o.selected=!!t.selected,o.size=t.size||"md",o.subLabel=t["sub-label"]||"",o.tooltipContent=t["tooltip-content"]||"",o.tooltipPosition=t["tooltip-position"]||"auto",o.value=t.value}});customElements.define("menu-item-shadow-host",L)}return s`<menu-item-shadow-host
      .props=${{...e}}
    ></menu-item-shadow-host>`}};var b,p,w;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template
}`,...(w=(p=m.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var h,$,z;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(z=($=u.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var x,f,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,g,I;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(g=l.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var E,M,S;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    'show-content-tree-actions': true,
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
    ?show-content-tree-actions=\${args['show-content-tree-actions']}
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
        ?show-content-tree-actions=\${args['show-content-tree-actions']}
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
        ?show-content-tree-actions=\${args['show-content-tree-actions']}
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
    ?show-content-tree-actions=\${args['show-content-tree-actions']}
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
        ?show-content-tree-actions=\${args['show-content-tree-actions']}
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
}`,...(S=(M=r.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var D,C,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const G=["Default","WithIcon","WithCheckbox","WithTooltip","WithContentTreeActions","ShadowDomParent"];export{m as Default,d as ShadowDomParent,a as WithCheckbox,r as WithContentTreeActions,u as WithIcon,l as WithTooltip,G as __namedExportsOrder,q as default};
