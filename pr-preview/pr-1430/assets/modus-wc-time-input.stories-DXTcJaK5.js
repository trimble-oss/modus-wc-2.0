import{w as V}from"./decorator-Cv9na35H.js";import{b as s}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{c as X}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var w=Object.freeze,Y=Object.defineProperty,Z=(e,b)=>w(Y(e,"raw",{value:w(e.slice())})),g;const re={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{bordered:!0,disabled:!1,label:"Time","read-only":!1,required:!1,"show-seconds":!1,size:"md"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},format:{control:{type:"select"},options:["12hrs","24hrs"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["picker","datalist"]}},decorators:[V],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},o={render:e=>s`
    <modus-wc-time-input
      auto-complete=${a(e["auto-complete"])}
      ?bordered=${e.bordered}
      custom-class=${a(e["custom-class"])}
      ?disabled=${e.disabled}
      .feedback=${e.feedback}
      format=${a(e.format)}
      input-id=${a(e["input-id"])}
      input-tab-index=${a(e["input-tab-index"])}
      interval-minutes=${a(e["interval-minutes"])}
      label=${a(e.label)}
      max=${a(e.max)}
      min=${a(e.min)}
      name=${a(e.name)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      ?show-seconds=${e["show-seconds"]}
      size=${a(e.size)}
      step=${a(e.step)}
      variant=${a(e.variant)}
      .datalistOptions=${e["datalist-options"]}
      value=${a(e.value)}
    ></modus-wc-time-input>
  `},i={...o},r={...o,args:{variant:"datalist",value:"09:45","datalist-options":["09:15","09:30","09:45","10:00","10:15"]},parameters:{docs:{source:{code:`
<modus-wc-time-input
  aria-label="Time input"
  label="Time"
  variant="datalist"
  value="09:45"
  bordered
></modus-wc-time-input>

<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.datalistOptions = [
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
  ];
<\/script>
        `}}}},l={...o,args:{variant:"datalist","interval-minutes":15,min:"08:00",max:"12:00",value:"09:00"}},d={...o,args:{step:.001,value:"09:45:00.250"}},m={...o,args:{"show-seconds":!0,value:"09:45:00"}},p={render:()=>s`
<modus-wc-time-input
  label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `},u={render:()=>s(g||(g=Z([`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example of programmatically adding 'datalistOptions'
    const preferredTimes = ['09:30', '12:00', '17:30'];
    document.querySelector('#time-input-with-options').datalistOptions = preferredTimes;
  });
<\/script>
<modus-wc-time-input
  label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    `])))},ee={level:"error",message:"Invalid time entered."},c={...o,args:{feedback:ee,required:!0,value:""},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Invalid time entered.'
  };
