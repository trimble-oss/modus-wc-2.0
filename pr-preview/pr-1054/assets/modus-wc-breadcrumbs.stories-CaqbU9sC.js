import{w as S}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-CucEn6F2.js";import{o as s}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var o=Object.freeze,B=Object.defineProperty,C=(e,T)=>o(B(e,"raw",{value:o(e.slice())})),c,l;const I=[{label:"Root",url:"#"},{label:"Subpage",url:"#"},{label:"Current Page",url:"#"}],P=[{label:"Unsafe URL fallback",url:"javascript:alert(1)"},{label:"Safe subpage",url:"#"},{label:"Current Page",url:"#"}],L={title:"Components/Breadcrumbs",component:"modus-wc-breadcrumbs",args:{items:I,size:"md"},argTypes:{items:{description:"Array of items for the breadcrumbs component",table:{type:{detail:`
            Interface: IBreadcrumb
            Properties:
            - label (string): The text to render in the breadcrumb
            - url (string, optional): The URL emitted when the breadcrumb is clicked
          `}}},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[S],parameters:{actions:{handles:["breadcrumbClick"]}}},z={render:e=>i(c||(c=C([`
<modus-wc-breadcrumbs
  aria-label="Breadcrumbs"
  custom-class=`,`
  .items=`,`
  size=`,`
></modus-wc-breadcrumbs>
<script>
  const items = [
    {
      label: 'Root',
      url: '#',
    },
    {
      label: 'Subpage',
      url: '#',
    },
    {
      label: 'Current Page',
      url: '#',
    },
  ];
  // Adding this block to show how to set options via JS 
  // const breadcrumbs = document.querySelector('modus-wc-breadcrumbs');
  // breadcrumbs.items = items;
<\/script>
    `])),s(e["custom-class"]),e.items,s(e.size))},r={...z},n={render:e=>i(l||(l=C([`
<style>
  .underline-links a {
    text-decoration: underline;
  }
</style>
<modus-wc-breadcrumbs
  custom-class="underline-links"
  .items=`,`
  size=`,`
></modus-wc-breadcrumbs>
<script>
  const items = [
    {
      label: 'Root',
      url: '#',
    },
    {
      label: 'Subpage',
      url: '#',
    },
    {
      label: 'Current Page',
      url: '#',
    },
  ];
  // Adding this block to show how to set options via JS 
  // const breadcrumbs = document.querySelector('modus-wc-breadcrumbs');
  // breadcrumbs.items = items;
<\/script>
    `])),e.items,s(e.size))},a={args:{items:P},parameters:{docs:{description:{story:"Shows the fallback behavior when a breadcrumb item has an unsafe URL. The first item renders as a button instead of a navigable link, while still emitting the `breadcrumbClick` event."}}},render:e=>i`
<modus-wc-breadcrumbs
  aria-label="Breadcrumb fallback example"
  .items=${e.items}
  size=${s(e.size)}
></modus-wc-breadcrumbs>
    `},t={parameters:{docs:{description:{story:`
#### Breaking Changes

  - The structure of the breadcrumb \`items\` has changed from \`Crumb\` interface to \`IBreadcrumb\` interface.
  - Underlined links are now applied using a custom class rather than a dedicated prop.

#### Prop Mapping

| 1.0 Prop        | 2.0 Prop      | Notes                                               |
|-----------------|---------------|-----------------------------------------------------|
| aria-label      | aria-label    |                                                     |
| crumbs          | items         | Interface changed from \`Crumb\` to \`IBreadcrumb\` |
| underline-links |               | Not carried over, use CSS instead                   |

#### Event Mapping

| 1.0 Event  | 2.0 Event       | Notes                                             |
|------------|-----------------|---------------------------------------------------|
| crumbClick | breadcrumbClick | Payload changed from \`Crumb\` to \`IBreadcrumb\` |

#### Interfaces

##### 1.0:
\`\`\`typescript
interface Crumb {
  display: string;
  id: string;
}
\`\`\`

##### 2.0:
\`\`\`typescript
interface IBreadcrumb {
  label: string;
  url?: string;
}
\`\`\`
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,p,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .underline-links a {
    text-decoration: underline;
  }
</style>
<modus-wc-breadcrumbs
  custom-class="underline-links"
  .items=\${args.items}
  size=\${ifDefined(args.size)}
></modus-wc-breadcrumbs>
<script>
  const items = [
    {
      label: 'Root',
      url: '#',
    },
    {
      label: 'Subpage',
      url: '#',
    },
    {
      label: 'Current Page',
      url: '#',
    },
  ];
  // Adding this block to show how to set options via JS 
  // const breadcrumbs = document.querySelector('modus-wc-breadcrumbs');
  // breadcrumbs.items = items;
<\/script>
    \`;
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,f,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: fallbackItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the fallback behavior when a breadcrumb item has an unsafe URL. The first item renders as a button instead of a navigable link, while still emitting the \`breadcrumbClick\` event.'
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-breadcrumbs
  aria-label="Breadcrumb fallback example"
  .items=\${args.items}
  size=\${ifDefined(args.size)}
></modus-wc-breadcrumbs>
    \`;
  }
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var k,v,y;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - The structure of the breadcrumb \\\`items\\\` has changed from \\\`Crumb\\\` interface to \\\`IBreadcrumb\\\` interface.
  - Underlined links are now applied using a custom class rather than a dedicated prop.

#### Prop Mapping

| 1.0 Prop        | 2.0 Prop      | Notes                                               |
|-----------------|---------------|-----------------------------------------------------|
| aria-label      | aria-label    |                                                     |
| crumbs          | items         | Interface changed from \\\`Crumb\\\` to \\\`IBreadcrumb\\\` |
| underline-links |               | Not carried over, use CSS instead                   |

#### Event Mapping

| 1.0 Event  | 2.0 Event       | Notes                                             |
|------------|-----------------|---------------------------------------------------|
| crumbClick | breadcrumbClick | Payload changed from \\\`Crumb\\\` to \\\`IBreadcrumb\\\` |

#### Interfaces

##### 1.0:
\\\`\\\`\\\`typescript
interface Crumb {
  display: string;
  id: string;
}
\\\`\\\`\\\`

##### 2.0:
\\\`\\\`\\\`typescript
interface IBreadcrumb {
  label: string;
  url?: string;
}
\\\`\\\`\\\`
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
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const M=["Default","UnderlineLinks","FallbackButton","Migration"];export{r as Default,a as FallbackButton,t as Migration,n as UnderlineLinks,M as __namedExportsOrder,L as default};
