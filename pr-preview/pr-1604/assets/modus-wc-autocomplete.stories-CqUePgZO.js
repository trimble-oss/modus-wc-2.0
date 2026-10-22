import{w as Ee}from"./decorator-Cv9na35H.js";import{b as f}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";import{c as ke}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var F=Object.freeze,Ae=Object.defineProperty,v=(e,d)=>F(Ae(e,"raw",{value:F(e.slice())})),P,z,O,R,W,H,N,j;const I=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Watermelon",value:"watermelon",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Pineapple",value:"pineapple",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Kiwi",value:"kiwi",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Mango",value:"mango",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Papaya",value:"papaya",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Plum",value:"plum",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Raspberry",value:"raspberry",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Tangerine",value:"tangerine",visibleInMenu:!0,focused:!1,checkbox:!1}],$e={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{"auto-complete":void 0,bordered:!0,"debounce-ms":300,disabled:!1,"include-clear":!1,"include-search":!1,items:I,label:"Label","leave-menu-open":!1,"max-chips":4,"min-chars":0,"min-input-width":15,"multi-select":!1,"show-menu-on-focus":!1,"show-spinner":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{"auto-complete":{control:{type:"text"}},items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},"max-chips":{control:{type:"number",min:1,max:10},description:'Maximum number of chips to display before showing "+N more" button'},"min-input-width":{control:{type:"number",min:10,max:300},description:"Minimum width for the text input in pixels. When chips would make input smaller, container height increases instead. Default: 20px."},size:{control:{type:"select"},options:["sm","md","lg"]},"custom-blur":{description:"Custom blur handler function that overrides default blur behavior",table:{type:{summary:"(event: FocusEvent) => void"},category:"Custom Handlers"}},"custom-input-change":{description:"Custom input change handler function that overrides default input change behavior",table:{type:{summary:"(value: string) => void"},category:"Custom Handlers"}},"custom-item-select":{description:"Custom item select handler function that overrides default item selection behavior",table:{type:{summary:"(item: IAutocompleteItem) => void"},category:"Custom Handlers"}},"custom-key-down":{description:"Custom keydown handler function that overrides default keyboard navigation",table:{type:{summary:"(event: KeyboardEvent) => void"},category:"Custom Handlers"}}},decorators:[Ee],parameters:{actions:{handles:["chipRemove","chipsExpansionChange","clearClick","inputBlur","inputChange","inputFocus","itemSelect"]}}},g=f`
// const autocompleteItems = [
//   {
//     label: 'Apple',
//     value: 'apple',
//     visibleInMenu: true,
//     focused: false,
//     disabled: false,
//     checkbox: false,
//   },
//   {
//     label: 'Banana',
//     value: 'banana',
//     visibleInMenu: true,
//     focused: false,
//     disabled: false,
//     checkbox: false,
//   },
//   {
//     label: 'Blueberry',
//     value: 'blueberry',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Cherry',
//     value: 'cherry',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Grape',
//     value: 'grape',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Lemon',
//     value: 'lemon',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Orange',
//     value: 'orange',
//     visibleInMenu: true,
//     focused: false,
//     disabled: false,
//     checkbox: false,
//   },
//   {
//     label: 'Peach',
//     value: 'peach',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Pear',
//     value: 'pear',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Strawberry',
//     value: 'strawberry',
//     visibleInMenu: true,
//     focused: false,
//     disabled: false,
//     checkbox: false,
//   },
//   {
//     label: 'Watermelon',
//     value: 'watermelon',
//     visibleInMenu: true,
//     focused: false,
//     disabled: false,
//     checkbox: false,
//   },
//   {
//     label: 'Pineapple',
//     value: 'pineapple',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Kiwi',
//     value: 'kiwi',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Mango',
//     value: 'mango',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Papaya',
//     value: 'papaya',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Plum',
//     value: 'plum',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Raspberry',
//     value: 'raspberry',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
//   {
//     label: 'Tangerine',
//     value: 'tangerine',
//     visibleInMenu: true,
//     focused: false,
//     checkbox: false,
//   },
// ];
`,Te={render:e=>f(P||(P=v([`
<style>
  div[id^='story--components-forms-autocomplete--default'] {
    height: 400px;
  }
</style>
<modus-wc-autocomplete
  auto-complete=`,`
  ?bordered=`,`
  custom-class=`,`
  debounce-ms=`,`
  ?disabled=`,`
  .feedback=`,`
  ?include-clear=`,`
  ?include-search=`,`
  input-id=`,`
  input-tab-index=`,`
  .items=`,`
  label=`,`
  ?leave-menu-open=`,`
  min-chars=`,`
  min-input-width=`,`
  ?multi-select=`,`
  name=`,`
  .noResults=`,`
  placeholder=`,`
  ?read-only=`,`
  ?required=`,`
  ?show-menu-on-focus=`,`
  ?show-spinner=`,`
  size=`,`
  value=`,`
></modus-wc-autocomplete>
<script>
// Add Autocomplete items
`,`
// Adding this block to show how to set items via JS
// const autocomplete = document.querySelector('modus-wc-autocomplete');
// autocomplete.items = autocompleteItems;
<\/script>
    `])),t(e["auto-complete"]),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e.feedback),e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["min-chars"],t(e["min-input-width"]),!1,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,g)},y={...Te},x={render:e=>f(z||(z=v([`
<style>
  div[id^='story--components-forms-autocomplete--with-custom-icon-slot'] {
    height: 400px;
  }
</style>
<modus-wc-autocomplete
  ?bordered=`,`
  custom-class=`,`
  debounce-ms=`,`
  ?disabled=`,`
  .feedback=`,`
  ?include-clear=`,`
  ?include-search=`,`
  input-id=`,`
  input-tab-index=`,`
  .items=`,`
  label=`,`
  ?leave-menu-open=`,`
  min-chars=`,`
  min-input-width=`,`
  ?multi-select=`,`
  name=`,`
  .noResults=`,`
  placeholder=`,`
  ?read-only=`,`
  ?required=`,`
  ?show-menu-on-focus=`,`
  ?show-spinner=`,`
  size=`,`
  value=`,`
>
  <modus-wc-icon slot="custom-icon" name="heart" size="sm"></modus-wc-icon>
</modus-wc-autocomplete>
<script>
// Add Autocomplete items
`,`
// Adding this block to show how to set items via JS
// const autocomplete = document.querySelector('modus-wc-autocomplete');
// autocomplete.items = autocompleteItems;
<\/script>
  `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e.feedback),e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["min-chars"],t(e["min-input-width"]),!1,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,g),args:{label:"Autocomplete with custom icon",placeholder:"Search fruits..."}},M={render:e=>f`
    <style>
      div[id^='story--components-forms-autocomplete--with-feedback'] {
        height: 400px;
      }
    </style>
    <modus-wc-autocomplete
      ?bordered=${e.bordered}
      .items=${e.items}
      .feedback=${e.feedback}
      label=${t(e.label)}
      ?required=${e.required}
    ></modus-wc-autocomplete>
  `,args:{feedback:{level:"error",message:"This field is required"},label:"With Feedback",required:!0},parameters:{docs:{source:{code:`
<modus-wc-autocomplete
  label="With Feedback"
  required
></modus-wc-autocomplete>

<script>
  const autocomplete = document.querySelector('modus-wc-autocomplete');
  autocomplete.feedback = {
    level: 'error',
    message: 'This field is required'
  };
  autocomplete.items = autocompleteItems;
<\/script>
        `}}}},C={name:"With Tooltips",parameters:{docs:{description:{story:"This example demonstrates menu items with tooltips. Hover over the items or move keyboard focus to them to see the tooltips; press Escape to dismiss."},source:{code:`
        <script>
const tooltipItems = [
  {
    label: 'Apple',
    value: 'apple',
    tooltipContent: 'A crisp and sweet fruit',
    tooltipPosition: 'top',
    visibleInMenu: true,
    focused: false,
  },
  {
    label: 'Banana',
    value: 'banana',
    tooltipContent: 'A tropical yellow fruit',
    tooltipPosition: 'right',
    visibleInMenu: true,
    focused: false,
  },
  {
    label: 'Cherry',
    value: 'cherry',
    tooltipContent: 'Small red stone fruit',
    tooltipPosition: 'bottom',
    visibleInMenu: true,
    focused: false,
  },
  {
    label: 'Grape',
    value: 'grape',
    tooltipContent: 'Small juicy fruit that grows in clusters',
    tooltipPosition: 'left',
    visibleInMenu: true,
    focused: false,
  },
  {
    label: 'Orange',
    value: 'orange',
    tooltipContent: 'Citrus fruit with a bright color',
    tooltipPosition: 'top',
    visibleInMenu: true,
    focused: false,
  },
];
<\/script>
<modus-wc-autocomplete
  label="Fruits with tooltips"
  leave-menu-open="true"
  placeholder="Search fruits"
  min-chars="0"
></modus-wc-autocomplete>

 <script>
