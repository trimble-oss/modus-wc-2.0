import{w as Te}from"./decorator-Cv9na35H.js";import{b as g}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";import{c as qe}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var R=Object.freeze,Le=Object.defineProperty,y=(e,d)=>R(Le(e,"raw",{value:R(e.slice())})),K,W,H,N,j,V,J,U;const M=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Watermelon",value:"watermelon",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Pineapple",value:"pineapple",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Kiwi",value:"kiwi",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Mango",value:"mango",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Papaya",value:"papaya",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Plum",value:"plum",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Raspberry",value:"raspberry",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Tangerine",value:"tangerine",visibleInMenu:!0,focused:!1,checkbox:!1}],Fe={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{"auto-complete":void 0,bordered:!0,"debounce-ms":300,disabled:!1,"include-clear":!1,"include-search":!1,items:M,label:"Label","leave-menu-open":!1,"max-chips":4,"min-chars":0,"min-input-width":15,"multi-select":!1,"show-menu-on-focus":!1,"show-spinner":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{"auto-complete":{control:{type:"text"}},items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},"max-chips":{control:{type:"number",min:1,max:10},description:'Maximum number of chips to display before showing "+N more" button'},"min-input-width":{control:{type:"number",min:10,max:300},description:"Minimum width for the text input in pixels. When chips would make input smaller, container height increases instead. Default: 20px."},size:{control:{type:"select"},options:["sm","md","lg"]},"custom-blur":{description:"Custom blur handler function that overrides default blur behavior",table:{type:{summary:"(event: FocusEvent) => void"},category:"Custom Handlers"}},"custom-input-change":{description:"Custom input change handler function that overrides default input change behavior",table:{type:{summary:"(value: string) => void"},category:"Custom Handlers"}},"custom-item-select":{description:"Custom item select handler function that overrides default item selection behavior",table:{type:{summary:"(item: IAutocompleteItem) => void"},category:"Custom Handlers"}},"custom-key-down":{description:"Custom keydown handler function that overrides default keyboard navigation",table:{type:{summary:"(event: KeyboardEvent) => void"},category:"Custom Handlers"}}},decorators:[Te],parameters:{actions:{handles:["chipRemove","chipsExpansionChange","clearClick","inputBlur","inputChange","inputFocus","itemSelect"]}}},C=g`
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
`,De={render:e=>g(K||(K=y([`
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
    `])),t(e["auto-complete"]),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e.feedback),e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["min-chars"],t(e["min-input-width"]),!1,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,C)},E={...De},k={render:e=>g(W||(W=y([`
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
  `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e.feedback),e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["min-chars"],t(e["min-input-width"]),!1,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,C),args:{label:"Autocomplete with custom icon",placeholder:"Search fruits..."}},A={render:e=>g`
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
        `}}}},$={name:"With Tooltips",parameters:{docs:{description:{story:"This example demonstrates menu items with tooltips. Hover over the items or move keyboard focus to them to see the tooltips; press Escape to dismiss."},source:{code:`
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
`}}},render:()=>g`
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
    `},T={render:e=>(e.items||(e.items=[...M]),e.items=e.items.map(d=>d.value==="apple"||d.value==="banana"?{...d,selected:!0}:d),g(H||(H=y([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["max-chips"]??4,e["min-chars"],t(e["min-input-width"]),!0,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],t(e.size),e.value,C))},q={render:e=>{let d;const l=w=>{var b;if(!((b=w.detail)!=null&&b.target))return;const i=w.target.closest("modus-wc-autocomplete");if(i){const n=w.detail.target.value.toLowerCase();d&&window.clearTimeout(d),i.showSpinner=!0,d=window.setTimeout(()=>{const s=M.filter(a=>a.label.toLowerCase().includes(n));i.items=s,i.showSpinner=!1},2e3)}};return g(N||(N=y([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["min-chars"],!1,t(e.name),t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,l,C)}},L={render:e=>{const d=e["no-results"];e["leave-menu-open"]==!0&&(e["no-results"]={ariaLabel:"",label:"",subLabel:""});const l=o=>{const n=o.querySelectorAll("modus-wc-menu-item:not([disabled])");return Array.from(n).filter(s=>window.getComputedStyle(s).display!=="none"&&!s.classList.contains("hidden"))},w=o=>{var f,h;const n=o.target.closest("modus-wc-autocomplete");if(!n||n.disabled||n.readOnly)return;const a=l(n).map(c=>c.querySelector("button")).filter(Boolean),r=document.activeElement,p=a.indexOf(r);switch(o.key){case"ArrowDown":{o.preventDefault(),n.openMenu();let c=p+1;if(c>=a.length)return;c<0&&(c=0),(f=a[c])==null||f.focus();break}case"ArrowUp":{o.preventDefault(),n.openMenu();let c=p-1;if(c<0)return;(h=a[c])==null||h.focus();break}case"Enter":{o.preventDefault(),a.includes(r)&&r.click();const c=n.querySelector("input");c==null||c.focus();break}case"Escape":{o.preventDefault(),n.closeMenu();const c=n.querySelector("input");c==null||c.focus();break}}},i=o=>{var s;if(!((s=o.detail)!=null&&s.target))return;const n=o.target.closest("modus-wc-autocomplete");if(n){const a=o.detail.target.value.toLowerCase(),r=n==null?void 0:n.querySelectorAll("modus-wc-menu-item");a===""&&(r==null||r.forEach(h=>{h.removeAttribute("selected")}));let p=0;Array.from(r??[]).forEach(h=>{var u;(((u=h.getAttribute("label"))==null?void 0:u.toLowerCase())||"").includes(a)?h.classList.remove("hidden"):(h.classList.add("hidden"),p++)}),n.noResults=p===(r==null?void 0:r.length)?d:{ariaLabel:"",label:"",subLabel:""};const f=n.querySelector(".no-results-item");f&&(p===(r==null?void 0:r.length)?f.classList.add("visible"):f.classList.remove("visible"))}},b=o=>{const n=o.target.closest("modus-wc-autocomplete");if(n){const s=o.detail.value;n.value=s,n.querySelectorAll("modus-wc-menu-item").forEach(r=>{r.getAttribute("value")===s?r.setAttribute("selected","true"):r.removeAttribute("selected")}),e["leave-menu-open"]||n.closeMenu()}};return g(j||(j=y([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),t(e.label),e["leave-menu-open"],e["min-chars"],!1,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],t(e.size),e["show-spinner"],e.value,w,i,!0,b,b,b,b)}},F={render:e=>{let d=!1;const l=(o,n)=>{n!==d&&(d=n,n?o.openMenu():o.closeMenu())},w=o=>{const n=document.getElementById("autocomplete-custom-event-handlers");if(!n)return;["ArrowDown","ArrowUp","Enter","Escape"].includes(o.key)&&o.preventDefault();const s=e.items.filter(u=>u.visibleInMenu&&!u.disabled),a=u=>Array.from(n.querySelectorAll("modus-wc-menu-item")).find(m=>m.value===u),r=()=>{var m;const u=(m=o.target)==null?void 0:m.closest("modus-wc-menu-item");return u?s.findIndex(v=>v.value===u.value):-1},p=u=>{var m,v;(v=(m=a(u))==null?void 0:m.querySelector("li"))==null||v.focus()},f=(u,m)=>{if(u>0){const I=m<0?0:Math.min(m+1,s.length-1);return I+1<s.length?I+1:I}const v=m<0?s.length-1:Math.max(m-1,0);return v-1>=0?v-1:v},h=u=>{if(!s.length)return;const m=r(),v=s.findIndex(x=>x.focused),I=m>=0?m:v,S=f(u,I);if(S===I&&m>=0){const x=s[I];x&&p(x.value);return}const O=s[S];O&&(e.items=e.items.map(x=>({...x,focused:x.value===O.value})),n.items=[...e.items],p(O.value))},c=()=>{var u;(u=n.querySelector("input"))==null||u.focus()};switch(o.key){case"Escape":e.items=e.items.map(u=>({...u,focused:!1})),n.items=[...e.items],c(),l(n,!1),n.style.transform="scale(0.98)",setTimeout(()=>{n.style.transform=""},200);break;case"ArrowDown":{l(n,!0),h(1);return}case"ArrowUp":{h(-1);return}case"Enter":{if(r()>=0)return;const u=s.find(m=>m.focused);u&&(e.items=e.items.map(m=>({...m,selected:m.value===u.value,focused:!1})),n.value=u.label,c(),l(n,!1));break}case"Tab":{const u=r()>=0;if(!u&&o.shiftKey||!s.length)return;if(!u){const I=s.find(S=>S.focused);if(!I)return;o.preventDefault(),p(I.value);return}const m=r();if(f(o.shiftKey?-1:1,m)===m){e.items=e.items.map(I=>({...I,focused:!1})),n.items=[...e.items];return}o.preventDefault(),h(o.shiftKey?-1:1);return}default:return}n.items=[...e.items]},i=o=>{const n=document.getElementById("autocomplete-custom-event-handlers");if(!n)return;const s=o.toLowerCase().split("");if(o.length>0){const p=e.items.map(f=>{const h=f.label.toLowerCase();let c=0,u=!0;for(const m of s)if(h.includes(m)){const v=h.indexOf(m);v===0?c+=3:h[v-1]===" "?c+=2:c+=1}else{u=!1;break}return u&&h.includes(o.toLowerCase())&&(c+=10),{item:f,score:u?c:-1,visible:u}});p.sort((f,h)=>h.score-f.score),e.items=p.map(({item:f,visible:h})=>({...f,visibleInMenu:h,focused:!1,selected:f.selected&&h&&f.label.toLowerCase()===o.toLowerCase(),label:f.label}))}else e.items=e.items.map(p=>({...p,visibleInMenu:!0,focused:!1,selected:!1}));n.items=[...e.items],n.value=o;const a=e.items.filter(p=>p.visibleInMenu).length;console.log(`Fuzzy search for "${o}": ${a} matches found`);const r=e.items.some(p=>p.visibleInMenu);l(n,r&&o.length>=e["min-chars"])},b=o=>{const n=document.getElementById("autocomplete-custom-event-handlers");n&&(e.items=e.items.map(s=>({...s,selected:s.value===o.value,focused:!1})),n.items=[...e.items],n.value=o.label,e["leave-menu-open"]?(e.items=e.items.map(s=>({...s,visibleInMenu:!0,focused:!1})),n.items=[...e.items],l(n,!0)):l(n,!1))};return g(V||(V=y([`
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
        //   const menuItemFor = (value) =>
        //     Array.from(autocomplete.querySelectorAll('modus-wc-menu-item')).find(
        //       (el) => el.value === value
        //     );
        //   // The menu moves DOM focus one step before this handler runs, so read
        //   // the row that received the key instead of document.activeElement.
        //   const indexFromKeyTarget = () => {
        //     const host = e.target?.closest?.('modus-wc-menu-item');
        //     if (!host) return -1;
        //     return visibleItems.findIndex((item) => item.value === host.value);
        //   };
        //   const focusOption = (value) => {
        //     menuItemFor(value)?.querySelector('li')?.focus();
        //   };
        //   const skipFrom = (direction, currentIndex) => {
        //     if (direction > 0) {
        //       const nextIndex =
        //         currentIndex < 0
        //           ? 0
        //           : Math.min(currentIndex + 1, visibleItems.length - 1);
        //       return nextIndex + 1 < visibleItems.length ? nextIndex + 1 : nextIndex;
        //     }
        //     const prevIndex =
        //       currentIndex < 0
        //         ? visibleItems.length - 1
        //         : Math.max(currentIndex - 1, 0);
        //     return prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex;
        //   };
        //   const highlightSkip = (direction) => {
        //     if (!visibleItems.length) return;
        //     const fromRow = indexFromKeyTarget();
        //     const fromFlag = visibleItems.findIndex((item) => item.focused);
        //     const currentIndex = fromRow >= 0 ? fromRow : fromFlag;
        //     const next = skipFrom(direction, currentIndex);
        //     if (next === currentIndex && fromRow >= 0) {
        //       const stay = visibleItems[currentIndex];
        //       if (stay) focusOption(stay.value);
        //       return;
        //     }
        //     const target = visibleItems[next];
        //     if (!target) return;
        //     autocomplete.items = autocomplete.items.map((item) => ({
        //       ...item,
        //       focused: item.value === target.value,
        //     }));
        //     focusOption(target.value);
        //   };
        //   const focusInput = () => {
        //     autocomplete.querySelector('input')?.focus();
        //   };
        //   switch (e.key) {
        //     case 'Escape':
        //       autocomplete.items = autocomplete.items.map((item) => ({
        //         ...item,
        //         focused: false,
        //       }));
        //       focusInput();
        //       requestMenu(false);
        //       autocomplete.style.transform = 'scale(0.98)';
        //       setTimeout(() => {
        //         autocomplete.style.transform = '';
        //       }, 200);
        //       break;
        //     case 'ArrowDown':
        //       requestMenu(true);
        //       highlightSkip(1);
        //       return;
        //     case 'ArrowUp':
        //       highlightSkip(-1);
        //       return;
        //     case 'Enter': {
        //       if (indexFromKeyTarget() >= 0) return;
        //       const focusedItem = visibleItems.find((item) => item.focused);
        //       if (focusedItem) {
        //         autocomplete.items = autocomplete.items.map((item) => ({
        //           ...item,
        //           selected: item.value === focusedItem.value,
        //           focused: false,
        //         }));
        //         autocomplete.value = focusedItem.label;
        //         focusInput();
        //         requestMenu(false);
        //       }
        //       break;
        //     }
        //     case 'Tab': {
        //       const onRow = indexFromKeyTarget() >= 0;
        //       if (!onRow && e.shiftKey) return;
        //       if (!visibleItems.length) return;
        //       if (!onRow) {
        //         const flagged = visibleItems.find((item) => item.focused);
        //         if (!flagged) return;
        //         e.preventDefault();
        //         focusOption(flagged.value);
        //         return;
        //       }
        //       const currentIndex = indexFromKeyTarget();
        //       const next = skipFrom(e.shiftKey ? -1 : 1, currentIndex);
        //       if (next === currentIndex) {
        //         autocomplete.items = autocomplete.items.map((item) => ({
        //           ...item,
        //           focused: false,
        //         }));
        //         return;
        //       }
        //       e.preventDefault();
        //       highlightSkip(e.shiftKey ? -1 : 1);
        //       return;
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
    `])),e.bordered,t(e["custom-class"]),0,e.disabled,e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,e["leave-menu-open"],e["min-chars"],!1,t(e.name),e["no-results"],e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,w,i,b,()=>{d=!1},C)},args:{bordered:!0,"debounce-ms":0,disabled:!1,"include-clear":!0,"include-search":!0,items:M,"leave-menu-open":!1,"min-chars":0,"no-results":{label:"No fruits found",subLabel:"Try different characters"},placeholder:"Search fruits...","input-id":"custom-handlers-input","read-only":!1,required:!1,"show-menu-on-focus":!0,"show-spinner":!1,size:"md",value:""},parameters:{docs:{description:{story:`This example demonstrates custom event handlers with three specific behaviors:

