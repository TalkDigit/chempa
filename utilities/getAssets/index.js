const getAssets = (e) => {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.cdnUri + e
}

export default getAssets