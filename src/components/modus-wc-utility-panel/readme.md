# modus-wc-utility-panel

<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                   | Description                                                     | Type                       | Default     |
| ------------------------ | --------------------------- | --------------------------------------------------------------- | -------------------------- | ----------- |
| `backgroundOverlay`      | `background-overlay`        | When true, dims the page behind the panel while it is expanded. | `boolean`                  | `false`     |
| `collapseOnClickOutside` | `collapse-on-click-outside` | Whether the panel should collapse when clicking outside of it.  | `boolean`                  | `false`     |
| `customClass`            | `custom-class`              | Custom CSS class to apply to the outer div.                     | `string \| undefined`      | `''`        |
| `expanded`               | `expanded`                  | The panel is expanded or closed                                 | `boolean`                  | `false`     |
| `pushContent`            | `push-content`              | Determines if the panel pushes content or displays an overlay.  | `boolean`                  | `false`     |
| `targetElement`          | `target-element`            | Target element reference to push content when panel opens       | `HTMLElement \| undefined` | `undefined` |


## Events

| Event         | Description                                   | Type                |
| ------------- | --------------------------------------------- | ------------------- |
| `panelClosed` | An event that fires when the panel is closed. | `CustomEvent<void>` |
| `panelOpened` | An event that fires when the panel is opened. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
