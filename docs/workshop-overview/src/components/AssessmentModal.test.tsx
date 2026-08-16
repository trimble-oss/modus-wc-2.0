import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AssessmentModal } from './AssessmentModal';

const assessment = {
  title: 'Assessment 1',
  task: 'Create a basic web page.',
  success: 'The page opens in the browser.',
};

describe('AssessmentModal', () => {
  it('does not render when closed', () => {
    render(<AssessmentModal assessment={assessment} open={false} onClose={vi.fn()} />);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('opens the task and closes from the button, backdrop, or Escape', () => {
    const onClose = vi.fn();
    const { rerender } = render(<AssessmentModal assessment={assessment} open onClose={onClose} />);

    expect(screen.getByRole('dialog')).toHaveTextContent('Create a basic web page.');
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalledTimes(1);

    rerender(<AssessmentModal assessment={assessment} open onClose={onClose} />);
    fireEvent.click(screen.getByRole('presentation'));
    expect(onClose).toHaveBeenCalledTimes(2);

    rerender(<AssessmentModal assessment={assessment} open onClose={onClose} />);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(3);
  });
});
