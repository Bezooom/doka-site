import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://дока.рус",
  // HTML-aware whitespace (Astro 7 default is JSX stripping).
  compressHTML: true,
  integrations: [preact()],
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
  preview: {
    host: "0.0.0.0",
    port: 4321,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },
});
