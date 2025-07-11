import{w as Q}from"./decorator-D4YmxizW.js";import{x as d}from"./lit-element-C8zulti1.js";import{o as n}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var C=Object.freeze,X=Object.defineProperty,y=(e,u)=>C(X(e,"raw",{value:C(e.slice())})),S,T,L;const p=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Watermelon",value:"watermelon",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Pineapple",value:"pineapple",visibleInMenu:!0,focused:!1},{label:"Kiwi",value:"kiwi",visibleInMenu:!0,focused:!1},{label:"Mango",value:"mango",visibleInMenu:!0,focused:!1},{label:"Papaya",value:"papaya",visibleInMenu:!0,focused:!1},{label:"Plum",value:"plum",visibleInMenu:!0,focused:!1},{label:"Raspberry",value:"raspberry",visibleInMenu:!0,focused:!1},{label:"Tangerine",value:"tangerine",visibleInMenu:!0,focused:!1}],Y={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,"include-clear":!1,"include-search":!1,items:p,label:"Label","leave-menu-open":!1,"max-chips":4,"min-chars":0,"min-input-width":20,"multi-select":!1,"show-menu-on-focus":!1,"show-spinner":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},"max-chips":{control:{type:"number",min:1,max:10},description:'Maximum number of chips to display before showing "+N more" button'},"min-input-width":{control:{type:"number",min:12,max:300},description:"Minimum width for the text input in pixels. When chips would make input smaller, container height increases instead. Default: 20px."},size:{control:{type:"select"},options:["sm","md","lg"]},"custom-blur":{description:"Custom blur handler function that overrides default blur behavior",table:{type:{summary:"(event: FocusEvent) => void"},category:"Custom Handlers"}},"custom-input-change":{description:"Custom input change handler function that overrides default input change behavior",table:{type:{summary:"(value: string) => void"},category:"Custom Handlers"}},"custom-item-select":{description:"Custom item select handler function that overrides default item selection behavior",table:{type:{summary:"(item: IAutocompleteItem) => void"},category:"Custom Handlers"}},"custom-key-down":{description:"Custom keydown handler function that overrides default keyboard navigation",table:{type:{summary:"(event: KeyboardEvent) => void"},category:"Custom Handlers"}}},decorators:[Q],parameters:{actions:{handles:["chipRemove","chipsExpansionChange","inputBlur","inputChange","inputFocus","itemSelect"]}}},Z={render:e=>d`
<style>
  div[id^='story--components-forms-autocomplete--default'] {
    height: 400px;
  }
</style>
<modus-wc-autocomplete
  aria-label="Fruit autocomplete"
  ?bordered=${e.bordered}
  custom-class=${n(e["custom-class"])}
  debounce-ms=${n(e["debounce-ms"])}
  ?disabled=${e.disabled}
  ?include-clear=${e["include-clear"]}
  ?include-search=${e["include-search"]}
  input-id=${n(e["input-id"])}
  input-tab-index=${n(e["input-tab-index"])}
  .items=${e.items}
  label=${n(e.label)}
  ?leave-menu-open=${e["leave-menu-open"]}
  min-chars=${e["min-chars"]}
  min-input-width=${n(e["min-input-width"])}
  ?multi-select=${!1}
  name=${n(e.name)}
  .noResults=${e["no-results"]}
  placeholder=${n(e.placeholder)}
  ?read-only=${e["read-only"]}
  ?required=${e.required}
  ?show-menu-on-focus=${e["show-menu-on-focus"]}
  ?show-spinner=${e["show-spinner"]}
  size=${n(e.size)}
  value=${e.value}
></modus-wc-autocomplete>
    `},h={...Z},f={render:e=>((!e.items||e.items.length===0)&&(e.items=[...p]),d(S||(S=y([`
<script>
  // Initialize args.items if empty
  if (!args.items || args.items.length === 0) {
    args.items = [...items];
  }
<\/script>
<style>
  .modus-wc-autocomplete-multi-select {
    width: 480px !important;
  }
</style>
<modus-wc-autocomplete
  aria-label="Fruit autocomplete"
  ?bordered=`,`
  custom-class=`,`
  debounce-ms=`,`
  ?disabled=`,`
  ?include-clear=`,`
  ?include-search=`,`
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
    `])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,e["include-clear"],e["include-search"],n(e["input-id"]),n(e["input-tab-index"]),e.items,n(e.label),e["leave-menu-open"],e["max-chips"]??4,e["min-chars"],n(e["min-input-width"]),!0,n(e.name),e["no-results"],n(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],n(e.size),e.value))},b={render:e=>{let u;const m=r=>{var s;if(!((s=r.detail)!=null&&s.target))return;const l=r.target.closest("modus-wc-autocomplete");if(l){const i=r.detail.target.value.toLowerCase();u&&window.clearTimeout(u),l.showSpinner=!0,u=window.setTimeout(()=>{const t=p.filter(o=>o.label.toLowerCase().includes(i));l.items=t,l.showSpinner=!1},2e3)}};return d(T||(T=y([`
<script>
        let debounceTimer: number;

  const handleInputChange = (e: CustomEvent<Event>) => {
    if (!e.detail?.target) return;

    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    ) as Element & {
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
        const filteredItems = items.filter((item) =>
          item.label.toLowerCase().includes(searchText)
        );

        // Update the component with the new filtered list and hide the spinner
        autocomplete.items = filteredItems;
        autocomplete.showSpinner = false;
      }, 2000);
    }
  };
<\/script>
<style>
  div[id^='story--components-forms-autocomplete--with-spinner'] {
    height: 400px;
  }
</style>
<modus-wc-autocomplete
  aria-label="Fruit autocomplete with spinner"
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
    `])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),e.items,n(e.label),e["leave-menu-open"],e["min-chars"],!1,n(e.name),n(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],n(e.size),e.value,m)}},v={render:e=>{const u=e["no-results"];e["leave-menu-open"]==!0&&(e["no-results"]={ariaLabel:"",label:"",subLabel:""});const m=l=>{var a;if(!((a=l.detail)!=null&&a.target))return;const s=l.target.closest("modus-wc-autocomplete");if(s){const i=l.detail.target.value.toLowerCase(),t=s==null?void 0:s.querySelectorAll("li");i===""&&(t==null||t.forEach(c=>c.classList.remove("selected")));let o=0;Array.from(t??[]).forEach(c=>{var M,x;(((x=(M=c.querySelector(".title"))==null?void 0:M.textContent)==null?void 0:x.toLowerCase())||"").includes(i)?c.classList.remove("hidden"):(c.classList.add("hidden"),o++)}),s.noResults=o===(t==null?void 0:t.length)?u:{ariaLabel:"",label:"",subLabel:""}}},r=l=>{var a;const s=l.target.closest("modus-wc-autocomplete");if(s){const i=s==null?void 0:s.querySelectorAll("li");i==null||i.forEach(o=>o.classList.remove("selected"));const t=l.target.closest("li");t&&(t.classList.add("selected"),s.value=(a=t.querySelector(".title"))==null?void 0:a.textContent)}};return d(L||(L=y([`
<script>
      const originalNoResults = args['no-results'];
if (args['leave-menu-open'] == true) {
  args['no-results'] = {
    ariaLabel: '',
    label: '',
    subLabel: '',
  };
}

const handleInputChange = (e) => {
  if (!e.detail?.target) return;

  const autocomplete = (e.target as HTMLInputElement).closest(
    'modus-wc-autocomplete'
  ) as Element & { noResults: IAutocompleteNoResults };

  if (autocomplete) {
    const searchText = (
      e.detail.target as HTMLInputElement
    ).value.toLowerCase();
    const allLiItems = autocomplete?.querySelectorAll('li');

    if (searchText === '') {
      allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
    }

    let hiddenCount = 0;
    Array.from(allLiItems ?? []).forEach((menuItem) => {
      const label =
        menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
      if (!label.includes(searchText)) {
        menuItem.classList.add('hidden');
        hiddenCount++;
      } else {
        menuItem.classList.remove('hidden');
      }
    });

    // Show no results if all items are hidden
    autocomplete.noResults =
      hiddenCount === allLiItems?.length
        ? originalNoResults
        : { ariaLabel: '', label: '', subLabel: '' };
  }
};

const handleItemSelect = (e) => {
  const autocomplete = (e.target as HTMLInputElement).closest(
    'modus-wc-autocomplete'
  );

  if (autocomplete) {
    const allLiItems = autocomplete?.querySelectorAll('li');
    allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));

    const clickedItem = (e.target as HTMLElement).closest('li');
    if (clickedItem) {
      clickedItem.classList.add('selected');
      autocomplete.value = clickedItem.querySelector('.title')
        ?.textContent as string;
    }
  }
};
<\/script>
<style>
div[id^='story--components-forms-autocomplete--custom-menu-items'] {
  height: 400px;
}
.list-item {
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
li.list-item.hidden {
  display: none;
}
li.list-item img {
  height: 28px;
  width: 28px;
}
.item-info .title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.item-info .description {
  color: #666;
  font-size: 0.875rem;
}
li.list-item.selected {
  background-color: #dcedf9;
}
li.list-item .modus-wc-menu-item-selected-icon {
  display: none;
}
li.list-item.selected .modus-wc-menu-item-selected-icon {
  display: block;
}
</style>
<modus-wc-autocomplete
aria-label="Custom items autocomplete"
?bordered=`,`
custom-class=`,`
debounce-ms=`,`
?disabled=`,`
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
size=`,`
value=`,`
@inputChange=`,`
>
<div slot="menu-items" id="custom-menu-items">
  <li class="list-item" @click=`,`>
    <div class="item-info">
      <img
        src="https://cdn-icons-png.flaticon.com/512/5166/5166970.png"
        alt="Project 1"
      />
      <div>
        <div class="title">Project 1</div>
        <div class="description">Description for Project 1</div>
      </div>
      <div class="modus-wc-menu-item-selected-icon">
        <modus-wc-icon
          decorative=`,`
          name="check"
          size=`,`
        />
      </div>
    </div>
  </li>
  <li class="list-item" @click=`,`>
    <div class="item-info">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png"
        alt="Project 2"
      />
      <div>
        <div class="title">Project 2</div>
        <div class="description">Description for Project 2</div>
      </div>
      <div class="modus-wc-menu-item-selected-icon">
        <modus-wc-icon
          decorative=`,`
          name="check"
          size=`,`
        />
      </div>
    </div>
  </li>
  <li class="list-item" @click=`,`>
    <div class="item-info">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1659/1659067.png"
        alt="Project 3"
      />
      <div>
        <div class="title">Project 3</div>
        <div class="description">Description for Project 3</div>
      </div>
      <div class="modus-wc-menu-item-selected-icon">
        <modus-wc-icon
          decorative=`,`
          name="check"
          size=`,`
        />
      </div>
    </div>
  </li>
</div>
</modus-wc-autocomplete>
    `])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),n(e.label),e["leave-menu-open"],e["min-chars"],!1,n(e.name),e["no-results"],n(e.placeholder),e["read-only"],e.required,n(e.size),e.value,m,r,!0,n(e.size),r,!0,n(e.size),r,!0,n(e.size))}},w={render:e=>{const u=l=>{const s=l.target.closest("modus-wc-autocomplete");if(!s)return;["ArrowDown","ArrowUp","Enter","Escape"].includes(l.key)&&l.preventDefault();const a=e.items.filter(i=>i.visibleInMenu&&!i.disabled);switch(l.key){case"Escape":e.items=e.items.map(i=>({...i,focused:!1})),s.items=[...e.items],s.closeMenu();break;case"ArrowDown":{s.openMenu();const i=a.findIndex(o=>o.focused),t=i<0?0:Math.min(i+1,a.length-1);e.items=e.items.map(o=>{var c;return{...o,focused:((c=a[t])==null?void 0:c.value)===o.value}});break}case"ArrowUp":{const i=a.findIndex(o=>o.focused),t=i<0?a.length-1:Math.max(i-1,0);e.items=e.items.map(o=>{var c;return{...o,focused:((c=a[t])==null?void 0:c.value)===o.value}});break}case"Enter":{const i=a.find(t=>t.focused);i&&(e.items=e.items.map(t=>({...t,selected:t.value===i.value,focused:!1})),s.value=i.label,s.closeMenu());break}default:return}s.items=[...e.items]},m=l=>{const s=document.querySelector("modus-wc-autocomplete");if(!s)return;const a=l.toLowerCase();e.items=e.items.map(t=>({...t,visibleInMenu:t.label.toLowerCase().includes(a),focused:!1,selected:!!(a&&t.selected&&t.label.toLowerCase().includes(a))})),s.items=[...e.items],s.value=l,e.items.some(t=>t.visibleInMenu)&&l.length>=e["min-chars"]?s.openMenu():s.closeMenu()},r=l=>{const s=document.querySelector("modus-wc-autocomplete");s&&(e.items=e.items.map(a=>({...a,selected:a.value===l.value,focused:!1})),s.items=[...e.items],s.value=l.label,s.closeMenu(),console.log("Custom handler: Selected item",l))};return d`
      <style>
        div[id^='story--components-forms-autocomplete--custom-event-handlers'] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Custom handlers autocomplete"
        ?bordered=${e.bordered}
        custom-class=${n(e["custom-class"])}
        debounce-ms=${n(e["debounce-ms"])}
        ?disabled=${e.disabled}
        ?include-clear=${e["include-clear"]}
        ?include-search=${e["include-search"]}
        input-id=${n(e["input-id"])}
        input-tab-index=${n(e["input-tab-index"])}
        .items=${e.items}
        label="Fruit with custom handlers"
        ?leave-menu-open=${e["leave-menu-open"]}
        min-chars=${e["min-chars"]}
        ?multi-select=${!1}
        name=${n(e.name)}
        .noResults=${e["no-results"]}
        placeholder="Type to search fruits..."
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        ?show-menu-on-focus=${e["show-menu-on-focus"]}
        ?show-spinner=${e["show-spinner"]}
        size=${n(e.size)}
        value=${e.value}
        .customKeyDown=${u}
        .customInputChange=${m}
        .customItemSelect=${r}
      ></modus-wc-autocomplete>
    `},args:{bordered:!0,"debounce-ms":300,disabled:!1,"include-clear":!0,"include-search":!0,items:p,"leave-menu-open":!1,"min-chars":0,"no-results":{label:"No results found",subLabel:"Try searching for a different fruit"},placeholder:"Search fruits...","read-only":!1,required:!1,"show-menu-on-focus":!0,"show-spinner":!1,size:"md",value:""},parameters:{docs:{description:{story:`This example demonstrates how to use custom event handlers to completely override the default autocomplete behavior.
        
The \`customKeyDown\`, \`customInputChange\`, and \`customItemSelect\` props allow you to implement your own logic for:
- Keyboard navigation and interaction
- Input filtering and search
- Item selection handling

This is useful when you need specialized behavior that differs from the standard autocomplete functionality.`}}}},g={args:{...Y.args,items:p},render:e=>{const u=async()=>{const o=document.getElementById("programmatic-autocomplete");if(o){const c=p.find($=>$.value==="apple")||null;await o.selectItem(c)}},m=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.selectItem(null)},r=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.openMenu()},l=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.closeMenu()},s=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.toggleMenu()},a=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.focusInput()},i=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.clearInput()},t=window;return t.handleSelectApple=u,t.handleSelectNull=m,t.handleOpenMenu=r,t.handleCloseMenu=l,t.handleToggleMenu=s,t.handleFocusInput=a,t.handleClearInput=i,d`
      <style>
        div[id^='story--components-forms-autocomplete--with-programmatic-control'] {
          height: 500px;
        }
        .controls-section {
          margin-bottom: 2rem;
          padding: 1rem;
          background-color: #f5f5f5;
          border-radius: 8px;
        }
        .controls-section h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.2rem;
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

      <div class="controls-section">
        <h3>Programmatic Control Methods</h3>

        <div class="control-group">
          <label>Selection Methods:</label>
          <div class="button-row">
            <modus-wc-button
              onclick="window.handleSelectApple()"
              variant="primary"
              size="sm"
            >
              Select Apple
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleSelectNull()"
              variant="secondary"
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
              variant="primary"
              size="sm"
            >
              Open Menu
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleCloseMenu()"
              variant="primary"
              size="sm"
            >
              Close Menu
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleToggleMenu()"
              variant="secondary"
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
              variant="primary"
              size="sm"
            >
              Focus Input
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleClearInput()"
              variant="danger"
              size="sm"
            >
              Clear All
            </modus-wc-button>
          </div>
        </div>
      </div>

      <modus-wc-autocomplete
        id="programmatic-autocomplete"
        aria-label="Programmatic control demo"
        ?bordered=${e.bordered}
        custom-class=${n(e["custom-class"])}
        debounce-ms=${n(e["debounce-ms"])}
        ?disabled=${e.disabled}
        ?include-clear=${e["include-clear"]}
        ?include-search=${e["include-search"]}
        input-id=${n(e["input-id"])}
        input-tab-index=${n(e["input-tab-index"])}
        .items=${e.items}
        label="Try the control buttons above"
        ?leave-menu-open=${e["leave-menu-open"]}
        max-chips=${e["max-chips"]??4}
        min-chars=${e["min-chars"]}
        min-input-width=${n(e["min-input-width"])}
        ?multi-select=${e["multi-select"]}
        name=${n(e.name)}
        .noResults=${e["no-results"]}
        placeholder="Use buttons above to control"
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        ?show-menu-on-focus=${e["show-menu-on-focus"]}
        ?show-spinner=${e["show-spinner"]}
        size=${n(e.size)}
        value=${e.value}
      ></modus-wc-autocomplete>
    `},parameters:{docs:{description:{story:`
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

        `}}}},I={parameters:{docs:{description:{story:`
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
| clearable                     |                     | Upcoming feature                                            |
| disabled                      | disabled            |                                                             |
| disable-close-on-select       | leave-menu-open     |                                                             |
| dropdown-max-height           |                     | Not carried over, use CSS instead                           |
| dropdown-z-index              |                     | Not carried over, use CSS instead                           |
| error-text                    | feedback.message    | Use feedback level                                          |
| filter-options                |                     | Rebind options                                              |
| include-search-icon           |                     | Coming soon                                                 |
| label                         | label               |                                                             |
| loading                       |                     | Upcoming feature                                            |
| multiple                      | multi-select        |                                                             |
| no-results-found-text         | no-results.label    |                                                             |
| no-results-found-subtext      | no-results.subLabel |                                                             |
| options                       | items               |                                                             |
| placeholder                   | placeholder         |                                                             |
| read-only                     | read-only           |                                                             |
| required                      | required            |                                                             |
| show-no-results-found-message |                     | Not carried over, use \`no-results\` prop                   |
| show-options-on-focus         |                     | Not carried over                                            |
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>d`<div></div>`};var E,P,A;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template
}`,...(A=(P=h.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var k,z,D;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    // Initialize args.items if empty
    if (!args.items || args.items.length === 0) {
      args.items = [...items];
    }
    // prettier-ignore
    return html\`
<script>
  // Initialize args.items if empty
  if (!args.items || args.items.length === 0) {
    args.items = [...items];
  }
<\/script>
<style>
  .modus-wc-autocomplete-multi-select {
    width: 480px !important;
  }
</style>
<modus-wc-autocomplete
  aria-label="Fruit autocomplete"
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  debounce-ms=\${ifDefined(args['debounce-ms'])}
  ?disabled=\${args.disabled}
  ?include-clear=\${args['include-clear']}
  ?include-search=\${args['include-search']}
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
    \`;
  }
}`,...(D=(z=f.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var q,H,N;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
<script>
        let debounceTimer: number;

  const handleInputChange = (e: CustomEvent<Event>) => {
    if (!e.detail?.target) return;

    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    ) as Element & {
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
        const filteredItems = items.filter((item) =>
          item.label.toLowerCase().includes(searchText)
        );

        // Update the component with the new filtered list and hide the spinner
        autocomplete.items = filteredItems;
        autocomplete.showSpinner = false;
      }, 2000);
    }
  };
<\/script>
<style>
  div[id^='story--components-forms-autocomplete--with-spinner'] {
    height: 400px;
  }
</style>
<modus-wc-autocomplete
  aria-label="Fruit autocomplete with spinner"
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
    \`;
  }
}`,...(N=(H=b.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var j,R,F;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const originalNoResults = args['no-results'];
    if (args['leave-menu-open'] == true) {
      args['no-results'] = {
        ariaLabel: '',
        label: '',
        subLabel: ''
      };
    }
    const handleInputChange = e => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete') as Element & {
        noResults: IAutocompleteNoResults;
      };
      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement).value.toLowerCase();
        const allLiItems = autocomplete?.querySelectorAll('li');
        if (searchText === '') {
          allLiItems?.forEach(liItem => liItem.classList.remove('selected'));
        }
        let hiddenCount = 0;
        Array.from(allLiItems ?? []).forEach(menuItem => {
          const label = menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
          if (!label.includes(searchText)) {
            menuItem.classList.add('hidden');
            hiddenCount++;
          } else {
            menuItem.classList.remove('hidden');
          }
        });

        // Show no results if all items are hidden
        autocomplete.noResults = hiddenCount === allLiItems?.length ? originalNoResults : {
          ariaLabel: '',
          label: '',
          subLabel: ''
        };
      }
    };
    const handleItemSelect = e => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete') as HTMLElement & {
        value: string;
      };
      if (autocomplete) {
        const allLiItems = autocomplete?.querySelectorAll('li');
        allLiItems?.forEach(liItem => liItem.classList.remove('selected'));
        const clickedItem = (e.target as HTMLElement).closest('li');
        if (clickedItem) {
          clickedItem.classList.add('selected');
          autocomplete.value = clickedItem.querySelector('.title')?.textContent as string;
        }
      }
    };
    // prettier-ignore
    return html\`
<script>
      const originalNoResults = args['no-results'];
if (args['leave-menu-open'] == true) {
  args['no-results'] = {
    ariaLabel: '',
    label: '',
    subLabel: '',
  };
}

const handleInputChange = (e) => {
  if (!e.detail?.target) return;

  const autocomplete = (e.target as HTMLInputElement).closest(
    'modus-wc-autocomplete'
  ) as Element & { noResults: IAutocompleteNoResults };

  if (autocomplete) {
    const searchText = (
      e.detail.target as HTMLInputElement
    ).value.toLowerCase();
    const allLiItems = autocomplete?.querySelectorAll('li');

    if (searchText === '') {
      allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
    }

    let hiddenCount = 0;
    Array.from(allLiItems ?? []).forEach((menuItem) => {
      const label =
        menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
      if (!label.includes(searchText)) {
        menuItem.classList.add('hidden');
        hiddenCount++;
      } else {
        menuItem.classList.remove('hidden');
      }
    });

    // Show no results if all items are hidden
    autocomplete.noResults =
      hiddenCount === allLiItems?.length
        ? originalNoResults
        : { ariaLabel: '', label: '', subLabel: '' };
  }
};

const handleItemSelect = (e) => {
  const autocomplete = (e.target as HTMLInputElement).closest(
    'modus-wc-autocomplete'
  );

  if (autocomplete) {
    const allLiItems = autocomplete?.querySelectorAll('li');
    allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));

    const clickedItem = (e.target as HTMLElement).closest('li');
    if (clickedItem) {
      clickedItem.classList.add('selected');
      autocomplete.value = clickedItem.querySelector('.title')
        ?.textContent as string;
    }
  }
};
<\/script>
<style>
div[id^='story--components-forms-autocomplete--custom-menu-items'] {
  height: 400px;
}
.list-item {
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
li.list-item.hidden {
  display: none;
}
li.list-item img {
  height: 28px;
  width: 28px;
}
.item-info .title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.item-info .description {
  color: #666;
  font-size: 0.875rem;
}
li.list-item.selected {
  background-color: #dcedf9;
}
li.list-item .modus-wc-menu-item-selected-icon {
  display: none;
}
li.list-item.selected .modus-wc-menu-item-selected-icon {
  display: block;
}
</style>
<modus-wc-autocomplete
aria-label="Custom items autocomplete"
?bordered=\${args.bordered}
custom-class=\${ifDefined(args['custom-class'])}
debounce-ms=\${ifDefined(args['debounce-ms'])}
?disabled=\${args.disabled}
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
size=\${ifDefined(args.size)}
value=\${args.value}
@inputChange=\${handleInputChange}
>
<div slot="menu-items" id="custom-menu-items">
  <li class="list-item" @click=\${handleItemSelect}>
    <div class="item-info">
      <img
        src="https://cdn-icons-png.flaticon.com/512/5166/5166970.png"
        alt="Project 1"
      />
      <div>
        <div class="title">Project 1</div>
        <div class="description">Description for Project 1</div>
      </div>
      <div class="modus-wc-menu-item-selected-icon">
        <modus-wc-icon
          decorative=\${true}
          name="check"
          size=\${ifDefined(args.size)}
        />
      </div>
    </div>
  </li>
  <li class="list-item" @click=\${handleItemSelect}>
    <div class="item-info">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png"
        alt="Project 2"
      />
      <div>
        <div class="title">Project 2</div>
        <div class="description">Description for Project 2</div>
      </div>
      <div class="modus-wc-menu-item-selected-icon">
        <modus-wc-icon
          decorative=\${true}
          name="check"
          size=\${ifDefined(args.size)}
        />
      </div>
    </div>
  </li>
  <li class="list-item" @click=\${handleItemSelect}>
    <div class="item-info">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1659/1659067.png"
        alt="Project 3"
      />
      <div>
        <div class="title">Project 3</div>
        <div class="description">Description for Project 3</div>
      </div>
      <div class="modus-wc-menu-item-selected-icon">
        <modus-wc-icon
          decorative=\${true}
          name="check"
          size=\${ifDefined(args.size)}
        />
      </div>
    </div>
  </li>
</div>
</modus-wc-autocomplete>
    \`;
  }
}`,...(F=(R=v.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var W,B,O;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    interface AutocompleteElement extends HTMLElement {
      items: IAutocompleteItem[];
      value: string;
      openMenu(): Promise<void>;
      closeMenu(): Promise<void>;
    }

    // Custom keydown handler
    const customKeyDown = (e: KeyboardEvent) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete') as AutocompleteElement;
      if (!autocomplete) return;

      // Prevent default for navigation keys
      if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
        e.preventDefault();
      }
      const visibleItems = args.items.filter(item => item.visibleInMenu && !item.disabled);
      switch (e.key) {
        case 'Escape':
          args.items = args.items.map(item => ({
            ...item,
            focused: false
          }));
          autocomplete.items = [...args.items];
          void autocomplete.closeMenu();
          break;
        case 'ArrowDown':
          {
            // Open menu if not already open
            void autocomplete.openMenu();
            const currentIndex = visibleItems.findIndex(item => item.focused);
            const nextIndex = currentIndex < 0 ? 0 : Math.min(currentIndex + 1, visibleItems.length - 1);
            args.items = args.items.map(item => ({
              ...item,
              focused: visibleItems[nextIndex]?.value === item.value
            }));
            break;
          }
        case 'ArrowUp':
          {
            const currentIndex = visibleItems.findIndex(item => item.focused);
            const prevIndex = currentIndex < 0 ? visibleItems.length - 1 : Math.max(currentIndex - 1, 0);
            args.items = args.items.map(item => ({
              ...item,
              focused: visibleItems[prevIndex]?.value === item.value
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
              void autocomplete.closeMenu();
            }
            break;
          }
        default:
          return;
      }
      autocomplete.items = [...args.items];
    };

    // Custom input change handler
    const customInputChange = (value: string) => {
      const autocomplete = document.querySelector('modus-wc-autocomplete') as AutocompleteElement;
      if (!autocomplete) return;
      const searchText = value.toLowerCase();

      // Filter items based on search text
      args.items = args.items.map(item => ({
        ...item,
        visibleInMenu: item.label.toLowerCase().includes(searchText),
        focused: false,
        // Clear selection if search text doesn't match
        selected: searchText && item.selected && item.label.toLowerCase().includes(searchText) ? true : false
      }));
      autocomplete.items = [...args.items];
      autocomplete.value = value;

      // Show menu if there are visible items
      const hasVisibleItems = args.items.some(item => item.visibleInMenu);
      if (hasVisibleItems && value.length >= args['min-chars']) {
        void autocomplete.openMenu();
      } else {
        void autocomplete.closeMenu();
      }
    };

    // Custom item select handler
    const customItemSelect = (item: IAutocompleteItem) => {
      const autocomplete = document.querySelector('modus-wc-autocomplete') as AutocompleteElement;
      if (!autocomplete) return;

      // Clear previous selections for single select
      args.items = args.items.map(menuItem => ({
        ...menuItem,
        selected: menuItem.value === item.value,
        focused: false
      }));
      autocomplete.items = [...args.items];
      autocomplete.value = item.label;
      void autocomplete.closeMenu();

      // Show a custom notification
      console.log('Custom handler: Selected item', item);
    };
    return html\`
      <style>
        div[id^='story--components-forms-autocomplete--custom-event-handlers'] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Custom handlers autocomplete"
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        debounce-ms=\${ifDefined(args['debounce-ms'])}
        ?disabled=\${args.disabled}
        ?include-clear=\${args['include-clear']}
        ?include-search=\${args['include-search']}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        .items=\${args.items}
        label="Fruit with custom handlers"
        ?leave-menu-open=\${args['leave-menu-open']}
        min-chars=\${args['min-chars']}
        ?multi-select=\${false}
        name=\${ifDefined(args.name)}
        .noResults=\${args['no-results']}
        placeholder="Type to search fruits..."
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        ?show-menu-on-focus=\${args['show-menu-on-focus']}
        ?show-spinner=\${args['show-spinner']}
        size=\${ifDefined(args.size)}
        value=\${args.value}
        .customKeyDown=\${customKeyDown}
        .customInputChange=\${customInputChange}
        .customItemSelect=\${customItemSelect}
      ></modus-wc-autocomplete>
    \`;
  },
  args: {
    bordered: true,
    'debounce-ms': 300,
    disabled: false,
    'include-clear': true,
    'include-search': true,
    items: items,
    'leave-menu-open': false,
    'min-chars': 0,
    'no-results': {
      label: 'No results found',
      subLabel: 'Try searching for a different fruit'
    },
    placeholder: 'Search fruits...',
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
        story: \`This example demonstrates how to use custom event handlers to completely override the default autocomplete behavior.
        
The \\\`customKeyDown\\\`, \\\`customInputChange\\\`, and \\\`customItemSelect\\\` props allow you to implement your own logic for:
- Keyboard navigation and interaction
- Input filtering and search
- Item selection handling

This is useful when you need specialized behavior that differs from the standard autocomplete functionality.\`
      }
    }
  }
}`,...(O=(B=w.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var U,K,_;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
    return html\`
      <style>
        div[id^='story--components-forms-autocomplete--with-programmatic-control'] {
          height: 500px;
        }
        .controls-section {
          margin-bottom: 2rem;
          padding: 1rem;
          background-color: #f5f5f5;
          border-radius: 8px;
        }
        .controls-section h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.2rem;
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

      <div class="controls-section">
        <h3>Programmatic Control Methods</h3>

        <div class="control-group">
          <label>Selection Methods:</label>
          <div class="button-row">
            <modus-wc-button
              onclick="window.handleSelectApple()"
              variant="primary"
              size="sm"
            >
              Select Apple
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleSelectNull()"
              variant="secondary"
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
              variant="primary"
              size="sm"
            >
              Open Menu
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleCloseMenu()"
              variant="primary"
              size="sm"
            >
              Close Menu
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleToggleMenu()"
              variant="secondary"
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
              variant="primary"
              size="sm"
            >
              Focus Input
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleClearInput()"
              variant="danger"
              size="sm"
            >
              Clear All
            </modus-wc-button>
          </div>
        </div>
      </div>

      <modus-wc-autocomplete
        id="programmatic-autocomplete"
        aria-label="Programmatic control demo"
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
}`,...(_=(K=g.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var V,G,J;I.parameters={...I.parameters,docs:{...(V=I.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
| clearable                     |                     | Upcoming feature                                            |
| disabled                      | disabled            |                                                             |
| disable-close-on-select       | leave-menu-open     |                                                             |
| dropdown-max-height           |                     | Not carried over, use CSS instead                           |
| dropdown-z-index              |                     | Not carried over, use CSS instead                           |
| error-text                    | feedback.message    | Use feedback level                                          |
| filter-options                |                     | Rebind options                                              |
| include-search-icon           |                     | Coming soon                                                 |
| label                         | label               |                                                             |
| loading                       |                     | Upcoming feature                                            |
| multiple                      | multi-select        |                                                             |
| no-results-found-text         | no-results.label    |                                                             |
| no-results-found-subtext      | no-results.subLabel |                                                             |
| options                       | items               |                                                             |
| placeholder                   | placeholder         |                                                             |
| read-only                     | read-only           |                                                             |
| required                      | required            |                                                             |
| show-no-results-found-message |                     | Not carried over, use \\\`no-results\\\` prop                   |
| show-options-on-focus         |                     | Not carried over                                            |
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
}`,...(J=(G=I.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const le=["Default","MultiSelect","WithSpinner","CustomMenuItems","CustomEventHandlers","WithProgrammaticControl","Migration"];export{w as CustomEventHandlers,v as CustomMenuItems,h as Default,I as Migration,f as MultiSelect,g as WithProgrammaticControl,b as WithSpinner,le as __namedExportsOrder,Y as default};
