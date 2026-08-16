import { describe, expect, it } from 'vitest';
import { getMaxRevealIndex, slides, totalSlides } from '../slides/slides';
import { slideHasAssessment } from '../types/slides';

describe('slides curriculum', () => {
  it('contains 11 slides across five phases', () => {
    expect(totalSlides).toBe(11);
    expect(slides).toHaveLength(11);
    expect(slides.map((slide) => slide.phase)).toEqual([1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5]);
  });

  it('ends each phase with an assessment on the final slide of that phase', () => {
    const phaseEndSlides = [1, 3, 6, 8, 10];

    phaseEndSlides.forEach((index) => {
      expect(slideHasAssessment(slides[index]!)).toBe(true);
    });
  });

  it('keeps reveal counts aligned with each slide maximum index', () => {
    slides.forEach((slide) => {
      expect(slide.revealCount).toBeGreaterThan(0);
      expect(getMaxRevealIndex(slide)).toBe(slide.revealCount - 1);
    });
  });
});
