import{w as f}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-CucEn6F2.js";import{o as n}from"./if-defined-BiZP-SBN.js";import{c as P}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const x={firstPage:"First page",lastPage:"Last page",nextPage:"Next page",page:"Page {0}",previousPage:"Previous page"},S={title:"Components/Pagination",component:"modus-wc-pagination",args:{"aria-label-values":x,count:5,"custom-class":"",page:1,size:"md"},argTypes:{"aria-label-values":{description:"Custom aria label values for pagination buttons",table:{type:{detail:`
            Interface: IAriaLabelValues
            Properties:
            - firstPage (string, optional): Aria label for the first page button
            - lastPage (string, optional): Aria label for the last page button
            - nextPage (string, optional): Aria label for the next page button
            - page (string, optional): Aria label for the page number button. Use {0} as placeholder for the page number
            - previousPage (string, optional): Aria label for the previous page button
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[f],parameters:{actions:{handles:["pageChange"]},docs:{description:{component:`
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
        `}}}},o={render:e=>r`
    <modus-wc-pagination
      .ariaLabelValues=${e["aria-label-values"]}
      count=${e.count}
      custom-class=${n(e["custom-class"])}
      next-button-text="${n(e["next-button-text"])}"
      page=${e.page}
      prev-button-text="${n(e["prev-button-text"])}"
      size=${n(e.size)}
    ></modus-wc-pagination>
  `},s={render:e=>{if(!customElements.get("pagination-shadow-host")){const v=P({componentTag:"modus-wc-pagination",propsMapper:(a,w)=>{const t=w;t.ariaLabelValues=a["aria-label-values"],t.count=a.count,t.customClass=a["custom-class"]||"",t.page=a.page,t.size=a.size??"md"}});customElements.define("pagination-shadow-host",v)}return r`<pagination-shadow-host
      .props=${{...e}}
    ></pagination-shadow-host>`}},i={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 the pagination component incorporated ellipses to indicate page skips. In 2.0, the component\n  has been simplified to only show at most 5 page buttons relative to current page with previous/next\n  and first/last navigation buttons.\n  - In 1.0 the `active-page` prop was used, while 2.0 uses `page` instead.\n  - The `pageChange` event in 1.0 emitted just the page number value. In 2.0, it emits an object\n  with `newPage` and `prevPage` properties.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop              | 2.0 Prop           | Notes                                                       |\n|-----------------------|--------------------|-------------------------------------------------------------|\n| active-page           | page               |                                                             |\n| aria-label            | aria-label         |                                                             |\n| max-page              | count              |                                                             |\n| min-page              |                    | Not carried over, minimum page is always 1                  |\n| next-page-button-text | next-button-text   |                                                             |\n| prev-page-button-text | prev-button-text   |                                                             |\n| size                  | size               | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes                                                   |\n|-------------|-------------|---------------------------------------------------------|\n| pageChange  | pageChange  | Now emits an object with `newPage` and `prevPage`   |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var p,g,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(g=o.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,m,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('pagination-shadow-host')) {
      const PaginationShadowHost = createShadowHostClass<PaginationArgs>({
        componentTag: 'modus-wc-pagination',
        propsMapper: (v: PaginationArgs, el: HTMLElement) => {
          const paginationEl = el as unknown as {
            ariaLabelValues: IAriaLabelValues | undefined;
            count: number;
            customClass: string;
            page: number;
            size: string;
          };
          paginationEl.ariaLabelValues = v['aria-label-values'];
          paginationEl.count = v.count;
          paginationEl.customClass = v['custom-class'] || '';
          paginationEl.page = v.page;
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
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,h,b;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const A=["Default","ShadowDomParent","Migration"];export{o as Default,i as Migration,s as ShadowDomParent,A as __namedExportsOrder,S as default};
