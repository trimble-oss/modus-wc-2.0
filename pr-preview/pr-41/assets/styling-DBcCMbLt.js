import{ae as e,af as o}from"./index-DJSBpcVc.js";import{useMDXComponents as i}from"./index-BSj771as.js";import"./iframe-BcNiF-RD.js";import"../sb-preview/runtime.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Documentation/Styling"}),`
`,e.jsx(n.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(n.p,{children:"The Modus Web Components library provides several ways to customize the appearance of components. Let's explore these using the Theme Switcher component as an example."}),`
`,e.jsx(n.h2,{id:"theme-system",children:"Theme System"}),`
`,e.jsx(n.p,{children:"Our theme system is built on DaisyUI and provides two default themes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"modus-classic-light"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"modus-classic-dark"})}),`
`]}),`
`,e.jsx(n.h3,{id:"using-themes",children:"Using Themes"}),`
`,e.jsx(n.h4,{id:"theme-switcher-recommended",children:"Theme Switcher (Recommended)"}),`
`,e.jsx(n.p,{children:"The Theme Switcher component allows users to toggle between themes and modes (light and dark):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<modus-wc-theme-provider>
  <modus-wc-theme-switcher aria-label="Toggle theme" controls="mode" />
</modus-wc-theme-provider>
`})}),`
`,e.jsxs(n.p,{children:[`The Theme Switcher will automatically handle theme switching through our theme store. Theme values are stored
in local storage using the key `,e.jsx(n.code,{children:"modus-theme-config"}),"."]}),`
`,e.jsx(n.h4,{id:"manual",children:"Manual"}),`
`,e.jsxs(n.p,{children:["To manually apply a theme to your application, set the ",e.jsx(n.code,{children:"class"}),", ",e.jsx(n.code,{children:"data-theme"}),", and ",e.jsx(n.code,{children:"data-mode"})," attributes on your ",e.jsx(n.code,{children:"html"})," element:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Light theme -->
<html class="light" data-theme="modus-classic-light" data-mode="light">
  ...
</html>

<!-- Dark theme -->
<html class="dark" data-theme="modus-classic-dark" data-mode="dark">
  ...
</html>
`})}),`
`,e.jsx(n.h3,{id:"contributing-new-themes",children:"Contributing New Themes"}),`
`,e.jsxs(n.p,{children:["We're using DaisyUI. Read their documentation on ",e.jsx(n.a,{href:"https://daisyui.com/docs/themes/#-4",rel:"nofollow",children:"custom theming"}),`
and `,e.jsx(n.a,{href:"https://daisyui.com/docs/colors/",rel:"nofollow",children:"colors"})," before creating a new theme."]}),`
`,e.jsx(n.p,{children:"If you'd like to add a new theme to the library:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Create a new theme file in ",e.jsx(n.code,{children:"src/styles/themes/"})]}),`
`,e.jsxs(n.li,{children:["Follow the existing theme structure from ",e.jsx(n.code,{children:"modus-classic.ts"}),":"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const myNewTheme = {
  light: {
    // Design Tokens
    '--rounded-box': '0.5rem',
    // ... other token values

    // Colors - must be direct color values, CSS variables not supported
    primary: '#0063a3',
    'primary-focus': '#003054',
    // ... other color values
  },
  dark: {
    // ... dark theme values
  },
};
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:["Add your theme (with supported modes) to ",e.jsx(n.code,{children:"tailwind.config.ts"}),":"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export default {
  // ... other config
  daisyui: {
    themes: [
      { 'modus-classic-light': modusClassic.light },
      { 'modus-classic-dark': modusClassic.dark },
      { 'my-theme-light': myNewTheme.light },
      { 'my-theme-dark': myNewTheme.dark },
    ],
  },
} satisfies Config;
`})}),`
`,e.jsx(n.h2,{id:"component-level-styling",children:"Component-Level Styling"}),`
`,e.jsxs(n.p,{children:["Every component accepts a ",e.jsx(n.code,{children:"customClass"})," prop for direct styling. Here's how to style the Theme Switcher:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<modus-wc-theme-switcher
  aria-label="Toggle theme"
  custom-class="my-theme-switcher"
/>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-theme-switcher {
  /* Custom styles */
  padding: 1rem;
  background-color: blue;
}
`})}),`
`,e.jsx(n.h2,{id:"styling-best-practices",children:"Styling Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Use themes for global styling consistency"}),`
`,e.jsx(n.li,{children:"Use component props for component-specific variations"}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"customClass"})," for unique styling needs"]}),`
`,e.jsx(n.li,{children:"If you need to contribute a new theme, follow the existing theme structure"}),`
`,e.jsxs(n.li,{children:["Always provide ",e.jsx(n.code,{children:"ariaLabel"})," for accessibility"]}),`
`]}),`
`,e.jsx(n.h2,{id:"limitations",children:"Limitations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"CSS custom properties (variables) are not supported in themes due to DaisyUI constraints"}),`
`,e.jsx(n.li,{children:"Shadow DOM is not used, so global styles may affect components"}),`
`,e.jsx(n.li,{children:"Theme changes require rebuilding the library and publishing a new package version"}),`
`,e.jsxs(n.li,{children:["The Theme Switcher requires a parent element with a ",e.jsx(n.code,{children:"data-theme"})," attribute to function properly"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Need help? Check out our ",e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-web-components",rel:"nofollow",children:"GitHub repository"}),`
or `,e.jsx(n.a,{href:"https://github.com/trimble-oss/modus-web-components/issues",rel:"nofollow",children:"raise an issue"}),"."]})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
