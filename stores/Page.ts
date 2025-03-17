export const usePage = defineStore('Page', () => {

    const Page = ref(null)
    const HomePage = ref(null)
    const AboutPage = ref(null)
    const ProductsSliderPage = ref(null)
    const businessDetailsPage = ref(null)
    const productsDetailsPage = ref(null)
    
    

    const fetchHomePage = async (e = null) => {
        const route = useRoute()
        const nuxtApp = useNuxtApp()

        let routeControl = nuxtApp.$i18n.locale.value == 'tr' ? 'ana-sayfa' : 'home'         

        let pages = nuxtApp.$i18n.locale.value == 'tr' ? 'sayfalar' : 'pages'
        await useCustomFetch('/moduldata/' + pages, {
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
                Page.value = 404;
                return false
            }
            HomePage.value = response.data.value.data
        })
    }

    const fetchAbout = async (e = null) => {
        const route = useRoute()
        const nuxtApp = useNuxtApp()

        let routeControl = nuxtApp.$i18n.locale.value == 'tr' ? 'who-are-you' : 'who-are-you'         

        let pages = nuxtApp.$i18n.locale.value == 'tr' ? 'sayfalar' : 'pages'
        await useCustomFetch('/moduldata/' + pages, {
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
                Page.value = 404;
                return false
            }
            AboutPage.value = response.data.value.data
        })
    }

    const fetchProductsSlider = async (e = null) => {
        const route = useRoute()
        const nuxtApp = useNuxtApp()

        let routeControl = nuxtApp.$i18n.locale.value == 'tr' ? 'products' : 'products'         

        let pages = nuxtApp.$i18n.locale.value == 'tr' ? 'sayfalar' : 'pages'
        await useCustomFetch('/moduldata/' + pages, {
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
                Page.value = 404;
                return false
            }
            ProductsSliderPage.value = response.data.value.data
        })
    }
    const fetchbusinessDetails = async (e = null) => {
        const route = useRoute()
        const nuxtApp = useNuxtApp()

        let routeControl = nuxtApp.$i18n.locale.value == 'tr' ? 'Urunler' : 'Urunler'         

        let pages = nuxtApp.$i18n.locale.value == 'tr' ? 'sayfalar' : 'pages'
        await useCustomFetch('/moduldata/' + pages, {
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
                Page.value = 404;
                return false
            }
            businessDetailsPage.value = response.data.value.data
        })
    }

    const fetchproductsDetails = async (e = null) => {
        const route = useRoute()
        const nuxtApp = useNuxtApp()

        let routeControl = nuxtApp.$i18n.locale.value == 'tr' ? 'products-details' : 'products-details'         

        let pages = nuxtApp.$i18n.locale.value == 'tr' ? 'sayfalar' : 'pages'
        await useCustomFetch('/moduldata/' + pages, {
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
                Page.value = 404;
                return false
            }
            productsDetailsPage.value = response.data.value.data
        })
    }




    const fetchPage = async (e = null) => {
        const route = useRoute()
        const nuxtApp = useNuxtApp()
        let routeControl = route.params.page
      
        let pages = nuxtApp.$i18n.locale.value == 'tr' ? 'sayfalar' : 'pages'
        await useCustomFetch('/moduldata/' + pages, {
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
            Page.value = response.data.value.data
        })
    }

    

    return {
        HomePage,
        fetchHomePage,
        
        Page,
        fetchPage,

        AboutPage,
        fetchAbout,

        ProductsSliderPage,
        fetchProductsSlider,

        businessDetailsPage,
        fetchbusinessDetails,

        productsDetailsPage,
        fetchproductsDetails
    }
})