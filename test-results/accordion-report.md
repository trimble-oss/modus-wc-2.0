# Accordion Component Test Report

**Component:** `modus-wc-accordion`
**Date:** 2026-03-12
**Status:** ALL PASSED

---

## Cross-Browser Results

| Browser  | Default (play-test) | Migration (smoke-test) | Status |
|----------|--------------------|-----------------------|--------|
| Chromium | PASSED (1492ms)    | PASSED (661ms)        | PASSED |
| Firefox  | PASSED (936ms)     | PASSED (296ms)        | PASSED |
| WebKit   | PASSED (1142ms)    | PASSED (259ms)        | PASSED |

**Total:** 6/6 tests passed | Execution time: 21.17s

---

## Play Function Steps (Default Story)

| # | Step | Chromium | Firefox | WebKit |
|---|------|----------|---------|--------|
| 1 | Verify accordion and collapse items render | PASSED | PASSED | PASSED |
| 2 | Verify all items are initially collapsed | PASSED | PASSED | PASSED |
| 3 | Click first item to expand | PASSED | PASSED | PASSED |
| 4 | Verify first item content is visible | PASSED | PASSED | PASSED |
| 5 | Click first item again to collapse | PASSED | PASSED | PASSED |
| 6 | Click second item to expand | PASSED | PASSED | PASSED |
| 7 | Verify expandedChange event fires | PASSED | PASSED | PASSED |
| 8 | Verify keyboard focusability | PASSED | PASSED | PASSED |
| 9 | Measure expand interaction performance (< 100ms) | PASSED | PASSED | PASSED |
| 10 | Verify accessibility attributes | PASSED | PASSED | PASSED |

---

## Accessibility (Axe)

| Browser  | Default          | Migration        |
|----------|------------------|------------------|
| Chromium | No violations    | No violations    |
| Firefox  | No violations    | No violations    |
| WebKit   | No violations    | No violations    |

---

## Snapshots (Chromium Baseline)

| Type | Default | Migration | Status |
|------|---------|-----------|--------|
| DOM snapshot | PASSED | PASSED | Matched |
| ARIA tree snapshot | PASSED | PASSED | Matched |
| Visual regression (image) | PASSED | PASSED | Matched |
| **Total** | **3** | **3** | **6 passed** |

**Snapshot Files:**
- `src/components/modus-wc-accordion/__snapshots__/modus-wc-accordion.stories.ts.snap`
- `__image_snapshots__/components-accordion--default.png`
- `__image_snapshots__/components-accordion--migration.png`

---

## Commands Used

```bash
# Chromium only
npx test-storybook --url http://localhost:6006 --browsers chromium -- --testPathPattern=Accordion

# All browsers
npx test-storybook --url http://localhost:6006 --browsers chromium firefox webkit -- --testPathPattern=Accordion

# Update snapshots
npx test-storybook --url http://localhost:6006 --updateSnapshot -- --testPathPattern=Accordion
```
