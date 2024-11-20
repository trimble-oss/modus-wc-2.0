import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks(id){
					if(id.includes('stencil-generated')){
						return 'modus-wc';
					}
					else if(id.includes('node_modules')){
						return 'vendor';
					}
				}
			}
		}
	}
});
