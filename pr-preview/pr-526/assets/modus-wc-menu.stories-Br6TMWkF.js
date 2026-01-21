import{w as x}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-C8zulti1.js";import{o as c}from"./if-defined-yv6owfG8.js";import{c as C}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var l=Object.freeze,A=Object.defineProperty,q=(e,r)=>l(A(e,"raw",{value:l(e.slice())})),d;const I={title:"Components/Menu",component:"modus-wc-menu",args:{orientation:"vertical",size:"md"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[x],parameters:{actions:{handles:["menuFocusout"]}}},o={render:e=>i`
<modus-wc-menu
  aria-label="Menu"
  ?bordered=${e.bordered}
  custom-class=${c(e["custom-class"])}
  orientation=${c(e.orientation)}
  size=${c(e.size)}
>
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
    `},u={render:()=>i`
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
    `},t={render:()=>i(d||(d=q([`
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
    `])),!0,!0,!0,!0)},m={render:e=>{if(!customElements.get("menu-shadow-host")){const r=C({componentTag:"modus-wc-menu",propsMapper:(s,a)=>{const n=a;n.ariaLabel="Shadow DOM Menu",n.bordered=!!s.bordered,n.customClass=s["custom-class"]||"",n.orientation=s.orientation||"vertical",n.size=s.size||"md",a.querySelector("modus-wc-menu-item")||(a.innerHTML=`
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
          `)}});customElements.define("menu-shadow-host",r)}return i`<menu-shadow-host .props=${{...e}}></menu-shadow-host>`}};var b,w,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-menu
  aria-label="Menu"
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  orientation=\${ifDefined(args.orientation)}
  size=\${ifDefined(args.size)}
>
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
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var h,p,S;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(p=u.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var f,g,M;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(M=(g=t.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var y,z,_;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(z=m.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const H=["Default","CustomMenu","CollapsibleMenu","ShadowDomParent"];export{t as CollapsibleMenu,u as CustomMenu,o as Default,m as ShadowDomParent,H as __namedExportsOrder,I as default};
