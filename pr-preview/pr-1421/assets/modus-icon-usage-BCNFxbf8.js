import{j as n,M as l}from"./index-i-Fyb84L.js";import{useMDXComponents as i}from"./index-chf7RCgP.js";import"./iframe-BOldAhUJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C__6K5js.js";import"./index-DrFu-skq.js";function o(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Documentation/Modus Icon Usage"}),`
`,n.jsx(s.h1,{id:"modus-icon-usage",children:"Modus Icon Usage"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"modus-wc-icon"})," can render ",n.jsx(s.strong,{children:"Modus Icons 1.0"})," ligatures or ",n.jsx(s.strong,{children:"Modus Icons 2.0"})," glyphs from ",n.jsx(s.code,{children:"@trimble-oss/modus-icons-css"}),". The ",n.jsx(s.code,{children:"version"})," prop selects the set (",n.jsx(s.code,{children:"'1.0'"})," by default). Names that exist in only one set fall back to that set in both versions."]}),`
`,n.jsxs(s.p,{children:["Because fallback can emit either markup, load ",n.jsx(s.strong,{children:"both"})," the 1.0 font sheet and a 2.0 sheet in the general case. For 2.0, choose ",n.jsx(s.strong,{children:"one"})," delivery mode: CSS mask (recommended) or icon font. Do not load both 2.0 modes on the same page — they share ",n.jsx(s.code,{children:".modus-icon-*"})," class names but paint differently."]}),`
`,n.jsx(s.h2,{id:"name-resolution",children:"Name resolution"}),`
`,n.jsxs(s.p,{children:["The ",n.jsx(s.code,{children:"version"})," prop is ",n.jsx(s.code,{children:"'1.0'"})," or ",n.jsx(s.code,{children:"'2.0'"}),". Hyphen or underscore is accepted for 1.0 names (",n.jsx(s.code,{children:"add_bold"})," and ",n.jsx(s.code,{children:"add-bold"})," both resolve)."]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:n.jsx("code",{children:"name"})}),n.jsx("th",{children:n.jsxs(s.p,{children:[n.jsx("code",{children:'version="1.0"'})," (default)"]})}),n.jsx("th",{children:n.jsx("code",{children:'version="2.0"'})})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs(s.p,{children:["Mapped 1.0 name (",n.jsx("code",{children:"add"}),", ",n.jsx("code",{children:"arrow_left"}),")"]})}),n.jsx("td",{children:"1.0 ligature"}),n.jsx("td",{children:n.jsxs(s.p,{children:["Mapped 2.0 slug (",n.jsx("code",{children:"plus"}),", ",n.jsx("code",{children:"arrow-left"}),")"]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs(s.p,{children:["Unmapped 1.0 name (",n.jsx("code",{children:"address"}),")"]})}),n.jsx("td",{children:"1.0 ligature"}),n.jsx("td",{children:"1.0 ligature (same glyph)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs(s.p,{children:["2.0-only slug (",n.jsx("code",{children:"ship"}),", ",n.jsx("code",{children:"circle-truck"}),")"]})}),n.jsx("td",{children:"2.0 mask (same glyph)"}),n.jsx("td",{children:"2.0 mask"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs(s.p,{children:["Identity-mapped name in both sets (",n.jsx("code",{children:"satellite"}),")"]})}),n.jsx("td",{children:"1.0 ligature"}),n.jsx("td",{children:"2.0 mask"})]})]})]}),`
`,n.jsx(s.h2,{id:"1-modern-browsers-css-mask-recommended",children:"1. Modern browsers (CSS mask, recommended)"}),`
`,n.jsxs(s.p,{children:["Mask sheets tint with ",n.jsx(s.code,{children:"color"})," / ",n.jsx(s.code,{children:"currentColor"}),". Import regular for outlined icons and fill if you use ",n.jsx(s.code,{children:'variant="solid"'}),"."]}),`
`,n.jsx(s.h3,{id:"from-the-web-components-package",children:"From the Web Components package"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-js",children:`import '@trimble-oss/moduswebcomponents/modus-icons-2.css';
`})}),`
`,n.jsx(s.p,{children:"Or load only the sets you need:"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-js",children:`import '@trimble-oss/moduswebcomponents/modus-icons-regular.css';
import '@trimble-oss/moduswebcomponents/modus-icons-fill.css';
`})}),`
`,n.jsxs(s.h3,{id:"from-trimble-ossmodus-icons-css-directly",children:["From ",n.jsx(s.code,{children:"@trimble-oss/modus-icons-css"})," directly"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`npm install @trimble-oss/modus-icons-css@0.10.0
`})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-js",children:`import '@trimble-oss/modus-icons-css/css/modus-icons-regular.min.css';
import '@trimble-oss/modus-icons-css/css/modus-icons-fill.min.css';
`})}),`
`,n.jsx(s.h3,{id:"cdn",children:"CDN"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-html",children:`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons-css@0.10.0/css/modus-icons-regular.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons-css@0.10.0/css/modus-icons-fill.min.css"
/>
`})}),`
`,n.jsxs(s.p,{children:["Regular is about 109 KB gzipped; fill is about 182 KB gzipped. Skip fill if you never use ",n.jsx(s.code,{children:'variant="solid"'}),"."]}),`
`,n.jsx(s.h2,{id:"2-legacy-browsers-without-css-mask-icon-font",children:"2. Legacy browsers without CSS mask (icon font)"}),`
`,n.jsxs(s.p,{children:["Use this ",n.jsx(s.strong,{children:"instead of"})," the mask sheets, not in addition to them. Markup and class names are unchanged — only the ",n.jsx(s.code,{children:"<link>"})," differs."]}),`
`,n.jsx(s.p,{children:"Font glyphs are single-color and stroke-traced. True duotone requires the mask path."}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-js",children:`import '@trimble-oss/moduswebcomponents/modus-icons-2-font/css/modus-icons-font-regular.css';
import '@trimble-oss/moduswebcomponents/modus-icons-2-font/css/modus-icons-font-fill.css';
`})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-html",children:`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons-css@0.10.0/css/modus-icons-font-regular.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons-css@0.10.0/css/modus-icons-font-fill.css"
/>
`})}),`
`,n.jsxs(s.p,{children:["If you copy files into ",n.jsx(s.code,{children:"public/"}),", keep the package layout so the font CSS ",n.jsx(s.code,{children:'url("../fonts/{regular,fill}/...")'})," paths still resolve:"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`public/
  └── modus-icons-2-font/
      ├── css/
      │   ├── modus-icons-font-regular.css
      │   └── modus-icons-font-fill.css
      └── fonts/
          ├── regular/
          └── fill/
`})}),`
`,n.jsx(s.h2,{id:"3-10-ligature-font",children:"3. 1.0 ligature font"}),`
`,n.jsxs(s.p,{children:["Required for 1.0 ligatures, including unmapped names and the default ",n.jsx(s.code,{children:'version="1.0"'})," path. There are 162 unmapped 1.0 names with no 2.0 slug."]}),`
`,n.jsx(s.h3,{id:"option-a-online-usage-cdn",children:"Option A: Online usage (CDN)"}),`
`,n.jsx(s.p,{children:"Create a file at:"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`/public/modus-web-components/modus-icons.css
`})}),`
`,n.jsx(s.p,{children:"with the following contents:"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`@font-face {
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
`,n.jsx(s.p,{children:"Then include it in your app:"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-html",children:`<head>
  <link rel="stylesheet" href="/modus-web-components/modus-icons.css" />
</head>
`})}),`
`,n.jsxs(s.p,{children:["The Web Components package also exports this sheet as ",n.jsx(s.code,{children:"@trimble-oss/moduswebcomponents/modus-icons.css"}),"."]}),`
`,n.jsx(s.h3,{id:"option-b-offline-usage",children:"Option B: Offline usage"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsx(s.li,{children:"Install the 1.0 Modus Icons package:"}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`npm install @trimble-oss/modus-icons
`})}),`
`,n.jsxs(s.ol,{start:"2",children:[`
`,n.jsx(s.li,{children:"Download the font files:"}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`node_modules/@trimble-oss/modus-icons/dist/modus-outlined/fonts/modus-icons.woff2
node_modules/@trimble-oss/modus-icons/dist/modus-solid/fonts/modus-icons.woff2
`})}),`
`,n.jsxs(s.ol,{start:"3",children:[`
`,n.jsx(s.li,{children:"Create this directory structure in your project:"}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`public/
  └── modus-web-components/
      ├── fonts/
      │   ├── modus-icons-outlined.woff2  (renamed from modus-outlined/fonts/modus-icons.woff2)
      │   └── modus-icons-solid.woff2     (renamed from modus-solid/fonts/modus-icons.woff2)
      └── modus-icons.css
`})}),`
`,n.jsxs(s.ol,{start:"4",children:[`
`,n.jsxs(s.li,{children:["Create a modified ",n.jsx(s.code,{children:"modus-icons.css"})," file that references the local font files:"]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`@font-face {
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
`,n.jsxs(s.ol,{start:"5",children:[`
`,n.jsx(s.li,{children:"Include the CSS file in your HTML just as in the online version:"}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-html",children:`<head>
  <link rel="stylesheet" href="/modus-web-components/modus-icons.css" />
</head>
`})}),`
`,n.jsx(s.h2,{id:"4-usage-in-components",children:"4. Usage in components"}),`
`,n.jsx(s.p,{children:"Once the stylesheet is loaded, you can use icons in any framework:"}),`
`,n.jsx(s.h3,{id:"web-components",children:"Web Components"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-html",children:`<!-- Outlined 2.0 icon from a 1.0 alias -->
<modus-wc-icon name="alert" variant="outlined"></modus-wc-icon>

<!-- Solid 2.0 icon -->
<modus-wc-icon name="alert" variant="solid"></modus-wc-icon>

<!-- Native 2.0 slug -->
<modus-wc-icon name="ship"></modus-wc-icon>
`})}),`
`,n.jsx(s.h3,{id:"react",children:"React"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { ModusWcIcon } from '@trimble-oss/moduswebcomponents-react';

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
`,n.jsx(s.h3,{id:"angular-vue-etc",children:"Angular, Vue, etc."}),`
`,n.jsx(s.p,{children:"Follow the same approach — include the 2.0 stylesheet once, plus the 1.0 sheet if you still render unmapped 1.0 names."})]})}function h(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(o,{...e})}):o(e)}export{h as default};
