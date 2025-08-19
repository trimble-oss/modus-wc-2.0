let ensurePromise: Promise<void> | null = null;

/**
 * Attempts to create local alias font-families for Modus icons when both
 * outlined and solid CSS are loaded. This enables per-icon switching without
 * requiring the host app to define custom @font-face aliases.
 *
 * - Looks for <link rel="stylesheet"> hrefs containing `modus-outlined/fonts/modus-icons.css`
 *   and `modus-solid/fonts/modus-icons.css`.
 * - Fetches those CSS files, extracts the @font-face src, and injects new
 *   @font-face rules with family names 'modus-icons-outlined' and
 *   'modus-icons-solid' respectively.
 * - No-ops if aliases already injected or if fetch/parse fails.
 */
export function ensureModusIconFontAliases(): Promise<void> {
  if (typeof document === 'undefined') return Promise.resolve();
  if (document.getElementById('modus-icon-font-aliases'))
    return Promise.resolve();
  if (ensurePromise) return ensurePromise;

  ensurePromise = (async () => {
    try {
      const links = Array.from(
        document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')
      );

      const outlinedLink = links.find((l) =>
        /modus-outlined\/fonts\/modus-icons(\.min)?\.css/i.test(l.href)
      );
      const solidLink = links.find((l) =>
        /modus-solid\/fonts\/modus-icons(\.min)?\.css/i.test(l.href)
      );

      const fetchCss = async (
        href?: string
      ): Promise<{ css: string; href: string } | null> => {
        if (!href) return null;
        try {
          const res = await fetch(href, { mode: 'cors' });
          if (!res.ok) return null;
          const css = await res.text();
          return { css, href };
        } catch {
          return null;
        }
      };

      const [outlinedCss, solidCss] = await Promise.all([
        fetchCss(outlinedLink?.href),
        fetchCss(solidLink?.href),
      ]);

      const extractAndResolveSrc = (
        cssAndHref: { css: string; href: string } | null
      ): string | null => {
        if (!cssAndHref) return null;
        const { css, href } = cssAndHref;
        // naive parse of the first @font-face src for family 'modus-icons'
        const re =
          /@font-face[\s\S]*?font-family:\s*['"]modus-icons['"];[\s\S]*?src:\s*([^;]+);/i;
        const match = css.match(re);
        if (!match) return null;
        const srcBlock = match[1].trim();
        // rewrite relative url(...) to absolute using the css file href as base
        const base = href.substring(0, href.lastIndexOf('/') + 1);
        const rewritten = srcBlock.replace(/url\(([^)]+)\)/g, (_m, urlVal) => {
          const raw = String(urlVal)
            .trim()
            .replace(/^['"]/g, '')
            .replace(/['"]$/g, '');
          if (/^(data:|https?:|\/\/)/i.test(raw)) {
            return `url('${raw}')`;
          }
          const abs = new URL(raw, base).toString();
          return `url('${abs}')`;
        });
        return rewritten;
      };

      const outlinedSrc = extractAndResolveSrc(outlinedCss);
      const solidSrc = extractAndResolveSrc(solidCss);

      if (!outlinedSrc && !solidSrc) return;

      const style = document.createElement('style');
      style.id = 'modus-icon-font-aliases';

      const parts: string[] = [];
      if (outlinedSrc) {
        parts.push(
          `@font-face{font-family:'modus-icons-outlined';src:${outlinedSrc};font-style:normal;font-weight:normal;font-display:block;}`
        );
      }
      if (solidSrc) {
        parts.push(
          `@font-face{font-family:'modus-icons-solid';src:${solidSrc};font-style:normal;font-weight:normal;font-display:block;}`
        );
      }
      style.textContent = parts.join('\n');
      document.head.appendChild(style);
    } catch {
      // swallow; aliasing is best-effort
    }
  })();

  return ensurePromise;
}
