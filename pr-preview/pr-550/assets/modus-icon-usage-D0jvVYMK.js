import{j as s,M as l}from"./index-DKbjrDK2.js";import{useMDXComponents as i}from"./index-BDWDIZc9.js";import"./iframe-CH0xKn_l.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(l,{title:"Documentation/Modus Icon Usage"}),`
`,s.jsx(e.h1,{id:"modus-icon-usage",children:"Modus Icon Usage"}),`
`,s.jsxs(e.p,{children:["Several components require ",s.jsx(e.a,{href:"https://modus-icons.trimble.com",rel:"nofollow",children:"Modus icons"}),` to be installed in the host application. To install
icons, add the following html to your application.`]}),`
`,s.jsx("b",{children:s.jsxs(e.p,{children:[`Starting from version 0.0.0-beta.3, Modus Web Components now includes the CSS
for both outlined and solid icon variants. You can use either set by importing
the `,s.jsx(e.code,{children:"modus-icons.css"})," file."]})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<head>
  <link rel="stylesheet" href="path-to-your-assets/modus-icons.css" />
</head>
`})}),`
`,s.jsx(e.p,{children:"You can also still use the CDN approach:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<head>
  <link
    rel="preload"
    href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
    as="style"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
  />
</head>
`})}),`
`,s.jsx(e.h2,{id:"offline-usage",children:"Offline usage"}),`
`,s.jsx(e.p,{children:"For applications requiring offline capability or improved performance, you can bundle Modus icons directly with your app."}),`
`,s.jsxs(e.h3,{id:"1-install-the-trimble-ossmodus-icons-package",children:["1. Install the ",s.jsx(e.code,{children:"@trimble-oss/modus-icons"})," package:"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-bash",children:`npm install @trimble-oss/modus-icons
`})}),`
`,s.jsx(e.h3,{id:"2-use-the-pre-bundled-modus-icons-css-file",children:"2. Use the pre-bundled Modus Icons CSS file:"}),`
`,s.jsx(e.p,{children:"If you're using Modus Web Components, you can directly import the bundled CSS file:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<link rel="stylesheet" href="/path-to-modus-web-components/modus-icons.css" />
`})}),`
`,s.jsx(e.p,{children:"This file includes both outlined and solid variants, which you can use with these classes:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:".modus-icons-outlined"})," - For outlined icons"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:".modus-icons-solid"})," - For solid icons"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:".modus-icons"})," - For default style (depends on which specific icon file was loaded last)"]}),`
`]}),`
`,s.jsx(e.h3,{id:"3-or-copy-the-required-font-files-and-styles-manually",children:"3. Or copy the required font files and styles manually:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["From ",s.jsx(e.code,{children:"node_modules/@trimble-oss/modus-icons/dist/modus-outlined/fonts/"}),", copy:",`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"modus-icons.css"})}),`
`,s.jsx(e.li,{children:"Font files (.woff, .woff2, etc.)"}),`
`]}),`
`]}),`
`,s.jsx(e.li,{children:"Place them in a publicly accessible directory (e.g., /public/fonts/)."}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<head>
  <link
    rel="preload"
    href="/path-to-your-local-modus-icons-font.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="/path-to-your-local-modus-icons.css" />
</head>
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.p,{children:["Need help? Check out our ",s.jsx(e.a,{href:"https://github.com/trimble-oss/modus-web-components",rel:"nofollow",children:"GitHub repository"}),`
or `,s.jsx(e.a,{href:"https://github.com/trimble-oss/modus-web-components/issues",rel:"nofollow",children:"raise an issue"}),"."]})]})}function u(n={}){const{wrapper:e}={...i(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(o,{...n})}):o(n)}export{u as default};
