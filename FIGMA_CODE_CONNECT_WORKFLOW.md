# Figma Code Connect Workflow

## Overview

We publish Code Connect for **BOTH React and Web Components** to support all developers.

## File Structure Per Component

Each component needs TWO Code Connect files:

```
src/components/modus-wc-switch/
  ├── modus-wc-switch.tsx
  ├── modus-wc-switch.scss
  ├── modus-wc-switch.spec.ts
  ├── modus-wc-switch.stories.ts
  ├── modus-wc-switch.figma.ts    ← Web Components version
  ├── modus-wc-switch.figma.tsx   ← React version
  └── readme.md
```

## Step-by-Step Process

### 1. Get Figma Component Set Node ID

**In Figma:**
- Open component page in Figma
- Click "Dev Mode" (top right)
- Find the **component set frame** (not individual variants)
- Right-click → Copy link
- Extract node-id from URL (format: `XX-XXXXX`)

**Important:** Use the component SET, not individual variants!

**Example:**
- ❌ Variant: `?node-id=42-33029` (single switch variant)
- ✅ Component Set: `?node-id=42-33006` (_switch frame with all variants)

### 2. Get Component Props Using Modus Docs MCP

```typescript
mcp_modus-docs-local_get_modus_component_data('modus-wc-button')
```

This returns:
- All `@Prop()` properties with types and defaults
- Events
- Storybook args
- Usage examples

### 3. Get Figma Variants Using Figma MCP

```typescript
mcp_Figma_get_metadata(fileKey, nodeId)
```

Look at variant names to identify Figma properties:
```
name="size=lg, type=default, checked=true, disabled=false"
```

Figma has these variant properties: `size`, `type`, `checked`, `disabled`

### 4. Map Figma Variants → Component Props

**Only map properties that exist in BOTH:**

| Figma Variant | Component Prop | Map? |
|---------------|----------------|------|
| size | size | ✅ Match |
| checked | value | ✅ Match (name differs) |
| disabled | disabled | ✅ Match |
| type | (none) | ❌ Skip (Figma only) |
| label | label | ❌ Skip (developer sets) |

### 5. Create Web Components Version (.figma.ts)

**File:** `src/components/modus-wc-[name]/modus-wc-[name].figma.ts`

```typescript
import figma, { html } from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/y9H5ucQKBjzI8JLuVrGcb3/Modus-2.0---Atomic-Design-System?node-id=XX-XXXXX',
  {
    props: {
      size: figma.enum('size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
      }),
      checked: figma.boolean('checked'),
    },
    example: ({ size, checked }) =>
      html`<modus-wc-component size="${size}" value="${checked}"></modus-wc-component>`,
    links: [
      {
        name: 'Storybook',
        url: 'https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-[name]--docs',
      },
      {
        name: 'GitHub Source',
        url: 'https://github.com/trimble-oss/modus-wc-2.0/tree/main/src/components/modus-wc-[name]',
      },
    ],
  }
);
```

**Key rules for Web Components:**
- ✅ Import: `import figma, { html } from '@figma/code-connect'`
- ✅ Template: Use `html` tagged template
- ✅ Syntax: Standard HTML attributes
- ❌ No conditionals in templates (HTML parser limitation)

### 6. Create React Version (.figma.tsx)

**File:** `src/components/modus-wc-[name]/modus-wc-[name].figma.tsx`

```typescript
import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/y9H5ucQKBjzI8JLuVrGcb3/Modus-2.0---Atomic-Design-System?node-id=XX-XXXXX',
  {
    props: {
      size: figma.enum('size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
      }),
      checked: figma.boolean('checked'),
      disabled: figma.boolean('disabled'),
    },
    example: ({ size, checked, disabled }) => (
      <modus-wc-component
        size={size}
        value={checked}
        disabled={disabled}
      />
    ),
    links: [
      {
        name: 'Storybook',
        url: 'https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-[name]--docs',
      },
      {
        name: 'GitHub Source',
        url: 'https://github.com/trimble-oss/modus-wc-2.0/tree/main/src/components/modus-wc-[name]',
      },
      {
        name: 'React Integration',
        url: 'https://github.com/trimble-oss/modus-wc-2.0/tree/main/integrations/react',
      },
    ],
  }
);
```

