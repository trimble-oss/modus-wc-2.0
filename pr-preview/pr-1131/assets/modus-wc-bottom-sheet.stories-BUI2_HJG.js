import{w as v}from"./decorator-D4YmxizW.js";import{b as m}from"./lit-element-DgBvYnzn.js";import{o}from"./if-defined-BnVFTJ4o.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const f={showBackButton:!0,title:"Title",subtitle:"Subtitle",showCloseButton:!0},k={title:"Components/Bottom Sheet",component:"modus-wc-bottom-sheet",args:{"custom-class":"",open:!0,expanded:!1,minimized:!1,"dismiss-threshold":.4,header:f},argTypes:{open:{control:"boolean",table:{defaultValue:{summary:"false"}}},expanded:{control:"boolean",table:{defaultValue:{summary:"false"}}},minimized:{control:"boolean",table:{defaultValue:{summary:"false"}}},"dismiss-threshold":{control:{type:"number",min:0,max:1,step:.05},table:{defaultValue:{summary:"0.4"}}},header:{control:"object"}},decorators:[v],parameters:{docs:{story:{inline:!1,height:"480px"}},layout:"fullscreen",actions:{handles:["headerBackClick","headerCloseClick","expandedChange","minimizedChange","openChange"]}}},i={args:{"custom-class":"bottom-sheet-width-px"},render:e=>m`
      <style>
        .modus-wc-bottom-sheet-footer-actions {
          align-items: center;
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          justify-content: flex-end;
          width: 100%;
        }

        /* Width is set via customClass on the host, clamped by the component's
           min-width: 25vw / max-width: 100vw. */
        .bottom-sheet-width-px {
          width: 600px;
        }
      </style>
        <modus-wc-bottom-sheet
          ?open="${e.open}"
          ?expanded="${e.expanded}"
          ?minimized="${e.minimized}"
          dismiss-threshold="${o(e["dismiss-threshold"])}"
          custom-class="${o(e["custom-class"])}"
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
    `},d={args:{"custom-class":"bottom-sheet-width-vw",header:{showBackButton:!1,title:"Bottom Sheet Title",subtitle:"Drag the handle down to minimize or up to expand.",showCloseButton:!1}},render:e=>{const s="demo-triggered-bottom-sheet",a=()=>{const t=document.getElementById(s);t&&(t.open=!1)};return m`
      <style>
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

        /* Width is set via customClass on the host, clamped by the component's
           min-width: 25vw / max-width: 100vw. */
        .bottom-sheet-width-vw {
          width: 50vw;
        }
      </style>
      <div class="modus-wc-bottom-sheet-trigger-actions">
        <modus-wc-button
          color="primary"
          size="md"
          variant="filled"
          @buttonClick="${()=>{const t=document.getElementById(s);t&&(t.open=!0,t.minimized=!1)}}"
        >
          <modus-wc-icon name="expand_more" size="sm" decorative></modus-wc-icon>
          Open bottom sheet
        </modus-wc-button>
        <modus-wc-button
          color="tertiary"
          size="md"
          variant="outlined"
          @buttonClick="${()=>{const t=document.getElementById(s);t&&(t.minimized=!0)}}"
        >
          Minimize
        </modus-wc-button>
      </div>

      <modus-wc-bottom-sheet
        id="${s}"
        dismiss-threshold="${o(e["dismiss-threshold"])}"
        custom-class="${o(e["custom-class"])}"
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
    `}},n={args:{"custom-class":"bottom-sheet-width-percent",header:void 0},render:e=>m`
      <style>
        /* Width is set via customClass on the host, clamped by the component's
           min-width: 25vw / max-width: 100vw. */
        .bottom-sheet-width-percent {
          width: 60%;
        }
      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?open="${e.open}"
          custom-class="${o(e["custom-class"])}"
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
    `};var r,c,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    'custom-class': 'bottom-sheet-width-px'
  },
  render: args => {
    // prettier-ignore
    return html\`
      <style>
        .modus-wc-bottom-sheet-footer-actions {
          align-items: center;
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          justify-content: flex-end;
          width: 100%;
        }

        /* Width is set via customClass on the host, clamped by the component's
           min-width: 25vw / max-width: 100vw. */
        .bottom-sheet-width-px {
          width: 600px;
        }
      </style>
        <modus-wc-bottom-sheet
          ?open="\${args.open}"
          ?expanded="\${args.expanded}"
          ?minimized="\${args.minimized}"
          dismiss-threshold="\${ifDefined(args['dismiss-threshold'])}"
          custom-class="\${ifDefined(args['custom-class'])}"
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
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var h,u,p;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    'custom-class': 'bottom-sheet-width-vw',
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

        /* Width is set via customClass on the host, clamped by the component's
           min-width: 25vw / max-width: 100vw. */
        .bottom-sheet-width-vw {
          width: 50vw;
        }
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
        custom-class="\${ifDefined(args['custom-class'])}"
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
}`,...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var w,b,y;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    'custom-class': 'bottom-sheet-width-percent',
    header: undefined
  },
  render: args => {
    // prettier-ignore
    return html\`
      <style>
        /* Width is set via customClass on the host, clamped by the component's
           min-width: 25vw / max-width: 100vw. */
        .bottom-sheet-width-percent {
          width: 60%;
        }
      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?open="\${args.open}"
          custom-class="\${ifDefined(args['custom-class'])}"
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
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const I=["Default","TriggeredByButton","ContentOnly"];export{n as ContentOnly,i as Default,d as TriggeredByButton,I as __namedExportsOrder,k as default};
