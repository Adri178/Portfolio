// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Ganti dengan domain produksi kamu agar sitemap & Open Graph URL benar.
  site: "https://raka-pratama.example.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