**Key rules for React:**
- ✅ Import: `import React from 'react'; import figma from '@figma/code-connect'`
- ✅ Template: Use JSX `<component prop={value} />`
- ✅ Syntax: React props with curly braces `{size}`
- ✅ Can use conditionals: `disabled={disabled}`

### 7. Publish to Figma

```bash
export FIGMA_ACCESS_TOKEN="your-token-here"
npm run figma:publish
```

This runs:
1. `figma connect publish` (Web Components from figma.config.json)
2. `figma connect publish --config figma.react.config.json` (React)

### 8. Verify in Figma Dev Mode

1. Refresh Figma Dev Mode
2. Select component instance
3. See dropdown with **React** and **Web Components** options
4. Switch between them to see different code syntax
5. Test variants - code should update automatically
6. Click links to Storybook/GitHub

## Configuration Files

### figma.config.json (Web Components)
```json
{
  "codeConnect": {
    "include": ["src/components/**/*.figma.ts", "src/components/**/*.figma.tsx"],
    "exclude": ["**/node_modules/**", "**/__snapshots__/**"]
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/trimble-oss/modus-wc-2.0"
  }
}
```

### figma.react.config.json (React)
```json
{
  "codeConnect": {
    "parser": "react",
    "include": ["src/components/**/*.figma.tsx"],
    "exclude": ["**/node_modules/**", "**/__snapshots__/**"]
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/trimble-oss/modus-wc-2.0"
  }
}
```

### tsconfig.json (Exclude from Build)
```json
{
  "exclude": ["node_modules", "**/*.figma.ts", "**/*.figma.tsx"]
}
```

**Important:** Code Connect files must be excluded from TypeScript/Stencil builds!

## NPM Scripts

```json
{
  "figma:connect": "figma connect",
  "figma:publish": "figma connect publish && figma connect publish --config figma.react.config.json",
  "figma:publish:react": "figma connect publish --config figma.react.config.json",
  "figma:publish:web": "figma connect publish",
  "figma:unpublish": "figma connect unpublish && figma connect unpublish --config figma.react.config.json",
  "figma:validate": "figma connect --dry-run"
}
```

## Syntax Differences

### Web Components (.figma.ts)
```typescript
// Import
import figma, { html } from '@figma/code-connect';

// Example
example: ({ size, checked }) =>
  html`<modus-wc-switch size="${size}" value="${checked}"></modus-wc-switch>`
```

### React (.figma.tsx)
```typescript
// Import  
import React from 'react';
import figma from '@figma/code-connect';

// Example
example: ({ size, checked }) => (
  <modus-wc-switch
    size={size}
    value={checked}
  />
)
```

## MCP Limitations

**Figma MCP `get_code_connect_map`:**
- ✅ Works on personal files
- ❌ Doesn't work on organization/team files
- ❌ Doesn't expose Web Components Code Connect data

**Workaround:**
- Use `npx figma connect parse` to validate locally
- Code Connect works perfectly in Figma UI regardless of MCP limitations

## Troubleshooting

### "not a component or component set" error
→ Using variant node-id. Find the parent component set frame.

### TypeScript build errors on .figma.ts files
→ Add to `tsconfig.json` exclude: `"**/*.figma.ts", "**/*.figma.tsx"`

### Only one version shows in Figma
→ Publish both: `npm run figma:publish`

### MCP returns empty {}
→ Expected for org files. Check in Figma UI instead.

## Component Checklist

- [ ] Get Figma node-id for component set (not variant)
- [ ] Fetch component props from Modus Docs MCP
- [ ] Fetch Figma variants from Figma metadata MCP
- [ ] Create mapping (intersection of both)
- [ ] Create `.figma.ts` (Web Components)
- [ ] Create `.figma.tsx` (React)
- [ ] Test: `npm run figma:validate`
- [ ] Publish: `npm run figma:publish`
- [ ] Verify in Figma Dev Mode (both dropdown options)
- [ ] Update TODO list
