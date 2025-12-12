# Code Connect Strategy Using Both MCPs

## Overview

We use **TWO MCPs together** to create accurate Code Connect mappings:
1. **Modus Docs MCP** → Component props, types, defaults
2. **Figma MCP** → Design variants, node-ids, structure

We publish **TWO versions** of each component:
1. **Web Components** (`.figma.ts`) → HTML syntax
2. **React** (`.figma.tsx`) → JSX syntax

## Philosophy

**Code Connect maps ONLY Figma design variants → Component visual/state props**

### ✅ Map These (Figma Variants):
- Visual states: `size`, `color`, `variant`, `shape`
- Interactive states: `disabled`, `checked`, `pressed`
- Display states: `indeterminate`, `bordered`

### ❌ Don't Map These (Developer Props):
- IDs: `inputId`, `id`
- Names: `name`, `className`, `customClass`
- Labels: `label`, `aria-label`, `placeholder`
- Form context: `required`, `name`
- Event handlers: callbacks
- Custom: `customClass`, `data-*`

**Why?** Developers customize these per use case. Show minimal, variant-driven examples.

## Dual MCP Workflow

### Step 1: Get Component Props (Modus Docs MCP)

```typescript
const modusDocs = mcp_modus-docs-local_get_modus_component_data('modus-wc-button');
```

**Returns:**
```json
{
  "properties": [
    { "name": "size", "type": "DaisySize", "default": "'md'" },
    { "name": "color", "type": "'primary' | 'secondary' | ...", "default": "'primary'" },
    { "name": "variant", "type": "'borderless' | 'filled' | 'outlined'", "default": "'filled'" },
    { "name": "disabled", "type": "boolean", "default": "false" },
    { "name": "customClass", "type": "string", "default": "''" }
  ]
}
```

### Step 2: Get Figma Variants (Figma MCP)

```typescript
const figmaMeta = mcp_Figma_get_metadata(fileKey, nodeId);
```

**Returns:**
```xml
<frame id="7:3230" name="_button">
  <symbol name="size=lg, style=fill, radius=square" />
  <symbol name="size=md, style=outline, radius=circle" />
</frame>
```

**Figma variant properties:** `size`, `style`, `radius`

### Step 3: Create Intersection Mapping

**Filter:** Properties that exist in BOTH Figma variants AND component props

**Switch Example:**

```typescript
// Modus Docs MCP says component has:
['size', 'value', 'disabled', 'indeterminate', 'label', 'customClass', 'inputId']

// Figma MCP says design has variants:
['size', 'checked', 'disabled', 'indeterminate', 'type', 'status']

// Intersection (map these):
{
  size: 'size',           // ✅ Both have it
  checked: 'value',       // ✅ Both have it (name differs)
  disabled: 'disabled',   // ✅ Both have it
  indeterminate: 'indeterminate', // ✅ Both have it
  // Skip: type, status (Figma only)
  // Skip: label, customClass (component only, not visual variants)
}
```

**Button Example:**

```typescript
// Modus Docs MCP:
['color', 'size', 'variant', 'shape', 'disabled', 'type', 'customClass']

// Figma MCP:
['size', 'type', 'style', 'radius', 'status', 'label?']

// Intersection:
{
  size: 'size',           // ✅ Both
  style: 'variant',       // ✅ Both (Figma "fill"→"filled", "outline"→"outlined")
  radius: 'shape',        // ✅ Both (Figma "square"→"square", "circle"→"circle")
  // Skip: Figma "type"/"status" (design system semantics, not component props)
  // Skip: component "color" (would need Figma mapping)
  // Skip: component "type" (button/submit - developer sets)
}
```

### Step 4: Create Both Code Connect Files

#### Web Components Version

**File:** `.figma.ts`

```typescript
import figma, { html } from '@figma/code-connect';

figma.connect(
  'FIGMA_URL?node-id=XX-XXXXX',
  {
    props: {
      size: figma.enum('size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }),
      checked: figma.boolean('checked'),
    },
    example: ({ size, checked }) =>
      html`<modus-wc-switch size="${size}" value="${checked}"></modus-wc-switch>`,
    links: [...]
  }
);
```

**Rules:**
- Use `html` tagged template
- No conditionals (parser limitation)
- Standard HTML attribute syntax

