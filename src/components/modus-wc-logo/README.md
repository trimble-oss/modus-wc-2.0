# modus-wc-logo



<!-- Auto Generated Below -->


## Overview

A component for displaying Trimble product logos with support for both fixed and scalable sizing.
Provides consistent branding across applications with various product logo options.
Logo colors automatically adapt to the active Modus theme via CSS variables.

## Properties

| Property            | Attribute      | Description                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Default     |
| ------------------- | -------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `alt`               | `alt`          | The alt text for accessibility. If not provided, defaults to the logo name.                  | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `undefined` |
| `customClass`       | `custom-class` | Custom CSS class to apply to the logo container.                                             | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `''`        |
| `emblem`            | `emblem`       | Show emblem version (icon only) instead of full logo                                         | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `false`     |
| `name` _(required)_ | `name`         | The name of the logo to display. Accepts values like 'trimble', 'viewpoint_field_view', etc. | `"trimble" \| "siteworks" \| "earthworks" \| "financials" \| "worksmanager" \| "connect" \| "unity_construct" \| "trade_servicelive" \| "buildable" \| "livecount" \| "supplier_xchange" \| "app_xchange" \| "trimble_unity" \| "sketchup" \| "pc_miler" \| "copilot" \| "trimble_pay" \| "projectsight" \| "demand_planning" \| "viewpoint" \| "viewpoint_analytics" \| "viewpoint_epayments" \| "viewpoint_estimating" \| "viewpoint_field_management" \| "viewpoint_field_time" \| "viewpoint_financial_controls" \| "viewpoint_hr_management" \| "viewpoint_jobpac_connect" \| "viewpoint_procontractor" \| "viewpoint_spectrum" \| "viewpoint_team" \| "viewpoint_vista" \| "viewpoint_spectrum_service_tech" \| "viewpoint_for_projects" \| "viewpoint_vista_field_service" \| "viewpoint_field_view"` | `undefined` |


## Dependencies

### Used by

 - [modus-wc-navbar](../modus-wc-navbar)

### Graph
```mermaid
graph TD;
  modus-wc-navbar --> modus-wc-logo
  style modus-wc-logo fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*