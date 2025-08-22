# modus-wc-utility-panel

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                    | Type                  | Default     |
| --------------- | ---------------- | -------------------------------------------------------------- | --------------------- | ----------- |
| `expanded`      | `expanded`       | The panel is expanded or closed                                | `boolean`             | `false`     |
| `pushContent`   | `push-content`   | Determines if the panel pushes content or displays an overlay. | `boolean`             | `false`     |
| `targetContent` | `target-content` | Target content selector to adjust margin when panel is open    | `string \| undefined` | `undefined` |


## Events

| Event         | Description                                   | Type                |
| ------------- | --------------------------------------------- | ------------------- |
| `panelClosed` | An event that fires when the panel is closed. | `CustomEvent<void>` |
| `panelOpened` | An event that fires when the panel is opened. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
