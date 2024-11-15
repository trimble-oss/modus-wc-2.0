import { ModusWcBadge as ModusBadge } from '@trimble-cms/modus-wc-react';

export default function ModusBadgeExamples() {
  return (
    <>
      <h3>Badge</h3>
      <div className="grid">
      <div className="grid-row">
          <ModusBadge content="Default"></ModusBadge>
          <ModusBadge color="secondary" content="Secondary"></ModusBadge>
          <ModusBadge color="tertiary" content="Tertiary"></ModusBadge>
          <ModusBadge color="high-contrast" content="High Contrast"></ModusBadge>
          <ModusBadge color="success" content="Success"></ModusBadge>
          <ModusBadge color="warning" content="Warning"></ModusBadge>
          <ModusBadge color="danger" content="Danger"></ModusBadge>
        </div>

        <div className="grid-row">
          <ModusBadge size="sm" content="Small"></ModusBadge>
          <ModusBadge size="md" content="Medium"></ModusBadge>
          <ModusBadge size="lg" content="Large"></ModusBadge>
        </div>

        <div className="grid-row">
          <ModusBadge variant="counter" content="1"></ModusBadge>
          <ModusBadge color="secondary" variant="counter" content="2"></ModusBadge>
          <ModusBadge color="tertiary" variant="counter" content="3"></ModusBadge>
          <ModusBadge color="high-contrast" variant="counter" content="4"></ModusBadge>
          <ModusBadge color="success" variant="counter" content="5"></ModusBadge>
          <ModusBadge color="warning" variant="counter" content="6"></ModusBadge>
          <ModusBadge color="danger" variant="counter" content="7"></ModusBadge>
        </div>

        <div className="grid-row">
          <ModusBadge size="sm" variant="counter" content="1">
            Small&nbsp;
          </ModusBadge>
          <ModusBadge size="md" variant="counter" content="2">
            Medium&nbsp;
          </ModusBadge>
          <ModusBadge size="lg" variant="counter" content="3">
            Large&nbsp;
          </ModusBadge>
        </div>

        <div className="grid-row">
          <ModusBadge variant="text" content="Primary"></ModusBadge>
          <ModusBadge color="secondary" variant="text" content="Secondary"></ModusBadge>
          <ModusBadge color="high-contrast" variant="text" content="High Contrast"></ModusBadge>
          <ModusBadge color="success" variant="text" content="Success"></ModusBadge>
          <ModusBadge color="danger" variant="text" content="Danger"></ModusBadge>
        </div>

        <div className="grid-row">
          <ModusBadge size="sm" variant="text" content="Small"></ModusBadge>
          <ModusBadge size="md" variant="text" content="Medium"></ModusBadge>
          <ModusBadge size="lg" variant="text" content="Large"></ModusBadge>
        </div>
      </div>
    </>
  );
}