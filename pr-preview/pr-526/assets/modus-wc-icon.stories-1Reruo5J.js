import{x as o}from"./lit-element-C8zulti1.js";import{o as d}from"./if-defined-yv6owfG8.js";import{c as k}from"./shadow-host-helper-A4Nvcs5e.js";const H={title:"Components/Icon",component:"modus-wc-icon",args:{"custom-class":"",decorative:!1,name:"alert",size:"md"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["outlined","solid"]}}},M={render:e=>o`
<modus-wc-icon
  aria-label="Alert icon"
  custom-class="${d(e["custom-class"])}"
  ?decorative="${e.decorative}"
  name="${e.name}"
  size="${e.size}"
  variant="${d(e.variant)}"
>
</modus-wc-icon>
    `},t={...M},r={render:e=>o`
<style>
  .red-icon {
    color: red;
  }
</style>
<modus-wc-icon
  aria-label="Red alert icon"
  custom-class="red-icon"
  name="alert"
  size="${e.size}"
>
</modus-wc-icon>
    `},a={args:{"custom-class":"icon-font tc-icon-cloud-queue",decorative:!1,name:"",size:"lg"},decorators:[e=>o`
      <link
        rel="stylesheet"
        href="https://resources.connect.trimble.com/1.12.0/fonts/icon-font.min.css"
      />
      ${e()}
    `],render:e=>o`
<modus-wc-icon
  aria-label="Cloud Queue icon"
  custom-class="${d(e["custom-class"])}"
  ?decorative="${e.decorative}"
  name="${e.name}"
  size="${e.size}"
>
</modus-wc-icon>
    `},c={render:e=>{if(!customElements.get("icon-shadow-host")){const $=k({componentTag:"modus-wc-icon",propsMapper:(s,I)=>{const n=I;n.customClass=s["custom-class"]||"",n.decorative=!!s.decorative,n.name=s.name,n.size=s.size,n.variant=s.variant??"outlined"}});customElements.define("icon-shadow-host",$)}return o`<icon-shadow-host .props=${{...e}}></icon-shadow-host>`}},i={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - Requires <b>Modus Icons</b> to be installed in the host application see [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs).\n  - The `color` property has been removed in favor of using CSS for styling.\n  - The `iconClick` event has been removed. Use the `click` event on the host element instead.\n  - In 1.0 the `size` prop accepted any numeric string (e.g., `'16'`, `'24'`, `'32'`) to set the icon's\n  width and height. 2.0 uses preset sizes: `sm`, `md`, `lg`, and can use CSS for custom sizes.\n\n#### Prop Mapping\n\n| 1.0 Prop | 2.0 Prop | Notes                                                |\n|----------|----------|------------------------------------------------------|\n| color    |          | Not carried over, use CSS instead                    |\n| name     | name     |                                                      |\n| size     | size     | Numeric values changed to `sm`, `md`, `lg`, use CSS for custom sizes |\n\n#### Event Mapping\n\n| 1.0 Event | 2.0 Event | Notes                                                         |\n|-----------|-----------|---------------------------------------------------------------|\n| iconClick |           | Not carried over, use `click` event on host element instead |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,h,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .red-icon {
    color: red;
  }
</style>
<modus-wc-icon
  aria-label="Red alert icon"
  custom-class="red-icon"
  name="alert"
  size="\${args.size}"
>
</modus-wc-icon>
    \`;
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,f,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    'custom-class': 'icon-font tc-icon-cloud-queue',
    decorative: false,
    name: '',
    size: 'lg'
  },
  decorators: [story => html\`
      <link
        rel="stylesheet"
        href="https://resources.connect.trimble.com/1.12.0/fonts/icon-font.min.css"
      />
      \${story()}
    \`],
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-icon
  aria-label="Cloud Queue icon"
  custom-class="\${ifDefined(args['custom-class'])}"
  ?decorative="\${args.decorative}"
  name="\${args.name}"
  size="\${args.size}"
>
</modus-wc-icon>
    \`;
  }
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var z,C,S;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for icon component
    if (!customElements.get('icon-shadow-host')) {
      const IconShadowHost = createShadowHostClass<IconArgs>({
        componentTag: 'modus-wc-icon',
        propsMapper: (v: IconArgs, el: HTMLElement) => {
          const iconEl = el as unknown as {
            customClass: string;
            decorative: boolean;
            name: string;
            size: string;
            variant: string;
          };
          iconEl.customClass = v['custom-class'] || '';
          iconEl.decorative = Boolean(v.decorative);
          iconEl.name = v.name;
          iconEl.size = v.size;
          iconEl.variant = v.variant ?? 'outlined';
        }
      });
      customElements.define('icon-shadow-host', IconShadowHost);
    }
    return html\`<icon-shadow-host .props=\${{
      ...args
    }}></icon-shadow-host>\`;
  }
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,y,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - Requires <b>Modus Icons</b> to be installed in the host application see [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs).
  - The \\\`color\\\` property has been removed in favor of using CSS for styling.
  - The \\\`iconClick\\\` event has been removed. Use the \\\`click\\\` event on the host element instead.
  - In 1.0 the \\\`size\\\` prop accepted any numeric string (e.g., \\\`'16'\\\`, \\\`'24'\\\`, \\\`'32'\\\`) to set the icon's
  width and height. 2.0 uses preset sizes: \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`, and can use CSS for custom sizes.

#### Prop Mapping

| 1.0 Prop | 2.0 Prop | Notes                                                |
|----------|----------|------------------------------------------------------|
| color    |          | Not carried over, use CSS instead                    |
| name     | name     |                                                      |
| size     | size     | Numeric values changed to \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`, use CSS for custom sizes |

#### Event Mapping

| 1.0 Event | 2.0 Event | Notes                                                         |
|-----------|-----------|---------------------------------------------------------------|
| iconClick |           | Not carried over, use \\\`click\\\` event on host element instead |
        \`
      }
    },
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  render: () => html\`<div></div>\`
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const q=["Default","CustomColor","CustomIcons","ShadowDomParent","Migration"];export{r as CustomColor,a as CustomIcons,t as Default,i as Migration,c as ShadowDomParent,q as __namedExportsOrder,H as default};
