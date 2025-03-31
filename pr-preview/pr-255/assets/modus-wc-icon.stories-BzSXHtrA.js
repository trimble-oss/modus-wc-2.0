import{k as t}from"./lit-element-DVRzCIa_.js";import{t as h}from"./if-defined-1ipA9LQg.js";const z={title:"Components/Icon",component:"modus-wc-icon",args:{"custom-class":"",decorative:!1,name:"alert",size:"md"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]}}},g={render:e=>t`
      <modus-wc-icon
        aria-label="Alert icon"
        custom-class="${h(e["custom-class"])}"
        ?decorative="${e.decorative}"
        name="${e.name}"
        size="${e.size}"
      >
      </modus-wc-icon>
    `},n={...g},o={render:e=>t`
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
    `},s={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - Requires <b>Modus Icons</b> to be installed in the host application see [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs).\n  - The `color` property has been removed in favor of using CSS for styling.\n  - The `iconClick` event has been removed. Use the `click` event on the host element instead.\n  - In 1.0 the `size` prop accepted any numeric string (e.g., `'16'`, `'24'`, `'32'`) to set the icon's\n  width and height. 2.0 uses preset sizes: `sm`, `md`, `lg`.\n\n#### Prop Mapping\n\n| 1.0 Prop | 2.0 Prop | Notes                                                |\n|----------|----------|------------------------------------------------------|\n| color    |          | Not carried over, use CSS instead                    |\n| name     | name     |                                                      |\n| size     | size     | Numeric values changed to `sm`, `md`, `lg`     |\n\n#### Event Mapping\n\n| 1.0 Event | 2.0 Event | Notes                                                         |\n|-----------|-----------|---------------------------------------------------------------|\n| iconClick |           | Not carried over, use `click` event on host element instead |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>t`<div></div>`};var r,a,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,d,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
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
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - Requires <b>Modus Icons</b> to be installed in the host application see [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs).
  - The \\\`color\\\` property has been removed in favor of using CSS for styling.
  - The \\\`iconClick\\\` event has been removed. Use the \\\`click\\\` event on the host element instead.
  - In 1.0 the \\\`size\\\` prop accepted any numeric string (e.g., \\\`'16'\\\`, \\\`'24'\\\`, \\\`'32'\\\`) to set the icon's
  width and height. 2.0 uses preset sizes: \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`.

#### Prop Mapping

| 1.0 Prop | 2.0 Prop | Notes                                                |
|----------|----------|------------------------------------------------------|
| color    |          | Not carried over, use CSS instead                    |
| name     | name     |                                                      |
| size     | size     | Numeric values changed to \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`     |

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
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const C=["Default","CustomColor","Migration"];export{o as CustomColor,n as Default,s as Migration,C as __namedExportsOrder,z as default};
