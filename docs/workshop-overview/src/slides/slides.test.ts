import { describe, expect, it } from 'vitest';
import { getMaxRevealIndex, slides, totalSlides } from './slides';
import { slideHasAssessment } from '../types/slides';

describe('slides curriculum', () => {
  it('contains 12 slides including the Playwright detour before Phase 4', () => {
    expect(totalSlides).toBe(12);
    expect(slides.map((slide) => slide.kind)).toEqual([
      'agent-start',
      'intent-layer',
      'smart-intern',
      'frameworks',
      'rules',
      'skills-mcp',
      'context-stack',
      'scrape-mcp',
      'modus-overview',
      'modus-build',
      'github-repo',
      'github-preview',
    ]);
    expect(slides[7]?.phaseLabel).toBe('Detour');
  });

  it('ends each phase with an assessment and keeps the detour assessment-free', () => {
    expect(slides.filter(slideHasAssessment).map((slide) => slide.id)).toEqual([
      'phase-1-intent',
      'phase-2-frameworks',
      'phase-3-stack',
      'phase-4-build',
      'phase-5-preview',
    ]);
    expect(slideHasAssessment(slides[7]!)).toBe(false);
  });

  it('puts official URLs on Figma, Playwright, and Modus objects', () => {
    const skills = slides.find((slide) => slide.kind === 'skills-mcp');
    const scrape = slides.find((slide) => slide.kind === 'scrape-mcp');
    const modus = slides.find((slide) => slide.kind === 'modus-overview');

    expect(skills?.kind === 'skills-mcp' && skills.figma.href).toBe('https://www.figma.com/mcp-catalog/');
    expect(scrape?.kind === 'scrape-mcp' && scrape.playwright.href).toBe(
      'https://playwright.dev/docs/getting-started-mcp',
    );
    expect(modus?.kind === 'modus-overview' && modus.modus.href).toBe('https://modus.trimble.com/modus-ai');
  });

  it('keeps reveal counts aligned', () => {
    slides.forEach((slide) => {
      expect(slide.revealCount).toBeGreaterThan(0);
      expect(getMaxRevealIndex(slide)).toBe(slide.revealCount - 1);
    });
  });
});
