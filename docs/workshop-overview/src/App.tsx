import { useState, type MouseEvent } from 'react';
import { AssessmentModal } from './components/AssessmentModal';
import { PresenterControls } from './components/PresenterControls';
import { SlideRenderer } from './components/SlideRenderer';
import { usePresentation } from './hooks/usePresentation';
import { slideHasAssessment } from './types/slides';

export default function App() {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
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
  } = usePresentation(assessmentOpen);

  const handleStageClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('a, button, select, input, .modal, .modal-backdrop')) {
      return;
    }

    advance();
  };

  const handleGoToSlide = (index: number) => {
    setAssessmentOpen(false);
    goToSlide(index);
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
        hasAssessment={slideHasAssessment(slide)}
        onAdvance={advance}
        onRetreat={retreat}
        onGoToSlide={handleGoToSlide}
        onOpenAssessment={() => setAssessmentOpen(true)}
      />
      {slide.assessment ? (
        <AssessmentModal
          assessment={slide.assessment}
          open={assessmentOpen}
          onClose={() => setAssessmentOpen(false)}
        />
      ) : null}
    </div>
  );
}
