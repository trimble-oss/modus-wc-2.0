import { useCallback, useEffect, useMemo, useState } from 'react';
import { getMaxRevealIndex, slides, totalSlides } from '../slides/slides';
import type { Slide } from '../types/slides';

export interface PresentationState {
  slideIndex: number;
  revealIndex: number;
  slide: Slide;
  totalSlides: number;
  maxRevealIndex: number;
  canAdvance: boolean;
  canRetreat: boolean;
  progressLabel: string;
}

interface NavState {
  slideIndex: number;
  revealIndex: number;
}

export function usePresentation(paused = false): PresentationState & {
  advance: () => void;
  retreat: () => void;
  goToSlide: (index: number) => void;
} {
  const [nav, setNav] = useState<NavState>({ slideIndex: 0, revealIndex: 0 });

  const slide = slides[nav.slideIndex]!;
  const maxRevealIndex = getMaxRevealIndex(slide);
  const canRetreat = nav.slideIndex > 0 || nav.revealIndex > 0;
  const canAdvance = nav.slideIndex < totalSlides - 1 || nav.revealIndex < maxRevealIndex;

  const advance = useCallback(() => {
    setNav((current) => {
      const activeSlide = slides[current.slideIndex]!;
      const activeMax = getMaxRevealIndex(activeSlide);

      if (current.revealIndex < activeMax) {
        return { ...current, revealIndex: current.revealIndex + 1 };
      }

      if (current.slideIndex < totalSlides - 1) {
        return { slideIndex: current.slideIndex + 1, revealIndex: 0 };
      }

      return current;
    });
  }, []);

  const retreat = useCallback(() => {
    setNav((current) => {
      if (current.revealIndex > 0) {
        return { ...current, revealIndex: current.revealIndex - 1 };
      }

      if (current.slideIndex > 0) {
        const previous = slides[current.slideIndex - 1]!;
        return {
          slideIndex: current.slideIndex - 1,
          revealIndex: getMaxRevealIndex(previous),
        };
      }

      return current;
    });
  }, []);

  const goToSlide = useCallback((index: number) => {
    const bounded = Math.max(0, Math.min(index, totalSlides - 1));
    setNav({ slideIndex: bounded, revealIndex: 0 });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (paused) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (target?.closest('a, button, input, select, textarea')) {
        return;
      }

      if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') {
        event.preventDefault();
        advance();
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        retreat();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [advance, retreat, paused]);

  const progressLabel = useMemo(
    () => `Slide ${nav.slideIndex + 1}/${totalSlides} · Step ${nav.revealIndex + 1}/${maxRevealIndex + 1}`,
    [nav.slideIndex, nav.revealIndex, maxRevealIndex],
  );

  return {
    slideIndex: nav.slideIndex,
    revealIndex: nav.revealIndex,
    slide,
    totalSlides,
    maxRevealIndex,
    canAdvance,
    canRetreat,
    progressLabel,
    advance,
    retreat,
    goToSlide,
  };
}
