import{w as H}from"./decorator-Cv9na35H.js";import{b as r}from"./lit-element-DgBvYnzn.js";import{o as l}from"./if-defined-BnVFTJ4o.js";import{n as q}from"./ref-Bw8asrgi.js";import{c as F}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";var S=Object.freeze,N=Object.defineProperty,K=(e,n)=>S(N(e,"raw",{value:S(e.slice())})),E;const le={title:"Components/Dropdown Menu",component:"modus-wc-dropdown-menu",args:{"button-aria-label":"Dropdown menu button","button-color":"primary","button-shape":"rectangle","button-size":"md","button-variant":"filled",disabled:!1,"menu-bordered":!0,"menu-offset":14,"menu-placement":"bottom-start","menu-size":"md","menu-strategy":"absolute","menu-visible":!1},argTypes:{"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-size":{control:{type:"select"},options:["xs","sm","md","lg","xl"]},"button-shape":{control:{type:"select"},options:["circle","ellipse","rectangle","square"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"menu-placement":{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"menu-size":{control:{type:"select"},options:["sm","md","lg"]},"menu-strategy":{control:{type:"select"},options:["absolute","fixed"]}},decorators:[H],parameters:{actions:{handles:["menuVisibilityChange"]}}},W={render:e=>{let n="";const t=o=>{n=o.detail.value;const s=document.querySelector("#selected-value");s&&(s.textContent=n);const d=o.target.closest("modus-wc-dropdown-menu");d&&(d.menuVisible=!1)};return r(E||(E=K([`
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
    `])),l(e["button-aria-label"]),l(e["button-color"]),l(e["button-shape"]),l(e["button-size"]),l(e["button-variant"]),l(e["custom-class"]),e.disabled,e["menu-bordered"],l(e["menu-offset"]),l(e["menu-placement"]),l(e["menu-size"]),l(e["menu-strategy"]),e["menu-visible"],t,t,t)}},m={...W},c={render:()=>r`
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
    `},p={args:{"menu-bordered":!1,"menu-placement":"bottom-end","menu-size":"sm"},parameters:{actions:{handles:["menuVisibilityChange","itemSelect"]},docs:{source:{code:`
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
`}}},render:e=>{const n=t=>{const o=document.querySelector("#tree-dropdown-selected-value");o&&(o.textContent=t.detail.value);const s=t.target.closest("modus-wc-dropdown-menu");s&&(s.menuVisible=!1)};return r`
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
  button-aria-label=${l(e["button-aria-label"])}
  button-color=${l(e["button-color"])}
  button-shape=${l(e["button-shape"])}
  button-size=${l(e["button-size"])}
  button-variant=${l(e["button-variant"])}
  custom-class=${l(e["custom-class"])}
  ?disabled=${e.disabled}
  ?menu-bordered=${e["menu-bordered"]}
  menu-offset=${l(e["menu-offset"])}
  menu-placement=${l(e["menu-placement"])}
  menu-size=${l(e["menu-size"])}
  menu-strategy=${l(e["menu-strategy"])}
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
        @itemSelect=${n}
      ></modus-wc-tree-item>
      <modus-wc-tree-item
        label="Explorer"
        value="explorer"
        @itemSelect=${n}
      ></modus-wc-tree-item>
    </modus-wc-tree-menu>
</modus-wc-dropdown-menu>

<div class="value">
  Selected Value:
  <span id="tree-dropdown-selected-value"></span>
</div>
    `}},J=()=>[{label:"Fetched One",value:"1"},{label:"Fetched Two",value:"2"},{label:"Fetched Three",value:"3"}],U={status:"idle",pendingLoad:!1},P=e=>{const n=e.querySelector('[slot="menu"]');if(!(n instanceof HTMLDivElement))throw new Error('Expected a stable div[slot="menu"] in the lazy loading story.');return n},k=e=>{e.replaceChildren(),e.removeAttribute("aria-busy"),e.removeAttribute("aria-live"),e.className=""},G=e=>{const n=P(e);k(n),n.className="lazy-menu-loading",n.setAttribute("aria-busy","true"),n.setAttribute("aria-live","polite");const t=document.createElement("modus-wc-loader");t.setAttribute("variant","spinner"),t.setAttribute("size","sm"),n.appendChild(t)},Q=(e,n)=>{const t=P(e);k(t),n.forEach(({label:o,value:s})=>{const a=document.createElement("modus-wc-menu-item");a.setAttribute("label",o),a.setAttribute("value",s),a.addEventListener("itemSelect",()=>{e.menuVisible=!1}),t.appendChild(a)})},b={parameters:{actions:{handles:["menuVisibilityChange","itemSelect"]},docs:{source:{code:`
