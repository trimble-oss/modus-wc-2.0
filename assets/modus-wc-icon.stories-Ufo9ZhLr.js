import{x as s}from"./lit-element-C8zulti1.js";import{o as z}from"./if-defined-yv6owfG8.js";const y={title:"Components/Icon",component:"modus-wc-icon",args:{"custom-class":"",decorative:!1,name:"alert",size:"md"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]}}},C={render:e=>s`
<modus-wc-icon
  aria-label="Alert icon"
  custom-class="${z(e["custom-class"])}"
  ?decorative="${e.decorative}"
  name="${e.name}"
  size="${e.size}"
>
</modus-wc-icon>
    `},o={...C},n={render:e=>s`
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
    `},r={args:{"custom-class":"icon-font tc-icon-cloud-queue",decorative:!1,name:"",size:"lg"},decorators:[e=>s`
      <link
        rel="stylesheet"
        href="https://resources.connect.trimble.com/1.12.0/fonts/icon-font.min.css"
      />
      ${e()}
    `],render:e=>s`
<modus-wc-icon
  aria-label="Cloud Queue icon"
  custom-class="${z(e["custom-class"])}"
  ?decorative="${e.decorative}"
  name="${e.name}"
  size="${e.size}"
>
</modus-wc-icon>
    `},t={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - Requires <b>Modus Icons</b> to be installed in the host application see [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs).\n  - The `color` property has been removed in favor of using CSS for styling.\n  - The `iconClick` event has been removed. Use the `click` event on the host element instead.\n  - In 1.0 the `size` prop accepted any numeric string (e.g., `'16'`, `'24'`, `'32'`) to set the icon's\n  width and height. 2.0 uses preset sizes: `sm`, `md`, `lg`, and can use CSS for custom sizes.\n\n#### Prop Mapping\n\n| 1.0 Prop | 2.0 Prop | Notes                                                |\n|----------|----------|------------------------------------------------------|\n| color    |          | Not carried over, use CSS instead                    |\n| name     | name     |                                                      |\n| size     | size     | Numeric values changed to `sm`, `md`, `lg`, use CSS for custom sizes |\n\n#### Event Mapping\n\n| 1.0 Event | 2.0 Event | Notes                                                         |\n|-----------|-----------|---------------------------------------------------------------|\n| iconClick |           | Not carried over, use `click` event on host element instead |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`};var c,a,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var d,m,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,p,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,v,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const $=["Default","CustomColor","CustomIcons","Migration"];export{n as CustomColor,r as CustomIcons,o as Default,t as Migration,$ as __namedExportsOrder,y as default};
