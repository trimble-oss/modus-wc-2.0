import{x as o}from"./lit-element-C8zulti1.js";import{o as m}from"./if-defined-yv6owfG8.js";const b={title:"Components/Panel",component:"modus-wc-panel",parameters:{layout:"padded"},argTypes:{floating:{control:{type:"boolean"}}}},s={args:{width:"250px",height:"500px",floating:!1},render:e=>o`
<style>
  .panel-section {
    padding: 12px;
  }
</style>
<modus-wc-panel custom-class="${m(e["custom-class"])}" width="${m(e.width)}" height="${m(e.height)}" ?floating="${e.floating}">
  <modus-wc-menu slot="header">  
    <modus-wc-menu-item label="Home" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="home"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item label="Dashboard" value="dashboard"></modus-wc-menu-item>
    <modus-wc-menu-item label="Projects" value="projects"></modus-wc-menu-item>
    <modus-wc-menu-item label="Team" value="team"></modus-wc-menu-item>
    <modus-wc-menu-item label="Calendar" value="calendar"></modus-wc-menu-item>
    <modus-wc-menu-item label="Documents" value="documents"></modus-wc-menu-item>
    <modus-wc-menu-item label="Reports" value="reports"></modus-wc-menu-item>
    <modus-wc-menu-item label="Analytics" value="analytics"></modus-wc-menu-item>
    <modus-wc-menu-item label="Messages" value="messages"></modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu slot="footer">   
    <modus-wc-menu-item label="Settings" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="settings"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>
    `},n={args:{width:"250px",height:"500px",floating:!0},render:e=>o`
<style>
  .panel-section {
    padding: 12px;
  }
</style>
<modus-wc-panel custom-class="${m(e["custom-class"])}" width="${m(e.width)}" height="${m(e.height)}" ?floating="${e.floating}">
  <modus-wc-menu slot="header">
    <modus-wc-menu-item label="Menu" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="menu"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item label="Files" value="files"></modus-wc-menu-item>
    <modus-wc-menu-item label="Inbox" value="inbox"></modus-wc-menu-item>
    <modus-wc-menu-item label="Starred" value="starred"></modus-wc-menu-item>
    <modus-wc-menu-item label="Recent" value="recent"></modus-wc-menu-item>
    <modus-wc-menu-item label="Shared" value="shared"></modus-wc-menu-item>
    <modus-wc-menu-item label="Archive" value="archive"></modus-wc-menu-item>
    <modus-wc-menu-item label="Trash" value="trash"></modus-wc-menu-item>
    <modus-wc-menu-item label="Settings" value="settings"></modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu slot="footer">
    <modus-wc-menu-item label="Help" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="help"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>
    `},u={args:{width:"250px",height:"auto"},render:e=>o`
<modus-wc-panel custom-class="${m(e["custom-class"])}" width="${m(e.width)}" height="${m(e.height)}" ?floating="${e.floating}">
  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item label="Dashboard" value="dashboard"></modus-wc-menu-item>
    <modus-wc-menu-item label="Projects" value="projects"></modus-wc-menu-item>
    <modus-wc-menu-item label="Team" value="team"></modus-wc-menu-item>
    <modus-wc-menu-item label="Calendar" value="calendar"></modus-wc-menu-item>
    <modus-wc-menu-item label="Documents" value="documents"></modus-wc-menu-item>
    <modus-wc-menu-item label="Reports" value="reports"></modus-wc-menu-item>
    <modus-wc-menu-item label="Analytics" value="analytics"></modus-wc-menu-item>
    <modus-wc-menu-item label="Messages" value="messages"></modus-wc-menu-item>
    <modus-wc-menu-item label="Tasks" value="tasks"></modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>
    `};var t,a,c;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    width: '250px',
    height: '500px',
    floating: false
  },
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .panel-section {
    padding: 12px;
  }
</style>
<modus-wc-panel custom-class="\${ifDefined(args['custom-class'])}" width="\${ifDefined(args.width)}" height="\${ifDefined(args.height)}" ?floating="\${args.floating}">
  <modus-wc-menu slot="header">  
    <modus-wc-menu-item label="Home" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="home"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item label="Dashboard" value="dashboard"></modus-wc-menu-item>
    <modus-wc-menu-item label="Projects" value="projects"></modus-wc-menu-item>
    <modus-wc-menu-item label="Team" value="team"></modus-wc-menu-item>
    <modus-wc-menu-item label="Calendar" value="calendar"></modus-wc-menu-item>
    <modus-wc-menu-item label="Documents" value="documents"></modus-wc-menu-item>
    <modus-wc-menu-item label="Reports" value="reports"></modus-wc-menu-item>
    <modus-wc-menu-item label="Analytics" value="analytics"></modus-wc-menu-item>
    <modus-wc-menu-item label="Messages" value="messages"></modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu slot="footer">   
    <modus-wc-menu-item label="Settings" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="settings"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>
    \`;
  }
}`,...(c=(a=s.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,i,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: '250px',
    height: '500px',
    floating: true
  },
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .panel-section {
    padding: 12px;
  }
</style>
<modus-wc-panel custom-class="\${ifDefined(args['custom-class'])}" width="\${ifDefined(args.width)}" height="\${ifDefined(args.height)}" ?floating="\${args.floating}">
  <modus-wc-menu slot="header">
    <modus-wc-menu-item label="Menu" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="menu"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item label="Files" value="files"></modus-wc-menu-item>
    <modus-wc-menu-item label="Inbox" value="inbox"></modus-wc-menu-item>
    <modus-wc-menu-item label="Starred" value="starred"></modus-wc-menu-item>
    <modus-wc-menu-item label="Recent" value="recent"></modus-wc-menu-item>
    <modus-wc-menu-item label="Shared" value="shared"></modus-wc-menu-item>
    <modus-wc-menu-item label="Archive" value="archive"></modus-wc-menu-item>
    <modus-wc-menu-item label="Trash" value="trash"></modus-wc-menu-item>
    <modus-wc-menu-item label="Settings" value="settings"></modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu slot="footer">
    <modus-wc-menu-item label="Help" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="help"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>
    \`;
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var w,r,h;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    width: '250px',
    height: 'auto'
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-panel custom-class="\${ifDefined(args['custom-class'])}" width="\${ifDefined(args.width)}" height="\${ifDefined(args.height)}" ?floating="\${args.floating}">
  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item label="Dashboard" value="dashboard"></modus-wc-menu-item>
    <modus-wc-menu-item label="Projects" value="projects"></modus-wc-menu-item>
    <modus-wc-menu-item label="Team" value="team"></modus-wc-menu-item>
    <modus-wc-menu-item label="Calendar" value="calendar"></modus-wc-menu-item>
    <modus-wc-menu-item label="Documents" value="documents"></modus-wc-menu-item>
    <modus-wc-menu-item label="Reports" value="reports"></modus-wc-menu-item>
    <modus-wc-menu-item label="Analytics" value="analytics"></modus-wc-menu-item>
    <modus-wc-menu-item label="Messages" value="messages"></modus-wc-menu-item>
    <modus-wc-menu-item label="Tasks" value="tasks"></modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>
    \`;
  }
}`,...(h=(r=u.parameters)==null?void 0:r.docs)==null?void 0:h.source}}};const v=["Default","Floating","BodyOnly"];export{u as BodyOnly,s as Default,n as Floating,v as __namedExportsOrder,b as default};
