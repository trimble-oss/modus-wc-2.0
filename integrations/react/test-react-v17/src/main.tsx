import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");

ReactDOM.render(
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
	rootElement
);