#### React Version

**File:** `.figma.tsx`

```typescript
import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'FIGMA_URL?node-id=XX-XXXXX',
  {
    props: {
      size: figma.enum('size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }),
      checked: figma.boolean('checked'),
      disabled: figma.boolean('disabled'),
    },
    example: ({ size, checked, disabled }) => (
      <modus-wc-switch
        size={size}
        value={checked}
        disabled={disabled}
      />
    ),
    links: [...]
  }
);
```

**Rules:**
- Use JSX syntax
- Can include conditionals
- Props use curly braces `{value}`

### 5. Configure TypeScript to Ignore Code Connect Files

**tsconfig.json:**
```json
{
  "exclude": ["node_modules", "**/*.figma.ts", "**/*.figma.tsx"]
}
```

**Critical:** Without this, Stencil will try to compile Code Connect files and fail!

### 6. Publish Both Versions

```bash
export FIGMA_ACCESS_TOKEN="your-token-here"
npm run figma:publish
```

Publishes:
1. Web Components (.figma.ts files)
2. React (.figma.tsx files)

### 7. Verify

**In Figma Dev Mode:**
- See dropdown: **[React ▼] [Web Components]**
- Switch between them
- Each shows correct syntax for that framework
- Links appear and work

## Benefits of Dual MCP Approach

✅ **Accurate Mappings**
- Modus MCP: Know what component actually supports
- Figma MCP: Know what design variants exist
- Map only the intersection

✅ **No Manual Guesswork**
- Both MCPs provide complete data
- Automated validation

✅ **Support All Users**
- React developers get React syntax
- Web Components developers get HTML syntax
- Everyone sees relevant code

✅ **Maintainable**
- When component changes, Modus MCP reflects it
- When design changes, Figma MCP reflects it
- Update mappings based on current state

## MCP Limitations & Workarounds

### Limitation: `get_code_connect_map` Returns Empty

**Issue:**
- Figma MCP's `get_code_connect_map` returns `{}` for org files
- Only works on personal files

**Workaround:**
- ✅ Code Connect still works perfectly in Figma UI
- ✅ Use `npx figma connect parse` to validate locally
- ✅ The limitation doesn't affect end users

### Limitation: Web Components Not in MCP

**Issue:**
- MCP might only expose React Code Connect
- Web Components may not be retrievable via API

**Workaround:**
- ✅ Web Components version works in Figma UI
- ✅ Both React and Web Components show in dropdown
- ✅ MCP limitation is API-only, not user-facing

## Complete Example: Switch Component

**1. Modus Docs MCP Data:**
```json
{
  "properties": [
    { "name": "size", "type": "ModusSize" },
    { "name": "value", "type": "boolean" },
    { "name": "disabled", "type": "boolean" },
    { "name": "indeterminate", "type": "boolean" },
    { "name": "label", "type": "string" },
    { "name": "customClass", "type": "string" }
  ]
}
```

**2. Figma MCP Metadata:**
```xml
<frame id="42:33006" name="_switch">
  <symbol name="size=lg, checked=true, disabled=false, indeterminate=false" />
  <symbol name="size=md, checked=false, disabled=true, indeterminate=false" />
</frame>
```

Figma variants: `size`, `checked`, `disabled`, `indeterminate`

**3. Mapping:**
```typescript
// Intersection:
size → size (direct match)
checked → value (Figma "checked" → Component "value")
disabled → disabled (direct match)
indeterminate → indeterminate (direct match)

// Skip: label, customClass (not in Figma variants)
```

**4. Result:** See `src/components/modus-wc-switch/modus-wc-switch.figma.ts` and `.figma.tsx`

## Completed Components

- ✅ Switch (42-33006)
- ✅ Button (7-3230)
- ✅ Text Input (12574-25763)

## Storybook URL Patterns

- Forms: `/docs/components-forms-[name]--docs`
- General: `/docs/components-[name]--docs`

## Validation Commands

```bash
# Parse locally (see what would be published)
npx figma connect parse
npx figma connect parse --config figma.react.config.json

# Validate without publishing
npm run figma:validate

# Publish both versions
npm run figma:publish

# Unpublish both versions
npm run figma:unpublish
```
