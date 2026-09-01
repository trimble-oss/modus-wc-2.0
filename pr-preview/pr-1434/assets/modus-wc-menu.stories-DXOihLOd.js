import{w as A}from"./decorator-Cv9na35H.js";import{b as m}from"./lit-element-DgBvYnzn.js";import{o as u}from"./if-defined-BnVFTJ4o.js";import{n as L}from"./ref-Bw8asrgi.js";import{c as D}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";var d=Object.freeze,q=Object.defineProperty,j=(e,o)=>d(q(e,"raw",{value:d(e.slice())})),b;const J={title:"Components/Menu",component:"modus-wc-menu",args:{orientation:"vertical","selection-mode":"single",size:"md"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}},decorators:[A],parameters:{actions:{handles:["menuFocusout","menuSelectionChange","itemSelect"]}}},i={render:e=>m`
<modus-wc-menu
  aria-label="Menu"
  ?bordered=${e.bordered}
  custom-class=${u(e["custom-class"])}
  orientation=${u(e.orientation)}
  selection-mode=${u(e["selection-mode"])}
  size=${u(e.size)}
>
  <modus-wc-menu-item
    label="Extra Small"
    value="xs"
    size="xs"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Small"
    value="1"
    size="sm"
  ></modus-wc-menu-item>
  <modus-wc-menu-item label="Medium" value="2"></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Large"
    value="3"
    size="lg"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Extra Large"
    value="xl"
    size="xl"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Bordered"
    value="3"
    bordered="true"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="With Sub-label"
    value="3"
    sub-label="Sub-label"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Selected"
    value="3"
    selected="true"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="With Start Icon"
    value="3"
  >
    <modus-wc-icon slot="start-icon" name="info"></modus-wc-icon>
  </modus-wc-menu-item>
  <modus-wc-menu-item
    label="Disabled"
    value="3"
    disabled="true"
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},a={args:{"selection-mode":"multiple"},render:e=>{let o;const s=t=>{if(!o)return;const{selectedItems:n}=t.detail;o.textContent=n.length>0?`Selected: ${n.map(I=>I.getAttribute("value")).join(", ")}`:"Selected: none"};return m`
<modus-wc-menu
  aria-label="Menu"
  ?bordered=${e.bordered}
  custom-class=${u(e["custom-class"])}
  orientation=${u(e.orientation)}
  selection-mode=${u(e["selection-mode"])}
  size=${u(e.size)}
  @menuSelectionChange=${s}
>
  <modus-wc-menu-item
    label="Menu Item 1"
    value="1"
  ></modus-wc-menu-item>
  <modus-wc-menu-item label="Menu Item 2" value="2"></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Menu Item 3"
    value="3"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Menu Item 4"
    value="4"
    bordered="true"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Menu Item 5"
    value="5"
    sub-label="Menu Item 5 Sub-label"
  ></modus-wc-menu-item>
</modus-wc-menu>
<p ${L(t=>{o=t})} style="font-size: 0.875rem; margin-top: 0.5rem; color: var(--modus-wc-color-gray-6);">Selected: none</p>
    `}},c={render:()=>m`
<style>
  .custom-menu-width {
    width: 400px;
  }
  .custom-flex-row {
    display: flex;
    align-items: center;
  }
  .custom-nested-row {
    padding-inline-start: 3rem;
  }
  .custom-justify-end {
    margin-left: auto;
  }
  .green-square {
    height: 18px;
    width: 18px;
    background-color: green;
  }
  .red-square {
    height: 18px;
    width: 18px;
    background-color: red;
  }
</style>
<modus-wc-menu
  aria-label="Custom menu"
  custom-class="custom-menu-width"
>
  <li>
    <div class="custom-flex-row">
      <modus-wc-icon decorative="true" name="expand_more"></modus-wc-icon>
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div>Parent</div>
      <div class="custom-justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="custom-flex-row custom-nested-row">
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div class="green-square"></div>
      <div>Child</div>
      <div class="custom-justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="custom-flex-row custom-nested-row">
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Invisible icon" name="visibility_off"></modus-wc-icon>
      </modus-wc-button>
      <div class="red-square"></div>
      <div>Child</div>
      <div class="custom-justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="custom-flex-row">
      <modus-wc-icon decorative="true" name="chevron_right"></modus-wc-icon>
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div>Parent</div>
      <div class="custom-justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
</modus-wc-menu>
    `},l={render:()=>m(b||(b=j([`
      <style>
        .menu-width {
          width: 400px;
        }
      </style>
      <modus-wc-menu custom-class="menu-width">
        <modus-wc-menu-item
          label="Charts"
          .hasSubmenu=`,`
          id="charts-menu"
          value="charts"
        >
          <modus-wc-icon
            slot="start-icon"
            decorative="true"
            name="bar_graph"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=`,` id="charts-submenu">
            <modus-wc-menu-item label="Bar Chart" value="bar-chart">
            </modus-wc-menu-item>
            <modus-wc-menu-item label="Line Chart" value="line-chart">
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>

        <modus-wc-menu-item label="Calendar" value="calendar">
          <modus-wc-icon
            slot="start-icon"
            decorative="true"
            name="calendar"
          ></modus-wc-icon>
        </modus-wc-menu-item>

        <modus-wc-menu-item
          label="Reports"
          .hasSubmenu=`,`
          id="reports-menu"
          value="reports"
        >
          <modus-wc-icon
            slot="start-icon"
            decorative="true"
            name="master_data"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=`,` id="reports-submenu">
            <modus-wc-menu-item label="Monthly Report" value="monthly-report">
            </modus-wc-menu-item>
            <modus-wc-menu-item label="Annual Report" value="annual-report">
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      </modus-wc-menu>

      <script>
        // Adding this block to show how to set submenu properties via JS
        // document.addEventListener('DOMContentLoaded', () => {
        //   const chartsMenu = document.querySelector('#charts-menu');
        //   const reportsMenu = document.querySelector('#reports-menu');
        //   const chartsSubMenu = document.querySelector('#charts-submenu');
        //   const reportsSubMenu = document.querySelector('#reports-submenu');

        //   // Set hasSubmenu property for menu items with submenus
        //   [chartsMenu, reportsMenu].forEach((menuItem) => {
        //     if (menuItem) {
        //       menuItem.hasSubmenu = true;
        //     }
        //   });

        //   // Set isSubMenu for all submenu elements
        //   [chartsSubMenu, reportsSubMenu].forEach((submenu) => {
        //     if (submenu) {
        //       submenu.isSubMenu = true;
        //     }
        //   });
        // });
      <\/script>
    `])),!0,!0,!0,!0)},r={render:e=>{if(!customElements.get("menu-shadow-host")){const o=D({componentTag:"modus-wc-menu",propsMapper:(s,t)=>{const n=t;n.ariaLabel="Shadow DOM Menu",n.bordered=!!s.bordered,n.customClass=s["custom-class"]||"",n.orientation=s.orientation||"vertical",n.size=s.size||"md",t.querySelector("modus-wc-menu-item")||(t.innerHTML=`
              <modus-wc-menu-item
    label="Extra Small"
    value="xs"
    size="xs"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Small"
    value="1"
    size="sm"
  ></modus-wc-menu-item>
  <modus-wc-menu-item label="Medium" value="2"></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Large"
    value="3"
    size="lg"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Extra Large"
    value="xl"
    size="xl"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Bordered"
    value="3"
    bordered="true"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="With Sub-label"
    value="3"
    sub-label="Sub-label"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Selected"
    value="3"
    selected="true"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="With Start Icon"
    value="3"
  >
    <modus-wc-icon slot="start-icon" name="info"></modus-wc-icon>
  </modus-wc-menu-item>
  <modus-wc-menu-item
    label="Disabled"
    value="3"
    disabled="true"
  ></modus-wc-menu-item>
          `)}});customElements.define("menu-shadow-host",o)}return m`<menu-shadow-host .props=${{...e}}></menu-shadow-host>`}};var w,v,h;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-menu
  aria-label="Menu"
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  orientation=\${ifDefined(args.orientation)}
  selection-mode=\${ifDefined(args['selection-mode'])}
  size=\${ifDefined(args.size)}
