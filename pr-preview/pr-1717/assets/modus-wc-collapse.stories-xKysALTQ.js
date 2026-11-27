import{w as P}from"./decorator-Cv9na35H.js";import{b as a}from"./lit-element-DgBvYnzn.js";import{o}from"./if-defined-BnVFTJ4o.js";import{c as _}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var u=Object.freeze,$=Object.defineProperty,h=(e,s)=>u($(e,"raw",{value:u(e.slice())})),m,b,v;const z={title:"Collapse Title",description:"Collapse description",icon:"alert",iconAriaLabel:"Alert"},D={title:"Collapse Title",description:"Collapse description",endIcon:"more_vertical",endIconAriaLabel:"More actions",icon:"alert",iconAriaLabel:"Alert",startIcon:"alert",startIconAriaLabel:"alert"},F={title:"Components/Collapse",component:"modus-wc-collapse",args:{bordered:!1,"chevron-position":"right",expanded:!1,options:z},argTypes:{"chevron-position":{control:{type:"select"},options:["left","right"]},options:{description:"Configuration options for the collapse component",table:{type:{detail:`
            Interface: ICollapseOptions
            Properties:
            - description (string, optional): The description to render in the collapse header
            - endIcon (string, optional): The Modus icon name to render at the end of the header
            - endIconAriaLabel (string, optional): The end icon's aria-label
            - icon (string, optional): The Modus icon name to render in the collapse header
            - iconAriaLabel (string, optional): The icon's aria-label
            - startIcon (string, optional): The Modus icon name to render first, before the chevron
            - startIconAriaLabel (string, optional): The start icon's aria-label
            - size (DaisySize, optional): The size of the collapse header
            - title (string): The title to render in the collapse header
          `}}}},decorators:[P],parameters:{actions:{handles:["expandedChange"]},layout:"padded"}},H={render:e=>a(m||(m=h([`
<modus-wc-collapse
  ?bordered=`,`
  chevron-position=`,`
  custom-class=`,`
  ?expanded=`,`
  id=`,`
  .options=`,`
>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
<script>
// Adding this block to show how to set options via JS.
// const options = {
//   title: 'Collapse Title',
//   description: 'Collapse description',
//   icon: 'alert',
//   iconAriaLabel: 'Alert',
// };
//   const collapse = document.querySelector('modus-wc-collapse');
//   collapse.chevronPosition = 'right';
//   collapse.options = options;
<\/script>
    `])),e.bordered,o(e["chevron-position"]),o(e["custom-class"]),e.expanded,o(e.id),e.options)},i={...H,parameters:{docs:{description:{story:"\n#### Accessibility\n\n- The collapse is a native `<details>` disclosure. The `<summary>` toggles with Enter or Space, and the content panel is labelled by it through `aria-labelledby`.\n- The summary is not a heading. To give the collapse a heading relationship, place a real heading before it, outside the `<details>`. For groups of collapses, see the [Accordion](?path=/docs/components-accordion--docs) docs.\n- Use the `header` slot for label content only, such as text or `modus-wc-typography`. Don't put buttons, links, or other interactive controls there.\n- Keep a custom `collapse-id` unique on the page.\n        "}}}},r={render:e=>a(b||(b=h([`
<modus-wc-collapse
  ?bordered=`,`
  chevron-position=`,`
  custom-class=`,`
  ?expanded=`,`
  id=`,`
  .options=`,`
>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
<script>
// Adding this block to show how to set options via JS.
// const options = {
//   title: 'Collapse Title',
//   description: 'Collapse description',
//   endIcon: 'more_vertical',
//   endIconAriaLabel: 'More actions',
//   icon: 'alert',
//   iconAriaLabel: 'Alert',
//   startIcon: 'alert',
//   startIconAriaLabel: 'alert',
// };
//   const collapse = document.querySelector('modus-wc-collapse');
//   collapse.chevronPosition = 'left';
//   collapse.options = options;
<\/script>
    `])),e.bordered,o(e["chevron-position"]),o(e["custom-class"]),e.expanded,o(e.id),e.options),args:{bordered:!1,"chevron-position":"left",expanded:!1,options:D}},l={render:e=>{const s=()=>{window.alert("Button was clicked!")};return a(v||(v=h([`
<style>
  .clickable-div {
    position: relative;
    width: fit-content;
    z-index: 99;
  }
</style>
<modus-wc-collapse
  ?bordered=`,`
  chevron-position=`,`
  custom-class=`,`
  ?expanded=`,`
  id="123"
>
  <div slot="header" id="123">
    <div class="clickable-div">
      <modus-wc-button id="button1" @buttonClick=`,`>Alert 1</modus-wc-button>
      <modus-wc-button id="button2" @buttonClick=`,`>Alert 2</modus-wc-button>
    </div>
  </div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
<script>
// Adding this block to show how to add clickable buttons in the collapse header via JS.
// function handleButtonClick() {
//   window.alert('Button was clicked!');
// }
// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// button1.addEventListener('click', handleButtonClick);
// button2.addEventListener('click', handleButtonClick);
<\/script>
    `])),e.bordered,o(e["chevron-position"]),o(e["custom-class"]),e.expanded,s,s)}},c={render:e=>{if(!customElements.get("collapse-shadow-host")){const s=_({componentTag:"modus-wc-collapse",propsMapper:(t,p)=>{const n=p;p.querySelector('[slot="content"]')||(p.innerHTML='<div slot="content">Collapse content</div>'),n.bordered=!!t.bordered,n.chevronPosition=t["chevron-position"]??"right",n.customClass=t["custom-class"]||"",n.expanded=!!t.expanded,n.id=t.id??"",t.options&&(n.options=t.options)}});customElements.define("collapse-shadow-host",s)}return a`<collapse-shadow-host
      .props=${{...e}}
    ></collapse-shadow-host>`}},d={parameters:{docs:{description:{story:`
#### Breaking Changes

  - The 1.0 accordion-item component maps to the 2.0 collapse component. See the [Accordion component](?path=/docs/components-accordion--docs).
  - Size values have changed from \`condensed\`, \`standard\` in 1.0 to abbreviations (\`xs\`, \`sm\`, \`md\`, \`lg\`) in 2.0.

#### Prop Mapping

##### accordion-item (1.0) → collapse (2.0)

| 1.0 Prop           | 2.0 Prop            | Notes            |
|--------------------|---------------------|------------------|
| aria-label         | aria-label          |                  |
| disabled           |                     | Not carried over |
| expand-button-type |                     | Not carried over |
| expanded           | expanded            |                  |
| header-text        | options.title       |                  |
| icon               | options.icon        |                  |
| size               | options.size        |                  |
| supporting-label   | options.description |                  |

#### Event Mapping

| 1.0 Event | 2.0 Event      | Notes            |
|-----------|----------------|------------------|
| closed    | expandedChange |                  |
| opened    | expandedChange |                  |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var g,w,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{\n  ...Template,\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Accessibility\n\n- The collapse is a native \\`<details>\\` disclosure. The \\`<summary>\\` toggles with Enter or Space, and the content panel is labelled by it through \\`aria-labelledby\\`.\n- The summary is not a heading. To give the collapse a heading relationship, place a real heading before it, outside the \\`<details>\\`. For groups of collapses, see the [Accordion](?path=/docs/components-accordion--docs) docs.\n- Use the \\`header\\` slot for label content only, such as text or \\`modus-wc-typography\\`. Don't put buttons, links, or other interactive controls there.\n- Keep a custom \\`collapse-id\\` unique on the page.\n        `\n      }\n    }\n  }\n}",...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var C,y,k;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-collapse
  ?bordered=\${args.bordered}
  chevron-position=\${ifDefined(args['chevron-position'])}
  custom-class=\${ifDefined(args['custom-class'])}
  ?expanded=\${args.expanded}
  id=\${ifDefined(args.id)}
  .options=\${args.options}