<style>
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
  const dropdown = document.getElementById('lazy-dropdown');
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
    slot.innerHTML = '<modus-wc-loader variant="spinner" size="sm"></modus-wc-loader>';
  };

  const showMenuItems = (items) => {
    const slot = getMenuSlot();
    resetMenuSlot(slot);
    slot.innerHTML = items
      .map(({ label, value }) =>
        \`<modus-wc-menu-item label="\${label}" value="\${value}"></modus-wc-menu-item>\`
      )
      .join('');
  };

  // Fetch on first open. Keep div[slot="menu"] mounted; swap its contents only.
  dropdown.addEventListener('menuVisibilityChange', (e) => {
    if (!e.detail.isVisible || status !== 'idle' || pendingLoad) return;

    pendingLoad = true;
    status = 'loading';
    showLoader();

    window.setTimeout(() => {
      showMenuItems([
        { label: 'Fetched One', value: '1' },
        { label: 'Fetched Two', value: '2' },
        { label: 'Fetched Three', value: '3' },
      ]);
      status = 'ready';
      pendingLoad = false;
    }, 1200);
  });
<\/script>
`}}},render:()=>{let e;const n=U;return r`
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
  button-aria-label="Open lazy menu"
  button-color="primary"
  button-size="sm"
  button-variant="filled"
  @menuVisibilityChange=${o=>{!o.detail.isVisible||n.status!=="idle"||n.pendingLoad||!e||(n.pendingLoad=!0,n.status="loading",G(e),window.setTimeout(()=>{e&&(Q(e,J()),n.status="ready",n.pendingLoad=!1)},1200))}}
  ${q(o=>{e=o||void 0})}
>
  <div slot="button">
    Load on open
    <modus-wc-icon decorative name="expand_more" size="xs"></modus-wc-icon>
  </div>
  <div slot="menu"></div>
</modus-wc-dropdown-menu>
    `}},w={render:e=>{if(!customElements.get("dropdown-menu-shadow-host")){const n=F({componentTag:"modus-wc-dropdown-menu",propsMapper:(t,o)=>{const s=o;if(s.buttonAriaLabel=t["button-aria-label"]||"",s.buttonColor=t["button-color"]||"primary",s.buttonShape=t["button-shape"]||"rectangle",s.buttonSize=t["button-size"],s.buttonVariant=t["button-variant"]||"filled",s.customClass=t["custom-class"]||"",s.disabled=!!t.disabled,s.menuBordered=!!t["menu-bordered"],s.menuOffset=t["menu-offset"]??10,s.menuPlacement=t["menu-placement"],s.menuSize=t["menu-size"],s.menuStrategy=t["menu-strategy"]||"absolute",s.menuVisible=!!t["menu-visible"],!o.hasAttribute("data-layout-built")){o.setAttribute("data-layout-built","");const a=o.parentElement,d=document.createElement("div");d.setAttribute("slot","button"),d.style.cssText="display: flex; align-items: center; gap: 4px;",d.appendChild(document.createTextNode("Button"));const v=document.createElement("modus-wc-icon");v.setAttribute("name","expand_more"),v.setAttribute("size","sm"),d.appendChild(v);const y=document.createElement("div");y.setAttribute("slot","menu"),[{label:"Item One",value:"1"},{label:"Item Two",value:"2"},{label:"Item Three",value:"3"}].forEach(({label:h,value:g})=>{const i=document.createElement("modus-wc-menu-item");i.setAttribute("label",h),i.setAttribute("value",g),y.appendChild(i)}),o.appendChild(d),o.appendChild(y);const u=document.createElement("div");u.style.cssText="font-size: 14px; padding-top: 12px;",u.textContent="Selected Value: ";const f=document.createElement("span");u.appendChild(f),a.appendChild(u),o.addEventListener("itemSelect",h=>{var i;const g=h;f.textContent=((i=g.detail)==null?void 0:i.value)??"",o.menuVisible=!1})}}});customElements.define("dropdown-menu-shadow-host",n)}return r`<dropdown-menu-shadow-host
      .props=${{...e}}
    ></dropdown-menu-shadow-host>`}};var z,x,M;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Template
}`,...(M=(x=m.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var C,L,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(L=c.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var T,I,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var $,D,B;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    actions: {
      handles: ['menuVisibilityChange', 'itemSelect']
    },
    docs: {
      source: {
        code: \`
<style>
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
  const dropdown = document.getElementById('lazy-dropdown');
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
    slot.innerHTML = '<modus-wc-loader variant="spinner" size="sm"></modus-wc-loader>';
  };

  const showMenuItems = (items) => {
    const slot = getMenuSlot();
    resetMenuSlot(slot);
    slot.innerHTML = items
      .map(({ label, value }) =>
        \\\`<modus-wc-menu-item label="\\\${label}" value="\\\${value}"></modus-wc-menu-item>\\\`
      )
      .join('');
  };

  // Fetch on first open. Keep div[slot="menu"] mounted; swap its contents only.
  dropdown.addEventListener('menuVisibilityChange', (e) => {
    if (!e.detail.isVisible || status !== 'idle' || pendingLoad) return;

    pendingLoad = true;
    status = 'loading';
    showLoader();

    window.setTimeout(() => {
      showMenuItems([
        { label: 'Fetched One', value: '1' },
        { label: 'Fetched Two', value: '2' },
        { label: 'Fetched Three', value: '3' },
      ]);
      status = 'ready';
      pendingLoad = false;
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
    const handleVisibilityChange = (event: CustomEvent<{
      isVisible: boolean;
    }>) => {
      if (!event.detail.isVisible || state.status !== 'idle' || state.pendingLoad || !dropdownEl) {
        return;
      }
      state.pendingLoad = true;
      state.status = 'loading';
      showLoader(dropdownEl);
      window.setTimeout(() => {
        if (!dropdownEl) return;
        showMenuItems(dropdownEl, lazyLoadMenuItems());
        state.status = 'ready';
        state.pendingLoad = false;
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
  button-aria-label="Open lazy menu"
  button-color="primary"
  button-size="sm"
  button-variant="filled"
  @menuVisibilityChange=\${handleVisibilityChange}
  \${ref(el => {
      dropdownEl = el ? el as DropdownMenuElement : undefined;
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
}`,...(B=(D=b.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var _,O,j;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(j=(O=w.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const de=["Default","IconOnlyDropdownMenu","WithTreeMenu","LazyLoading","ShadowDomParent"];export{m as Default,c as IconOnlyDropdownMenu,b as LazyLoading,w as ShadowDomParent,p as WithTreeMenu,de as __namedExportsOrder,le as default};
