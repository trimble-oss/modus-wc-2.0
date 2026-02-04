import{j as e,M as r}from"./index-BIX45e6B.js";import{useMDXComponents as s}from"./index-BiTIQ3-w.js";import"./iframe-DKFc1APh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-aQYXhgXp.js";import"./index-DrFu-skq.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/Modus Logo Usage"}),`
`,e.jsx(o.h1,{id:"modus-logo-usage",children:"Modus Logo Usage"}),`
`,e.jsx(o.h2,{id:"️-important-asset-configuration-required",children:"⚠️ Important: Asset Configuration Required"}),`
`,e.jsxs(o.p,{children:["Unlike other Modus components, ",e.jsxs(o.strong,{children:["ModusWcLogo requires ",e.jsx(o.code,{children:"setAssetPath()"})," to be called"]})," before use. Without this, you'll encounter:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`TypeError: Failed to construct 'URL': Invalid base URL
`})}),`
`,e.jsxs(o.p,{children:["Add this to your ",e.jsx(o.code,{children:"App.tsx"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-typescript",children:`import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

setAssetPath(
  'https://cdn.jsdelivr.net/npm/@trimble-oss/moduswebcomponents@latest/collection/components/modus-wc-logo/'
);
`})})]})}function a(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{a as default};
