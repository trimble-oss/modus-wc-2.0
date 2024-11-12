import{ae as n,af as i}from"./index-DS8evEbC.js";import{useMDXComponents as r}from"./index-BSj771as.js";import"./iframe-B_5Is18N.js";import"../sb-preview/runtime.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";function t(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Documentation/Getting Started"}),`
`,n.jsx(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @trimble-cms/modus-wc
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Register custom elements:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { defineCustomElements } from '@trimble-cms/modus-wc/loader';

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
`,n.jsx(e.h2,{id:"framework-integrations",children:"Framework Integrations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.h3,{id:"angular",children:n.jsx(e.a,{href:"?path=/docs/documentation-frameworks-angular--docs",children:"Angular"})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.h3,{id:"react",children:n.jsx(e.a,{href:"",children:"React"})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.h3,{id:"vue",children:n.jsx(e.a,{href:"",children:"Vue"})}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:["Need help? Check out our ",n.jsx(e.a,{href:"https://github.com/trimble-oss/modus-web-components",rel:"nofollow",children:"GitHub repository"}),`
or `,n.jsx(e.a,{href:"https://github.com/trimble-oss/modus-web-components/issues",rel:"nofollow",children:"raise an issue"}),"."]})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{x as default};
