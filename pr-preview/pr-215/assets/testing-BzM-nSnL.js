import{ae as e,af as s}from"./index-6bgmb7Bm.js";import{u as r}from"./index-BETnVHMM.js";import"./iframe-B3fKyBPS.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";function t(o){const n={code:"code",h1:"h1",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/Testing"}),`
`,e.jsx(n.h1,{id:"jest",children:"Jest"}),`
`,e.jsxs(n.p,{children:[`Jest may throw errors during test runs when encountering ES modules or node_modules that need transformation.
If you encounter errors like "SyntaxError: Unexpected token 'export'" or "Cannot use import statement outside a
module", add the following `,e.jsx(n.code,{children:"transformIgnorePatterns"})," configuration to your Jest config:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// In jest.config.js or package.json
"transformIgnorePatterns": [
  "node_modules/(?!(your-problematic-module|another-module)/)"
]
`})})]})}function x(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{x as default};
