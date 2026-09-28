import{w as C}from"./decorator-Cv9na35H.js";import{b as u}from"./lit-element-DgBvYnzn.js";import{o}from"./if-defined-BnVFTJ4o.js";import{i as I}from"./keyed-DcwHG6kx.js";import{c as $}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";import"./directive-C_Rw-dL6.js";import"./directive-helpers-BZ4DLK7w.js";const L={selection_plus:{displayName:"Selection plus",path:"illustrations/compact/selection-plus.svg",category:"compact",layoutVariant:"compact"},symbol_info:{displayName:"Symbol info",path:"illustrations/compact/symbol-info.svg",category:"compact",layoutVariant:"compact"},add_user:{displayName:"Add user",path:"illustrations/compact/add-user.svg",category:"compact",layoutVariant:"compact"},landscape:{displayName:"Landscape",path:"illustrations/landscape/landscape.svg",category:"landscape",layoutVariant:"illustration"},api:{displayName:"API",path:"illustrations/api/api.svg",category:"api",layoutVariant:"illustration"},api_plugin:{displayName:"API plugin",path:"illustrations/api/api-plugin.svg",category:"api",layoutVariant:"illustration"},documents_empty:{displayName:"Documents empty",path:"illustrations/documents/documents-empty.svg",category:"documents",layoutVariant:"illustration"},cloud_access:{displayName:"Cloud access",path:"illustrations/clouds/cloud-access.svg",category:"clouds",layoutVariant:"illustration"},store_settings:{displayName:"Store settings",path:"illustrations/stores/store-settings.svg",category:"stores",layoutVariant:"illustration"},error_404:{displayName:"404 error",path:"illustrations/errors/error-404.svg",category:"errors",layoutVariant:"error"}};function m(t){return Object.entries(L).filter(([,e])=>e.layoutVariant===t).map(([e])=>e)}const W={title:"Components/Empty State",component:"modus-wc-empty-state",decorators:[C],args:{variant:"compact",illustration:"selection_plus",heading:"Title for Empty State",subtitle:"Subtitle","action-label":"Action"},argTypes:{variant:{control:{type:"select"},options:["compact","illustration","error"]},illustration:{control:{type:"select"},options:m("compact")}},parameters:{actions:{handles:["actionClick"]},docs:{description:{component:"Use the `illustration` prop to choose a bundled graphic. Allowed values depend on `variant`. **Default** covers compact; see **Illustration** and **Error404** for the other layouts."}}}},c={render:(t,e)=>u`${I(e.id,u`
        <modus-wc-empty-state
          variant="${t.variant}"
          illustration="${o(t.illustration)}"
          heading="${t.heading}"
          subtitle="${o(t.subtitle)}"
          action-label="${o(t["action-label"])}"
          custom-class="${o(t["custom-class"])}"
          @actionClick=${a=>a}
        ></modus-wc-empty-state>
      `)}`},n={...c,parameters:{docs:{description:{story:'Default `variant="compact"`. `illustration` options: `selection_plus`, `symbol_info`, `add_user`. Default illustration: `selection_plus`.'}}}},r={...c,parameters:{docs:{description:{story:'`variant="illustration"`. `illustration` options: `landscape`, `api`, `api_plugin`, `documents_empty`, `cloud_access`, `store_settings`. Default: `landscape`.'}}},argTypes:{illustration:{control:{type:"select"},options:m("illustration")}},args:{variant:"illustration",illustration:"landscape"}},i={...c,parameters:{docs:{description:{story:'`variant="error"`. `illustration` option: `error_404`. Default: `error_404`.'}}},argTypes:{illustration:{control:{type:"select"},options:m("error")}},args:{variant:"error",illustration:"error_404",heading:"404 Page Not Found",subtitle:"Helpful message that conveys the purpose of the screen. (max of 3 Lines) This is where line three will be!"}},l={...c,parameters:{docs:{description:{story:"Compact layout without an action button. `illustration` options match **Default**."}}},args:{illustration:"symbol_info",heading:"Nothing here yet",subtitle:"Create your first item to populate this view.","action-label":void 0}},p={render:t=>{if(!customElements.get("empty-state-shadow-host")){const e=$({componentTag:"modus-wc-empty-state",propsMapper:(a,A)=>{const s=A;s.variant=a.variant,s.illustration=a.illustration,s.heading=a.heading,s.subtitle=a.subtitle,s.actionLabel=a["action-label"],s.customClass=a["custom-class"]||""}});customElements.define("empty-state-shadow-host",e)}return u`<empty-state-shadow-host
      .props=${{...t}}
    ></empty-state-shadow-host>`}};var d,y,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{\n  ...Template,\n  parameters: {\n    docs: {\n      description: {\n        story: 'Default `variant=\"compact\"`. `illustration` options: `selection_plus`, `symbol_info`, `add_user`. Default illustration: `selection_plus`.'\n      }\n    }\n  }\n}",...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,f,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: '\`variant="illustration"\`. \`illustration\` options: \`landscape\`, \`api\`, \`api_plugin\`, \`documents_empty\`, \`cloud_access\`, \`store_settings\`. Default: \`landscape\`.'
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
    illustration: 'landscape'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,_,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: '\`variant="error"\`. \`illustration\` option: \`error_404\`. Default: \`error_404\`.'
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
    illustration: 'error_404',
    heading: '404 Page Not Found',
    subtitle: 'Helpful message that conveys the purpose of the screen. (max of 3 Lines) This is where line three will be!'
  }
}`,...(S=(_=i.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var w,E,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var D,N,V;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('empty-state-shadow-host')) {
      const EmptyStateShadowHost = createShadowHostClass<EmptyStateArgs>({
        componentTag: 'modus-wc-empty-state',
        propsMapper: (v: EmptyStateArgs, el: HTMLElement) => {
          const emptyStateEl = el as unknown as {
            variant: EmptyStateVariant;
            illustration?: EmptyStateIllustration;
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
}`,...(V=(N=p.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const j=["Default","Illustration","Error404","WithoutAction","ShadowDomParent"];export{n as Default,i as Error404,r as Illustration,p as ShadowDomParent,l as WithoutAction,j as __namedExportsOrder,W as default};
