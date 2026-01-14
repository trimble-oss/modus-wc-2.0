import{w as _}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import{c as W}from"./shadow-host-helper-B2BwyiIi.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var b=Object.freeze,H=Object.defineProperty,L=(e,c)=>b(H(e,"raw",{value:b(e.slice())})),h;const Q={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{disabled:!1,label:"Label",size:"md"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[_],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},u={render:e=>o`
    <modus-wc-time-input
      aria-label="Time input"
      auto-complete=${a(e["auto-complete"])}
      bordered=${a(e.bordered)}
      custom-class=${a(e["custom-class"])}
      datalist-id=${a(e["datalist-id"])}
      ?disabled=${e.disabled}
      .feedback=${e.feedback}
      input-id=${a(e["input-id"])}
      input-tab-index=${a(e["input-tab-index"])}
      label=${a(e.label)}
      max=${a(e.max)}
      min=${a(e.min)}
      name=${a(e.name)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      show-seconds=${a(e["show-seconds"])}
      size=${a(e.size)}
      step=${a(e.step)}
      .datalistOptions=${e["datalist-options"]}
      .value=${e.value}
    ></modus-wc-time-input>
  `},i={...u},r={...u,args:{"show-seconds":!0}},s={render:()=>o`
<modus-wc-time-input
  aria-label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `},d={render:()=>o(h||(h=L([`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example of programmatically adding 'datalistOptions'
    const preferredTimes = ['09:30', '12:00', '17:30'];
    document.querySelector('#time-input-with-options').datalistOptions = preferredTimes;
  });
