import{w as Q}from"./decorator-D4YmxizW.js";import{x as d}from"./lit-element-CucEn6F2.js";import{c as V}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const oe={title:"Components/Utility Panel",component:"modus-wc-utility-panel",args:{expanded:!1,"push-content":!0},argTypes:{expanded:{control:{type:"boolean"}},"push-content":{control:{type:"boolean"}}},decorators:[Q,n=>(requestAnimationFrame(()=>{document.querySelectorAll("modus-wc-utility-panel").forEach(a=>{const e=a.closest(".demo-container");if(e){const c=e.querySelector(".main-content");c&&a&&(a.targetElement=c)}})}),n())],parameters:{actions:{handles:["panelOpened","panelClosed"]},docs:{description:{component:"A utility panel component that slides in from the right side of the screen. It can either push content or display as an overlay.\n\nThe component supports `<slot>` called 'header' for panel title content, 'body' for main content area, and 'footer' for action buttons or additional controls."}},layout:"fullscreen"}},o=`
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

`,T=`
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
<\/script>`,v={parameters:{docs:{source:{transform:()=>`

<style>
${o}
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
${T}`}}},render:n=>d`
    <style>
      ${o}
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
          ?expanded="${n.expanded}"
          ?push-content="${n["push-content"]}"
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
  `},b={args:{expanded:!0,"push-content":!0},parameters:{docs:{source:{transform:()=>`
<style>
${o}
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
${T}`}}},render:n=>d`
    <style>
      ${o} 
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
          ?expanded="${n.expanded}"
          ?push-content="${n["push-content"]}"
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
  `},f={args:{expanded:!0,"push-content":!1},parameters:{docs:{source:{transform:()=>`
<style>
${o}
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
${T}`}}},render:n=>d`
    <style>
      ${o}
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
          ?expanded="${n.expanded}"
          ?push-content="${n["push-content"]}"
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
  `},x={args:{expanded:!1,"push-content":!0},render:n=>d`
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
        ?expanded="${n.expanded}"
        ?push-content="${n["push-content"]}"
      >
        <div slot="body">
          <h3>Simple Body Content</h3>
          <p>This panel only has body content without header or footer.</p>
        </div>
      </modus-wc-utility-panel>
    </div>
  `},g={render:n=>{if(!customElements.get("utility-panel-shadow-host")){const A=V({componentTag:"modus-wc-utility-panel",propsMapper:(a,e)=>{if(e.expanded=!!a.expanded,e.pushContent=!!a["push-content"],!e.hasAttribute("data-layout-built")){e.setAttribute("data-layout-built","");const c=e.getRootNode(),K=e.parentElement,r=document.createElement("div");r.setAttribute("slot","header"),r.className="modus-wc-utility-panel-header",r.textContent="Utility Panel Header";const i=document.createElement("div");i.setAttribute("slot","body"),i.className="modus-wc-utility-panel-body";const S=document.createElement("p");S.textContent="This is the utility panel body content.";const k=document.createElement("p");k.textContent="You can add any content here including forms, lists, or other components.";const C=document.createElement("modus-wc-text-input");C.setAttribute("label","Example Input"),C.setAttribute("placeholder","Enter text..."),i.appendChild(S),i.appendChild(k),i.appendChild(C);const l=document.createElement("div");l.setAttribute("slot","footer"),l.className="modus-wc-utility-panel-footer";const p=document.createElement("modus-wc-button");p.setAttribute("color","tertiary"),p.setAttribute("size","sm"),p.textContent="Cancel";const u=document.createElement("modus-wc-button");u.setAttribute("color","primary"),u.setAttribute("size","sm"),u.textContent="Save",l.appendChild(p),l.appendChild(u),e.appendChild(r),e.appendChild(i),e.appendChild(l);const m=document.createElement("modus-wc-navbar");m.visibility={user:!1},m.userCard={name:"",email:""};const E=document.createElement("div");E.setAttribute("slot","end");const h=document.createElement("modus-wc-tooltip");h.setAttribute("content","Toggle Utility Panel"),h.setAttribute("position","left");const s=document.createElement("modus-wc-button");s.setAttribute("color","primary"),s.setAttribute("size","sm"),s.setAttribute("variant","outlined");const z=document.createElement("modus-wc-icon");z.setAttribute("name","menu"),s.appendChild(z),h.appendChild(s),E.appendChild(h),m.appendChild(E),s.addEventListener("buttonClick",()=>{e.expanded=!e.expanded});const t=document.createElement("div");t.className="main-content";const $=document.createElement("h1");$.textContent="Main Content Area";const P=document.createElement("p");P.textContent="This is the main content area below the navbar. When the utility panel opens with pushContent=true, this content will be pushed to the left.";const B=document.createElement("p");B.textContent="This is an example of how the utility panel interacts with the main content. When the panel opens with push content enabled, this area will shift to the left to make room for the panel.";const M=document.createElement("p");M.textContent="The content area maintains its full functionality while the panel is open. Users can continue to interact with the main content while accessing the utility panel features.",t.appendChild($),t.appendChild(P),t.appendChild(B),t.appendChild(M);const y=document.createElement("div");y.className="main-content-wrapper",y.appendChild(t),y.appendChild(e);const w=document.createElement("div");w.className="demo-container",w.appendChild(m),w.appendChild(y),K.appendChild(w);const I=document.createElement("style");I.textContent=o,c.appendChild(I),requestAnimationFrame(()=>{e.targetElement=t})}}});customElements.define("utility-panel-shadow-host",A)}return d`<utility-panel-shadow-host
      .props=${{...n}}
    ></utility-panel-shadow-host>`}};var U,H,q;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(H=v.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var W,N,O;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(N=b.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var F,R,Y;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Y=(R=f.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var L,D,j;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(D=x.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var _,G,J;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('utility-panel-shadow-host')) {
      const UtilityPanelShadowHost = createShadowHostClass<UtilityPanelArgs>({
        componentTag: 'modus-wc-utility-panel',
        propsMapper: (v: UtilityPanelArgs, el: HTMLElement) => {
          (el as unknown as {
            expanded: boolean;
          }).expanded = Boolean(v.expanded);
          (el as unknown as {
            pushContent: boolean;
          }).pushContent = Boolean(v['push-content']);

          // Build full layout on first render: add slot content to el, then
          // move el into the demo layout inside the helper's wrapper.
          if (!el.hasAttribute('data-layout-built')) {
            el.setAttribute('data-layout-built', '');
            const shadowRoot = el.getRootNode() as ShadowRoot;
            const wrapper = el.parentElement!;

            // Slot content
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
            el.appendChild(header);
            el.appendChild(body);
            el.appendChild(footer);

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
            toggleBtn.addEventListener('buttonClick', () => {
              (el as unknown as {
                expanded: boolean;
              }).expanded = !(el as unknown as {
                expanded: boolean;
              }).expanded;
            });

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

            // Move el into the content wrapper
            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'main-content-wrapper';
            contentWrapper.appendChild(mainContent);
            contentWrapper.appendChild(el);
            const container = document.createElement('div');
            container.className = 'demo-container';
            container.appendChild(navbar);
            container.appendChild(contentWrapper);
            wrapper.appendChild(container);
            const styleEl = document.createElement('style');
            styleEl.textContent = utilityPanelStyles;
            shadowRoot.appendChild(styleEl);
            requestAnimationFrame(() => {
              (el as unknown as {
                targetElement: HTMLElement;
              }).targetElement = mainContent;
            });
          }
        }
      });
      customElements.define('utility-panel-shadow-host', UtilityPanelShadowHost);
    }
    return html\`<utility-panel-shadow-host
      .props=\${{
      ...args
    }}
    ></utility-panel-shadow-host>\`;
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ae=["Default","Expanded","OverlayMode","WithoutHeaderFooter","ShadowDomParent"];export{v as Default,b as Expanded,f as OverlayMode,g as ShadowDomParent,x as WithoutHeaderFooter,ae as __namedExportsOrder,oe as default};
