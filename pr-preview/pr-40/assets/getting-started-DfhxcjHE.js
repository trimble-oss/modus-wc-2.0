import{ae as n,af as r}from"./index-C9Rnw6QX.js";import{useMDXComponents as i}from"./index-BSj771as.js";import"./iframe-B1eMr_FP.js";import"../sb-preview/runtime.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",pre:"pre",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Documentation/Getting Started"}),`
`,n.jsx(e.h1,{id:"modus-web-components-20",children:"Modus Web Components 2.0"}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @trimble-cms/modus-wc-2.0
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Register custom elements:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { defineCustomElements } from '@trimble-cms/modus-wc-2.0';

// Call during the initial loading of your application
const Root = () => {
  defineCustomElements();

  return <App />;
};
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:"Use the components:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Use in HTML
<modus-wc-button variant="primary">Click me</modus-wc-button>
`})}),`
`,n.jsx(e.h2,{id:"framework-integration",children:"Framework Integration"}),`
`,n.jsx(e.h3,{id:"angular",children:"Angular"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript"})}),`
`,n.jsx(e.h3,{id:"react",children:"React"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx"})}),`
`,n.jsx(e.h3,{id:"vue",children:"Vue"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue"})})]})}function x(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{x as default};
