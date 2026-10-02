export function createPopperOptions(
  placement: 'bottom-start' | 'bottom-end' = 'bottom-start',
  offsetY = 8
) {
  const fallbackPlacements =
    placement === 'bottom-end'
      ? (['top-end', 'bottom-start', 'top-start'] as const)
      : (['top-start', 'bottom-end', 'top-end'] as const);
  return {
    placement,
    strategy: 'fixed' as const,
    modifiers: [
      { name: 'offset', options: { offset: [0, offsetY] } },
      {
        name: 'flip',
        options: {
          fallbackPlacements,
        },
      },
    ],
  };
}
