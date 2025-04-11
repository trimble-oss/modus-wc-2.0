import{k as n}from"./lit-element-HWJBnAmk.js";import{t as o}from"./if-defined-C-SyXhla.js";const i={title:"Components/Stepper",component:"modus-wc-stepper",args:{steps:[{label:"Scale",color:"primary"},{label:"Belong",color:"primary"},{label:"Grow",color:"warning"},{label:"Innovate",content:"🚀"}]},argTypes:{"custom-class":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},steps:{description:"Array of step objects defining the steps to display",table:{type:{detail:`
            Interface: IStepperItem
            Properties:
            - color ('primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral', optional): The color theme of the step
            - content (string, optional): Custom content to display in the step indicator
            - customClass (string, optional): Custom CSS class to apply to the step
            - label (string, optional): Text label for the step
          `}}}},parameters:{layout:"padded"}},p={render:e=>n`
<modus-wc-stepper
  custom-class="${o(e["custom-class"])}"
  orientation="${o(e.orientation)}"
  .steps="${e.steps}"
>
</modus-wc-stepper>
  `},t={...p};var s,r,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,i as default};
