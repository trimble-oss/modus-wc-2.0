import{w as E}from"./decorator-D4YmxizW.js";import{x as c}from"./lit-element-C8zulti1.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const z={title:"Components/Utility Panel",component:"modus-wc-utility-panel",args:{expanded:!1,"push-content":!0},argTypes:{expanded:{control:{type:"boolean"}},"push-content":{control:{type:"boolean"}}},decorators:[E],parameters:{actions:{handles:["panelOpened","panelClosed"]},docs:{description:{component:"A utility panel component that slides in from the right side of the screen. It can either push content or display as an overlay."}},layout:"fullscreen"}},i={render:n=>{const{expanded:o,"push-content":a}=n;return requestAnimationFrame(()=>{const e=document.getElementById("main-content"),t=document.querySelector("modus-wc-utility-panel");t&&e&&(t.targetElement=e)}),c`
      <style>
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
              This is an example of how the utility panel interacts with the
              main content. When the panel opens with push content enabled, this
              area will shift to the left to make room for the panel.
            </p>
            <p>
              The content area maintains its full functionality while the panel
              is open. Users can continue to interact with the main content
              while accessing the utility panel features.
            </p>
          </div>

          <modus-wc-utility-panel
            ?expanded="${o}"
            ?push-content="${a}"
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
    `}},s={render:n=>{const{expanded:o,"push-content":a}=n;return c`
      <style>
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

        .modus-wc-utility-panel-header {
          font-size: 18px;
          font-weight: 600;
        }

        .modus-wc-utility-panel-body {
          padding: 20px 0;
          background: var(--modus-wc-color-base-100);
        }

        .modus-wc-utility-panel-footer {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
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
            ?expanded="${o}"
            ?push-content="${a}"
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
    `},args:{expanded:!0,"push-content":!0}},d={render:n=>{const{expanded:o,"push-content":a}=n;return requestAnimationFrame(()=>{const e=document.getElementById("main-content-overlay"),t=document.querySelector("#panel-overlay");t&&e&&(t.targetElement=e)}),c`
      <style>
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
              In overlay mode, the panel appears over the content without
              pushing it.
            </p>
            <p>
              This example demonstrates the overlay mode where the panel appears
              on top of the content without pushing it aside. This is useful
              when you want to preserve the layout of the main content area.
            </p>
          </div>

          <modus-wc-utility-panel
            id="panel-overlay"
            ?expanded="${o}"
            ?push-content="${a}"
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
    `},args:{expanded:!0,"push-content":!1}},l={render:n=>{const{expanded:o,"push-content":a}=n;return requestAnimationFrame(()=>{const e=document.getElementById("main-content-2"),t=document.querySelector("#panel-simple");t&&e&&(t.targetElement=e)}),c`
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
          ?expanded="${o}"
          ?push-content="${a}"
        >
          <div slot="body">
            <h3>Simple Body Content</h3>
            <p>This panel only has body content without header or footer.</p>
          </div>
        </modus-wc-utility-panel>
      </div>
    `},args:{expanded:!1,"push-content":!0}};var r,p,u;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const {
      expanded,
      'push-content': pushContent
    } = args;

    // Set element reference immediately on first update
    requestAnimationFrame(() => {
      const contentElement = document.getElementById('main-content');
      const panel = document.querySelector('modus-wc-utility-panel');
      if (panel && contentElement) {
        panel.targetElement = contentElement;
      }
    });
    return html\`
      <style>
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
              This is an example of how the utility panel interacts with the
              main content. When the panel opens with push content enabled, this
              area will shift to the left to make room for the panel.
            </p>
            <p>
              The content area maintains its full functionality while the panel
              is open. Users can continue to interact with the main content
              while accessing the utility panel features.
            </p>
          </div>

          <modus-wc-utility-panel
            ?expanded="\${expanded}"
            ?push-content="\${pushContent}"
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
    \`;
  }
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,h,w;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const {
      expanded,
      'push-content': pushContent
    } = args;
    return html\`
      <style>
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

        .modus-wc-utility-panel-header {
          font-size: 18px;
          font-weight: 600;
        }

        .modus-wc-utility-panel-body {
          padding: 20px 0;
          background: var(--modus-wc-color-base-100);
        }

        .modus-wc-utility-panel-footer {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
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
            ?expanded="\${expanded}"
            ?push-content="\${pushContent}"
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
    \`;
  },
  args: {
    expanded: true,
    'push-content': true
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,v,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const {
      expanded,
      'push-content': pushContent
    } = args;

    // Set element reference after render
    requestAnimationFrame(() => {
      const contentElement = document.getElementById('main-content-overlay');
      const panel = document.querySelector('#panel-overlay') as HTMLElement & {
        targetElement: HTMLElement;
      };
      if (panel && contentElement) {
        panel.targetElement = contentElement;
      }
    });
    return html\`
      <style>
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
              In overlay mode, the panel appears over the content without
              pushing it.
            </p>
            <p>
              This example demonstrates the overlay mode where the panel appears
              on top of the content without pushing it aside. This is useful
              when you want to preserve the layout of the main content area.
            </p>
          </div>

          <modus-wc-utility-panel
            id="panel-overlay"
            ?expanded="\${expanded}"
            ?push-content="\${pushContent}"
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
    \`;
  },
  args: {
    expanded: true,
    'push-content': false
  }
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,g,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: UtilityPanelArgs) => {
    const {
      expanded,
      'push-content': pushContent
    } = args;

    // Set element reference after render
    requestAnimationFrame(() => {
      const contentElement = document.getElementById('main-content-2');
      const panel = document.querySelector('#panel-simple') as HTMLElement & {
        targetElement: HTMLElement;
      };
      if (panel && contentElement) {
        panel.targetElement = contentElement;
      }
    });
    return html\`
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
          ?expanded="\${expanded}"
          ?push-content="\${pushContent}"
        >
          <div slot="body">
            <h3>Simple Body Content</h3>
            <p>This panel only has body content without header or footer.</p>
          </div>
        </modus-wc-utility-panel>
      </div>
    \`;
  },
  args: {
    expanded: false,
    'push-content': true
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const $=["Default","Expanded","OverlayMode","WithoutHeaderFooter"];export{i as Default,s as Expanded,d as OverlayMode,l as WithoutHeaderFooter,$ as __namedExportsOrder,z as default};
