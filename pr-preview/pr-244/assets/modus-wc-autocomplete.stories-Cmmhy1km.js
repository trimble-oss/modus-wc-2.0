import{w as A}from"./decorator-Dt3Huotz.js";import{k as x}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const $=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!0}],S={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:$,label:"Label","min-chars":0,"multi-select":!1,size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[A],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},D={render:e=>{const m=o=>{["ArrowDown","ArrowUp","Enter"].includes(o.key)&&o.preventDefault();const i=o.target.closest("modus-wc-autocomplete");if(!i)return;let n=e.items.findIndex(t=>t.focused);if(n===-1&&(n=e.items.findIndex(t=>t.selected)),e.items=e.items.map(t=>({...t,focused:!1})),n===-1&&(o.key==="ArrowDown"||o.key==="ArrowUp")){if(o.key==="ArrowDown"){for(let t=0;t<e.items.length;t++)if(!e.items[t].disabled){n=t;break}}else for(let t=e.items.length-1;t>=0;t--)if(!e.items[t].disabled){n=t;break}}else if(o.key==="ArrowDown"&&n<e.items.length-1){let t=n+1;for(;t<e.items.length&&e.items[t].disabled;)t++;t<e.items.length&&(n=t)}else if(o.key==="ArrowUp"&&n>0){let t=n-1;for(;t>=0&&e.items[t].disabled;)t--;t>=0&&(n=t)}else if(o.key==="Enter"){n!==-1&&(e.items=e.items.map((t,s)=>({...t,selected:s===n})),i.items=[...e.items],i.value=e.items[n].label);return}e.items[n].focused=!0,i.items=[...e.items]},p=o=>{var n;if(!((n=o.detail)!=null&&n.target))return;const i=o.target.closest("modus-wc-autocomplete");if(i){const t=o.detail.target,s=t.value.toLowerCase(),l=$.map(u=>({...u,selected:s?u.selected:!1,visibleInMenu:u.label.toLowerCase().includes(s),focused:!1}));i.items=[...l],i.value=t.value}},f=o=>{const i=o.target.closest("modus-wc-autocomplete");if(i){const n=o.detail.label;n&&(i.value=n),e.items.forEach(s=>{s.selected=!1,s.focused=!1});const t=e.items.find(s=>s.value===o.detail.value);t&&(t.selected=!0,i.items=[...e.items])}};return x`
      <style>
        /* Only for Storybook */
        div[id^="story--components-forms-autocomplete--default"] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        debounce-ms=${a(e["debounce-ms"])}
        ?disabled=${e.disabled}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        .items=${e.items}
        label=${a(e.label)}
        min-chars=${e["min-chars"]}
        ?multi-select=${!1}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${a(e.size)}
        value=${e.value}
        @inputChange=${p}
        @itemSelect=${f}
        @keydown=${m}
      ></modus-wc-autocomplete>
    `}},r={...D},c={render:e=>{const m=i=>{const n=i.target.closest("modus-wc-autocomplete");if(n){const t=e.items.find(s=>s.value===i.detail.value);t&&(t.selected=!1,n.items=[...e.items])}},p=i=>{var t;if(!((t=i.detail)!=null&&t.target))return;const n=i.target.closest("modus-wc-autocomplete");if(n){const s=i.detail.target,l=s.value.toLowerCase(),u=e.items.map(d=>({...d,visibleInMenu:d.label.toLowerCase().includes(l),focused:!1}));n.items=[...u],n.value=s.value}},f=i=>{const n=i.target.closest("modus-wc-autocomplete");if(n){n.value="",n.items=e.items.map(s=>({...s,visibleInMenu:!0,focused:!1}));const t=e.items.find(s=>s.value===i.detail.value);t&&(t.selected=!0)}},o=i=>{["ArrowDown","ArrowUp","Enter"].includes(i.key)&&i.preventDefault();const n=i.target.closest("modus-wc-autocomplete");if(!n)return;const t=i.target;if(i.key==="Backspace"&&!t.value){const l=e.items.reduce((u,d,k)=>d.selected?k:u,-1);if(l!==-1){const u=new CustomEvent("chipRemove",{detail:e.items[l],bubbles:!0,composed:!0});i.target.dispatchEvent(u),n.items=[...e.items]}return}let s=e.items.findIndex(l=>l.focused);if(s===-1&&(s=e.items.findIndex(l=>l.selected)),e.items=e.items.map(l=>({...l,focused:!1})),s===-1&&(i.key==="ArrowDown"||i.key==="ArrowUp")){if(i.key==="ArrowDown"){for(let l=0;l<e.items.length;l++)if(!e.items[l].disabled){s=l;break}}else for(let l=e.items.length-1;l>=0;l--)if(!e.items[l].disabled){s=l;break}}else if(i.key==="ArrowDown"&&s<e.items.length-1){let l=s+1;for(;l<e.items.length&&e.items[l].disabled;)l++;l<e.items.length&&(s=l)}else if(i.key==="ArrowUp"&&s>0){let l=s-1;for(;l>=0&&e.items[l].disabled;)l--;l>=0&&(s=l)}else if(i.key==="Enter"){s!==-1&&(e.items[s].selected=!e.items[s].selected,n.items=[...e.items]);return}e.items[s].focused=!0,n.items=[...e.items]};return x`
      <style>
        /* Only for Storybook */
        div#story--components-forms-autocomplete--multi-select-inner {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        debounce-ms=${a(e["debounce-ms"])}
        ?disabled=${e.disabled}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        .items=${e.items}
        label=${a(e.label)}
        min-chars=${e["min-chars"]}
        ?multi-select=${!0}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${a(e.size)}
        value=${e.value}
        @chipRemove=${m}
        @inputChange=${p}
        @itemSelect=${f}
        @keydown=${o}
      ></modus-wc-autocomplete>
    `}};var h,b,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...(w=(b=r.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,I,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const foundItem = args.items.find(item => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = false;
          autocomplete.items = [...args.items];
        }
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

        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...updatedItems];
        autocomplete.value = input.value;
      }
    };
    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
        autocomplete.value = '';
        autocomplete.items = args.items.map(item => ({
          ...item,
          visibleInMenu: true,
          focused: false
        }));
        const fruit = args.items.find(fruit => fruit.value === e.detail.value);
        if (fruit) {
          fruit.selected = true;
        }
      }
    };

    // Attach the same external focus handler for multi-select.
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) {
        e.preventDefault();
      }
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (!autocomplete) return;
      const input = e.target as HTMLInputElement;
      // Check if Backspace is pressed and the input is empty
      if (e.key === 'Backspace' && !input.value) {
        // Find the last selected chip by its index
        const lastSelectedIndex = args.items.reduce((acc, item, index) => item.selected ? index : acc, -1);
        if (lastSelectedIndex !== -1) {
          // Create a custom event with the chip details.
          const chipRemoveEvent = new CustomEvent<IAutocompleteItem>('chipRemove', {
            detail: args.items[lastSelectedIndex],
            bubbles: true,
            composed: true
          });
          // Fire the chipRemove event, which will trigger handleChipRemove.
          (e.target as HTMLElement).dispatchEvent(chipRemoveEvent);
          // Update autocomplete items if needed.
          autocomplete.items = [...args.items];
        }
        return;
      }
      let currentIndex = args.items.findIndex(item => item.focused);
      if (currentIndex === -1) {
        // If no item is focused, try to focus the last selected item
        currentIndex = args.items.findIndex(item => item.selected);
      }

      // Reset focus for all items
      args.items = args.items.map(item => ({
        ...item,
        focused: false
      }));
      if (currentIndex === -1 && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        if (e.key === 'ArrowDown') {
          // Find first non-disabled item
          for (let i = 0; i < args.items.length; i++) {
            if (!args.items[i].disabled) {
              currentIndex = i;
              break;
            }
          }
        } else {
          // ArrowUp: find last non-disabled item
          for (let i = args.items.length - 1; i >= 0; i--) {
            if (!args.items[i].disabled) {
              currentIndex = i;
              break;
            }
          }
        }
      } else if (e.key === 'ArrowDown' && currentIndex < args.items.length - 1) {
        let newIndex = currentIndex + 1;
        // Skip disabled items
        while (newIndex < args.items.length && args.items[newIndex].disabled) {
          newIndex++;
        }
        if (newIndex < args.items.length) {
          currentIndex = newIndex;
        }
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        let newIndex = currentIndex - 1;
        // Skip disabled items
        while (newIndex >= 0 && args.items[newIndex].disabled) {
          newIndex--;
        }
        if (newIndex >= 0) {
          currentIndex = newIndex;
        }
      } else if (e.key === 'Enter') {
        if (currentIndex !== -1) {
          args.items[currentIndex].selected = !args.items[currentIndex].selected;
          autocomplete.items = [...args.items]; // Update component
        }
        return;
      }
      args.items[currentIndex].focused = true; // Set new focus
      autocomplete.items = [...args.items];
    };

    // prettier-ignore
    return html\`
      <style>
        /* Only for Storybook */
        div#story--components-forms-autocomplete--multi-select-inner {
          height: 400px;
        }
      </style>
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
        min-chars=\${args['min-chars']}
        ?multi-select=\${true}
        name=\${ifDefined(args.name)}
        placeholder=\${ifDefined(args.placeholder)}
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        value=\${args.value}
        @chipRemove=\${handleChipRemove}
        @inputChange=\${handleInputChange}
        @itemSelect=\${handleItemSelect}
        @keydown=\${handleKeyDown}
      ></modus-wc-autocomplete>
    \`;
  }
}`,...(y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const T=["Default","MultiSelect"];export{r as Default,c as MultiSelect,T as __namedExportsOrder,S as default};
