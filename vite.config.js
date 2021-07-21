// based on eleventy-with-vite (https://github.com/fpapado/eleventy-with-vite)
// by Fotis Papadogeorgopoulos (https://github.com/fpapado)

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [legacy()],
  build: {
    outDir: "_site",
    assetsDir: "assets-vite", // default = "assets"
    // Sourcemaps are nice, but not critical for this to work
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      input: "/src/client/main.js",
    },
  },
});
