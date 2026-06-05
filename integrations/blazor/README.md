# Modus Web Components – Blazor QA Testing

This directory contains two .NET projects for validating the auto-generated Blazor wrappers
for all 51 Modus web components.

## Projects

| Project | Description |
|---|---|
| `blazing-story/` | Blazor WebAssembly + BlazingStory – interactive component browser (web) |
| `maui-app/` | MAUI WebView wrapper – loads the BlazingStory web app in a native Android shell for device testing |
| `stencil-generated/ModusWebComponents.Blazor/` | Auto-generated Razor Class Library (do not edit manually) |
| `ModusWebComponents.slnx` | Solution file – open in Rider / VS 2022+ |

---

## Quick Start (Web)

> **Prerequisite**: run `npm run build` at the repository root first to produce `dist/`.

```bash
# (Optional) Regenerate all story files after a Stencil build
npm run generate:blazor-stories

# Start the BlazingStory dev server
npm run start:blazor
# → opens http://localhost:5200
```

Or run directly with the .NET CLI:

```bash
dotnet run --project integrations/blazor/blazing-story/BlazingStoryApp.csproj
```

---

## Quick Start (Android)

```bash
# Build the APK
npm run build:maui-android

# Publish a signed / unsigned APK for side-loading
npm run publish:maui-android
```

Or directly:

```bash
dotnet build integrations/blazor/maui-app/MauiBlazorApp.csproj \
  -c Release -f net10.0-android
```

---

## How Stories are Generated

`scripts/generate-blazor-stories.js` is a Node.js script that:

1. Reads every `*.razor.cs` file in `stencil-generated/ModusWebComponents.Blazor/Components/`
2. Parses component names, parameters (type, default value, allowed values), and descriptions
3. Outputs one `*Stories.razor` file per component into `blazing-story/Stories/`

**Re-generate** after a Stencil build:

```bash
node scripts/generate-blazor-stories.js
# or
npm run generate:blazor-stories
```

Stories are organized into categories:

| Category | Components |
|---|---|
| **Inputs** | Button, Checkbox, Date, FileDropzone, NumberInput, Radio, Rating, Select, Slider, Switch, Textarea, TextInput, TimeInput, Autocomplete, InputLabel |
| **Feedback** | Alert, Badge, Chip, InputFeedback, Loader, Progress, Skeleton, Toast, Tooltip |
| **Navigation** | Breadcrumbs, DropdownMenu, Menu, MenuItem, Navbar, Pagination, SideNavigation, Stepper, Tabs, Toolbar |
| **Layout** | Accordion, Card, Collapse, Divider, Handle, Modal, Panel, UtilityPanel |
| **Display** | Avatar, Icon, Logo, ProfileMenu, Table, Typography |
| **Theme** | ThemeProvider, ThemeSwitcher |

---

## Architecture

```
npm run build  (stencil + Blazor RCL generation)
      │
      ▼
dist/                ← Stencil build output (ESM bundle, CSS, assets)
integrations/blazor/
  stencil-generated/
    ModusWebComponents.Blazor/   ← RCL (auto-generated Razor wrappers + static web assets)
      wwwroot/                   ← Static assets copied by the Stencil output-target plugin
  blazing-story/
    BlazingStoryApp.csproj       ← Blazor WASM + BlazingStory host
    Stories/*.razor              ← Auto-generated story files
    wwwroot/
      iframe.html                ← Loads Stencil bundle & Modus CSS
  maui-app/
    MauiBlazorApp.csproj         ← MAUI WebView dev harness (Android target)
```

Static assets (ESM bundle, CSS, fonts, icons) are packaged inside the **RCL** by the
Stencil output-target plugin during `npm run build`. Consumer projects reference them
via the standard Razor Class Library static web asset path:
`_content/ModusWebComponents.Blazor/...` — no manual copy step is needed.
