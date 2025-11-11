import{w as g}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var r=Object.freeze,C=Object.defineProperty,x=(e,s)=>r(C(e,"raw",{value:r(e.slice())})),d;const f={title:"Collapse Title",description:"Collapse description",icon:"alert",iconAriaLabel:"Alert"},$={title:"Components/Collapse",component:"modus-wc-collapse",args:{bordered:!1,expanded:!1,options:f},argTypes:{options:{description:"Configuration options for the collapse component",table:{type:{detail:`
            Interface: ICollapseOptions
            Properties:
            - description (string, optional): The description to render in the collapse header
            - icon (string, optional): The Modus icon name to render in the collapse header
            - iconAriaLabel (string, optional): The icon's aria-label
            - size (DaisySize, optional): The size of the collapse header
            - title (string): The title to render in the collapse header
          `}}}},decorators:[g],parameters:{actions:{handles:["expandedChange"]},layout:"padded"}},k={render:e=>i(d||(d=x([`
<modus-wc-collapse
  ?bordered=`,`
  custom-class=`,`
  ?expanded=`,`
  id=`,`
  .options=`,`
>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
<script>
const options = {
  title: 'Collapse Title',
  description: 'Collapse description',
  icon: 'alert',
  iconAriaLabel: 'Alert',
};
// Adding this block to show how to set options via JS.
//   const collapse = document.querySelector('modus-wc-collapse');
//   collapse.options = options;
<\/script>
    `])),e.bordered,a(e["custom-class"]),e.expanded,a(e.id),e.options)},o={...k},n={render:e=>{const s=()=>{window.alert("Button was clicked!")};return i`
<style>
  .clickable-div {
    position: relative;
    width: fit-content;
    z-index: 99;
  }
</style>
<modus-wc-collapse
  ?bordered=${e.bordered}
  custom-class=${a(e["custom-class"])}
  ?expanded=${e.expanded}
  id="123"
>
  <div slot="header" class="modus-wc-collapse-title" id="123">
    <div class="clickable-div">
      <modus-wc-button @buttonClick=${s}>Alert 1</modus-wc-button>
      <modus-wc-button @buttonClick=${s}>Alert 2</modus-wc-button>
    </div>
  </div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
    `}},t={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  custom-class=\${ifDefined(args['custom-class'])}
  ?expanded=\${args.expanded}
  id="123"
>
  <div slot="header" class="modus-wc-collapse-title" id="123">
    <div class="clickable-div">
      <modus-wc-button @buttonClick=\${handleButtonClick}>Alert 1</modus-wc-button>
      <modus-wc-button @buttonClick=\${handleButtonClick}>Alert 2</modus-wc-button>
    </div>
  </div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
    \`;
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,v,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const P=["Default","WithCustomClickableHeader","Migration"];export{o as Default,t as Migration,n as WithCustomClickableHeader,P as __namedExportsOrder,$ as default};
