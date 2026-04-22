import{w as x}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-CucEn6F2.js";import{o as c}from"./if-defined-BiZP-SBN.js";import{c as M}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var l=Object.freeze,U=Object.defineProperty,T=(e,d)=>l(U(e,"raw",{value:l(e.slice())})),u,b;const R=[{label:"Root",url:"#"},{label:"Subpage",url:"#"},{label:"Current Page",url:"#"}],$=[{label:"Unsafe URL fallback",url:"javascript:alert(1)"},{label:"Safe subpage",url:"#"},{label:"Current Page",url:"#"}],J={title:"Components/Breadcrumbs",component:"modus-wc-breadcrumbs",args:{items:R,size:"md"},argTypes:{items:{description:"Array of items for the breadcrumbs component",table:{type:{detail:`
            Interface: IBreadcrumb
            Properties:
            - label (string): The text to render in the breadcrumb
            - url (string, optional): The URL emitted when the breadcrumb is clicked
          `}}},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[x],parameters:{actions:{handles:["breadcrumbClick"]}}},A={render:e=>r(u||(u=T([`
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
    `])),c(e["custom-class"]),e.items,c(e.size))},n={...A},s={render:e=>r(b||(b=T([`
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
    `])),e.items,c(e.size))},a={args:{items:$},parameters:{docs:{description:{story:"Shows the fallback behavior when a breadcrumb item has an unsafe URL. The first item renders as a button instead of a navigable link, while still emitting the `breadcrumbClick` event."}}},render:e=>r`
<modus-wc-breadcrumbs
  aria-label="Breadcrumb fallback example"
  .items=${e.items}
  size=${c(e.size)}
></modus-wc-breadcrumbs>
    `},t={render:e=>{if(!customElements.get("breadcrumbs-shadow-host")){const d=M({componentTag:"modus-wc-breadcrumbs",propsMapper:(i,_)=>{const m=_;m.customClass=i["custom-class"]||"",m.items=i.items,m.size=i.size??"md"}});customElements.define("breadcrumbs-shadow-host",d)}return r`<breadcrumbs-shadow-host
      .props=${{...e}}
    ></breadcrumbs-shadow-host>`}},o={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var p,h,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,w,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var v,C,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,B,z;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(B=t.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var P,E,I;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(E=o.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const O=["Default","UnderlineLinks","FallbackButton","ShadowDomParent","Migration"];export{n as Default,a as FallbackButton,o as Migration,t as ShadowDomParent,s as UnderlineLinks,O as __namedExportsOrder,J as default};
