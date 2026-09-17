import{b as p}from"./lit-element-DgBvYnzn.js";import{o as n}from"./if-defined-BnVFTJ4o.js";const i="https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg",e=[{src:i,alt:"Zebra at a watering hole"},{src:i,alt:"Zebra at a watering hole"},{src:i,alt:"Zebra at a watering hole"},{src:i,alt:"Zebra at a watering hole"}],w={title:"Components/Image Grid",component:"modus-wc-image-grid",args:{images:e,imageShape:"rectangle",imagesPerView:4},argTypes:{imageShape:{control:{type:"select"},options:["rectangle","square"]},imagesPerView:{control:{type:"select"},options:[1,2,3,4]}},parameters:{docs:{description:{component:"\nResponsive image grid that displays 1 to 4 images in rectangle or square layouts.\nEach cell uses `modus-wc-image` for cropping, rounded corners, and error fallback."}}}},l={render:a=>p`
    <modus-wc-image-grid
      .images=${a.images}
      image-shape=${n(a.imageShape)}
      images-per-view=${n(a.imagesPerView)}
      custom-class=${n(a["custom-class"])}
    ></modus-wc-image-grid>
  `},s={...l,parameters:{docs:{description:{story:"Default layout: four rectangle images in a 2×2 grid with 24px gap and 16px corner radius."}}}},r={render:()=>p`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <section>
        <h3 style="margin: 0 0 16px;">4 images — rectangle</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="rectangle"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">4 images — square</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="square"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="rectangle"
          images-per-view="3"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">2 images — square</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="square"
          images-per-view="2"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
        <modus-wc-image-grid
          .images=${[e[0]]}
          image-shape="rectangle"
          images-per-view="1"
        ></modus-wc-image-grid>
      </section>
    </div>
  `,parameters:{docs:{description:{story:"All layout variants from the Figma ImageGrid design."}}}};var g,m,t;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Default layout: four rectangle images in a 2×2 grid with 24px gap and 16px corner radius.'
      }
    }
  }
}`,...(t=(m=s.parameters)==null?void 0:m.docs)==null?void 0:t.source}}};var o,c,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <section>
        <h3 style="margin: 0 0 16px;">4 images — rectangle</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">4 images — square</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="3"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">2 images — square</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="2"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
        <modus-wc-image-grid
          .images=\${[SAMPLE_IMAGES[0]]}
          image-shape="rectangle"
          images-per-view="1"
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
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const y=["Default","AllVariants"];export{r as AllVariants,s as Default,y as __namedExportsOrder,w as default};
