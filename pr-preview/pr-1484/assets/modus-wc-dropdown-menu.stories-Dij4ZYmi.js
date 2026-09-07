import{w as j}from"./decorator-Cv9na35H.js";import{b as c}from"./lit-element-DgBvYnzn.js";import{o}from"./if-defined-BnVFTJ4o.js";import{n as q}from"./ref-Bw8asrgi.js";import{c as F}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";var S=Object.freeze,H=Object.defineProperty,k=(e,s)=>S(H(e,"raw",{value:S(e.slice())})),E;const te={title:"Components/Dropdown Menu",component:"modus-wc-dropdown-menu",args:{"button-aria-label":"Dropdown menu button","button-color":"primary","button-shape":"rectangle","button-size":"md","button-variant":"filled",disabled:!1,"menu-bordered":!0,"menu-offset":14,"menu-placement":"bottom-start","menu-size":"md","menu-strategy":"absolute","menu-visible":!1},argTypes:{"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-size":{control:{type:"select"},options:["xs","sm","md","lg","xl"]},"button-shape":{control:{type:"select"},options:["circle","ellipse","rectangle","square"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"menu-placement":{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"menu-size":{control:{type:"select"},options:["sm","md","lg"]},"menu-strategy":{control:{type:"select"},options:["absolute","fixed"]}},decorators:[j],parameters:{actions:{handles:["menuVisibilityChange","menuLoad"]}}},N={render:e=>{let s="";const t=d=>{s=d.detail.value;const n=document.querySelector("#selected-value");n&&(n.textContent=s);const l=d.target.closest("modus-wc-dropdown-menu");l&&(l.menuVisible=!1)};return c(E||(E=k([`
<style>
  /* Storybook styling */
  div#story--components-dropdown-menu--default--primary-inner {
    display: flex;
    align-items: center;
    height: 240px;
  }

  [slot="button"] {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .value {
    font-size: 14px;
    padding-top: 12px;
  }
</style>



<modus-wc-dropdown-menu
  button-aria-label=`,`
  button-color=`,`
  button-shape=`,`
  button-size=`,`
  button-variant=`,`
  custom-class=`,`
  ?disabled=`,`
  ?menu-bordered=`,`
  menu-offset=`,`
  menu-placement=`,`
  menu-size=`,`
  menu-strategy=`,`
  ?menu-visible=`,`
>
  <div slot="button">
    Button
    <modus-wc-icon name="expand_more" size="sm" />
  </div>

  <div slot="menu">
    <modus-wc-menu-item label="Item One" value="1" @itemSelect=`,`></modus-wc-menu-item>
    <modus-wc-menu-item label="Item Two" value="2" @itemSelect=`,` /></modus-wc-menu-item>
    <modus-wc-menu-item label="Item Three" value="3" @itemSelect=`,` /></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>
<script>
  // //  Adding this block to handle menu item selection to update a label and close the dropdown via JS.
  // let selectedValue = '';

  // const handleItemSelect = (event) => {
  // //  Update the "Selected Value" label
  //   selectedValue = event.detail.value;
  //   const displayElement = document.querySelector('#selected-value');
  //   if (displayElement) {
  //     displayElement.textContent = selectedValue;
  //   }

  //   // Close the dropdown menu when an item is selected
  //   const dropdownMenu = event.target;
  //   const dropdownMenuElement = dropdownMenu.closest(
  //     'modus-wc-dropdown-menu'
  //   );
  //   if (dropdownMenuElement) {
  //     dropdownMenuElement.menuVisible = false;
  //   }
  // };
  //  const menuItems = document.querySelectorAll('modus-wc-menu-item');
  //   menuItems.forEach(item => {
  //     item.addEventListener('itemSelect', handleItemSelect);
  //   });
<\/script>

<div class="value">
  Selected Value:
  <span id="selected-value"></span>
</div>
    `])),o(e["button-aria-label"]),o(e["button-color"]),o(e["button-shape"]),o(e["button-size"]),o(e["button-variant"]),o(e["custom-class"]),e.disabled,e["menu-bordered"],o(e["menu-offset"]),o(e["menu-placement"]),o(e["menu-size"]),o(e["menu-strategy"]),e["menu-visible"],t,t,t)}},p={...N},b={render:()=>c`
<style>
  /* Storybook styling */
  div[id^='story--components-dropdown-menu--icon-only-dropdown-menu'] {
    height: 60px;
  }
</style>

<modus-wc-dropdown-menu button-shape="square">
  <div slot="button">
    <modus-wc-icon decorative name="more_vertical"></modus-wc-icon>
  </div>
  <div slot="menu">
    <modus-wc-menu-item label="Item One"></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>
    `},w={args:{"menu-bordered":!1,"menu-placement":"bottom-end","menu-size":"sm"},parameters:{actions:{handles:["menuVisibilityChange","itemSelect"]},docs:{source:{code:`
<modus-wc-dropdown-menu
  button-variant="filled"
  button-color="primary"
  menu-placement="bottom-end"
  menu-size="sm"
  id="tree-dropdown-menu"
>
  <div slot="button">
    Browse
    <modus-wc-icon name="expand_more" size="sm"></modus-wc-icon>
  </div>
    <modus-wc-tree-menu slot="menu" aria-label="Tree menu" bordered="true" size="sm">
      <modus-wc-tree-item label="Projects" value="projects"></modus-wc-tree-item>
      <modus-wc-tree-item label="Explorer" value="explorer"></modus-wc-tree-item>
    </modus-wc-tree-menu>
</modus-wc-dropdown-menu>

<div>
  Selected Value: <span id="tree-dropdown-selected-value"></span>
</div>
<script>
  const dropdown = document.getElementById('tree-dropdown-menu');
  const display = document.getElementById('tree-dropdown-selected-value');

  dropdown.addEventListener('itemSelect', (e) => {
    display.textContent = e.detail.value;
    dropdown.menuVisible = false;
  });
<\/script>
`}}},render:e=>{const s=t=>{const d=document.querySelector("#tree-dropdown-selected-value");d&&(d.textContent=t.detail.value);const n=t.target.closest("modus-wc-dropdown-menu");n&&(n.menuVisible=!1)};return c`
<style>
  div[id^='story--components-dropdown-menu--with-tree-menu'] {
    display: flex;
    align-items: center;
    height: 320px;
  }

  [slot='button'] {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .value {
    font-size: 14px;
    padding-top: 12px;
  }
</style>

<modus-wc-dropdown-menu
  button-aria-label=${o(e["button-aria-label"])}
  button-color=${o(e["button-color"])}
  button-shape=${o(e["button-shape"])}
  button-size=${o(e["button-size"])}
  button-variant=${o(e["button-variant"])}
  custom-class=${o(e["custom-class"])}
  ?disabled=${e.disabled}
  ?menu-bordered=${e["menu-bordered"]}
  menu-offset=${o(e["menu-offset"])}
  menu-placement=${o(e["menu-placement"])}
  menu-size=${o(e["menu-size"])}
  menu-strategy=${o(e["menu-strategy"])}
  ?menu-visible=${e["menu-visible"]}
>
  <div slot="button">
    Browse
    <modus-wc-icon name="expand_more" size="sm"></modus-wc-icon>
  </div>
    <modus-wc-tree-menu slot="menu" aria-label="Tree menu" bordered="true" size="sm">
      <modus-wc-tree-item
        label="Projects"
        value="projects"
        @itemSelect=${s}
      ></modus-wc-tree-item>
      <modus-wc-tree-item
        label="Explorer"
        value="explorer"
        @itemSelect=${s}
      ></modus-wc-tree-item>
    </modus-wc-tree-menu>
</modus-wc-dropdown-menu>

<div class="value">
  Selected Value:
  <span id="tree-dropdown-selected-value"></span>
</div>
    `}},W=()=>[{label:"Fetched One",value:"1"},{label:"Fetched Two",value:"2"},{label:"Fetched Three",value:"3"}],J={menuItems:[],pendingLoad:!1},v={parameters:{actions:{handles:["menuLoad","menuVisibilityChange","itemSelect"]},docs:{source:{code:`
<modus-wc-dropdown-menu
  id="lazy-dropdown"
  button-aria-label="Open lazy menu"
  button-variant="filled"
  button-color="primary"
  button-size="sm"
>
  <div slot="button">
    Load on open
    <modus-wc-icon decorative name="expand_more" size="xs"></modus-wc-icon>
  </div>
</modus-wc-dropdown-menu>

<script>
  const dropdown = document.getElementById('lazy-dropdown');

  // Fetch menu items on first open, with a deliberate delay so the spinner is
  // visible. Adding menu items to slot="menu" ends the loading state.
  dropdown.addEventListener('menuLoad', () => {
    window.setTimeout(() => {
      const menuSlot = document.createElement('div');
      menuSlot.setAttribute('slot', 'menu');
      menuSlot.innerHTML = \`
        <modus-wc-menu-item label="Fetched One" value="1"></modus-wc-menu-item>
        <modus-wc-menu-item label="Fetched Two" value="2"></modus-wc-menu-item>
      \`;
      dropdown.appendChild(menuSlot);
      dropdown.refreshLazyMenu();
    }, 1200);
  });
<\/script>
`}}},render:()=>{let e;const s=J,t=()=>{var l;if(!e||((l=e.querySelector('[slot="menu"]'))==null||l.remove(),!s.menuItems.length))return;const a=document.createElement("div");a.setAttribute("slot","menu"),s.menuItems.forEach(({label:m,value:i})=>{const u=document.createElement("modus-wc-menu-item");u.setAttribute("label",m),u.setAttribute("value",i),u.addEventListener("itemSelect",()=>{e&&(e.menuVisible=!1)}),a.appendChild(u)}),e.appendChild(a)},d=async()=>{e&&(t(),s.menuItems.length&&await e.refreshLazyMenu())};return c`
<style>
  div[id^='story--components-dropdown-menu--lazy-loading'] {
    display: flex;
    align-items: center;
    height: 240px;
  }

  [slot='button'] {
    display: flex;
    align-items: center;
    gap: 4px;
  }
</style>

<modus-wc-dropdown-menu
  button-aria-label="Open lazy menu"
  button-color="primary"
  button-size="sm"
  button-variant="filled"
  @menuLoad=${()=>{s.pendingLoad||(s.pendingLoad=!0,window.setTimeout(()=>{s.menuItems=W(),s.pendingLoad=!1,d()},1200))}}
  ${q(a=>{if(!a){e=void 0;return}const l=a;e!==l&&(e=l,d())})}
>
  <div slot="button">
    Load on open
    <modus-wc-icon decorative name="expand_more" size="xs"></modus-wc-icon>
  </div>
</modus-wc-dropdown-menu>
    `}},h={render:e=>{if(!customElements.get("dropdown-menu-shadow-host")){const s=F({componentTag:"modus-wc-dropdown-menu",propsMapper:(t,d)=>{const n=d;if(n.buttonAriaLabel=t["button-aria-label"]||"",n.buttonColor=t["button-color"]||"primary",n.buttonShape=t["button-shape"]||"rectangle",n.buttonSize=t["button-size"],n.buttonVariant=t["button-variant"]||"filled",n.customClass=t["custom-class"]||"",n.disabled=!!t.disabled,n.menuBordered=!!t["menu-bordered"],n.menuOffset=t["menu-offset"]??10,n.menuPlacement=t["menu-placement"],n.menuSize=t["menu-size"],n.menuStrategy=t["menu-strategy"]||"absolute",n.menuVisible=!!t["menu-visible"],!d.hasAttribute("data-layout-built")){d.setAttribute("data-layout-built","");const a=d.parentElement,l=document.createElement("div");l.setAttribute("slot","button"),l.style.cssText="display: flex; align-items: center; gap: 4px;",l.appendChild(document.createTextNode("Button"));const m=document.createElement("modus-wc-icon");m.setAttribute("name","expand_more"),m.setAttribute("size","sm"),l.appendChild(m);const i=document.createElement("div");i.setAttribute("slot","menu"),[{label:"Item One",value:"1"},{label:"Item Two",value:"2"},{label:"Item Three",value:"3"}].forEach(({label:f,value:y})=>{const r=document.createElement("modus-wc-menu-item");r.setAttribute("label",f),r.setAttribute("value",y),i.appendChild(r)}),d.appendChild(l),d.appendChild(i);const u=document.createElement("div");u.style.cssText="font-size: 14px; padding-top: 12px;",u.textContent="Selected Value: ";const g=document.createElement("span");u.appendChild(g),a.appendChild(u),d.addEventListener("itemSelect",f=>{var r;const y=f;g.textContent=((r=y.detail)==null?void 0:r.value)??"",d.menuVisible=!1})}}});customElements.define("dropdown-menu-shadow-host",s)}return c`<dropdown-menu-shadow-host
      .props=${{...e}}
    ></dropdown-menu-shadow-host>`}};var x,z,L;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template
}`,...(L=(z=p.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var C,I,M;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<style>
  /* Storybook styling */
  div[id^='story--components-dropdown-menu--icon-only-dropdown-menu'] {
    height: 60px;
  }
</style>

<modus-wc-dropdown-menu button-shape="square">
  <div slot="button">
    <modus-wc-icon decorative name="more_vertical"></modus-wc-icon>
  </div>
  <div slot="menu">
    <modus-wc-menu-item label="Item One"></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>
    \`;
  }
}`,...(M=(I=b.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var V,$,T;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    'menu-bordered': false,
    'menu-placement': 'bottom-end',
    'menu-size': 'sm'
  },
  parameters: {
    actions: {
      handles: ['menuVisibilityChange', 'itemSelect']
    },
    docs: {
      source: {
        code: \`
<modus-wc-dropdown-menu
  button-variant="filled"
  button-color="primary"
  menu-placement="bottom-end"
  menu-size="sm"
  id="tree-dropdown-menu"
>
  <div slot="button">
    Browse
    <modus-wc-icon name="expand_more" size="sm"></modus-wc-icon>
  </div>
    <modus-wc-tree-menu slot="menu" aria-label="Tree menu" bordered="true" size="sm">
      <modus-wc-tree-item label="Projects" value="projects"></modus-wc-tree-item>
      <modus-wc-tree-item label="Explorer" value="explorer"></modus-wc-tree-item>
    </modus-wc-tree-menu>
</modus-wc-dropdown-menu>

<div>
  Selected Value: <span id="tree-dropdown-selected-value"></span>
</div>
<script>
  const dropdown = document.getElementById('tree-dropdown-menu');
  const display = document.getElementById('tree-dropdown-selected-value');

  dropdown.addEventListener('itemSelect', (e) => {
    display.textContent = e.detail.value;
    dropdown.menuVisible = false;
  });
<\/script>
\`
      }
    }
  },
  render: args => {
    const handleItemSelect = (event: CustomEvent) => {
      const displayElement = document.querySelector('#tree-dropdown-selected-value');
      if (displayElement) {
        displayElement.textContent = event.detail.value;
      }
      const dropdownMenuElement = (event.target as HTMLElement).closest('modus-wc-dropdown-menu');
      if (dropdownMenuElement) {
        (dropdownMenuElement as unknown as {
          menuVisible: boolean;
        }).menuVisible = false;
      }
    };

    // prettier-ignore
    return html\`
<style>
  div[id^='story--components-dropdown-menu--with-tree-menu'] {
    display: flex;
    align-items: center;
    height: 320px;
  }

  [slot='button'] {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .value {
    font-size: 14px;
    padding-top: 12px;
  }
</style>

<modus-wc-dropdown-menu
  button-aria-label=\${ifDefined(args['button-aria-label'])}
  button-color=\${ifDefined(args['button-color'])}
  button-shape=\${ifDefined(args['button-shape'])}
  button-size=\${ifDefined(args['button-size'])}
  button-variant=\${ifDefined(args['button-variant'])}
  custom-class=\${ifDefined(args['custom-class'])}
  ?disabled=\${args.disabled}
  ?menu-bordered=\${args['menu-bordered']}
  menu-offset=\${ifDefined(args['menu-offset'])}
  menu-placement=\${ifDefined(args['menu-placement'])}
  menu-size=\${ifDefined(args['menu-size'])}
  menu-strategy=\${ifDefined(args['menu-strategy'])}
  ?menu-visible=\${args['menu-visible']}
>
  <div slot="button">
    Browse
    <modus-wc-icon name="expand_more" size="sm"></modus-wc-icon>
  </div>
    <modus-wc-tree-menu slot="menu" aria-label="Tree menu" bordered="true" size="sm">
      <modus-wc-tree-item
        label="Projects"
        value="projects"
        @itemSelect=\${handleItemSelect}
      ></modus-wc-tree-item>
      <modus-wc-tree-item
        label="Explorer"
        value="explorer"
        @itemSelect=\${handleItemSelect}
      ></modus-wc-tree-item>
    </modus-wc-tree-menu>
</modus-wc-dropdown-menu>

<div class="value">
  Selected Value:
  <span id="tree-dropdown-selected-value"></span>
</div>
    \`;
  }
}`,...(T=($=w.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var A,D,B;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    actions: {
      handles: ['menuLoad', 'menuVisibilityChange', 'itemSelect']
    },
    docs: {
      source: {
        code: \`
<modus-wc-dropdown-menu
  id="lazy-dropdown"
  button-aria-label="Open lazy menu"
  button-variant="filled"
  button-color="primary"
  button-size="sm"
>
  <div slot="button">
    Load on open
    <modus-wc-icon decorative name="expand_more" size="xs"></modus-wc-icon>
  </div>
</modus-wc-dropdown-menu>

<script>
  const dropdown = document.getElementById('lazy-dropdown');

  // Fetch menu items on first open, with a deliberate delay so the spinner is
  // visible. Adding menu items to slot="menu" ends the loading state.
  dropdown.addEventListener('menuLoad', () => {
    window.setTimeout(() => {
      const menuSlot = document.createElement('div');
      menuSlot.setAttribute('slot', 'menu');
      menuSlot.innerHTML = \\\`
        <modus-wc-menu-item label="Fetched One" value="1"></modus-wc-menu-item>
        <modus-wc-menu-item label="Fetched Two" value="2"></modus-wc-menu-item>
      \\\`;
      dropdown.appendChild(menuSlot);
      dropdown.refreshLazyMenu();
    }, 1200);
  });
<\/script>
\`
      }
    }
  },
  render: () => {
    let dropdownEl: DropdownMenuElement | undefined;
    const state = lazyLoadingStoryState;
    const renderMenuItems = () => {
      if (!dropdownEl) return;
      dropdownEl.querySelector('[slot="menu"]')?.remove();
      if (!state.menuItems.length) return;
      const menuSlot = document.createElement('div');
      menuSlot.setAttribute('slot', 'menu');
      state.menuItems.forEach(({
        label,
        value
      }) => {
        const item = document.createElement('modus-wc-menu-item');
        item.setAttribute('label', label);
        item.setAttribute('value', value);
        item.addEventListener('itemSelect', () => {
          if (dropdownEl) dropdownEl.menuVisible = false;
        });
        menuSlot.appendChild(item);
      });
      dropdownEl.appendChild(menuSlot);
    };
    const sync = async () => {
      if (!dropdownEl) return;
      renderMenuItems();
      if (state.menuItems.length) {
        await dropdownEl.refreshLazyMenu();
      }
    };

    // Fetch items on first open, with a deliberate delay so the spinner is
    // visible. Populating slot="menu" ends the loading state.
    const handleMenuLoad = () => {
      if (state.pendingLoad) return;
      state.pendingLoad = true;
      window.setTimeout(() => {
        state.menuItems = lazyLoadMenuItems();
        state.pendingLoad = false;
        void sync();
      }, 1200);
    };

    // prettier-ignore
    return html\`
<style>
  div[id^='story--components-dropdown-menu--lazy-loading'] {
    display: flex;
    align-items: center;
    height: 240px;
  }

  [slot='button'] {
    display: flex;
    align-items: center;
    gap: 4px;
  }
</style>

<modus-wc-dropdown-menu
  button-aria-label="Open lazy menu"
  button-color="primary"
  button-size="sm"
  button-variant="filled"
  @menuLoad=\${handleMenuLoad}
  \${ref(el => {
      if (!el) {
        dropdownEl = undefined;
        return;
      }
      const next = el as DropdownMenuElement;
      if (dropdownEl !== next) {
        dropdownEl = next;
        void sync();
      }
    })}
>
  <div slot="button">
    Load on open
    <modus-wc-icon decorative name="expand_more" size="xs"></modus-wc-icon>
  </div>
</modus-wc-dropdown-menu>
    \`;
  }
}`,...(B=(D=v.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var _,O,P;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('dropdown-menu-shadow-host')) {
      const DropdownMenuShadowHost = createShadowHostClass<DropdownMenuArgs>({
        componentTag: 'modus-wc-dropdown-menu',
        propsMapper: (v: DropdownMenuArgs, el: HTMLElement) => {
          const dropdownEl = el as unknown as {
            buttonAriaLabel: string;
            buttonColor: string;
            buttonShape: string;
            buttonSize: DaisySize;
            buttonVariant: string;
            customClass: string;
            disabled: boolean;
            menuBordered: boolean;
            menuOffset: number;
            menuPlacement: PopoverPlacement;
            menuSize: ModusSize;
            menuStrategy: 'absolute' | 'fixed';
            menuVisible: boolean;
          };
          dropdownEl.buttonAriaLabel = v['button-aria-label'] || '';
          dropdownEl.buttonColor = v['button-color'] || 'primary';
          dropdownEl.buttonShape = v['button-shape'] || 'rectangle';
          dropdownEl.buttonSize = v['button-size'] as DaisySize;
          dropdownEl.buttonVariant = v['button-variant'] || 'filled';
          dropdownEl.customClass = v['custom-class'] || '';
          dropdownEl.disabled = Boolean(v.disabled);
          dropdownEl.menuBordered = Boolean(v['menu-bordered']);
          dropdownEl.menuOffset = v['menu-offset'] ?? 10;
          dropdownEl.menuPlacement = v['menu-placement'] as PopoverPlacement;
          dropdownEl.menuSize = v['menu-size'] as ModusSize;
          dropdownEl.menuStrategy = v['menu-strategy'] || 'absolute';
          dropdownEl.menuVisible = Boolean(v['menu-visible']);

          // On first render: add slot content and append the Selected Value
          // display as a sibling of el inside the helper's display:contents
          // wrapper — both become direct layout children of the shadow root.
          if (!el.hasAttribute('data-layout-built')) {
            el.setAttribute('data-layout-built', '');
            const wrapper = el.parentElement!;
            const buttonSlot = document.createElement('div');
            buttonSlot.setAttribute('slot', 'button');
            buttonSlot.style.cssText = 'display: flex; align-items: center; gap: 4px;';
            buttonSlot.appendChild(document.createTextNode('Button'));
            const expandIcon = document.createElement('modus-wc-icon');
            expandIcon.setAttribute('name', 'expand_more');
            expandIcon.setAttribute('size', 'sm');
            buttonSlot.appendChild(expandIcon);
            const menuSlot = document.createElement('div');
            menuSlot.setAttribute('slot', 'menu');
            [{
              label: 'Item One',
              value: '1'
            }, {
              label: 'Item Two',
              value: '2'
            }, {
              label: 'Item Three',
              value: '3'
            }].forEach(({
              label,
              value
            }) => {
              const item = document.createElement('modus-wc-menu-item');
              item.setAttribute('label', label);
              item.setAttribute('value', value);
              menuSlot.appendChild(item);
            });
            el.appendChild(buttonSlot);
            el.appendChild(menuSlot);

            // Selected value display as sibling in wrapper
            const valueDiv = document.createElement('div');
            valueDiv.style.cssText = 'font-size: 14px; padding-top: 12px;';
            valueDiv.textContent = 'Selected Value: ';
            const valueSpan = document.createElement('span');
            valueDiv.appendChild(valueSpan);
            wrapper.appendChild(valueDiv);
            el.addEventListener('itemSelect', (e: Event) => {
              const custom = e as CustomEvent<{
                value: string;
              }>;
              valueSpan.textContent = custom.detail?.value ?? '';
              (el as unknown as {
                menuVisible: boolean;
              }).menuVisible = false;
            });
          }
        }
      });
      customElements.define('dropdown-menu-shadow-host', DropdownMenuShadowHost);
    }
    return html\`<dropdown-menu-shadow-host
      .props=\${{
      ...args
    }}
    ></dropdown-menu-shadow-host>\`;
  }
}`,...(P=(O=h.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const ne=["Default","IconOnlyDropdownMenu","WithTreeMenu","LazyLoading","ShadowDomParent"];export{p as Default,b as IconOnlyDropdownMenu,v as LazyLoading,h as ShadowDomParent,w as WithTreeMenu,ne as __namedExportsOrder,te as default};
