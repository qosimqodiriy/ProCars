export default {
  head: {
    title: 'ProCars',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { hid: 'icon', rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/swiper@8/swiper-bundle.min.css',
      },
    ],

    script: [
      {
        src: 'https://unpkg.com/swiper@8/swiper-bundle.min.js',
      },
    ],
  },

  static: {
    prefix: false
  },

  css: [
    '@/assets/style.css',
    '@/assets/remixicon.css',
  ],

  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },

  plugins: [
    { src: "@/plugins/aos", mode: "client" },
    { src: "@/plugins/main", mode: "client" },
    { src: "@/plugins/vuetify", mode: "client" },
  ],

  components: true,

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  content: {},

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
