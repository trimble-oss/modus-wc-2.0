import { ModusWcBadge as ModusBadge } from "@trimble-oss/moduswebcomponents-react";

export default function ModusBadgeExamples() {
	return (
		<>
			<h3>Badge</h3>
			<div className="grid">
				<div className="grid-row">
					Filled
					<ModusBadge aria-label="Badge">Default</ModusBadge>
					<ModusBadge aria-label="Badge" color="secondary">Secondary</ModusBadge>
					<ModusBadge aria-label="Badge" color="tertiary">Tertiary</ModusBadge>
					<ModusBadge aria-label="Badge" color="high-contrast">High Contrast</ModusBadge>
					<ModusBadge aria-label="Badge" color="success">Success</ModusBadge>
					<ModusBadge aria-label="Badge" color="warning">Warning</ModusBadge>
					<ModusBadge aria-label="Badge" color="danger">Danger</ModusBadge>
				</div>

				<div className="grid-row">
					Filled Sizes
					<ModusBadge aria-label="Badge" size="sm">Small</ModusBadge>
					<ModusBadge aria-label="Badge" size="md">Medium</ModusBadge>
					<ModusBadge aria-label="Badge" size="lg">Large</ModusBadge>
				</div>

				<div className="grid-row">
					Counter
					<ModusBadge aria-label="Badge" variant="counter">1</ModusBadge>
					<ModusBadge aria-label="Badge" color="secondary" variant="counter">2</ModusBadge>
					<ModusBadge aria-label="Badge" color="tertiary" variant="counter">3</ModusBadge>
					<ModusBadge aria-label="Badge" color="high-contrast" variant="counter">4</ModusBadge>
					<ModusBadge aria-label="Badge" color="success" variant="counter">5</ModusBadge>
					<ModusBadge aria-label="Badge" color="warning" variant="counter">6</ModusBadge>
					<ModusBadge aria-label="Badge" color="danger" variant="counter">7</ModusBadge>
				</div>

				<div className="grid-row">
					Counter Sizes
					<ModusBadge aria-label="Badge" size="sm" variant="counter">
						Small&nbsp;
					</ModusBadge>
					<ModusBadge aria-label="Badge" size="md" variant="counter">
						Medium&nbsp;
					</ModusBadge>
					<ModusBadge aria-label="Badge" size="lg" variant="counter">
						Large&nbsp;
					</ModusBadge>
					<ModusBadge aria-label="Badge" size="lg" variant="counter">22</ModusBadge>
					<ModusBadge aria-label="Badge" size="lg" variant="counter">333</ModusBadge>
					<ModusBadge aria-label="Badge" size="lg" variant="counter">4444</ModusBadge>
				</div>

				<div className="grid-row">
					Text
					<ModusBadge aria-label="Badge" variant="text">Primary</ModusBadge>
					<ModusBadge aria-label="Badge" color="secondary" variant="text">Secondary</ModusBadge>
					<ModusBadge aria-label="Badge" color="tertiary" variant="text">Tertiary</ModusBadge>
					<ModusBadge aria-label="Badge" color="high-contrast" variant="text">High Contrast</ModusBadge>
					<ModusBadge aria-label="Badge" color="success" variant="text">Success</ModusBadge>
					<ModusBadge aria-label="Badge" color="warning" variant="text">Warning</ModusBadge>
					<ModusBadge aria-label="Badge" color="danger" variant="text">Danger</ModusBadge>
				</div>

				<div className="grid-row">
					Text Sizes
					<ModusBadge aria-label="Badge" size="sm" variant="text">Small</ModusBadge>
					<ModusBadge aria-label="Badge" size="md" variant="text">Medium</ModusBadge>
					<ModusBadge aria-label="Badge" size="lg" variant="text">Large</ModusBadge>
				</div>
			</div>
		</>
	);
}
