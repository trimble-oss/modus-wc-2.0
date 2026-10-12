import{w as te}from"./decorator-Cv9na35H.js";import{b as l}from"./lit-element-DgBvYnzn.js";import{o as c}from"./if-defined-BnVFTJ4o.js";import{c as ne}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const ce={title:"Components/Utility Panel",component:"modus-wc-utility-panel",args:{"background-overlay":!1,"collapse-on-click-outside":!1,expanded:!1,"push-content":!0},argTypes:{"background-overlay":{control:{type:"boolean"}},"collapse-on-click-outside":{control:{type:"boolean"}},"custom-class":{control:{type:"text"}},expanded:{control:{type:"boolean"}},"push-content":{control:{type:"boolean"}}},decorators:[te,e=>(requestAnimationFrame(()=>{document.querySelectorAll("modus-wc-utility-panel").forEach(o=>{const t=o.closest(".demo-container");if(t){const r=t.querySelector(".main-content");r&&o&&(o.targetElement=r)}})}),e())],parameters:{actions:{handles:["panelOpened","panelClosed"]},docs:{description:{component:"A utility panel component that slides in from the right side of the screen. It can either push content or display as an overlay.\n\nThe component supports `<slot>` called 'header' for panel title content, 'body' for main content area, and 'footer' for action buttons or additional controls."}},layout:"fullscreen"}},n=`
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

  .main-content--with-navbar {
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
  }

  .main-content--with-navbar .main-content-body {
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding: 20px;
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

`,E=`
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
${n}
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
${E}`}}},render:e=>l`
    <style>
      ${n}
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
          custom-class=${c(e["custom-class"])}
          ?background-overlay=${e["background-overlay"]}
          ?collapse-on-click-outside=${e["collapse-on-click-outside"]}
          ?expanded=${e.expanded}
          ?push-content=${e["push-content"]}
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
  `},g={args:{expanded:!0,"push-content":!0},parameters:{docs:{source:{transform:()=>`
<style>
${n}
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
${E}`}}},render:e=>l`
    <style>
      ${n} 
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
          custom-class=${c(e["custom-class"])}
          ?background-overlay=${e["background-overlay"]}
          ?collapse-on-click-outside=${e["collapse-on-click-outside"]}
          ?expanded=${e.expanded}
          ?push-content=${e["push-content"]}
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
  `},f={args:{"background-overlay":!0,"collapse-on-click-outside":!1,expanded:!0,"push-content":!1},parameters:{docs:{source:{transform:()=>`
<style>
${n}
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
      background-overlay
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
${E}`}}},render:e=>l`
    <style>
      ${n}
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
          custom-class=${c(e["custom-class"])}
          ?background-overlay=${e["background-overlay"]}
          ?collapse-on-click-outside=${e["collapse-on-click-outside"]}
          ?expanded=${e.expanded}
          ?push-content=${e["push-content"]}
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
  `},x={args:{"background-overlay":!0,"collapse-on-click-outside":!0,expanded:!0,"push-content":!0},parameters:{docs:{description:{story:"Navbar is placed inside `targetElement`, so the background overlay dims the navbar together with the main content. Compare with Overlay Mode, where the navbar sits outside the target and stays undimmed."},source:{transform:()=>`
<style>
${n}
</style>

<div class="demo-container">
  <div class="main-content-wrapper">
    <div id="main-content-navbar-in-target" class="main-content main-content--with-navbar">
      <modus-wc-navbar id="navbar-in-target">
        <div slot="end">
          <modus-wc-button
            color="primary"
            size="sm"
            variant="outlined"
            onclick="const panel = document.getElementById('panel-navbar-in-target'); panel.expanded = !panel.expanded"
          >
            <modus-wc-icon name="menu"></modus-wc-icon>
          </modus-wc-button>
        </div>
      </modus-wc-navbar>

      <div class="main-content-body">
        <h1>Navbar Inside Target Element</h1>
        <p>
          The navbar is a child of the target element. When background-overlay
          is enabled, the dim covers both the navbar and this content area.
        </p>
        <p>
          Use this layout when the overlay should include chrome that lives
          inside the pushed/overlaid region.
        </p>
      </div>
    </div>

    <modus-wc-utility-panel
      id="panel-navbar-in-target"
      background-overlay
      collapse-on-click-outside
      expanded="true"
      push-content="true"
    >
      <div slot="header" class="modus-wc-utility-panel-header">
        Overlay Panel Header
      </div>

      <div slot="body" class="modus-wc-utility-panel-body">
        <p>
          Background overlay is scoped to the target element, which includes
          the navbar in this story.
        </p>
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
${E}`}}},render:e=>l`
    <style>
      ${n}
    </style>

    <div class="demo-container">
      <div class="main-content-wrapper">
        <div
          id="main-content-navbar-in-target"
          class="main-content main-content--with-navbar"
        >
          <modus-wc-navbar id="navbar-in-target" .visibility=${{user:!1}}>
            <div slot="end">
              <modus-wc-button
                color="primary"
                size="sm"
                variant="outlined"
                onclick="const panel = document.getElementById('panel-navbar-in-target'); panel.expanded = !panel.expanded"
              >
                <modus-wc-icon name="menu"></modus-wc-icon>
              </modus-wc-button>
            </div>
          </modus-wc-navbar>

          <div class="main-content-body">
            <h1>Navbar Inside Target Element</h1>
            <p>
              The navbar is a child of the target element. When
              background-overlay is enabled, the dim covers both the navbar and
              this content area.
            </p>
            <p>
              Use this layout when the overlay should include chrome that lives
              inside the pushed/overlaid region.
            </p>
          </div>
        </div>

        <modus-wc-utility-panel
          id="panel-navbar-in-target"
          custom-class=${c(e["custom-class"])}
          ?background-overlay=${e["background-overlay"]}
          ?collapse-on-click-outside=${e["collapse-on-click-outside"]}
          ?expanded=${e.expanded}
          ?push-content=${e["push-content"]}
        >
          <div slot="header" class="modus-wc-utility-panel-header">
            Overlay Panel Header
          </div>

          <div slot="body" class="modus-wc-utility-panel-body">
            <p>
              Background overlay is scoped to the target element, which includes
              the navbar in this story.
            </p>
          </div>

          <div slot="footer" class="modus-wc-utility-panel-footer">
            <modus-wc-button color="tertiary" size="sm">Cancel</modus-wc-button>
            <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
          </div>
        </modus-wc-utility-panel>
      </div>
    </div>
  `},k={args:{expanded:!1,"push-content":!0},render:e=>l`
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
        custom-class=${c(e["custom-class"])}
        ?background-overlay=${e["background-overlay"]}
        ?collapse-on-click-outside=${e["collapse-on-click-outside"]}
        ?expanded=${e.expanded}
        ?push-content=${e["push-content"]}
      >
        <div slot="body">
          <h3>Simple Body Content</h3>
          <p>This panel only has body content without header or footer.</p>
        </div>
      </modus-wc-utility-panel>
    </div>
  `},C={render:e=>{if(!customElements.get("utility-panel-shadow-host")){const S=ne({componentTag:"modus-wc-utility-panel",propsMapper:(o,t)=>{if(t.backgroundOverlay=!!o["background-overlay"],t.collapseOnClickOutside=!!o["collapse-on-click-outside"],t.expanded=!!o.expanded,t.pushContent=!!o["push-content"],!t.hasAttribute("data-layout-built")){t.setAttribute("data-layout-built","");const r=t.getRootNode(),ee=t.parentElement,u=document.createElement("div");u.setAttribute("slot","header"),u.className="modus-wc-utility-panel-header",u.textContent="Utility Panel Header";const i=document.createElement("div");i.setAttribute("slot","body"),i.className="modus-wc-utility-panel-body";const A=document.createElement("p");A.textContent="This is the utility panel body content.";const z=document.createElement("p");z.textContent="You can add any content here including forms, lists, or other components.";const $=document.createElement("modus-wc-text-input");$.setAttribute("label","Example Input"),$.setAttribute("placeholder","Enter text..."),i.appendChild(A),i.appendChild(z),i.appendChild($);const d=document.createElement("div");d.setAttribute("slot","footer"),d.className="modus-wc-utility-panel-footer";const p=document.createElement("modus-wc-button");p.setAttribute("color","tertiary"),p.setAttribute("size","sm"),p.textContent="Cancel";const m=document.createElement("modus-wc-button");m.setAttribute("color","primary"),m.setAttribute("size","sm"),m.textContent="Save",d.appendChild(p),d.appendChild(m),t.appendChild(u),t.appendChild(i),t.appendChild(d);const h=document.createElement("modus-wc-navbar");h.visibility={user:!1},h.userCard={name:"",email:""};const T=document.createElement("div");T.setAttribute("slot","end");const v=document.createElement("modus-wc-tooltip");v.setAttribute("content","Toggle Utility Panel"),v.setAttribute("position","left");const s=document.createElement("modus-wc-button");s.setAttribute("color","primary"),s.setAttribute("size","sm"),s.setAttribute("variant","outlined");const B=document.createElement("modus-wc-icon");B.setAttribute("name","menu"),s.appendChild(B),v.appendChild(s),T.appendChild(v),h.appendChild(T),s.addEventListener("buttonClick",()=>{t.expanded=!t.expanded});const a=document.createElement("div");a.className="main-content";const P=document.createElement("h1");P.textContent="Main Content Area";const I=document.createElement("p");I.textContent="This is the main content area below the navbar. When the utility panel opens with pushContent=true, this content will be pushed to the left.";const M=document.createElement("p");M.textContent="This is an example of how the utility panel interacts with the main content. When the panel opens with push content enabled, this area will shift to the left to make room for the panel.";const O=document.createElement("p");O.textContent="The content area maintains its full functionality while the panel is open. Users can continue to interact with the main content while accessing the utility panel features.",a.appendChild(P),a.appendChild(I),a.appendChild(M),a.appendChild(O);const y=document.createElement("div");y.className="main-content-wrapper",y.appendChild(a),y.appendChild(t);const w=document.createElement("div");w.className="demo-container",w.appendChild(h),w.appendChild(y),ee.appendChild(w);const U=document.createElement("style");U.textContent=n,r.appendChild(U),requestAnimationFrame(()=>{t.targetElement=a})}}});customElements.define("utility-panel-shadow-host",S)}return l`<utility-panel-shadow-host
      .props=${{...e}}
    ></utility-panel-shadow-host>`}};var H,W,N;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
          custom-class=\${ifDefined(args['custom-class'])}
          ?background-overlay=\${args['background-overlay']}
          ?collapse-on-click-outside=\${args['collapse-on-click-outside']}
          ?expanded=\${args.expanded}
          ?push-content=\${args['push-content']}
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
}`,...(N=(W=b.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var q,D,F;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
          custom-class=\${ifDefined(args['custom-class'])}
          ?background-overlay=\${args['background-overlay']}
          ?collapse-on-click-outside=\${args['collapse-on-click-outside']}
          ?expanded=\${args.expanded}
          ?push-content=\${args['push-content']}
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
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var R,Y,L;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    'background-overlay': true,
    'collapse-on-click-outside': false,
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
      background-overlay
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
          custom-class=\${ifDefined(args['custom-class'])}
          ?background-overlay=\${args['background-overlay']}
          ?collapse-on-click-outside=\${args['collapse-on-click-outside']}
          ?expanded=\${args.expanded}
          ?push-content=\${args['push-content']}
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
}`,...(L=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var j,_,G;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    'background-overlay': true,
    'collapse-on-click-outside': true,
    expanded: true,
    'push-content': true
  },
  parameters: {
    docs: {
      description: {
        story: 'Navbar is placed inside \`targetElement\`, so the background overlay dims the navbar together with the main content. Compare with Overlay Mode, where the navbar sits outside the target and stays undimmed.'
      },
      source: {
        transform: () => \`
<style>
\${utilityPanelStyles}
</style>

<div class="demo-container">
  <div class="main-content-wrapper">
    <div id="main-content-navbar-in-target" class="main-content main-content--with-navbar">
      <modus-wc-navbar id="navbar-in-target">
        <div slot="end">
          <modus-wc-button
            color="primary"
            size="sm"
            variant="outlined"
            onclick="const panel = document.getElementById('panel-navbar-in-target'); panel.expanded = !panel.expanded"
          >
            <modus-wc-icon name="menu"></modus-wc-icon>
          </modus-wc-button>
        </div>
      </modus-wc-navbar>

      <div class="main-content-body">
        <h1>Navbar Inside Target Element</h1>
        <p>
          The navbar is a child of the target element. When background-overlay
          is enabled, the dim covers both the navbar and this content area.
        </p>
        <p>
          Use this layout when the overlay should include chrome that lives
          inside the pushed/overlaid region.
        </p>
      </div>
    </div>

    <modus-wc-utility-panel
      id="panel-navbar-in-target"
      background-overlay
      collapse-on-click-outside
      expanded="true"
      push-content="true"
    >
      <div slot="header" class="modus-wc-utility-panel-header">
        Overlay Panel Header
      </div>

      <div slot="body" class="modus-wc-utility-panel-body">
        <p>
          Background overlay is scoped to the target element, which includes
          the navbar in this story.
        </p>
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
      <div class="main-content-wrapper">
        <div
          id="main-content-navbar-in-target"
          class="main-content main-content--with-navbar"
        >
          <modus-wc-navbar id="navbar-in-target" .visibility=\${{
    user: false
  }}>
            <div slot="end">
              <modus-wc-button
                color="primary"
                size="sm"
                variant="outlined"
                onclick="const panel = document.getElementById('panel-navbar-in-target'); panel.expanded = !panel.expanded"
              >
                <modus-wc-icon name="menu"></modus-wc-icon>
              </modus-wc-button>
            </div>
          </modus-wc-navbar>

          <div class="main-content-body">
            <h1>Navbar Inside Target Element</h1>
            <p>
              The navbar is a child of the target element. When
              background-overlay is enabled, the dim covers both the navbar and
              this content area.
            </p>
            <p>
              Use this layout when the overlay should include chrome that lives
              inside the pushed/overlaid region.
            </p>
          </div>
        </div>

        <modus-wc-utility-panel
          id="panel-navbar-in-target"
          custom-class=\${ifDefined(args['custom-class'])}
          ?background-overlay=\${args['background-overlay']}
          ?collapse-on-click-outside=\${args['collapse-on-click-outside']}
          ?expanded=\${args.expanded}
          ?push-content=\${args['push-content']}
        >
          <div slot="header" class="modus-wc-utility-panel-header">
            Overlay Panel Header
          </div>

          <div slot="body" class="modus-wc-utility-panel-body">
            <p>
              Background overlay is scoped to the target element, which includes
              the navbar in this story.
            </p>
          </div>

          <div slot="footer" class="modus-wc-utility-panel-footer">
            <modus-wc-button color="tertiary" size="sm">Cancel</modus-wc-button>
            <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
          </div>
        </modus-wc-utility-panel>
      </div>
    </div>
  \`
}`,...(G=(_=x.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,K,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        custom-class=\${ifDefined(args['custom-class'])}
        ?background-overlay=\${args['background-overlay']}
        ?collapse-on-click-outside=\${args['collapse-on-click-outside']}
        ?expanded=\${args.expanded}
        ?push-content=\${args['push-content']}
      >
        <div slot="body">
          <h3>Simple Body Content</h3>
          <p>This panel only has body content without header or footer.</p>
        </div>
      </modus-wc-utility-panel>
    </div>
  \`
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,X,Z;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('utility-panel-shadow-host')) {
      const UtilityPanelShadowHost = createShadowHostClass<UtilityPanelArgs>({
        componentTag: 'modus-wc-utility-panel',
        propsMapper: (v: UtilityPanelArgs, el: HTMLElement) => {
          (el as unknown as {
            backgroundOverlay: boolean;
          }).backgroundOverlay = Boolean(v['background-overlay']);
          (el as unknown as {
            collapseOnClickOutside: boolean;
          }).collapseOnClickOutside = Boolean(v['collapse-on-click-outside']);
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
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const re=["Default","Expanded","OverlayMode","OverlayWithNavbar","WithoutHeaderFooter","ShadowDomParent"];export{b as Default,g as Expanded,f as OverlayMode,x as OverlayWithNavbar,C as ShadowDomParent,k as WithoutHeaderFooter,re as __namedExportsOrder,ce as default};
