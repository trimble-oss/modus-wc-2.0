import{w as se}from"./decorator-Cv9na35H.js";import{b as i}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{c as ie}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var I=Object.freeze,re=Object.defineProperty,oe=(e,f)=>I(re(e,"raw",{value:I(e.slice())})),k;const ve={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{bordered:!0,disabled:!1,label:"Time","read-only":!1,required:!1,"show-seconds":!1,size:"md"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},format:{control:{type:"select"},options:["12hrs","24hrs"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["picker","datalist"]}},decorators:[se],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},s={render:e=>i`
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
  `},r={...s},o={...s,args:{format:"12hrs",value:"21:45"}},l={...s,args:{variant:"datalist",value:"09:45","datalist-options":["09:15","09:30","09:45","10:00","10:15"]},parameters:{docs:{source:{code:`
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
        `}}}},m={...s,args:{variant:"datalist","interval-minutes":15,min:"08:00",max:"12:00",value:"09:00"}},d={...s,args:{"show-seconds":!0,value:"09:45:00"}},p={...s,args:{format:"12hrs","show-seconds":!0,value:"21:45:30"}},u={...s,args:{format:"12hrs",variant:"datalist","interval-minutes":30,min:"08:00",max:"18:00",value:"13:30"}},c={render:()=>i`
<modus-wc-time-input
  label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `},h={render:()=>i(k||(k=oe([`
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
    `])))},le={level:"error",message:"Invalid time entered."},v={...s,args:{feedback:le,required:!0,value:""},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Invalid time entered.'
  };
