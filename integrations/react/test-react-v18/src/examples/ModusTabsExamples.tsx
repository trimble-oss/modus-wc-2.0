import { ModusWcTabs as ModusTabs } from "@trimble-cms/modus-wc-react";
// import { IModusWcTab } from "@trimble-cms/modus-wc-react/modus-wc-tabs";


export default function ModusTabsExamples() {
	// type ModusTabsProps = React.ComponentProps<typeof ModusTabs>
	// type ModusTabsTabsPropType = ModusTabsProps['tabs'];

	const sampleTabs: HTMLModusWcTabsElement = [
		{ label: "Tab 1" },
		{ label: "Tab 2" },
		{ label: "Tab 3", disabled: true },
	];
	const sampleTabs2: typeof ModusTabs['tabs'] = [
		{ icon: "alert" },
		{ label: "Home", icon: "home", iconPosition: "left" },
		{ label: "Settings", icon: "settings", iconPosition: "right" },
	];

	function onTabChange(event: React.ComponentProps<typeof ModusTabs>['onTabChange']) {
		window.alert(`Tab changed to ${event.newTab} from ${event.previousTab}`);
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
