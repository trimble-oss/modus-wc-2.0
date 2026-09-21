import{w as K}from"./decorator-Cv9na35H.js";import{b as u}from"./lit-element-DgBvYnzn.js";import{o}from"./if-defined-BnVFTJ4o.js";import{n as W}from"./ref-Bw8asrgi.js";import{c as J}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";var L=Object.freeze,U=Object.defineProperty,G=(e,t)=>L(U(e,"raw",{value:L(e.slice())})),T;const ae={title:"Components/Dropdown Menu",component:"modus-wc-dropdown-menu",args:{"button-aria-label":"Dropdown menu button","button-color":"primary","button-shape":"rectangle","button-size":"md","button-variant":"filled",disabled:!1,"menu-bordered":!0,"menu-offset":14,"menu-placement":"bottom-start","menu-size":"md","menu-strategy":"absolute","menu-visible":!1},argTypes:{"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-size":{control:{type:"select"},options:["xs","sm","md","lg","xl"]},"button-shape":{control:{type:"select"},options:["circle","ellipse","rectangle","square"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"menu-placement":{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"menu-size":{control:{type:"select"},options:["xs","sm","md","lg","xl"]},"menu-strategy":{control:{type:"select"},options:["absolute","fixed"]}},decorators:[K],parameters:{actions:{handles:["menuVisibilityChange"]}}},Q={render:e=>{let t="";const n=i=>{t=i.detail.value;const s=document.querySelector("#selected-value");s&&(s.textContent=t);const d=i.target.closest("modus-wc-dropdown-menu");d&&(d.menuVisible=!1)};return u(T||(T=G([`
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
    <modus-wc-menu-item label="Item One" value="1" size=`," @itemSelect=",`></modus-wc-menu-item>
    <modus-wc-menu-item label="Item Two" value="2" size=`," @itemSelect=",` /></modus-wc-menu-item>
    <modus-wc-menu-item label="Item Three" value="3" size=`," @itemSelect=",` /></modus-wc-menu-item>
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
    `])),o(e["button-aria-label"]),o(e["button-color"]),o(e["button-shape"]),o(e["button-size"]),o(e["button-variant"]),o(e["custom-class"]),e.disabled,e["menu-bordered"],o(e["menu-offset"]),o(e["menu-placement"]),o(e["menu-size"]),o(e["menu-strategy"]),e["menu-visible"],o(e["menu-size"]),n,o(e["menu-size"]),n,o(e["menu-size"]),n)}},c={...Q},p={render:e=>u`
<style>
  /* Storybook styling */
  div[id^='story--components-dropdown-menu--icon-only-dropdown-menu'] {
    height: 60px;
  }
</style>

<modus-wc-dropdown-menu
  button-shape="square"
  menu-size=${o(e["menu-size"])}
>
  <div slot="button">
    <modus-wc-icon decorative name="more_vertical"></modus-wc-icon>
  </div>
  <div slot="menu">
    <modus-wc-menu-item label="Item One" size=${o(e["menu-size"])}></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>
    `},b={args:{"menu-bordered":!1,"menu-placement":"bottom-end","menu-size":"sm"},parameters:{actions:{handles:["menuVisibilityChange","itemSelect"]},docs:{source:{code:`
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
`}}},render:e=>{const t=n=>{const i=document.querySelector("#tree-dropdown-selected-value");i&&(i.textContent=n.detail.value);const s=n.target.closest("modus-wc-dropdown-menu");s&&(s.menuVisible=!1)};return u`
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
        @itemSelect=${t}
      ></modus-wc-tree-item>
      <modus-wc-tree-item
        label="Explorer"
        value="explorer"
        @itemSelect=${t}
      ></modus-wc-tree-item>
    </modus-wc-tree-menu>
</modus-wc-dropdown-menu>

<div class="value">
  Selected Value:
  <span id="tree-dropdown-selected-value"></span>
