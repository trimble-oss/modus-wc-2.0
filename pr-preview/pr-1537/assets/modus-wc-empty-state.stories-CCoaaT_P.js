import{w as I}from"./decorator-Cv9na35H.js";import{b as m}from"./lit-element-DgBvYnzn.js";import{o as p}from"./if-defined-BnVFTJ4o.js";import{i as N}from"./keyed-DcwHG6kx.js";import{c as $}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";import"./directive-C_Rw-dL6.js";import"./directive-helpers-BZ4DLK7w.js";const u={compact:"selection_plus",illustration:"landscape",error:"error_404"},B={title:"Components/Empty State",component:"modus-wc-empty-state",decorators:[I],args:{variant:"compact",illustration:u.compact,heading:"Title for Empty State",subtitle:"Subtitle","action-label":"Action"},argTypes:{variant:{control:{type:"select"},options:["compact","illustration","error"]},illustration:{control:"text",table:{type:{summary:"string"}}}},parameters:{actions:{handles:["actionClick"]},docs:{description:{component:"Use the `illustration` prop to choose a bundled graphic. Allowed values depend on `variant`. **Default** covers compact; see **Illustration** and **Error404** for the other layouts."}}}},l={render:(t,c)=>m`${N(c.id,m`
        <modus-wc-empty-state
          variant="${t.variant}"
          .illustration=${t.illustration}
          heading="${t.heading}"
          subtitle="${p(t.subtitle)}"
          action-label="${p(t["action-label"])}"
          custom-class="${p(t["custom-class"])}"
          @actionClick=${e=>e}
        ></modus-wc-empty-state>
      `)}`},o={...l,parameters:{docs:{description:{story:'Default `variant="compact"`. `illustration` options: `selection_plus`, `symbol_info`, `add_user`. Default illustration: `selection_plus`.'}}}},s={...l,parameters:{docs:{description:{story:'`variant="illustration"`. `illustration` options: `landscape`, `api`, `api_plugin`, `documents_empty`, `cloud_access`, `store_settings`. Default: `landscape`.'}}},args:{variant:"illustration",illustration:u.illustration}},r={...l,parameters:{docs:{description:{story:'`variant="error"`. `illustration` options: `error_404`, `error_404_page`. Default: `error_404`.'}}},args:{variant:"error",illustration:u.error,heading:"404 Page Not Found",subtitle:"Helpful message that conveys the purpose of the screen. (max of 3 Lines) This is where line three will be!"}},n={...l,parameters:{docs:{description:{story:"Compact layout without an action button. `illustration` options match **Default**."}}},args:{illustration:"symbol_info",heading:"Nothing here yet",subtitle:"Create your first item to populate this view.","action-label":void 0}},i={render:t=>{if(!customElements.get("empty-state-shadow-host")){const c=$({componentTag:"modus-wc-empty-state",propsMapper:(e,C)=>{const a=C;a.variant=e.variant,a.illustration=e.illustration,a.heading=e.heading,a.subtitle=e.subtitle,a.actionLabel=e["action-label"],a.customClass=e["custom-class"]||""}});customElements.define("empty-state-shadow-host",c)}return m`<empty-state-shadow-host
      .props=${{...t}}
    ></empty-state-shadow-host>`}};var d,h,y;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{\n  ...Template,\n  parameters: {\n    docs: {\n      description: {\n        story: 'Default `variant=\"compact\"`. `illustration` options: `selection_plus`, `symbol_info`, `add_user`. Default illustration: `selection_plus`.'\n      }\n    }\n  }\n}",...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,_,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{\n  ...Template,\n  parameters: {\n    docs: {\n      description: {\n        story: '`variant=\"illustration\"`. `illustration` options: `landscape`, `api`, `api_plugin`, `documents_empty`, `cloud_access`, `store_settings`. Default: `landscape`.'\n      }\n    }\n  },\n  args: {\n    variant: 'illustration',\n    illustration: DEFAULT_ILLUSTRATION_BY_VARIANT.illustration\n  }\n}",...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var b,w,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: '\`variant="error"\`. \`illustration\` options: \`error_404\`, \`error_404_page\`. Default: \`error_404\`.'
      }
    }
  },
  args: {
    variant: 'error',
    illustration: DEFAULT_ILLUSTRATION_BY_VARIANT.error,
    heading: '404 Page Not Found',
    subtitle: 'Helpful message that conveys the purpose of the screen. (max of 3 Lines) This is where line three will be!'
  }
}`,...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var v,E,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Compact layout without an action button. \`illustration\` options match **Default**.'
      }
    }
  },
  args: {
    illustration: 'symbol_info',
    heading: 'Nothing here yet',
    subtitle: 'Create your first item to populate this view.',
    'action-label': undefined
  }
}`,...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var A,D,L;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('empty-state-shadow-host')) {
      const EmptyStateShadowHost = createShadowHostClass<EmptyStateArgs>({
        componentTag: 'modus-wc-empty-state',
        propsMapper: (v: EmptyStateArgs, el: HTMLElement) => {
          const emptyStateEl = el as unknown as {
            variant: EmptyStateVariant;
            illustration?: string;
            heading: string;
            subtitle?: string;
            actionLabel?: string;
            customClass: string;
          };
          emptyStateEl.variant = v.variant;
          emptyStateEl.illustration = v.illustration;
          emptyStateEl.heading = v.heading;
          emptyStateEl.subtitle = v.subtitle;
          emptyStateEl.actionLabel = v['action-label'];
          emptyStateEl.customClass = v['custom-class'] || '';
        }
      });
      customElements.define('empty-state-shadow-host', EmptyStateShadowHost);
    }
    return html\`<empty-state-shadow-host
      .props=\${{
      ...args
    }}
    ></empty-state-shadow-host>\`;
  }
}`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const M=["Default","Illustration","Error404","WithoutAction","ShadowDomParent"];export{o as Default,r as Error404,s as Illustration,i as ShadowDomParent,n as WithoutAction,M as __namedExportsOrder,B as default};
