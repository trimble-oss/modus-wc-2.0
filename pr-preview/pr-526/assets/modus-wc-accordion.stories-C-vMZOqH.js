import{w as E}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-C8zulti1.js";import{o as y}from"./if-defined-yv6owfG8.js";import{c as I}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var l=Object.freeze,T=Object.defineProperty,S=(e,d)=>l(T(e,"raw",{value:l(e.slice())})),p;const a=[{description:"Item one description",icon:"alert",iconAriaLabel:"Alert",title:"Item One"},{description:"Item two description",icon:"alert",iconAriaLabel:"Alert",title:"Item Two"},{description:"Item three description",icon:"alert",iconAriaLabel:"Alert",title:"Item Three"}],z={title:"Components/Accordion",component:"modus-wc-accordion",decorators:[E],parameters:{actions:{handles:["expandedChange"]},layout:{padded:!0}}},P={render:e=>r(p||(p=S([`
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
    `])),y(e["custom-class"]),a[0],a[1],a[2])},o={...P},n={render:()=>{if(!customElements.get("accordion-shadow-host")){const e=I({componentTag:"modus-wc-accordion",propsMapper:(d,s)=>{const f=s;f.customClass=d["custom-class"]||"",s.innerHTML="",a.forEach(A=>{const c=document.createElement("modus-wc-collapse");c.options=A;const i=document.createElement("div");i.setAttribute("slot","content"),i.textContent="Collapse content",c.appendChild(i),s.appendChild(c)})}});customElements.define("accordion-shadow-host",e)}return r`<accordion-shadow-host
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var m,h,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var v,w,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(w=n.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var b,x,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const H=["Default","ShadowDomParent","Migration"];export{o as Default,t as Migration,n as ShadowDomParent,H as __namedExportsOrder,z as default};
