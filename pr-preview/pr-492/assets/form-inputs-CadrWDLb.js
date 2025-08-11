import{j as n,M as l}from"./index-DsUGgneJ.js";import{useMDXComponents as i}from"./index-D88jw29A.js";import"./iframe-B3AJ1DX9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Documentation/Form Inputs"}),`
`,n.jsx(e.h1,{id:"form-inputs",children:"Form Inputs"}),`
`,n.jsx(e.h2,{id:"controlled-input-pattern",children:"Controlled Input Pattern"}),`
`,n.jsx(e.p,{children:"The controlled input pattern is a design pattern where the form element's value is controlled by the application state rather than the DOM element itself. This pattern offers several benefits:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Single source of truth for input values"}),`
`,n.jsx(e.li,{children:"Ability to validate and transform input data in real-time"}),`
`,n.jsx(e.li,{children:"Simplified form state management"}),`
`,n.jsx(e.li,{children:"Improved testability and debugging"}),`
`]}),`
`,n.jsx(e.h3,{id:"angular",children:"Angular"}),`
`,n.jsx(e.p,{children:"Angular uses two-way data binding with ngModel to implement the controlled input pattern efficiently."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Component } from '@angular/core';

@Component({
  selector: 'controlled-text-input',
  template: \`
    <modus-wc-text-input
      (inputChange)="onInputChange($event)"
      [value]="inputValue"
    >
    </modus-wc-text-input>
  \`,
})
export class ControlledTextInput {
  inputValue: string = '';

  onInputChange(event: CustomEvent) {
    this.inputValue = event.detail.target.value;

    // You can add validation or transformation logic here
  }
}
`})}),`
`,n.jsx(e.h3,{id:"react",children:"React"}),`
`,n.jsx(e.p,{children:"React's controlled input pattern binds form elements to state values and handlers, making React a natural fit for controlled inputs."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useState } from 'react';

function ControlledTextInput() {
  const [value, setValue] = useState('');

  // Handle input changes
  const handleChange = (event: CustomEvent) => {
    setValue(event.detail.target.value);
  };

  return <ModusWcTextInput onInputChange={handleChange} value={value} />;
}
`})}),`
`,n.jsx(e.h3,{id:"web-components",children:"Web Components"}),`
`,n.jsx(e.p,{children:"Web Components can implement the controlled input pattern by exposing properties and events that allow parent applications to manage state externally."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Example of using the Modus Text Input as a controlled component
const textInput = document.getElementById('first-name');
let inputValue = ''; // State lives in the parent application

// Set initial value
textInput.value = inputValue;

// Listen for changes
textInput.addEventListener('inputChange', (event) => {
  // Update our state
  inputValue = event.detail.target.value;

  // You can perform validation or transformations here

  // Update the input to reflect the new state
  // This step is only needed if you transform the value
  textInput.value = inputValue;
});
`})})]})}function c(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{c as default};
