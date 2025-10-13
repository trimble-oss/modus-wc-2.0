import{j as e,M as i}from"./index-pW5fliV8.js";import{useMDXComponents as t}from"./index-BwmAEJ7I.js";import"./iframe-Bq6zxzkI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentation/Styling"}),`
`,e.jsx(s.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(s.h2,{id:"custom-styling",children:"Custom Styling"}),`
`,e.jsx(s.p,{children:"The Modus Web Components library provides several ways to customize the appearance of components."}),`
`,e.jsx(s.h3,{id:"1-use-a-theme",children:"1. Use a Theme"}),`
`,e.jsxs(s.p,{children:[`Our components ship preloaded with several themes. A list of themes can be found
`,e.jsx(s.a,{href:"https://github.com/trimble-oss/modus-wc-2.0/blob/main/tailwind.config.ts",rel:"nofollow",children:"here"}),`
within the `,e.jsx(s.code,{children:"daisyui.themes"})," array. Themes can be applied in multiple ways."]}),`
`,e.jsxs(s.h4,{id:"a-using-the-themeswitcher-component",children:["a. Using the ",e.jsx(s.code,{children:"ThemeSwitcher"})," component:"]}),`
`,e.jsxs(s.p,{children:[`The Theme Switcher will automatically handle theme switching through our theme store. Theme
values are stored in local storage using the key `,e.jsx(s.code,{children:"modus-theme-config"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<modus-wc-theme-provider initial-theme='{ "theme": "modus-modern-light" }'>
  <modus-wc-theme-switcher aria-label="Toggle theme" />
</modus-wc-theme-provider>
`})}),`
`,e.jsx(s.h4,{id:"b-manually-applying-the-following-html",children:"b. Manually applying the following HTML:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- Light theme -->
<html class="light" data-theme="modus-modern-light" data-mode="light">
  ...
</html>

<!-- Dark theme -->
<html class="dark" data-theme="modus-modern-dark" data-mode="dark">
  ...
</html>
`})}),`
`,e.jsx(s.h3,{id:"2-override-css-custom-properties",children:"2. Override CSS Custom Properties"}),`
`,e.jsx(s.p,{children:"Our components use CSS custom properties for styling. You can override these globally or at the component level."}),`
`,e.jsxs(s.p,{children:[`A full list of overridable CSS custom properties can be found
`,e.jsx(s.a,{href:"https://github.com/trimble-oss/modus-wc-2.0/blob/main/src/styles/variables.scss",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  --modus-wc-primary-color: purple;
  --modus-wc-color-info: green;
  --modus-wc-font-weight-normal: 500;
}
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.modus-wc-btn {
  --modus-wc-border-radius-md: 20px;
}
`})}),`
`,e.jsx(s.h3,{id:"3-use-custom-css-classes",children:"3. Use Custom CSS Classes"}),`
`,e.jsxs(s.p,{children:["Many components accept a ",e.jsx(s.code,{children:"custom-class"})," attribute for additional styling:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<modus-wc-button
  label="Custom Button"
  custom-class="my-custom-button"
></modus-wc-button>
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.my-custom-button {
  background-color: purple;
  border-color: purple;
}
`})}),`
`,e.jsx(s.h3,{id:"4-apply-direct-css-overrides",children:"4. Apply Direct CSS Overrides"}),`
`,e.jsx(s.p,{children:"Since Shadow DOM is disabled, you can directly target component classes."}),`
`,e.jsxs(s.p,{children:["Our component classes are all prefixed with ",e.jsx(s.code,{children:"modus-wc-"})," to avoid collisions."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.modus-wc-btn {
  background-color: yellow;
  color: black;
}
`})}),`
`,e.jsx(s.h2,{id:"css-reset-tailwind-preflight",children:"CSS Reset (Tailwind Preflight)"}),`
`,e.jsxs(s.p,{children:[`Tailwind performs a CSS reset (preflight) that normalizes browser styles to ensure all component styles are applied
consistently across browsers. This reset is automatically loaded into applications consuming the library. We've
provided Modus-specific overrides in `,e.jsx(s.code,{children:"styles/tailwind.css"}),` to maintain compatibility with our design system, though
these overrides aren't exhaustive. If you need additional style adjustments, you can either:`]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Add custom CSS overrides in your application"}),`
`,e.jsx(s.li,{children:"Create a GitHub issue describing the needed override (contributions welcome)"}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.p,{children:["Need help? Check out our ",e.jsx(s.a,{href:"https://github.com/trimble-oss/modus-web-components",rel:"nofollow",children:"GitHub repository"}),`
or `,e.jsx(s.a,{href:"https://github.com/trimble-oss/modus-web-components/issues",rel:"nofollow",children:"raise an issue"}),"."]})]})}function m(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{m as default};
