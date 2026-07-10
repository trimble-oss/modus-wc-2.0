import{w as E}from"./decorator-D4YmxizW.js";import{b as p}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";import{c as z}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const C={firstPage:"First page",lastPage:"Last page",nextPage:"Next page",page:"Page {0}",previousPage:"Previous page"},N={title:"Components/Pagination",component:"modus-wc-pagination",args:{"aria-label-values":C,count:5,"custom-class":"",page:1,size:"md"},argTypes:{"aria-label-values":{description:"Custom aria label values for pagination buttons",table:{type:{detail:`
            Interface: IAriaLabelValues
            Properties:
            - firstPage (string, optional): Aria label for the first page button
            - lastPage (string, optional): Aria label for the last page button
            - nextPage (string, optional): Aria label for the next page button
            - page (string, optional): Aria label for the page number button. Use {0} as placeholder for the page number
            - previousPage (string, optional): Aria label for the previous page button
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[E],parameters:{actions:{handles:["pageChange"]},docs:{description:{component:`
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
        `}}}},o={render:e=>p`
    <modus-wc-pagination
      .ariaLabelValues=${e["aria-label-values"]}
      count=${e.count}
      custom-class=${t(e["custom-class"])}
      next-button-text="${t(e["next-button-text"])}"
      page=${e.page}
      prev-button-text="${t(e["prev-button-text"])}"
      size=${t(e.size)}
    ></modus-wc-pagination>
  `},s={args:{count:1e6,page:123456},render:e=>p`
    <modus-wc-pagination
      .ariaLabelValues=${e["aria-label-values"]}
      count=${e.count}
      custom-class=${t(e["custom-class"])}
      next-button-text="${t(e["next-button-text"])}"
      page=${e.page}
      prev-button-text="${t(e["prev-button-text"])}"
      size=${t(e.size)}
    ></modus-wc-pagination>
  `},i={render:e=>{if(!customElements.get("pagination-shadow-host")){const P=z({componentTag:"modus-wc-pagination",propsMapper:(a,$)=>{const n=$;n.ariaLabelValues=a["aria-label-values"],n.count=a.count,n.customClass=a["custom-class"]||"",n.nextButtonText=a["next-button-text"]??"",n.page=a.page,n.prevButtonText=a["prev-button-text"]??"",n.size=a.size??"md"}});customElements.define("pagination-shadow-host",P)}return p`<pagination-shadow-host
      .props=${{...e}}
    ></pagination-shadow-host>`}},r={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 the pagination component incorporated ellipses to indicate page skips. In 2.0, the component\n  has been simplified to only show at most 5 page buttons relative to current page with previous/next\n  and first/last navigation buttons.\n  - In 1.0 the `active-page` prop was used, while 2.0 uses `page` instead.\n  - The `pageChange` event in 1.0 emitted just the page number value. In 2.0, it emits an object\n  with `newPage` and `prevPage` properties.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop              | 2.0 Prop           | Notes                                                       |\n|-----------------------|--------------------|-------------------------------------------------------------|\n| active-page           | page               |                                                             |\n| aria-label            | aria-label         |                                                             |\n| max-page              | count              |                                                             |\n| min-page              |                    | Not carried over, minimum page is always 1                  |\n| next-page-button-text | next-button-text   |                                                             |\n| prev-page-button-text | prev-button-text   |                                                             |\n| size                  | size               | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes                                                   |\n|-------------|-------------|---------------------------------------------------------|\n| pageChange  | pageChange  | Now emits an object with `newPage` and `prevPage`   |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>p`<div></div>`};var g,l,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var b,h,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,w,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const A=["Default","LargePageNumbers","ShadowDomParent","Migration"];export{o as Default,s as LargePageNumbers,r as Migration,i as ShadowDomParent,A as __namedExportsOrder,N as default};
