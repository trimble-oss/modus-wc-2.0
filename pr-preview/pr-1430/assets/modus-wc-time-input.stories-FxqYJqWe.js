import{w as K}from"./decorator-Cv9na35H.js";import{b as i}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{c as R}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var f=Object.freeze,J=Object.defineProperty,Q=(e,v)=>f(J(e,"raw",{value:f(e.slice())})),w;const ae={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{bordered:!0,disabled:!1,label:"Time","read-only":!1,required:!1,"show-seconds":!1,size:"md"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},format:{control:{type:"select"},options:["12hrs","24hrs"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["picker","datalist"]}},decorators:[K],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},o={render:e=>i`
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
  `},s={...o},r={...o,args:{variant:"datalist",value:"09:45","datalist-options":["09:15","09:30","09:45","10:00","10:15"]},parameters:{docs:{source:{code:`
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
        `}}}},l={...o,args:{variant:"datalist","interval-minutes":15,min:"08:00",max:"12:00",value:"09:00"}},d={...o,args:{"show-seconds":!0,value:"09:45:00"}},m={render:()=>i`
<modus-wc-time-input
  label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `},p={render:()=>i(w||(w=Q([`
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
    `])))},V={level:"error",message:"Invalid time entered."},u={...o,args:{feedback:V,required:!0,value:""},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Invalid time entered.'
  };
