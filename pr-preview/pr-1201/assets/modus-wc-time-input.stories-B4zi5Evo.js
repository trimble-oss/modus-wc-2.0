import{w as Y}from"./decorator-D4YmxizW.js";import{b as a}from"./lit-element-DgBvYnzn.js";import{o as i}from"./if-defined-BnVFTJ4o.js";import{c as Z}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var w=Object.freeze,ee=Object.defineProperty,R=(e,v)=>w(ee(e,"raw",{value:w(e.slice())})),f,g;const de={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{disabled:!1,label:"Label",size:"md"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"picker-type":{control:{type:"select"},options:[void 0,"picker","datalist"]},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[Y],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},h={render:e=>a`
    <modus-wc-time-input
      aria-label="Time input"
      auto-complete=${i(e["auto-complete"])}
      bordered=${i(e.bordered)}
      custom-class=${i(e["custom-class"])}
      datalist-id=${i(e["datalist-id"])}
      ?disabled=${e.disabled}
      .feedback=${e.feedback}
      input-id=${i(e["input-id"])}
      input-tab-index=${i(e["input-tab-index"])}
      label=${i(e.label)}
      max=${i(e.max)}
      min=${i(e.min)}
      name=${i(e.name)}
      picker-type=${i(e["picker-type"])}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      show-seconds=${i(e["show-seconds"])}
      size=${i(e.size)}
      step=${i(e.step)}
      ?use12-hour=${e["use-12-hour"]}
      .datalistOptions=${e["datalist-options"]??[]}
      .value=${e.value??""}
    ></modus-wc-time-input>
  `},o={...h},r={...h,args:{"show-seconds":!0}},s={render:()=>a`
<modus-wc-time-input
  aria-label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `},d={render:()=>a(f||(f=R([`
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
    `])))},p={render:()=>a`
    <modus-wc-time-input
      aria-label="Time picker"
      label="Time"
      picker-type="picker"
      ?use12-hour=${!0}
      .value=${"09:45"}
    ></modus-wc-time-input>
  `},l={render:()=>a`
    <modus-wc-time-input
      aria-label="Time picker with seconds"
      label="Time"
      picker-type="picker"
      ?use12-hour=${!0}
      ?show-seconds=${!0}
      .value=${"09:45:00"}
    ></modus-wc-time-input>
  `},m={render:()=>a(g||(g=R([`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const options = ['9:15 AM', '9:30 AM', '9:45 AM', '10:00 AM', '10:15 AM'];
    document.querySelector('#time-input-datalist-picker').datalistOptions = options;
  });
<\/script>
<modus-wc-time-input
  aria-label="Time datalist picker"
  label="Time"
  picker-type="datalist"
  id="time-input-datalist-picker"
  .value=`,`
></modus-wc-time-input>
    `])),"9:45 AM")},te={level:"error",message:"Value is required."},u={...h,args:{feedback:te,required:!0},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
<\/script>`}}}},c={render:e=>{if(!customElements.get("time-input-shadow-host")){const v=Z({componentTag:"modus-wc-time-input",propsMapper:(t,X)=>{const n=X;n.autoComplete=t["auto-complete"]??"",n.bordered=t.bordered??!0,n.customClass=t["custom-class"]||"",n.datalistId=t["datalist-id"]??"",t["datalist-options"]&&(n.datalistOptions=t["datalist-options"]),n.disabled=!!t.disabled,n.inputId=t["input-id"]??"",n.inputTabIndex=t["input-tab-index"]??0,n.label=t.label??"",n.max=t.max??"",n.min=t.min??"",n.name=t.name??"",n.pickerType=t["picker-type"]??"",n.readOnly=!!t["read-only"],n.required=!!t.required,n.showSeconds=!!t["show-seconds"],n.size=t.size??"md",t.step!==void 0&&(n.step=t.step),n.use12Hour=!!t["use-12-hour"],n.value=t.value??""}});customElements.define("time-input-shadow-host",v)}return a`<time-input-shadow-host
      .props=${{...e}}
    ></time-input-shadow-host>`}},b={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var k,I,E;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Template
}`,...(E=(I=o.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var y,T,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    'show-seconds': true
  }
}`,...(x=(T=r.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var S,$,M;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=($=s.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var q,O,C;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(C=(O=d.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var P,z,B;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <modus-wc-time-input
      aria-label="Time picker"
      label="Time"
      picker-type="picker"
      ?use12-hour=\${true}
      .value=\${'09:45'}
    ></modus-wc-time-input>
  \`
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var N,A,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <modus-wc-time-input
      aria-label="Time picker with seconds"
      label="Time"
      picker-type="picker"
      ?use12-hour=\${true}
      ?show-seconds=\${true}
      .value=\${'09:45:00'}
    ></modus-wc-time-input>
  \`
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var W,F,L;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const options = ['9:15 AM', '9:30 AM', '9:45 AM', '10:00 AM', '10:15 AM'];
    document.querySelector('#time-input-datalist-picker').datalistOptions = options;
  });
<\/script>
<modus-wc-time-input
  aria-label="Time datalist picker"
  label="Time"
  picker-type="datalist"
  id="time-input-datalist-picker"
  .value=\${'9:45 AM'}
></modus-wc-time-input>
    \`;
  }
}`,...(L=(F=m.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var _,H,U;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(H=u.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var V,j,G;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
            pickerType: string;
            readOnly: boolean;
            required: boolean;
            showSeconds: boolean;
            size: string;
            step: number;
            use12Hour: boolean;
            value: string;
          };
          timeInputEl.autoComplete = v['auto-complete'] ?? '';
          timeInputEl.bordered = v['bordered'] ?? true;
          timeInputEl.customClass = v['custom-class'] || '';
          timeInputEl.datalistId = v['datalist-id'] ?? '';
          if (v['datalist-options']) {
            timeInputEl.datalistOptions = v['datalist-options']; // Conditional assignment only if provided
          }
          timeInputEl.disabled = Boolean(v.disabled);
          timeInputEl.inputId = v['input-id'] ?? '';
          timeInputEl.inputTabIndex = v['input-tab-index'] ?? 0;
          timeInputEl.label = v.label ?? '';
          timeInputEl.max = v.max ?? '';
          timeInputEl.min = v.min ?? '';
          timeInputEl.name = v.name ?? '';
          timeInputEl.pickerType = v['picker-type'] ?? '';
          timeInputEl.readOnly = Boolean(v['read-only']);
          timeInputEl.required = Boolean(v.required);
          timeInputEl.showSeconds = Boolean(v['show-seconds']);
          timeInputEl.size = v.size ?? 'md';
          // Only set step if explicitly provided, otherwise let component calculate from showSeconds
          if (v.step !== undefined) {
            timeInputEl.step = v.step;
          }
          timeInputEl.use12Hour = Boolean(v['use-12-hour']);
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
}`,...(G=(j=c.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const pe=["Default","WithSeconds","WithDatalist","WithDatalistOptions","WithPicker","WithPickerSeconds","WithPickerDatalist","WithErrorFeedback","ShadowDomParent","Migration"];export{o as Default,b as Migration,c as ShadowDomParent,s as WithDatalist,d as WithDatalistOptions,u as WithErrorFeedback,p as WithPicker,m as WithPickerDatalist,l as WithPickerSeconds,r as WithSeconds,pe as __namedExportsOrder,de as default};
