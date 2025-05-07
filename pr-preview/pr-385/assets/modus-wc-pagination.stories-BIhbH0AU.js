import{w as m}from"./decorator-DFROgT0E.js";import{x as l}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import"./v4-CtRu48qb.js";const u={firstPage:"First page",lastPage:"Last page",nextPage:"Next page",page:"Page {0}",previousPage:"Previous page"},h={title:"Components/Pagination",component:"modus-wc-pagination",args:{"aria-label-values":u,count:5,"custom-class":"",page:1,size:"md","prev-button-text":"","next-button-text":""},argTypes:{"aria-label-values":{description:"Custom aria label values for pagination buttons",table:{type:{detail:`
            Interface: IAriaLabelValues
            Properties:
            - firstPage (string, optional): Aria label for the first page button
            - lastPage (string, optional): Aria label for the last page button
            - nextPage (string, optional): Aria label for the next page button
            - page (string, optional): Aria label for the page number button. Use {0} as placeholder for the page number
            - previousPage (string, optional): Aria label for the previous page button
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[m],parameters:{actions:{handles:["pageChange"]},docs:{description:{component:`
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
        `}}}},t={render:e=>l`
    <modus-wc-pagination
      .ariaLabelValues=${e["aria-label-values"]}
      count=${e.count}
      custom-class=${a(e["custom-class"])}
      page=${e.page}
      size=${a(e.size)}
      prev-button-text="${a(e["prev-button-text"])}"
      next-button-text="${a(e["next-button-text"])}"
    ></modus-wc-pagination>
  `},n={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 the pagination component incorporated ellipses to indicate page skips. In 2.0, the component\n  has been simplified to only show at most 5 page buttons relative to current page with previous/next\n  and first/last navigation buttons.\n  - In 1.0 the `active-page` prop was used, while 2.0 uses `page` instead.\n  - The `pageChange` event in 1.0 emitted just the page number value. In 2.0, it emits an object\n  with `newPage` and `prevPage` properties.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop              | 2.0 Prop           | Notes                                                       |\n|-----------------------|--------------------|-------------------------------------------------------------|\n| active-page           | page               |                                                             |\n| aria-label            | aria-label         |                                                             |\n| max-page              | count              |                                                             |\n| min-page              |                    | Not carried over, minimum page is always 1                  |\n| size                  | size               | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes                                                   |\n|-------------|-------------|---------------------------------------------------------|\n| pageChange  | pageChange  | Now emits an object with `newPage` and `prevPage`   |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>l`<div></div>`};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-pagination
      .ariaLabelValues=\${args['aria-label-values']}
      count=\${args.count}
      custom-class=\${ifDefined(args['custom-class'])}
      page=\${args.page}
      size=\${ifDefined(args.size)}
      prev-button-text="\${ifDefined(args['prev-button-text'])}"
      next-button-text="\${ifDefined(args['next-button-text'])}"
    ></modus-wc-pagination>
  \`
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var r,p,g;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 the pagination component incorporated ellipses to indicate page skips. In 2.0, the component\n  has been simplified to only show at most 5 page buttons relative to current page with previous/next\n  and first/last navigation buttons.\n  - In 1.0 the \\`active-page\\` prop was used, while 2.0 uses \\`page\\` instead.\n  - The \\`pageChange\\` event in 1.0 emitted just the page number value. In 2.0, it emits an object\n  with \\`newPage\\` and \\`prevPage\\` properties.\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop              | 2.0 Prop           | Notes                                                       |\n|-----------------------|--------------------|-------------------------------------------------------------|\n| active-page           | page               |                                                             |\n| aria-label            | aria-label         |                                                             |\n| max-page              | count              |                                                             |\n| min-page              |                    | Not carried over, minimum page is always 1                  |\n| size                  | size               | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes                                                   |\n|-------------|-------------|---------------------------------------------------------|\n| pageChange  | pageChange  | Now emits an object with \\`newPage\\` and \\`prevPage\\`   |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const f=["Default","Migration"];export{t as Default,n as Migration,f as __namedExportsOrder,h as default};
