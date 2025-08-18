import{w as oe}from"./decorator-D4YmxizW.js";import{x as v}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var T=Object.freeze,le=Object.defineProperty,S=(e,m)=>T(le(e,"raw",{value:T(e.slice())})),A,L,k,z;const f=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Watermelon",value:"watermelon",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Pineapple",value:"pineapple",visibleInMenu:!0,focused:!1},{label:"Kiwi",value:"kiwi",visibleInMenu:!0,focused:!1},{label:"Mango",value:"mango",visibleInMenu:!0,focused:!1},{label:"Papaya",value:"papaya",visibleInMenu:!0,focused:!1},{label:"Plum",value:"plum",visibleInMenu:!0,focused:!1},{label:"Raspberry",value:"raspberry",visibleInMenu:!0,focused:!1},{label:"Tangerine",value:"tangerine",visibleInMenu:!0,focused:!1}],se={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,"include-clear":!1,"include-search":!1,items:f,label:"Label","leave-menu-open":!1,"max-chips":4,"min-chars":0,"min-input-width":15,"multi-select":!1,"show-menu-on-focus":!1,"show-spinner":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},"max-chips":{control:{type:"number",min:1,max:10},description:'Maximum number of chips to display before showing "+N more" button'},"min-input-width":{control:{type:"number",min:10,max:300},description:"Minimum width for the text input in pixels. When chips would make input smaller, container height increases instead. Default: 20px."},size:{control:{type:"select"},options:["sm","md","lg"]},"custom-blur":{description:"Custom blur handler function that overrides default blur behavior",table:{type:{summary:"(event: FocusEvent) => void"},category:"Custom Handlers"}},"custom-input-change":{description:"Custom input change handler function that overrides default input change behavior",table:{type:{summary:"(value: string) => void"},category:"Custom Handlers"}},"custom-item-select":{description:"Custom item select handler function that overrides default item selection behavior",table:{type:{summary:"(item: IAutocompleteItem) => void"},category:"Custom Handlers"}},"custom-key-down":{description:"Custom keydown handler function that overrides default keyboard navigation",table:{type:{summary:"(event: KeyboardEvent) => void"},category:"Custom Handlers"}}},decorators:[oe],parameters:{actions:{handles:["chipRemove","chipsExpansionChange","inputBlur","inputChange","inputFocus","itemSelect"]}}},ae={render:e=>v`
<style>
  div[id^='story--components-forms-autocomplete--default'] {
    height: 400px;
  }
</style>
<modus-wc-autocomplete
  aria-label="Fruit autocomplete"
  ?bordered=${e.bordered}
  custom-class=${t(e["custom-class"])}
  debounce-ms=${t(e["debounce-ms"])}
  ?disabled=${e.disabled}
  ?include-clear=${e["include-clear"]}
  ?include-search=${e["include-search"]}
  input-id=${t(e["input-id"])}
  input-tab-index=${t(e["input-tab-index"])}
  .items=${e.items}
  label=${t(e.label)}
  ?leave-menu-open=${e["leave-menu-open"]}
  min-chars=${e["min-chars"]}
  min-input-width=${t(e["min-input-width"])}
  ?multi-select=${!1}
  name=${t(e.name)}
  .noResults=${e["no-results"]}
  placeholder=${t(e.placeholder)}
  ?read-only=${e["read-only"]}
  ?required=${e.required}
  ?show-menu-on-focus=${e["show-menu-on-focus"]}
  ?show-spinner=${e["show-spinner"]}
  size=${t(e.size)}
  value=${e.value}
></modus-wc-autocomplete>
    `},g={...ae},I={render:e=>((!e.items||e.items.length===0)&&(e.items=[...f]),v(A||(A=S([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["max-chips"]??4,e["min-chars"],t(e["min-input-width"]),!0,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],t(e.size),e.value))},y={render:e=>{let m;const h=b=>{var a;if(!((a=b.detail)!=null&&a.target))return;const r=b.target.closest("modus-wc-autocomplete");if(r){const n=b.detail.target.value.toLowerCase();m&&window.clearTimeout(m),r.showSpinner=!0,m=window.setTimeout(()=>{const i=f.filter(o=>o.label.toLowerCase().includes(n));r.items=i,r.showSpinner=!1},2e3)}};return v(L||(L=S([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["min-chars"],!1,t(e.name),t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,h)}},M={render:e=>{const m=e["no-results"];e["leave-menu-open"]==!0&&(e["no-results"]={ariaLabel:"",label:"",subLabel:""});const h=l=>{const n=l.querySelectorAll("modus-wc-menu-item:not([disabled])");return Array.from(n).filter(i=>window.getComputedStyle(i).display!=="none"&&!i.classList.contains("hidden"))},b=l=>{var p,d;const n=l.target.closest("modus-wc-autocomplete");if(!n||n.disabled||n.readOnly)return;const o=h(n).map(c=>c.querySelector("button")).filter(Boolean),s=document.activeElement,u=o.indexOf(s);switch(l.key){case"ArrowDown":{l.preventDefault(),n.openMenu();let c=u+1;if(c>=o.length)return;c<0&&(c=0),(p=o[c])==null||p.focus();break}case"ArrowUp":{l.preventDefault(),n.openMenu();let c=u-1;if(c<0)return;(d=o[c])==null||d.focus();break}case"Enter":{l.preventDefault(),o.includes(s)&&s.click();const c=n.querySelector("input");c==null||c.focus();break}case"Escape":{l.preventDefault(),n.closeMenu();const c=n.querySelector("input");c==null||c.focus();break}}},r=l=>{var i;if(!((i=l.detail)!=null&&i.target))return;const n=l.target.closest("modus-wc-autocomplete");if(n){const o=l.detail.target.value.toLowerCase(),s=n==null?void 0:n.querySelectorAll("modus-wc-menu-item");o===""&&(s==null||s.forEach(d=>{d.removeAttribute("selected")}));let u=0;Array.from(s??[]).forEach(d=>{var w;(((w=d.getAttribute("label"))==null?void 0:w.toLowerCase())||"").includes(o)?d.classList.remove("hidden"):(d.classList.add("hidden"),u++)}),n.noResults=u===(s==null?void 0:s.length)?m:{ariaLabel:"",label:"",subLabel:""};const p=n.querySelector(".no-results-item");p&&(u===(s==null?void 0:s.length)?p.classList.add("visible"):p.classList.remove("visible"))}},a=l=>{const n=l.target.closest("modus-wc-autocomplete");if(n){const i=l.detail.value;n.value=i,n.querySelectorAll("modus-wc-menu-item").forEach(s=>{s.getAttribute("value")===i?s.setAttribute("selected","true"):s.removeAttribute("selected")}),e["leave-menu-open"]||n.closeMenu()}};return v(k||(k=S([`
<script>
const originalNoResults = args['no-results'];
if (args['leave-menu-open'] == true) {
  args['no-results'] = {
    ariaLabel: '',
    label: '',
    subLabel: '',
  };
}

const getVisibleItems = (autocomplete: Element): HTMLElement[] => {
  const menuItems = autocomplete.querySelectorAll(
    'modus-wc-menu-item:not([disabled])'
  );
  return Array.from(menuItems).filter(
    (item: Element): item is HTMLElement => {
      const style = window.getComputedStyle(item);
      return style.display !== 'none' && !item.classList.contains('hidden');
    }
  );
};

const handleCustomKeyDown = (e: KeyboardEvent) => {
  const autocomplete = (e.target as HTMLInputElement).closest(
    'modus-wc-autocomplete'
  ) as Element & {
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
  const buttons = visibleItems
    .map((item) => item.querySelector('button'))
    .filter(Boolean) as HTMLButtonElement[];
  const currentFocusedButton = document.activeElement as HTMLButtonElement;
  const currentIndex = buttons.indexOf(currentFocusedButton);

  switch (e.key) {
    case 'ArrowDown': {
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

    case 'ArrowUp': {
      e.preventDefault();
      // Open menu when arrow key is pressed
      void autocomplete.openMenu();

      let prevIndex = currentIndex - 1;
      // Stop at the first item instead of wrapping
      if (prevIndex < 0) return;
      
      buttons[prevIndex]?.focus();
      break;
    }

    case 'Enter': {
      e.preventDefault();
      // If a button is focused, click it
      if (buttons.includes(currentFocusedButton)) {
        currentFocusedButton.click();
      }
      break;
    }

    case 'Escape': {
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

  const autocomplete = (e.target as HTMLInputElement).closest(
    'modus-wc-autocomplete'
  ) as Element & { noResults: IAutocompleteNoResults };

  if (autocomplete) {
    const searchText = (
      e.detail.target as HTMLInputElement
    ).value.toLowerCase();
    const menuItems = autocomplete?.querySelectorAll('modus-wc-menu-item');
    
    // Clear selected state when input is empty
    if (searchText === '') {
      menuItems?.forEach((item) => {
        item.removeAttribute('selected');
      });
    }
    
    let hiddenCount = 0;
    Array.from(menuItems ?? []).forEach((menuItem) => {
      const label = menuItem.getAttribute('label')?.toLowerCase() || '';
      if (!label.includes(searchText)) {
        menuItem.classList.add('hidden');
        hiddenCount++;
      } else {
        menuItem.classList.remove('hidden');
      }
    });

    // Show no results if all items are hidden
    autocomplete.noResults =
      hiddenCount === menuItems?.length
        ? originalNoResults
        : { ariaLabel: '', label: '', subLabel: '' };
        
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

const handleItemSelect = (e: CustomEvent<{ value: string }>) => {
  const autocomplete = (e.target as HTMLInputElement).closest(
    'modus-wc-autocomplete'
  ) as HTMLElement & { value: string; closeMenu: () => Promise<void> };

  if (autocomplete) {
    const selectedValue = e.detail.value;
    autocomplete.value = selectedValue;
    // Update selected state on menu items
    const menuItems = autocomplete.querySelectorAll('modus-wc-menu-item');
    menuItems.forEach((item) => {
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
<\/script>
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
  aria-label="Custom menu items example"
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
      <modus-wc-avatar aria-label="Avatar" size="xs" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle" size="xs"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Jane Smith"
      sub-label="jane.smith@example.com"
      value="Jane Smith"
      @itemSelect=`,`
    >
      <div slot="start-icon">
      <modus-wc-avatar aria-label="Avatar" size="xs" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle" size="xs"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Bob Johnson"
      sub-label="bob.johnson@example.com"
      value="Bob Johnson"
      @itemSelect=`,`
    >
                <div slot="start-icon">
      <modus-wc-avatar aria-label="Avatar" size="xs" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle" size="xs"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Alice Williams"
      sub-label="alice.williams@example.com"
      value="Alice Williams"
      @itemSelect=`,`
    >
      <div slot="start-icon">
      <modus-wc-avatar aria-label="Avatar" size="xs" alt="Example avatar" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle" size="md"></modus-wc-avatar>
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),t(e.label),e["leave-menu-open"],e["min-chars"],!1,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],t(e.size),e["show-spinner"],e.value,b,r,!0,a,a,a,a)}},x={render:e=>{const m=r=>{const a=r.target.closest("modus-wc-autocomplete");if(!a)return;["ArrowDown","ArrowUp","Enter","Escape"].includes(r.key)&&r.preventDefault();const l=e.items.filter(n=>n.visibleInMenu&&!n.disabled);switch(r.key){case"Escape":e.items=e.items.map(n=>({...n,focused:!1})),a.items=[...e.items],a.closeMenu(),a.style.transform="scale(0.98)",setTimeout(()=>{a.style.transform=""},200);break;case"ArrowDown":{a.openMenu();const n=l.findIndex(s=>s.focused),i=n<0?0:Math.min(n+1,l.length-1),o=i+1<l.length?i+1:i;e.items=e.items.map(s=>{var u;return{...s,focused:((u=l[o])==null?void 0:u.value)===s.value}});break}case"ArrowUp":{const n=l.findIndex(s=>s.focused),i=n<0?l.length-1:Math.max(n-1,0),o=i-1>=0?i-1:i;e.items=e.items.map(s=>{var u;return{...s,focused:((u=l[o])==null?void 0:u.value)===s.value}});break}case"Enter":{const n=l.find(i=>i.focused);n&&(e.items=e.items.map(i=>({...i,selected:i.value===n.value,focused:!1})),a.value=n.label,a.closeMenu());break}default:return}a.items=[...e.items]},h=r=>{const a=document.querySelector("modus-wc-autocomplete");if(!a)return;const l=r.toLowerCase().split("");if(r.length>0){const o=e.items.map(s=>{const u=s.label.toLowerCase();let p=0,d=!0;for(const c of l)if(u.includes(c)){const w=u.indexOf(c);w===0?p+=3:u[w-1]===" "?p+=2:p+=1}else{d=!1;break}return d&&u.includes(r.toLowerCase())&&(p+=10),{item:s,score:d?p:-1,visible:d}});o.sort((s,u)=>u.score-s.score),e.items=o.map(({item:s,visible:u})=>({...s,visibleInMenu:u,focused:!1,selected:s.selected&&u,label:s.label}))}else e.items=e.items.map(o=>({...o,visibleInMenu:!0,focused:!1}));a.items=[...e.items],a.value=r;const n=e.items.filter(o=>o.visibleInMenu).length;console.log(`Fuzzy search for "${r}": ${n} matches found`),e.items.some(o=>o.visibleInMenu)&&r.length>=e["min-chars"]?a.openMenu():a.closeMenu()},b=r=>{const a=document.querySelector("modus-wc-autocomplete");a&&(e.items=e.items.map(l=>({...l,selected:l.value===r.value,focused:!1})),a.items=[...e.items],a.value=r.label,a.closeMenu())};return v`
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
        aria-label="Custom handlers autocomplete"
        ?bordered=${e.bordered}
        custom-class=${t(e["custom-class"])}
        debounce-ms=${0}
        ?disabled=${e.disabled}
        ?include-clear=${e["include-clear"]}
        ?include-search=${e["include-search"]}
        input-id=${t(e["input-id"])}
        input-tab-index=${t(e["input-tab-index"])}
        .items=${e.items}
        label="Fruit list with custom handlers"
        ?leave-menu-open=${e["leave-menu-open"]}
        min-chars=${e["min-chars"]}
        ?multi-select=${!1}
        name=${t(e.name)}
        .noResults=${e["no-results"]}
        placeholder="Type 'bry' for Blueberry or Raspberry"
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        ?show-menu-on-focus=${e["show-menu-on-focus"]}
        ?show-spinner=${e["show-spinner"]}
        size=${t(e.size)}
        value=${e.value}
        .customKeyDown=${m}
        .customInputChange=${h}
        .customItemSelect=${b}
      ></modus-wc-autocomplete>
    `},args:{bordered:!0,"debounce-ms":0,disabled:!1,"include-clear":!0,"include-search":!0,items:f,"leave-menu-open":!1,"min-chars":0,"no-results":{label:"No fruits found",subLabel:"Try different characters"},placeholder:"Search fruits...","read-only":!1,required:!1,"show-menu-on-focus":!0,"show-spinner":!1,size:"md",value:""},parameters:{docs:{description:{story:`This example demonstrates custom event handlers with three specific behaviors:

1. **Skip Navigation**: Arrow keys skip every other item for 2x faster navigation
2. **Escape Animation**: Pressing Escape triggers a subtle scale animation
3. **Fuzzy Character Search**: Instead of normal substring matching, this searches for items containing ALL typed characters in any order

The fuzzy search allows finding items with scattered characters:
- Type "pae" to find Pine**a**ppl**e**
- Type "bry" to find Blue**b**er**ry**, Straw**b**er**ry**, Rasp**b**er**ry**

Items are automatically sorted by relevance with exact substring matches appearing first.`}}}},$={args:{...se.args,items:f},render:e=>{const m=async()=>{const o=document.getElementById("programmatic-autocomplete");if(o){const s=f.find(u=>u.value==="apple")||null;await o.selectItem(s)}},h=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.selectItem(null)},b=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.openMenu()},r=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.closeMenu()},a=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.toggleMenu()},l=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.focusInput()},n=async()=>{const o=document.getElementById("programmatic-autocomplete");o&&await o.clearInput()},i=window;return i.handleSelectApple=m,i.handleSelectNull=h,i.handleOpenMenu=b,i.handleCloseMenu=r,i.handleToggleMenu=a,i.handleFocusInput=l,i.handleClearInput=n,v`
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
      </modus-wc-card>

      <modus-wc-autocomplete
        id="programmatic-autocomplete"
        aria-label="Programmatic control demo"
        ?bordered=${e.bordered}
        custom-class=${t(e["custom-class"])}
        debounce-ms=${t(e["debounce-ms"])}
        ?disabled=${e.disabled}
        ?include-clear=${e["include-clear"]}
        ?include-search=${e["include-search"]}
        input-id=${t(e["input-id"])}
        input-tab-index=${t(e["input-tab-index"])}
        .items=${e.items}
        label="Try the control buttons above"
        ?leave-menu-open=${e["leave-menu-open"]}
        max-chips=${e["max-chips"]??4}
        min-chars=${e["min-chars"]}
        min-input-width=${t(e["min-input-width"])}
        ?multi-select=${e["multi-select"]}
        name=${t(e.name)}
        .noResults=${e["no-results"]}
        placeholder="Use buttons above to control"
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        ?show-menu-on-focus=${e["show-menu-on-focus"]}
        ?show-spinner=${e["show-spinner"]}
        size=${t(e.size)}
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

        `}}}},C={render:e=>{const m=[{label:"Apple",value:"apple",visibleInMenu:!0},{label:"Banana",value:"banana",visibleInMenu:!0},{label:"Orange",value:"orange",visibleInMenu:!0},{label:"Strawberry",value:"strawberry",visibleInMenu:!0}],h=[...m,{label:"Blackberry",value:"blackberry",visibleInMenu:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0},{label:"Cherry",value:"cherry",visibleInMenu:!0},{label:"Cranberry",value:"cranberry",visibleInMenu:!0},{label:"Fig",value:"fig",visibleInMenu:!0},{label:"Grape",value:"grape",visibleInMenu:!0},{label:"Kiwi",value:"kiwi",visibleInMenu:!0},{label:"Lemon",value:"lemon",visibleInMenu:!0},{label:"Lime",value:"lime",visibleInMenu:!0},{label:"Mango",value:"mango",visibleInMenu:!0},{label:"Melon",value:"melon",visibleInMenu:!0},{label:"Peach",value:"peach",visibleInMenu:!0},{label:"Pineapple",value:"pineapple",visibleInMenu:!0},{label:"Raspberry",value:"raspberry",visibleInMenu:!0},{label:"Watermelon",value:"watermelon",visibleInMenu:!0}],b=a=>{var n;if(!((n=a.detail)!=null&&n.target))return;const l=a.target.closest("modus-wc-autocomplete");if(l){const i=a.detail.target,o=i.value.toLowerCase();if(o===""){l.items=[...m],l.value=i.value;return}l.showSpinner=!0,setTimeout(()=>{const s=h.filter(u=>u.label.toLowerCase().includes(o));l.items=s,l.showSpinner=!1},1e3),l.value=i.value}},r=a=>{const l=a.target.closest("modus-wc-autocomplete");if(l){const n=a.detail.label;n&&(l.value=n)}};return v(z||(z=S([`
      <style>
        div[id^='story--components-forms-autocomplete--dynamic-options'] {
          height: 400px;
        }
      </style>
      <script>
          const defaultFruits = [
          { label: 'Apple', value: 'apple', visibleInMenu: true },
          { label: 'Banana', value: 'banana', visibleInMenu: true },
          { label: 'Orange', value: 'orange', visibleInMenu: true },
          { label: 'Strawberry', value: 'strawberry', visibleInMenu: true },
        ];

        // Extended dataset that will be searched when typing
        const allFruits = [
          ...defaultFruits,
          { label: 'Blackberry', value: 'blackberry', visibleInMenu: true },
          { label: 'Blueberry', value: 'blueberry', visibleInMenu: true },
          { label: 'Cherry', value: 'cherry', visibleInMenu: true },
          { label: 'Cranberry', value: 'cranberry', visibleInMenu: true },
          { label: 'Fig', value: 'fig', visibleInMenu: true },
          { label: 'Grape', value: 'grape', visibleInMenu: true },
          { label: 'Kiwi', value: 'kiwi', visibleInMenu: true },
          { label: 'Lemon', value: 'lemon', visibleInMenu: true },
          { label: 'Lime', value: 'lime', visibleInMenu: true },
          { label: 'Mango', value: 'mango', visibleInMenu: true },
          { label: 'Melon', value: 'melon', visibleInMenu: true },
          { label: 'Peach', value: 'peach', visibleInMenu: true },
          { label: 'Pineapple', value: 'pineapple', visibleInMenu: true },
          { label: 'Raspberry', value: 'raspberry', visibleInMenu: true },
          { label: 'Watermelon', value: 'watermelon', visibleInMenu: true },
        ];

        const handleInputChange = (e: CustomEvent<Event>) => {
          if (!e.detail?.target) return;

          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          );

          if (autocomplete) {
            const input = e.detail.target as HTMLInputElement;
            const searchText = input.value.toLowerCase();

            // // If empty, show default fruits again
            if (searchText === '') {
              autocomplete.items = [...defaultFruits];
              autocomplete.value = input.value;
              return;
            }

            // Show spinner while "loading" data
            autocomplete.showSpinner = true;

            // Simulate API call delay with setTimeout
            setTimeout(() => {
              const filteredFruits = allFruits.filter((fruit) =>
                fruit.label.toLowerCase().includes(searchText)
              );

              // Update the items with the "API response"
              autocomplete.items = filteredFruits;

              // Hide spinner after "loading" completes
              autocomplete.showSpinner = false;
            }, 1000);

            autocomplete.value = input.value;
          }
        };

        const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          );

          if (autocomplete) {
            const label = e.detail.label;
            if (label) {
              autocomplete.value = label;
            }
          }
        };
      <\/script>
      <modus-wc-autocomplete
        aria-label="Dynamic fruits autocomplete"
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),m,t(e.label),e["leave-menu-open"],0,!1,t(e.name),e["no-results"],e["read-only"],e.required,!0,t(e.size),e.value,b,r)}},E={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>v`<div></div>`};var D,P,F;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template
}`,...(F=(P=g.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var H,q,B;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(q=I.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var R,O,N;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(O=y.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var W,j,U;M.parameters={...M.parameters,docs:{...(W=M.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
<script>
const originalNoResults = args['no-results'];
if (args['leave-menu-open'] == true) {
  args['no-results'] = {
    ariaLabel: '',
    label: '',
    subLabel: '',
  };
}

const getVisibleItems = (autocomplete: Element): HTMLElement[] => {
  const menuItems = autocomplete.querySelectorAll(
    'modus-wc-menu-item:not([disabled])'
  );
  return Array.from(menuItems).filter(
    (item: Element): item is HTMLElement => {
      const style = window.getComputedStyle(item);
      return style.display !== 'none' && !item.classList.contains('hidden');
    }
  );
};

const handleCustomKeyDown = (e: KeyboardEvent) => {
  const autocomplete = (e.target as HTMLInputElement).closest(
    'modus-wc-autocomplete'
  ) as Element & {
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
  const buttons = visibleItems
    .map((item) => item.querySelector('button'))
    .filter(Boolean) as HTMLButtonElement[];
  const currentFocusedButton = document.activeElement as HTMLButtonElement;
  const currentIndex = buttons.indexOf(currentFocusedButton);

  switch (e.key) {
    case 'ArrowDown': {
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

    case 'ArrowUp': {
      e.preventDefault();
      // Open menu when arrow key is pressed
      void autocomplete.openMenu();

      let prevIndex = currentIndex - 1;
      // Stop at the first item instead of wrapping
      if (prevIndex < 0) return;
      
      buttons[prevIndex]?.focus();
      break;
    }

    case 'Enter': {
      e.preventDefault();
      // If a button is focused, click it
      if (buttons.includes(currentFocusedButton)) {
        currentFocusedButton.click();
      }
      break;
    }

    case 'Escape': {
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

  const autocomplete = (e.target as HTMLInputElement).closest(
    'modus-wc-autocomplete'
  ) as Element & { noResults: IAutocompleteNoResults };

  if (autocomplete) {
    const searchText = (
      e.detail.target as HTMLInputElement
    ).value.toLowerCase();
    const menuItems = autocomplete?.querySelectorAll('modus-wc-menu-item');
    
    // Clear selected state when input is empty
    if (searchText === '') {
      menuItems?.forEach((item) => {
        item.removeAttribute('selected');
      });
    }
    
    let hiddenCount = 0;
    Array.from(menuItems ?? []).forEach((menuItem) => {
      const label = menuItem.getAttribute('label')?.toLowerCase() || '';
      if (!label.includes(searchText)) {
        menuItem.classList.add('hidden');
        hiddenCount++;
      } else {
        menuItem.classList.remove('hidden');
      }
    });

    // Show no results if all items are hidden
    autocomplete.noResults =
      hiddenCount === menuItems?.length
        ? originalNoResults
        : { ariaLabel: '', label: '', subLabel: '' };
        
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

const handleItemSelect = (e: CustomEvent<{ value: string }>) => {
  const autocomplete = (e.target as HTMLInputElement).closest(
    'modus-wc-autocomplete'
  ) as HTMLElement & { value: string; closeMenu: () => Promise<void> };

  if (autocomplete) {
    const selectedValue = e.detail.value;
    autocomplete.value = selectedValue;
    // Update selected state on menu items
    const menuItems = autocomplete.querySelectorAll('modus-wc-menu-item');
    menuItems.forEach((item) => {
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
<\/script>
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
  aria-label="Custom menu items example"
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
      <modus-wc-avatar aria-label="Avatar" size="xs" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle" size="xs"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Jane Smith"
      sub-label="jane.smith@example.com"
      value="Jane Smith"
      @itemSelect=\${handleItemSelect}
    >
      <div slot="start-icon">
      <modus-wc-avatar aria-label="Avatar" size="xs" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle" size="xs"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Bob Johnson"
      sub-label="bob.johnson@example.com"
      value="Bob Johnson"
      @itemSelect=\${handleItemSelect}
    >
                <div slot="start-icon">
      <modus-wc-avatar aria-label="Avatar" size="xs" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle" size="xs"></modus-wc-avatar>
      </div>
    </modus-wc-menu-item>
    <modus-wc-menu-item
      label="Alice Williams"
      sub-label="alice.williams@example.com"
      value="Alice Williams"
      @itemSelect=\${handleItemSelect}
    >
      <div slot="start-icon">
      <modus-wc-avatar aria-label="Avatar" size="xs" alt="Example avatar" img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" shape="circle" size="md"></modus-wc-avatar>
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
    \`;
  }
}`,...(U=(j=M.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var K,V,J;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    interface AutocompleteElement extends HTMLElement {
      items: IAutocompleteItem[];
      value: string;
      openMenu(): Promise<void>;
      closeMenu(): Promise<void>;
    }

    // Custom keydown handler with skip navigation and escape animation
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
          // Custom: Show escape animation
          autocomplete.style.transform = 'scale(0.98)';
          setTimeout(() => {
            autocomplete.style.transform = '';
          }, 200);
          break;
        case 'ArrowDown':
          {
            // Open menu if not already open
            void autocomplete.openMenu();
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
              void autocomplete.closeMenu();
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
      const autocomplete = document.querySelector('modus-wc-autocomplete') as AutocompleteElement;
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
          selected: item.selected && visible,
          // Add score as part of label for demonstration (you can remove this in production)
          label: item.label
        }));
      } else {
        // No search text, show all items
        args.items = args.items.map(item => ({
          ...item,
          visibleInMenu: true,
          focused: false
        }));
      }
      autocomplete.items = [...args.items];
      autocomplete.value = value;
      // Show match count in console for demonstration
      const matchCount = args.items.filter(item => item.visibleInMenu).length;
      console.log(\`Fuzzy search for "\${value}": \${matchCount} matches found\`);

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
    };
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
        aria-label="Custom handlers autocomplete"
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        debounce-ms=\${0}
        ?disabled=\${args.disabled}
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
      ></modus-wc-autocomplete>
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
}`,...(J=(V=x.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var _,G,Q;$.parameters={...$.parameters,docs:{...(_=$.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      </modus-wc-card>

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
}`,...(Q=(G=$.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Y,Z;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
      <script>
          const defaultFruits = [
          { label: 'Apple', value: 'apple', visibleInMenu: true },
          { label: 'Banana', value: 'banana', visibleInMenu: true },
          { label: 'Orange', value: 'orange', visibleInMenu: true },
          { label: 'Strawberry', value: 'strawberry', visibleInMenu: true },
        ];

        // Extended dataset that will be searched when typing
        const allFruits = [
          ...defaultFruits,
          { label: 'Blackberry', value: 'blackberry', visibleInMenu: true },
          { label: 'Blueberry', value: 'blueberry', visibleInMenu: true },
          { label: 'Cherry', value: 'cherry', visibleInMenu: true },
          { label: 'Cranberry', value: 'cranberry', visibleInMenu: true },
          { label: 'Fig', value: 'fig', visibleInMenu: true },
          { label: 'Grape', value: 'grape', visibleInMenu: true },
          { label: 'Kiwi', value: 'kiwi', visibleInMenu: true },
          { label: 'Lemon', value: 'lemon', visibleInMenu: true },
          { label: 'Lime', value: 'lime', visibleInMenu: true },
          { label: 'Mango', value: 'mango', visibleInMenu: true },
          { label: 'Melon', value: 'melon', visibleInMenu: true },
          { label: 'Peach', value: 'peach', visibleInMenu: true },
          { label: 'Pineapple', value: 'pineapple', visibleInMenu: true },
          { label: 'Raspberry', value: 'raspberry', visibleInMenu: true },
          { label: 'Watermelon', value: 'watermelon', visibleInMenu: true },
        ];

        const handleInputChange = (e: CustomEvent<Event>) => {
          if (!e.detail?.target) return;

          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          );

          if (autocomplete) {
            const input = e.detail.target as HTMLInputElement;
            const searchText = input.value.toLowerCase();

            // // If empty, show default fruits again
            if (searchText === '') {
              autocomplete.items = [...defaultFruits];
              autocomplete.value = input.value;
              return;
            }

            // Show spinner while "loading" data
            autocomplete.showSpinner = true;

            // Simulate API call delay with setTimeout
            setTimeout(() => {
              const filteredFruits = allFruits.filter((fruit) =>
                fruit.label.toLowerCase().includes(searchText)
              );

              // Update the items with the "API response"
              autocomplete.items = filteredFruits;

              // Hide spinner after "loading" completes
              autocomplete.showSpinner = false;
            }, 1000);

            autocomplete.value = input.value;
          }
        };

        const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          );

          if (autocomplete) {
            const label = e.detail.label;
            if (label) {
              autocomplete.value = label;
            }
          }
        };
      <\/script>
      <modus-wc-autocomplete
        aria-label="Dynamic fruits autocomplete"
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
    \`;
  }
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const de=["Default","MultiSelect","WithSpinner","CustomMenuItems","CustomEventHandlers","WithProgrammaticControl","DynamicOptions","Migration"];export{x as CustomEventHandlers,M as CustomMenuItems,g as Default,C as DynamicOptions,E as Migration,I as MultiSelect,$ as WithProgrammaticControl,y as WithSpinner,de as __namedExportsOrder,se as default};
