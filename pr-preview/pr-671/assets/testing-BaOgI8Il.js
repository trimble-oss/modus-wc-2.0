import{j as e,M as s}from"./index-Ch7XAdUV.js";import{useMDXComponents as r}from"./index-CxLUT4c6.js";import"./iframe-BqXLTgLm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/Testing"}),`
`,e.jsx(n.h1,{id:"testing",children:"Testing"}),`
`,e.jsx(n.h2,{id:"jest",children:"Jest"}),`
`,e.jsxs(n.p,{children:[`Jest may throw errors during test runs when encountering ES modules or node_modules that need transformation.
If you encounter errors like "SyntaxError: Unexpected token 'export'" or "Cannot use import statement outside a
module", add the following `,e.jsx(n.code,{children:"transformIgnorePatterns"})," configuration to your Jest config:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// In jest.config.js or package.json
"transformIgnorePatterns": [
  "node_modules/(?!(your-problematic-module|another-module)/)"
]
`})})]})}function l(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{l as default};
