import{w as H}from"./decorator-Cv9na35H.js";import{b as s}from"./lit-element-DgBvYnzn.js";import{o}from"./if-defined-BnVFTJ4o.js";import{c as D}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var m=Object.freeze,q=Object.defineProperty,u=(e,a)=>m(q(e,"raw",{value:m(e.slice())})),b,v,g;const N={title:"Collapse Title",description:"Collapse description",icon:"alert",iconAriaLabel:"Alert"},O={title:"Collapse Title",description:"Collapse description",endIcon:"more_vertical",endIconAriaLabel:"More actions",icon:"alert",iconAriaLabel:"Alert",startIcon:"alert",startIconAriaLabel:"alert"},Q={title:"Components/Collapse",component:"modus-wc-collapse",args:{bordered:!1,"chevron-position":"right",expanded:!1,options:N},argTypes:{"chevron-position":{control:{type:"select"},options:["left","right"]},options:{description:"Configuration options for the collapse component",table:{type:{detail:`
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
          `}}}},decorators:[H],parameters:{actions:{handles:["expandedChange"]},layout:"padded"}},W={render:e=>s(b||(b=u([`
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
    `])),e.bordered,o(e["chevron-position"]),o(e["custom-class"]),e.expanded,o(e.id),e.options)},i={...W},r={render:e=>s(v||(v=u([`
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
    `])),e.bordered,o(e["chevron-position"]),o(e["custom-class"]),e.expanded,o(e.id),e.options),args:{bordered:!1,"chevron-position":"left",expanded:!1,options:O}},l={render:e=>{const a=()=>{window.alert("Button was clicked!")};return s(g||(g=u([`
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
    `])),e.bordered,o(e["chevron-position"]),o(e["custom-class"]),e.expanded,a,a)}},c={render:e=>{if(!customElements.get("collapse-shadow-host")){const a=D({componentTag:"modus-wc-collapse",propsMapper:(t,h)=>{const n=h;h.querySelector('[slot="content"]')||(h.innerHTML='<div slot="content">Collapse content</div>'),n.bordered=!!t.bordered,n.chevronPosition=t["chevron-position"]??"right",n.customClass=t["custom-class"]||"",n.expanded=!!t.expanded,n.id=t.id??"",t.options&&(n.options=t.options)}});customElements.define("collapse-shadow-host",a)}return s`<collapse-shadow-host
      .props=${{...e}}
    ></collapse-shadow-host>`}},d={parameters:{docs:{description:{story:"\n#### Accessibility\n\n  - The collapse is a disclosure built on a native `<details>` element. The `<summary>` is the toggle and is operated with Enter or Space. It has the id `{collapseId}-title`, and the content panel (`{collapseId}-content`) references it with `aria-labelledby`.\n  - Use the `header` slot for label content only, such as text or `modus-wc-typography`. Content in the slot is part of the toggle, so don't place buttons, links, or other interactive controls there.\n  - The summary is not exposed as a heading. It must stay the first child of `<details>`, so it can't be wrapped in a heading, and heading elements inside it are not reliably announced as headings by screen readers.\n  - To give a collapse a heading relationship, place a real heading (for example `<h2>`) before it, outside the `<details>`. For a group of collapses, see the [Accordion](?path=/docs/components-accordion--docs) docs. If every section must appear as a heading in the page outline, the native `<details>` pattern can't provide that.\n  - `collapseId` builds the ids used by `aria-controls` and `aria-labelledby`. A random id is generated when it is not set. If you set it, keep it unique on the page.\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`},p={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`};var w,f,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,x,A;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(A=(x=r.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var k,I,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,E,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(E=c.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var L,M,P;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Accessibility\n\n  - The collapse is a disclosure built on a native \\`<details>\\` element. The \\`<summary>\\` is the toggle and is operated with Enter or Space. It has the id \\`{collapseId}-title\\`, and the content panel (\\`{collapseId}-content\\`) references it with \\`aria-labelledby\\`.\n  - Use the \\`header\\` slot for label content only, such as text or \\`modus-wc-typography\\`. Content in the slot is part of the toggle, so don't place buttons, links, or other interactive controls there.\n  - The summary is not exposed as a heading. It must stay the first child of \\`<details>\\`, so it can't be wrapped in a heading, and heading elements inside it are not reliably announced as headings by screen readers.\n  - To give a collapse a heading relationship, place a real heading (for example \\`<h2>\\`) before it, outside the \\`<details>\\`. For a group of collapses, see the [Accordion](?path=/docs/components-accordion--docs) docs. If every section must appear as a heading in the page outline, the native \\`<details>\\` pattern can't provide that.\n  - \\`collapseId\\` builds the ids used by \\`aria-controls\\` and \\`aria-labelledby\\`. A random id is generated when it is not set. If you set it, keep it unique on the page.\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var _,$,z;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=($=p.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const R=["Default","WithStartAndEndIcons","WithCustomClickableHeader","ShadowDomParent","Accessibility","Migration"];export{d as Accessibility,i as Default,p as Migration,c as ShadowDomParent,l as WithCustomClickableHeader,r as WithStartAndEndIcons,R as __namedExportsOrder,Q as default};
