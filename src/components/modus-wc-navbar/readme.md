# modus-wc-navbar



<!-- Auto Generated Below -->


## Overview

A customizable navbar component used for top level navigation of all Trimble applications.

The component supports a 'main-menu', 'notifications', and 'apps' <slot> for injecting custom HTML menus.
It also supports a 'start', 'center', and 'end' <slot> for injecting additional custom HTML.

Adheres to WCAG 2.2 standards.

## Properties

| Property                | Attribute                 | Description                                                                                  | Type                                | Default                                                                                                                                             |
| ----------------------- | ------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appsMenuOpen`          | `apps-menu-open`          | The state of the apps menu visibility.                                                       | `boolean \| undefined`              | `false`                                                                                                                                             |
| `condensed`             | `condensed`               | Applies condensed layout and styling.                                                        | `boolean \| undefined`              | `false`                                                                                                                                             |
| `condensedMenuOpen`     | `condensed-menu-open`     | The state of the condensed menu visibility.                                                  | `boolean \| undefined`              | `false`                                                                                                                                             |
| `customClass`           | `custom-class`            | Custom CSS class to apply to the host element.                                               | `string \| undefined`               | `''`                                                                                                                                                |
| `mainMenuOpen`          | `main-menu-open`          | The state of the main menu visibility.                                                       | `boolean \| undefined`              | `false`                                                                                                                                             |
| `notificationsMenuOpen` | `notifications-menu-open` | The state of the notifications menu visibility.                                              | `boolean \| undefined`              | `false`                                                                                                                                             |
| `searchDebounceMs`      | `search-debounce-ms`      | Debounce time in milliseconds for search input changes. Default is 300ms.                    | `number \| undefined`               | `300`                                                                                                                                               |
| `searchInputOpen`       | `search-input-open`       | The state of the search input visibility.                                                    | `boolean \| undefined`              | `false`                                                                                                                                             |
| `textOverrides`         | `text-overrides`          | Text replacements for the navbar.                                                            | `INavbarTextOverrides \| undefined` | `undefined`                                                                                                                                         |
| `user` _(required)_     | `user`                    | User information used to render the user card.                                               | `INavbarUserCard`                   | `undefined`                                                                                                                                         |
| `userMenuOpen`          | `user-menu-open`          | The state of the user menu visibility.                                                       | `boolean \| undefined`              | `false`                                                                                                                                             |
| `visibility`            | `visibility`              | The visibility of individual navbar buttons. Default is user profile visible, others hidden. | `INavbarVisibility \| undefined`    | `{     apps: false,     help: false,     mainMenu: false,     notifications: false,     search: false,     searchInput: false,     user: true,   }` |


## Events

| Event                | Description                                                                                       | Type                                       |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `appsClick`          | Event emitted when the apps button is clicked or activated via keyboard.                          | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `helpClick`          | Event emitted when the help button is clicked or activated via keyboard.                          | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `myTrimbleClick`     | Event emitted when the user profile Access MyTrimble button is clicked or activated via keyboard. | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `notificationsClick` | Event emitted when the notifications button is clicked or activated via keyboard.                 | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `searchChange`       | Event emitted when the search input value is changed.                                             | `CustomEvent<{ value: string; }>`          |
| `searchClick`        | Event emitted when the search button is clicked or activated via keyboard.                        | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `signOutClick`       | Event emitted when the user profile sign out button is clicked or activated via keyboard.         | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `trimbleLogoClick`   | Event emitted when the Trimble logo is clicked or activated via keyboard.                         | `CustomEvent<KeyboardEvent \| MouseEvent>` |


## Dependencies

### Depends on

- [modus-wc-toolbar](../modus-wc-toolbar)
- [modus-wc-button](../modus-wc-button)
- [modus-wc-menu](../modus-wc-menu)
- [modus-wc-menu-item](../modus-wc-menu-item)
- [modus-wc-text-input](../modus-wc-text-input)
- [modus-wc-avatar](../modus-wc-avatar)
- [modus-wc-card](../modus-wc-card)

### Graph
```mermaid
graph TD;
  modus-wc-navbar --> modus-wc-toolbar
  modus-wc-navbar --> modus-wc-button
  modus-wc-navbar --> modus-wc-menu
  modus-wc-navbar --> modus-wc-menu-item
  modus-wc-navbar --> modus-wc-text-input
  modus-wc-navbar --> modus-wc-avatar
  modus-wc-navbar --> modus-wc-card
  modus-wc-menu-item --> modus-wc-icon
  modus-wc-text-input --> modus-wc-input-label
  modus-wc-text-input --> modus-wc-input-feedback
  modus-wc-input-feedback --> modus-wc-icon
  style modus-wc-navbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
