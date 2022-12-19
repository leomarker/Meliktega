import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/signup": "http://localhost:5000/",
      "/api/login": "http://localhost:5000/",
    },
  },
  plugins: [react()],
});
