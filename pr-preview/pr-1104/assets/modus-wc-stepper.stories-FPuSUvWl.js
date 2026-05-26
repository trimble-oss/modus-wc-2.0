import{w as y}from"./decorator-D4YmxizW.js";import{b as c}from"./lit-element-DgBvYnzn.js";import{o as l}from"./if-defined-BnVFTJ4o.js";import{c as C}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var d=Object.freeze,E=Object.defineProperty,k=(e,r)=>d(E(e,"raw",{value:d(e.slice())})),m;const $={title:"Components/Stepper",component:"modus-wc-stepper",args:{interactive:!1,steps:[{label:"Scale",color:"primary"},{label:"Belong",color:"primary"},{label:"Grow",color:"warning"},{label:"Innovate",content:"🚀"}]},decorators:[y],argTypes:{"custom-class":{control:"text"},interactive:{control:"boolean"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},steps:{description:"Array of step objects defining the steps to display",table:{type:{detail:`
            Interface: IStepperItem
            Properties:
            - color ('primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral', optional): The color theme of the step
            - content (string, optional): Custom content to display in the step indicator
            - customClass (string, optional): Custom CSS class to apply to the step
            - label (string, optional): Text label for the step
          `}}}},parameters:{actions:{handles:["stepClick"]},layout:"padded"}},z={render:e=>c(m||(m=k([`
<modus-wc-stepper
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

  `])),l(e["custom-class"]),l(e.orientation),e.interactive??!1,e.steps)},o={...z},p={parameters:{docs:{source:{code:`
<modus-wc-stepper
  id="interactive-stepper"
  orientation="horizontal"
  interactive
></modus-wc-stepper>
<script>
  const activeIndex = 1;
  const steps = [
    { label: 'Scale' },
    { label: 'Belong' },
    { label: 'Grow' },
    { label: 'Innovate', content: '🚀' },
  ];

  const getSteps = (selectedIndex) =>
    steps.map((step, index) =>
      index <= selectedIndex ? { ...step, color: 'primary' } : { ...step }
    );

  const stepper = document.getElementById('interactive-stepper');
  stepper.steps = getSteps(activeIndex);

  stepper.addEventListener('stepClick', (event) => {
    stepper.steps = getSteps(event.detail.index);
  });
<\/script>
        `}}},render:()=>{const r=[{label:"Scale"},{label:"Belong"},{label:"Grow"},{label:"Innovate",content:"🚀"}],s=t=>r.map((n,f)=>f<=t?{...n,color:"primary"}:{...n}),i=t=>{const n=t.target;n.steps=s(t.detail.index)};return c`
      <modus-wc-stepper
        id="interactive-stepper"
        orientation="horizontal"
        interactive
        .steps="${s(1)}"
        @stepClick=${i}
      ></modus-wc-stepper>
    `}},a={render:e=>{if(!customElements.get("stepper-shadow-host")){const r=C({componentTag:"modus-wc-stepper",propsMapper:(s,i)=>{const t=i;t.customClass=s["custom-class"]||"",t.interactive=s.interactive??!1,t.orientation=s.orientation??"horizontal",t.steps=s.steps??[]}});customElements.define("stepper-shadow-host",r)}return c`<stepper-shadow-host
      .props=${{...e}}
    ></stepper-shadow-host>`}};var v,u,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var S,w,I;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<modus-wc-stepper
  id="interactive-stepper"
  orientation="horizontal"
  interactive
></modus-wc-stepper>
<script>
  const activeIndex = 1;
  const steps = [
    { label: 'Scale' },
    { label: 'Belong' },
    { label: 'Grow' },
    { label: 'Innovate', content: '🚀' },
  ];

  const getSteps = (selectedIndex) =>
    steps.map((step, index) =>
      index <= selectedIndex ? { ...step, color: 'primary' } : { ...step }
    );

  const stepper = document.getElementById('interactive-stepper');
  stepper.steps = getSteps(activeIndex);

  stepper.addEventListener('stepClick', (event) => {
    stepper.steps = getSteps(event.detail.index);
  });
<\/script>
        \`
      }
    }
  },
  // prettier-ignore
  render: () => {
    const initialActiveIndex = 1;
    const interactiveSteps: IStepperItem[] = [{
      label: 'Scale'
    }, {
      label: 'Belong'
    }, {
      label: 'Grow'
    }, {
      label: 'Innovate',
      content: '🚀'
    }];
    const getInteractiveSteps = (activeIndex: number): IStepperItem[] => interactiveSteps.map((step, index) => index <= activeIndex ? {
      ...step,
      color: 'primary'
    } : {
      ...step
    });
    const handleInteractiveStepClick = (event: CustomEvent<{
      index: number;
    }>) => {
      const stepper = event.target as HTMLElement & {
        steps: IStepperItem[];
      };
      stepper.steps = getInteractiveSteps(event.detail.index);
    };
    return html\`
      <modus-wc-stepper
        id="interactive-stepper"
        orientation="horizontal"
        interactive
        .steps="\${getInteractiveSteps(initialActiveIndex)}"
        @stepClick=\${handleInteractiveStepClick}
      ></modus-wc-stepper>
    \`;
  }
}`,...(I=(w=p.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var g,b,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('stepper-shadow-host')) {
      const StepperShadowHost = createShadowHostClass<StepperArgs>({
        componentTag: 'modus-wc-stepper',
        propsMapper: (v: StepperArgs, el: HTMLElement) => {
          const stepperEl = el as unknown as {
            customClass: string;
            interactive: boolean;
            orientation: string;
            steps: IStepperItem[];
          };
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
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const P=["Default","Interactive","ShadowDomParent"];export{o as Default,p as Interactive,a as ShadowDomParent,P as __namedExportsOrder,$ as default};
