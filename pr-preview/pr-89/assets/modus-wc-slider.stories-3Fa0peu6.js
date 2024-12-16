import{w as u}from"./decorator-Dt3Huotz.js";import{k as m}from"./lit-element-DVRzCIa_.js";import{t as i}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const y={title:"Components/Forms/Slider",component:"modus-wc-slider",args:{"a11y-label":"Slider","custom-class":"",disabled:!1,name:"",required:!1,size:"xs",value:!0},argTypes:{"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},decorators:[u],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>m`
      <modus-wc-slider
        a11y-describedby=${i(e["a11y-describedby"])}
        a11y-label=${e["a11y-label"]}
        a11y-labelledby=${i(e["a11y-labelledby"])}
        custom-class=${i(e["custom-class"])}
        ?disabled=${e.disabled}
        input-dir=${i(e["input-dir"])}
        input-id=${i(e["input-id"])}
        input-tab-index=${i(e["input-tab-index"])}
        max=${i(e.max)}
        min=${i(e.min)}
        name=${i(e.name)}
        ?required=${e.required}
        size=${i(e.size)}
        step=${i(e.step)}
        .value=${e.value}
      ></modus-wc-slider>
    `},r={render:()=>m`
<style>
  .form-control {
    display: flex;
    flex-direction: column;
  }
  modus-wc-input-label {
    padding-bottom: 8px;
  }
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-input-label
      for-id="slider-input"
      label-text="Example slider"
    ></modus-wc-input-label>
    <modus-wc-slider
      a11y-label="Example slider"
      input-id="slider-input"
      value="70"
    ></modus-wc-slider>
  </div>
</form>
    `};var d,l,s;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-slider
        a11y-describedby=\${ifDefined(args['a11y-describedby'])}
        a11y-label=\${args['a11y-label']}
        a11y-labelledby=\${ifDefined(args['a11y-labelledby'])}
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-dir=\${ifDefined(args['input-dir'])}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
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
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var a,t,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return html\`
<style>
  .form-control {
    display: flex;
    flex-direction: column;
  }
  modus-wc-input-label {
    padding-bottom: 8px;
  }
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-input-label
      for-id="slider-input"
      label-text="Example slider"
    ></modus-wc-input-label>
    <modus-wc-slider
      a11y-label="Example slider"
      input-id="slider-input"
      value="70"
    ></modus-wc-slider>
  </div>
</form>
    \`;
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const $=["Template","SliderWithLabel"];export{r as SliderWithLabel,n as Template,$ as __namedExportsOrder,y as default};
