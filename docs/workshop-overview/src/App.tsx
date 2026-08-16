import type { MouseEvent } from 'react';
import { SlideRenderer } from './components/SlideRenderer';
import { PresenterControls } from './components/PresenterControls';
import { usePresentation } from './hooks/usePresentation';

export default function App() {
  const {
    slide,
    slideIndex,
    totalSlides,
    canAdvance,
    canRetreat,
    progressLabel,
    revealIndex,
    advance,
    retreat,
    goToSlide,
  } = usePresentation();

  const handleStageClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('a, button, select, input')) {
      return;
    }

    advance();
  };

  return (
    <div className="app">
      <main className="stage" onClick={handleStageClick} role="presentation">
        <SlideRenderer key={slide.id} slide={slide} revealIndex={revealIndex} />
      </main>
      <PresenterControls
        progressLabel={progressLabel}
        slideIndex={slideIndex}
        totalSlides={totalSlides}
        canAdvance={canAdvance}
        canRetreat={canRetreat}
        onAdvance={advance}
        onRetreat={retreat}
        onGoToSlide={goToSlide}
      />
    </div>
  );
}
