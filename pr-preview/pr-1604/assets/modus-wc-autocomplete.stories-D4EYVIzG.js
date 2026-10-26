import{w as qe}from"./decorator-Cv9na35H.js";import{b as g}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";import{c as Fe}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var H=Object.freeze,De=Object.defineProperty,M=(e,d)=>H(De(e,"raw",{value:H(e.slice())})),W,N,K,j,V,J,U,G;const C=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Watermelon",value:"watermelon",visibleInMenu:!0,focused:!1,disabled:!1,checkbox:!1},{label:"Pineapple",value:"pineapple",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Kiwi",value:"kiwi",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Mango",value:"mango",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Papaya",value:"papaya",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Plum",value:"plum",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Raspberry",value:"raspberry",visibleInMenu:!0,focused:!1,checkbox:!1},{label:"Tangerine",value:"tangerine",visibleInMenu:!0,focused:!1,checkbox:!1}],Be={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{"auto-complete":void 0,bordered:!0,"debounce-ms":300,disabled:!1,"include-clear":!1,"include-search":!1,items:C,label:"Label","leave-menu-open":!1,"max-chips":4,"min-chars":0,"min-input-width":15,"multi-select":!1,"show-menu-on-focus":!1,"show-spinner":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{"auto-complete":{control:{type:"text"}},items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},"max-chips":{control:{type:"number",min:1,max:10},description:'Maximum number of chips to display before showing "+N more" button'},"min-input-width":{control:{type:"number",min:10,max:300},description:"Minimum width for the text input in pixels. When chips would make input smaller, container height increases instead. Default: 20px."},size:{control:{type:"select"},options:["sm","md","lg"]},"custom-blur":{description:"Custom blur handler function that overrides default blur behavior",table:{type:{summary:"(event: FocusEvent) => void"},category:"Custom Handlers"}},"custom-input-change":{description:"Custom input change handler function that overrides default input change behavior",table:{type:{summary:"(value: string) => void"},category:"Custom Handlers"}},"custom-item-select":{description:"Custom item select handler function that overrides default item selection behavior",table:{type:{summary:"(item: IAutocompleteItem) => void"},category:"Custom Handlers"}},"custom-key-down":{description:"Custom keydown handler function that overrides default keyboard navigation",table:{type:{summary:"(event: KeyboardEvent) => void"},category:"Custom Handlers"}}},decorators:[qe],parameters:{actions:{handles:["chipRemove","chipsExpansionChange","clearClick","inputBlur","inputChange","inputFocus","itemSelect"]}}},S=g`
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
`,Oe={render:e=>g(W||(W=M([`
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
    `])),t(e["auto-complete"]),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e.feedback),e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["min-chars"],t(e["min-input-width"]),!1,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,S)},k={...Oe},A={render:e=>g(N||(N=M([`
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
  `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e.feedback),e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["min-chars"],t(e["min-input-width"]),!1,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,S),args:{label:"Autocomplete with custom icon",placeholder:"Search fruits..."}},T={render:e=>g`
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
    `},L={render:e=>(e.items||(e.items=[...C]),e.items=e.items.map(d=>d.value==="apple"||d.value==="banana"?{...d,selected:!0}:d),g(K||(K=M([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["max-chips"]??4,e["min-chars"],t(e["min-input-width"]),!0,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],t(e.size),e.value,S))},q={render:e=>{let d;const a=w=>{var b;if(!((b=w.detail)!=null&&b.target))return;const u=w.target.closest("modus-wc-autocomplete");if(u){const n=w.detail.target.value.toLowerCase();d&&window.clearTimeout(d),u.showSpinner=!0,d=window.setTimeout(()=>{const r=C.filter(l=>l.label.toLowerCase().includes(n));u.items=r,u.showSpinner=!1},2e3)}};return g(j||(j=M([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["min-chars"],!1,t(e.name),t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,a,S)}},F={render:e=>{const d=e["no-results"];e["leave-menu-open"]==!0&&(e["no-results"]={ariaLabel:"",label:"",subLabel:""});const a=o=>{const n=o.querySelectorAll("modus-wc-menu-item:not([disabled])");return Array.from(n).filter(r=>window.getComputedStyle(r).display!=="none"&&!r.classList.contains("hidden"))},w=o=>{var h,f;const n=o.target.closest("modus-wc-autocomplete");if(!n||n.disabled||n.readOnly)return;const l=a(n).map(m=>m.querySelector("button")).filter(Boolean),c=document.activeElement,p=l.indexOf(c);switch(o.key){case"ArrowDown":{o.preventDefault(),n.openMenu();let m=p+1;if(m>=l.length)return;m<0&&(m=0),(h=l[m])==null||h.focus();break}case"ArrowUp":{o.preventDefault(),n.openMenu();let m=p-1;if(m<0)return;(f=l[m])==null||f.focus();break}case"Enter":{o.preventDefault(),l.includes(c)&&c.click();const m=n.querySelector("input");m==null||m.focus();break}case"Escape":{o.preventDefault(),n.closeMenu();const m=n.querySelector("input");m==null||m.focus();break}}},u=o=>{var r;if(!((r=o.detail)!=null&&r.target))return;const n=o.target.closest("modus-wc-autocomplete");if(n){const l=o.detail.target.value.toLowerCase(),c=n==null?void 0:n.querySelectorAll("modus-wc-menu-item");l===""&&(c==null||c.forEach(f=>{f.removeAttribute("selected")}));let p=0;Array.from(c??[]).forEach(f=>{var I;(((I=f.getAttribute("label"))==null?void 0:I.toLowerCase())||"").includes(l)?f.classList.remove("hidden"):(f.classList.add("hidden"),p++)}),n.noResults=p===(c==null?void 0:c.length)?d:{ariaLabel:"",label:"",subLabel:""};const h=n.querySelector(".no-results-item");h&&(p===(c==null?void 0:c.length)?h.classList.add("visible"):h.classList.remove("visible"))}},b=o=>{const n=o.target.closest("modus-wc-autocomplete");if(n){const r=o.detail.value;n.value=r,n.querySelectorAll("modus-wc-menu-item").forEach(c=>{c.getAttribute("value")===r?c.setAttribute("selected","true"):c.removeAttribute("selected")}),e["leave-menu-open"]||n.closeMenu()}};return g(V||(V=M([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),t(e.label),e["leave-menu-open"],e["min-chars"],!1,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],t(e.size),e["show-spinner"],e.value,w,u,!0,b,b,b,b)}},D={render:e=>{let d=!1;const a=(o,n)=>{n!==d&&(d=n,n?o.openMenu():o.closeMenu())},w=o=>{const n=document.getElementById("autocomplete-custom-event-handlers");if(!n)return;const r=o.key==="Tab"?o.shiftKey?"Shift+Tab":"Tab":o.key;["ArrowDown","ArrowUp","Enter","Escape"].includes(r)&&o.preventDefault();const l=e.items.filter(s=>s.visibleInMenu&&!s.disabled),c=()=>{const s=n.querySelector(".modus-wc-clear-icon-visible .modus-wc-text-input-icon-clear");if(s instanceof SVGElement||s instanceof HTMLElement)return s;const i=n.querySelector('modus-wc-button[aria-label="Clear all"] button');return i instanceof HTMLElement?i:null},p=s=>{const i=Array.from(n.querySelectorAll("modus-wc-menu-item")).find(E=>E.value===s),v=i==null?void 0:i.querySelector("li");return v instanceof HTMLElement?v:null},h=s=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{var i;return(i=p(s))==null?void 0:i.focus()})})},f=s=>{var i;(i=o.target)!=null&&i.closest("modus-wc-menu-item")&&h(s)},m=()=>{var i;const s=(i=o.target)==null?void 0:i.closest("modus-wc-menu-item");return s?l.findIndex(v=>v.value===s.value):-1},I=()=>{const s=c(),i=o.target;return!!s&&!!i&&(s===i||s.contains(i))},x=(s,i)=>{if(s>0){const E=i<0?0:Math.min(i+1,l.length-1);return E+1<l.length?E+1:E}const v=i<0?l.length-1:Math.max(i-1,0);return v-1>=0?v-1:v},y=s=>{e.items=e.items.map(i=>({...i,focused:s!=null&&i.value===s})),n.items=[...e.items]},R=()=>{if(!l.length)return;o.preventDefault(),a(n,!0);const s=l[x(1,-1)];s&&(y(s.value),h(s.value))},Le=()=>{var i;o.preventDefault(),y(null);const s=c();if(s){s.focus();return}(i=n.querySelector("input"))==null||i.focus()};switch(r){case"Escape":e.items=e.items.map(s=>({...s,focused:!1})),n.items=[...e.items],a(n,!1),n.style.transform="scale(0.98)",setTimeout(()=>{n.style.transform=""},200);break;case"ArrowDown":{a(n,!0);const s=l[x(1,l.findIndex(i=>i.focused))];s&&(y(s.value),f(s.value));return}case"ArrowUp":{const s=l[x(-1,l.findIndex(i=>i.focused))];s&&(y(s.value),f(s.value));return}case"Tab":{if(o.target instanceof HTMLInputElement){if(c())return;R();return}if(I()){R();return}const s=m();if(s<0||!l.length)return;const i=x(1,s);if(i===s)return;o.preventDefault();const v=l[i];if(!v)return;y(v.value),h(v.value);return}case"Shift+Tab":{const s=m();if(s<0)return;const i=x(-1,s);if(i===s){Le();return}o.preventDefault();const v=l[i];if(!v)return;y(v.value),h(v.value);return}case"Enter":{const s=l.find(i=>i.focused);s&&(e.items=e.items.map(i=>({...i,selected:i.value===s.value,focused:!1})),n.value=s.label,a(n,!1));break}default:return}n.items=[...e.items]},u=o=>{const n=document.getElementById("autocomplete-custom-event-handlers");if(!n)return;const r=o.toLowerCase().split("");if(o.length>0){const p=e.items.map(h=>{const f=h.label.toLowerCase();let m=0,I=!0;for(const x of r)if(f.includes(x)){const y=f.indexOf(x);y===0?m+=3:f[y-1]===" "?m+=2:m+=1}else{I=!1;break}return I&&f.includes(o.toLowerCase())&&(m+=10),{item:h,score:I?m:-1,visible:I}});p.sort((h,f)=>f.score-h.score),e.items=p.map(({item:h,visible:f})=>({...h,visibleInMenu:f,focused:!1,selected:h.selected&&f&&h.label.toLowerCase()===o.toLowerCase(),label:h.label}))}else e.items=e.items.map(p=>({...p,visibleInMenu:!0,focused:!1,selected:!1}));n.items=[...e.items],n.value=o;const l=e.items.filter(p=>p.visibleInMenu).length;console.log(`Fuzzy search for "${o}": ${l} matches found`);const c=e.items.some(p=>p.visibleInMenu);a(n,c&&o.length>=e["min-chars"])},b=o=>{const n=document.getElementById("autocomplete-custom-event-handlers");n&&(e.items=e.items.map(r=>({...r,selected:r.value===o.value,focused:!1})),n.items=[...e.items],n.value=o.label,e["leave-menu-open"]?(e.items=e.items.map(r=>({...r,visibleInMenu:!0,focused:!1})),n.items=[...e.items],a(n,!0)):a(n,!1))};return g(J||(J=M([`
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
        //   const key = e.key === 'Tab' ? (e.shiftKey ? 'Shift+Tab' : 'Tab') : e.key;
        //   if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(key)) {
        //     e.preventDefault();
        //   }
        //   const visibleItems = autocomplete.items.filter(
        //     (item) => item.visibleInMenu && !item.disabled
        //   );
        //   const clearControl = () =>
        //     autocomplete.querySelector(
        //       '.modus-wc-clear-icon-visible .modus-wc-text-input-icon-clear'
        //     );
        //   const focusOption = (value) => {
        //     const host = [...autocomplete.querySelectorAll('modus-wc-menu-item')].find(
        //       (el) => el.value === value
        //     );
        //     requestAnimationFrame(() => host?.querySelector('li')?.focus());
        //   };
        //   // Keep DOM focus with the flag once Tabbed into the list so the
        //   // :focus-visible ring and the flag outline stay on the same row.
        //   const syncListFocus = (value) => {
        //     if (e.target?.closest?.('modus-wc-menu-item')) focusOption(value);
        //   };
        //   const optionIndex = () => {
        //     const host = e.target?.closest?.('modus-wc-menu-item');
        //     if (!host) return -1;
        //     return visibleItems.findIndex((item) => item.value === host.value);
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
        //   const setFocused = (value) => {
        //     autocomplete.items = autocomplete.items.map((item) => ({
        //       ...item,
        //       focused: value != null && item.value === value,
        //     }));
        //   };
        //   switch (key) {
        //     case 'Escape':
        //       setFocused(null);
        //       requestMenu(false);
        //       autocomplete.style.transform = 'scale(0.98)';
        //       setTimeout(() => {
        //         autocomplete.style.transform = '';
        //       }, 200);
        //       break;
        //     case 'ArrowDown': {
        //       requestMenu(true);
        //       const target =
        //         visibleItems[skipFrom(1, visibleItems.findIndex((item) => item.focused))];
        //       if (target) {
        //         setFocused(target.value);
        //         syncListFocus(target.value);
        //       }
        //       return;
        //     }
        //     case 'ArrowUp': {
        //       const target =
        //         visibleItems[skipFrom(-1, visibleItems.findIndex((item) => item.focused))];
        //       if (target) {
        //         setFocused(target.value);
        //         syncListFocus(target.value);
        //       }
        //       return;
        //     }
        //     case 'Tab': {
        //       const clear = clearControl();
        //       const fromInput = e.target instanceof HTMLInputElement;
        //       // Input → Clear (when shown) stays native; let the browser move.
        //       if (fromInput && clear) return;
        //       if (fromInput || (clear && (e.target === clear || clear.contains(e.target)))) {
        //         e.preventDefault();
        //         requestMenu(true);
        //         const target = visibleItems[skipFrom(1, -1)];
        //         if (target) {
        //           setFocused(target.value);
        //           focusOption(target.value);
        //         }
        //         return;
        //       }
        //       const currentIndex = optionIndex();
        //       if (currentIndex < 0) return;
        //       const next = skipFrom(1, currentIndex);
        //       if (next === currentIndex) return;
        //       e.preventDefault();
        //       setFocused(visibleItems[next].value);
        //       focusOption(visibleItems[next].value);
        //       return;
        //     }
        //     case 'Shift+Tab': {
        //       const currentIndex = optionIndex();
        //       if (currentIndex < 0) return;
        //       const next = skipFrom(-1, currentIndex);
        //       if (next === currentIndex) {
        //         e.preventDefault();
        //         setFocused(null);
        //         (clearControl() || autocomplete.querySelector('input'))?.focus();
        //         return;
        //       }
        //       e.preventDefault();
        //       setFocused(visibleItems[next].value);
        //       focusOption(visibleItems[next].value);
        //       return;
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
    `])),e.bordered,t(e["custom-class"]),0,e.disabled,e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,e["leave-menu-open"],e["min-chars"],!1,t(e.name),e["no-results"],e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,w,u,b,()=>{d=!1},S)},args:{bordered:!0,"debounce-ms":0,disabled:!1,"include-clear":!0,"include-search":!0,items:C,"leave-menu-open":!1,"min-chars":0,"no-results":{label:"No fruits found",subLabel:"Try different characters"},placeholder:"Search fruits...","input-id":"custom-handlers-input","read-only":!1,required:!1,"show-menu-on-focus":!0,"show-spinner":!1,size:"md",value:""},parameters:{docs:{description:{story:`This example demonstrates custom event handlers with three specific behaviors:

1. **Skip Navigation**: Arrow keys skip every other item for 2x faster navigation
2. **Escape Animation**: Pressing Escape triggers a subtle scale animation
3. **Fuzzy Character Search**: Instead of normal substring matching, this searches for items containing ALL typed characters in any order

The fuzzy search allows finding items with scattered characters:
- Type "pae" to find Pine**a**ppl**e**
- Type "bry" to find Blue**b**er**ry**, Straw**b**er**ry**, Rasp**b**er**ry**

Items are automatically sorted by relevance with exact substring matches appearing first.`}}}},B={args:{...Be.args,items:C},render:e=>{const d=async()=>{const l=document.getElementById("programmatic-autocomplete");if(l){const c=C.find(p=>p.value==="apple")||null;await l.selectItem(c)}},a=async()=>{const l=document.getElementById("programmatic-autocomplete");l&&await l.selectItem(null)},w=async()=>{const l=document.getElementById("programmatic-autocomplete");l&&await l.openMenu()},u=async()=>{const l=document.getElementById("programmatic-autocomplete");l&&await l.closeMenu()},b=async()=>{const l=document.getElementById("programmatic-autocomplete");l&&await l.toggleMenu()},o=async()=>{const l=document.getElementById("programmatic-autocomplete");l&&await l.focusInput()},n=async()=>{const l=document.getElementById("programmatic-autocomplete");l&&await l.clearInput()},r=window;return r.handleSelectApple=d,r.handleSelectNull=a,r.handleOpenMenu=w,r.handleCloseMenu=u,r.handleToggleMenu=b,r.handleFocusInput=o,r.handleClearInput=n,g(U||(U=M([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,e["leave-menu-open"],e["max-chips"]??4,e["min-chars"],t(e["min-input-width"]),e["multi-select"],t(e.name),e["no-results"],e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,S)},parameters:{docs:{description:{story:`
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

        `}}}},O={render:e=>{const d=[{label:"Apple",value:"apple",visibleInMenu:!0},{label:"Banana",value:"banana",visibleInMenu:!0},{label:"Orange",value:"orange",visibleInMenu:!0},{label:"Strawberry",value:"strawberry",visibleInMenu:!0}],a=[...d,{label:"Blackberry",value:"blackberry",visibleInMenu:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0},{label:"Cherry",value:"cherry",visibleInMenu:!0},{label:"Cranberry",value:"cranberry",visibleInMenu:!0},{label:"Fig",value:"fig",visibleInMenu:!0},{label:"Grape",value:"grape",visibleInMenu:!0},{label:"Kiwi",value:"kiwi",visibleInMenu:!0},{label:"Lemon",value:"lemon",visibleInMenu:!0},{label:"Lime",value:"lime",visibleInMenu:!0},{label:"Mango",value:"mango",visibleInMenu:!0},{label:"Melon",value:"melon",visibleInMenu:!0},{label:"Peach",value:"peach",visibleInMenu:!0},{label:"Pineapple",value:"pineapple",visibleInMenu:!0},{label:"Raspberry",value:"raspberry",visibleInMenu:!0},{label:"Watermelon",value:"watermelon",visibleInMenu:!0}],w=b=>{var n;if(!((n=b.detail)!=null&&n.target))return;const o=b.target.closest("modus-wc-autocomplete");if(o){const r=b.detail.target,l=r.value.toLowerCase();if(l===""){o.items=[...d],o.value=r.value;return}o.showSpinner=!0,setTimeout(()=>{const c=a.filter(p=>p.label.toLowerCase().includes(l));o.items=c,o.showSpinner=!1},1e3),o.value=r.value}},u=b=>{const o=b.target.closest("modus-wc-autocomplete");if(o){const n=b.detail.label;n&&(o.value=n)}};return g(G||(G=M([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),d,t(e.label),e["leave-menu-open"],0,!1,t(e.name),e["no-results"],e["read-only"],e.required,!0,t(e.size),e.value,w,u)}},P={render:e=>{if(!customElements.get("autocomplete-shadow-host")){const d=Fe({componentTag:"modus-wc-autocomplete",propsMapper:(a,w)=>{const u=w;u.bordered=!!a.bordered,u.customClass=a["custom-class"]||"",typeof a["debounce-ms"]=="number"&&(u.debounceMs=a["debounce-ms"]),u.disabled=!!a.disabled,u.includeClear=!!a["include-clear"],u.includeSearch=!!a["include-search"],typeof a["input-id"]=="string"&&(u.inputId=a["input-id"]),typeof a["input-tab-index"]=="number"&&(u.inputTabIndex=a["input-tab-index"]),u.items=a.items,typeof a.label=="string"&&(u.label=a.label),typeof a["leave-menu-open"]=="boolean"&&(u.leaveMenuOpen=a["leave-menu-open"]),typeof a["max-chips"]=="number"&&(u.maxChips=a["max-chips"]),typeof a["min-chars"]=="number"&&(u.minChars=a["min-chars"]),typeof a["min-input-width"]=="number"&&(u.minInputWidth=a["min-input-width"]),u.multiSelect=!!a["multi-select"],typeof a.name=="string"&&(u.name=a.name),u.noResults=a["no-results"],typeof a.placeholder=="string"&&(u.placeholder=a.placeholder),u.readOnly=!!a["read-only"],u.required=!!a.required,typeof a["show-menu-on-focus"]=="boolean"&&(u.showMenuOnFocus=a["show-menu-on-focus"]),u.showSpinner=!!a["show-spinner"],typeof a.size=="string"&&(u.size=a.size),u.value=a.value}});customElements.define("autocomplete-shadow-host",d)}return g`<autocomplete-shadow-host
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>g`<div></div>`};var _,Q,X;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,oe;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,se,ae;$.parameters={...$.parameters,docs:{...(le=$.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ae=(se=$.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,ue,re;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:re.source}}};var ce,me,de;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(me=q.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,he,fe;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(he=F.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var be,ve,we;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
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

      // Tab stays with the browser unless this handler moves between options.
      if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(key)) {
        e.preventDefault();
      }
      const visibleItems = args.items.filter(item => item.visibleInMenu && !item.disabled);

      // NOTE: these selectors reach into the internal DOM/class names of the
      // text-input (single select) and the "Clear all" button (multi select).
      // They are demo-only hooks and may break if those components change.
      const clearControl = (): HTMLElement | SVGElement | null => {
        const clear = autocomplete.querySelector('.modus-wc-clear-icon-visible .modus-wc-text-input-icon-clear');
        if (clear instanceof SVGElement || clear instanceof HTMLElement) {
          return clear;
        }
        const button = autocomplete.querySelector('modus-wc-button[aria-label="Clear all"] button');
        return button instanceof HTMLElement ? button : null;
      };
      const optionRow = (value: string) => {
        const host = Array.from(autocomplete.querySelectorAll('modus-wc-menu-item')).find(el => (el as HTMLElement & {
          value?: string;
        }).value === value);
        const row = host?.querySelector('li');
        return row instanceof HTMLElement ? row : null;
      };

      // Double rAF: wait for the menu to re-render after setFocused() before
      // moving DOM focus, otherwise the target <li> may not exist yet.
      const focusOption = (value: string) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => optionRow(value)?.focus());
        });
      };

      // Arrow keys normally only move the programmatic "focused" flag. Once the
      // user has Tabbed into the list, DOM focus sits on an <li>, so we must
      // move real focus with the flag; otherwise the :focus-visible ring and
      // the flag outline land on different rows (two highlights at once).
      const syncListFocus = (value: string) => {
        if ((e.target as HTMLElement | null)?.closest('modus-wc-menu-item')) {
          focusOption(value);
        }
      };
      const optionIndexFromKey = () => {
        const host = (e.target as HTMLElement | null)?.closest('modus-wc-menu-item') as (HTMLElement & {
          value?: string;
        }) | null;
        if (!host) return -1;
        return visibleItems.findIndex(item => item.value === host.value);
      };
      const onClear = () => {
        const clear = clearControl();
        const target = e.target as Node | null;
        return !!clear && !!target && (clear === target || clear.contains(target));
      };

      // Step one, then jump one more when another option remains.
      const skipIndex = (direction: 1 | -1, currentIndex: number) => {
        if (direction > 0) {
          const nextIndex = currentIndex < 0 ? 0 : Math.min(currentIndex + 1, visibleItems.length - 1);
          return nextIndex + 1 < visibleItems.length ? nextIndex + 1 : nextIndex;
        }
        const prevIndex = currentIndex < 0 ? visibleItems.length - 1 : Math.max(currentIndex - 1, 0);
        return prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex;
      };
      const setFocused = (value: string | null) => {
        args.items = args.items.map(item => ({
          ...item,
          focused: value != null && item.value === value
        }));
        autocomplete.items = [...args.items];
      };
      const enterList = () => {
        if (!visibleItems.length) return;
        e.preventDefault();
        requestMenu(autocomplete, true);
        const target = visibleItems[skipIndex(1, -1)];
        if (!target) return;
        setFocused(target.value);
        focusOption(target.value);
      };
      const leaveList = () => {
        e.preventDefault();
        setFocused(null);
        const clear = clearControl();
        if (clear) {
          clear.focus();
          return;
        }
        autocomplete.querySelector('input')?.focus();
      };
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
          {
            // Open menu if not already open
            requestMenu(autocomplete, true);
            const target = visibleItems[skipIndex(1, visibleItems.findIndex(item => item.focused))];
            if (target) {
              setFocused(target.value);
              syncListFocus(target.value);
            }
            return;
          }
        case 'ArrowUp':
          {
            const target = visibleItems[skipIndex(-1, visibleItems.findIndex(item => item.focused))];
            if (target) {
              setFocused(target.value);
              syncListFocus(target.value);
            }
            return;
          }
        case 'Tab':
          {
            // Input → Clear (when shown) stays native: the clear control is a
            // focusable element right after the input, so let the browser move
            // to it. Only the next Tab (Clear → list) and Tab between options
            // need the custom skip. With no clear control, jump straight in.
            if (e.target instanceof HTMLInputElement) {
              if (clearControl()) return;
              enterList();
              return;
            }
            if (onClear()) {
              enterList();
              return;
            }
            const currentIndex = optionIndexFromKey();
            if (currentIndex < 0 || !visibleItems.length) return;
            const next = skipIndex(1, currentIndex);
            if (next === currentIndex) return;
            e.preventDefault();
            const target = visibleItems[next];
            if (!target) return;
            setFocused(target.value);
            focusOption(target.value);
            return;
          }
        case 'Shift+Tab':
          {
            // Clear and the input keep the browser's reverse order. From an
            // option, skip backward, then return to Clear or the input.
            const currentIndex = optionIndexFromKey();
            if (currentIndex < 0) return;
            const next = skipIndex(-1, currentIndex);
            if (next === currentIndex) {
              leaveList();
              return;
            }
            e.preventDefault();
            const target = visibleItems[next];
            if (!target) return;
            setFocused(target.value);
            focusOption(target.value);
            return;
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
        //   const key = e.key === 'Tab' ? (e.shiftKey ? 'Shift+Tab' : 'Tab') : e.key;
        //   if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(key)) {
        //     e.preventDefault();
        //   }
        //   const visibleItems = autocomplete.items.filter(
        //     (item) => item.visibleInMenu && !item.disabled
        //   );
        //   const clearControl = () =>
        //     autocomplete.querySelector(
        //       '.modus-wc-clear-icon-visible .modus-wc-text-input-icon-clear'
        //     );
        //   const focusOption = (value) => {
        //     const host = [...autocomplete.querySelectorAll('modus-wc-menu-item')].find(
        //       (el) => el.value === value
        //     );
        //     requestAnimationFrame(() => host?.querySelector('li')?.focus());
        //   };
        //   // Keep DOM focus with the flag once Tabbed into the list so the
        //   // :focus-visible ring and the flag outline stay on the same row.
        //   const syncListFocus = (value) => {
        //     if (e.target?.closest?.('modus-wc-menu-item')) focusOption(value);
        //   };
        //   const optionIndex = () => {
        //     const host = e.target?.closest?.('modus-wc-menu-item');
        //     if (!host) return -1;
        //     return visibleItems.findIndex((item) => item.value === host.value);
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
        //   const setFocused = (value) => {
        //     autocomplete.items = autocomplete.items.map((item) => ({
        //       ...item,
        //       focused: value != null && item.value === value,
        //     }));
        //   };
        //   switch (key) {
        //     case 'Escape':
        //       setFocused(null);
        //       requestMenu(false);
        //       autocomplete.style.transform = 'scale(0.98)';
        //       setTimeout(() => {
        //         autocomplete.style.transform = '';
        //       }, 200);
        //       break;
        //     case 'ArrowDown': {
        //       requestMenu(true);
        //       const target =
        //         visibleItems[skipFrom(1, visibleItems.findIndex((item) => item.focused))];
        //       if (target) {
        //         setFocused(target.value);
        //         syncListFocus(target.value);
        //       }
        //       return;
        //     }
        //     case 'ArrowUp': {
        //       const target =
        //         visibleItems[skipFrom(-1, visibleItems.findIndex((item) => item.focused))];
        //       if (target) {
        //         setFocused(target.value);
        //         syncListFocus(target.value);
        //       }
        //       return;
        //     }
        //     case 'Tab': {
        //       const clear = clearControl();
        //       const fromInput = e.target instanceof HTMLInputElement;
        //       // Input → Clear (when shown) stays native; let the browser move.
        //       if (fromInput && clear) return;
        //       if (fromInput || (clear && (e.target === clear || clear.contains(e.target)))) {
        //         e.preventDefault();
        //         requestMenu(true);
        //         const target = visibleItems[skipFrom(1, -1)];
        //         if (target) {
        //           setFocused(target.value);
        //           focusOption(target.value);
        //         }
        //         return;
        //       }
        //       const currentIndex = optionIndex();
        //       if (currentIndex < 0) return;
        //       const next = skipFrom(1, currentIndex);
        //       if (next === currentIndex) return;
        //       e.preventDefault();
        //       setFocused(visibleItems[next].value);
        //       focusOption(visibleItems[next].value);
        //       return;
        //     }
        //     case 'Shift+Tab': {
        //       const currentIndex = optionIndex();
        //       if (currentIndex < 0) return;
        //       const next = skipFrom(-1, currentIndex);
        //       if (next === currentIndex) {
        //         e.preventDefault();
        //         setFocused(null);
        //         (clearControl() || autocomplete.querySelector('input'))?.focus();
        //         return;
        //       }
        //       e.preventDefault();
        //       setFocused(visibleItems[next].value);
        //       focusOption(visibleItems[next].value);
        //       return;
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
}`,...(we=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var ge,Ie,ye;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var xe,Me,Ce;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ce=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};var Se,Ee,ke;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ke=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Ae,Te,$e;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...($e=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};const Ke=["Default","WithCustomIconSlot","WithFeedback","WithTooltips","MultiSelect","WithSpinner","CustomMenuItems","CustomEventHandlers","WithProgrammaticControl","DynamicOptions","ShadowDomParent","Migration"];export{D as CustomEventHandlers,F as CustomMenuItems,k as Default,O as DynamicOptions,z as Migration,L as MultiSelect,P as ShadowDomParent,A as WithCustomIconSlot,T as WithFeedback,B as WithProgrammaticControl,q as WithSpinner,$ as WithTooltips,Ke as __namedExportsOrder,Be as default};