>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
<script>
// Adding this block to show how to set options via JS.
// const options = {
//   title: 'Collapse Title',
//   description: 'Collapse description',
//   endIcon: 'more_vertical',
//   endIconAriaLabel: 'More actions',
//   icon: 'alert',
//   iconAriaLabel: 'Alert',
//   startIcon: 'alert',
//   startIconAriaLabel: 'alert',
// };
//   const collapse = document.querySelector('modus-wc-collapse');
//   collapse.chevronPosition = 'left';
//   collapse.options = options;
<\/script>
    \`;
  },
  args: {
    bordered: false,
    'chevron-position': 'left',
    expanded: false,
    options: optionsWithStartIcon
  }
}`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var x,A,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const handleButtonClick = () => {
      window.alert('Button was clicked!');
    };

    // prettier-ignore
    return html\`
<style>
  .clickable-div {
    position: relative;
    width: fit-content;
    z-index: 99;
  }
</style>
<modus-wc-collapse
  ?bordered=\${args.bordered}
  chevron-position=\${ifDefined(args['chevron-position'])}
  custom-class=\${ifDefined(args['custom-class'])}
  ?expanded=\${args.expanded}
  id="123"
>
  <div slot="header" id="123">
    <div class="clickable-div">
      <modus-wc-button id="button1" @buttonClick=\${handleButtonClick}>Alert 1</modus-wc-button>
      <modus-wc-button id="button2" @buttonClick=\${handleButtonClick}>Alert 2</modus-wc-button>
    </div>
  </div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
<script>
// Adding this block to show how to add clickable buttons in the collapse header via JS.
// function handleButtonClick() {
//   window.alert('Button was clicked!');
// }
// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// button1.addEventListener('click', handleButtonClick);
// button2.addEventListener('click', handleButtonClick);
<\/script>
    \`;
  }
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var T,E,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for collapse component
    if (!customElements.get('collapse-shadow-host')) {
      const CollapseShadowHost = createShadowHostClass<CollapseArgs>({
        componentTag: 'modus-wc-collapse',
        propsMapper: (v: CollapseArgs, el: HTMLElement) => {
          const collapseEl = el as unknown as {
            bordered: boolean;
            chevronPosition: 'left' | 'right';
            customClass: string;
            expanded: boolean;
            id: string;
            options: ICollapseOptions;
          };
          // Only set innerHTML once on initial creation
          if (!el.querySelector('[slot="content"]')) {
            el.innerHTML = '<div slot="content">Collapse content</div>';
          }
          collapseEl.bordered = Boolean(v.bordered);
          collapseEl.chevronPosition = v['chevron-position'] ?? 'right';
          collapseEl.customClass = v['custom-class'] || '';
          collapseEl.expanded = Boolean(v.expanded);
          collapseEl.id = v.id ?? '';
          if (v.options) {
            collapseEl.options = v.options; // Conditional assignment only if provided
          }
        }
      });
      customElements.define('collapse-shadow-host', CollapseShadowHost);
    }
    return html\`<collapse-shadow-host
      .props=\${{
      ...args
    }}
    ></collapse-shadow-host>\`;
  }
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var B,L,M;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - The 1.0 accordion-item component maps to the 2.0 collapse component. See the [Accordion component](?path=/docs/components-accordion--docs).
  - Size values have changed from \\\`condensed\\\`, \\\`standard\\\` in 1.0 to abbreviations (\\\`xs\\\`, \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`) in 2.0.

#### Prop Mapping

##### accordion-item (1.0) → collapse (2.0)

| 1.0 Prop           | 2.0 Prop            | Notes            |
|--------------------|---------------------|------------------|
| aria-label         | aria-label          |                  |
| disabled           |                     | Not carried over |
| expand-button-type |                     | Not carried over |
| expanded           | expanded            |                  |
| header-text        | options.title       |                  |
| icon               | options.icon        |                  |
| size               | options.size        |                  |
| supporting-label   | options.description |                  |

#### Event Mapping

| 1.0 Event | 2.0 Event      | Notes            |
|-----------|----------------|------------------|
| closed    | expandedChange |                  |
| opened    | expandedChange |                  |
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
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const K=["Default","WithStartAndEndIcons","WithCustomClickableHeader","ShadowDomParent","Migration"];export{i as Default,d as Migration,c as ShadowDomParent,l as WithCustomClickableHeader,r as WithStartAndEndIcons,K as __namedExportsOrder,F as default};
