import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y } from 'axe-playwright';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

/**
 * Normalizes HTML for deterministic snapshots across browsers:
 * - Replaces dynamic IDs with stable placeholders
 * - Normalizes empty class attributes (WebKit vs Chromium difference)
 */
function normalizeHtml(html: string): string {
  const idMap = new Map<string, string>();
  let counter = 0;

  let normalized = html.replace(
    /(?:id|aria-labelledby|for)="([^"]+)"/g,
    (match, id) => {
      if (!idMap.has(id)) {
        idMap.set(id, `stable-id-${counter++}`);
      }
      return match.replace(id, idMap.get(id)!);
    }
  );

  // Normalize empty class attributes across browsers
  normalized = normalized.replace(/ class(?:="")?(?=[\s>])/g, '');

  return normalized;
}

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },

  async postVisit(page, context) {
    const browserName = (page.context().browser()?.browserType().name()) ?? 'chromium';

    // 1. Accessibility testing (Axe) — all browsers
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });

    // Snapshots only on Chromium (cross-browser rendering differences cause false failures)
    if (browserName === 'chromium') {
      expect.extend({ toMatchImageSnapshot });

      // 2. DOM snapshot (with normalized IDs)
      const elementHandler = await page.$('#storybook-root');
      if (elementHandler) {
        const innerHTML = await elementHandler.innerHTML();
        expect(normalizeHtml(innerHTML)).toMatchSnapshot();
      }

      // 3. ARIA snapshot (with normalized labels)
      const ariaTree = await page.evaluate(() => {
        const root = document.querySelector('#storybook-root');
        if (!root) return null;

        const idMap = new Map<string, string>();
        let counter = 0;

        const stableId = (id: string): string => {
          if (!idMap.has(id)) {
            idMap.set(id, `stable-id-${counter++}`);
          }
          return idMap.get(id)!;
        };

        const getAriaInfo = (el: Element): object | null => {
          const role = el.getAttribute('role') || el.tagName.toLowerCase();
          let label =
            el.getAttribute('aria-label') ||
            el.getAttribute('aria-labelledby') ||
            '';

          if (el.getAttribute('aria-labelledby')) {
            label = stableId(label);
          }

          const children = Array.from(el.children)
            .map(getAriaInfo)
            .filter(Boolean);

          return {
            role,
            ...(label && { label }),
            ...(children.length > 0 && { children }),
          };
        };

        return getAriaInfo(root);
      });
      expect(ariaTree).toMatchSnapshot();

      // 4. Visual regression snapshot (image)
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot({
        customSnapshotsDir: `${process.cwd()}/__image_snapshots__`,
        customSnapshotIdentifier: context.id,
        failureThreshold: 0.03,
        failureThresholdType: 'percent',
      });
    }
  },
};

export default config;
