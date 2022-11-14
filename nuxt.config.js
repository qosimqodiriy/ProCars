export default {
  head: {
    title: 'ProCars',
    htmlAttrs: {
      lang: 'uz',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        property: 'og:title',
        content: 'ProCars',
      },
      {
        property: 'title',
        content: 'ProCars',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:description',
        content: "JM mashinalaridan bezor bo'lgan okalarimiz uchun ajoyib mashinalar eng muhimi rastamojkasiz",
      },
      {
        property: 'description',
        content: "JM mashinalaridan bezor bo'lgan okalarimiz uchun ajoyib mashinalar eng muhimi rastamojkasiz",
      },
      // {
      //   property: 'og:fb',
      //   content: '505272027587494',
      // },
      {
        property: 'og:image',
        content: 'https://i.pinimg.com/originals/35/38/36/3538363f9be4aec0f2a3a899c76678f9.png',
      },
      {
        property: 'image',
        content: 'https://i.pinimg.com/originals/35/38/36/3538363f9be4aec0f2a3a899c76678f9.png',
      },
      {
        property: 'keywords',
        content: "Procars, mashina, jm, bmw, mersedes, rolls-royce, lamborghini, moshilanar",
      },
      {
        property: 'og:keywords',
        content: "Procars, mashina, jm, bmw, mersedes, rolls-royce, lamborghini, moshilanar",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
      },
    ],
  },

  static: {
    prefix: false
  },

  css: [
    '@/assets/style.css',
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

    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'uz'],
        defaultLocale: 'uz',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            uz: {
              greeting: 'Hello world!',
              mainText: "Siz eng yaxshisiga loyiqsiz",
              mainTitle: "Tezlik zavqini his eting",
              demonstrate: "Biz taqdim etadigan mashinalar",
            },
            en: {
              greeting: '¡Hola mundo!',
              mainText: "You are deserved to the best",
              mainTitle: "Feel the taste of speed",
              demonstrate: "The machines we provide",
            }
          }
        }
      }
    ]
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