<\/script>`}}}},h={render:e=>{if(!customElements.get("time-input-shadow-host")){const b=X({componentTag:"modus-wc-time-input",propsMapper:(t,f)=>{const n=f;n.autoComplete=t["auto-complete"]??"",n.bordered=t.bordered??!0,n.customClass=t["custom-class"]||"",t["datalist-options"]&&(n.datalistOptions=t["datalist-options"]),n.disabled=!!t.disabled,t.format&&(n.format=t.format),n.inputId=t["input-id"]??"",n.inputTabIndex=t["input-tab-index"]??0,t["interval-minutes"]!==void 0&&(n.intervalMinutes=t["interval-minutes"],f.setAttribute("interval-minutes",String(t["interval-minutes"]))),n.label=t.label??"",n.max=t.max??"",n.min=t.min??"",n.name=t.name??"",n.readOnly=!!t["read-only"],n.required=!!t.required,n.showSeconds=!!t["show-seconds"],n.size=t.size??"md",t.step!==void 0&&(n.step=t.step),n.value=t.value??""}});customElements.define("time-input-shadow-host",b)}return s`<time-input-shadow-host
      .props=${{...e}}
    ></time-input-shadow-host>`}},v={parameters:{docs:{description:{story:'\n#### Breaking Changes\n\n  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled\n  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for\n  additional info and examples.\n  - Size values have changed from verbose names (`medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Changes\n\n  - The field is a custom segmented text input (native `--:--` skeleton) instead of the browser\'s `<input type="time">`.\n  - `value` stays **24-hour** (`HH:mm`, `HH:mm:ss`, or `HH:mm:ss.SSS`) for storage and `inputChange`.\n  - `step` is seconds, like `<input type="time">` (default 60). It is counted from `min`, or from midnight. A step under 60 shows seconds. Any fractional step under 1 also shows milliseconds, listed as 000, 100, … 900. Arrow keys move to the next or previous valid time.\n  - `format` is `12hrs` or `24hrs`. It controls the field display and the Modus picker wheels / datalist labels.\n    When unset, the hour clock follows the user\'s locale and falls back to `24hrs` when the locale clock cannot be detected.\n    Set `format` explicitly to pin it regardless of locale.\n  - `variant` is `picker` (default) or `datalist` for an interval or option list.\n  - Dropdown mode follows `variant="datalist"`, a non-empty `datalistOptions`, or deprecated `datalistId`.\n    The bare `interval-minutes` attribute still opts into datalist for backward compatibility.\n  - `datalistId` is deprecated. Prefer `datalistOptions` or `variant="datalist"`.\n  - Keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, and A/P sets AM/PM in `12hrs` mode.\n  - A field click selects a segment. The clock button or **Alt+ArrowDown** opens the dropdown. Plain arrow keys edit segments.\n  - Escape or a click outside closes the dropdown.\n  - Picker wheel clicks update the field immediately. A datalist selection closes the menu.\n  - Form submission uses a hidden input carrying the canonical 24-hour `value` when `name` is set.\n\n#### Prop Mapping\n\n| 1.0 Prop                | 2.0 Prop            | Notes                                   |\n|-------------------------|---------------------|-----------------------------------------|\n| allowed-chars-regex     |                     | Not carried over                        |\n| ampm                    |                     | Not carried over                        |\n| aria-label              | aria-label          |                                         |\n| auto-focus-input        | autofocus           |                                         |\n| auto-format             |                     | Not carried over                        |\n| disable-validation      |                     | Not carried over                        |\n| disabled                | disabled            |                                         |\n| error-text              | feedback.message    | Use `feedback` level                  |\n| helper-text             |                     | Not carried over                        |\n| label                   | label               |                                         |\n| max                     | max                 |                                         |\n| min                     | min                 |                                         |\n| placeholder             |                     | Not carried over                        |\n| read-only               | read-only           |                                         |\n| required                | required            |                                         |\n| size                    | size                | `medium` → `md`, `large` → `lg` |\n| valid-text              | feedback.message    | Use `feedback` level                  |\n| value                   | value               |                                         |\n\n#### Event Mapping\n\n| 1.0 Event      | 2.0 Event   | Notes                                                |\n|----------------|-------------|------------------------------------------------------|\n| timeInputBlur  | inputBlur   |                                                      |\n| valueChange    | inputChange |                                                      |\n        '}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`};var I,k,y;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template
}`,...(y=(k=i.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var E,x,S;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: 'datalist',
    value: '09:45',
    'datalist-options': ['09:15', '09:30', '09:45', '10:00', '10:15']
  },
  parameters: {
    docs: {
      source: {
        code: \`
<modus-wc-time-input
  aria-label="Time input"
  label="Time"
  variant="datalist"
  value="09:45"
  bordered
></modus-wc-time-input>

<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.datalistOptions = [
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
  ];
<\/script>
        \`
      }
    }
  }
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,A,$;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: 'datalist',
    'interval-minutes': 15,
    min: '08:00',
    max: '12:00',
    value: '09:00'
  }
}`,...($=(A=l.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var O,P,C;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Template,
  args: {
    step: 0.001,
    value: '09:45:00.250'
  }
}`,...(C=(P=d.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var M,q,D;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Template,
  args: {
    'show-seconds': true,
    value: '09:45:00'
  }
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var H,z,N;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-time-input
  label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    \`;
  }
}`,...(N=(z=p.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var B,W,F;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
  label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    \`;
  }
}`,...(F=(W=u.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var _,L,U;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  args: {
    feedback: errorFeedback,
    required: true,
    value: ''
  },
  parameters: {
    docs: {
      source: {
        transform: src => \`\${src}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Invalid time entered.'
  };
<\/script>\`
      }
    }
  }
}`,...(U=(L=c.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var j,G,K;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('time-input-shadow-host')) {
      const TimeInputShadowHost = createShadowHostClass<TimeInputArgs>({
        componentTag: 'modus-wc-time-input',
        propsMapper: (v: TimeInputArgs, el: HTMLElement) => {
          const timeInputEl = el as unknown as {
            autoComplete: string;
            bordered: boolean;
            customClass: string;
            datalistOptions: string[];
            disabled: boolean;
            feedback: IInputFeedbackProp;
            format: string;
            inputId: string;
            inputTabIndex: number;
            intervalMinutes: number;
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
          timeInputEl.bordered = v['bordered'] ?? true;
          timeInputEl.customClass = v['custom-class'] || '';
          if (v['datalist-options']) {
            timeInputEl.datalistOptions = v['datalist-options'];
          }
          timeInputEl.disabled = Boolean(v.disabled);
          if (v.format) {
            timeInputEl.format = v.format;
          }
          timeInputEl.inputId = v['input-id'] ?? '';
          timeInputEl.inputTabIndex = v['input-tab-index'] ?? 0;
          if (v['interval-minutes'] !== undefined) {
            timeInputEl.intervalMinutes = v['interval-minutes'];
            el.setAttribute('interval-minutes', String(v['interval-minutes']));
          }
          timeInputEl.label = v.label ?? '';
          timeInputEl.max = v.max ?? '';
          timeInputEl.min = v.min ?? '';
          timeInputEl.name = v.name ?? '';
          timeInputEl.readOnly = Boolean(v['read-only']);
          timeInputEl.required = Boolean(v.required);
          timeInputEl.showSeconds = Boolean(v['show-seconds']);
          timeInputEl.size = v.size ?? 'md';
          if (v.step !== undefined) {
            timeInputEl.step = v.step;
          }
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
}`,...(K=(G=h.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var R,J,Q;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled\n  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for\n  additional info and examples.\n  - Size values have changed from verbose names (\\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Changes\n\n  - The field is a custom segmented text input (native \\`--:--\\` skeleton) instead of the browser\'s \\`<input type="time">\\`.\n  - \\`value\\` stays **24-hour** (\\`HH:mm\\`, \\`HH:mm:ss\\`, or \\`HH:mm:ss.SSS\\`) for storage and \\`inputChange\\`.\n  - \\`step\\` is seconds, like \\`<input type="time">\\` (default 60). It is counted from \\`min\\`, or from midnight. A step under 60 shows seconds. Any fractional step under 1 also shows milliseconds, listed as 000, 100, … 900. Arrow keys move to the next or previous valid time.\n  - \\`format\\` is \\`12hrs\\` or \\`24hrs\\`. It controls the field display and the Modus picker wheels / datalist labels.\n    When unset, the hour clock follows the user\'s locale and falls back to \\`24hrs\\` when the locale clock cannot be detected.\n    Set \\`format\\` explicitly to pin it regardless of locale.\n  - \\`variant\\` is \\`picker\\` (default) or \\`datalist\\` for an interval or option list.\n  - Dropdown mode follows \\`variant="datalist"\\`, a non-empty \\`datalistOptions\\`, or deprecated \\`datalistId\\`.\n    The bare \\`interval-minutes\\` attribute still opts into datalist for backward compatibility.\n  - \\`datalistId\\` is deprecated. Prefer \\`datalistOptions\\` or \\`variant="datalist"\\`.\n  - Keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, and A/P sets AM/PM in \\`12hrs\\` mode.\n  - A field click selects a segment. The clock button or **Alt+ArrowDown** opens the dropdown. Plain arrow keys edit segments.\n  - Escape or a click outside closes the dropdown.\n  - Picker wheel clicks update the field immediately. A datalist selection closes the menu.\n  - Form submission uses a hidden input carrying the canonical 24-hour \\`value\\` when \\`name\\` is set.\n\n#### Prop Mapping\n\n| 1.0 Prop                | 2.0 Prop            | Notes                                   |\n|-------------------------|---------------------|-----------------------------------------|\n| allowed-chars-regex     |                     | Not carried over                        |\n| ampm                    |                     | Not carried over                        |\n| aria-label              | aria-label          |                                         |\n| auto-focus-input        | autofocus           |                                         |\n| auto-format             |                     | Not carried over                        |\n| disable-validation      |                     | Not carried over                        |\n| disabled                | disabled            |                                         |\n| error-text              | feedback.message    | Use \\`feedback\\` level                  |\n| helper-text             |                     | Not carried over                        |\n| label                   | label               |                                         |\n| max                     | max                 |                                         |\n| min                     | min                 |                                         |\n| placeholder             |                     | Not carried over                        |\n| read-only               | read-only           |                                         |\n| required                | required            |                                         |\n| size                    | size                | \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| valid-text              | feedback.message    | Use \\`feedback\\` level                  |\n| value                   | value               |                                         |\n\n#### Event Mapping\n\n| 1.0 Event      | 2.0 Event   | Notes                                                |\n|----------------|-------------|------------------------------------------------------|\n| timeInputBlur  | inputBlur   |                                                      |\n| valueChange    | inputChange |                                                      |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}',...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const le=["Default","Datalist","WithGeneratedIntervals","WithMilliseconds","WithSeconds","WithDatalist","WithDatalistOptions","WithErrorFeedback","ShadowDomParent","Migration"];export{r as Datalist,i as Default,v as Migration,h as ShadowDomParent,p as WithDatalist,u as WithDatalistOptions,c as WithErrorFeedback,l as WithGeneratedIntervals,d as WithMilliseconds,m as WithSeconds,le as __namedExportsOrder,re as default};
