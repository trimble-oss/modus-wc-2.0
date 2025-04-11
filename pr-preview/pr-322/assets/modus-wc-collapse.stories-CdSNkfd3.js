import{w as v}from"./decorator-Dt3Huotz.js";import{k as s}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const g={title:"Collapse Title",description:"Collapse description",icon:"alert",iconAriaLabel:"Alert"},$={title:"Components/Collapse",component:"modus-wc-collapse",args:{bordered:!1,expanded:!1,options:g},argTypes:{options:{description:"Configuration options for the collapse component",table:{type:{detail:`
            Interface: ICollapseOptions
            Properties:
            - description (string, optional): The description to render in the collapse header
            - icon (string, optional): The Modus icon name to render in the collapse header
            - iconAriaLabel (string, optional): The icon's aria-label
            - size (DaisySize, optional): The size of the collapse header
            - title (string): The title to render in the collapse header
          `}}}},decorators:[v],parameters:{actions:{handles:["expandedChange"]},layout:"padded"}},C={render:e=>s`
<modus-wc-collapse
  ?bordered=${e.bordered}
  custom-class=${a(e["custom-class"])}
  ?expanded=${e.expanded}
  id=${a(e.id)}
  .options=${e.options}
>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
    `},o={...C},n={render:e=>{const i=()=>{window.alert("Button was clicked!")};return s`
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
      <modus-wc-button @buttonClick=${i}>Alert 1</modus-wc-button>
      <modus-wc-button @buttonClick=${i}>Alert 2</modus-wc-button>
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`};var d,r,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var l,p,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const y=["Default","WithCustomClickableHeader","Migration"];export{o as Default,t as Migration,n as WithCustomClickableHeader,y as __namedExportsOrder,$ as default};
