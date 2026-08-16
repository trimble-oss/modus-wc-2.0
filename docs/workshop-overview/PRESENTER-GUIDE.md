# Designing with Agent — presenter guide

The React deck carries the lesson visually. Use this guide for narration, live demos, questions, and assessments. Do not read slide text aloud.

## Presenting the deck

- Run locally with `npm install` and `npm run dev`.
- Click the slide, press Space, or press → to reveal the next step.
- Press ← or use **Back** to reverse one reveal at a time.
- Use the slide jump control to move between the 11 slides.
- Each slide has staged reveals. Finish all reveals on a slide before moving on.

## Slide 1 — Start in the Agents window

**Explain**

Open the Agents window first. Participants do not need to learn the terminal on day one. They describe what they want, Agent builds it, and they ask Agent to open the result.

**Demonstrate**

Type a plain-language prompt like the one on screen. When Agent finishes, ask it to open the page in the browser. Do not open files manually.

**Ask**

What would you ask Agent to open after the first build?

**Sources**

- [Cursor Agent overview](https://cursor.com/docs/agent/overview)
- [Cursor Browser tool](https://cursor.com/docs/agent/tools/browser)

## Slide 2 — A new layer on top of code

**Explain**

Walk through the timeline: machine code, languages, IDEs, then natural-language direction with Agent. The important shift is that participants direct outcomes instead of typing implementation details. Code still exists underneath.

**Assessment 1**

Create a basic web page in the workshop folder and ask Agent to open it.

**Ask**

What changed when we moved from writing code to describing outcomes?

**Sources**

- [Prompting Is a Design Act — Smashing Magazine](https://www.smashingmagazine.com/2025/08/prompting-design-act-brief-guide-iterate-ai/)

## Slide 3 — Guide the smart intern

**Explain**

Agent is like a very smart intern: broad knowledge, fast execution, but it still needs a guide. People get what they ask for, not always what they want. Introduce the structured prompt fields.

**Demonstrate**

Take a vague request and rewrite it with goal, audience, context, requirements, and success.

**Ask**

Which field was missing from your first prompt?

**Sources**

- [Cursor Agent overview](https://cursor.com/docs/agent/overview)
- [OpenAI prompt engineering guide](https://platform.openai.com/docs/guides/prompt-engineering)

## Slide 4 — Why frameworks appear

**Explain**

Once the product must remember choices and reuse UI, plain pages are not enough. Introduce component, state, event, and data flow without teaching syntax. Standardize on React as the workshop vehicle.

**Assessment 2**

Create a richer React app with at least one interactive state change.

**Ask**

What does this screen need to remember after the user acts?

**Sources**

- [React docs — Describing the UI](https://react.dev/learn/describing-the-ui)

## Slide 5 — Rules are persistent instructions

**Explain**

A prompt is one-time guidance. Rules are project memory that should apply repeatedly. Show where rules live in Cursor and give examples that match the workshop standards.

**Demonstrate**

Open the project rules page or a sample rule file without reading code line by line.

**Ask**

Which instruction should become a rule because it will matter on every build?

**Sources**

- [Cursor Rules](https://cursor.com/docs/context/rules)

## Slide 6 — Skills, MCP, and Figma context

**Explain**

Skills are playbooks for a kind of task. MCP connects Agent to live tools and information. Figma MCP provides structured design context, not just a screenshot.

**Demonstrate**

Show one skill entry and one MCP connection. If available, paste a Figma selection link into Agent.

**Ask**

Is this missing information a workflow, a standard, or a fact to look up?

**Sources**

- [Cursor Skills](https://cursor.com/docs/context/skills)
- [Cursor MCP](https://cursor.com/docs/context/mcp)
- [Figma MCP in Cursor](https://help.figma.com/hc/en-us/articles/39889260656407-Cursor-and-Figma-Set-up-the-MCP-server)

## Slide 7 — The complete AI context stack

**Explain**

Combine prompt, rules, skills, and MCP/Figma into one build flow. This is the structure Agent needs in the same way a framework gives code structure.

**Assessment 3**

Connect the workshop context and create an app in the shared workspace folder.

**Ask**

Which layer was missing from your first attempt?

**Sources**

- [Modus AI](https://modus.trimble.com/modus-ai)

## Slide 8 — What Modus provides

**Explain**

Modus is the shared product language: foundations, components, patterns, templates, plus AI rules, skills, and docs MCP.

**Demonstrate**

Open the Modus AI setup pages and show one component in Storybook or docs.

**Ask**

Which Modus building block is the best starting point for this product?

**Sources**

- [Modus AI](https://modus.trimble.com/modus-ai)
- [Modus Cursor rules](https://modus.trimble.com/modus-ai/rules/cursor)
- [Modus Cursor skills](https://modus.trimble.com/modus-ai/skills/cursor)

## Slide 9 — Build with Modus, not beside it

**Explain**

Generic Agent output often invents a parallel design system. Start from Modus and verify behavior in the browser, not just appearance.

**Assessment 4**

Rebuild or extend the app using Modus components and Modus AI resources.

**Ask**

Are we solving a product gap or rebuilding something Modus already provides?

**Sources**

- [Modus accessibility overview](https://modus.trimble.com/foundations/accessibility/overview)

## Slide 10 — From folder to repository

**Explain**

Everything so far lives in folders inside one workshop workspace. The next step is making the work shareable through GitHub. Product and Design need access and a way to run or review. Engineering needs repo access and deployment support when previews are required.

**Demonstrate**

Show the local folder, then the GitHub repository, then collaborator permissions.

**Ask**

What does a product person need that is different from what engineering needs?

**Sources**

- [GitHub: About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)
- [GitHub: Managing access](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-permissions)

## Slide 11 — From repository to preview URL

**Explain**

Share the repository link, explain how to run locally, and introduce preview options. GitHub Pages works well for static sites on public repositories. Private GitHub Pages visibility requires GitHub Enterprise Cloud. If the org cannot publish a free preview, ask Engineering to set up Vercel, Netlify, or an internal preview pipeline.

**Assessment 5**

Publish the repository and provide repo link, local run steps, and preview URL if available.

**Ask**

Could a non-builder open this work and understand what to try?

**Sources**

- [GitHub Pages](https://docs.github.com/en/pages)
- [GitHub Pages visibility](https://docs.github.com/en/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)