>
  <modus-wc-menu-item
    label="Extra Small"
    value="xs"
    size="xs"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Small"
    value="1"
    size="sm"
  ></modus-wc-menu-item>
  <modus-wc-menu-item label="Medium" value="2"></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Large"
    value="3"
    size="lg"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Extra Large"
    value="xl"
    size="xl"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Bordered"
    value="3"
    bordered="true"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="With Sub-label"
    value="3"
    sub-label="Sub-label"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Selected"
    value="3"
    selected="true"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="With Start Icon"
    value="3"
  >
    <modus-wc-icon slot="start-icon" name="info"></modus-wc-icon>
  </modus-wc-menu-item>
  <modus-wc-menu-item
    label="Disabled"
    value="3"
    disabled="true"
  ></modus-wc-menu-item>
</modus-wc-menu>
    \`;
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var p,S,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'selection-mode': 'multiple'
  },
  render: args => {
    let outputEl: Element | undefined;
    const handleSelectionChange = (e: CustomEvent<{
      selectedItems: HTMLElement[];
    }>) => {
      if (!outputEl) return;
      const {
        selectedItems
      } = e.detail;
      outputEl.textContent = selectedItems.length > 0 ? \`Selected: \${selectedItems.map(i => i.getAttribute('value')).join(', ')}\` : 'Selected: none';
    };

    // prettier-ignore
    return html\`
<modus-wc-menu
  aria-label="Menu"
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  orientation=\${ifDefined(args.orientation)}
  selection-mode=\${ifDefined(args['selection-mode'])}
  size=\${ifDefined(args.size)}
  @menuSelectionChange=\${handleSelectionChange}
>
  <modus-wc-menu-item
    label="Menu Item 1"
    value="1"
  ></modus-wc-menu-item>
  <modus-wc-menu-item label="Menu Item 2" value="2"></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Menu Item 3"
    value="3"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Menu Item 4"
    value="4"
    bordered="true"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Menu Item 5"
    value="5"
    sub-label="Menu Item 5 Sub-label"
  ></modus-wc-menu-item>
</modus-wc-menu>
<p \${ref(el => {
      outputEl = el;
    })} style="font-size: 0.875rem; margin-top: 0.5rem; color: var(--modus-wc-color-gray-6);">Selected: none</p>
    \`;
  }
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var g,M,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<style>
  .custom-menu-width {
    width: 400px;
  }
  .custom-flex-row {
    display: flex;
    align-items: center;
  }
  .custom-nested-row {
    padding-inline-start: 3rem;
  }
  .custom-justify-end {
    margin-left: auto;
  }
  .green-square {
    height: 18px;
    width: 18px;
    background-color: green;
  }
  .red-square {
    height: 18px;
    width: 18px;
    background-color: red;
  }
</style>
<modus-wc-menu
  aria-label="Custom menu"
  custom-class="custom-menu-width"
>
  <li>
    <div class="custom-flex-row">
      <modus-wc-icon decorative="true" name="expand_more"></modus-wc-icon>
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div>Parent</div>
      <div class="custom-justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="custom-flex-row custom-nested-row">
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div class="green-square"></div>
      <div>Child</div>
      <div class="custom-justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="custom-flex-row custom-nested-row">
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Invisible icon" name="visibility_off"></modus-wc-icon>
      </modus-wc-button>
      <div class="red-square"></div>
      <div>Child</div>
      <div class="custom-justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="custom-flex-row">
      <modus-wc-icon decorative="true" name="chevron_right"></modus-wc-icon>
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div>Parent</div>
      <div class="custom-justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
</modus-wc-menu>
    \`;
  }
}`,...(x=(M=c.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var y,z,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        .menu-width {
          width: 400px;
        }
      </style>
      <modus-wc-menu custom-class="menu-width">
        <modus-wc-menu-item
          label="Charts"
          .hasSubmenu=\${true}
          id="charts-menu"
          value="charts"
        >
          <modus-wc-icon
            slot="start-icon"
            decorative="true"
            name="bar_graph"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=\${true} id="charts-submenu">
            <modus-wc-menu-item label="Bar Chart" value="bar-chart">
            </modus-wc-menu-item>
            <modus-wc-menu-item label="Line Chart" value="line-chart">
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>

        <modus-wc-menu-item label="Calendar" value="calendar">
          <modus-wc-icon
            slot="start-icon"
            decorative="true"
            name="calendar"
          ></modus-wc-icon>
        </modus-wc-menu-item>

        <modus-wc-menu-item
          label="Reports"
          .hasSubmenu=\${true}
          id="reports-menu"
          value="reports"
        >
          <modus-wc-icon
            slot="start-icon"
            decorative="true"
            name="master_data"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=\${true} id="reports-submenu">
            <modus-wc-menu-item label="Monthly Report" value="monthly-report">
            </modus-wc-menu-item>
            <modus-wc-menu-item label="Annual Report" value="annual-report">
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      </modus-wc-menu>

      <script>
        // Adding this block to show how to set submenu properties via JS
        // document.addEventListener('DOMContentLoaded', () => {
        //   const chartsMenu = document.querySelector('#charts-menu');
        //   const reportsMenu = document.querySelector('#reports-menu');
        //   const chartsSubMenu = document.querySelector('#charts-submenu');
        //   const reportsSubMenu = document.querySelector('#reports-submenu');

        //   // Set hasSubmenu property for menu items with submenus
        //   [chartsMenu, reportsMenu].forEach((menuItem) => {
        //     if (menuItem) {
        //       menuItem.hasSubmenu = true;
        //     }
        //   });

        //   // Set isSubMenu for all submenu elements
        //   [chartsSubMenu, reportsSubMenu].forEach((submenu) => {
        //     if (submenu) {
        //       submenu.isSubMenu = true;
        //     }
        //   });
        // });
      <\/script>
    \`;
  }
}`,...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var E,_,$;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for menu component
    if (!customElements.get('menu-shadow-host')) {
      const MenuShadowHost = createShadowHostClass<MenuArgs>({
        componentTag: 'modus-wc-menu',
        propsMapper: (v: MenuArgs, el: HTMLElement) => {
          const menuEl = el as unknown as {
            ariaLabel: string;
            bordered: boolean;
            customClass: string;
            orientation: string;
            size: string;
          };
          menuEl.ariaLabel = 'Shadow DOM Menu';
          menuEl.bordered = Boolean(v.bordered);
          menuEl.customClass = v['custom-class'] || '';
          menuEl.orientation = v.orientation || 'vertical';
          menuEl.size = v.size || 'md';

          // Only set innerHTML once on initial creation
          if (!el.querySelector('modus-wc-menu-item')) {
            el.innerHTML = \`
              <modus-wc-menu-item
    label="Extra Small"
    value="xs"
    size="xs"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Small"
    value="1"
    size="sm"
  ></modus-wc-menu-item>
  <modus-wc-menu-item label="Medium" value="2"></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Large"
    value="3"
    size="lg"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Extra Large"
    value="xl"
    size="xl"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Bordered"
    value="3"
    bordered="true"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="With Sub-label"
    value="3"
    sub-label="Sub-label"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Selected"
    value="3"
    selected="true"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="With Start Icon"
    value="3"
  >
    <modus-wc-icon slot="start-icon" name="info"></modus-wc-icon>
  </modus-wc-menu-item>
  <modus-wc-menu-item
    label="Disabled"
    value="3"
    disabled="true"
  ></modus-wc-menu-item>
          \`;
          }
        }
      });
      customElements.define('menu-shadow-host', MenuShadowHost);
    }
    return html\`<menu-shadow-host .props=\${{
      ...args
    }}></menu-shadow-host>\`;
  }
}`,...($=(_=r.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const F=["Default","MultiSelect","CustomMenu","CollapsibleMenu","ShadowDomParent"];export{l as CollapsibleMenu,c as CustomMenu,i as Default,a as MultiSelect,r as ShadowDomParent,F as __namedExportsOrder,J as default};