1. **Skip Navigation**: Arrow keys skip every other item for 2x faster navigation
2. **Escape Animation**: Pressing Escape triggers a subtle scale animation
3. **Fuzzy Character Search**: Instead of normal substring matching, this searches for items containing ALL typed characters in any order

The fuzzy search allows finding items with scattered characters:
- Type "pae" to find Pine**a**ppl**e**
- Type "bry" to find Blue**b**er**ry**, Straw**b**er**ry**, Rasp**b**er**ry**

Items are automatically sorted by relevance with exact substring matches appearing first.`}}}},D={args:{...Fe.args,items:M},render:e=>{const d=async()=>{const a=document.getElementById("programmatic-autocomplete");if(a){const r=M.find(p=>p.value==="apple")||null;await a.selectItem(r)}},l=async()=>{const a=document.getElementById("programmatic-autocomplete");a&&await a.selectItem(null)},w=async()=>{const a=document.getElementById("programmatic-autocomplete");a&&await a.openMenu()},i=async()=>{const a=document.getElementById("programmatic-autocomplete");a&&await a.closeMenu()},b=async()=>{const a=document.getElementById("programmatic-autocomplete");a&&await a.toggleMenu()},o=async()=>{const a=document.getElementById("programmatic-autocomplete");a&&await a.focusInput()},n=async()=>{const a=document.getElementById("programmatic-autocomplete");a&&await a.clearInput()},s=window;return s.handleSelectApple=d,s.handleSelectNull=l,s.handleOpenMenu=w,s.handleCloseMenu=i,s.handleToggleMenu=b,s.handleFocusInput=o,s.handleClearInput=n,g(J||(J=y([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,e["leave-menu-open"],e["max-chips"]??4,e["min-chars"],t(e["min-input-width"]),e["multi-select"],t(e.name),e["no-results"],e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,C)},parameters:{docs:{description:{story:`
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

        `}}}},B={render:e=>{const d=[{label:"Apple",value:"apple",visibleInMenu:!0},{label:"Banana",value:"banana",visibleInMenu:!0},{label:"Orange",value:"orange",visibleInMenu:!0},{label:"Strawberry",value:"strawberry",visibleInMenu:!0}],l=[...d,{label:"Blackberry",value:"blackberry",visibleInMenu:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0},{label:"Cherry",value:"cherry",visibleInMenu:!0},{label:"Cranberry",value:"cranberry",visibleInMenu:!0},{label:"Fig",value:"fig",visibleInMenu:!0},{label:"Grape",value:"grape",visibleInMenu:!0},{label:"Kiwi",value:"kiwi",visibleInMenu:!0},{label:"Lemon",value:"lemon",visibleInMenu:!0},{label:"Lime",value:"lime",visibleInMenu:!0},{label:"Mango",value:"mango",visibleInMenu:!0},{label:"Melon",value:"melon",visibleInMenu:!0},{label:"Peach",value:"peach",visibleInMenu:!0},{label:"Pineapple",value:"pineapple",visibleInMenu:!0},{label:"Raspberry",value:"raspberry",visibleInMenu:!0},{label:"Watermelon",value:"watermelon",visibleInMenu:!0}],w=b=>{var n;if(!((n=b.detail)!=null&&n.target))return;const o=b.target.closest("modus-wc-autocomplete");if(o){const s=b.detail.target,a=s.value.toLowerCase();if(a===""){o.items=[...d],o.value=s.value;return}o.showSpinner=!0,setTimeout(()=>{const r=l.filter(p=>p.label.toLowerCase().includes(a));o.items=r,o.showSpinner=!1},1e3),o.value=s.value}},i=b=>{const o=b.target.closest("modus-wc-autocomplete");if(o){const n=b.detail.label;n&&(o.value=n)}};return g(U||(U=y([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),d,t(e.label),e["leave-menu-open"],0,!1,t(e.name),e["no-results"],e["read-only"],e.required,!0,t(e.size),e.value,w,i)}},P={render:e=>{if(!customElements.get("autocomplete-shadow-host")){const d=qe({componentTag:"modus-wc-autocomplete",propsMapper:(l,w)=>{const i=w;i.bordered=!!l.bordered,i.customClass=l["custom-class"]||"",typeof l["debounce-ms"]=="number"&&(i.debounceMs=l["debounce-ms"]),i.disabled=!!l.disabled,i.includeClear=!!l["include-clear"],i.includeSearch=!!l["include-search"],typeof l["input-id"]=="string"&&(i.inputId=l["input-id"]),typeof l["input-tab-index"]=="number"&&(i.inputTabIndex=l["input-tab-index"]),i.items=l.items,typeof l.label=="string"&&(i.label=l.label),typeof l["leave-menu-open"]=="boolean"&&(i.leaveMenuOpen=l["leave-menu-open"]),typeof l["max-chips"]=="number"&&(i.maxChips=l["max-chips"]),typeof l["min-chars"]=="number"&&(i.minChars=l["min-chars"]),typeof l["min-input-width"]=="number"&&(i.minInputWidth=l["min-input-width"]),i.multiSelect=!!l["multi-select"],typeof l.name=="string"&&(i.name=l.name),i.noResults=l["no-results"],typeof l.placeholder=="string"&&(i.placeholder=l.placeholder),i.readOnly=!!l["read-only"],i.required=!!l.required,typeof l["show-menu-on-focus"]=="boolean"&&(i.showMenuOnFocus=l["show-menu-on-focus"]),i.showSpinner=!!l["show-spinner"],typeof l.size=="string"&&(i.size=l.size),i.value=l.value}});customElements.define("autocomplete-shadow-host",d)}return g`<autocomplete-shadow-host
      .props=${{...e}}
    ></autocomplete-shadow-host>`}},z={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>g`<div></div>`};var _,G,Q;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template
}`,...(Q=(G=E.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,le,se;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(le=$.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ae,ie,ue;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ue=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var re,ce,me;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(me=(ce=q.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,pe,he;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(he=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var fe,be,ve;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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

      // Prevent default for navigation keys
      if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
        e.preventDefault();
      }
      const visibleItems = args.items.filter(item => item.visibleInMenu && !item.disabled);
      const menuItemFor = (value: string) => Array.from(autocomplete.querySelectorAll('modus-wc-menu-item')).find(el => (el as HTMLElement & {
        value?: string;
      }).value === value);

      // Read the row that received the key. The menu moves DOM focus one step
      // before this handler runs, so document.activeElement is already wrong.
      const indexFromKeyTarget = () => {
        const host = (e.target as HTMLElement | null)?.closest('modus-wc-menu-item') as (HTMLElement & {
          value?: string;
        }) | null;
        if (!host) return -1;
        return visibleItems.findIndex(item => item.value === host.value);
      };
      const focusOption = (value: string) => {
        menuItemFor(value)?.querySelector('li')?.focus();
      };

      // Same skip the arrow keys use: step one, then jump one more when possible.
      const skipIndex = (direction: 1 | -1, currentIndex: number) => {
        if (direction > 0) {
          const nextIndex = currentIndex < 0 ? 0 : Math.min(currentIndex + 1, visibleItems.length - 1);
          return nextIndex + 1 < visibleItems.length ? nextIndex + 1 : nextIndex;
        }
        const prevIndex = currentIndex < 0 ? visibleItems.length - 1 : Math.max(currentIndex - 1, 0);
        return prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex;
      };
      const highlightSkip = (direction: 1 | -1) => {
        if (!visibleItems.length) return;
        const fromRow = indexFromKeyTarget();
        const fromFlag = visibleItems.findIndex(item => item.focused);
        const currentIndex = fromRow >= 0 ? fromRow : fromFlag;
        const next = skipIndex(direction, currentIndex);
        // The menu wraps one row at a time. Stay on this row when the skip
        // cannot move further so Tab and arrows keep the same item.
        if (next === currentIndex && fromRow >= 0) {
          const stay = visibleItems[currentIndex];
          if (stay) focusOption(stay.value);
          return;
        }
        const target = visibleItems[next];
        if (!target) return;
        args.items = args.items.map(item => ({
          ...item,
          focused: item.value === target.value
        }));
        autocomplete.items = [...args.items];
        focusOption(target.value);
      };
      const focusInput = () => {
        autocomplete.querySelector('input')?.focus();
      };
      switch (e.key) {
        case 'Escape':
          args.items = args.items.map(item => ({
            ...item,
            focused: false
          }));
          autocomplete.items = [...args.items];
          focusInput();
          requestMenu(autocomplete, false);
          // Custom: Show escape animation
          autocomplete.style.transform = 'scale(0.98)';
          setTimeout(() => {
            autocomplete.style.transform = '';
          }, 200);
          break;
        case 'ArrowDown':
          {
            // Open menu if not already open
            requestMenu(autocomplete, true);
            highlightSkip(1);
            return;
          }
        case 'ArrowUp':
          {
            highlightSkip(-1);
            return;
          }
        case 'Enter':
          {
            // A row already selects through customItemSelect, which honors
            // leave-menu-open. Handling it again would close that menu.
            if (indexFromKeyTarget() >= 0) return;
            const focusedItem = visibleItems.find(item => item.focused);
            if (focusedItem) {
              // For single select, clear previous selection
              args.items = args.items.map(item => ({
                ...item,
                selected: item.value === focusedItem.value,
                focused: false
              }));
              autocomplete.value = focusedItem.label;
              focusInput();
              requestMenu(autocomplete, false);
            }
            break;
          }
        case 'Tab':
          {
            // Shift+Tab from the input leaves the field. From a row, Tab and
            // Shift+Tab use the same skip as the arrow keys. At either end,
            // let the browser move focus out.
            const onRow = indexFromKeyTarget() >= 0;
            if (!onRow && e.shiftKey) return;
            if (!visibleItems.length) return;
            if (!onRow) {
              const flagged = visibleItems.find(item => item.focused);
              if (!flagged) return;
              e.preventDefault();
              focusOption(flagged.value);
              return;
            }
            const currentIndex = indexFromKeyTarget();
            const next = skipIndex(e.shiftKey ? -1 : 1, currentIndex);
            if (next === currentIndex) {
              args.items = args.items.map(item => ({
                ...item,
                focused: false
              }));
              autocomplete.items = [...args.items];
              return;
            }
            e.preventDefault();
            highlightSkip(e.shiftKey ? -1 : 1);
            return;
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
        //   const menuItemFor = (value) =>
        //     Array.from(autocomplete.querySelectorAll('modus-wc-menu-item')).find(
        //       (el) => el.value === value
        //     );
        //   // The menu moves DOM focus one step before this handler runs, so read
        //   // the row that received the key instead of document.activeElement.
        //   const indexFromKeyTarget = () => {
        //     const host = e.target?.closest?.('modus-wc-menu-item');
        //     if (!host) return -1;
        //     return visibleItems.findIndex((item) => item.value === host.value);
        //   };
        //   const focusOption = (value) => {
        //     menuItemFor(value)?.querySelector('li')?.focus();
        //   };
        //   const skipFrom = (direction, currentIndex) => {
        //     if (direction > 0) {
        //       const nextIndex =
        //         currentIndex < 0
        //           ? 0
        //           : Math.min(currentIndex + 1, visibleItems.length - 1);
        //       return nextIndex + 1 < visibleItems.length ? nextIndex + 1 : nextIndex;
        //     }
        //     const prevIndex =
        //       currentIndex < 0
        //         ? visibleItems.length - 1
        //         : Math.max(currentIndex - 1, 0);
        //     return prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex;
        //   };
        //   const highlightSkip = (direction) => {
        //     if (!visibleItems.length) return;
        //     const fromRow = indexFromKeyTarget();
        //     const fromFlag = visibleItems.findIndex((item) => item.focused);
        //     const currentIndex = fromRow >= 0 ? fromRow : fromFlag;
        //     const next = skipFrom(direction, currentIndex);
        //     if (next === currentIndex && fromRow >= 0) {
        //       const stay = visibleItems[currentIndex];
        //       if (stay) focusOption(stay.value);
        //       return;
        //     }
        //     const target = visibleItems[next];
        //     if (!target) return;
        //     autocomplete.items = autocomplete.items.map((item) => ({
        //       ...item,
        //       focused: item.value === target.value,
        //     }));
        //     focusOption(target.value);
        //   };
        //   const focusInput = () => {
        //     autocomplete.querySelector('input')?.focus();
        //   };
        //   switch (e.key) {
        //     case 'Escape':
        //       autocomplete.items = autocomplete.items.map((item) => ({
        //         ...item,
        //         focused: false,
        //       }));
        //       focusInput();
        //       requestMenu(false);
        //       autocomplete.style.transform = 'scale(0.98)';
        //       setTimeout(() => {
        //         autocomplete.style.transform = '';
        //       }, 200);
        //       break;
        //     case 'ArrowDown':
        //       requestMenu(true);
        //       highlightSkip(1);
        //       return;
        //     case 'ArrowUp':
        //       highlightSkip(-1);
        //       return;
        //     case 'Enter': {
        //       if (indexFromKeyTarget() >= 0) return;
        //       const focusedItem = visibleItems.find((item) => item.focused);
        //       if (focusedItem) {
        //         autocomplete.items = autocomplete.items.map((item) => ({
        //           ...item,
        //           selected: item.value === focusedItem.value,
        //           focused: false,
        //         }));
        //         autocomplete.value = focusedItem.label;
        //         focusInput();
        //         requestMenu(false);
        //       }
        //       break;
        //     }
        //     case 'Tab': {
        //       const onRow = indexFromKeyTarget() >= 0;
        //       if (!onRow && e.shiftKey) return;
        //       if (!visibleItems.length) return;
        //       if (!onRow) {
        //         const flagged = visibleItems.find((item) => item.focused);
        //         if (!flagged) return;
        //         e.preventDefault();
        //         focusOption(flagged.value);
        //         return;
        //       }
        //       const currentIndex = indexFromKeyTarget();
        //       const next = skipFrom(e.shiftKey ? -1 : 1, currentIndex);
        //       if (next === currentIndex) {
        //         autocomplete.items = autocomplete.items.map((item) => ({
        //           ...item,
        //           focused: false,
        //         }));
        //         return;
        //       }
        //       e.preventDefault();
        //       highlightSkip(e.shiftKey ? -1 : 1);
        //       return;
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
}`,...(ve=(be=F.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var we,ge,Ie;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ie=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:Ie.source}}};var ye,xe,Me;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Me=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:Me.source}}};var Ce,Se,Ee;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var ke,Ae,$e;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...($e=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:$e.source}}};const We=["Default","WithCustomIconSlot","WithFeedback","WithTooltips","MultiSelect","WithSpinner","CustomMenuItems","CustomEventHandlers","WithProgrammaticControl","DynamicOptions","ShadowDomParent","Migration"];export{F as CustomEventHandlers,L as CustomMenuItems,E as Default,B as DynamicOptions,z as Migration,T as MultiSelect,P as ShadowDomParent,k as WithCustomIconSlot,A as WithFeedback,D as WithProgrammaticControl,q as WithSpinner,$ as WithTooltips,We as __namedExportsOrder,Fe as default};
