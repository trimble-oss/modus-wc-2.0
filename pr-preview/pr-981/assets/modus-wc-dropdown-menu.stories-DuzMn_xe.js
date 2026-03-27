import{w as f}from"./decorator-D4YmxizW.js";import{x as y}from"./lit-element-CucEn6F2.js";import{o as n}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var u=Object.freeze,h=Object.defineProperty,S=(e,s)=>u(h(e,"raw",{value:u(e.slice())})),i;const V={title:"Components/Dropdown Menu",component:"modus-wc-dropdown-menu",args:{"button-aria-label":"Dropdown menu button","button-color":"primary","button-shape":"rectangle","button-size":"md","button-variant":"filled",disabled:!1,"menu-bordered":!0,"menu-offset":14,"menu-placement":"bottom-start","menu-size":"md","menu-visible":!1},argTypes:{"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-size":{control:{type:"select"},options:["xs","sm","md","lg"]},"button-shape":{control:{type:"select"},options:["circle","ellipse","rectangle","square"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"menu-placement":{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"menu-size":{control:{type:"select"},options:["sm","md","lg"]}},decorators:[f],parameters:{actions:{handles:["menuVisibilityChange"]}}},g={render:e=>{let s="";const l=d=>{s=d.detail.value;const m=document.querySelector("#selected-value");m&&(m.textContent=s);const r=d.target.closest("modus-wc-dropdown-menu");r&&(r.menuVisible=!1)};return y(i||(i=S([`
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
    `])),n(e["button-aria-label"]),n(e["button-color"]),n(e["button-shape"]),n(e["button-size"]),n(e["button-variant"]),n(e["custom-class"]),e.disabled,e["menu-bordered"],n(e["menu-offset"]),n(e["menu-placement"]),n(e["menu-size"]),e["menu-visible"],l,l,l)}},t={...g},o={render:()=>y`
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
    `};var a,c,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var w,b,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const O=["Default","IconOnlyDropdownMenu"];export{t as Default,o as IconOnlyDropdownMenu,O as __namedExportsOrder,V as default};
