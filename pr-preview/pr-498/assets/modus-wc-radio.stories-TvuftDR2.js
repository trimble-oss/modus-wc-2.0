import{w as f}from"./decorator-D4YmxizW.js";import{x as d}from"./lit-element-C8zulti1.js";import{o as n}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const y={title:"Components/Forms/Radio",component:"modus-wc-radio",args:{"custom-class":"",disabled:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[f],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>d`
      <modus-wc-radio
        aria-label="Radio"
        custom-class=${n(e["custom-class"])}
        ?disabled=${e.disabled}
        input-id=${n(e["input-id"])}
        input-tab-index=${n(e["input-tab-index"])}
        label=${n(e.label)}
        name=${n(e.name)}
        ?required=${e.required}
        size=${n(e.size)}
        .value=${e.value}
      ></modus-wc-radio>
    `},i={render:e=>d`
      <style>
        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .radio-group legend {
          margin-bottom: 0.5rem;
        }
      </style>

      <main role="main">
        <fieldset class="radio-group">
          <legend>Select an option:</legend>

          <modus-wc-radio
            label="Option 1"
            name="radio-group-demo"
            input-id="option1"
            ?disabled=${e.disabled}
            size=${n(e.size)}
            .value=${!0}
            @inputChange=${o=>{console.log("Selected:",o.target)}}
          ></modus-wc-radio>

          <modus-wc-radio
            label="Option 2"
            name="radio-group-demo"
            input-id="option2"
            ?disabled=${e.disabled}
            size=${n(e.size)}
            .value=${!1}
            @inputChange=${o=>{console.log("Selected:",o.target)}}
          ></modus-wc-radio>

          <modus-wc-radio
            label="Option 3"
            name="radio-group-demo"
            input-id="option3"
            ?disabled=${e.disabled}
            size=${n(e.size)}
            .value=${!1}
            @inputChange=${o=>{console.log("Selected:",o.target)}}
          ></modus-wc-radio>
        </fieldset>
      </main>
    `},t={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\`small\`, \`medium\`) to abbreviations (\`xs\`, \`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop            | 2.0 Prop    | Notes                                                |
|---------------------|-------------|----------------------------------------------------- |
| checked             | value       |                                                      |
| disabled            | disabled    |                                                      |
| handle-button-click |             | Not carried over                                     |
| handle-keydown      |             | Not carried over                                     |
| id                  | input-id    |                                                      |
| label               | label       |                                                      |
| name                | name        |                                                      |
| ref                 |             | Not carried over                                     |
| size                | size        | \`small\` → \`sm\`, \`medium\` → \`md\`              |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes                                               |
|-------------|-------------|-----------------------------------------------------|
| buttonClick | inputChange | Now emits an \`InputEvent\` instead of a \`string\` |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>d`<div></div>`};var r,s,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-radio
        aria-label="Radio"
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
        name=\${ifDefined(args.name)}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        .value=\${args.value}
      ></modus-wc-radio>
    \`;
  }
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var u,m,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <style>
        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .radio-group legend {
          margin-bottom: 0.5rem;
        }
      </style>

      <main role="main">
        <fieldset class="radio-group">
          <legend>Select an option:</legend>

          <modus-wc-radio
            label="Option 1"
            name="radio-group-demo"
            input-id="option1"
            ?disabled=\${args.disabled}
            size=\${ifDefined(args.size)}
            .value=\${true}
            @inputChange=\${(e: CustomEvent) => {
      // In a real app, you would update your state management here
      console.log('Selected:', e.target);
    }}
          ></modus-wc-radio>

          <modus-wc-radio
            label="Option 2"
            name="radio-group-demo"
            input-id="option2"
            ?disabled=\${args.disabled}
            size=\${ifDefined(args.size)}
            .value=\${false}
            @inputChange=\${(e: CustomEvent) => {
      console.log('Selected:', e.target);
    }}
          ></modus-wc-radio>

          <modus-wc-radio
            label="Option 3"
            name="radio-group-demo"
            input-id="option3"
            ?disabled=\${args.disabled}
            size=\${ifDefined(args.size)}
            .value=\${false}
            @inputChange=\${(e: CustomEvent) => {
      console.log('Selected:', e.target);
    }}
          ></modus-wc-radio>
        </fieldset>
      </main>
    \`;
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,g,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\\\`small\\\`, \\\`medium\\\`) to abbreviations (\\\`xs\\\`, \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop            | 2.0 Prop    | Notes                                                |
|---------------------|-------------|----------------------------------------------------- |
| checked             | value       |                                                      |
| disabled            | disabled    |                                                      |
| handle-button-click |             | Not carried over                                     |
| handle-keydown      |             | Not carried over                                     |
| id                  | input-id    |                                                      |
| label               | label       |                                                      |
| name                | name        |                                                      |
| ref                 |             | Not carried over                                     |
| size                | size        | \\\`small\\\` → \\\`sm\\\`, \\\`medium\\\` → \\\`md\\\`              |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes                                               |
|-------------|-------------|-----------------------------------------------------|
| buttonClick | inputChange | Now emits an \\\`InputEvent\\\` instead of a \\\`string\\\` |
        \`
      }
    },
    // To hide the actual story rendering and only show docs:
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  // Simple render function or leave it empty
  render: () => html\`<div></div>\`
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const C=["Default","RadioGroup","Migration"];export{a as Default,t as Migration,i as RadioGroup,C as __namedExportsOrder,y as default};
