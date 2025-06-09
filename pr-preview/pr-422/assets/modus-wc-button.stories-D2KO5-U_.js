import{w as O}from"./decorator-D4YmxizW.js";import{x as n}from"./lit-element-C8zulti1.js";import{o as R}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const Q={title:"Components/Button",component:"modus-wc-button",args:{color:"primary",disabled:!1,"full-width":!1,pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},shape:{control:{type:"select"},options:["circle","rectangle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["borderless","filled","outlined"]}},decorators:[O],parameters:{actions:{handles:["buttonClick"]}}},j={render:t=>n`
<modus-wc-button
  aria-label="Click me button"
  color="${t.color}"
  custom-class="${R(t["custom-class"])}"
  ?disabled="${t.disabled}"
  ?full-width="${t["full-width"]}"
  ?pressed="${t.pressed}"
  shape="${t.shape}"
  size="${t.size}"
  type="${t.type}"
  variant="${t.variant}"
>
  Click me
</modus-wc-button>
    `},a={...j},d={render:()=>n`
<modus-wc-button
  aria-label="Circle button"
  shape="circle"
>
  Circle
</modus-wc-button>
<modus-wc-button
  aria-label="Square button"
  shape="square"
>
  Square
</modus-wc-button>
    `},c={render:()=>n`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},l={render:()=>n`
<modus-wc-button aria-label="Download button">
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    `},m={render:()=>n`
<modus-wc-button aria-label="Details button">
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    `},b={render:()=>n`
<modus-wc-button aria-label="Checkout button">
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `},p={render:()=>{const t={alignment:"center",period:"week",formatting:["italic"],options:["option1","option3"],sizes:{sm:"group",md:"group",lg:"group"}},o=(e,s)=>w=>{t[e]=s,console.log(`${e} selected:`,s);const i=w.target,u=i.closest(".button-group");u&&(u.querySelectorAll("modus-wc-button").forEach(K=>{K.removeAttribute("pressed")}),i.setAttribute("pressed","true"))},r=(e,s)=>w=>{const i=t[e],u=w.target;i.includes(s)?(t[e]=i.filter(v=>v!==s),u.removeAttribute("pressed")):(t[e]=[...i,s],u.setAttribute("pressed","true")),console.log(`${e} selected:`,t[e])};return n`
<style>
  .button-group {
    display: flex;
    gap: 0;
  }


  .button-group-horizontal {
    flex-direction: row;
  }
  
  .button-group-vertical {
    flex-direction: column;
    width: fit-content;
  }
  
  .button-group-spaced {
    gap: 8px;
  }
  
  .demo-section {
    margin-bottom: 48px;
  }
  
  .demo-section h4 {
    margin: 0 0 24px 0;
    font-size: 14px;
    font-weight: 600;
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .demo-row {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    margin-bottom: 24px;
  }

  .demo-row:last-child {
    margin-bottom: 0;
  }

  /* Pressed state styling for button groups */
  .button-group modus-wc-button[pressed] .modus-wc-btn {
    background-color: var(--modus-wc-color-trimble-blue) !important;
    color: var(--modus-wc-color-white) !important;
    border-color: var(--modus-wc-color-trimble-blue) !important;
  }

  /* Dark theme pressed state */
  [data-theme='modus-classic-dark'] .button-group modus-wc-button[pressed] .modus-wc-btn {
    background-color: var(--modus-wc-color-highlight-blue) !important;
    color: var(--modus-wc-color-gray-10) !important;
    border-color: var(--modus-wc-color-highlight-blue) !important;
  }

  /* Seamless horizontal button group appearance only */
  .button-group-horizontal:not(.button-group-spaced) modus-wc-button:not(:first-child) .modus-wc-btn {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .button-group-horizontal:not(.button-group-spaced) modus-wc-button:not(:last-child) .modus-wc-btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  /* Hover effects for pressed buttons */
  .button-group modus-wc-button[pressed] .modus-wc-btn:hover {
    background-color: var(--modus-wc-color-blue-light) !important;
    border-color: var(--modus-wc-color-blue-light) !important;
  }

  [data-theme='modus-classic-dark'] .button-group modus-wc-button[pressed] .modus-wc-btn:hover {
    background-color: var(--modus-wc-color-blue-light) !important;
    border-color: var(--modus-wc-color-blue-light) !important;
  }

</style>

<main>
<section class="demo-section">
  <h4>Vertical Button Groups</h4>
  
  <div class="demo-row">
      <div class="button-group button-group-vertical">
      <modus-wc-button 
        variant="borderless" 
        aria-label="Bold"
        full-width
        ?pressed=${t.formatting.includes("bold")}
        @buttonClick=${o("formatting","bold")}
      >
        <modus-wc-icon decorative name="play_circle"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button 
        variant="borderless" 
        aria-label="Italic"
        full-width
        ?pressed=${t.formatting.includes("italic")}
        @buttonClick=${o("formatting","italic")}
      >
        <modus-wc-icon decorative name="pause_circle"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button 
        variant="borderless" 
        aria-label="Underline"
        full-width
        ?pressed=${t.formatting.includes("underline")}
        @buttonClick=${o("formatting","underline")}
      >
        <modus-wc-icon decorative name="stop_circle"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </div>
  <div class="demo-row">
      <div class="button-group button-group-vertical">
      <modus-wc-button 
        variant="borderless" 
        aria-label="Bold"
        full-width
        ?pressed=${t.formatting.includes("bold")}
        @buttonClick=${r("formatting","bold")}
      >
        <modus-wc-icon decorative name="text_bold"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button 
        variant="borderless" 
        aria-label="Italic"
        full-width
        ?pressed=${t.formatting.includes("italic")}
        @buttonClick=${r("formatting","italic")}
      >
        <modus-wc-icon decorative name="text_italic"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button 
        variant="borderless" 
        aria-label="Underline"
        full-width
        ?pressed=${t.formatting.includes("underline")}
        @buttonClick=${r("formatting","underline")}
      >
        <modus-wc-icon decorative name="text_underlined"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </div>
    
 
</section>

<section class="demo-section">
  <h4>Horizontal Button Groups</h4>
  
  <div class="demo-row">
    <div class="button-group button-group-horizontal">
      <modus-wc-button 
        variant="outlined" 
        size="sm" 
        ?pressed=${t.period==="day"}
        @buttonClick=${o("period","day")}
      >
        Day
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=${t.period==="week"}
        @buttonClick=${o("period","week")}
      >
        Week
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=${t.period==="month"}
        @buttonClick=${o("period","month")}
      >
        Month
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=${t.period==="year"}
        @buttonClick=${o("period","year")}
      >
        Year
      </modus-wc-button>
    </div>
  </div>
  <div class="demo-row">
    <div class="button-group button-group-horizontal">
      <modus-wc-button 
        variant="outlined"
        ?pressed=${t.options.includes("option1")}
        @buttonClick=${r("options","option1")}
      >
        Bold
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined"
        ?pressed=${t.options.includes("option2")}
        @buttonClick=${r("options","option2")}
      >
        Italic
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined"
        ?pressed=${t.options.includes("option3")}
        @buttonClick=${r("options","option3")}
      >
        Underline
      </modus-wc-button>
    </div>
  </div>
</section>

<section class="demo-section">
  <h4>Different Sizes</h4>
  
  <div class="demo-row">
    <div class="button-group button-group-horizontal">
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=${t.sizes.sm==="small"}
        @buttonClick=${o("sizes.sm","small")}
      >
        Small
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=${t.sizes.sm==="group"}
        @buttonClick=${o("sizes.sm","group")}
      >
        Group
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=${t.sizes.sm==="example"}
        @buttonClick=${o("sizes.sm","example")}
      >
        Example
      </modus-wc-button>
    </div>
  </div>
  
  <div class="demo-row">
    <div class="button-group button-group-horizontal">
      <modus-wc-button 
        variant="outlined" 
        size="md"
        ?pressed=${t.sizes.md==="medium"}
        @buttonClick=${o("sizes.md","medium")}
      >
        Medium
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="md"
        ?pressed=${t.sizes.md==="group"}
        @buttonClick=${o("sizes.md","group")}
      >
        Group
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="md"
        ?pressed=${t.sizes.md==="example"}
        @buttonClick=${o("sizes.md","example")}
      >
        Example
      </modus-wc-button>
    </div>
  </div>
  
  <div class="demo-row">
    <div class="button-group button-group-horizontal">
      <modus-wc-button 
        variant="outlined" 
        size="lg"
        ?pressed=${t.sizes.lg==="large"}
        @buttonClick=${o("sizes.lg","large")}
      >
        Large
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="lg"
        ?pressed=${t.sizes.lg==="group"}
        @buttonClick=${o("sizes.lg","group")}
      >
        Group
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="lg"
        ?pressed=${t.sizes.lg==="example"}
        @buttonClick=${o("sizes.lg","example")}
      >
        Example
      </modus-wc-button>
    </div>
  </div>
</section>
</main>
    `}},g={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (`icon-only`, `left-icon`, `right-icon`). In 2.0, icons are added via slots using the `modus-wc-icon` component.\n  - The `button-style` property has been renamed to `variant` with similar options.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | `fill` → `filled`, `outline` → `outlined`           |\n| color           | color      | `dark` and `special` removed, `warning` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use `icon` slot                         |\n| left-icon       |            | Not carried over, use `icon` slot                         |\n| right-icon      |            | Not carried over, use `icon` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>n`<div></div>`};var h,f,$;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...($=(f=a.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var z,S,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button
  aria-label="Circle button"
  shape="circle"
>
  Circle
</modus-wc-button>
<modus-wc-button
  aria-label="Square button"
  shape="square"
>
  Square
</modus-wc-button>
    \`;
  }
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var y,C,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(x=(C=c.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var G,B,M;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Download button">
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    \`;
  }
}`,...(M=(B=l.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var E,A,I;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Details button">
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(I=(A=m.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var _,D,N;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Checkout button">
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(N=(D=b.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var q,H,L;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    // State to track button groups
    const buttonGroupState = {
      alignment: 'center',
      period: 'week',
      formatting: ['italic'],
      options: ['option1', 'option3'],
      sizes: {
        sm: 'group',
        md: 'group',
        lg: 'group'
      }
    };

    // Handler for single-select groups (radio behavior)
    const handleSingleSelect = (groupKey: string, value: string) => {
      return (e: CustomEvent) => {
        buttonGroupState[groupKey] = value;
        console.log(\`\${groupKey} selected:\`, value);
        // Force re-render by updating the DOM
        const button = e.target as HTMLElement;
        const group = button.closest('.button-group');
        if (group) {
          const buttons = group.querySelectorAll('modus-wc-button');
          buttons.forEach(btn => {
            btn.removeAttribute('pressed');
          });
          button.setAttribute('pressed', 'true');
        }
      };
    };

    // Handler for multi-select groups (checkbox behavior)
    const handleMultiSelect = (groupKey: string, value: string) => {
      return (e: CustomEvent) => {
        const currentArray = buttonGroupState[groupKey] as string[];
        const button = e.target as HTMLElement;
        if (currentArray.includes(value)) {
          buttonGroupState[groupKey] = currentArray.filter(v => v !== value);
          button.removeAttribute('pressed');
        } else {
          buttonGroupState[groupKey] = [...currentArray, value];
          button.setAttribute('pressed', 'true');
        }
        console.log(\`\${groupKey} selected:\`, buttonGroupState[groupKey]);
      };
    };
    // prettier-ignore
    return html\`
<style>
  .button-group {
    display: flex;
    gap: 0;
  }


  .button-group-horizontal {
    flex-direction: row;
  }
  
  .button-group-vertical {
    flex-direction: column;
    width: fit-content;
  }
  
  .button-group-spaced {
    gap: 8px;
  }
  
  .demo-section {
    margin-bottom: 48px;
  }
  
  .demo-section h4 {
    margin: 0 0 24px 0;
    font-size: 14px;
    font-weight: 600;
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .demo-row {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    margin-bottom: 24px;
  }

  .demo-row:last-child {
    margin-bottom: 0;
  }

  /* Pressed state styling for button groups */
  .button-group modus-wc-button[pressed] .modus-wc-btn {
    background-color: var(--modus-wc-color-trimble-blue) !important;
    color: var(--modus-wc-color-white) !important;
    border-color: var(--modus-wc-color-trimble-blue) !important;
  }

  /* Dark theme pressed state */
  [data-theme='modus-classic-dark'] .button-group modus-wc-button[pressed] .modus-wc-btn {
    background-color: var(--modus-wc-color-highlight-blue) !important;
    color: var(--modus-wc-color-gray-10) !important;
    border-color: var(--modus-wc-color-highlight-blue) !important;
  }

  /* Seamless horizontal button group appearance only */
  .button-group-horizontal:not(.button-group-spaced) modus-wc-button:not(:first-child) .modus-wc-btn {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .button-group-horizontal:not(.button-group-spaced) modus-wc-button:not(:last-child) .modus-wc-btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  /* Hover effects for pressed buttons */
  .button-group modus-wc-button[pressed] .modus-wc-btn:hover {
    background-color: var(--modus-wc-color-blue-light) !important;
    border-color: var(--modus-wc-color-blue-light) !important;
  }

  [data-theme='modus-classic-dark'] .button-group modus-wc-button[pressed] .modus-wc-btn:hover {
    background-color: var(--modus-wc-color-blue-light) !important;
    border-color: var(--modus-wc-color-blue-light) !important;
  }

</style>

<main>
<section class="demo-section">
  <h4>Vertical Button Groups</h4>
  
  <div class="demo-row">
      <div class="button-group button-group-vertical">
      <modus-wc-button 
        variant="borderless" 
        aria-label="Bold"
        full-width
        ?pressed=\${buttonGroupState.formatting.includes('bold')}
        @buttonClick=\${handleSingleSelect('formatting', 'bold')}
      >
        <modus-wc-icon decorative name="play_circle"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button 
        variant="borderless" 
        aria-label="Italic"
        full-width
        ?pressed=\${buttonGroupState.formatting.includes('italic')}
        @buttonClick=\${handleSingleSelect('formatting', 'italic')}
      >
        <modus-wc-icon decorative name="pause_circle"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button 
        variant="borderless" 
        aria-label="Underline"
        full-width
        ?pressed=\${buttonGroupState.formatting.includes('underline')}
        @buttonClick=\${handleSingleSelect('formatting', 'underline')}
      >
        <modus-wc-icon decorative name="stop_circle"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </div>
  <div class="demo-row">
      <div class="button-group button-group-vertical">
      <modus-wc-button 
        variant="borderless" 
        aria-label="Bold"
        full-width
        ?pressed=\${buttonGroupState.formatting.includes('bold')}
        @buttonClick=\${handleMultiSelect('formatting', 'bold')}
      >
        <modus-wc-icon decorative name="text_bold"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button 
        variant="borderless" 
        aria-label="Italic"
        full-width
        ?pressed=\${buttonGroupState.formatting.includes('italic')}
        @buttonClick=\${handleMultiSelect('formatting', 'italic')}
      >
        <modus-wc-icon decorative name="text_italic"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button 
        variant="borderless" 
        aria-label="Underline"
        full-width
        ?pressed=\${buttonGroupState.formatting.includes('underline')}
        @buttonClick=\${handleMultiSelect('formatting', 'underline')}
      >
        <modus-wc-icon decorative name="text_underlined"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </div>
    
 
</section>

<section class="demo-section">
  <h4>Horizontal Button Groups</h4>
  
  <div class="demo-row">
    <div class="button-group button-group-horizontal">
      <modus-wc-button 
        variant="outlined" 
        size="sm" 
        ?pressed=\${buttonGroupState.period === 'day'}
        @buttonClick=\${handleSingleSelect('period', 'day')}
      >
        Day
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=\${buttonGroupState.period === 'week'}
        @buttonClick=\${handleSingleSelect('period', 'week')}
      >
        Week
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=\${buttonGroupState.period === 'month'}
        @buttonClick=\${handleSingleSelect('period', 'month')}
      >
        Month
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=\${buttonGroupState.period === 'year'}
        @buttonClick=\${handleSingleSelect('period', 'year')}
      >
        Year
      </modus-wc-button>
    </div>
  </div>
  <div class="demo-row">
    <div class="button-group button-group-horizontal">
      <modus-wc-button 
        variant="outlined"
        ?pressed=\${buttonGroupState.options.includes('option1')}
        @buttonClick=\${handleMultiSelect('options', 'option1')}
      >
        Bold
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined"
        ?pressed=\${buttonGroupState.options.includes('option2')}
        @buttonClick=\${handleMultiSelect('options', 'option2')}
      >
        Italic
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined"
        ?pressed=\${buttonGroupState.options.includes('option3')}
        @buttonClick=\${handleMultiSelect('options', 'option3')}
      >
        Underline
      </modus-wc-button>
    </div>
  </div>
</section>

<section class="demo-section">
  <h4>Different Sizes</h4>
  
  <div class="demo-row">
    <div class="button-group button-group-horizontal">
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=\${buttonGroupState.sizes.sm === 'small'}
        @buttonClick=\${handleSingleSelect('sizes.sm', 'small')}
      >
        Small
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=\${buttonGroupState.sizes.sm === 'group'}
        @buttonClick=\${handleSingleSelect('sizes.sm', 'group')}
      >
        Group
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="sm"
        ?pressed=\${buttonGroupState.sizes.sm === 'example'}
        @buttonClick=\${handleSingleSelect('sizes.sm', 'example')}
      >
        Example
      </modus-wc-button>
    </div>
  </div>
  
  <div class="demo-row">
    <div class="button-group button-group-horizontal">
      <modus-wc-button 
        variant="outlined" 
        size="md"
        ?pressed=\${buttonGroupState.sizes.md === 'medium'}
        @buttonClick=\${handleSingleSelect('sizes.md', 'medium')}
      >
        Medium
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="md"
        ?pressed=\${buttonGroupState.sizes.md === 'group'}
        @buttonClick=\${handleSingleSelect('sizes.md', 'group')}
      >
        Group
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="md"
        ?pressed=\${buttonGroupState.sizes.md === 'example'}
        @buttonClick=\${handleSingleSelect('sizes.md', 'example')}
      >
        Example
      </modus-wc-button>
    </div>
  </div>
  
  <div class="demo-row">
    <div class="button-group button-group-horizontal">
      <modus-wc-button 
        variant="outlined" 
        size="lg"
        ?pressed=\${buttonGroupState.sizes.lg === 'large'}
        @buttonClick=\${handleSingleSelect('sizes.lg', 'large')}
      >
        Large
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="lg"
        ?pressed=\${buttonGroupState.sizes.lg === 'group'}
        @buttonClick=\${handleSingleSelect('sizes.lg', 'group')}
      >
        Group
      </modus-wc-button>
      <modus-wc-button 
        variant="outlined" 
        size="lg"
        ?pressed=\${buttonGroupState.sizes.lg === 'example'}
        @buttonClick=\${handleSingleSelect('sizes.lg', 'example')}
      >
        Example
      </modus-wc-button>
    </div>
  </div>
</section>
</main>
    \`;
  }
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var P,T,U;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (\\`icon-only\\`, \\`left-icon\\`, \\`right-icon\\`). In 2.0, icons are added via slots using the \\`modus-wc-icon\\` component.\n  - The \\`button-style\\` property has been renamed to \\`variant\\` with similar options.\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | \\`fill\\` → \\`filled\\`, \\`outline\\` → \\`outlined\\`           |\n| color           | color      | \\`dark\\` and \\`special\\` removed, \\`warning\\` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use \\`icon\\` slot                         |\n| left-icon       |            | Not carried over, use \\`icon\\` slot                         |\n| right-icon      |            | Not carried over, use \\`icon\\` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(U=(T=g.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const X=["Default","ButtonShapes","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton","ButtonGroup","Migration"];export{p as ButtonGroup,d as ButtonShapes,a as Default,b as IconLeftAndRightButton,l as IconLeftButton,c as IconOnlyButton,m as IconRightButton,g as Migration,X as __namedExportsOrder,Q as default};
