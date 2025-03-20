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
                    type: 'warning',
                    head: 'Warning',
                    message: 'There was an issue with your submission. Please try again.', 
                    timer : 15000
                })
                return false
            }
            
            notification({
                type: 'success',
                head: 'Success',
                message: 'Your form has been successfully submitted!',
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
                    type: 'warning',
                    head: 'Warning',
                    message: 'There was an issue with your submission. Please try again.', 
                    timer : 15000
                })
                return false
            }
            
            notification({
                type: 'success',
                head: 'Success',
                message: 'Your form has been successfully submitted!',
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