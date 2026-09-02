import{w as W}from"./decorator-Cv9na35H.js";import{b as c}from"./lit-element-DgBvYnzn.js";import{o as s}from"./if-defined-BnVFTJ4o.js";import{c as L}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const Q={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{bordered:!0,disabled:!1,format:"24hrs",label:"Time","read-only":!1,required:!1,"show-seconds":!1,size:"md",value:"09:45"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},format:{control:{type:"select"},options:["12hrs","24hrs"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["picker","datalist"]}},decorators:[W],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>c`
    <modus-wc-time-input
      aria-label="Time input"
      auto-complete=${s(e["auto-complete"])}
      ?bordered=${e.bordered}
      custom-class=${s(e["custom-class"])}
      ?disabled=${e.disabled}
      .feedback=${e.feedback}
      .format=${e.format??"24hrs"}
      input-id=${s(e["input-id"])}
      input-tab-index=${s(e["input-tab-index"])}
      interval-minutes=${s(e["interval-minutes"])}
      label=${s(e.label)}
      max=${s(e.max)}
      min=${s(e.min)}
      name=${s(e.name)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      ?show-seconds=${e["show-seconds"]}
      size=${s(e.size)}
      step=${s(e.step)}
      variant=${s(e.variant)}
      .datalistOptions=${e["datalist-options"]}
      .value=${e.value}
    ></modus-wc-time-input>
  `},o={...a},r={...a,args:{format:"12hrs",value:"21:45"}},i={...a,args:{variant:"datalist",value:"09:45","datalist-options":["09:15","09:30","09:45","10:00","10:15"]}},l={...a,args:{variant:"datalist","interval-minutes":15,min:"08:00",max:"12:00",value:"09:00"}},d={...a,args:{"show-seconds":!0,value:"09:45:00"}},G={level:"error",message:"Invalid time entered."},m={...a,args:{feedback:G,required:!0,value:""},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Invalid time entered.'
  };
<\/script>`}}}},p={render:e=>{if(!customElements.get("time-input-shadow-host")){const N=L({componentTag:"modus-wc-time-input",propsMapper:(t,h)=>{const n=h;n.autoComplete=t["auto-complete"]??"",n.bordered=t.bordered??!0,n.customClass=t["custom-class"]||"",t["datalist-options"]&&(n.datalistOptions=t["datalist-options"]),n.disabled=!!t.disabled,n.format=t.format??"24hrs",n.inputId=t["input-id"]??"",n.inputTabIndex=t["input-tab-index"]??0,t["interval-minutes"]!==void 0&&(n.intervalMinutes=t["interval-minutes"],h.setAttribute("interval-minutes",String(t["interval-minutes"]))),n.label=t.label??"",n.max=t.max??"",n.min=t.min??"",n.name=t.name??"",n.readOnly=!!t["read-only"],n.required=!!t.required,n.showSeconds=!!t["show-seconds"],n.size=t.size??"md",t.step!==void 0&&(n.step=t.step),n.value=t.value??""}});customElements.define("time-input-shadow-host",N)}return c`<time-input-shadow-host
      .props=${{...e}}
    ></time-input-shadow-host>`}},u={parameters:{docs:{description:{story:'\n#### Breaking Changes\n\n  - The field is a custom segmented text input (native `--:--` skeleton) instead of the browser\'s `<input type="time">`.\n  - Open the picker with the clock button or **Alt+ArrowDown** (plain Arrow keys edit segments).\n  - `value` remains **24-hour** (`HH:mm` / `HH:mm:ss`) for storage and `inputChange`.\n  - New `format` prop: `24hrs` (default) or `12hrs`.\n    Controls display, Modus picker wheels / datalist labels.\n  - New `variant` prop (`picker` default, `datalist` for interval / option list).\n  - Dropdown mode: `variant="datalist"`, non-empty `datalistOptions`, or deprecated `datalistId`.\n    The bare `interval-minutes` attribute still opts into datalist for backward compatibility.\n  - `datalistId` is deprecated; prefer `datalistOptions` or `variant="datalist"`.\n  - Size values use abbreviations (`sm`, `md`, `lg`).\n\n#### New Behaviors\n\n  - Native-style keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, A/P sets AM/PM in 12hrs mode.\n  - Field click selects a segment; clock button or **Alt+ArrowDown** opens the dropdown.\n  - Escape / click-outside closes the dropdown.\n  - Picker wheel clicks update the field immediately; datalist selection closes the menu.\n  - Form submission uses a hidden input carrying the canonical 24h `value` when `name` is set.\n        '}}},render:()=>c`
    <modus-wc-time-input
      label="Meeting time"
      format="24hrs"
      value="09:45"
    ></modus-wc-time-input>
  `};var b,v,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var f,g,I;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    format: '12hrs',
    value: '21:45'
  }
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var k,y,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: 'datalist',
    value: '09:45',
    'datalist-options': ['09:15', '09:30', '09:45', '10:00', '10:15']
  }
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var T,S,$;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: 'datalist',
    'interval-minutes': 15,
    min: '08:00',
    max: '12:00',
    value: '09:00'
  }
}`,...($=(S=l.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var A,x,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  args: {
    'show-seconds': true,
    value: '09:45:00'
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var H,M,D;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var F,O,B;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(O=p.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var q,z,P;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - The field is a custom segmented text input (native \\`--:--\\` skeleton) instead of the browser\'s \\`<input type="time">\\`.\n  - Open the picker with the clock button or **Alt+ArrowDown** (plain Arrow keys edit segments).\n  - \\`value\\` remains **24-hour** (\\`HH:mm\\` / \\`HH:mm:ss\\`) for storage and \\`inputChange\\`.\n  - New \\`format\\` prop: \\`24hrs\\` (default) or \\`12hrs\\`.\n    Controls display, Modus picker wheels / datalist labels.\n  - New \\`variant\\` prop (\\`picker\\` default, \\`datalist\\` for interval / option list).\n  - Dropdown mode: \\`variant="datalist"\\`, non-empty \\`datalistOptions\\`, or deprecated \\`datalistId\\`.\n    The bare \\`interval-minutes\\` attribute still opts into datalist for backward compatibility.\n  - \\`datalistId\\` is deprecated; prefer \\`datalistOptions\\` or \\`variant="datalist"\\`.\n  - Size values use abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### New Behaviors\n\n  - Native-style keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, A/P sets AM/PM in 12hrs mode.\n  - Field click selects a segment; clock button or **Alt+ArrowDown** opens the dropdown.\n  - Escape / click-outside closes the dropdown.\n  - Picker wheel clicks update the field immediately; datalist selection closes the menu.\n  - Form submission uses a hidden input carrying the canonical 24h \\`value\\` when \\`name\\` is set.\n        `\n      }\n    }\n  },\n  render: () => html`\n    <modus-wc-time-input\n      label="Meeting time"\n      format="24hrs"\n      value="09:45"\n    ></modus-wc-time-input>\n  `\n}',...(P=(z=u.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const V=["Default","Format12Hour","Datalist","WithGeneratedIntervals","WithSeconds","WithErrorFeedback","ShadowDomParent","Migration"];export{i as Datalist,o as Default,r as Format12Hour,u as Migration,p as ShadowDomParent,m as WithErrorFeedback,l as WithGeneratedIntervals,d as WithSeconds,V as __namedExportsOrder,Q as default};