<\/script>
<modus-wc-time-input
  aria-label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    `])))},U={level:"error",message:"Value is required."},l={...u,args:{feedback:U,required:!0},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
<\/script>`}}}},m={render:e=>{if(!customElements.get("time-input-shadow-host")){const c=W({componentTag:"modus-wc-time-input",propsMapper:(t,D)=>{const n=D;n.autoComplete=t["auto-complete"]??"",n.bordered=!!t.bordered||!0,n.customClass=t["custom-class"]||"",n.datalistId=t["datalist-id"]??"",n.datalistOptions=t["datalist-options"]??[],n.disabled=!!t.disabled,n.inputId=t["input-id"]??"",n.inputTabIndex=t["input-tab-index"]??0,n.label=t.label??"",n.max=t.max??"",n.min=t.min??"",n.name=t.name??"",n.readOnly=!!t["read-only"],n.required=!!t.required,n.showSeconds=!!t["show-seconds"],n.size=t.size??"md",n.step=t.step??1,n.value=t.value??""}});customElements.define("time-input-shadow-host",c)}return o`<time-input-shadow-host
      .props=${{...e}}
    ></time-input-shadow-host>`}},p={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop                | 2.0 Prop            | Notes                                   |
|-------------------------|---------------------|-----------------------------------------|
| allowed-chars-regex     |                     | Not carried over                        |
| ampm                    |                     | Not carried over                        |
| aria-label              | aria-label          |                                         |
| auto-focus-input        | autofocus           |                                         |
| auto-format             |                     | Not carried over                        |
| disable-validation      |                     | Not carried over                        |
| disabled                | disabled            |                                         |
| error-text              | feedback.message    | Use \`feedback\` level                  |
| helper-text             |                     | Not carried over                        |
| label                   | label               |                                         |
| max                     | max                 |                                         |
| min                     | min                 |                                         |
| placeholder             |                     | Not carried over                        |
| read-only               | read-only           |                                         |
| required                | required            |                                         |
| size                    | size                | \`medium\` → \`md\`, \`large\` → \`lg\` |
| valid-text              | feedback.message    | Use \`feedback\` level                  |
| value                   | value               |                                         |

#### Event Mapping

| 1.0 Event      | 2.0 Event   | Notes                                                |
|----------------|-------------|------------------------------------------------------|
| timeInputBlur  | inputBlur   |                                                      |
| valueChange    | inputChange |                                                      |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var v,f,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var w,I,E;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    'show-seconds': true
  }
}`,...(E=(I=r.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var x,y,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-time-input
  aria-label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    \`;
  }
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,T,$;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example of programmatically adding 'datalistOptions'
    const preferredTimes = ['09:30', '12:00', '17:30'];
    document.querySelector('#time-input-with-options').datalistOptions = preferredTimes;
  });
<\/script>
<modus-wc-time-input
  aria-label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    \`;
  }
}`,...($=(T=d.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var q,C,O;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Template,
  args: {
    feedback: errorFeedback,
    required: true
  },
  parameters: {
    docs: {
      source: {
        transform: src => \`\${src}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
<\/script>\`
      }
    }
  }
}`,...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var z,B,N;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for time-input component
    if (!customElements.get('time-input-shadow-host')) {
      const TimeInputShadowHost = createShadowHostClass<TimeInputArgs>({
        componentTag: 'modus-wc-time-input',
        propsMapper: (v: TimeInputArgs, el: HTMLElement) => {
          const timeInputEl = el as unknown as {
            autoComplete: string;
            bordered: boolean;
            customClass: string;
            datalistId: string;
            datalistOptions: string[];
            disabled: boolean;
            feedback: IInputFeedbackProp;
            inputId: string;
            inputTabIndex: number;
            label: string;
            max: string;
            min: string;
            name: string;
            readOnly: boolean;
            required: boolean;
            showSeconds: boolean;
            size: string;
            step: number;
            value: string;
          };
          timeInputEl.autoComplete = v['auto-complete'] ?? '';
          timeInputEl.bordered = Boolean(v.bordered) || true;
          timeInputEl.customClass = v['custom-class'] || '';
          timeInputEl.datalistId = v['datalist-id'] ?? '';
          timeInputEl.datalistOptions = v['datalist-options'] ?? [];
          timeInputEl.disabled = Boolean(v.disabled);
          timeInputEl.inputId = v['input-id'] ?? '';
          timeInputEl.inputTabIndex = v['input-tab-index'] ?? 0;
          timeInputEl.label = v.label ?? '';
          timeInputEl.max = v.max ?? '';
          timeInputEl.min = v.min ?? '';
          timeInputEl.name = v.name ?? '';
          timeInputEl.readOnly = Boolean(v['read-only']);
          timeInputEl.required = Boolean(v.required);
          timeInputEl.showSeconds = Boolean(v['show-seconds']);
          timeInputEl.size = v.size ?? 'md';
          timeInputEl.step = v.step ?? 1;
          timeInputEl.value = v.value ?? '';
        }
      });
      customElements.define('time-input-shadow-host', TimeInputShadowHost);
    }
    return html\`<time-input-shadow-host
      .props=\${{
      ...args
    }}
    ></time-input-shadow-host>\`;
  }
}`,...(N=(B=m.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var P,F,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop                | 2.0 Prop            | Notes                                   |
|-------------------------|---------------------|-----------------------------------------|
| allowed-chars-regex     |                     | Not carried over                        |
| ampm                    |                     | Not carried over                        |
| aria-label              | aria-label          |                                         |
| auto-focus-input        | autofocus           |                                         |
| auto-format             |                     | Not carried over                        |
| disable-validation      |                     | Not carried over                        |
| disabled                | disabled            |                                         |
| error-text              | feedback.message    | Use \\\`feedback\\\` level                  |
| helper-text             |                     | Not carried over                        |
| label                   | label               |                                         |
| max                     | max                 |                                         |
| min                     | min                 |                                         |
| placeholder             |                     | Not carried over                        |
| read-only               | read-only           |                                         |
| required                | required            |                                         |
| size                    | size                | \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\` |
| valid-text              | feedback.message    | Use \\\`feedback\\\` level                  |
| value                   | value               |                                         |

#### Event Mapping

| 1.0 Event      | 2.0 Event   | Notes                                                |
|----------------|-------------|------------------------------------------------------|
| timeInputBlur  | inputBlur   |                                                      |
| valueChange    | inputChange |                                                      |
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
}`,...(M=(F=p.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const R=["Default","WithSeconds","WithDatalist","WithDatalistOptions","WithErrorFeedback","ShadowDomParent","Migration"];export{i as Default,p as Migration,m as ShadowDomParent,s as WithDatalist,d as WithDatalistOptions,l as WithErrorFeedback,r as WithSeconds,R as __namedExportsOrder,Q as default};
