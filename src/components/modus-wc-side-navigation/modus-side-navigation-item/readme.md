# modus-wc-side-navigation-item



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                  | Type      | Default |
| ------------------ | ------------------- | ------------------------------------------------------------ | --------- | ------- |
| `disableSelection` | `disable-selection` | (optional) Disables item selection.                          | `boolean` | `false` |
| `disabled`         | `disabled`          | (optional) The disabled state of side navigation panel item. | `boolean` | `false` |
| `expanded`         | `expanded`          | Whether the side navigation is expanded.                     | `boolean` | `false` |
| `selected`         | `selected`          | (optional) The selected state of the side navigation item.   | `boolean` | `false` |


## Events

| Event                | Description                                                           | Type                                              |
| -------------------- | --------------------------------------------------------------------- | ------------------------------------------------- |
| `sideNavItemClicked` | An event that fires when mouse click or `Enter` key press on an item. | `CustomEvent<{ id: string; selected: boolean; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
