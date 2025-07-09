import{j as e,M as l}from"./index-W_7vFJMq.js";import{useMDXComponents as i}from"./index-undVqxTJ.js";import"./iframe-B7cXwtPX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Documentation/Modus Icon Usage"}),`
`,e.jsx(n.h1,{id:"modus-icon-usage",children:"Modus Icon Usage"}),`
`,e.jsxs(n.p,{children:["Several components require ",e.jsx(n.a,{href:"https://modus-icons.trimble.com",rel:"nofollow",children:"Modus icons"}),` to be installed in the host application. To install
icons, add the following html to your application.`]}),`
`,e.jsx("b",{children:e.jsxs(n.p,{children:[`Modus (font) icons currently only supports the usage of one icon set
(outlined, filled, transportation) per application. If you require multiple
sets, reach out to `,e.jsx(n.a,{href:"https://mail.google.com/chat/u/0/#chat/space/AAAAexugR1k",rel:"nofollow",children:`Modus
Design`}),` and comment
on this `,e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-icons/issues/363",rel:"nofollow",children:"GitHub Issue"}),"."]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<head>
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
`,e.jsx(n.h2,{id:"offline-usage",children:"Offline usage"}),`
`,e.jsx(n.p,{children:"For applications requiring offline capability or improved performance, you can bundle Modus icons directly with your app."}),`
`,e.jsxs(n.h3,{id:"1-install-the-trimble-ossmodus-icons-package",children:["1. Install the ",e.jsx(n.code,{children:"@trimble-oss/modus-icons"})," package:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @trimble-oss/modus-icons
`})}),`
`,e.jsx(n.h3,{id:"2-copy-the-required-font-files-and-styles-to-your-application",children:"2. Copy the required font files and styles to your application:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["From ",e.jsx(n.code,{children:"node_modules/@trimble-oss/modus-icons/dist/modus-outlined/fonts/"}),", copy:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"modus-icons.css"})}),`
`,e.jsx(n.li,{children:"Font files (.woff, .woff2, etc.)"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Place them in a publicly accessible directory (e.g., /public/fonts/)."}),`
`]}),`
`,e.jsx(n.h3,{id:"3-reference-the-local-stylesheet-in-your-application",children:"3. Reference the local stylesheet in your application:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<head>
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
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["Need help? Check out our ",e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-web-components",rel:"nofollow",children:"GitHub repository"}),`
or `,e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-web-components/issues",rel:"nofollow",children:"raise an issue"}),"."]})]})}function u(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{u as default};
