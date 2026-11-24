import{w as D}from"./decorator-Cv9na35H.js";import{b as o}from"./lit-element-DgBvYnzn.js";import{o as P}from"./if-defined-BnVFTJ4o.js";import{c as O}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var m=Object.freeze,M=Object.defineProperty,N=(e,p)=>m(M(e,"raw",{value:m(e.slice())})),h;const r=[{description:"Item one description",icon:"alert",iconAriaLabel:"Alert",title:"Item One"},{description:"Item two description",icon:"alert",iconAriaLabel:"Alert",title:"Item Two"},{description:"Item three description",icon:"alert",iconAriaLabel:"Alert",title:"Item Three"}],j={title:"Components/Accordion",component:"modus-wc-accordion",decorators:[D],parameters:{actions:{handles:["expandedChange"]},layout:{padded:!0}}},W={render:e=>o(h||(h=N([`
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
    `])),P(e["custom-class"]),r[0],r[1],r[2])},n={...W},a={render:e=>o`
<div style="padding: 20px;">
  <h2 id="accordion-faq-heading">Frequently asked questions</h2>
  <modus-wc-accordion
    aria-labelledby="accordion-faq-heading"
    custom-class=${P(e["custom-class"])}
    role="group"
  >
    <modus-wc-collapse collapse-id="accordion-faq-shipping">
      <span slot="header">Shipping</span>
      <div slot="content">Orders ship within two business days.</div>
    </modus-wc-collapse>
    <modus-wc-collapse collapse-id="accordion-faq-returns">
      <span slot="header">Returns</span>
      <div slot="content">Items can be returned within 30 days.</div>
    </modus-wc-collapse>
    <modus-wc-collapse collapse-id="accordion-faq-warranty">
      <span slot="header">Warranty</span>
      <div slot="content">Products include a one-year warranty.</div>
    </modus-wc-collapse>
  </modus-wc-accordion>
</div>
    `,parameters:{docs:{description:{story:"A heading placed before the accordion names the group. `role` and `aria-labelledby` set on `modus-wc-accordion` are forwarded to its inner element; a role is needed because `aria-labelledby` is not supported on a generic `div`. Header slots hold label text only, and each collapse has a unique `collapse-id`."}}}},t={parameters:{docs:{description:{story:"\n#### Accessibility\n\n  - The accordion groups `modus-wc-collapse` disclosures. It is not an [APG accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/): each section is a native `<details>` / `<summary>` toggle reached with Tab, and there is no arrow-key navigation between headers.\n  - The `<summary>` must stay the toggle. It is not exposed as a heading, and heading elements in the `header` slot are not reliably announced as headings by screen readers.\n  - Use the `header` slot for label content only, such as text or `modus-wc-typography`. Don't place buttons, links, or other interactive controls there.\n  - To provide a heading relationship, place a real heading before the accordion, outside the `<details>` elements, and reference it with `aria-labelledby` plus a `role` such as `group` on `modus-wc-accordion`. See the WithSectionHeading example. Each panel is already labelled by its summary through `aria-labelledby`. If every section must appear as a heading in the page outline, the native `<details>` pattern can't provide that.\n  - Give each collapse a unique `collapse-id`, or leave it unset to get a random id, so the `{id}-title` and `{id}-content` ids stay unique.\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`},s={render:()=>{if(!customElements.get("accordion-shadow-host")){const e=O({componentTag:"modus-wc-accordion",propsMapper:(p,c)=>{const H=c;H.customClass=p["custom-class"]||"",c.innerHTML="",r.forEach(k=>{const d=document.createElement("modus-wc-collapse");d.options=k;const l=document.createElement("div");l.setAttribute("slot","content"),l.textContent="Collapse content",d.appendChild(l),c.appendChild(d)})}});customElements.define("accordion-shadow-host",e)}return o`<accordion-shadow-host
      style="display: block; padding: 20px;"
      .props=${{}}
    ></accordion-shadow-host>`}},i={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var u,g,w;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var v,b,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<div style="padding: 20px;">
  <h2 id="accordion-faq-heading">Frequently asked questions</h2>
  <modus-wc-accordion
    aria-labelledby="accordion-faq-heading"
    custom-class=\${ifDefined(args['custom-class'])}
    role="group"
  >
    <modus-wc-collapse collapse-id="accordion-faq-shipping">
      <span slot="header">Shipping</span>
      <div slot="content">Orders ship within two business days.</div>
    </modus-wc-collapse>
    <modus-wc-collapse collapse-id="accordion-faq-returns">
      <span slot="header">Returns</span>
      <div slot="content">Items can be returned within 30 days.</div>
    </modus-wc-collapse>
    <modus-wc-collapse collapse-id="accordion-faq-warranty">
      <span slot="header">Warranty</span>
      <div slot="content">Products include a one-year warranty.</div>
    </modus-wc-collapse>
  </modus-wc-accordion>
</div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'A heading placed before the accordion names the group. \`role\` and \`aria-labelledby\` set on \`modus-wc-accordion\` are forwarded to its inner element; a role is needed because \`aria-labelledby\` is not supported on a generic \`div\`. Header slots hold label text only, and each collapse has a unique \`collapse-id\`.'
      }
    }
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,A,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Accessibility\n\n  - The accordion groups \\`modus-wc-collapse\\` disclosures. It is not an [APG accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/): each section is a native \\`<details>\\` / \\`<summary>\\` toggle reached with Tab, and there is no arrow-key navigation between headers.\n  - The \\`<summary>\\` must stay the toggle. It is not exposed as a heading, and heading elements in the \\`header\\` slot are not reliably announced as headings by screen readers.\n  - Use the \\`header\\` slot for label content only, such as text or \\`modus-wc-typography\\`. Don't place buttons, links, or other interactive controls there.\n  - To provide a heading relationship, place a real heading before the accordion, outside the \\`<details>\\` elements, and reference it with \\`aria-labelledby\\` plus a \\`role\\` such as \\`group\\` on \\`modus-wc-accordion\\`. See the WithSectionHeading example. Each panel is already labelled by its summary through \\`aria-labelledby\\`. If every section must appear as a heading in the page outline, the native \\`<details>\\` pattern can't provide that.\n  - Give each collapse a unique \\`collapse-id\\`, or leave it unset to get a random id, so the \\`{id}-title\\` and \\`{id}-content\\` ids stay unique.\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(x=(A=t.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var I,C,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    // Create a unique shadow host for accordion component
    if (!customElements.get('accordion-shadow-host')) {
      const AccordionShadowHost = createShadowHostClass<AccordionArgs>({
        componentTag: 'modus-wc-accordion',
        propsMapper: (v: AccordionArgs, el: HTMLElement) => {
          const accordionEl = el as unknown as {
            customClass: string;
          };
          accordionEl.customClass = v['custom-class'] || '';

          // Create and append collapse elements (no whitespace between to avoid gaps)
          el.innerHTML = '';
          collapseOptions.forEach(options => {
            const collapse = document.createElement('modus-wc-collapse');
            (collapse as unknown as {
              options: ICollapseOptions;
            }).options = options;
            const contentDiv = document.createElement('div');
            contentDiv.setAttribute('slot', 'content');
            contentDiv.textContent = 'Collapse content';
            collapse.appendChild(contentDiv);
            el.appendChild(collapse);
          });
        }
      });
      customElements.define('accordion-shadow-host', AccordionShadowHost);
    }
    return html\`<accordion-shadow-host
      style="display: block; padding: 20px;"
      .props=\${{}}
    ></accordion-shadow-host>\`;
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var E,T,q;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(q=(T=i.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const B=["Default","WithSectionHeading","Accessibility","ShadowDomParent","Migration"];export{t as Accessibility,n as Default,i as Migration,s as ShadowDomParent,a as WithSectionHeading,B as __namedExportsOrder,j as default};
