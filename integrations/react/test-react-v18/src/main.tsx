import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");

// biome-ignore lint/style/noNonNullAssertion: React root element is always present in this context
const root = createRoot(rootElement!);
root.render(
	<StrictMode>
		<link
				rel="preload"
				href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
				as="style"
			/>
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
			/>
		<App />
	</StrictMode>,
);
