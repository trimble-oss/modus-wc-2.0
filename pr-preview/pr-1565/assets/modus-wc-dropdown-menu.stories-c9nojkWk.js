import{w as N}from"./decorator-Cv9na35H.js";import{b as r}from"./lit-element-DgBvYnzn.js";import{o as s}from"./if-defined-BnVFTJ4o.js";import{n as K}from"./ref-Bw8asrgi.js";import{c as W}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";var x=Object.freeze,J=Object.defineProperty,U=(e,t)=>x(J(e,"raw",{value:x(e.slice())})),L;const de={title:"Components/Dropdown Menu",component:"modus-wc-dropdown-menu",args:{"button-aria-label":"Dropdown menu button","button-color":"primary","button-shape":"rectangle","button-size":"md","button-variant":"filled",disabled:!1,"menu-bordered":!0,"menu-offset":14,"menu-placement":"bottom-start","menu-size":"md","menu-strategy":"absolute","menu-visible":!1},argTypes:{"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-size":{control:{type:"select"},options:["xs","sm","md","lg","xl"]},"button-shape":{control:{type:"select"},options:["circle","ellipse","rectangle","square"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"menu-placement":{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"menu-size":{control:{type:"select"},options:["sm","md","lg"]},"menu-strategy":{control:{type:"select"},options:["absolute","fixed"]}},decorators:[N],parameters:{actions:{handles:["menuVisibilityChange"]}}},G={render:e=>{let t="";const n=d=>{t=d.detail.value;const o=document.querySelector("#selected-value");o&&(o.textContent=t);const a=d.target.closest("modus-wc-dropdown-menu");a&&(a.menuVisible=!1)};return r(L||(L=U([`
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
    `])),s(e["button-aria-label"]),s(e["button-color"]),s(e["button-shape"]),s(e["button-size"]),s(e["button-variant"]),s(e["custom-class"]),e.disabled,e["menu-bordered"],s(e["menu-offset"]),s(e["menu-placement"]),s(e["menu-size"]),s(e["menu-strategy"]),e["menu-visible"],n,n,n)}},c={...G},p={render:()=>r`
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
`}}},render:e=>{const t=n=>{const d=document.querySelector("#tree-dropdown-selected-value");d&&(d.textContent=n.detail.value);const o=n.target.closest("modus-wc-dropdown-menu");o&&(o.menuVisible=!1)};return r`
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
  button-aria-label=${s(e["button-aria-label"])}
  button-color=${s(e["button-color"])}
  button-shape=${s(e["button-shape"])}
  button-size=${s(e["button-size"])}
  button-variant=${s(e["button-variant"])}
  custom-class=${s(e["custom-class"])}
  ?disabled=${e.disabled}
  ?menu-bordered=${e["menu-bordered"]}
  menu-offset=${s(e["menu-offset"])}
  menu-placement=${s(e["menu-placement"])}
  menu-size=${s(e["menu-size"])}
  menu-strategy=${s(e["menu-strategy"])}
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
    `}},g=()=>[{label:"Fetched One",value:"1"},{label:"Fetched Two",value:"2"},{label:"Fetched Three",value:"3"}],Q={status:"idle",pendingLoad:!1},z=e=>{const t=e.querySelector('[slot="menu"]');if(!(t instanceof HTMLDivElement))throw new Error('Expected a stable div[slot="menu"] in the lazy loading story.');return t},H=e=>{e.replaceChildren(),e.removeAttribute("aria-busy"),e.removeAttribute("aria-live"),e.className=""},T=e=>{const t=z(e);H(t),t.className="lazy-menu-loading",t.setAttribute("aria-busy","true"),t.setAttribute("aria-live","polite");const n=document.createElement("modus-wc-loader");n.setAttribute("variant","spinner"),n.setAttribute("size","sm"),t.appendChild(n)},S=(e,t)=>{const n=z(e);H(n),t.forEach(({label:d,value:o})=>{const l=document.createElement("modus-wc-menu-item");l.setAttribute("label",d),l.setAttribute("value",o),l.addEventListener("itemSelect",()=>{e.menuVisible=!1}),n.appendChild(l)})},w={parameters:{actions:{handles:["menuVisibilityChange","itemSelect"]},docs:{source:{code:`
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
      items.forEach(({ label, value }) => {
        const item = document.createElement('modus-wc-menu-item');
        item.setAttribute('label', label);
        item.setAttribute('value', value);
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
`}}},render:()=>{let e;const t=Q,n=()=>{e!==void 0&&(window.clearTimeout(e),e=void 0)},d=()=>{n(),t.pendingLoad=!1,t.status="idle"};return r`
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
  @menuVisibilityChange=${l=>{const a=l.currentTarget;if(l.detail.isVisible){if(t.status==="ready"){z(a).childElementCount||S(a,g());return}if(t.status==="loading"&&t.pendingLoad){T(a);return}t.status!=="idle"||t.pendingLoad||(t.pendingLoad=!0,t.status="loading",T(a),n(),e=window.setTimeout(()=>{if(e=void 0,!a.isConnected){d();return}S(a,g()),t.status="ready",t.pendingLoad=!1},1200))}}}
  ${K(l=>{if(!l){d();return}const a=l;t.status==="ready"&&S(a,g())})}
>
  <div slot="button">
    Load on open
    <modus-wc-icon decorative name="expand_more" size="xs"></modus-wc-icon>
  </div>
  <div slot="menu"></div>
</modus-wc-dropdown-menu>
    `}},v={render:e=>{if(!customElements.get("dropdown-menu-shadow-host")){const t=W({componentTag:"modus-wc-dropdown-menu",propsMapper:(n,d)=>{const o=d;if(o.buttonAriaLabel=n["button-aria-label"]||"",o.buttonColor=n["button-color"]||"primary",o.buttonShape=n["button-shape"]||"rectangle",o.buttonSize=n["button-size"],o.buttonVariant=n["button-variant"]||"filled",o.customClass=n["custom-class"]||"",o.disabled=!!n.disabled,o.menuBordered=!!n["menu-bordered"],o.menuOffset=n["menu-offset"]??10,o.menuPlacement=n["menu-placement"],o.menuSize=n["menu-size"],o.menuStrategy=n["menu-strategy"]||"absolute",o.menuVisible=!!n["menu-visible"],!d.hasAttribute("data-layout-built")){d.setAttribute("data-layout-built","");const l=d.parentElement,a=document.createElement("div");a.setAttribute("slot","button"),a.style.cssText="display: flex; align-items: center; gap: 4px;",a.appendChild(document.createTextNode("Button"));const u=document.createElement("modus-wc-icon");u.setAttribute("name","expand_more"),u.setAttribute("size","sm"),a.appendChild(u);const y=document.createElement("div");y.setAttribute("slot","menu"),[{label:"Item One",value:"1"},{label:"Item Two",value:"2"},{label:"Item Three",value:"3"}].forEach(({label:f,value:h})=>{const i=document.createElement("modus-wc-menu-item");i.setAttribute("label",f),i.setAttribute("value",h),y.appendChild(i)}),d.appendChild(a),d.appendChild(y);const m=document.createElement("div");m.style.cssText="font-size: 14px; padding-top: 12px;",m.textContent="Selected Value: ";const E=document.createElement("span");m.appendChild(E),l.appendChild(m),d.addEventListener("itemSelect",f=>{var i;const h=f;E.textContent=((i=h.detail)==null?void 0:i.value)??"",d.menuVisible=!1})}}});customElements.define("dropdown-menu-shadow-host",t)}return r`<dropdown-menu-shadow-host
      .props=${{...e}}
    ></dropdown-menu-shadow-host>`}};var I,C,M;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template
}`,...(M=(C=c.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var A,V,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var $,B,_;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(_=(B=b.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var O,j,k;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      items.forEach(({ label, value }) => {
        const item = document.createElement('modus-wc-menu-item');
        item.setAttribute('label', label);
        item.setAttribute('value', value);
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
}`,...(k=(j=w.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var P,q,F;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(q=v.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const ae=["Default","IconOnlyDropdownMenu","WithTreeMenu","LazyLoading","ShadowDomParent"];export{c as Default,p as IconOnlyDropdownMenu,w as LazyLoading,v as ShadowDomParent,b as WithTreeMenu,ae as __namedExportsOrder,de as default};
