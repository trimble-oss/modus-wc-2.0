import{w as S}from"./decorator-D4YmxizW.js";import{x as s}from"./lit-element-C8zulti1.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const P={title:"Components/Utility Panel",component:"modus-wc-utility-panel",args:{expanded:!1,"push-content":!0},argTypes:{expanded:{control:{type:"boolean"}},"push-content":{control:{type:"boolean"}}},decorators:[S,n=>(requestAnimationFrame(()=>{document.querySelectorAll("modus-wc-utility-panel").forEach(d=>{const c=d.closest(".demo-container");if(c){const r=c.querySelector(".main-content");r&&d&&(d.targetElement=r)}})}),n())],parameters:{actions:{handles:["panelOpened","panelClosed"]},docs:{description:{component:"A utility panel component that slides in from the right side of the screen. It can either push content or display as an overlay."}},layout:"fullscreen"}},e=`
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

`,l=`
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
<\/script>`,t={parameters:{docs:{source:{transform:()=>`

<style>
${e}
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
${l}`}}},render:n=>s`
    <style>
      ${e}
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
  `},o={args:{expanded:!0,"push-content":!0},parameters:{docs:{source:{transform:()=>`
<style>
${e}
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
${l}`}}},render:n=>s`
    <style>
      // ignore prettier
      ${e} 
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
  `},a={args:{expanded:!0,"push-content":!1},parameters:{docs:{source:{transform:()=>`
<style>
${e}
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
${l}`}}},render:n=>s`
    <style>
      ${e}
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
  `},i={args:{expanded:!1,"push-content":!0},render:n=>s`
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
  `};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,y,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
  render: args => html\`
    <style>
      // ignore prettier
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
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,b,f;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,g,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(g=i.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const q=["Default","Expanded","OverlayMode","WithoutHeaderFooter"];export{t as Default,o as Expanded,a as OverlayMode,i as WithoutHeaderFooter,q as __namedExportsOrder,P as default};
