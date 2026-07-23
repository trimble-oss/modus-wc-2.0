import{w as _}from"./decorator-D4YmxizW.js";import{b as p}from"./lit-element-DgBvYnzn.js";import{o as n}from"./if-defined-BnVFTJ4o.js";import{c as P}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var S=Object.freeze,O=Object.defineProperty,j=(e,d)=>S(O(e,"raw",{value:S(e.slice())})),g;const U={title:"Components/Dropdown Menu",component:"modus-wc-dropdown-menu",args:{"button-aria-label":"Dropdown menu button","button-color":"primary","button-shape":"rectangle","button-size":"md","button-variant":"filled",disabled:!1,"menu-bordered":!0,"menu-offset":14,"menu-placement":"bottom-start","menu-size":"md","menu-strategy":"absolute","menu-visible":!1},argTypes:{"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-size":{control:{type:"select"},options:["xs","sm","md","lg","xl"]},"button-shape":{control:{type:"select"},options:["circle","ellipse","rectangle","square"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"menu-placement":{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"menu-size":{control:{type:"select"},options:["sm","md","lg"]},"menu-strategy":{control:{type:"select"},options:["absolute","fixed"]}},decorators:[_],parameters:{actions:{handles:["menuVisibilityChange"]}}},L={render:e=>{let d="";const t=s=>{d=s.detail.value;const o=document.querySelector("#selected-value");o&&(o.textContent=d);const l=s.target.closest("modus-wc-dropdown-menu");l&&(l.menuVisible=!1)};return p(g||(g=j([`
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
    `])),n(e["button-aria-label"]),n(e["button-color"]),n(e["button-shape"]),n(e["button-size"]),n(e["button-variant"]),n(e["custom-class"]),e.disabled,e["menu-bordered"],n(e["menu-offset"]),n(e["menu-placement"]),n(e["menu-size"]),n(e["menu-strategy"]),e["menu-visible"],t,t,t)}},r={...L},m={render:()=>p`
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
    `},i={args:{"menu-bordered":!1,"menu-placement":"bottom-end","menu-size":"sm"},parameters:{actions:{handles:["menuVisibilityChange","itemSelect"]},docs:{source:{code:`
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
`}}},render:e=>{const d=t=>{const s=document.querySelector("#tree-dropdown-selected-value");s&&(s.textContent=t.detail.value);const o=t.target.closest("modus-wc-dropdown-menu");o&&(o.menuVisible=!1)};return p`
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
  button-aria-label=${n(e["button-aria-label"])}
  button-color=${n(e["button-color"])}
  button-shape=${n(e["button-shape"])}
  button-size=${n(e["button-size"])}
  button-variant=${n(e["button-variant"])}
  custom-class=${n(e["custom-class"])}
  ?disabled=${e.disabled}
  ?menu-bordered=${e["menu-bordered"]}
  menu-offset=${n(e["menu-offset"])}
  menu-placement=${n(e["menu-placement"])}
  menu-size=${n(e["menu-size"])}
  menu-strategy=${n(e["menu-strategy"])}
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
        @itemSelect=${d}
      ></modus-wc-tree-item>
      <modus-wc-tree-item
        label="Explorer"
        value="explorer"
        @itemSelect=${d}
      ></modus-wc-tree-item>
    </modus-wc-tree-menu>
</modus-wc-dropdown-menu>

<div class="value">
  Selected Value:
  <span id="tree-dropdown-selected-value"></span>
</div>
    `}},c={render:e=>{if(!customElements.get("dropdown-menu-shadow-host")){const d=P({componentTag:"modus-wc-dropdown-menu",propsMapper:(t,s)=>{const o=s;if(o.buttonAriaLabel=t["button-aria-label"]||"",o.buttonColor=t["button-color"]||"primary",o.buttonShape=t["button-shape"]||"rectangle",o.buttonSize=t["button-size"],o.buttonVariant=t["button-variant"]||"filled",o.customClass=t["custom-class"]||"",o.disabled=!!t.disabled,o.menuBordered=!!t["menu-bordered"],o.menuOffset=t["menu-offset"]??10,o.menuPlacement=t["menu-placement"],o.menuSize=t["menu-size"],o.menuStrategy=t["menu-strategy"]||"absolute",o.menuVisible=!!t["menu-visible"],!s.hasAttribute("data-layout-built")){s.setAttribute("data-layout-built","");const h=s.parentElement,l=document.createElement("div");l.setAttribute("slot","button"),l.style.cssText="display: flex; align-items: center; gap: 4px;",l.appendChild(document.createTextNode("Button"));const b=document.createElement("modus-wc-icon");b.setAttribute("name","expand_more"),b.setAttribute("size","sm"),l.appendChild(b);const w=document.createElement("div");w.setAttribute("slot","menu"),[{label:"Item One",value:"1"},{label:"Item Two",value:"2"},{label:"Item Three",value:"3"}].forEach(({label:v,value:f})=>{const a=document.createElement("modus-wc-menu-item");a.setAttribute("label",v),a.setAttribute("value",f),w.appendChild(a)}),s.appendChild(l),s.appendChild(w);const u=document.createElement("div");u.style.cssText="font-size: 14px; padding-top: 12px;",u.textContent="Selected Value: ";const y=document.createElement("span");u.appendChild(y),h.appendChild(u),s.addEventListener("itemSelect",v=>{var a;const f=v;y.textContent=((a=f.detail)==null?void 0:a.value)??"",s.menuVisible=!1})}}});customElements.define("dropdown-menu-shadow-host",d)}return p`<dropdown-menu-shadow-host
      .props=${{...e}}
    ></dropdown-menu-shadow-host>`}};var E,x,z;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template
}`,...(z=(x=r.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var C,V,$;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...($=(V=m.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var D,I,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(I=i.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var T,A,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const F=["Default","IconOnlyDropdownMenu","WithTreeMenu","ShadowDomParent"];export{r as Default,m as IconOnlyDropdownMenu,c as ShadowDomParent,i as WithTreeMenu,F as __namedExportsOrder,U as default};