// const autocomplete = document.querySelector('modus-wc-autocomplete');
// autocomplete.items = tooltipItems;
<\/script>
`}}},render:()=>f`
      <style>
        div[id^='story--components-forms-autocomplete--with-tooltips'] {
          height: 400px;
        }
      </style>
      <div style="width: 300px;">
        <modus-wc-autocomplete
          label="Fruits with tooltips"
          leave-menu-open="true"
          placeholder="Search fruits"
          .items=${[{label:"Apple",value:"apple",tooltipContent:"A crisp and sweet fruit",tooltipPosition:"top",visibleInMenu:!0,focused:!1},{label:"Banana",value:"banana",tooltipContent:"A tropical yellow fruit",tooltipPosition:"right",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",tooltipContent:"Small red stone fruit",tooltipPosition:"bottom",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",tooltipContent:"Small juicy fruit that grows in clusters",tooltipPosition:"left",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",tooltipContent:"Citrus fruit with a bright color",tooltipPosition:"top",visibleInMenu:!0,focused:!1}]}
          min-chars="0"
        ></modus-wc-autocomplete>
      </div>
    `},S={render:e=>(e.items||(e.items=[...I]),e.items=e.items.map(d=>d.value==="apple"||d.value==="banana"?{...d,selected:!0}:d),f(O||(O=v([`
      <style>
        div[id^='story--components-forms-autocomplete--multi-select'] {
          height: 400px;
        }
        .modus-wc-autocomplete-multi-select {
          width: 480px !important;
        }
      </style>
      <modus-wc-autocomplete
        ?bordered=`,`
        custom-class=`,`
        debounce-ms=`,`
        ?disabled=`,`
        ?include-clear=`,`
        ?include-search=`,`
        id="fruit-autocomplete"
        input-id=`,`
        input-tab-index=`,`
        .items=`,`
        label=`,`
        ?leave-menu-open=`,`
        max-chips=`,`
        min-chars=`,`
        min-input-width=`,`
        ?multi-select=`,`
        name=`,`
        .noResults=`,`
        placeholder=`,`
        ?read-only=`,`
        ?required=`,`
        ?show-menu-on-focus=`,`
        size=`,`
        value=`,`
      ></modus-wc-autocomplete>
      <script>
        //Commenting out the scripts to avoid duplicate declaration in storybook code
        // Add Autocomplete items
        `,`
          // // If multi-select, set selected state for some items
          // const itemsWithSelection = autocompleteItems.map((item) => {
          //   if (item.value === 'apple' || item.value === 'banana') {
          //     return { ...item, selected: true };
          //   }
          //   return item;
          // });
          //  // Adding this block to show how to set items and pre-selected values via JS
          // const autocomplete = document.getElementById('fruit-autocomplete');
          // if (autocomplete) {
          //   autocomplete.items = itemsWithSelection;
          // }
        <\/script>
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["max-chips"]??4,e["min-chars"],t(e["min-input-width"]),!0,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],t(e.size),e.value,g))},E={render:e=>{let d;const o=b=>{var h;if(!((h=b.detail)!=null&&h.target))return;const i=b.target.closest("modus-wc-autocomplete");if(i){const n=b.detail.target.value.toLowerCase();d&&window.clearTimeout(d),i.showSpinner=!0,d=window.setTimeout(()=>{const u=I.filter(s=>s.label.toLowerCase().includes(n));i.items=u,i.showSpinner=!1},2e3)}};return f(R||(R=v([`
      <style>
        div[id^='story--components-forms-autocomplete--with-spinner'] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        ?bordered=`,`
        custom-class=`,`
        debounce-ms=`,`
        ?disabled=`,`
        input-id=`,`
        input-tab-index=`,`
        .items=`,`
        label=`,`
        ?leave-menu-open=`,`
        min-chars=`,`
        ?multi-select=`,`
        name=`,`
        placeholder=`,`
        ?read-only=`,`
        ?required=`,`
        ?show-menu-on-focus=`,`
        ?show-spinner=`,`
        size=`,`
        value=`,`
        @inputChange=`,`
      ></modus-wc-autocomplete>
      <script>
        //Commenting out the scripts to avoid duplicate declaration in storybook code
        // Add Autocomplete items
        `,`
        // // Adding this block to show how to set items via JS
        // const autocomplete = document.querySelector('modus-wc-autocomplete');
        // autocomplete.items = autocompleteItems;
        // autocomplete.showSpinner = true;

        // // Debounce timer id
        // let debounceTimer;

        // // Input change handler for the component's custom event
        // const handleInputChange = (e) => {
        //   // Stencil event detail wraps the native event; guard against missing target
        //   if (!e.detail?.target) return;
        //   const comp = e.target.closest('modus-wc-autocomplete');
        //   if (!comp) return;

        //   const inputEl = e.detail.target; //op native input element
        //   const query = (inputEl.value || '').toLowerCase();

        //   // Clear pending debounce
        //   if (debounceTimer) {
        //     clearTimeout(debounceTimer);
        //   }

        //   // If query empty restore full list immediately and stop spinner
        //   if (query === '') {
        //     comp.items = [...autocompleteItems];
        //     comp.showSpinner = false;
        //     return;
        //   }

        //   // Start spinner
        //   comp.showSpinner = true;

        //   // Simulated async fetch (2s)
        //   debounceTimer = setTimeout(() => {
        //     // Filter original dataset (do NOT mutate source array)
        //     const filtered = autocompleteItems.filter((item) =>
        //       item.label.toLowerCase().includes(query)
        //     );
        //     // Apply results
        //     comp.items = filtered;
        //     comp.showSpinner = false;
        //   }, 2000);
        // };

        // // Attach listener once (avoid duplicates if script re-executes)
        // if (autocomplete) {
        //   autocomplete.removeEventListener('inputChange', handleInputChange);
        //   autocomplete.addEventListener('inputChange', handleInputChange);
        // }

      <\/script>
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["min-chars"],!1,t(e.name),t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,o,g)}},k={render:e=>{const d=e["no-results"];e["leave-menu-open"]==!0&&(e["no-results"]={ariaLabel:"",label:"",subLabel:""});const o=l=>{const n=l.querySelectorAll("modus-wc-menu-item:not([disabled])");return Array.from(n).filter(u=>window.getComputedStyle(u).display!=="none"&&!u.classList.contains("hidden"))},b=l=>{var p,m;const n=l.target.closest("modus-wc-autocomplete");if(!n||n.disabled||n.readOnly)return;const s=o(n).map(r=>r.querySelector("button")).filter(Boolean),a=document.activeElement,c=s.indexOf(a);switch(l.key){case"ArrowDown":{l.preventDefault(),n.openMenu();let r=c+1;if(r>=s.length)return;r<0&&(r=0),(p=s[r])==null||p.focus();break}case"ArrowUp":{l.preventDefault(),n.openMenu();let r=c-1;if(r<0)return;(m=s[r])==null||m.focus();break}case"Enter":{l.preventDefault(),s.includes(a)&&a.click();const r=n.querySelector("input");r==null||r.focus();break}case"Escape":{l.preventDefault(),n.closeMenu();const r=n.querySelector("input");r==null||r.focus();break}}},i=l=>{var u;if(!((u=l.detail)!=null&&u.target))return;const n=l.target.closest("modus-wc-autocomplete");if(n){const s=l.detail.target.value.toLowerCase(),a=n==null?void 0:n.querySelectorAll("modus-wc-menu-item");s===""&&(a==null||a.forEach(m=>{m.removeAttribute("selected")}));let c=0;Array.from(a??[]).forEach(m=>{var w;(((w=m.getAttribute("label"))==null?void 0:w.toLowerCase())||"").includes(s)?m.classList.remove("hidden"):(m.classList.add("hidden"),c++)}),n.noResults=c===(a==null?void 0:a.length)?d:{ariaLabel:"",label:"",subLabel:""};const p=n.querySelector(".no-results-item");p&&(c===(a==null?void 0:a.length)?p.classList.add("visible"):p.classList.remove("visible"))}},h=l=>{const n=l.target.closest("modus-wc-autocomplete");if(n){const u=l.detail.value;n.value=u,n.querySelectorAll("modus-wc-menu-item").forEach(a=>{a.getAttribute("value")===u?a.setAttribute("selected","true"):a.removeAttribute("selected")}),e["leave-menu-open"]||n.closeMenu()}};return f(W||(W=v([`
<style>
div[id^='story--components-forms-autocomplete--custom-menu-items'] {
  height: 400px;
}
.modus-wc-autocomplete {
    width: 480px !important;
  }
.custom-menu-content {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.content-wrapper {
  flex: 1;
}
.title {
  font-weight: 500;
}
.subtitle {
  font-size: 0.875rem;
  color: #666;
}
modus-wc-menu-item.hidden {
  display: none;
}
.no-results-item {
  display: none;
  padding: 16px;
  text-align: center;
}
.no-results-item.visible {
  display: block;
}
.no-results-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
}
.no-results-title {
  font-weight: bold;
}
.no-results-header modus-wc-icon {
  color: var(--modus-wc-color-gray-6);
}

</style>
<modus-wc-autocomplete
  ?bordered=`,`
  custom-class=`,`
  debounce-ms=`,`
  ?disabled=`,`
  id="custom-autocomplete"
  input-id=`,`
  input-tab-index=`,`
  label=`,`
  ?leave-menu-open=`,`
  min-chars=`,`
  ?multi-select=`,`
  name=`,`
  .noResults=`,`
  placeholder=`,`
  ?read-only=`,`
  ?required=`,`
  ?show-menu-on-focus=`,`
  size=`,`
  ?show-spinner=`,`
  value=`,`
  .customKeyDown=`,`
  @inputChange=`,`
  ?include-search=`,`
>
  <div slot="menu-items">
    <modus-wc-menu-item
      label="John Doe"
      sub-label="john.doe@example.com"
      value="John Doe"
      @itemSelect=`,`
    >
      <div slot="start-icon">
        <modus-wc-avatar aria-label="Avatar" size="sm" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Jane Smith"
      sub-label="jane.smith@example.com"
      value="Jane Smith"
      @itemSelect=`,`
    >
      <div slot="start-icon">
        <modus-wc-avatar aria-label="Avatar" size="sm" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Bob Johnson"
      sub-label="bob.johnson@example.com"
      value="Bob Johnson"
      @itemSelect=`,`
    >
      <div slot="start-icon">
        <modus-wc-avatar aria-label="Avatar" size="sm" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Alice Williams"
      sub-label="alice.williams@example.com"
      value="Alice Williams"
      @itemSelect=`,`
    >
      <div slot="start-icon">
        <modus-wc-avatar aria-label="Avatar" size="sm" alt="Example avatar" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <li class="no-results-item">
      <div class="no-results-header">
        <modus-wc-icon name="search" size="lg"></modus-wc-icon>
        <div class="no-results-title">No results found</div>
      </div>
    </li>
  </div>
</modus-wc-autocomplete>
<script>
        // // Get the autocomplete element
        // const autocomplete = document.getElementById('custom-autocomplete');

        // const getVisibleItems = (autocompleteElement) => {
        //   const menuItems = autocompleteElement.querySelectorAll(
        //     'modus-wc-menu-item:not([disabled])'
        //   );
        //   return Array.from(menuItems).filter((item) => {
        //     const style = window.getComputedStyle(item);
        //     return (
        //       style.display !== 'none' && !item.classList.contains('hidden')
        //     );
        //   });
        // };

        // const handleCustomKeyDown = (e) => {
        //   const autocompleteElement = e.target.closest('modus-wc-autocomplete');
        //   if (!autocompleteElement) return;

        //   // Don't process keyboard events when disabled or readOnly
        //   if (autocompleteElement.disabled || autocompleteElement.readOnly)
        //     return;

        //   const visibleItems = getVisibleItems(autocompleteElement);

        //   // Get all button elements within visible menu items
        //   const buttons = visibleItems
        //     .map((item) => item.querySelector('button'))
        //     .filter(Boolean);
        //   const currentFocusedButton = document.activeElement;
        //   const currentIndex = buttons.indexOf(currentFocusedButton);

        //   switch (e.key) {
        //     case 'ArrowDown': {
        //       e.preventDefault();
        //       // Open menu when arrow key is pressed
        //       autocompleteElement.openMenu();

        //       let nextIndex = currentIndex + 1;
        //       // Stop at the last item instead of wrapping
        //       if (nextIndex >= buttons.length) return;
        //       if (nextIndex < 0) nextIndex = 0;

        //       buttons[nextIndex]?.focus();
        //       break;
        //     }

        //     case 'ArrowUp': {
        //       e.preventDefault();
        //       // Open menu when arrow key is pressed
        //       autocompleteElement.openMenu();

        //       let prevIndex = currentIndex - 1;
        //       // Stop at the first item instead of wrapping
        //       if (prevIndex < 0) return;

        //       buttons[prevIndex]?.focus();
        //       break;
        //     }

        //     case 'Enter': {
        //       e.preventDefault();
        //       // If a button is focused, click it
        //       if (buttons.includes(currentFocusedButton)) {
        //         currentFocusedButton.click();
        //       }
        //       break;
        //     }

        //     case 'Escape': {
        //       e.preventDefault();
        //       autocompleteElement.closeMenu();
        //       // Return focus to input
        //       const input = autocompleteElement.querySelector('input');
        //       input?.focus();
        //       break;
        //     }
        //   }
        // };

        // const handleInputChange = (e) => {
        //   if (!e.detail?.target) return;

        //   const autocompleteElement = e.target.closest('modus-wc-autocomplete');

        //   if (autocompleteElement) {
        //     const searchText = e.detail.target.value.toLowerCase();
        //     const menuItems =
        //       autocompleteElement.querySelectorAll('modus-wc-menu-item');

        //     // Clear selected state when input is empty
        //     if (searchText === '') {
        //       menuItems?.forEach((item) => {
        //         item.removeAttribute('selected');
        //       });
        //     }

        //     let hiddenCount = 0;
        //     Array.from(menuItems ?? []).forEach((menuItem) => {
        //       const label = menuItem.getAttribute('label')?.toLowerCase() || '';
        //       if (!label.includes(searchText)) {
        //         menuItem.classList.add('hidden');
        //         hiddenCount++;
        //       } else {
        //         menuItem.classList.remove('hidden');
        //       }
        //     });

        //     // Show/hide the no results element
        //     const noResultsElement =
        //       autocompleteElement.querySelector('.no-results-item');
        //     if (noResultsElement) {
        //       if (hiddenCount === menuItems?.length) {
        //         noResultsElement.classList.add('visible');
        //       } else {
        //         noResultsElement.classList.remove('visible');
        //       }
        //     }
        //   }
        // };

        // const handleItemSelect = (e) => {
        //   const autocompleteElement = e.target.closest('modus-wc-autocomplete');

        //   if (autocompleteElement) {
        //     const selectedValue = e.detail.value;
        //     autocompleteElement.value = selectedValue;
        //     // Update selected state on menu items
        //     const menuItems =
        //       autocompleteElement.querySelectorAll('modus-wc-menu-item');
        //     menuItems.forEach((item) => {
        //       if (item.getAttribute('value') === selectedValue) {
        //         item.setAttribute('selected', 'true');
        //       } else {
        //         item.removeAttribute('selected');
        //       }
        //     });
        //     // Close menu after selection
        //     autocompleteElement.closeMenu();
        //   }
        // };

        // // Attach event listeners to the autocomplete component
        // if (autocomplete) {
        //   autocomplete.addEventListener('keydown', handleCustomKeyDown);
        //   autocomplete.addEventListener('inputChange', handleInputChange);
        //   autocomplete.addEventListener('itemSelect', handleItemSelect);
        // }
      <\/script>
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),t(e.label),e["leave-menu-open"],e["min-chars"],!1,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],t(e.size),e["show-spinner"],e.value,b,i,!0,h,h,h,h)}},A={render:e=>{let d=!1;const o=(l,n)=>{n!==d&&(d=n,n?l.openMenu():l.closeMenu())},b=l=>{const n=document.getElementById("autocomplete-custom-event-handlers");if(!n)return;const u=l.key==="Tab"?l.shiftKey?"Shift+Tab":"Tab":l.key;["ArrowDown","ArrowUp","Enter","Escape","Tab","Shift+Tab"].includes(u)&&l.preventDefault();const s=e.items.filter(a=>a.visibleInMenu&&!a.disabled);switch(u){case"Escape":e.items=e.items.map(a=>({...a,focused:!1})),n.items=[...e.items],o(n,!1),n.style.transform="scale(0.98)",setTimeout(()=>{n.style.transform=""},200);break;case"ArrowDown":case"Tab":{o(n,!0);const a=s.findIndex(m=>m.focused),c=a<0?0:Math.min(a+1,s.length-1),p=c+1<s.length?c+1:c;e.items=e.items.map(m=>{var r;return{...m,focused:((r=s[p])==null?void 0:r.value)===m.value}});break}case"ArrowUp":case"Shift+Tab":{const a=s.findIndex(m=>m.focused),c=a<0?s.length-1:Math.max(a-1,0),p=c-1>=0?c-1:c;e.items=e.items.map(m=>{var r;return{...m,focused:((r=s[p])==null?void 0:r.value)===m.value}});break}case"Enter":{const a=s.find(c=>c.focused);a&&(e.items=e.items.map(c=>({...c,selected:c.value===a.value,focused:!1})),n.value=a.label,o(n,!1));break}default:return}n.items=[...e.items]},i=l=>{const n=document.getElementById("autocomplete-custom-event-handlers");if(!n)return;const u=l.toLowerCase().split("");if(l.length>0){const c=e.items.map(p=>{const m=p.label.toLowerCase();let r=0,w=!0;for(const D of u)if(m.includes(D)){const B=m.indexOf(D);B===0?r+=3:m[B-1]===" "?r+=2:r+=1}else{w=!1;break}return w&&m.includes(l.toLowerCase())&&(r+=10),{item:p,score:w?r:-1,visible:w}});c.sort((p,m)=>m.score-p.score),e.items=c.map(({item:p,visible:m})=>({...p,visibleInMenu:m,focused:!1,selected:p.selected&&m&&p.label.toLowerCase()===l.toLowerCase(),label:p.label}))}else e.items=e.items.map(c=>({...c,visibleInMenu:!0,focused:!1,selected:!1}));n.items=[...e.items],n.value=l;const s=e.items.filter(c=>c.visibleInMenu).length;console.log(`Fuzzy search for "${l}": ${s} matches found`);const a=e.items.some(c=>c.visibleInMenu);o(n,a&&l.length>=e["min-chars"])},h=l=>{const n=document.getElementById("autocomplete-custom-event-handlers");n&&(e.items=e.items.map(u=>({...u,selected:u.value===l.value,focused:!1})),n.items=[...e.items],n.value=l.label,e["leave-menu-open"]?(e.items=e.items.map(u=>({...u,visibleInMenu:!0,focused:!1})),n.items=[...e.items],o(n,!0)):o(n,!1))};return f(H||(H=v([`
      <style>
        div[id^='story--components-forms-autocomplete--custom-event-handlers'] {
          height: 400px;
        }

        .modus-wc-autocomplete.modus-wc-autocomplete {
          width: 300px;
        }

        .fuzzy-info {
          margin-top: 1rem;
          padding: 1rem;
          background-color: var(--modus-wc-color-info-light);
          border-radius: 4px;
          font-size: 0.875rem;
        }
      </style>

      <modus-wc-autocomplete
        ?bordered=`,`
        custom-class=`,`
        debounce-ms=`,`
        ?disabled=`,`
        id="autocomplete-custom-event-handlers"
        ?include-clear=`,`
        ?include-search=`,`
        input-id=`,`
        input-tab-index=`,`
        .items=`,`
        label="Fruit list with custom handlers"
        ?leave-menu-open=`,`
        min-chars=`,`
        ?multi-select=`,`
        name=`,`
        .noResults=`,`
        placeholder="Type 'bry' for Blueberry or Raspberry"
        ?read-only=`,`
        ?required=`,`
        ?show-menu-on-focus=`,`
        ?show-spinner=`,`
        size=`,`
        value=`,`
        .customKeyDown=`,`
        .customInputChange=`,`
        .customItemSelect=`,`
        @inputBlur=`,`
      ></modus-wc-autocomplete>
      <script>
        // Commented out so Storybook does not run this twice; mirrors the live handlers above.
        `,`
        // const autocomplete = document.getElementById('autocomplete-custom-event-handlers');
        // autocomplete.items = autocompleteItems;
        //
        // let menuRequestedOpen = false;
        // const requestMenu = (open) => {
        //   if (open === menuRequestedOpen) return;
        //   menuRequestedOpen = open;
        //   void (open ? autocomplete.openMenu() : autocomplete.closeMenu());
        // };
        //
        // const customKeyDown = (e) => {
        //   if (!autocomplete) return;
        //   if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
        //     e.preventDefault();
        //   }
        //   const visibleItems = autocomplete.items.filter(
        //     (item) => item.visibleInMenu && !item.disabled
        //   );
        //   switch (e.key) {
        //     case 'Escape':
        //       autocomplete.items = autocomplete.items.map((item) => ({
        //         ...item,
        //         focused: false,
        //       }));
        //       requestMenu(false);
        //       autocomplete.style.transform = 'scale(0.98)';
        //       setTimeout(() => {
        //         autocomplete.style.transform = '';
        //       }, 200);
        //       break;
        //     case 'ArrowDown': {
        //       requestMenu(true);
        //       const currentIndex = visibleItems.findIndex((item) => item.focused);
        //       const nextIndex =
        //         currentIndex < 0
        //           ? 0
        //           : Math.min(currentIndex + 1, visibleItems.length - 1);
        //       const skipIndex =
        //         nextIndex + 1 < visibleItems.length ? nextIndex + 1 : nextIndex;
        //       autocomplete.items = autocomplete.items.map((item) => ({
        //         ...item,
        //         focused: visibleItems[skipIndex]?.value === item.value,
        //       }));
        //       break;
        //     }
        //     case 'ArrowUp': {
        //       const currentIndex = visibleItems.findIndex((item) => item.focused);
        //       const prevIndex =
        //         currentIndex < 0
        //           ? visibleItems.length - 1
        //           : Math.max(currentIndex - 1, 0);
        //       const skipIndex = prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex;
        //       autocomplete.items = autocomplete.items.map((item) => ({
        //         ...item,
        //         focused: visibleItems[skipIndex]?.value === item.value,
        //       }));
        //       break;
        //     }
        //     case 'Enter': {
        //       const focusedItem = visibleItems.find((item) => item.focused);
        //       if (focusedItem) {
        //         autocomplete.items = autocomplete.items.map((item) => ({
        //           ...item,
        //           selected: item.value === focusedItem.value,
        //           focused: false,
        //         }));
        //         autocomplete.value = focusedItem.label;
        //         requestMenu(false);
        //       }
        //       break;
        //     }
        //     default:
        //       return;
        //   }
        // };
        //
        // const customInputChange = (value) => {
        //   if (!autocomplete) return;
        //   const searchChars = value.toLowerCase().split('');
        //   const minChars = autocomplete.minChars ?? 0;
        //   if (value.length > 0) {
        //     const scoredItems = autocomplete.items.map((item) => {
        //       const itemLower = item.label.toLowerCase();
        //       let score = 0;
        //       let allCharsFound = true;
        //       for (const char of searchChars) {
        //         if (itemLower.includes(char)) {
        //           const charIndex = itemLower.indexOf(char);
        //           if (charIndex === 0) score += 3;
        //           else if (itemLower[charIndex - 1] === ' ') score += 2;
        //           else score += 1;
        //         } else {
        //           allCharsFound = false;
        //           break;
        //         }
        //       }
        //       if (allCharsFound && itemLower.includes(value.toLowerCase())) {
        //         score += 10;
        //       }
        //       return {
        //         item,
        //         score: allCharsFound ? score : -1,
        //         visible: allCharsFound,
        //       };
        //     });
        //     scoredItems.sort((a, b) => b.score - a.score);
        //     autocomplete.items = scoredItems.map(({ item, visible }) => ({
        //       ...item,
        //       visibleInMenu: visible,
        //       focused: false,
        //       selected:
        //         item.selected &&
        //         visible &&
        //         item.label.toLowerCase() === value.toLowerCase(),
        //       label: item.label,
        //     }));
        //   } else {
        //     autocomplete.items = autocomplete.items.map((item) => ({
        //       ...item,
        //       visibleInMenu: true,
        //       focused: false,
        //       selected: false,
        //     }));
        //   }
        //   autocomplete.value = value;
        //   const hasVisibleItems = autocomplete.items.some(
        //     (item) => item.visibleInMenu
        //   );
        //   requestMenu(hasVisibleItems && value.length >= minChars);
        // };
        //
        // const customItemSelect = (item) => {
        //   if (!autocomplete) return;
        //   autocomplete.items = autocomplete.items.map((menuItem) => ({
        //     ...menuItem,
        //     selected: menuItem.value === item.value,
        //     focused: false,
        //   }));
        //   autocomplete.value = item.label;
        //   if (!autocomplete.leaveMenuOpen) {
        //     requestMenu(false);
        //   } else {
        //     autocomplete.items = autocomplete.items.map((menuItem) => ({
        //       ...menuItem,
        //       visibleInMenu: true,
        //       focused: false,
        //     }));
        //     requestMenu(true);
        //   }
        // };
        //
        // autocomplete.customKeyDown = customKeyDown;
        // autocomplete.customInputChange = customInputChange;
        // autocomplete.customItemSelect = customItemSelect;
        // autocomplete.addEventListener('inputBlur', () => {
        //   menuRequestedOpen = false;
        // });
      <\/script>
    `])),e.bordered,t(e["custom-class"]),0,e.disabled,e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,e["leave-menu-open"],e["min-chars"],!1,t(e.name),e["no-results"],e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,b,i,h,()=>{d=!1},g)},args:{bordered:!0,"debounce-ms":0,disabled:!1,"include-clear":!0,"include-search":!0,items:I,"leave-menu-open":!1,"min-chars":0,"no-results":{label:"No fruits found",subLabel:"Try different characters"},placeholder:"Search fruits...","input-id":"custom-handlers-input","read-only":!1,required:!1,"show-menu-on-focus":!0,"show-spinner":!1,size:"md",value:""},parameters:{docs:{description:{story:`This example demonstrates custom event handlers with three specific behaviors:

1. **Skip Navigation**: Arrow keys skip every other item for 2x faster navigation
2. **Escape Animation**: Pressing Escape triggers a subtle scale animation
3. **Fuzzy Character Search**: Instead of normal substring matching, this searches for items containing ALL typed characters in any order

The fuzzy search allows finding items with scattered characters:
- Type "pae" to find Pine**a**ppl**e**
- Type "bry" to find Blue**b**er**ry**, Straw**b**er**ry**, Rasp**b**er**ry**

Items are automatically sorted by relevance with exact substring matches appearing first.`}}}},$={args:{...$e.args,items:I},render:e=>{const d=async()=>{const s=document.getElementById("programmatic-autocomplete");if(s){const a=I.find(c=>c.value==="apple")||null;await s.selectItem(a)}},o=async()=>{const s=document.getElementById("programmatic-autocomplete");s&&await s.selectItem(null)},b=async()=>{const s=document.getElementById("programmatic-autocomplete");s&&await s.openMenu()},i=async()=>{const s=document.getElementById("programmatic-autocomplete");s&&await s.closeMenu()},h=async()=>{const s=document.getElementById("programmatic-autocomplete");s&&await s.toggleMenu()},l=async()=>{const s=document.getElementById("programmatic-autocomplete");s&&await s.focusInput()},n=async()=>{const s=document.getElementById("programmatic-autocomplete");s&&await s.clearInput()},u=window;return u.handleSelectApple=d,u.handleSelectNull=o,u.handleOpenMenu=b,u.handleCloseMenu=i,u.handleToggleMenu=h,u.handleFocusInput=l,u.handleClearInput=n,f(N||(N=v([`
      <style>
        div[id^='story--components-forms-autocomplete--with-programmatic-control'] {
          height: 500px;
        }

        .controls-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .control-group {
          margin-bottom: 1rem;
        }
        .control-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .button-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
      </style>

      <modus-wc-card class="controls-card">
        <div class="controls-content">
          <h3>Programmatic Control Methods</h3>

          <div class="control-group">
            <label>Selection Methods:</label>
            <div class="button-row">
              <modus-wc-button
                onclick="window.handleSelectApple()"
                size="sm"
              >
                Select Apple
              </modus-wc-button>
              <modus-wc-button
                onclick="window.handleSelectNull()"
                size="sm"
              >
                Clear Selection
              </modus-wc-button>
            </div>
          </div>

          <div class="control-group">
            <label>Menu Control Methods:</label>
            <div class="button-row">
              <modus-wc-button
                onclick="window.handleOpenMenu()"
                size="sm"
              >
                Open Menu
              </modus-wc-button>
              <modus-wc-button
                onclick="window.handleCloseMenu()"
                size="sm"
              >
                Close Menu
              </modus-wc-button>
              <modus-wc-button
                onclick="window.handleToggleMenu()"
                size="sm"
              >
                Toggle Menu
              </modus-wc-button>
            </div>
          </div>

          <div class="control-group">
            <label>Input Control Methods:</label>
            <div class="button-row">
              <modus-wc-button
                onclick="window.handleFocusInput()"
                size="sm"
              >
                Focus Input
              </modus-wc-button>
              <modus-wc-button
                onclick="window.handleClearInput()"
                size="sm"
              >
                Clear All
              </modus-wc-button>
            </div>
          </div>
        </div>
      </modus-wc-card>
      <modus-wc-autocomplete
        id="programmatic-autocomplete"
        ?bordered=`,`
        custom-class=`,`
        debounce-ms=`,`
        ?disabled=`,`
        ?include-clear=`,`
        ?include-search=`,`
        input-id=`,`
        input-tab-index=`,`
        .items=`,`
        label="Try the control buttons above"
        ?leave-menu-open=`,`
        max-chips=`,`
        min-chars=`,`
        min-input-width=`,`
        ?multi-select=`,`
        name=`,`
        .noResults=`,`
        placeholder="Use buttons above to control"
        ?read-only=`,`
        ?required=`,`
        ?show-menu-on-focus=`,`
        ?show-spinner=`,`
        size=`,`
        value=`,`
      ></modus-wc-autocomplete>
      <script type="module">
        //  //Commenting out the scripts to avoid duplicate declaration in storybook code
        //   const handleSelectApple = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       const appleItem =
        //         autocompleteItems.find((item) => item.value === 'apple') || null;
        //       await autocomplete.selectItem(appleItem);
        //     }
        //   };

        //   const handleSelectNull = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.selectItem(null);
        //     }
        //   };

        //   const handleOpenMenu = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.openMenu();
        //     }
        //   };

        //   const handleCloseMenu = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.closeMenu();
        //     }
        //   };

        //   const handleToggleMenu = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.toggleMenu();
        //     }
        //   };

        //   const handleFocusInput = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.focusInput();
        //     }
        //   };

        //   const handleClearInput = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.clearInput();
        //     }
        //   };
        //   window.handleSelectApple = handleSelectApple;
        //   window.handleSelectNull = handleSelectNull;
        //   window.handleOpenMenu = handleOpenMenu;
        //   window.handleCloseMenu = handleCloseMenu;
        //   window.handleToggleMenu = handleToggleMenu;
        //   window.handleFocusInput = handleFocusInput;
        //   window.handleClearInput = handleClearInput;

        // // Add Autocomplete items
        `,`
        // // Adding this block to show how to set options using JS
        // const autocomplete = document.getElementById(
        //   'programmatic-autocomplete'
        // );
        // autocomplete.items = autocompleteItems;
      <\/script>
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,e["leave-menu-open"],e["max-chips"]??4,e["min-chars"],t(e["min-input-width"]),e["multi-select"],t(e.name),e["no-results"],e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,g)},parameters:{docs:{description:{story:`
## Public Methods

The autocomplete component exposes several methods that can be called programmatically:

### selectItem(item: IAutocompleteItem | null): Promise<void>
Programmatically select an item. Pass \`null\` to clear selection.

\`\`\`javascript
const autocomplete = document.querySelector('modus-wc-autocomplete');
const item = { label: 'Apple', value: 'apple', visibleInMenu: true };
await autocomplete.selectItem(item);
\`\`\`

### openMenu(): Promise<void>
Programmatically open the dropdown menu.

\`\`\`javascript
await autocomplete.openMenu();
\`\`\`

### closeMenu(): Promise<void>
Programmatically close the dropdown menu.

\`\`\`javascript
await autocomplete.closeMenu();
\`\`\`

### toggleMenu(): Promise<void>
Toggle the dropdown menu open/closed.

\`\`\`javascript
await autocomplete.toggleMenu();
\`\`\`

### focusInput(): Promise<void>
Set focus to the input element.

\`\`\`javascript
await autocomplete.focusInput();
\`\`\`

### clearInput(): Promise<void>
Clear the input value and all selections.

\`\`\`javascript
await autocomplete.clearInput();
\`\`\`

        `}}}},T={render:e=>{const d=[{label:"Apple",value:"apple",visibleInMenu:!0},{label:"Banana",value:"banana",visibleInMenu:!0},{label:"Orange",value:"orange",visibleInMenu:!0},{label:"Strawberry",value:"strawberry",visibleInMenu:!0}],o=[...d,{label:"Blackberry",value:"blackberry",visibleInMenu:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0},{label:"Cherry",value:"cherry",visibleInMenu:!0},{label:"Cranberry",value:"cranberry",visibleInMenu:!0},{label:"Fig",value:"fig",visibleInMenu:!0},{label:"Grape",value:"grape",visibleInMenu:!0},{label:"Kiwi",value:"kiwi",visibleInMenu:!0},{label:"Lemon",value:"lemon",visibleInMenu:!0},{label:"Lime",value:"lime",visibleInMenu:!0},{label:"Mango",value:"mango",visibleInMenu:!0},{label:"Melon",value:"melon",visibleInMenu:!0},{label:"Peach",value:"peach",visibleInMenu:!0},{label:"Pineapple",value:"pineapple",visibleInMenu:!0},{label:"Raspberry",value:"raspberry",visibleInMenu:!0},{label:"Watermelon",value:"watermelon",visibleInMenu:!0}],b=h=>{var n;if(!((n=h.detail)!=null&&n.target))return;const l=h.target.closest("modus-wc-autocomplete");if(l){const u=h.detail.target,s=u.value.toLowerCase();if(s===""){l.items=[...d],l.value=u.value;return}l.showSpinner=!0,setTimeout(()=>{const a=o.filter(c=>c.label.toLowerCase().includes(s));l.items=a,l.showSpinner=!1},1e3),l.value=u.value}},i=h=>{const l=h.target.closest("modus-wc-autocomplete");if(l){const n=h.detail.label;n&&(l.value=n)}};return f(j||(j=v([`
      <style>
        div[id^='story--components-forms-autocomplete--dynamic-options'] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        ?bordered=`,`
        custom-class=`,`
        debounce-ms=`,`
        ?disabled=`,`
        input-id=`,`
        input-tab-index=`,`
        .items=`,`
        label=`,`
        ?leave-menu-open=`,`
        min-chars=`,`
        ?multi-select=`,`
        name=`,`
        .noResults=`,`
        placeholder="Type to search fruits..."
        ?read-only=`,`
        ?required=`,`
        ?show-menu-on-focus=`,`
        size=`,`
        value=`,`
        @inputChange=`,`
        @itemSelect=`,`
      ></modus-wc-autocomplete>
      <script>
        // const defaultFruits = [
        //   { label: 'Apple', value: 'apple', visibleInMenu: true },
        //   { label: 'Banana', value: 'banana', visibleInMenu: true },
        //   { label: 'Orange', value: 'orange', visibleInMenu: true },
        //   { label: 'Strawberry', value: 'strawberry', visibleInMenu: true },
        // ];

        // // Extended dataset that will be searched when typing
        // const allFruits = [
        //   ...defaultFruits,
        //   { label: 'Blackberry', value: 'blackberry', visibleInMenu: true },
        //   { label: 'Blueberry', value: 'blueberry', visibleInMenu: true },
        //   { label: 'Cherry', value: 'cherry', visibleInMenu: true },
        //   { label: 'Cranberry', value: 'cranberry', visibleInMenu: true },
        //   { label: 'Fig', value: 'fig', visibleInMenu: true },
        //   { label: 'Grape', value: 'grape', visibleInMenu: true },
        //   { label: 'Kiwi', value: 'kiwi', visibleInMenu: true },
        //   { label: 'Lemon', value: 'lemon', visibleInMenu: true },
        //   { label: 'Lime', value: 'lime', visibleInMenu: true },
        //   { label: 'Mango', value: 'mango', visibleInMenu: true },
        //   { label: 'Melon', value: 'melon', visibleInMenu: true },
        //   { label: 'Peach', value: 'peach', visibleInMenu: true },
        //   { label: 'Pineapple', value: 'pineapple', visibleInMenu: true },
        //   { label: 'Raspberry', value: 'raspberry', visibleInMenu: true },
        //   { label: 'Watermelon', value: 'watermelon', visibleInMenu: true },
        // ];

        // const handleInputChange = (e) => {
        //   if (!e.detail?.target) return;

        //   const autocomplete = e.target.closest('modus-wc-autocomplete');

        //   if (autocomplete) {
        //     const input = e.detail.target;
        //     const searchText = input.value.toLowerCase();

        //     // If empty, show default fruits again
        //     if (searchText === '') {
        //       autocomplete.items = [...defaultFruits];
        //       autocomplete.value = input.value;
        //       return;
        //     }

        //     // Show spinner while "loading" data
        //     autocomplete.showSpinner = true;

        //     // Simulate API call delay with setTimeout
        //     setTimeout(() => {
        //       const filteredFruits = allFruits.filter((fruit) =>
        //         fruit.label.toLowerCase().includes(searchText)
        //       );

        //       // Update the items with the "API response"
        //       autocomplete.items = filteredFruits;

        //       // Hide spinner after "loading" completes
        //       autocomplete.showSpinner = false;
        //     }, 1000);

        //     autocomplete.value = input.value;
        //   }
        // };

        // const handleItemSelect = (e) => {
        //   const autocomplete = e.target.closest('modus-wc-autocomplete');

        //   if (autocomplete) {
        //     const label = e.detail.label;
        //     if (label) {
        //       autocomplete.value = label;
        //     }
        //   }
        // };

        // // Adding this block to show how to set Autocomplete items and attching event listeners via JS
        // const autocomplete = document.querySelector('modus-wc-autocomplete');

        // if (autocomplete) {
        // // Set initial items
        // autocomplete.items = [...defaultFruits];
        // // Attach event listeners
        // autocomplete.addEventListener('inputChange', handleInputChange);
        // autocomplete.addEventListener('itemSelect', handleItemSelect);
        // }
      <\/script>
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),d,t(e.label),e["leave-menu-open"],0,!1,t(e.name),e["no-results"],e["read-only"],e.required,!0,t(e.size),e.value,b,i)}},L={render:e=>{if(!customElements.get("autocomplete-shadow-host")){const d=ke({componentTag:"modus-wc-autocomplete",propsMapper:(o,b)=>{const i=b;i.bordered=!!o.bordered,i.customClass=o["custom-class"]||"",typeof o["debounce-ms"]=="number"&&(i.debounceMs=o["debounce-ms"]),i.disabled=!!o.disabled,i.includeClear=!!o["include-clear"],i.includeSearch=!!o["include-search"],typeof o["input-id"]=="string"&&(i.inputId=o["input-id"]),typeof o["input-tab-index"]=="number"&&(i.inputTabIndex=o["input-tab-index"]),i.items=o.items,typeof o.label=="string"&&(i.label=o.label),typeof o["leave-menu-open"]=="boolean"&&(i.leaveMenuOpen=o["leave-menu-open"]),typeof o["max-chips"]=="number"&&(i.maxChips=o["max-chips"]),typeof o["min-chars"]=="number"&&(i.minChars=o["min-chars"]),typeof o["min-input-width"]=="number"&&(i.minInputWidth=o["min-input-width"]),i.multiSelect=!!o["multi-select"],typeof o.name=="string"&&(i.name=o.name),i.noResults=o["no-results"],typeof o.placeholder=="string"&&(i.placeholder=o.placeholder),i.readOnly=!!o["read-only"],i.required=!!o.required,typeof o["show-menu-on-focus"]=="boolean"&&(i.showMenuOnFocus=o["show-menu-on-focus"]),i.showSpinner=!!o["show-spinner"],typeof o.size=="string"&&(i.size=o.size),i.value=o.value}});customElements.define("autocomplete-shadow-host",d)}return f`<autocomplete-shadow-host
      .props=${{...e}}
    ></autocomplete-shadow-host>`}},q={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - To handle updating items in 2.0, simply create a new array of items and bind it to the \`items\` prop. The 1.0 prop
  \`filter-options\` is no longer necessary.
  - Size values have changed from verbose names (\`small\`, \`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop                      | 2.0 Prop            | Notes                                                       |
|-------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                    | aria-label          |                                                             |
| clearable                     | include-clear       |                                                    |
| disabled                      | disabled            |                                                             |
| disable-close-on-select       | leave-menu-open     |                                                             |
| dropdown-max-height           |                     | Not carried over, use CSS instead                           |
| dropdown-z-index              |                     | Not carried over, use CSS instead                           |
| error-text                    | feedback            | feedback.level = 'error', feedback.message = 'Error message'|
| filter-options                |                     | Rebind options                                              |
| include-search-icon           | include-search      |                                                             |
| label                         | label               |                                                             |
| loading                       | show-spinner        |                                                             |
| multiple                      | multi-select        |                                                             |
| no-results-found-text         | no-results.label    |                                                             |
| no-results-found-subtext      | no-results.subLabel |                                                             |
| options                       | items               |                                                             |
| placeholder                   | placeholder         |                                                             |
| read-only                     | read-only           |                                                             |
| required                      | required            |                                                             |
| show-no-results-found-message |                     | Not carried over, use \`no-results\` prop                   |
| show-options-on-focus         | show-menu-on-focus  |                                                             |
| size                          | size                | \`small\` → \`sm\`, \`medium\` → \`md\`, \`large\` → \`lg\` |
| value                         | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| optionSelected ||
| selectionsChanged ||
| valueChange | inputChange |                  |

#### Interfaces

##### 1.0

\`\`\`typescript
interface ModusAutocompleteOption {
  id: string;
  value: string;
}
\`\`\`

##### 2.0

\`\`\`typescript
interface IAutocompleteItem {
  label: string;
  selected?: boolean;
  value: string;
  visibleInMenu: boolean;
}
\`\`\`
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>f`<div></div>`};var K,V,J;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Template
}`,...(J=(V=y.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var U,_,G;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  // prettier-ignore
  render: args => html\`
<style>
  div[id^='story--components-forms-autocomplete--with-custom-icon-slot'] {
    height: 400px;
  }
</style>
<modus-wc-autocomplete
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  debounce-ms=\${ifDefined(args['debounce-ms'])}
  ?disabled=\${args.disabled}
  .feedback=\${ifDefined(args.feedback)}
  ?include-clear=\${args['include-clear']}
  ?include-search=\${args['include-search']}
  input-id=\${ifDefined(args['input-id'])}
  input-tab-index=\${ifDefined(args['input-tab-index'])}
  .items=\${args.items}
  label=\${ifDefined(args.label)}
  ?leave-menu-open=\${args['leave-menu-open']}
  min-chars=\${args['min-chars']}
  min-input-width=\${ifDefined(args['min-input-width'])}
  ?multi-select=\${false}
  name=\${ifDefined(args.name)}
  .noResults=\${args['no-results']}
  placeholder=\${ifDefined(args.placeholder)}
  ?read-only=\${args['read-only']}
  ?required=\${args.required}
  ?show-menu-on-focus=\${args['show-menu-on-focus']}
  ?show-spinner=\${args['show-spinner']}
  size=\${ifDefined(args.size)}
  value=\${args.value}
>
  <modus-wc-icon slot="custom-icon" name="heart" size="sm"></modus-wc-icon>
</modus-wc-autocomplete>
<script>
// Add Autocomplete items
\${Items}
// Adding this block to show how to set items via JS
// const autocomplete = document.querySelector('modus-wc-autocomplete');
// autocomplete.items = autocompleteItems;
<\/script>
  \`,
  args: {
    label: 'Autocomplete with custom icon',
    placeholder: 'Search fruits...'
  }
}`,...(G=(_=x.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var Q,X,Y;M.parameters={...M.parameters,docs:{...(Q=M.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => html\`
    <style>
      div[id^='story--components-forms-autocomplete--with-feedback'] {
        height: 400px;
      }
    </style>
    <modus-wc-autocomplete
      ?bordered=\${args.bordered}
      .items=\${args.items}
      .feedback=\${args.feedback}
      label=\${ifDefined(args.label)}
      ?required=\${args.required}
    ></modus-wc-autocomplete>
  \`,
  args: {
    feedback: {
      level: 'error',
      message: 'This field is required'
    },
    label: 'With Feedback',
    required: true
  },
  parameters: {
    docs: {
      source: {
        code: \`
<modus-wc-autocomplete
  label="With Feedback"
  required
></modus-wc-autocomplete>

<script>
  const autocomplete = document.querySelector('modus-wc-autocomplete');
  autocomplete.feedback = {
    level: 'error',
    message: 'This field is required'
  };
  autocomplete.items = autocompleteItems;
<\/script>
        \`
      }
    }
  }
}`,...(Y=(X=M.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With Tooltips',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates menu items with tooltips. Hover over the items or move keyboard focus to them to see the tooltips; press Escape to dismiss.'
      },
      source: {
        code: \`
        <script>
const tooltipItems = [
  {
    label: 'Apple',
    value: 'apple',
    tooltipContent: 'A crisp and sweet fruit',
    tooltipPosition: 'top',
    visibleInMenu: true,
    focused: false,
  },
  {
    label: 'Banana',
    value: 'banana',
    tooltipContent: 'A tropical yellow fruit',
    tooltipPosition: 'right',
    visibleInMenu: true,
    focused: false,
  },
  {
    label: 'Cherry',
    value: 'cherry',
    tooltipContent: 'Small red stone fruit',
    tooltipPosition: 'bottom',
    visibleInMenu: true,
    focused: false,
  },
  {
    label: 'Grape',
    value: 'grape',
    tooltipContent: 'Small juicy fruit that grows in clusters',
    tooltipPosition: 'left',
    visibleInMenu: true,
    focused: false,
  },
  {
    label: 'Orange',
    value: 'orange',
    tooltipContent: 'Citrus fruit with a bright color',
    tooltipPosition: 'top',
    visibleInMenu: true,
    focused: false,
  },
];
<\/script>
<modus-wc-autocomplete
  label="Fruits with tooltips"
  leave-menu-open="true"
  placeholder="Search fruits"
  min-chars="0"
></modus-wc-autocomplete>

 <script>
// const autocomplete = document.querySelector('modus-wc-autocomplete');
// autocomplete.items = tooltipItems;
<\/script>
\`
      }
    }
  },
  render: () => {
    const tooltipItems: IAutocompleteItem[] = [{
      label: 'Apple',
      value: 'apple',
      tooltipContent: 'A crisp and sweet fruit',
      tooltipPosition: 'top',
      visibleInMenu: true,
      focused: false
    }, {
      label: 'Banana',
      value: 'banana',
      tooltipContent: 'A tropical yellow fruit',
      tooltipPosition: 'right',
      visibleInMenu: true,
      focused: false
    }, {
      label: 'Cherry',
      value: 'cherry',
      tooltipContent: 'Small red stone fruit',
      tooltipPosition: 'bottom',
      visibleInMenu: true,
      focused: false
    }, {
      label: 'Grape',
      value: 'grape',
      tooltipContent: 'Small juicy fruit that grows in clusters',
      tooltipPosition: 'left',
      visibleInMenu: true,
      focused: false
    }, {
      label: 'Orange',
      value: 'orange',
      tooltipContent: 'Citrus fruit with a bright color',
      tooltipPosition: 'top',
      visibleInMenu: true,
      focused: false
    }];
    return html\`
      <style>
        div[id^='story--components-forms-autocomplete--with-tooltips'] {
          height: 400px;
        }
      </style>
      <div style="width: 300px;">
        <modus-wc-autocomplete
          label="Fruits with tooltips"
          leave-menu-open="true"
          placeholder="Search fruits"
          .items=\${tooltipItems}
          min-chars="0"
        ></modus-wc-autocomplete>
      </div>
    \`;
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,le;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    // Ensure args.items is initialized
    if (!args.items) {
      args.items = [...items];
    }
    // If multi-select, set selected state for some items
    args.items = args.items.map(item => {
      if (item.value === 'apple' || item.value === 'banana') {
        return {
          ...item,
          selected: true
        };
      }
      return item;
    });
    // prettier-ignore
    return html\`
      <style>
        div[id^='story--components-forms-autocomplete--multi-select'] {
          height: 400px;
        }
        .modus-wc-autocomplete-multi-select {
          width: 480px !important;
        }
      </style>
      <modus-wc-autocomplete
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        debounce-ms=\${ifDefined(args['debounce-ms'])}
        ?disabled=\${args.disabled}
        ?include-clear=\${args['include-clear']}
        ?include-search=\${args['include-search']}
        id="fruit-autocomplete"
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        .items=\${args.items}
        label=\${ifDefined(args.label)}
        ?leave-menu-open=\${args['leave-menu-open']}
        max-chips=\${args['max-chips'] ?? 4}
        min-chars=\${args['min-chars']}
        min-input-width=\${ifDefined(args['min-input-width'])}
        ?multi-select=\${true}
        name=\${ifDefined(args.name)}
        .noResults=\${args['no-results']}
        placeholder=\${ifDefined(args.placeholder)}
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        ?show-menu-on-focus=\${args['show-menu-on-focus']}
        size=\${ifDefined(args.size)}
        value=\${args.value}
      ></modus-wc-autocomplete>
      <script>
        //Commenting out the scripts to avoid duplicate declaration in storybook code
        // Add Autocomplete items
        \${Items}
          // // If multi-select, set selected state for some items
          // const itemsWithSelection = autocompleteItems.map((item) => {
          //   if (item.value === 'apple' || item.value === 'banana') {
          //     return { ...item, selected: true };
          //   }
          //   return item;
          // });
          //  // Adding this block to show how to set items and pre-selected values via JS
          // const autocomplete = document.getElementById('fruit-autocomplete');
          // if (autocomplete) {
          //   autocomplete.items = itemsWithSelection;
          // }
        <\/script>
    \`;
  }
}`,...(le=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var se,ae,ie;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => {
    let debounceTimer: number;
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete') as Element & {
        items: IAutocompleteItem[];
        showSpinner: boolean;
        value: string;
      };
      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();

        // Clear previous timeout to avoid multiple API calls
        if (debounceTimer) {
          window.clearTimeout(debounceTimer);
        }

        // Show spinner immediately and update input value
        autocomplete.showSpinner = true;

        // Simulate an API call with a 2-second delay
        debounceTimer = window.setTimeout(() => {
          // Filter the master list of items to get the new results
          const filteredItems = items.filter(item => item.label.toLowerCase().includes(searchText));

          // Update the component with the new filtered list and hide the spinner
          autocomplete.items = filteredItems;
          autocomplete.showSpinner = false;
        }, 2000);
      }
    };
    // prettier-ignore
    return html\`
      <style>
        div[id^='story--components-forms-autocomplete--with-spinner'] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        debounce-ms=\${ifDefined(args['debounce-ms'])}
        ?disabled=\${args.disabled}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        .items=\${args.items}
        label=\${ifDefined(args.label)}
        ?leave-menu-open=\${args['leave-menu-open']}
        min-chars=\${args['min-chars']}
        ?multi-select=\${false}
        name=\${ifDefined(args.name)}
        placeholder=\${ifDefined(args.placeholder)}
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        ?show-menu-on-focus=\${args['show-menu-on-focus']}
        ?show-spinner=\${args['show-spinner']}
        size=\${ifDefined(args.size)}
        value=\${args.value}
        @inputChange=\${handleInputChange}
      ></modus-wc-autocomplete>
      <script>
        //Commenting out the scripts to avoid duplicate declaration in storybook code
        // Add Autocomplete items
        \${Items}
        // // Adding this block to show how to set items via JS
        // const autocomplete = document.querySelector('modus-wc-autocomplete');
        // autocomplete.items = autocompleteItems;
        // autocomplete.showSpinner = true;

        // // Debounce timer id
        // let debounceTimer;

        // // Input change handler for the component's custom event
        // const handleInputChange = (e) => {
        //   // Stencil event detail wraps the native event; guard against missing target
        //   if (!e.detail?.target) return;
        //   const comp = e.target.closest('modus-wc-autocomplete');
        //   if (!comp) return;

        //   const inputEl = e.detail.target; //op native input element
        //   const query = (inputEl.value || '').toLowerCase();

        //   // Clear pending debounce
        //   if (debounceTimer) {
        //     clearTimeout(debounceTimer);
        //   }

        //   // If query empty restore full list immediately and stop spinner
        //   if (query === '') {
        //     comp.items = [...autocompleteItems];
        //     comp.showSpinner = false;
        //     return;
        //   }

        //   // Start spinner
        //   comp.showSpinner = true;

        //   // Simulated async fetch (2s)
        //   debounceTimer = setTimeout(() => {
        //     // Filter original dataset (do NOT mutate source array)
        //     const filtered = autocompleteItems.filter((item) =>
        //       item.label.toLowerCase().includes(query)
        //     );
        //     // Apply results
        //     comp.items = filtered;
        //     comp.showSpinner = false;
        //   }, 2000);
        // };

        // // Attach listener once (avoid duplicates if script re-executes)
        // if (autocomplete) {
        //   autocomplete.removeEventListener('inputChange', handleInputChange);
        //   autocomplete.addEventListener('inputChange', handleInputChange);
        // }

      <\/script>
    \`;
  }
}`,...(ie=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ue,ce,re;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => {
    const originalNoResults = args['no-results'];
    if (args['leave-menu-open'] == true) {
      args['no-results'] = {
        ariaLabel: '',
        label: '',
        subLabel: ''
      };
    }
    const getVisibleItems = (autocomplete: Element): HTMLElement[] => {
      const menuItems = autocomplete.querySelectorAll('modus-wc-menu-item:not([disabled])');
      return Array.from(menuItems).filter((item: Element): item is HTMLElement => {
        const style = window.getComputedStyle(item);
        return style.display !== 'none' && !item.classList.contains('hidden');
      });
    };
    const handleCustomKeyDown = (e: KeyboardEvent) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete') as Element & {
        openMenu: () => Promise<void>;
        closeMenu: () => Promise<void>;
        readOnly?: boolean;
        disabled?: boolean;
      };
      if (!autocomplete) return;

      // Don't process keyboard events when disabled or readOnly
      if (autocomplete.disabled || autocomplete.readOnly) return;
      const visibleItems = getVisibleItems(autocomplete);

      // Get all button elements within visible menu items
      const buttons = visibleItems.map(item => item.querySelector('button')).filter(Boolean) as HTMLButtonElement[];
      const currentFocusedButton = document.activeElement as HTMLButtonElement;
      const currentIndex = buttons.indexOf(currentFocusedButton);
      switch (e.key) {
        case 'ArrowDown':
          {
            e.preventDefault();
            // Open menu when arrow key is pressed
            void autocomplete.openMenu();
            let nextIndex = currentIndex + 1;
            // Stop at the last item instead of wrapping
            if (nextIndex >= buttons.length) return;
            if (nextIndex < 0) nextIndex = 0;
            buttons[nextIndex]?.focus();
            break;
          }
        case 'ArrowUp':
          {
            e.preventDefault();
            // Open menu when arrow key is pressed
            void autocomplete.openMenu();
            let prevIndex = currentIndex - 1;
            // Stop at the first item instead of wrapping
            if (prevIndex < 0) return;
            buttons[prevIndex]?.focus();
            break;
          }
        case 'Enter':
          {
            e.preventDefault();
            // If a button is focused, click it
            if (buttons.includes(currentFocusedButton)) {
              currentFocusedButton.click();
            }
            const input = autocomplete.querySelector('input');
            input?.focus();
            break;
          }
        case 'Escape':
          {
            e.preventDefault();
            void autocomplete.closeMenu();
            // Return focus to input
            const input = autocomplete.querySelector('input');
            input?.focus();
            break;
          }
      }
    };
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete') as Element & {
        noResults: IAutocompleteNoResults;
      };
      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement).value.toLowerCase();
        const menuItems = autocomplete?.querySelectorAll('modus-wc-menu-item');

        // Clear selected state when input is empty
        if (searchText === '') {
          menuItems?.forEach(item => {
            item.removeAttribute('selected');
          });
        }
        let hiddenCount = 0;
        Array.from(menuItems ?? []).forEach(menuItem => {
          const label = menuItem.getAttribute('label')?.toLowerCase() || '';
          if (!label.includes(searchText)) {
            menuItem.classList.add('hidden');
            hiddenCount++;
          } else {
            menuItem.classList.remove('hidden');
          }
        });

        // Show no results if all items are hidden
        autocomplete.noResults = hiddenCount === menuItems?.length ? originalNoResults : {
          ariaLabel: '',
          label: '',
          subLabel: ''
        };

        // Show/hide the no results element
        const noResultsElement = autocomplete.querySelector('.no-results-item') as HTMLElement;
        if (noResultsElement) {
          if (hiddenCount === menuItems?.length) {
            noResultsElement.classList.add('visible');
          } else {
            noResultsElement.classList.remove('visible');
          }
        }
      }
    };
    const handleItemSelect = (e: CustomEvent<{
      value: string;
    }>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete') as HTMLElement & {
        value: string;
        closeMenu: () => Promise<void>;
      };
      if (autocomplete) {
        const selectedValue = e.detail.value;
        autocomplete.value = selectedValue;
        // Update selected state on menu items
        const menuItems = autocomplete.querySelectorAll('modus-wc-menu-item');
        menuItems.forEach(item => {
          if (item.getAttribute('value') === selectedValue) {
            item.setAttribute('selected', 'true');
          } else {
            item.removeAttribute('selected');
          }
        });
        // Close menu after selection unless leaveMenuOpen is true
        if (!args['leave-menu-open']) {
          void autocomplete.closeMenu();
        }
      }
    };
    // prettier-ignore
    return html\`
<style>
div[id^='story--components-forms-autocomplete--custom-menu-items'] {
  height: 400px;
}
.modus-wc-autocomplete {
    width: 480px !important;
  }
.custom-menu-content {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.content-wrapper {
  flex: 1;
}
.title {
  font-weight: 500;
}
.subtitle {
  font-size: 0.875rem;
  color: #666;
}
modus-wc-menu-item.hidden {
  display: none;
}
.no-results-item {
  display: none;
  padding: 16px;
  text-align: center;
}
.no-results-item.visible {
  display: block;
}
.no-results-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
}
.no-results-title {
  font-weight: bold;
}
.no-results-header modus-wc-icon {
  color: var(--modus-wc-color-gray-6);
}

</style>
<modus-wc-autocomplete
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  debounce-ms=\${ifDefined(args['debounce-ms'])}
  ?disabled=\${args.disabled}
  id="custom-autocomplete"
  input-id=\${ifDefined(args['input-id'])}
  input-tab-index=\${ifDefined(args['input-tab-index'])}
  label=\${ifDefined(args.label)}
  ?leave-menu-open=\${args['leave-menu-open']}
  min-chars=\${args['min-chars']}
  ?multi-select=\${false}
  name=\${ifDefined(args.name)}
  .noResults=\${args['no-results']}
  placeholder=\${ifDefined(args.placeholder)}
  ?read-only=\${args['read-only']}
  ?required=\${args.required}
  ?show-menu-on-focus=\${args['show-menu-on-focus']}
  size=\${ifDefined(args.size)}
  ?show-spinner=\${args['show-spinner']}
  value=\${args.value}
  .customKeyDown=\${handleCustomKeyDown}
  @inputChange=\${handleInputChange}
  ?include-search=\${true}
>
  <div slot="menu-items">
    <modus-wc-menu-item
      label="John Doe"
      sub-label="john.doe@example.com"
      value="John Doe"
      @itemSelect=\${handleItemSelect}
    >
      <div slot="start-icon">
        <modus-wc-avatar aria-label="Avatar" size="sm" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Jane Smith"
      sub-label="jane.smith@example.com"
      value="Jane Smith"
      @itemSelect=\${handleItemSelect}
    >
      <div slot="start-icon">
        <modus-wc-avatar aria-label="Avatar" size="sm" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Bob Johnson"
      sub-label="bob.johnson@example.com"
      value="Bob Johnson"
      @itemSelect=\${handleItemSelect}
    >
      <div slot="start-icon">
        <modus-wc-avatar aria-label="Avatar" size="sm" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Alice Williams"
      sub-label="alice.williams@example.com"
      value="Alice Williams"
      @itemSelect=\${handleItemSelect}
    >
      <div slot="start-icon">
        <modus-wc-avatar aria-label="Avatar" size="sm" alt="Example avatar" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <li class="no-results-item">
      <div class="no-results-header">
        <modus-wc-icon name="search" size="lg"></modus-wc-icon>
        <div class="no-results-title">No results found</div>
      </div>
    </li>
  </div>
</modus-wc-autocomplete>
<script>
        // // Get the autocomplete element
        // const autocomplete = document.getElementById('custom-autocomplete');

        // const getVisibleItems = (autocompleteElement) => {
        //   const menuItems = autocompleteElement.querySelectorAll(
        //     'modus-wc-menu-item:not([disabled])'
        //   );
        //   return Array.from(menuItems).filter((item) => {
        //     const style = window.getComputedStyle(item);
        //     return (
        //       style.display !== 'none' && !item.classList.contains('hidden')
        //     );
        //   });
        // };

        // const handleCustomKeyDown = (e) => {
        //   const autocompleteElement = e.target.closest('modus-wc-autocomplete');
        //   if (!autocompleteElement) return;

        //   // Don't process keyboard events when disabled or readOnly
        //   if (autocompleteElement.disabled || autocompleteElement.readOnly)
        //     return;

        //   const visibleItems = getVisibleItems(autocompleteElement);

        //   // Get all button elements within visible menu items
        //   const buttons = visibleItems
        //     .map((item) => item.querySelector('button'))
        //     .filter(Boolean);
        //   const currentFocusedButton = document.activeElement;
        //   const currentIndex = buttons.indexOf(currentFocusedButton);

        //   switch (e.key) {
        //     case 'ArrowDown': {
        //       e.preventDefault();
        //       // Open menu when arrow key is pressed
        //       autocompleteElement.openMenu();

        //       let nextIndex = currentIndex + 1;
        //       // Stop at the last item instead of wrapping
        //       if (nextIndex >= buttons.length) return;
        //       if (nextIndex < 0) nextIndex = 0;

        //       buttons[nextIndex]?.focus();
        //       break;
        //     }

        //     case 'ArrowUp': {
        //       e.preventDefault();
        //       // Open menu when arrow key is pressed
        //       autocompleteElement.openMenu();

        //       let prevIndex = currentIndex - 1;
        //       // Stop at the first item instead of wrapping
        //       if (prevIndex < 0) return;

        //       buttons[prevIndex]?.focus();
        //       break;
        //     }

        //     case 'Enter': {
        //       e.preventDefault();
        //       // If a button is focused, click it
        //       if (buttons.includes(currentFocusedButton)) {
        //         currentFocusedButton.click();
        //       }
        //       break;
        //     }

        //     case 'Escape': {
        //       e.preventDefault();
        //       autocompleteElement.closeMenu();
        //       // Return focus to input
        //       const input = autocompleteElement.querySelector('input');
        //       input?.focus();
        //       break;
        //     }
        //   }
        // };

        // const handleInputChange = (e) => {
        //   if (!e.detail?.target) return;

        //   const autocompleteElement = e.target.closest('modus-wc-autocomplete');

        //   if (autocompleteElement) {
        //     const searchText = e.detail.target.value.toLowerCase();
        //     const menuItems =
        //       autocompleteElement.querySelectorAll('modus-wc-menu-item');

        //     // Clear selected state when input is empty
        //     if (searchText === '') {
        //       menuItems?.forEach((item) => {
        //         item.removeAttribute('selected');
        //       });
        //     }

        //     let hiddenCount = 0;
        //     Array.from(menuItems ?? []).forEach((menuItem) => {
        //       const label = menuItem.getAttribute('label')?.toLowerCase() || '';
        //       if (!label.includes(searchText)) {
        //         menuItem.classList.add('hidden');
        //         hiddenCount++;
        //       } else {
        //         menuItem.classList.remove('hidden');
        //       }
        //     });

        //     // Show/hide the no results element
        //     const noResultsElement =
        //       autocompleteElement.querySelector('.no-results-item');
        //     if (noResultsElement) {
        //       if (hiddenCount === menuItems?.length) {
        //         noResultsElement.classList.add('visible');
        //       } else {
        //         noResultsElement.classList.remove('visible');
        //       }
        //     }
        //   }
        // };

        // const handleItemSelect = (e) => {
        //   const autocompleteElement = e.target.closest('modus-wc-autocomplete');

        //   if (autocompleteElement) {
        //     const selectedValue = e.detail.value;
        //     autocompleteElement.value = selectedValue;
        //     // Update selected state on menu items
        //     const menuItems =
        //       autocompleteElement.querySelectorAll('modus-wc-menu-item');
        //     menuItems.forEach((item) => {
        //       if (item.getAttribute('value') === selectedValue) {
        //         item.setAttribute('selected', 'true');
        //       } else {
        //         item.removeAttribute('selected');
        //       }
        //     });
        //     // Close menu after selection
        //     autocompleteElement.closeMenu();
        //   }
        // };

        // // Attach event listeners to the autocomplete component
        // if (autocomplete) {
        //   autocomplete.addEventListener('keydown', handleCustomKeyDown);
        //   autocomplete.addEventListener('inputChange', handleInputChange);
        //   autocomplete.addEventListener('itemSelect', handleItemSelect);
        // }
      <\/script>
    \`;
  }
}`,...(re=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:re.source}}};var me,de,pe;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => {
    interface AutocompleteElement extends HTMLElement {
      items: IAutocompleteItem[];
      value: string;
      openMenu(): Promise<void>;
      closeMenu(): Promise<void>;
    }

    // The component owns menu visibility and exposes no accessor for it, so
    // mirror the last requested state to avoid re-issuing openMenu() on every
    // keystroke. \`inputBlur\` re-syncs it, since the component closes the menu
    // itself when focus leaves.
    let menuRequestedOpen = false;
    const requestMenu = (autocomplete: AutocompleteElement, open: boolean) => {
      if (open === menuRequestedOpen) return;
      menuRequestedOpen = open;
      void (open ? autocomplete.openMenu() : autocomplete.closeMenu());
    };

    // Custom keydown handler with skip navigation and escape animation
    const customKeyDown = (e: KeyboardEvent) => {
      const autocomplete = document.getElementById('autocomplete-custom-event-handlers') as AutocompleteElement;
      if (!autocomplete) return;

      // Shift+Tab is key "Tab" plus shiftKey, not a separate key string.
      const key = e.key === 'Tab' ? e.shiftKey ? 'Shift+Tab' : 'Tab' : e.key;

      // Prevent default for navigation keys
      if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape', 'Tab', 'Shift+Tab'].includes(key)) {
        e.preventDefault();
      }
      const visibleItems = args.items.filter(item => item.visibleInMenu && !item.disabled);
      switch (key) {
        case 'Escape':
          args.items = args.items.map(item => ({
            ...item,
            focused: false
          }));
          autocomplete.items = [...args.items];
          requestMenu(autocomplete, false);
          // Custom: Show escape animation
          autocomplete.style.transform = 'scale(0.98)';
          setTimeout(() => {
            autocomplete.style.transform = '';
          }, 200);
          break;
        case 'ArrowDown':
        case 'Tab':
          {
            // Open menu if not already open
            requestMenu(autocomplete, true);
            const currentIndex = visibleItems.findIndex(item => item.focused);
            const nextIndex = currentIndex < 0 ? 0 : Math.min(currentIndex + 1, visibleItems.length - 1);

            // Custom: Skip every other item for faster navigation
            const skipIndex = nextIndex + 1 < visibleItems.length ? nextIndex + 1 : nextIndex;
            args.items = args.items.map(item => ({
              ...item,
              focused: visibleItems[skipIndex]?.value === item.value
            }));
            break;
          }
        case 'ArrowUp':
        case 'Shift+Tab':
          {
            const currentIndex = visibleItems.findIndex(item => item.focused);
            const prevIndex = currentIndex < 0 ? visibleItems.length - 1 : Math.max(currentIndex - 1, 0);

            // Custom: Skip every other item for faster navigation
            const skipIndex = prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex;
            args.items = args.items.map(item => ({
              ...item,
              focused: visibleItems[skipIndex]?.value === item.value
            }));
            break;
          }
        case 'Enter':
          {
            const focusedItem = visibleItems.find(item => item.focused);
            if (focusedItem) {
              // For single select, clear previous selection
              args.items = args.items.map(item => ({
                ...item,
                selected: item.value === focusedItem.value,
                focused: false
              }));
              autocomplete.value = focusedItem.label;
              requestMenu(autocomplete, false);
            }
            break;
          }
        default:
          return;
      }
      autocomplete.items = [...args.items];
    };

    // Custom input change handler with fuzzy character matching
    const customInputChange = (value: string) => {
      const autocomplete = document.getElementById('autocomplete-custom-event-handlers') as AutocompleteElement;
      if (!autocomplete) return;
      const searchChars = value.toLowerCase().split('');

      // Custom fuzzy search: Match items that contain ALL typed characters (in any order)
      if (value.length > 0) {
        // Calculate match score for each item
        const scoredItems = args.items.map(item => {
          const itemLower = item.label.toLowerCase();
          let score = 0;
          let allCharsFound = true;

          // Check if all search characters exist in the item
          for (const char of searchChars) {
            if (itemLower.includes(char)) {
              // Bonus points for consecutive characters
              const charIndex = itemLower.indexOf(char);
              if (charIndex === 0) score += 3; // Start of word bonus
              else if (itemLower[charIndex - 1] === ' ') score += 2; // Start of any word
              else score += 1;
            } else {
              allCharsFound = false;
              break;
            }
          }

          // Additional bonus for exact substring match
          if (allCharsFound && itemLower.includes(value.toLowerCase())) {
            score += 10;
          }
          return {
            item,
            score: allCharsFound ? score : -1,
            visible: allCharsFound
          };
        });

        // Sort by score (highest first) and update items
        scoredItems.sort((a, b) => b.score - a.score);
        args.items = scoredItems.map(({
          item,
          visible
        }) => ({
          ...item,
          visibleInMenu: visible,
          focused: false,
          // Single select: the selection is only valid while the input still
          // holds the selected label, so editing the text clears it.
          selected: item.selected && visible && item.label.toLowerCase() === value.toLowerCase(),
          // Add score as part of label for demonstration (you can remove this in production)
          label: item.label
        }));
      } else {
        // No search text, show all items and drop the stale selection
        args.items = args.items.map(item => ({
          ...item,
          visibleInMenu: true,
          focused: false,
          selected: false
        }));
      }
      autocomplete.items = [...args.items];
      autocomplete.value = value;
      // Show match count in console for demonstration
      const matchCount = args.items.filter(item => item.visibleInMenu).length;
      console.log(\`Fuzzy search for "\${value}": \${matchCount} matches found\`);

      // Show menu if there are visible items
      const hasVisibleItems = args.items.some(item => item.visibleInMenu);
      requestMenu(autocomplete, hasVisibleItems && value.length >= args['min-chars']);
    };

    // Custom item select handler
    const customItemSelect = (item: IAutocompleteItem) => {
      const autocomplete = document.getElementById('autocomplete-custom-event-handlers') as AutocompleteElement;
      if (!autocomplete) return;

      // Clear previous selections for single select
      args.items = args.items.map(menuItem => ({
        ...menuItem,
        selected: menuItem.value === item.value,
        focused: false
      }));
      autocomplete.items = [...args.items];
      autocomplete.value = item.label;
      if (!args['leave-menu-open']) {
        requestMenu(autocomplete, false);
      } else {
        args.items = args.items.map(menuItem => ({
          ...menuItem,
          visibleInMenu: true,
          focused: false
        }));
        autocomplete.items = [...args.items];
        requestMenu(autocomplete, true);
      }
    };
    // prettier-ignore
    return html\`
      <style>
        div[id^='story--components-forms-autocomplete--custom-event-handlers'] {
          height: 400px;
        }

        .modus-wc-autocomplete.modus-wc-autocomplete {
          width: 300px;
        }

        .fuzzy-info {
          margin-top: 1rem;
          padding: 1rem;
          background-color: var(--modus-wc-color-info-light);
          border-radius: 4px;
          font-size: 0.875rem;
        }
      </style>

      <modus-wc-autocomplete
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        debounce-ms=\${0}
        ?disabled=\${args.disabled}
        id="autocomplete-custom-event-handlers"
        ?include-clear=\${args['include-clear']}
        ?include-search=\${args['include-search']}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        .items=\${args.items}
        label="Fruit list with custom handlers"
        ?leave-menu-open=\${args['leave-menu-open']}
        min-chars=\${args['min-chars']}
        ?multi-select=\${false}
        name=\${ifDefined(args.name)}
        .noResults=\${args['no-results']}
        placeholder="Type 'bry' for Blueberry or Raspberry"
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        ?show-menu-on-focus=\${args['show-menu-on-focus']}
        ?show-spinner=\${args['show-spinner']}
        size=\${ifDefined(args.size)}
        value=\${args.value}
        .customKeyDown=\${customKeyDown}
        .customInputChange=\${customInputChange}
        .customItemSelect=\${customItemSelect}
        @inputBlur=\${() => {
      menuRequestedOpen = false;
    }}
      ></modus-wc-autocomplete>
      <script>
        // Commented out so Storybook does not run this twice; mirrors the live handlers above.
        \${Items}
        // const autocomplete = document.getElementById('autocomplete-custom-event-handlers');
        // autocomplete.items = autocompleteItems;
        //
        // let menuRequestedOpen = false;
        // const requestMenu = (open) => {
        //   if (open === menuRequestedOpen) return;
        //   menuRequestedOpen = open;
        //   void (open ? autocomplete.openMenu() : autocomplete.closeMenu());
        // };
        //
        // const customKeyDown = (e) => {
        //   if (!autocomplete) return;
        //   if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
        //     e.preventDefault();
        //   }
        //   const visibleItems = autocomplete.items.filter(
        //     (item) => item.visibleInMenu && !item.disabled
        //   );
        //   switch (e.key) {
        //     case 'Escape':
        //       autocomplete.items = autocomplete.items.map((item) => ({
        //         ...item,
        //         focused: false,
        //       }));
        //       requestMenu(false);
        //       autocomplete.style.transform = 'scale(0.98)';
        //       setTimeout(() => {
        //         autocomplete.style.transform = '';
        //       }, 200);
        //       break;
        //     case 'ArrowDown': {
        //       requestMenu(true);
        //       const currentIndex = visibleItems.findIndex((item) => item.focused);
        //       const nextIndex =
        //         currentIndex < 0
        //           ? 0
        //           : Math.min(currentIndex + 1, visibleItems.length - 1);
        //       const skipIndex =
        //         nextIndex + 1 < visibleItems.length ? nextIndex + 1 : nextIndex;
        //       autocomplete.items = autocomplete.items.map((item) => ({
        //         ...item,
        //         focused: visibleItems[skipIndex]?.value === item.value,
        //       }));
        //       break;
        //     }
        //     case 'ArrowUp': {
        //       const currentIndex = visibleItems.findIndex((item) => item.focused);
        //       const prevIndex =
        //         currentIndex < 0
        //           ? visibleItems.length - 1
        //           : Math.max(currentIndex - 1, 0);
        //       const skipIndex = prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex;
        //       autocomplete.items = autocomplete.items.map((item) => ({
        //         ...item,
        //         focused: visibleItems[skipIndex]?.value === item.value,
        //       }));
        //       break;
        //     }
        //     case 'Enter': {
        //       const focusedItem = visibleItems.find((item) => item.focused);
        //       if (focusedItem) {
        //         autocomplete.items = autocomplete.items.map((item) => ({
        //           ...item,
        //           selected: item.value === focusedItem.value,
        //           focused: false,
        //         }));
        //         autocomplete.value = focusedItem.label;
        //         requestMenu(false);
        //       }
        //       break;
        //     }
        //     default:
        //       return;
        //   }
        // };
        //
        // const customInputChange = (value) => {
        //   if (!autocomplete) return;
        //   const searchChars = value.toLowerCase().split('');
        //   const minChars = autocomplete.minChars ?? 0;
        //   if (value.length > 0) {
        //     const scoredItems = autocomplete.items.map((item) => {
        //       const itemLower = item.label.toLowerCase();
        //       let score = 0;
        //       let allCharsFound = true;
        //       for (const char of searchChars) {
        //         if (itemLower.includes(char)) {
        //           const charIndex = itemLower.indexOf(char);
        //           if (charIndex === 0) score += 3;
        //           else if (itemLower[charIndex - 1] === ' ') score += 2;
        //           else score += 1;
        //         } else {
        //           allCharsFound = false;
        //           break;
        //         }
        //       }
        //       if (allCharsFound && itemLower.includes(value.toLowerCase())) {
        //         score += 10;
        //       }
        //       return {
        //         item,
        //         score: allCharsFound ? score : -1,
        //         visible: allCharsFound,
        //       };
        //     });
        //     scoredItems.sort((a, b) => b.score - a.score);
        //     autocomplete.items = scoredItems.map(({ item, visible }) => ({
        //       ...item,
        //       visibleInMenu: visible,
        //       focused: false,
        //       selected:
        //         item.selected &&
        //         visible &&
        //         item.label.toLowerCase() === value.toLowerCase(),
        //       label: item.label,
        //     }));
        //   } else {
        //     autocomplete.items = autocomplete.items.map((item) => ({
        //       ...item,
        //       visibleInMenu: true,
        //       focused: false,
        //       selected: false,
        //     }));
        //   }
        //   autocomplete.value = value;
        //   const hasVisibleItems = autocomplete.items.some(
        //     (item) => item.visibleInMenu
        //   );
        //   requestMenu(hasVisibleItems && value.length >= minChars);
        // };
        //
        // const customItemSelect = (item) => {
        //   if (!autocomplete) return;
        //   autocomplete.items = autocomplete.items.map((menuItem) => ({
        //     ...menuItem,
        //     selected: menuItem.value === item.value,
        //     focused: false,
        //   }));
        //   autocomplete.value = item.label;
        //   if (!autocomplete.leaveMenuOpen) {
        //     requestMenu(false);
        //   } else {
        //     autocomplete.items = autocomplete.items.map((menuItem) => ({
        //       ...menuItem,
        //       visibleInMenu: true,
        //       focused: false,
        //     }));
        //     requestMenu(true);
        //   }
        // };
        //
        // autocomplete.customKeyDown = customKeyDown;
        // autocomplete.customInputChange = customInputChange;
        // autocomplete.customItemSelect = customItemSelect;
        // autocomplete.addEventListener('inputBlur', () => {
        //   menuRequestedOpen = false;
        // });
      <\/script>
    \`;
  },
  args: {
    bordered: true,
    'debounce-ms': 0,
    // Set to 0 to see immediate feedback
    disabled: false,
    'include-clear': true,
    'include-search': true,
    items: items,
    'leave-menu-open': false,
    'min-chars': 0,
    'no-results': {
      label: 'No fruits found',
      subLabel: 'Try different characters'
    },
    placeholder: 'Search fruits...',
    'input-id': 'custom-handlers-input',
    'read-only': false,
    required: false,
    'show-menu-on-focus': true,
    'show-spinner': false,
    size: 'md',
    value: ''
  },
  parameters: {
    docs: {
      description: {
        story: \`This example demonstrates custom event handlers with three specific behaviors:

1. **Skip Navigation**: Arrow keys skip every other item for 2x faster navigation
2. **Escape Animation**: Pressing Escape triggers a subtle scale animation
3. **Fuzzy Character Search**: Instead of normal substring matching, this searches for items containing ALL typed characters in any order

The fuzzy search allows finding items with scattered characters:
- Type "pae" to find Pine**a**ppl**e**
- Type "bry" to find Blue**b**er**ry**, Straw**b**er**ry**, Rasp**b**er**ry**

Items are automatically sorted by relevance with exact substring matches appearing first.\`
      }
    }
  }
}`,...(pe=(de=A.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,be,fe;$.parameters={...$.parameters,docs:{...(he=$.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    items: items // Explicitly set items for this story
  },
  render: args => {
    // Type for autocomplete element with methods
    interface AutocompleteElement extends HTMLElement {
      selectItem(item: IAutocompleteItem | null): Promise<void>;
      openMenu(): Promise<void>;
      closeMenu(): Promise<void>;
      toggleMenu(): Promise<void>;
      focusInput(): Promise<void>;
      clearInput(): Promise<void>;
    }

    // Handler functions that will be attached to buttons
    const handleSelectApple = async () => {
      const autocomplete = document.getElementById('programmatic-autocomplete') as AutocompleteElement;
      if (autocomplete) {
        const appleItem = items.find(item => item.value === 'apple') || null;
        await autocomplete.selectItem(appleItem);
      }
    };
    const handleSelectNull = async () => {
      const autocomplete = document.getElementById('programmatic-autocomplete') as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.selectItem(null);
      }
    };
    const handleOpenMenu = async () => {
      const autocomplete = document.getElementById('programmatic-autocomplete') as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.openMenu();
      }
    };
    const handleCloseMenu = async () => {
      const autocomplete = document.getElementById('programmatic-autocomplete') as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.closeMenu();
      }
    };
    const handleToggleMenu = async () => {
      const autocomplete = document.getElementById('programmatic-autocomplete') as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.toggleMenu();
      }
    };
    const handleFocusInput = async () => {
      const autocomplete = document.getElementById('programmatic-autocomplete') as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.focusInput();
      }
    };
    const handleClearInput = async () => {
      const autocomplete = document.getElementById('programmatic-autocomplete') as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.clearInput();
      }
    };

    // Attach handlers to window for inline onclick
    interface WindowWithHandlers extends Window {
      handleSelectApple?: () => Promise<void>;
      handleSelectNull?: () => Promise<void>;
      handleOpenMenu?: () => Promise<void>;
      handleCloseMenu?: () => Promise<void>;
      handleToggleMenu?: () => Promise<void>;
      handleFocusInput?: () => Promise<void>;
      handleClearInput?: () => Promise<void>;
    }
    const windowWithHandlers = window as WindowWithHandlers;
    windowWithHandlers.handleSelectApple = handleSelectApple;
    windowWithHandlers.handleSelectNull = handleSelectNull;
    windowWithHandlers.handleOpenMenu = handleOpenMenu;
    windowWithHandlers.handleCloseMenu = handleCloseMenu;
    windowWithHandlers.handleToggleMenu = handleToggleMenu;
    windowWithHandlers.handleFocusInput = handleFocusInput;
    windowWithHandlers.handleClearInput = handleClearInput;

    // prettier-ignore
    return html\`
      <style>
        div[id^='story--components-forms-autocomplete--with-programmatic-control'] {
          height: 500px;
        }

        .controls-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .control-group {
          margin-bottom: 1rem;
        }
        .control-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .button-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
      </style>

      <modus-wc-card class="controls-card">
        <div class="controls-content">
          <h3>Programmatic Control Methods</h3>

          <div class="control-group">
            <label>Selection Methods:</label>
            <div class="button-row">
              <modus-wc-button
                onclick="window.handleSelectApple()"
                size="sm"
              >
                Select Apple
              </modus-wc-button>
              <modus-wc-button
                onclick="window.handleSelectNull()"
                size="sm"
              >
                Clear Selection
              </modus-wc-button>
            </div>
          </div>

          <div class="control-group">
            <label>Menu Control Methods:</label>
            <div class="button-row">
              <modus-wc-button
                onclick="window.handleOpenMenu()"
                size="sm"
              >
                Open Menu
              </modus-wc-button>
              <modus-wc-button
                onclick="window.handleCloseMenu()"
                size="sm"
              >
                Close Menu
              </modus-wc-button>
              <modus-wc-button
                onclick="window.handleToggleMenu()"
                size="sm"
              >
                Toggle Menu
              </modus-wc-button>
            </div>
          </div>

          <div class="control-group">
            <label>Input Control Methods:</label>
            <div class="button-row">
              <modus-wc-button
                onclick="window.handleFocusInput()"
                size="sm"
              >
                Focus Input
              </modus-wc-button>
              <modus-wc-button
                onclick="window.handleClearInput()"
                size="sm"
              >
                Clear All
              </modus-wc-button>
            </div>
          </div>
        </div>
      </modus-wc-card>
      <modus-wc-autocomplete
        id="programmatic-autocomplete"
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        debounce-ms=\${ifDefined(args['debounce-ms'])}
        ?disabled=\${args.disabled}
        ?include-clear=\${args['include-clear']}
        ?include-search=\${args['include-search']}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        .items=\${args.items}
        label="Try the control buttons above"
        ?leave-menu-open=\${args['leave-menu-open']}
        max-chips=\${args['max-chips'] ?? 4}
        min-chars=\${args['min-chars']}
        min-input-width=\${ifDefined(args['min-input-width'])}
        ?multi-select=\${args['multi-select']}
        name=\${ifDefined(args.name)}
        .noResults=\${args['no-results']}
        placeholder="Use buttons above to control"
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        ?show-menu-on-focus=\${args['show-menu-on-focus']}
        ?show-spinner=\${args['show-spinner']}
        size=\${ifDefined(args.size)}
        value=\${args.value}
      ></modus-wc-autocomplete>
      <script type="module">
        //  //Commenting out the scripts to avoid duplicate declaration in storybook code
        //   const handleSelectApple = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       const appleItem =
        //         autocompleteItems.find((item) => item.value === 'apple') || null;
        //       await autocomplete.selectItem(appleItem);
        //     }
        //   };

        //   const handleSelectNull = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.selectItem(null);
        //     }
        //   };

        //   const handleOpenMenu = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.openMenu();
        //     }
        //   };

        //   const handleCloseMenu = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.closeMenu();
        //     }
        //   };

        //   const handleToggleMenu = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.toggleMenu();
        //     }
        //   };

        //   const handleFocusInput = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.focusInput();
        //     }
        //   };

        //   const handleClearInput = async () => {
        //     const autocomplete = document.getElementById(
        //       'programmatic-autocomplete'
        //     );
        //     if (autocomplete) {
        //       await autocomplete.clearInput();
        //     }
        //   };
        //   window.handleSelectApple = handleSelectApple;
        //   window.handleSelectNull = handleSelectNull;
        //   window.handleOpenMenu = handleOpenMenu;
        //   window.handleCloseMenu = handleCloseMenu;
        //   window.handleToggleMenu = handleToggleMenu;
        //   window.handleFocusInput = handleFocusInput;
        //   window.handleClearInput = handleClearInput;

        // // Add Autocomplete items
        \${Items}
        // // Adding this block to show how to set options using JS
        // const autocomplete = document.getElementById(
        //   'programmatic-autocomplete'
        // );
        // autocomplete.items = autocompleteItems;
      <\/script>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: \`
## Public Methods

The autocomplete component exposes several methods that can be called programmatically:

### selectItem(item: IAutocompleteItem | null): Promise<void>
Programmatically select an item. Pass \\\`null\\\` to clear selection.

\\\`\\\`\\\`javascript
const autocomplete = document.querySelector('modus-wc-autocomplete');
const item = { label: 'Apple', value: 'apple', visibleInMenu: true };
await autocomplete.selectItem(item);
\\\`\\\`\\\`

### openMenu(): Promise<void>
Programmatically open the dropdown menu.

\\\`\\\`\\\`javascript
await autocomplete.openMenu();
\\\`\\\`\\\`

### closeMenu(): Promise<void>
Programmatically close the dropdown menu.

\\\`\\\`\\\`javascript
await autocomplete.closeMenu();
\\\`\\\`\\\`

### toggleMenu(): Promise<void>
Toggle the dropdown menu open/closed.

\\\`\\\`\\\`javascript
await autocomplete.toggleMenu();
\\\`\\\`\\\`

### focusInput(): Promise<void>
Set focus to the input element.

\\\`\\\`\\\`javascript
await autocomplete.focusInput();
\\\`\\\`\\\`

### clearInput(): Promise<void>
Clear the input value and all selections.

\\\`\\\`\\\`javascript
await autocomplete.clearInput();
\\\`\\\`\\\`

        \`
      }
    }
  }
}`,...(fe=(be=$.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ve,we,Ie;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => {
    const defaultFruits = [{
      label: 'Apple',
      value: 'apple',
      visibleInMenu: true
    }, {
      label: 'Banana',
      value: 'banana',
      visibleInMenu: true
    }, {
      label: 'Orange',
      value: 'orange',
      visibleInMenu: true
    }, {
      label: 'Strawberry',
      value: 'strawberry',
      visibleInMenu: true
    }];

    // Extended dataset that will be searched when typing
    const allFruits = [...defaultFruits, {
      label: 'Blackberry',
      value: 'blackberry',
      visibleInMenu: true
    }, {
      label: 'Blueberry',
      value: 'blueberry',
      visibleInMenu: true
    }, {
      label: 'Cherry',
      value: 'cherry',
      visibleInMenu: true
    }, {
      label: 'Cranberry',
      value: 'cranberry',
      visibleInMenu: true
    }, {
      label: 'Fig',
      value: 'fig',
      visibleInMenu: true
    }, {
      label: 'Grape',
      value: 'grape',
      visibleInMenu: true
    }, {
      label: 'Kiwi',
      value: 'kiwi',
      visibleInMenu: true
    }, {
      label: 'Lemon',
      value: 'lemon',
      visibleInMenu: true
    }, {
      label: 'Lime',
      value: 'lime',
      visibleInMenu: true
    }, {
      label: 'Mango',
      value: 'mango',
      visibleInMenu: true
    }, {
      label: 'Melon',
      value: 'melon',
      visibleInMenu: true
    }, {
      label: 'Peach',
      value: 'peach',
      visibleInMenu: true
    }, {
      label: 'Pineapple',
      value: 'pineapple',
      visibleInMenu: true
    }, {
      label: 'Raspberry',
      value: 'raspberry',
      visibleInMenu: true
    }, {
      label: 'Watermelon',
      value: 'watermelon',
      visibleInMenu: true
    }];
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        if (searchText === '') {
          autocomplete.items = [...defaultFruits];
          autocomplete.value = input.value;
          return;
        }
        autocomplete.showSpinner = true;
        setTimeout(() => {
          const filteredFruits = allFruits.filter(fruit => fruit.label.toLowerCase().includes(searchText));
          autocomplete.items = filteredFruits;
          autocomplete.showSpinner = false;
        }, 1000);
        autocomplete.value = input.value;
      }
    };
    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const label = e.detail.label;
        if (label) {
          autocomplete.value = label;
        }
      }
    };
    return html\`
      <style>
        div[id^='story--components-forms-autocomplete--dynamic-options'] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        debounce-ms=\${ifDefined(args['debounce-ms'])}
        ?disabled=\${args.disabled}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        .items=\${defaultFruits}
        label=\${ifDefined(args.label)}
        ?leave-menu-open=\${args['leave-menu-open']}
        min-chars=\${0}
        ?multi-select=\${false}
        name=\${ifDefined(args.name)}
        .noResults=\${args['no-results']}
        placeholder="Type to search fruits..."
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        ?show-menu-on-focus=\${true}
        size=\${ifDefined(args.size)}
        value=\${args.value}
        @inputChange=\${handleInputChange}
        @itemSelect=\${handleItemSelect}
      ></modus-wc-autocomplete>
      <script>
        // const defaultFruits = [
        //   { label: 'Apple', value: 'apple', visibleInMenu: true },
        //   { label: 'Banana', value: 'banana', visibleInMenu: true },
        //   { label: 'Orange', value: 'orange', visibleInMenu: true },
        //   { label: 'Strawberry', value: 'strawberry', visibleInMenu: true },
        // ];

        // // Extended dataset that will be searched when typing
        // const allFruits = [
        //   ...defaultFruits,
        //   { label: 'Blackberry', value: 'blackberry', visibleInMenu: true },
        //   { label: 'Blueberry', value: 'blueberry', visibleInMenu: true },
        //   { label: 'Cherry', value: 'cherry', visibleInMenu: true },
        //   { label: 'Cranberry', value: 'cranberry', visibleInMenu: true },
        //   { label: 'Fig', value: 'fig', visibleInMenu: true },
        //   { label: 'Grape', value: 'grape', visibleInMenu: true },
        //   { label: 'Kiwi', value: 'kiwi', visibleInMenu: true },
        //   { label: 'Lemon', value: 'lemon', visibleInMenu: true },
        //   { label: 'Lime', value: 'lime', visibleInMenu: true },
        //   { label: 'Mango', value: 'mango', visibleInMenu: true },
        //   { label: 'Melon', value: 'melon', visibleInMenu: true },
        //   { label: 'Peach', value: 'peach', visibleInMenu: true },
        //   { label: 'Pineapple', value: 'pineapple', visibleInMenu: true },
        //   { label: 'Raspberry', value: 'raspberry', visibleInMenu: true },
        //   { label: 'Watermelon', value: 'watermelon', visibleInMenu: true },
        // ];

        // const handleInputChange = (e) => {
        //   if (!e.detail?.target) return;

        //   const autocomplete = e.target.closest('modus-wc-autocomplete');

        //   if (autocomplete) {
        //     const input = e.detail.target;
        //     const searchText = input.value.toLowerCase();

        //     // If empty, show default fruits again
        //     if (searchText === '') {
        //       autocomplete.items = [...defaultFruits];
        //       autocomplete.value = input.value;
        //       return;
        //     }

        //     // Show spinner while "loading" data
        //     autocomplete.showSpinner = true;

        //     // Simulate API call delay with setTimeout
        //     setTimeout(() => {
        //       const filteredFruits = allFruits.filter((fruit) =>
        //         fruit.label.toLowerCase().includes(searchText)
        //       );

        //       // Update the items with the "API response"
        //       autocomplete.items = filteredFruits;

        //       // Hide spinner after "loading" completes
        //       autocomplete.showSpinner = false;
        //     }, 1000);

        //     autocomplete.value = input.value;
        //   }
        // };

        // const handleItemSelect = (e) => {
        //   const autocomplete = e.target.closest('modus-wc-autocomplete');

        //   if (autocomplete) {
        //     const label = e.detail.label;
        //     if (label) {
        //       autocomplete.value = label;
        //     }
        //   }
        // };

        // // Adding this block to show how to set Autocomplete items and attching event listeners via JS
        // const autocomplete = document.querySelector('modus-wc-autocomplete');

        // if (autocomplete) {
        // // Set initial items
        // autocomplete.items = [...defaultFruits];
        // // Attach event listeners
        // autocomplete.addEventListener('inputChange', handleInputChange);
        // autocomplete.addEventListener('itemSelect', handleItemSelect);
        // }
      <\/script>
    \`;
  }
}`,...(Ie=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var ge,ye,xe;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for autocomplete component
    if (!customElements.get('autocomplete-shadow-host')) {
      const AutocompleteShadowHost = createShadowHostClass<AutocompleteArgs>({
        componentTag: 'modus-wc-autocomplete',
        propsMapper: (v: AutocompleteArgs, el: HTMLElement) => {
          const autocompleteEl = el as unknown as {
            bordered: boolean;
            customClass: string;
            debounceMs: number;
            disabled: boolean;
            includeClear: boolean;
            includeSearch: boolean;
            inputId: string;
            inputTabIndex: number;
            items: IAutocompleteItem[];
            label: string;
            leaveMenuOpen: boolean;
            maxChips: number;
            minChars: number;
            minInputWidth: number;
            multiSelect: boolean;
            name: string;
            noResults: IAutocompleteNoResults;
            placeholder: string;
            readOnly: boolean;
            required: boolean;
            showMenuOnFocus: boolean;
            showSpinner: boolean;
            size: string;
            value: string;
          };
          autocompleteEl.bordered = Boolean(v.bordered);
          autocompleteEl.customClass = v['custom-class'] || '';
          if (typeof v['debounce-ms'] === 'number') {
            autocompleteEl.debounceMs = v['debounce-ms'];
          }
          autocompleteEl.disabled = Boolean(v.disabled);
          autocompleteEl.includeClear = Boolean(v['include-clear']);
          autocompleteEl.includeSearch = Boolean(v['include-search']);
          if (typeof v['input-id'] === 'string') {
            autocompleteEl.inputId = v['input-id'];
          }
          if (typeof v['input-tab-index'] === 'number') {
            autocompleteEl.inputTabIndex = v['input-tab-index'];
          }
          autocompleteEl.items = v.items;
          if (typeof v.label === 'string') {
            autocompleteEl.label = v.label;
          }
          if (typeof v['leave-menu-open'] === 'boolean') {
            autocompleteEl.leaveMenuOpen = v['leave-menu-open'];
          }
          if (typeof v['max-chips'] === 'number') {
            autocompleteEl.maxChips = v['max-chips'];
          }
          if (typeof v['min-chars'] === 'number') {
            autocompleteEl.minChars = v['min-chars'];
          }
          if (typeof v['min-input-width'] === 'number') {
            autocompleteEl.minInputWidth = v['min-input-width'];
          }
          autocompleteEl.multiSelect = Boolean(v['multi-select']);
          if (typeof v.name === 'string') {
            autocompleteEl.name = v.name;
          }
          autocompleteEl.noResults = v['no-results'];
          if (typeof v.placeholder === 'string') {
            autocompleteEl.placeholder = v.placeholder;
          }
          autocompleteEl.readOnly = Boolean(v['read-only']);
          autocompleteEl.required = Boolean(v.required);
          if (typeof v['show-menu-on-focus'] === 'boolean') {
            autocompleteEl.showMenuOnFocus = v['show-menu-on-focus'];
          }
          autocompleteEl.showSpinner = Boolean(v['show-spinner']);
          if (typeof v.size === 'string') {
            autocompleteEl.size = v.size;
          }
          autocompleteEl.value = v.value;
        }
      });
      customElements.define('autocomplete-shadow-host', AutocompleteShadowHost);
    }
    return html\`<autocomplete-shadow-host
      .props=\${{
      ...args
    }}
    ></autocomplete-shadow-host>\`;
  }
}`,...(xe=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Me,Ce,Se;q.parameters={...q.parameters,docs:{...(Me=q.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - To handle updating items in 2.0, simply create a new array of items and bind it to the \\\`items\\\` prop. The 1.0 prop
  \\\`filter-options\\\` is no longer necessary.
  - Size values have changed from verbose names (\\\`small\\\`, \\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop                      | 2.0 Prop            | Notes                                                       |
|-------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                    | aria-label          |                                                             |
| clearable                     | include-clear       |                                                    |
| disabled                      | disabled            |                                                             |
| disable-close-on-select       | leave-menu-open     |                                                             |
| dropdown-max-height           |                     | Not carried over, use CSS instead                           |
| dropdown-z-index              |                     | Not carried over, use CSS instead                           |
| error-text                    | feedback            | feedback.level = 'error', feedback.message = 'Error message'|
| filter-options                |                     | Rebind options                                              |
| include-search-icon           | include-search      |                                                             |
| label                         | label               |                                                             |
| loading                       | show-spinner        |                                                             |
| multiple                      | multi-select        |                                                             |
| no-results-found-text         | no-results.label    |                                                             |
| no-results-found-subtext      | no-results.subLabel |                                                             |
| options                       | items               |                                                             |
| placeholder                   | placeholder         |                                                             |
| read-only                     | read-only           |                                                             |
| required                      | required            |                                                             |
| show-no-results-found-message |                     | Not carried over, use \\\`no-results\\\` prop                   |
| show-options-on-focus         | show-menu-on-focus  |                                                             |
| size                          | size                | \\\`small\\\` → \\\`sm\\\`, \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\` |
| value                         | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| optionSelected ||
| selectionsChanged ||
| valueChange | inputChange |                  |

#### Interfaces

##### 1.0

\\\`\\\`\\\`typescript
interface ModusAutocompleteOption {
  id: string;
  value: string;
}
\\\`\\\`\\\`

##### 2.0

\\\`\\\`\\\`typescript
interface IAutocompleteItem {
  label: string;
  selected?: boolean;
  value: string;
  visibleInMenu: boolean;
}
\\\`\\\`\\\`
        \`
      }
    },
    // To hide the actual story rendering and only show docs:
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  // Simple render function or leave it empty
  render: () => html\`<div></div>\`
}`,...(Se=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};const ze=["Default","WithCustomIconSlot","WithFeedback","WithTooltips","MultiSelect","WithSpinner","CustomMenuItems","CustomEventHandlers","WithProgrammaticControl","DynamicOptions","ShadowDomParent","Migration"];export{A as CustomEventHandlers,k as CustomMenuItems,y as Default,T as DynamicOptions,q as Migration,S as MultiSelect,L as ShadowDomParent,x as WithCustomIconSlot,M as WithFeedback,$ as WithProgrammaticControl,E as WithSpinner,C as WithTooltips,ze as __namedExportsOrder,$e as default};