</div>
    `}},R=e=>e.menuSize??e.getAttribute("menu-size")??"md",z=()=>[{label:"Fetched One",value:"1"},{label:"Fetched Two",value:"2"},{label:"Fetched Three",value:"3"}],X={status:"idle",pendingLoad:!1},E=e=>{const t=e.querySelector('[slot="menu"]');if(!(t instanceof HTMLDivElement))throw new Error('Expected a stable div[slot="menu"] in the lazy loading story.');return t},N=e=>{e.replaceChildren(),e.removeAttribute("aria-busy"),e.removeAttribute("aria-live"),e.className=""},I=e=>{const t=E(e);N(t),t.className="lazy-menu-loading",t.setAttribute("aria-busy","true"),t.setAttribute("aria-live","polite");const n=document.createElement("modus-wc-loader");n.setAttribute("variant","spinner"),n.setAttribute("size","sm"),t.appendChild(n)},S=(e,t)=>{const n=E(e);N(n);const i=R(e);t.forEach(({label:s,value:a})=>{const d=document.createElement("modus-wc-menu-item");d.setAttribute("label",s),d.setAttribute("value",a),d.setAttribute("size",i),d.addEventListener("itemSelect",()=>{e.menuVisible=!1}),n.appendChild(d)})},w={parameters:{actions:{handles:["menuVisibilityChange","itemSelect"]},docs:{source:{code:`
<style>
  main {
    align-items: center;
    display: flex;
    justify-content: center;
    min-block-size: 100vh;
  }

  [slot='button'] {
    align-items: center;
    display: flex;
    gap: 4px;
  }

  .lazy-menu-loading {
    align-items: center;
    display: flex;
    justify-content: center;
    min-block-size: 2.5rem;
    min-inline-size: 6rem;
    padding-block: var(--modus-wc-spacing-sm);
    padding-inline: var(--modus-wc-spacing-md);
  }
</style>

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
  <div slot="menu"></div>
</modus-wc-dropdown-menu>

<script>
  customElements.whenDefined('modus-wc-dropdown-menu').then(() => {
    const dropdown = document.getElementById('lazy-dropdown');
    if (!dropdown) return;

    let status = 'idle';
    let pendingLoad = false;

    const getMenuSlot = () => {
      const slot = dropdown.querySelector('[slot="menu"]');
      if (!(slot instanceof HTMLDivElement)) {
        throw new Error('Expected a stable div[slot="menu"].');
      }
      return slot;
    };

    const resetMenuSlot = (slot) => {
      slot.replaceChildren();
      slot.removeAttribute('aria-busy');
      slot.removeAttribute('aria-live');
      slot.className = '';
    };

    const showLoader = () => {
      const slot = getMenuSlot();
      resetMenuSlot(slot);
      slot.className = 'lazy-menu-loading';
      slot.setAttribute('aria-busy', 'true');
      slot.setAttribute('aria-live', 'polite');
      const loader = document.createElement('modus-wc-loader');
      loader.setAttribute('variant', 'spinner');
      loader.setAttribute('size', 'sm');
      slot.appendChild(loader);
    };

    const showMenuItems = (items) => {
      const slot = getMenuSlot();
      resetMenuSlot(slot);
      const menuSize = dropdown.getAttribute('menu-size') ?? 'md';
      items.forEach(({ label, value }) => {
        const item = document.createElement('modus-wc-menu-item');
        item.setAttribute('label', label);
        item.setAttribute('value', value);
        item.setAttribute('size', menuSize);
        slot.appendChild(item);
      });
    };

    let loadTimeoutId;

    const clearLoadTimeout = () => {
      if (loadTimeoutId === undefined) return;
      window.clearTimeout(loadTimeoutId);
      loadTimeoutId = undefined;
    };

    // Fetch on first open. Keep div[slot="menu"] mounted; swap its contents only.
    dropdown.addEventListener('menuVisibilityChange', (e) => {
      if (!e.detail.isVisible || status !== 'idle' || pendingLoad) return;

      pendingLoad = true;
      status = 'loading';
      showLoader();

      clearLoadTimeout();
      loadTimeoutId = window.setTimeout(() => {
        loadTimeoutId = undefined;
        showMenuItems([
          { label: 'Fetched One', value: '1' },
          { label: 'Fetched Two', value: '2' },
          { label: 'Fetched Three', value: '3' },
        ]);
        status = 'ready';
        pendingLoad = false;
      }, 1200);
    });
  });
