import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://YOUR-DOMAIN.com", // <-- change to your real URL (needed for canonical, sitemap, OG)
  integrations: [tailwind(), sitemap()],
});
