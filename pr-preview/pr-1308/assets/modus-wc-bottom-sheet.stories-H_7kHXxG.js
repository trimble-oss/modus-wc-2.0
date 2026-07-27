import{w as v}from"./decorator-D4YmxizW.js";import{b as d}from"./lit-element-DgBvYnzn.js";import{o}from"./if-defined-BnVFTJ4o.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const f={showBackButton:!0,title:"Title",subtitle:"Subtitle",showCloseButton:!0},S={title:"Components/Bottom Sheet",component:"modus-wc-bottom-sheet",args:{"custom-class":"",visible:!0,"display-mode":"default","drag-step-threshold":.4,header:f},argTypes:{visible:{control:"boolean",table:{defaultValue:{summary:"false"}}},"display-mode":{control:"select",options:["default","expanded","minimized"],table:{defaultValue:{summary:"default"}}},"drag-step-threshold":{control:{type:"number",min:0,max:1,step:.05},table:{defaultValue:{summary:"0.4"}}},header:{description:"Configuration for the built-in header layout. Do not set if you use the header slot.",table:{type:{detail:`
            Interface: IBottomSheetHeader
            Properties:
            - showBackButton (boolean, optional): Whether to show the back button
            - title (string, optional): The title of the header
            - subtitle (string, optional): The subtitle of the header
            - showCloseButton (boolean, optional): Whether to show the dismiss button. Clicking it closes the bottom sheet
          `}},control:{type:"object"}}},decorators:[v],parameters:{layout:"padded",actions:{handles:["headerBackClick","headerCloseClick","displayModeChange","sheetVisibilityChange"]},docs:{description:{component:"\nA bottom sheet that slides up from the bottom of the viewport. It supports three resting display modes — minimized, default, and expanded — controlled by the `displayMode` property or the drag handle.\n\nThe component supports `header`, `content`, and `footer` slots. Alternatively, set the `header` prop for the built-in header layout (do not set `header` if you use the `header` slot).\n        "}}}},i={parameters:{docs:{description:{story:"Default sheet with the built-in header, content, and footer slots. Toggle the `visible` control to open and close it. In a real app, attach the sheet to `<body>` and drive `visible` from a button in your page (see **Triggered By Button**)."},source:{code:`<style>
  /* Demo-only frame: the component is position: fixed, which would escape
     to the page (and overlap other stories) on the docs canvas. 'contain'
     makes this frame a containing block for the sheet's position: fixed
     and clips it, so the sheet stays bounded WITHOUT changing its position
     value (overriding position to absolute caused a render jump). */
  .bottom-sheet-demo {
    border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
    contain: layout paint;
    height: 520px;
    width: 100%;
  }

  .bottom-sheet-demo .modus-wc-panel {
    max-height: 480px;
  }

  .modus-wc-bottom-sheet-footer-actions {
    align-items: center;
    display: flex;
    gap: var(--modus-wc-spacing-sm);
    justify-content: flex-end;
    width: 100%;
  }
</style>

<div class="bottom-sheet-demo">
  <modus-wc-bottom-sheet id="app-bottom-sheet" visible style="width: 600px">
    <div slot="content">Main content area for forms, lists, or other components.</div>
    <div slot="footer">
      <div class="modus-wc-bottom-sheet-footer-actions">
        <modus-wc-button color="tertiary" size="sm" variant="outlined">Cancel</modus-wc-button>
        <modus-wc-button color="primary" size="sm" variant="filled">Save</modus-wc-button>
      </div>
    </div>
  </modus-wc-bottom-sheet>
</div>

<script>
  document.getElementById('app-bottom-sheet').header = {
    showBackButton: true,
    title: 'Title',
    subtitle: 'Subtitle',
    showCloseButton: true,
  };
