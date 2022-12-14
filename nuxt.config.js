export default {
  srcDir: 'src/',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
    port: 3333,
  },
  axios: {
    baseURL: 'http://localhost:9000/',
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Tekila Web Factory | créateur d'expériences digitales interactives",
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Tekila Web Factory vous accompagne dans la création de votre site web sur-mesure. Boostez votre référencement naturel grâce à des sites internet immersifs. Nous pensons que la créativité à sa place sur le web. Un site web original et performant, c'est possible !",
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  googleAnalytics: {
    id: 'G-YX2EH8N5NR',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vuelidate.js' }, { src: '~/plugins/jsonld' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/styles/global.scss'],
  styleResources: {
    scss: ['~/styles/_variables.scss'], // Mixins & variables declarations ONLY (no real CSS apart of some real CSS...)
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: ['@nuxtjs/axios'],
  modules: ['@nuxt/content'],
  content: {
    // Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  fallback: true,
}
