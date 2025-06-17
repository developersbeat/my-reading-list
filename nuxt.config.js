// File: nuxt.config.js
export default defineNuxtConfig({
  app: {
    head: {
      title: "My Reading List",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "A personal reading list built with Nuxt 3.",
        },
      ],
    },
  },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
});
// This configuration file sets up a Nuxt.js project with the following features:
// - Uses the `@nuxt/ui` module for UI components.
// - Integrates `@nuxtjs/tailwindcss` for styling
