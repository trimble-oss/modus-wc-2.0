import{w as V}from"./decorator-Cv9na35H.js";import{b as s}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{c as X}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var f=Object.freeze,Y=Object.defineProperty,Z=(e,v)=>f(Y(e,"raw",{value:f(e.slice())})),g;const re={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{bordered:!0,disabled:!1,format:"24hrs",label:"Time","read-only":!1,required:!1,"show-seconds":!1,size:"md",value:"09:45"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},format:{control:{type:"select"},options:["12hrs","24hrs"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["picker","datalist"]}},decorators:[V],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>s`
    <modus-wc-time-input
      auto-complete=${a(e["auto-complete"])}
      ?bordered=${e.bordered}
      custom-class=${a(e["custom-class"])}
      ?disabled=${e.disabled}
      .feedback=${e.feedback}
      .format=${e.format??"24hrs"}
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
      .value=${e.value}
    ></modus-wc-time-input>
  `},o={...i},r={...i,args:{format:"12hrs",value:"21:45"}},l={...i,args:{variant:"datalist",value:"09:45","datalist-options":["09:15","09:30","09:45","10:00","10:15"]},parameters:{docs:{source:{code:`
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
        `}}}},d={...i,args:{variant:"datalist","interval-minutes":15,min:"08:00",max:"12:00",value:"09:00"}},m={...i,args:{"show-seconds":!0,value:"09:45:00"}},p={render:()=>s`
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
    `])))},ee={level:"error",message:"Invalid time entered."},c={...i,args:{feedback:ee,required:!0,value:""},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Invalid time entered.'
  };
<\/script>`}}}},h={render:e=>{if(!customElements.get("time-input-shadow-host")){const v=X({componentTag:"modus-wc-time-input",propsMapper:(t,b)=>{const n=b;n.autoComplete=t["auto-complete"]??"",n.bordered=t.bordered??!0,n.customClass=t["custom-class"]||"",t["datalist-options"]&&(n.datalistOptions=t["datalist-options"]),n.disabled=!!t.disabled,n.format=t.format??"24hrs",n.inputId=t["input-id"]??"",n.inputTabIndex=t["input-tab-index"]??0,t["interval-minutes"]!==void 0&&(n.intervalMinutes=t["interval-minutes"],b.setAttribute("interval-minutes",String(t["interval-minutes"]))),n.label=t.label??"",n.max=t.max??"",n.min=t.min??"",n.name=t.name??"",n.readOnly=!!t["read-only"],n.required=!!t.required,n.showSeconds=!!t["show-seconds"],n.size=t.size??"md",t.step!==void 0&&(n.step=t.step),n.value=t.value??""}});customElements.define("time-input-shadow-host",v)}return s`<time-input-shadow-host
      .props=${{...e}}
    ></time-input-shadow-host>`}},w={parameters:{docs:{description:{story:'\n#### Breaking Changes\n\n  - The field is a custom segmented text input (native `--:--` skeleton) instead of the browser\'s `<input type="time">`.\n  - Open the picker with the clock button or **Alt+ArrowDown** (plain Arrow keys edit segments).\n  - `value` remains **24-hour** (`HH:mm` / `HH:mm:ss`) for storage and `inputChange`.\n  - New `format` prop: `24hrs` (default) or `12hrs`.\n    Controls display, Modus picker wheels / datalist labels.\n  - New `variant` prop (`picker` default, `datalist` for interval / option list).\n  - Dropdown mode: `variant="datalist"`, non-empty `datalistOptions`, or deprecated `datalistId`.\n    The bare `interval-minutes` attribute still opts into datalist for backward compatibility.\n  - `datalistId` is deprecated; prefer `datalistOptions` or `variant="datalist"`.\n  - Size values use abbreviations (`sm`, `md`, `lg`).\n\n#### New Behaviors\n\n  - Native-style keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, A/P sets AM/PM in 12hrs mode.\n  - Field click selects a segment; clock button or **Alt+ArrowDown** opens the dropdown.\n  - Escape / click-outside closes the dropdown.\n  - Picker wheel clicks update the field immediately; datalist selection closes the menu.\n  - Form submission uses a hidden input carrying the canonical 24h `value` when `name` is set.\n        '}}},render:()=>s`
    <modus-wc-time-input
      label="Meeting time"
      format="24hrs"
      value="09:45"
    ></modus-wc-time-input>
  `};var I,E,k;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template
}`,...(k=(E=o.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var y,T,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    format: '12hrs',
    value: '21:45'
  }
}`,...(S=(T=r.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var x,O,$;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...($=(O=l.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var A,D,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: 'datalist',
    'interval-minutes': 15,
    min: '08:00',
    max: '12:00',
    value: '09:00'
  }
}`,...(C=(D=d.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var M,q,H;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Template,
  args: {
    'show-seconds': true,
    value: '09:45:00'
  }
}`,...(H=(q=m.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var F,z,B;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var P,W,_;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var N,L,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var G,R,U;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
          timeInputEl.format = v.format ?? '24hrs';
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
}`,...(U=(R=h.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - The field is a custom segmented text input (native \\`--:--\\` skeleton) instead of the browser\'s \\`<input type="time">\\`.\n  - Open the picker with the clock button or **Alt+ArrowDown** (plain Arrow keys edit segments).\n  - \\`value\\` remains **24-hour** (\\`HH:mm\\` / \\`HH:mm:ss\\`) for storage and \\`inputChange\\`.\n  - New \\`format\\` prop: \\`24hrs\\` (default) or \\`12hrs\\`.\n    Controls display, Modus picker wheels / datalist labels.\n  - New \\`variant\\` prop (\\`picker\\` default, \\`datalist\\` for interval / option list).\n  - Dropdown mode: \\`variant="datalist"\\`, non-empty \\`datalistOptions\\`, or deprecated \\`datalistId\\`.\n    The bare \\`interval-minutes\\` attribute still opts into datalist for backward compatibility.\n  - \\`datalistId\\` is deprecated; prefer \\`datalistOptions\\` or \\`variant="datalist"\\`.\n  - Size values use abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### New Behaviors\n\n  - Native-style keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, A/P sets AM/PM in 12hrs mode.\n  - Field click selects a segment; clock button or **Alt+ArrowDown** opens the dropdown.\n  - Escape / click-outside closes the dropdown.\n  - Picker wheel clicks update the field immediately; datalist selection closes the menu.\n  - Form submission uses a hidden input carrying the canonical 24h \\`value\\` when \\`name\\` is set.\n        `\n      }\n    }\n  },\n  render: () => html`\n    <modus-wc-time-input\n      label="Meeting time"\n      format="24hrs"\n      value="09:45"\n    ></modus-wc-time-input>\n  `\n}',...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const le=["Default","Format12Hour","Datalist","WithGeneratedIntervals","WithSeconds","WithDatalist","WithDatalistOptions","WithErrorFeedback","ShadowDomParent","Migration"];export{l as Datalist,o as Default,r as Format12Hour,w as Migration,h as ShadowDomParent,p as WithDatalist,u as WithDatalistOptions,c as WithErrorFeedback,d as WithGeneratedIntervals,m as WithSeconds,le as __namedExportsOrder,re as default};
