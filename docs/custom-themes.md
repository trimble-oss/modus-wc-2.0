# Offline theme authoring

Do not fork DaisyUI theme objects or copy generated CSS into apps. The
authoritative color source is `src/styles/variables.css` plus per-theme
overrides in `src/styles/global.css`. DaisyUI’s `--p` / `--fallback-p` slots
are routed onto `--modus-wc-color-*` tokens.

## Consumer workflow

1. Install `@trimble-oss/moduswebcomponents`.
2. Run `npx modus-theme init` (writes `modus-theme.config.json`, gitignores
   `modus-theme.generated.css`, adds `postinstall` / `prebuild` hooks).
3. Override public `--modus-wc-*` tokens in the JSON config.
4. Run `npx modus-theme build` (or rely on the lifecycle hooks).
5. Import library CSS, then the generated file:

```css
@import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';
@import './modus-theme.generated.css';
```

6. Set `data-theme="{name}-light"` or `data-theme="{name}-dark"` on `<html>`,
   or pass `{ "theme": "my-theme", "mode": "light" }` to
   `modus-wc-theme-provider`. Custom names are allowed (`ThemeName` is open).

Validate with `npx modus-theme check`. There is a live JSON preview at
`/theme-generator/index.html` in Storybook (import/export JSON only).

## Token contract

Public tokens are listed in `src/theme-cli/token-contract.json` (every
`--modus-wc-*` custom property from `variables.css`). `--tw-*` keys are
internal. Semantic color slots:

| DaisyUI slot      | Token                                                                  |
| ----------------- | ---------------------------------------------------------------------- |
| p / pc            | `--modus-wc-color-primary` / `primary-content`                         |
| s / sc            | `--modus-wc-color-secondary` / `secondary-content`                     |
| a / ac            | `--modus-wc-color-accent` / `accent-content`                           |
| n / nc            | `--modus-wc-color-neutral` / `neutral-content`                         |
| b1 / b2 / b3 / bc | `--modus-wc-color-base-100` / `base-200` / `base-300` / `base-content` |
| in / inc          | `--modus-wc-color-info` / `info-content`                               |
| su / suc          | `--modus-wc-color-success` / `success-content`                         |
| wa / wac          | `--modus-wc-color-warning` / `warning-content`                         |
| er / erc          | `--modus-wc-color-error` / `error-content`                             |

## Rendering paths

Three CSS entry points must agree on those 20 slots:

1. `modus-wc-styles.css` on modern browsers (`--fallback-*` → semantic tokens).
2. `modus-wc-styles.css` on Chrome &lt;111 (generated hex appended after utilities).
3. `modus-wc-variables.css` (routing + per-theme hex, no Tailwind utilities).

`npm run test:theme-parity` resolves var chains for all three.

### Design note: `bc` / base-content

Routing `--fallback-bc` to `--modus-wc-color-base-content` means modern
base-content follows `variables.css` (`#171c1e` / gray-10 in classic light)
instead of the old DaisyUI theme hex (`#252a2e` / trimble-gray). That is
intentional; design should treat gray-10 as the source of truth.

### Legacy simulation

This environment does not ship Chrome &lt;111. To preview fallback colors on a
modern browser:

```bash
MODUS_LEGACY_THEME=1 npx wireit tailwind:build
```

The generated `@supports not (color: oklch(…))` block is inverted so hex
`--fallback-*` wins. Hover/active hex in `tailwind.css` stays authored.

### Known limitation

DaisyUI’s `var(--fallback-p, oklch(var(--p)/1))` form drops Tailwind opacity
modifiers such as `bg-primary/50`. Prefer `--modus-wc-*` tokens. Do not
“fix” this by upgrading DaisyUI solely for that syntax.

## Library contributors

To add a **built-in** theme after design/marketing approval:

1. Add `[data-theme='…']:root` overrides in `src/styles/global.css`.
2. Add DaisyUI chrome (radius, etc.) in `src/styles/themes/*.ts` if needed.
   Do not add `primary-focus` / `secondary-focus` / `accent-focus` /
   `neutral-focus` (DaisyUI 4.12 emits them without `--`).
3. Rebuild; hex fallbacks are generated. Do not hand-edit slot tables.