<\/script>`}}}},c={render:e=>{if(!customElements.get("time-input-shadow-host")){const v=R({componentTag:"modus-wc-time-input",propsMapper:(t,b)=>{const n=b;n.autoComplete=t["auto-complete"]??"",n.bordered=t.bordered??!0,n.customClass=t["custom-class"]||"",t["datalist-options"]&&(n.datalistOptions=t["datalist-options"]),n.disabled=!!t.disabled,t.format&&(n.format=t.format),n.inputId=t["input-id"]??"",n.inputTabIndex=t["input-tab-index"]??0,t["interval-minutes"]!==void 0&&(n.intervalMinutes=t["interval-minutes"],b.setAttribute("interval-minutes",String(t["interval-minutes"]))),n.label=t.label??"",n.max=t.max??"",n.min=t.min??"",n.name=t.name??"",n.readOnly=!!t["read-only"],n.required=!!t.required,n.showSeconds=!!t["show-seconds"],n.size=t.size??"md",t.step!==void 0&&(n.step=t.step),n.value=t.value??""}});customElements.define("time-input-shadow-host",v)}return i`<time-input-shadow-host
      .props=${{...e}}
    ></time-input-shadow-host>`}},h={parameters:{docs:{description:{story:'\n#### Breaking Changes\n\n  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled\n  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for\n  additional info and examples.\n  - Size values have changed from verbose names (`medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Changes\n\n  - The field is a custom segmented text input (native `--:--` skeleton) instead of the browser\'s `<input type="time">`.\n  - `value` stays **24-hour** (`HH:mm` / `HH:mm:ss`) for storage and `inputChange`.\n  - `format` is `12hrs` or `24hrs`. It controls the field display and the Modus picker wheels / datalist labels.\n    When unset, the hour clock follows the user\'s locale and falls back to `24hrs` when the locale clock cannot be detected.\n    Set `format` explicitly to pin it regardless of locale.\n  - `variant` is `picker` (default) or `datalist` for an interval or option list.\n  - Dropdown mode follows `variant="datalist"`, a non-empty `datalistOptions`, or deprecated `datalistId`.\n    The bare `interval-minutes` attribute still opts into datalist for backward compatibility.\n  - `datalistId` is deprecated. Prefer `datalistOptions` or `variant="datalist"`.\n  - Keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, and A/P sets AM/PM in `12hrs` mode.\n  - A field click selects a segment. The clock button or **Alt+ArrowDown** opens the dropdown. Plain arrow keys edit segments.\n  - Escape or a click outside closes the dropdown.\n  - Picker wheel clicks update the field immediately. A datalist selection closes the menu.\n  - Form submission uses a hidden input carrying the canonical 24-hour `value` when `name` is set.\n\n#### Prop Mapping\n\n| 1.0 Prop                | 2.0 Prop            | Notes                                   |\n|-------------------------|---------------------|-----------------------------------------|\n| allowed-chars-regex     |                     | Not carried over                        |\n| ampm                    |                     | Not carried over                        |\n| aria-label              | aria-label          |                                         |\n| auto-focus-input        | autofocus           |                                         |\n| auto-format             |                     | Not carried over                        |\n| disable-validation      |                     | Not carried over                        |\n| disabled                | disabled            |                                         |\n| error-text              | feedback.message    | Use `feedback` level                  |\n| helper-text             |                     | Not carried over                        |\n| label                   | label               |                                         |\n| max                     | max                 |                                         |\n| min                     | min                 |                                         |\n| placeholder             |                     | Not carried over                        |\n| read-only               | read-only           |                                         |\n| required                | required            |                                         |\n| size                    | size                | `medium` → `md`, `large` → `lg` |\n| valid-text              | feedback.message    | Use `feedback` level                  |\n| value                   | value               |                                         |\n\n#### Event Mapping\n\n| 1.0 Event      | 2.0 Event   | Notes                                                |\n|----------------|-------------|------------------------------------------------------|\n| timeInputBlur  | inputBlur   |                                                      |\n| valueChange    | inputChange |                                                      |\n        '}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var g,I,k;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template
}`,...(k=(I=s.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var E,y,x;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var T,S,$;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: 'datalist',
    'interval-minutes': 15,
    min: '08:00',
    max: '12:00',
    value: '09:00'
  }
}`,...($=(S=l.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var O,P,C;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Template,
  args: {
    'show-seconds': true,
    value: '09:45:00'
  }
}`,...(C=(P=d.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var A,q,M;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(M=(q=m.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var D,z,N;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(z=p.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var B,H,F;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(H=u.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var W,_,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var U,j,G;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled\n  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for\n  additional info and examples.\n  - Size values have changed from verbose names (\\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Changes\n\n  - The field is a custom segmented text input (native \\`--:--\\` skeleton) instead of the browser\'s \\`<input type="time">\\`.\n  - \\`value\\` stays **24-hour** (\\`HH:mm\\` / \\`HH:mm:ss\\`) for storage and \\`inputChange\\`.\n  - \\`format\\` is \\`12hrs\\` or \\`24hrs\\`. It controls the field display and the Modus picker wheels / datalist labels.\n    When unset, the hour clock follows the user\'s locale and falls back to \\`24hrs\\` when the locale clock cannot be detected.\n    Set \\`format\\` explicitly to pin it regardless of locale.\n  - \\`variant\\` is \\`picker\\` (default) or \\`datalist\\` for an interval or option list.\n  - Dropdown mode follows \\`variant="datalist"\\`, a non-empty \\`datalistOptions\\`, or deprecated \\`datalistId\\`.\n    The bare \\`interval-minutes\\` attribute still opts into datalist for backward compatibility.\n  - \\`datalistId\\` is deprecated. Prefer \\`datalistOptions\\` or \\`variant="datalist"\\`.\n  - Keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, and A/P sets AM/PM in \\`12hrs\\` mode.\n  - A field click selects a segment. The clock button or **Alt+ArrowDown** opens the dropdown. Plain arrow keys edit segments.\n  - Escape or a click outside closes the dropdown.\n  - Picker wheel clicks update the field immediately. A datalist selection closes the menu.\n  - Form submission uses a hidden input carrying the canonical 24-hour \\`value\\` when \\`name\\` is set.\n\n#### Prop Mapping\n\n| 1.0 Prop                | 2.0 Prop            | Notes                                   |\n|-------------------------|---------------------|-----------------------------------------|\n| allowed-chars-regex     |                     | Not carried over                        |\n| ampm                    |                     | Not carried over                        |\n| aria-label              | aria-label          |                                         |\n| auto-focus-input        | autofocus           |                                         |\n| auto-format             |                     | Not carried over                        |\n| disable-validation      |                     | Not carried over                        |\n| disabled                | disabled            |                                         |\n| error-text              | feedback.message    | Use \\`feedback\\` level                  |\n| helper-text             |                     | Not carried over                        |\n| label                   | label               |                                         |\n| max                     | max                 |                                         |\n| min                     | min                 |                                         |\n| placeholder             |                     | Not carried over                        |\n| read-only               | read-only           |                                         |\n| required                | required            |                                         |\n| size                    | size                | \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| valid-text              | feedback.message    | Use \\`feedback\\` level                  |\n| value                   | value               |                                         |\n\n#### Event Mapping\n\n| 1.0 Event      | 2.0 Event   | Notes                                                |\n|----------------|-------------|------------------------------------------------------|\n| timeInputBlur  | inputBlur   |                                                      |\n| valueChange    | inputChange |                                                      |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}',...(G=(j=h.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};const ie=["Default","Datalist","WithGeneratedIntervals","WithSeconds","WithDatalist","WithDatalistOptions","WithErrorFeedback","ShadowDomParent","Migration"];export{r as Datalist,s as Default,h as Migration,c as ShadowDomParent,m as WithDatalist,p as WithDatalistOptions,u as WithErrorFeedback,l as WithGeneratedIntervals,d as WithSeconds,ie as __namedExportsOrder,ae as default};
