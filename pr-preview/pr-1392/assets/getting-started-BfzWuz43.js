import{j as e,M as r}from"./index-D_ffiGvo.js";import{useMDXComponents as o}from"./index-CfeG9XHY.js";import"./iframe-BlwWmXtR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C__6K5js.js";import"./index-DrFu-skq.js";function t(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/Getting Started"}),`
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
`,e.jsx(n.h2,{id:"testing-with-jest",children:"Testing with Jest"}),`
`,e.jsxs(n.p,{children:["If you are using the React integration package (",e.jsx(n.code,{children:"@trimble-oss/moduswebcomponents-react"}),"), this package is published as ES modules. To use it in a Jest environment you need to configure Babel to transpile it."]}),`
`,e.jsxs(n.p,{children:["Add ",e.jsx(n.code,{children:"transformIgnorePatterns"})," to your Jest config (",e.jsx(n.code,{children:"package.json"})," or ",e.jsx(n.code,{children:"jest.config.js"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "jest": {
    "transformIgnorePatterns": ["/node_modules/(?!(@trimble-oss|@stencil))"]
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Ensure your ",e.jsx(n.code,{children:"babel.config.js"})," includes these presets:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
};
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
`,e.jsx(n.h2,{id:"server-side-rendering-ssr",children:"Server-Side Rendering (SSR)"}),`
`,e.jsxs(n.p,{children:["Modus Web Components supports server-side rendering for React 19 + Next.js (App Router) via ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@stencil/ssr",rel:"nofollow",children:e.jsx(n.code,{children:"@stencil/ssr"})}),"."]}),`
`,e.jsx(n.p,{children:"This is a one-time setup — once configured, all Modus React components are automatically server-rendered on every page with no per-page wrappers needed."}),`
`,e.jsx(n.h3,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"React 19"}),`
`,e.jsx(n.li,{children:"Next.js (App Router)"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@trimble-oss/moduswebcomponents-react"})," (React 19 integration package)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"installation-1",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @trimble-oss/moduswebcomponents @trimble-oss/moduswebcomponents-react
npm install --save-dev @stencil/ssr
`})}),`
`,e.jsx(n.h3,{id:"setup",children:"Setup"}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["1. Configure ",e.jsx(n.code,{children:"next.config.ts"})," (one-time)"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// next.config.ts
import type { NextConfig } from 'next';
import stencilSSR from '@stencil/ssr/next';

const nextConfig: NextConfig = {};

export default stencilSSR({
  module: import('@trimble-oss/moduswebcomponents-react'),
  from: '@trimble-oss/moduswebcomponents-react',
  hydrateModule: import('@trimble-oss/moduswebcomponents/hydrate'),
  serializeShadowRoot: 'declarative-shadow-dom',
})(nextConfig);
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," ",e.jsx(n.code,{children:"@stencil/ssr"})," currently requires the Webpack bundler. Start your dev server with ",e.jsx(n.code,{children:"next dev --webpack"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"2. Register custom elements for interactivity (one-time)"})}),`
`,e.jsxs(n.p,{children:["SSR provides the initial HTML render. ",e.jsx(n.code,{children:"defineCustomElements()"})," must still be called client-side to enable events and component interactivity."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// app/modus-init.tsx
'use client';
import { useEffect } from 'react';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';

export function ModusInit() {
  useEffect(() => {
    defineCustomElements();
  }, []);
  return null;
}
`})}),`
`,e.jsx(n.p,{children:"Add it once to your root layout:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// app/layout.tsx
import { ModusInit } from './modus-init';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="modus-modern-light">
      <head>
        <link rel="stylesheet" href="/modus-wc-styles.css" />
        <link rel="stylesheet" href="/modus-icons.css" />
      </head>
      <body>
        <ModusInit />
        {children}
      </body>
    </html>
  );
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"3. Use components — no wrappers needed"})}),`
`,e.jsx(n.p,{children:"Server Components render Modus components directly. Client Components handle interactivity."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// app/page.tsx — server-rendered display components
import {
  ModusWcBadge,
  ModusWcAlert,
} from '@trimble-oss/moduswebcomponents-react';
import { InteractiveSection } from './interactive-section';

export default function Page() {
  return (
    <>
      <ModusWcBadge color="primary">New</ModusWcBadge>
      <ModusWcAlert
        alertTitle="Hello"
        alertDescription="Server-rendered."
        type="success"
      />
      <InteractiveSection />
    </>
  );
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// app/interactive-section.tsx — client-rendered interactive components
'use client';
import { ModusWcButton } from '@trimble-oss/moduswebcomponents-react';

export function InteractiveSection() {
  return (
    <ModusWcButton
      color="primary"
      variant="filled"
      onButtonClick={() => console.log('clicked')}
    >
      Click me
    </ModusWcButton>
  );
}
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["4. Copy CSS and assets to ",e.jsx(n.code,{children:"public/"})]})}),`
`,e.jsxs(n.p,{children:["Modus CSS references font files via relative paths and must be served statically. Add a ",e.jsx(n.code,{children:"postinstall"})," script to automate this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "scripts": {
    "postinstall": "cp node_modules/@trimble-oss/moduswebcomponents/modus-wc-styles.css public/ && cp node_modules/@trimble-oss/moduswebcomponents/modus-icons.css public/ && cp -r node_modules/@trimble-oss/moduswebcomponents/assets public/"
  }
}
`})}),`
`,e.jsx(n.h3,{id:"how-it-works",children:"How it works"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Server Components"})," — Modus components are serialized to static HTML on the server, with their styles included inline. The browser displays styled content immediately, before JavaScript loads."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Client Components"})," — Components with event handlers must be in a ",e.jsx(n.code,{children:"'use client'"})," file. These hydrate after JS loads."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"defineCustomElements()"})})," — Required once in the client to register the Stencil runtime for interactivity. SSR alone does not wire up events."]}),`
`]}),`
`,e.jsx(n.h3,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Components that accept named slot content as React children (e.g. a custom dropdown trigger) may not render that slot content during SSR. Move such components into a ",e.jsx(n.code,{children:"'use client'"})," boundary to ensure correct rendering."]}),`
`,e.jsx(n.li,{children:"This setup is specific to Next.js App Router with React 19. For other frameworks or React 18, see the manual SSR approach below."}),`
`]}),`
`,e.jsx(n.h3,{id:"manual-ssr-react-18--remix--other-nodejs-servers",children:"Manual SSR (React 18 / Remix / other Node.js servers)"}),`
`,e.jsxs(n.p,{children:["For frameworks other than Next.js App Router, or when using React 18, you can call ",e.jsx(n.code,{children:"renderToString"})," directly from the ",e.jsx(n.code,{children:"hydrate"})," subpath."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// lib/modus-ssr.tsx
import { renderToString } from '@trimble-oss/moduswebcomponents/hydrate';

export async function ModusSSR({ html: inputHtml }: { html: string }) {
  const { html } = await renderToString(inputHtml, {
    fullDocument: false,
    serializeShadowRoot: 'declarative-shadow-dom',
  });
  return <div dangerouslySetInnerHTML={{ __html: html ?? '' }} />;
}
`})}),`
`,e.jsx(n.p,{children:"Use it in any server-rendered page or route:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ModusSSR } from '@/lib/modus-ssr';

export default async function Page() {
  return (
    <ModusSSR
      html={\`
      <modus-wc-button color="primary" variant="filled">Click me</modus-wc-button>
      <modus-wc-badge color="primary">New</modus-wc-badge>
    \`}
    />
  );
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," ",e.jsx(n.code,{children:"inputHtml"})," must be trusted server-side markup — do not pass user-supplied content. ",e.jsx(n.code,{children:"renderToString"})," is a Node.js API and cannot run in browser or Edge Runtime environments."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["Need help? Check out our ",e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-wc-2.0",rel:"nofollow",children:"GitHub repository"}),`
or `,e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-wc-2.0/issues",rel:"nofollow",children:"raise an issue"}),"."]})]})}function m(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{m as default};
