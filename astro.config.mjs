import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

export default defineConfig({
  site: "http://diegofhg.com",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    vue(),
  ],
});
