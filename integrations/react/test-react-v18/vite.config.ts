import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		chunkSizeWarningLimit: 600,
		rollupOptions: {
			output: {
				manualChunks(id){
					if(id.includes('stencil-generated')){
						return 'modus-wc';
					}
					if(id.includes('node_modules')){
						return 'vendor';
					}
				}
			}
		}
	}
});
