import { ModusWcCollapse as ModusCollapse } from "@trimble-cms/modus-wc-react";

export default function ModusCollapseExamples() {
	return (
		<>
			<h3>Collapse</h3>
			<div className="grid">
				<div className="grid-row">
					<ModusCollapse collapseTitle="Collapse Title">
						<p>
							Content
						</p>
					</ModusCollapse>
					<ModusCollapse collapseTitle="Alert" icon="alert">
						<p>
							Content
						</p>
					</ModusCollapse>
				</div>
			</div>
		</>
	);
}
