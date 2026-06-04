import{b as a}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";const c=`
  .modus-wc-bottom-sheet-footer-actions {
    align-items: center;
    display: flex;
    gap: var(--modus-wc-spacing-sm);
    justify-content: flex-end;
    width: 100%;
  }
`,z={title:"Components/Bottom Sheet",component:"modus-wc-bottom-sheet",args:{"custom-class":"",width:"600px",open:!0,expanded:!1,"dismiss-threshold":.4},argTypes:{open:{control:"boolean",table:{defaultValue:{summary:"false"}}},expanded:{control:"boolean",table:{defaultValue:{summary:"false"}}},"dismiss-threshold":{control:{type:"number",min:0,max:1,step:.05},table:{defaultValue:{summary:"0.4"}}}},parameters:{layout:"fullscreen"}},s={render:e=>a`
      <style>
        div[id^='story--components-bottom-sheet--default'] {
         height: 100vh;
  }
        ${c}
      </style>
        <modus-wc-bottom-sheet
          ?open="${e.open}"
          ?expanded="${e.expanded}"
          dismiss-threshold="${t(e["dismiss-threshold"])}"
          height="${t(e.height)}"
          width="${t(e.width)}"
        >
          <div slot="header">
            <div class="modus-wc-bottom-sheet-header-top">
              <div class="modus-wc-bottom-sheet-header-start">
              <modus-wc-button color="tertiary" shape="square" size="sm" variant="borderless"> 
                <modus-wc-icon name="chevron_left" decorative></modus-wc-icon>
                </modus-wc-button>
                <div>
                  <modus-wc-typography
                    hierarchy="h4"
                    size="lg"
                    weight="semibold"
                    label="Title"
                  ></modus-wc-typography>
                  <modus-wc-typography
                    hierarchy="p"
                    size="xs"
                    label="Subtitle"
                  ></modus-wc-typography>
                </div>
              </div>
              <modus-wc-button
                aria-label="Close"
                color="tertiary"
                shape="square"
                size="sm"
                variant="borderless"
              >
                <modus-wc-icon name="close" decorative></modus-wc-icon>
              </modus-wc-button>
            </div>
          </div>

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
    `},n={render:e=>{const r="demo-triggered-bottom-sheet",g=()=>{const o=document.getElementById(r);o&&(o.open=!0)},i=()=>{const o=document.getElementById(r);o&&(o.open=!1)};return a`
      <style>
        ${c}
      </style>
      <div style="padding: var(--modus-wc-spacing-lg);">
        <modus-wc-button
          color="primary"
          size="md"
          variant="filled"
          @buttonClick="${g}"
        >
          <modus-wc-icon name="expand_more" size="sm" decorative></modus-wc-icon>
          Open bottom sheet
        </modus-wc-button>
      </div>

      <modus-wc-bottom-sheet
        id="${r}"
        dismiss-threshold="${t(e["dismiss-threshold"])}"
        height="${t(e.height)}"
        width="${t(e.width)}"
      >
        <div slot="header">
          <div class="modus-wc-bottom-sheet-header-top">
            <div class="modus-wc-bottom-sheet-header-start">
              <div>
                <modus-wc-typography
                  hierarchy="h4"
                  size="lg"
                  weight="semibold"
                  label="Title"
                ></modus-wc-typography>
                <modus-wc-typography
                  hierarchy="p"
                  size="xs"
                  label="Drag the handle down to dismiss or up to expand."
                ></modus-wc-typography>
              </div>
            </div>
            <modus-wc-button
              aria-label="Close"
              color="tertiary"
              shape="square"
              size="sm"
              variant="borderless"
              @buttonClick="${i}"
            >
              <modus-wc-icon name="close" decorative></modus-wc-icon>
            </modus-wc-button>
          </div>
        </div>

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
              @buttonClick="${i}"
            >
              Cancel
            </modus-wc-button>
            <modus-wc-button
              color="primary"
              size="sm"
              variant="filled"
              @buttonClick="${i}"
            >
              Save
            </modus-wc-button>
          </div>
        </div>
      </modus-wc-bottom-sheet>
    `}},d={args:{width:"400px"},render:e=>a`
      <style>
        ${c}
      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?open="${e.open}"
          custom-class="${t(e["custom-class"])}"
          width="${t(e.width)}"
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
    `};var m,l,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
      <style>
        div[id^='story--components-bottom-sheet--default'] {
         height: 100vh;
  }
        \${bottomSheetDemoStyles}
      </style>
        <modus-wc-bottom-sheet
          ?open="\${args.open}"
          ?expanded="\${args.expanded}"
          dismiss-threshold="\${ifDefined(args['dismiss-threshold'])}"
          height="\${ifDefined(args.height)}"
          width="\${ifDefined(args.width)}"
        >
          <div slot="header">
            <div class="modus-wc-bottom-sheet-header-top">
              <div class="modus-wc-bottom-sheet-header-start">
              <modus-wc-button color="tertiary" shape="square" size="sm" variant="borderless"> 
                <modus-wc-icon name="chevron_left" decorative></modus-wc-icon>
                </modus-wc-button>
                <div>
                  <modus-wc-typography
                    hierarchy="h4"
                    size="lg"
                    weight="semibold"
                    label="Title"
                  ></modus-wc-typography>
                  <modus-wc-typography
                    hierarchy="p"
                    size="xs"
                    label="Subtitle"
                  ></modus-wc-typography>
                </div>
              </div>
              <modus-wc-button
                aria-label="Close"
                color="tertiary"
                shape="square"
                size="sm"
                variant="borderless"
              >
                <modus-wc-icon name="close" decorative></modus-wc-icon>
              </modus-wc-button>
            </div>
          </div>

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
    \`;
  }
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var u,p,w;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const sheetId = 'demo-triggered-bottom-sheet';
    const openSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) (sheet as HTMLElement & {
        open: boolean;
      }).open = true;
    };
    const closeSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) (sheet as HTMLElement & {
        open: boolean;
      }).open = false;
    };

    // prettier-ignore
    return html\`
      <style>
        \${bottomSheetDemoStyles}
      </style>
      <div style="padding: var(--modus-wc-spacing-lg);">
        <modus-wc-button
          color="primary"
          size="md"
          variant="filled"
          @buttonClick="\${openSheet}"
        >
          <modus-wc-icon name="expand_more" size="sm" decorative></modus-wc-icon>
          Open bottom sheet
        </modus-wc-button>
      </div>

      <modus-wc-bottom-sheet
        id="\${sheetId}"
        dismiss-threshold="\${ifDefined(args['dismiss-threshold'])}"
        height="\${ifDefined(args.height)}"
        width="\${ifDefined(args.width)}"
      >
        <div slot="header">
          <div class="modus-wc-bottom-sheet-header-top">
            <div class="modus-wc-bottom-sheet-header-start">
              <div>
                <modus-wc-typography
                  hierarchy="h4"
                  size="lg"
                  weight="semibold"
                  label="Title"
                ></modus-wc-typography>
                <modus-wc-typography
                  hierarchy="p"
                  size="xs"
                  label="Drag the handle down to dismiss or up to expand."
                ></modus-wc-typography>
              </div>
            </div>
            <modus-wc-button
              aria-label="Close"
              color="tertiary"
              shape="square"
              size="sm"
              variant="borderless"
              @buttonClick="\${closeSheet}"
            >
              <modus-wc-icon name="close" decorative></modus-wc-icon>
            </modus-wc-button>
          </div>
        </div>

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
    \`;
  }
}`,...(w=(p=n.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var y,b,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    width: '400px'
  },
  render: args => {
    // prettier-ignore
    return html\`
      <style>
        \${bottomSheetDemoStyles}
      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?open="\${args.open}"
          custom-class="\${ifDefined(args['custom-class'])}"
          width="\${ifDefined(args.width)}"
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
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const S=["Default","TriggeredByButton","ContentOnly"];export{d as ContentOnly,s as Default,n as TriggeredByButton,S as __namedExportsOrder,z as default};
