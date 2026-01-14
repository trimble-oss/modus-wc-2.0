import{w as x}from"./decorator-D4YmxizW.js";import{x as t}from"./lit-element-C8zulti1.js";import{o as s}from"./if-defined-yv6owfG8.js";import{c as w}from"./shadow-host-helper-B2BwyiIi.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const q={title:"Components/Forms/Slider",component:"modus-wc-slider",args:{"custom-class":"",disabled:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[x],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>t`
      <modus-wc-slider
        aria-label="Slider"
        custom-class=${s(e["custom-class"])}
        ?disabled=${e.disabled}
        input-id=${s(e["input-id"])}
        input-tab-index=${s(e["input-tab-index"])}
        label=${s(e.label)}
        max=${s(e.max)}
        min=${s(e.min)}
        name=${s(e.name)}
        ?required=${e.required}
        size=${s(e.size)}
        step=${s(e.step)}
        .value=${e.value}
      ></modus-wc-slider>
    `},r={render:e=>{if(!customElements.get("slider-shadow-host")){const f=w({componentTag:"modus-wc-slider",propsMapper:(n,g)=>{const a=g;a.customClass=n["custom-class"]||"",a.disabled=!!n.disabled,a.inputId=n["input-id"]??"",a.inputTabIndex=n["input-tab-index"]??0,a.label=n.label??"",a.max=n.max??100,a.min=n.min??0,a.name=n.name??"",a.required=!!n.required,a.size=n.size??"md",a.step=n.step??1,a.value=typeof n.value=="number"?n.value:0}});customElements.define("slider-shadow-host",f)}return t`<slider-shadow-host
      .props=${{...e}}
    ></slider-shadow-host>`}},o={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for additional info and examples.
  - Property names have changed: \`max-value\` → \`max\`, \`min-value\` → \`min\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop     | Notes |
|-------------|--------------|-------|
| aria-label  | aria-label   |       |
| disabled    | disabled     |       |
| label       | label        |       |
| max-value   | max          |       |
| min-value   | min          |       |
| value       | value        |       |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange |             | Not carried over |
| valueInput  | inputChange |                  |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>t`<div></div>`};var l,d,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-slider
        aria-label="Slider"
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
        max=\${ifDefined(args.max)}
        min=\${ifDefined(args.min)}
        name=\${ifDefined(args.name)}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        step=\${ifDefined(args.step)}
        .value=\${args.value}
      ></modus-wc-slider>
    \`;
  }
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for slider component
    if (!customElements.get('slider-shadow-host')) {
      const SliderShadowHost = createShadowHostClass<SliderArgs>({
        componentTag: 'modus-wc-slider',
        propsMapper: (v: SliderArgs, el: HTMLElement) => {
          const sliderEl = el as unknown as {
            customClass: string;
            disabled: boolean;
            inputId: string;
            inputTabIndex: number;
            label: string;
            max: number;
            min: number;
            name: string;
            required: boolean;
            size: string;
            step: number;
            value: number;
          };
          sliderEl.customClass = v['custom-class'] || '';
          sliderEl.disabled = Boolean(v.disabled);
          sliderEl.inputId = v['input-id'] ?? '';
          sliderEl.inputTabIndex = v['input-tab-index'] ?? 0;
          sliderEl.label = v.label ?? '';
          sliderEl.max = v.max ?? 100;
          sliderEl.min = v.min ?? 0;
          sliderEl.name = v.name ?? '';
          sliderEl.required = Boolean(v.required);
          sliderEl.size = v.size ?? 'md';
          sliderEl.step = v.step ?? 1;
          sliderEl.value = typeof v.value === 'number' ? v.value : 0;
        }
      });
      customElements.define('slider-shadow-host', SliderShadowHost);
    }
    return html\`<slider-shadow-host
      .props=\${{
      ...args
    }}
    ></slider-shadow-host>\`;
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,v,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for additional info and examples.
  - Property names have changed: \\\`max-value\\\` → \\\`max\\\`, \\\`min-value\\\` → \\\`min\\\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop     | Notes |
|-------------|--------------|-------|
| aria-label  | aria-label   |       |
| disabled    | disabled     |       |
| label       | label        |       |
| max-value   | max          |       |
| min-value   | min          |       |
| value       | value        |       |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange |             | Not carried over |
| valueInput  | inputChange |                  |
        \`
      }
    },
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  render: () => html\`<div></div>\`
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const z=["Default","ShadowDomParent","Migration"];export{i as Default,o as Migration,r as ShadowDomParent,z as __namedExportsOrder,q as default};