<\/script>
`}}},render:()=>{let e;const t=X,n=()=>{e!==void 0&&(window.clearTimeout(e),e=void 0)},i=()=>{n(),t.pendingLoad=!1,t.status="idle"};return u`
<style>
  div[id^='story--components-dropdown-menu--lazy-loading'] {
    align-items: center;
    display: flex;
    justify-content: center;
    min-block-size: 100vh;
  }

  [slot='button'] {
    align-items: center;
    display: flex;
    gap: 4px;
  }

  .lazy-menu-loading {
    align-items: center;
    display: flex;
    justify-content: center;
    min-block-size: 2.5rem;
    min-inline-size: 6rem;
    padding-block: var(--modus-wc-spacing-sm);
    padding-inline: var(--modus-wc-spacing-md);
  }
</style>

<modus-wc-dropdown-menu
  id="lazy-dropdown"
  button-aria-label="Open lazy menu"
  button-color="primary"
  button-size="sm"
  button-variant="filled"
  @menuVisibilityChange=${a=>{const d=a.currentTarget;if(a.detail.isVisible){if(t.status==="ready"){E(d).childElementCount||S(d,z());return}if(t.status==="loading"&&t.pendingLoad){I(d);return}t.status!=="idle"||t.pendingLoad||(t.pendingLoad=!0,t.status="loading",I(d),n(),e=window.setTimeout(()=>{if(e=void 0,!d.isConnected){i();return}S(d,z()),t.status="ready",t.pendingLoad=!1},1200))}}}
  ${W(a=>{if(!a){i();return}const d=a;t.status==="ready"&&S(d,z())})}
>
  <div slot="button">
    Load on open
    <modus-wc-icon decorative name="expand_more" size="xs"></modus-wc-icon>
  </div>
  <div slot="menu"></div>
