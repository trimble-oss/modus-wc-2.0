import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App assessment control', () => {
  it('shows the Assessment button only on phase-end slides and opens a modal', () => {
    render(<App />);

    expect(screen.queryByRole('button', { name: 'Assessment' })).toBeNull();

    fireEvent.change(screen.getByRole('combobox', { name: 'Jump to slide' }), { target: { value: '1' } });
    fireEvent.click(screen.getByRole('button', { name: 'Assessment' }));

    expect(screen.getByRole('dialog')).toHaveTextContent('Assessment 1');
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('hides the Assessment button on the Playwright detour', () => {
    render(<App />);
    fireEvent.change(screen.getByRole('combobox', { name: 'Jump to slide' }), { target: { value: '7' } });
    expect(screen.getByText('Add Playwright MCP, then scrape')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Assessment' })).toBeNull();
  });
});
