import{w as f}from"./decorator-D4YmxizW.js";import{b as i}from"./lit-element-DgBvYnzn.js";import{o as c}from"./if-defined-BnVFTJ4o.js";import{c as x}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var l=Object.freeze,C=Object.defineProperty,E=(e,o)=>l(C(e,"raw",{value:l(e.slice())})),m;const $={title:"Components/Stepper",component:"modus-wc-stepper",args:{"active-step":void 0,interactive:!1,steps:[{label:"Scale",color:"primary"},{label:"Belong",color:"primary"},{label:"Grow",color:"warning"},{label:"Innovate",content:"🚀"}]},decorators:[f],argTypes:{"active-step":{control:"number"},"custom-class":{control:"text"},interactive:{control:"boolean"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},steps:{description:"Array of step objects defining the steps to display",table:{type:{detail:`
            Interface: IStepperItem
            Properties:
            - color ('primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral', optional): The color theme of the step
            - content (string, optional): Custom content to display in the step indicator
            - customClass (string, optional): Custom CSS class to apply to the step
            - label (string, optional): Text label for the step
          `}}}},parameters:{actions:{handles:["stepClick"]},layout:"padded"}},k={render:e=>i(m||(m=E([`
<modus-wc-stepper
  active-step="`,`"
  custom-class="`,`"
  orientation="`,`"
  ?interactive="`,`"
  .steps="`,`"
>
</modus-wc-stepper>
<script>
// Adding this block to show how to set stepper steps via JS.    
// const steps = [
//   { label: 'Scale', color: 'primary' },
//   { label: 'Belong', color: 'primary' },
//   { label: 'Grow', color: 'warning' },
//   { label: 'Innovate', content: '🚀' }
//   ];      
// const stepper = document.querySelector('modus-wc-stepper');  
// stepper.steps = steps;
<\/script>

  `])),c(e["active-step"]),c(e["custom-class"]),c(e.orientation),e.interactive??!1,e.steps)},p={...k},n={parameters:{docs:{source:{code:`
<modus-wc-stepper
  id="controlled-stepper"
  active-step="1"
  orientation="horizontal"
  interactive
></modus-wc-stepper>
<script>
  const steps = [
    { label: 'Scale', color: 'primary' },
    { label: 'Belong', color: 'primary' },
    { label: 'Grow', color: 'primary' },
    { label: 'Innovate', content: '🚀', color: 'primary' },
  ];

  const stepper = document.getElementById('controlled-stepper');
  stepper.steps = steps.map((step, index) => ({
    ...step,
    color: index <= 1 ? 'primary' : 'neutral',
  }));

  stepper.addEventListener('stepClick', (event) => {
    stepper.activeStep = event.detail.index;
    stepper.steps = steps.map((step, index) => ({
      ...step,
      color: index <= event.detail.index ? 'primary' : 'neutral',
    }));
  });
<\/script>
        `}}},render:()=>{const e=[{label:"Scale",color:"primary"},{label:"Belong",color:"primary"},{label:"Grow",color:"primary"},{label:"Innovate",content:"🚀",color:"primary"}],o=s=>e.map((t,I)=>({...t,color:I<=s?"primary":"neutral"})),r=s=>{const t=s.target;t.activeStep=s.detail.index,t.steps=o(s.detail.index)};return i`
      <modus-wc-stepper
        id="controlled-stepper"
        active-step="1"
        orientation="horizontal"
        interactive
        .steps="${o(1)}"
        @stepClick=${r}
      ></modus-wc-stepper>
    `}},a={render:e=>{if(!customElements.get("stepper-shadow-host")){const o=x({componentTag:"modus-wc-stepper",propsMapper:(r,s)=>{const t=s;t.activeStep=r["active-step"],t.customClass=r["custom-class"]||"",t.interactive=r.interactive??!1,t.orientation=r.orientation??"horizontal",t.steps=r.steps??[]}});customElements.define("stepper-shadow-host",o)}return i`<stepper-shadow-host
      .props=${{...e}}
    ></stepper-shadow-host>`}};var d,v,u;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(u=(v=p.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var S,h,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<modus-wc-stepper
  id="controlled-stepper"
  active-step="1"
  orientation="horizontal"
  interactive
></modus-wc-stepper>
<script>
  const steps = [
    { label: 'Scale', color: 'primary' },
    { label: 'Belong', color: 'primary' },
    { label: 'Grow', color: 'primary' },
    { label: 'Innovate', content: '🚀', color: 'primary' },
  ];

  const stepper = document.getElementById('controlled-stepper');
  stepper.steps = steps.map((step, index) => ({
    ...step,
    color: index <= 1 ? 'primary' : 'neutral',
  }));

  stepper.addEventListener('stepClick', (event) => {
    stepper.activeStep = event.detail.index;
    stepper.steps = steps.map((step, index) => ({
      ...step,
      color: index <= event.detail.index ? 'primary' : 'neutral',
    }));
  });
<\/script>
        \`
      }
    }
  },
  // prettier-ignore
  render: () => {
    const interactiveSteps: IStepperItem[] = [{
      label: 'Scale',
      color: 'primary'
    }, {
      label: 'Belong',
      color: 'primary'
    }, {
      label: 'Grow',
      color: 'primary'
    }, {
      label: 'Innovate',
      content: '🚀',
      color: 'primary'
    }];
    const getInteractiveSteps = (activeIndex: number): IStepperItem[] => interactiveSteps.map((step, index) => ({
      ...step,
      color: index <= activeIndex ? 'primary' : 'neutral'
    }));
    const handleInteractiveStepClick = (event: CustomEvent<{
      index: number;
    }>) => {
      const stepper = event.target as HTMLElement & {
        activeStep: number;
        steps: IStepperItem[];
      };
      stepper.activeStep = event.detail.index;
      stepper.steps = getInteractiveSteps(event.detail.index);
    };
    return html\`
      <modus-wc-stepper
        id="controlled-stepper"
        active-step="1"
        orientation="horizontal"
        interactive
        .steps="\${getInteractiveSteps(1)}"
        @stepClick=\${handleInteractiveStepClick}
      ></modus-wc-stepper>
    \`;
  }
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,b,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('stepper-shadow-host')) {
      const StepperShadowHost = createShadowHostClass<StepperArgs>({
        componentTag: 'modus-wc-stepper',
        propsMapper: (v: StepperArgs, el: HTMLElement) => {
          const stepperEl = el as unknown as {
            activeStep: number | undefined;
            customClass: string;
            interactive: boolean;
            orientation: string;
            steps: IStepperItem[];
          };
          stepperEl.activeStep = v['active-step'];
          stepperEl.customClass = v['custom-class'] || '';
          stepperEl.interactive = v.interactive ?? false;
          stepperEl.orientation = v.orientation ?? 'horizontal';
          stepperEl.steps = v.steps ?? [];
        }
      });
      customElements.define('stepper-shadow-host', StepperShadowHost);
    }
    return html\`<stepper-shadow-host
      .props=\${{
      ...args
    }}
    ></stepper-shadow-host>\`;
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const A=["Default","Interactive","ShadowDomParent"];export{p as Default,n as Interactive,a as ShadowDomParent,A as __namedExportsOrder,$ as default};
