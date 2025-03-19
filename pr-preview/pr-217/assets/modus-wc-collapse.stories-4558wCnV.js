import{w as p}from"./decorator-Dt3Huotz.js";import{k as c}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const m={title:"Collapse Title",description:"Collapse description",icon:"alert",iconAriaLabel:"Alert"},w={title:"Components/Collapse",component:"modus-wc-collapse",args:{bordered:!0,expanded:!1,options:m},argTypes:{options:{description:"Configuration options for the collapse component",table:{type:{detail:`
            Interface: IModusWcCollapseOptions
            Properties:
            - description (string, optional): The description to render in the collapse header
            - icon (string, optional): The Modus icon name to render in the collapse header
            - iconAriaLabel (string, optional): The icon's aria-label
            - size (DaisySize, optional): The size of the collapse header
            - title (string): The title to render in the collapse header
          `}}}},decorators:[p],parameters:{actions:{handles:["expandedChange"]},layout:"padded"}},u={render:e=>c`
<modus-wc-collapse
  ?bordered=${e.bordered}
  custom-class=${s(e["custom-class"])}
  ?expanded=${e.expanded}
  id=${s(e.id)}
  .options=${s(e.options)}
>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
    `},o={...u},t={render:e=>c`
<modus-wc-collapse
  ?bordered=${e.bordered}
  custom-class=${s(e["custom-class"])}
  ?expanded=${e.expanded}
  id="123"
>
  <div slot="header" class="modus-wc-collapse-title" id="123">Custom header</div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
    `};var n,r,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var d,l,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-collapse
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  ?expanded=\${args.expanded}
  id="123"
>
  <div slot="header" class="modus-wc-collapse-title" id="123">Custom header</div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
    \`;
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const $=["Default","WithCustomContent"];export{o as Default,t as WithCustomContent,$ as __namedExportsOrder,w as default};
