import { ModusWcBadge as ModusBadge } from "@trimble-cms/modus-wc-react";

export default function ModusBadgeExamples() {
	return (
		<>
			<h3>Badge</h3>
			<div className="grid">
				<div className="grid-row">
					<ModusBadge aria-label="Badge" content="Default" />
					<ModusBadge aria-label="Badge" color="secondary" content="Secondary" />
					<ModusBadge aria-label="Badge" color="tertiary" content="Tertiary" />
					<ModusBadge aria-label="Badge" color="high-contrast" content="High Contrast" />
					<ModusBadge aria-label="Badge" color="success" content="Success" />
					<ModusBadge aria-label="Badge" color="warning" content="Warning" />
					<ModusBadge aria-label="Badge" color="danger" content="Danger" />
				</div>

				<div className="grid-row">
					<ModusBadge aria-label="Badge" size="sm" content="Small" />
					<ModusBadge aria-label="Badge" size="md" content="Medium" />
					<ModusBadge aria-label="Badge" size="lg" content="Large" />
				</div>

				<div className="grid-row">
					<ModusBadge aria-label="Badge" variant="counter" content="1" />
					<ModusBadge aria-label="Badge" color="secondary" variant="counter" content="2" />
					<ModusBadge aria-label="Badge" color="tertiary" variant="counter" content="3" />
					<ModusBadge aria-label="Badge" color="high-contrast" variant="counter" content="4" />
					<ModusBadge aria-label="Badge" color="success" variant="counter" content="5" />
					<ModusBadge aria-label="Badge" color="warning" variant="counter" content="6" />
					<ModusBadge aria-label="Badge" color="danger" variant="counter" content="7" />
				</div>

				<div className="grid-row">
					<ModusBadge aria-label="Badge" size="sm" variant="counter" content="1">
						Small&nbsp;
					</ModusBadge>
					<ModusBadge aria-label="Badge" size="md" variant="counter" content="1">
						Medium&nbsp;
					</ModusBadge>
					<ModusBadge aria-label="Badge" size="lg" variant="counter" content="1">
						Large&nbsp;
					</ModusBadge>
					<ModusBadge aria-label="Badge" size="lg" variant="counter" content="22" />
					<ModusBadge aria-label="Badge" size="lg" variant="counter" content="333" />
					<ModusBadge aria-label="Badge" size="lg" variant="counter" content="4444" />
				</div>

				<div className="grid-row">
					<ModusBadge aria-label="Badge" variant="text" content="Primary" />
					<ModusBadge aria-label="Badge" color="secondary" variant="text" content="Secondary" />
					<ModusBadge aria-label="Badge" color="tertiary" variant="text" content="Tertiary" />
					<ModusBadge aria-label="Badge" color="high-contrast" variant="text" content="High Contrast" />
					<ModusBadge aria-label="Badge" color="success" variant="text" content="Success" />
					<ModusBadge aria-label="Badge" color="warning" variant="text" content="Warning" />
					<ModusBadge aria-label="Badge" color="danger" variant="text" content="Danger" />
				</div>

				<div className="grid-row">
					<ModusBadge aria-label="Badge" size="sm" variant="text" content="Small" />
					<ModusBadge aria-label="Badge" size="md" variant="text" content="Medium" />
					<ModusBadge aria-label="Badge" size="lg" variant="text" content="Large" />
				</div>
			</div>
		</>
	);
}
