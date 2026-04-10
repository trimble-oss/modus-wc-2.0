import{w as P}from"./decorator-D4YmxizW.js";import{x as a}from"./lit-element-CucEn6F2.js";import{o as e}from"./if-defined-BiZP-SBN.js";import{c as _}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var h=Object.freeze,$=Object.defineProperty,u=(o,s)=>h($(o,"raw",{value:h(o.slice())})),m,v,b;const z={title:"Collapse Title",description:"Collapse description",icon:"alert",iconAriaLabel:"Alert"},D={title:"Collapse Title",description:"Collapse description",endIcon:"more_vertical",endIconAriaLabel:"More actions",icon:"alert",iconAriaLabel:"Alert"},H={title:"Collapse Title",description:"Collapse description",endIcon:"more_vertical",endIconAriaLabel:"More actions",icon:"alert",iconAriaLabel:"Alert",startIcon:"alert",startIconAriaLabel:"alert"},G={title:"Components/Collapse",component:"modus-wc-collapse",args:{"chevron-position":"right",expanded:!1,options:D,variant:"border"},argTypes:{"chevron-position":{control:{type:"select"},options:["left","right"]},variant:{control:{type:"select"},options:["ghost","border"]},options:{description:"Configuration options for the collapse component",table:{type:{detail:`
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
          `}}}},decorators:[P],parameters:{actions:{handles:["expandedChange"]},layout:"padded"}},N={render:o=>a(m||(m=u([`
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
//   icon: 'alert',
//   iconAriaLabel: 'Alert',
// };
//   const collapse = document.querySelector('modus-wc-collapse');
//   collapse.chevronPosition = 'right';
//   collapse.options = options;
<\/script>
    `])),e(o["chevron-position"]),e(o["custom-class"]),o.expanded,e(o.id),o.options,e(o.variant))},i={...N,args:{"chevron-position":"right",expanded:!1,options:z,variant:"border"}},r={render:o=>a(v||(v=u([`
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
//   startIconAriaLabel: 'alert',
// };
//   const collapse = document.querySelector('modus-wc-collapse');
//   collapse.chevronPosition = 'left';
//   collapse.options = options;
<\/script>
    `])),e(o["chevron-position"]),e(o["custom-class"]),o.expanded,e(o.id),o.options,e(o.variant)),args:{"chevron-position":"left",expanded:!1,options:H,variant:"border"}},l={render:o=>{const s=()=>{window.alert("Button was clicked!")};return a(b||(b=u([`
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
    `])),e(o["chevron-position"]),e(o["custom-class"]),o.expanded,e(o.variant),s,s)}},c={render:o=>{if(!customElements.get("collapse-shadow-host")){const s=_({componentTag:"modus-wc-collapse",propsMapper:(t,p)=>{const n=p;p.querySelector('[slot="content"]')||(p.innerHTML='<div slot="content">Collapse content</div>'),n.chevronPosition=t["chevron-position"]??"right",n.customClass=t["custom-class"]||"",n.expanded=!!t.expanded,n.id=t.id??"",n.variant=t.variant??"border",t.options&&(n.options=t.options)}});customElements.define("collapse-shadow-host",s)}return a`<collapse-shadow-host
      .props=${{...o}}
    ></collapse-shadow-host>`}},d={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var g,w,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    'chevron-position': 'right',
    expanded: false,
    options: defaultOptions,
    variant: 'border'
  }
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var C,x,k;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-collapse
  chevron-position=\${ifDefined(args['chevron-position'])}
  custom-class=\${ifDefined(args['custom-class'])}
  ?expanded=\${args.expanded}
  id=\${ifDefined(args.id)}
  .options=\${args.options}
  variant=\${ifDefined(args.variant)}
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
//   startIconAriaLabel: 'alert',
// };
//   const collapse = document.querySelector('modus-wc-collapse');
//   collapse.chevronPosition = 'left';
//   collapse.options = options;
<\/script>
    \`;
  },
  args: {
    'chevron-position': 'left',
    expanded: false,
    options: optionsWithStartIcon,
    variant: 'border'
  }
}`,...(k=(x=r.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var A,S,I;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(S=l.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var E,y,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var L,B,M;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(B=d.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const K=["Default","WithStartIcon","WithCustomClickableHeader","ShadowDomParent","Migration"];export{i as Default,d as Migration,c as ShadowDomParent,l as WithCustomClickableHeader,r as WithStartIcon,K as __namedExportsOrder,G as default};
