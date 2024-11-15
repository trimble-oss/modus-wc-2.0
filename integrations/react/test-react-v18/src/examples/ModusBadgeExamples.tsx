import { ModusWcBadge as ModusBadge } from "@trimble-cms/modus-wc-react";

export default function ModusBadgeExamples() {
	return (
		<>
			<h3>Badge</h3>
			<div className="grid">
				<div className="grid-row">
					<ModusBadge content="Default" />
					<ModusBadge color="secondary" content="Secondary" />
					<ModusBadge color="tertiary" content="Tertiary" />
					<ModusBadge color="high-contrast" content="High Contrast" />
					<ModusBadge color="success" content="Success" />
					<ModusBadge color="warning" content="Warning" />
					<ModusBadge color="danger" content="Danger" />
				</div>

				<div className="grid-row">
					<ModusBadge size="sm" content="Small" />
					<ModusBadge size="md" content="Medium" />
					<ModusBadge size="lg" content="Large" />
				</div>

				<div className="grid-row">
					<ModusBadge variant="counter" content="1" />
					<ModusBadge color="secondary" variant="counter" content="2" />
					<ModusBadge color="tertiary" variant="counter" content="3" />
					<ModusBadge color="high-contrast" variant="counter" content="4" />
					<ModusBadge color="success" variant="counter" content="5" />
					<ModusBadge color="warning" variant="counter" content="6" />
					<ModusBadge color="danger" variant="counter" content="7" />
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
					<ModusBadge variant="text" content="Primary" />
					<ModusBadge color="secondary" variant="text" content="Secondary" />
					<ModusBadge color="high-contrast" variant="text" content="High Contrast" />
					<ModusBadge color="success" variant="text" content="Success" />
					<ModusBadge color="danger" variant="text" content="Danger" />
				</div>

				<div className="grid-row">
					<ModusBadge size="sm" variant="text" content="Small" />
					<ModusBadge size="md" variant="text" content="Medium" />
					<ModusBadge size="lg" variant="text" content="Large" />
				</div>
			</div>
		</>
	);
}
