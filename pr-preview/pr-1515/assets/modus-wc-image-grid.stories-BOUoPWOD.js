import{b as L}from"./lit-element-DgBvYnzn.js";import{o as p}from"./if-defined-BnVFTJ4o.js";const r="https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg",e=[{src:r,alt:"Zebra at a watering hole"},{src:r,alt:"Zebra at a watering hole"},{src:r,alt:"Zebra at a watering hole"},{src:r,alt:"Zebra at a watering hole"}],O={title:"Components/Image Grid",component:"modus-wc-image-grid",args:{images:e,imageShape:"rectangle",imagesPerView:"4 images"},argTypes:{imageShape:{control:{type:"select"},options:["rectangle","square"]},imagesPerView:{control:{type:"select"},options:["1 image","2 images","3 images","4 images"]}},parameters:{docs:{description:{component:"\nResponsive image grid that displays 1 to 4 images in rectangle or square layouts.\nEach cell uses `modus-wc-image` for cropping, rounded corners, and error fallback."}}}},a={render:s=>L`
    <modus-wc-image-grid
      .images=${s.images}
      image-shape=${p(s.imageShape)}
      images-per-view=${p(s.imagesPerView)}
      custom-class=${p(s["custom-class"])}
    ></modus-wc-image-grid>
  `},i={...a,parameters:{docs:{description:{story:"Default layout: four rectangle images in a 2×2 grid with 24px gap and 16px corner radius."}}}},n={...a,args:{imageShape:"square",imagesPerView:"4 images"},parameters:{docs:{description:{story:"Four square images in a 2×2 grid."}}}},g={...a,args:{imageShape:"rectangle",imagesPerView:"3 images"},parameters:{docs:{description:{story:"Three rectangle images in a single row."}}}},m={...a,args:{imageShape:"square",imagesPerView:"2 images"},parameters:{docs:{description:{story:"Two square images in a single row."}}}},o={...a,args:{imageShape:"rectangle",imagesPerView:"1 image",images:[e[0]]},parameters:{docs:{description:{story:"Single full-width rectangle image."}}}},t={...a,args:{imageShape:"square",imagesPerView:"1 image",images:[e[0]]},parameters:{docs:{description:{story:"Single full-width square image (max 932px)."}}}},c={render:()=>L`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <section>
        <h3 style="margin: 0 0 16px;">4 images — rectangle</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="rectangle"
          images-per-view="4 images"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">4 images — square</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="square"
          images-per-view="4 images"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="rectangle"
          images-per-view="3 images"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">2 images — square</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="square"
          images-per-view="2 images"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
        <modus-wc-image-grid
          .images=${[e[0]]}
          image-shape="rectangle"
          images-per-view="1 image"
        ></modus-wc-image-grid>
      </section>
    </div>
  `,parameters:{docs:{description:{story:"All layout variants from the Figma ImageGrid design."}}}};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Default layout: four rectangle images in a 2×2 grid with 24px gap and 16px corner radius.'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,w,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  args: {
    imageShape: 'square',
    imagesPerView: '4 images'
  },
  parameters: {
    docs: {
      description: {
        story: 'Four square images in a 2×2 grid.'
      }
    }
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var y,q,x;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    imageShape: 'rectangle',
    imagesPerView: '3 images'
  },
  parameters: {
    docs: {
      description: {
        story: 'Three rectangle images in a single row.'
      }
    }
  }
}`,...(x=(q=g.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var A,I,P;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  args: {
    imageShape: 'square',
    imagesPerView: '2 images'
  },
  parameters: {
    docs: {
      description: {
        story: 'Two square images in a single row.'
      }
    }
  }
}`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var f,E,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    imageShape: 'rectangle',
    imagesPerView: '1 image',
    images: [SAMPLE_IMAGES[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Single full-width rectangle image.'
      }
    }
  }
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var M,T,V;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Template,
  args: {
    imageShape: 'square',
    imagesPerView: '1 image',
    images: [SAMPLE_IMAGES[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Single full-width square image (max 932px).'
      }
    }
  }
}`,...(V=(T=t.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var $,G,_;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <section>
        <h3 style="margin: 0 0 16px;">4 images — rectangle</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="4 images"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">4 images — square</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="4 images"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="3 images"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">2 images — square</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="2 images"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
        <modus-wc-image-grid
          .images=\${[SAMPLE_IMAGES[0]]}
          image-shape="rectangle"
          images-per-view="1 image"
        ></modus-wc-image-grid>
      </section>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'All layout variants from the Figma ImageGrid design.'
      }
    }
  }
}`,...(_=(G=c.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};const R=["Default","FourImagesSquare","ThreeImagesRectangle","TwoImagesSquare","OneImageRectangle","OneImageSquare","AllVariants"];export{c as AllVariants,i as Default,n as FourImagesSquare,o as OneImageRectangle,t as OneImageSquare,g as ThreeImagesRectangle,m as TwoImagesSquare,R as __namedExportsOrder,O as default};
