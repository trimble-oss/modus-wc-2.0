import{w as P}from"./decorator-Cv9na35H.js";import{b as r}from"./lit-element-DgBvYnzn.js";import{o as E}from"./if-defined-BnVFTJ4o.js";import{c as T}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var p=Object.freeze,H=Object.defineProperty,k=(e,l)=>p(H(e,"raw",{value:p(e.slice())})),m;const s=[{description:"Item one description",icon:"alert",iconAriaLabel:"Alert",title:"Item One"},{description:"Item two description",icon:"alert",iconAriaLabel:"Alert",title:"Item Two"},{description:"Item three description",icon:"alert",iconAriaLabel:"Alert",title:"Item Three"}],z={title:"Components/Accordion",component:"modus-wc-accordion",decorators:[P],parameters:{actions:{handles:["expandedChange"]},layout:{padded:!0}}},D={render:e=>r(m||(m=k([`
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
    `])),E(e["custom-class"]),s[0],s[1],s[2])},o={...D,parameters:{docs:{description:{story:'\n#### Accessibility\n\n- Each section is a native `<details>` / `<summary>` toggle: Tab moves between sections, and Enter or Space opens one. It is not an [APG accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/), so there are no arrow-key shortcuts.\n- Summaries are not headings. For a heading relationship, place a real heading before the accordion and reference it with `aria-labelledby`, plus `role="group"` on `modus-wc-accordion`. See WithSectionHeading.\n- Use the `header` slot for label content only, such as text or `modus-wc-typography`. Don\'t put buttons or links there.\n- Give each collapse a unique `collapse-id`.\n        '}}}},n={render:e=>r`
<div style="padding: 20px;">
  <modus-wc-typography hierarchy="h2" id="accordion-faq-heading">Frequently asked questions</modus-wc-typography>
  <modus-wc-accordion
    aria-labelledby="accordion-faq-heading"
    custom-class=${E(e["custom-class"])}
    role="group"
  >
    <modus-wc-collapse collapse-id="accordion-faq-shipping">
      <modus-wc-typography slot="header" hierarchy="p" weight="semibold">Shipping</modus-wc-typography>
      <div slot="content">Orders ship within two business days.</div>
    </modus-wc-collapse>
    <modus-wc-collapse collapse-id="accordion-faq-returns">
      <modus-wc-typography slot="header" hierarchy="p" weight="semibold">Returns</modus-wc-typography>
      <div slot="content">Items can be returned within 30 days.</div>
    </modus-wc-collapse>
    <modus-wc-collapse collapse-id="accordion-faq-warranty">
      <modus-wc-typography slot="header" hierarchy="p" weight="semibold">Warranty</modus-wc-typography>
      <div slot="content">Products include a one-year warranty.</div>
    </modus-wc-collapse>
  </modus-wc-accordion>
</div>
    `,parameters:{docs:{description:{story:"A heading placed before the accordion names the group. `role` and `aria-labelledby` set on `modus-wc-accordion` are forwarded to its inner element; a role is needed because `aria-labelledby` is not supported on a generic `div`. Header slots hold label text only, and each collapse has a unique `collapse-id`."}}}},a={render:()=>{if(!customElements.get("accordion-shadow-host")){const e=T({componentTag:"modus-wc-accordion",propsMapper:(l,c)=>{const I=c;I.customClass=l["custom-class"]||"",c.innerHTML="",s.forEach(q=>{const i=document.createElement("modus-wc-collapse");i.options=q;const d=document.createElement("div");d.setAttribute("slot","content"),d.textContent="Collapse content",i.appendChild(d),c.appendChild(i)})}});customElements.define("accordion-shadow-host",e)}return r`<accordion-shadow-host
      style="display: block; padding: 20px;"
      .props=${{}}
    ></accordion-shadow-host>`}},t={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var h,u,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:'{\n  ...Template,\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Accessibility\n\n- Each section is a native \\`<details>\\` / \\`<summary>\\` toggle: Tab moves between sections, and Enter or Space opens one. It is not an [APG accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/), so there are no arrow-key shortcuts.\n- Summaries are not headings. For a heading relationship, place a real heading before the accordion and reference it with \\`aria-labelledby\\`, plus \\`role="group"\\` on \\`modus-wc-accordion\\`. See WithSectionHeading.\n- Use the \\`header\\` slot for label content only, such as text or \\`modus-wc-typography\\`. Don\'t put buttons or links there.\n- Give each collapse a unique \\`collapse-id\\`.\n        `\n      }\n    }\n  }\n}',...(w=(u=o.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var g,y,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<div style="padding: 20px;">
  <modus-wc-typography hierarchy="h2" id="accordion-faq-heading">Frequently asked questions</modus-wc-typography>
  <modus-wc-accordion
    aria-labelledby="accordion-faq-heading"
    custom-class=\${ifDefined(args['custom-class'])}
    role="group"
  >
    <modus-wc-collapse collapse-id="accordion-faq-shipping">
      <modus-wc-typography slot="header" hierarchy="p" weight="semibold">Shipping</modus-wc-typography>
      <div slot="content">Orders ship within two business days.</div>
    </modus-wc-collapse>
    <modus-wc-collapse collapse-id="accordion-faq-returns">
      <modus-wc-typography slot="header" hierarchy="p" weight="semibold">Returns</modus-wc-typography>
      <div slot="content">Items can be returned within 30 days.</div>
    </modus-wc-collapse>
    <modus-wc-collapse collapse-id="accordion-faq-warranty">
      <modus-wc-typography slot="header" hierarchy="p" weight="semibold">Warranty</modus-wc-typography>
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
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,f,A;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(A=(f=a.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var x,S,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(S=t.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const F=["Default","WithSectionHeading","ShadowDomParent","Migration"];export{o as Default,t as Migration,a as ShadowDomParent,n as WithSectionHeading,F as __namedExportsOrder,z as default};
