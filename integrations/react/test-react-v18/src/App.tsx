import {
  ModusWcStyleLoader,
	ModusWcThemeProvider,
	ModusWcThemeSwitcher,
} from "@trimble-oss/moduswebcomponents-react";
import * as ModusReactExamples from "./examples";
import "./App.css";

function App() {
	return (
		<>
      <ModusWcStyleLoader />
			<ModusWcThemeProvider initialTheme={{ theme: "modus-modern" }}>
				<h1>Modus WC React Examples</h1>
				<div className="theme-toggle-switch">
					Toggle Theme &nbsp;
					<ModusWcThemeSwitcher aria-label="Toggle Theme" />
				</div>
				<div className="grid">
          <ModusReactExamples.Badge />
          <ModusReactExamples.Icon />
          <ModusReactExamples.Tabs />
			 </div>
			</ModusWcThemeProvider>
		</>
	);
}

export default App;
