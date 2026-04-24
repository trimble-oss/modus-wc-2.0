import{x as c}from"./lit-element-CucEn6F2.js";import{o as m}from"./if-defined-BiZP-SBN.js";import{c as C}from"./shadow-host-helper-A4Nvcs5e.js";const H={title:"Components/Panel",component:"modus-wc-panel",parameters:{layout:"padded"},argTypes:{floating:{control:{type:"boolean"}}}},t={args:{width:"250px",height:"500px",floating:!1},render:e=>c`
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
    `},u={args:{width:"250px",height:"500px",floating:!0},render:e=>c`
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
    `},a={args:{width:"250px",height:"auto"},render:e=>c`
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
    `},l={render:e=>{if(!customElements.get("panel-shadow-host")){const S=C({componentTag:"modus-wc-panel",propsMapper:(s,o)=>{const n=o;if(n.customClass=s["custom-class"]||"",n.width=s.width??"250px",n.height=s.height??"500px",n.floating=!!s.floating,!o.hasChildNodes()){const d=o.getRootNode();if(d instanceof ShadowRoot&&!d.querySelector("#panel-section-style")){const i=document.createElement("style");i.id="panel-section-style",i.textContent=".panel-section { padding: 12px; }",d.appendChild(i)}o.innerHTML=`
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
</modus-wc-menu>`}}});customElements.define("panel-shadow-host",S)}return c`<panel-shadow-host .props=${{...e}}></panel-shadow-host>`}};var w,r,h;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(r=t.parameters)==null?void 0:r.docs)==null?void 0:h.source}}};var p,g,b;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(g=u.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,f,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,D,$;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
            // Inject .panel-section style into the shadow root since the
            // global <style> block can't cross the shadow DOM boundary
            const shadowRoot = el.getRootNode();
            if (shadowRoot instanceof ShadowRoot && !shadowRoot.querySelector('#panel-section-style')) {
              const style = document.createElement('style');
              style.id = 'panel-section-style';
              style.textContent = '.panel-section { padding: 12px; }';
              shadowRoot.appendChild(style);
            }
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
    return html\`<panel-shadow-host .props=\${{
      ...args
    }}></panel-shadow-host>\`;
  }
}`,...($=(D=l.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const M=["Default","Floating","BodyOnly","ShadowDomParent"];export{a as BodyOnly,t as Default,u as Floating,l as ShadowDomParent,M as __namedExportsOrder,H as default};
