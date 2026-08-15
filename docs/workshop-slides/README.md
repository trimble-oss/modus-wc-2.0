# From an Idea to a Working Prototype

Local workshop materials. No pull request or remote publication is required.

## Open the deck

- Google Slides: upload `zero-to-production-vibe-coder.pptx` to Google Drive, open it with Google Slides, then save it as a Google Slides file.
- Animated local version: open `index.html` through a local web server.

HTML controls:

- Right arrow / Space: next
- Left arrow: previous
- Home / End: first / last
- `N`: speaker notes
- `F`: fullscreen
- Direct links: `#slide-1` through `#slide-51`

## Facilitate

- `RUN-OF-SHOW.md`: exact two-day flow, timing, assessments, Q&A, safety, and recovery.
- `FACILITATOR-GUIDE.md`: slide-by-slide notes.

## Edit

For a one-off edit, change the presentation directly in Google Slides.

To keep PowerPoint, HTML, and Markdown notes synchronized:

1. Edit `slides.mjs`.
2. Install development dependencies: `npm install`.
3. Regenerate: `npm run build`.

`pptxgenjs` is a local build-only dependency. The generated presentation has no runtime package dependency.
