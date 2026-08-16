import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { usePresentation } from '../hooks/usePresentation';
import { getMaxRevealIndex, slides } from '../slides/slides';

describe('usePresentation', () => {
  it('advances one reveal at a time before changing slides', () => {
    const { result } = renderHook(() => usePresentation());
    const firstMax = getMaxRevealIndex(slides[0]!);

    expect(result.current.slideIndex).toBe(0);
    expect(result.current.revealIndex).toBe(0);

    act(() => {
      result.current.advance();
    });

    expect(result.current.slideIndex).toBe(0);
    expect(result.current.revealIndex).toBe(1);

    for (let step = 2; step <= firstMax; step += 1) {
      act(() => {
        result.current.advance();
      });
      expect(result.current.revealIndex).toBe(step);
    }

    act(() => {
      result.current.advance();
    });

    expect(result.current.slideIndex).toBe(1);
    expect(result.current.revealIndex).toBe(0);
  });

  it('retreats across slide boundaries to the previous slide final reveal', () => {
    const { result } = renderHook(() => usePresentation());

    act(() => {
      result.current.goToSlide(1);
    });

    const previousMax = getMaxRevealIndex(slides[0]!);

    act(() => {
      result.current.retreat();
    });

    expect(result.current.slideIndex).toBe(0);
    expect(result.current.revealIndex).toBe(previousMax);
  });

  it('does not advance past the final reveal of the final slide', () => {
    const { result } = renderHook(() => usePresentation());
    const lastIndex = slides.length - 1;
    const lastMax = getMaxRevealIndex(slides[lastIndex]!);

    act(() => {
      result.current.goToSlide(lastIndex);
    });

    for (let step = 0; step <= lastMax + 2; step += 1) {
      act(() => {
        result.current.advance();
      });
    }

    expect(result.current.slideIndex).toBe(lastIndex);
    expect(result.current.revealIndex).toBe(lastMax);
    expect(result.current.canAdvance).toBe(false);
  });
});
