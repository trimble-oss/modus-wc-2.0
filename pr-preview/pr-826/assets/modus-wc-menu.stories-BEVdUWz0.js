import{w as k}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-CucEn6F2.js";import{o as r}from"./if-defined-BiZP-SBN.js";import{c as $}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var l=Object.freeze,E=Object.defineProperty,D=(e,d)=>l(E(e,"raw",{value:l(e.slice())})),w;const W={title:"Components/Menu",component:"modus-wc-menu",args:{orientation:"vertical",size:"md"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[k],parameters:{actions:{handles:["menuFocusout"]}}},u={render:e=>o`
<modus-wc-menu
  aria-label="Menu"
  ?bordered=${e.bordered}
  custom-class=${r(e["custom-class"])}
  orientation=${r(e.orientation)}
  size=${r(e.size)}
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
    `},t={render:()=>o`
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
    `},m={render:()=>o(w||(w=D([`
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
    `])),!0,!0,!0,!0)},i={render:()=>o`
      <modus-wc-menu>
        <modus-wc-menu-item
          checkbox="true"
          has-submenu="true"
          label="Documents"
          value="documents"
        >
          <modus-wc-icon
            slot="start-icon"
            name="folder_closed"
            variant="solid"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=${!0}>
            <modus-wc-menu-item
              checkbox="true"
              label="Reports.pdf"
              value="reports"
            >
              <modus-wc-icon
                slot="start-icon"
                name="folder_closed"
                variant="solid"
              ></modus-wc-icon>
            </modus-wc-menu-item>
            <modus-wc-menu-item
              checkbox="true"
              has-submenu="true"
              label="Presentations"
              value="presentations"
            >
              <modus-wc-icon
                slot="start-icon"
                name="folder_closed"
                variant="solid"
              ></modus-wc-icon>
              <modus-wc-menu .isSubMenu=${!0}>
                <modus-wc-menu-item
                  checkbox="true"
                  label="Q1 Review.pptx"
                  value="q1-review"
                >
                  <modus-wc-icon
                    slot="start-icon"
                    name="folder_closed"
                    variant="solid"
                  ></modus-wc-icon>
                </modus-wc-menu-item>
                <modus-wc-menu-item
                  checkbox="true"
                  label="Annual Meeting.pptx"
                  value="annual-meeting"
                >
                  <modus-wc-icon
                    slot="start-icon"
                    name="folder_closed"
                    variant="solid"
                  ></modus-wc-icon>
                </modus-wc-menu-item>
              </modus-wc-menu>
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
        <modus-wc-menu-item
          checkbox="true"
          has-submenu="true"
          label="Projects"
          value="projects"
        >
          <modus-wc-icon
            slot="start-icon"
            name="folder_closed"
            variant="solid"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=${!0}>
            <modus-wc-menu-item
              checkbox="true"
              label="Website Redesign"
              value="website"
            >
              <modus-wc-icon
                slot="start-icon"
                name="description"
                variant="solid"
              ></modus-wc-icon>
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      </modus-wc-menu>
    `},c={render:e=>{if(!customElements.get("menu-shadow-host")){const d=$({componentTag:"modus-wc-menu",propsMapper:(s,a)=>{const n=a;n.ariaLabel="Shadow DOM Menu",n.bordered=!!s.bordered,n.customClass=s["custom-class"]||"",n.orientation=s.orientation||"vertical",n.size=s.size||"md",a.querySelector("modus-wc-menu-item")||(a.innerHTML=`
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
          `)}});customElements.define("menu-shadow-host",d)}return o`<menu-shadow-host .props=${{...e}}></menu-shadow-host>`}};var b,v,h;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(v=u.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var p,f,S;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var g,M,y;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(M=m.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var x,_,z;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  //prettier-ignore
  render: () => {
    return html\`
      <modus-wc-menu>
        <modus-wc-menu-item
          checkbox="true"
          has-submenu="true"
          label="Documents"
          value="documents"
        >
          <modus-wc-icon
            slot="start-icon"
            name="folder_closed"
            variant="solid"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=\${true}>
            <modus-wc-menu-item
              checkbox="true"
              label="Reports.pdf"
              value="reports"
            >
              <modus-wc-icon
                slot="start-icon"
                name="folder_closed"
                variant="solid"
              ></modus-wc-icon>
            </modus-wc-menu-item>
            <modus-wc-menu-item
              checkbox="true"
              has-submenu="true"
              label="Presentations"
              value="presentations"
            >
              <modus-wc-icon
                slot="start-icon"
                name="folder_closed"
                variant="solid"
              ></modus-wc-icon>
              <modus-wc-menu .isSubMenu=\${true}>
                <modus-wc-menu-item
                  checkbox="true"
                  label="Q1 Review.pptx"
                  value="q1-review"
                >
                  <modus-wc-icon
                    slot="start-icon"
                    name="folder_closed"
                    variant="solid"
                  ></modus-wc-icon>
                </modus-wc-menu-item>
                <modus-wc-menu-item
                  checkbox="true"
                  label="Annual Meeting.pptx"
                  value="annual-meeting"
                >
                  <modus-wc-icon
                    slot="start-icon"
                    name="folder_closed"
                    variant="solid"
                  ></modus-wc-icon>
                </modus-wc-menu-item>
              </modus-wc-menu>
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
        <modus-wc-menu-item
          checkbox="true"
          has-submenu="true"
          label="Projects"
          value="projects"
        >
          <modus-wc-icon
            slot="start-icon"
            name="folder_closed"
            variant="solid"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=\${true}>
            <modus-wc-menu-item
              checkbox="true"
              label="Website Redesign"
              value="website"
            >
              <modus-wc-icon
                slot="start-icon"
                name="description"
                variant="solid"
              ></modus-wc-icon>
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      </modus-wc-menu>
    \`;
  }
}`,...(z=(_=i.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var C,A,q;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(q=(A=c.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const H=["Default","CustomMenu","CollapsibleMenu","NestedMenu","ShadowDomParent"];export{m as CollapsibleMenu,t as CustomMenu,u as Default,i as NestedMenu,c as ShadowDomParent,H as __namedExportsOrder,W as default};
