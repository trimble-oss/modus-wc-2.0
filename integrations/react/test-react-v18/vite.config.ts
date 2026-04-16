import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		fs: {
			allow: [
				path.resolve(__dirname),
				path.resolve(__dirname, '../v18/dist')
			]
		}
	},
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