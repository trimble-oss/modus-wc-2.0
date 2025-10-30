import{w as y}from"./decorator-D4YmxizW.js";import{x as t}from"./lit-element-C8zulti1.js";import{o as c}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var u=Object.freeze,_=Object.defineProperty,x=(e,a)=>u(_(e,"raw",{value:u(e.slice())})),m;const E={title:"Components/Menu",component:"modus-wc-menu",args:{orientation:"vertical",size:"md"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[y],parameters:{actions:{handles:["menuFocusout"]}}},n={render:e=>t`
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
    `},s={render:()=>t`
<style>
  .menu-width {
    width: 400px;
  }
  .flex-row {
    display: flex;
    align-items: center;
  }
  .nested-row {
    padding-inline-start: 3rem;
  }
  .justify-end {
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
  custom-class="menu-width"
>
  <li>
    <div class="flex-row">
      <modus-wc-icon decorative="true" name="expand_more"></modus-wc-icon>
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div>Parent</div>
      <div class="justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="flex-row nested-row">
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div class="green-square"></div>
      <div>Child</div>
      <div class="justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="flex-row nested-row">
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Invisible icon" name="visibility_off"></modus-wc-icon>
      </modus-wc-button>
      <div class="red-square"></div>
      <div>Child</div>
      <div class="justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="flex-row">
      <modus-wc-icon decorative="true" name="chevron_right"></modus-wc-icon>
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div>Parent</div>
      <div class="justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
</modus-wc-menu>
    `},o={render:()=>{const e=a=>{const i=a.currentTarget.closest("li"),l=i==null?void 0:i.querySelector(".modus-wc-menu-dropdown");l&&l.classList.toggle("modus-wc-menu-dropdown-show")};return t(m||(m=x([`
      <style>
        .menu-width {
          width: 400px;
        }
        .modus-wc-menu-dropdown {
          list-style: none;
          margin-inline-start: 1.5rem;
        }
      </style>
      <script>
          const handleCollapseToggle = (e: Event) => {
          const clickedEl = e.currentTarget as HTMLElement;
          const parentLi = clickedEl.closest('li');
          const submenu = parentLi?.querySelector('.modus-wc-menu-dropdown');
          if (submenu) {
            submenu.classList.toggle('modus-wc-menu-dropdown-show');
          }
        };
      <\/script>
      <modus-wc-menu custom-class="menu-width">
        <li>
          <div
            class="modus-wc-menu-dropdown-toggle"
            @click=`,`
          >
            <modus-wc-icon
              decorative="true"
              name="bar_graph"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <span>Charts</span>
          </div>
          <ul class="modus-wc-menu-dropdown">
            <modus-wc-menu-item label="Bar Chart"></modus-wc-menu-item>
            <modus-wc-menu-item label="Line Chart"></modus-wc-menu-item>
          </ul>
        </li>
        <li>
          <div>
            <modus-wc-icon
              decorative="true"
              name="calendar"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <span>Calendar</span>
          </div>
        </li>
        <li>
          <div
            class="modus-wc-menu-dropdown-toggle"
            @click=`,`
          >
            <modus-wc-icon
              decorative="true"
              name="master_data"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <span>Reports</span>
          </div>
          <ul class="modus-wc-menu-dropdown">
            <modus-wc-menu-item label="Monthly Report"></modus-wc-menu-item>
            <modus-wc-menu-item label="Annual Report"></modus-wc-menu-item>
          </ul>
        </li>
      </modus-wc-menu>
    `])),e,e)}};var d,r,w;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(w=(r=n.parameters)==null?void 0:r.docs)==null?void 0:w.source}}};var b,v,p;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<style>
  .menu-width {
    width: 400px;
  }
  .flex-row {
    display: flex;
    align-items: center;
  }
  .nested-row {
    padding-inline-start: 3rem;
  }
  .justify-end {
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
  custom-class="menu-width"
>
  <li>
    <div class="flex-row">
      <modus-wc-icon decorative="true" name="expand_more"></modus-wc-icon>
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div>Parent</div>
      <div class="justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="flex-row nested-row">
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div class="green-square"></div>
      <div>Child</div>
      <div class="justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="flex-row nested-row">
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Invisible icon" name="visibility_off"></modus-wc-icon>
      </modus-wc-button>
      <div class="red-square"></div>
      <div>Child</div>
      <div class="justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
  <li>
    <div class="flex-row">
      <modus-wc-icon decorative="true" name="chevron_right"></modus-wc-icon>
      <modus-wc-button aria-label="Visible button" size="sm" shape="circle" variant="borderless">
        <modus-wc-icon aria-label="Visible icon" name="visibility_on"></modus-wc-icon>
      </modus-wc-button>
      <div>Parent</div>
      <div class="justify-end">
        <modus-wc-button aria-label="Actions button" size="sm" shape="circle" variant="borderless">
          <modus-wc-icon aria-label="Actions icon" name="more_vertical"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </li>
</modus-wc-menu>
    \`;
  }
}`,...(p=(v=s.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var h,g,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const handleCollapseToggle = (e: Event) => {
      const clickedEl = e.currentTarget as HTMLElement;
      const parentLi = clickedEl.closest('li');
      const submenu = parentLi?.querySelector('.modus-wc-menu-dropdown');
      if (submenu) {
        submenu.classList.toggle('modus-wc-menu-dropdown-show');
      }
    };
    return html\`
      <style>
        .menu-width {
          width: 400px;
        }
        .modus-wc-menu-dropdown {
          list-style: none;
          margin-inline-start: 1.5rem;
        }
      </style>
      <script>
          const handleCollapseToggle = (e: Event) => {
          const clickedEl = e.currentTarget as HTMLElement;
          const parentLi = clickedEl.closest('li');
          const submenu = parentLi?.querySelector('.modus-wc-menu-dropdown');
          if (submenu) {
            submenu.classList.toggle('modus-wc-menu-dropdown-show');
          }
        };
      <\/script>
      <modus-wc-menu custom-class="menu-width">
        <li>
          <div
            class="modus-wc-menu-dropdown-toggle"
            @click=\${handleCollapseToggle}
          >
            <modus-wc-icon
              decorative="true"
              name="bar_graph"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <span>Charts</span>
          </div>
          <ul class="modus-wc-menu-dropdown">
            <modus-wc-menu-item label="Bar Chart"></modus-wc-menu-item>
            <modus-wc-menu-item label="Line Chart"></modus-wc-menu-item>
          </ul>
        </li>
        <li>
          <div>
            <modus-wc-icon
              decorative="true"
              name="calendar"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <span>Calendar</span>
          </div>
        </li>
        <li>
          <div
            class="modus-wc-menu-dropdown-toggle"
            @click=\${handleCollapseToggle}
          >
            <modus-wc-icon
              decorative="true"
              name="master_data"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <span>Reports</span>
          </div>
          <ul class="modus-wc-menu-dropdown">
            <modus-wc-menu-item label="Monthly Report"></modus-wc-menu-item>
            <modus-wc-menu-item label="Annual Report"></modus-wc-menu-item>
          </ul>
        </li>
      </modus-wc-menu>
    \`;
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const M=["Default","CustomMenu","collapsibleMenu"];export{s as CustomMenu,n as Default,M as __namedExportsOrder,o as collapsibleMenu,E as default};
