import{w as I}from"./decorator-D4YmxizW.js";import{x as h}from"./lit-element-CucEn6F2.js";import{o}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var v=Object.freeze,M=Object.defineProperty,T=(n,t)=>v(M(n,"raw",{value:v(n.slice())})),f;const k={title:"Components/Dropdown Menu",component:"modus-wc-dropdown-menu",args:{"button-aria-label":"Dropdown menu button","button-color":"primary","button-shape":"rectangle","button-size":"md","button-variant":"filled",disabled:!1,"menu-bordered":!0,"menu-offset":14,"menu-placement":"bottom-start","menu-size":"md","menu-visible":!1},argTypes:{"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-size":{control:{type:"select"},options:["xs","sm","md","lg"]},"button-shape":{control:{type:"select"},options:["circle","ellipse","rectangle","square"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"menu-placement":{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"menu-size":{control:{type:"select"},options:["sm","md","lg"]}},decorators:[I],parameters:{actions:{handles:["menuVisibilityChange"]}}},D={render:n=>{let t="";const e=r=>{t=r.detail.value;const s=document.querySelector("#selected-value");s&&(s.textContent=t);const l=r.target.closest("modus-wc-dropdown-menu");l&&(l.menuVisible=!1)};return h(f||(f=T([`
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
    `])),o(n["button-aria-label"]),o(n["button-color"]),o(n["button-shape"]),o(n["button-size"]),o(n["button-variant"]),o(n["custom-class"]),n.disabled,n["menu-bordered"],o(n["menu-offset"]),o(n["menu-placement"]),o(n["menu-size"]),n["menu-visible"],e,e,e)}},i={...D},c={render:()=>h`
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
    `},p={render:n=>(customElements.get("dropdown-menu-shadow-host")||customElements.define("dropdown-menu-shadow-host",class extends HTMLElement{constructor(){super(),this.themeObserver=null;const t=this.attachShadow({mode:"open"}),e=document.createElement("div");e.style.display="contents";const r=()=>{const d=document.documentElement.getAttribute("data-theme");d&&e.setAttribute("data-theme",d)};r(),this.themeObserver=new MutationObserver(r),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),this.dropdownEl=document.createElement("modus-wc-dropdown-menu");const s=document.createElement("div");s.setAttribute("slot","button"),s.style.cssText="display: flex; align-items: center; gap: 4px;",s.appendChild(document.createTextNode("Button"));const u=document.createElement("modus-wc-icon");u.setAttribute("name","expand_more"),u.setAttribute("size","sm"),s.appendChild(u);const l=document.createElement("div");l.setAttribute("slot","menu"),[{label:"Item One",value:"1"},{label:"Item Two",value:"2"},{label:"Item Three",value:"3"}].forEach(({label:d,value:b})=>{const a=document.createElement("modus-wc-menu-item");a.setAttribute("label",d),a.setAttribute("value",b),l.appendChild(a)}),this.dropdownEl.appendChild(s),this.dropdownEl.appendChild(l);const m=document.createElement("div");m.style.cssText="font-size: 14px; padding-top: 12px;",m.textContent="Selected Value: ";const w=document.createElement("span");m.appendChild(w),this.dropdownEl.addEventListener("itemSelect",d=>{var a;const b=d;w.textContent=((a=b.detail)==null?void 0:a.value)??"",this.dropdownEl.menuVisible=!1}),e.appendChild(this.dropdownEl),e.appendChild(m),t.appendChild(e)}set props(t){this._props=t;const e=this.dropdownEl;e.buttonAriaLabel=t["button-aria-label"]||"",e.buttonColor=t["button-color"]||"primary",e.buttonShape=t["button-shape"]||"rectangle",e.buttonSize=t["button-size"],e.buttonVariant=t["button-variant"]||"filled",e.customClass=t["custom-class"]||"",e.disabled=!!t.disabled,e.menuBordered=!!t["menu-bordered"],e.menuOffset=t["menu-offset"]??10,e.menuPlacement=t["menu-placement"],e.menuSize=t["menu-size"],e.menuVisible=!!t["menu-visible"]}get props(){return this._props||{}}disconnectedCallback(){this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=null)}}),h`<dropdown-menu-shadow-host
      .props=${{...n}}
    ></dropdown-menu-shadow-host>`)};var y,E,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var g,x,C;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var z,O,A;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('dropdown-menu-shadow-host')) {
      customElements.define('dropdown-menu-shadow-host', class extends HTMLElement {
        private dropdownEl!: HTMLElement;
        private _props: DropdownMenuArgs | undefined;
        private themeObserver: MutationObserver | null = null;
        constructor() {
          super();
          const root = this.attachShadow({
            mode: 'open'
          });
          const wrapper = document.createElement('div');
          wrapper.style.display = 'contents';
          const syncTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme) wrapper.setAttribute('data-theme', theme);
          };
          syncTheme();
          this.themeObserver = new MutationObserver(syncTheme);
          this.themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
          });

          // Dropdown
          this.dropdownEl = document.createElement('modus-wc-dropdown-menu');
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
          this.dropdownEl.appendChild(buttonSlot);
          this.dropdownEl.appendChild(menuSlot);

          // Selected value display
          const valueDiv = document.createElement('div');
          valueDiv.style.cssText = 'font-size: 14px; padding-top: 12px;';
          valueDiv.textContent = 'Selected Value: ';
          const valueSpan = document.createElement('span');
          valueDiv.appendChild(valueSpan);
          this.dropdownEl.addEventListener('itemSelect', (e: Event) => {
            const custom = e as CustomEvent<{
              value: string;
            }>;
            valueSpan.textContent = custom.detail?.value ?? '';
            (this.dropdownEl as unknown as {
              menuVisible: boolean;
            }).menuVisible = false;
          });
          wrapper.appendChild(this.dropdownEl);
          wrapper.appendChild(valueDiv);
          root.appendChild(wrapper);
        }
        set props(value: DropdownMenuArgs) {
          this._props = value;
          const el = this.dropdownEl as unknown as {
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
          el.buttonAriaLabel = value['button-aria-label'] || '';
          el.buttonColor = value['button-color'] || 'primary';
          el.buttonShape = value['button-shape'] || 'rectangle';
          el.buttonSize = value['button-size'] as DaisySize;
          el.buttonVariant = value['button-variant'] || 'filled';
          el.customClass = value['custom-class'] || '';
          el.disabled = Boolean(value.disabled);
          el.menuBordered = Boolean(value['menu-bordered']);
          el.menuOffset = value['menu-offset'] ?? 10;
          el.menuPlacement = value['menu-placement'] as PopoverPlacement;
          el.menuSize = value['menu-size'] as ModusSize;
          el.menuVisible = Boolean(value['menu-visible']);
        }
        get props() {
          return this._props || {} as DropdownMenuArgs;
        }
        disconnectedCallback() {
          if (this.themeObserver) {
            this.themeObserver.disconnect();
            this.themeObserver = null;
          }
        }
      });
    }
    return html\`<dropdown-menu-shadow-host
      .props=\${{
      ...args
    }}
    ></dropdown-menu-shadow-host>\`;
  }
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const q=["Default","IconOnlyDropdownMenu","ShadowDomParent"];export{i as Default,c as IconOnlyDropdownMenu,p as ShadowDomParent,q as __namedExportsOrder,k as default};
