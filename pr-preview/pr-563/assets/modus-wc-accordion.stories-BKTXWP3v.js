import{w as v}from"./decorator-D4YmxizW.js";import{x as m}from"./lit-element-C8zulti1.js";import{o as u}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var a=Object.freeze,h=Object.defineProperty,b=(e,w)=>a(h(e,"raw",{value:a(e.slice())})),i;const t=[{description:"Item one description",icon:"alert",iconAriaLabel:"Alert",title:"Item One"},{description:"Item two description",icon:"alert",iconAriaLabel:"Alert",title:"Item Two"},{description:"Item three description",icon:"alert",iconAriaLabel:"Alert",title:"Item Three"}],P={title:"Components/Accordion",component:"modus-wc-accordion",decorators:[v],parameters:{actions:{handles:["expandedChange"]},layout:{padded:!0}}},g={render:e=>m(i||(i=b([`
<script>
  const collapseOptions = [
    {
      description: 'Item one description',
      icon: 'alert',
      iconAriaLabel: 'Alert',
      title: 'Item One',
    },
    {
      description: 'Item two description',
      icon: 'alert',
      iconAriaLabel: 'Alert',
      title: 'Item Two',
    },
    {
      description: 'Item three description',
      icon: 'alert',
      iconAriaLabel: 'Alert',
      title: 'Item Three',
    },
  ];
<\/script>
<div style="padding: 20px;">
  <modus-wc-accordion custom-class=`,`>
    <modus-wc-collapse .options=`,`>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
    <modus-wc-collapse .options=`,`>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
    <modus-wc-collapse .options=`,`>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
  </modus-wc-accordion>
</div>
    `])),u(e["custom-class"]),t[0],t[1],t[2])},o={...g},n={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 the accordion was composed of child accordion-item components. In 2.0 accordion children are collapse
  components.
  - The new accordion supports \`header\` and \`content\` slots to provide maximum flexibility.
  - Size values have changed from (\`condensed\`, \`standard\`) in 1.0 accordion-item to abbreviations (\`xs\`, \`sm\`, \`md\`, \`lg\`) in 2.0 collapse.

#### Prop Mapping

##### accordion

| 1.0 Prop           | 2.0 Prop           | Notes            |
|--------------------|--------------------|------------------|
| aria-label         | aria-label         |                  |

##### accordion-item → collapse

| 1.0 Prop           | 2.0 Prop            | Notes            |
|--------------------|---------------------|------------------|
| aria-label         | aria-label          |                  |
| disabled           |                     | Not carried over |
| expand-button-type |                     | Not carried over |
| expanded           | expanded            |                  |
| header-text        | options.title       |                  |
| icon               | options.icon        |                  |
| supporting-label   | options.description |                  |
| size               | options.size        |                  |

#### Event Mapping

##### accordion-item → accordion

The new accordion and collapse have their own events. We recommend using the
accordion events to migrate.

| 1.0 Event | 2.0 Event      | Notes            |
|-----------|----------------|------------------|
| closed    | expandedChange |                  |
| opened    | expandedChange |                  |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>m`<div></div>`};var r,c,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 the accordion was composed of child accordion-item components. In 2.0 accordion children are collapse
  components.
  - The new accordion supports \\\`header\\\` and \\\`content\\\` slots to provide maximum flexibility.
  - Size values have changed from (\\\`condensed\\\`, \\\`standard\\\`) in 1.0 accordion-item to abbreviations (\\\`xs\\\`, \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`) in 2.0 collapse.

#### Prop Mapping

##### accordion

| 1.0 Prop           | 2.0 Prop           | Notes            |
|--------------------|--------------------|------------------|
| aria-label         | aria-label         |                  |

##### accordion-item → collapse

| 1.0 Prop           | 2.0 Prop            | Notes            |
|--------------------|---------------------|------------------|
| aria-label         | aria-label          |                  |
| disabled           |                     | Not carried over |
| expand-button-type |                     | Not carried over |
| expanded           | expanded            |                  |
| header-text        | options.title       |                  |
| icon               | options.icon        |                  |
| supporting-label   | options.description |                  |
| size               | options.size        |                  |

#### Event Mapping

##### accordion-item → accordion

The new accordion and collapse have their own events. We recommend using the
accordion events to migrate.

| 1.0 Event | 2.0 Event      | Notes            |
|-----------|----------------|------------------|
| closed    | expandedChange |                  |
| opened    | expandedChange |                  |
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const C=["Default","Migration"];export{o as Default,n as Migration,C as __namedExportsOrder,P as default};
