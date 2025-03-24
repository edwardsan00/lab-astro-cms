// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import path from "path";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],

  // For generating static sites
  output: "static",

  vite: {
    resolve: {
      alias: {
        "@ecommerce/ui": path.resolve("../../packages/ui/dist"),
      },
    },
  },
});
