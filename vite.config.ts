import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

// Keep root-relative URLs for robigo.co.uk while allowing Cloudflare Workers
// to package and deploy the same production build used by Pages.
export default defineConfig({
  base: "/",
  plugins: [react(), cloudflare()],
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
