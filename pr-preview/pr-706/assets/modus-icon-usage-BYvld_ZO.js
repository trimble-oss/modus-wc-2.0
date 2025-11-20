import{j as n,M as t}from"./index-DvVlWPGY.js";import{useMDXComponents as i}from"./index-BRXBwQ-C.js";import"./iframe-C5Rfuu89.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function e(s){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Documentation/Modus Icon Usage"}),`
`,n.jsx(o.h1,{id:"modus-icon-usage",children:"Modus Icon Usage"}),`
`,n.jsx(o.p,{children:"Modus Web Components require Modus Icons."}),`
`,n.jsx(o.p,{children:"Starting from v0.0.0-beta.5, the Web Components package supports both outlined and solid icon variants through a single CSS file."}),`
`,n.jsx(o.h2,{id:"1-installation",children:"1. Installation"}),`
`,n.jsx(o.h3,{id:"option-a-online-usage-cdn",children:"Option A: Online Usage (CDN)"}),`
`,n.jsx(o.p,{children:"Create a file at:"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{children:`/public/modus-web-components/modus-icons.css
`})}),`
`,n.jsx(o.p,{children:"with the following contents:"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-css",children:`@font-face {
  font-family: 'modus-icons';
  src: url('https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-outlined/fonts/modus-icons.woff2')
    format('woff2');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: 'modus-icons-outlined';
  src: url('https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-outlined/fonts/modus-icons.woff2')
    format('woff2');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: 'modus-icons-solid';
  src: url('https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-solid/fonts/modus-icons.woff2')
    format('woff2');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

.modus-icons-outlined {
  font-family: 'modus-icons-outlined';
  font-style: normal;
  font-weight: normal;
}

.modus-icons-solid {
  font-family: 'modus-icons-solid';
  font-style: normal;
  font-weight: normal;
}

.modus-icons {
  font-family: 'modus-icons';
  font-style: normal;
  font-weight: normal;
}
`})}),`
`,n.jsx(o.p,{children:"Then include it in your app:"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-html",children:`<head>
  <link rel="stylesheet" href="/modus-web-components/modus-icons.css" />
</head>
`})}),`
`,n.jsx(o.h3,{id:"option-b-offline-usage",children:"Option B: Offline Usage"}),`
`,n.jsx(o.p,{children:"For applications requiring offline capability, follow these steps:"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsx(o.li,{children:"Install the Modus Icons package:"}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-bash",children:`npm install @trimble-oss/modus-icons
`})}),`
`,n.jsxs(o.ol,{start:"2",children:[`
`,n.jsx(o.li,{children:"Download the font files:"}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{children:`node_modules/@trimble-oss/modus-icons/dist/modus-outlined/fonts/modus-icons.woff2
node_modules/@trimble-oss/modus-icons/dist/modus-solid/fonts/modus-icons.woff2
`})}),`
`,n.jsxs(o.ol,{start:"3",children:[`
`,n.jsx(o.li,{children:"Create this directory structure in your project:"}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{children:`public/
  └── modus-web-components/
      ├── fonts/
      │   ├── modus-icons-outlined.woff2  (renamed from modus-outlined/fonts/modus-icons.woff2)
      │   └── modus-icons-solid.woff2     (renamed from modus-solid/fonts/modus-icons.woff2)
      └── modus-icons.css
`})}),`
`,n.jsxs(o.ol,{start:"4",children:[`
`,n.jsxs(o.li,{children:["Create a modified ",n.jsx(o.code,{children:"modus-icons.css"})," file that references the local font files:"]}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-css",children:`@font-face {
  font-family: 'modus-icons';
  src: url('./fonts/modus-icons-outlined.woff2') format('woff2');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: 'modus-icons-outlined';
  src: url('./fonts/modus-icons-outlined.woff2') format('woff2');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: 'modus-icons-solid';
  src: url('./fonts/modus-icons-solid.woff2') format('woff2');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

.modus-icons-outlined {
  font-family: 'modus-icons-outlined';
  font-style: normal;
  font-weight: normal;
}

.modus-icons-solid {
  font-family: 'modus-icons-solid';
  font-style: normal;
  font-weight: normal;
}

.modus-icons {
  font-family: 'modus-icons';
  font-style: normal;
  font-weight: normal;
}
`})}),`
`,n.jsxs(o.ol,{start:"5",children:[`
`,n.jsx(o.li,{children:"Include the CSS file in your HTML just as in the online version:"}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-html",children:`<head>
  <link rel="stylesheet" href="/modus-web-components/modus-icons.css" />
</head>
`})}),`
`,n.jsx(o.h2,{id:"2-usage-in-components",children:"2. Usage in Components"}),`
`,n.jsx(o.p,{children:"Once the stylesheet is loaded, you can use icons in any framework:"}),`
`,n.jsx(o.h3,{id:"web-components",children:"Web Components"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-html",children:`<!-- Outlined icon (default) -->
<modus-wc-icon name="alert" variant="outlined"></modus-wc-icon>

<!-- Solid icon -->
<modus-wc-icon name="alert" variant="solid"></modus-wc-icon>
`})}),`
`,n.jsx(o.h3,{id:"react",children:"React"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { ModusWcIcon } from '@trimble-oss/moduswebcomponents-react';

export function IconExamples() {
  return (
    <div>
      {/* Outlined */}
      <ModusWcIcon name="alert" variant="outlined" />

      {/* Solid */}
      <ModusWcIcon name="alert" variant="solid" />

      {/* Accessible icon */}
      <ModusWcIcon
        name="accessibility_circle"
        variant="solid"
        decorative={false}
        aria-label="Accessibility features"
      />

      {/* Custom styling */}
      <ModusWcIcon
        name="add_bold"
        variant="outlined"
        decorative
        style={{ color: 'var(--modus-wc-color-trimble-blue)' }}
      />
    </div>
  );
}
`})}),`
`,n.jsx(o.h3,{id:"angular-vue-etc",children:"Angular, Vue, etc."}),`
`,n.jsx(o.p,{children:"Follow the same approach — just make sure to include the global CSS file once in your application."})]})}function f(s={}){const{wrapper:o}={...i(),...s.components};return o?n.jsx(o,{...s,children:n.jsx(e,{...s})}):e(s)}export{f as default};
