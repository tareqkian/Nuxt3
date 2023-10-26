export default defineI18nConfig(() => ({
  legacy: false,
  availableLocales: ["en", "ar"],
  locale: 'en',
  messages: {
    en: {
      welcome: 'i18n Welcome'
    },
    ar: {
      welcome: 'مرحبا'
    }
  }
}))
