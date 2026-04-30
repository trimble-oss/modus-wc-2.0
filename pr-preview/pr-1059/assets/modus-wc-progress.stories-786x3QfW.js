import{x as r}from"./lit-element-CucEn6F2.js";import{o as s}from"./if-defined-BiZP-SBN.js";import{c as J}from"./shadow-host-helper-A4Nvcs5e.js";const X={title:"Components/Progress",component:"modus-wc-progress",args:{indeterminate:!1,max:100,value:70,variant:"default"},argTypes:{variant:{control:{type:"select"},options:["default","radial"]}},parameters:{layout:"padded"}},n={render:e=>r`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="${s(e["custom-class"])}"
        ?indeterminate=${e.indeterminate}
        label=${s(e.label)}
        max=${s(e.max)}
        value=${e.value}
        variant=${s(e.variant)}
      ></modus-wc-progress>
    `},t={render:()=>r` <modus-wc-progress indeterminate="true"></modus-wc-progress> `},l={render:e=>r`
<style>
  modus-wc-progress.modus-wc-progress-container .size-small {
    height: 0.5rem;
  }
  modus-wc-progress.modus-wc-progress-container .size-compact {
    height: 0.25rem;
  }
</style>
<div>
  <div>
    Default size
    <modus-wc-progress value=${e.value}></modus-wc-progress>
  </div>
  <div>
    Small size
    <modus-wc-progress
      value=${e.value}
      custom-class="size-small"
    ></modus-wc-progress>
  </div>
  <div>
    Compact size
    <modus-wc-progress
      value=${e.value}
      custom-class="size-compact"
    ></modus-wc-progress>
  </div>
</div>
    `},c={args:{label:"Loading...",value:50},render:e=>r`
<style>
  modus-wc-progress .modus-wc-progress-label.custom-label-color {
    color: #f00;
  }
</style>
<modus-wc-progress
  value=${e.value}
  label=${s(e.label)}
  custom-class="custom-label-color"
></modus-wc-progress>
    `},i={render:e=>r`
<style>
  modus-wc-progress .modus-wc-progress.custom-bar-color::-webkit-progress-value {
    background-color: #f48;
  }
  modus-wc-progress .modus-wc-progress.custom-bar-color::-moz-progress-bar {
    background-color: #f48;
  }
</style>
<modus-wc-progress
  value=${e.value}
  custom-class="custom-bar-color"
></modus-wc-progress>
    `},d={render:e=>r`
<style>
  modus-wc-progress .modus-wc-progress.custom-bg-color {
    background-color: #f00;
  }
</style>
<modus-wc-progress
  value=${e.value}
  custom-class="custom-bg-color"
></modus-wc-progress>
    `},m={render:e=>r`
<style>
  #radial-icon {
    justify-content: center;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  ?indeterminate=${e.indeterminate}
  max=${s(e.max)}
  variant="radial"
  value=${e.value}
>
  <modus-wc-icon id="radial-icon" name="clipboard" size="md"></modus-wc-icon>
  ${e.value}%
</modus-wc-progress>
    `,parameters:{layout:"centered"}},u={render:e=>r`
<style>
  .radial-progress--lg {
    --size: 12rem;
  }
  .radial-progress--thin {
    --thickness: 0.5rem;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg"
  ?indeterminate=${e.indeterminate}
  max=${s(e.max)}
  variant="radial"
  value=${e.value}
>
  ${e.value}%
</modus-wc-progress>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg radial-progress--thin"
  ?indeterminate=${e.indeterminate}
  max=${s(e.max)}
  variant="radial"
  value=${e.value}
>
  ${e.value}%
</modus-wc-progress>
    `,parameters:{layout:"centered"}},p={render:e=>{if(!customElements.get("progress-shadow-host")){const F=J({componentTag:"modus-wc-progress",propsMapper:(a,G)=>{const o=G;o.customClass=a["custom-class"]||"",o.indeterminate=!!a.indeterminate,o.label=a.label??"",o.max=a.max??100,o.value=a.value,o.variant=a.variant??"default"}});customElements.define("progress-shadow-host",F)}return r`<progress-shadow-host
      .props=${{...e}}
    ></progress-shadow-host>`}},g={parameters:{docs:{description:{story:`
#### Breaking Changes

  - Colors and sizes are now handled through CSS instead of direct props.
  - The \`mode\` prop has been replaced with an \`indeterminate\` boolean prop.

#### Prop Mapping

| 1.0 Prop          | 2.0 Prop      | Notes                                                |
|-------------------|---------------|------------------------------------------------------|
| aria-label        | aria-label    |                                                      |
| background-color  |               | Not carried over, use CSS instead                    |
| color             |               | Not carried over, use CSS instead                    |
| max-value         | max           |                                                      |
| min-value         |               | Not carried over                                     |
| mode              | indeterminate | 1.0: \`determinate\`/\`indeterminate\`, 2.0: boolean |
| size              |               | Not carried over, use CSS instead                    |
| text              | label         |                                                      |
| text-color        |               | Not carried over, use CSS instead                    |
| value             | value         |                                                      |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var v,w,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="\${ifDefined(args['custom-class'])}"
        ?indeterminate=\${args.indeterminate}
        label=\${ifDefined(args.label)}
        max=\${ifDefined(args.max)}
        value=\${args.value}
        variant=\${ifDefined(args.variant)}
      ></modus-wc-progress>
    \`;
  }
}`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var h,$,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return html\` <modus-wc-progress indeterminate="true"></modus-wc-progress> \`;
  }
}`,...(f=($=t.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var S,C,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  modus-wc-progress.modus-wc-progress-container .size-small {
    height: 0.5rem;
  }
  modus-wc-progress.modus-wc-progress-container .size-compact {
    height: 0.25rem;
  }
</style>
<div>
  <div>
    Default size
    <modus-wc-progress value=\${args.value}></modus-wc-progress>
  </div>
  <div>
    Small size
    <modus-wc-progress
      value=\${args.value}
      custom-class="size-small"
    ></modus-wc-progress>
  </div>
  <div>
    Compact size
    <modus-wc-progress
      value=\${args.value}
      custom-class="size-compact"
    ></modus-wc-progress>
  </div>
</div>
    \`;
  }
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var y,z,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Loading...',
    value: 50
  },
  render: args => {
    // prettier-ignore
    return html\`
<style>
  modus-wc-progress .modus-wc-progress-label.custom-label-color {
    color: #f00;
  }
</style>
<modus-wc-progress
  value=\${args.value}
  label=\${ifDefined(args.label)}
  custom-class="custom-label-color"
></modus-wc-progress>
    \`;
  }
}`,...(k=(z=c.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var P,D,E;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  modus-wc-progress .modus-wc-progress.custom-bar-color::-webkit-progress-value {
    background-color: #f48;
  }
  modus-wc-progress .modus-wc-progress.custom-bar-color::-moz-progress-bar {
    background-color: #f48;
  }
</style>
<modus-wc-progress
  value=\${args.value}
  custom-class="custom-bar-color"
></modus-wc-progress>
    \`;
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,T,B;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  modus-wc-progress .modus-wc-progress.custom-bg-color {
    background-color: #f00;
  }
</style>
<modus-wc-progress
  value=\${args.value}
  custom-class="custom-bg-color"
></modus-wc-progress>
    \`;
  }
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var M,H,L;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  #radial-icon {
    justify-content: center;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  ?indeterminate=\${args.indeterminate}
  max=\${ifDefined(args.max)}
  variant="radial"
  value=\${args.value}
>
  <modus-wc-icon id="radial-icon" name="clipboard" size="md"></modus-wc-icon>
  \${args.value}%
</modus-wc-progress>
    \`;
  },
  parameters: {
    layout: 'centered'
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,R,W;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .radial-progress--lg {
    --size: 12rem;
  }
  .radial-progress--thin {
    --thickness: 0.5rem;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg"
  ?indeterminate=\${args.indeterminate}
  max=\${ifDefined(args.max)}
  variant="radial"
  value=\${args.value}
>
  \${args.value}%
</modus-wc-progress>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg radial-progress--thin"
  ?indeterminate=\${args.indeterminate}
  max=\${ifDefined(args.max)}
  variant="radial"
  value=\${args.value}
>
  \${args.value}%
</modus-wc-progress>
    \`;
  },
  parameters: {
    layout: 'centered'
  }
}`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var j,I,V;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('progress-shadow-host')) {
      const ProgressShadowHost = createShadowHostClass<ProgressArgs>({
        componentTag: 'modus-wc-progress',
        propsMapper: (v: ProgressArgs, el: HTMLElement) => {
          const progressEl = el as unknown as {
            customClass: string;
            indeterminate: boolean;
            label: string;
            max: number;
            value: number;
            variant: string;
          };
          progressEl.customClass = v['custom-class'] || '';
          progressEl.indeterminate = Boolean(v.indeterminate);
          progressEl.label = v.label ?? '';
          progressEl.max = v.max ?? 100;
          progressEl.value = v.value;
          progressEl.variant = v.variant ?? 'default';
        }
      });
      customElements.define('progress-shadow-host', ProgressShadowHost);
    }
    return html\`<progress-shadow-host
      .props=\${{
      ...args
    }}
    ></progress-shadow-host>\`;
  }
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var _,O,q;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - Colors and sizes are now handled through CSS instead of direct props.
  - The \\\`mode\\\` prop has been replaced with an \\\`indeterminate\\\` boolean prop.

#### Prop Mapping

| 1.0 Prop          | 2.0 Prop      | Notes                                                |
|-------------------|---------------|------------------------------------------------------|
| aria-label        | aria-label    |                                                      |
| background-color  |               | Not carried over, use CSS instead                    |
| color             |               | Not carried over, use CSS instead                    |
| max-value         | max           |                                                      |
| min-value         |               | Not carried over                                     |
| mode              | indeterminate | 1.0: \\\`determinate\\\`/\\\`indeterminate\\\`, 2.0: boolean |
| size              |               | Not carried over, use CSS instead                    |
| text              | label         |                                                      |
| text-color        |               | Not carried over, use CSS instead                    |
| value             | value         |                                                      |
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
}`,...(q=(O=g.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const Y=["Default","Indeterminate","SizeVariations","LabelTextColor","CustomBarColor","CustomBackgroundColor","RadialWithSlottedContent","RadialWithCustomSizeAndThickness","ShadowDomParent","Migration"];export{d as CustomBackgroundColor,i as CustomBarColor,n as Default,t as Indeterminate,c as LabelTextColor,g as Migration,u as RadialWithCustomSizeAndThickness,m as RadialWithSlottedContent,p as ShadowDomParent,l as SizeVariations,Y as __namedExportsOrder,X as default};
