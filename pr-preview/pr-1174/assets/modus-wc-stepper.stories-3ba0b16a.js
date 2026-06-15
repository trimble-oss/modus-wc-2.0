import{w as C}from"./decorator-534da2b0.js";import{b as l}from"./lit-element-38260dd9.js";import{o as d}from"./if-defined-30b85b98.js";import{c as E}from"./shadow-host-helper-0b7f7548.js";import"./chunk-4XZ63LWV-918fa35e.js";import"./v4-4a60fe23.js";var m=Object.freeze,k=Object.defineProperty,z=(e,r)=>m(k(e,"raw",{value:m(r||e.slice())})),v;const P={title:"Components/Stepper",component:"modus-wc-stepper",args:{interactive:!1,steps:[{label:"Scale",color:"primary"},{label:"Belong",color:"primary"},{label:"Grow",color:"warning"},{label:"Innovate",content:"🚀"}]},decorators:[C],argTypes:{"custom-class":{control:"text"},interactive:{control:"boolean"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},steps:{description:"Array of step objects defining the steps to display",table:{type:{detail:`
            Interface: IStepperItem
            Properties:
            - color ('primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral', optional): The color theme of the step
            - content (string, optional): Custom content to display in the step indicator
            - customClass (string, optional): Custom CSS class to apply to the step
            - label (string, optional): Text label for the step
          `}}}},parameters:{actions:{handles:["stepClick"]},layout:"padded"}},A={render:e=>l(v||(v=z([`
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

  `])),d(e["custom-class"]),d(e.orientation),e.interactive??!1,e.steps)},a={...A},i={args:{interactive:!0},parameters:{docs:{source:{code:`
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
        `}}},render:e=>{const t=[{label:"Scale"},{label:"Belong"},{label:"Grow"},{label:"Innovate",content:"🚀"}],n=o=>t.map((p,y)=>y<=o?{...p,color:"primary"}:{...p}),s=o=>{const p=o.target;p.steps=n(o.detail.index)};return l`
      <modus-wc-stepper
        id="interactive-stepper"
        orientation="horizontal"
        ?interactive="${e.interactive??!1}"
        .steps="${n(1)}"
        @stepClick=${s}
      ></modus-wc-stepper>
    `}},c={render:e=>{if(!customElements.get("stepper-shadow-host")){const r=E({componentTag:"modus-wc-stepper",propsMapper:(t,n)=>{const s=n;s.customClass=t["custom-class"]||"",s.interactive=t.interactive??!1,s.orientation=t.orientation??"horizontal",s.steps=t.steps??[]}});customElements.define("stepper-shadow-host",r)}return l`<stepper-shadow-host
      .props=${{...e}}
    ></stepper-shadow-host>`}};var u,h,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template
}`,...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var g,w,I;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    interactive: true
  },
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
  render: args => {
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
        ?interactive="\${args.interactive ?? false}"
        .steps="\${getInteractiveSteps(initialActiveIndex)}"
        @stepClick=\${handleInteractiveStepClick}
      ></modus-wc-stepper>
    \`;
  }
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var b,x,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const D=["Default","Interactive","ShadowDomParent"];export{a as Default,i as Interactive,c as ShadowDomParent,D as __namedExportsOrder,P as default};
