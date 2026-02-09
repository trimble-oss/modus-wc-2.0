import{w as B}from"./decorator-D4YmxizW.js";import{x as t}from"./lit-element-CucEn6F2.js";import{o as n}from"./if-defined-BiZP-SBN.js";import{c as H}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const j={title:"Components/Menu Item",component:"modus-wc-menu-item",args:{label:"Menu Item",size:"md",value:"menuItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[B],parameters:{actions:{handles:["itemSelect"]}}},W={render:e=>t`
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
    `},u={...W},c={render:e=>t`
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
    `},l={args:{checkbox:!0},render:e=>t`
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
    `},a={args:{"tooltip-content":"This is a tooltip for the menu item","tooltip-position":"top"},render:e=>t`
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
    `},r={render:e=>t`
      <modus-wc-menu>
        <modus-wc-menu-item
          checkbox="true"
          has-submenu="true"
          label="Documents"
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
              checkbox="true"
              label="Reports.pdf"
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
              checkbox="true"
              has-submenu="true"
              label="Presentations"
              size=${e.size}
              value="presentations"
            >
              <modus-wc-icon
                slot="start-icon"
                name="folder_closed"
                size="sm"
                variant="solid"
              ></modus-wc-icon>
              <modus-wc-menu .isSubMenu=${!0}>
                <modus-wc-menu-item
                  checkbox="true"
                  label="Q1 Review.pptx"
                  size=${e.size}
                  value="q1-review"
                >
                  <modus-wc-icon
                    slot="start-icon"
                    name="description"
                    size="sm"
                    variant="solid"
                  ></modus-wc-icon>
                </modus-wc-menu-item>
                <modus-wc-menu-item
                  checkbox="true"
                  label="Annual Meeting.pptx"
                  size=${e.size}
                  value="annual-meeting"
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
        </modus-wc-menu-item>
        <modus-wc-menu-item
          checkbox="true"
          has-submenu="true"
          label="Projects"
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
              checkbox="true"
              label="Website Redesign"
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
    `},d={render:e=>{if(!customElements.get("menu-item-shadow-host")){const T=H({componentTag:"modus-wc-menu",propsMapper:(s,m)=>{const P=m;P.ariaLabel="Shadow DOM Menu";let i=m.querySelector("modus-wc-menu-item");i||(i=document.createElement("modus-wc-menu-item"),m.innerHTML="",m.appendChild(i));const o=i;o.ariaLabel="Menu item in shadow DOM",o.bordered=!!s.bordered,o.checkbox=!!s.checkbox,o.customClass=s["custom-class"]||"",o.disabled=!!s.disabled,o.label=s.label,o.selected=!!s.selected,o.size=s.size||"md",o.subLabel=s["sub-label"]||"",o.tooltipContent=s["tooltip-content"]||"",o.tooltipPosition=s["tooltip-position"]||"auto",o.value=s.value}});customElements.define("menu-item-shadow-host",T)}return t`<menu-item-shadow-host
      .props=${{...e}}
    ></menu-item-shadow-host>`}};var b,p,w;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template
}`,...(w=(p=u.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var $,h,z;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(h=c.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var v,f,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,k,I;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(k=a.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var M,E,S;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
      <modus-wc-menu>
        <modus-wc-menu-item
          checkbox="true"
          has-submenu="true"
          label="Documents"
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
              checkbox="true"
              label="Reports.pdf"
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
              checkbox="true"
              has-submenu="true"
              label="Presentations"
              size=\${args.size}
              value="presentations"
            >
              <modus-wc-icon
                slot="start-icon"
                name="folder_closed"
                size="sm"
                variant="solid"
              ></modus-wc-icon>
              <modus-wc-menu .isSubMenu=\${true}>
                <modus-wc-menu-item
                  checkbox="true"
                  label="Q1 Review.pptx"
                  size=\${args.size}
                  value="q1-review"
                >
                  <modus-wc-icon
                    slot="start-icon"
                    name="description"
                    size="sm"
                    variant="solid"
                  ></modus-wc-icon>
                </modus-wc-menu-item>
                <modus-wc-menu-item
                  checkbox="true"
                  label="Annual Meeting.pptx"
                  size=\${args.size}
                  value="annual-meeting"
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
        </modus-wc-menu-item>
        <modus-wc-menu-item
          checkbox="true"
          has-submenu="true"
          label="Projects"
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
              checkbox="true"
              label="Website Redesign"
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
}`,...(S=(E=r.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var D,C,L;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const N=["Default","WithIcon","WithCheckbox","WithTooltip","NestedMenu","ShadowDomParent"];export{u as Default,r as NestedMenu,d as ShadowDomParent,l as WithCheckbox,c as WithIcon,a as WithTooltip,N as __namedExportsOrder,j as default};
