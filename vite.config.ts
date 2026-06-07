import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: {
    allowedHosts: "all",
  },
  tanstackStart: {
    server: { entry: "server" },
    nitro: {
      preset: "vercel",
    },
  },
});