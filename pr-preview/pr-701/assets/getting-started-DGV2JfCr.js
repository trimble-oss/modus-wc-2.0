import{j as e,M as o}from"./index-BbTCQD39.js";import{useMDXComponents as i}from"./index-B5u_DJ27.js";import"./iframe-okBp-j_Y.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Documentation/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx("b",{children:e.jsx(n.p,{children:`Lock the installed package version to avoid unintended breakages on future npm
installs.`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @trimble-oss/moduswebcomponents
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"1-set-up-the-styling",children:"1. Set up the styling:"}),`
`,e.jsx(n.p,{children:"You will need to import our styling in your main JavaScript or CSS file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';
`})}),`
`,e.jsx(n.h3,{id:"2-set-the-theme",children:"2. Set the theme:"}),`
`,e.jsxs(n.p,{children:["The theme can be set manually or by using the ",e.jsx(n.code,{children:"ThemeSwitcher"}),' component. See the "Use a Theme" section of ',e.jsx(n.a,{href:"/docs/documentation-styling--docs",children:"Styling"})," for guidance."]}),`
`,e.jsx(n.p,{children:"Available themes are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"modus-classic-light"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"modus-classic-dark"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"modus-modern-light"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"modus-modern-dark"})}),`
`]}),`
`,e.jsx(n.h3,{id:"3-register-custom-elements",children:"3. Register custom elements:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';

// Call during the initial loading of your application
const Root = () => {
  defineCustomElements();

  return <App />;
};
`})}),`
`,e.jsx(n.h3,{id:"4-use-the-components",children:"4. Use the components:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Use in HTML
<modus-wc-button variant="primary">Click me</modus-wc-button>
`})}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.p,{children:"Types are a crucial part of our component library, providing robust type safety and enhanced developer experience through comprehensive TypeScript definitions for all components."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ISelectOption, ModusWcSelectCustomEvent } from '@trimble-oss/moduswebcomponents';

const options: ISelectOption[] = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
];

const handleEvent = (e: ModusWcSelectCustomEvent<ISelectOption>) => {}
`})}),`
`,e.jsx(n.h2,{id:"framework-integrations",children:"Framework Integrations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.h3,{id:"angular",children:e.jsx(n.a,{href:"?path=/docs/documentation-frameworks-angular--docs",children:"Angular"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.h3,{id:"react",children:e.jsx(n.a,{href:"?path=/docs/documentation-frameworks-react--docs",children:"React"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.h3,{id:"vue",children:e.jsx(n.a,{href:"?path=/docs/documentation-frameworks-vue--docs",children:"Vue"})}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["Need help? Check out our ",e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-wc-2.0",rel:"nofollow",children:"GitHub repository"}),`
or `,e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-wc-2.0/issues",rel:"nofollow",children:"raise an issue"}),"."]})]})}function m(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{m as default};
