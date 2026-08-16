# Visual teaching deck

A 10-slide content-first teaching deck. The visible slides use diagrams, examples, state changes, comparisons, and original meme-style panels. Presenter narration stays in `PRESENTER-GUIDE.md`.

The detailed 51-slide workshop kit remains in `docs/workshop-slides/`.

The PowerPoint contains 26 staged build slides for 10 logical lessons. Advance normally during presentation: each click reveals the next part. This duplicate-slide technique survives Google Slides import more reliably than PowerPoint object animations.

## Open

- Google Slides: upload `workshop-overview.pptx`, then open with Google Slides.
- HTML: open `index.html` in a browser.
- Presenter notes and sources: open `PRESENTER-GUIDE.md`.

## Edit

1. Change `slides.mjs`.
2. Run `npm install` and `npm run build`.

All diagrams are generated from local shapes and text. Two original editorial illustrations are stored in `assets/`. No third-party meme or stock-image assets are embedded.
