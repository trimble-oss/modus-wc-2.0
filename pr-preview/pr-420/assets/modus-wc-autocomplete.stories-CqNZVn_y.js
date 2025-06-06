import{w as _}from"./decorator-D4YmxizW.js";import{x as v}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var C=Object.freeze,K=Object.defineProperty,y=(e,d)=>C(K(e,"raw",{value:C(e.slice())})),E,M,T,S;const f=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!0}],Y={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:f,label:"Label","leave-menu-open":!1,"min-chars":0,"multi-select":!1,"show-spinner":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[_],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},W={render:e=>{const d=o=>{const t=o.target.closest("modus-wc-autocomplete");if(!t)return;e.initialNavigation===void 0&&(e.initialNavigation=!0),["ArrowDown","ArrowUp","Enter","Escape"].includes(o.key)&&o.preventDefault();const s=e.items.filter(i=>i.visibleInMenu&&!i.disabled);switch(o.key){case"Escape":e.items=e.items.map(i=>({...i,focused:!1})),e.initialNavigation=!0,t.items=[...e.items];return;case"ArrowDown":if(e.initialNavigation){e.initialNavigation=!1;return}else{const i=s.findIndex(l=>l.focused),n=i<0?0:Math.min(i+1,s.length-1);e.items=e.items.map(l=>{var c;return{...l,focused:((c=s[n])==null?void 0:c.value)===l.value}})}break;case"ArrowUp":if(e.initialNavigation){e.initialNavigation=!1;return}else{const i=s.findIndex(l=>l.focused),n=i<0?s.length-1:Math.max(i-1,0);e.items=e.items.map(l=>{var c;return{...l,focused:((c=s[n])==null?void 0:c.value)===l.value}})}break;case"Enter":{const i=s.find(n=>n.focused);i&&(e.items=e.items.map(n=>({...n,selected:n.value===i.value,focused:!1})),t.value=i.label,e.initialNavigation=!0);break}default:return}t.items=[...e.items]},p=o=>{var s;if(!((s=o.detail)!=null&&s.target))return;const t=o.target.closest("modus-wc-autocomplete");if(t){const i=o.detail.target,n=i.value.toLowerCase();e.items=e.items.map(l=>({...l,visibleInMenu:l.label.toLowerCase().includes(n),focused:!1,selected:n?l.selected:!1})),t.items=[...e.items],t.value=i.value}},m=()=>{e.initialNavigation=!0,e.items=e.items.map(o=>({...o,focused:!1,visibleInMenu:!0}))},u=o=>{const t=o.target.closest("modus-wc-autocomplete");if(t){const s=o.detail.label;s&&(t.value=s),e.items.forEach(n=>n.selected=!1);const i=e.items.find(n=>n.value===o.detail.value);i&&(i.selected=!0,t.items=[...e.items])}};return v(E||(E=y([`
      <style>
        div[id^='story--components-forms-autocomplete--default'] {
          height: 400px;
        }
      </style>
      <script>
          const handleKeyDown = (e: KeyboardEvent) => {
          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          );
          if (!autocomplete) return;

          // Initialize initialNavigation if undefined
          if (args.initialNavigation === undefined) {
            args.initialNavigation = true;
          }

          // Prevent default for navigation keys
          if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
            e.preventDefault();
          }

          const visibleItems = args.items.filter(
            (item) => item.visibleInMenu && !item.disabled
          );

          switch (e.key) {
            case 'Escape':
              args.items = args.items.map((item) => ({
                ...item,
                focused: false,
              }));
              args.initialNavigation = true;
              autocomplete.items = [...args.items];
              return;

            case 'ArrowDown':
              if (args.initialNavigation) {
                args.initialNavigation = false;
                return;
              } else {
                const currentIndex = visibleItems.findIndex((item) => item.focused);
                const nextIndex =
                  currentIndex < 0
                    ? 0
                    : Math.min(currentIndex + 1, visibleItems.length - 1);
                args.items = args.items.map((item) => ({
                  ...item,
                  focused: visibleItems[nextIndex]?.value === item.value,
                }));
              }
              break;

            case 'ArrowUp':
              if (args.initialNavigation) {
                args.initialNavigation = false;
                return;
              } else {
                const currentIndex = visibleItems.findIndex((item) => item.focused);
                const prevIndex =
                  currentIndex < 0
                    ? visibleItems.length - 1
                    : Math.max(currentIndex - 1, 0);
                args.items = args.items.map((item) => ({
                  ...item,
                  focused: visibleItems[prevIndex]?.value === item.value,
                }));
              }
              break;

            case 'Enter': {
              const focusedItem = visibleItems.find((item) => item.focused);
              if (focusedItem) {
                args.items = args.items.map((item) => ({
                  ...item,
                  selected: item.value === focusedItem.value,
                  focused: false,
                }));
                autocomplete.value = focusedItem.label;
                args.initialNavigation = true;
              }
              break;
            }

            default:
              return;
          }

          autocomplete.items = [...args.items];
        };

        const handleInputChange = (e: CustomEvent<Event>) => {
          if (!e.detail?.target) return;

          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          );

          if (autocomplete) {
            const input = e.detail.target as HTMLInputElement;
            const searchText = input.value.toLowerCase();

            args.items = args.items.map((item) => ({
              ...item,
              visibleInMenu: item.label.toLowerCase().includes(searchText),
              focused: false,
              selected: searchText ? item.selected : false,
            }));

            autocomplete.items = [...args.items];
            autocomplete.value = input.value;
          }
        };

        const handleBlur = () => {
          args.initialNavigation = true;
          args.items = args.items.map((item) => ({
            ...item,
            focused: false,
            visibleInMenu: true,
          }));
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

            // Clear the previous selection.
            args.items.forEach((item) => (item.selected = false));

            // Mark the user selected menu item as selected and create a new array to update items.
            const foundItem = args.items.find((item) => item.value === e.detail.value);
            if (foundItem) {
              foundItem.selected = true;
              autocomplete.items = [...args.items];
            }
          }
        };
      <\/script>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
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
        placeholder=`,`
        ?read-only=`,`
        ?required=`,`
        ?show-spinner=`,`
        size=`,`
        value=`,`
        @inputChange=`,`
        @itemSelect=`,`
        @inputBlur=`,`
        @keydown=`,`
      ></modus-wc-autocomplete>
    `])),e.bordered,a(e["custom-class"]),a(e["debounce-ms"]),e.disabled,a(e["input-id"]),a(e["input-tab-index"]),e.items,a(e.label),e["leave-menu-open"],e["min-chars"],!1,a(e.name),e["no-results"],a(e.placeholder),e["read-only"],e.required,e["show-spinner"],a(e.size),e.value,p,u,m,d)}},h={...W},b={render:e=>{(!e.items||e.items.length===0)&&(e.items=[...f]);const d=t=>{const s=t.target.closest("modus-wc-autocomplete");s&&(e.items=e.items.map(i=>i.value===t.detail.value?{...i,selected:!1}:i),s.items=[...e.items])},p=t=>{var i;if(!((i=t.detail)!=null&&i.target))return;const s=t.target.closest("modus-wc-autocomplete");if(s){const n=t.detail.target,l=n.value.toLowerCase(),c=e.items.map(r=>({...r,visibleInMenu:r.label.toLowerCase().includes(l),focused:!1}));e.items=c,s.items=[...e.items],s.value=n.value,s.value&&(e.initialNavigation=!1)}},m=()=>{e.initialNavigation=!0,e.items=e.items.map(t=>({...t,focused:!1,visibleInMenu:!0}))},u=t=>{const s=t.target.closest("modus-wc-autocomplete");s&&(e.items=e.items.map(i=>i.value===t.detail.value?{...i,selected:!0}:i),s.items=[...e.items],s.value="")},o=t=>{const s=t.target.closest("modus-wc-autocomplete");if(!s)return;e.initialNavigation===void 0&&(e.initialNavigation=!0),["ArrowDown","ArrowUp","Enter"].includes(t.key)&&t.preventDefault();const i=e.items.filter(n=>n.visibleInMenu&&!n.disabled);switch(t.target.value!==s.value&&(e.initialNavigation=!0),t.key){case"Escape":e.items=e.items.map(n=>({...n,focused:!1})),e.initialNavigation=!0,s.items=[...e.items];return;case"ArrowDown":if(e.initialNavigation){e.initialNavigation=!1;return}else{const n=i.findIndex(c=>c.focused),l=n<0?0:Math.min(n+1,i.length-1);e.items=e.items.map(c=>{var r;return{...c,focused:((r=i[l])==null?void 0:r.value)===c.value}})}break;case"ArrowUp":if(e.initialNavigation){e.initialNavigation=!1;return}else{const n=i.findIndex(c=>c.focused),l=n<0?i.length-1:Math.max(n-1,0);e.items=e.items.map(c=>{var r;return{...c,focused:((r=i[l])==null?void 0:r.value)===c.value}})}break;case"Enter":{const n=i.find(l=>l.focused);n&&(e.items=e.items.map(l=>({...l,selected:l.value===n.value?!l.selected:l.selected,focused:!1})),s.value="",e.initialNavigation=!0);break}default:return}s.items=[...e.items]};return v(M||(M=y([`
      <style>
        div#story--components-forms-autocomplete--multi-select-inner {
          height: 400px;
        }
      </style>
      <script>
              // Initialize args.items if empty
              if (!args.items || args.items.length === 0) {
                args.items = [...items];
              }

              const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
                const autocomplete = (e.target as HTMLInputElement).closest(
                  'modus-wc-autocomplete'
                );

                if (autocomplete) {
                  args.items = args.items.map((item) =>
                    item.value === e.detail.value ? { ...item, selected: false } : item
                  );
                  autocomplete.items = [...args.items];
                }
              };

              const handleInputChange = (e: CustomEvent<Event>) => {
                if (!e.detail?.target) return;

                const autocomplete = (e.target as HTMLInputElement).closest(
                  'modus-wc-autocomplete'
                );

                if (autocomplete) {
                  const input = e.detail.target as HTMLInputElement;
                  const searchText = input.value.toLowerCase();

                  const updatedItems = args.items.map((item) => ({
                    ...item,
                    visibleInMenu: item.label.toLowerCase().includes(searchText),
                    focused: false,
                  }));

                  args.items = updatedItems;
                  autocomplete.items = [...args.items];
                  autocomplete.value = input.value;
                  if (autocomplete.value) {
                    args.initialNavigation = false;
                  }
                }
              };

              const handleBlur = () => {
                args.initialNavigation = true;
                args.items = args.items.map((item) => ({
                  ...item,
                  focused: false,
                  visibleInMenu: true,
                }));
              };

              const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
                const autocomplete = (e.target as HTMLInputElement).closest(
                  'modus-wc-autocomplete'
                );

          if (autocomplete) {
            // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
            autocomplete.value = '';
            autocomplete.items = items.map((item) => ({
              ...item,
              visibleInMenu: true,
            }));

            // Mark the user selected item as selected.
            const fruit = items.find((fruit) => fruit.value === e.detail.value);
            if (fruit) {
              fruit.selected = true;
            }
          }
        };
      <\/script>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
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
        placeholder=`,`
        ?read-only=`,`
        ?required=`,`
        size=`,`
        value=`,`
        @chipRemove=`,`
        @inputChange=`,`
        @itemSelect=`,`
        @inputBlur=`,`
        @keydown=`,`
      ></modus-wc-autocomplete>
    `])),e.bordered,a(e["custom-class"]),a(e["debounce-ms"]),e.disabled,a(e["input-id"]),a(e["input-tab-index"]),e.items,a(e.label),e["leave-menu-open"],e["min-chars"],!0,a(e.name),e["no-results"],a(e.placeholder),e["read-only"],e.required,a(e.size),e.value,d,p,u,m,o)}},g={render:e=>{const d=m=>{var o;if(!((o=m.detail)!=null&&o.target))return;const u=m.target.closest("modus-wc-autocomplete");if(u){const t=m.detail.target,s=t.value.toLowerCase();setTimeout(()=>{u.showSpinner=!1},2e3),u.showSpinner=!0;const i=f.map(n=>({...n,selected:s?n.selected:!1,visibleInMenu:n.label.toLowerCase().includes(s)}));u.items=[...i],u.value=t.value}},p=m=>{const u=m.target.closest("modus-wc-autocomplete");if(u){const o=m.detail.label;o&&(u.value=o),f.forEach(s=>s.selected=!1);const t=f.find(s=>s.value===m.detail.value);t&&(t.selected=!0,u.items=[...f])}};return v(T||(T=y([`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--default"] {
    height: 400px;
  }
</style>
<script>
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        // show the spinner for 2 seconds
        setTimeout(() => {
          autocomplete.showSpinner = false;
        }, 2000);

        autocomplete.showSpinner = true;
        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map((item) => ({
          ...item,
          selected: searchText ? item.selected : false,
          visibleInMenu: item.label.toLowerCase().includes(searchText),
        }));

        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...updatedItems];
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

        // Clear the previous selection.
        items.forEach((item) => (item.selected = false));

        // Mark the user selected menu item as selected and create a new array to update items.
        const foundItem = items.find((item) => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = true;
          autocomplete.items = [...items];
        }
      }
    };
<\/script>
<modus-wc-autocomplete
  aria-label="Fruit autocomplete"
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
  ?show-spinner=`,`
  size=`,`
  value=`,`
  @inputChange=`,`
  @itemSelect=`,`
></modus-wc-autocomplete>
    `])),e.bordered,a(e["custom-class"]),a(e["debounce-ms"]),e.disabled,a(e["input-id"]),a(e["input-tab-index"]),e.items,a(e.label),e["leave-menu-open"],e["min-chars"],!1,a(e.name),a(e.placeholder),e["read-only"],e.required,e["show-spinner"],a(e.size),e.value,d,p)}},I={render:e=>{const d=e["no-results"];e["leave-menu-open"]==!0&&(e["no-results"]={ariaLabel:"",label:"",subLabel:""});const p=o=>{var s;if(!((s=o.detail)!=null&&s.target))return;const t=o.target.closest("modus-wc-autocomplete");if(t){const i=o.detail.target.value,n=t==null?void 0:t.querySelectorAll("li");i===""&&(n==null||n.forEach(c=>c.classList.remove("selected")));let l=0;Array.from(n??[]).forEach(c=>{var x,L;(((L=(x=c.querySelector(".title"))==null?void 0:x.textContent)==null?void 0:L.toLowerCase())||"").includes(i.toLowerCase())?(c.classList.remove("hidden"),t.noResults={ariaLabel:"",label:"",subLabel:""}):(c.classList.add("hidden"),l++,l===(n==null?void 0:n.length)&&(t.noResults=d))})}},m=o=>{const t=o.target.closest("modus-wc-autocomplete");t&&(t.noResults={ariaLabel:"",label:"",subLabel:""})},u=o=>{var s;const t=o.target.closest("modus-wc-autocomplete");if(t){const i=(s=o.detail.target)==null?void 0:s.value;t.value=i;const n=t==null?void 0:t.querySelectorAll("li");n==null||n.forEach(l=>l.classList.remove("selected")),n==null||n.forEach(l=>{var c;l.contains(o.target)&&(l.classList.add("selected"),t.value=(c=l.querySelector(".title"))==null?void 0:c.textContent)})}};return v(S||(S=y([`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--custom-menu-items"] {
    height: 400px;
  }
  .list-item {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid #ccc;
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
<script>
    const temp = args['no-results'];
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
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement).value;

        // Create a new array, updating the selected values.
        const allLiItems = autocomplete?.querySelectorAll('li');
        if (searchText === '') {
          allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
        }
        let itemCount = 0;
        Array.from(allLiItems ?? []).forEach((menuItem) => {
          const label =
            menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
          if (!label.includes(searchText.toLowerCase())) {
            menuItem.classList.add('hidden');
            itemCount++;
            if (itemCount === allLiItems?.length) {
              autocomplete.noResults = temp;
            }
          } else {
            menuItem.classList.remove('hidden');
            autocomplete.noResults = {
              ariaLabel: '',
              label: '',
              subLabel: '',
            };
          }
        });
      }
    };
    const handleFocus = (e) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        autocomplete.noResults = {
          ariaLabel: '',
          label: '',
          subLabel: '',
        };
      }
    };

    const handleItemSelect = (e) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement)?.value;

        autocomplete.value = searchText;

        const allLiItems = autocomplete?.querySelectorAll('li');
        allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
        allLiItems?.forEach((liItem) => {
          if (liItem.contains(e.target as HTMLElement)) {
            liItem.classList.add('selected');
            autocomplete.value = liItem.querySelector('.title')
              ?.textContent as string;
          }
        });
      }
    };
<\/script>
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
  @inputFocus=`,`
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
          <div class="description">Description</div>
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
          <div class="description">Description</div>
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
          <div class="description">Description</div>
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
          src="https://cdn-icons-png.flaticon.com/512/1420/1420462.png"
          alt="Project 4"
        />
        <div>
          <div class="title">Project 4</div>
          <div class="description">Description</div>
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
          src="https://cdn-icons-png.flaticon.com/512/12959/12959935.png"
          alt="Project 5"
        />
        <div>
          <div class="title">Project 5</div>
          <div class="description">Description</div>
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
`])),e.bordered,a(e["custom-class"]),a(e["debounce-ms"]),e.disabled,a(e["input-id"]),a(e["input-tab-index"]),a(e.label),e["leave-menu-open"],e["min-chars"],!1,a(e.name),e["no-results"],a(e.placeholder),e["read-only"],e.required,a(e.size),e.value,m,p,u,!0,a(e.size),u,!0,a(e.size),u,!0,a(e.size),u,!0,a(e.size),u,!0,a(e.size))}},w={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>v`<div></div>`};var $,k,N;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Template
}`,...(N=(k=h.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var D,z,A;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    // Initialize args.items if empty
    if (!args.items || args.items.length === 0) {
      args.items = [...items];
    }
    const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        args.items = args.items.map(item => item.value === e.detail.value ? {
          ...item,
          selected: false
        } : item);
        autocomplete.items = [...args.items];
      }
    };
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        const updatedItems = args.items.map(item => ({
          ...item,
          visibleInMenu: item.label.toLowerCase().includes(searchText),
          focused: false
        }));
        args.items = updatedItems;
        autocomplete.items = [...args.items];
        autocomplete.value = input.value;
        if (autocomplete.value) {
          args.initialNavigation = false;
        }
      }
    };
    const handleBlur = () => {
      args.initialNavigation = true;
      args.items = args.items.map(item => ({
        ...item,
        focused: false,
        visibleInMenu: true
      }));
    };
    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        args.items = args.items.map(item => item.value === e.detail.value ? {
          ...item,
          selected: true
        } : item);
        autocomplete.items = [...args.items];
        autocomplete.value = '';
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (!autocomplete) return;

      // Initialize initialNavigation if undefined
      if (args.initialNavigation === undefined) {
        args.initialNavigation = true;
      }

      // Prevent default for navigation keys
      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) {
        e.preventDefault();
      }
      const visibleItems = args.items.filter(item => item.visibleInMenu && !item.disabled);
      // Reset initial navigation when input value changes
      if ((e.target as HTMLInputElement).value !== autocomplete.value) {
        args.initialNavigation = true;
      }
      switch (e.key) {
        case 'Escape':
          args.items = args.items.map(item => ({
            ...item,
            focused: false
          }));
          args.initialNavigation = true;
          autocomplete.items = [...args.items];
          return;
        case 'ArrowDown':
          if (args.initialNavigation) {
            // On first arrow press, skip selection
            args.initialNavigation = false;
            return;
          } else {
            // Normal navigation
            const currentFocusedIndex = visibleItems.findIndex(item => item.focused);
            const nextIndex = currentFocusedIndex < 0 ? 0 : Math.min(currentFocusedIndex + 1, visibleItems.length - 1);
            args.items = args.items.map(item => ({
              ...item,
              focused: visibleItems[nextIndex]?.value === item.value
            }));
          }
          break;
        case 'ArrowUp':
          if (args.initialNavigation) {
            // On first arrow press, skip selection
            args.initialNavigation = false;
            return;
          } else {
            // Normal navigation
            const currentFocusedIndex = visibleItems.findIndex(item => item.focused);
            const prevIndex = currentFocusedIndex < 0 ? visibleItems.length - 1 : Math.max(currentFocusedIndex - 1, 0);
            args.items = args.items.map(item => ({
              ...item,
              focused: visibleItems[prevIndex]?.value === item.value
            }));
          }
          break;
        case 'Enter':
          {
            const focusedItem = visibleItems.find(item => item.focused);
            if (focusedItem) {
              args.items = args.items.map(item => ({
                ...item,
                selected: item.value === focusedItem.value ? !item.selected : item.selected,
                focused: false
              }));
              autocomplete.value = '';
              args.initialNavigation = true; // Reset for next interaction
            }
            break;
          }
        default:
          return;
      }
      autocomplete.items = [...args.items];
    };
    return html\`
      <style>
        div#story--components-forms-autocomplete--multi-select-inner {
          height: 400px;
        }
      </style>
      <script>
              // Initialize args.items if empty
              if (!args.items || args.items.length === 0) {
                args.items = [...items];
              }

              const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
                const autocomplete = (e.target as HTMLInputElement).closest(
                  'modus-wc-autocomplete'
                );

                if (autocomplete) {
                  args.items = args.items.map((item) =>
                    item.value === e.detail.value ? { ...item, selected: false } : item
                  );
                  autocomplete.items = [...args.items];
                }
              };

              const handleInputChange = (e: CustomEvent<Event>) => {
                if (!e.detail?.target) return;

                const autocomplete = (e.target as HTMLInputElement).closest(
                  'modus-wc-autocomplete'
                );

                if (autocomplete) {
                  const input = e.detail.target as HTMLInputElement;
                  const searchText = input.value.toLowerCase();

                  const updatedItems = args.items.map((item) => ({
                    ...item,
                    visibleInMenu: item.label.toLowerCase().includes(searchText),
                    focused: false,
                  }));

                  args.items = updatedItems;
                  autocomplete.items = [...args.items];
                  autocomplete.value = input.value;
                  if (autocomplete.value) {
                    args.initialNavigation = false;
                  }
                }
              };

              const handleBlur = () => {
                args.initialNavigation = true;
                args.items = args.items.map((item) => ({
                  ...item,
                  focused: false,
                  visibleInMenu: true,
                }));
              };

              const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
                const autocomplete = (e.target as HTMLInputElement).closest(
                  'modus-wc-autocomplete'
                );

          if (autocomplete) {
            // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
            autocomplete.value = '';
            autocomplete.items = items.map((item) => ({
              ...item,
              visibleInMenu: true,
            }));

            // Mark the user selected item as selected.
            const fruit = items.find((fruit) => fruit.value === e.detail.value);
            if (fruit) {
              fruit.selected = true;
            }
          }
        };
      <\/script>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
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
        ?multi-select=\${true}
        name=\${ifDefined(args.name)}
        .noResults=\${args['no-results']}
        placeholder=\${ifDefined(args.placeholder)}
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        value=\${args.value}
        @chipRemove=\${handleChipRemove}
        @inputChange=\${handleInputChange}
        @itemSelect=\${handleItemSelect}
        @inputBlur=\${handleBlur}
        @keydown=\${handleKeyDown}
      ></modus-wc-autocomplete>
    \`;
  }
}`,...(A=(z=b.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var H,q,P;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        // show the spinner for 2 seconds
        setTimeout(() => {
          autocomplete.showSpinner = false;
        }, 2000);
        autocomplete.showSpinner = true;
        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map(item => ({
          ...item,
          selected: searchText ? item.selected : false,
          visibleInMenu: item.label.toLowerCase().includes(searchText)
        }));

        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...updatedItems];
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

        // Clear the previous selection.
        items.forEach(item => item.selected = false);

        // Mark the user selected menu item as selected and create a new array to update items.
        const foundItem = items.find(item => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = true;
          autocomplete.items = [...items];
        }
      }
    };

    // prettier-ignore
    return html\`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--default"] {
    height: 400px;
  }
</style>
<script>
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        // show the spinner for 2 seconds
        setTimeout(() => {
          autocomplete.showSpinner = false;
        }, 2000);

        autocomplete.showSpinner = true;
        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map((item) => ({
          ...item,
          selected: searchText ? item.selected : false,
          visibleInMenu: item.label.toLowerCase().includes(searchText),
        }));

        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...updatedItems];
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

        // Clear the previous selection.
        items.forEach((item) => (item.selected = false));

        // Mark the user selected menu item as selected and create a new array to update items.
        const foundItem = items.find((item) => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = true;
          autocomplete.items = [...items];
        }
      }
    };
<\/script>
<modus-wc-autocomplete
  aria-label="Fruit autocomplete"
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
  ?show-spinner=\${args['show-spinner']}
  size=\${ifDefined(args.size)}
  value=\${args.value}
  @inputChange=\${handleInputChange}
  @itemSelect=\${handleItemSelect}
></modus-wc-autocomplete>
    \`;
  }
}`,...(P=(q=g.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var R,F,j;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const temp = args['no-results'];
    if (args['leave-menu-open'] == true) {
      args['no-results'] = {
        ariaLabel: '',
        label: '',
        subLabel: ''
      };
    }
    const handleInputChange = e => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement).value;

        // Create a new array, updating the selected values.
        const allLiItems = autocomplete?.querySelectorAll('li');
        if (searchText === '') {
          allLiItems?.forEach(liItem => liItem.classList.remove('selected'));
        }
        let itemCount = 0;
        Array.from(allLiItems ?? []).forEach(menuItem => {
          const label = menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
          if (!label.includes(searchText.toLowerCase())) {
            menuItem.classList.add('hidden');
            itemCount++;
            if (itemCount === allLiItems?.length) {
              autocomplete.noResults = temp;
            }
          } else {
            menuItem.classList.remove('hidden');
            autocomplete.noResults = {
              ariaLabel: '',
              label: '',
              subLabel: ''
            };
          }
        });
      }
    };
    const handleFocus = e => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        autocomplete.noResults = {
          ariaLabel: '',
          label: '',
          subLabel: ''
        };
      }
    };
    const handleItemSelect = e => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement)?.value;
        autocomplete.value = searchText;
        const allLiItems = autocomplete?.querySelectorAll('li');
        allLiItems?.forEach(liItem => liItem.classList.remove('selected'));
        allLiItems?.forEach(liItem => {
          if (liItem.contains(e.target as HTMLElement)) {
            liItem.classList.add('selected');
            autocomplete.value = liItem.querySelector('.title')?.textContent as string;
          }
        });
      }
    };

    // prettier-ignore
    return html\`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--custom-menu-items"] {
    height: 400px;
  }
  .list-item {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid #ccc;
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
<script>
    const temp = args['no-results'];
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
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement).value;

        // Create a new array, updating the selected values.
        const allLiItems = autocomplete?.querySelectorAll('li');
        if (searchText === '') {
          allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
        }
        let itemCount = 0;
        Array.from(allLiItems ?? []).forEach((menuItem) => {
          const label =
            menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
          if (!label.includes(searchText.toLowerCase())) {
            menuItem.classList.add('hidden');
            itemCount++;
            if (itemCount === allLiItems?.length) {
              autocomplete.noResults = temp;
            }
          } else {
            menuItem.classList.remove('hidden');
            autocomplete.noResults = {
              ariaLabel: '',
              label: '',
              subLabel: '',
            };
          }
        });
      }
    };
    const handleFocus = (e) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        autocomplete.noResults = {
          ariaLabel: '',
          label: '',
          subLabel: '',
        };
      }
    };

    const handleItemSelect = (e) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement)?.value;

        autocomplete.value = searchText;

        const allLiItems = autocomplete?.querySelectorAll('li');
        allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
        allLiItems?.forEach((liItem) => {
          if (liItem.contains(e.target as HTMLElement)) {
            liItem.classList.add('selected');
            autocomplete.value = liItem.querySelector('.title')
              ?.textContent as string;
          }
        });
      }
    };
<\/script>
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
  @inputFocus=\${handleFocus}
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
          <div class="description">Description</div>
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
          <div class="description">Description</div>
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
          <div class="description">Description</div>
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
          src="https://cdn-icons-png.flaticon.com/512/1420/1420462.png"
          alt="Project 4"
        />
        <div>
          <div class="title">Project 4</div>
          <div class="description">Description</div>
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
          src="https://cdn-icons-png.flaticon.com/512/12959/12959935.png"
          alt="Project 5"
        />
        <div>
          <div class="title">Project 5</div>
          <div class="description">Description</div>
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
}`,...(j=(F=I.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var B,U,O;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(U=w.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};const Z=["Default","MultiSelect","WithSpinner","CustomMenuItems","Migration"];export{I as CustomMenuItems,h as Default,w as Migration,b as MultiSelect,g as WithSpinner,Z as __namedExportsOrder,Y as default};
