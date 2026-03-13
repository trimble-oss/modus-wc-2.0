# Accordion Component Test Report

**Component:** `modus-wc-Accordion`
**Date:** 2026-03-13
**Status:** ALL PASSED

---

## Cross-Browser Results

| Browser | play-test | smoke-test | Status |
|---------|--------|--------|--------|
| Chromium | PASSED (1380ms) | PASSED (542ms) | PASSED |
| Firefox | PASSED (992ms) | PASSED (262ms) | PASSED |
| WebKit | PASSED (1001ms) | PASSED (180ms) | PASSED |

**Total:** 6/6 passed | 0/6 failed | Execution time: 20.16s

---

## Accessibility (Axe)

| Browser | Status |
|---------|--------|
| Chromium | No violations |
| Firefox | No violations |
| WebKit | No violations |

---

## Snapshots

| Metric | Count |
|--------|-------|
| Matched | 6 |
| Failed | 0 |
| Total | 6 |

---

## Command Used

```bash
npx test-storybook --url http://localhost:6006 --verbose --browsers chromium firefox webkit --json --outputFile ./test-results/accordion-report.json -- --testPathPattern="Accordion"
```
