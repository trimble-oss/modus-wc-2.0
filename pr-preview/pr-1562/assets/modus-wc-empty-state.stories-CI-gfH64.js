import{w as $}from"./decorator-Cv9na35H.js";import{b as d}from"./lit-element-DgBvYnzn.js";import{o as m}from"./if-defined-BnVFTJ4o.js";import{i as k}from"./keyed-DcwHG6kx.js";import{c as H}from"./shadow-host-helper-C8P96xY4.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";import"./directive-C_Rw-dL6.js";import"./directive-helpers-BZ4DLK7w.js";const U={selection_plus:{displayName:"Selection plus",path:"illustrations/compact/selection-plus.svg",category:"compact",layoutVariant:"compact"},symbol_info:{displayName:"Symbol info",path:"illustrations/compact/symbol-info.svg",category:"compact",layoutVariant:"compact"},add_user:{displayName:"Add user",path:"illustrations/compact/add-user.svg",category:"compact",layoutVariant:"compact"},landscape:{displayName:"Landscape",path:"illustrations/landscape/landscape.svg",category:"landscape",layoutVariant:"illustration"},api:{displayName:"API",path:"illustrations/api/api.svg",category:"api",layoutVariant:"illustration"},api_plugin:{displayName:"API plugin",path:"illustrations/api/api-plugin.svg",category:"api",layoutVariant:"illustration"},documents_empty:{displayName:"Documents empty",path:"illustrations/documents/documents-empty.svg",category:"documents",layoutVariant:"illustration"},cloud_access:{displayName:"Cloud access",path:"illustrations/clouds/cloud-access.svg",category:"clouds",layoutVariant:"illustration"},store_settings:{displayName:"Store settings",path:"illustrations/stores/store-settings.svg",category:"stores",layoutVariant:"illustration"},error_404:{displayName:"404 error",path:"illustrations/errors/error-404.svg",category:"errors",layoutVariant:"error"},error_404_page:{displayName:"404 page",path:"illustrations/errors/error-404-page.svg",category:"errors",layoutVariant:"error"}},u={compact:"selection_plus",illustration:"landscape",error:"error_404"};function y(t){return Object.entries(U).filter(([,e])=>e.layoutVariant===t).map(([e])=>e)}const F=Object.keys(U),V=y("compact"),M=y("illustration"),Y=y("error"),Q={title:"Components/Empty State",component:"modus-wc-empty-state",decorators:[$],args:{variant:"compact",illustration:u.compact,heading:"Title for Empty State",subtitle:"Subtitle","action-label":"Action"},argTypes:{variant:{control:{type:"select"},options:["compact","illustration","error"]},illustration:{control:{type:"select"},options:F,table:{type:{summary:"EmptyStateIllustration"}}}},parameters:{actions:{handles:["actionClick"]},docs:{description:{component:"Use the `illustration` prop to choose a bundled graphic. Allowed values depend on `variant`. **Default** exposes all layout variants; **Compact**, **Illustration**, and **Error404** stories limit controls to that variant’s illustrations."}}}},s={render:(t,e)=>d`${k(e.id,d`
        <modus-wc-empty-state
          variant="${t.variant}"
          .illustration=${t.illustration}
          heading="${t.heading}"
          subtitle="${m(t.subtitle)}"
          action-label="${m(t["action-label"])}"
          custom-class="${m(t["custom-class"])}"
          @actionClick=${a=>a}
        ></modus-wc-empty-state>
      `)}`},n={...s,parameters:{docs:{description:{story:"Playground with `variant` (`compact`, `illustration`, `error`) and the full illustration list. Pick a layout variant, then choose any bundled illustration (mismatches fall back to that variant’s default)."}}}},r={...s,argTypes:{variant:{control:!1,table:{disable:!0}},illustration:{control:{type:"select"},options:V,table:{type:{summary:"EmptyStateIllustration"}}}},parameters:{docs:{description:{story:'`variant="compact"`. `illustration` options: `selection_plus`, `symbol_info`, `add_user`. Default illustration: `selection_plus`.'}}},args:{variant:"compact",illustration:u.compact}},i={...s,argTypes:{variant:{control:!1,table:{disable:!0}},illustration:{control:{type:"select"},options:M,table:{type:{summary:"EmptyStateIllustration"}}}},parameters:{docs:{description:{story:'`variant="illustration"`. `illustration` options: `landscape`, `api`, `api_plugin`, `documents_empty`, `cloud_access`, `store_settings`. Default: `landscape`.'}}},args:{variant:"illustration",illustration:u.illustration}},l={...s,argTypes:{variant:{control:!1,table:{disable:!0}},illustration:{control:{type:"select"},options:Y,table:{type:{summary:"EmptyStateIllustration"}}}},parameters:{docs:{description:{story:'`variant="error"`. `illustration` options: `error_404`, `error_404_page`. Default: `error_404`.'}}},args:{variant:"error",illustration:u.error,heading:"404 Page Not Found",subtitle:"Helpful message that conveys the purpose of the screen. (max of 3 Lines) This is where line three will be!"}},c={...s,argTypes:{variant:{control:!1,table:{disable:!0}},illustration:{control:{type:"select"},options:V,table:{type:{summary:"EmptyStateIllustration"}}}},parameters:{docs:{description:{story:"Compact layout without an action button. `illustration` options match **Compact**."}}},args:{variant:"compact",illustration:"selection_plus",heading:"Nothing here yet",subtitle:"Create your first item to populate this view.","action-label":void 0}},p={render:t=>{if(!customElements.get("empty-state-shadow-host")){const e=H({componentTag:"modus-wc-empty-state",propsMapper:(a,D)=>{const o=D;o.variant=a.variant,o.illustration=a.illustration,o.heading=a.heading,o.subtitle=a.subtitle,o.actionLabel=a["action-label"],o.customClass=a["custom-class"]||""}});customElements.define("empty-state-shadow-host",e)}return d`<empty-state-shadow-host
      .props=${{...t}}
    ></empty-state-shadow-host>`}};var g,h,T;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Playground with \`variant\` (\`compact\`, \`illustration\`, \`error\`) and the full illustration list. Pick a layout variant, then choose any bundled illustration (mismatches fall back to that variant’s default).'
      }
    }
  }
}`,...(T=(h=n.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var _,b,S;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  argTypes: {
    variant: {
      control: false,
      table: {
        disable: true
      }
    },
    illustration: {
      control: {
        type: 'select'
      },
      options: COMPACT_ILLUSTRATION_OPTIONS,
      table: {
        type: {
          summary: 'EmptyStateIllustration'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: '\`variant="compact"\`. \`illustration\` options: \`selection_plus\`, \`symbol_info\`, \`add_user\`. Default illustration: \`selection_plus\`.'
      }
    }
  },
  args: {
    variant: 'compact',
    illustration: DEFAULT_ILLUSTRATION_BY_VARIANT.compact
  }
}`,...(S=(b=r.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,I,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  argTypes: {
    variant: {
      control: false,
      table: {
        disable: true
      }
    },
    illustration: {
      control: {
        type: 'select'
      },
      options: ILLUSTRATION_LAYOUT_OPTIONS,
      table: {
        type: {
          summary: 'EmptyStateIllustration'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: '\`variant="illustration"\`. \`illustration\` options: \`landscape\`, \`api\`, \`api_plugin\`, \`documents_empty\`, \`cloud_access\`, \`store_settings\`. Default: \`landscape\`.'
      }
    }
  },
  args: {
    variant: 'illustration',
    illustration: DEFAULT_ILLUSTRATION_BY_VARIANT.illustration
  }
}`,...(f=(I=i.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var A,E,L;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  argTypes: {
    variant: {
      control: false,
      table: {
        disable: true
      }
    },
    illustration: {
      control: {
        type: 'select'
      },
      options: ERROR_ILLUSTRATION_OPTIONS,
      table: {
        type: {
          summary: 'EmptyStateIllustration'
        }
      }
    }
  },
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
}`,...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var N,O,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  argTypes: {
    variant: {
      control: false,
      table: {
        disable: true
      }
    },
    illustration: {
      control: {
        type: 'select'
      },
      options: COMPACT_ILLUSTRATION_OPTIONS,
      table: {
        type: {
          summary: 'EmptyStateIllustration'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact layout without an action button. \`illustration\` options match **Compact**.'
      }
    }
  },
  args: {
    variant: 'compact',
    illustration: 'selection_plus',
    heading: 'Nothing here yet',
    subtitle: 'Create your first item to populate this view.',
    'action-label': undefined
  }
}`,...(w=(O=c.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var C,R,P;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(R=p.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};const X=["Default","Compact","Illustration","Error404","WithoutAction","ShadowDomParent"];export{r as Compact,n as Default,l as Error404,i as Illustration,p as ShadowDomParent,c as WithoutAction,X as __namedExportsOrder,Q as default};
