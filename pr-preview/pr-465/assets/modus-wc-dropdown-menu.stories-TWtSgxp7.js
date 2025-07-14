import{w as p}from"./decorator-D4YmxizW.js";import{x as b}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var r=Object.freeze,w=Object.defineProperty,f=(e,o)=>r(w(e,"raw",{value:r(e.slice())})),a;const g={title:"Components/Dropdown Menu",component:"modus-wc-dropdown-menu",args:{"button-color":"primary","button-size":"md","button-variant":"filled",disabled:!1,"menu-bordered":!0,"menu-offset":14,"menu-placement":"bottom-start","menu-size":"md","menu-visible":!1},argTypes:{"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-size":{control:{type:"select"},options:["xs","sm","md","lg"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"menu-placement":{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"menu-size":{control:{type:"select"},options:["sm","md","lg"]}},decorators:[p],parameters:{actions:{handles:["menuVisibilityChange"]}}},v={render:e=>{let o="";const l=s=>{o=s.detail.value;const m=document.querySelector("#selected-value");m&&(m.textContent=o);const d=s.target.closest("modus-wc-dropdown-menu");d&&(d.menuVisible=!1)};return b(a||(a=f([`
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

<script>
  let selectedValue = '';

  const handleItemSelect = (event: CustomEvent) => {
    // Update the "Selected Value" label
    selectedValue = event.detail.value;
    const displayElement = document.querySelector('#selected-value');
    if (displayElement) {
      displayElement.textContent = selectedValue;
    }

    // Close the dropdown menu when an item is selected
    const dropdownMenu = event.target as HTMLElement;
    const dropdownMenuElement = dropdownMenu.closest(
      'modus-wc-dropdown-menu'
    );
    if (dropdownMenuElement) {
      dropdownMenuElement.menuVisible = false;
    }
  };
<\/script>

<modus-wc-dropdown-menu
  button-color=`,`
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

<div class="value">
  Selected Value:
  <span id="selected-value"></span>
</div>
    `])),t(e["button-color"]),t(e["button-size"]),t(e["button-variant"]),t(e["custom-class"]),e.disabled,e["menu-bordered"],t(e["menu-offset"]),t(e["menu-placement"]),t(e["menu-size"]),e["menu-visible"],l,l,l)}},n={...v};var u,i,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,g as default};
