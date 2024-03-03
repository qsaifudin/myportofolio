import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "Saifudin | Software Engineer",
    title: "Saifudin | Software Engineer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I am a professional developer more than 2 years of work experience. My main interest and focus right now is Software Engineer because I enjoy logical problem-solving.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "qsaifudin, https://qsaifudin.site, Software Developer, Software Engineer, Web Developer, JavaScript, PHP, Python, Portfolio, Projects",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        property: "og:title",
        content: "Saifudin | Software Engineer",
      },
      {
        property: "og:site_name",
        content: "qsaifudin",
      },
      {
        property: "og:image",
        content: "https://qsaifudin.site/favicon.png", // Replace with the URL of your image
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/iconify", { src: "@/plugins/toast.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
    icon: {
      fileName: "favicon.png?v3",
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          myPrimary: "#ffffff",
          accent: colors.grey.darken3,
          secondary: "#A2EBD5",
          secondaryBtn: "#1D3341",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          myPrimary: "#1D3341",
          secondary: "#10A08A",
          secondaryBtn: "#FFFFFF",
          accent: "#1D3341",
          error: "#1D3341",
          warning: "#1D3341",
          info: "#1D3341",
          success: "#1D3341",
        },
      },
    },
  },
  pageTransition: "my-page",
};
