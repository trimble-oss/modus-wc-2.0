import{w as Q}from"./decorator-D4YmxizW.js";import{x as p}from"./lit-element-CucEn6F2.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const ee={title:"Components/Utility Panel",component:"modus-wc-utility-panel",args:{expanded:!1,"push-content":!0},argTypes:{expanded:{control:{type:"boolean"}},"push-content":{control:{type:"boolean"}}},decorators:[Q,e=>(requestAnimationFrame(()=>{document.querySelectorAll("modus-wc-utility-panel").forEach(n=>{const d=n.closest(".demo-container");if(d){const o=d.querySelector(".main-content");o&&n&&(n.targetElement=o)}})}),e())],parameters:{actions:{handles:["panelOpened","panelClosed"]},docs:{description:{component:"A utility panel component that slides in from the right side of the screen. It can either push content or display as an overlay.\n\nThe component supports `<slot>` called 'header' for panel title content, 'body' for main content area, and 'footer' for action buttons or additional controls."}},layout:"fullscreen"}},i=`
  .demo-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: white;
  }

  modus-wc-navbar {
    flex-shrink: 0;
  }

  .main-content-wrapper {
    flex: 1;
    overflow: hidden;
    position: relative;
    background: var(--modus-wc-color-base-page);
  }

  .main-content {
    height: 100%;
    padding: 20px;
    background: var(--modus-wc-color-base-page);
    overflow: auto;
  }

  .main-content p,
  .modus-wc-utility-panel-body p {
    margin-bottom: var(--modus-wc-spacing-2xl);
  }

  .modus-wc-utility-panel-header {
    font-size: 18px;
    font-weight: 600;
  }

  .modus-wc-utility-panel-body {
    padding: 20px 0;
  }

  .modus-wc-utility-panel-footer {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

`,A=`
<script>
  requestAnimationFrame(() => {
  // Select the specific container for this story
  const container = document.querySelector('.demo-container');

  if (container) {
    // Find the specific panel and content inside this container
    const panel = container.querySelector('modus-wc-utility-panel');
    const contentElement = container.querySelector('.main-content');

    // Link them together
    if (panel && contentElement) {
      panel.targetElement = contentElement;
    }
  }
});
  const navbar = document.querySelector('modus-wc-navbar');
  if (navbar) {
    navbar.visibility = { user: false };
  }
<\/script>`,b={parameters:{docs:{source:{transform:()=>`

<style>
${i}
</style>

<div class="demo-container">
  <modus-wc-navbar id="navbar-default">
    <div slot="end">
      <modus-wc-tooltip content="Toggle Utility Panel" position="left">
        <modus-wc-button
          id="toggle-btn"
          color="primary"
          size="sm"
          variant="outlined"
          onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
        >
          <modus-wc-icon name="menu"></modus-wc-icon>
        </modus-wc-button>
      </modus-wc-tooltip>
    </div>
  </modus-wc-navbar>

  <div class="main-content-wrapper">
    <div id="main-content" class="main-content">
      <h1>Main Content Area</h1>
      <p>
        This is the main content area below the navbar. When the utility
        panel opens with pushContent=true, this content will be pushed to
        the left.
      </p>
      <p>
        This is an example of how the utility panel interacts with the main
        content. When the panel opens with push content enabled, this area
        will shift to the left to make room for the panel.
      </p>
      <p>
        The content area maintains its full functionality while the panel is
        open. Users can continue to interact with the main content while
        accessing the utility panel features.
      </p>
    </div>

    <modus-wc-utility-panel
      expanded="false"
      push-content="true"
    >
      <div slot="header" class="modus-wc-utility-panel-header">
        Utility Panel Header
      </div>

      <div slot="body" class="modus-wc-utility-panel-body">
        <p>This is the utility panel body content.</p>
        <p>
          You can add any content here including forms, lists, or other
          components.
        </p>
        <modus-wc-text-input
          label="Example Input"
          placeholder="Enter text..."
        >
        </modus-wc-text-input>
      </div>

      <div slot="footer" class="modus-wc-utility-panel-footer">
        <modus-wc-button color="tertiary" size="sm"
          >Cancel</modus-wc-button
        >
        <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
      </div>
    </modus-wc-utility-panel>
  </div>
</div>
${A}`}}},render:e=>p`
    <style>
      ${i}
    </style>
    <div class="demo-container">
      <modus-wc-navbar id="navbar-default" .visibility=${{user:!1}}>
        <div slot="end">
          <modus-wc-tooltip content="Toggle Utility Panel" position="left">
            <modus-wc-button
              color="primary"
              size="sm"
              variant="outlined"
              onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
            >
              <modus-wc-icon name="menu"></modus-wc-icon>
            </modus-wc-button>
          </modus-wc-tooltip>
        </div>
      </modus-wc-navbar>

      <div class="main-content-wrapper">
        <div id="main-content" class="main-content">
          <h1>Main Content Area</h1>
          <p>
            This is the main content area below the navbar. When the utility
            panel opens with pushContent=true, this content will be pushed to
            the left.
          </p>
          <p>
            This is an example of how the utility panel interacts with the main
            content. When the panel opens with push content enabled, this area
            will shift to the left to make room for the panel.
          </p>
          <p>
            The content area maintains its full functionality while the panel is
            open. Users can continue to interact with the main content while
            accessing the utility panel features.
          </p>
        </div>

        <modus-wc-utility-panel
          ?expanded="${e.expanded}"
          ?push-content="${e["push-content"]}"
        >
          <div slot="header" class="modus-wc-utility-panel-header">
            Utility Panel Header
          </div>

          <div slot="body" class="modus-wc-utility-panel-body">
            <p>This is the utility panel body content.</p>
            <p>
              You can add any content here including forms, lists, or other
              components.
            </p>
            <modus-wc-text-input
              label="Example Input"
              placeholder="Enter text..."
            >
            </modus-wc-text-input>
          </div>

          <div slot="footer" class="modus-wc-utility-panel-footer">
            <modus-wc-button color="tertiary" size="sm">Cancel</modus-wc-button>
            <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
          </div>
        </modus-wc-utility-panel>
      </div>
    </div>
  `},f={args:{expanded:!0,"push-content":!0},parameters:{docs:{source:{transform:()=>`
<style>
${i}
  .modus-wc-utility-panel-body {
    background: var(--modus-wc-color-base-100);
    }
</style>

<div class="demo-container">
  <modus-wc-navbar id="navbar-expanded">
    <div slot="end">
      <modus-wc-button
        id="toggle-btn-expanded"
        color="primary"
        size="sm"
        variant="outlined"
        onclick="const panel = document.getElementById('panel-expanded'); panel.expanded = !panel.expanded"
      >
        <modus-wc-icon name="menu"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-navbar>

  <div class="main-content-wrapper">
    <div id="main-content-expanded" class="main-content">
      <h1>Main Content Area (Expanded Story)</h1>
      <p>
        This story shows the panel already expanded. The content should be
        pushed to the left.
      </p>
      <p>
        The utility panel provides quick access to additional tools and
        information. It can be used for settings, filters, or any
        supplementary content that enhances the main application.
      </p>
    </div>

    <modus-wc-utility-panel
      id="panel-expanded"
      expanded="true"
      push-content="true"
    >
      <div slot="header" class="modus-wc-utility-panel-header">
        Expanded Panel Header
      </div>

      <div slot="body" class="modus-wc-utility-panel-body">
        <p>This panel starts in the expanded state.</p>
      </div>

      <div slot="footer" class="modus-wc-utility-panel-footer">
        <modus-wc-button color="tertiary" size="sm"
          >Cancel</modus-wc-button
        >
        <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
      </div>
    </modus-wc-utility-panel>
  </div>
</div>
${A}`}}},render:e=>p`
    <style>
      ${i} 
      .modus-wc-utility-panel-body {
        padding: 20px 0;
        background: var(--modus-wc-color-base-100);
      }
    </style>

    <div class="demo-container">
      <modus-wc-navbar id="navbar-expanded" .visibility=${{user:!1}}>
        <div slot="end">
          <modus-wc-button
            color="primary"
            size="sm"
            variant="outlined"
            onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
          >
            <modus-wc-icon name="menu"></modus-wc-icon>
          </modus-wc-button>
        </div>
      </modus-wc-navbar>

      <div class="main-content-wrapper">
        <div id="main-content-expanded" class="main-content">
          <h1>Main Content Area (Expanded Story)</h1>
          <p>
            This story shows the panel already expanded. The content should be
            pushed to the left.
          </p>
          <p>
            The utility panel provides quick access to additional tools and
            information. It can be used for settings, filters, or any
            supplementary content that enhances the main application.
          </p>
        </div>

        <modus-wc-utility-panel
          id="panel-expanded"
          ?expanded="${e.expanded}"
          ?push-content="${e["push-content"]}"
        >
          <div slot="header" class="modus-wc-utility-panel-header">
            Expanded Panel Header
          </div>

          <div slot="body" class="modus-wc-utility-panel-body">
            <p>This panel starts in the expanded state.</p>
          </div>

          <div slot="footer" class="modus-wc-utility-panel-footer">
            <modus-wc-button color="tertiary" size="sm">Cancel</modus-wc-button>
            <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
          </div>
        </modus-wc-utility-panel>
      </div>
    </div>
  `},x={args:{expanded:!0,"push-content":!1},parameters:{docs:{source:{transform:()=>`
<style>
${i}
</style>

<div class="demo-container">
  <modus-wc-navbar id="navbar-overlay">
    <div slot="end">
      <modus-wc-button
        id="toggle-btn-overlay"
        color="primary"
        size="sm"
        variant="outlined"
        onclick="const panel = document.getElementById('panel-overlay'); panel.expanded = !panel.expanded"
      >
        <modus-wc-icon name="menu"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-navbar>

  <div class="main-content-wrapper">
    <div id="main-content-overlay" class="main-content">
      <h1>Main Content Area (Overlay Mode)</h1>
      <p>
        In overlay mode, the panel appears over the content without pushing
        it.
      </p>
      <p>
        This example demonstrates the overlay mode where the panel appears
        on top of the content without pushing it aside. This is useful when
        you want to preserve the layout of the main content area.
      </p>
    </div>

    <modus-wc-utility-panel
      id="panel-overlay"
      expanded="true"
      push-content="false"
    >
      <div slot="header" class="modus-wc-utility-panel-header">
        Overlay Panel Header
      </div>

      <div slot="body" class="modus-wc-utility-panel-body">
        <p>This panel overlays the content without pushing it.</p>
      </div>

      <div slot="footer" class="modus-wc-utility-panel-footer">
        <modus-wc-button color="tertiary" size="sm"
          >Cancel</modus-wc-button
        >
        <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
      </div>
    </modus-wc-utility-panel>
  </div>
</div>
${A}`}}},render:e=>p`
    <style>
      ${i}
    </style>

    <div class="demo-container">
      <modus-wc-navbar id="navbar-overlay" .visibility=${{user:!1}}>
        <div slot="end">
          <modus-wc-button
            color="primary"
            size="sm"
            variant="outlined"
            onclick="const panel = document.getElementById('panel-overlay'); panel.expanded = !panel.expanded"
          >
            <modus-wc-icon name="menu"></modus-wc-icon>
          </modus-wc-button>
        </div>
      </modus-wc-navbar>

      <div class="main-content-wrapper">
        <div id="main-content-overlay" class="main-content">
          <h1>Main Content Area (Overlay Mode)</h1>
          <p>
            In overlay mode, the panel appears over the content without pushing
            it.
          </p>
          <p>
            This example demonstrates the overlay mode where the panel appears
            on top of the content without pushing it aside. This is useful when
            you want to preserve the layout of the main content area.
          </p>
        </div>

        <modus-wc-utility-panel
          id="panel-overlay"
          ?expanded="${e.expanded}"
          ?push-content="${e["push-content"]}"
        >
          <div slot="header" class="modus-wc-utility-panel-header">
            Overlay Panel Header
          </div>

          <div slot="body" class="modus-wc-utility-panel-body">
            <p>This panel overlays the content without pushing it.</p>
          </div>

          <div slot="footer" class="modus-wc-utility-panel-footer">
            <modus-wc-button color="tertiary" size="sm">Cancel</modus-wc-button>
            <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
          </div>
        </modus-wc-utility-panel>
      </div>
    </div>
  `},g={args:{expanded:!1,"push-content":!0},render:e=>p`
    <style>
      .demo-container {
        height: 100vh;
        position: relative;
        overflow: hidden;
        background: var(--modus-wc-color-base-page);
      }

      .main-content {
        height: 100%;
        padding: 20px;
        background: var(--modus-wc-color-base-page);
      }
    </style>

    <div class="demo-container">
      <div id="main-content-2" class="main-content">
        <h1>Main Content Area</h1>
        <modus-wc-button
          onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
        >
          Toggle Panel
        </modus-wc-button>
      </div>

      <modus-wc-utility-panel
        id="panel-simple"
        ?expanded="${e.expanded}"
        ?push-content="${e["push-content"]}"
      >
        <div slot="body">
          <h3>Simple Body Content</h3>
          <p>This panel only has body content without header or footer.</p>
        </div>
      </modus-wc-utility-panel>
    </div>
  `},C={render:e=>(customElements.get("utility-panel-shadow-host")||customElements.define("utility-panel-shadow-host",class extends HTMLElement{constructor(){super(),this.themeObserver=null;const t=this.attachShadow({mode:"open"}),n=document.createElement("div");n.style.display="contents";const d=()=>{const r=document.documentElement.getAttribute("data-theme");r&&n.setAttribute("data-theme",r)};d(),this.themeObserver=new MutationObserver(d),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const o=document.createElement("modus-wc-navbar");o.visibility={user:!1},o.userCard={name:"",email:""};const E=document.createElement("div");E.setAttribute("slot","end");const u=document.createElement("modus-wc-tooltip");u.setAttribute("content","Toggle Utility Panel"),u.setAttribute("position","left");const s=document.createElement("modus-wc-button");s.setAttribute("color","primary"),s.setAttribute("size","sm"),s.setAttribute("variant","outlined");const S=document.createElement("modus-wc-icon");S.setAttribute("name","menu"),s.appendChild(S),u.appendChild(s),E.appendChild(u),o.appendChild(E);const a=document.createElement("div");a.className="main-content";const k=document.createElement("h1");k.textContent="Main Content Area";const z=document.createElement("p");z.textContent="This is the main content area below the navbar. When the utility panel opens with pushContent=true, this content will be pushed to the left.";const $=document.createElement("p");$.textContent="This is an example of how the utility panel interacts with the main content. When the panel opens with push content enabled, this area will shift to the left to make room for the panel.";const P=document.createElement("p");P.textContent="The content area maintains its full functionality while the panel is open. Users can continue to interact with the main content while accessing the utility panel features.",a.appendChild(k),a.appendChild(z),a.appendChild($),a.appendChild(P);const m=document.createElement("div");m.className="main-content-wrapper",m.appendChild(a),this.panelEl=document.createElement("modus-wc-utility-panel");const h=document.createElement("div");h.setAttribute("slot","header"),h.className="modus-wc-utility-panel-header",h.textContent="Utility Panel Header";const l=document.createElement("div");l.setAttribute("slot","body"),l.className="modus-wc-utility-panel-body";const B=document.createElement("p");B.textContent="This is the utility panel body content.";const M=document.createElement("p");M.textContent="You can add any content here including forms, lists, or other components.";const T=document.createElement("modus-wc-text-input");T.setAttribute("label","Example Input"),T.setAttribute("placeholder","Enter text..."),l.appendChild(B),l.appendChild(M),l.appendChild(T);const c=document.createElement("div");c.setAttribute("slot","footer"),c.className="modus-wc-utility-panel-footer";const y=document.createElement("modus-wc-button");y.setAttribute("color","tertiary"),y.setAttribute("size","sm"),y.textContent="Cancel";const w=document.createElement("modus-wc-button");w.setAttribute("color","primary"),w.setAttribute("size","sm"),w.textContent="Save",c.appendChild(y),c.appendChild(w),this.panelEl.appendChild(h),this.panelEl.appendChild(l),this.panelEl.appendChild(c),m.appendChild(this.panelEl),s.addEventListener("buttonClick",()=>{const r=this.panelEl;r.expanded=!r.expanded});const v=document.createElement("div");v.className="demo-container",v.appendChild(o),v.appendChild(m),n.appendChild(v),t.appendChild(n);const O=document.createElement("style");O.textContent=i,t.appendChild(O),requestAnimationFrame(()=>{this.panelEl.targetElement=a})}set props(t){this._props=t,this.panelEl.expanded=!!t.expanded,this.panelEl.pushContent=!!t["push-content"]}get props(){return this._props}disconnectedCallback(){this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=null)}}),p`<utility-panel-shadow-host
      .props=${{...e}}
    ></utility-panel-shadow-host>`)};var I,U,q;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        transform: () => \`

<style>
\${utilityPanelStyles}
</style>

<div class="demo-container">
  <modus-wc-navbar id="navbar-default">
    <div slot="end">
      <modus-wc-tooltip content="Toggle Utility Panel" position="left">
        <modus-wc-button
          id="toggle-btn"
          color="primary"
          size="sm"
          variant="outlined"
          onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
        >
          <modus-wc-icon name="menu"></modus-wc-icon>
        </modus-wc-button>
      </modus-wc-tooltip>
    </div>
  </modus-wc-navbar>

  <div class="main-content-wrapper">
    <div id="main-content" class="main-content">
      <h1>Main Content Area</h1>
      <p>
        This is the main content area below the navbar. When the utility
        panel opens with pushContent=true, this content will be pushed to
        the left.
      </p>
      <p>
        This is an example of how the utility panel interacts with the main
        content. When the panel opens with push content enabled, this area
        will shift to the left to make room for the panel.
      </p>
      <p>
        The content area maintains its full functionality while the panel is
        open. Users can continue to interact with the main content while
        accessing the utility panel features.
      </p>
    </div>

    <modus-wc-utility-panel
      expanded="false"
      push-content="true"
    >
      <div slot="header" class="modus-wc-utility-panel-header">
        Utility Panel Header
      </div>

      <div slot="body" class="modus-wc-utility-panel-body">
        <p>This is the utility panel body content.</p>
        <p>
          You can add any content here including forms, lists, or other
          components.
        </p>
        <modus-wc-text-input
          label="Example Input"
          placeholder="Enter text..."
        >
        </modus-wc-text-input>
      </div>

      <div slot="footer" class="modus-wc-utility-panel-footer">
        <modus-wc-button color="tertiary" size="sm"
          >Cancel</modus-wc-button
        >
        <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
      </div>
    </modus-wc-utility-panel>
  </div>
</div>
\${scriptBlock}\`
      }
    }
  },
  render: args => html\`
    <style>
      \${utilityPanelStyles}
    </style>
    <div class="demo-container">
      <modus-wc-navbar id="navbar-default" .visibility=\${{
    user: false
  }}>
        <div slot="end">
          <modus-wc-tooltip content="Toggle Utility Panel" position="left">
            <modus-wc-button
              color="primary"
              size="sm"
              variant="outlined"
              onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
            >
              <modus-wc-icon name="menu"></modus-wc-icon>
            </modus-wc-button>
          </modus-wc-tooltip>
        </div>
      </modus-wc-navbar>

      <div class="main-content-wrapper">
        <div id="main-content" class="main-content">
          <h1>Main Content Area</h1>
          <p>
            This is the main content area below the navbar. When the utility
            panel opens with pushContent=true, this content will be pushed to
            the left.
          </p>
          <p>
            This is an example of how the utility panel interacts with the main
            content. When the panel opens with push content enabled, this area
            will shift to the left to make room for the panel.
          </p>
          <p>
            The content area maintains its full functionality while the panel is
            open. Users can continue to interact with the main content while
            accessing the utility panel features.
          </p>
        </div>

        <modus-wc-utility-panel
          ?expanded="\${args.expanded}"
          ?push-content="\${args['push-content']}"
        >
          <div slot="header" class="modus-wc-utility-panel-header">
            Utility Panel Header
          </div>

          <div slot="body" class="modus-wc-utility-panel-body">
            <p>This is the utility panel body content.</p>
            <p>
              You can add any content here including forms, lists, or other
              components.
            </p>
            <modus-wc-text-input
              label="Example Input"
              placeholder="Enter text..."
            >
            </modus-wc-text-input>
          </div>

          <div slot="footer" class="modus-wc-utility-panel-footer">
            <modus-wc-button color="tertiary" size="sm">Cancel</modus-wc-button>
            <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
          </div>
        </modus-wc-utility-panel>
      </div>
    </div>
  \`
}`,...(q=(U=b.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var W,H,N;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    expanded: true,
    'push-content': true
  },
  parameters: {
    docs: {
      source: {
        transform: () => \`
<style>
\${utilityPanelStyles}
  .modus-wc-utility-panel-body {
    background: var(--modus-wc-color-base-100);
    }
</style>

<div class="demo-container">
  <modus-wc-navbar id="navbar-expanded">
    <div slot="end">
      <modus-wc-button
        id="toggle-btn-expanded"
        color="primary"
        size="sm"
        variant="outlined"
        onclick="const panel = document.getElementById('panel-expanded'); panel.expanded = !panel.expanded"
      >
        <modus-wc-icon name="menu"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-navbar>

  <div class="main-content-wrapper">
    <div id="main-content-expanded" class="main-content">
      <h1>Main Content Area (Expanded Story)</h1>
      <p>
        This story shows the panel already expanded. The content should be
        pushed to the left.
      </p>
      <p>
        The utility panel provides quick access to additional tools and
        information. It can be used for settings, filters, or any
        supplementary content that enhances the main application.
      </p>
    </div>

    <modus-wc-utility-panel
      id="panel-expanded"
      expanded="true"
      push-content="true"
    >
      <div slot="header" class="modus-wc-utility-panel-header">
        Expanded Panel Header
      </div>

      <div slot="body" class="modus-wc-utility-panel-body">
        <p>This panel starts in the expanded state.</p>
      </div>

      <div slot="footer" class="modus-wc-utility-panel-footer">
        <modus-wc-button color="tertiary" size="sm"
          >Cancel</modus-wc-button
        >
        <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
      </div>
    </modus-wc-utility-panel>
  </div>
</div>
\${scriptBlock}\`
      }
    }
  },
  render: args =>
  // prettier-ignore
  html\`
    <style>
      \${utilityPanelStyles} 
      .modus-wc-utility-panel-body {
        padding: 20px 0;
        background: var(--modus-wc-color-base-100);
      }
    </style>

    <div class="demo-container">
      <modus-wc-navbar id="navbar-expanded" .visibility=\${{
    user: false
  }}>
        <div slot="end">
          <modus-wc-button
            color="primary"
            size="sm"
            variant="outlined"
            onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
          >
            <modus-wc-icon name="menu"></modus-wc-icon>
          </modus-wc-button>
        </div>
      </modus-wc-navbar>

      <div class="main-content-wrapper">
        <div id="main-content-expanded" class="main-content">
          <h1>Main Content Area (Expanded Story)</h1>
          <p>
            This story shows the panel already expanded. The content should be
            pushed to the left.
          </p>
          <p>
            The utility panel provides quick access to additional tools and
            information. It can be used for settings, filters, or any
            supplementary content that enhances the main application.
          </p>
        </div>

        <modus-wc-utility-panel
          id="panel-expanded"
          ?expanded="\${args.expanded}"
          ?push-content="\${args['push-content']}"
        >
          <div slot="header" class="modus-wc-utility-panel-header">
            Expanded Panel Header
          </div>

          <div slot="body" class="modus-wc-utility-panel-body">
            <p>This panel starts in the expanded state.</p>
          </div>

          <div slot="footer" class="modus-wc-utility-panel-footer">
            <modus-wc-button color="tertiary" size="sm">Cancel</modus-wc-button>
            <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
          </div>
        </modus-wc-utility-panel>
      </div>
    </div>
  \`
}`,...(N=(H=f.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var F,L,_;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    expanded: true,
    'push-content': false
  },
  parameters: {
    docs: {
      source: {
        transform: () => \`
<style>
\${utilityPanelStyles}
</style>

<div class="demo-container">
  <modus-wc-navbar id="navbar-overlay">
    <div slot="end">
      <modus-wc-button
        id="toggle-btn-overlay"
        color="primary"
        size="sm"
        variant="outlined"
        onclick="const panel = document.getElementById('panel-overlay'); panel.expanded = !panel.expanded"
      >
        <modus-wc-icon name="menu"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-navbar>

  <div class="main-content-wrapper">
    <div id="main-content-overlay" class="main-content">
      <h1>Main Content Area (Overlay Mode)</h1>
      <p>
        In overlay mode, the panel appears over the content without pushing
        it.
      </p>
      <p>
        This example demonstrates the overlay mode where the panel appears
        on top of the content without pushing it aside. This is useful when
        you want to preserve the layout of the main content area.
      </p>
    </div>

    <modus-wc-utility-panel
      id="panel-overlay"
      expanded="true"
      push-content="false"
    >
      <div slot="header" class="modus-wc-utility-panel-header">
        Overlay Panel Header
      </div>

      <div slot="body" class="modus-wc-utility-panel-body">
        <p>This panel overlays the content without pushing it.</p>
      </div>

      <div slot="footer" class="modus-wc-utility-panel-footer">
        <modus-wc-button color="tertiary" size="sm"
          >Cancel</modus-wc-button
        >
        <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
      </div>
    </modus-wc-utility-panel>
  </div>
</div>
\${scriptBlock}\`
      }
    }
  },
  render: args => html\`
    <style>
      \${utilityPanelStyles}
    </style>

    <div class="demo-container">
      <modus-wc-navbar id="navbar-overlay" .visibility=\${{
    user: false
  }}>
        <div slot="end">
          <modus-wc-button
            color="primary"
            size="sm"
            variant="outlined"
            onclick="const panel = document.getElementById('panel-overlay'); panel.expanded = !panel.expanded"
          >
            <modus-wc-icon name="menu"></modus-wc-icon>
          </modus-wc-button>
        </div>
      </modus-wc-navbar>

      <div class="main-content-wrapper">
        <div id="main-content-overlay" class="main-content">
          <h1>Main Content Area (Overlay Mode)</h1>
          <p>
            In overlay mode, the panel appears over the content without pushing
            it.
          </p>
          <p>
            This example demonstrates the overlay mode where the panel appears
            on top of the content without pushing it aside. This is useful when
            you want to preserve the layout of the main content area.
          </p>
        </div>

        <modus-wc-utility-panel
          id="panel-overlay"
          ?expanded="\${args.expanded}"
          ?push-content="\${args['push-content']}"
        >
          <div slot="header" class="modus-wc-utility-panel-header">
            Overlay Panel Header
          </div>

          <div slot="body" class="modus-wc-utility-panel-body">
            <p>This panel overlays the content without pushing it.</p>
          </div>

          <div slot="footer" class="modus-wc-utility-panel-footer">
            <modus-wc-button color="tertiary" size="sm">Cancel</modus-wc-button>
            <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
          </div>
        </modus-wc-utility-panel>
      </div>
    </div>
  \`
}`,...(_=(L=x.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var Y,j,D;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    expanded: false,
    'push-content': true
  },
  render: (args: UtilityPanelArgs) => html\`
    <style>
      .demo-container {
        height: 100vh;
        position: relative;
        overflow: hidden;
        background: var(--modus-wc-color-base-page);
      }

      .main-content {
        height: 100%;
        padding: 20px;
        background: var(--modus-wc-color-base-page);
      }
    </style>

    <div class="demo-container">
      <div id="main-content-2" class="main-content">
        <h1>Main Content Area</h1>
        <modus-wc-button
          onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
        >
          Toggle Panel
        </modus-wc-button>
      </div>

      <modus-wc-utility-panel
        id="panel-simple"
        ?expanded="\${args.expanded}"
        ?push-content="\${args['push-content']}"
      >
        <div slot="body">
          <h3>Simple Body Content</h3>
          <p>This panel only has body content without header or footer.</p>
        </div>
      </modus-wc-utility-panel>
    </div>
  \`
}`,...(D=(j=g.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var G,J,K;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('utility-panel-shadow-host')) {
      customElements.define('utility-panel-shadow-host', class extends HTMLElement {
        private panelEl!: HTMLElement;
        private _props: UtilityPanelArgs | undefined;
        private themeObserver: MutationObserver | null = null;
        constructor() {
          super();
          const root = this.attachShadow({
            mode: 'open'
          });
          const wrapper = document.createElement('div');
          wrapper.style.display = 'contents';
          const syncTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme) wrapper.setAttribute('data-theme', theme);
          };
          syncTheme();
          this.themeObserver = new MutationObserver(syncTheme);
          this.themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
          });

          // Navbar with toggle button
          const navbar = document.createElement('modus-wc-navbar');
          (navbar as unknown as {
            visibility: object;
          }).visibility = {
            user: false
          };
          (navbar as unknown as {
            userCard: object;
          }).userCard = {
            name: '',
            email: ''
          };
          const endSlot = document.createElement('div');
          endSlot.setAttribute('slot', 'end');
          const tooltip = document.createElement('modus-wc-tooltip');
          tooltip.setAttribute('content', 'Toggle Utility Panel');
          tooltip.setAttribute('position', 'left');
          const toggleBtn = document.createElement('modus-wc-button');
          toggleBtn.setAttribute('color', 'primary');
          toggleBtn.setAttribute('size', 'sm');
          toggleBtn.setAttribute('variant', 'outlined');
          const menuIcon = document.createElement('modus-wc-icon');
          menuIcon.setAttribute('name', 'menu');
          toggleBtn.appendChild(menuIcon);
          tooltip.appendChild(toggleBtn);
          endSlot.appendChild(tooltip);
          navbar.appendChild(endSlot);

          // Main content
          const mainContent = document.createElement('div');
          mainContent.className = 'main-content';
          const h1 = document.createElement('h1');
          h1.textContent = 'Main Content Area';
          const p1 = document.createElement('p');
          p1.textContent = 'This is the main content area below the navbar. When the utility panel opens with pushContent=true, this content will be pushed to the left.';
          const p2 = document.createElement('p');
          p2.textContent = 'This is an example of how the utility panel interacts with the main content. When the panel opens with push content enabled, this area will shift to the left to make room for the panel.';
          const p3 = document.createElement('p');
          p3.textContent = 'The content area maintains its full functionality while the panel is open. Users can continue to interact with the main content while accessing the utility panel features.';
          mainContent.appendChild(h1);
          mainContent.appendChild(p1);
          mainContent.appendChild(p2);
          mainContent.appendChild(p3);
          const contentWrapper = document.createElement('div');
          contentWrapper.className = 'main-content-wrapper';
          contentWrapper.appendChild(mainContent);

          // Utility panel
          this.panelEl = document.createElement('modus-wc-utility-panel');
          const header = document.createElement('div');
          header.setAttribute('slot', 'header');
          header.className = 'modus-wc-utility-panel-header';
          header.textContent = 'Utility Panel Header';
          const body = document.createElement('div');
          body.setAttribute('slot', 'body');
          body.className = 'modus-wc-utility-panel-body';
          const bp1 = document.createElement('p');
          bp1.textContent = 'This is the utility panel body content.';
          const bp2 = document.createElement('p');
          bp2.textContent = 'You can add any content here including forms, lists, or other components.';
          const input = document.createElement('modus-wc-text-input');
          input.setAttribute('label', 'Example Input');
          input.setAttribute('placeholder', 'Enter text...');
          body.appendChild(bp1);
          body.appendChild(bp2);
          body.appendChild(input);
          const footer = document.createElement('div');
          footer.setAttribute('slot', 'footer');
          footer.className = 'modus-wc-utility-panel-footer';
          const cancelBtn = document.createElement('modus-wc-button');
          cancelBtn.setAttribute('color', 'tertiary');
          cancelBtn.setAttribute('size', 'sm');
          cancelBtn.textContent = 'Cancel';
          const saveBtn = document.createElement('modus-wc-button');
          saveBtn.setAttribute('color', 'primary');
          saveBtn.setAttribute('size', 'sm');
          saveBtn.textContent = 'Save';
          footer.appendChild(cancelBtn);
          footer.appendChild(saveBtn);
          this.panelEl.appendChild(header);
          this.panelEl.appendChild(body);
          this.panelEl.appendChild(footer);
          contentWrapper.appendChild(this.panelEl);

          // Wire up toggle button
          toggleBtn.addEventListener('buttonClick', () => {
            const panel = this.panelEl as unknown as {
              expanded: boolean;
            };
            panel.expanded = !panel.expanded;
          });
          const container = document.createElement('div');
          container.className = 'demo-container';
          container.appendChild(navbar);
          container.appendChild(contentWrapper);
          wrapper.appendChild(container);
          root.appendChild(wrapper);

          // Inject layout styles into shadow root
          const styleEl = document.createElement('style');
          styleEl.textContent = utilityPanelStyles;
          root.appendChild(styleEl);
          requestAnimationFrame(() => {
            (this.panelEl as unknown as {
              targetElement: HTMLElement;
            }).targetElement = mainContent;
          });
        }
        set props(value: UtilityPanelArgs) {
          this._props = value;
          (this.panelEl as unknown as {
            expanded: boolean;
          }).expanded = Boolean(value.expanded);
          (this.panelEl as unknown as {
            pushContent: boolean;
          }).pushContent = Boolean(value['push-content']);
        }
        get props(): UtilityPanelArgs | undefined {
          return this._props;
        }
        disconnectedCallback() {
          if (this.themeObserver) {
            this.themeObserver.disconnect();
            this.themeObserver = null;
          }
        }
      });
    }
    return html\`<utility-panel-shadow-host
      .props=\${{
      ...args
    }}
    ></utility-panel-shadow-host>\`;
  }
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ne=["Default","Expanded","OverlayMode","WithoutHeaderFooter","ShadowDomParent"];export{b as Default,f as Expanded,x as OverlayMode,C as ShadowDomParent,g as WithoutHeaderFooter,ne as __namedExportsOrder,ee as default};
