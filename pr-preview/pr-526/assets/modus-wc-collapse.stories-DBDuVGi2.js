import{w as T}from"./decorator-D4YmxizW.js";import{x as d}from"./lit-element-C8zulti1.js";import{o as c}from"./if-defined-yv6owfG8.js";import{c as y}from"./shadow-host-helper-B2BwyiIi.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var p=Object.freeze,z=Object.defineProperty,S=(e,o)=>p(z(e,"raw",{value:p(e.slice())})),u,m;const L={title:"Collapse Title",description:"Collapse description",icon:"alert",iconAriaLabel:"Alert"},D={title:"Components/Collapse",component:"modus-wc-collapse",args:{bordered:!1,expanded:!1,options:L},argTypes:{options:{description:"Configuration options for the collapse component",table:{type:{detail:`
            Interface: ICollapseOptions
            Properties:
            - description (string, optional): The description to render in the collapse header
            - icon (string, optional): The Modus icon name to render in the collapse header
            - iconAriaLabel (string, optional): The icon's aria-label
            - size (DaisySize, optional): The size of the collapse header
            - title (string): The title to render in the collapse header
          `}}}},decorators:[T],parameters:{actions:{handles:["expandedChange"]},layout:"padded"}},M={render:e=>d(u||(u=S([`
<modus-wc-collapse
  ?bordered=`,`
  custom-class=`,`
  ?expanded=`,`
  id=`,`
  .options=`,`
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
//   collapse.options = options;
<\/script>
    `])),e.bordered,c(e["custom-class"]),e.expanded,c(e.id),e.options)},s={...M},a={render:e=>{const o=()=>{window.alert("Button was clicked!")};return d(m||(m=S([`
<style>
  .clickable-div {
    position: relative;
    width: fit-content;
    z-index: 99;
  }
</style>
<modus-wc-collapse
  ?bordered=`,`
  custom-class=`,`
  ?expanded=`,`
  id="123"
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
    `])),e.bordered,c(e["custom-class"]),e.expanded,o,o)}},l={render:e=>{if(!customElements.get("collapse-shadow-host")){const o=y({componentTag:"modus-wc-collapse",propsMapper:(t,r)=>{const n=r;r.innerHTML='<div slot="content">Collapse content</div>',n.bordered=!!t.bordered,n.customClass=t["custom-class"]||"",n.expanded=!!t.expanded,n.id=t.id??"",n.options=t.options??{title:"Collapse Title",description:"Collapse description",icon:"alert",iconAriaLabel:"Alert"}}});customElements.define("collapse-shadow-host",o)}return d`<collapse-shadow-host
      .props=${{...e}}
    ></collapse-shadow-host>`}},i={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>d`<div></div>`};var h,b,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,C,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  ?expanded=\${args.expanded}
  id="123"
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
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var k,x,f;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for collapse component
    if (!customElements.get('collapse-shadow-host')) {
      const CollapseShadowHost = createShadowHostClass<CollapseArgs>({
        componentTag: 'modus-wc-collapse',
        propsMapper: (v: CollapseArgs, el: HTMLElement) => {
          const collapseEl = el as unknown as {
            bordered: boolean;
            customClass: string;
            expanded: boolean;
            id: string;
            options: ICollapseOptions;
          };
          el.innerHTML = '<div slot="content">Collapse content</div>';
          collapseEl.bordered = Boolean(v.bordered);
          collapseEl.customClass = v['custom-class'] || '';
          collapseEl.expanded = Boolean(v.expanded);
          collapseEl.id = v.id ?? '';
          collapseEl.options = v.options ?? {
            title: 'Collapse Title',
            description: 'Collapse description',
            icon: 'alert',
            iconAriaLabel: 'Alert'
          };
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
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var E,B,A;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(B=i.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const O=["Default","WithCustomClickableHeader","ShadowDomParent","Migration"];export{s as Default,i as Migration,l as ShadowDomParent,a as WithCustomClickableHeader,O as __namedExportsOrder,D as default};
