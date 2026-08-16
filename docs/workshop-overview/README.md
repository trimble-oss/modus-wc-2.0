# Interactive workshop deck

An 11-slide React presentation for the five-phase Modus AI designer workshop. Slides are visual only; narration lives in `PRESENTER-GUIDE.md`.

The detailed 51-slide facilitator kit remains in `docs/workshop-slides/`.

## Run locally

```bash
cd docs/workshop-overview
npm install
npm run dev
```

Open the URL shown in the terminal (default `http://localhost:5173`).

## Presenter controls

- Click the slide, press Space, or press → to reveal the next step
- Press ← or use **Back** to reverse one reveal
- Use the slide jump control to move between slides
- Animations respect `prefers-reduced-motion`

## Build and test

```bash
npm run build
npm test
```

## Slide map

| Slide | Phase | Topic |
| --- | --- | --- |
| 1 | 1 | Start in the Agents window |
| 2 | 1 | A new layer on top of code + Assessment 1 |
| 3 | 2 | Guide the smart intern |
| 4 | 2 | Why frameworks appear + Assessment 2 |
| 5 | 3 | Rules are persistent instructions |
| 6 | 3 | Skills, MCP, and Figma context |
| 7 | 3 | Complete AI context stack + Assessment 3 |
| 8 | 4 | What Modus provides |
| 9 | 4 | Build with Modus + Assessment 4 |
| 10 | 5 | Folder to repository |
| 11 | 5 | Repository to preview URL + Assessment 5 |

## Edit content

Update slide data in `src/slides/slides.ts` and the matching view in `src/components/slides/`.
