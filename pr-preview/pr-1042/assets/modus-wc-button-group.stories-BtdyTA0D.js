import{w as j}from"./decorator-D4YmxizW.js";import{x as e}from"./lit-element-CucEn6F2.js";import{o as s}from"./if-defined-BiZP-SBN.js";import{c as R}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var w=Object.freeze,F=Object.defineProperty,H=(t,b)=>w(F(t,"raw",{value:w(t.slice())})),g,v;const Z={title:"Components/Button Group",component:"modus-wc-button-group",args:{variant:"outlined",color:"primary",disabled:!1,orientation:"horizontal","selection-type":"default"},argTypes:{variant:{control:{type:"select"},options:["borderless","filled","outlined"]},color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},disabled:{control:"boolean"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},"selection-type":{control:{type:"select"},options:["default","single","multiple"]}},decorators:[j],parameters:{actions:{handles:["buttonSelectionChange","buttonGroupClick"]}}},$={render:t=>e`
<modus-wc-button-group
  variant=${s(t.variant)}
  color=${s(t.color)}
  ?disabled=${t.disabled}
  orientation=${s(t.orientation)}
  selection-type=${s(t["selection-type"])}
>
 <modus-wc-button>Button 1</modus-wc-button>
 <modus-wc-button>Button 2</modus-wc-button>
 <modus-wc-button>Button 3</modus-wc-button>
</modus-wc-button-group>
    `},u={...$},i={...$,args:{variant:"outlined",orientation:"vertical"}},d={render:()=>e(g||(g=H([`
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
    `])))},a={render:()=>e`
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
    `},r={render:()=>e`
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
    `},l={render:()=>e(v||(v=H([`
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

    `])))},c={render:t=>{if(!customElements.get("button-group-shadow-host")){const b=R({componentTag:"modus-wc-button-group",propsMapper:(o,p)=>{const n=p;n.variant=o.variant,n.color=o.color,n.disabled=!!o.disabled,n.orientation=o.orientation,n.selectionType=o["selection-type"],p.hasChildNodes()||(p.innerHTML="<modus-wc-button>Button 1</modus-wc-button><modus-wc-button>Button 2</modus-wc-button><modus-wc-button>Button 3</modus-wc-button>")}});customElements.define("button-group-shadow-host",b)}return e`<button-group-shadow-host
      .props=${{...t}}
    ></button-group-shadow-host>`}},m={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n- The `size` prop has been removed. Button sizes are now controlled individually on each button within the group.\n- Selection state is now managed internally - the `selected` attribute on individual buttons is no longer used.\n- Shadow DOM has been removed (`shadow: false`) for better composability.\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop        | Notes                                                                    |\n|-----------------|-----------------|--------------------------------------------------------------------------|\n| aria-label      | aria-label      | Unchanged                                                                |\n| aria-disabled   | -               | Removed. Use `disabled` prop instead                                   |\n| button-style    | variant         | Values changed: `fill` → `filled`, `outline` → `outlined`        |\n| color           | color           | `special` color removed. Other values unchanged                        |\n| disabled        | disabled        | Unchanged                                                                |\n| -               | orientation     | New in 2.0. Controls horizontal/vertical layout                          |\n| selection-type  | selection-type  | Values changed: `none` → `default`, `single` and `multiple` unchanged |\n| size            | -               | Removed. Control size on individual buttons                              |\n\n#### Event Mapping\n\n| 1.0 Event              | 2.0 Event              | Notes                                                      |\n|------------------------|------------------------|------------------------------------------------------------|\n| buttonGroupClick       | buttonGroupClick       | Event detail changed: now includes `{ button, isSelected }` |\n| buttonSelectionChange  | buttonSelectionChange  | Returns array of selected buttons                             |\n   "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>e`<div></div>`};var h,y,S;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...(S=(y=u.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,x,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: 'outlined',
    orientation: 'vertical'
  }
}`,...(E=(x=i.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var C,B,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(B=d.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var O,z,T;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(T=(z=a.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var _,D,G;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(D=r.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var V,A,L;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(A=l.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var I,U,N;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('button-group-shadow-host')) {
      const ButtonGroupShadowHost = createShadowHostClass<ButtonGroupArgs>({
        componentTag: 'modus-wc-button-group',
        propsMapper: (v: ButtonGroupArgs, el: HTMLElement) => {
          const bgEl = el as unknown as {
            variant: string;
            color: string;
            disabled: boolean;
            orientation: string;
            selectionType: string;
          };
          bgEl.variant = v.variant;
          bgEl.color = v.color;
          bgEl.disabled = Boolean(v.disabled);
          bgEl.orientation = v.orientation;
          bgEl.selectionType = v['selection-type'];
          if (!el.hasChildNodes()) {
            el.innerHTML = \`<modus-wc-button>Button 1</modus-wc-button><modus-wc-button>Button 2</modus-wc-button><modus-wc-button>Button 3</modus-wc-button>\`;
          }
        }
      });
      customElements.define('button-group-shadow-host', ButtonGroupShadowHost);
    }
    return html\`<button-group-shadow-host
      .props=\${{
      ...args
    }}
    ></button-group-shadow-host>\`;
  }
}`,...(N=(U=c.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var P,k,q;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const tt=["Default","Vertical","SplitButton","SingleSelection","MultipleSelection","SelectionEvent","ShadowDomParent","Migration"];export{u as Default,m as Migration,r as MultipleSelection,l as SelectionEvent,c as ShadowDomParent,a as SingleSelection,d as SplitButton,i as Vertical,tt as __namedExportsOrder,Z as default};
