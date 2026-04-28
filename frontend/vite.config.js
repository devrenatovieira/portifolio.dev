import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const apiTarget = process.env.VITE_DEV_API_TARGET || "http://127.0.0.1:4000";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: apiTarget,
        changeOrigin: true
      },
      "/uploads": {
        target: apiTarget,
        changeOrigin: true
      }
    }
  }
});
