import notification from 'duct-notification'

export const useForm = defineStore('Form', () => {

    const FormCheck = ref({})

    const PostFormCareer = async () => {
        const nuxtApp = useNuxtApp()        

        await useCustomFetch('/form', {
            method : 'POST',
            query : {
                slug : 'kariyer'
            },
            body : FormCheck.value
        })
        .then(response => {
            if(!response.data.value.success){
                notification({
                    type : 'warning',
                    message : 'basarisiz',  
                    timer : 15000
                })
                return false
            }
            
            notification({
                type : 'success',
                message : 'basarili',
                timer : 15000
            })
            FormCheck.value = {}  
        })
    } 

    const PostFormContact = async () => {
        const nuxtApp = useNuxtApp()        

        await useCustomFetch('/form', {
            method : 'POST',
            query : {
                slug : 'iletisim'
            },
            body : FormCheck.value
        })
        .then(response => {
            if(!response.data.value.success){
                notification({
                    type : 'warning',
                    message : 'basarisiz',
                    timer : 15000
                })
                return false
            }
            
            notification({
                type : 'success',
                message : 'basarili',
                timer : 15000
            })
            FormCheck.value = {}  
        })
    } 

    return {
        FormCheck,
        PostFormCareer,
        PostFormContact
    }
})