import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5172", // It's placeHolder, we will change it when docker will be set up
				changeOrigin: true,
			},
		},
	},
});