<\/script>`}}},render:e=>d`
      <style>
        .bottom-sheet-demo {
          border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
          contain: layout paint;
          height: 520px;
          width: 100%;
        }

        .bottom-sheet-demo .modus-wc-panel {
          max-height: 480px;
        }

        .modus-wc-bottom-sheet-footer-actions {
          align-items: center;
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          justify-content: flex-end;
          width: 100%;
        }

      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?visible="${e.visible}"
          display-mode="${o(e["display-mode"])}"
          drag-step-threshold="${o(e["drag-step-threshold"])}"
          custom-class="${o(e["custom-class"])}"
          style="width: 600px"
          .header="${e.header}"
        >
          <div slot="content">
            <modus-wc-typography
              hierarchy="p"
              size="md"
              label="Main content area for forms, lists, or other components."
            ></modus-wc-typography>
          </div>

          <div slot="footer">
            <div class="modus-wc-bottom-sheet-footer-actions">
              <modus-wc-button color="tertiary" size="sm" variant="outlined">
                Cancel
              </modus-wc-button>
              <modus-wc-button color="primary" size="sm" variant="filled">
                Save
              </modus-wc-button>
            </div>
          </div>
        </modus-wc-bottom-sheet>
      </div>
    `},n={args:{header:{showBackButton:!1,title:"Bottom Sheet Title",subtitle:"Drag the handle down to minimize or up to expand.",showCloseButton:!1}},parameters:{docs:{description:{story:["Open the sheet from a control in your own page.","","- Put the **trigger button (and its click handler) in your page markup**.","- Render `<modus-wc-bottom-sheet>` as a **direct child of `<body>`** so its `position: fixed` anchors it to the window.","- Open with `sheet.visible = true` (optionally set `sheet.displayMode`); close with `sheet.visible = false`.","","The dashed frame below is demo-only so the sheet stays bounded within this story."].join(`
`)},source:{code:`<!-- 1) Trigger button + handler live in YOUR page -->
<modus-wc-button id="open-bottom-sheet" color="primary" variant="filled">
  Open bottom sheet
</modus-wc-button>
<modus-wc-button id="minimize-bottom-sheet" color="tertiary" variant="outlined">
  Minimize
</modus-wc-button>

<!-- 2) Attach the sheet as a direct child of <body> so position: fixed
        pins it to the bottom of the window -->
<modus-wc-bottom-sheet id="app-bottom-sheet">
  <div slot="content">Main content area for forms, lists, or other components.</div>
  <div slot="footer">
    <modus-wc-button id="cancel-bottom-sheet" color="tertiary" variant="outlined">Cancel</modus-wc-button>
    <modus-wc-button id="save-bottom-sheet" color="primary" variant="filled">Save</modus-wc-button>
  </div>
</modus-wc-bottom-sheet>

<script>
  const sheet = document.getElementById('app-bottom-sheet');

  sheet.header = {
    showBackButton: false,
    title: 'Bottom Sheet Title',
    subtitle: 'Drag the handle down to minimize or up to expand.',
    showCloseButton: false,
  };

  // Open from the page button
  document
    .getElementById('open-bottom-sheet')
    .addEventListener('buttonClick', () => {
      sheet.visible = true;
      sheet.displayMode = 'default';
    });

  // Minimize from the page button
  document
    .getElementById('minimize-bottom-sheet')
    .addEventListener('buttonClick', () => {
      sheet.displayMode = 'minimized';
    });

  // Close from buttons inside the sheet
  ['cancel-bottom-sheet', 'save-bottom-sheet'].forEach((id) =>
    document
      .getElementById(id)
      .addEventListener('buttonClick', () => (sheet.visible = false))
  );

  // (Optional) react to state changes
  sheet.addEventListener('sheetVisibilityChange', (e) =>
    console.log('visible:', e.detail.visible)
  );
  sheet.addEventListener('displayModeChange', (e) =>
    console.log('display mode:', e.detail.displayMode)
  );
