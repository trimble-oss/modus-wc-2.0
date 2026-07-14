import{w as L}from"./decorator-D4YmxizW.js";import{b as o}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{c as S}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const T={firstPage:"First page",lastPage:"Last page",nextPage:"Next page",page:"Page {0}",previousPage:"Previous page"},B={title:"Components/Pagination",component:"modus-wc-pagination",args:{"aria-label-values":T,count:5,"custom-class":"",page:1,size:"md"},argTypes:{"aria-label-values":{description:"Custom aria label values for pagination buttons",table:{type:{detail:`
            Interface: IAriaLabelValues
            Properties:
            - firstPage (string, optional): Aria label for the first page button
            - lastPage (string, optional): Aria label for the last page button
            - nextPage (string, optional): Aria label for the next page button
            - page (string, optional): Aria label for the page number button. Use {0} as placeholder for the page number
            - previousPage (string, optional): Aria label for the previous page button
          `}}},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}},decorators:[L],parameters:{actions:{handles:["pageChange"]},docs:{description:{component:`
## Event Interface Documentation

The pageChange event emits an object with the following interface:

\`\`\`typescript
interface IPageChange {
  /** The number of the newly selected page */
  newPage: number;
  /** The number of the previously selected page */
  prevPage: number;
}
\`\`\`
        `}}}},s={render:e=>o`
    <modus-wc-pagination
      .ariaLabelValues=${e["aria-label-values"]}
      count=${e.count}
      custom-class=${a(e["custom-class"])}
      next-button-text="${a(e["next-button-text"])}"
      page=${e.page}
      prev-button-text="${a(e["prev-button-text"])}"
      size=${a(e.size)}
    ></modus-wc-pagination>
  `},i={args:{count:1e6,page:123456},render:e=>o`
    <modus-wc-pagination
      .ariaLabelValues=${e["aria-label-values"]}
      count=${e.count}
      custom-class=${a(e["custom-class"])}
      next-button-text="${a(e["next-button-text"])}"
      page=${e.page}
      prev-button-text="${a(e["prev-button-text"])}"
      size=${a(e.size)}
    ></modus-wc-pagination>
  `},r={parameters:{controls:{disable:!0}},render:e=>o`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${["xs","sm","md","lg","xl"].map(g=>o`
          <modus-wc-pagination
            .ariaLabelValues=${e["aria-label-values"]}
            count=${e.count}
            page=${e.page}
            size=${g}
          ></modus-wc-pagination>
        `)}
    </div>
  `},p={render:e=>{if(!customElements.get("pagination-shadow-host")){const g=S({componentTag:"modus-wc-pagination",propsMapper:(t,y)=>{const n=y;n.ariaLabelValues=t["aria-label-values"],n.count=t.count,n.customClass=t["custom-class"]||"",n.nextButtonText=t["next-button-text"]??"",n.page=t.page,n.prevButtonText=t["prev-button-text"]??"",n.size=t.size??"md"}});customElements.define("pagination-shadow-host",g)}return o`<pagination-shadow-host
      .props=${{...e}}
    ></pagination-shadow-host>`}},l={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 the pagination component incorporated ellipses to indicate page skips. In 2.0, the component\n  has been simplified to only show at most 5 page buttons relative to current page with previous/next\n  and first/last navigation buttons.\n  - In 1.0 the `active-page` prop was used, while 2.0 uses `page` instead.\n  - The `pageChange` event in 1.0 emitted just the page number value. In 2.0, it emits an object\n  with `newPage` and `prevPage` properties.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop              | 2.0 Prop           | Notes                                                       |\n|-----------------------|--------------------|-------------------------------------------------------------|\n| active-page           | page               |                                                             |\n| aria-label            | aria-label         |                                                             |\n| max-page              | count              |                                                             |\n| min-page              |                    | Not carried over, minimum page is always 1                  |\n| next-page-button-text | next-button-text   |                                                             |\n| prev-page-button-text | prev-button-text   |                                                             |\n| size                  | size               | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes                                                   |\n|-------------|-------------|---------------------------------------------------------|\n| pageChange  | pageChange  | Now emits an object with `newPage` and `prevPage`   |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var u,c,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-pagination
      .ariaLabelValues=\${args['aria-label-values']}
      count=\${args.count}
      custom-class=\${ifDefined(args['custom-class'])}
      next-button-text="\${ifDefined(args['next-button-text'])}"
      page=\${args.page}
      prev-button-text="\${ifDefined(args['prev-button-text'])}"
      size=\${ifDefined(args.size)}
    ></modus-wc-pagination>
  \`
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,b,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    count: 1000000,
    page: 123456
  },
  render: args => html\`
    <modus-wc-pagination
      .ariaLabelValues=\${args['aria-label-values']}
      count=\${args.count}
      custom-class=\${ifDefined(args['custom-class'])}
      next-button-text="\${ifDefined(args['next-button-text'])}"
      page=\${args.page}
      prev-button-text="\${ifDefined(args['prev-button-text'])}"
      size=\${ifDefined(args.size)}
    ></modus-wc-pagination>
  \`
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,x,w;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      \${['xs', 'sm', 'md', 'lg', 'xl'].map(size => html\`
          <modus-wc-pagination
            .ariaLabelValues=\${args['aria-label-values']}
            count=\${args.count}
            page=\${args.page}
            size=\${size}
          ></modus-wc-pagination>
        \`)}
    </div>
  \`
}`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var f,$,P;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('pagination-shadow-host')) {
      const PaginationShadowHost = createShadowHostClass<PaginationArgs>({
        componentTag: 'modus-wc-pagination',
        propsMapper: (v: PaginationArgs, el: HTMLElement) => {
          const paginationEl = el as unknown as {
            ariaLabelValues: IAriaLabelValues | undefined;
            count: number;
            customClass: string;
            nextButtonText: string;
            page: number;
            prevButtonText: string;
            size: string;
          };
          paginationEl.ariaLabelValues = v['aria-label-values'];
          paginationEl.count = v.count;
          paginationEl.customClass = v['custom-class'] || '';
          paginationEl.nextButtonText = v['next-button-text'] ?? '';
          paginationEl.page = v.page;
          paginationEl.prevButtonText = v['prev-button-text'] ?? '';
          paginationEl.size = v.size ?? 'md';
        }
      });
      customElements.define('pagination-shadow-host', PaginationShadowHost);
    }
    return html\`<pagination-shadow-host
      .props=\${{
      ...args
    }}
    ></pagination-shadow-host>\`;
  }
}`,...(P=($=p.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var z,E,C;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 the pagination component incorporated ellipses to indicate page skips. In 2.0, the component
  has been simplified to only show at most 5 page buttons relative to current page with previous/next
  and first/last navigation buttons.
  - In 1.0 the \\\`active-page\\\` prop was used, while 2.0 uses \\\`page\\\` instead.
  - The \\\`pageChange\\\` event in 1.0 emitted just the page number value. In 2.0, it emits an object
  with \\\`newPage\\\` and \\\`prevPage\\\` properties.
  - Size values have changed from verbose names (\\\`small\\\`, \\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop              | 2.0 Prop           | Notes                                                       |
|-----------------------|--------------------|-------------------------------------------------------------|
| active-page           | page               |                                                             |
| aria-label            | aria-label         |                                                             |
| max-page              | count              |                                                             |
| min-page              |                    | Not carried over, minimum page is always 1                  |
| next-page-button-text | next-button-text   |                                                             |
| prev-page-button-text | prev-button-text   |                                                             |
| size                  | size               | \\\`small\\\` → \\\`sm\\\`, \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\` |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes                                                   |
|-------------|-------------|---------------------------------------------------------|
| pageChange  | pageChange  | Now emits an object with \\\`newPage\\\` and \\\`prevPage\\\`   |
        \`
      }
    },
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  render: () => html\`<div></div>\`
}`,...(C=(E=l.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const j=["Default","LargePageNumbers","AllSizes","ShadowDomParent","Migration"];export{r as AllSizes,s as Default,i as LargePageNumbers,l as Migration,p as ShadowDomParent,j as __namedExportsOrder,B as default};
