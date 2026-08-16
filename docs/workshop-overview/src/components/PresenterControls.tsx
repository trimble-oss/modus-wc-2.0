interface PresenterControlsProps {
  progressLabel: string;
  slideIndex: number;
  totalSlides: number;
  canAdvance: boolean;
  canRetreat: boolean;
  onAdvance: () => void;
  onRetreat: () => void;
  onGoToSlide: (index: number) => void;
}

export function PresenterControls({
  progressLabel,
  slideIndex,
  totalSlides,
  canAdvance,
  canRetreat,
  onAdvance,
  onRetreat,
  onGoToSlide,
}: PresenterControlsProps) {
  return (
    <div className="controls" role="toolbar" aria-label="Presentation controls">
      <div className="controls__progress">
        <span>{progressLabel}</span>
        <span className="controls__hint">Click, Space, or → to reveal next · ← to go back</span>
      </div>
      <div className="controls__actions">
        <button type="button" onClick={onRetreat} disabled={!canRetreat} aria-label="Previous step">
          Back
        </button>
        <label className="controls__jump">
          Jump
          <select
            aria-label="Jump to slide"
            value={slideIndex}
            onChange={(event) => onGoToSlide(Number(event.target.value))}
          >
            {Array.from({ length: totalSlides }, (_, index) => (
              <option key={index} value={index}>
                Slide {index + 1}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={onAdvance} disabled={!canAdvance} aria-label="Next step">
          Next
        </button>
      </div>
    </div>
  );
}
