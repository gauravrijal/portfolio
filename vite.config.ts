import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
    // Native FSEvents watching has proven unreliable at this path, silently
    // serving stale modules for hours. Polling trades CPU for correctness.
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
