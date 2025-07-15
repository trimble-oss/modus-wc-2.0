import{w as Y}from"./decorator-D4YmxizW.js";import{x as b}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var S=Object.freeze,Z=Object.defineProperty,E=(e,c)=>S(Z(e,"raw",{value:S(e.slice())})),A,T,L;const v=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Watermelon",value:"watermelon",visibleInMenu:!0,focused:!1,disabled:!1},{label:"Pineapple",value:"pineapple",visibleInMenu:!0,focused:!1},{label:"Kiwi",value:"kiwi",visibleInMenu:!0,focused:!1},{label:"Mango",value:"mango",visibleInMenu:!0,focused:!1},{label:"Papaya",value:"papaya",visibleInMenu:!0,focused:!1},{label:"Plum",value:"plum",visibleInMenu:!0,focused:!1},{label:"Raspberry",value:"raspberry",visibleInMenu:!0,focused:!1},{label:"Tangerine",value:"tangerine",visibleInMenu:!0,focused:!1}],ee={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,"include-clear":!1,"include-search":!1,items:v,label:"Label","leave-menu-open":!1,"max-chips":4,"min-chars":0,"min-input-width":20,"multi-select":!1,"show-menu-on-focus":!1,"show-spinner":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},"max-chips":{control:{type:"number",min:1,max:10},description:'Maximum number of chips to display before showing "+N more" button'},"min-input-width":{control:{type:"number",min:12,max:300},description:"Minimum width for the text input in pixels. When chips would make input smaller, container height increases instead. Default: 20px."},size:{control:{type:"select"},options:["sm","md","lg"]},"custom-blur":{description:"Custom blur handler function that overrides default blur behavior",table:{type:{summary:"(event: FocusEvent) => void"},category:"Custom Handlers"}},"custom-input-change":{description:"Custom input change handler function that overrides default input change behavior",table:{type:{summary:"(value: string) => void"},category:"Custom Handlers"}},"custom-item-select":{description:"Custom item select handler function that overrides default item selection behavior",table:{type:{summary:"(item: IAutocompleteItem) => void"},category:"Custom Handlers"}},"custom-key-down":{description:"Custom keydown handler function that overrides default keyboard navigation",table:{type:{summary:"(event: KeyboardEvent) => void"},category:"Custom Handlers"}}},decorators:[Y],parameters:{actions:{handles:["chipRemove","chipsExpansionChange","inputBlur","inputChange","inputFocus","itemSelect"]}}},te={render:e=>b`
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
    `},w={...te},g={render:e=>((!e.items||e.items.length===0)&&(e.items=[...v]),b(A||(A=E([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,e["include-clear"],e["include-search"],t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["max-chips"]??4,e["min-chars"],t(e["min-input-width"]),!0,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],t(e.size),e.value))},I={render:e=>{let c;const h=m=>{var a;if(!((a=m.detail)!=null&&a.target))return;const u=m.target.closest("modus-wc-autocomplete");if(u){const o=m.detail.target.value.toLowerCase();c&&window.clearTimeout(c),u.showSpinner=!0,c=window.setTimeout(()=>{const s=v.filter(n=>n.label.toLowerCase().includes(o));u.items=s,u.showSpinner=!1},2e3)}};return b(T||(T=E([`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),e.items,t(e.label),e["leave-menu-open"],e["min-chars"],!1,t(e.name),t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],e["show-spinner"],t(e.size),e.value,h)}},y={render:e=>{const c=e["no-results"];e["leave-menu-open"]==!0&&(e["no-results"]={ariaLabel:"",label:"",subLabel:""});const h=l=>{const o=l.querySelectorAll("modus-wc-menu-item:not([disabled])");return Array.from(o).filter(s=>window.getComputedStyle(s).display!=="none"&&!s.classList.contains("hidden"))},m=l=>{var f,p;const o=l.target.closest("modus-wc-autocomplete");if(!o||o.disabled||o.readOnly)return;const n=h(o).map(r=>r.querySelector("button")).filter(Boolean),i=document.activeElement,d=n.indexOf(i);switch(l.key){case"ArrowDown":{l.preventDefault(),o.openMenu();let r=d+1;if(r>=n.length)return;r<0&&(r=0),(f=n[r])==null||f.focus();break}case"ArrowUp":{l.preventDefault(),o.openMenu();let r=d-1;if(r<0)return;(p=n[r])==null||p.focus();break}case"Enter":{l.preventDefault(),n.includes(i)&&i.click();break}case"Escape":{l.preventDefault(),o.closeMenu();const r=o.querySelector("input");r==null||r.focus();break}}},u=l=>{var s;if(!((s=l.detail)!=null&&s.target))return;const o=l.target.closest("modus-wc-autocomplete");if(o){const n=l.detail.target.value.toLowerCase(),i=o==null?void 0:o.querySelectorAll("modus-wc-menu-item");n===""&&(i==null||i.forEach(p=>{p.removeAttribute("selected")}));let d=0;Array.from(i??[]).forEach(p=>{var C;(((C=p.getAttribute("label"))==null?void 0:C.toLowerCase())||"").includes(n)?p.classList.remove("hidden"):(p.classList.add("hidden"),d++)}),o.noResults=d===(i==null?void 0:i.length)?c:{ariaLabel:"",label:"",subLabel:""};const f=o.querySelector(".no-results-item");f&&(d===(i==null?void 0:i.length)?f.classList.add("visible"):f.classList.remove("visible"))}},a=l=>{const o=l.target.closest("modus-wc-autocomplete");if(o){const s=l.detail.value;o.value=s,o.querySelectorAll("modus-wc-menu-item").forEach(i=>{i.getAttribute("value")===s?i.setAttribute("selected","true"):i.removeAttribute("selected")}),e["leave-menu-open"]||o.closeMenu()}};return b(L||(L=E([`
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
  .no-results=`,`
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
    `])),e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-id"]),t(e["input-tab-index"]),t(e.label),e["leave-menu-open"],e["min-chars"],!1,t(e.name),e["no-results"],t(e.placeholder),e["read-only"],e.required,e["show-menu-on-focus"],t(e.size),e["show-spinner"],e.value,m,u,!0,a,a,a,a)}},x={render:e=>{const c=u=>{const a=u.target.closest("modus-wc-autocomplete");if(!a)return;["ArrowDown","ArrowUp","Enter","Escape"].includes(u.key)&&u.preventDefault();const l=e.items.filter(o=>o.visibleInMenu&&!o.disabled);switch(u.key){case"Escape":e.items=e.items.map(o=>({...o,focused:!1})),a.items=[...e.items],a.closeMenu();break;case"ArrowDown":{a.openMenu();const o=l.findIndex(n=>n.focused),s=o<0?0:Math.min(o+1,l.length-1);e.items=e.items.map(n=>{var i;return{...n,focused:((i=l[s])==null?void 0:i.value)===n.value}});break}case"ArrowUp":{const o=l.findIndex(n=>n.focused),s=o<0?l.length-1:Math.max(o-1,0);e.items=e.items.map(n=>{var i;return{...n,focused:((i=l[s])==null?void 0:i.value)===n.value}});break}case"Enter":{const o=l.find(s=>s.focused);o&&(e.items=e.items.map(s=>({...s,selected:s.value===o.value,focused:!1})),a.value=o.label,a.closeMenu());break}default:return}a.items=[...e.items]},h=u=>{const a=document.querySelector("modus-wc-autocomplete");if(!a)return;const l=u.toLowerCase();e.items=e.items.map(s=>({...s,visibleInMenu:s.label.toLowerCase().includes(l),focused:!1,selected:!!(l&&s.selected&&s.label.toLowerCase().includes(l))})),a.items=[...e.items],a.value=u,e.items.some(s=>s.visibleInMenu)&&u.length>=e["min-chars"]?a.openMenu():a.closeMenu()},m=u=>{const a=document.querySelector("modus-wc-autocomplete");a&&(e.items=e.items.map(l=>({...l,selected:l.value===u.value,focused:!1})),a.items=[...e.items],a.value=u.label,a.closeMenu())};return b`
      <style>
        div[id^='story--components-forms-autocomplete--custom-event-handlers'] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Custom handlers autocomplete"
        ?bordered=${e.bordered}
        custom-class=${t(e["custom-class"])}
        debounce-ms=${t(e["debounce-ms"])}
        ?disabled=${e.disabled}
        ?include-clear=${e["include-clear"]}
        ?include-search=${e["include-search"]}
        input-id=${t(e["input-id"])}
        input-tab-index=${t(e["input-tab-index"])}
        .items=${e.items}
        label="Fruit with custom handlers"
        ?leave-menu-open=${e["leave-menu-open"]}
        min-chars=${e["min-chars"]}
        ?multi-select=${!1}
        name=${t(e.name)}
        .noResults=${e["no-results"]}
        placeholder="Type to search fruits..."
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        ?show-menu-on-focus=${e["show-menu-on-focus"]}
        ?show-spinner=${e["show-spinner"]}
        size=${t(e.size)}
        value=${e.value}
        .customKeyDown=${c}
        .customInputChange=${h}
        .customItemSelect=${m}
      ></modus-wc-autocomplete>
    `},args:{bordered:!0,"debounce-ms":300,disabled:!1,"include-clear":!0,"include-search":!0,items:v,"leave-menu-open":!1,"min-chars":0,"no-results":{label:"No results found",subLabel:"Try searching for a different fruit"},placeholder:"Search fruits...","read-only":!1,required:!1,"show-menu-on-focus":!0,"show-spinner":!1,size:"md",value:""},parameters:{docs:{description:{story:`This example demonstrates how to use custom event handlers to completely override the default autocomplete behavior.
        
The \`customKeyDown\`, \`customInputChange\`, and \`customItemSelect\` props allow you to implement your own logic for:
- Keyboard navigation and interaction
- Input filtering and search
- Item selection handling

This is useful when you need specialized behavior that differs from the standard autocomplete functionality.`}}}},M={args:{...ee.args,items:v},render:e=>{const c=async()=>{const n=document.getElementById("programmatic-autocomplete");if(n){const i=v.find(d=>d.value==="apple")||null;await n.selectItem(i)}},h=async()=>{const n=document.getElementById("programmatic-autocomplete");n&&await n.selectItem(null)},m=async()=>{const n=document.getElementById("programmatic-autocomplete");n&&await n.openMenu()},u=async()=>{const n=document.getElementById("programmatic-autocomplete");n&&await n.closeMenu()},a=async()=>{const n=document.getElementById("programmatic-autocomplete");n&&await n.toggleMenu()},l=async()=>{const n=document.getElementById("programmatic-autocomplete");n&&await n.focusInput()},o=async()=>{const n=document.getElementById("programmatic-autocomplete");n&&await n.clearInput()},s=window;return s.handleSelectApple=c,s.handleSelectNull=h,s.handleOpenMenu=m,s.handleCloseMenu=u,s.handleToggleMenu=a,s.handleFocusInput=l,s.handleClearInput=o,b`
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

        `}}}},$={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>b`<div></div>`};var D,k,z;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template
}`,...(z=(k=w.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var P,q,H;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var B,R,F;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(R=I.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var O,N,j;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
  .no-results=\${args['no-results']}
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
}`,...(j=(N=y.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var W,K,U;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=(K=x.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var V,J,_;M.parameters={...M.parameters,docs:{...(V=M.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(J=M.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var G,Q,X;$.parameters={...$.parameters,docs:{...(G=$.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(Q=$.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ie=["Default","MultiSelect","WithSpinner","CustomMenuItems","CustomEventHandlers","WithProgrammaticControl","Migration"];export{x as CustomEventHandlers,y as CustomMenuItems,w as Default,$ as Migration,g as MultiSelect,M as WithProgrammaticControl,I as WithSpinner,ie as __namedExportsOrder,ee as default};
