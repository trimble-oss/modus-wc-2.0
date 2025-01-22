import{ae as e,af as r}from"./index-Dw9BHU9q.js";import{useMDXComponents as a}from"./index-BSj771as.js";import"./iframe-3SVFRfde.js";import"../sb-preview/runtime.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/Frameworks/React"}),`
`,e.jsx(n.h1,{id:"react-framework-integration",children:"React Framework Integration"}),`
`,e.jsx(n.p,{children:"This guide will help you get started with consuming the Modus React Web Component library in your React project."}),`
`,e.jsx(n.p,{children:`We highly recommend using the Modus React Components library for React based projects.
These components are automatically generated using the Stencil React Framework Integration.`}),`
`,e.jsx(n.p,{children:"Follow the steps outlined below to integrate and use Modus React Web Components effectively."}),`
`,e.jsxs(n.p,{children:["Please refer to the ",e.jsx(n.a,{href:"https://stenciljs.com/docs/react#consumer-usage",rel:"nofollow",children:"official stencil documentation"})," for more information on how to integrate with your React project."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:`Modus React Components have a peer dependency with Modus Web Components and require the
installation of both packages.`}),`
`,e.jsxs(n.h3,{id:"1-install-modus-wc-react",children:["1. Install ",e.jsx(n.code,{children:"modus-wc-react"}),":"]}),`
`,e.jsxs(n.p,{children:["Ensure that you specify the target version of React for the ",e.jsx(n.code,{children:"modus-wc-react"})," package (e.g., ",e.jsx(n.code,{children:"react18"})," for React 18)."]}),`
`,e.jsx("b",{children:e.jsx(n.p,{children:`Lock the installed package versions to avoid unintended breakages on future
npm installs.`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @trimble-cms/modus-wc-react@<latest-version>-react<target-version>
# e.g.,
npm install @trimble-cms/modus-wc-react@1.0.0-react18
`})}),`
`,e.jsx(n.h3,{id:"2-use-the-component-library-as-normal",children:"2. Use the component library as normal."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ModusWcBadge } from '@trimble-cms/modus-wc-react';

<ModusWcBadge aria-label="Badge" content="Words" />;
`})}),`
`,e.jsx(n.h3,{id:"using-the-controlled-input-pattern",children:"Using the Controlled Input Pattern"}),`
`,e.jsxs(n.p,{children:[`The controlled input pattern involves maintaining the state of the input's value within the React application or
component. The `,e.jsx(n.a,{href:"https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable",rel:"nofollow",children:"React Docs"}),`
describe this in more detail.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useState } from 'react';
import { ModusWcTextInput } from '@trimble-cms/modus-wc-react';

interface Props extends React.ComponentProps<typeof ModusWcTextInput> {}

const MyComponent: React.FC<Props> = (props) => {
  const [value, setValue] = useState('');

  const handleInputChange = (
    e: CustomEvent<HTMLModusWcTextInputElementEventMap['inputChange']>
  ) => {
    const value = e.detail.target.value;
    setValue(value);
  };

  return (
    <ModusWcTextInput
      {...props}
      onInputChange={handleInputChange}
      value={value}
    />
  );
};

export default MyComponent;
`})}),`
`,e.jsx(n.h3,{id:"wrapping-components",children:"Wrapping Components"}),`
`,e.jsx(n.p,{children:`When using Modus React Components directly, it is recommended to wrap it in corresponding React components within your application.
This will abstract away from the library dependency, allowing more flexibility for you and your application in the future.`}),`
`,e.jsx(n.p,{children:"Wrapped Modus component example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { ModusWcAvatar } from '@trimble-cms/modus-wc-react';

interface Props extends React.ComponentProps<typeof ModusWcAvatar> {}

const Avatar: React.FC<Props> = (props) => {
  return <ModusWcAvatar {...props} />;
};

export default Avatar;
`})}),`
`,e.jsx(n.p,{children:"or, a more complex wrapper:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { ModusWcTextInput } from '@trimble-cms/modus-wc-react';

interface Props
  extends Omit<React.ComponentProps<typeof ModusWcTextInput>, 'inputChange'> {
  onValueChange: (value: string) => void;
}

const TextInput: React.FC<Props> = (props) => {
  const handleInputChange = (
    e: CustomEvent<HTMLModusWcTextInputElementEventMap['inputChange']>
  ) => {
    const value = e.detail.target.value;
    props.onValueChange(value);
  };

  return <ModusWcTextInput {...props} onInputChange={handleInputChange} />;
};

export default TextInput;
`})})]})}function x(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{x as default};
