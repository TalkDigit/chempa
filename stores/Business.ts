export const useBusiness = defineStore('Business', () => {

    const BusinessState = ref(null)
    const Detay = ref(null)


    const fetchBusiness = async () => {

        await useCustomFetch('/moduldata/bussines-liste', {
            method : 'POST',
            query : {
                addtional : {
                    where : {
                        status : true
                    }
                }
            }
        })
        .then(response => {
            if(!response.data.value.success){
                return false
            }
            BusinessState.value = response.data.value.data
        })
    }

    const fetchDetay = async (e = null) => {
        const route = useRoute()
        const nuxtApp = useNuxtApp()
        let routeControl = route.params.slug
      
        await useCustomFetch('/moduldata/bussines-liste', {
            method : 'POST',
            query : {
                slug : routeControl,
                addtional : {
                    where : {
                        status : true
                    }
                }
            }
        })
        .then(response => {
            if(!response.data.value.success){
                throw createError({
                    statusCode: 404,
                    statusMessage: "Page Not Found",
                });
                return false
            }
            Detay.value = response.data.value.data
        })
    }

    return {
        BusinessState,
        fetchBusiness,

        fetchDetay,
        Detay
    }
})