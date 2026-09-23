import{w as T}from"./decorator-Cv9na35H.js";import{b as S}from"./lit-element-DgBvYnzn.js";import{o as e}from"./if-defined-BnVFTJ4o.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const V={selection_plus:{displayName:"Selection plus",path:"illustrations/compact/selection-plus.svg",category:"compact",layoutVariants:["compact"]},symbol_info:{displayName:"Symbol info",path:"illustrations/compact/symbol-info.svg",category:"compact",layoutVariants:["compact"]},add_user:{displayName:"Add user",path:"illustrations/compact/add-user.svg",category:"compact",layoutVariants:["compact"]},landscape:{displayName:"Landscape",path:"illustrations/landscape/landscape.svg",category:"landscape",layoutVariants:["illustration"]},documents_empty:{displayName:"Documents empty",path:"illustrations/documents/documents-empty.svg",category:"documents",layoutVariants:["illustration"]},cloud_access:{displayName:"Cloud access",path:"illustrations/clouds/cloud-access.svg",category:"clouds",layoutVariants:["illustration"]},store_settings:{displayName:"Store settings",path:"illustrations/stores/store-settings.svg",category:"stores",layoutVariants:["illustration"]},error_404:{displayName:"404 error",path:"illustrations/errors/error-404.svg",category:"errors",layoutVariants:["illustration"]},page_not_found:{displayName:"Page not found",path:"illustrations/errors/page-not-found.svg",category:"errors",layoutVariants:["error"],layerPaths:["illustrations/errors/page-not-found.svg","illustrations/errors/page-not-found-magnifying-glass.svg"]}};function a(t){return Object.entries(V).filter(([,o])=>o.layoutVariants.includes(t)).map(([o])=>o)}const C={title:"Components/Empty State",component:"modus-wc-empty-state",decorators:[T],args:{variant:"compact",illustration:"selection_plus",heading:"Title for Empty State",subtitle:"Subtitle","action-label":"Action"},argTypes:{variant:{control:{type:"select"},options:["compact","illustration","error"]},illustration:{control:{type:"select"},options:a("compact")}},parameters:{actions:{handles:["actionClick"]},docs:{description:{component:"Use the `illustration` prop to choose a bundled graphic. Allowed values depend on `variant`. **Default** covers compact; see **Illustration** and **Error404** for the other layouts."}}}},l={render:t=>S`
      <modus-wc-empty-state
        variant="${t.variant}"
        illustration="${e(t.illustration)}"
        heading="${t.heading}"
        subtitle="${e(t.subtitle)}"
        action-label="${e(t["action-label"])}"
        custom-class="${e(t["custom-class"])}"
        @actionClick=${o=>o}
      ></modus-wc-empty-state>
    `},s={...l,parameters:{docs:{description:{story:'Default `variant="compact"`. `illustration` options: `selection_plus`, `symbol_info`, `add_user`. Default illustration: `selection_plus`.'}}},argTypes:{illustration:{control:{type:"select"},options:a("compact")}}},n={...l,parameters:{docs:{description:{story:'`variant="illustration"`. `illustration` options: `landscape`, `documents_empty`, `cloud_access`, `store_settings`, `error_404`. Default: `landscape`.'}}},argTypes:{illustration:{control:{type:"select"},options:a("illustration")}},args:{variant:"illustration",illustration:"landscape",heading:"Title for Empty State",subtitle:"Subtitle","action-label":"Action"}},r={...l,parameters:{docs:{description:{story:'`variant="error"`. `illustration` option: `page_not_found`. Default: `page_not_found`.'}}},argTypes:{illustration:{control:{type:"select"},options:a("error")}},args:{variant:"error",illustration:"page_not_found",heading:"404 Page Not Found",subtitle:"Helpful message that conveys the purpose of the screen. (max of 3 Lines) This is where line three will be!","action-label":"Action"}},i={...l,parameters:{docs:{description:{story:"Compact layout without an action button. `illustration` options match **Default**."}}},argTypes:{illustration:{control:{type:"select"},options:a("compact")}},args:{variant:"compact",illustration:"symbol_info",heading:"Nothing here yet",subtitle:"Create your first item to populate this view.","action-label":void 0}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Default \`variant="compact"\`. \`illustration\` options: \`selection_plus\`, \`symbol_info\`, \`add_user\`. Default illustration: \`selection_plus\`.'
      }
    }
  },
  argTypes: {
    illustration: {
      control: {
        type: 'select'
      },
      options: getIllustrationsForVariant('compact')
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,d,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: '\`variant="illustration"\`. \`illustration\` options: \`landscape\`, \`documents_empty\`, \`cloud_access\`, \`store_settings\`, \`error_404\`. Default: \`landscape\`.'
      }
    }
  },
  argTypes: {
    illustration: {
      control: {
        type: 'select'
      },
      options: getIllustrationsForVariant('illustration')
    }
  },
  args: {
    variant: 'illustration',
    illustration: 'landscape',
    heading: 'Title for Empty State',
    subtitle: 'Subtitle',
    'action-label': 'Action'
  }
}`,...(y=(d=n.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: '\`variant="error"\`. \`illustration\` option: \`page_not_found\`. Default: \`page_not_found\`.'
      }
    }
  },
  argTypes: {
    illustration: {
      control: {
        type: 'select'
      },
      options: getIllustrationsForVariant('error')
    }
  },
  args: {
    variant: 'error',
    illustration: 'page_not_found',
    heading: '404 Page Not Found',
    subtitle: 'Helpful message that conveys the purpose of the screen. (max of 3 Lines) This is where line three will be!',
    'action-label': 'Action'
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var _,b,v;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Compact layout without an action button. \`illustration\` options match **Default**.'
      }
    }
  },
  argTypes: {
    illustration: {
      control: {
        type: 'select'
      },
      options: getIllustrationsForVariant('compact')
    }
  },
  args: {
    variant: 'compact',
    illustration: 'symbol_info',
    heading: 'Nothing here yet',
    subtitle: 'Create your first item to populate this view.',
    'action-label': undefined
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const E=["Default","Illustration","Error404","WithoutAction"];export{s as Default,r as Error404,n as Illustration,i as WithoutAction,E as __namedExportsOrder,C as default};
