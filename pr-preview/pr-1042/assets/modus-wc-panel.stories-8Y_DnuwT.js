import{x as l}from"./lit-element-CucEn6F2.js";import{o as m}from"./if-defined-BiZP-SBN.js";import{c as D}from"./shadow-host-helper-A4Nvcs5e.js";const H={title:"Components/Panel",component:"modus-wc-panel",parameters:{layout:"padded"},argTypes:{floating:{control:{type:"boolean"}}}},u={args:{width:"250px",height:"500px",floating:!1},render:e=>l`
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
    `},o={args:{width:"250px",height:"500px",floating:!0},render:e=>l`
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
    `},t={args:{width:"250px",height:"auto"},render:e=>l`
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
    `},a={render:e=>{if(!customElements.get("panel-shadow-host")){const $=D({componentTag:"modus-wc-panel",propsMapper:(s,c)=>{const n=c;n.customClass=s["custom-class"]||"",n.width=s.width??"250px",n.height=s.height??"500px",n.floating=!!s.floating,c.hasChildNodes()||(c.innerHTML=`
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
</modus-wc-menu>`)}});customElements.define("panel-shadow-host",$)}return l` <style>
        .panel-section {
          padding: 12px;
        }
      </style>
      <panel-shadow-host .props=${{...e}}></panel-shadow-host>`}};var d,i,w;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(w=(i=u.parameters)==null?void 0:i.docs)==null?void 0:w.source}}};var r,p,h;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,b,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,y,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('panel-shadow-host')) {
      const PanelShadowHost = createShadowHostClass<PanelArgs>({
        componentTag: 'modus-wc-panel',
        propsMapper: (v: PanelArgs, el: HTMLElement) => {
          const panelEl = el as unknown as {
            customClass: string;
            width: string;
            height: string;
            floating: boolean;
          };
          panelEl.customClass = v['custom-class'] || '';
          panelEl.width = v.width ?? '250px';
          panelEl.height = v.height ?? '500px';
          panelEl.floating = Boolean(v.floating);
          if (!el.hasChildNodes()) {
            el.innerHTML = \`
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
</modus-wc-menu>\`;
          }
        }
      });
      customElements.define('panel-shadow-host', PanelShadowHost);
    }
    return html\` <style>
        .panel-section {
          padding: 12px;
        }
      </style>
      <panel-shadow-host .props=\${{
      ...args
    }}></panel-shadow-host>\`;
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const P=["Default","Floating","BodyOnly","ShadowDomParent"];export{t as BodyOnly,u as Default,o as Floating,a as ShadowDomParent,P as __namedExportsOrder,H as default};
