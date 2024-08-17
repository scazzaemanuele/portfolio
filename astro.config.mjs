import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs({ entrypoint: "/alpine.config.ts" })],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
  },
});
