import{x as l}from"./lit-element-C8zulti1.js";import{o}from"./if-defined-yv6owfG8.js";var r=Object.freeze,c=Object.defineProperty,i=(e,d)=>r(c(e,"raw",{value:r(e.slice())})),s;const b={title:"Components/Stepper",component:"modus-wc-stepper",args:{steps:[{label:"Scale",color:"primary"},{label:"Belong",color:"primary"},{label:"Grow",color:"warning"},{label:"Innovate",content:"🚀"}]},argTypes:{"custom-class":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},steps:{description:"Array of step objects defining the steps to display",table:{type:{detail:`
            Interface: IStepperItem
            Properties:
            - color ('primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral', optional): The color theme of the step
            - content (string, optional): Custom content to display in the step indicator
            - customClass (string, optional): Custom CSS class to apply to the step
            - label (string, optional): Text label for the step
          `}}}},parameters:{layout:"padded"}},m={render:e=>l(s||(s=i([`
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

  `])),o(e["custom-class"]),o(e.orientation),e.steps)},t={...m};var a,p,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,b as default};
