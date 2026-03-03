import{j as e,M as i}from"./index-iMqyItBh.js";import{useMDXComponents as t}from"./index-YijZRoNq.js";import"./iframe-C0KFw9WG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-aQYXhgXp.js";import"./index-DrFu-skq.js";function o(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentation/Getting Started"}),`
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
`,e.jsx(n.h4,{id:"variables-only-css",children:"Variables-Only CSS"}),`
`,e.jsxs(n.p,{children:["If you want Modus styling to apply only to your components and ",e.jsx(n.strong,{children:"not affect the rest of your application"}),", you can import the lightweight variables-only file instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import '@trimble-oss/moduswebcomponents/modus-wc-variables.css';
`})}),`
`,e.jsxs(n.p,{children:["Modus components inside Shadow DOM will automatically inject their own class rules via ",e.jsx(n.code,{children:"handleShadowDOMStyles()"}),", so they render correctly without the full stylesheet being loaded globally."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Both imports work with Shadow DOM. We recommend ",e.jsx(n.code,{children:"modus-wc-styles.css"})," for new applications. Consider ",e.jsx(n.code,{children:"modus-wc-variables.css"})," for existing applications where you want to avoid global style changes."]}),`
`]}),`
`,e.jsx(n.h3,{id:"2-set-the-theme",children:"2. Set the theme:"}),`
`,e.jsxs(n.p,{children:["The theme can be set manually or by using the ",e.jsx(n.code,{children:"ThemeSwitcher"}),' component. See the "Use a Theme" section of ',e.jsx(n.a,{href:"/docs/documentation-styling--docs",children:"Styling"})," for guidance."]}),`
`,e.jsx(n.p,{children:"Available themes are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"modus-modern-light"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"modus-modern-dark"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"modus-classic-light"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"modus-classic-dark"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"connect-light"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"connect-dark"})}),`
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
or `,e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-wc-2.0/issues",rel:"nofollow",children:"raise an issue"}),"."]})]})}function m(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{m as default};