</modus-wc-dropdown-menu>
    `}},v={render:e=>{if(!customElements.get("dropdown-menu-shadow-host")){const t=J({componentTag:"modus-wc-dropdown-menu",propsMapper:(n,i)=>{const s=i;s.buttonAriaLabel=n["button-aria-label"]||"",s.buttonColor=n["button-color"]||"primary",s.buttonShape=n["button-shape"]||"rectangle",s.buttonSize=n["button-size"],s.buttonVariant=n["button-variant"]||"filled",s.customClass=n["custom-class"]||"",s.disabled=!!n.disabled,s.menuBordered=!!n["menu-bordered"],s.menuOffset=n["menu-offset"]??10,s.menuPlacement=n["menu-placement"];const a=n["menu-size"]??"md";if(s.menuSize=a,s.menuStrategy=n["menu-strategy"]||"absolute",s.menuVisible=!!n["menu-visible"],i.querySelectorAll("modus-wc-menu-item").forEach(d=>{d.setAttribute("size",a)}),!i.hasAttribute("data-layout-built")){i.setAttribute("data-layout-built","");const d=i.parentElement,r=document.createElement("div");r.setAttribute("slot","button"),r.style.cssText="display: flex; align-items: center; gap: 4px;",r.appendChild(document.createTextNode("Button"));const y=document.createElement("modus-wc-icon");y.setAttribute("name","expand_more"),y.setAttribute("size","sm"),r.appendChild(y);const f=document.createElement("div");f.setAttribute("slot","menu"),[{label:"Item One",value:"1"},{label:"Item Two",value:"2"},{label:"Item Three",value:"3"}].forEach(({label:h,value:g})=>{const l=document.createElement("modus-wc-menu-item");l.setAttribute("label",h),l.setAttribute("value",g),l.setAttribute("size",a),f.appendChild(l)}),i.appendChild(r),i.appendChild(f);const m=document.createElement("div");m.style.cssText="font-size: 14px; padding-top: 12px;",m.textContent="Selected Value: ";const x=document.createElement("span");m.appendChild(x),d.appendChild(m),i.addEventListener("itemSelect",h=>{var l;const g=h;x.textContent=((l=g.detail)==null?void 0:l.value)??"",i.menuVisible=!1})}}});customElements.define("dropdown-menu-shadow-host",t)}return u`<dropdown-menu-shadow-host
      .props=${{...e}}
    ></dropdown-menu-shadow-host>`}};var C,M,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template
}`,...(A=(M=c.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var V,D,$;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  /* Storybook styling */
  div[id^='story--components-dropdown-menu--icon-only-dropdown-menu'] {
    height: 60px;
  }
</style>

<modus-wc-dropdown-menu
  button-shape="square"
  menu-size=\${ifDefined(args['menu-size'])}
>
  <div slot="button">
    <modus-wc-icon decorative name="more_vertical"></modus-wc-icon>
  </div>
  <div slot="menu">
    <modus-wc-menu-item label="Item One" size=\${ifDefined(args['menu-size'])}></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>
    \`;
  }
}`,...($=(D=p.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var B,_,O;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(_=b.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var j,k,P;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    actions: {
      handles: ['menuVisibilityChange', 'itemSelect']
    },
    docs: {
      source: {
        code: \`
<style>
  main {
    align-items: center;
    display: flex;
    justify-content: center;
    min-block-size: 100vh;
  }

  [slot='button'] {
    align-items: center;
    display: flex;
    gap: 4px;
  }

  .lazy-menu-loading {
    align-items: center;
    display: flex;
    justify-content: center;
    min-block-size: 2.5rem;
    min-inline-size: 6rem;
    padding-block: var(--modus-wc-spacing-sm);
    padding-inline: var(--modus-wc-spacing-md);
  }
</style>

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
  <div slot="menu"></div>
</modus-wc-dropdown-menu>

<script>
  customElements.whenDefined('modus-wc-dropdown-menu').then(() => {
    const dropdown = document.getElementById('lazy-dropdown');
    if (!dropdown) return;

    let status = 'idle';
    let pendingLoad = false;

    const getMenuSlot = () => {
      const slot = dropdown.querySelector('[slot="menu"]');
      if (!(slot instanceof HTMLDivElement)) {
        throw new Error('Expected a stable div[slot="menu"].');
      }
      return slot;
    };

    const resetMenuSlot = (slot) => {
      slot.replaceChildren();
      slot.removeAttribute('aria-busy');
      slot.removeAttribute('aria-live');
      slot.className = '';
    };

    const showLoader = () => {
      const slot = getMenuSlot();
      resetMenuSlot(slot);
      slot.className = 'lazy-menu-loading';
      slot.setAttribute('aria-busy', 'true');
      slot.setAttribute('aria-live', 'polite');
      const loader = document.createElement('modus-wc-loader');
      loader.setAttribute('variant', 'spinner');
      loader.setAttribute('size', 'sm');
      slot.appendChild(loader);
    };

    const showMenuItems = (items) => {
      const slot = getMenuSlot();
      resetMenuSlot(slot);
      const menuSize = dropdown.getAttribute('menu-size') ?? 'md';
      items.forEach(({ label, value }) => {
        const item = document.createElement('modus-wc-menu-item');
        item.setAttribute('label', label);
        item.setAttribute('value', value);
        item.setAttribute('size', menuSize);
        slot.appendChild(item);
      });
    };

    let loadTimeoutId;

    const clearLoadTimeout = () => {
      if (loadTimeoutId === undefined) return;
      window.clearTimeout(loadTimeoutId);
      loadTimeoutId = undefined;
    };

    // Fetch on first open. Keep div[slot="menu"] mounted; swap its contents only.
    dropdown.addEventListener('menuVisibilityChange', (e) => {
      if (!e.detail.isVisible || status !== 'idle' || pendingLoad) return;

      pendingLoad = true;
      status = 'loading';
      showLoader();

      clearLoadTimeout();
      loadTimeoutId = window.setTimeout(() => {
        loadTimeoutId = undefined;
        showMenuItems([
          { label: 'Fetched One', value: '1' },
          { label: 'Fetched Two', value: '2' },
          { label: 'Fetched Three', value: '3' },
        ]);
        status = 'ready';
        pendingLoad = false;
      }, 1200);
    });
  });
<\/script>
\`
      }
    }
  },
  render: () => {
    let loadTimeoutId: number | undefined;
    const state = lazyLoadingStoryState;
    const clearLoadTimeout = () => {
      if (loadTimeoutId === undefined) return;
      window.clearTimeout(loadTimeoutId);
      loadTimeoutId = undefined;
    };
    const resetLazyLoadStoryState = () => {
      clearLoadTimeout();
      state.pendingLoad = false;
      state.status = 'idle';
    };
    const handleVisibilityChange = (event: CustomEvent<{
      isVisible: boolean;
    }>) => {
      const dropdown = event.currentTarget as DropdownMenuElement;
      if (!event.detail.isVisible) return;
      if (state.status === 'ready') {
        const slot = getMenuSlot(dropdown);
        if (!slot.childElementCount) {
          showMenuItems(dropdown, lazyLoadMenuItems());
        }
        return;
      }
      if (state.status === 'loading' && state.pendingLoad) {
        showLoader(dropdown);
        return;
      }
      if (state.status !== 'idle' || state.pendingLoad) {
        return;
      }
      state.pendingLoad = true;
      state.status = 'loading';
      showLoader(dropdown);
      clearLoadTimeout();
      loadTimeoutId = window.setTimeout(() => {
        loadTimeoutId = undefined;
        if (!dropdown.isConnected) {
          resetLazyLoadStoryState();
          return;
        }
        showMenuItems(dropdown, lazyLoadMenuItems());
        state.status = 'ready';
        state.pendingLoad = false;
      }, 1200);
    };

    // prettier-ignore
    return html\`
<style>
  div[id^='story--components-dropdown-menu--lazy-loading'] {
    align-items: center;
    display: flex;
    justify-content: center;
    min-block-size: 100vh;
  }

  [slot='button'] {
    align-items: center;
    display: flex;
    gap: 4px;
  }

  .lazy-menu-loading {
    align-items: center;
    display: flex;
    justify-content: center;
    min-block-size: 2.5rem;
    min-inline-size: 6rem;
    padding-block: var(--modus-wc-spacing-sm);
    padding-inline: var(--modus-wc-spacing-md);
  }
</style>

<modus-wc-dropdown-menu
  id="lazy-dropdown"
  button-aria-label="Open lazy menu"
  button-color="primary"
  button-size="sm"
  button-variant="filled"
  @menuVisibilityChange=\${handleVisibilityChange}
  \${ref(el => {
      if (!el) {
        resetLazyLoadStoryState();
        return;
      }
      const dropdown = el as DropdownMenuElement;
      if (state.status === 'ready') {
        showMenuItems(dropdown, lazyLoadMenuItems());
      }
    })}
>
  <div slot="button">
    Load on open
    <modus-wc-icon decorative name="expand_more" size="xs"></modus-wc-icon>
  </div>
  <div slot="menu"></div>
</modus-wc-dropdown-menu>
    \`;
  }
}`,...(P=(k=w.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var q,F,H;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
          const menuItemSize = v['menu-size'] ?? 'md';
          dropdownEl.menuSize = menuItemSize as ModusSize;
          dropdownEl.menuStrategy = v['menu-strategy'] || 'absolute';
          dropdownEl.menuVisible = Boolean(v['menu-visible']);
          el.querySelectorAll('modus-wc-menu-item').forEach(item => {
            item.setAttribute('size', menuItemSize);
          });

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
              item.setAttribute('size', menuItemSize);
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
}`,...(H=(F=v.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const le=["Default","IconOnlyDropdownMenu","WithTreeMenu","LazyLoading","ShadowDomParent"];export{c as Default,p as IconOnlyDropdownMenu,w as LazyLoading,v as ShadowDomParent,b as WithTreeMenu,le as __namedExportsOrder,ae as default};
