import {
	ModusWcThemeProvider,
	ModusWcThemeSwitcher,
} from "@trimble-oss/moduswebcomponents-react";
import "@trimble-oss/moduswebcomponents/modus-wc-styles.css";
import * as ModusReactExamples from "./examples";
import "./App.css";

function App() {
	return (
		<>
			<ModusWcThemeProvider initialTheme={{ theme: "modus-modern" }}>
				<h1>Modus WC React Examples</h1>
				<div className="theme-toggle-switch">
					Toggle Theme &nbsp;
					<ModusWcThemeSwitcher aria-label="Toggle Theme" />
				</div>
				<div className="grid">
				<ModusReactExamples.Badge />
				<ModusReactExamples.Icon />
			 </div>
			</ModusWcThemeProvider>
		</>
	);
}

export default App;
