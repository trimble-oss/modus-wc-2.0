import{w as L}from"./decorator-D4YmxizW.js";import{x as t}from"./lit-element-C8zulti1.js";import{o as c}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var v=Object.freeze,z=Object.defineProperty,k=(e,r)=>v(z(e,"raw",{value:v(e.slice())})),p;const q={title:"Components/Menu",component:"modus-wc-menu",args:{orientation:"vertical",size:"md"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[L],parameters:{actions:{handles:["menuFocusout"]}}},n={render:e=>t`
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
    `},i={render:()=>t`
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
    `},o={render:()=>{const e=r=>{var w;const u=r.currentTarget,l=u.closest("li");if(!l)return;const a=u.querySelector(".dropdown-toggle");if(!a)return;const m=a.getAttribute("name")==="expand_more";a.setAttribute("name",m?"expand_less":"expand_more");const d=(w=l.nextElementSibling)!=null&&w.classList.contains("children-container")?l.nextElementSibling:null;d&&(d.classList.toggle("hidden"),d.setAttribute("aria-hidden",m?"false":"true"))};return t(p||(p=k([`
      <style>
        .children-container {
          transition: height 0.2s ease-out;
          padding-inline-start: 1rem;
        }
        .collapse-icon {
          min-width: 24px;
          padding-inline-start: 0.2rem;
        }
        .dropdown-menu {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .flex-row {
          align-items: center;
          display: flex;
          gap: 1.3rem;
          padding: 0.8rem 0.25rem;
          padding-inline-start: 1rem;
          cursor: pointer;
        }
        .hidden {
          display: none;
        }
        .justify-end {
          margin-left: auto;
        }
        .menu-width {
          width: 400px;
        }
        .nested-row {
          padding-inline-start: 2.5rem;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      </style>
      <script>
        function handleCollapseToggle(e) {
          const clickedEl = e.currentTarget;
          const parentLi = clickedEl.closest('li');
          if (!parentLi) return;

          // Find the icon element that needs to be toggled
          const iconEl = clickedEl.querySelector('.dropdown-toggle');
          if (!iconEl) return;

          // Toggle between expand_more and expand_less icons
          const isExpanded = iconEl.getAttribute('name') === 'expand_more';
          iconEl.setAttribute(
            'name',
            isExpanded ? 'expand_less' : 'expand_more'
          );

          // Find and toggle children visibility
          const childContainer =
            parentLi.nextElementSibling?.classList.contains(
              'children-container'
            )
              ? parentLi.nextElementSibling
              : null;

          if (childContainer) {
            childContainer.classList.toggle('hidden');
            childContainer.setAttribute(
              'aria-hidden',
              !isExpanded ? 'true' : 'false'
            );
          }
        }
      <\/script>
      <modus-wc-menu aria-label="Collapsible menu" custom-class="menu-width">
        <!-- Charts group -->
        <li>
          <div class="flex-row" @click=`,`>
            <modus-wc-icon
              decorative="true"
              name="bar_graph"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <div class="dropdown-menu">Charts</div>
            <div class="justify-end">
              <modus-wc-icon
                decorative="true"
                name="expand_more"
                class="collapse-icon dropdown-toggle"
              ></modus-wc-icon>
            </div>
          </div>
        </li>
        <li class="children-container hidden" aria-hidden="true">
          <ul>
            <li>
              <div class="flex-row nested-row">
                <div>Bar Chart</div>
              </div>
            </li>
            <li>
              <div class="flex-row nested-row">
                <div>Line Chart</div>
              </div>
            </li>
          </ul>
        </li>

        <!-- Calendar item (no children) -->
        <li>
          <div class="flex-row">
            <modus-wc-icon
              decorative="true"
              name="calendar"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <div class="dropdown-menu">Calendar</div>
          </div>
        </li>

        <!-- Maps group -->
        <li>
          <div class="flex-row" @click=`,`>
            <modus-wc-icon
              decorative="true"
              name="compass"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <div class="dropdown-menu">Maps</div>
            <div class="justify-end">
              <modus-wc-icon
                decorative="true"
                name="expand_more"
                class="collapse-icon dropdown-toggle"
              ></modus-wc-icon>
            </div>
          </div>
        </li>
        <li class="children-container hidden" aria-hidden="true">
          <ul>
            <li>
              <div class="flex-row nested-row">
                <div>Map 1</div>
              </div>
            </li>
            <li>
              <div class="flex-row nested-row" @click=`,`>
                <div>Map 2</div>
                <div class="justify-end">
                  <modus-wc-icon
                    decorative="true"
                    name="expand_more"
                    class="collapse-icon dropdown-toggle"
                  ></modus-wc-icon>
                </div>
              </div>
            </li>
            <li class="children-container hidden" aria-hidden="true">
              <ul>
                <li>
                  <div class="flex-row" style="padding-inline-start: 4rem;">
                    <div>Map 2.1</div>
                  </div>
                </li>
                <li>
                  <div class="flex-row" style="padding-inline-start: 4rem;">
                    <div>Map 2.2</div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div class="flex-row nested-row">
                <div>Map 3</div>
              </div>
            </li>
          </ul>
        </li>

        <!-- Reports group -->
        <li>
          <div class="flex-row" @click=`,`>
            <modus-wc-icon
              decorative="true"
              name="master_data"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <div class="dropdown-menu">Reports</div>
            <div class="justify-end">
              <modus-wc-icon
                decorative="true"
                name="expand_more"
                class="collapse-icon dropdown-toggle"
              ></modus-wc-icon>
            </div>
          </div>
        </li>
        <li class="children-container hidden" aria-hidden="true">
          <ul>
            <li>
              <div class="flex-row nested-row">
                <div>Daily Report</div>
              </div>
            </li>
            <li>
              <div class="flex-row nested-row">
                <div>Weekly Report</div>
              </div>
            </li>
            <li>
              <div class="flex-row nested-row">
                <div>Monthly Report</div>
              </div>
            </li>
          </ul>
        </li>
      </modus-wc-menu>
    `])),e,e,e,e)}},s={render:()=>t`
      <style>
        .menu-width {
          width: 400px;
        }
      </style>
      <modus-wc-menu custom-class="menu-width">
        <modus-wc-menu-item label="Charts" .hasSubmenu=${!0} value="charts">
          <modus-wc-icon
            slot="start-icon"
            decorative="true"
            name="bar_graph"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=${!0}>
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

        <modus-wc-menu-item label="Reports" .hasSubmenu=${!0} value="reports">
          <modus-wc-icon
            slot="start-icon"
            decorative="true"
            name="master_data"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=${!0}>
            <modus-wc-menu-item label="Monthly Report" value="monthly-report">
            </modus-wc-menu-item>
            <modus-wc-menu-item label="Annual Report" value="annual-report">
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      </modus-wc-menu>
    `};var b,h,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var _,C,E;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const handleCollapseToggle = (e: MouseEvent) => {
      const clickedEl = e.currentTarget as HTMLElement;
      const parentLi = clickedEl.closest('li');
      if (!parentLi) return;

      // Find the icon element that needs to be toggled
      const iconEl = clickedEl.querySelector('.dropdown-toggle') as HTMLElement;
      if (!iconEl) return;

      // Toggle between expand_more and expand_less icons
      const isExpanded = iconEl.getAttribute('name') === 'expand_more';
      iconEl.setAttribute('name', isExpanded ? 'expand_less' : 'expand_more');

      // Find and toggle children visibility
      const childContainer = parentLi.nextElementSibling?.classList.contains('children-container') ? parentLi.nextElementSibling as HTMLElement : null;
      if (childContainer) {
        childContainer.classList.toggle('hidden');
        childContainer.setAttribute('aria-hidden', !isExpanded ? 'true' : 'false');
      }
    };
    return html\`
      <style>
        .children-container {
          transition: height 0.2s ease-out;
          padding-inline-start: 1rem;
        }
        .collapse-icon {
          min-width: 24px;
          padding-inline-start: 0.2rem;
        }
        .dropdown-menu {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .flex-row {
          align-items: center;
          display: flex;
          gap: 1.3rem;
          padding: 0.8rem 0.25rem;
          padding-inline-start: 1rem;
          cursor: pointer;
        }
        .hidden {
          display: none;
        }
        .justify-end {
          margin-left: auto;
        }
        .menu-width {
          width: 400px;
        }
        .nested-row {
          padding-inline-start: 2.5rem;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      </style>
      <script>
        function handleCollapseToggle(e) {
          const clickedEl = e.currentTarget;
          const parentLi = clickedEl.closest('li');
          if (!parentLi) return;

          // Find the icon element that needs to be toggled
          const iconEl = clickedEl.querySelector('.dropdown-toggle');
          if (!iconEl) return;

          // Toggle between expand_more and expand_less icons
          const isExpanded = iconEl.getAttribute('name') === 'expand_more';
          iconEl.setAttribute(
            'name',
            isExpanded ? 'expand_less' : 'expand_more'
          );

          // Find and toggle children visibility
          const childContainer =
            parentLi.nextElementSibling?.classList.contains(
              'children-container'
            )
              ? parentLi.nextElementSibling
              : null;

          if (childContainer) {
            childContainer.classList.toggle('hidden');
            childContainer.setAttribute(
              'aria-hidden',
              !isExpanded ? 'true' : 'false'
            );
          }
        }
      <\/script>
      <modus-wc-menu aria-label="Collapsible menu" custom-class="menu-width">
        <!-- Charts group -->
        <li>
          <div class="flex-row" @click=\${handleCollapseToggle}>
            <modus-wc-icon
              decorative="true"
              name="bar_graph"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <div class="dropdown-menu">Charts</div>
            <div class="justify-end">
              <modus-wc-icon
                decorative="true"
                name="expand_more"
                class="collapse-icon dropdown-toggle"
              ></modus-wc-icon>
            </div>
          </div>
        </li>
        <li class="children-container hidden" aria-hidden="true">
          <ul>
            <li>
              <div class="flex-row nested-row">
                <div>Bar Chart</div>
              </div>
            </li>
            <li>
              <div class="flex-row nested-row">
                <div>Line Chart</div>
              </div>
            </li>
          </ul>
        </li>

        <!-- Calendar item (no children) -->
        <li>
          <div class="flex-row">
            <modus-wc-icon
              decorative="true"
              name="calendar"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <div class="dropdown-menu">Calendar</div>
          </div>
        </li>

        <!-- Maps group -->
        <li>
          <div class="flex-row" @click=\${handleCollapseToggle}>
            <modus-wc-icon
              decorative="true"
              name="compass"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <div class="dropdown-menu">Maps</div>
            <div class="justify-end">
              <modus-wc-icon
                decorative="true"
                name="expand_more"
                class="collapse-icon dropdown-toggle"
              ></modus-wc-icon>
            </div>
          </div>
        </li>
        <li class="children-container hidden" aria-hidden="true">
          <ul>
            <li>
              <div class="flex-row nested-row">
                <div>Map 1</div>
              </div>
            </li>
            <li>
              <div class="flex-row nested-row" @click=\${handleCollapseToggle}>
                <div>Map 2</div>
                <div class="justify-end">
                  <modus-wc-icon
                    decorative="true"
                    name="expand_more"
                    class="collapse-icon dropdown-toggle"
                  ></modus-wc-icon>
                </div>
              </div>
            </li>
            <li class="children-container hidden" aria-hidden="true">
              <ul>
                <li>
                  <div class="flex-row" style="padding-inline-start: 4rem;">
                    <div>Map 2.1</div>
                  </div>
                </li>
                <li>
                  <div class="flex-row" style="padding-inline-start: 4rem;">
                    <div>Map 2.2</div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div class="flex-row nested-row">
                <div>Map 3</div>
              </div>
            </li>
          </ul>
        </li>

        <!-- Reports group -->
        <li>
          <div class="flex-row" @click=\${handleCollapseToggle}>
            <modus-wc-icon
              decorative="true"
              name="master_data"
              class="collapse-icon icon-left"
            ></modus-wc-icon>
            <div class="dropdown-menu">Reports</div>
            <div class="justify-end">
              <modus-wc-icon
                decorative="true"
                name="expand_more"
                class="collapse-icon dropdown-toggle"
              ></modus-wc-icon>
            </div>
          </div>
        </li>
        <li class="children-container hidden" aria-hidden="true">
          <ul>
            <li>
              <div class="flex-row nested-row">
                <div>Daily Report</div>
              </div>
            </li>
            <li>
              <div class="flex-row nested-row">
                <div>Weekly Report</div>
              </div>
            </li>
            <li>
              <div class="flex-row nested-row">
                <div>Monthly Report</div>
              </div>
            </li>
          </ul>
        </li>
      </modus-wc-menu>
    \`;
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,M,A;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        .menu-width {
          width: 400px;
        }
      </style>
      <modus-wc-menu custom-class="menu-width">
        <modus-wc-menu-item label="Charts" .hasSubmenu=\${true} value="charts">
          <modus-wc-icon
            slot="start-icon"
            decorative="true"
            name="bar_graph"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=\${true}>
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

        <modus-wc-menu-item label="Reports" .hasSubmenu=\${true} value="reports">
          <modus-wc-icon
            slot="start-icon"
            decorative="true"
            name="master_data"
          ></modus-wc-icon>
          <modus-wc-menu .isSubMenu=\${true}>
            <modus-wc-menu-item label="Monthly Report" value="monthly-report">
            </modus-wc-menu-item>
            <modus-wc-menu-item label="Annual Report" value="annual-report">
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      </modus-wc-menu>
    \`;
  }
}`,...(A=(M=s.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const D=["Default","CustomMenu","CollapsibleMenu","WithSubmenu"];export{o as CollapsibleMenu,i as CustomMenu,n as Default,s as WithSubmenu,D as __namedExportsOrder,q as default};
