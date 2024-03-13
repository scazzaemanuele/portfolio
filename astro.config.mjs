import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
  },
});
