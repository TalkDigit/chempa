import generalTr from './general/tr'
import generalEn from './general/en'

export default defineI18nConfig(() => ({
    legacy: false,
    locales: ['tr','en'],
    defaultLocale: 'tr',
    messages: {
        tr: {
            ...generalTr
          },
        en: {
            ...generalEn
        }
    }
  }))
  