<\/script>`}}}},w={render:e=>{if(!customElements.get("time-input-shadow-host")){const f=ie({componentTag:"modus-wc-time-input",propsMapper:(t,g)=>{const n=g;n.autoComplete=t["auto-complete"]??"",n.bordered=t.bordered??!0,n.customClass=t["custom-class"]||"",t["datalist-options"]&&(n.datalistOptions=t["datalist-options"]),n.disabled=!!t.disabled,t.format&&(n.format=t.format),n.inputId=t["input-id"]??"",n.inputTabIndex=t["input-tab-index"]??0,t["interval-minutes"]!==void 0&&(n.intervalMinutes=t["interval-minutes"],g.setAttribute("interval-minutes",String(t["interval-minutes"]))),n.label=t.label??"",n.max=t.max??"",n.min=t.min??"",n.name=t.name??"",n.readOnly=!!t["read-only"],n.required=!!t.required,n.showSeconds=!!t["show-seconds"],n.size=t.size??"md",t.step!==void 0&&(n.step=t.step),n.value=t.value??""}});customElements.define("time-input-shadow-host",f)}return i`<time-input-shadow-host
      .props=${{...e}}
    ></time-input-shadow-host>`}},b={parameters:{docs:{description:{story:'\n#### Breaking Changes\n\n  - The field is a custom segmented text input (native `--:--` skeleton) instead of the browser\'s `<input type="time">`.\n  - Open the picker with the clock button or **Alt+ArrowDown** (plain Arrow keys edit segments).\n  - `value` remains **24-hour** (`HH:mm` / `HH:mm:ss`) for storage and `inputChange`.\n  - New `format` prop: `12hrs` or `24hrs`. Controls display, Modus picker wheels / datalist labels.\n    When unset, the hour clock follows the user\'s locale (falls back to `24hrs` if it cannot be detected).\n    Set `format` explicitly to pin it regardless of locale.\n  - New `variant` prop (`picker` default, `datalist` for interval / option list).\n  - Dropdown mode: `variant="datalist"`, non-empty `datalistOptions`, or deprecated `datalistId`.\n    The bare `interval-minutes` attribute still opts into datalist for backward compatibility.\n  - `datalistId` is deprecated; prefer `datalistOptions` or `variant="datalist"`.\n  - Size values use abbreviations (`sm`, `md`, `lg`).\n\n#### New Behaviors\n\n  - Native-style keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, A/P sets AM/PM in 12hrs mode.\n  - Field click selects a segment; clock button or **Alt+ArrowDown** opens the dropdown.\n  - Escape / click-outside closes the dropdown.\n  - Picker wheel clicks update the field immediately; datalist selection closes the menu.\n  - Form submission uses a hidden input carrying the canonical 24h `value` when `name` is set.\n        '}}},render:()=>i`
    <modus-wc-time-input
      label="Meeting time"
      format="24hrs"
      value="09:45"
    ></modus-wc-time-input>
  `};var E,y,S;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var T,x,O;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    format: '12hrs',
    value: '21:45'
  }
}`,...(O=(x=o.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var $,A,D;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,C,F;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: 'datalist',
    'interval-minutes': 15,
    min: '08:00',
    max: '12:00',
    value: '09:00'
  }
}`,...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var M,q,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Template,
  args: {
    'show-seconds': true,
    value: '09:45:00'
  }
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var z,B,P;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Template,
  args: {
    format: '12hrs',
    'show-seconds': true,
    value: '21:45:30'
  }
}`,...(P=(B=p.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var _,N,L;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  args: {
    format: '12hrs',
    variant: 'datalist',
    'interval-minutes': 30,
    min: '08:00',
    max: '18:00',
    value: '13:30'
  }
}`,...(L=(N=u.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var G,j,R;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(R=(j=c.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var U,J,K;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,V,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(V=v.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - The field is a custom segmented text input (native \\`--:--\\` skeleton) instead of the browser\'s \\`<input type="time">\\`.\n  - Open the picker with the clock button or **Alt+ArrowDown** (plain Arrow keys edit segments).\n  - \\`value\\` remains **24-hour** (\\`HH:mm\\` / \\`HH:mm:ss\\`) for storage and \\`inputChange\\`.\n  - New \\`format\\` prop: \\`12hrs\\` or \\`24hrs\\`. Controls display, Modus picker wheels / datalist labels.\n    When unset, the hour clock follows the user\'s locale (falls back to \\`24hrs\\` if it cannot be detected).\n    Set \\`format\\` explicitly to pin it regardless of locale.\n  - New \\`variant\\` prop (\\`picker\\` default, \\`datalist\\` for interval / option list).\n  - Dropdown mode: \\`variant="datalist"\\`, non-empty \\`datalistOptions\\`, or deprecated \\`datalistId\\`.\n    The bare \\`interval-minutes\\` attribute still opts into datalist for backward compatibility.\n  - \\`datalistId\\` is deprecated; prefer \\`datalistOptions\\` or \\`variant="datalist"\\`.\n  - Size values use abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### New Behaviors\n\n  - Native-style keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, A/P sets AM/PM in 12hrs mode.\n  - Field click selects a segment; clock button or **Alt+ArrowDown** opens the dropdown.\n  - Escape / click-outside closes the dropdown.\n  - Picker wheel clicks update the field immediately; datalist selection closes the menu.\n  - Form submission uses a hidden input carrying the canonical 24h \\`value\\` when \\`name\\` is set.\n        `\n      }\n    }\n  },\n  render: () => html`\n    <modus-wc-time-input\n      label="Meeting time"\n      format="24hrs"\n      value="09:45"\n    ></modus-wc-time-input>\n  `\n}',...(ae=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const we=["Default","Format12Hour","Datalist","WithGeneratedIntervals","WithSeconds","Format12HourWithSeconds","Format12HourWithGeneratedIntervals","WithDatalist","WithDatalistOptions","WithErrorFeedback","ShadowDomParent","Migration"];export{l as Datalist,r as Default,o as Format12Hour,u as Format12HourWithGeneratedIntervals,p as Format12HourWithSeconds,b as Migration,w as ShadowDomParent,c as WithDatalist,h as WithDatalistOptions,v as WithErrorFeedback,m as WithGeneratedIntervals,d as WithSeconds,we as __namedExportsOrder,ve as default};
