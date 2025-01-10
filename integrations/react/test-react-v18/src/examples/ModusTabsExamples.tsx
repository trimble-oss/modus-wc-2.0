import { ModusWcTabs as ModusTabs } from "@trimble-cms/modus-wc-react";

export default function ModusTabsExamples() {
	type TabType = React.ComponentProps<typeof ModusTabs>['tabs'];

	type OnTabChange = React.ComponentProps<typeof ModusTabs>['onTabChange'];
	type ModusTabChangeEvent = Parameters<NonNullable<OnTabChange>>[0];

	const sampleTabs: TabType = [
		{ label: "Tab 1" },
		{ label: "Tab 2" },
		{ label: "Tab 3", disabled: true },
	];
	const sampleTabs2: TabType = [
		{ icon: "alert" },
		{ label: "Home", icon: "home", iconPosition: "left" },
		{ label: "Settings", icon: "settings", iconPosition: "right" },
	];

	function onTabChange(event: ModusTabChangeEvent) {
		if (!event) {
			return;
		}
		window.alert(`Tab changed to ${event.detail.newTab} from ${event.detail.previousTab}`);
	}

	return (
		<>
			<h3>Tabs</h3>
			<div className="grid">
				<div className="grid-row">
					Small
					<ModusTabs tabs={sampleTabs} size="sm">
						<p slot="tab-0">
							Content 0
						</p>
						<p slot="tab-1">
							Content 1
						</p>
						<p slot="tab-2">
							Hidden
						</p>
					</ModusTabs>
				</div>
				<div className="grid-row">
					Medium <ModusTabs tabs={sampleTabs} size="md" >
						<p slot="tab-0">
							Content 0
						</p>
						<p slot="tab-1">
							Content 1
						</p>
						<p slot="tab-2">
							Hidden
						</p>
					</ModusTabs>
				</div>
				<div className="grid-row">
					Large <ModusTabs tabs={sampleTabs} size="lg">
						<p slot="tab-0">
							Content 0
						</p>
						<p slot="tab-1">
							Content 1
						</p>
						<p slot="tab-2">
							Hidden
						</p>
					</ModusTabs>
				</div>
				<div className="grid-row">
					<ModusTabs tabs={sampleTabs2} size="sm" />
				</div>
				<div className="grid-row">
					<ModusTabs tabs={sampleTabs} onTabChange={onTabChange}/>
				</div>
			</div>
		</>
	);
}
