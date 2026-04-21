import{w as V}from"./decorator-D4YmxizW.js";import{x as v}from"./lit-element-CucEn6F2.js";import{o as l}from"./if-defined-BiZP-SBN.js";import{c as T}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var S=Object.freeze,O=Object.defineProperty,_=(e,d)=>S(O(e,"raw",{value:S(e.slice())})),y;const N={title:"Components/Dropdown Menu",component:"modus-wc-dropdown-menu",args:{"button-aria-label":"Dropdown menu button","button-color":"primary","button-shape":"rectangle","button-size":"md","button-variant":"filled",disabled:!1,"menu-bordered":!0,"menu-offset":14,"menu-placement":"bottom-start","menu-size":"md","menu-visible":!1},argTypes:{"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-size":{control:{type:"select"},options:["xs","sm","md","lg"]},"button-shape":{control:{type:"select"},options:["circle","ellipse","rectangle","square"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"menu-placement":{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"menu-size":{control:{type:"select"},options:["sm","md","lg"]}},decorators:[V],parameters:{actions:{handles:["menuVisibilityChange"]}}},B={render:e=>{let d="";const n=o=>{d=o.detail.value;const t=document.querySelector("#selected-value");t&&(t.textContent=d);const a=o.target.closest("modus-wc-dropdown-menu");a&&(a.menuVisible=!1)};return v(y||(y=_([`
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
    `])),l(e["button-aria-label"]),l(e["button-color"]),l(e["button-shape"]),l(e["button-size"]),l(e["button-variant"]),l(e["custom-class"]),e.disabled,e["menu-bordered"],l(e["menu-offset"]),l(e["menu-placement"]),l(e["menu-size"]),e["menu-visible"],n,n,n)}},r={...B},m={render:()=>v`
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
    `},i={render:e=>{if(!customElements.get("dropdown-menu-shadow-host")){const d=T({componentTag:"modus-wc-dropdown-menu",propsMapper:(n,o)=>{const t=o;if(t.buttonAriaLabel=n["button-aria-label"]||"",t.buttonColor=n["button-color"]||"primary",t.buttonShape=n["button-shape"]||"rectangle",t.buttonSize=n["button-size"],t.buttonVariant=n["button-variant"]||"filled",t.customClass=n["custom-class"]||"",t.disabled=!!n.disabled,t.menuBordered=!!n["menu-bordered"],t.menuOffset=n["menu-offset"]??10,t.menuPlacement=n["menu-placement"],t.menuSize=n["menu-size"],t.menuVisible=!!n["menu-visible"],!o.hasAttribute("data-layout-built")){o.setAttribute("data-layout-built","");const h=o.parentElement,a=document.createElement("div");a.setAttribute("slot","button"),a.style.cssText="display: flex; align-items: center; gap: 4px;",a.appendChild(document.createTextNode("Button"));const c=document.createElement("modus-wc-icon");c.setAttribute("name","expand_more"),c.setAttribute("size","sm"),a.appendChild(c);const p=document.createElement("div");p.setAttribute("slot","menu"),[{label:"Item One",value:"1"},{label:"Item Two",value:"2"},{label:"Item Three",value:"3"}].forEach(({label:b,value:w})=>{const s=document.createElement("modus-wc-menu-item");s.setAttribute("label",b),s.setAttribute("value",w),p.appendChild(s)}),o.appendChild(a),o.appendChild(p);const u=document.createElement("div");u.style.cssText="font-size: 14px; padding-top: 12px;",u.textContent="Selected Value: ";const f=document.createElement("span");u.appendChild(f),h.appendChild(u),o.addEventListener("itemSelect",b=>{var s;const w=b;f.textContent=((s=w.detail)==null?void 0:s.value)??"",o.menuVisible=!1})}}});customElements.define("dropdown-menu-shadow-host",d)}return v`<dropdown-menu-shadow-host
      .props=${{...e}}
    ></dropdown-menu-shadow-host>`}};var E,g,x;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,z,A;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var I,D,M;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const $=["Default","IconOnlyDropdownMenu","ShadowDomParent"];export{r as Default,m as IconOnlyDropdownMenu,i as ShadowDomParent,$ as __namedExportsOrder,N as default};
