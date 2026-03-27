# Testing Guide — Modus WC 2.0

## Overview

This project uses two layers of testing:

1. **Unit Tests** — Jest + Stencil (`newSpecPage`) — existing `.spec.ts` files
2. **Component Tests** — Storybook play functions + Playwright test-runner — `.stories.ts` files

## Quick Start

### Running Unit Tests (existing)

```bash
npm test                      # Run all spec tests
npm run test:coverage         # Run with coverage report
npm run test:update-snapshot  # Update unit test snapshots
npm run test:watch            # Watch mode
```

### Running Storybook Interaction Tests

**Prerequisite:** Storybook must be running on port 6006.

```bash
# Start Storybook (in a separate terminal)
npm run start

# Run interaction tests (Chromium only — fast)
npm run test:storybook

# Run on all browsers (Chromium + Firefox + WebKit)
npm run test:storybook:all

# Update visual/DOM snapshots
npm run test:storybook:update

# Direct npx commands (more control)
npx test-storybook --url http://localhost:6006 --browsers chromium
npx test-storybook --url http://localhost:6006 --browsers chromium firefox webkit
```

## Writing Play Functions

### What Are Play Functions?

Play functions are interaction tests added directly to Storybook stories. They run in the browser and verify that components behave correctly when users interact with them.

### Basic Structure

```typescript
import { expect, userEvent, within } from '@storybook/test';

export const Default: Story = {
  render: (args) => html`<modus-wc-button>Click</modus-wc-button>`,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Verify component renders', async () => {
      const button = await canvas.findByRole('button');
      await expect(button).toBeInTheDocument();
    });

    await step('Click interaction', async () => {
      const button = await canvas.findByRole('button');
      await userEvent.click(button);
    });
  },
};
```

### Key Rules

1. **Always use `findBy*`** (async queries) — Stencil web components render asynchronously
2. **Custom events** — Use `addEventListener` for Stencil `@Event` testing, not `fn()`
3. **Slots** — Query slotted content in the light DOM via `within(canvasElement)`
4. **Shadow DOM** — Use ARIA roles when possible; use `shadowRoot` for internal elements

### Testing Custom Events

Stencil components emit `CustomEvent` instances (e.g., `buttonClick`, `inputChange`):

```typescript
await step('Verify custom event fires', async () => {
  const button = await canvas.findByRole('button');
  let eventFired = false;

  button.addEventListener(
    'buttonClick',
    () => {
      eventFired = true;
    },
    { once: true }
  );

  await userEvent.click(button);
  await expect(eventFired).toBe(true);
});
```

### Query Priority

Use queries in this order (accessibility-first):

1. `findByRole('button')` — best
2. `findByLabelText('Username')` — labels
3. `findByText('Submit')` — visible text
4. `findByAltText('Avatar')` — images
5. `findByTestId('my-id')` — last resort

## Troubleshooting

### Element Not Found

- Web components render async — use `findBy*` not `getBy*`
- Increase timeout: `findByRole('button', {}, { timeout: 5000 })`
- Check if element is inside Shadow DOM

### Custom Event Not Captured

- Use `addEventListener` with exact Stencil event name (e.g., `buttonClick`)
- Don't use `fn()` — it doesn't capture Stencil custom events automatically

### Storybook Not Starting

```bash
# Check if port 6006 is in use (Windows)
netstat -ano | findstr :6006

# Kill the process using the port
taskkill /PID <pid> /F
```

### Snapshot Mismatch

- If intentional change: `npm run test:storybook:update`
- If not intentional: investigate the component change

## Project Structure

```
modus-wc-2.0/
├── .storybook/
│   ├── main.ts              # Storybook config + addons
│   ├── preview.ts            # Global decorators + themes
│   └── test-runner.ts        # Playwright integration + a11y
├── src/components/
│   └── modus-wc-*/
│       ├── *.tsx             # Component implementation
│       ├── *.scss            # Component styles
│       ├── *.spec.ts         # Unit tests (Jest/Stencil)
│       └── *.stories.ts      # Stories + play functions
├── playwright.config.ts      # Browser matrix config
├── COMPONENT_TEST_MATRIX.md  # Test progress tracking
└── TESTING_GUIDE.md          # This file
```
