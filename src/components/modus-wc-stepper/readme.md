# modus-wc-steps



<!-- Auto Generated Below -->


## Overview

Used to show a list of steps in a process.

## Properties

| Property      | Attribute      | Description                                                                     | Type                                      | Default     |
| ------------- | -------------- | ------------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| `activeStep`  | `active-step`  | The index (0-based) of the active step in the `steps` array.                    | `number \| undefined`                     | `undefined` |
| `customClass` | `custom-class` | Custom CSS class to apply to the steps element.                                 | `string \| undefined`                     | `''`        |
| `interactive` | `interactive`  | If true, steps will be rendered as buttons and emit `stepClick` when activated. | `boolean \| undefined`                    | `false`     |
| `orientation` | `orientation`  | The orientation of the steps.                                                   | `"horizontal" \| "vertical" \| undefined` | `undefined` |
| `steps`       | `steps`        | The steps to display.                                                           | `IStepperItem[]`                          | `[]`        |


## Events

| Event       | Description                                                                             | Type                              |
| ----------- | --------------------------------------------------------------------------------------- | --------------------------------- |
| `stepClick` | Emitted with the 0-based step index when a step is activated and `interactive` is true. | `CustomEvent<{ index: number; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
