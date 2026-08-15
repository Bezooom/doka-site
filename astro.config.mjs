import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://дока.рус",
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
