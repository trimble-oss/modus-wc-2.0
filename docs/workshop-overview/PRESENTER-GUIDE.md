# Designing with Agent — presenter guide

The slides carry the lesson visually. Use this guide for the explanation, live examples, transitions, and questions. Do not read the slide text aloud.

## 1. Natural language is a design brief

**Explain**

A short prompt can produce a page, but it cannot recover decisions that were never stated. Designers already know how to provide the missing context: who is involved, what they are trying to do, where the experience happens, how it should behave, and what success looks like.

The example deliberately avoids visual styling. “Blue cards with a large heading” describes an appearance. “A field supervisor must find a delayed job before the stand-up” describes a product situation. Agent needs both eventually, but the situation comes first.

**Demonstrate**

Ask Agent for “a dashboard,” look at the result, then add the five brief fields shown on the slide. Compare the two outputs.

**Ask**

Which of the five fields would change your design most?

**Source**

- [Prompting Is a Design Act — Smashing Magazine](https://www.smashingmagazine.com/2025/08/prompting-design-act-brief-guide-iterate-ai/)

## 2. The first prompt is the start, not the finish

**Explain**

Prompting is not a one-shot contest. The reusable skill is the loop: describe, build, preview, observe, revise. “Observe” is where design expertise enters. Name one visible issue, ask for one bounded change, and check again.

The meme is the difference between novelty and usefulness. The first result proves that Agent can generate. Later results prove that the designer can direct.

**Demonstrate**

Show a first result. State one observation without prescribing code: “The primary action is hard to find because every element has the same emphasis.” Ask Agent to correct only that hierarchy.

**Ask**

What did you notice before you decided what to change?

**Source**

- [Cursor Agent overview](https://cursor.com/docs/agent/overview)

## 3. HTML gives meaning. CSS gives direction.

**Explain**

HTML is the structure and meaning of the page: this is a heading, this is a group of filters, this is a list of results, this is the primary action. CSS controls how that meaning is communicated through hierarchy, spacing, color, and alignment.

Participants do not need to write either language. They need enough vocabulary to diagnose the output: “The structure is wrong” and “The visual hierarchy is weak” are different requests.

**Demonstrate**

Advance through the HTML regions, then point to the CSS decisions. Ask Agent to preserve the structure while changing only hierarchy.

**Ask**

Is the current problem about what the page contains, or how it communicates?

**Source**

- [MDN: Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [MDN: CSS styling basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)

## 4. A screenshot is one moment

**Explain**

Figma often shows several frames because each frame documents a moment. The running product is one interface moving between those moments. State is simply what the interface needs to remember right now.

Use the five cards as a prompt checklist. Not every feature needs every state, but “success only” is rarely enough. Recovery matters: after an error, what can the person do next?

**Demonstrate**

Use one panel or list. Trigger loading, empty, error, and success in Preview. Do not open source code.

**Ask**

Which missing state would hurt the user most?

## 5. Why does a framework appear?

**Explain**

Once a page must reuse parts and respond to people, Agent needs a framework. A component is a reusable part. State is remembered information. An event is something that happened. The response is the visible change.

React, Angular, and Vue are implementation vehicles. The workshop uses React for one consistent workflow, not because designers need to become React developers.

**Demonstrate**

Point to one filter component. Change the selected risk. Show the same list responding without creating a second page.

**Ask**

What does this screen need to remember after the user acts?

## 6. A Figma link carries structured context

**Explain**

A screenshot gives Agent pixels. Figma MCP can provide structured design context such as components, variables, layout information, and assets. The link still does not explain the user goal or missing states; the designer supplies those.

The preferred Cursor setup is the official Figma plugin with the remote MCP server. Paste a link to the selection, not only a screenshot.

**Demonstrate**

In Figma, copy a link to one selected frame. Paste it into Agent with the user goal and required states. Ask Agent to build, open Preview, and compare.

**Ask**

What information exists in the design file, and what still exists only in your head?

**Sources**

- [Figma: Set up the MCP server in Cursor](https://help.figma.com/hc/en-us/articles/39889260656407-Cursor-and-Figma-Set-up-the-MCP-server)
- [Figma MCP server guide](https://github.com/figma/mcp-server-guide)

## 7. Rules, skills, and MCP do different jobs

**Explain**

Rules are standards that should apply repeatedly. Skills are playbooks for a kind of task. MCP is a connection to tools or current information. A rule can say “use Modus”; a skill can describe how to build a Modus form; MCP can retrieve the current component contract.

These tools reduce guessing, but they do not decide the product goal. A well-connected Agent can still build the wrong thing from a weak brief.

**Demonstrate**

Open the Modus one-step setup page. Show the Rules and Skills pages without opening their source files. Ask Agent a component question that requires Modus Docs MCP.

**Ask**

Is this missing information a standard, a workflow, or a fact we need to look up?

**Sources**

- [Modus AI](https://modus.trimble.com/modus-ai)
- [Modus Cursor rules](https://modus.trimble.com/modus-ai/rules/cursor)
- [Modus Cursor skills](https://modus.trimble.com/modus-ai/skills/cursor)

## 8. Do not invent a second design system

**Explain**

Generic Agent output often creates controls, spacing, colors, and interactions that look plausible but do not belong to the product. That creates a parallel design system for Engineering to remove later.

Start with the largest useful Modus building block: template, pattern, component, then foundation. Change only what the product genuinely needs. The meme is intentionally gentle: Agent is not wrong to invent when it was never told what already exists.

**Demonstrate**

Show one generic button or modal, then the Modus equivalent. Compare behavior and states, not only appearance.

**Ask**

Are we solving a product gap or rebuilding an existing Modus decision?

**Source**

- [Modus AI](https://modus.trimble.com/modus-ai)

## 9. “It works” is a claim. The browser is evidence.

**Explain**

Agent can report that the task is done, but the running interface is the evidence. Complete the task. Try relevant states. Resize. Use the keyboard. Add realistic content. Re-test the earlier flow after every meaningful repair.

Accessibility is not a final polish pass. Keyboard, focus, labels, hierarchy, and error recovery are part of the interaction.

**Demonstrate**

Ask Agent to open the app in Browser and perform the checklist. Watch the interaction yourself. Record one failure and one repair.

**Ask**

What evidence would convince someone who did not watch us build it?

**Sources**

- [Cursor Agent overview: Browser and checkpoints](https://cursor.com/docs/agent/overview)
- [Modus accessibility overview](https://modus.trimble.com/foundations/accessibility/overview)

## 10. From Figma to a prototype people can try

**Explain**

The end-to-end path is Figma context into Agent, Modus as the shared product language, Browser as evidence, GitHub as the saved project, and a live URL for review.

The smaller loop continues at every stage: describe, build, look, try, adjust, check, share. The prototype is valuable because it turns a product opinion into behavior that people can experience.

**Demonstrate**

Open the live URL on another device. Complete the primary task. Then show the Figma, repository, and preview links together.

**Ask**

Which product decision became easier once people could try it?

**Sources**

- [Modus AI PDLC Playbook](https://modus.trimble.com/modus-ai/ai-pdlc-playbook)
- [GitHub: About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)

## Visual and licensing notes

- All diagrams and meme-style panels in this deck are original shapes and text generated by the local deck generator.
- No third-party meme templates or stock images are embedded.
- Product names are used for instruction; official documentation links are listed above.
