import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/

const apiTarget = process.env.VITE_API_URL || 'http://localhost:3000'
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 5000,
		proxy: {
			'/api': {
				target: apiTarget,
				changeOrigin: true,
			},
			'/auth': {
				target: apiTarget,
				changeOrigin: true,
			},
		},
	},
});
