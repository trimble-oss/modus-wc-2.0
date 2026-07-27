import{w as V}from"./decorator-D4YmxizW.js";import{b as d}from"./lit-element-DgBvYnzn.js";import{o as C}from"./if-defined-BnVFTJ4o.js";import{c as X}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const ie={title:"Components/Utility Panel",component:"modus-wc-utility-panel",args:{"background-overlay":!1,expanded:!1,"push-content":!0},argTypes:{"background-overlay":{control:{type:"boolean"}},"custom-class":{control:{type:"text"}},expanded:{control:{type:"boolean"}},"push-content":{control:{type:"boolean"}}},decorators:[V,e=>(requestAnimationFrame(()=>{document.querySelectorAll("modus-wc-utility-panel").forEach(n=>{const t=n.closest(".demo-container");if(t){const c=t.querySelector(".main-content");c&&n&&(n.targetElement=c)}})}),e())],parameters:{actions:{handles:["panelOpened","panelClosed"]},docs:{description:{component:"A utility panel component that slides in from the right side of the screen. It can either push content or display as an overlay.\n\nThe component supports `<slot>` called 'header' for panel title content, 'body' for main content area, and 'footer' for action buttons or additional controls."}},layout:"fullscreen"}},a=`
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
${a}
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
${T}`}}},render:e=>d`
    <style>
      ${a}
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
          custom-class=${C(e["custom-class"])}
          ?background-overlay=${e["background-overlay"]}
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
  `},b={args:{expanded:!0,"push-content":!0},parameters:{docs:{source:{transform:()=>`
<style>
${a}
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
${T}`}}},render:e=>d`
    <style>
      ${a} 
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
          custom-class=${C(e["custom-class"])}
          ?background-overlay=${e["background-overlay"]}
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
  `},f={args:{"background-overlay":!0,expanded:!0,"push-content":!1},parameters:{docs:{source:{transform:()=>`
<style>
${a}
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
${T}`}}},render:e=>d`
    <style>
      ${a}
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
          custom-class=${C(e["custom-class"])}
          ?background-overlay=${e["background-overlay"]}
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
  `},g={args:{expanded:!1,"push-content":!0},render:e=>d`
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
        custom-class=${C(e["custom-class"])}
        ?background-overlay=${e["background-overlay"]}
        ?expanded=${e.expanded}
        ?push-content=${e["push-content"]}
      >
        <div slot="body">
          <h3>Simple Body Content</h3>
          <p>This panel only has body content without header or footer.</p>
        </div>
      </modus-wc-utility-panel>
    </div>
  `},x={render:e=>{if(!customElements.get("utility-panel-shadow-host")){const A=X({componentTag:"modus-wc-utility-panel",propsMapper:(n,t)=>{if(t.backgroundOverlay=!!n["background-overlay"],t.expanded=!!n.expanded,t.pushContent=!!n["push-content"],!t.hasAttribute("data-layout-built")){t.setAttribute("data-layout-built","");const c=t.getRootNode(),Q=t.parentElement,r=document.createElement("div");r.setAttribute("slot","header"),r.className="modus-wc-utility-panel-header",r.textContent="Utility Panel Header";const i=document.createElement("div");i.setAttribute("slot","body"),i.className="modus-wc-utility-panel-body";const S=document.createElement("p");S.textContent="This is the utility panel body content.";const $=document.createElement("p");$.textContent="You can add any content here including forms, lists, or other components.";const E=document.createElement("modus-wc-text-input");E.setAttribute("label","Example Input"),E.setAttribute("placeholder","Enter text..."),i.appendChild(S),i.appendChild($),i.appendChild(E);const l=document.createElement("div");l.setAttribute("slot","footer"),l.className="modus-wc-utility-panel-footer";const u=document.createElement("modus-wc-button");u.setAttribute("color","tertiary"),u.setAttribute("size","sm"),u.textContent="Cancel";const p=document.createElement("modus-wc-button");p.setAttribute("color","primary"),p.setAttribute("size","sm"),p.textContent="Save",l.appendChild(u),l.appendChild(p),t.appendChild(r),t.appendChild(i),t.appendChild(l);const m=document.createElement("modus-wc-navbar");m.visibility={user:!1},m.userCard={name:"",email:""};const k=document.createElement("div");k.setAttribute("slot","end");const h=document.createElement("modus-wc-tooltip");h.setAttribute("content","Toggle Utility Panel"),h.setAttribute("position","left");const s=document.createElement("modus-wc-button");s.setAttribute("color","primary"),s.setAttribute("size","sm"),s.setAttribute("variant","outlined");const z=document.createElement("modus-wc-icon");z.setAttribute("name","menu"),s.appendChild(z),h.appendChild(s),k.appendChild(h),m.appendChild(k),s.addEventListener("buttonClick",()=>{t.expanded=!t.expanded});const o=document.createElement("div");o.className="main-content";const B=document.createElement("h1");B.textContent="Main Content Area";const P=document.createElement("p");P.textContent="This is the main content area below the navbar. When the utility panel opens with pushContent=true, this content will be pushed to the left.";const M=document.createElement("p");M.textContent="This is an example of how the utility panel interacts with the main content. When the panel opens with push content enabled, this area will shift to the left to make room for the panel.";const I=document.createElement("p");I.textContent="The content area maintains its full functionality while the panel is open. Users can continue to interact with the main content while accessing the utility panel features.",o.appendChild(B),o.appendChild(P),o.appendChild(M),o.appendChild(I);const y=document.createElement("div");y.className="main-content-wrapper",y.appendChild(o),y.appendChild(t);const w=document.createElement("div");w.className="demo-container",w.appendChild(m),w.appendChild(y),Q.appendChild(w);const U=document.createElement("style");U.textContent=a,c.appendChild(U),requestAnimationFrame(()=>{t.targetElement=o})}}});customElements.define("utility-panel-shadow-host",A)}return d`<utility-panel-shadow-host
      .props=${{...e}}
    ></utility-panel-shadow-host>`}};var H,q,W;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(q=v.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var N,O,D;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(O=b.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var F,R,Y;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    'background-overlay': true,
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
}`,...(Y=(R=f.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var L,j,_;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(j=g.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var G,J,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('utility-panel-shadow-host')) {
      const UtilityPanelShadowHost = createShadowHostClass<UtilityPanelArgs>({
        componentTag: 'modus-wc-utility-panel',
        propsMapper: (v: UtilityPanelArgs, el: HTMLElement) => {
          (el as unknown as {
            backgroundOverlay: boolean;
          }).backgroundOverlay = Boolean(v['background-overlay']);
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
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const se=["Default","Expanded","OverlayMode","WithoutHeaderFooter","ShadowDomParent"];export{v as Default,b as Expanded,f as OverlayMode,x as ShadowDomParent,g as WithoutHeaderFooter,se as __namedExportsOrder,ie as default};
