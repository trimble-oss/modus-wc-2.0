import{w as q}from"./decorator-D4YmxizW.js";import{x as h}from"./lit-element-CucEn6F2.js";import{o as t}from"./if-defined-BiZP-SBN.js";import{c as J}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var b=Object.freeze,j=Object.defineProperty,W=(e,a)=>b(j(e,"raw",{value:b(e.slice())})),g,w;const v={title:"Collapse Title",description:"Collapse description",endIcon:"more_vertical",endIconAriaLabel:"More actions",icon:"alert",iconAriaLabel:"Alert"},R={title:"Collapse Title",description:"Collapse description",endIcon:"more_vertical",endIconAriaLabel:"More actions",icon:"alert",iconAriaLabel:"Alert",startIcon:"alert",startIconAriaLabel:"alert"},X={title:"Components/Collapse",component:"modus-wc-collapse",args:{"chevron-position":"right",expanded:!1,options:v,variant:"border"},argTypes:{"chevron-position":{control:{type:"select"},options:["left","right"]},variant:{control:{type:"select"},options:["ghost","border"]},options:{description:"Configuration options for the collapse component",table:{type:{detail:`
            Interface: ICollapseOptions
            Properties:
            - description (string, optional): The description to render in the collapse header
            - endIcon (string, optional): The Modus icon name to render at the end of the header
            - endIconAriaLabel (string, optional): The end icon's aria-label
            - icon (string, optional): The Modus icon name to render in the collapse header
            - iconAriaLabel (string, optional): The icon's aria-label
            - startIcon (string, optional): The Modus icon name to render first, before the chevron
            - startIconAriaLabel (string, optional): The start icon's aria-label
            - size (DaisySize, optional): The size of the collapse header
            - title (string): The title to render in the collapse header
          `}}}},decorators:[q],parameters:{actions:{handles:["expandedChange"]},layout:"padded"}},u={render:e=>h(g||(g=W([`
<modus-wc-collapse
  chevron-position=`,`
  custom-class=`,`
  ?expanded=`,`
  id=`,`
  .options=`,`
  variant=`,`
>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
<script>
// Adding this block to show how to set options via JS.
// const options = {
//   title: 'Collapse Title',
//   description: 'Collapse description',
//   endIcon: 'more_vertical',
//   endIconAriaLabel: 'More actions',
//   icon: 'alert',
//   iconAriaLabel: 'Alert',
//   startIcon: 'alert',
//   startIconAriaLabel: 'More actions',
// };
//   const collapse = document.querySelector('modus-wc-collapse');
//   collapse.chevronPosition = 'right';
//   collapse.options = options;
<\/script>
    `])),t(e["chevron-position"]),t(e["custom-class"]),e.expanded,t(e.id),e.options,t(e.variant))},s={...u},i={...u,args:{"chevron-position":"left",expanded:!1,options:R,variant:"border"}},r={...u,args:{"chevron-position":"left",expanded:!1,options:v,variant:"border"}},c={...u,args:{"chevron-position":"right",expanded:!1,options:v,variant:"border"}},l={render:e=>{const a=()=>{window.alert("Button was clicked!")};return h(w||(w=W([`
<style>
  .clickable-div {
    position: relative;
    width: fit-content;
    z-index: 99;
  }
</style>
<modus-wc-collapse
  chevron-position=`,`
  custom-class=`,`
  ?expanded=`,`
  id="123"
  variant=`,`
>
  <div slot="header" class="modus-wc-collapse-title" id="123">
    <div class="clickable-div">
      <modus-wc-button id="button1" @buttonClick=`,`>Alert 1</modus-wc-button>
      <modus-wc-button id="button2" @buttonClick=`,`>Alert 2</modus-wc-button>
    </div>
  </div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
<script>
// Adding this block to show how to add clickable buttons in the collapse header via JS.
// function handleButtonClick() {
//   window.alert('Button was clicked!');
// }
// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// button1.addEventListener('click', handleButtonClick);
// button2.addEventListener('click', handleButtonClick);
<\/script>
    `])),t(e["chevron-position"]),t(e["custom-class"]),e.expanded,t(e.variant),a,a)}},d={render:e=>{if(!customElements.get("collapse-shadow-host")){const a=J({componentTag:"modus-wc-collapse",propsMapper:(o,m)=>{const n=m;m.querySelector('[slot="content"]')||(m.innerHTML='<div slot="content">Collapse content</div>'),n.chevronPosition=o["chevron-position"]??"right",n.customClass=o["custom-class"]||"",n.expanded=!!o.expanded,n.id=o.id??"",n.variant=o.variant??"border",o.options&&(n.options=o.options)}});customElements.define("collapse-shadow-host",a)}return h`<collapse-shadow-host
      .props=${{...e}}
    ></collapse-shadow-host>`}},p={parameters:{docs:{description:{story:`
#### Breaking Changes

  - The 1.0 accordion-item component maps to the 2.0 collapse component. See the [Accordion component](?path=/docs/components-accordion--docs).
  - Size values have changed from \`condensed\`, \`standard\` in 1.0 to abbreviations (\`xs\`, \`sm\`, \`md\`, \`lg\`) in 2.0.

#### Prop Mapping

##### accordion-item (1.0) → collapse (2.0)

| 1.0 Prop           | 2.0 Prop            | Notes            |
|--------------------|---------------------|------------------|
| aria-label         | aria-label          |                  |
| disabled           |                     | Not carried over |
| expand-button-type |                     | Not carried over |
| expanded           | expanded            |                  |
| header-text        | options.title       |                  |
| icon               | options.icon        |                  |
| size               | options.size        |                  |
| supporting-label   | options.description |                  |

#### Event Mapping

| 1.0 Event | 2.0 Event      | Notes            |
|-----------|----------------|------------------|
| closed    | expandedChange |                  |
| opened    | expandedChange |                  |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>h`<div></div>`};var C,f,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,S,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Template,
  args: {
    'chevron-position': 'left',
    expanded: false,
    options: optionsWithStartIcon,
    variant: 'border'
  }
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var A,T,I;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  args: {
    'chevron-position': 'left',
    expanded: false,
    options,
    variant: 'border'
  }
}`,...(I=(T=r.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var y,B,L;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    'chevron-position': 'right',
    expanded: false,
    options,
    variant: 'border'
  }
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var M,P,z;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const handleButtonClick = () => {
      window.alert('Button was clicked!');
    };

    // prettier-ignore
    return html\`
<style>
  .clickable-div {
    position: relative;
    width: fit-content;
    z-index: 99;
  }
</style>
<modus-wc-collapse
  chevron-position=\${ifDefined(args['chevron-position'])}
  custom-class=\${ifDefined(args['custom-class'])}
  ?expanded=\${args.expanded}
  id="123"
  variant=\${ifDefined(args.variant)}
>
  <div slot="header" class="modus-wc-collapse-title" id="123">
    <div class="clickable-div">
      <modus-wc-button id="button1" @buttonClick=\${handleButtonClick}>Alert 1</modus-wc-button>
      <modus-wc-button id="button2" @buttonClick=\${handleButtonClick}>Alert 2</modus-wc-button>
    </div>
  </div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
<script>
// Adding this block to show how to add clickable buttons in the collapse header via JS.
// function handleButtonClick() {
//   window.alert('Button was clicked!');
// }
// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// button1.addEventListener('click', handleButtonClick);
// button2.addEventListener('click', handleButtonClick);
<\/script>
    \`;
  }
}`,...(z=(P=l.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var _,H,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for collapse component
    if (!customElements.get('collapse-shadow-host')) {
      const CollapseShadowHost = createShadowHostClass<CollapseArgs>({
        componentTag: 'modus-wc-collapse',
        propsMapper: (v: CollapseArgs, el: HTMLElement) => {
          const collapseEl = el as unknown as {
            chevronPosition: 'left' | 'right';
            customClass: string;
            expanded: boolean;
            id: string;
            options: ICollapseOptions;
            variant?: 'ghost' | 'border';
          };
          // Only set innerHTML once on initial creation
          if (!el.querySelector('[slot="content"]')) {
            el.innerHTML = '<div slot="content">Collapse content</div>';
          }
          collapseEl.chevronPosition = v['chevron-position'] ?? 'right';
          collapseEl.customClass = v['custom-class'] || '';
          collapseEl.expanded = Boolean(v.expanded);
          collapseEl.id = v.id ?? '';
          collapseEl.variant = v.variant ?? 'border';
          if (v.options) {
            collapseEl.options = v.options; // Conditional assignment only if provided
          }
        }
      });
      customElements.define('collapse-shadow-host', CollapseShadowHost);
    }
    return html\`<collapse-shadow-host
      .props=\${{
      ...args
    }}
    ></collapse-shadow-host>\`;
  }
}`,...(D=(H=d.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var N,$,O;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - The 1.0 accordion-item component maps to the 2.0 collapse component. See the [Accordion component](?path=/docs/components-accordion--docs).
  - Size values have changed from \\\`condensed\\\`, \\\`standard\\\` in 1.0 to abbreviations (\\\`xs\\\`, \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`) in 2.0.

#### Prop Mapping

##### accordion-item (1.0) → collapse (2.0)

| 1.0 Prop           | 2.0 Prop            | Notes            |
|--------------------|---------------------|------------------|
| aria-label         | aria-label          |                  |
| disabled           |                     | Not carried over |
| expand-button-type |                     | Not carried over |
| expanded           | expanded            |                  |
| header-text        | options.title       |                  |
| icon               | options.icon        |                  |
| size               | options.size        |                  |
| supporting-label   | options.description |                  |

#### Event Mapping

| 1.0 Event | 2.0 Event      | Notes            |
|-----------|----------------|------------------|
| closed    | expandedChange |                  |
| opened    | expandedChange |                  |
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
}`,...(O=($=p.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const Y=["Default","WithStartIconBeforeChevron","ChevronLeft","ChevronRight","WithCustomClickableHeader","ShadowDomParent","Migration"];export{r as ChevronLeft,c as ChevronRight,s as Default,p as Migration,d as ShadowDomParent,l as WithCustomClickableHeader,i as WithStartIconBeforeChevron,Y as __namedExportsOrder,X as default};
