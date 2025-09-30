import{j as e,M as r}from"./index-CEYbkxqq.js";import{useMDXComponents as s}from"./index-sJdXGBvm.js";import"./iframe-BNv9mtXJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/Frameworks/Vue"}),`
`,e.jsx(n.h1,{id:"vue-framework-integration",children:"Vue Framework Integration"}),`
`,e.jsx(n.p,{children:"This guide will help you get started with consuming the Modus Vue Web Component library in your Vue project."}),`
`,e.jsx(n.p,{children:`We highly recommend using the Modus Vue Components library for Vue based projects.
These components are automatically generated using the Stencil Vue Framework Integration.`}),`
`,e.jsx(n.p,{children:"Follow the steps outlined below to integrate and use Modus Vue Web Components effectively."}),`
`,e.jsxs(n.p,{children:["Please refer to the ",e.jsx(n.a,{href:"https://stenciljs.com/docs/vue",rel:"nofollow",children:"official stencil documentation"})," for more information on how to integrate with your Vue project."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:`Modus Vue Components have a peer dependency with Modus Web Components and require the
installation of both packages.`}),`
`,e.jsxs(n.h3,{id:"1-install-trimble-ossmoduswebcomponents-vue",children:["1. Install ",e.jsx(n.code,{children:"@trimble-oss/moduswebcomponents-vue"}),":"]}),`
`,e.jsx("b",{children:e.jsx(n.p,{children:`Lock the installed package versions to avoid unintended breakages on future
npm installs.`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @trimble-oss/moduswebcomponents @trimble-oss/moduswebcomponents-vue@<latest-version>
# e.g.,
npm install @trimble-oss/moduswebcomponents@1.0.0 @trimble-oss/moduswebcomponents-vue@1.0.0
`})}),`
`,e.jsx(n.h3,{id:"2-set-up-the-styling",children:"2. Set up the styling:"}),`
`,e.jsx(n.p,{children:"You will need to import our styling in your main JavaScript or CSS file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// main.ts
import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';
`})}),`
`,e.jsx(n.h3,{id:"3-use-the-component-library-as-normal",children:"3. Use the component library as normal:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Use camelCase for multi-word properties (e.g., ",e.jsx(n.code,{children:"alertTitle"})," instead of ",e.jsx(n.code,{children:"alert-title"}),")"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <ModusWcButton color="primary" @click="handleClick"> Click Me </ModusWcButton>

  <ModusWcBadge aria-label="Badge" content="Words" />
</template>

<script setup lang="ts">
import {
  ModusWcButton,
  ModusWcBadge,
} from '@trimble-oss/moduswebcomponents-vue';

const handleClick = () => {
  console.log('Button clicked!');
};
<\/script>
`})}),`
`,e.jsx(n.h2,{id:"custom-elements-configuration",children:"Custom Elements Configuration"}),`
`,e.jsx(n.p,{children:"When using web components directly in Vue, you need to configure Vue to recognize custom elements:"}),`
`,e.jsxs(n.h3,{id:"1-install-trimble-ossmoduswebcomponents",children:["1. Install ",e.jsx(n.code,{children:"@trimble-oss/moduswebcomponents"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @trimble-oss/moduswebcomponents@latest
`})}),`
`,e.jsx(n.h3,{id:"2-set-up-the-styling-1",children:"2. Set up the styling:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// main.ts
import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';
`})}),`
`,e.jsx(n.h3,{id:"3-configure-vue-to-work-with-custom-elements",children:"3. Configure Vue to work with custom elements:"}),`
`,e.jsxs(n.p,{children:["In your ",e.jsx(n.code,{children:"vite.config.ts"}),", you need to tell Vue to ignore custom elements:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Tell Vue to ignore all components starting with "modus-wc"
          isCustomElement: (tag) => tag.startsWith('modus-wc'),
        },
      },
    }),
  ],
});
`})}),`
`,e.jsx(n.h3,{id:"4-use-the-web-components-in-your-vue-templates",children:"4. Use the web components in your Vue templates:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <modus-wc-button label="Click Me" />
  <modus-wc-badge aria-label="Badge" content="Words" />
</template>
`})}),`
`,e.jsx(n.h2,{id:"wrapping-components",children:"Wrapping Components"}),`
`,e.jsx(n.p,{children:"When using Modus Vue Components directly, it is recommended to wrap them in corresponding Vue components within your application. This will abstract away from the library dependency, allowing more flexibility for you and your application in the future."}),`
`,e.jsx(n.p,{children:"Wrapped Modus Avatar Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <ModusWcAvatar v-bind="$props" />
</template>

<script setup lang="ts">
import { ModusWcAvatar } from '@trimble-oss/moduswebcomponents-vue';
import type { ComponentProps } from 'vue-component-type-helpers';

interface Props extends ComponentProps<typeof ModusWcAvatar> {}

defineProps<Props>();
<\/script>
`})}),`
`,e.jsx(n.p,{children:"or, a more complex wrapper:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <ModusWcTextInput v-bind="$props" @inputChange="handleInputChange" />
</template>

<script setup lang="ts">
import { ModusWcTextInput } from '@trimble-oss/moduswebcomponents-vue';
import type { ComponentProps } from 'vue-component-type-helpers';

interface Props
  extends Omit<ComponentProps<typeof ModusWcTextInput>, 'onInputChange'> {
  onValueChange?: (value: string) => void;
}

const props = defineProps<Props>();

const handleInputChange = (e: CustomEvent) => {
  const value = e.detail.target.value;
  props.onValueChange?.(value);
};
<\/script>
`})})]})}function m(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{m as default};
