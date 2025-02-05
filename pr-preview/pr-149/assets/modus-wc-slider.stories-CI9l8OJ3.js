import{w as u}from"./decorator-Dt3Huotz.js";import{k as m}from"./lit-element-DVRzCIa_.js";import{t as i}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const $={title:"Components/Forms/Slider",component:"modus-wc-slider",args:{"aria-label":"Slider","custom-class":"",disabled:!1,name:"",required:!1,size:"xs",value:!0},argTypes:{"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},decorators:[u],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>m`
      <modus-wc-slider
        aria-describedby=${i(e["aria-describedby"])}
        aria-label=${e["aria-label"]}
        aria-labelledby=${i(e["aria-labelledby"])}
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
      aria-label="Example slider"
      input-id="slider-input"
      value="70"
    ></modus-wc-slider>
  </div>
</form>
    `};var a,d,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-slider
        aria-describedby=\${ifDefined(args['aria-describedby'])}
        aria-label=\${args['aria-label']}
        aria-labelledby=\${ifDefined(args['aria-labelledby'])}
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
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var s,t,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      aria-label="Example slider"
      input-id="slider-input"
      value="70"
    ></modus-wc-slider>
  </div>
</form>
    \`;
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const x=["Template","SliderWithLabel"];export{r as SliderWithLabel,n as Template,x as __namedExportsOrder,$ as default};
