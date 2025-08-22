import{j as n,M as i}from"./index-osnTwqkW.js";import{useMDXComponents as e}from"./index-l2g_y5Cb.js";import"./iframe-DVxNSHWm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function t(s){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Documentation/Modus Icon Usage"}),`
`,n.jsx(o.h1,{id:"modus-icon-usage",children:"Modus Icon Usage"}),`
`,n.jsx(o.p,{children:"Modus Web Components require Modus Icons."}),`
`,n.jsx(o.p,{children:"Starting from v0.0.0-beta.3, the Web Components package supports both outlined and solid icon variants through a single CSS file."}),`
`,n.jsx(o.h2,{id:"1-installation",children:"1. Installation"}),`
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
`})})]})}function f(s={}){const{wrapper:o}={...e(),...s.components};return o?n.jsx(o,{...s,children:n.jsx(t,{...s})}):t(s)}export{f as default};
