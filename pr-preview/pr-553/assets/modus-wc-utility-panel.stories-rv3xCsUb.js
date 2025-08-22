import{x as s}from"./lit-element-C8zulti1.js";import{o as S}from"./if-defined-yv6owfG8.js";var c=Object.freeze,E=Object.defineProperty,r=(e,t)=>c(E(e,"raw",{value:c(e.slice())})),p,u,m;const A={title:"Components/Utility Panel",component:"modus-wc-utility-panel",args:{expanded:!1,pushContent:!0,targetContent:"#main-content"},argTypes:{expanded:{control:{type:"boolean"}},pushContent:{control:{type:"boolean"}},targetContent:{control:{type:"text"}}},parameters:{actions:{handles:["panelOpened","panelClosed"]},docs:{description:{component:"A utility panel component that slides in from the right side of the screen. It can either push content or display as an overlay."}},layout:"fullscreen"}},M={render:e=>{const{expanded:t,pushContent:n,targetContent:l}=e;return s(p||(p=r([`
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
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: #f5f5f5;
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
        <modus-wc-navbar id="navbar-default">
          <div slot="logo">My Application</div>
          <div slot="end">
            <modus-wc-tooltip content="Toggle Utility Panel" position="left">
              <modus-wc-button
                color="secondary"
                size="sm"
                variant="outlined"
                onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
              >
                <modus-wc-icon name="menu"></modus-wc-icon>
              </modus-wc-button>
            </modus-wc-tooltip>
          </div>
        </modus-wc-navbar>
        <script>
          setTimeout(() => {
            const navbar = document.getElementById('navbar-default');
            if (navbar) {
              navbar.visibility = { user: false };
            }
          }, 0);
        <\/script>

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
            ?expanded="`,`"
            ?push-content="`,`"
            target-content="`,`"
            @panelOpened="`,`"
            @panelClosed="`,`"
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
              <modus-wc-button color="secondary">Cancel</modus-wc-button>
              <modus-wc-button color="primary">Save</modus-wc-button>
            </div>
          </modus-wc-utility-panel>
        </div>
      </div>
    `])),t,n,S(l),()=>console.log("Panel opened"),()=>console.log("Panel closed"))}},o={...M},a={render:e=>{const{expanded:t,pushContent:n}=e;return s(u||(u=r([`
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
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: #f5f5f5;
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
        <modus-wc-navbar id="navbar-expanded">
          <div slot="logo">My Application</div>
          <div slot="end">
            <modus-wc-button
              color="secondary"
              onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
            >
              <modus-wc-icon name="menu"></modus-wc-icon>
              Toggle Utility Panel
            </modus-wc-button>
          </div>
        </modus-wc-navbar>
        <script>
          setTimeout(() => {
            const navbar = document.getElementById('navbar-expanded');
            if (navbar) {
              navbar.visibility = { user: false };
            }
          }, 0);
        <\/script>

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
            ?expanded="`,`"
            ?push-content="`,`"
            target-content="#main-content-expanded"
          >
            <div slot="header" class="modus-wc-utility-panel-header">
              Expanded Panel Header
            </div>

            <div slot="body" class="modus-wc-utility-panel-body">
              <p>This panel starts in the expanded state.</p>
            </div>

            <div slot="footer" class="modus-wc-utility-panel-footer">
              <modus-wc-button color="secondary">Cancel</modus-wc-button>
              <modus-wc-button color="primary">Save</modus-wc-button>
            </div>
          </modus-wc-utility-panel>
        </div>
      </div>
    `])),t,n)},args:{expanded:!0,pushContent:!0,targetContent:"#main-content-expanded"}},i={render:e=>{const{expanded:t,pushContent:n}=e;return s(m||(m=r([`
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
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: #f5f5f5;
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
        <modus-wc-navbar id="navbar-overlay">
          <div slot="end">
            <modus-wc-button
              color="secondary"
              onclick="const panel = document.getElementById('overlay-panel'); panel.expanded = !panel.expanded"
            >
              <modus-wc-icon name="menu"></modus-wc-icon>
              Toggle Utility Panel
            </modus-wc-button>
          </div>
        </modus-wc-navbar>
        <script>
          setTimeout(() => {
            const navbar = document.getElementById('navbar-overlay');
            if (navbar) {
              navbar.visibility = { user: false };
            }
          }, 0);
        <\/script>

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
            id="overlay-panel"
            ?expanded="`,`"
            ?push-content="`,`"
            target-content="#main-content-overlay"
          >
            <div slot="header" class="modus-wc-utility-panel-header">
              Overlay Panel Header
            </div>

            <div slot="body" class="modus-wc-utility-panel-body">
              <p>This panel overlays the content without pushing it.</p>
            </div>

            <div slot="footer" class="modus-wc-utility-panel-footer">
              <modus-wc-button color="secondary" size="sm">Cancel</modus-wc-button>
              <modus-wc-button color-type="primary" size="sm>Save</modus-wc-button>
            </div>
          </modus-wc-utility-panel>
        </div>
      </div>
    `])),t,n)},args:{expanded:!0,pushContent:!1,targetContent:"#main-content-overlay"}},d={render:e=>{const{expanded:t,pushContent:n,targetContent:l}=e;return s`
      <style>
        .demo-container {
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: white;
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: #f5f5f5;
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
          ?expanded="${t}"
          ?push-content="${n}"
          target-content="${S(l)}"
        >
          <div slot="body">
            <h3>Simple Body Content</h3>
            <p>This panel only has body content without header or footer.</p>
          </div>
        </modus-wc-utility-panel>
      </div>
    `},args:{expanded:!1,pushContent:!0,targetContent:"#main-content-2"}};var h,v,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,f,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const {
      expanded,
      pushContent
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
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: #f5f5f5;
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
        <modus-wc-navbar id="navbar-expanded">
          <div slot="logo">My Application</div>
          <div slot="end">
            <modus-wc-button
              color="secondary"
              onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
            >
              <modus-wc-icon name="menu"></modus-wc-icon>
              Toggle Utility Panel
            </modus-wc-button>
          </div>
        </modus-wc-navbar>
        <script>
          setTimeout(() => {
            const navbar = document.getElementById('navbar-expanded');
            if (navbar) {
              navbar.visibility = { user: false };
            }
          }, 0);
        <\/script>

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
            ?expanded="\${expanded}"
            ?push-content="\${pushContent}"
            target-content="#main-content-expanded"
          >
            <div slot="header" class="modus-wc-utility-panel-header">
              Expanded Panel Header
            </div>

            <div slot="body" class="modus-wc-utility-panel-body">
              <p>This panel starts in the expanded state.</p>
            </div>

            <div slot="footer" class="modus-wc-utility-panel-footer">
              <modus-wc-button color="secondary">Cancel</modus-wc-button>
              <modus-wc-button color="primary">Save</modus-wc-button>
            </div>
          </modus-wc-utility-panel>
        </div>
      </div>
    \`;
  },
  args: {
    expanded: true,
    pushContent: true,
    targetContent: '#main-content-expanded'
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,x,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const {
      expanded,
      pushContent
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
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: #f5f5f5;
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
        <modus-wc-navbar id="navbar-overlay">
          <div slot="end">
            <modus-wc-button
              color="secondary"
              onclick="const panel = document.getElementById('overlay-panel'); panel.expanded = !panel.expanded"
            >
              <modus-wc-icon name="menu"></modus-wc-icon>
              Toggle Utility Panel
            </modus-wc-button>
          </div>
        </modus-wc-navbar>
        <script>
          setTimeout(() => {
            const navbar = document.getElementById('navbar-overlay');
            if (navbar) {
              navbar.visibility = { user: false };
            }
          }, 0);
        <\/script>

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
            id="overlay-panel"
            ?expanded="\${expanded}"
            ?push-content="\${pushContent}"
            target-content="#main-content-overlay"
          >
            <div slot="header" class="modus-wc-utility-panel-header">
              Overlay Panel Header
            </div>

            <div slot="body" class="modus-wc-utility-panel-body">
              <p>This panel overlays the content without pushing it.</p>
            </div>

            <div slot="footer" class="modus-wc-utility-panel-footer">
              <modus-wc-button color="secondary" size="sm">Cancel</modus-wc-button>
              <modus-wc-button color-type="primary" size="sm>Save</modus-wc-button>
            </div>
          </modus-wc-utility-panel>
        </div>
      </div>
    \`;
  },
  args: {
    expanded: true,
    pushContent: false,
    targetContent: '#main-content-overlay'
  }
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var T,k,P;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: UtilityPanelArgs) => {
    const {
      expanded,
      pushContent,
      targetContent
    } = args;
    return html\`
      <style>
        .demo-container {
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: white;
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: #f5f5f5;
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
          ?expanded="\${expanded}"
          ?push-content="\${pushContent}"
          target-content="\${ifDefined(targetContent)}"
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
    pushContent: true,
    targetContent: '#main-content-2'
  }
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};const O=["Default","Expanded","OverlayMode","WithoutHeaderFooter"];export{o as Default,a as Expanded,i as OverlayMode,d as WithoutHeaderFooter,O as __namedExportsOrder,A as default};
