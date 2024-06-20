export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "nuxt-shiki",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: "",
  },
  site: {
    url: "https://components.yali.dev",
    name: "yusufalitangoz/components",
    description: "A collection of Vue components",
    defaultLocale: "en",
  },
  shiki: {
    bundledLangs: ["vue"],
    defaultLang: "vue",
  },
});