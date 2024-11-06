import{ae as e,af as i}from"./index-NWyMJRtD.js";import{useMDXComponents as r}from"./index-BSj771as.js";import"./iframe-CJmB5-_4.js";import"../sb-preview/runtime.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentation/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @trimble-cms/modus-wc-2.0
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Register custom elements:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { defineCustomElements } from '@trimble-cms/modus-wc-2.0';

// Call during the initial loading of your application
const Root = () => {
  defineCustomElements();

  return <App />;
};
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Use the components:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Use in HTML
<modus-wc-button variant="primary">Click me</modus-wc-button>
`})}),`
`,e.jsx(n.h2,{id:"framework-integration",children:"Framework Integration"}),`
`,e.jsx(n.h3,{id:"angular",children:"Angular"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript"})}),`
`,e.jsx(n.h3,{id:"react",children:"React"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx"})}),`
`,e.jsx(n.h3,{id:"vue",children:"Vue"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue"})}),`
`,e.jsxs(n.p,{children:["Need help? Check out our ",e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-web-components",rel:"nofollow",children:"GitHub repository"}),`
or `,e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-web-components/issues",rel:"nofollow",children:"raise an issue"}),"."]})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
