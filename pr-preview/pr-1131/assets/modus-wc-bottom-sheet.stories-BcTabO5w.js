import{w as g}from"./decorator-D4YmxizW.js";import{b as r}from"./lit-element-DgBvYnzn.js";import{o}from"./if-defined-BnVFTJ4o.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const v={showBackButton:!0,title:"Title",subtitle:"Subtitle",showCloseButton:!0},m=`
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
`,k={title:"Components/Bottom Sheet",component:"modus-wc-bottom-sheet",args:{"custom-class":"",width:"600px",open:!0,expanded:!1,minimized:!1,"dismiss-threshold":.4,header:v},argTypes:{open:{control:"boolean",table:{defaultValue:{summary:"false"}}},expanded:{control:"boolean",table:{defaultValue:{summary:"false"}}},minimized:{control:"boolean",table:{defaultValue:{summary:"false"}}},"dismiss-threshold":{control:{type:"number",min:0,max:1,step:.05},table:{defaultValue:{summary:"0.4"}}},header:{control:"object"}},decorators:[g],parameters:{layout:"fullscreen",actions:{handles:["headerBackClick","headerCloseClick","expandedChange","minimizedChange","openChange"]}}},s={render:e=>r`
      <style>
        div[id^='story--components-bottom-sheet--default'] {
          height: 100vh;
        }
        ${m}
      </style>
        <modus-wc-bottom-sheet
          ?open="${e.open}"
          ?expanded="${e.expanded}"
          ?minimized="${e.minimized}"
          dismiss-threshold="${o(e["dismiss-threshold"])}"
          height="${o(e.height)}"
          width="${o(e.width)}"
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
    `},i={args:{header:{showBackButton:!1,title:"Bottom Sheet Title",subtitle:"Drag the handle down to minimize or up to expand.",showCloseButton:!1}},render:e=>{const n="demo-triggered-bottom-sheet",a=()=>{const t=document.getElementById(n);t&&(t.open=!1)};return r`
      <style>
        ${m}
      </style>
      <div class="modus-wc-bottom-sheet-trigger-actions">
        <modus-wc-button
          color="primary"
          size="md"
          variant="filled"
          @buttonClick="${()=>{const t=document.getElementById(n);t&&(t.open=!0,t.minimized=!1)}}"
        >
          <modus-wc-icon name="expand_more" size="sm" decorative></modus-wc-icon>
          Open bottom sheet
        </modus-wc-button>
        <modus-wc-button
          color="tertiary"
          size="md"
          variant="outlined"
          @buttonClick="${()=>{const t=document.getElementById(n);t&&(t.minimized=!0)}}"
        >
          Minimize
        </modus-wc-button>
      </div>

      <modus-wc-bottom-sheet
        id="${n}"
        dismiss-threshold="${o(e["dismiss-threshold"])}"
        height="${o(e.height)}"
        width="${o(e.width)}"
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
              @buttonClick="${a}"
            >
              Cancel
            </modus-wc-button>
            <modus-wc-button
              color="primary"
              size="sm"
              variant="filled"
              @buttonClick="${a}"
            >
              Save
            </modus-wc-button>
          </div>
        </div>
      </modus-wc-bottom-sheet>
    `}},d={args:{width:"400px",header:void 0},render:e=>r`
      <style>
        ${m}
      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?open="${e.open}"
          custom-class="${o(e["custom-class"])}"
          width="${o(e.width)}"
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
    `};var c,l,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          ?minimized="\${args.minimized}"
          dismiss-threshold="\${ifDefined(args['dismiss-threshold'])}"
          height="\${ifDefined(args.height)}"
          width="\${ifDefined(args.width)}"
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
    \`;
  }
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var u,p,w;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    header: {
      showBackButton: false,
      title: 'Bottom Sheet Title',
      subtitle: 'Drag the handle down to minimize or up to expand.',
      showCloseButton: false
    }
  },
  render: args => {
    const sheetId = 'demo-triggered-bottom-sheet';
    const closeSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) (sheet as HTMLElement & {
        open: boolean;
      }).open = false;
    };
    const minimizeSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) (sheet as HTMLElement & {
        minimized: boolean;
      }).minimized = true;
    };
    const restoreSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) {
        (sheet as HTMLElement & {
          open: boolean;
          minimized: boolean;
        }).open = true;
        (sheet as HTMLElement & {
          open: boolean;
          minimized: boolean;
        }).minimized = false;
      }
    };

    // prettier-ignore
    return html\`
      <style>
        \${bottomSheetDemoStyles}
      </style>
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
        dismiss-threshold="\${ifDefined(args['dismiss-threshold'])}"
        height="\${ifDefined(args.height)}"
        width="\${ifDefined(args.width)}"
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
    \`;
  }
}`,...(w=(p=i.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var b,y,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    width: '400px',
    header: undefined
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
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const I=["Default","TriggeredByButton","ContentOnly"];export{d as ContentOnly,s as Default,i as TriggeredByButton,I as __namedExportsOrder,k as default};