<\/script>`}}},render:e=>{const s="demo-triggered-bottom-sheet",r=()=>{const t=document.getElementById(s);t&&(t.visible=!1)};return d`
      <style>
        /* Demo-only frame: the component is position: fixed, which would escape
           to the page (and overlap other stories) on the docs canvas. 'contain'
           makes this frame a containing block for the sheet's position: fixed
           and clips it, so the sheet stays bounded WITHOUT changing its position
           value (overriding position to absolute caused a render jump). */
        .bottom-sheet-demo {
          border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
          contain: layout paint;
          height: 520px;
          width: 100%;
        }

        .bottom-sheet-demo .modus-wc-panel {
          max-height: 480px;
        }

        .modus-wc-bottom-sheet-footer-actions {
          align-items: center;
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          justify-content: flex-end;
          width: 100%;
        }

        .modus-wc-bottom-sheet-trigger-actions {
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          padding: var(--modus-wc-spacing-lg);
        }

      </style>
      <div class="bottom-sheet-demo">
      <div class="modus-wc-bottom-sheet-trigger-actions">
        <modus-wc-button
          color="primary"
          size="md"
          variant="filled"
          @buttonClick="${()=>{const t=document.getElementById(s);if(t){const l=t;l.visible=!0,l.displayMode="default"}}}"
        >
          <modus-wc-icon name="expand_more" size="sm" decorative></modus-wc-icon>
          Open bottom sheet
        </modus-wc-button>
        <modus-wc-button
          color="tertiary"
          size="md"
          variant="outlined"
          @buttonClick="${()=>{const t=document.getElementById(s);t&&(t.displayMode="minimized")}}"
        >
          Minimize
        </modus-wc-button>
      </div>

      <modus-wc-bottom-sheet
        id="${s}"
        drag-step-threshold="${o(e["drag-step-threshold"])}"
        style="width: 600px"
        .header="${o(e.header)}"
      >
        <div slot="content">
          <modus-wc-typography
            hierarchy="p"
            size="md"
            label="Main content area for forms, lists, or other components."
          ></modus-wc-typography>
        </div>

        <div slot="footer">
          <div class="modus-wc-bottom-sheet-footer-actions">
            <modus-wc-button
              color="tertiary"
              size="sm"
              variant="outlined"
              @buttonClick="${r}"
            >
              Cancel
            </modus-wc-button>
            <modus-wc-button
              color="primary"
              size="sm"
              variant="filled"
              @buttonClick="${r}"
            >
              Save
            </modus-wc-button>
          </div>
        </div>
      </modus-wc-bottom-sheet>
      </div>
    `}},a={args:{header:void 0},parameters:{docs:{description:{story:"Sheet with only the `content` slot — no header or footer. The drag handle still lets users minimize/expand. As with the other stories, attach the sheet to `<body>` in production and toggle `visible` from your own page control."}}},render:e=>d`
      <style>
        /* Demo-only frame: the component is position: fixed, which would escape
           to the page (and overlap other stories) on the docs canvas. 'contain'
           makes this frame a containing block for the sheet's position: fixed
           and clips it, so the sheet stays bounded WITHOUT changing its position
           value (overriding position to absolute caused a render jump). */
        .bottom-sheet-demo {
          border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
          contain: layout paint;
          height: 520px;
          width: 100%;
        }

        .bottom-sheet-demo .modus-wc-panel {
          max-height: 480px;
        }

      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?visible="${e.visible}"
          style="width: 600px"
          .header="${e.header}"
        >
          <div slot="content">
            <modus-wc-typography
              hierarchy="p"
              size="md"
              label="Bottom sheet with content slot only."
            ></modus-wc-typography>
          </div>
        </modus-wc-bottom-sheet>
      </div>
    `};var c,h,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default sheet with the built-in header, content, and footer slots. Toggle the \`visible\` control to open and close it. In a real app, attach the sheet to \`<body>\` and drive \`visible\` from a button in your page (see **Triggered By Button**).'
      },
      source: {
        code: \`<style>
  /* Demo-only frame: the component is position: fixed, which would escape
     to the page (and overlap other stories) on the docs canvas. 'contain'
     makes this frame a containing block for the sheet's position: fixed
     and clips it, so the sheet stays bounded WITHOUT changing its position
     value (overriding position to absolute caused a render jump). */
  .bottom-sheet-demo {
    border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
    contain: layout paint;
    height: 520px;
    width: 100%;
  }

  .bottom-sheet-demo .modus-wc-panel {
    max-height: 480px;
  }

  .modus-wc-bottom-sheet-footer-actions {
    align-items: center;
    display: flex;
    gap: var(--modus-wc-spacing-sm);
    justify-content: flex-end;
    width: 100%;
  }
</style>

<div class="bottom-sheet-demo">
  <modus-wc-bottom-sheet id="app-bottom-sheet" visible style="width: 600px">
    <div slot="content">Main content area for forms, lists, or other components.</div>
    <div slot="footer">
      <div class="modus-wc-bottom-sheet-footer-actions">
        <modus-wc-button color="tertiary" size="sm" variant="outlined">Cancel</modus-wc-button>
        <modus-wc-button color="primary" size="sm" variant="filled">Save</modus-wc-button>
      </div>
    </div>
  </modus-wc-bottom-sheet>
</div>

<script>
  document.getElementById('app-bottom-sheet').header = {
    showBackButton: true,
    title: 'Title',
    subtitle: 'Subtitle',
    showCloseButton: true,
  };
<\/script>\`
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
      <style>
        .bottom-sheet-demo {
          border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
          contain: layout paint;
          height: 520px;
          width: 100%;
        }

        .bottom-sheet-demo .modus-wc-panel {
          max-height: 480px;
        }

        .modus-wc-bottom-sheet-footer-actions {
          align-items: center;
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          justify-content: flex-end;
          width: 100%;
        }

      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?visible="\${args.visible}"
          display-mode="\${ifDefined(args['display-mode'])}"
          drag-step-threshold="\${ifDefined(args['drag-step-threshold'])}"
          custom-class="\${ifDefined(args['custom-class'])}"
          style="width: 600px"
          .header="\${args.header}"
        >
          <div slot="content">
            <modus-wc-typography
              hierarchy="p"
              size="md"
              label="Main content area for forms, lists, or other components."
            ></modus-wc-typography>
          </div>

          <div slot="footer">
            <div class="modus-wc-bottom-sheet-footer-actions">
              <modus-wc-button color="tertiary" size="sm" variant="outlined">
                Cancel
              </modus-wc-button>
              <modus-wc-button color="primary" size="sm" variant="filled">
                Save
              </modus-wc-button>
            </div>
          </div>
        </modus-wc-bottom-sheet>
      </div>
    \`;
  }
}`,...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var u,p,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    header: {
      showBackButton: false,
      title: 'Bottom Sheet Title',
      subtitle: 'Drag the handle down to minimize or up to expand.',
      showCloseButton: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: ['Open the sheet from a control in your own page.', '', '- Put the **trigger button (and its click handler) in your page markup**.', '- Render \`<modus-wc-bottom-sheet>\` as a **direct child of \`<body>\`** so its \`position: fixed\` anchors it to the window.', '- Open with \`sheet.visible = true\` (optionally set \`sheet.displayMode\`); close with \`sheet.visible = false\`.', '', 'The dashed frame below is demo-only so the sheet stays bounded within this story.'].join('\\n')
      },
      source: {
        code: \`<!-- 1) Trigger button + handler live in YOUR page -->
<modus-wc-button id="open-bottom-sheet" color="primary" variant="filled">
  Open bottom sheet
</modus-wc-button>
<modus-wc-button id="minimize-bottom-sheet" color="tertiary" variant="outlined">
  Minimize
</modus-wc-button>

<!-- 2) Attach the sheet as a direct child of <body> so position: fixed
        pins it to the bottom of the window -->
<modus-wc-bottom-sheet id="app-bottom-sheet">
  <div slot="content">Main content area for forms, lists, or other components.</div>
  <div slot="footer">
    <modus-wc-button id="cancel-bottom-sheet" color="tertiary" variant="outlined">Cancel</modus-wc-button>
    <modus-wc-button id="save-bottom-sheet" color="primary" variant="filled">Save</modus-wc-button>
  </div>
</modus-wc-bottom-sheet>

<script>
  const sheet = document.getElementById('app-bottom-sheet');

  sheet.header = {
    showBackButton: false,
    title: 'Bottom Sheet Title',
    subtitle: 'Drag the handle down to minimize or up to expand.',
    showCloseButton: false,
  };

  // Open from the page button
  document
    .getElementById('open-bottom-sheet')
    .addEventListener('buttonClick', () => {
      sheet.visible = true;
      sheet.displayMode = 'default';
    });

  // Minimize from the page button
  document
    .getElementById('minimize-bottom-sheet')
    .addEventListener('buttonClick', () => {
      sheet.displayMode = 'minimized';
    });

  // Close from buttons inside the sheet
  ['cancel-bottom-sheet', 'save-bottom-sheet'].forEach((id) =>
    document
      .getElementById(id)
      .addEventListener('buttonClick', () => (sheet.visible = false))
  );

  // (Optional) react to state changes
  sheet.addEventListener('sheetVisibilityChange', (e) =>
    console.log('visible:', e.detail.visible)
  );
  sheet.addEventListener('displayModeChange', (e) =>
    console.log('display mode:', e.detail.displayMode)
  );
<\/script>\`
      }
    }
  },
  render: args => {
    const sheetId = 'demo-triggered-bottom-sheet';
    const closeSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) (sheet as HTMLElement & {
        visible: boolean;
      }).visible = false;
    };
    const minimizeSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) (sheet as HTMLElement & {
        displayMode: TBottomSheetDisplayMode;
      }).displayMode = 'minimized';
    };
    const restoreSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) {
        const typed = sheet as HTMLElement & {
          visible: boolean;
          displayMode: TBottomSheetDisplayMode;
        };
        typed.visible = true;
        typed.displayMode = 'default';
      }
    };

    // prettier-ignore
    return html\`
      <style>
        /* Demo-only frame: the component is position: fixed, which would escape
           to the page (and overlap other stories) on the docs canvas. 'contain'
           makes this frame a containing block for the sheet's position: fixed
           and clips it, so the sheet stays bounded WITHOUT changing its position
           value (overriding position to absolute caused a render jump). */
        .bottom-sheet-demo {
          border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
          contain: layout paint;
          height: 520px;
          width: 100%;
        }

        .bottom-sheet-demo .modus-wc-panel {
          max-height: 480px;
        }

        .modus-wc-bottom-sheet-footer-actions {
          align-items: center;
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          justify-content: flex-end;
          width: 100%;
        }

        .modus-wc-bottom-sheet-trigger-actions {
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          padding: var(--modus-wc-spacing-lg);
        }

      </style>
      <div class="bottom-sheet-demo">
      <div class="modus-wc-bottom-sheet-trigger-actions">
        <modus-wc-button
          color="primary"
          size="md"
          variant="filled"
          @buttonClick="\${restoreSheet}"
        >
          <modus-wc-icon name="expand_more" size="sm" decorative></modus-wc-icon>
          Open bottom sheet
        </modus-wc-button>
        <modus-wc-button
          color="tertiary"
          size="md"
          variant="outlined"
          @buttonClick="\${minimizeSheet}"
        >
          Minimize
        </modus-wc-button>
      </div>

      <modus-wc-bottom-sheet
        id="\${sheetId}"
        drag-step-threshold="\${ifDefined(args['drag-step-threshold'])}"
        style="width: 600px"
        .header="\${ifDefined(args.header)}"
      >
        <div slot="content">
          <modus-wc-typography
            hierarchy="p"
            size="md"
            label="Main content area for forms, lists, or other components."
          ></modus-wc-typography>
        </div>

        <div slot="footer">
          <div class="modus-wc-bottom-sheet-footer-actions">
            <modus-wc-button
              color="tertiary"
              size="sm"
              variant="outlined"
              @buttonClick="\${closeSheet}"
            >
              Cancel
            </modus-wc-button>
            <modus-wc-button
              color="primary"
              size="sm"
              variant="filled"
              @buttonClick="\${closeSheet}"
            >
              Save
            </modus-wc-button>
          </div>
        </div>
      </modus-wc-bottom-sheet>
      </div>
    \`;
  }
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var w,y,g;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    header: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Sheet with only the \`content\` slot — no header or footer. The drag handle still lets users minimize/expand. As with the other stories, attach the sheet to \`<body>\` in production and toggle \`visible\` from your own page control.'
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
      <style>
        /* Demo-only frame: the component is position: fixed, which would escape
           to the page (and overlap other stories) on the docs canvas. 'contain'
           makes this frame a containing block for the sheet's position: fixed
           and clips it, so the sheet stays bounded WITHOUT changing its position
           value (overriding position to absolute caused a render jump). */
        .bottom-sheet-demo {
          border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
          contain: layout paint;
          height: 520px;
          width: 100%;
        }

        .bottom-sheet-demo .modus-wc-panel {
          max-height: 480px;
        }

      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?visible="\${args.visible}"
          style="width: 600px"
          .header="\${args.header}"
        >
          <div slot="content">
            <modus-wc-typography
              hierarchy="p"
              size="md"
              label="Bottom sheet with content slot only."
            ></modus-wc-typography>
          </div>
        </modus-wc-bottom-sheet>
      </div>
    \`;
  }
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const I=["Default","TriggeredByButton","ContentOnly"];export{a as ContentOnly,i as Default,n as TriggeredByButton,I as __namedExportsOrder,S as default};
