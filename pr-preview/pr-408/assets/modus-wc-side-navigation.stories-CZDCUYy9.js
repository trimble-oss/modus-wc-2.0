import{x as o}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";const u={title:"Components/Side Navigation",component:"modus-wc-side-navigation",args:{"collapse-on-click-outside":!0,expanded:!1,"max-width":"256px"},argTypes:{"max-width":{control:{type:"text"},description:"Maximum width of the side navigation panel in an expanded state."}},parameters:{layout:"padded"}},n={render:e=>o`
    <style>
      .modus-wc-menu-item-labels {
        padding: 0 16px;
      }
    </style>
    <modus-wc-side-navigation
      collapse-on-click-outside=${e["collapse-on-click-outside"]}
      custom-class=${a(e["custom-class"])}
      expanded=${e.expanded}
      max-width=${e["max-width"]}
    >
      <modus-wc-menu size="lg">
        <modus-wc-menu-item label="menu" start-icon="menu"></modus-wc-menu-item>
        <modus-wc-menu-item label="home" start-icon="home"></modus-wc-menu-item>
        <modus-wc-menu-item
          label="profile"
          start-icon="person"
        ></modus-wc-menu-item>
        <modus-wc-menu-item
          label="settings"
          start-icon="gears"
        ></modus-wc-menu-item>
      </modus-wc-menu>
    </modus-wc-side-navigation>
  `};var s,m,t;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => html\`
    <style>
      .modus-wc-menu-item-labels {
        padding: 0 16px;
      }
    </style>
    <modus-wc-side-navigation
      collapse-on-click-outside=\${args['collapse-on-click-outside']}
      custom-class=\${ifDefined(args['custom-class'])}
      expanded=\${args.expanded}
      max-width=\${args['max-width']}
    >
      <modus-wc-menu size="lg">
        <modus-wc-menu-item label="menu" start-icon="menu"></modus-wc-menu-item>
        <modus-wc-menu-item label="home" start-icon="home"></modus-wc-menu-item>
        <modus-wc-menu-item
          label="profile"
          start-icon="person"
        ></modus-wc-menu-item>
        <modus-wc-menu-item
          label="settings"
          start-icon="gears"
        ></modus-wc-menu-item>
      </modus-wc-menu>
    </modus-wc-side-navigation>
  \`
}`,...(t=(m=n.parameters)==null?void 0:m.docs)==null?void 0:t.source}}};const c=["Default"];export{n as Default,c as __namedExportsOrder,u as default};
