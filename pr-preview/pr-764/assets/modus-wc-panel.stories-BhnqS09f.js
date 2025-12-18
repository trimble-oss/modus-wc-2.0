import{x as t}from"./lit-element-C8zulti1.js";import{o as d}from"./if-defined-yv6owfG8.js";const x={title:"Components/Panel",component:"modus-wc-panel",parameters:{layout:"padded"},argTypes:{floating:{control:{type:"boolean"}}}},i={args:{width:"250px",height:"400px",floating:!1},render:o=>t`
<modus-wc-panel custom-class="${d(o["custom-class"])}" width="${d(o.width)}" height="${d(o.height)}" ?floating="${o.floating}">
  <div slot="header" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
    <modus-wc-icon name="home"></modus-wc-icon>
    <strong>Home</strong>
  </div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Dashboard</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Projects</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Team</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Calendar</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Documents</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Reports</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Analytics</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Messages</div>
  <div slot="footer" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
    <modus-wc-icon name="settings"></modus-wc-icon>
    Settings
  </div>
</modus-wc-panel>
    `},s={args:{width:"250px",height:"500px",floating:!0},render:o=>t`
<modus-wc-panel custom-class="${d(o["custom-class"])}" width="${d(o.width)}" height="${d(o.height)}" ?floating="${o.floating}">
  <div slot="header" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
    <modus-wc-icon name="menu"></modus-wc-icon>
    <strong>Menu</strong>
  </div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Files</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Inbox</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Starred</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Recent</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Shared</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Archive</div>
  <div slot="footer" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
    <modus-wc-icon name="help"></modus-wc-icon>
    Help
  </div>
</modus-wc-panel>
    `},e={args:{width:"250px",height:"500px"},render:o=>t`
<modus-wc-panel custom-class="${d(o["custom-class"])}" width="${d(o.width)}" height="${d(o.height)}" ?floating="${o.floating}">
  <div slot="body" style="padding: 12px; cursor: pointer;">Dashboard</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Projects</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Team</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Calendar</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Documents</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Reports</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Analytics</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Messages</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Tasks</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Notifications</div>
</modus-wc-panel>
    `};var n,r,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    width: '250px',
    height: '400px',
    floating: false
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-panel custom-class="\${ifDefined(args['custom-class'])}" width="\${ifDefined(args.width)}" height="\${ifDefined(args.height)}" ?floating="\${args.floating}">
  <div slot="header" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
    <modus-wc-icon name="home"></modus-wc-icon>
    <strong>Home</strong>
  </div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Dashboard</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Projects</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Team</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Calendar</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Documents</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Reports</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Analytics</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Messages</div>
  <div slot="footer" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
    <modus-wc-icon name="settings"></modus-wc-icon>
    Settings
  </div>
</modus-wc-panel>
    \`;
  }
}`,...(p=(r=i.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var a,l,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    width: '250px',
    height: '500px',
    floating: true
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-panel custom-class="\${ifDefined(args['custom-class'])}" width="\${ifDefined(args.width)}" height="\${ifDefined(args.height)}" ?floating="\${args.floating}">
  <div slot="header" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
    <modus-wc-icon name="menu"></modus-wc-icon>
    <strong>Menu</strong>
  </div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Files</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Inbox</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Starred</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Recent</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Shared</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Archive</div>
  <div slot="footer" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
    <modus-wc-icon name="help"></modus-wc-icon>
    Help
  </div>
</modus-wc-panel>
    \`;
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,u,y;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    width: '250px',
    height: '500px'
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-panel custom-class="\${ifDefined(args['custom-class'])}" width="\${ifDefined(args.width)}" height="\${ifDefined(args.height)}" ?floating="\${args.floating}">
  <div slot="body" style="padding: 12px; cursor: pointer;">Dashboard</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Projects</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Team</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Calendar</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Documents</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Reports</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Analytics</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Messages</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Tasks</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Notifications</div>
</modus-wc-panel>
    \`;
  }
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const h=["Default","Floating","BodyOnly"];export{e as BodyOnly,i as Default,s as Floating,h as __namedExportsOrder,x as default};
