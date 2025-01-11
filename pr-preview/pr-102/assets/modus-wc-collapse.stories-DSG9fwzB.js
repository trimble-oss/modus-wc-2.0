import{k as h}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";const x={title:"Components/Collapse",component:"modus-wc-collapse",args:{bordered:!0,"collapse-description":"Collapse description","collapse-title":"Collapse title",expanded:!1,icon:"info","icon-aria-label":"Information icon"},parameters:{layout:"padded"}},f={render:e=>h`
<modus-wc-collapse
  ?bordered=${e.bordered}
  collapse-description=${o(e["collapse-description"])}
  collapse-title=${o(e["collapse-title"])}
  custom-class=${o(e["custom-class"])}
  ?expanded=${e.expanded}
  icon=${o(e.icon)}
  icon-aria-label=${o(e["icon-aria-label"])}
>
  <div>Custom HTML content</div>
</modus-wc-collapse>
    `},a={...f},c={render:()=>{const e=u=>{var t;const l=u.target;(((t=l.closest(".accordion-container"))==null?void 0:t.querySelectorAll("modus-wc-collapse"))||[]).forEach(n=>{n!==l&&n.setAttribute("expanded","false")})};return h`
<div class="accordion-container">
  <modus-wc-collapse
    bordered
    collapse-title="First Section"
    icon="email"
    icon-aria-label="Email icon"
    @expandedChange=${e}
  >
    <div>
      <p>This is the content for the first section.</p>
    </div>
  </modus-wc-collapse>

  <modus-wc-collapse
    bordered
    collapse-title="Second Section"
    icon="notifications"
    icon-aria-label="Notifications icon"
    @expandedChange=${e}
  >
    <div>
      <p>This is the content for the second section.</p>
    </div>
  </modus-wc-collapse>

  <modus-wc-collapse
    bordered
    collapse-title="Third Section"
    icon="shopping_cart"
    icon-aria-label="Shopping cart icon"
    @expandedChange=${e}
  >
    <div>
      <p>This is the content for the third section.</p>
    </div>
  </modus-wc-collapse>
</div>
    `}};var s,i,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var r,p,m;c.parameters={...c.parameters,docs:{...(r=c.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    // Create a function to handle collapse state
    const handleExpandedChange = (event: Event) => {
      const clickedCollapse = event.target as HTMLElement;

      // Find all collapse components in the container
      const allCollapses = clickedCollapse.closest('.accordion-container')?.querySelectorAll('modus-wc-collapse') || [];

      // Remove expanded state from all other collapses
      allCollapses.forEach(collapse => {
        if (collapse !== clickedCollapse) {
          collapse.setAttribute('expanded', 'false');
        }
      });
    };
    return html\`
<div class="accordion-container">
  <modus-wc-collapse
    bordered
    collapse-title="First Section"
    icon="email"
    icon-aria-label="Email icon"
    @expandedChange=\${handleExpandedChange}
  >
    <div>
      <p>This is the content for the first section.</p>
    </div>
  </modus-wc-collapse>

  <modus-wc-collapse
    bordered
    collapse-title="Second Section"
    icon="notifications"
    icon-aria-label="Notifications icon"
    @expandedChange=\${handleExpandedChange}
  >
    <div>
      <p>This is the content for the second section.</p>
    </div>
  </modus-wc-collapse>

  <modus-wc-collapse
    bordered
    collapse-title="Third Section"
    icon="shopping_cart"
    icon-aria-label="Shopping cart icon"
    @expandedChange=\${handleExpandedChange}
  >
    <div>
      <p>This is the content for the third section.</p>
    </div>
  </modus-wc-collapse>
</div>
    \`;
  }
}`,...(m=(p=c.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const w=["Default","Accordion"];export{c as Accordion,a as Default,w as __namedExportsOrder,x as default};
