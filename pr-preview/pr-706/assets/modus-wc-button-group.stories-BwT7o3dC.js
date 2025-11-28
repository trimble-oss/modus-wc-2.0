import{w as q}from"./decorator-D4YmxizW.js";import{x as t}from"./lit-element-C8zulti1.js";import{o}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var c=Object.freeze,P=Object.defineProperty,N=(e,j)=>c(P(e,"raw",{value:c(e.slice())})),m,p;const K={title:"Components/Button Group",component:"modus-wc-button-group",args:{variant:"outlined",color:"primary",disabled:!1,orientation:"horizontal","selection-type":"default"},argTypes:{variant:{control:{type:"select"},options:["borderless","filled","outlined"]},color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},disabled:{control:"boolean"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},"selection-type":{control:{type:"select"},options:["default","single","multiple"]}},decorators:[q],parameters:{actions:{handles:["buttonSelectionChange","buttonGroupClick"]}}},k={render:e=>t`
<modus-wc-button-group
  variant=${o(e.variant)}
  color=${o(e.color)}
  ?disabled=${e.disabled}
  orientation=${o(e.orientation)}
  selection-type=${o(e["selection-type"])}
>
 <modus-wc-button>Button 1</modus-wc-button>
 <modus-wc-button>Button 2</modus-wc-button>
 <modus-wc-button>Button 3</modus-wc-button>
</modus-wc-button-group>
    `},n={...k},u={...k,args:{variant:"outlined",orientation:"vertical"}},s={render:()=>t(m||(m=N([`
<script>
  const handleItemSelect = (event) => {
    // Update the "Selected Value" label
    const selectedValue = event.detail.value;
    const displayElement = document.querySelector('#selected-value');
    if (displayElement) {
      displayElement.textContent = selectedValue;
    }

    // Close the dropdown menu when an item is selected
    const dropdownMenu = event.target;
    const dropdownMenuElement = dropdownMenu.closest(
      'modus-wc-dropdown-menu'
    );
    if (dropdownMenuElement) {
      dropdownMenuElement.menuVisible = false;
    }
  };

 window.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('#split-button-menu modus-wc-menu-item');
    menuItems.forEach(item =>
      item.addEventListener('itemSelect', handleItemSelect)
    );
  });
<\/script>

<div style="display: flex; flex-direction: column; gap: 16px; min-height: 300px;">
  <modus-wc-button-group variant="outlined">
    <modus-wc-button>Save Document</modus-wc-button>
    <modus-wc-dropdown-menu 
      menu-placement="bottom-end"
      menu-size="lg"
    >
      <div slot="button">
        <modus-wc-icon name="expand_more" size="16"></modus-wc-icon>
      </div>
      
      <div slot="menu" id="split-button-menu">
        <modus-wc-menu-item label="Save as Draft" value="Save as Draft"></modus-wc-menu-item>
        <modus-wc-menu-item label="Save as Template" value="Save as Template"></modus-wc-menu-item>
        <modus-wc-menu-item label="Save and Share" value="Save and Share"></modus-wc-menu-item>
      </div>
    </modus-wc-dropdown-menu>
  </modus-wc-button-group>

    <div style="display: flex; gap: 8px;">
    <modus-wc-typography hierarchy="h4">Selected Option:</modus-wc-typography> 
    <modus-wc-typography id="selected-value"></modus-wc-typography>
  </div>
</div>
    `])))},i={render:()=>t`
<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <h4 style="margin-bottom: 8px;">Single Selection (Only one button can be active at a time)</h4>
    <modus-wc-button-group selection-type="single" variant="outlined">
      <modus-wc-button>Option 1</modus-wc-button>
      <modus-wc-button pressed>Option 2</modus-wc-button>
      <modus-wc-button>Option 3</modus-wc-button>
      <modus-wc-button>Option 4</modus-wc-button>
    </modus-wc-button-group>
  </div>
  
  <div>
    <h4 style="margin-bottom: 8px;">Vertical Single Selection</h4>
    <modus-wc-button-group selection-type="single" orientation="vertical" variant="outlined">
      <modus-wc-button pressed>Option 1</modus-wc-button>
      <modus-wc-button>Option 2</modus-wc-button>
      <modus-wc-button>Option 3</modus-wc-button>
      <modus-wc-button>Option 4</modus-wc-button>
    </modus-wc-button-group>
  </div>
</div>
    `},d={render:()=>t`
<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <h4 style="margin-bottom: 8px;">Multiple Selection (Multiple buttons can be active)</h4>
    <modus-wc-button-group selection-type="multiple" variant="outlined">
      <modus-wc-button pressed>Bold</modus-wc-button>
      <modus-wc-button>Italic</modus-wc-button>
      <modus-wc-button pressed>Underline</modus-wc-button>
      <modus-wc-button>Strikethrough</modus-wc-button>
    </modus-wc-button-group>
  </div>
  
  <div>
    <h4 style="margin-bottom: 8px;">Multiple Selection with Icons</h4>
    <modus-wc-button-group selection-type="multiple" variant="outlined" color="primary">
      <modus-wc-button pressed icon-only aria-label="Align left">
        <modus-wc-icon name="align_left" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button pressed icon-only aria-label="Align center">
        <modus-wc-icon name="align_top" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button icon-only aria-label="Align right">
        <modus-wc-icon name="align_right" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button icon-only aria-label="Align justify">
        <modus-wc-icon name="align_bottom" size="16"></modus-wc-icon>
      </modus-wc-button>
    </modus-wc-button-group>
  </div>
</div>
    `},l={render:()=>t(p||(p=N([`
<script>
  window.addEventListener('DOMContentLoaded', () => {
    const buttonGroup = document.querySelector('#event-demo-group');
    if (buttonGroup) {
      buttonGroup.addEventListener('buttonSelectionChange', (event) => {
        const selectedButtons = event.detail.selectedButtons;
        const buttonTexts = selectedButtons.map(btn => btn.textContent.trim());
        
        // Update the display
        const displayElement = document.querySelector('#selected-buttons-display');
        if (displayElement) {
          displayElement.textContent = buttonTexts.length > 0 
            ? buttonTexts.join(', ') 
            : 'None';
        }
      });
    }
  });
<\/script>

<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <modus-wc-button-group 
      id="event-demo-group"
      selection-type="single" 
      variant="outlined"
      color="primary"
    >
      <modus-wc-button>Apple</modus-wc-button>
      <modus-wc-button>Banana</modus-wc-button>
      <modus-wc-button>Cherry</modus-wc-button>
      <modus-wc-button>Date</modus-wc-button>
    </modus-wc-button-group>
  </div>
  
  <div style="display: flex; gap: 8px;">
    <modus-wc-typography hierarchy="h4">Selected Button(s):</modus-wc-typography> 
    <modus-wc-typography id="selected-buttons-display"></modus-wc-typography>
  </div>

    `])))},a={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n- The `size` prop has been removed. Button sizes are now controlled individually on each button within the group.\n- Selection state is now managed internally - the `selected` attribute on individual buttons is no longer used.\n- Shadow DOM has been removed (`shadow: false`) for better composability.\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop        | Notes                                                                    |\n|-----------------|-----------------|--------------------------------------------------------------------------|\n| aria-label      | aria-label      | Unchanged                                                                |\n| aria-disabled   | -               | Removed. Use `disabled` prop instead                                   |\n| button-style    | variant         | Values changed: `fill` → `filled`, `outline` → `outlined`        |\n| color           | color           | `special` color removed. Other values unchanged                        |\n| disabled        | disabled        | Unchanged                                                                |\n| -               | orientation     | New in 2.0. Controls horizontal/vertical layout                          |\n| selection-type  | selection-type  | Values changed: `none` → `default`, `single` and `multiple` unchanged |\n| size            | -               | Removed. Control size on individual buttons                              |\n\n#### Event Mapping\n\n| 1.0 Event              | 2.0 Event              | Notes                                                      |\n|------------------------|------------------------|------------------------------------------------------------|\n| buttonGroupClick       | buttonGroupClick       | Event detail changed: now includes `{ button, isSelected }` |\n| buttonSelectionChange  | buttonSelectionChange  | Returns array of selected buttons                             |\n   "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>t`<div></div>`},r={render:()=>t`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <modus-wc-button-group variant="outlined">
          <modus-wc-button>Button</modus-wc-button>
           <modus-wc-select  bordered=""  size="md"></modus-wc-select>

          <modus-wc-text-input placeholder="Text input"></modus-wc-text-input>
        </modus-wc-button-group>
      </div>
    `};var b,w,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var g,y,h;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: 'outlined',
    orientation: 'vertical'
  }
}`,...(h=(y=u.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,f,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<script>
  const handleItemSelect = (event) => {
    // Update the "Selected Value" label
    const selectedValue = event.detail.value;
    const displayElement = document.querySelector('#selected-value');
    if (displayElement) {
      displayElement.textContent = selectedValue;
    }

    // Close the dropdown menu when an item is selected
    const dropdownMenu = event.target;
    const dropdownMenuElement = dropdownMenu.closest(
      'modus-wc-dropdown-menu'
    );
    if (dropdownMenuElement) {
      dropdownMenuElement.menuVisible = false;
    }
  };

 window.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('#split-button-menu modus-wc-menu-item');
    menuItems.forEach(item =>
      item.addEventListener('itemSelect', handleItemSelect)
    );
  });
<\/script>

<div style="display: flex; flex-direction: column; gap: 16px; min-height: 300px;">
  <modus-wc-button-group variant="outlined">
    <modus-wc-button>Save Document</modus-wc-button>
    <modus-wc-dropdown-menu 
      menu-placement="bottom-end"
      menu-size="lg"
    >
      <div slot="button">
        <modus-wc-icon name="expand_more" size="16"></modus-wc-icon>
      </div>
      
      <div slot="menu" id="split-button-menu">
        <modus-wc-menu-item label="Save as Draft" value="Save as Draft"></modus-wc-menu-item>
        <modus-wc-menu-item label="Save as Template" value="Save as Template"></modus-wc-menu-item>
        <modus-wc-menu-item label="Save and Share" value="Save and Share"></modus-wc-menu-item>
      </div>
    </modus-wc-dropdown-menu>
  </modus-wc-button-group>

    <div style="display: flex; gap: 8px;">
    <modus-wc-typography hierarchy="h4">Selected Option:</modus-wc-typography> 
    <modus-wc-typography id="selected-value"></modus-wc-typography>
  </div>
</div>
    \`;
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var E,C,O;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <h4 style="margin-bottom: 8px;">Single Selection (Only one button can be active at a time)</h4>
    <modus-wc-button-group selection-type="single" variant="outlined">
      <modus-wc-button>Option 1</modus-wc-button>
      <modus-wc-button pressed>Option 2</modus-wc-button>
      <modus-wc-button>Option 3</modus-wc-button>
      <modus-wc-button>Option 4</modus-wc-button>
    </modus-wc-button-group>
  </div>
  
  <div>
    <h4 style="margin-bottom: 8px;">Vertical Single Selection</h4>
    <modus-wc-button-group selection-type="single" orientation="vertical" variant="outlined">
      <modus-wc-button pressed>Option 1</modus-wc-button>
      <modus-wc-button>Option 2</modus-wc-button>
      <modus-wc-button>Option 3</modus-wc-button>
      <modus-wc-button>Option 4</modus-wc-button>
    </modus-wc-button-group>
  </div>
</div>
    \`;
  }
}`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var M,z,B;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <h4 style="margin-bottom: 8px;">Multiple Selection (Multiple buttons can be active)</h4>
    <modus-wc-button-group selection-type="multiple" variant="outlined">
      <modus-wc-button pressed>Bold</modus-wc-button>
      <modus-wc-button>Italic</modus-wc-button>
      <modus-wc-button pressed>Underline</modus-wc-button>
      <modus-wc-button>Strikethrough</modus-wc-button>
    </modus-wc-button-group>
  </div>
  
  <div>
    <h4 style="margin-bottom: 8px;">Multiple Selection with Icons</h4>
    <modus-wc-button-group selection-type="multiple" variant="outlined" color="primary">
      <modus-wc-button pressed icon-only aria-label="Align left">
        <modus-wc-icon name="align_left" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button pressed icon-only aria-label="Align center">
        <modus-wc-icon name="align_top" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button icon-only aria-label="Align right">
        <modus-wc-icon name="align_right" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button icon-only aria-label="Align justify">
        <modus-wc-icon name="align_bottom" size="16"></modus-wc-icon>
      </modus-wc-button>
    </modus-wc-button-group>
  </div>
</div>
    \`;
  }
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var _,T,D;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<script>
  window.addEventListener('DOMContentLoaded', () => {
    const buttonGroup = document.querySelector('#event-demo-group');
    if (buttonGroup) {
      buttonGroup.addEventListener('buttonSelectionChange', (event) => {
        const selectedButtons = event.detail.selectedButtons;
        const buttonTexts = selectedButtons.map(btn => btn.textContent.trim());
        
        // Update the display
        const displayElement = document.querySelector('#selected-buttons-display');
        if (displayElement) {
          displayElement.textContent = buttonTexts.length > 0 
            ? buttonTexts.join(', ') 
            : 'None';
        }
      });
    }
  });
<\/script>

<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <modus-wc-button-group 
      id="event-demo-group"
      selection-type="single" 
      variant="outlined"
      color="primary"
    >
      <modus-wc-button>Apple</modus-wc-button>
      <modus-wc-button>Banana</modus-wc-button>
      <modus-wc-button>Cherry</modus-wc-button>
      <modus-wc-button>Date</modus-wc-button>
    </modus-wc-button-group>
  </div>
  
  <div style="display: flex; gap: 8px;">
    <modus-wc-typography hierarchy="h4">Selected Button(s):</modus-wc-typography> 
    <modus-wc-typography id="selected-buttons-display"></modus-wc-typography>
  </div>

    \`;
  }
}`,...(D=(T=l.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var V,G,A;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

- The \\\`size\\\` prop has been removed. Button sizes are now controlled individually on each button within the group.
- Selection state is now managed internally - the \\\`selected\\\` attribute on individual buttons is no longer used.
- Shadow DOM has been removed (\\\`shadow: false\\\`) for better composability.

#### Prop Mapping

| 1.0 Prop        | 2.0 Prop        | Notes                                                                    |
|-----------------|-----------------|--------------------------------------------------------------------------|
| aria-label      | aria-label      | Unchanged                                                                |
| aria-disabled   | -               | Removed. Use \\\`disabled\\\` prop instead                                   |
| button-style    | variant         | Values changed: \\\`fill\\\` → \\\`filled\\\`, \\\`outline\\\` → \\\`outlined\\\`        |
| color           | color           | \\\`special\\\` color removed. Other values unchanged                        |
| disabled        | disabled        | Unchanged                                                                |
| -               | orientation     | New in 2.0. Controls horizontal/vertical layout                          |
| selection-type  | selection-type  | Values changed: \\\`none\\\` → \\\`default\\\`, \\\`single\\\` and \\\`multiple\\\` unchanged |
| size            | -               | Removed. Control size on individual buttons                              |

#### Event Mapping

| 1.0 Event              | 2.0 Event              | Notes                                                      |
|------------------------|------------------------|------------------------------------------------------------|
| buttonGroupClick       | buttonGroupClick       | Event detail changed: now includes \\\`{ button, isSelected }\\\` |
| buttonSelectionChange  | buttonSelectionChange  | Returns array of selected buttons                             |
   \`
      }
    },
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  render: () => html\`<div></div>\`
}`,...(A=(G=a.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var I,L,U;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <modus-wc-button-group variant="outlined">
          <modus-wc-button>Button</modus-wc-button>
           <modus-wc-select  bordered=""  size="md"></modus-wc-select>

          <modus-wc-text-input placeholder="Text input"></modus-wc-text-input>
        </modus-wc-button-group>
      </div>
    \`;
  }
}`,...(U=(L=r.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};const Q=["Default","Vertical","SplitButton","SingleSelection","MultipleSelection","SelectionEvent","Migration","NonButtonGroup"];export{n as Default,a as Migration,d as MultipleSelection,r as NonButtonGroup,l as SelectionEvent,i as SingleSelection,s as SplitButton,u as Vertical,Q as __namedExportsOrder,K as default};
