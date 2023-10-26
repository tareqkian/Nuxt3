export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    ['@nuxtjs/i18n', { /* Options */ }],
    ['nuxt-lodash', { prefix: "_", upperAfterPrefix: false }],
    ['nuxt-viewport', { /* Options */ }]
  ]
})
