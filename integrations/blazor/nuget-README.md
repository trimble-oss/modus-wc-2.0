# Modus Blazor Components

Razor Class Library (RCL) providing auto-generated Blazor component wrappers for
[Modus Web Components](https://github.com/trimble-oss/modus-wc-2.0) — Trimble's
enterprise-ready, accessible UI component library built with Stencil.

## Installation

```bash
dotnet add package ModusWebComponents.Blazor
```

## Host Page Setup

Add the following to your app's host page **before** the Blazor framework script.

**Blazor WebAssembly** — `wwwroot/index.html`  
**Blazor Server / .NET 8+ Web App** — `App.razor` or `Pages/_Host.cshtml`  
**MAUI Blazor Hybrid** — `wwwroot/index.html`

```html
<!-- Modus icon font -->
<link rel="stylesheet" href="_content/ModusWebComponents.Blazor/modus-icons.css" />

<!-- Modus component styles -->
<link rel="stylesheet" href="_content/ModusWebComponents.Blazor/modus-wc-styles.css" />

<!-- Stencil ESM bundle — registers all modus-wc-* custom elements -->
<script type="module" src="_content/ModusWebComponents.Blazor/modus-wc/modus-wc.esm.js"></script>

<!-- Blazor ↔ web-component event interop helper -->
<script src="_content/ModusWebComponents.Blazor/js/interop.js"></script>
```

## Using Components

Add the namespace to `_Imports.razor` so components are available throughout your app:

```razor
@using ModusWebComponents.Blazor
```

Then use components directly in any `.razor` file:

```razor
<ModusWcButton Color="primary">Primary Button</ModusWcButton>

<ModusWcTextInput Label="Name" Placeholder="Enter your name" />

<ModusWcAlert AlertTitle="Welcome" AlertDescription="Hello from Modus!" Variant="success" />
```

## Resources

- [Component documentation & live examples](https://modus-web-components-v2.trimble.com)
- [MAUI Blazor Hybrid — quick start & installation](https://github.com/trimble-oss/ModusWebComponents.Maui/blob/main/README.md)
- [MAUI Blazor Hybrid — full integration guide](https://github.com/trimble-oss/ModusWebComponents.Maui/blob/main/AGENTS.md)
- [GitHub repository](https://github.com/trimble-oss/modus-wc-2.0)
- [Report an issue](https://github.com/trimble-oss/modus-wc-2.0/issues)
