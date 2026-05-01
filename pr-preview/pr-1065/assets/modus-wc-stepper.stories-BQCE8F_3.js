import{x as w}from"./lit-element-CucEn6F2.js";import{o as n}from"./if-defined-BiZP-SBN.js";import{c as g}from"./shadow-host-helper-A4Nvcs5e.js";var a=Object.freeze,f=Object.defineProperty,y=(e,p)=>a(f(e,"raw",{value:a(e.slice())})),c;const _={title:"Components/Stepper",component:"modus-wc-stepper",args:{steps:[{label:"Scale",color:"primary"},{label:"Belong",color:"primary"},{label:"Grow",color:"warning"},{label:"Innovate",content:"🚀"}]},argTypes:{"custom-class":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},steps:{description:"Array of step objects defining the steps to display",table:{type:{detail:`
            Interface: IStepperItem
            Properties:
            - color ('primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral', optional): The color theme of the step
            - content (string, optional): Custom content to display in the step indicator
            - customClass (string, optional): Custom CSS class to apply to the step
            - label (string, optional): Text label for the step
          `}}}},parameters:{layout:"padded"}},b={render:e=>w(c||(c=y([`
<modus-wc-stepper
  custom-class="`,`"
  orientation="`,`"
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

  `])),n(e["custom-class"]),n(e.orientation),e.steps)},t={...b},s={render:e=>{if(!customElements.get("stepper-shadow-host")){const p=g({componentTag:"modus-wc-stepper",propsMapper:(o,S)=>{const r=S;r.customClass=o["custom-class"]||"",r.orientation=o.orientation??"horizontal",r.steps=o.steps??[]}});customElements.define("stepper-shadow-host",p)}return w`<stepper-shadow-host
      .props=${{...e}}
    ></stepper-shadow-host>`}};var l,i,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,u,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('stepper-shadow-host')) {
      const StepperShadowHost = createShadowHostClass<StepperArgs>({
        componentTag: 'modus-wc-stepper',
        propsMapper: (v: StepperArgs, el: HTMLElement) => {
          const stepperEl = el as unknown as {
            customClass: string;
            orientation: string;
            steps: IStepperItem[];
          };
          stepperEl.customClass = v['custom-class'] || '';
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
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const T=["Default","ShadowDomParent"];export{t as Default,s as ShadowDomParent,T as __namedExportsOrder,_ as default};
