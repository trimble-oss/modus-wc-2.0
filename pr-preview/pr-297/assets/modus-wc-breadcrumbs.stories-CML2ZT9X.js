import{w as g}from"./decorator-Dt3Huotz.js";import{k as a}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const f=[{label:"Root",url:"#"},{label:"Subpage",url:"#"},{label:"Current Page",url:"#"}],I={title:"Components/Breadcrumbs",component:"modus-wc-breadcrumbs",args:{items:f,size:"md"},argTypes:{items:{description:"Array of items for the breadcrumbs component",table:{type:{detail:`
            Interface: IBreadcrumb
            Properties:
            - label (string): The text to render in the breadcrumb
            - url (string, optional): The URL emitted when the breadcrumb is clicked
          `}}},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[g],parameters:{actions:{handles:["breadcrumbClick"]}}},h={render:e=>a`
<modus-wc-breadcrumbs
  custom-class=${s(e["custom-class"])}
  .items=${e.items}
  size=${s(e.size)}
></modus-wc-breadcrumbs>
    `},r={...h},n={render:e=>a`
<style>
  .underline-links a {
    text-decoration: underline;
  }
</style>
<modus-wc-breadcrumbs
  custom-class="underline-links"
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var i,o,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,m,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    \`;
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,p,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const w=["Default","UnderlineLinks","Migration"];export{r as Default,t as Migration,n as UnderlineLinks,w as __namedExportsOrder,I as default};
