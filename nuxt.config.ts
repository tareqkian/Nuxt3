export default defineNuxtConfig({
  /*devtools: { enabled: true },*/
  app: {
    head: {
      title: 'Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'App Description' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [],
      script: []
    }
  },
  modules: [
    '@pinia/nuxt',
    ['@nuxtjs/i18n', { /* Options */ }],
    ['nuxt-lodash', { prefix: "_", upperAfterPrefix: false }],
    ['nuxt-viewport', { /* Options */ }]
  ],
  extends: [
    '@modules/auth'
  ]
})
