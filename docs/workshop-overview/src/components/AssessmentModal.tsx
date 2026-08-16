import { useEffect } from 'react';
import type { Assessment } from '../types/slides';

interface AssessmentModalProps {
  assessment: Assessment;
  open: boolean;
  onClose: () => void;
}

export function AssessmentModal({ assessment, open, onClose }: AssessmentModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="assessment-title"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="modal__label" id="assessment-title">
          {assessment.title}
        </p>
        <p className="modal__task">{assessment.task}</p>
        <p className="modal__success">
          <strong>Success:</strong> {assessment.success}
        </p>
        <button type="button" className="modal__close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
