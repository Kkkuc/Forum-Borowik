import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5172", // It's placeHolder, we will change it when docker will be set up
				changeOrigin: true,
			},
		},
	},
});
