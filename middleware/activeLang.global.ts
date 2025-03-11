export default defineNuxtRouteMiddleware((to, from) => {
    const nuxtApp = useNuxtApp()
    if (to.meta.lang != undefined) {
        nuxtApp.$i18n.setLocale(to.meta.lang)
    } else { 
        nuxtApp.$i18n.setLocale('tr')
    }
})