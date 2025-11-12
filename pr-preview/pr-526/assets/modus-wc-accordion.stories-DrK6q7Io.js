import{w as A}from"./decorator-D4YmxizW.js";import{x as a}from"./lit-element-C8zulti1.js";import{o as C}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var i=Object.freeze,y=Object.defineProperty,S=(o,b)=>i(y(o,"raw",{value:i(o.slice())})),r;const s=[{description:"Item one description",icon:"alert",iconAriaLabel:"Alert",title:"Item One"},{description:"Item two description",icon:"alert",iconAriaLabel:"Alert",title:"Item Two"},{description:"Item three description",icon:"alert",iconAriaLabel:"Alert",title:"Item Three"}],O={title:"Components/Accordion",component:"modus-wc-accordion",decorators:[A],parameters:{actions:{handles:["expandedChange"]},layout:{padded:!0}}},I={render:o=>a(r||(r=S([`
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
 // Adding this block to show how to set options via JS 
  // const items = document.querySelectorAll('modus-wc-collapse');
  // items.forEach((item, index) => {
  //  item.options = collapseOptions[index];
  // });
<\/script>
    `])),C(o["custom-class"]),s[0],s[1],s[2])},e={...I},n={render:()=>{if(!customElements.get("accordion-shadow-host")){class o extends HTMLElement{constructor(){super();const c=this.attachShadow({mode:"open"});c.innerHTML=`
            <div style="padding: 20px;">
              <modus-wc-accordion><modus-wc-collapse><div slot="content">Collapse content</div></modus-wc-collapse><modus-wc-collapse><div slot="content">Collapse content</div></modus-wc-collapse><modus-wc-collapse><div slot="content">Collapse content</div></modus-wc-collapse></modus-wc-accordion>
            </div>
          `,c.querySelectorAll("modus-wc-collapse").forEach((x,f)=>{x.options=s[f]})}}customElements.define("accordion-shadow-host",o)}return a`<accordion-shadow-host></accordion-shadow-host>`}},t={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var d,l,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,h,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    // Create a unique shadow host for accordion component
    if (!customElements.get('accordion-shadow-host')) {
      class AccordionShadowHost extends HTMLElement {
        constructor() {
          super();

          // Create shadow root
          const shadowRoot = this.attachShadow({
            mode: 'open'
          });

          // Write HTML structure directly (no whitespace between elements to avoid gaps)
          shadowRoot.innerHTML = \`
            <div style="padding: 20px;">
              <modus-wc-accordion><modus-wc-collapse><div slot="content">Collapse content</div></modus-wc-collapse><modus-wc-collapse><div slot="content">Collapse content</div></modus-wc-collapse><modus-wc-collapse><div slot="content">Collapse content</div></modus-wc-collapse></modus-wc-accordion>
            </div>
          \`;

          // Set options for each collapse element
          const collapses = shadowRoot.querySelectorAll('modus-wc-collapse');
          collapses.forEach((collapse, index) => {
            (collapse as unknown as {
              options: ICollapseOptions;
            }).options = collapseOptions[index];
          });
        }
      }
      customElements.define('accordion-shadow-host', AccordionShadowHost);
    }
    return html\`<accordion-shadow-host></accordion-shadow-host>\`;
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var w,v,g;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const _=["Default","ShadowDomParent","Migration"];export{e as Default,t as Migration,n as ShadowDomParent,_ as __namedExportsOrder,O as default};
