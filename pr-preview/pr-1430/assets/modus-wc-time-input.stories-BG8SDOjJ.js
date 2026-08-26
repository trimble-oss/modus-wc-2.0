import{w as G}from"./decorator-Cv9na35H.js";import{b as c}from"./lit-element-DgBvYnzn.js";import{o as s}from"./if-defined-BnVFTJ4o.js";import{c as N}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const R={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{bordered:!0,disabled:!1,"hour-format":"24h",label:"Time","read-only":!1,required:!1,"show-seconds":!1,size:"md",value:"09:45"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"hour-format":{control:{type:"select"},options:["12h","24h"]},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[G],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},o={render:e=>c`
    <modus-wc-time-input
      aria-label="Time input"
      auto-complete=${s(e["auto-complete"])}
      ?bordered=${e.bordered}
      custom-class=${s(e["custom-class"])}
      ?disabled=${e.disabled}
      .feedback=${e.feedback}
      .hourFormat=${e["hour-format"]??"24h"}
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
      .datalistOptions=${e["datalist-options"]}
      .value=${e.value}
    ></modus-wc-time-input>
  `},r={...o},a={...o,args:{"hour-format":"12h",value:"21:45"}},i={...o,args:{value:"09:45","datalist-options":["09:15","09:30","09:45","10:00","10:15"]}},l={...o,args:{"interval-minutes":15,min:"08:00",max:"12:00",value:"09:00"}},d={...o,args:{"show-seconds":!0,value:"09:45:00"}},U={level:"error",message:"Invalid time entered."},u={...o,args:{feedback:U,required:!0,value:""},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Invalid time entered.'
  };
<\/script>`}}}},m={render:e=>{if(!customElements.get("time-input-shadow-host")){const W=N({componentTag:"modus-wc-time-input",propsMapper:(t,h)=>{const n=h;n.autoComplete=t["auto-complete"]??"",n.bordered=t.bordered??!0,n.customClass=t["custom-class"]||"",t["datalist-options"]&&(n.datalistOptions=t["datalist-options"]),n.disabled=!!t.disabled,n.hourFormat=t["hour-format"]??"24h",n.inputId=t["input-id"]??"",n.inputTabIndex=t["input-tab-index"]??0,t["interval-minutes"]!==void 0&&(n.intervalMinutes=t["interval-minutes"],h.setAttribute("interval-minutes",String(t["interval-minutes"]))),n.label=t.label??"",n.max=t.max??"",n.min=t.min??"",n.name=t.name??"",n.readOnly=!!t["read-only"],n.required=!!t.required,n.showSeconds=!!t["show-seconds"],n.size=t.size??"md",t.step!==void 0&&(n.step=t.step),n.value=t.value??""}});customElements.define("time-input-shadow-host",W)}return c`<time-input-shadow-host
      .props=${{...e}}
    ></time-input-shadow-host>`}},p={parameters:{docs:{description:{story:'\n#### Breaking Changes\n\n  - The field is a native `<input type="time">` (browser clock icon and sizing).\n  - Custom Modus dropdown (picker wheels or suggestion list) opens on field click /\n    ArrowDown (native time popup is suppressed in favor of the Modus menu).\n  - `value` remains **24-hour** (`HH:mm` / `HH:mm:ss`) for storage and `inputChange`.\n  - New `hourFormat` prop (`hour-format` attribute): `24h` (default) or `12h`.\n    Controls Modus picker wheels / datalist labels, and sets `lang` (`en-GB` / `en-US`)\n    to bias the native field presentation where the browser supports it.\n  - Dropdown mode is inferred: picker wheels by default; suggestion list when\n    `datalistOptions` (or deprecated `datalistId`) is set, or when `interval-minutes`\n    is present for generated intervals.\n  - `datalistId` is deprecated; prefer `datalistOptions`.\n  - Size values use abbreviations (`sm`, `md`, `lg`).\n\n#### New Behaviors\n\n  - Field click / ArrowDown opens the Modus dropdown; Escape / click-outside closes and keeps the last value.\n  - Picker wheel clicks update the field immediately; datalist selection closes the menu.\n        '}}},render:()=>c`
    <modus-wc-time-input
      label="Meeting time"
      hour-format="24h"
      value="09:45"
    ></modus-wc-time-input>
  `};var b,w,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template
}`,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var v,g,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  args: {
    'hour-format': '12h',
    value: '21:45'
  }
}`,...(I=(g=a.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var k,E,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Template,
  args: {
    value: '09:45',
    'datalist-options': ['09:15', '09:30', '09:45', '10:00', '10:15']
  }
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var T,$,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    'interval-minutes': 15,
    min: '08:00',
    max: '12:00',
    value: '09:00'
  }
}`,...(y=($=l.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var x,C,F;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    'show-seconds': true,
    value: '09:45:00'
  }
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var M,H,B;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(H=u.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var z,q,D;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
            hourFormat: string;
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
          timeInputEl.hourFormat = v['hour-format'] ?? '24h';
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
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var O,A,P;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - The field is a native \\`<input type="time">\\` (browser clock icon and sizing).\n  - Custom Modus dropdown (picker wheels or suggestion list) opens on field click /\n    ArrowDown (native time popup is suppressed in favor of the Modus menu).\n  - \\`value\\` remains **24-hour** (\\`HH:mm\\` / \\`HH:mm:ss\\`) for storage and \\`inputChange\\`.\n  - New \\`hourFormat\\` prop (\\`hour-format\\` attribute): \\`24h\\` (default) or \\`12h\\`.\n    Controls Modus picker wheels / datalist labels, and sets \\`lang\\` (\\`en-GB\\` / \\`en-US\\`)\n    to bias the native field presentation where the browser supports it.\n  - Dropdown mode is inferred: picker wheels by default; suggestion list when\n    \\`datalistOptions\\` (or deprecated \\`datalistId\\`) is set, or when \\`interval-minutes\\`\n    is present for generated intervals.\n  - \\`datalistId\\` is deprecated; prefer \\`datalistOptions\\`.\n  - Size values use abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### New Behaviors\n\n  - Field click / ArrowDown opens the Modus dropdown; Escape / click-outside closes and keeps the last value.\n  - Picker wheel clicks update the field immediately; datalist selection closes the menu.\n        `\n      }\n    }\n  },\n  render: () => html`\n    <modus-wc-time-input\n      label="Meeting time"\n      hour-format="24h"\n      value="09:45"\n    ></modus-wc-time-input>\n  `\n}',...(P=(A=p.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const V=["Default","Format12Hour","Datalist","WithGeneratedIntervals","WithSeconds","WithErrorFeedback","ShadowDomParent","Migration"];export{i as Datalist,r as Default,a as Format12Hour,p as Migration,m as ShadowDomParent,u as WithErrorFeedback,l as WithGeneratedIntervals,d as WithSeconds,V as __namedExportsOrder,R as default};
