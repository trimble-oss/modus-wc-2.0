import{w as z}from"./decorator-D4YmxizW.js";import{x as a}from"./lit-element-CucEn6F2.js";import{o as i}from"./if-defined-BiZP-SBN.js";import{c as I}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var d=Object.freeze,T=Object.defineProperty,E=(e,m)=>d(T(e,"raw",{value:d(e.slice())})),u,l;const _=[{label:"Root",url:"#"},{label:"Subpage",url:"#"},{label:"Current Page",url:"#"}],U={title:"Components/Breadcrumbs",component:"modus-wc-breadcrumbs",args:{items:_,size:"md"},argTypes:{items:{description:"Array of items for the breadcrumbs component",table:{type:{detail:`
            Interface: IBreadcrumb
            Properties:
            - label (string): The text to render in the breadcrumb
            - url (string, optional): The URL emitted when the breadcrumb is clicked
          `}}},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[z],parameters:{actions:{handles:["breadcrumbClick"]}}},M={render:e=>a(u||(u=E([`
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
    `])),i(e["custom-class"]),e.items,i(e.size))},r={...M},n={render:e=>a(l||(l=E([`
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
    `])),e.items,i(e.size))},s={render:e=>{if(!customElements.get("breadcrumbs-shadow-host")){const m=I({componentTag:"modus-wc-breadcrumbs",propsMapper:(o,P)=>{const c=P;c.customClass=o["custom-class"]||"",c.items=o.items,c.size=o.size??"md"}});customElements.define("breadcrumbs-shadow-host",m)}return a`<breadcrumbs-shadow-host
      .props=${{...e}}
    ></breadcrumbs-shadow-host>`}},t={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var b,p,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,w,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var C,S,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('breadcrumbs-shadow-host')) {
      const BreadcrumbsShadowHost = createShadowHostClass<BreadcrumbArgs>({
        componentTag: 'modus-wc-breadcrumbs',
        propsMapper: (v: BreadcrumbArgs, el: HTMLElement) => {
          const breadcrumbsEl = el as unknown as {
            customClass: string;
            items: IBreadcrumb[];
            size: string;
          };
          breadcrumbsEl.customClass = v['custom-class'] || '';
          breadcrumbsEl.items = v.items;
          breadcrumbsEl.size = v.size ?? 'md';
        }
      });
      customElements.define('breadcrumbs-shadow-host', BreadcrumbsShadowHost);
    }
    return html\`<breadcrumbs-shadow-host
      .props=\${{
      ...args
    }}
    ></breadcrumbs-shadow-host>\`;
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var y,k,B;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(k=t.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const L=["Default","UnderlineLinks","ShadowDomParent","Migration"];export{r as Default,t as Migration,s as ShadowDomParent,n as UnderlineLinks,L as __namedExportsOrder,U as default};
