import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  css: ["~/assets/scss/global.css"],
  components: [
    {
      path: "~/components/navigation-bars",
      pathPrefix: false,
    },
    // {
    //   path: "~/components/buttons",
    //   pathPrefix: false,
    // },
    {
      path: "~/components/homepage",
      prefix: "Homepage",
    },
    {
      path: "~/components/servicesPage",
      prefix: "Services",
    },
    {
      path: "~/components/sellers",
      prefix: "Sellers",
    },
    {
      path: "~/components/call-to-actions",
      prefix: "Cta",
    },
    {
      path: "~/components/faqs",
      prefix: "Faq",
    },
    {
      path: "~/components/logos",
      prefix: "Logo",
    },
    {
      path: "~/components/footer",
      prefix: "Footer",
    },
    {
      path: "~/components/iconsPath",
      prefix: "Svg",
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  //...
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    [
      "nuxt-viewport",
      {
        viewport: {},
      },
    ],
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
