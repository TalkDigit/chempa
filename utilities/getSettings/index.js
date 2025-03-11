const getSettings = (e, item) => {
    const SettingsStore = useSettings(),
    nuxtApp = useNuxtApp()   

    const selectItem = SettingsStore.settings[e].find(e => e.key == item);
    return selectItem.value[nuxtApp.$i18n.locale.value] ?? selectItem.value.tr
}

export default getSettings